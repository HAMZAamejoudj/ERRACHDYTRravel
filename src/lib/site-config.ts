/** Main content width — aligned with header/hero (`max-w-[1536px]`). */
export const siteContentClass =
  "mx-auto w-full max-w-[1536px] px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10";

export const siteConfig = {
  name: "ERRACHDY Travel",
  phone: "+212 661 23 45 67",
  phoneHref: "tel:+212661234567",
  email: "errachdytravel77@gmail.com",
  emailHref: "mailto:errachdytravel77@gmail.com",
  logoSrc: "/ERRACHDY_Travel_Logo_Vector.svg",
  heroImageSrc: "/Autocar à Rabat devant la tour Hassan.png",
} as const;

export const footerServiceKeys = [
  { href: "#services", key: "servicePersonnel" },
  { href: "#services", key: "serviceSchool" },
  { href: "#services", key: "serviceTourist" },
  { href: "#services", key: "serviceDisposal" },
  { href: "#services", key: "serviceCustom" },
] as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    className: "bg-[#1877f2]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    className:
      "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    className: "bg-[#ff0000]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    className: "bg-[#0a66c2]",
  },
] as const;

export const mainNav = [
  { href: "/", key: "home" },
  { href: "/a-propos", key: "about" },
  { href: "/services", key: "services" },
  { href: "/flotte", key: "fleet" },
  { href: "/contact", key: "contact" },
] as const;
