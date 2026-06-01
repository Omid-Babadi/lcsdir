import { Pipette, Wrench } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Pipe Installation",
  description: "Gas pipe runs, extensions and replacements installed to Gas Safe standards.",
  path: "/services/gas/pipe-installation",
});

export default function PipeInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Pipe Installation"
      title="Gas pipe installation"
      highlight="installation"
      description="We install new gas pipe runs, alterations and replacements for kitchens, extensions and new builds — all to Gas Safe standards."
      icon={Pipette}
      features={[
        { title: "New runs & extensions", description: "Install new supply routes for cookers, boilers and appliances." },
        { title: "Pipe sizing", description: "Size pipework correctly for appliance demand and reliable performance." },
        { title: "Neat routing", description: "Plan practical routes through kitchens, extensions and plant areas." },
        { title: "Regulation compliant", description: "Work completed to Gas Safe regulations and standards." },
      ]}
      process={[
        { step: "01", title: "Survey", description: "Assess route and required materials." },
        { step: "02", title: "Install", description: "Fit pipework and pressure test." },
        { step: "03", title: "Certify", description: "Provide documentation and certification." },
      ]}
      faqs={[
        { question: "Can you extend a supply to a new kitchen?", answer: "Yes — we provide safe extensions and test the system." },
      ]}
    />
  );
}
