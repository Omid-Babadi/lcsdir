import { Flame } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Central Heating Service",
  description: "Professional central heating service across London. Complete system checks, boiler servicing, radiator balancing, and efficiency optimization by Gas Safe engineers.",
  path: "/services/heating/installation",
});

export default function CentralHeatingServicePage() {
  return (
    <ServiceDetailTemplate
      category="Heating / Service"
      title="central heating"
      highlight="service."
      description="Keep your central heating system running efficiently and reliably with our comprehensive service packages. Our Gas Safe registered engineers perform complete system checks, boiler servicing, radiator balancing, and efficiency optimization. Regular servicing prevents unexpected breakdowns, extends your system's lifespan, and keeps energy bills low. Whether it's an annual check-up or a one-time service, we ensure your home stays warm when you need it most."
      icon={Flame}
      features={[
        { title: "Complete Boiler Service", description: "Thorough inspection, cleaning, and testing of your boiler to ensure safe and efficient operation." },
        { title: "System Efficiency Check", description: "Comprehensive assessment of your entire heating system's efficiency and performance." },
        { title: "Radiator Balancing", description: "Ensure all radiators heat up evenly and efficiently throughout your home." },
        { title: "Thermostat Calibration", description: "Check and calibrate thermostats and heating controls for accurate temperature control." },
        { title: "Pressure System Check", description: "Inspect pressure levels, expansion vessels, and safety valves for optimal operation." },
        { title: "Pipework Inspection", description: "Thorough check of all visible pipework for leaks, corrosion, or insulation issues." },
        { title: "Gas Safety Check", description: "Comprehensive gas safety inspection included with every service." },
        { title: "Magnetic Filter Cleaning", description: "Clean and service system filters to remove sludge and debris." },
        { title: "Flue & Combustion Check", description: "Inspect flue terminals and analyze combustion for safe operation." },
        { title: "Pump Performance Test", description: "Check circulation pump operation and flow rates throughout the system." },
        { title: "System Inhibitor Check", description: "Test and top up corrosion inhibitor to protect your system." },
        { title: "Service Report Provided", description: "Detailed written report of all checks, findings, and recommendations." },
      ]}
      process={[
        { step: "01", title: "Book Your Service", description: "Schedule your central heating service at a time that suits you." },
        { step: "02", title: "Engineer Visit", description: "Gas Safe engineer arrives for thorough system inspection and service." },
        { step: "03", title: "Complete Service", description: "Full boiler service, radiator balancing, and efficiency checks completed." },
        { step: "04", title: "Service Report", description: "Receive detailed report of all work completed and any recommendations." },
      ]}
      faqs={[
        { question: "How often should I service my central heating?", answer: "We recommend an annual service to keep your system running efficiently, prevent breakdowns, and maintain manufacturer warranties." },
        { question: "What's included in a central heating service?", answer: "A complete service includes boiler inspection and cleaning, radiator balancing, pressure checks, thermostat calibration, gas safety check, and system efficiency testing." },
        { question: "Does servicing help reduce energy bills?", answer: "Yes, a well-maintained heating system operates more efficiently, which can reduce your energy bills by up to 10-15%." },
        { question: "Is a service different from a repair?", answer: "Yes, a service is preventative maintenance to keep your system running well, while a repair fixes specific issues when something breaks." },
        { question: "How long does a central heating service take?", answer: "A standard service typically takes 1-2 hours, depending on your system type and size." },
        { question: "Do you provide a service certificate?", answer: "Yes, we provide a detailed service report and certificate of inspection for your records and warranty requirements." },
        { question: "What happens if you find a problem during service?", answer: "We'll explain the issue clearly, provide a fixed quote for any necessary repairs, and can often fix it during the same visit." },
      ]}
    />
  );
}