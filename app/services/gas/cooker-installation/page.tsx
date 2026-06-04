import { Wrench } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Cooker & Hob Installation",
  description: "Professional gas cooker and hob installation with testing and certification.",
  path: "/services/gas/cooker-installation",
});

export default function CookerInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Cooker Installation"
      title="Cooker & hob installation"
      highlight="installation"
      description="We install gas cookers and hobs safely, pressure-test connections and provide certification on completion."
      icon={Wrench}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780596567/420a4372-17ec-4c8f-a834-2bad387d0217_tha6hr.png"
      heroImageAlt="Gas cooker installation by engineer"
      features={[
        { title: "Cookers & hobs", description: "Install freestanding cookers, built-in hobs and range cookers." },
        { title: "Connection checks", description: "Check gas supply, hoses, isolation valves and appliance position." },
        { title: "Pressure testing", description: "Full pressure testing and safety checks after installation." },
        { title: "Certification", description: "Certification issued on completion where required." },
      ]}
      process={[
        { step: "01", title: "Survey", description: "Confirm gas supply and installation location." },
        { step: "02", title: "Install", description: "Fit and pressure test connections." },
        { step: "03", title: "Certificate", description: "Provide paperwork and advice." },
      ]}
      faqs={[
        { question: "Do you certify installations?", answer: "Yes — we provide the relevant safety certificates after work." },
      ]}
    />
  );
}
