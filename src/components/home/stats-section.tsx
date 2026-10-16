import { getTranslations } from "next-intl/server";
import { Bus, MapPin, Star, Users } from "lucide-react";

export async function StatsBar() {
  const t = await getTranslations("stats");

  const stats = [
    { icon: Users, value: t("travelersValue"), label: t("travelersLabel") },
    { icon: Bus, value: t("tripsValue"), label: t("tripsLabel") },
    { icon: MapPin, value: t("experienceValue"), label: t("experienceLabel") },
    { icon: Star, value: t("satisfactionValue"), label: t("satisfactionLabel") },
  ] as const;

  return (
    <div className="border border-slate-200/80 bg-[#eef6fc]">
      <ul className="grid grid-cols-1 divide-y divide-slate-200/70 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {stats.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex flex-col items-center justify-center gap-2.5 py-5 text-center sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-6 sm:text-left lg:justify-center lg:px-6 lg:py-7"
          >
            <Icon
              className="size-8 shrink-0 text-[#1280e6] sm:size-9"
              aria-hidden
            />
            <div>
              <p className="text-xl font-bold leading-none text-[#1280e6] sm:text-[1.35rem]">
                {value}
              </p>
              <p className="mt-1.5 text-[13px] font-semibold leading-snug text-[#0a2566] sm:text-[14px]">
                {label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
