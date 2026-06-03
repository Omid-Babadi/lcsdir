import { Snowflake } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Air Conditioning Maintenance",
  description: "Annual AC servicing and maintenance across London. F-Gas compliant, prevents breakdowns, keeps efficiency high.",
  path: "/services/air-conditioning/maintenance",
});

export default function ACMaintenancePage() {
  return (
    <ServiceDetailTemplate
      category="Air Conditioning / Maintenance"
      title="AC maintenance"
      highlight="& servicing."
      description="Keep your AC running at peak efficiency with our annual maintenance plans. Filter cleans, refrigerant checks, drainage and full F-Gas reporting where required."
      icon={Snowflake}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780507186/bcc25112-d934-4f55-a111-78f878e1b615_bv2dyz.png"
      heroImageAlt="Air Conditioning Maintenance"
      features={[
        { title: "Filter & Coil Clean", description: "Improves air quality and restores efficiency." },
        { title: "Refrigerant Check", description: "Pressure check and top-up if required." },
        { title: "Drainage Clean", description: "Prevents leaks from blocked condensate lines." },
        { title: "F-Gas Compliance", description: "Mandatory leak checks for systems over 5 tonnes CO₂e." },
        { title: "Electrical Test", description: "Connections, capacitors and PCB diagnostics." },
        { title: "Annual Service Plans", description: "Discounted bundled servicing for multi-unit sites." },
      ]}
      process={[
        { step: "01", title: "Schedule", description: "Choose a yearly or bi-annual visit pattern." },
        { step: "02", title: "Service", description: "60–90 minutes per unit with all checks completed." },
        { step: "03", title: "Report", description: "Photos, readings and recommendations emailed." },
        { step: "04", title: "Reminder", description: "We remind you when next service is due." },
      ]}
      faqs={[
        { question: "How often should AC be serviced?", answer: "Annually for residential, bi-annually for commercial and high-use units." },
        { question: "Do you service all brands?", answer: "Yes — Daikin, Mitsubishi, Panasonic, Samsung, LG, Toshiba and more." },
        { question: "Will service reduce my bills?", answer: "Yes — a serviced unit can run 10–15% more efficiently than a neglected one." },
      ]}
    />
  );
}
