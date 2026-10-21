import { getLocale, getTranslations } from "next-intl/server";
import { Bus, Star, Users } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function AboutStatsBanner() {
  const t = await getTranslations("aboutPage.stats");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  return (
    <section className="bg-white py-4 sm:py-6 md:py-8">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Outer light blue banner container */}
        <div
          dir="ltr"
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-[linear-gradient(90deg,#ebf4fd_0%,#e1effc_48%,#eaf3fd_100%)] p-4 sm:p-5 lg:py-5 lg:px-8 border border-blue-100/60 shadow-[0_4px_20px_rgba(11,35,104,0.04)]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6 xl:gap-8">
            {/* 1. Left side: Title */}
            <div
              dir={isRtl ? "rtl" : "ltr"}
              className={cn(
                "flex-shrink-0 text-center lg:text-left flex flex-col justify-center",
                isRtl && "lg:text-right"
              )}
            >
              <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#092264] leading-tight">
                {t("brand")}
              </span>
              <span className="text-[13px] sm:text-[15px] font-black uppercase tracking-[0.08em] text-[#092264] leading-tight mt-0.5">
                {t("title")}
              </span>
            </div>

            {/* 2. Center: White rounded pill card with 4 stats */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="bg-white rounded-2xl lg:rounded-full px-4 sm:px-6 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.05)] border border-slate-100/90">
                <div
                  dir="ltr"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-slate-100"
                >
                  {/* Stat 1: Destinations */}
                  <div className="flex items-center justify-center gap-3 lg:justify-start lg:px-4 xl:px-5">
                    {/* Blue silhouette icon with badge */}
                    <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-[#dbeefe] flex items-center justify-center text-[#0948b3]">
                      <svg
                        className="w-5 h-5 text-[#0948b3]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {/* 2 persons silhouette */}
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    </div>
                    <div
                      dir={isRtl ? "rtl" : "ltr"}
                      className={cn(
                        "flex flex-col items-center text-center lg:items-start lg:text-left",
                        isRtl && "lg:items-end lg:text-right"
                      )}
                    >
                      <span className="text-[14px] sm:text-[15px] font-extrabold text-[#092264] leading-tight">
                        {t("stat1.value")}
                      </span>
                      <span className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 leading-snug whitespace-pre-line mt-0.5">
                        {t("stat1.label")}
                      </span>
                    </div>
                  </div>

                  {/* Stat 2: Voyageurs */}
                  <div className="flex items-center justify-center gap-3 lg:justify-start lg:px-4 xl:px-5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[#0948b3]">
                      <Users className="w-6 h-6 text-[#0948b3] fill-[#0948b3]" />
                    </div>
                    <div
                      dir={isRtl ? "rtl" : "ltr"}
                      className={cn(
                        "flex flex-col items-center text-center lg:items-start lg:text-left",
                        isRtl && "lg:items-end lg:text-right"
                      )}
                    >
                      <span className="text-[13.5px] sm:text-[14.5px] font-extrabold text-[#092264] leading-tight">
                        {t("stat2.value")}
                      </span>
                      <span className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 leading-snug whitespace-pre-line mt-0.5">
                        {t("stat2.label")}
                      </span>
                    </div>
                  </div>

                  {/* Stat 3: Flotte moderne */}
                  <div className="flex items-center justify-center gap-3 lg:justify-start lg:px-4 xl:px-5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[#0948b3]">
                      <Bus className="w-6 h-6 text-[#0948b3]" />
                    </div>
                    <div
                      dir={isRtl ? "rtl" : "ltr"}
                      className={cn(
                        "flex flex-col items-center text-center lg:items-start lg:text-left",
                        isRtl && "lg:items-end lg:text-right"
                      )}
                    >
                      <span className="text-[13.5px] sm:text-[14.5px] font-extrabold text-[#092264] leading-tight">
                        {t("stat3.value")}
                      </span>
                      <span className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 leading-snug whitespace-pre-line mt-0.5">
                        {t("stat3.label")}
                      </span>
                    </div>
                  </div>

                  {/* Stat 4: Taux de satisfaction */}
                  <div className="flex items-center justify-center gap-3 lg:justify-start lg:px-4 xl:px-5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full border border-amber-300 bg-amber-50/70 flex items-center justify-center text-amber-500">
                      <Star className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                    </div>
                    <div
                      dir={isRtl ? "rtl" : "ltr"}
                      className={cn(
                        "flex flex-col items-center text-center lg:items-start lg:text-left",
                        isRtl && "lg:items-end lg:text-right"
                      )}
                    >
                      <span className="text-[13.5px] sm:text-[14.5px] font-extrabold text-[#092264] leading-tight">
                        {t("stat4.value")}
                      </span>
                      <span className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 leading-snug mt-0.5">
                        {t("stat4.label")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Right side: Handwriting tilted text note */}
            <div className="flex-shrink-0 flex items-center justify-center px-2 py-1">
              <div
                dir={isRtl ? "rtl" : "ltr"}
                className="relative -rotate-[7deg] select-none text-center"
              >
                <p className="font-accent font-bold text-[#0c3f9f] text-[18px] sm:text-[20px] lg:text-[21px] leading-[1.1] tracking-wide whitespace-nowrap">
                  {t("scriptLine1")}
                  <br />
                  {t("scriptLine2")}
                  {t("scriptLine3") ? (
                    <>
                      <br />
                      <span className="relative inline-block">
                        {t("scriptLine3")}
                        <svg
                          className="absolute -bottom-1 left-0 w-full overflow-visible pointer-events-none"
                          height="6"
                          viewBox="0 0 120 6"
                          fill="none"
                        >
                          <path
                            d="M2 4C35 1.5 85 1.5 118 4.5"
                            stroke="#0c3f9f"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </>
                  ) : (
                    <svg
                      className="mt-1 w-full overflow-visible pointer-events-none"
                      height="6"
                      viewBox="0 0 120 6"
                      fill="none"
                    >
                      <path
                        d="M2 4C35 1.5 85 1.5 118 4.5"
                        stroke="#0c3f9f"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
