import { Clock } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Annual Gas Safety Checks",
  description: "Annual inspections to keep gas appliances safe and compliant.",
  path: "/services/gas/annual-checks",
});

export default function AnnualChecksPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Annual Checks"
      title="Annual gas safety checks"
      highlight="safety checks"
      description="Thorough annual inspections of all gas appliances, pipework and flues to ensure compliance and safety."
      icon={Clock}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780596568/72fe25ef-adb6-40cb-a8f4-98f870938313_ra1inl.png"
      heroImageAlt="Gas safety check by engineer"
      features={[
        { title: "Full inspection", description: "Appliances, flues and pipework checked for safety." },
        { title: "Combustion testing", description: "Boiler operation and combustion readings checked where applicable." },
        { title: "Early fault advice", description: "Spot worn parts, leaks or ventilation issues before they escalate." },
        { title: "Compliance", description: "Documentation provided for landlords and owners." },
      ]}
      process={[
        { step: "01", title: "Book", description: "Schedule an inspection at a convenient time." },
        { step: "02", title: "Inspect", description: "Thorough safety checks by Gas Safe engineers." },
        { step: "03", title: "Certificate", description: "Receive written report and certificate where required." },
      ]}
      faqs={[
        { question: "Is an annual check necessary?", answer: "Recommended to keep appliances safe and compliant, especially for rental properties." },
      ]}
    />
  );
}
