import { getLocale, getTranslations } from "next-intl/server";
import {
  Bus,
  Calendar,
  ChevronRight,
  FileText,
  MessageSquare,
} from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export async function ServiceProcessSection() {
  const t = await getTranslations("servicesPage.howItWorks");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  const steps = [
    {
      num: "1",
      icon: FileText,
      title: t("steps.step1Title"),
      desc: t("steps.step1Desc"),
    },
    {
      num: "2",
      icon: MessageSquare,
      title: t("steps.step2Title"),
      desc: t("steps.step2Desc"),
    },
    {
      num: "3",
      icon: Calendar,
      title: t("steps.step3Title"),
      desc: t("steps.step3Desc"),
    },
    {
      num: "4",
      icon: Bus,
      title: t("steps.step4Title"),
      desc: t("steps.step4Desc"),
    },
  ];

  return (
    <section
      id="process"
      className="relative bg-white py-12 sm:py-16 md:py-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
            {t("title")}
          </h2>
          <p
            className={cn(
              "mx-auto mt-2.5 max-w-2xl text-[13.5px] font-medium leading-relaxed text-[#2c3e66]/80 sm:text-[14.5px]",
              isRtl && "translate-x-6"
            )}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* 4 Steps Row with arrows */}
        <div className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;

              return (
                <div key={idx} className="relative flex items-center">
                  <div className="flex flex-1 flex-col items-center text-center">
                    {/* Circle icon with floating step number badge */}
                    <div className="relative">
                      <div className="flex size-16 sm:size-20 items-center justify-center rounded-full border border-blue-100 bg-white text-[#0070e0] shadow-[0_4px_16px_rgba(0,112,224,0.08)]">
                        <Icon className="size-8 sm:size-9" strokeWidth={1.8} aria-hidden />
                      </div>
                      <div
                        className={cn(
                          "absolute -top-1 size-6 rounded-full bg-[#0070e0] text-xs font-black text-white flex items-center justify-center shadow-md",
                          isRtl ? "-left-1" : "-right-1"
                        )}
                      >
                        {step.num}
                      </div>
                    </div>

                    <h3 className="mt-4 text-[15px] sm:text-[16px] font-bold text-[#07246b]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-[210px] text-[12.5px] sm:text-[13px] leading-relaxed text-[#2c3e66]/75">
                      {step.desc}
                    </p>
                  </div>

                  {/* Desktop Chevron connector between steps */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center justify-center text-slate-300">
                      <ChevronRight
                        className={cn("size-6 stroke-[1.5]", isRtl && "rotate-180")}
                        aria-hidden
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
