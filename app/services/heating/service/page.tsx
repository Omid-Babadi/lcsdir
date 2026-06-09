import { Settings } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Central Heating Service",
  description: "Annual central heating servicing across London. Maintain efficiency, protect your warranty, and prevent breakdowns.",
  path: "/services/heating/service",
});

export default function CentralHeatingServicePage() {
  return (
    <ServiceDetailTemplate
      category="Heating / Service"
      title="Annual heating"
      highlight="service & care."
      description="Keep your boiler safe, efficient and under warranty. Our annual service follows manufacturer schedules and includes a written report. Gas Safe certified."
      icon={Settings}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1781005483/be74182d-19d3-4cd5-98f6-5af85222c4a1_s8dhhu.png"
      heroImageAlt="Central Heating Service"
      features={[
        { title: "Boiler Service", description: "Full strip-down, clean and inspection per manufacturer spec." },
        { title: "Combustion Analysis", description: "Flue gas analysis to verify safe, efficient combustion." },
        { title: "Pressure & Flow Check", description: "System pressure, flow and expansion vessel inspection." },
        { title: "Safety Check", description: "Gas tightness, ventilation and flue integrity inspection." },
        { title: "Written Report", description: "Detailed report with photos and recommended actions." },
        { title: "Warranty Protection", description: "Keeps manufacturer warranty valid for the full term." },
      ]}
      process={[
        { step: "01", title: "Book Online", description: "Choose a time that suits you — same week availability." },
        { step: "02", title: "Engineer Visit", description: "Gas Safe engineer arrives in branded LCS van." },
        { step: "03", title: "Service & Test", description: "60–90 minute manufacturer-spec service." },
        { step: "04", title: "Report", description: "Written report and any recommendations emailed same day." },
      ]}
      faqs={[
        { question: "How often should I service my boiler?", answer: "Annually — most warranties require it, and it improves efficiency by up to 10%." },
        { question: "Do you service all brands?", answer: "Yes, we are trained on all major UK boiler brands." },
        { question: "What does a service include?", answer: "Full clean, combustion analysis, safety inspection and written report." },
      ]}
    />
  );
}
