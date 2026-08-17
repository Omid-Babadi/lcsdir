import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Phone, Wrench, Siren, ThermometerSun, Shield } from "lucide-react";
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
      description: "Rapid response for no-heat and urgent breakdowns across London.",
      href: "/services/heating/emergency-heating",
      icon: Siren,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781005487/d996c2b8-40a0-4f2e-b687-9f7b9694967c_ro1cym.png",
    },
    {
      title: "Emergency Boiler Repairs",
      description: "Fast boiler fault diagnosis and emergency repairs to restore heating and hot water.",
      href: "/services/heating/emergency-boiler",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781005486/0794083b-aee8-4614-878e-b56bbbf0b5c3_sgfokm.png",
    },
    {
      title: "Central Heating Installation",
      description: "Design and installation of new central heating systems, controls and radiators.",
      href: "/services/heating/installation",
      icon: ThermometerSun,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781005500/765b0655-901e-480b-a591-7587d6f2fa73_wvpvit.png",
    },
    {
      title: "Central Heating Service",
      description: "Planned servicing, safety checks and system health inspections to keep systems efficient.",
      href: "/services/heating/service",
      icon: Shield,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781005483/be74182d-19d3-4cd5-98f6-5af85222c4a1_s8dhhu.png",
    },
    {
      title: "Central Heating Repairs",
      description: "Repairs for pumps, valves, radiators and controls to restore balanced heating performance.",
      href: "/services/heating/repairs",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781005484/7c738aee-6294-4271-9cc9-3c913d09f0ba_rlkq6x.png",
    },
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
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596427/5e9ec4b2-50e1-40d6-ac04-52dfce9819e0-fotor-20260604213617_gaoe20.png",
      alt: "Boiler installation by engineer",
      label: "Expert Installation",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596428/778fe9d6-3e3c-44ad-97be-8ea81bc5c207_1_tlfl7g.png",
      alt: "Enmergency heating repair",
      label: "Emergency Response",
      category: "Emergency",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596426/dce24ed4-6a3b-4c63-9863-1ee78a0c6b7e-fotor-20260604213642_ustr56.png",
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
            <div className="relative w-full max-w-2xl mx-auto lg:ml-auto h-auto">
              {/* Modern background gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/20 rounded-[40px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-[40px]" />
              
              {/* Main image container with modern styling */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl border border-primary/20">
                <Image
                  src="https://res.cloudinary.com/daucwpsi8/image/upload/v1781005489/0f408ef5-9a08-4013-abaf-20d7bf217f92_smv1pq.png"
                  alt="Modern heating service illustration"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Modern overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 gradient-flame rounded-full opacity-40 blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 gradient-cool rounded-full opacity-35 blur-3xl animate-pulse" />
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-2xl" />
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
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "70vh" }}
                >
                  <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative min-h-[350px] p-8 flex flex-col justify-end">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/70 mb-3">
                      Service
                    </span>
                    <h3 className="text-2xl font-display text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      {service.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/90">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
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
