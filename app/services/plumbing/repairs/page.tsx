import { Wrench } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Plumbing Repair",
  description: "Professional plumbing repairs across London. Leaking pipes, shower repairs, toilet repairs, tap repairs — fast, reliable service by certified engineers.",
  path: "/services/plumbing/repairs",
});

export default function PlumbingRepairPage() {
  return (
    <ServiceDetailTemplate
      category="Plumbing / Repair"
      title="plumbing"
      highlight="repair specialists."
      description="From leaking pipes and dripping taps to broken showers and malfunctioning toilets, our certified plumbers diagnose and fix all types of plumbing issues quickly and effectively. Transparent pricing, quality workmanship, and repairs completed with full testing."
      icon={Wrench}
      features={[
        { title: "Leaking Pipes", description: "Fast detection and repair of leaking pipes to prevent water damage and reduce bills." },
        { title: "Shower Repairs", description: "Fix low pressure, temperature fluctuations, broken controls, and complete shower system issues." },
        { title: "Toilet Repairs", description: "Fixing running toilets, blocked flushes, broken handles, fill valves, and flush mechanisms." },
        { title: "Tap Repairs", description: "Repairing dripping taps, leaking cartridges, worn washers, and faulty ceramic disc valves." },
      ]}
      process={[
        { step: "01", title: "Call Us", description: "Describe your plumbing issue to one of our engineers." },
        { step: "02", title: "Engineer Dispatched", description: "Nearest available engineer scheduled for your location." },
        { step: "03", title: "Fixed Quote", description: "On-site diagnosis and fixed price before any work begins." },
        { step: "04", title: "Repaired", description: "Most repairs completed on the first visit with full testing." },
      ]}
      faqs={[
        { question: "How quickly can you fix a leaking pipe?", answer: "Most leaking pipes can be repaired within 1-2 hours of our engineer arriving on site, depending on accessibility and pipe location." },
        { question: "Do you charge a call-out fee for repairs?", answer: "No, we never charge call-out fees. You only pay for the repair work agreed in your fixed quote." },
        { question: "Can you repair any type of tap?", answer: "Yes, we repair all tap types including mixer taps, pillar taps, monobloc taps, ceramic disc taps, and traditional compression taps." },
        { question: "My toilet keeps running - can you fix it?", answer: "Absolutely. Running toilets are usually caused by faulty fill valves, flappers, or float mechanisms. We'll diagnose and fix the issue same-day." },
        { question: "Do you test repairs before leaving?", answer: "Yes, we test repairs before sign-off and explain any aftercare needed." },
        { question: "Do you supply replacement parts?", answer: "Yes, we carry common replacement parts and can source specific parts needed for your repair at competitive prices." },
      ]}
    />
  );
}
