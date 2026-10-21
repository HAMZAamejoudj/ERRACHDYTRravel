import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Building2, Check, Clock3, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function ServicePersonnelSection() {
  const t = await getTranslations("servicesPage.personnel");
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
      icon: Building2,
      text: t("card.feature1"),
    },
    {
      icon: Clock3,
      text: t("card.feature2"),
    },
    {
      icon: Users,
      text: t("card.feature3"),
    },
  ];

  return (
    <section
      id="personnel"
      dir="ltr"
      className="relative overflow-hidden bg-white py-8 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Personnel Boarding Photo with elegant rounded cut */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl shadow-lg sm:h-[400px] md:h-[440px] lg:col-span-5 lg:h-[460px] lg:rounded-r-[48px] xl:col-span-5">
            <Image
              src="/fleet/Navette d’entreprise devant un immeuble moderne.png"
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              quality={95}
              className="object-cover object-center"
            />
            {/* Subtle soft edge highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 lg:rounded-r-[48px]" />
          </div>

          {/* Right Column: Title + Description + Checklist + Side Card */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex flex-col justify-center lg:col-span-7 xl:col-span-7",
              isRtl ? "text-right" : "text-left"
            )}
          >
            {/* Header: Blue Circle Icon + Section Title */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0070e0] text-white shadow-md shadow-blue-500/25 sm:size-14">
                <Users className="size-6 sm:size-7" aria-hidden />
              </div>
              <h2 className="text-2xl font-black tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px] leading-tight">
                {t("title")}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-3.5 text-[14.5px] font-medium leading-[1.68] text-[#2c3e66]/90 sm:mt-4 sm:text-[15.5px]">
              {t("description")}
            </p>

            {/* Two Sub-Blocks: Checklist on Left + Info Card on Right */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-12 sm:gap-6 lg:gap-8">
              {/* Sub-Block 1: Checklist & CTA Button */}
              <div className="flex flex-col justify-between sm:col-span-6">
                <ul className="mt-3 space-y-3 sm:mt-4 sm:space-y-3.5">
                  {checklistItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0070e0] text-white shadow-sm">
                        <Check className="size-3.5 stroke-[3]" aria-hidden />
                      </span>
                      <span className="text-[13.5px] font-semibold text-[#07246b] sm:text-[14px] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sub-Block 2: Floating Info Card */}
              <div className="flex sm:col-span-6">
                <div className="flex h-full w-full flex-col justify-between gap-4 rounded-2xl border-2 border-blue-200 bg-gradient-to-b from-white to-[#f8fbfe] px-5 py-4 shadow-[0_4px_20px_rgba(7,36,107,0.05)] sm:px-6 sm:py-5">
                  {cardFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3.5">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0070e0]">
                          <Icon className="size-5" aria-hidden />
                        </div>
                        <span className="text-[13px] font-bold text-[#07246b] sm:text-[13.5px] leading-snug">
                          {feat.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
