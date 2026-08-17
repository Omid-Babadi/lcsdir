import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  ChevronRight,
  type LucideIcon 
} from "lucide-react";

const DEFAULT_HERO_IMAGE = "/Gemini_Generated_Image_s4gceys4gceys4gc.png";

export type ServiceDetailProps = {
  category: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  heroImageSrc?: string;
  heroImageAlt?: string;
  galleryImages?: string[];
  features: { 
    title: string; 
    description: string; 
    icon?: LucideIcon; 
  }[];
  process: { 
    step: string; 
    title: string; 
    description: string; 
  }[];
  faqs: { 
    question: string; 
    answer: string; 
  }[];
};

export function ServiceDetailTemplate({
  category,
  title,
  highlight,
  description,
  icon: MainIcon,
  heroImageSrc,
  heroImageAlt,
  features,
  process,
  faqs,
}: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-background antialiased selection:bg-primary/20 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Modern high-tech geometric backing */}
        <div className="absolute inset-0 square-pattern opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-6 space-y-8">
              <span className="inline-flex items-center gap-3 text-xs font-mono tracking-wider text-muted-foreground uppercase bg-secondary/5 border border-border px-4 py-2 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 rounded-full gradient-flame animate-pulse" />
                {category}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.05] text-foreground">
                {title} <br />
                <span className="text-gradient-flame font-semibold inline-block relative">
                  {highlight}
                </span>
              </h1>
              
              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed font-sans">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="gradient-flame text-white rounded-full px-8 h-14 group shadow-lg shadow-flame-deep/20 hover:shadow-xl hover:shadow-flame-deep/30 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    Book This Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <a href="tel:07473423003" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full px-8 h-14 border-border hover:border-secondary text-foreground hover:bg-secondary/5 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2 text-secondary" />
                    07473 423003
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-6 relative w-full max-w-2xl mx-auto lg:ml-auto h-[580px] flex items-center justify-center">
              {/* Dynamic Glow Rings */}
              <div className="absolute -top-12 -right-12 w-64 h-64 gradient-flame rounded-full opacity-20 blur-3xl animate-pulse duration-4000" />
              <div className="absolute -bottom-12 -left-12 w-72 h-72 gradient-cool rounded-full opacity-25 blur-3xl animate-pulse duration-3000" />
              
              {/* Main Artwork Frame */}
              <div className="relative h-full w-full rounded-[48px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.15)] border border-border/60 bg-card p-3 group">
                <div className="relative h-full w-full rounded-[38px] overflow-hidden isolate">
                  <Image
                    src={heroImageSrc ?? DEFAULT_HERO_IMAGE}
                    alt={heroImageAlt ?? `${title} illustration`}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/10 mix-blend-multiply transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/10 opacity-60 pointer-events-none" />
                </div>

                {/* Floating Modern Badge Widget */}
                <div className="absolute bottom-8 left-8 right-8 bg-background/80 backdrop-blur-xl border border-border/80 p-5 rounded-3xl flex items-center gap-4 shadow-xl transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-2xl gradient-flame flex items-center justify-center text-white shrink-0 shadow-md">
                    <MainIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-md font-medium text-foreground">Premium Standards</h4>
                    <p className="text-xs text-muted-foreground">Certified London Climate Systems engineers</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-flame-amber ml-auto animate-spin duration-3000" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICE HIGHLIGHTS --- */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-border bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-mono tracking-wider text-muted-foreground uppercase">
              <span className="w-8 h-px bg-primary" />
              What&apos;s Included
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground">
              Service highlights
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/70">
              Clear, practical support from qualified London Climate Systems engineers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((service) => {
              const ServiceIcon = service.icon || CheckCircle2;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ServiceIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- WORKFLOW / PROCESS SECTION --- */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-secondary/[0.03] border-t border-b border-border relative">
        <div className="absolute inset-0 square-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 space-y-4">
            <span className="inline-flex items-center gap-3 text-xs font-mono tracking-wider text-muted-foreground uppercase">
              <span className="w-8 h-px bg-primary" />
              Streamlined Execution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground">
              How it works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {process.map((p, idx) => (
              <div
                key={p.step}
                className="bg-background p-8 rounded-3xl border border-border/80 shadow-sm relative group hover:border-border transition-colors duration-300"
              >
                {/* Connector Arrow (Visible on Desktop Lg viewports) */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2 z-20 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
                    <ChevronRight className="w-5 h-5 stroke-[1.5]" />
                  </div>
                )}

                <div className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-4 bg-primary/5 px-3 py-1 rounded-full w-max">
                  {p.step}
                </div>
                
                <h3 className="text-xl font-display font-medium text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPANDED FAQ SECTION --- */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background relative">
        <div className="max-w-[900px] mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground uppercase bg-muted px-3 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5 text-secondary" />
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-foreground">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card p-6 sm:p-8 rounded-3xl border border-border/80 hover:border-border transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <h3 className="text-lg font-display font-medium text-foreground mb-3 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-flame-orange mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  {faq.question}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed pl-4 border-l border-border/60">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- MODERN EMBEDDED CTA BLOCK --- */}
      <section className="pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto relative rounded-[40px] overflow-hidden border border-border bg-slate-950 text-white shadow-2xl isolate p-12 sm:p-16 lg:p-24 text-center">
          {/* Subtle patterns for high-end look inside the CTA */}
          <div className="absolute inset-0 noise-overlay opacity-5 mix-blend-overlay -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-cool-blue/20 via-transparent to-flame-deep/10 -z-10" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-white leading-tight">
              Ready to experience <br className="hidden sm:inline"/> premium engineering?
            </h2>
            
            <p className="text-white/70 font-sans text-base max-w-lg mx-auto leading-relaxed">
              Consult with a dedicated London Climate Systems professional engineer today. Absolute pricing alignment, zero hidden call-out assessments.
            </p>
            
            <div className="pt-4">
              <Button
                size="lg"
                className="gradient-flame text-white rounded-full px-10 h-14 group shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Schedule Service Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
