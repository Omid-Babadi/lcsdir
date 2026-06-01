import { Flame } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Emergency Boiler Repairs",
  description: "Emergency boiler repairs across London. Gas Safe engineers for no heat, pressure drops, leaks, pilot light issues, and strange noises. No call-out fees, fast response.",
  path: "/services/heating/emergency-boiler",
});

export default function EmergencyBoilerRepairsPage() {
  return (
    <ServiceDetailTemplate
      category="Heating / Emergency Boiler"
      title="emergency boiler"
      highlight="repairs."
      description="In London, we know a broken boiler means a freezing house or no hot water — and that's why our Gas Safe engineers are spread across London, ready to help. We focus on fast, quality service — no call-out fees. Whether it's no heat, pressure drops, leaks, pilot light issues, or strange noises, we'll be there to sort it out — no fuss, just reliable repairs."
      icon={Flame}
      features={[
        { title: "No Heat or Hot Water", description: "Fast diagnosis and repair for boilers with no heating output or hot water supply." },
        { title: "Boiler Pressure Drops", description: "Fix boiler pressure issues, repressurization, and identify underlying causes of pressure loss." },
        { title: "Boiler Leaks", description: "Emergency repair of leaking boilers, pipes, and internal components to prevent water damage." },
        { title: "Pilot Light Issues", description: "Diagnose and repair pilot light failures, including thermocouple and flame sensor problems." },
        { title: "Strange Noises", description: "Fix banging, whistling, gurgling, or kettling noises coming from your boiler system." },
        { title: "Gas Safe Engineers", description: "All our engineers are fully Gas Safe registered for your safety and peace of mind." },
        { title: "No Call-Out Fees", description: "Transparent pricing with no hidden call-out charges — you only pay for the repair." },
        { title: "Same-Day Service", description: "Most boiler emergencies repaired on the same day with fast engineer dispatch." },
        { title: "All Major Brands", description: "We repair Vaillant, Worcester Bosch, Baxi, Ideal, Glow-worm, Viessmann, and all other brands." },
        { title: "Thermostat Problems", description: "Diagnose and fix faulty thermostats, programmers, and wireless heating controls." },
        { title: "Frozen Condensate Pipes", description: "Fast resolution of frozen condensate pipe issues, especially during cold weather." },
        { title: "Boiler Lockouts", description: "Reset and repair boilers that have gone into lockout mode due to faults." },
      ]}
      process={[
        { step: "01", title: "Call Us", description: "Describe your boiler problem to our team of Gas Safe engineers." },
        { step: "02", title: "Engineer Dispatched", description: "Nearest available engineer scheduled for your location across London." },
        { step: "03", title: "Fixed Quote", description: "On-site diagnosis and fixed price before any work begins — no call-out fees." },
        { step: "04", title: "Boiler Restored", description: "Your heating and hot water restored with reliable, long-lasting repairs." },
      ]}
      faqs={[
        { question: "Do you charge call-out fees?", answer: "No, we never charge call-out fees. You only pay for the repair work agreed in your fixed quote." },
        { question: "Are your engineers Gas Safe registered?", answer: "Yes, all our boiler repair engineers hold current Gas Safe registration. We can provide their registration numbers upon request." },
        { question: "How fast can you get to my property?", answer: "Our engineers are spread across London and aim to reach you as quickly as possible for emergency repairs." },
        { question: "What boiler brands do you repair?", answer: "We repair all major brands including Vaillant, Worcester Bosch, Baxi, Ideal, Glow-worm, Viessmann, Ferroli, Potterton, and many more." },
        { question: "Can you fix a boiler with strange noises?", answer: "Absolutely. Banging, whistling, gurgling, or kettling noises are common issues we diagnose and fix daily." },
        { question: "Do you carry spare parts?", answer: "Yes, our engineers carry common spare parts for all major boiler brands to complete most repairs on the first visit." },
        { question: "What if my boiler keeps losing pressure?", answer: "We'll diagnose the root cause of pressure loss — whether it's a leak, expansion vessel issue, or faulty pressure relief valve — and fix it permanently." },
      ]}
    />
  );
}