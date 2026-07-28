import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { LondonMapSection } from "@/components/landing/london-map-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
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
