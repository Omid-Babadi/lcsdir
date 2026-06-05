import { Wrench } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Breakdown Repairs",
  description: "Rapid boiler breakdown repairs across London — fast fault diagnosis and same-day callouts.",
  path: "/services/boiler/breakdown-repairs",
});

export default function BreakdownRepairsPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Breakdown Repairs"
      title="Boiler breakdown repairs"
      highlight="repairs"
      description="We diagnose and repair boiler faults quickly to restore heating and hot water. Gas Safe engineers attend breakdowns across London with the right parts and tools."
      icon={Wrench}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780679427/e1a422a6-4d3a-482a-9802-a69daad383de_pihoqh.png"
      heroImageAlt="Engineer repairing a boiler"
      features={[
        { title: "No heating or hot water", description: "We restore heating and hot water fast with same-day callouts where possible." },
        { title: "Pressure loss & leaks", description: "Identify and repair leaks, valves and pressure faults." },
        { title: "Ignition & controls", description: "Fix ignition, pilot and sensor faults to get systems running." },
        { title: "Fault code diagnosis", description: "Trace error codes to the root cause before replacing parts." },
      ]}
      process={[
        { step: "01", title: "Rapid Assessment", description: "Call, we diagnose the likely fault and prioritise emergency visits." },
        { step: "02", title: "On-site Repair", description: "Engineer arrives with parts and tools to perform repairs." },
        { step: "03", title: "Safety Check", description: "Post-repair safety and leak checks before handover." },
      ]}
      faqs={[
        { question: "Do you offer emergency callouts?", answer: "Yes — we provide rapid callouts for urgent no-heat situations." },
        { question: "Will you carry parts?", answer: "Our engineers carry common parts; for rare parts we return promptly with replacements." },
      ]}
    />
  );
}
