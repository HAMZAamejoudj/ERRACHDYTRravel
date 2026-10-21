"use client";

import { useLocale, useTranslations } from "next-intl";

import { HeroRotatingTransport } from "@/components/home/hero-rotating-transport";
import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

type HeroTitleProps = {
  variant: "mobile" | "desktop";
  className?: string;
};

export function HeroTitle({ variant, className }: HeroTitleProps) {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = isRtlLocale(locale);

  if (variant === "mobile") {
    return (
      <h1
        className={cn(
          "mt-2 font-extrabold tracking-tight text-[#091e52]",
          isRtl
            ? "text-right text-[1.6rem] leading-[1.32] sm:text-[1.8rem]"
            : "text-left text-[1.65rem] leading-[1.18]",
          className
        )}
      >
        {isRtl ? (
          <span className="block font-extrabold">
            {t("titleTransport")}{" "}
            <HeroRotatingTransport className="text-[2.05rem] font-extrabold" />{" "}
            <span className="font-bold text-[#091e52]">{t("titleConfidence")}</span>
          </span>
        ) : (
          <span>
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
      className={cn(
        "font-extrabold tracking-tight text-[#091e52]",
        isRtl
          ? "mt-3 text-center text-[1.8rem] leading-[1.28] sm:text-[2.05rem] md:text-[2.3rem] lg:text-[2.55rem] xl:text-[2.75rem]"
          : "mt-2.5 text-left text-[1.75rem] leading-[1.16] sm:text-[2.05rem] md:text-[2.3rem] lg:text-[2.5rem]",
        className
      )}
    >
      {isRtl ? (
        <span className="block font-extrabold whitespace-nowrap">
          {t("titleTransport")}{" "}
          <HeroRotatingTransport className="text-[1.95rem] font-extrabold sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem]" />{" "}
          <span className="font-bold text-[#091e52]">{t("titleConfidence")}</span>
        </span>
      ) : (
        <>
          <span className="block">
            {t("titleTransport")}{" "}
            <HeroRotatingTransport className="text-[1.85rem] font-extrabold sm:text-[2.2rem] md:text-[2.45rem] lg:text-[2.65rem]" />
          </span>
          <span className="mt-0.5 block font-bold">{t("titleConfidence")}</span>
        </>
      )}
    </h1>
  );
}
