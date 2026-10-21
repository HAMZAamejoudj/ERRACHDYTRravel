import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { isRtlLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import {
  footerServiceKeys,
  mainNav,
  siteConfig,
  siteContentClass,
  socialLinks,
} from "@/lib/site-config";

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["label"] }) {
  const className = "size-4 fill-current";
  switch (name) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M13.5 22v-8h2.7l.4-3.1H13.5V9.1c0-.9.2-1.5 1.5-1.5H17V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H8.2v3.1H10.6v8h2.9z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.8 5 12 5 12 5s-5.8 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 9.2 2 12 2 12s0 2.8.4 4.8a2.5 2.5 0 0 0 1.8 1.8C6.2 19 12 19 12 19s5.8 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 14.8 22 12 22 12s0-2.8-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4.98 3.5a2.25 2.25 0 1 1-.02 4.5 2.25 2.25 0 0 1 .02-4.5zM3 8.98h4v12H3v-12zM14.5 8.98c-2.67 0-4.33 1.45-4.5 3.5v8.02h4v-7.1c0-1.7 1.3-2.9 3.1-2.9 1.75 0 2.9 1.2 2.9 2.9v7.1h4v-7.5c0-3.9-2.1-6.03-5.5-6.03z" />
        </svg>
      );
    default:
      return null;
  }
}

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tSite = await getTranslations("site");
  const locale = await getLocale();
  const isRtl = isRtlLocale(locale);

  return (
    <footer
      id="contact"
      dir="ltr"
      className="bg-[#003399] text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        {t("heading")}
      </h2>
      <div className={`${siteContentClass} py-12 sm:py-14`}>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          <div
            className={cn(
              "col-span-2 lg:col-span-1",
              isRtl && "flex flex-col items-end"
            )}
          >
            <div className={isRtl ? "w-fit max-w-full" : undefined}>
              <Link
                href="/"
                className={cn(
                  "inline-flex items-center gap-3",
                  isRtl && "justify-end"
                )}
              >
                <Image
                  src={siteConfig.logoSrc}
                  alt={tSite("name")}
                  width={240}
                  height={64}
                  className="h-11 w-auto max-w-[210px] brightness-0 invert sm:h-12"
                />
              </Link>
              <p
                dir={isRtl ? "rtl" : "ltr"}
                className={`mt-4 text-sm leading-relaxed text-white/90 ${isRtl ? "text-right" : "max-w-xs text-left"}`}
              >
                {tSite("tagline")}
              </p>
              <div
                className={cn(
                  "mt-5 flex items-center gap-2.5",
                  isRtl && "justify-end"
                )}
              >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex size-9 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90 ${social.className}`}
                >
                  <SocialIcon name={social.label} />
                </a>
              ))}
              </div>
            </div>
          </div>

          <div dir={isRtl ? "rtl" : "ltr"} className="min-w-0">
            <h3
              className={`text-base font-bold text-white ${isRtl ? "text-right" : "text-left"}`}
            >
              {t("quickLinks")}
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-white/80"
                      aria-hidden
                    />
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div dir={isRtl ? "rtl" : "ltr"} className="min-w-0">
            <h3
              className={`text-base font-bold text-white ${isRtl ? "text-right" : "text-left"}`}
            >
              {t("ourServices")}
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {footerServiceKeys.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white ${isRtl ? "flex-row-reverse justify-end text-right" : ""}`}
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-white/80"
                      aria-hidden
                    />
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`col-span-2 lg:col-span-1 ${isRtl ? "flex flex-col items-end lg:pr-1 xl:pr-2" : ""}`}
          >
            <h3
              dir={isRtl ? "rtl" : "ltr"}
              className={`text-base font-bold text-white ${isRtl ? "w-full text-right" : "text-left"}`}
            >
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li className={isRtl ? "flex justify-end" : undefined}>
                <a
                  href={siteConfig.phoneHref}
                  dir="ltr"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
              <li className={isRtl ? "flex justify-end" : undefined}>
                <a
                  href={siteConfig.emailHref}
                  dir="ltr"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li className={isRtl ? "flex justify-end" : undefined}>
                <div
                  dir="ltr"
                  className="inline-flex max-w-[17rem] items-start gap-2.5 sm:max-w-[19rem]"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden />
                  <span dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "text-right" : ""}>
                    {tSite("address")}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div
          className={`${siteContentClass} flex flex-col items-center justify-center gap-1 py-4 text-center text-xs text-white/80 sm:text-[13px]`}
        >
          <p dir={isRtl ? "rtl" : "ltr"}>
            {t("developedBy")}{" "}
            <a
              href="https://www.kdk-univers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              KDK-Univers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
