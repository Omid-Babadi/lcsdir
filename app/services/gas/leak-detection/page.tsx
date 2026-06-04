import { AlertTriangle } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Gas Leak Detection",
  description: "Emergency gas leak detection and repair. If you suspect a leak, call our emergency line immediately.",
  path: "/services/gas/leak-detection",
});

export default function LeakDetectionPage() {
  return (
    <ServiceDetailTemplate
      category="Gas / Leak Detection"
      title="Gas leak detection"
      highlight="leak detection"
      description="We provide rapid gas leak detection, isolation and repair. If you smell gas, call our emergency number immediately."
      icon={AlertTriangle}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780596582/b2bee8a1-e0fe-497d-ad41-a2eb7f326219_hu5hkp.png"
      heroImageAlt="Gas leak detection by engineer"
      features={[
        { title: "Rapid response", description: "Emergency attendance for suspected gas leaks." },
        { title: "Pressure testing", description: "Locate and isolate leaks with industry-standard equipment." },
        { title: "Safe isolation", description: "Unsafe sections are isolated quickly to protect the property." },
        { title: "Permanent repairs", description: "Pipework, joints and fittings repaired or replaced where needed." },
      ]}
      process={[
        { step: "01", title: "Emergency call", description: "Call our emergency line — we prioritise leaks." },
        { step: "02", title: "Isolate & repair", description: "Isolate supply and undertake safe repairs." },
        { step: "03", title: "Test & certify", description: "Pressure testing and certification after repair." },
      ]}
      faqs={[
        { question: "What should I do if I smell gas?", answer: "Evacuate, avoid electricity switches, and call the emergency number immediately." },
      ]}
    />
  );
}
