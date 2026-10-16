import { getTranslations } from "next-intl/server";
import { Heart, Leaf, ShieldCheck, Star, Users } from "lucide-react";

const commitmentKeys = [
  {
    icon: ShieldCheck,
    iconClass: "text-[#1280e6]",
    titleKey: "securityTitle",
    descKey: "securityDesc",
  },
  {
    icon: Users,
    iconClass: "text-[#1280e6]",
    titleKey: "professionalTitle",
    descKey: "professionalDesc",
  },
  {
    icon: Leaf,
    iconClass: "text-emerald-500",
    titleKey: "comfortTitle",
    descKey: "comfortDesc",
  },
  {
    icon: Star,
    iconClass: "text-[#1280e6]",
    titleKey: "punctualityTitle",
    descKey: "punctualityDesc",
  },
  {
    icon: Heart,
    iconClass: "text-[#e91e8c]",
    titleKey: "serviceTitle",
    descKey: "serviceDesc",
  },
] as const;

export async function CommitmentsSection() {
  const t = await getTranslations("commitments");

  return (
    <section
      className="bg-[linear-gradient(180deg,#eef6fc_0%,#f7fbff_45%,#ffffff_100%)] py-12 sm:py-14 lg:py-16"
      aria-labelledby="commitments-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
          <div className="shrink-0 lg:max-w-[280px] xl:max-w-[320px]">
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
              id="commitments-heading"
              className="mt-3 font-sans text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-[#091e52] sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]"
            >
              {t("title")}
            </h2>
          </div>

          <ul className="grid flex-1 grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {commitmentKeys.map(({ icon: Icon, iconClass, titleKey, descKey }) => (
              <li
                key={titleKey}
                className="flex flex-col items-center px-3 py-6 text-center first:lg:pl-0 sm:py-4 lg:px-4 lg:py-2 xl:px-5"
              >
                <Icon
                  className={`size-9 sm:size-10 ${iconClass}`}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-3 text-[15px] font-bold text-[#091e52] sm:text-base">
                  {t(titleKey)}
                </h3>
                <p className="mt-1.5 max-w-[180px] text-[12px] leading-relaxed text-slate-500 sm:text-[12.5px]">
                  {t(descKey)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
