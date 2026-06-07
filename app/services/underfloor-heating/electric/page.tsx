import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages.electric;

export const metadata = page.metadata;

export default function ElectricUnderfloorHeatingPage() {
  return <UnderfloorServicePage page={page} />;
}
