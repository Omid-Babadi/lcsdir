import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages["smart-thermostats"];

export const metadata = page.metadata;

export default function SmartThermostatIntegrationPage() {
  return <UnderfloorServicePage page={page} />;
}
