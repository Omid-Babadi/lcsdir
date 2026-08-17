import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Phone, Shield, Wrench, AlertTriangle, FileCheck, Pipette } from "lucide-react";
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
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596566/0689c7a3-b1b0-40c0-978e-1b16ade4c776_1_cg5mub.png",
    },
    {
      title: "Gas Cooker and Hob Installation",
      description: "Safe, professional installation of gas cookers, hobs, and range cookers. All connections tested and certified on completion.",
      href: "/services/gas/cooker-installation",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596567/420a4372-17ec-4c8f-a834-2bad387d0217_tha6hr.png",
    },
    {
      title: "Gas Fire Installation",
      description: "Installation of gas fires, wall-mounted fires, and flueless gas fires. Full safety checks and commissioning included.",
      href: "/services/gas/fire-installation",
      icon: Flame,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596568/24dc7868-0741-4d88-bbd7-c161e0cc1013_1_wbn6ek.png",
    },
    {
      title: "Gas Safety Certificates",
      description: "Official Gas Safe certificates issued same day. Required for landlords, homeowners, and property sales across London.",
      href: "/services/gas/safety-certificates",
      icon: FileCheck,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596563/029ef2a9-7b73-41bd-a851-edfae6609cfc_yzm2oo.png",
    },
    {
      title: "Gas Leak Detection and Repair",
      description: "Emergency gas leak detection, pressure testing, and repair. If you smell gas, call us immediately — we respond fast.",
      href: "/services/gas/leak-detection",
      icon: AlertTriangle,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596582/b2bee8a1-e0fe-497d-ad41-a2eb7f326219_hu5hkp.png",
    },
    {
      title: "Gas Pipe Installation",
      description: "New gas pipe runs, extensions, and replacements for kitchens, extensions, and new builds. All work to Gas Safe standards.",
      href: "/services/gas/pipe-installation",
      icon: Pipette,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597860/3c7a9665-1b1f-4322-b21e-09d9eba3a020_jtxbzh.png",
    },
    {
      title: "Annual Gas Safety Checks",
      description: "Thorough annual inspections of all gas appliances, pipework, and flues. Keep your home safe and your appliances efficient.",
      href: "/services/gas/annual-checks",
      icon: Shield,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596568/72fe25ef-adb6-40cb-a8f4-98f870938313_ra1inl.png",
    },
    {
      title: "Landlord Gas Certificates",
      description: "Legally required CP12 certificates for landlords. We inspect all gas appliances and issue certificates on the same visit.",
      href: "/services/gas/landlord-certificates",
      icon: FileCheck,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597858/fef0ab0b-5217-4ac9-bd23-8353b830c29f_tae5jg.png",
    },
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
            <div className="relative w-full max-w-2xl mx-auto lg:ml-auto h-auto">
              {/* Modern background gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/5 to-primary/20 rounded-[40px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-[40px]" />
              
              {/* Main image container with modern styling */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl border border-secondary/20">
                <Image
                  src="https://res.cloudinary.com/daucwpsi8/image/upload/v1780484323/1c1cc689-48f6-4f8a-bef1-a6d5770b6267_ga06oy.png"
                  alt="Modern gas service illustration"
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
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-secondary/20 rounded-full opacity-30 blur-2xl" />
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
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "70vh"}}
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
