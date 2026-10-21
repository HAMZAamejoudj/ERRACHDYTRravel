import { getLocale, getTranslations } from "next-intl/server";
import { Clock3, Handshake, Headset } from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function ContactCommitmentsSection() {
  const t = await getTranslations("contactPage.engagement");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const cards = [
    {
      icon: Headset,
      title: t("card1.title"),
      desc: t("card1.desc"),
    },
    {
      icon: Handshake,
      title: t("card2.title"),
      desc: t("card2.desc"),
    },
    {
      icon: Clock3,
      title: t("card3.title"),
      desc: t("card3.desc"),
    },
  ];

  return (
    <section
      id="engagements"
      dir="ltr"
      className="relative overflow-hidden bg-[#f8fbfe]/80 py-12 sm:py-16 md:py-20"
    >
      {/* Subtle decorative background watermarks */}
      <div className="pointer-events-none absolute -right-12 top-0 size-80 opacity-[0.04] bg-[radial-gradient(#0070e0_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="pointer-events-none absolute -left-12 bottom-0 size-80 opacity-[0.04] bg-[radial-gradient(#0070e0_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0070e0]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
            {t("title")}
          </h2>
        </div>

        {/* 3 Cards Row (Fixed LTR order: 1 -> 2 -> 3) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                dir={isRtl ? "rtl" : "ltr"}
                className={cn(
                  "group flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 text-center shadow-[0_2px_12px_rgba(7,36,107,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(7,36,107,0.08)]"
                )}
              >
                {/* Icon Container */}
                <div className="flex size-14 items-center justify-center rounded-full bg-[#0070e0] text-white shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-7" strokeWidth={2} aria-hidden />
                </div>

                <h3 className="mt-4 text-[15px] font-bold text-[#07246b] sm:text-[16px]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] font-medium leading-relaxed text-[#2c3e66]/75 sm:text-[13px]">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
