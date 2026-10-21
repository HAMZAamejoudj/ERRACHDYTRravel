"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MainNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav
      className="hidden flex-1 justify-center lg:flex"
      aria-label={t("main")}
    >
      <div
        className="inline-flex items-stretch gap-0 rounded-xl border-y border-[#9ec5e8]/75 bg-[linear-gradient(90deg,rgba(248,252,255,0.97)_0%,rgba(228,242,255,0.96)_45%,rgba(205,230,252,0.94)_100%)] px-1 py-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm xl:gap-0.5 xl:px-1.5"
      >
        {mainNav.map((item) => {
          const isHome = item.href === "/";
          const isActive =
            isHome
              ? pathname === "/" || pathname === ""
              : pathname === item.href;

          return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "relative whitespace-nowrap px-3.5 py-2.5 text-[14px] font-semibold text-[#0a2566] transition-colors hover:text-[#052d9b] xl:px-5 xl:py-3 xl:text-[15px]",
                isActive &&
                  "text-[#052d9b] after:absolute after:inset-x-4 after:bottom-1.5 after:h-[2.5px] after:rounded-full after:bg-[#0c5fc4] xl:after:inset-x-5"
              )}
            >
              {t(item.key)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
