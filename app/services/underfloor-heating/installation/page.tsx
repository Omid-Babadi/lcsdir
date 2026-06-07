import { UnderfloorServicePage, underfloorHeatingPages } from "../service-pages";

const page = underfloorHeatingPages.installation;

export const metadata = page.metadata;

export default function UnderfloorHeatingInstallationPage() {
  return <UnderfloorServicePage page={page} />;
}
