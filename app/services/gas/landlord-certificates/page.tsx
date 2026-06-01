import { FileCheck } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Landlord Gas Certificates",
  description: "CP12 landlord certificates issued after inspection — fast turnaround for landlord compliance.",
  path: "/services/gas/landlord-certificates",
});

export default function LandlordCertificatesPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Landlord Certificates"
      title="Landlord gas certificates (CP12)"
      highlight="certificates"
      description="We inspect properties and issue CP12 landlord gas safety certificates with professional reports and fast turnaround."
      icon={FileCheck}
      features={[
        { title: "CP12 Issued", description: "Fast issuance for compliant rental properties." },
        { title: "Tenant-friendly visits", description: "Appointments arranged to suit tenants, agents and access windows." },
        { title: "Comprehensive reports", description: "Detailed reports for landlords and agents." },
        { title: "Remedial support", description: "Clear quotes for any repair work required after inspection." },
      ]}
      process={[
        { step: "01", title: "Book", description: "Schedule a convenient inspection time." },
        { step: "02", title: "Inspect", description: "Full gas safety inspection across the property." },
        { step: "03", title: "Certificate", description: "Provide CP12 and report after inspection." },
      ]}
      faqs={[
        { question: "How quickly can I get a CP12?", answer: "Often same-day in London depending on availability." },
      ]}
    />
  );
}
