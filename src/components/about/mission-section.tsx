import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Bus, ShieldCheck, Star, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function MissionSection() {
  const t = await getTranslations("aboutPage.mission");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const pillars = [
    {
      key: "people",
      icon: Users,
      iconColor: "text-[#ec4899]",
      iconBg: "bg-pink-50",
      title: t("pillars.peopleTitle"),
      subtitle: t("pillars.peopleSubtitle"),
    },
    {
      key: "security",
      icon: ShieldCheck,
      iconColor: "text-[#1280e6]",
      iconBg: "bg-blue-50",
      title: t("pillars.securityTitle"),
      subtitle: t("pillars.securitySubtitle"),
    },
    {
      key: "mobility",
      icon: Bus,
      iconColor: "text-[#16a34a]",
      iconBg: "bg-emerald-50",
      title: t("pillars.mobilityTitle"),
      subtitle: t("pillars.mobilitySubtitle"),
    },
    {
      key: "experience",
      icon: Star,
      iconColor: "text-[#f59e0b] fill-[#f59e0b]",
      iconBg: "bg-amber-50",
      title: t("pillars.experienceTitle"),
      subtitle: t("pillars.experienceSubtitle"),
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Grid wrapper stays LTR layout: Driver on left, Mission on right */}
        <div
          dir="ltr"
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12"
        >
          {/* Left Column: Driver Card with exact slanted cadre & script badge */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative w-full drop-shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src="/about/mission-driver-card.webp"
                alt={t("driverImageAlt")}
                width={1200}
                height={540}
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                quality={95}
                className="h-auto w-full object-contain"
              />

              {/* Script badge in top right over windshield */}
              <div
                className="font-accent pointer-events-none absolute right-[9%] top-[7%] z-10 -rotate-[10deg] text-left select-none text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.75),0_6px_18px_rgba(0,0,0,0.5)] sm:right-[10%] sm:top-[8%] md:right-[11%]"
                dir={isRtl ? "rtl" : "ltr"}
                aria-hidden
              >
                <span className="block text-lg font-bold tracking-wide sm:text-2xl lg:text-[25px] xl:text-[27px]">
                  {t("driverBadge1")}
                </span>
                <span className="block pl-2 text-lg font-bold tracking-wide sm:pl-3 sm:text-2xl lg:text-[25px] xl:text-[27px]">
                  {t("driverBadge2")}
                </span>
                <span className="block pl-3.5 text-lg font-bold tracking-wide sm:pl-5 sm:text-2xl lg:text-[25px] xl:text-[27px]">
                  {t("driverBadge3")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Content + 4 Cards */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex flex-col justify-center lg:col-span-7 xl:col-span-7",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {/* Eyebrow */}
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12.5px]">
              {t("eyebrow")}
            </p>

            {/* Heading */}
            <h2 className="mt-2 text-2xl font-extrabold leading-[1.2] tracking-tight text-[#091e52] sm:text-3xl lg:text-[34px] xl:text-[36px]">
              <span className="block">{t("titleLine1")}</span>
              <span className="block">{t("titleLine2")}</span>
            </h2>

            {/* Description */}
            <p className="mt-3.5 max-w-[640px] text-[13.5px] font-medium leading-[1.7] text-[#2d3e66]/90 sm:text-[14.5px] lg:text-[15px]">
              {t("description")}
            </p>

            {/* 4 Feature Cards */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5 lg:gap-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.key}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-3 py-4 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-3 sm:py-5"
                  >
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 sm:size-12",
                        pillar.iconBg
                      )}
                    >
                      <IconComponent
                        className={cn("size-5 sm:size-6", pillar.iconColor)}
                        aria-hidden
                      />
                    </div>
                    <span className="mt-2.5 text-[12.5px] font-bold leading-tight text-[#091e52] sm:text-[13.5px]">
                      {pillar.title}
                    </span>
                    <span className="mt-1 text-[11px] font-medium leading-tight text-slate-500 sm:text-[11.5px]">
                      {pillar.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
