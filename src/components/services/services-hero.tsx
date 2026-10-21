import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  ArrowRight,
  BusFront,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { isRtlLocale } from "@/lib/locale";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const DESKTOP_HERO_IMAGE =
  "object-[88%_center] sm:object-[87%_center] md:object-[86%_center] lg:object-[85%_center] xl:object-[84%_center]";

const MOBILE_HERO_IMAGE = "object-[72%_center] sm:object-[75%_center]";

/** Light sky on the far left. White is a flat panel behind the copy, not a lens. */
const HERO_SKY =
  "bg-[linear-gradient(90deg,#d4eefb_0%,#e4f5fc_16%,rgba(196,222,244,0.2)_30%,transparent_40%)]";

/** A little sky blue only in the pale patch above the title. */
const HERO_TOP =
  "bg-[radial-gradient(ellipse_26%_18%_at_24%_17%,rgba(72,162,222,0.55)_0%,rgba(116,188,232,0.3)_48%,transparent_76%)]";

const HERO_FADE =
  "bg-[linear-gradient(90deg,#f7fbfe_0%,#f7fbfe_36%,rgba(247,251,254,0.4)_44%,transparent_52%)] [mask-image:linear-gradient(180deg,transparent_0%,transparent_22%,#000_34%,#000_76%,transparent_88%)] [-webkit-mask-image:linear-gradient(180deg,transparent_0%,transparent_22%,#000_34%,#000_76%,transparent_88%)]";

