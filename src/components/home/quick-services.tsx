import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Camera, GraduationCap, Users } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const serviceItems = [
  {
    icon: Users,
    badgeBg: "bg-[#1280e6]",
    arrowClass:
      "bg-blue-50 text-[#1280e6] group-hover:bg-[#1280e6] group-hover:text-white",
    titleKey: "personnelTitle",
    descKey: "personnelDesc",
    altKey: "personnelAlt",
    image: "/services/transport-personnel-entreprises.jpg",
  },
  {
    icon: GraduationCap,
    badgeBg: "bg-[#e11d74]",
    arrowClass:
      "bg-pink-50 text-[#e11d74] group-hover:bg-[#e11d74] group-hover:text-white",
    titleKey: "schoolTitle",
    descKey: "schoolDesc",
    altKey: "schoolAlt",
    image: "/services/bus-scolaire-jaune.jpg",
  },
  {
    icon: Camera,
    badgeBg: "bg-[#16a34a]",
    arrowClass:
      "bg-emerald-50 text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white",
    titleKey: "touristTitle",
    descKey: "touristDesc",
    altKey: "touristAlt",
    image: "/services/tour-hassan-rabat.jpg",
  },
] as const;

export async function QuickServices() {
  const t = await getTranslations("services");

  return (
    <section
      id="services"
      className="relative z-20 -mt-2 pb-14 sm:-mt-3 sm:pb-16 md:-mt-4 lg:-mt-5 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.titleKey}
                href="#services"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_-5px_rgba(15,23,42,0.08),0_0_0_1px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.14)] sm:rounded-3xl"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-48 md:h-50">
                  <Image
                    src={service.image}
                    alt={t(service.altKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-4 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)]"
                    aria-hidden
                  />
                </div>

                <div className="relative z-10 -mt-6 ml-5 flex items-center sm:ml-6">
                  <div
                    className={cn(
                      "flex size-12 items-center justify-center rounded-full border-4 border-white text-white shadow-md sm:size-13",
                      service.badgeBg
                    )}
                  >
                    <Icon className="size-5.5 sm:size-6" aria-hidden />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 pt-3 sm:p-6 sm:pt-3.5">
                  <div>
                    <h3 className="text-[17px] font-bold leading-snug tracking-tight text-[#091e52] sm:text-[18px]">
                      {t(service.titleKey)}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 sm:text-[13px]">
                      {t(service.descKey)}
                    </p>
                  </div>

                  <div className="mt-5 flex justify-end">
                    <span
                      className={cn(
                        "inline-flex size-8 items-center justify-center rounded-full shadow-xs transition-all duration-200",
                        service.arrowClass
                      )}
                    >
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
