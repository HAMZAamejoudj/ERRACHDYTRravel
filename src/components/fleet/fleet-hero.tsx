import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Settings, Shield, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

/** Same desktop wash as home, services, and about. */
const HERO_SKY =
  "bg-[linear-gradient(90deg,#d4eefb_0%,#e4f5fc_16%,rgba(196,222,244,0.2)_30%,transparent_40%)]";

const HERO_TOP =
  "bg-[radial-gradient(ellipse_26%_18%_at_24%_17%,rgba(72,162,222,0.55)_0%,rgba(116,188,232,0.3)_48%,transparent_76%)]";

const HERO_FADE =
  "bg-[linear-gradient(90deg,#f7fbfe_0%,#f7fbfe_36%,rgba(247,251,254,0.4)_44%,transparent_52%)] [mask-image:linear-gradient(180deg,transparent_0%,transparent_22%,#000_34%,#000_76%,transparent_88%)] [-webkit-mask-image:linear-gradient(180deg,transparent_0%,transparent_22%,#000_34%,#000_76%,transparent_88%)]";

export async function FleetHero() {
  const t = await getTranslations("fleetPage.hero");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const features = [
    {
      icon: Shield,
      title: t("features.vehiclesTitle"),
      sub: t("features.vehiclesSub"),
      iconClass: "text-[#1280e6] fill-[#1280e6]/20 stroke-[#1280e6] stroke-[2.2]",
    },
    {
      icon: Users,
      title: t("features.comfortTitle"),
      sub: t("features.comfortSub"),
      iconClass: "text-[#1280e6] fill-[#1280e6]",
    },
    {
      icon: Settings,
      title: t("features.maintenanceTitle"),
      sub: t("features.maintenanceSub"),
      iconClass: "text-[#1280e6] fill-[#1280e6]",
    },
  ];

  return (
    <>
      {/* Mobile view (< md) */}
      <section className="block bg-white md:hidden rounded-b-[24px] overflow-hidden shadow-sm">
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#f3f8fe]">
          <Image
            src="/services/Bannière transport avec autocars et palmiers.png"
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-right"
          />
        </div>

        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={cn(
            "relative z-10 -mt-4 rounded-t-[28px] bg-white px-5 pt-5 pb-8 shadow-[0_-12px_32px_rgba(15,23,42,0.06)] sm:-mt-5 sm:px-8",
            isRtl ? "text-right" : "text-left"
          )}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12px]">
            {t("eyebrow")}
          </p>

          {/* Title */}
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#07246b] sm:text-3xl leading-[1.18]">
            {t("titlePart1")}
            <span className="mt-1 block">{t("titlePart2")}</span>
            <span className="block text-[#0070e0]">{t("titlePart3")}</span>
          </h1>

          {/* Description */}
          <p className="mt-2.5 text-[13.5px] font-semibold leading-relaxed text-[#2c3e66]">
            {t("description")}
          </p>

          {/* 3 Key Highlights Strip for Mobile */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <div className="flex flex-col gap-3.5">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-blue-100/90 text-[#1280e6]">
                      <Icon className={cn("size-5", feature.iconClass)} aria-hidden />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[13px] font-bold text-[#07246b]">
                        {feature.title}
                      </span>
                      <span className="text-[11.5px] font-semibold text-[#1e3a8a]/85 mt-0.5">
                        {feature.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop view (md+) */}
      <section
        dir="ltr"
        className="relative isolate hidden overflow-hidden rounded-b-[16px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:block sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] xl:min-h-[740px]"
        aria-label={t("titlePart1")}
      >
        {/* Background Vehicle Image & seamless soft blend */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/services/Bannière transport avec autocars et palmiers.png"
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-right"
          />
          <div dir="ltr" className="absolute inset-0" aria-hidden>
            <div className={cn("absolute inset-0", HERO_SKY)} />
            <div className={cn("absolute inset-0", HERO_TOP)} />
            <div className={cn("absolute inset-0", HERO_FADE)} />
          </div>
        </div>

        {/* Hero Content Container on the Left */}
        <div className="relative z-10 mx-auto flex h-full min-h-[620px] w-full max-w-[1536px] flex-col justify-center px-4 sm:px-6 md:min-h-[660px] md:px-12 lg:min-h-[700px] lg:px-16 xl:min-h-[740px] xl:px-20">
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "w-full",
              isRtl
                ? "max-w-[420px] text-right sm:max-w-[440px] lg:max-w-[460px]"
                : "max-w-[560px] text-left lg:max-w-[620px] xl:max-w-[680px]"
            )}
          >
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12.5px] lg:text-[13px]">
              {t("eyebrow")}
            </p>

            {/* Main H1 Title */}
            <h1 className="mt-2.5 text-[1.75rem] font-extrabold leading-[1.14] tracking-tight text-[#07246b] sm:text-[1.85rem] md:text-[1.9rem] lg:text-[2rem] xl:text-[2.05rem]">
              {t("titlePart1")}
              <span className="mt-1 block sm:mt-1.5">
                {t("titlePart2")}
              </span>
              <span className="block text-[#0070e0]">{t("titlePart3")}</span>
            </h1>

            {/* Description */}
            <p
              className={cn(
                "mt-3.5 max-w-[460px] text-[15px] font-semibold leading-relaxed text-[#2c3e66] sm:text-[16px]",
                isRtl && "ml-auto"
              )}
            >
              {t("description")}
            </p>

            {/* 3 Key Highlights Strip matching mockup */}
            <div className="mt-7 pt-1 sm:mt-8">
              <div
                className={cn(
                  "flex flex-col gap-3.5 sm:flex-row sm:items-center",
                  isRtl ? "sm:gap-3" : "sm:gap-4 lg:gap-5"
                )}
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 lg:gap-5">
                      <div
                        className={cn(
                          "flex items-center gap-3",
                          isRtl ? "text-right" : "text-left"
                        )}
                      >
                        {/* Round white circle with blue icon */}
                        <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-blue-100/90 text-[#1280e6]">
                          <Icon
                            className={cn("size-5 sm:size-5.5", feature.iconClass)}
                            aria-hidden
                          />
                        </div>
                        {/* Title & subtitle */}
                        <div className="flex flex-col leading-tight">
                          <span className="text-[13px] sm:text-[13.5px] font-bold text-[#07246b]">
                            {feature.title}
                          </span>
                          <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#1e3a8a]/85 mt-0.5 whitespace-nowrap">
                            {feature.sub}
                          </span>
                        </div>
                      </div>
                      {/* Vertical divider between items (except last) */}
                      {idx < features.length - 1 && (
                        <div
                          className="hidden sm:block h-8 w-px bg-slate-200/90 shrink-0"
                          aria-hidden
                        />
                      )}
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
