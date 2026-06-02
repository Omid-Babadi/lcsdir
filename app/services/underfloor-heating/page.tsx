import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Phone, Clock, Shield, Award, CheckCircle } from "lucide-react";
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
    },
    {
      title: "Electric Underfloor Heating",
      description: "Low-profile electric systems ideal for retrofit projects and smaller rooms, supplied and fitted by experienced engineers.",
      href: "/services/underfloor-heating/electric",
      icon: Wrench,
    },
    {
      title: "Wet Underfloor Heating Systems",
      description: "Hydronic systems integrated with your central heating for efficient whole-house warmth.",
      href: "/services/underfloor-heating/wet-systems",
      icon: Wrench,
    },
    {
      title: "Repairs & Maintenance",
      description: "Fault finding, repairs, pressure checks and thermostat recalibration to keep systems running efficiently.",
      href: "/services/underfloor-heating/repairs",
      icon: Wrench,
    },
  ];

  const benefits = [
    { icon: Clock, title: "Fast Service", description: "Local engineers ready to survey and install with minimal disruption." },
    { icon: Shield, title: "Certified Installers", description: "Qualified heating engineers ensuring safe, compliant installations." },
    { icon: Award, title: "Designed For Comfort", description: "Systems sized and specified for optimal performance and efficiency." },
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
            <div className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 rounded-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <Wrench className="w-48 h-48 text-secondary" strokeWidth={1} />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-flame rounded-2xl opacity-30 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-cool rounded-2xl opacity-30 blur-2xl" />
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
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-secondary/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-16 max-w-2xl">
            Why choose underfloor heating
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
