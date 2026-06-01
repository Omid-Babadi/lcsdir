import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export type ServiceDetailProps = {
  category: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  galleryImages?: string[];
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export function ServiceDetailTemplate({
  category,
  title,
  highlight,
  description,
  icon: Icon,
  features,
  process,
  faqs,
}: ServiceDetailProps) {
  const isInstallationService = /installation|fitting|replacement/i.test(
    `${category} ${title}`
  );

  const benefits = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick dispatch of nearest available engineer to your location.",
    },
    {
      icon: Shield,
      title: "Certified Engineers",
      description: "Gas Safe and F-Gas registered, fully insured professionals.",
    },
    {
      icon: Award,
      title: isInstallationService ? "Installation Guarantee" : "Quality Checked",
      description: isInstallationService
        ? "Installation workmanship is backed by our written guarantee."
        : "Work is tested, documented, and signed off before we leave.",
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
                {category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground mb-6">
                {title} <span className="text-gradient-flame">{highlight}</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group"
                  asChild
                >
                  <Link href="/contact">
                    Book This Service
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
                <Icon className="w-48 h-48 text-secondary" strokeWidth={1} />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-flame rounded-2xl opacity-30 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-cool rounded-2xl opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid (Text Only) */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-secondary" />
              What&apos;s included
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              Service highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((service, index) => (
              <div
                key={service.title}
                className="bg-secondary/5 p-8 rounded-3xl border border-transparent hover:border-secondary/20 hover:bg-secondary/10 transition-all duration-300 group"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-sm font-mono text-primary shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-secondary/40 group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-lg font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-secondary/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-16 max-w-2xl">
            How it works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="bg-background p-8 rounded-2xl border border-border"
              >
                <div className="text-sm font-mono text-primary mb-3">{p.step}</div>
                <h3 className="text-xl font-display text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-foreground/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-16 max-w-2xl">
            Why London chooses LCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const BIcon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-background p-8 rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 rounded-xl gradient-flame flex items-center justify-center mb-6">
                    <BIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-foreground/70">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-secondary/5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-background p-6 rounded-2xl border border-border"
              >
                <h3 className="text-lg font-display text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6">
            Ready to book?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Talk to a London Climate Systems engineer today. No call-out fees.
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
