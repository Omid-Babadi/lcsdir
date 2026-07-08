import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  ChevronRight,
  BadgeCheck,
  Clock3,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  Settings2,
  ShieldCheck,
  Wrench,
  type LucideIcon 
} from "lucide-react";

const DEFAULT_HERO_IMAGE = "/Gemini_Generated_Image_s4gceys4gceys4gc.png";

const HIGHLIGHT_ACCENTS: {
  Icon: LucideIcon;
  label: string;
  meta: string;
  beam: string;
}[] = [
  {
    Icon: ShieldCheck,
    label: "Verified",
    meta: "Compliance-led",
    beam: "from-flame-amber/35 via-flame-orange/20 to-transparent",
  },
  {
    Icon: Gauge,
    label: "Efficient",
    meta: "Performance tuned",
    beam: "from-cool-light/35 via-cool-blue/20 to-transparent",
  },
  {
    Icon: Clock3,
    label: "Responsive",
    meta: "Time-aware visits",
    beam: "from-flame-red/30 via-flame-deep/20 to-transparent",
  },
  {
    Icon: Wrench,
    label: "Precise",
    meta: "Clean execution",
    beam: "from-cool-blue/30 via-flame-amber/15 to-transparent",
  },
];

type HighlightDetail = {
  scope: string;
  outcome: string;
};

type HighlightCopy = {
  intro: string;
  standard: string;
  actions: { label: string; Icon: LucideIcon }[];
  details: HighlightDetail[];
};

const SERVICE_HIGHLIGHT_COPY: Record<string, HighlightCopy> = {
  plumbing: {
    intro:
      "Built for real plumbing work across London homes: leaks, cylinders, taps, toilets, pumps, pipework, pressure issues, and emergency repairs handled cleanly from diagnosis to handover.",
    standard: "Qualified plumbing response",
    actions: [
      { label: "Trace", Icon: ShieldCheck },
      { label: "Repair", Icon: Wrench },
      { label: "Test", Icon: FileCheck2 },
    ],
    details: [
      {
        scope: "Leak & pipework ready",
        outcome: "We locate the fault and protect the surrounding area before repair work begins.",
      },
      {
        scope: "Hot water support",
        outcome: "Cylinder, immersion, pump, and hot water faults are checked with the full system in mind.",
      },
      {
        scope: "Fixture repair detail",
        outcome: "Taps, toilets, showers, valves, and Saniflo units are repaired or replaced neatly.",
      },
      {
        scope: "Pressure & flow",
        outcome: "We check flow, pressure, airlocks, and pump performance so the repair solves the actual issue.",
      },
    ],
  },
  boiler: {
    intro:
      "Focused on boiler servicing, repairs, installation, replacement, warranty work, pressure faults, pilot light issues, and power flushes by Gas Safe registered engineers.",
    standard: "Gas Safe boiler care",
    actions: [
      { label: "Diagnose", Icon: ShieldCheck },
      { label: "Service", Icon: Settings2 },
      { label: "Commission", Icon: FileCheck2 },
    ],
    details: [
      {
        scope: "Boiler fault finding",
        outcome: "We inspect the boiler fault, controls, pressure, and visible pipework before quoting the fix.",
      },
      {
        scope: "Service routine",
        outcome: "Annual servicing is completed with safety, performance, and warranty requirements in mind.",
      },
      {
        scope: "Install & replace",
        outcome: "New boilers are sized, fitted, and commissioned for the property and hot water demand.",
      },
      {
        scope: "Heating protection",
        outcome: "Power flushes, pressure issues, and radiator circulation problems are treated as system faults.",
      },
    ],
  },
  gas: {
    intro:
      "Made for Gas Safe work: CP12 certificates, landlord checks, cooker and fire installation, gas pipework, leak detection, appliance checks, flues, and ventilation.",
    standard: "Gas Safe certified checks",
    actions: [
      { label: "Inspect", Icon: ShieldCheck },
      { label: "Certify", Icon: ClipboardCheck },
      { label: "Report", Icon: FileCheck2 },
    ],
    details: [
      {
        scope: "Appliance safety",
        outcome: "Boilers, cookers, fires, flues, and ventilation are checked against gas safety requirements.",
      },
      {
        scope: "CP12 ready",
        outcome: "Landlord and homeowner certificates are handled clearly with remedial advice where needed.",
      },
      {
        scope: "Pipework & leaks",
        outcome: "Gas pipework routes, connections, and leak risks are checked before repair or installation.",
      },
      {
        scope: "Install compliance",
        outcome: "Cookers, hobs, fires, and boiler gas connections are installed with safe clearances and testing.",
      },
    ],
  },
  airConditioning: {
    intro:
      "Designed for F-Gas air conditioning work: wall splits, multi-splits, ducted systems, heat pumps, commercial units, maintenance, repairs, refrigerant checks, and commissioning.",
    standard: "F-Gas AC engineering",
    actions: [
      { label: "Survey", Icon: ShieldCheck },
      { label: "Install", Icon: Settings2 },
      { label: "Commission", Icon: FileCheck2 },
    ],
    details: [
      {
        scope: "AC survey detail",
        outcome: "We match the unit, pipe route, and outdoor position to the room and property layout.",
      },
      {
        scope: "Installation finish",
        outcome: "Indoor and outdoor units are fitted neatly with drainage, containment, and controls planned.",
      },
      {
        scope: "F-Gas handling",
        outcome: "Refrigerant work is completed by certified engineers with pressure and leak checks included.",
      },
      {
        scope: "Maintenance & repair",
        outcome: "Servicing and repairs focus on airflow, filters, coils, faults, and reliable heating or cooling.",
      },
    ],
  },
  underfloor: {
    intro:
      "Specific to underfloor heating projects: wet systems, electric mats, manifolds, thermostats, smart controls, cold zones, pressure loss, floor sensors, and commissioning.",
    standard: "Underfloor system planning",
    actions: [
      { label: "Design", Icon: ClipboardCheck },
      { label: "Balance", Icon: Settings2 },
      { label: "Handover", Icon: FileCheck2 },
    ],
    details: [
      {
        scope: "Floor build-up",
        outcome: "We plan around insulation, floor height, heating output, and the final floor finish.",
      },
      {
        scope: "Wet system detail",
        outcome: "Pipe loops, manifold position, flow rates, actuators, and boiler integration are checked.",
      },
      {
        scope: "Electric system detail",
        outcome: "Heating mats, loose cable, floor sensors, thermostats, and electrical load are planned correctly.",
      },
      {
        scope: "Controls & comfort",
        outcome: "Zones, thermostats, schedules, and balancing are set up for practical day-to-day comfort.",
      },
    ],
  },
  heating: {
    intro:
      "Built around heating systems in London properties: radiators, valves, pipework, controls, circulation faults, emergency heating, servicing, and central heating installation.",
    standard: "Heating system care",
    actions: [
      { label: "Assess", Icon: ShieldCheck },
      { label: "Repair", Icon: Wrench },
      { label: "Balance", Icon: Gauge },
    ],
    details: [
      {
        scope: "Central heating check",
        outcome: "We assess radiators, valves, pipework, controls, and boiler connection points together.",
      },
      {
        scope: "Emergency heat",
        outcome: "No-heating and poor-heating calls are handled by checking the cause, not just the symptom.",
      },
      {
        scope: "Installation detail",
        outcome: "Radiators, TRVs, controls, and pipe runs are planned around the room and heat demand.",
      },
      {
        scope: "System performance",
        outcome: "Balancing and flow checks help rooms heat more evenly and reduce repeat call-backs.",
      },
    ],
  },
};

