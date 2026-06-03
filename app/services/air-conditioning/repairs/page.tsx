import { Cog } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Air Conditioning Repairs",
  description: "Fast AC repairs across London. Refrigerant leaks, no cooling, error codes and electrical faults fixed by F-Gas engineers.",
  path: "/services/air-conditioning/repairs",
});

export default function ACRepairsPage() {
  return (
    <ServiceDetailTemplate
      category="Air Conditioning / Repairs"
      title="AC repairs &"
      highlight="diagnostics."
      description="Not cooling? Leaking? Error codes? Our F-Gas certified engineers diagnose and repair AC systems across London with fixed pricing and full system testing."
      icon={Cog}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780507189/78399401-8eb8-4d9a-ab81-82a367cd417b_dwvgua.png"
      heroImageAlt="Air Conditioning Repairs"
      features={[
        { title: "Not Cooling Diagnosis", description: "Refrigerant, compressor and airflow faults identified." },
        { title: "Refrigerant Leak Repair", description: "Leak detected, repaired, system recharged and certified." },
        { title: "Water Leak Repair", description: "Drainage and condensate pump faults resolved." },
        { title: "Error Code Reading", description: "All major brands diagnosed via fault codes." },
        { title: "Compressor & Fan Repairs", description: "Component replacement on most major brands." },
        { title: "Electrical Faults", description: "PCB, capacitor and contactor replacements." },
      ]}
      process={[
        { step: "01", title: "Diagnose", description: "Engineer identifies the fault on-site." },
        { step: "02", title: "Quote", description: "Fixed price agreed before any repair work." },
        { step: "03", title: "Repair", description: "Genuine parts fitted by F-Gas engineers." },
        { step: "04", title: "Certify", description: "Re-tested, certified and signed off." },
      ]}
      faqs={[
        { question: "Why is my AC not cooling?", answer: "Common causes are low refrigerant, dirty filters, faulty fans or PCB issues — we&apos;ll diagnose precisely." },
        { question: "Are you F-Gas certified?", answer: "Yes — every refrigerant handler at LCS is F-Gas registered, as required by law." },
        { question: "How long does a repair take?", answer: "Most repairs are completed within 1–2 hours on the first visit." },
      ]}
    />
  );
}
