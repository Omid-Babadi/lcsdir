import { Flame } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Central Heating Installation London",
  description:
    "Central heating installation in London, including radiators, pipework, zoning and controls, designed and commissioned by qualified engineers.",
  path: "/services/heating/installation",
  keywords: ["central heating installation London", "new heating system London"],
});

export default function CentralHeatingInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Heating / Installation"
      title="Central heating"
      highlight="installation."
      description="Plan a complete heating system around the property, heat demand and the way each room is used. We install and upgrade radiators, pipework, zoning and controls, then test and commission the finished system."
      icon={Flame}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1781005500/765b0655-901e-480b-a591-7587d6f2fa73_wvpvit.png"
      heroImageAlt="Central heating installation in a London property"
      features={[
        { title: "Property survey", description: "Review the building layout, existing system, insulation and hot-water requirements before specifying work." },
        { title: "System design", description: "Plan radiator outputs, pipe routes, zones and controls around the property and intended use." },
        { title: "Radiators and pipework", description: "Install or replace heat emitters and distribution pipework with tidy, practical routes." },
        { title: "Heating controls", description: "Set up thermostats, timers, thermostatic radiator valves and suitable smart controls." },
        { title: "System protection", description: "Flush the installation where required and add suitable corrosion inhibitor and filtration." },
        { title: "Testing and balancing", description: "Pressure-test, balance and commission the system so heat is distributed correctly." },
      ]}
      process={[
        { step: "01", title: "Survey", description: "Discuss your goals and assess the property and existing heating system." },
        { step: "02", title: "Design and quote", description: "Receive a clear scope covering equipment, controls, pipework and labour." },
        { step: "03", title: "Installation", description: "Complete the agreed work with protection for floors, finishes and occupied areas." },
        { step: "04", title: "Commissioning", description: "Test, balance and explain the controls, with relevant records provided." },
      ]}
      faqs={[
        { question: "Does central heating installation include a new boiler?", answer: "It can, but not every project needs one. We assess the heat source, radiators, pipework and controls together and make the scope clear in the quotation." },
        { question: "Can you upgrade only the radiators and controls?", answer: "Yes. A targeted upgrade can be appropriate when the boiler and main pipework are suitable but room comfort or control needs improvement." },
        { question: "How long does a full installation take?", answer: "The programme depends on property size, access, floor construction and the amount of pipework. We confirm an estimated schedule after the survey." },
        { question: "Will the system be tested before handover?", answer: "Yes. The installation is tested, balanced and commissioned before we explain the controls and hand over the completed work." },
      ]}
    />
  );
}
