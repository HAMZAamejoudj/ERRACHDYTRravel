import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceAdvantagesSection } from "@/components/services/service-advantages-section";
import { ServiceCtaBannerSection } from "@/components/services/service-cta-banner-section";
import { ServicePersonnelSection } from "@/components/services/service-personnel-section";
import { ServiceProcessSection } from "@/components/services/service-process-section";
import { ServiceScolaireSection } from "@/components/services/service-scolaire-section";
import { ServiceTouristiqueSection } from "@/components/services/service-touristique-section";
import { ServicesHero } from "@/components/services/services-hero";
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
    namespace: "servicesPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <ServicesHero />
        <ScrollReveal delay={0.05}>
          <ServicePersonnelSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ServiceScolaireSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ServiceTouristiqueSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ServiceAdvantagesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ServiceProcessSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ServiceCtaBannerSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
