import { Cog } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Boiler Replacement & Upgrades",
  description: "Boiler replacement and upgrade services to improve efficiency and lower running costs.",
  path: "/services/boiler/replacement",
});

export default function ReplacementPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Replacement"
      title="Boiler replacement & upgrades"
      highlight="upgrades"
      description="Upgrade to a more efficient boiler to reduce running costs and improve reliability. We handle full switchovers, commissioning and warranty registration."
      icon={Cog}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780679428/025fd6c9-7d4c-42c1-ba4c-7d189de66879_sfvm8c.png"
      heroImageAlt="Engineer installing a new boiler"
      features={[
        { title: "Energy savings", description: "Modern boilers are more efficient and cheaper to run." },
        { title: "Right-size upgrade", description: "Choose boiler output and cylinder options around your hot water demand." },
        { title: "Reduced breakdowns", description: "New boilers are more reliable with manufacturer support." },
        { title: "Warranty registration", description: "We register warranties and provide documentation." },
      ]}
      process={[
        { step: "01", title: "Survey & Advice", description: "We recommend the right replacement and explain options." },
        { step: "02", title: "Installation", description: "Professional swap with minimal disruption." },
        { step: "03", title: "Commissioning", description: "Testing, handover and warranty paperwork." },
      ]}
      faqs={[
        { question: "Will you remove old boiler?", answer: "Yes — we remove and responsibly dispose of old boilers." },
        { question: "Can I upgrade to low-carbon options?", answer: "We can advise on heat pumps and other low-carbon solutions where suitable." },
      ]}
    />
  );
}
