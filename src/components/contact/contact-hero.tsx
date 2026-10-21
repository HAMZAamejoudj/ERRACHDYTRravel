import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { MessageSquare, ShieldCheck, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/fleet/Voyage en autocar sous un ciel azur.png";

const HERO_FADE =
  "bg-[linear-gradient(90deg,#f3f8fe_0%,#f3f8fe_22%,rgba(226,239,252,0.94)_34%,rgba(198,222,244,0.42)_48%,transparent_62%)]";

export async function ContactHero() {
  const t = await getTranslations("contactPage.hero");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const badges = [
    {
      icon: MessageSquare,
      text: t("badges.reply"),
    },
    {
      icon: ShieldCheck,
      text: t("badges.reliable"),
    },
    {
      icon: Users,
      text: t("badges.presence"),
    },
  ];

  const content = (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={cn(
        "flex w-full max-w-[420px] flex-col sm:max-w-[440px] lg:max-w-[480px]",
        isRtl ? "items-stretch text-right" : "items-start text-left"
      )}
    >
      <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-[#0070e0] sm:text-[12.5px]">
        {t("eyebrow")}
      </p>

      <h1 className="mt-2.5 text-[28px] font-black tracking-tight text-[#07246b] sm:mt-3 sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.12]">
        {t("titlePart1")}
        <span className="mt-1 block text-[#0070e0] sm:mt-1.5">
          {t("titlePart2")}
        </span>
      </h1>

      <p className="mt-4 max-w-xl text-[15px] font-medium leading-[1.68] text-[#2c3e66]/90 sm:mt-5 sm:text-[16px]">
        {t("description")}
      </p>

      <div
        className={cn(
          "mt-6 flex w-full gap-x-5 gap-y-3 sm:mt-8",
          isRtl
            ? "flex-col items-start md:w-max md:flex-row md:flex-nowrap md:items-center md:self-start md:gap-x-4"
            : "flex-wrap items-center justify-start"
        )}
      >
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div key={idx} className="flex shrink-0 items-center gap-2.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0070e0] text-white shadow-md shadow-blue-500/25">
                <Icon className="size-4" strokeWidth={2} aria-hidden />
              </div>
              <span className="whitespace-nowrap text-[13px] font-semibold leading-snug text-[#07246b] sm:text-[13.5px]">
                {badge.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <section className="block bg-white md:hidden" aria-label={t("titlePart1")}>
        <div className="relative h-[280px] w-full overflow-hidden bg-slate-100 sm:h-[320px]">
          <Image
            src={HERO_IMAGE}
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-[72%_center]"
          />
        </div>
        <div
          className={cn(
            "relative z-10 -mt-5 rounded-t-[32px] bg-white px-5 py-10 shadow-[0_-12px_32px_rgba(15,23,42,0.08)] sm:px-8",
            isRtl ? "text-right" : "text-left"
          )}
        >
          <p className="font-accent mb-5 text-center text-[18px] font-bold tracking-wide text-[#0052cc] sm:text-[20px]">
            <span className="relative inline-block">
              {t("badgeScript")}
              <svg
                className="absolute -bottom-1.5 left-0 h-[7px] w-full text-[#0052cc]"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8C28 3 68 3 98 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>
          {content}
        </div>
      </section>

      <section
        dir="ltr"
        className="relative isolate hidden min-h-[560px] overflow-hidden rounded-b-[28px] bg-white md:block sm:min-h-[600px] lg:min-h-[660px] lg:rounded-b-[36px] xl:min-h-[700px] xl:rounded-b-[40px]"
        aria-label={t("titlePart1")}
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt={t("imageAlt")}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-[72%_bottom] lg:object-[68%_bottom]"
          />
          <div className={cn("absolute inset-0", HERO_FADE)} aria-hidden />
        </div>

        <p className="font-accent pointer-events-none absolute top-[7.25rem] left-1/2 z-20 -translate-x-1/2 text-center text-[22px] font-bold tracking-wide text-[#0052cc] sm:top-[7.5rem] sm:text-[26px]">
          <span className="relative inline-block">
            {t("badgeScript")}
            <svg
              className="absolute -bottom-2 left-0 h-[9px] w-full text-[#0052cc]"
              viewBox="0 0 100 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 8C28 3 68 3 98 7"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </p>
        <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1536px] flex-col items-start justify-center px-4 py-16 text-left sm:min-h-[600px] sm:px-6 md:px-12 lg:min-h-[660px] lg:py-20 xl:min-h-[700px] xl:px-20">
          {content}
        </div>
      </section>
    </>
  );
}
