import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { MessageSquare, ShieldCheck, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/fleet/Voyage en autocar sous un ciel azur.png";

/** Same desktop wash as the other heroes: light sky, a little blue above the title, white only behind the copy. */
const HERO_SKY =
  "bg-[linear-gradient(90deg,#d4eefb_0%,#e4f5fc_16%,rgba(196,222,244,0.2)_30%,transparent_40%)]";

const HERO_TOP =
  "bg-[radial-gradient(ellipse_26%_18%_at_24%_17%,rgba(72,162,222,0.55)_0%,rgba(116,188,232,0.3)_48%,transparent_76%)]";

const HERO_FADE =
  "bg-[linear-gradient(90deg,#f7fbfe_0%,#f7fbfe_36%,rgba(247,251,254,0.4)_44%,transparent_52%)] [mask-image:linear-gradient(180deg,transparent_0%,transparent_22%,#000_34%,#000_76%,transparent_88%)] [-webkit-mask-image:linear-gradient(180deg,transparent_0%,transparent_22%,#000_34%,#000_76%,transparent_88%)]";

export async function ContactHero() {
  const t = await getTranslations("contactPage.hero");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);
  const titlePart2 = t.rich("titlePart2", {
    blue: (chunks) => <span className="text-[#0070e0]">{chunks}</span>,
  });

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
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1280e6] sm:text-[12px] md:text-[12.5px] lg:text-[13px]">
        {t("eyebrow")}
      </p>

      <h1 className="mt-2.5 text-[28px] font-black tracking-tight text-[#07246b] sm:mt-3 sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.12]">
        {t("titlePart1")}
        <span className="mt-1 block text-[#07246b] sm:mt-1.5">{titlePart2}</span>
      </h1>

      <p className="mt-4 max-w-xl text-[15px] font-semibold leading-[1.68] text-[#2c3e66] sm:mt-5 sm:text-[16px]">
        {t("description")}
      </p>

      <div
        className={cn(
          "mt-6 flex gap-x-5 gap-y-3 sm:mt-8",
          isRtl
            ? "w-full flex-col items-start md:w-max md:flex-row md:flex-nowrap md:items-center md:self-start md:gap-x-4"
            : "w-full flex-wrap items-center justify-start md:w-max md:flex-nowrap md:gap-x-6"
        )}
      >
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div key={idx} className="flex shrink-0 items-center gap-2.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0070e0] text-white shadow-md shadow-blue-500/25">
                <Icon className="size-4" strokeWidth={2} aria-hidden />
              </div>
              <span className="whitespace-pre text-[13px] font-semibold leading-[1.25] text-[#07246b] sm:text-[13.5px]">
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
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,110,210,0.42)_0%,rgba(70,160,235,0.22)_34%,rgba(150,200,240,0.08)_58%,transparent_74%)]"
            aria-hidden
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
          <div dir="ltr" className="absolute inset-0" aria-hidden>
            <div className={cn("absolute inset-0", HERO_SKY)} />
            <div className={cn("absolute inset-0", HERO_TOP)} />
            <div className={cn("absolute inset-0", HERO_FADE)} />
          </div>
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
