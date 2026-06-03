import { Wind } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Air Conditioning Installation",
  description: "Professional AC installation across London. Wall split, multi-split and ducted systems by F-Gas certified engineers.",
  path: "/services/air-conditioning/installation",
});

export default function ACInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Air Conditioning / Installation"
      title="Air conditioning"
      highlight="installation."
      description="Stay cool every summer with a professionally designed AC system. Wall split, multi-split and ducted systems from Daikin, Mitsubishi, Panasonic and Samsung. F-Gas certified."
      icon={Wind}
      heroImageSrc="https://res.cloudinary.com/daucwpsi8/image/upload/v1780507169/a05f0d32-a58d-46dc-89a4-b616a1ea2b81_aq2e3z.png"
      heroImageAlt="Air Conditioning Installation"
      features={[
        { title: "Wall Split Systems", description: "Single-room cooling and heating with quiet, efficient units." },
        { title: "Multi-Split Systems", description: "Multiple rooms from one outdoor unit — ideal for whole homes." },
        { title: "Ducted Systems", description: "Hidden ducted AC for premium, minimalist installations." },
        { title: "Heat Pumps", description: "All-year heating and cooling from a single A-rated unit." },
        { title: "Office & Commercial", description: "Cassette and ceiling-mounted systems for workplaces." },
        { title: "Smart Controls", description: "Wi-Fi controllers and zone control with most major brands." },
      ]}
      process={[
        { step: "01", title: "Free Site Survey", description: "Heat load calculation and unit specification." },
        { step: "02", title: "Design & Quote", description: "System designed for your space with fixed pricing." },
        { step: "03", title: "Install", description: "Tidy 1–2 day installation by F-Gas engineers." },
        { step: "04", title: "Commission", description: "Tested, registered and demonstrated to you." },
      ]}
      faqs={[
        { question: "Do I need planning permission?", answer: "Most domestic AC installs do not, but we&apos;ll advise on your specific case during the survey." },
        { question: "How long does installation take?", answer: "Single-split installs take 4–6 hours. Multi-split typically 1–2 days." },
        { question: "What warranty do I get?", answer: "Up to 7 years manufacturer warranty plus our 12-month workmanship guarantee." },
      ]}
    />
  );
}
