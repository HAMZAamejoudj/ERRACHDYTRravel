import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, FileText, Phone } from "lucide-react";

import { PartnersMarquee } from "@/components/home/partners-marquee";
import { PartnerCard, partners } from "@/components/home/partners-section";
import { Link } from "@/i18n/navigation";
import { isRtlLocale } from "@/lib/locale";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export async function ServiceCtaBannerSection() {
  const t = await getTranslations("servicesPage.ctaBanner");
  const tTrust = await getTranslations("servicesPage.trust");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  return (
    <section className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div
          dir="ltr"
          className="relative min-h-[320px] w-full overflow-hidden rounded-3xl shadow-xl sm:min-h-[360px] md:h-[400px] lg:h-[440px] xl:h-[460px]"
        >
          <Image
            src="/services/Autocar Errachdy au bord du fleuve.png"
            alt={t("imageAlt")}
            fill
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#07246b]/28 via-[#0048ba]/38 to-[#051c54]/48" />

          <div
            dir={isRtl ? "rtl" : "ltr"}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center sm:px-8 md:px-12"
          >
            <div className="flex max-w-2xl flex-col items-center sm:max-w-3xl">
              <h2 className="text-xl font-black leading-tight tracking-tight text-white drop-shadow-md sm:text-2xl md:text-3xl lg:text-[30px]">
                {t("title")}
              </h2>
              <p className="mt-2.5 max-w-xl text-xs font-medium leading-relaxed text-white/95 drop-shadow-md sm:mt-3 sm:text-sm md:text-[15px]">
                {t("subtitle")}
              </p>

              <div
                className={cn(
                  "mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4",
                  isRtl && "flex-row-reverse"
                )}
              >
                <Link
                  href="/contact#formulaire-contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-[#07246b] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:px-6 sm:py-3 sm:text-[13px]"
                >
                  <FileText className="size-4 text-[#0070e0]" aria-hidden />
                  <span>{t("cta")}</span>
                  <ArrowRight
                    className={cn(
                      "size-3.5 transition-transform group-hover:translate-x-1",
                      isRtl && "rotate-180 group-hover:-translate-x-1"
                    )}
                    aria-hidden
                  />
                </Link>

                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#003882]/90 px-5 py-2.5 text-xs font-bold text-white shadow-lg backdrop-blur-xs transition-all hover:border-white/50 hover:bg-[#003882] sm:px-6 sm:py-3 sm:text-[13px]"
                >
                  <Phone className="size-4 text-white" aria-hidden />
                  <span dir="ltr">{t("phone")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mx-auto w-full max-w-[1536px] px-4 text-center sm:px-6 md:px-12 lg:px-16 xl:px-20">
          <h3 className="text-lg font-bold tracking-tight text-[#07246b] sm:text-xl">
            {tTrust("title")}
          </h3>
          <p className="mt-1 text-xs text-[#2c3e66]/70 sm:text-sm">
            {tTrust("subtitle")}
          </p>
        </div>

        <div className="relative mt-6 sm:mt-8">
          <PartnersMarquee>
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </PartnersMarquee>
        </div>
      </div>
    </section>
  );
}
