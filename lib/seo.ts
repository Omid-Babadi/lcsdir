import type { Metadata } from "next";

export const siteConfig = {
  name: "London Climate Systems",
  legalName: "London Climate Systems LTD",
  url: "https://londonclimatesystems.com",
  description:
    "Gas Safe and F-Gas certified engineers for boiler, heating, plumbing, gas, and air conditioning services across Greater London. Book a local engineer.",
  phone: "+447473423003",
  phoneDisplay: "07473 423003",
  phoneHref: "tel:+447473423003",
  email: "londonclimatesystems@gmail.com",
  address: {
    streetAddress: "71–75 Shelton Street",
    addressLocality: "Covent Garden",
    addressRegion: "London",
    postalCode: "WC2H 9JQ",
    addressCountry: "GB",
  },
  addressDisplay: "71–75 Shelton Street, Covent Garden, London, WC2H 9JQ",
  logo: "/logo.png",
  defaultImage: "/opengraph-image",
  organizationId: "https://londonclimatesystems.com/#organization",
  websiteId: "https://londonclimatesystems.com/#website",
  social: {
    googleBusinessProfile: "https://share.google/KmQB6VQUKVpN9tmuW",
    instagram: "https://www.instagram.com/londonclimatesystems/",
  },
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
  path: string;
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
  path,
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

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteConfig.organizationId,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      logo: absoluteUrl(siteConfig.logo),
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Greater London",
      },
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      sameAs: [
        siteConfig.social.googleBusinessProfile,
        siteConfig.social.instagram,
      ],
    },
    {
      "@type": "WebSite",
      "@id": siteConfig.websiteId,
      url: absoluteUrl("/"),
      name: siteConfig.name,
      publisher: {
        "@id": siteConfig.organizationId,
      },
      inLanguage: "en-GB",
    },
  ],
};
