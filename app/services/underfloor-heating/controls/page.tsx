import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages.controls;

export const metadata = page.metadata;

export default function UnderfloorHeatingControlsPage() {
  return <UnderfloorServicePage page={page} />;
}
