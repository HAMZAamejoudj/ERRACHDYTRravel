import { getLocale, getTranslations } from "next-intl/server";
import { Armchair, Bus, ShieldCheck, UserCheck, Wrench } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function FleetQualityStrip() {
  const t = await getTranslations("fleetPage.qualityStrip");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const items = [
    {
      icon: Bus,
      title: t("item1Title"),
      subtitle: t("item1Sub"),
    },
    {
      icon: Wrench,
      title: t("item2Title"),
      subtitle: t("item2Sub"),
    },
    {
      icon: UserCheck,
      title: t("item3Title"),
      subtitle: t("item3Sub"),
    },
    {
      icon: Armchair,
      title: t("item4Title"),
      subtitle: t("item4Sub"),
    },
    {
      icon: ShieldCheck,
      title: t("item5Title"),
      subtitle: t("item5Sub"),
    },
  ];

  return (
    <section
      className="border-y border-slate-100 bg-[#f8fbfe]/70 py-8 sm:py-10"
      dir="ltr"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li
                key={idx}
                dir={isRtl ? "rtl" : "ltr"}
                className="flex items-center gap-4 px-2 sm:px-4 lg:justify-center"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#0070e0] text-white shadow-md shadow-blue-500/20 sm:size-16">
                  <Icon className="size-7 sm:size-8" strokeWidth={1.75} aria-hidden />
                </div>
                <div
                  className={cn(
                    "flex flex-col text-xs leading-snug",
                    isRtl ? "text-right" : "text-left"
                  )}
                >
                  <span className="font-extrabold text-[#07246b] sm:text-[13px]">
                    {item.title}
                  </span>
                  <span className="font-medium text-[#2c3e66]/75">
                    {item.subtitle}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
