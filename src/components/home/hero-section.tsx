import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Armchair,
  ArrowRight,
  Cog,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

import { HeroTitle } from "@/components/home/hero-title";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const desktopHighlightKeys = [
  { icon: ShieldCheck, line1: "security1", line2: "security2" },
  { icon: Users, line1: "drivers1", line2: "drivers2" },
  { icon: Cog, line1: "vehicles1", line2: "vehicles2" },
  { icon: MapPin, line1: "everywhere1", line2: "everywhere2" },
] as const;

export async function HeroSection() {
  const t = await getTranslations("hero");
  const locale = await getLocale();
  const isRtl = locale === "ar";

  return (
    <>
      {/* ======================================================== */}
      {/* 1. MOBILE VERSION (< md)                                 */}
      {/* Top visual photo + bottom curved white card sheet       */}
      {/* ======================================================== */}
      <section className="block md:hidden bg-white">
        {/* Top Image: Full-color bus with Hassan tower and palms */}
        <div className="relative h-[400px] sm:h-[430px] w-full overflow-hidden bg-slate-100">
          <Image
            src={siteConfig.heroImageSrc}
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-[70%_42%] sm:object-[68%_40%]"
          />
        </div>

        {/* Bottom White Sheet with curved top corners */}
        <div
          className={cn(
            "relative z-10 -mt-4 rounded-t-[32px] bg-white px-5 pt-6 pb-6 shadow-[0_-12px_32px_rgba(15,23,42,0.08)] sm:-mt-5",
            isRtl ? "text-right" : "text-left"
          )}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <p
            className={cn(
              "font-bold text-[#1a6ef5]",
              isRtl
                ? "text-[12px] tracking-normal"
                : "text-[11px] uppercase tracking-[0.16em]"
            )}
          >
            {t("tagline")}
          </p>

          <HeroTitle variant="mobile" />

          <p
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "mt-2.5 text-[13px] leading-relaxed",
              isRtl
                ? "whitespace-pre-line font-semibold text-slate-800"
                : "font-medium text-slate-700"
            )}
          >
            {t("description")}
          </p>

          {/* Action Buttons: Stacked on mobile */}
          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1280e6] to-[#0c6bc7] px-5 text-[14.5px] font-semibold text-white shadow-md shadow-blue-500/25 active:scale-[0.99]"
            >
              <Mail className="size-4" aria-hidden />
              <span>{t("ctaQuote")}</span>
              <ArrowRight className={cn("size-4", isRtl ? "rotate-180" : "")} aria-hidden />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#1280e6] bg-white px-5 text-[14.5px] font-semibold text-[#091e52] active:scale-[0.99]"
            >
              <Phone className="size-4 text-[#1280e6]" aria-hidden />
              <span>{t("contactUs")}</span>
            </a>
          </div>

          {/* 3 Circular Highlights with vertical dividers */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            {/* Item 1: Transport sûr */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-blue-50 text-[#1280e6]">
                <Shield className="size-5" aria-hidden />
              </div>
              <p className="mt-2 text-[11px] font-bold leading-tight text-[#091e52]">
                {t("mobileSafe1")}
                <br />
                {t("mobileSafe2")}
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200/80" aria-hidden />

            {/* Item 2: Confort optimal */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                <Armchair className="size-5" aria-hidden />
              </div>
              <p className="mt-2 text-[11px] font-bold leading-tight text-[#091e52]">
                {t("mobileComfort1")}
                <br />
                {t("mobileComfort2")}
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200/80" aria-hidden />

            {/* Item 3: Solutions adaptées */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="flex size-11 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                <Users className="size-5" aria-hidden />
              </div>
              <p className="mt-2 text-[11px] font-bold leading-tight text-[#091e52]">
                {t("mobileSolutions1")}
                <br />
                {t("mobileSolutions2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. DESKTOP & TABLET VERSION (>= md)                      */}
      {/* Visual layout preserved on the left while text is RTL    */}
      {/* ======================================================== */}
      <section className="relative isolate hidden md:block min-h-[500px] overflow-hidden bg-white sm:min-h-[540px] md:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px]">
        {/* Background Image with optimized panoramic framing */}
        <div className="absolute inset-0">
          <Image
            src={siteConfig.heroImageSrc}
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-[88%_center] sm:object-[87%_center] md:object-[86%_center] lg:object-[85%_center] xl:object-[84%_center]"
          />
          {/* Soft, clean gradient on the left so all text stays safely within the clean white canvas */}
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_20%,rgba(255,255,255,0.96)_28%,rgba(255,255,255,0.45)_36%,transparent_44%)]"
            aria-hidden
          />
        </div>

        {/* Script Text in the Sky: Rabat, une destination qui inspire... */}
        <div
          className="font-accent pointer-events-none absolute right-[11%] top-[14%] z-10 -rotate-[6deg] text-[#123e9c] drop-shadow-sm select-none lg:right-[16%] lg:top-[13%] xl:right-[19%] xl:top-[12%]"
          dir={isRtl ? "rtl" : "ltr"}
          aria-hidden
        >
          <span className="block text-xl font-bold tracking-wide lg:text-[26px] xl:text-[28px]">
            {t("scriptLine1")}
          </span>
          <span className="block pl-4 text-xl font-bold tracking-wide lg:pl-5 lg:text-[26px] xl:text-[28px]">
            {t("scriptLine2")}
          </span>
          <span className="relative block pl-8 text-xl font-bold tracking-wide lg:pl-10 lg:text-[26px] xl:text-[28px]">
            <span className="relative inline-block">
              {t("scriptLine3")}
              <svg
                className="absolute -bottom-1 left-0 h-[7px] w-full text-brand-blue"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C28 3 68 3 98 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </div>

        {/* Main Content Area - Stays strictly on the LEFT side inside the pure white canvas */}
        <div
          className={cn(
            "relative z-[1] mx-auto flex min-h-[500px] w-full max-w-[1536px] flex-col items-start justify-center pt-18 pb-6 sm:min-h-[540px] sm:pt-20 sm:pb-8 md:min-h-[580px] lg:min-h-[620px] lg:pt-20 lg:pb-8 xl:min-h-[660px]",
            isRtl
              ? "px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12"
              : "px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16"
          )}
        >
          <div
            className={cn(
              "w-full max-w-[420px] text-left sm:max-w-[440px] lg:max-w-[460px]",
              isRtl && "max-w-[400px] sm:max-w-[420px] lg:max-w-[440px]"
            )}
            dir="ltr"
          >
            <p
              dir={isRtl ? "rtl" : "ltr"}
              className={cn(
                "font-bold text-[#1a6ef5]",
                isRtl
                  ? "text-[12px] leading-snug tracking-normal"
                  : "text-[11px] uppercase tracking-[0.18em] sm:text-xs"
              )}
            >
              {t("tagline")}
            </p>

            <HeroTitle variant="desktop" />

            {/* Description with comfortable, airy line-height */}
            <p
              dir={isRtl ? "rtl" : "ltr"}
              className={cn(
                "text-[13px] sm:text-[13.5px]",
                isRtl
                  ? "mt-3 max-w-[400px] whitespace-pre-line font-semibold leading-[1.75] text-slate-800 sm:max-w-[420px]"
                  : "mt-2.5 max-w-[420px] font-medium leading-relaxed text-slate-700"
              )}
            >
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div
              dir="ltr"
              className={cn(
                "flex w-full flex-col justify-start sm:flex-row sm:items-center",
                isRtl ? "mt-4 gap-3 sm:gap-3.5" : "mt-4 gap-2.5 sm:gap-3"
              )}
            >
              <Link
                href="#contact"
                dir={isRtl ? "rtl" : "ltr"}
                className="group inline-flex h-10.5 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1280e6] to-[#0c6bc7] px-5 text-[13.5px] font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0"
              >
                <Mail className="size-4 transition-transform group-hover:scale-110" aria-hidden />
                <span>{t("ctaQuote")}</span>
                <ArrowRight
                  className={cn(
                    "size-3.5 transition-transform",
                    isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  )}
                  aria-hidden
                />
              </Link>
              <a
                href={siteConfig.phoneHref}
                dir={isRtl ? "rtl" : "ltr"}
                className="group inline-flex h-10.5 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-5 text-[13.5px] font-semibold text-[#091e52] shadow-xs backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-[#1280e6] active:translate-y-0"
              >
                <Phone className="size-3.5 text-[#1280e6] transition-transform group-hover:rotate-12" aria-hidden />
                <span>{t("contactUs")}</span>
              </a>
            </div>

            <ul
              dir="ltr"
              className={cn(
                "flex w-fit max-w-full flex-wrap items-center justify-start border-t border-slate-100/90",
                isRtl ? "mt-5 gap-2 pt-3.5 sm:gap-2.5" : "mt-5 gap-1.5 pt-3 sm:gap-2"
              )}
            >
              {desktopHighlightKeys.map(({ icon: Icon, line1, line2 }) => (
                <li
                  key={line1}
                  className={cn(
                    "flex items-center rounded-md border border-blue-100/90 bg-white/75",
                    isRtl ? "gap-2 px-2.5 py-1.5 sm:px-3" : "gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5"
                  )}
                >
                  <Icon
                    className="size-3.5 shrink-0 text-[#1280e6] sm:size-[15px]"
                    aria-hidden
                  />
                  <div
                    dir={isRtl ? "rtl" : "ltr"}
                    className="text-left text-[9px] leading-snug text-[#091e52] sm:text-[10px]"
                  >
                    <span className="block font-bold">
                      {t(`highlights.${line1}`)}
                    </span>
                    <span className="block font-medium text-slate-500">
                      {t(`highlights.${line2}`)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
