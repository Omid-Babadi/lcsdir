import { ThermometerSun } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "New Boiler Installation",
  description: "Supply and installation of new boilers with system design, commissioning and warranties.",
  path: "/services/boiler/new-installation",
});

export default function NewInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Installation"
      title="New boiler installation"
      highlight="installation."
      description="We supply, fit and commission new boilers — combi, system and conventional. Installations include system flushing, controls setup and safety checks."
      icon={ThermometerSun}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780679428/aa3c0c42-a34f-4cc9-b9a3-f42198665f54_ob2iwe.png"
      heroImageAlt="Engineer installing a new boiler"
      features={[
        { title: "System design", description: "Heat-loss calculation and recommended boiler sizing." },
        { title: "Removal & replacement", description: "Safe removal of old boilers and pipework adaptation." },
        { title: "Commissioning", description: "Flushing, commissioning and warranty registration." },
        { title: "Controls setup", description: "Timers, thermostats and smart controls fitted and explained." },
      ]}
      process={[
        { step: "01", title: "Survey & Quote", description: "Free site survey and detailed fixed quote." },
        { step: "02", title: "Supply", description: "We source the best-fit boiler for your home." },
        { step: "03", title: "Install", description: "Tidy professional installation and controls setup." },
        { step: "04", title: "Handover", description: "Testing, commissioning and warranty paperwork." },
      ]}
      faqs={[
        { question: "How long does install take?", answer: "Typically 1 day for a like-for-like swap; full upgrades depend on scope." },
        { question: "Do you handle warranties?", answer: "Yes — we register manufacturer warranties where applicable." },
      ]}
    />
  );
}
