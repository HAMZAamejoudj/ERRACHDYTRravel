import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function AboutTeamSection() {
  const t = await getTranslations("aboutPage.team");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const teamMembers = [
    {
      key: "drivers",
      image: "/about/team-driver-hd.webp",
      title: t("members.driversTitle"),
      subtitle: t("members.driversSubtitle"),
      alt: t("members.driversAlt"),
    },
    {
      key: "client",
      image: "/about/team-support-hd.webp",
      title: t("members.clientTitle"),
      subtitle: t("members.clientSubtitle"),
      alt: t("members.clientAlt"),
    },
    {
      key: "maintenance",
      image: "/about/team-maintenance-hd.webp",
      title: t("members.maintenanceTitle"),
      subtitle: t("members.maintenanceSubtitle"),
      alt: t("members.maintenanceAlt"),
    },
    {
      key: "direction",
      image: "/about/team-direction-hd.webp",
      title: t("members.directionTitle"),
      subtitle: t("members.directionSubtitle"),
      alt: t("members.directionAlt"),
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main wrapper stays LTR layout (Text on left, 4 Cards on right) */}
        <div
          dir="ltr"
          className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10"
        >
          {/* 1. Left Column: Text & CTA */}
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
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#092264] sm:text-3xl lg:text-[28px] xl:text-[30px] leading-[1.2]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="mt-3.5 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500 max-w-xl">
              {t("description")}
            </p>
            <div className="mt-6 flex">
              <Link
                href={`/${locale}/contact`}
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

          {/* 2. Right Side: 4 Team Cards Grid */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div
              dir="ltr"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 xl:gap-4"
            >
              {teamMembers.map((member) => (
                <div
                  key={member.key}
                  className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-2.5 pb-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Photo with rounded corners */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div
                    dir={isRtl ? "rtl" : "ltr"}
                    className="mt-3 flex flex-col items-center text-center px-1"
                  >
                    <h3 className="text-[13px] sm:text-[13.5px] font-extrabold text-[#092264] leading-tight">
                      {member.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-[11.5px] font-medium text-slate-500 leading-snug whitespace-pre-line">
                      {member.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
