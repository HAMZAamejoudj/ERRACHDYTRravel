import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";

import { Link } from "@/i18n/navigation";
import {
  footerServiceKeys,
  mainNav,
  siteConfig,
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

  return (
    <footer
      id="contact"
      className="bg-[#003399] text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        {t("heading")}
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 xl:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={siteConfig.logoSrc}
                alt={tSite("name")}
                width={240}
                height={64}
                className="h-11 w-auto max-w-[210px] brightness-0 invert sm:h-12"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90">
              {tSite("tagline")}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
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

          <div>
            <h3 className="text-base font-bold text-white">{t("quickLinks")}</h3>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
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

          <div>
            <h3 className="text-base font-bold text-white">{t("ourServices")}</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServiceKeys.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
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

          <div>
            <h3 className="text-base font-bold text-white">{t("contact")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden />
                <span>{tSite("address")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
