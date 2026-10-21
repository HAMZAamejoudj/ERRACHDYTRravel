import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Camera,
  Luggage,
  Users,
} from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function AboutServicesSection() {
  const t = await getTranslations("aboutPage.transportServices");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const services = [
    {
      key: "school",
      image: "/about/service-scolaire.webp",
      badgeBg: "bg-[#0070e0]",
      badgeIcon: Users,
      title: t("items.schoolTitle"),
      subtitle: t("items.schoolSubtitle"),
      alt: t("items.schoolAlt"),
      href: `/${locale}/services#scolaire`,
    },
    {
      key: "business",
      image: "/about/service-entreprise.webp",
      badgeBg: "bg-[#6f42c1]",
      badgeIcon: Briefcase,
      title: t("items.businessTitle"),
      subtitle: t("items.businessSubtitle"),
      alt: t("items.businessAlt"),
      href: `/${locale}/services#entreprise`,
    },
    {
      key: "tourist",
      image: "/about/service-touristique.webp",
      badgeBg: "bg-[#16a34a]",
      badgeIcon: Camera,
      title: t("items.touristTitle"),
      subtitle: t("items.touristSubtitle"),
      alt: t("items.touristAlt"),
      href: `/${locale}/services#touristique`,
    },
    {
      key: "shuttle",
      image: "/about/service-navette.webp",
      badgeBg: "bg-[#e83e8c]",
      badgeIcon: Luggage,
      title: t("items.shuttleTitle"),
      subtitle: t("items.shuttleSubtitle"),
      alt: t("items.shuttleAlt"),
      href: `/${locale}/services#navette`,
    },
  ];

  return (
    <section className="bg-white py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Soft ice-blue rounded card container */}
        <div
          dir="ltr"
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-[linear-gradient(135deg,#eff8fd_0%,#f6faff_48%,#eaf4fc_100%)] p-5 sm:p-6 md:p-8 lg:p-9 xl:p-10 border border-blue-100/70 shadow-[0_4px_24px_rgba(11,35,104,0.03)]"
        >
          {/* Main Grid: Text on Left (4 cols), 4 Cards on Right (8 cols) */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* 1. Left Text Block */}
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
                {t("titleLine1")}
                <br />
                {t("titleLine2")}
              </h2>
              <p className="mt-3 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500 max-w-md">
                {t("description")}
              </p>
              <div className="mt-5 flex">
                <Link
                  href={`/${locale}/flotte`}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#0948b3] bg-white px-5 py-2 text-[12px] sm:text-[12.5px] font-bold text-[#0948b3] shadow-sm transition-all duration-200 hover:bg-[#0948b3] hover:text-white"
                >
                  <span>{t("cta")}</span>
                  {isRtl ? (
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  )}
                </Link>
              </div>
            </div>

            {/* 2. Right Side: 4 Service Cards */}
            <div className="lg:col-span-8 xl:col-span-8">
              <div
                dir="ltr"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 xl:gap-4"
              >
                {services.map((service) => {
                  const Icon = service.badgeIcon;
                  return (
                    <Link
                      key={service.key}
                      href={service.href}
                      className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-2.5 pb-3.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Photo Container with overlapping badge */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Circular badge overlapping bottom-left */}
                        <div
                          className={cn(
                            "absolute bottom-2 left-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-white shadow-md",
                            service.badgeBg
                          )}
                        >
                          <Icon className="h-3.5 w-3.5 fill-current" />
                        </div>
                      </div>

                      {/* Content Row: Title, Subtitle & Arrow */}
                      <div
                        dir={isRtl ? "rtl" : "ltr"}
                        className="mt-3 flex items-start justify-between gap-2 px-1"
                      >
                        <div
                          className={cn(
                            "flex flex-col flex-1",
                            isRtl ? "text-right" : "text-left"
                          )}
                        >
                          <h3 className="text-[13px] sm:text-[13.5px] font-extrabold text-[#092264] leading-tight group-hover:text-[#1280e6] transition-colors">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-[10.5px] sm:text-[11px] font-medium text-slate-500 leading-snug whitespace-pre-line">
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Arrow Action Button */}
                        <div className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200/90 text-blue-600 transition-all duration-200 group-hover:border-[#0948b3] group-hover:bg-[#0948b3] group-hover:text-white">
                          {isRtl ? (
                            <ArrowLeft className="h-3 w-3" />
                          ) : (
                            <ArrowRight className="h-3 w-3" />
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
