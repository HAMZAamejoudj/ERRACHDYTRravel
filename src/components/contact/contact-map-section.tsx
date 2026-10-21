import { getLocale, getTranslations } from "next-intl/server";
import { MapPin, Navigation } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const OFFICE_QUERY = "19 Avenue Al Ijtihad, Yacoub El Mansour, Rabat, Morocco";
const OFFICE = { lat: 33.9879123, lon: -6.8775306 };

export async function ContactMapSection() {
  const t = await getTranslations("contactPage.location");
  const tSite = await getTranslations("site");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);
  const bbox = [
    OFFICE.lon - 0.018,
    OFFICE.lat - 0.012,
    OFFICE.lon + 0.018,
    OFFICE.lat + 0.012,
  ].join(",");
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${OFFICE.lat}%2C${OFFICE.lon}`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_QUERY)}`;

  return (
    <section
      id="localisation"
      className="relative bg-gradient-to-b from-white via-[#f8fbfe] to-white py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={cn("max-w-2xl", isRtl ? "text-right" : "text-left")}
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0070e0]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
            {t("title")}
          </h2>
          <p className="mt-2.5 text-[14.5px] font-medium leading-[1.68] text-[#2c3e66]/90 sm:text-[15.5px]">
            {t("description")}
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg sm:mt-10">
          <div className="relative h-[380px] w-full sm:h-[460px] md:h-[520px] lg:h-[560px]">
            <iframe
              title={t("mapTitle")}
              src={mapSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div
            dir={isRtl ? "rtl" : "ltr"}
            className="flex flex-col gap-4 border-t border-slate-200/80 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5"
          >
            <div className={cn("flex items-center gap-3", isRtl && "text-right")}>
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#0070e0] text-white shadow-md shadow-blue-500/20">
                <MapPin className="size-5" strokeWidth={1.8} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-bold leading-tight text-[#07246b] sm:text-[15px]">
                  {t("officeBadge")}
                </p>
                <p className="mt-0.5 text-[12.5px] font-medium text-slate-500 sm:text-[13px]">
                  {tSite("address")}
                </p>
              </div>
            </div>

            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#07246b] px-5 text-[13px] font-bold text-white transition-colors hover:bg-[#0070e0]"
            >
              <Navigation className="size-4" aria-hidden />
              {t("directions")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
