import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages["design-consultation"];

export const metadata = page.metadata;

export default function UnderfloorHeatingDesignConsultationPage() {
  return <UnderfloorServicePage page={page} />;
}
