import { Shield } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Warranty Work",
  description: "Warranty and manufacturer repairs carried out by qualified engineers.",
  path: "/services/boiler/warranty",
});

export default function WarrantyPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Warranty"
      title="Boiler warranty work"
      highlight="warranty"
      description="We complete warranty work where permitted and liaise with manufacturers to carry out covered repairs with proper parts and documentation."
      icon={Shield}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1781988087/5e48f7cd-852b-4a00-bf88-f807b4dc3b57_osvn9x.png"
      heroImageAlt="Engineer performing boiler warranty work"
      features={[
        { title: "Warranty checks", description: "Confirm service history, install paperwork and cover conditions." },
        { title: "Manufacturer liaison", description: "We work with manufacturers to validate and perform warranty repairs." },
        { title: "Genuine parts", description: "Use of approved replacement parts where required." },
        { title: "Repair records", description: "Provide clear documentation for completed warranty work." },
      ]}
      process={[
        { step: "01", title: "Check cover", description: "We verify warranty terms and entitlement." },
        { step: "02", title: "Authorise", description: "Liaise with manufacturer for approvals." },
        { step: "03", title: "Repair", description: "Carry out repairs and provide documentation." },
      ]}
      faqs={[
        { question: "Will you charge for warranty work?", answer: "If covered by the manufacturer, there is usually no charge; we confirm before work." },
      ]}
    />
  );
}
