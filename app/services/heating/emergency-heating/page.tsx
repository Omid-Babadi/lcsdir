import { Heater } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Emergency Heating Engineers",
  description: "Emergency heating engineers across London. Gas Safe registered experts for Vaillant, Worcester Bosch, and all major boiler brands. Fast response, transparent pricing.",
  path: "/services/heating/emergency-heating",
});

export default function EmergencyHeatingEngineersPage() {
  return (
    <ServiceDetailTemplate
      category="Heating / Emergency"
      title="emergency heating"
      highlight="engineers."
      description="Our Gas Safe registered engineers are committed to a full range of heating services. Backed by years of experience and deep knowledge of top boiler brands—like Vaillant and Worcester Bosch—we deliver expert service every step of the way."
      icon={Heater}
      features={[
        { title: "Boiler Breakdown Repairs", description: "Fast diagnosis and repair of all boiler types and brands, including Vaillant and Worcester Bosch." },
        { title: "No Heating or Hot Water", description: "Emergency response for sudden loss of heating or hot water in your home." },
        { title: "Vaillant Specialists", description: "Expert repair and service for all Vaillant boiler models." },
        { title: "Worcester Bosch Experts", description: "Specialized knowledge of Worcester Bosch boiler systems and common issues." },
        { title: "Gas Safe Registered", description: "Fully certified engineers with up-to-date Gas Safe registration for complete peace of mind." },
        { title: "Thermostat & Control Issues", description: "Repair and replacement of faulty thermostats, programmers, and heating controls." },
        { title: "Radiator Problems", description: "Cold radiators, bleeding radiators, and radiator valve repairs." },
        { title: "System Pressure Loss", description: "Diagnose and fix boiler pressure drops and repressurization issues." },
        { title: "Frozen Condensate Pipes", description: "Fast resolution of frozen condensate pipe issues in cold weather." },
        { title: "Pump Failures", description: "Heating pump diagnosis, repair, and replacement services." },
      ]}
      process={[
        { step: "01", title: "Call Our Engineers", description: "Speak directly to a Gas Safe registered engineer about your heating emergency." },
        { step: "02", title: "Engineer Dispatched", description: "Nearest available engineer scheduled for your location." },
        { step: "03", title: "Fixed Quote", description: "On-site diagnosis and fixed price before any work begins." },
        { step: "04", title: "Heating Restored", description: "Most heating emergencies resolved on the first visit." },
      ]}
      faqs={[
        { question: "Are your engineers really Gas Safe registered?", answer: "Yes, all our heating engineers hold current Gas Safe registration and we can provide their registration numbers upon request." },
        { question: "Do you specialize in specific boiler brands?", answer: "Yes, our engineers have extensive experience with Vaillant and Worcester Bosch boilers, as well as all other major brands." },
        { question: "What areas of London do you cover?", answer: "Our engineers are strategically located across all London boroughs for fast response times." },
        { question: "Do you charge call-out fees?", answer: "No call-out fees. You only pay for the work agreed in your fixed quote." },
        { question: "Can you repair any boiler make and model?", answer: "We work on all major boiler brands including Vaillant, Worcester Bosch, Baxi, Ideal, Glow-worm, Viessmann, Ferroli, Potterton, and more." },
        { question: "How long does an emergency repair usually take?", answer: "Most emergency repairs are completed within 1-3 hours of our engineer arriving on site." },
      ]}
    />
  );
}