import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutFleetSection } from "@/components/about/about-fleet-section";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStatsBanner } from "@/components/about/about-stats-banner";
import { MissionSection } from "@/components/about/mission-section";
import { VisionValuesSection } from "@/components/about/vision-values-section";
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
  const t = await getTranslations({ locale, namespace: "aboutPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <AboutHero />
        <ScrollReveal delay={0.05}>
          <MissionSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <VisionValuesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <AboutStatsBanner />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <AboutFleetSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
