import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgePoundSterling,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Quote,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About Us",
  description:
    "Learn about London Climate Systems Ltd, local Gas Safe and F-Gas registered engineers serving Greater London since 2018.",
  path: "/about",
  keywords: ["about London Climate Systems", "local engineers London", "Gas Safe F-Gas London"],
});

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Certified Care",
      description:
        "Gas Safe and F-Gas registered engineers complete work with the right qualifications, insurance, and attention to safety.",
    },
    {
      icon: Clock,
      title: "Responsive Support",
      description:
        "Emergency requests are prioritised quickly, and detailed estimates are prepared within 48 hours wherever possible.",
    },
    {
      icon: BadgePoundSterling,
      title: "Fair Pricing",
      description:
        "Clear quotes, practical advice, and no unnecessary upselling. We recommend what your property actually needs.",
    },
    {
      icon: CalendarCheck,
      title: "Long-Term Comfort",
      description:
        "From one-off repairs to planned maintenance, we help keep heating, cooling, plumbing, gas, and boiler systems reliable.",
    },
  ];

  const services = [
    "Plumbing installations, repairs, and emergencies",
    "Heating repairs, servicing, and central heating installation",
    "Boiler breakdown repairs, servicing, replacement, and power flush",
    "Air conditioning installation, maintenance, and repair",
    "Gas safety checks, landlord certificates, pipework, and leak detection",
    "Planned maintenance for homes and commercial properties",
  ];

  const stats = [
    { number: "2018", label: "Serving London since" },
    { number: "12+", label: "Years of industry expertise" },
    { number: "48 hrs", label: "Target time for detailed estimates" },
    { number: "5", label: "Core service areas" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative pt-32 pb-24 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary" />
              About London Climate Systems
            </span>
            <h1 className="text-5xl lg:text-7xl font-display leading-tight text-foreground mb-8">
              Local engineers keeping London comfortable
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              London Climate Systems Ltd provides plumbing, heating, air conditioning, gas, and boiler services across Greater London. Since 2018, our team has combined technical expertise with straightforward customer care, delivering high-quality work at fair prices and at times that suit our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-primary" />
                Why choose us
              </span>
              <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-8">
                Precision, care, and a genuine local service
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  At London Climate Systems, we combine over a decade of expertise in plumbing, heating, and air conditioning installations with a deep commitment to our customers. Our Gas Safe and F-Gas registered engineers serve London with precision and care, ensuring every project is completed to a high professional standard.
                </p>
                <p>
                  As a proud local employer, we are rooted in the communities we serve. When you choose us, you get a trusted local expert at your door, not a faceless contractor. We keep things simple: top-quality service, fair pricing, clear communication, and appointments arranged around your needs.
                </p>
                <p>
                  Whether you need an emergency repair, a detailed estimate within 48 hours, or a long-term maintenance plan, we listen, adapt, and put your comfort first. Our aim is not just to meet expectations, but to earn your trust for life.
                </p>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 lg:p-10 bg-primary/5">
              <Wrench className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-display text-foreground mb-6">
                What we help with
              </h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground/70">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary" />
              Our values
            </span>
            <h2 className="text-4xl lg:text-5xl font-display text-foreground">
              Built around the way clients need service to work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-8 border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-5" />
                  <h3 className="text-2xl font-display text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary-foreground/60 mb-6">
                <span className="w-8 h-px bg-primary-foreground/30" />
                Message from our leader
              </span>
              <h2 className="text-4xl lg:text-5xl font-display">
                A note from our founder
              </h2>
            </div>

            <figure className="border-l border-primary-foreground/20 pl-8 lg:pl-12">
              <Quote className="w-10 h-10 text-primary-foreground/40 mb-8" />
              <blockquote className="text-2xl lg:text-3xl font-display leading-relaxed">
                We know that inviting an engineer into your home or business is a matter of trust. My promise is simple: we will respect your time, explain the work clearly, and treat every job as if we are looking after our own property.
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-lg font-semibold">Masoud Moradi</p>
                <p className="text-primary-foreground/60">Founder, London Climate Systems Ltd</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-16 text-center">
            By the numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-display text-primary mb-3">
                  {stat.number}
                </div>
                <p className="text-foreground/60 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-8">
            Ready to speak with a local expert?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Tell us what you need and we will help you plan the right next step, from urgent repairs to planned maintenance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 group"
              asChild
            >
              <Link href="/contact">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 border-primary/30 text-foreground"
              asChild
            >
              <a href="tel:07473423003">Call 07473 423003</a>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
