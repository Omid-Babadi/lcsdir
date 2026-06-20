import { Flame } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Pilot Light & Ignition Repairs",
  description: "Repairs for pilot light, ignition systems and ignition faults on older boilers.",
  path: "/services/boiler/pilot-light",
});

export default function PilotLightPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Pilot Light & Ignition"
      title="Pilot light & ignition repairs"
      highlight="repairs"
      description="We repair pilot lights, ignition modules and sensors. For older boilers we can replace components or offer upgrade paths."
      icon={Flame}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1781988086/f9d4ca23-9b70-477d-88ca-6ea23aabb26f_wo5wpl.png"
      heroImageAlt="Engineer repairing a boiler ignition system"
      features={[
        { title: "Ignition repairs", description: "Fix ignition modules and faulty sensors." },
        { title: "Pilot light", description: "Restore pilot light systems or upgrade to modern ignition." },
        { title: "Thermocouple checks", description: "Test thermocouples, electrodes and flame supervision devices." },
        { title: "Safe relighting", description: "Confirm safe ignition, flame stability and appliance operation." },
      ]}
      process={[
        { step: "01", title: "Diagnosis", description: "Identify ignition or control faults." },
        { step: "02", title: "Repair or replace", description: "Fix components or fit replacements." },
        { step: "03", title: "Test", description: "Ensure safe ignition and operation." },
      ]}
      faqs={[
        { question: "Are ignition repairs covered by warranty?", answer: "It depends on your boiler warranty; we can advise and liaise with manufacturers." },
      ]}
    />
  );
}
