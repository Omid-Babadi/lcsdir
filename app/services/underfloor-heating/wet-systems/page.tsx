import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages["wet-systems"];

export const metadata = page.metadata;

export default function WetUnderfloorHeatingSystemsPage() {
  return <UnderfloorServicePage page={page} />;
}
