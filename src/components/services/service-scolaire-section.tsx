import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Bus, Check, GraduationCap, Heart, Landmark } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function ServiceScolaireSection() {
  const t = await getTranslations("servicesPage.scolaire");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const checklistItems = [
    t("checklist.item1"),
    t("checklist.item2"),
    t("checklist.item3"),
    t("checklist.item4"),
  ];

  const cardFeatures = [
    {
      icon: Landmark,
      text: t("card.feature1"),
      fill: false,
    },
    {
      icon: Bus,
      text: t("card.feature2"),
      fill: false,
    },
    {
      icon: Heart,
      text: t("card.feature3"),
      fill: true,
    },
  ];

  return (
    <section
      id="scolaire"
      dir="ltr"
      className="relative overflow-visible bg-white py-8 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Title + Description + Checklist + CTA */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex flex-col justify-center lg:col-span-7",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {/* Header: Magenta Circle Icon + Section Title */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e6007e] text-white shadow-md shadow-pink-500/25 sm:size-14">
                <GraduationCap className="size-6 sm:size-7" aria-hidden />
              </div>
              <h2 className="text-2xl font-black tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px] leading-tight">
                {t("title")}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-3.5 text-[14.5px] font-medium leading-[1.68] text-[#2c3e66]/90 sm:mt-4 sm:text-[15.5px]">
              {t("description")}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-12 sm:gap-6 lg:gap-8">
              <div className="flex flex-col justify-between sm:col-span-6">
                <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-3.5">
                  {checklistItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e6007e] text-white shadow-sm">
                        <Check className="size-3.5 stroke-[3]" aria-hidden />
                      </span>
                      <span className="text-[13.5px] font-semibold leading-snug text-[#07246b] sm:text-[14px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex sm:col-span-6">
                <div className="flex h-full w-full flex-col justify-between gap-4 rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-white to-[#f8fbfe] px-5 py-4 shadow-[0_4px_20px_rgba(7,36,107,0.05)] sm:px-6 sm:py-5">
                  {cardFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3.5">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0070e0]">
                          <Icon
                            className={cn(
                              "size-5",
                              feat.fill && "fill-[#0070e0]"
                            )}
                            aria-hidden
                          />
                        </div>
                        <span className="text-[13px] font-bold leading-snug text-[#07246b] sm:text-[13.5px]">
                          {feat.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: School Bus & Students Photo */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl shadow-lg sm:h-[400px] md:h-[440px] lg:col-span-5 lg:h-[460px] lg:rounded-l-[48px] lg:rounded-r-2xl">
            <Image
              src="/fleet/Transport scolaire convivial en minibus jaune.png"
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              quality={95}
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 lg:rounded-l-[48px] lg:rounded-r-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
