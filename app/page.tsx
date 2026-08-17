import { Navigation } from "@/components/landing/navigation-v2";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section-v2";
import { WhyUsSection } from "@/components/landing/why-us-section-v2";
import { MetricsSection } from "@/components/landing/metrics-section-v2";
import { GallerySection } from "@/components/landing/gallery-section-v2";
import { LondonMapSection } from "@/components/landing/london-map-section-v3";
import { CtaSection } from "@/components/landing/cta-section-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <GallerySection />
      <LondonMapSection />
      <MetricsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
