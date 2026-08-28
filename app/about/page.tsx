import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation-v2";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgePoundSterling,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About Us",
  description:
    "Learn about London Climate Systems, local Gas Safe and F-Gas registered engineers serving homes and businesses across Greater London.",
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
    { number: "22 April 2026", label: "Reference date" },
    { number: "12+", label: "Years of industry expertise" },
    { number: "48 hrs", label: "Target time for detailed estimates" },
    { number: "5", label: "Core service areas" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%)]" />
        <div className="pointer-events-none absolute right-0 top-16 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.14),_transparent_55%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.12),_transparent_55%)] blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/90 mb-6">
                <span className="inline-block h-px w-12 rounded-full bg-primary" />
                About London Climate Systems
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display tracking-tight text-foreground">
                Modern heating, cooling and plumbing expertise for London homes.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground/70">
                On 22 April 2026, we are helping Londoners stay comfortable with fast, transparent engineering backed by Gas Safe and F-Gas registration. From emergency repairs to long-term maintenance, our local team delivers service you can trust.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary/90" asChild>
                  <Link href="/contact">
                    Start your quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-4 text-base text-foreground transition hover:border-primary" asChild>
                  <a href="tel:07473423003">Call 07473 423003</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-border/70 bg-card/95 p-8 shadow-[0_40px_80px_-48px_rgba(15,23,42,0.3)] backdrop-blur-xl">
                <span className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                  Trusted local engineering
                </span>
                <h2 className="mt-6 text-3xl font-display text-foreground">
                  Certified service with a modern approach.
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/70">
                  We combine transparent pricing with industry certifications, responsive communication, and practical solutions for homes and businesses across Greater London.
                </p>
                <div className="mt-8 grid gap-4">
                  {values.slice(0, 2).map((value) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="flex items-start gap-3 rounded-3xl bg-muted/50 p-4">
                        <Icon className="mt-1 h-6 w-6 text-primary" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{value.title}</p>
                          <p className="mt-1 text-sm text-foreground/70">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-slate-950/95 p-8 text-white shadow-[0_40px_80px_-48px_rgba(15,23,42,0.5)] backdrop-blur-xl">
                <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                  Fast, practical coverage
                </span>
                <h2 className="mt-6 text-3xl font-display text-white">
                  Your property, protected from every angle.
                </h2>
                <div className="mt-8 grid gap-4 text-sm text-slate-200">
                  {values.slice(2).map((value) => {
                    const Icon = value.icon;
                    return (
                      <div key={value.title} className="flex items-start gap-3 rounded-3xl bg-white/5 p-4">
                        <Icon className="mt-1 h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-white">{value.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-border bg-card/90 p-8 text-center shadow-sm backdrop-blur-xl">
                <p className="text-4xl font-display text-foreground sm:text-5xl">{stat.number}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-border bg-muted/50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_0.7fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/90 mb-6">
                <span className="inline-block h-px w-12 rounded-full bg-primary" />
                What we help with
              </span>
              <h2 className="text-4xl sm:text-5xl font-display text-foreground">Everything your property needs to run smoothly.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
                From gas safety certificates to full heating installs, our team is equipped to support your home or business with the right level of expertise and the right pace for your schedule.
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-4 rounded-3xl border border-border bg-muted/50 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-foreground/75 leading-7">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70 mb-6">
                <span className="inline-block h-px w-12 rounded-full bg-primary-foreground/30" />
                Our values
              </span>
              <h2 className="text-4xl sm:text-5xl font-display">Built around the way clients need service to work.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">
                We make every engagement clear, timely and practical. That means detailed communication, sensible advice and a local team ready to act when you need us most.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="rounded-[2rem] border border-primary/20 bg-white/10 p-8 shadow-sm backdrop-blur-xl transition hover:border-primary/40 hover:bg-white/15">
                    <Icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 text-2xl font-display text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-primary-foreground/80">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-950 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/80 mb-6">
                <span className="inline-block h-px w-12 rounded-full bg-primary/60" />
                Message from our leader
              </span>
              <h2 className="text-4xl sm:text-5xl font-display text-white">A note from our founder</h2>
            </div>

            <figure className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl backdrop-blur-xl">
              <Quote className="h-12 w-12 text-primary/70" />
              <blockquote className="mt-8 text-2xl leading-10 text-white">
                We know that inviting an engineer into your home or business is a matter of trust. My promise is simple: we will respect your time, explain the work clearly, and treat every job as if we are looking after our own property.
              </blockquote>
              <figcaption className="mt-10 text-sm text-slate-300">
                <p className="font-semibold text-white">Masoud Moradi</p>
                <p className="mt-1 text-primary/70">Founder, London Climate Systems</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/90 mb-6">
              <span className="inline-block h-px w-12 rounded-full bg-primary" />
              Our team
            </span>
            <h2 className="text-4xl sm:text-5xl font-display text-foreground">Meet the leader guiding our service.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
              Our team is led by a CEO with technical expertise and strong project management experience, ensuring every job is delivered safely, efficiently and with excellent attention to detail.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-border bg-card p-10 shadow-sm">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-mono uppercase tracking-[0.22em] text-primary">CEO</p>
                  <h3 className="mt-3 text-3xl font-display text-foreground">Masoud Moradi</h3>
                </div>
                <p className="text-foreground/70 leading-7">
                  Masoud combines a strong academic foundation with practical leadership to deliver professional and reliable outcomes for every customer.
                </p>
                <div className="rounded-[1.75rem] bg-muted/50 p-5 text-foreground/80 ring-1 ring-border">
                  <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Qualifications</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground">
                    <li>BSc Civil Engineering</li>
                    <li>MSc Construction Project Management, UWL University</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground mb-6">
            Ready to speak with a local expert?
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-8 text-foreground/70 mb-12">
            Tell us what you need and we will help you plan the right next step, from urgent repairs to planned maintenance.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary/90" asChild>
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-4 text-base text-foreground transition hover:border-primary" asChild>
              <a href="tel:07473423003">Call 07473 423003</a>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
