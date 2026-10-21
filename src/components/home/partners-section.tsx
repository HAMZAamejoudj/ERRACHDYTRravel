import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { PartnersMarquee } from "@/components/home/partners-marquee";
import { siteContentClass } from "@/lib/site-config";

export const partners = [
  {
    name: "SNTL",
    label: "SNTL",
    href: "https://www.sntl.ma/",
    logo: "/partners/sntl.png",
    width: 634,
    height: 257,
    unoptimized: true,
    imageClass:
      "max-h-[52px] max-w-[130px] sm:max-h-[58px] sm:max-w-[150px]",
  },
  {
    name: "Association Sportive de Salé Basketball",
    label: "AS Salé Basketball",
    href: "https://assbasketball.ma/",
    logo: "/partners/ass-basketball.png",
    width: 80,
    height: 80,
    imageClass: "max-h-[56px] max-w-[56px] sm:max-h-[64px] sm:max-w-[64px]",
  },
  {
    name: "Al Manbaa",
    label: "Al Manbaa",
    href: "https://www.almanbaa.ac.ma/",
    logo: "/partners/al-manbaa.png",
    width: 150,
    height: 60,
    imageClass:
      "max-h-[50px] max-w-[145px] sm:max-h-[56px] sm:max-w-[160px]",
  },
  {
    name: "Lamalif Group",
    label: "Lamalif Group",
    href: "https://lamalifgroup.ma/",
    logo: "/partners/lamalif.png",
    width: 140,
    height: 52,
    imageClass:
      "max-h-[48px] max-w-[140px] sm:max-h-[54px] sm:max-w-[155px]",
  },
  {
    name: "Collège Scientifique Abboud",
    label: "CS Abboud",
    href: "https://csabboud.net/",
    logo: "/partners/cs-abboud.png",
    width: 120,
    height: 104,
    unoptimized: true,
    imageClass: "max-h-[76px] max-w-[76px] sm:max-h-[84px] sm:max-w-[84px]",
  },
  {
    name: "KDK-Univers",
    label: "KDK-Univers",
    href: "https://www.kdk-univers.com/",
    logo: "/partners/kdk-univers.png",
    width: 240,
    height: 80,
    unoptimized: true,
    imageClass:
      "max-h-[48px] max-w-[140px] sm:max-h-[54px] sm:max-w-[160px]",
  },
] as const;

export function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <li className="flex w-[150px] shrink-0 flex-col items-center gap-2.5 sm:w-[170px]">
      <Link
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full flex-col items-center gap-2.5 transition-opacity hover:opacity-80"
        aria-label={partner.name}
      >
        <span className="flex h-[4.75rem] w-full items-center justify-center px-2 sm:h-[5.25rem]">
          <Image
            src={partner.logo}
            alt=""
            width={partner.width}
            height={partner.height}
            sizes="(max-width: 640px) 120px, 170px"
            quality={92}
            unoptimized={"unoptimized" in partner ? partner.unoptimized : false}
            className={`h-auto w-auto object-contain object-center ${partner.imageClass}`}
          />
        </span>
        <span className="line-clamp-2 text-center text-[11px] font-semibold leading-snug text-[#091e52] sm:text-xs">
          {partner.label}
        </span>
      </Link>
    </li>
  );
}

export async function PartnersSection() {
  const t = await getTranslations("partners");

  return (
    <section
      id="partenaires"
      className="overflow-hidden bg-white py-10 sm:py-11 lg:py-12"
      aria-labelledby="partners-heading"
    >
      <div className={`${siteContentClass} text-center`}>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em] text-[#1280e6] sm:text-[13px] sm:tracking-[0.16em]">
              {t("eyebrow")}
            </span>
            <span
              className="h-[2px] w-8 rounded-full bg-[#1280e6]"
              aria-hidden
            />
          </div>
          <h2
            id="partners-heading"
            className="mt-3 font-sans text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-[#091e52] sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]"
          >
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <PartnersMarquee>
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </PartnersMarquee>
      </div>
    </section>
  );
}
