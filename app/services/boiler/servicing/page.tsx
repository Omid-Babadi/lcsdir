import { Shield } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Servicing",
  description: "Annual and interim boiler servicing to keep warranties valid and systems running efficiently.",
  path: "/services/boiler/servicing",
});

export default function ServicingPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Servicing"
      title="Boiler servicing"
      highlight="servicing"
      description="Our Gas Safe engineers perform full boiler services — safety checks, combustion analysis and parts inspection to keep your system safe and efficient."
      icon={Shield}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780679430/f723f4e5-cc99-4c89-b025-2260f03df530_okgrlw.png"
      heroImageAlt="Engineer servicing a boiler"
      features={[
        { title: "Safety checks", description: "Combustion, flue and pressure checks for safe operation." },
        { title: "Parts inspection", description: "Assess wear and recommend replacements." },
        { title: "Warranty compliance", description: "Servicing to maintain manufacturer warranties." },
        { title: "Efficiency advice", description: "Practical settings and maintenance advice to help reduce running costs." },
      ]}
      process={[
        { step: "01", title: "Book Service", description: "Schedule a convenient appointment." },
        { step: "02", title: "Service Visit", description: "Engineer performs full service and tests." },
        { step: "03", title: "Report", description: "Receive a service report and recommendations." },
      ]}
      faqs={[
        { question: "How often should I service?", answer: "We recommend annual servicing for most boilers." },
        { question: "Will servicing fix faults?", answer: "Servicing identifies issues; repairs are quoted separately." },
      ]}
    />
  );
}
