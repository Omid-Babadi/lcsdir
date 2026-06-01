import { ThermometerSun } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "System & Combi Boiler Fitting",
  description: "Expert fitting of system and combi boilers with full commissioning and controls integration.",
  path: "/services/boiler/system-combi-fitting",
});

export default function SystemCombiFittingPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / System & Combi Fitting"
      title="System & Combi boiler fitting"
      highlight="fitting"
      description="We fit combi and system boilers, integrate controls and ensure the system is balanced and commissioned to manufacturer standards."
      icon={ThermometerSun}
      features={[
        { title: "Boiler selection", description: "Recommend combi or system boilers based on property and hot water use." },
        { title: "Pipework adaption", description: "Adapt existing pipework and complete neat installations." },
        { title: "Controls integration", description: "Thermostats and smart controls setup for efficient operation." },
        { title: "Commissioning", description: "System flushing and full commissioning to standards." },
      ]}
      process={[
        { step: "01", title: "Survey", description: "We assess layout and design the installation." },
        { step: "02", title: "Fit", description: "Professional installation and pipework adaptation." },
        { step: "03", title: "Commission", description: "Flushing, testing and handover." },
      ]}
      faqs={[
        { question: "Can you fit combi or system?", answer: "Yes — we install both combi and system boilers depending on needs." },
      ]}
    />
  );
}
