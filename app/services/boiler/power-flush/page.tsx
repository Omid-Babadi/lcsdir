import { Zap } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Power Flush",
  description: "Professional central heating power flushing to remove sludge and debris, improving system efficiency and lifespan.",
  path: "/services/boiler/power-flush",
});

export default function PowerFlushPage() {
  return (
    <ServiceDetailTemplate
      category="Boiler / Power Flush"
      title="Power flushing"
      highlight="power flushing"
      description="Power flushing removes sludge, rust and debris from your central heating system, restoring flow and improving efficiency. Our Gas Safe engineers use professional flushing plant and approved inhibitors."
      icon={Zap}
      features={[
        { title: "Sludge removal", description: "Remove sludge and corrosion products to restore flow." },
        { title: "Cold radiator fixes", description: "Improve circulation through radiators affected by blockages." },
        { title: "Magnetic filters", description: "Install or clean magnetic filters to protect the system." },
        { title: "Post-flush report", description: "Written report and recommendations after the flush." },
      ]}
      process={[
        { step: "01", title: "Survey", description: "System assessment and scope." },
        { step: "02", title: "Flush", description: "Controlled power flush with inhibitors." },
        { step: "03", title: "Verify", description: "Post-flush checks and handover." },
      ]}
      faqs={[
        { question: "How long does a flush take?", answer: "Most domestic systems are flushed within one day depending on size and complexity." },
        { question: "Is it disruptive?", answer: "We work to minimise disruption and leave the property tidy." },
      ]}
    />
  );
}
