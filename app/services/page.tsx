import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Droplets, Flame, Wind, Wrench, Gauge, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Plumbing, Heating, Boiler, Gas & AC Services in London",
  description:
    "Professional plumbing, heating, air conditioning, gas, and boiler services across London from Gas Safe and F-Gas certified engineers.",
  path: "/services",
  keywords: ["London plumbing services", "London heating services", "boiler services London", "AC services London"],
});

const services = [
  {
    name: "Plumbing",
    href: "/services/plumbing",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Complete plumbing solutions from installations to emergency repairs. Our certified plumbers handle residential and commercial jobs with precision.",
    items: [
      "Plumbing Installation",
      "Plumbing Emergency Service",
      "Plumbing Repair",
    ],
  },
  {
    name: "Heating",
    href: "/services/heating",
    icon: Flame,
    color: "text-[#FF6A00]",
    bgColor: "bg-[#FF6A00]/10",
    description: "Expert heating services from Gas Safe registered engineers. Emergency heating, boiler repairs, and central heating solutions.",
    items: [
      "Emergency Heating Engineers",
      "Emergency Boiler Repairs",
      "Central Heating Installation",
      "Central Heating Service",
      "Central Heating Repairs",
    ],
  },
  {
    name: "Air Conditioning",
    href: "/services/air-conditioning",
    icon: Wind,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    description: "F-Gas certified air conditioning specialists. Installation, maintenance, and repairs for all AC systems and brands across London.",
    items: [
      "Air Conditioning Maintenance",
      "Air Conditioning Installations",
      "Air Conditioning Repair Services",
    ],
  },
  {
    name: "Gas",
    href: "/services/gas",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    description: "Professional gas services for homeowners, landlords and tenants. Gas Safe registered engineers ensuring complete safety and compliance.",
    items: [
      "Gas Boiler Installation",
      "Gas Cooker & Hob Installation",
      "Gas Fire Installation",
      "Gas Safety Certificates",
      "Gas Leak Detection & Repair",
      "Gas Pipe Installation",
      "Annual Gas Safety Checks",
      "Landlord Gas Certificates",
    ],
  },
  {
    name: "Boiler",
    href: "/services/boiler",
    icon: Gauge,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Professional boiler services for homeowners, landlords and tenants. Expert repairs, installations, and annual servicing.",
    items: [
      "Boiler Breakdown Repairs",
      "New Boiler Installation",
      "Boiler Replacement & Upgrades",
      "Annual Boiler Servicing",
      "System & Combi Boiler Fitting",
      "Boiler Pressure Issues",
        "Pilot Light Repairs",
        "Boiler Warranty Work",
        "Power Flush",
    ],
  },
  // Power Flush moved under Boiler
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px gradient-flame" />
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground mb-6">
              Professional climate solutions for every need
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              From emergency repairs to complete installations, our Gas Safe and F-Gas certified 
              engineers deliver premium quality services across London.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group block p-6 lg:p-8 border border-border rounded-2xl hover:border-[#FF6A00]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h2 className="text-2xl font-display text-foreground mb-3 group-hover:text-[#FF6A00] transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-[#FF6A00] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.items.length > 4 && (
                      <li className="flex items-center gap-2 text-sm text-foreground/50">
                        <CheckCircle className="w-4 h-4 text-[#FF6A00]/50 flex-shrink-0" />
                        <span>+{service.items.length - 4} more services</span>
                      </li>
                    )}
                  </ul>
                  <span className="inline-flex items-center text-sm font-medium text-[#FF6A00] group-hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-6">
            Need emergency service?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our engineers are spread across London and ready to help. No call-out fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-flame text-white rounded-full px-8 h-14" asChild>
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <a href="tel:07473423003">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-[#FF6A00] text-[#FF6A00]">
                <Phone className="w-4 h-4 mr-2" />
                07473 423003
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
