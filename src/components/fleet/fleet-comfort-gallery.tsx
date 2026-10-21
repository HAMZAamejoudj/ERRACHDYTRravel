"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/about/fleet-interior-1.jpg",
    altKey: "item1",
  },
  {
    src: "/about/fleet-interior-2.jpg",
    altKey: "item2",
  },
  {
    src: "/about/fleet-seats.webp",
    altKey: "item3",
  },
  {
    src: "/about/fleet-ambient.webp",
    altKey: "item4",
  },
  {
    src: "/about/fleet-climatisation.webp",
    altKey: "item5",
  },
  {
    src: "/about/fleet-luggage.webp",
    altKey: "item6",
  },
];

export function FleetComfortGallery() {
  const t = useTranslations("fleetPage.comfortGallery");
  const locale = useLocale();
  const isRtl = isRtlLocale(locale);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="confort"
      className="relative bg-white py-12 sm:py-16 md:py-20"
      dir="ltr"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={cn("max-w-3xl", isRtl ? "text-right" : "text-left")}
        >
          <h2 className="text-2xl font-black tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
            {t("title")}
          </h2>
          <p className="mt-2.5 text-[14px] font-medium leading-relaxed text-[#2c3e66]/80 sm:text-[15px]">
            {t("subtitle")}
          </p>
        </div>

        {/* Gallery Carousel Container with Navigation Arrows */}
        <div className="relative mt-8 sm:mt-10">
          {/* Left Arrow Button (visible on mobile/tablet) */}
          <button
            type="button"
            onClick={() => scroll(isRtl ? "right" : "left")}
            aria-label="Previous"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex size-10 sm:size-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#0070e0] shadow-md backdrop-blur-xs transition-all hover:scale-105 hover:bg-white hover:border-blue-300 lg:hidden"
          >
            <ChevronLeft className={cn("size-5", isRtl && "rotate-180")} aria-hidden />
          </button>

          {/* Right Arrow Button (visible on mobile/tablet) */}
          <button
            type="button"
            onClick={() => scroll(isRtl ? "left" : "right")}
            aria-label="Next"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex size-10 sm:size-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#0070e0] shadow-md backdrop-blur-xs transition-all hover:scale-105 hover:bg-white hover:border-blue-300 lg:hidden"
          >
            <ChevronRight className={cn("size-5", isRtl && "rotate-180")} aria-hidden />
          </button>

          {/* Scrolling Row of Images on mobile, 5-col grid on desktop */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-[240px] w-[320px] shrink-0 snap-center overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:h-[280px] sm:w-[380px] lg:h-[300px] lg:w-full"
              >
                <Image
                  src={img.src}
                  alt={t(`items.${img.altKey}`)}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 380px, 320px"
                  quality={95}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
