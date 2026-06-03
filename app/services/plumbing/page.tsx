import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, CheckCircle2, Phone, Wrench, Siren } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Professional Plumbing Services",
  description: "Expert plumbing services in London. Plumbing installation, emergency service, and repairs. Certified professionals for dishwashers, water softeners, toilets, sinks, taps, washing machines, electric showers, and more.",
  path: "/services/plumbing",
});

export default function PlumbingPage() {
  const services = [
    {
      title: "Plumbing Installation",
      description: "Dishwashers, water softeners, toilets, sinks, taps, washing machines, electric showers, and bathroom fixtures.",
      href: "/services/plumbing/installation",
      icon: CheckCircle2,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780490313/c98d1e83-bdbd-473a-9350-251a9645d2b9_1_jzhepv.png",
    },
    {
      title: "Plumbing Emergency Service",
      description: "Airlocks, leaks, pipework replacement, Saniflo, stopcocks, cylinder issues, water heaters, and more.",
      href: "/services/plumbing/emergency",
      icon: Siren,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780490314/31c9d596-2a42-401c-8ec4-2b32c7df1779_qscpo4.png",
    },
    {
      title: "Plumbing Repair",
      description: "Leaking pipes, shower repairs, toilet repairs, tap repairs — fast and reliable service.",
      href: "/services/plumbing/repairs",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780490312/3313c0ba-d9ec-419d-9f67-506568356e37_ctxcto.png",
    },
  ];

  const subServices = [
    "Dishwasher Installation",
    "Water Softener Installation",
    "Toilet Installation",
    "Kitchen Sink Installation",
    "Kitchen Tap Installation",
    "Washing Machine Plumbing",
    "Electric Showers",
    "Bathroom Sinks",
    "Leaking Pipe Repairs",
    "Airlocks",
    "Hot Cylinder Installations",
    "Immersion Heaters",
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780221369/2c46e584-9296-4498-baf4-b9de6ec2be28-fotor-20260531132514_efrf7g.png",
      alt: "Professional plumber installing pipes",
      label: "Expert Installation",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152596/f45630b6-40eb-4159-a07a-fc92a3c150ca_lzsr9l.png",
      alt: "Emergency plumbing repair",
      label: "Emergency Service",
      category: "Emergency",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152496/c5adacda-5066-4aac-ac64-7cc4bb37b821_r78t04.png",
      alt: "Modern bathroom plumbing",
      label: "Quality Repairs",
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
                Plumbing Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                Professional plumbing,{" "}
                <span className="text-gradient-flame">done right.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                From appliance installations to emergency repairs, our certified plumbers handle
                dishwashers, water softeners, toilets, sinks, taps, washing machines, electric showers,
                and all plumbing emergencies across London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book Plumbing Service
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
                  src="https://res.cloudinary.com/daucwpsi8/image/upload/v1780484330/52281fb7-c640-4d26-be76-d625c0072ead_prewyf.png"
                  alt="Modern plumbing service illustration"
                  width={100}
                  height={100}
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

      {/* Gallery - Professional Uniform Layout */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-secondary" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Plumbing done with precision
            </h2>
            <p className="text-foreground/70 mt-4 max-w-2xl">
              Professional installations, emergency repairs, and quality workmanship you can trust
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
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
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
              Complete plumbing services
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
                  <div className="relative min-h-full p-8 flex flex-col justify-end w-full">
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
              Every plumbing need covered
            </h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              From installations to emergency repairs, we handle all aspects of residential plumbing
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
            Ready to solve your plumbing issues?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Whether it's an installation, emergency, or repair — our certified plumbers are ready to help.
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
