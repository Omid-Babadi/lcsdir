import Image from "next/image";
import Link from "next/link";
import { Droplets, Flame, Gauge, Wind } from "lucide-react";

const systems = [
  { label: "Heating", icon: Flame, className: "text-orange-500" },
  { label: "Cooling", icon: Wind, className: "text-sky-500" },
  { label: "Plumbing", icon: Droplets, className: "text-blue-500" },
  { label: "Boilers", icon: Gauge, className: "text-red-500" },
];

const serviceLinks = [
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Heating", href: "/services/heating" },
  { label: "Boilers", href: "/services/boiler" },
  { label: "Air conditioning", href: "/services/air-conditioning" },
  { label: "Gas services", href: "/services/gas" },
  { label: "Contact", href: "/contact" },
];

export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 square-pattern opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px gradient-flame" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="relative mb-10 flex size-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-orange-500/20" />
          <div className="absolute inset-3 animate-spin rounded-full border-2 border-orange-500/20 border-t-orange-500" />
          <div className="absolute inset-8 animate-pulse rounded-full bg-orange-500/10" />
          <div className="relative size-16 overflow-hidden rounded-2xl border border-border bg-background shadow-lg dark:bg-white">
            <Image
              src="/logo.png"
              alt="London Climate Systems"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
              London Climate Systems
            </span>
          </div>
          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            London HVAC and plumbing services
          </h1>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              London Climate Systems provides heating, cooling, plumbing, gas,
              boiler, and air conditioning support for homes, landlords, and
              commercial properties across Greater London. Our engineers help
              with urgent repairs, planned installations, annual servicing,
              safety checks, and practical maintenance for everyday property
              systems.
            </p>
            <p>
              If you need a plumber in London, a heating engineer, a boiler
              repair specialist, or F-Gas certified air conditioning support,
              the website will load the booking tools, service pages, coverage
              details, and contact options shortly. You can also use the links
              below to reach the main service areas directly.
            </p>
            <p>
              Our service information covers emergency plumbing, central heating
              repairs, boiler installation, boiler servicing, gas safety
              certificates, landlord checks, leak detection, air conditioning
              installation, cooling maintenance, and underfloor heating. The
              team works across London boroughs with clear pricing, careful
              workmanship, and safety-focused diagnostics before any repair or
              replacement is recommended.
            </p>
            <p>
              Homeowners can compare services, request a quote, call the office,
              or book an appointment online. Landlords and businesses can review
              planned maintenance options, certification support, and commercial
              HVAC services for properties that need reliable heating, plumbing,
              gas, boiler, and cooling care throughout the year.
            </p>
          </div>
        </div>

        <nav
          aria-label="Key service links"
          className="mt-8 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-orange-500 hover:text-orange-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {systems.map(({ label, icon: Icon, className }) => (
            <div
              key={label}
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/80 shadow-sm backdrop-blur"
            >
              <Icon className={`size-5 ${className}`} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 h-1 w-full max-w-md overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[loading-bar_1.4s_ease-in-out_infinite] rounded-full gradient-flame" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <a
            href="https://www.gassaferegister.co.uk/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-600"
          >
            Gas Safe Register
          </a>
          <a
            href="https://www.gov.uk/guidance/fluorinated-gases-f-gases"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-600"
          >
            F-Gas guidance
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flondonclimatesystems.com%2F"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-600"
          >
            Share on Facebook
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Flondonclimatesystems.com%2F"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-600"
          >
            Share on LinkedIn
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flondonclimatesystems.com%2F&text=London%20Climate%20Systems"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-orange-600"
          >
            Share on X
          </a>
        </div>
      </div>
    </main>
  );
}
