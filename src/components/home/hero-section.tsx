import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Armchair,
  ArrowRight,
  ChevronLeft,
  Mail,
  Phone,
  Shield,
  Users,
} from "lucide-react";

import { HeroTitle } from "@/components/home/hero-title";
import { Link } from "@/i18n/navigation";
import { isRtlLocale } from "@/lib/locale";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Shared with French — bus on the right, white fade on the left. */
const DESKTOP_HERO_IMAGE =
  "object-[88%_center] sm:object-[87%_center] md:object-[86%_center] lg:object-[85%_center] xl:object-[84%_center]";

const MOBILE_HERO_IMAGE = "object-[70%_42%] sm:object-[68%_40%]";

const HERO_GRADIENT =
  "bg-[linear-gradient(90deg,#f3f8fe_0%,#f3f8fe_22%,rgba(226,239,252,0.95)_29%,rgba(198,222,244,0.38)_36%,transparent_43%)]";

export async function HeroSection() {
  const t = await getTranslations("hero");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const description = isRtl
    ? t.rich("description", {
        brand: (chunks) => (
          <span dir="ltr" lang="en" className="unicode-bidi-embed">
            {chunks}
          </span>
        ),
      })
    : t("description");

  return (
    <>
      {/* Mobile — same photo framing as French; Arabic copy is RTL in the sheet */}
      <section className="block bg-white md:hidden">
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-100 sm:h-[430px]">
          <Image
            src={siteConfig.heroImageSrc}
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className={cn("object-cover", MOBILE_HERO_IMAGE)}
          />
        </div>

        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={cn(
            "relative z-10 -mt-4 rounded-t-[32px] bg-white px-5 pt-6 pb-6 shadow-[0_-12px_32px_rgba(15,23,42,0.08)] sm:-mt-5",
            isRtl ? "text-right" : "text-left"
          )}
        >
          <p
            className={cn(
              "flex items-center gap-1.5 font-bold text-[#1a6ef5]",
              isRtl
                ? "flex-row-reverse justify-center text-[12px] tracking-normal"
                : "text-[11px] uppercase tracking-[0.16em]"
            )}
          >
            {isRtl && (
              <ChevronLeft className="size-3.5 shrink-0 text-[#1a6ef5]" aria-hidden />
            )}
            {t("tagline")}
          </p>

          <HeroTitle variant="mobile" />

          <p
            className={cn(
              "mt-2.5 text-[13px] leading-relaxed",
              isRtl ? "font-bold leading-[1.75] text-slate-900" : "font-medium text-slate-700"
            )}
          >
            {description}
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href="/contact#formulaire-contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1280e6] to-[#0c6bc7] px-5 text-[14.5px] font-semibold text-white shadow-md shadow-blue-500/25 active:scale-[0.99]"
            >
              {!isRtl && <Mail className="size-4" aria-hidden />}
              <span>{t("ctaQuote")}</span>
              <ArrowRight
                className={cn("size-4", isRtl && "rotate-180")}
                aria-hidden
              />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#1280e6] bg-white px-5 text-[14.5px] font-semibold text-[#091e52] active:scale-[0.99]"
            >
              <Phone className="size-4 text-[#1280e6]" aria-hidden />
              <span>{t("contactUs")}</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-blue-50 text-[#1280e6]">
                <Shield className="size-5" aria-hidden />
              </div>
              <p className="mt-2 text-[11px] font-bold leading-tight text-[#091e52]">
                {t("mobileSafe1")}
                <br />
                {t("mobileSafe2")}
              </p>
            </div>
            <div className="h-8 w-px bg-slate-200/80" aria-hidden />
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                <Armchair className="size-5" aria-hidden />
              </div>
              <p className="mt-2 text-[11px] font-bold leading-tight text-[#091e52]">
                {t("mobileComfort1")}
                <br />
                {t("mobileComfort2")}
              </p>
            </div>
            <div className="h-8 w-px bg-slate-200/80" aria-hidden />
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                <Users className="size-5" aria-hidden />
              </div>
              <p className="mt-2 text-[11px] font-bold leading-tight text-[#091e52]">
                {t("mobileSolutions1")}
                <br />
                {t("mobileSolutions2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop — visual shell stays LTR (same as French); Arabic text column is RTL */}
      {/* Desktop — visual shell stays LTR (same as French); Arabic text column is RTL */}
      <section
        dir="ltr"
        className="relative isolate hidden min-h-[580px] overflow-hidden rounded-b-[28px] bg-white md:block sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] lg:rounded-b-[36px] xl:min-h-[750px] xl:rounded-b-[40px]"
      >
        <div className="absolute inset-0">
          <Image
            src={siteConfig.heroImageSrc}
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className={cn("object-cover", DESKTOP_HERO_IMAGE)}
          />
          <div className={cn("absolute inset-0", HERO_GRADIENT)} aria-hidden />
        </div>

        <div
          className="font-accent pointer-events-none absolute right-[11%] top-[14%] z-10 -rotate-[6deg] select-none text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.75),0_6px_18px_rgba(0,0,0,0.5)] lg:right-[16%] lg:top-[13%] xl:right-[19%] xl:top-[12%]"
          dir={isRtl ? "rtl" : "ltr"}
          aria-hidden
        >
          <span className="block text-xl font-bold tracking-wide lg:text-[26px] xl:text-[28px]">
            {t("scriptLine1")}
          </span>
          <span className="block pl-4 text-xl font-bold tracking-wide lg:pl-5 lg:text-[26px] xl:text-[28px]">
            {t("scriptLine2")}
          </span>
          <span className="relative block pl-8 text-xl font-bold tracking-wide lg:pl-10 lg:text-[26px] xl:text-[28px]">
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

        <div
          className={cn(
            "relative z-[1] mx-auto flex min-h-[520px] w-full max-w-[1536px] flex-col items-start justify-center pt-16 pb-6 sm:min-h-[550px] sm:pt-18 sm:pb-8 md:min-h-[580px] lg:min-h-[620px] lg:pt-18 lg:pb-8 xl:min-h-[660px]",
            "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
          )}
        >
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "w-full",
              isRtl
                ? "flex max-w-[430px] flex-col items-center text-center sm:max-w-[450px] lg:max-w-[500px]"
                : "max-w-[440px] text-left sm:max-w-[480px] lg:max-w-[540px]"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2 font-bold",
                isRtl ? "justify-center" : "justify-start"
              )}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100/90 bg-blue-50/80 px-3.5 py-1 text-[13px] font-bold text-[#1280e6] shadow-2xs sm:text-[13.5px]">
                {isRtl && (
                  <ChevronLeft className="size-4 shrink-0 text-[#1280e6]" aria-hidden />
                )}
                <span>{t("tagline")}</span>
                {!isRtl && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1280e6]" aria-hidden />
                )}
              </span>
            </div>

            <HeroTitle variant="desktop" />

            <p
              className={cn(
                isRtl
                  ? "mt-3 max-w-[440px] text-center text-[14.5px] font-semibold leading-[1.7] text-slate-800 sm:text-[15.5px] sm:font-bold sm:text-slate-900"
                  : "mt-3 max-w-[440px] text-left text-[14px] font-medium leading-relaxed text-slate-700 sm:text-[15px]"
              )}
            >
              {description}
            </p>

            <div
              className={cn(
                "mt-5 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-3",
                isRtl ? "justify-center" : "justify-start"
              )}
            >
              <Link
                href="/contact#formulaire-contact"
                className={cn(
                  "group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#1280e6] to-[#0c6bc7] font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35 active:translate-y-0",
                  isRtl ? "h-11.5 px-6.5 text-[15px]" : "h-11 px-5.5 text-[14px]"
                )}
              >
                {!isRtl && (
                  <Mail
                    className="size-4 transition-transform group-hover:scale-110"
                    aria-hidden
                  />
                )}
                <span>{t("ctaQuote")}</span>
                <ArrowRight
                  className={cn(
                    "size-4 transition-transform",
                    isRtl
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  )}
                  aria-hidden
                />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className={cn(
                  "group inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-slate-200/90 bg-white/95 font-bold text-[#091e52] shadow-xs backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-white hover:text-[#1280e6] hover:shadow-md active:translate-y-0",
                  isRtl ? "h-11.5 px-6.5 text-[15px]" : "h-11 px-5.5 text-[14px]"
                )}
              >
                <Phone
                  className="size-4 text-[#1280e6] transition-transform group-hover:rotate-12"
                  aria-hidden
                />
                <span>{t("contactUs")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
