import { Gauge } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Pressure Issues",
  description: "Diagnosis and repair for boiler pressure loss, over-pressure and related faults.",
  path: "/services/boiler/pressure-issues",
});

export default function PressureIssuesPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Pressure Issues"
      title="Boiler pressure issues"
      highlight="pressure"
      description="We identify root causes of pressure loss or spikes and provide repairs or replacements for valves, expansion vessels and pipework as required."
      icon={Gauge}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780679432/2b468ef7-1d3b-4515-afee-05d958549ce1_mzpmvr.png"
      heroImageAlt="Engineer checking boiler pressure"
      features={[
        { title: "Leak detection", description: "Locate leaks on radiators and pipework." },
        { title: "Valve replacement", description: "Replace faulty pressure relief valves and components." },
        { title: "Expansion vessel", description: "Test and replace expansion vessels where needed." },
        { title: "System balancing", description: "Check radiators and circulation to keep pressure stable." },
      ]}
      process={[
        { step: "01", title: "Inspect", description: "Pressure checks and leak detection." },
        { step: "02", title: "Repair", description: "Replace faulty valves or components." },
        { step: "03", title: "Test", description: "Pressure stability tested after repair." },
      ]}
      faqs={[
        { question: "Why does my boiler lose pressure?", answer: "Common causes are leaks, faulty valves or air in the system." },
      ]}
    />
  );
}
