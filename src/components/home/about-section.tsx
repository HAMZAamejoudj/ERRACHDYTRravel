import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";

import { StatsBar } from "@/components/home/stats-section";
import { Link } from "@/i18n/navigation";

export async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section id="a-propos" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-12 top-1/2 z-0 hidden -translate-y-1/2 select-none opacity-[0.11] md:block lg:right-0 lg:opacity-[0.13]"
        aria-hidden
      >
        <svg
          className="h-[300px] w-[300px] text-[#1280e6] lg:h-[380px] lg:w-[380px]"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 290 C204 220 215 150 230 90 C226 90 220 94 216 98 C202 155 192 222 188 290 Z"
            fill="currentColor"
          />
          <path
            d="M230 90 C195 45 145 35 105 48 C140 64 185 78 230 90 Z"
            fill="currentColor"
          />
          <path
            d="M230 90 C242 42 278 32 305 42 C280 60 255 76 230 90 Z"
            fill="currentColor"
          />
          <path
            d="M230 90 C265 68 300 80 320 115 C285 118 250 105 230 90 Z"
            fill="currentColor"
          />
          <path
            d="M230 90 C185 70 140 96 115 130 C150 122 195 108 230 90 Z"
            fill="currentColor"
          />
          <path
            d="M230 90 C210 32 238 18 250 18 C250 45 240 70 230 90 Z"
            fill="currentColor"
          />
          <polygon
            points="225,175 229,188 242,188 231,196 235,209 225,201 215,209 219,196 208,188 221,188"
            fill="currentColor"
          />
          <polygon
            points="275,130 277,137 284,137 278,141 280,148 275,144 270,148 272,141 266,137 273,137"
            fill="currentColor"
          />
          <path
            d="M170 245 C185 225 200 240 215 230"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path
            d="M215 228 L224 226 L220 231 L226 232 L223 234 L216 233 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-0 pt-8 sm:px-6 sm:pt-9 md:pt-10 lg:px-8 lg:pt-11 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:items-stretch md:gap-8 lg:gap-10">
          <div className="relative mx-auto flex w-full max-w-xl md:max-w-none">
            <div className="relative h-[280px] w-full flex-1 overflow-hidden sm:h-[320px] md:h-full md:min-h-[400px] lg:min-h-[430px]">
              <Image
                src="/about/rabat-oudayas-hd.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                className="object-cover object-[22%_center] md:object-[20%_center]"
              />
            </div>
          </div>

          <div className="md:pl-2 lg:pl-6 xl:pl-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1280e6] sm:text-[13px]">
                {t("eyebrow")}
              </span>
              <span
                className="h-[2px] w-12 rounded-full bg-[#1280e6]"
                aria-hidden
              />
            </div>

            <h2 className="mt-3 font-sans text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-[#091e52] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.4rem]">
              {t("titleLine1")}{" "}
              <br className="hidden sm:inline" />
              {t("titleLine2")}
            </h2>

            <p className="mt-3.5 text-[14px] leading-[1.65] text-slate-600 sm:text-[15px]">
              {t("body")}
            </p>

            <div className="mt-5 sm:mt-6">
              <Link
                href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-[#0a2786] px-6 text-[14px] font-semibold text-white shadow-md shadow-[#0a2786]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#071d68] hover:shadow-lg hover:shadow-[#0a2786]/30 active:translate-y-0 sm:h-12 sm:px-7 sm:text-[14.5px]"
              >
                {t("cta")}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          <StatsBar />
        </div>
      </div>
    </section>
  );
}
