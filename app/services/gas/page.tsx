import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Phone, Clock, Shield, Award, Wrench, AlertTriangle, FileCheck, Pipette } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Services",
  description: "Gas Safe registered engineers in London. Boiler installations, gas safety certificates, leak detection, cooker installation, and more.",
  path: "/services/gas",
});

export default function GasPage() {
  const services = [
    {
      title: "Gas Boiler Installation",
      description: "Expert installation of new gas boilers. We work with all major brands and system types — combi, system, and conventional boilers.",
      href: "/services/gas/boiler-installation",
      icon: Flame,
    },
    {
      title: "Gas Cooker and Hob Installation",
      description: "Safe, professional installation of gas cookers, hobs, and range cookers. All connections tested and certified on completion.",
      href: "/services/gas/cooker-installation",
      icon: Wrench,
    },
    {
      title: "Gas Fire Installation",
      description: "Installation of gas fires, wall-mounted fires, and flueless gas fires. Full safety checks and commissioning included.",
      href: "/services/gas/fire-installation",
      icon: Flame,
    },
    {
      title: "Gas Safety Certificates",
      description: "Official Gas Safe certificates issued same day. Required for landlords, homeowners, and property sales across London.",
      href: "/services/gas/safety-certificates",
      icon: FileCheck,
    },
    {
      title: "Gas Leak Detection and Repair",
      description: "Emergency gas leak detection, pressure testing, and repair. If you smell gas, call us immediately — we respond fast.",
      href: "/services/gas/leak-detection",
      icon: AlertTriangle,
    },
    {
      title: "Gas Pipe Installation",
      description: "New gas pipe runs, extensions, and replacements for kitchens, extensions, and new builds. All work to Gas Safe standards.",
      href: "/services/gas/pipe-installation",
      icon: Pipette,
    },
    {
      title: "Annual Gas Safety Checks",
      description: "Thorough annual inspections of all gas appliances, pipework, and flues. Keep your home safe and your appliances efficient.",
      href: "/services/gas/annual-checks",
      icon: Shield,
    },
    {
      title: "Landlord Gas Certificates",
      description: "Legally required CP12 certificates for landlords. We inspect all gas appliances and issue certificates on the same visit.",
      href: "/services/gas/landlord-certificates",
      icon: FileCheck,
    },
  ];

  const benefits = [
    { icon: Shield, title: "Gas Safe Registered", description: "Every engineer is fully Gas Safe certified and ID-carrying." },
    { icon: Clock, title: "Same-Day Certificates", description: "Gas safety certificates issued on the day of inspection." },
    { icon: Award, title: "Installation Guarantee", description: "Gas installation work is backed by a written workmanship guarantee." },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780221382/fa8b7c95-9015-4389-aa2f-161ab6583ca2-fotor-2026053113822_w8zuhq.png",
      alt: "Gas boiler installation by engineer",
      label: "Boiler Installations",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152518/301650b1-e06c-470d-9d3c-f099a7429f77_s2my30.png",
      alt: "Gas safety certificate inspection",
      label: "Safety Certificates",
      category: "Compliance",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152502/95bc1c7c-cb6a-4e5b-ae62-bc79060bf4fd_vrrmca.png",
      alt: "Gas pipe installation and repair",
      label: "Pipe & Leak Repairs",
      category: "Repair",
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
                Gas Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                Gas work done{" "}
                <span className="text-gradient-flame">safely and right.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                From boiler installations to landlord certificates and emergency leak
                detection, our Gas Safe registered engineers handle every gas job across
                London with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book Gas Service
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
              <span className="w-8 h-px bg-primary" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Gas work you can trust
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.label}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-xs font-mono text-white/60 mb-1 uppercase tracking-widest">
                    {image.category}
                  </span>
                  <p className="text-white text-lg font-display leading-snug">{image.label}</p>
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
              <span className="w-8 h-px bg-primary" />
              What we offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Complete gas services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

      {/* Why Choose */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-primary/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-16 max-w-2xl">
            Why London trusts us with gas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-background p-8 rounded-2xl border border-border">
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
            Need a Gas Safe engineer in London?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Whether it's an installation, safety certificate, or an emergency — our registered gas engineers are ready to help.
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