export async function ServicesHero() {
  const t = await getTranslations("servicesPage.hero");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const features = [
    {
      icon: ShieldCheck,
      text: t("features.security"),
    },
    {
      icon: Users,
      text: t("features.drivers"),
    },
    {
      icon: Settings,
      text: t("features.vehicles"),
    },
    {
      icon: MapPin,
      text: t("features.morocco"),
    },
  ];

  return (
    <>
      {/* Mobile view (< md) — Matching home/about mobile layout */}
      <section className="block bg-white md:hidden">
        <div className="relative h-[340px] w-full overflow-hidden bg-slate-100 sm:h-[380px]">
          <Image
            src="/services/hero_bus_v2.webp"
            alt={t("busAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className={cn("object-cover", MOBILE_HERO_IMAGE)}
          />
          {/* Header covers the top 4.75rem of the photo. Keep the script under it, on the mountain. */}
          <div
            className="font-accent pointer-events-none absolute left-3 top-[5.15rem] z-10 -rotate-6 select-none text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_3px_12px_rgba(0,0,0,0.65)] sm:left-4 sm:top-[5.5rem]"
            dir={isRtl ? "rtl" : "ltr"}
            aria-hidden
          >
            <span className="block text-[20px] font-bold leading-[1.15] sm:text-[22px]">
              {t("scriptLine1")}
            </span>
            <span className={cn("block text-[20px] font-bold leading-[1.15] sm:text-[22px]", isRtl ? "pr-2" : "pl-2")}>
              {t("scriptLine2")}
            </span>
            <span className={cn("block text-[20px] font-bold leading-[1.15] sm:text-[22px]", isRtl ? "pr-4" : "pl-4")}>
              {t("scriptLine3")}
            </span>
          </div>
        </div>

        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={cn(
            "relative z-10 -mt-5 rounded-t-[32px] bg-white px-5 pt-7 pb-8 shadow-[0_-12px_32px_rgba(15,23,42,0.08)] sm:-mt-6 sm:px-8",
            isRtl ? "text-right" : "text-left"
          )}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12px]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#07246b] sm:text-4xl leading-[1.12]">
            {t("title")}
          </h1>

          <p className="mt-3.5 text-[14px] font-semibold leading-[1.7] text-[#2c3e66] sm:text-[15px]">
            {t("description")}
          </p>

          <div
            className={cn(
              "mt-6 flex flex-wrap items-center gap-3",
              isRtl && "flex-row-reverse justify-end"
            )}
          >
            <Link
              href="/contact#formulaire-contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0070e0] px-5 py-3 text-[14px] font-bold text-white shadow-md transition-all active:scale-[0.99]"
            >
              <BusFront className="size-4 shrink-0" aria-hidden />
              <span>{t("ctaQuote")}</span>
              <ArrowRight
                className={cn("size-4 shrink-0", isRtl && "rotate-180")}
                aria-hidden
              />
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#0070e0] bg-white px-5 py-3 text-[14px] font-bold text-[#0070e0] shadow-sm transition-all active:scale-[0.99]"
            >
              <Phone className="size-4 shrink-0 fill-current" aria-hidden />
              <span>{t("ctaContact")}</span>
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3.5 border-t border-slate-100 pt-5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center gap-2",
                    isRtl ? "flex-row-reverse text-right" : "flex-row text-left"
                  )}
                >
                  <div className="flex size-7 shrink-0 items-center justify-center text-[#0070e0]">
                    <Icon className="size-5 shrink-0 stroke-[2.2]" aria-hidden />
                  </div>
                  <span className="whitespace-pre-line text-[11.5px] font-bold leading-tight text-[#07246b]">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Desktop view (md+) — Matching Home hero: full bleed image with smooth linear gradient blend */}
      <section
        dir="ltr"
        className="relative isolate hidden min-h-[580px] overflow-hidden rounded-b-[28px] bg-white md:block sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] lg:rounded-b-[36px] xl:min-h-[740px] xl:rounded-b-[40px]"
      >
        {/* Full background image + smooth CSS blend gradient matching Home */}
        <div className="absolute inset-0">
          <Image
            src="/services/hero_bus_v2.webp"
            alt={t("busAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className={cn("object-cover", DESKTOP_HERO_IMAGE)}
          />
          <div dir="ltr" className="absolute inset-0" aria-hidden>
            <div className={cn("absolute inset-0", HERO_SKY)} />
            <div className={cn("absolute inset-0", HERO_TOP)} />
            <div className={cn("absolute inset-0", HERO_FADE)} />
          </div>
        </div>

        {/* Tilted handwritten script floating in the open sky above the bus — matching Home */}
        <div
          className={cn(
            "font-accent pointer-events-none absolute z-10 -rotate-6 select-none text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.75),0_6px_18px_rgba(0,0,0,0.5)]",
            "right-[42%] top-[14%] lg:right-[44%] lg:top-[13%] xl:right-[46%] xl:top-[12%]"
          )}
          dir={isRtl ? "rtl" : "ltr"}
          aria-hidden
        >
          <span className="block text-[15px] font-bold tracking-wide lg:text-[18px] xl:text-[20px]">
            {t("scriptLine1")}
          </span>
          <span className="block pl-4 text-[15px] font-bold tracking-wide lg:pl-5 lg:text-[18px] xl:text-[20px]">
            {t("scriptLine2")}
          </span>
          <span className="relative block pl-8 text-[15px] font-bold tracking-wide lg:pl-10 lg:text-[18px] xl:text-[20px]">
            <span className="relative inline-block">
              {t("scriptLine3")}
              <svg
                className="absolute -bottom-1 left-0 h-[7px] w-full text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C28 3 68 3 98 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </div>

        {/* Content Container on the Left — aligned with site max width */}
        <div className="relative z-[1] mx-auto flex min-h-[580px] w-full max-w-[1536px] flex-col justify-center px-4 pt-24 pb-12 sm:min-h-[620px] sm:px-6 sm:pt-28 md:min-h-[660px] md:px-12 md:pt-32 lg:min-h-[700px] lg:px-16 lg:pt-36 xl:min-h-[740px] xl:px-20 xl:pt-40">
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "w-full max-w-lg lg:max-w-[520px] xl:max-w-[560px]",
              isRtl ? "pr-20 text-right md:pr-28 lg:pr-32" : "text-left"
            )}
          >
            {/* Eyebrow */}
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12.5px] lg:text-[13px]">
              {t("eyebrow")}
            </p>

            {/* H1 Title */}
            <h1 className="mt-2 text-4xl font-black tracking-tight text-[#07246b] sm:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.08]">
              {t("title")}
            </h1>

            {/* Description */}
            <p className="mt-4 text-[15px] font-semibold leading-[1.68] text-[#2c3e66] sm:mt-5 sm:text-[16px]">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8 sm:gap-4",
                isRtl && "flex-row-reverse justify-end"
              )}
            >
              <Link
                href="/contact#formulaire-contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0070e0] px-6 py-3.5 text-[14.5px] font-bold text-white shadow-[0_4px_16px_rgba(0,112,224,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#005ec2] hover:shadow-[0_6px_22px_rgba(0,112,224,0.45)]"
              >
                <BusFront
                  className="size-4 shrink-0 transition-transform group-hover:scale-110"
                  aria-hidden
                />
                <span>{t("ctaQuote")}</span>
                <ArrowRight
                  className={cn(
                    "size-4 shrink-0 transition-transform group-hover:translate-x-1",
                    isRtl && "rotate-180 group-hover:-translate-x-1"
                  )}
                  aria-hidden
                />
              </Link>

              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#0070e0] bg-white px-6 py-3.5 text-[14.5px] font-bold text-[#0070e0] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-50/80 hover:text-[#005ec2]"
              >
                <Phone className="size-4 shrink-0 fill-current" aria-hidden />
                <span>{t("ctaContact")}</span>
              </a>
            </div>

            {/* 4 Feature Badges */}
            <div className="mt-8 sm:mt-10">
              <div
                className={cn(
                  "grid grid-cols-2 gap-x-5 gap-y-4",
                  isRtl
                    ? "sm:flex sm:w-max sm:max-w-none sm:flex-nowrap sm:items-center sm:gap-x-6 md:-mr-8 lg:-mr-14"
                    : "sm:grid-cols-4 sm:gap-3"
                )}
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className={cn(
                        "flex items-center gap-2.5",
                        isRtl ? "shrink-0 flex-row-reverse text-right" : "flex-row text-left"
                      )}
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center text-[#0070e0]">
                        <Icon className="size-5 shrink-0 stroke-[2.2]" aria-hidden />
                      </div>
                      <span className="whitespace-pre-line text-[12px] font-bold leading-tight text-[#07246b] sm:text-[12.5px]">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
