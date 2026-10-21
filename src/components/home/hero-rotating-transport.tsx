"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

const transportKeys = ["touristique", "scolaire", "personnel"] as const;

const INTERVAL_MS = 3200;
const FADE_MS = 200;

type HeroRotatingTransportProps = {
  className?: string;
};

export function HeroRotatingTransport({
  className,
}: HeroRotatingTransportProps) {
  const t = useTranslations("hero.transportTypes");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setIndex((current) => (current + 1) % transportKeys.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  const key = transportKeys[index];

  return (
    <span
      className={cn(
        "inline-block text-[#1280e6] transition-all duration-300 ease-out",
        isRtl
          ? "text-center"
          : "min-w-[8ch] text-left sm:min-w-[10ch]",
        visible ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
        className
      )}
      aria-live="polite"
    >
      {t(key)}
    </span>
  );
}
