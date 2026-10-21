import { getLocale, getTranslations } from "next-intl/server";
import { Clock3, Settings, ShieldCheck, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

/** Coach seat. Material Design Icons `seat`, Pictogrammers, Apache-2.0. */
function BusSeatIcon({
  className,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export async function ServiceAdvantagesSection() {
  const t = await getTranslations("servicesPage.advantages");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const items = [
    {
      icon: ShieldCheck,
      title: t("items.securityTitle"),
      desc: t("items.securityDesc"),
      color: "text-[#0070e0]",
      bg: "bg-blue-50/60 border-blue-100",
    },
    {
      icon: Clock3,
      title: t("items.punctualityTitle"),
      desc: t("items.punctualityDesc"),
      color: "text-[#0070e0]",
      bg: "bg-blue-50/60 border-blue-100",
    },
    {
      icon: BusSeatIcon,
      title: t("items.comfortTitle"),
      desc: t("items.comfortDesc"),
      color: "text-[#16a34a]",
      bg: "bg-emerald-50/60 border-emerald-100",
    },
    {
      icon: Users,
      title: t("items.driversTitle"),
      desc: t("items.driversDesc"),
      color: "text-[#0070e0]",
      bg: "bg-blue-50/60 border-blue-100",
    },
    {
      icon: Settings,
      title: t("items.customTitle"),
      desc: t("items.customDesc"),
      color: "text-[#0070e0]",
      bg: "bg-blue-50/60 border-blue-100",
    },
  ];

  return (
    <section
      id="avantages"
      className="relative bg-white py-12 sm:py-16 md:py-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header: Eyebrow + Title + Subtitle */}
        <div className="text-center">
          <p className="text-[12px] font-bold tracking-[0.2em] text-[#0070e0] uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-[13.5px] font-medium leading-relaxed text-[#2c3e66]/80 sm:text-[14.5px]">
            {t("subtitle")}
          </p>
        </div>

        {/* 5 Advantages Cards */}
        <div className="mt-10 sm:mt-14">
          <ul className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-slate-100">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className="group flex flex-col items-center px-4 py-6 text-center sm:py-6 lg:px-5 lg:py-2"
                >
                  <div
                    className={cn(
                      "flex size-16 sm:size-20 shrink-0 items-center justify-center rounded-full border shadow-sm transition-transform duration-300 group-hover:scale-105",
                      item.bg,
                      item.color
                    )}
                  >
                    <Icon className="size-8 sm:size-9" strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-[15px] sm:text-[16px] font-bold text-[#07246b]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-[200px] text-[12.5px] sm:text-[13px] leading-relaxed text-[#2c3e66]/75">
                    {item.desc}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
