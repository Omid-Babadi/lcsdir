import { Siren } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Emergency Plumbing",
  description: "Emergency plumbers across London. Burst pipes, leaks, hot water problems, cylinder installations — fast response by certified engineers.",
  path: "/services/plumbing/emergency",
});

export default function EmergencyPlumbingPage() {
  return (
    <ServiceDetailTemplate
      category="Plumbing / Emergency"
      title="emergency"
      highlight="plumbing solutions."
      description="From airlocks and leaks to complete cylinder installations and pump repairs, our certified engineers handle all emergency plumbing issues across London. Transparent pricing, fixed on the same visit."
      icon={Siren}
      features={[
        { title: "Airlocks", description: "Quick diagnosis and removal of airlocks in your hot and cold water systems." },
        { title: "Hot Cylinder Installations", description: "Professional installation of vented and unvented hot water cylinders." },
        { title: "Hot Water Problems", description: "Fast diagnosis and repair of no hot water or intermittent hot water issues." },
        { title: "Immersion Heaters", description: "Repair or replacement of faulty immersion heaters for reliable hot water." },
        { title: "Leaks", description: "Fast leak detection and repair to prevent water damage to your property." },
        { title: "Pipework Replacement", description: "Replacement of corroded, leaking, or damaged pipework throughout your home." },
        { title: "Plumbing Installations", description: "Complete plumbing installations for bathrooms, kitchens, and appliances." },
        { title: "Pumps", description: "Installation, repair, and maintenance of water pumps and booster pumps." },
        { title: "Radiator & Valves", description: "Radiator installations, valve replacements, and TRV fitting." },
        { title: "Repairs", description: "Comprehensive plumbing repairs for all fixtures and systems." },
        { title: "Saniflo Installs", description: "Professional installation and repair of Saniflo macerator units." },
        { title: "Showers & Pressure Adjustments", description: "Shower repairs, installations, and water pressure optimization." },
        { title: "Stopcocks", description: "Stopcock replacement, repair, and installation for full water control." },
        { title: "Tap Repairs & Installations", description: "All tap types repaired or installed including mixer and pillar taps." },
        { title: "Thermostat Problems", description: "Diagnosis and repair of faulty boiler and cylinder thermostats." },
        { title: "Toilet Repairs & Installs", description: "Complete toilet repairs and installations for all styles and types." },
        { title: "Unvented & Vented Cylinders", description: "Installation and maintenance of both unvented and vented hot water cylinders." },
        { title: "Water Heater Repairs & Installs", description: "All types of water heaters repaired or installed correctly." },
        { title: "Water Tank Installs", description: "Cold water tank installation in lofts and utility spaces." },
      ]}
      process={[
        { step: "01", title: "Call Us", description: "Speak to a real engineer to diagnose your issue." },
        { step: "02", title: "Engineer Dispatched", description: "Nearest available engineer scheduled for your area." },
        { step: "03", title: "Fixed Quote", description: "On-site diagnosis and fixed price before we start." },
        { step: "04", title: "Resolved", description: "Most emergencies resolved on the first visit." },
      ]}
      faqs={[
        { question: "Do you charge call-out fees?", answer: "No call-out fees, ever. You only pay for the work agreed in your fixed quote." },
        { question: "How fast can you arrive?", answer: "We prioritize emergency calls and aim to dispatch the nearest engineer to your location as quickly as possible." },
        { question: "Are your engineers certified?", answer: "Yes, all our plumbers are fully qualified, insured, and experienced in all types of emergency plumbing work." },
      ]}
    />
  );
}