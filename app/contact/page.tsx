"use client";

import { Navigation } from "@/components/landing/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section";
import { useToast } from "@/hooks/use-toast";


export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    description: "",
    urgency: "scheduled",
  });

  const services = [
    "Plumbing Installation",
    "Plumbing Emergency Service",
    "Plumbing Repair",
    "Emergency Heating Engineers",
    "Emergency Boiler Repairs",
    "Central Heating Installation",
    "Central Heating Service",
    "Central Heating Repairs",
    "Air Conditioning Maintenance",
    "Air Conditioning Installations",
    "Air Conditioning Repair Services",
    "Gas Boiler Installation",
    "Gas Cooker and Hob Installation",
    "Gas Fire Installation",
    "Gas Safety Certificates",
    "Gas Leak Detection and Repair",
    "Gas Pipe Installation",
    "Annual Gas Safety Checks",
    "Landlord Gas Certificates",
    "Boiler Breakdown Repairs",
    "New Boiler Installation",
    "Boiler Replacement and Upgrades",
    "Annual Boiler Servicing",
    "System and Combi Boiler Fitting",
    "Boiler Pressure Issues",
    "Pilot Light Repairs",
    "Boiler Warranty Work",
    "Power Flush",
    "Underfloor Heating Installation",
    "Electric Underfloor Heating",
    "Wet Underfloor Heating Systems",
    "Underfloor Heating Repairs",
    "Underfloor Heating Controls & Thermostats",
    "Smart Thermostat Integration",
    "System Design & Consultation",
    "All Services",
    "Others...",
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "londonclimatesystems@gmail.com",
      subtext: "Response within 2 hours",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "07473 423003",
      subtext: "Fast response during business hours",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "71-75 Shelton Street, Covent Garden",
      subtext: "London, WC2H 9JQ",
    },
    {
      icon: Clock,
      label: "Emergency",
      value: "Request via form",
      subtext: "We prioritize emergency requests within business hours",
    },
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        notes: `Urgency: ${formData.urgency}\nAddress: ${formData.address}\n\n${formData.description}`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast({
        title: "Error",
        description: data.error || "Failed to submit booking request. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Thank you for your booking request! We'll contact you shortly to confirm.",
      variant: "default",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      description: "",
      urgency: "scheduled",
    });
  } catch (err) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%)]" />
        <div className="pointer-events-none absolute right-0 top-16 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.16),_transparent_55%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.12),_transparent_55%)] blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Hero Text Section */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary/90 mb-6">
              <span className="inline-block h-px w-14 rounded-full bg-primary" />
              Get in Touch
              <span className="inline-block h-px w-14 rounded-full bg-primary" />
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display tracking-tight text-foreground">
              Fast, modern contact for every London property.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl leading-8 text-foreground/70">
              Whether it&apos;s an emergency repair or a planned service, our local team makes it easy to book with confidence. Reach out now and we&apos;ll support you from the first message to the finished job.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-center">
              <Button size="lg" className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary/90" asChild>
                <a href="#booking">
                  Book a service
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-4 text-base text-foreground transition hover:border-primary" asChild>
                <a href="tel:07473423003">Call 07473 423003</a>
              </Button>
            </div>
          </div>

          {/* Single Big Card - 90% width, larger size */}
          <div className="mt-16 w-full mx-auto">
            <div className="rounded-[2rem] border border-border bg-white/95 p-8 md:p-10 lg:p-12 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.label} className="flex flex-col items-start text-center md:text-left">
                      <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-sm mx-auto md:mx-0">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="mt-5 w-full">
                        <h3 className="text-xl font-semibold text-foreground">{method.label}</h3>
                        <p className="text-foreground mt-1 break-words whitespace-normal text-base md:text-lg">
                          {method.value}
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">{method.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 lg:py-32 border-t border-border ">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[2rem] bg-slate-950/95 text-white p-10 shadow-sm ring-1 ring-slate-200/80">
              <span className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                Quick booking
              </span>
              <h2 className="mt-6 text-4xl font-display text-white">Request a service in minutes.</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Fill out your details once and we&apos;ll handle the rest. You can also call or email us directly if you need support right away.
              </p>
              <div className="mt-10 space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-primary">1</span>
                  <p>Describe the issue and the service you need.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-primary">2</span>
                  <p>Choose how fast you need us and share your address.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-primary">3</span>
                  <p>Submit your request and we&apos;ll contact you straight away.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-10 shadow-xl ring-1 ring-slate-200/80">
              <div className="mb-8">
                <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/90">
                  <span className="inline-block h-px w-12 rounded-full bg-primary" />
                  Booking Form
                </span>
                <h3 className="mt-6 text-3xl font-display text-foreground">Start your booking</h3>
                <p className="mt-4 text-sm text-foreground/70">
                  Tell us what service you need and we&apos;ll take care of the rest.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 ..."
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Address *</label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your property address"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-foreground focus:border-primary"
                    >
                      <option value="">Select a service...</option>
                      {services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Urgency *</label>
                    <div className="grid gap-3">
                      {[
                        { value: "emergency", label: "Emergency (ASAP)" },
                        { value: "urgent", label: "Urgent (2-3 days)" },
                        { value: "scheduled", label: "Scheduled appointment" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm transition hover:border-primary">
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            checked={formData.urgency === option.value}
                            onChange={handleChange}
                            className="h-4 w-4 accent-primary"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the problem or work needed..."
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-foreground focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  {isSubmitting ? "Submitting..." : "Request Booking"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <p className="text-sm text-foreground/70 text-center">
                  We&apos;ll contact you shortly to confirm your appointment and answer any follow-up questions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg leading-8 text-foreground/70">
              Answers to the most common questions about our booking process, pricing and emergency support.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                q: "What are your operating hours?",
                a: "We operate during regular business hours. We accept emergency requests and handle them as soon as possible within our service window.",
              },
              {
                q: "Do you provide upfront pricing?",
                a: "Yes, we provide fixed quotes before any work begins. No surprise charges or hidden fees.",
              },
              {
                q: "Are your technicians insured?",
                a: "All our professionals are fully insured, certified, Gas Safe and F-Gas registered for your peace of mind.",
              },
              {
                q: "What services do you offer?",
                a: "We specialize in plumbing, heating, boilers, air conditioning, gas work, and power flush services across London.",
              },
              {
                q: "What areas do you serve?",
                a: "We primarily serve Greater London with professional service teams available for residential and commercial properties.",
              },
              {
                q: "Do you offer maintenance plans?",
                a: "Yes, we offer tailored maintenance plans to keep your systems running smoothly and prevent costly breakdowns.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-[2rem] border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.q}</h3>
                <p className="text-foreground/70 leading-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}