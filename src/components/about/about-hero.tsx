import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const DESKTOP_HERO_IMAGE =
  "object-[80%_center] sm:object-[82%_center] md:object-[84%_center] lg:object-[86%_center] xl:object-[88%_center]";

const MOBILE_HERO_IMAGE = "object-[65%_center] sm:object-[70%_center]";

/** Physical left → right fade. `dir="ltr"` on the overlay so Arabic `html[dir=rtl]` does not invert it. */
const HERO_FADE =
  "bg-[linear-gradient(90deg,#f3f8fe_0%,#f3f8fe_26%,rgba(226,239,252,0.96)_34%,rgba(198,222,244,0.55)_46%,rgba(176,210,238,0.14)_58%,transparent_68%)]";

export async function AboutHero() {
  const t = await getTranslations("aboutPage.hero");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  return (
    <>
      {/* Mobile view (< md) — Visual layout stays fixed (image doesn't flip) */}
      <section className="block bg-white md:hidden">
        <div className="relative h-[380px] w-full overflow-hidden bg-slate-100 sm:h-[420px]">
          <Image
            src="/about/hero-passengers.webp"
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className={cn("object-cover", MOBILE_HERO_IMAGE)}
          />

          {/* Script badge on mobile — always stays on right */}
          <div
            className="font-accent pointer-events-none absolute right-5 bottom-5 z-10 -rotate-[10deg] text-left text-white select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
            dir={isRtl ? "rtl" : "ltr"}
            aria-hidden
          >
            <span className="block text-[22px] font-bold tracking-wide">
              {t("scriptLine1")}
            </span>
            <span className="block pl-2 text-[22px] font-bold tracking-wide">
              {t("scriptLine2")}
            </span>
            <span className="relative block pl-4 text-[22px] font-bold tracking-wide">
              <span className="relative inline-block">
                {t("scriptLine3")}
                <svg
                  className="absolute -bottom-1 left-0 h-[5px] w-full text-white"
                  viewBox="0 0 100 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C28 4 68 3 98 7"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>

        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={cn(
            "relative z-10 -mt-5 rounded-t-[32px] bg-white px-5 pt-7 pb-8 shadow-[0_-12px_32px_rgba(15,23,42,0.08)] sm:-mt-6 sm:px-8",
            isRtl ? "text-right" : "text-left"
          )}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12px]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-2 text-[26px] font-extrabold leading-[1.16] tracking-tight sm:text-3xl">
            <span className="block text-[#091e52]">{t("titleLine1")}</span>
            <span className="mt-0.5 block text-[#1280e6]">
              {t("titleLine2")}
            </span>
          </h1>

          <p className="mt-3.5 text-[14px] font-medium leading-[1.7] text-[#2d3e66]/90 sm:text-[15px]">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Desktop view (md+) — Exact match to mockup: visual shell is LTR, image on right, text on left */}
      <section
        dir="ltr"
        className="relative isolate hidden min-h-[560px] overflow-hidden rounded-b-[28px] bg-white md:block sm:min-h-[600px] md:min-h-[640px] lg:min-h-[680px] lg:rounded-b-[36px] xl:min-h-[720px] xl:rounded-b-[40px]"
      >
        {/* Background photo & smooth white gradient — NEVER FLIPPED */}
        <div className="absolute inset-0">
          <Image
            src="/about/hero-passengers.webp"
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className={cn("object-cover", DESKTOP_HERO_IMAGE)}
          />
          <div dir="ltr" className="absolute inset-0" aria-hidden>
            <div className={cn("absolute inset-0", HERO_FADE)} />
          </div>
        </div>

        {/* Script badge "Voyager le Maroc autrement !" — ALWAYS ON RIGHT */}
        <div
          className="font-accent pointer-events-none absolute right-[6%] bottom-[16%] z-10 -rotate-[12deg] text-left text-white select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] md:right-[8%] lg:right-[10%] xl:right-[12%]"
          dir={isRtl ? "rtl" : "ltr"}
          aria-hidden
        >
          <span className="block text-[28px] font-bold tracking-wide lg:text-[34px] xl:text-[38px]">
            {t("scriptLine1")}
          </span>
          <span className="block pl-3 text-[28px] font-bold tracking-wide lg:pl-4 lg:text-[34px] xl:text-[38px]">
            {t("scriptLine2")}
          </span>
          <span className="relative block pl-5 text-[28px] font-bold tracking-wide lg:pl-6 lg:text-[34px] xl:text-[38px]">
            <span className="relative inline-block">
              {t("scriptLine3")}
              <svg
                className="absolute -bottom-1.5 left-0 h-[6px] w-full text-white"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C28 4 68 3 98 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </div>

        {/* Hero content column — ALWAYS ON LEFT, text aligns RTL inside if Arabic */}
        <div className="relative z-[1] mx-auto flex min-h-[560px] w-full max-w-[1536px] flex-col items-start justify-center px-4 pt-24 pb-12 sm:min-h-[600px] sm:px-6 sm:pt-28 md:min-h-[640px] md:px-8 md:pt-32 lg:min-h-[680px] lg:px-10 lg:pt-36 lg:pb-16 xl:min-h-[720px] xl:px-12">
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              isRtl
                ? "w-full max-w-[400px] text-right sm:max-w-[430px] lg:max-w-[460px] xl:max-w-[490px]"
                : "w-full max-w-[480px] text-left sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[620px]"
            )}
          >
            {/* Eyebrow */}
            <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12.5px] lg:text-[13px]">
              {t("eyebrow")}
            </p>

            {/* Title */}
            <h1 className="mt-2.5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[38px] lg:text-[44px] xl:text-[48px] leading-[1.12]">
              <span className="block text-[#091e52]">{t("titleLine1")}</span>
              <span className="mt-1 block text-[#1280e6]">
                {t("titleLine2")}
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4 max-w-[500px] text-[13.5px] font-medium leading-[1.7] text-[#2d3e66]/90 sm:text-[14.5px] lg:text-[15.5px] xl:max-w-[540px]">
              {t("description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
