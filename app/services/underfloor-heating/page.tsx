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
      description: "Design and installation for both wet and electric systems — tailored to your property and budget.",
      href: "/services/underfloor-heating/installation",
      icon: Wrench,
      bgImage:
        "67ac8e79-dfc0-4357-951a-73b5da85f2c6.png",
    },
    {
      title: "Electric Underfloor Heating",
      description: "Low-profile electric systems ideal for retrofit projects and smaller rooms, supplied and fitted by experienced engineers.",
      href: "/services/underfloor-heating/electric",
      icon: Wrench,
      bgImage:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wet Underfloor Heating Systems",
      description: "Hydronic systems integrated with your central heating for efficient whole-house warmth.",
      href: "/services/underfloor-heating/wet-systems",
      icon: Wrench,
      bgImage:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Repairs & Maintenance",
      description: "Fault finding, repairs, pressure checks and thermostat recalibration to keep systems running efficiently.",
      href: "/services/underfloor-heating/repairs",
      icon: Wrench,
      bgImage:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
            <div className="relative w-full max-w-2xl mx-auto lg:ml-auto h-[600px]">
              {/* Modern background gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/5 to-primary/20 rounded-[40px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-[40px]" />
              
              {/* Main image container with modern styling */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl border border-secondary/20">
                <Image
                  src="https://res.cloudinary.com/daucwpsi8/image/upload/v1780484320/aff6d943-a5be-4c9f-a06c-a98f85eb947a_byep3o.png"
                  alt="Modern underfloor heating service illustration"
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
                  className="group relative overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:shadow-2xl h-auto"
                  style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
