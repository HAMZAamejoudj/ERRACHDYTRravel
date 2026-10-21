import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ChevronLeft, Settings, Shield, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

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
          {/* Eyebrow */}
          <div className="flex items-center justify-start gap-1.5 font-bold">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100/90 bg-blue-50/80 px-3 py-1 text-[11.5px] font-bold text-[#1280e6] shadow-2xs">
              {isRtl && (
                <ChevronLeft className="size-3.5 shrink-0 text-[#1280e6]" aria-hidden />
              )}
              <span>{t("eyebrow")}</span>
              {!isRtl && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#1280e6]" aria-hidden />
              )}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#07246b] sm:text-3xl leading-[1.18]">
            {t("titlePart1")}
            <span className="mt-1 block text-[#0070e0]">{t("titlePart2")}</span>
            <span className="block text-[#0070e0]">{t("titlePart3")}</span>
          </h1>

          {/* Description */}
          <p className="mt-2.5 text-[13.5px] font-medium leading-relaxed text-slate-700">
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
        className="relative isolate hidden overflow-hidden rounded-b-[28px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:block sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] lg:rounded-b-[36px] xl:min-h-[740px] xl:rounded-b-[40px]"
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
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#f3f8fe_0%,#f3f8fe_20%,rgba(243,248,254,0.92)_34%,rgba(243,248,254,0.55)_46%,rgba(243,248,254,0.12)_58%,transparent_68%)]"
            aria-hidden
          />
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
            {/* Eyebrow badge */}
            <div className="flex items-center justify-start gap-2 font-bold">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100/90 bg-blue-50/80 px-3.5 py-1 text-[12px] sm:text-[12.5px] font-bold text-[#1280e6] shadow-2xs">
                {isRtl && (
                  <ChevronLeft className="size-3.5 shrink-0 text-[#1280e6]" aria-hidden />
                )}
                <span>{t("eyebrow")}</span>
                {!isRtl && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1280e6]" aria-hidden />
                )}
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="mt-2.5 text-[1.75rem] font-extrabold leading-[1.14] tracking-tight text-[#07246b] sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.65rem]">
              {t("titlePart1")}
              <span className="mt-1 block text-[#0070e0] sm:mt-1.5">
                {t("titlePart2")}
              </span>
              <span className="block text-[#0070e0]">{t("titlePart3")}</span>
            </h1>

            {/* Description */}
            <p
              className={cn(
                "mt-3.5 max-w-[460px] text-[14.5px] font-medium leading-relaxed text-slate-700 sm:text-[15.5px]",
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
