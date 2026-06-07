import {
  Gauge,
  LayoutPanelTop,
  SearchCheck,
  Settings,
  Thermometer,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ServiceDetailTemplate } from "@/components/services/service-detail-template";
import { createSeoMetadata } from "@/lib/seo";

type ServicePage = {
  metadata: ReturnType<typeof createSeoMetadata>;
  category: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  heroImageSrc: string;
  heroImageAlt: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const surveyProcess = [
  { step: "01", title: "Survey", description: "We assess the room, floor build-up, insulation, heat loss, and heating goals." },
  { step: "02", title: "Design", description: "You receive a clear specification for zones, controls, manifolds, and floor finishes." },
  { step: "03", title: "Install", description: "Our engineers install neatly, test thoroughly, and coordinate around other trades." },
  { step: "04", title: "Handover", description: "We commission the system and show you how to run it efficiently." },
];

export const underfloorHeatingPages: Record<string, ServicePage> = {
  installation: {
    metadata: createSeoMetadata({
      title: "Underfloor Heating Installation",
      description: "Underfloor heating installation in London for wet and electric systems, including surveys, pipework, mats, manifolds, controls, testing, and commissioning.",
      path: "/services/underfloor-heating/installation",
    }),
    category: "Underfloor Heating / Installation",
    title: "underfloor heating",
    highlight: "installation.",
    description: "Upgrade cold rooms with a professionally designed underfloor heating system. We install wet and electric systems across London, with careful floor preparation, zoning, controls, pressure testing, and a clean handover.",
    icon: Thermometer,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782708/bf94aa15-3bd0-4b5c-b0bc-b0299bafc993_2_uoteer.png",
    heroImageAlt: "Warm modern room with underfloor heating",
    features: [
      { title: "Wet Systems", description: "Pipe layouts, manifolds, insulation boards, screed coordination, and central heating integration." },
      { title: "Electric Systems", description: "Low-profile heating mats and loose cable systems for bathrooms, kitchens, and retrofit rooms." },
      { title: "Heat Loss Checks", description: "Room-by-room checks so the selected system has the right output for the space." },
      { title: "Floor Build-Up Planning", description: "Advice on floor height, insulation, decoupling layers, screed, tile backer boards, and finishes." },
      { title: "Zoned Heating", description: "Separate room zones with thermostats for better comfort and lower running costs." },
      { title: "Manifold Installation", description: "Neat manifold positioning, pipe routing, balancing, and labeling for hydronic systems." },
      { title: "Testing & Commissioning", description: "Electrical tests, pressure tests, flow checks, and full commissioning before handover." },
      { title: "Renovation Friendly", description: "Installations planned around builders, tilers, electricians, plumbers, and flooring teams." },
    ],
    process: surveyProcess,
    faqs: [
      { question: "Can you install underfloor heating in an existing home?", answer: "Yes. Electric systems are often best for smaller retrofit rooms, while low-profile wet systems can work well during larger renovations." },
      { question: "Do I need insulation under the heating?", answer: "Usually, yes. Insulation helps push heat upward, improves warm-up times, and reduces wasted energy." },
      { question: "Can underfloor heating replace radiators?", answer: "In many well-insulated rooms it can, but we check heat loss first so the system is designed for the actual space." },
    ],
  },
  electric: {
    metadata: createSeoMetadata({
      title: "Electric Underfloor Heating",
      description: "Electric underfloor heating installation in London for bathrooms, kitchens, extensions, and retrofit rooms with mats, loose cable, insulation boards, and thermostats.",
      path: "/services/underfloor-heating/electric",
    }),
    category: "Underfloor Heating / Electric",
    title: "electric underfloor",
    highlight: "heating.",
    description: "Electric underfloor heating is ideal for bathrooms, kitchens, lofts, and single-room upgrades. We install heating mats, loose cable systems, insulation boards, probes, and thermostats with the correct electrical testing.",
    icon: Zap,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782710/3b400d4f-fa98-4c2f-9403-2d452473816d_zq2aab.png",
    heroImageAlt: "Modern interior suitable for electric underfloor heating",
    features: [
      { title: "Heating Mats", description: "Fast, even coverage for regular-shaped rooms and tiled floors." },
      { title: "Loose Cable Systems", description: "Flexible cable layouts for awkward spaces, bathrooms, and rooms with fixed furniture." },
      { title: "Insulation Boards", description: "Thermal boards installed where suitable to reduce heat-up time and improve efficiency." },
      { title: "Thermostat Setup", description: "Programmable and smart thermostats fitted with floor sensors for accurate temperature control." },
      { title: "Floor Sensor Placement", description: "Correct probe positioning and conduit installation for future serviceability." },
      { title: "Electrical Testing", description: "Resistance and insulation tests before, during, and after installation." },
      { title: "Tile & Stone Ready", description: "Preparation for tile adhesive, leveling compounds, and compatible floor coverings." },
      { title: "Small Room Specialists", description: "A practical solution for bathrooms, ensuites, kitchens, utility rooms, and loft conversions." },
    ],
    process: [
      { step: "01", title: "Room Check", description: "We inspect the subfloor, planned floor finish, furniture layout, and available electrical supply." },
      { step: "02", title: "System Selection", description: "We choose the right mat or cable output, thermostat, sensor, and insulation build-up." },
      { step: "03", title: "Install & Test", description: "The heating is installed neatly and tested at each key stage." },
      { step: "04", title: "Controls Setup", description: "We configure the thermostat and explain warm-up times and efficient schedules." },
    ],
    faqs: [
      { question: "Where is electric underfloor heating best used?", answer: "It works especially well in bathrooms, kitchens, small retrofit rooms, and areas where connecting to pipework would be disruptive." },
      { question: "Can it go under tiles?", answer: "Yes. Electric underfloor heating is commonly installed below tile and stone floors with the correct adhesive and preparation." },
      { question: "Does it need a dedicated electrical circuit?", answer: "That depends on the system size and existing supply. We check the load and advise the correct electrical arrangement." },
    ],
  },
  "wet-systems": {
    metadata: createSeoMetadata({
      title: "Wet Underfloor Heating Systems",
      description: "Wet underfloor heating systems in London, including pipe layouts, manifolds, screed coordination, insulation, boiler and heat pump integration, and commissioning.",
      path: "/services/underfloor-heating/wet-systems",
    }),
    category: "Underfloor Heating / Wet Systems",
    title: "wet underfloor",
    highlight: "heating systems.",
    description: "Wet underfloor heating delivers efficient whole-room warmth through pipework connected to your heating system. We design and install hydronic systems for renovations, extensions, and full-property upgrades.",
    icon: Waves,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782710/e8a22d99-961b-4b71-a151-713768aefd0a_xifhot.png",
    heroImageAlt: "Modern home interior with hydronic underfloor heating",
    features: [
      { title: "Pipe Layout Design", description: "Room-specific pipe spacing and circuit lengths for balanced heat output." },
      { title: "Manifold Setup", description: "Manifold installation, actuator readiness, flow meters, balancing, and clear circuit labeling." },
      { title: "Boiler Integration", description: "Connection to compatible boiler systems with blending valves and controls where required." },
      { title: "Heat Pump Ready", description: "Low-temperature design principles suited to heat pumps and efficient modern heating." },
      { title: "Screed Coordination", description: "Planning for screeded floors, dry systems, overlay panels, and floor build-up constraints." },
      { title: "Pressure Testing", description: "Pipework pressure tested before covering and checked again during commissioning." },
      { title: "Zone Controls", description: "Room-by-room thermostats, wiring centre setup, and actuator control." },
      { title: "Whole-Home Comfort", description: "A strong choice for extensions, ground floors, refurbishments, and new layouts." },
    ],
    process: surveyProcess,
    faqs: [
      { question: "Is wet underfloor heating efficient?", answer: "Yes. It can run at lower water temperatures than radiators, especially in well-insulated spaces." },
      { question: "Can wet underfloor heating work with my boiler?", answer: "Often yes. We assess your boiler, pipework, pump capacity, and controls before recommending a design." },
      { question: "Is it suitable for renovations?", answer: "Yes, particularly where floors are being lifted or rebuilt. Low-profile overlay systems may also suit some retrofit projects." },
    ],
  },
  repairs: {
    metadata: createSeoMetadata({
      title: "Underfloor Heating Repairs",
      description: "Underfloor heating repairs in London, including cold zones, manifold faults, thermostat issues, wiring problems, airlocks, leaks, and pressure loss.",
      path: "/services/underfloor-heating/repairs",
    }),
    category: "Underfloor Heating / Repairs",
    title: "underfloor heating",
    highlight: "repairs.",
    description: "If your floor is cold, heating unevenly, tripping electrics, losing pressure, or ignoring the thermostat, we diagnose the fault and repair the system with minimal disruption.",
    icon: SearchCheck,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780782714/5971ebac-14b2-446b-a12e-e739effd26c4_ayfkkb.png",
    heroImageAlt: "Engineer diagnosing an underfloor heating repair",
    features: [
      { title: "Cold Zones", description: "Diagnosis of rooms or floor areas that are not warming properly." },
      { title: "Thermostat Faults", description: "Repair or replacement of wired, wireless, programmable, and smart thermostats." },
      { title: "Manifold Problems", description: "Flow meter, actuator, pump, blending valve, and manifold balancing checks." },
      { title: "Pressure Loss", description: "Investigation of pressure drops in wet underfloor heating circuits." },
      { title: "Airlocks", description: "Circuit flushing and bleeding to restore flow through affected loops." },
      { title: "Electrical Trips", description: "Testing for damaged electric mats, sensor faults, and insulation resistance issues." },
      { title: "Sensor Replacement", description: "Floor probe checks and replacement where accessible through installed conduit." },
      { title: "Performance Tuning", description: "Balancing and control adjustments to improve comfort and response times." },
    ],
    process: [
      { step: "01", title: "Fault Review", description: "We ask what has changed, which rooms are affected, and what controls are showing." },
      { step: "02", title: "Testing", description: "We test thermostats, wiring, sensors, manifolds, pumps, flow, and pressure." },
      { step: "03", title: "Repair Quote", description: "You receive a clear repair plan and price before work begins." },
      { step: "04", title: "System Check", description: "We confirm the system is heating correctly and explain any follow-up advice." },
    ],
    faqs: [
      { question: "Can you find why one room is not heating?", answer: "Yes. We check the thermostat, actuator, manifold flow, wiring, and circuit condition to narrow down the cause." },
      { question: "Can electric underfloor heating be repaired?", answer: "Often it can. The repair depends on whether the issue is with the thermostat, floor sensor, wiring, or heating cable." },
      { question: "Do you repair systems installed by others?", answer: "Yes. We regularly diagnose and repair existing underfloor heating systems installed by other companies." },
    ],
  },
  controls: {
    metadata: createSeoMetadata({
      title: "Underfloor Heating Controls & Thermostats",
      description: "Underfloor heating controls and thermostat installation in London, including zoning, wiring centres, actuators, smart controls, schedules, and system balancing.",
      path: "/services/underfloor-heating/controls",
    }),
    category: "Underfloor Heating / Controls",
    title: "underfloor heating",
    highlight: "controls.",
    description: "Good controls make underfloor heating comfortable and efficient. We install, replace, and configure thermostats, wiring centres, actuators, sensors, and zone controls for wet and electric systems.",
    icon: Settings,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780831513/ab980d22-352a-4571-8495-4031f9b0ecf7_2_sy097w.png",
    heroImageAlt: "Modern heating controls for underfloor heating",
    features: [
      { title: "Thermostat Installation", description: "Wired, wireless, programmable, and smart thermostat installation and replacement." },
      { title: "Zone Control", description: "Separate control for bedrooms, bathrooms, kitchens, living areas, and extensions." },
      { title: "Wiring Centres", description: "Neat wiring centre setup for manifolds, actuators, pumps, and boiler calls." },
      { title: "Actuator Checks", description: "Testing and replacement of manifold actuators that fail to open or close." },
      { title: "Floor Sensors", description: "Sensor setup and calibration for electric systems and floor temperature protection." },
      { title: "Schedule Optimisation", description: "Heating schedules tuned to slower warm-up times and room usage." },
      { title: "System Balancing", description: "Flow and control adjustments to reduce overshoot and uneven heating." },
      { title: "User Handover", description: "Clear guidance on everyday use, holiday modes, and efficient temperature settings." },
    ],
    process: [
      { step: "01", title: "Control Audit", description: "We check existing thermostats, wiring, zones, actuators, and heating behaviour." },
      { step: "02", title: "Options", description: "We recommend compatible controls based on your system and how you use each room." },
      { step: "03", title: "Install", description: "Controls are fitted, wired, paired, labeled, and tested." },
      { step: "04", title: "Configure", description: "We set schedules, calibrate sensors, and confirm each zone responds correctly." },
    ],
    faqs: [
      { question: "Can I control each room separately?", answer: "Yes, if the system has suitable zones, actuators, and thermostats. We can also upgrade many existing manifolds for better zoning." },
      { question: "Why is my underfloor heating slow to respond?", answer: "Underfloor heating naturally warms more slowly than radiators, but poor schedules, sensors, or flow settings can make this worse." },
      { question: "Can you replace old thermostats?", answer: "Yes. We can replace many old underfloor heating thermostats with modern programmable or smart options." },
    ],
  },
  "smart-thermostats": {
    metadata: createSeoMetadata({
      title: "Smart Thermostat Integration",
      description: "Smart thermostat integration for underfloor heating in London, including compatible controls, zoning, app setup, schedules, sensors, and handover.",
      path: "/services/underfloor-heating/smart-thermostats",
    }),
    category: "Underfloor Heating / Smart Thermostats",
    title: "smart thermostat",
    highlight: "integration.",
    description: "Control underfloor heating from your phone, improve schedules, and manage room temperatures with smart thermostat integration. We help choose compatible controls and set them up properly.",
    icon: Gauge,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780834768/9a0a4492-e33d-4e53-9a16-00f7921dfe4e_ufvns0.png",
    heroImageAlt: "Smart thermostat integration for underfloor heating",
    features: [
      { title: "Compatibility Checks", description: "We check your manifold, wiring centre, boiler call, electric load, and existing thermostats." },
      { title: "App Control", description: "Phone-based control for temperature changes, schedules, and away modes." },
      { title: "Multi-Zone Setup", description: "Smart control for multiple rooms where the system supports zoning." },
      { title: "Smart Schedules", description: "Schedules planned around underfloor warm-up times so rooms are ready when needed." },
      { title: "Sensor Calibration", description: "Room and floor sensor settings configured for comfort and floor protection." },
      { title: "Boiler Interlock", description: "Correct heat demand setup so your boiler responds only when zones need heat." },
      { title: "Wi-Fi Pairing", description: "Pairing, account setup, naming, and basic app handover." },
      { title: "Upgrade Advice", description: "Practical guidance on which smart controls suit your existing wet or electric system." },
    ],
    process: [
      { step: "01", title: "Assess", description: "We inspect your current thermostats, wiring, heating zones, and preferred smart platform." },
      { step: "02", title: "Specify", description: "We recommend compatible smart controls and explain any wiring or zoning limits." },
      { step: "03", title: "Install", description: "Thermostats, receivers, wiring centres, and sensors are connected and tested." },
      { step: "04", title: "Pair & Handover", description: "We pair the app, name rooms, set schedules, and show you the controls." },
    ],
    faqs: [
      { question: "Can smart thermostats work with underfloor heating?", answer: "Yes, but compatibility matters. Wet and electric systems need controls suited to their wiring, load, sensors, and zoning." },
      { question: "Will smart controls save energy?", answer: "They can help by improving schedules and avoiding unnecessary heating, especially when zones are set up correctly." },
      { question: "Can I keep my existing manifold?", answer: "Often yes. We inspect the current wiring centre, actuators, and thermostats before recommending upgrades." },
    ],
  },
  "design-consultation": {
    metadata: createSeoMetadata({
      title: "Underfloor Heating Design & Consultation",
      description: "Underfloor heating design consultation in London, including heat loss review, system specification, pipe layouts, floor build-up advice, zoning, and control strategy.",
      path: "/services/underfloor-heating/design-consultation",
    }),
    category: "Underfloor Heating / Design Consultation",
    title: "system design",
    highlight: "consultation.",
    description: "Start your underfloor heating project with the right design. We review room layouts, insulation, floor build-up, heating sources, zoning, and controls so the installation performs properly from day one.",
    icon: LayoutPanelTop,
    heroImageSrc: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780831513/190026bd-cffa-458e-9ddd-e2299cb1fd05_qzgzqf.png",
    heroImageAlt: "Underfloor heating design consultation and planning",
    features: [
      { title: "Heat Loss Review", description: "Room-by-room assessment to estimate heating demand and required output." },
      { title: "System Selection", description: "Advice on electric, wet, overlay, screeded, or mixed systems based on the project." },
      { title: "Pipe & Mat Layouts", description: "Planning for pipe loops, mat coverage, cable spacing, and areas to avoid." },
      { title: "Floor Build-Up Advice", description: "Guidance on insulation, boards, screed, leveling compounds, and finished floor compatibility." },
      { title: "Control Strategy", description: "Zoning, thermostats, sensors, smart controls, and boiler or heat pump interlock planning." },
      { title: "Trade Coordination", description: "Clear notes for builders, tilers, electricians, plumbers, and flooring installers." },
      { title: "Efficiency Planning", description: "Design choices that reduce heat loss, improve response, and protect running costs." },
      { title: "Quote Preparation", description: "A clear specification that can be used for installation pricing and project planning." },
    ],
    process: [
      { step: "01", title: "Brief", description: "We discuss the rooms, floor finishes, timeline, heating source, and comfort goals." },
      { step: "02", title: "Review", description: "We assess drawings, site conditions, insulation, floor build-up, and constraints." },
      { step: "03", title: "Specify", description: "We prepare the recommended system type, zones, controls, and installation approach." },
      { step: "04", title: "Next Steps", description: "You receive practical guidance for installation, materials, and trade sequencing." },
    ],
    faqs: [
      { question: "Do I need a design before installation?", answer: "For anything beyond a simple small room, a design helps avoid cold spots, slow warm-up, poor controls, and expensive rework." },
      { question: "Can you advise before builders start?", answer: "Yes. Early advice is best because insulation, screed depth, pipe routes, and wiring are much easier to plan before floors are built." },
      { question: "Can you design for heat pumps?", answer: "Yes. We can plan low-temperature underfloor heating that suits efficient heat pump operation where the building fabric supports it." },
    ],
  },
};

export function UnderfloorServicePage({ page }: { page: ServicePage }) {
  return (
    <ServiceDetailTemplate
      category={page.category}
      title={page.title}
      highlight={page.highlight}
      description={page.description}
      icon={page.icon}
      heroImageSrc={page.heroImageSrc}
      heroImageAlt={page.heroImageAlt}
      features={page.features}
      process={page.process}
      faqs={page.faqs}
    />
  );
}
