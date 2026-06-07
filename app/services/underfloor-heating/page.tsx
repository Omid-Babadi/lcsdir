import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Phone } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Underfloor Heating Services",
  description: "Underfloor heating installations, electric and wet systems, controls and repairs across London.",
  path: "/services/underfloor-heating",
});

export default function UnderfloorHeatingPage() {
  const services = [
    {
      title: "Underfloor Heating Installation",
      description: "Design and install wet and electric systems tailored to your property and budget.",
      href: "/services/underfloor-heating/installation",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782708/bf94aa15-3bd0-4b5c-b0bc-b0299bafc993_2_uoteer.png",
    },
    {
      title: "Electric Underfloor Heating",
      description: "Low-profile electric systems for retrofit projects and smaller rooms, supplied and fitted by experienced engineers.",
      href: "/services/underfloor-heating/electric",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782710/3b400d4f-fa98-4c2f-9403-2d452473816d_zq2aab.png",
    },
    {
      title: "Wet Underfloor Heating Systems",
      description: "Hydronic systems integrated with central heating for efficient whole-house warmth.",
      href: "/services/underfloor-heating/wet-systems",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782710/e8a22d99-961b-4b71-a151-713768aefd0a_xifhot.png",
    },
    {
      title: "Underfloor Heating Repairs",
      description: "Fault finding, repairs, pressure checks and thermostat recalibration to keep systems running efficiently.",
      href: "/services/underfloor-heating/repairs",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782714/5971ebac-14b2-446b-a12e-e739effd26c4_ayfkkb.png",
    },
    {
      title: "Underfloor Heating Controls & Thermostats",
      description: "Smart controls and thermostat installation for better comfort, efficiency, and zone control.",
      href: "/services/underfloor-heating/controls",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780831513/ab980d22-352a-4571-8495-4031f9b0ecf7_2_sy097w.png",
    },
    {
      title: "Smart Thermostat Integration",
      description: "Integrate smart thermostats with your underfloor heating for remote control and energy savings.",
      href: "/services/underfloor-heating/smart-thermostats",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780834768/9a0a4492-e33d-4e53-9a16-00f7921dfe4e_ufvns0.png",
    },
    {
      title: "System Design & Consultation",
      description: "Tailored system design and consultation to create the ideal underfloor heating solution for your home.",
      href: "/services/underfloor-heating/design-consultation",
      icon: Wrench,
      bgImage:
        "https://res.cloudinary.com/daucwpsi8/image/upload/v1780831513/190026bd-cffa-458e-9ddd-e2299cb1fd05_qzgzqf.png",
    },
  ];

  const subServices = [
    "Wet Underfloor Heating",
    "Electric Underfloor Heating",
    "Underfloor Heating Repairs",
    "Smart Thermostats",
    "Zone Controls",
    "Manifold Installation",
    "Floor Sensors",
    "Insulation Boards",
    "Pressure Testing",
    "System Balancing",
    "Heat Loss Checks",
    "Design Consultation",
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780834287/147306bc-351a-4c09-8e3c-4f86b2c6ee71-fotor-20260607154032_cbubnx.png",
      alt: "Warm modern room with underfloor heating",
      label: "Complete Installation",
      category: "Installation",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780834359/90ea6f3d-aa37-421f-b591-6dfc591c50cc_1_-fotor-20260607154220_lqu7xk.png",
      alt: "Wet underfloor heating system in a modern home",
      label: "Wet Systems",
      category: "Hydronic",
    },
    {
      src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780834286/6df2ccb5-e5d3-4fbd-9c61-6b1a69f428ff-fotor-20260607154055_snyyd8.png",
      alt: "Engineer diagnosing an underfloor heating system",
      label: "Fault Finding",
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
                Underfloor Heating
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                Warm floors, <span className="text-gradient-flame">smarter comfort.</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                We design and install efficient underfloor heating systems — electric or wet — and integrate modern controls for consistent, economical warmth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book a Survey
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
                    src="https://res.cloudinary.com/daucwpsi8/image/upload/v1780832772/12a54173-9c65-423d-9d99-11750fe693aa_rjkhah.png"
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
              Underfloor heating installed with care
            </h2>
            <p className="text-foreground/70 mt-4 max-w-2xl">
              Neat installations, balanced wet systems, and dependable repairs for comfortable rooms from floor to ceiling.
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
              Underfloor heating services
            </h2>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Every underfloor heating need covered
            </h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
              From first design to controls, commissioning, and repairs, we cover complete underfloor heating systems.
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
            Ready to upgrade to warm floors?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Contact us for a survey and tailored underfloor heating proposal.
          </p>
          <Button
            size="lg"
            className="gradient-flame text-white rounded-full px-8 h-14 group"
            asChild
          >
            <Link href="/contact">
              Schedule Survey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
