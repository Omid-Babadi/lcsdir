import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact & Book a London Engineer",
  description:
    "Contact London Climate Systems to book plumbing, heating, boiler, gas, or air conditioning services across Greater London.",
  path: "/contact",
  keywords: ["book engineer London", "contact plumber London", "heating quote London"],
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
