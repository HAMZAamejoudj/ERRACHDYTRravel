"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("locale");

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 p-px text-[10px] font-bold shadow-xs backdrop-blur-sm md:p-0.5 md:text-xs",
        className
      )}
      role="group"
      aria-label={t("switch")}
    >
      {routing.locales.map((code) => {
        const isActive = locale === code;
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            className={cn(
              "min-w-[1.7rem] rounded-full px-1.5 py-1 text-center transition-colors md:min-w-[2.25rem] md:px-2.5 md:py-1.5",
              isActive
                ? "bg-[#1280e6] text-white"
                : "text-slate-600 hover:text-[#0a2566]"
            )}
          >
            {t(code)}
          </Link>
        );
      })}
    </div>
  );
}
