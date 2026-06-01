import { Hammer } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Central Heating Repairs",
  description: "Expert central heating repairs across London. Cold radiators, leaks, noisy systems and pump faults fixed fast.",
  path: "/services/heating/repairs",
});

export default function CentralHeatingRepairsPage() {
  return (
    <ServiceDetailTemplate
      category="Heating / Repairs"
      title="Central heating"
      highlight="repairs & rescue."
      description="Cold radiators, leaks, kettling, sludge buildup or pump failure? We diagnose and repair central heating systems across London with fixed pricing and full system testing."
      icon={Hammer}
      features={[
        { title: "Cold Radiator Diagnosis", description: "Air locks, sludge, valve and balance issues resolved." },
        { title: "Power Flushing", description: "Full system flush to remove sludge and improve efficiency." },
        { title: "Pump Replacement", description: "Faulty circulation pumps replaced on the same visit." },
        { title: "Leak Repairs", description: "Radiator, valve and pipework leak repairs." },
        { title: "Noisy System Fixes", description: "Kettling, banging and gurgling resolved." },
        { title: "Thermostat Faults", description: "Wired and smart thermostat repair or replacement." },
      ]}
      process={[
        { step: "01", title: "Diagnose", description: "Find the root cause, not just the symptom." },
        { step: "02", title: "Quote", description: "Fixed price agreed before work starts." },
        { step: "03", title: "Repair", description: "Quality parts, tidy work, certified engineers." },
        { step: "04", title: "Verify", description: "Full system test before sign-off." },
      ]}
      faqs={[
        { question: "Why is only one radiator cold?", answer: "Usually an air lock, balance issue or sludge — we&apos;ll diagnose and fix on the same visit." },
        { question: "Do I need a power flush?", answer: "If you have multiple cold radiators or noisy boilers, very likely. We&apos;ll inspect first and advise honestly." },
        { question: "What does a power flush cost?", answer: "Typically between £450–£750 depending on system size — fixed price quoted after inspection." },
      ]}
    />
  );
}
