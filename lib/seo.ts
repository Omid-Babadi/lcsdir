import type { Metadata } from "next";

export const siteConfig = {
  name: "London Climate Systems",
  legalName: "London Climate Systems Ltd",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://londonclimatesystems.com",
  description:
    "Gas Safe and F-Gas certified London engineers for plumbing, heating, boilers, gas, and air conditioning. Fast service for homes and businesses.",
  phone: "07473 423003",
  email: "londonclimatesystems@gmail.com",
  address: {
    streetAddress: "71-75 Shelton Street",
    addressLocality: "Covent Garden",
    addressRegion: "London",
    postalCode: "WC2H 9JQ",
    addressCountry: "GB",
  },
  logo: "/logo.png",
  defaultImage: "/opengraph-image",
  keywords: [
    "London Climate Systems",
    "plumber London",
    "heating engineer London",
    "boiler repair London",
    "air conditioning London",
    "Gas Safe engineer London",
    "F-Gas engineer London",
    "gas safety certificate London",
  ],
};

type SeoOptions = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createSeoMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = [],
  image = siteConfig.defaultImage,
  imageAlt = `${siteConfig.name} logo`,
  type = "website",
  noIndex = false,
}: SeoOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_GB",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HVACBusiness", "Plumber", "LocalBusiness"],
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  image: absoluteUrl(siteConfig.defaultImage),
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "££",
  areaServed: [
    {
      "@type": "City",
      name: "London",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater London",
    },
  ],
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Heating, cooling, plumbing, gas, and boiler services",
    itemListElement: [
      "Plumbing installation and repairs",
      "Heating installation, service, and repairs",
      "Boiler installation, servicing, and breakdown repairs",
      "Air conditioning installation, maintenance, and repairs",
      "Gas safety certificates and gas services",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        areaServed: "Greater London",
      },
    })),
  },
};
