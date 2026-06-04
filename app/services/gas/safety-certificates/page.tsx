import { FileCheck } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Safety Certificates",
  description: "CP12 and Gas Safety certificates for landlords and homeowners issued after inspection.",
  path: "/services/gas/safety-certificates",
});

export default function SafetyCertificatesPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Safety Certificates"
      title="Gas safety certificates"
      highlight="certificates"
      description="We inspect gas appliances and issue CP12 certificates for landlords and property sales. Same-day certificates available in most cases."
      icon={FileCheck}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780596563/029ef2a9-7b73-41bd-a851-edfae6609cfc_yzm2oo.png"
      heroImageAlt="Gas safety inspection by engineer"
      features={[
        { title: "CP12 Certificates", description: "Issued after a thorough inspection for landlords." },
        { title: "Appliance checks", description: "Boilers, cookers, fires, flues and ventilation checked for safety." },
        { title: "Clear reporting", description: "Written findings with any remedial advice explained plainly." },
        { title: "Same-day", description: "Fast turnaround where possible." },
      ]}
      process={[
        { step: "01", title: "Inspection", description: "We inspect appliances, pipework and flues." },
        { step: "02", title: "Report", description: "Issue CP12 certificate and report." },
      ]}
      faqs={[
        { question: "How long does an inspection take?", answer: "Typically 30–60 minutes depending on property size." },
      ]}
    />
  );
}
