import { Flame, ThermometerSun } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Boiler Installation",
  description: "Gas boiler installation by Gas Safe engineers — combi, system and conventional boilers.",
  path: "/services/gas/boiler-installation",
});

export default function GasBoilerInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Boiler Installation"
      title="Gas boiler installation"
      highlight="installation"
      description="Gas Safe engineers supply and install combi, system and conventional boilers with full commissioning and safety checks."
      icon={ThermometerSun}
      features={[
        { title: "Combi & system", description: "Install combi, system and conventional boilers." },
        { title: "Safety checks", description: "Full Gas Safe commissioning and flue tests." },
        { title: "Warranty", description: "Manufacturer warranty registration where available." },
        { title: "Controls setup", description: "Thermostats, timers and smart controls configured during handover." },
      ]}
      process={[
        { step: "01", title: "Survey", description: "Site survey and specification." },
        { step: "02", title: "Install", description: "Professional installation and testing." },
        { step: "03", title: "Handover", description: "Commissioning and user handover." },
      ]}
      faqs={[
        { question: "Do you issue certificates?", answer: "Yes — all gas installations include safety and commissioning documentation." },
      ]}
    />
  );
}
