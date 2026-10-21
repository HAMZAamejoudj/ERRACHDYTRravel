import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { FleetCategoriesSection } from "@/components/fleet/fleet-categories-section";
import { FleetComfortGallery } from "@/components/fleet/fleet-comfort-gallery";
import { FleetCtaBanner } from "@/components/fleet/fleet-cta-banner";
import { FleetHero } from "@/components/fleet/fleet-hero";
import { FleetQualityStrip } from "@/components/fleet/fleet-quality-strip";
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
    namespace: "fleetPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function FleetPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <FleetHero />
        <ScrollReveal delay={0.05}>
          <FleetCategoriesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <FleetQualityStrip />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <FleetComfortGallery />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <FleetCtaBanner />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
