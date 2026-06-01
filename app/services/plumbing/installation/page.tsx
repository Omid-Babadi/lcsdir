import { Droplets } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Plumbing Installation",
  description: "Professional plumbing installation across London. Expert installation of dishwashers, water softeners, toilets, sinks, taps, washing machines, electric showers, and bathroom suites by certified engineers.",
  path: "/services/plumbing/installation",
});

export default function PlumbingInstallationPage() {
  return (
    <ServiceDetailTemplate
      category="Plumbing / Installation"
      title="Plumbing installation"
      highlight="done right."
      description="From kitchen appliances to complete bathroom renovations, our certified plumbers handle all types of plumbing installations with precision and care. We specialize in installing dishwashers, water softeners, toilets, sinks, taps, washing machines, electric showers, and bathroom fixtures. Every installation is completed to the highest standards, ensuring leak-free connections, proper drainage, and long-lasting performance. Fully insured, CIPHE-accredited engineers serving homes across London."
      icon={Droplets}
      features={[
        { title: "Dishwasher Installation", description: "Professional dishwasher plumbing, including waste pipe connection, water supply fitting, and leak testing." },
        { title: "Water Softener Installation", description: "Expert installation of water softeners to reduce limescale and improve water quality throughout your home." },
        { title: "Toilet Installation", description: "Complete toilet fitting including close-coupled, back-to-wall, and wall-hung units with proper waste connections." },
        { title: "Kitchen Sink Installation", description: "Under-mount, top-mount, or Belfast sink fitting with proper sealant and waste disposal connection." },
        { title: "Kitchen Tap Installation", description: "All tap types including mixer, pull-out, boiling water taps, and sensor taps with correct pressure testing." },
        { title: "Washing Machine Plumbing", description: "Secure appliance connection including water supply, waste pipe, and drainage system integration." },
        { title: "Electric Shower Installation", description: "Full electric shower fitting including cold water feed connection and electrical supply integration." },
        { title: "Bathroom Sink Installation", description: "Pedestal, wall-hung, or vanity unit sink fitting with proper trap installation and sealant work." },
      ]}
      process={[
        { step: "01", title: "Free Survey", description: "On-site assessment and detailed written quote for your installation project." },
        { step: "02", title: "Plan & Design", description: "Bespoke installation plan agreed with you before any work starts." },
        { step: "03", title: "Installation", description: "Clean, careful installation by certified engineers with minimal disruption." },
        { step: "04", title: "Testing & Sign-Off", description: "Full pressure testing, leak check, and written guarantee provided." },
      ]}
      faqs={[
        { question: "How long does dishwasher or washing machine installation take?", answer: "Most appliance installations take 1-2 hours, including removal of your old appliance and connection of the new one." },
        { question: "Do you supply the fixtures and appliances?", answer: "Yes — we can supply quality fixtures at trade prices, or install items you have already purchased." },
        { question: "What areas do you cover?", answer: "We cover all London boroughs including Central, North, South, East, and West London." },
        { question: "Is the installation guaranteed?", answer: "All installations come with a 12-month workmanship guarantee and full manufacturer warranties on supplied parts." },
        { question: "Do you need to turn off my water supply?", answer: "Yes, for most installations we'll need to isolate your water supply temporarily. We'll coordinate this with you beforehand." },
      ]}
    />
  );
}