"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function AboutFleetSection() {
  const t = useTranslations("aboutPage.fleetShowcase");
  const locale = useLocale();
  const isRtl = isRtlLocale(locale);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fleetImages = [
    {
      key: "interior1",
      image: "/about/fleet-interior-1.jpg",
      alt: t("items.interior1"),
    },
    {
      key: "interior2",
      image: "/about/fleet-interior-2.jpg",
      alt: t("items.interior2"),
    },
    {
      key: "seats",
      image: "/about/fleet-seats.webp",
      alt: t("items.seats"),
    },
    {
      key: "ambient",
      image: "/about/fleet-ambient.webp",
      alt: t("items.ambient"),
    },
    {
      key: "climatisation",
      image: "/about/fleet-climatisation.webp",
      alt: t("items.climatisation"),
    },
    {
      key: "luggage",
      image: "/about/fleet-luggage.webp",
      alt: t("items.luggage"),
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 260;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main wrapper stays LTR layout (Text on left, Carousel on right) */}
        <div
          dir="ltr"
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10"
        >
          {/* 1. Left Column: Text */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex flex-col lg:col-span-4 xl:col-span-4",
              isRtl ? "text-right" : "text-left"
            )}
          >
            <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#1280e6]">
              {t("eyebrow")}
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#092264] sm:text-3xl lg:text-[27px] xl:text-[29px] leading-[1.2]">
              {t("title")}
            </h2>
            <p className="mt-3 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500 max-w-md">
              {t("description")}
            </p>
          </div>

          {/* 2. Right Side: Interactive Fleet Carousel with Left/Right Arrow Buttons */}
          <div className="relative flex items-center lg:col-span-8 xl:col-span-8 gap-2 sm:gap-3">
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous fleet image"
              className="flex-shrink-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0948b3] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all duration-200 hover:bg-[#0948b3] hover:text-white hover:border-[#0948b3] active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Carousel Container */}
            <div
              ref={scrollContainerRef}
              dir="ltr"
              className="flex-1 flex items-center gap-3.5 sm:gap-4 overflow-x-auto py-2 no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {fleetImages.map((item) => (
                <div
                  key={item.key}
                  className="group relative min-w-[210px] sm:min-w-[230px] lg:min-w-[190px] xl:min-w-[215px] flex-1 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.05)] border border-slate-100/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle glass reflection highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next fleet image"
              className="flex-shrink-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0948b3] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all duration-200 hover:bg-[#0948b3] hover:text-white hover:border-[#0948b3] active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
