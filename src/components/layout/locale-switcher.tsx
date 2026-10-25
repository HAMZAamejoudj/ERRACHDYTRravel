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
        "inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 p-1 text-[13px] font-bold shadow-xs backdrop-blur-sm md:text-sm",
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
              "inline-flex w-[2.45rem] items-center justify-center rounded-full py-1.5 text-center transition-colors md:w-[3.25rem] md:py-2",
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
