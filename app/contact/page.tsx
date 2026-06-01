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
    "Heating",
    "Emergency Heating Engineers",
    "Emergency Boiler Repairs",
    "Central Heating Installation",
    "Central Heating Service",
    "Central Heating Repairs",
    "Air Conditioning",
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
    "All Services",
    "Others...",
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "07473 423003",
      subtext: "Fast response during business hours",
    },
    {
      icon: Mail,
      label: "Email",
      value: "londonclimatesystems@gmail.com",
      subtext: "Response within 2 hours",
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
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary" />
              Get in Touch
            </span>
            <h1 className="text-5xl lg:text-7xl font-display leading-tight text-foreground mb-8">
              Book a service or reach out
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Whether it&apos;s an emergency or a scheduled appointment, we&apos;re here to help. Contact us using any method below or submit a booking request.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-16">Quick contact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-border rounded-xl hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-display text-foreground mb-2">{method.label}</h3>
                  <p className="text-foreground font-mono mb-2">{method.value}</p>
                  <p className="text-sm text-foreground/60">{method.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 lg:py-32 border-t border-border bg-primary/5">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary" />
              Booking Form
            </span>
            <h2 className="text-4xl lg:text-5xl font-display">
              Request a service
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full h-12 px-4 rounded-lg border border-foreground/20 bg-background focus:border-primary"
              />
            </div>

            {/* Phone and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 (0) 20..."
                  required
                  className="w-full h-12 px-4 rounded-lg border border-foreground/20 bg-background focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full h-12 px-4 rounded-lg border border-foreground/20 bg-background focus:border-primary"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                Service Address *
              </label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address in London"
                required
                className="w-full h-12 px-4 rounded-lg border border-foreground/20 bg-background focus:border-primary"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                Service Required *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 rounded-lg border border-foreground/20 bg-background text-foreground focus:border-primary"
              >
                <option value="">Select a service...</option>
                {services.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                Urgency *
              </label>
              <div className="flex flex-col gap-3">
                {[
                  { value: "emergency", label: "Emergency (ASAP - Same day)" },
                  { value: "urgent", label: "Urgent (Within 2-3 days)" },
                  { value: "scheduled", label: "Scheduled appointment" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      value={option.value}
                      checked={formData.urgency === option.value}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
                <p className="text-xs text-muted-foreground mt-2">
                  ⓘ We operate during regular business hours. Emergency requests are prioritized and handled ASAP.
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                Problem Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please describe the issue you're experiencing..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:border-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-14 group"
            >
              {isSubmitting ? "Submitting..." : "Request Booking"}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We&apos;ll contact you shortly to confirm your appointment and discuss pricing.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-8">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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
              <div key={index}>
                <h3 className="text-lg font-display text-foreground mb-3">{item.q}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    <FooterSection />
    </main>
  );
}
