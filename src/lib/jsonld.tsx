import { knowsAbout, site, socialProfiles } from "@/lib/site";
import { absoluteUrl, getSiteOrigin } from "@/lib/industries/site-origin";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { legalMeta } from "@/lib/legal";

/** Serialize JSON-LD safely for inline script tags (escape `<`). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function abs(path: string): string {
  return absoluteUrl(path) ?? path;
}

export function organizationJsonLd() {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": origin ? `${origin}/#organization` : undefined,
    name: site.name,
    legalName: legalMeta.controllerLegalName,
    url: origin ?? undefined,
    logo: abs(DEFAULT_OG_IMAGE),
    description: site.description,
    email: site.email,
    telephone: site.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400059",
      addressCountry: "IN",
    },
    // `sameAs` is what lets an assistant confirm the site, the social profiles
    // and the company are one entity. Omitted entirely while the list is empty
    // rather than emitted as [] — an empty array is a weaker signal than none.
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    areaServed: { "@type": "Country", name: site.country },
    knowsAbout,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        url: abs("/contact"),
      },
    ],
  };
}

export function websiteJsonLd() {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": origin ? `${origin}/#website` : undefined,
    name: site.name,
    url: origin ?? abs("/"),
    description: site.description,
    publisher: { "@id": origin ? `${origin}/#organization` : undefined },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type ArticleJsonLdInput = {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorRole?: string;
};

export function articleJsonLd({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  authorName,
  authorRole,
}: ArticleJsonLdInput) {
  const pageUrl = abs(`/blogs/${slug}`);
  const imageUrl = image.startsWith("http") ? image : abs(image);
  const origin = getSiteOrigin();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [imageUrl],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorRole ? { jobTitle: authorRole } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: abs(DEFAULT_OG_IMAGE),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    ...(origin ? { isPartOf: { "@id": `${origin}/#website` } } : {}),
  };
}

type VideoObjectJsonLdInput = {
  name: string;
  description: string;
  contentPath: string;
  thumbnailPath: string;
  pagePath: string;
  uploadDate?: string;
};

/** VideoObject for stable public marketing videos (not ephemeral WhatsApp/demo dumps). */
export function videoObjectJsonLd({
  name,
  description,
  contentPath,
  thumbnailPath,
  pagePath,
  uploadDate = "2026-07-28",
}: VideoObjectJsonLdInput) {
  const origin = getSiteOrigin();
  const contentUrl = abs(contentPath);
  const thumbnailUrl = abs(thumbnailPath);
  const pageUrl = abs(pagePath);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl,
    uploadDate,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: abs(DEFAULT_OG_IMAGE),
      },
    },
    ...(origin ? { isPartOf: { "@id": `${origin}/#website` } } : {}),
  };
}

type SoftwareApplicationJsonLdInput = {
  name: string;
  description: string;
  path: string;
  category?: string;
  image?: string;
};

/**
 * SoftwareApplication for product/platform pages (e.g. Nebula OS).
 * Deliberately omits aggregateRating / review / offers — we publish no
 * ratings or public pricing, and inventing them is a structured-data
 * violation.
 */
export function softwareApplicationJsonLd({
  name,
  description,
  path,
  category = "SecurityApplication",
  image = DEFAULT_OG_IMAGE,
}: SoftwareApplicationJsonLdInput) {
  const origin = getSiteOrigin();
  const pageUrl = abs(path);
  const imageUrl = image.startsWith("http") ? image : abs(image);
  const publisher = {
    "@type": "Organization",
    name: site.name,
    logo: {
      "@type": "ImageObject",
      url: abs(DEFAULT_OG_IMAGE),
    },
  };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: category,
    operatingSystem: "Linux",
    url: pageUrl,
    image: imageUrl,
    publisher,
    provider: publisher,
    ...(origin ? { isPartOf: { "@id": `${origin}/#website` } } : {}),
  };
}

type ServiceJsonLdInput = {
  name: string;
  description: string;
  path: string;
  image?: string;
};

/**
 * `Service` for each solution module. This is the entity an assistant matches
 * when someone asks "who does AI video analytics for warehouses" — so the
 * description should read as a capability, not as marketing copy.
 * No `offers` block: we publish no public pricing, and inventing one is a
 * structured-data violation.
 */
export function serviceJsonLd({
  name,
  description,
  path,
  image,
}: ServiceJsonLdInput) {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: abs(path),
    ...(image ? { image: image.startsWith("http") ? image : abs(image) } : {}),
    provider: origin
      ? { "@id": `${origin}/#organization` }
      : {
          "@type": "Organization",
          name: site.name,
        },
    areaServed: { "@type": "Country", name: site.country },
  };
}

export function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
