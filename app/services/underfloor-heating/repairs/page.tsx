import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages.repairs;

export const metadata = page.metadata;

export default function UnderfloorHeatingRepairsPage() {
  return <UnderfloorServicePage page={page} />;
}
