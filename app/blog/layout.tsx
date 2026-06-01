import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Heating, Cooling & Plumbing Advice",
  description:
    "Expert advice and practical guides from London Climate Systems on boilers, heating, plumbing, gas safety, and air conditioning.",
  path: "/blog",
  keywords: ["heating advice London", "boiler tips", "plumbing advice", "AC maintenance"],
});

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
