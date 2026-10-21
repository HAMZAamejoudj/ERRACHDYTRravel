import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const homeFleet = [
  {
    key: "coach",
    titleKey: "coachTitle",
    descKey: "coachDesc",
    capacityKey: "coachCapacity",
    altKey: "coachAlt",
    image: "/services/Image ChatGPT 16 oct. 2026, 17_49_43.png",
  },
  {
    key: "mid",
    titleKey: "midTitle",
    descKey: "midDesc",
    capacityKey: "midCapacity",
    altKey: "midAlt",
    image: "/services/Autocar Iveco Tourisme blanc Errachdy Travel.png",
  },
  {
    key: "vip",
    titleKey: "vipTitle",
    descKey: "vipDesc",
    capacityKey: "vipCapacity",
    altKey: "vipAlt",
    image: "/services/Minibus Volkswagen noir « Tourisme ».png",
  },
  {
    key: "school",
    titleKey: "schoolTitle",
    descKey: "schoolDesc",
    capacityKey: "schoolCapacity",
    altKey: "schoolAlt",
    image: "/services/Minibus Iveco de transport scolaire.png",
  },
] as const;

export async function FleetCategoriesSection() {
  const t = await getTranslations("fleetPage.categories");
  const fleet = await getTranslations("fleet");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  return (
    <section
      id="gamme-vehicules"
      className="relative bg-white py-12 sm:py-16"
      dir="ltr"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <h2 className="text-2xl font-black tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
            {t("title")}
          </h2>

          <div className="inline-flex w-fit items-center rounded-full border border-blue-200/90 bg-blue-50/70 px-4 py-1.5 text-xs font-bold text-[#0070e0] shadow-2xs">
            {t("badge")}
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeFleet.map((cat) => (
              <article
                key={cat.key}
                className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_-8px_rgba(15,23,42,0.1)] transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:scale-[1.04] hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(7,36,107,0.14)] sm:min-h-[360px] lg:min-h-[380px]"
              >
                <div className="relative h-[220px] overflow-hidden bg-white sm:h-[235px] lg:h-[228px] xl:h-[248px]">
                  <Image
                    src={cat.image}
                    alt={fleet(cat.altKey)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={95}
                    className="object-contain object-center p-1.5 transition-transform duration-300 group-hover:scale-105 sm:p-2"
                  />
                </div>
                <div
                  dir={isRtl ? "rtl" : "ltr"}
                  className={cn(
                    "flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4.5",
                    isRtl ? "text-right" : "text-left"
                  )}
                >
                  <h3 className="text-[16px] font-bold leading-snug text-[#091e52] sm:text-[17px]">
                    {fleet(cat.titleKey)}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500 sm:text-[13.5px]">
                    {fleet(cat.descKey)}
                  </p>
                  <p className="mt-3.5 flex items-center gap-1.5 text-[13px] font-semibold text-[#1280e6] sm:text-[14px]">
                    <Users className="size-[18px] shrink-0" aria-hidden />
                    {fleet(cat.capacityKey)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
