import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Phone, Clock, Shield, Award, Wrench, Siren, ThermometerSun } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Heating & Boiler Services",
  description: "Expert heating services in London. Boiler repairs, installations, power flushing and servicing from Gas Safe registered engineers.",
  path: "/services/heating",
});

export default function HeatingPage() {
  const services = [
    {
      title: "Emergency Heating Engineers",
      description: "rapid response for no-heat and urgent breakdowns across London.",
      href: "/services/heating/emergency-heating",
      icon: Siren,
    },
    {
      title: "Emergency Boiler Repairs",
      description: "Fast boiler fault diagnosis and emergency repairs to restore heating and hot water.",
      href: "/services/heating/emergency-boiler",
      icon: Wrench,
    },
    {
      title: "Central Heating Installation",
      description: "Design and installation of new central heating systems, controls and radiators.",
      href: "/services/heating/installation",
      icon: ThermometerSun,
    },
    {
      title: "Central Heating Service",
      description: "Planned servicing, safety checks and system health inspections to keep systems efficient.",
      href: "/services/heating/service",
      icon: Shield,
    },
    {
      title: "Central Heating Repairs",
      description: "Repairs for pumps, valves, radiators and controls to restore balanced heating performance.",
      href: "/services/heating/repairs",
      icon: Wrench,
    },
  ];

  const benefits = [
    { icon: Clock, title: "Emergency", description: "Always available, even on bank holidays." },
    { icon: Shield, title: "Gas Safe Registered", description: "Every engineer is fully Gas Safe certified." },
    { icon: Award, title: "Installation Aftercare", description: "Installation work includes written sign-off and clear aftercare details." },
  ];

  const subServices = [
    "Boiler Repairs",
    "Boiler Servicing",
    "Power Flush",
    "Radiator Installation",
    "Radiator Repair",
    "Thermostat Installation",
    "Smart Thermostat Setup",
    "Magnetic Filter Installation",
    "Pump Replacement",
    "Underfloor Heating",
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780221386/ace8f51a-7150-425b-bdb4-66a0ba7bbdcc-fotor-20260531132445_bj6fjt.png",
      alt: "Boiler installation by engineer",
      label: "Expert Installation",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152595/ChatGPT_Image_May_29_2026_05_05_14_PM_bkk1sr.png",
      alt: "Enmergency heating repair",
      label: "Emergency Response",
      category: "Emergency",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152588/8601bb2e-6db2-4848-8933-ee50c9b770f7_jxiyc4.png",
      alt: "Heating system service and maintenance",
      label: "Annual Servicing",
      category: "Service",
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
                Heating Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                Reliable heating, <span className="text-gradient-flame">all year round.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                Keep your home warm and comfortable. Our Gas Safe engineers provide fast repairs,
                professional installations, power flushing and preventative maintenance for all boiler types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book Heating Service
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

      {/* Gallery - Professional Uniform Layout */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-secondary" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Heating installed with care
            </h2>
            <p className="text-foreground/70 mt-4 max-w-2xl">
              Professional boiler installs, power flushing and quality workmanship you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.label}
                className="group relative overflow-hidden rounded-2xl bg-secondary/5"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-white bg-black/50 backdrop-blur-sm rounded-full uppercase tracking-wider">
                    {image.category}
                  </span>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Complete heating services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group p-8 border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all bg-background"
                >
                  <Icon className="w-7 h-7 text-primary mb-5" />
                  <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Every heating need covered
            </h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              From boiler installs to power flushing and radiator upgrades, we handle all aspects of residential heating
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subServices.map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-all"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-16 max-w-2xl">
            Why London chooses us for heating
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
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
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6">
            Need heating help? Contact us today.
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Whether it's an emergency, installation, or annual service — our Gas Safe engineers are ready.
          </p>
          <Button
            size="lg"
            className="gradient-flame text-white rounded-full px-8 h-14 group"
            asChild
          >
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
