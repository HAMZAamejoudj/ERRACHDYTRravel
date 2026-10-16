import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Link } from "@/i18n/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Phone } from "lucide-react";

export async function SiteHeader() {
  const t = await getTranslations("nav");
  const tSite = await getTranslations("site");

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-slate-100/80 bg-white shadow-sm md:border-transparent md:bg-transparent md:shadow-none">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[1536px] items-center justify-between gap-3 px-4 sm:h-20 sm:gap-4 sm:px-6 md:px-12 lg:h-[5.25rem] lg:px-16 xl:px-20">
        <Link href="/" className="shrink-0" aria-label={tSite("name")}>
          <Image
            src={siteConfig.logoSrc}
            alt={tSite("name")}
            width={280}
            height={74}
            className="h-11 w-auto sm:h-12 md:h-[3.25rem] lg:h-14 xl:h-[3.75rem]"
            priority
          />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-8"
          aria-label={t("main")}
        >
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="relative whitespace-nowrap pb-1.5 text-[14px] font-semibold text-slate-700 transition-colors hover:text-[#0a2566] xl:text-[15px]"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher className="hidden sm:inline-flex" />
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-[#0c2368] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#071948] sm:inline-flex lg:px-5 lg:text-[14.5px]"
          >
            <Phone className="size-4 shrink-0 fill-current" aria-hidden />
            {siteConfig.phone}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
