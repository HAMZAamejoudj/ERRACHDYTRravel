import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactCommitmentsSection } from "@/components/contact/contact-commitments-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMapSection } from "@/components/contact/contact-map-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "contactPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <ContactHero />
        <ScrollReveal delay={0.05}>
          <ContactMapSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ContactFormSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ContactCommitmentsSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
