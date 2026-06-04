import { Flame } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Fire Installation",
  description: "Installation of gas fires with full safety checks and commissioning.",
  path: "/services/gas/fire-installation",
});

export default function FireInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Fire Installation"
      title="Gas fire installation"
      highlight="installation"
      description="We install and commission gas fires, ensuring flue and ventilation compliance and providing handover paperwork."
      icon={Flame}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780596568/24dc7868-0741-4d88-bbd7-c161e0cc1013_1_wbn6ek.png"
      heroImageAlt="Gas fire installation by engineer"
      features={[
        { title: "Fire suitability", description: "Confirm the appliance, chimney and room are suitable before fitting." },
        { title: "Flue compliance", description: "Ensure correct flue and ventilation arrangements." },
        { title: "Safe connection", description: "Gas supply connected, tested and checked for tightness." },
        { title: "Commissioning", description: "Full commissioning and handover paperwork." },
      ]}
      process={[
        { step: "01", title: "Site survey", description: "Check flue and ventilation requirements." },
        { step: "02", title: "Install", description: "Safe installation by Gas Safe engineers." },
        { step: "03", title: "Handover", description: "Documentation and user guidance provided." },
      ]}
      faqs={[
        { question: "Can you install flueless fires?", answer: "We assess suitability and advise on compliant options." },
      ]}
    />
  );
}
