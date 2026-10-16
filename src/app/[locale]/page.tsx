import { setRequestLocale } from "next-intl/server";

import { AboutSection } from "@/components/home/about-section";
import { CommitmentsSection } from "@/components/home/commitments-section";
import { FleetSection } from "@/components/home/fleet-section";
import { HeroSection } from "@/components/home/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import { QuickServices } from "@/components/home/quick-services";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <QuickServices />
        <AboutSection />
        <FleetSection />
        <CommitmentsSection />
        <PartnersSection />
      </main>
      <SiteFooter />
    </>
  );
}
