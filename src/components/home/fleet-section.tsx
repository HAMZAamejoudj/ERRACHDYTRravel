import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Users } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { siteContentClass } from "@/lib/site-config";

const fleetKeys = [
  {
    titleKey: "coachTitle",
    descKey: "coachDesc",
    capacityKey: "coachCapacity",
    altKey: "coachAlt",
    image: "/services/Image ChatGPT 16 oct. 2026, 17_49_43.png",
  },
  {
    titleKey: "midTitle",
    descKey: "midDesc",
    capacityKey: "midCapacity",
    altKey: "midAlt",
    image: "/services/Autocar Iveco Tourisme blanc Errachdy Travel.png",
  },
  {
    titleKey: "vipTitle",
    descKey: "vipDesc",
    capacityKey: "vipCapacity",
    altKey: "vipAlt",
    image: "/services/Minibus Volkswagen noir « Tourisme ».png",
  },
  {
    titleKey: "schoolTitle",
    descKey: "schoolDesc",
    capacityKey: "schoolCapacity",
    altKey: "schoolAlt",
    image: "/services/Minibus Iveco de transport scolaire.png",
  },
] as const;

export async function FleetSection() {
  const t = await getTranslations("fleet");

  return (
    <section
      id="flotte"
      className="bg-white pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14"
      aria-labelledby="fleet-heading"
    >
      <div className={siteContentClass}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                className="h-[2px] w-10 rounded-full bg-[#1280e6]"
                aria-hidden
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1280e6] sm:text-[13px]">
                {t("eyebrow")}
              </span>
            </div>
            <h2
              id="fleet-heading"
              className="mt-3 font-sans text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-[#091e52] sm:text-[2.1rem] lg:text-[2.35rem]"
            >
              {t("title")}
            </h2>
            <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/flotte"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border-2 border-[#1280e6] px-6 text-[14px] font-semibold text-[#1280e6] transition-colors hover:bg-[#1280e6]/5 lg:self-auto"
          >
            {t("viewAll")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-4 lg:gap-6 xl:gap-7">
          {fleetKeys.map((vehicle) => (
            <li key={vehicle.titleKey} className="relative">
              <article className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_-8px_rgba(15,23,42,0.1)] transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:scale-[1.04] hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(7,36,107,0.14)] sm:min-h-[360px] lg:min-h-[380px]">
                <div className="relative h-[220px] overflow-hidden bg-white sm:h-[235px] lg:h-[228px] xl:h-[248px]">
                  <Image
                    src={vehicle.image}
                    alt={t(vehicle.altKey)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center p-1.5 transition-transform duration-300 group-hover:scale-105 sm:p-2"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4.5">
                  <h3 className="text-[16px] font-bold leading-snug text-[#091e52] sm:text-[17px]">
                    {t(vehicle.titleKey)}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500 sm:text-[13.5px]">
                    {t(vehicle.descKey)}
                  </p>
                  <p className="mt-3.5 flex items-center gap-1.5 text-[13px] font-semibold text-[#1280e6] sm:text-[14px]">
                    <Users className="size-[18px] shrink-0" aria-hidden />
                    {t(vehicle.capacityKey)}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