function getServiceHighlightCopy(value: string) {
  const text = value.toLowerCase();

  if (text.includes("air conditioning")) return SERVICE_HIGHLIGHT_COPY.airConditioning;
  if (text.includes("underfloor")) return SERVICE_HIGHLIGHT_COPY.underfloor;
  if (text.includes("boiler")) return SERVICE_HIGHLIGHT_COPY.boiler;
  if (text.includes("gas")) return SERVICE_HIGHLIGHT_COPY.gas;
  if (text.includes("plumbing")) return SERVICE_HIGHLIGHT_COPY.plumbing;
  if (text.includes("heating")) return SERVICE_HIGHLIGHT_COPY.heating;

  return SERVICE_HIGHLIGHT_COPY.heating;
}

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
  const serviceCopy = getServiceHighlightCopy(`${category} ${title} ${highlight}`);

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
      <section className="relative overflow-hidden py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-border bg-slate-950/95 text-white">
        <div className="absolute inset-0 square-pattern opacity-[0.045] mix-blend-screen" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_36%)]" />
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.14),_transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,152,0,0.12),_transparent_58%)] blur-3xl" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
                <span className="inline-block h-px w-12 rounded-full bg-primary/60" />
                What&apos;s Included
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.02] text-white">
                Service highlights
                <span className="block text-primary">built to stand out.</span>
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_40px_80px_-48px_rgba(15,23,42,0.9)] backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                <p className="text-lg leading-8 text-slate-300">
                  {serviceCopy.intro}
                </p>

                <div className="inline-flex w-max items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  <ClipboardCheck className="h-4 w-4" />
                  {serviceCopy.standard}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {serviceCopy.actions.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-slate-900/80 px-4 py-4 text-sm font-medium text-white shadow-sm transition hover:border-primary/30 hover:bg-slate-900"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {features.map((service, index) => {
              const ServiceIcon = service.icon || CheckCircle2;
              const accent = HIGHLIGHT_ACCENTS[index % HIGHLIGHT_ACCENTS.length];
              const detail = serviceCopy.details[index % serviceCopy.details.length];
              const AccentIcon = accent.Icon;

              return (
                <article
                  key={service.title}
                  className={`group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 sm:p-8 shadow-[0_40px_80px_-48px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-slate-900 ${
                    index === 0 ? "md:col-span-2 xl:col-span-1" : ""
                  }`}
                >
                  <div className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${accent.beam}`} />
                  <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accent.beam} opacity-55 blur-3xl transition-transform duration-700 group-hover:scale-125`} />
                  <div className="absolute inset-0 noise-overlay opacity-40 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%,rgba(255,255,255,0.03))]" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-sm transition group-hover:border-primary/30 group-hover:bg-white/10">
                          <ServiceIcon className="relative z-10 h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90">
                            <AccentIcon className="h-3.5 w-3.5 text-primary" />
                            {accent.label}
                          </div>
                          <div className="mt-2 text-xs text-slate-400">{accent.meta}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 relative">
                      <h3 className="text-2xl font-display font-medium tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-7 grid gap-3">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                            Scope
                          </span>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                            {detail.scope}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {detail.outcome}
                        </p>
                      </div>

                    </div>

                    <div className="mt-auto pt-7 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 rounded-3xl bg-white/5 px-4 py-3 text-xs font-medium text-slate-200 ring-1 ring-white/10">
                        <BadgeCheck className="h-4 w-4 text-primary" />
                        Included in this service
                      </div>
                    </div>
                  </div>
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
