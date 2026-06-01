import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Wrench, ThermometerSun, Shield, FileCheck, Zap, Flame, Phone, Clock, Award, Siren } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Services",
  description: "Boiler repairs, installations, replacements, servicing and power flushing by Gas Safe registered engineers.",
  path: "/services/boiler",
});

export default function BoilerPage() {
  const services = [
    { title: "Boiler Breakdown Repairs", description: "Rapid fault diagnosis and repair for breakdowns.", href: "/services/boiler/breakdown-repairs", icon: Wrench },
    { title: "New Boiler Installation", description: "Supply and fit of new boilers, system design and commissioning.", href: "/services/boiler/new-installation", icon: ThermometerSun },
    { title: "Boiler Replacement and Upgrades", description: "Upgrade to more efficient boilers and low-carbon options.", href: "/services/boiler/replacement", icon: FileCheck },
    { title: "Annual Boiler Servicing", description: "Gas Safe annual servicing to maintain warranties and efficiency.", href: "/services/boiler/servicing", icon: Shield },
    { title: "System and Combi Boiler Fitting", description: "System and combi boiler installs with full commissioning.", href: "/services/boiler/system-combi-fitting", icon: ThermometerSun },
    { title: "Boiler Pressure Issues", description: "We diagnose and remedy pressure faults and system imbalances.", href: "/services/boiler/pressure-issues", icon: Gauge },
    { title: "Pilot Light Repairs", description: "Pilot light and ignition system repairs for older boilers.", href: "/services/boiler/pilot-light", icon: FileCheck },
    { title: "Boiler Warranty Work", description: "We carry out warranty repairs under manufacturer terms.", href: "/services/boiler/warranty", icon: FileCheck },
    { title: "Power Flush", description: "Power flushing to remove sludge and restore system efficiency.", href: "/services/boiler/power-flush", icon: Zap },
  ];

  const benefits = [
    { icon: Shield, title: "Gas Safe Registered", description: "Every engineer is fully Gas Safe certified and ID-carrying." },
    { icon: Clock, title: "Rapid Response", description: "Same-day breakdowns and emergency callouts across London." },
    { icon: Award, title: "Installation Guarantee", description: "Boiler installation work is backed by a written workmanship guarantee." },
  ];

  const subServices = [
    "Breakdown Repairs",
    "Boiler Servicing",
    "Power Flush",
    "Radiator Installation",
    "Radiator Repair",
    "Thermostat Installation",
    "Magnetic Filter Installation",
    "Pressure Relief Repairs",
    "Pump Replacement",
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780221381/ChatGPT_Image_May_30_2026_07_40_36_PM-fotor-20260531132346_zr1jpx.png",
      alt: "Boiler installation by engineer",
      label: "Professional Installs",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152492/d33b7dda-c697-41fe-91a6-e7b5f553262d_jbtmt6.png",
      alt: "Boiler service and maintenance",
      label: "Servicing & Repairs",
      category: "Service",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152495/7fa2e196-e775-4b41-96ea-49aa86826093_h1pht2.png",
      alt: "Power flush and system clean",
      label: "Power Flushing",
      category: "Power Flush",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 square-pattern opacity-50" />
        <div className="max-w-[1400px] mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px gradient-flame" />
                Boiler Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                Professional boiler care, <span className="text-gradient-flame">installed and repaired.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                Repairs, installations, servicing and power flushing for domestic and commercial boilers across London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book Boiler Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <a href="tel:07473423003">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 h-14 border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    07473 423003
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <Flame className="w-48 h-48 text-primary" strokeWidth={1} />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-flame rounded-2xl opacity-30 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-cool rounded-2xl opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-secondary" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">Boiler work done right</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl">Professional installs, servicing and system flushes to keep boilers running efficiently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.label} className="group relative overflow-hidden rounded-2xl bg-secondary/5" style={{ aspectRatio: "4/3" }}>
                <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-white bg-black/50 backdrop-blur-sm rounded-full uppercase tracking-wider">{image.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xl font-display leading-snug">{image.label}</p>
                  <div className="w-12 h-0.5 bg-white/60 mt-2 group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-secondary" />
              What we offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">Complete boiler services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon as any;
              return (
                <Link key={service.title} href={service.href} className="group p-8 border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all bg-background">
                  <Icon className="w-7 h-7 text-primary mb-5" />
                  <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight className="w-3.5 h-3.5" /></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-services showcase */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-secondary/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-secondary" />
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">Every boiler need covered</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">From emergency repairs to power flushing and warranty work, we cover all boiler services.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subServices.map((s) => (
              <span key={s} className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-all">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-16 max-w-2xl">Why London trusts us with boilers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon as any;
              return (
                <div key={b.title} className="bg-secondary/5 p-8 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-flame flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">{b.title}</h3>
                  <p className="text-foreground/70">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6">Need boiler help? Contact us today.</h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">Whether it's an emergency, installation, or annual service — our Gas Safe engineers are ready.</p>
          <Button size="lg" className="gradient-flame text-white rounded-full px-8 h-14 group" asChild>
            <Link href="/contact">
              Schedule Service Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
