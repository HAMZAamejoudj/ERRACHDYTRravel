import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, FileText, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { isRtlLocale } from "@/lib/locale";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export async function FleetCtaBanner() {
  const t = await getTranslations("fleetPage.ctaBanner");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  return (
    <section className="relative bg-white pt-4 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div
          dir="ltr"
          className="relative min-h-[320px] w-full overflow-hidden rounded-3xl shadow-xl sm:min-h-[360px] md:h-[400px] lg:h-[440px] xl:h-[460px]"
        >
          {/* Background Image: Autocar Errachdy au bord du fleuve */}
          <Image
            src="/services/Autocar Errachdy au bord du fleuve.png"
            alt={t("imageAlt")}
            fill
            sizes="100vw"
            quality={95}
            priority
            className="object-cover object-center"
          />

          {/* Light veil so the coach and tower stay visible behind the text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07246b]/28 via-[#0048ba]/38 to-[#051c54]/48" />

          {/* Banner Content (Centered in the middle) */}
          <div
            dir={isRtl ? "rtl" : "ltr"}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-center"
          >
            <div className="max-w-2xl sm:max-w-3xl flex flex-col items-center">
              <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[30px] leading-tight drop-shadow-md">
                {t("title")}
              </h2>

              {/* Subtitle */}
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-[15px] font-medium text-white/95 leading-relaxed drop-shadow-md max-w-xl">
                {t("subtitle")}
              </p>

              {/* Action Buttons */}
              <div
                className={cn(
                  "mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4",
                  isRtl && "flex-row-reverse"
                )}
              >
                {/* Devis Button */}
                <Link
                  href="/contact#formulaire-contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-extrabold text-[#07246b] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  <FileText className="size-4 text-[#0070e0]" aria-hidden />
                  <span>{t("quoteBtn")}</span>
                  <ArrowRight
                    className={cn(
                      "size-3.5 transition-transform group-hover:translate-x-1",
                      isRtl && "rotate-180 group-hover:-translate-x-1"
                    )}
                    aria-hidden
                  />
                </Link>

                {/* Phone Button */}
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#003882]/90 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-bold text-white shadow-lg backdrop-blur-xs transition-all hover:bg-[#003882] hover:border-white/50"
                >
                  <Phone className="size-4 text-white" aria-hidden />
                  <span dir="ltr">{t("phone")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
