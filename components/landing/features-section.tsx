"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, Flame, Zap } from "lucide-react";
import Image from "next/image";
import featuresImage from "../../public/61940140-5a44-4fb5-ad08-08b4dbc86e8b.png";

const services = [
  {
    icon: Droplets,
    title: "Plumbing",
    description:
      "Burst pipes, blocked drains, leak repairs, bathroom installations and full plumbing system overhauls. Gas Safe registered engineers.",
    highlights: ["Emergency leak repair", "Bathroom fitting", "Pipe replacement"],
  },
  {
    icon: Flame,
    title: "Heating & Boilers",
    description:
      "Boiler installations, servicing and emergency repairs for all major brands. Central heating power-flushing, radiator upgrades and underfloor heating.",
    highlights: ["Boiler installation", "Annual servicing", "Central heating", "Underfloor heating"],
  },
  {
    icon: Zap,
    title: "Air Conditioning",
    description:
      "Professional air conditioning installation, maintenance and emergency repairs. F-Gas certified engineers ensuring optimal performance and energy efficiency.",
    highlights: ["AC installation", "Regular maintenance", "Emergency repairs", "Energy efficient"],
  },
];

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isActive, setIsActive] = useState(index === 0);
  const Icon = service.icon;
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const checkAvailability = () => {
      const londonTime = new Date(
        new Date().toLocaleString("en-GB", {
          timeZone: "Europe/London",
        })
      );

      const day = londonTime.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const hours = londonTime.getHours();
      const minutes = londonTime.getMinutes();

      const currentTime = hours * 60 + minutes;

      // Monday-Friday: 08:00 - 18:00
      const weekdayOpen = 8 * 60;
      const weekdayClose = 18 * 60;

      // Saturday: 08:00 - 15:00
      const saturdayOpen = 8 * 60;
      const saturdayClose = 15 * 60;

      let available = false;

      if (day >= 1 && day <= 5) {
        available =
          currentTime >= weekdayOpen &&
          currentTime < weekdayClose;
      } else if (day === 6) {
        available =
          currentTime >= saturdayOpen &&
          currentTime < saturdayClose;
      }

      setIsAvailable(available);
    };

    checkAvailability();

    const interval = setInterval(checkAvailability, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`group relative p-6 border-l-2 cursor-pointer transition-all duration-500 ${
        isActive
          ? "border-l-blue-500 bg-blue-500/[0.04]"
          : "border-l-border hover:border-l-blue-400/50 hover:bg-blue-500/[0.02]"
      } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg transition-colors duration-300 ${
            isActive
              ? "bg-blue-500 text-white"
              : "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-display text-foreground mb-1">{service.title}</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-4">
            {service.highlights.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-2.5 py-1 bg-blue-500/5 text-blue-600 rounded-full border border-blue-200/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkAvailability = () => {
      const londonTime = new Date(
        new Date().toLocaleString("en-GB", {
          timeZone: "Europe/London",
        })
      );

      const day = londonTime.getDay(); // 0=Sun, 1=Mon ... 6=Sat
      const hours = londonTime.getHours();
      const minutes = londonTime.getMinutes();

      const currentMinutes = hours * 60 + minutes;

      let available = false;

      // Monday - Friday (08:00 - 18:00)
      if (day >= 1 && day <= 5) {
        available =
          currentMinutes >= 8 * 60 &&
          currentMinutes < 18 * 60;
      }

      // Saturday (08:00 - 15:00)
      if (day === 6) {
        available =
          currentMinutes >= 8 * 60 &&
          currentMinutes < 15 * 60;
      }

      // Sunday = unavailable
      setIsAvailable(available);
    };

    checkAvailability();

    const interval = setInterval(checkAvailability, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className="mb-10">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-blue-400" />
                Our services
              </span>

              <h2
                className={`text-4xl lg:text-5xl font-display tracking-tight text-foreground transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Complete
                <br />
                <span className="text-primary">
                  property care.
                </span>
              </h2>

              <p
                className={`mt-4 text-base text-foreground/70 leading-relaxed transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                From a dripping tap to a full renovation, our qualified
                engineers and tradespeople deliver reliable results with
                transparent pricing.
              </p>

              <div className="mt-6 rounded-xl bg-background/90 border border-border/50 p-4 shadow-lg lg:hidden">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${isAvailable ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                  <div className="flex flex-col">
                    <span className={`text-sm font-medium ${isAvailable ? "text-green-600" : "text-red-600"}`}>
                      {isAvailable ? "Available now" : "Currently unavailable"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Mon–Fri 8:00 AM–6:00 PM • Sat 8:00 AM–3:00 PM (London)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute -inset-4 rounded-2xl bg-blue-500/5 -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl -z-10" />

            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl aspect-[3/4] md:aspect-[4/3] lg:aspect-[2.4/4]">
              <Image
                src="/faeac5c4-cfd9-409f-be7b-0b0683ecd282.png"
                alt="Our engineers at work"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

              {/* Availability Badge (desktop only) */}
              <div className="hidden lg:block absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isAvailable
                        ? "bg-green-500 animate-pulse"
                        : "bg-red-500"
                    }`}
                  />

                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-medium ${
                        isAvailable
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {isAvailable
                        ? "Available now"
                        : "Currently unavailable"}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      Mon–Fri 8:00 AM–6:00 PM • Sat 8:00 AM–3:00 PM (London)
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}