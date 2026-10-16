"use client";

import { useLocale, useTranslations } from "next-intl";

import { HeroRotatingTransport } from "@/components/home/hero-rotating-transport";
import { cn } from "@/lib/utils";

type HeroTitleProps = {
  variant: "mobile" | "desktop";
  className?: string;
};

export function HeroTitle({ variant, className }: HeroTitleProps) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  if (variant === "mobile") {
    return (
      <h1
        dir="ltr"
        className={cn(
          "mt-2 font-extrabold tracking-tight text-[#091e52]",
          isRtl
            ? "text-right text-[1.6rem] leading-[1.25]"
            : "text-left text-[1.65rem] leading-[1.18]",
          className
        )}
      >
        {isRtl ? (
          <>
            <span className="flex w-full flex-wrap items-baseline justify-end gap-x-1.5 text-[#091e52]">
              <span dir="rtl">
                <HeroRotatingTransport className="text-[1.75rem] font-extrabold" />
              </span>
              <span dir="rtl">{t("titleTransport")}</span>
            </span>
            <span dir="rtl" className="mt-1 block text-right font-bold">
              {t("titleConfidence")}
            </span>
          </>
        ) : (
          <span className="text-[#091e52]">
            {t("titleTransport")}{" "}
            <HeroRotatingTransport className="text-[1.85rem] font-extrabold" />{" "}
            {t("titleConfidence")}
          </span>
        )}
      </h1>
    );
  }

  return (
    <h1
      dir="ltr"
      className={cn(
        "text-left text-[1.55rem] font-extrabold leading-[1.16] tracking-tight sm:text-[1.8rem] md:text-[1.95rem] lg:text-[2.1rem]",
        isRtl ? "mt-2 max-w-[380px] leading-[1.2] sm:max-w-[400px] lg:max-w-[420px]" : "mt-2.5",
        className
      )}
    >
      {isRtl ? (
        <span className="flex w-full flex-wrap items-baseline justify-start gap-x-1.5 gap-y-0 text-[#091e52]">
          <span dir="rtl">
            <HeroRotatingTransport className="text-[1.55rem] font-extrabold sm:text-[1.8rem] md:text-[1.95rem] lg:text-[2.1rem]" />
          </span>
          <span dir="rtl">{t("titleTransport")}</span>
        </span>
      ) : (
        <span className="block text-[#091e52]">
          {t("titleTransport")}{" "}
          <HeroRotatingTransport className="text-[1.65rem] font-extrabold sm:text-[2rem] md:text-[2.2rem] lg:text-[2.4rem]" />
        </span>
      )}
      <span
        dir={isRtl ? "rtl" : "ltr"}
        className={cn(
          "block text-left font-bold text-[#091e52]",
          isRtl ? "mt-1.5" : "mt-0.5"
        )}
      >
        {t("titleConfidence")}
      </span>
    </h1>
  );
}

