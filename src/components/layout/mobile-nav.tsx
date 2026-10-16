"use client";

import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Link } from "@/i18n/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-full border-slate-200/90 bg-white/80 text-slate-800 shadow-xs backdrop-blur-sm lg:hidden"
            aria-label={t("openMenu")}
          />
        }
      >
        <Menu className="size-5" aria-hidden />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
        <SheetHeader className="border-b border-slate-100 pb-4">
          <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
          <Image
            src={siteConfig.logoSrc}
            alt={tSite("name")}
            width={180}
            height={48}
            className="h-9 w-auto"
          />
        </SheetHeader>
        <div className="py-4">
          <LocaleSwitcher className="w-full justify-center" />
        </div>
        <nav className="flex flex-col gap-1 pb-4" aria-label={t("mobile")}>
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <a
          href={siteConfig.phoneHref}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone className="size-4" aria-hidden />
          {siteConfig.phone}
        </a>
      </SheetContent>
    </Sheet>
  );
}
