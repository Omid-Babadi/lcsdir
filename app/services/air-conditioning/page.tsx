import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Phone, Wrench, Settings, Zap } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Air Conditioning Services",
  description: "F-Gas certified air conditioning specialists in London. AC installation, maintenance, and repairs for all systems.",
  path: "/services/air-conditioning",
});

export default function AirConditioningPage() {
  const services = [
    {
      title: "Air Conditioning Maintenance",
      description: "Scheduled servicing and preventative maintenance to keep your AC running efficiently, extend system life, and avoid costly breakdowns.",
      href: "/services/air-conditioning/maintenance",
      icon: Settings,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780507186/bcc25112-d934-4f55-a111-78f878e1b615_bv2dyz.png",
    },
    {
      title: "Air Conditioning Installations",
      description: "Expert installation of split, multi-split, and ducted AC systems for homes and offices. All major brands including Daikin, Mitsubishi, LG, and Samsung.",
      href: "/services/air-conditioning/installation",
      icon: Zap,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780507169/a05f0d32-a58d-46dc-89a4-b616a1ea2b81_aq2e3z.png",
    },
    {
      title: "Air Conditioning Repair Services",
      description: "Fast diagnosis and lasting repairs for all AC faults — refrigerant leaks, compressor issues, error codes, and emergency breakdowns.",
      href: "/services/air-conditioning/repairs",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780507189/78399401-8eb8-4d9a-ab81-82a367cd417b_dwvgua.png",
    },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780221382/b23304ac-82cd-45fa-a0a3-f4a230e279f8-fotor-20260531132415_lh1wmt.png",
      alt: "Air conditioning unit installation",
      label: "",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152492/34099101-d86a-4df8-8407-80a982a4bfd7_olrfal.png",
      alt: "AC maintenance and servicing",
      label: "Scheduled Maintenance",
      category: "Maintenance",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152603/9aed4672-02ce-49c5-90e4-f813d24b1ee9_oozu1g.png",
      alt: "Air conditioning repair service",
      label: "Expert Repairs",
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
                Air Conditioning
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                Cool comfort,{" "}
                <span className="text-gradient-flame">expertly delivered.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                Stay cool all summer long. Our F-Gas certified specialists provide fast
                repairs, expert installations, and reliable maintenance for complete
                peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book AC Service
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
                  src="https://res.cloudinary.com/daucwpsi8/image/upload/v1780484317/2ef84635-340a-4d24-a688-c31392689124_molxdz.png"
                  alt="Modern air conditioning service illustration"
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
              <span className="w-8 h-px bg-secondary" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              AC systems built to last
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
              <span className="w-8 h-px bg-secondary" />
              What we offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Complete AC services
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6">
            Get your AC system working at peak performance.
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Whether it's a new installation, routine maintenance, or an urgent repair — our F-Gas certified engineers are ready.
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
