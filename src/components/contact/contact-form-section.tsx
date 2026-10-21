"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function ContactFormSection() {
  const t = useTranslations("contactPage");
  const locale = useLocale();
  const isRtl = isRtlLocale(locale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate fast submission feedback
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const infoCards = [
    {
      icon: Phone,
      label: t("info.phone.label"),
      value: t("info.phone.value"),
      sub: t("info.phone.sub"),
      href: "tel:+212661234567",
      isLtrValue: true,
    },
    {
      icon: Mail,
      label: t("info.email.label"),
      value: t("info.email.value"),
      sub: t("info.email.sub"),
      href: "mailto:contact@errachdytravel.ma",
      isEmail: true,
      isLtrValue: true,
    },
    {
      icon: MapPin,
      label: t("info.address.label"),
      value: t("info.address.value"),
      sub: t("info.address.sub"),
    },
    {
      icon: Clock,
      label: t("info.hours.label"),
      value: t("info.hours.value"),
      sub: t("info.hours.sub"),
    },
  ];

  return (
    <section id="formulaire-contact" className="relative bg-white py-12 sm:py-16 md:py-20" dir="ltr">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Left Column: 4 Information Cards (Stacked) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              const content = (
                <div
                  key={idx}
                  dir={isRtl ? "rtl" : "ltr"}
                  className={cn(
                    "group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_12px_rgba(7,36,107,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_24px_rgba(7,36,107,0.08)]",
                    isRtl ? "text-right" : "text-left"
                  )}
                >
                  {/* Circular Blue Icon */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0070e0] text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" strokeWidth={1.8} aria-hidden />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0070e0]">
                      {card.label}
                    </span>
                    <span
                      dir={card.isLtrValue ? "ltr" : undefined}
                      className={cn(
                        "mt-0.5 truncate font-bold tracking-tight",
                        card.isEmail
                          ? "text-[15px] text-[#0070e0] hover:underline sm:text-[16px]"
                          : "text-[15px] text-[#07246b] sm:text-[16px]",
                        isRtl && card.isLtrValue && "text-right inline-block w-fit mr-0 ml-auto"
                      )}
                    >
                      {card.value}
                    </span>
                    <span className="mt-0.5 text-[13px] font-medium text-[#2c3e66]/70">
                      {card.sub}
                    </span>
                  </div>
                </div>
              );

              return card.href ? (
                <a key={idx} href={card.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-7">
            <div
              dir={isRtl ? "rtl" : "ltr"}
              className={cn(
                "relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_25px_rgba(7,36,107,0.06)] sm:p-8 lg:p-10",
                isRtl ? "text-right" : "text-left"
              )}
            >
              {/* Form Header with Paper Plane trajectory illustration */}
              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0070e0]">
                    {t("form.eyebrow")}
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight tracking-tight text-[#07246b] sm:text-3xl lg:text-[34px]">
                    {t("form.title")}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] font-medium leading-[1.68] text-[#2c3e66]/90 sm:text-[15.5px]">
                    {t("form.subtitle")}
                  </p>
                </div>

                {/* Paper plane icon with trajectory flourish */}
                <div className="hidden sm:flex items-center text-[#0070e0]">
                  <svg
                    width="64"
                    height="32"
                    viewBox="0 0 64 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn("opacity-70", isRtl && "scale-x-[-1]")}
                  >
                    <path
                      d="M2 28C14 28 20 8 36 12C48 15 50 4 60 2"
                      stroke="#0070e0"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <Send className={cn("size-6 text-[#0070e0] ml-1", isRtl && "scale-x-[-1]")} />
                </div>
              </div>

              {/* Form Content */}
              {status === "success" ? (
                <div className="my-10 flex flex-col items-center justify-center rounded-2xl bg-emerald-50/80 p-8 text-center border border-emerald-200">
                  <CheckCircle2 className="size-12 text-emerald-600 mb-3" />
                  <h4 className="text-lg font-bold text-emerald-900">
                    {t("form.successTitle")}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-emerald-700 max-w-md">
                    {t("form.successMsg")}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-5 rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
                  >
                    Nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                  {/* Row 1: Nom complet + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[13.5px] font-semibold text-[#07246b]">
                        {t("form.nameLabel")}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("form.namePlaceholder")}
                        className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-3.5 py-2.5 font-sans text-sm font-medium text-[#07246b] transition focus:border-[#0070e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070e0]/20 sm:text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[13.5px] font-semibold text-[#07246b]">
                        {t("form.emailLabel")}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("form.emailPlaceholder")}
                        className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-3.5 py-2.5 font-sans text-sm font-medium text-[#07246b] transition focus:border-[#0070e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070e0]/20 sm:text-[15px]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Téléphone + Sujet */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[13.5px] font-semibold text-[#07246b]">
                        {t("form.phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t("form.phonePlaceholder")}
                        className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-3.5 py-2.5 font-sans text-sm font-medium text-[#07246b] transition focus:border-[#0070e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070e0]/20 sm:text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[13.5px] font-semibold text-[#07246b]">
                        {t("form.subjectLabel")}
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-3.5 py-2.5 font-sans text-sm font-medium text-[#07246b] transition focus:border-[#0070e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070e0]/20 sm:text-[15px]"
                      >
                        <option value="" disabled>
                          {t("form.subjectPlaceholder")}
                        </option>
                        <option value="tourist">{t("form.subjects.tourist")}</option>
                        <option value="personnel">{t("form.subjects.personnel")}</option>
                        <option value="school">{t("form.subjects.school")}</option>
                        <option value="disposal">{t("form.subjects.disposal")}</option>
                        <option value="other">{t("form.subjects.other")}</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Votre message */}
                  <div>
                    <label className="mb-1.5 block text-[13.5px] font-semibold text-[#07246b]">
                      {t("form.messageLabel")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-[#fbfdff] px-3.5 py-2.5 font-sans text-sm font-medium text-[#07246b] transition focus:border-[#0070e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0070e0]/20 sm:text-[15px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0070e0] py-3.5 px-6 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:bg-[#005ec2] hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99] disabled:opacity-75"
                  >
                    <Send className={cn("size-4", isRtl && "rotate-180")} aria-hidden />
                    <span>
                      {status === "submitting" ? t("form.submitting") : t("form.submitBtn")}
                    </span>
                    <span className={cn("transition-transform group-hover:translate-x-1", isRtl && "rotate-180")}>
                      →
                    </span>
                  </button>

                  {/* Security Footnote with Padlock */}
                  <div
                    className={cn(
                      "mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400 text-center",
                      isRtl && "flex-row-reverse"
                    )}
                  >
                    <Lock className="size-3 text-slate-400 shrink-0" aria-hidden />
                    <span>{t("form.securityNotice")}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
