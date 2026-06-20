import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Wrench, ThermometerSun, Shield, FileCheck, Zap, Flame, Phone, Siren } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Services",
  description: "Boiler repairs, installations, replacements, servicing and power flushing by Gas Safe registered engineers.",
  path: "/services/boiler",
});

export default function BoilerPage() {
  const services = [
    {
      title: "Boiler Breakdown Repairs",
      description: "Rapid fault diagnosis and repair for breakdowns.",
      href: "/services/boiler/breakdown-repairs",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780679427/e1a422a6-4d3a-482a-9802-a69daad383de_pihoqh.png",
    },
    {
      title: "New Boiler Installation",
      description: "Supply and fit of new boilers, system design and commissioning.",
      href: "/services/boiler/new-installation",
      icon: ThermometerSun,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780679428/aa3c0c42-a34f-4cc9-b9a3-f42198665f54_ob2iwe.png",
    },
    {
      title: "Boiler Replacement and Upgrades",
      description: "Upgrade to more efficient boilers and low-carbon options.",
      href: "/services/boiler/replacement",
      icon: FileCheck,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780679428/025fd6c9-7d4c-42c1-ba4c-7d189de66879_sfvm8c.png",
    },
    {
      title: "Annual Boiler Servicing",
      description: "Gas Safe annual servicing to maintain warranties and efficiency.",
      href: "/services/boiler/servicing",
      icon: Shield,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780679430/f723f4e5-cc99-4c89-b025-2260f03df530_okgrlw.png",
    },
    {
      title: "System and Combi Boiler Fitting",
      description: "System and combi boiler installs with full commissioning.",
      href: "/services/boiler/system-combi-fitting",
      icon: ThermometerSun,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780679430/b3a7d184-9eca-4ba1-86bd-91a829a5e28f_sr7hk8.png",
    },
    {
      title: "Boiler Pressure Issues",
      description: "We diagnose and remedy pressure faults and system imbalances.",
      href: "/services/boiler/pressure-issues",
      icon: Gauge,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780679432/2b468ef7-1d3b-4515-afee-05d958549ce1_mzpmvr.png",
    },
    {
      title: "Pilot Light Repairs",
      description: "Pilot light and ignition system repairs for older boilers.",
      href: "/services/boiler/pilot-light",
      icon: FileCheck,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781988086/f9d4ca23-9b70-477d-88ca-6ea23aabb26f_wo5wpl.png",
    },
    {
      title: "Boiler Warranty Work",
      description: "We carry out warranty repairs under manufacturer terms.",
      href: "/services/boiler/warranty",
      icon: FileCheck,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781988087/5e48f7cd-852b-4a00-bf88-f807b4dc3b57_osvn9x.png",
    },
    {
      title: "Power Flush",
      description: "Power flushing to remove sludge and restore system efficiency.",
      href: "/services/boiler/power-flush",
      icon: Zap,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1781988086/903c3902-7a04-4176-81a0-fbbd1c7af0f8_fyyipn.png",
    },
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
            <div className="relative w-full max-w-2xl mx-auto lg:ml-auto h-auto">
              {/* Modern background gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/20 rounded-[40px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-[40px]" />
              
              {/* Main image container with modern styling */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl border border-primary/20">
                <Image
                  src="https://res.cloudinary.com/daucwpsi8/image/upload/v1780484321/d6bdf95a-c00b-48d4-b365-c202b44c43d7_utysn1.png"
                  alt="Modern boiler service illustration"
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
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: "cover", backgroundPosition: "center", height : "70vh" }}
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
