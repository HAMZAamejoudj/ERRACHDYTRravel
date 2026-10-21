import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Armchair, Briefcase, Handshake, Lock } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function VisionValuesSection() {
  const t = await getTranslations("aboutPage.visionValues");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const values = [
    {
      key: "security",
      icon: Lock,
      iconColor: "text-[#1280e6]",
      iconBg: "bg-blue-50",
      title: t("values.securityTitle"),
      desc: t("values.securityDesc"),
    },
    {
      key: "professionalism",
      icon: Briefcase,
      iconColor: "text-[#ec4899]",
      iconBg: "bg-pink-50",
      title: t("values.professionalismTitle"),
      desc: t("values.professionalismDesc"),
    },
    {
      key: "comfort",
      icon: Armchair,
      iconColor: "text-[#16a34a]",
      iconBg: "bg-emerald-50",
      title: t("values.comfortTitle"),
      desc: t("values.comfortDesc"),
    },
    {
      key: "respect",
      icon: Handshake,
      iconColor: "text-[#f59e0b]",
      iconBg: "bg-amber-50/80 border border-amber-200/80",
      title: t("values.respectTitle"),
      desc: t("values.respectDesc"),
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main wrapper stays LTR layout (Vision on left, Girl in middle, Values on right) */}
        <div
          dir="ltr"
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8"
        >
          {/* 1. Left Part: NOTRE VISION */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex flex-col lg:col-span-4 xl:col-span-4",
              isRtl ? "text-right" : "text-left"
            )}
          >
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12.5px]">
              {t("vision.eyebrow")}
            </p>

            <h2 className="mt-2 text-xl font-extrabold leading-[1.22] tracking-tight text-[#091e52] sm:text-2xl lg:text-[25px] xl:text-[27px]">
              <span className="block">{t("vision.titleLine1")}</span>
              <span className="block">{t("vision.titleLine2")}</span>
            </h2>

            <p className="mt-3 text-[13px] font-medium leading-[1.7] text-[#2d3e66]/90 sm:text-[13.5px] lg:text-[14px]">
              {t("vision.description")}
            </p>
          </div>

          {/* 2. Center Part: Smiling Girl with slanted cadre */}
          <div className="flex justify-center lg:col-span-3 lg:self-center xl:col-span-3">
            <div className="relative w-full max-w-[280px] drop-shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:scale-[1.02] sm:max-w-[310px] lg:max-w-none">
              <Image
                src="/about/vision-girl-card.webp"
                alt={t("girlAlt")}
                width={600}
                height={460}
                priority
                sizes="(max-width: 1024px) 70vw, 25vw"
                quality={95}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* 3. Right Part: NOS VALEURS */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex flex-col lg:col-span-5 xl:col-span-5",
              isRtl ? "text-right" : "text-left"
            )}
          >
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12.5px]">
              {t("values.eyebrow")}
            </p>

            <h2 className="mt-2 text-xl font-extrabold leading-[1.22] tracking-tight text-[#091e52] sm:text-2xl lg:text-[25px] xl:text-[27px]">
              <span className="block">{t("values.titleLine1")}</span>
              <span className="block">{t("values.titleLine2")}</span>
            </h2>

            {/* 4 Values Columns with subtle vertical dividers */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2 lg:gap-2.5 xl:gap-3">
              {values.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.key}
                    className="flex flex-col items-center px-1.5 py-1 text-center sm:border-r sm:border-slate-100 sm:last:border-r-0"
                  >
                    <div
                      className={cn(
                        "flex size-11 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110",
                        val.iconBg
                      )}
                    >
                      <IconComponent
                        className={cn("size-5", val.iconColor)}
                        aria-hidden
                      />
                    </div>

                    <span className="mt-2.5 text-[12.5px] font-bold leading-tight text-[#091e52] sm:text-[13px]">
                      {val.title}
                    </span>

                    <p className="mt-1 text-[11px] font-medium leading-tight text-slate-500 sm:text-[11.5px]">
                      {val.desc}
                    </p>
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
