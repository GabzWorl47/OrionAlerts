import { knowsAbout, site, socialProfiles, solutions } from "@/lib/site";
import { absoluteUrl, getSiteOrigin } from "@/lib/industries/site-origin";
import { DEFAULT_OG_IMAGE, SITE_LOGO } from "@/lib/seo";
import { legalMeta } from "@/lib/legal";
import { nebulaModules } from "@/lib/nebula-os";
import { getPublicVideoByContentPath } from "@/lib/videos";

/** Content language for every page (the site targets India; see `<html lang>`). */
const IN_LANGUAGE = "en-IN";

/** Serialize JSON-LD safely for inline script tags (escape `<`). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function abs(path: string): string {
  return absoluteUrl(path) ?? path;
}

/** Human-readable country for schema.org `areaServed` (not the ISO code). */
const AREA_SERVED = { "@type": "Country", name: "India" } as const;

/** Street part of the registered address (locality/region/PIN live in their own fields). */
const STREET_ADDRESS = site.address.split(", Mumbai")[0];

/** Author byline that represents the company rather than a person. */
const ORGANIZATION_AUTHOR_NAMES = new Set([`${site.name} Team`]);

/** `@id` of the single Organization node every page ships (see root layout). */
export function organizationId(): string | undefined {
  const origin = getSiteOrigin();
  return origin ? `${origin}/#organization` : undefined;
}

/**
 * Reference to the one Organization entity. Falls back to a minimal inline
 * node only when no origin is configured (so the reference can't resolve).
 */
function organizationRef() {
  const id = organizationId();
  return id
    ? { "@id": id }
    : {
        "@type": "Organization",
        name: site.name,
        logo: { "@type": "ImageObject", url: abs(SITE_LOGO) },
      };
}

export function organizationJsonLd() {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: site.name,
    alternateName: ["Orion Alerts"],
    legalName: legalMeta.controllerLegalName,
    url: origin ?? undefined,
    logo: abs(SITE_LOGO),
    description: site.description,
    email: site.email,
    telephone: site.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400059",
      addressCountry: "IN",
    },
    // `sameAs` is what lets an assistant confirm the site, the social profiles
    // and the company are one entity. Omitted entirely while the list is empty
    // rather than emitted as [] — an empty array is a weaker signal than none.
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    areaServed: AREA_SERVED,
    knowsAbout,
    // The five solution modules, each pointing at the `Service` node its own
    // page ships (`serviceJsonLd`), so the company and its services are linked.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} solutions`,
      itemListElement: solutions.map((solution) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${abs(`/solutions/${solution.slug}`)}#service`,
          name: solution.name,
          url: abs(`/solutions/${solution.slug}`),
        },
      })),
    },
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
    publisher: organizationRef(),
    inLanguage: IN_LANGUAGE,
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
  /** Word count of the article body (headings, paragraphs, lists, quotes). */
  wordCount?: number;
  /**
   * What the post is about. Plain strings become `Thing` nodes; pass
   * `{ "@id": … }` to point at an entity another node defines (e.g. a solution
   * `Service` id from `serviceId()`), or `{ name, url }` for a named page.
   */
  about?: ArticleAbout | ArticleAbout[];
  /** Blog category, emitted as `articleSection`. */
  section?: string;
};

type ArticleAbout = string | { "@id": string } | { name: string; url?: string };

function toAboutNode(item: ArticleAbout) {
  if (typeof item === "string") return { "@type": "Thing", name: item };
  if ("@id" in item) return { "@id": item["@id"] };
  return {
    "@type": "Thing",
    name: item.name,
    ...(item.url ? { url: item.url.startsWith("http") ? item.url : abs(item.url) } : {}),
  };
}

/** `@id` of a solution's `Service` node, for cross-referencing from other nodes. */
export function serviceId(slug: string): string {
  return `${abs(`/solutions/${slug}`)}#service`;
}

/**
 * `BlogPosting` for /blogs/[slug]. (Kept under its historical name so existing
 * call sites keep working; `blogPostingJsonLd` is an alias.)
 */
export function articleJsonLd({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  authorName,
  authorRole,
  wordCount,
  about,
  section,
}: ArticleJsonLdInput) {
  const pageUrl = abs(`/blogs/${slug}`);
  const imageUrl = image.startsWith("http") ? image : abs(image);
  const origin = getSiteOrigin();
  const aboutNodes = about
    ? (Array.isArray(about) ? about : [about]).map(toAboutNode)
    : [];

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: title,
    description,
    image: [imageUrl],
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: IN_LANGUAGE,
    ...(typeof wordCount === "number" && wordCount > 0 ? { wordCount } : {}),
    ...(section ? { articleSection: section } : {}),
    ...(aboutNodes.length ? { about: aboutNodes } : {}),
    author: ORGANIZATION_AUTHOR_NAMES.has(authorName)
      ? { "@type": "Organization", name: site.name, ...organizationRef() }
      : {
          "@type": "Person",
          name: authorName,
          ...(authorRole ? { jobTitle: authorRole } : {}),
        },
    publisher: organizationRef(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    ...(origin ? { isPartOf: { "@id": `${origin}/#website` } } : {}),
  };
}

export const blogPostingJsonLd = articleJsonLd;

type VideoObjectJsonLdInput = {
  name: string;
  description: string;
  contentPath: string;
  thumbnailPath: string;
  pagePath: string;
  /** Defaults to the asset's `uploadDate` in `src/lib/videos.ts`. */
  uploadDate?: string;
  /** ISO 8601 duration. Defaults to the asset's measured `duration` in `src/lib/videos.ts`. */
  duration?: string;
};

/**
 * Fallback for a video not registered in `publicVideoAssets`: the date the
 * first marketing videos were added, with the IST offset Google expects.
 */
const FALLBACK_VIDEO_UPLOAD_DATE = "2026-07-28T00:00:00+05:30";

/** VideoObject for stable public marketing videos (not ephemeral WhatsApp/demo dumps). */
export function videoObjectJsonLd({
  name,
  description,
  contentPath,
  thumbnailPath,
  pagePath,
  uploadDate,
  duration,
}: VideoObjectJsonLdInput) {
  const origin = getSiteOrigin();
  const contentUrl = abs(contentPath);
  const thumbnailUrl = abs(thumbnailPath);
  const pageUrl = abs(pagePath);
  const asset = getPublicVideoByContentPath(contentPath);
  const resolvedDuration = duration ?? asset?.duration;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl,
    uploadDate: uploadDate ?? asset?.uploadDate ?? FALLBACK_VIDEO_UPLOAD_DATE,
    ...(resolvedDuration ? { duration: resolvedDuration } : {}),
    inLanguage: IN_LANGUAGE,
    url: pageUrl,
    publisher: organizationRef(),
    ...(origin ? { isPartOf: { "@id": `${origin}/#website` } } : {}),
  };
}

type SoftwareApplicationJsonLdInput = {
  name: string;
  description: string;
  path: string;
  category?: string;
  image?: string;
  /** Defaults to the five Nebula OS modules when `path` is `/nebula-os`. */
  featureList?: string[];
  /** Defaults to the GPU note from `nebula-os.ts` when `path` is `/nebula-os`. */
  softwareRequirements?: string;
};

const NEBULA_OS_PATH = "/nebula-os";

/** The five capability modules, as listed on /nebula-os. */
const NEBULA_FEATURE_LIST = nebulaModules.map((nebulaModule) => nebulaModule.heading);

/** From the "Does Nebula OS need a GPU?" answer in `nebula-os.ts`. */
const NEBULA_SOFTWARE_REQUIREMENTS =
  "GPU acceleration for AI inference and hardware video decoding where AI analytics are enabled; node sizing depends on channel count and the detections running.";

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
  featureList,
  softwareRequirements,
}: SoftwareApplicationJsonLdInput) {
  const origin = getSiteOrigin();
  const pageUrl = abs(path);
  const imageUrl = image.startsWith("http") ? image : abs(image);
  const publisher = organizationRef();
  const isNebula = path === NEBULA_OS_PATH;
  const features = featureList ?? (isNebula ? NEBULA_FEATURE_LIST : undefined);
  const requirements =
    softwareRequirements ?? (isNebula ? NEBULA_SOFTWARE_REQUIREMENTS : undefined);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name,
    description,
    applicationCategory: category,
    operatingSystem: "Linux",
    ...(features?.length ? { featureList: features } : {}),
    ...(requirements ? { softwareRequirements: requirements } : {}),
    inLanguage: IN_LANGUAGE,
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
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType: name,
    url,
    ...(image ? { image: image.startsWith("http") ? image : abs(image) } : {}),
    provider: organizationRef(),
    areaServed: AREA_SERVED,
  };
}

/** Shared `isPartOf` / `publisher` links for page-type nodes. */
function pageLinks() {
  const origin = getSiteOrigin();
  return {
    inLanguage: IN_LANGUAGE,
    publisher: organizationRef(),
    ...(origin ? { isPartOf: { "@id": `${origin}/#website` } } : {}),
  };
}

type CollectionPageJsonLdInput = {
  name: string;
  path: string;
  description?: string;
  items: { name: string; path: string }[];
};

/**
 * `CollectionPage` for hub pages (/solutions, /industries, /glossary,
 * /use-cases, /compare …) with the listed pages as an `ItemList`.
 */
export function collectionPageJsonLd({
  name,
  path,
  description,
  items,
}: CollectionPageJsonLdInput) {
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    name,
    ...(description ? { description } : {}),
    url,
    ...pageLinks(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: abs(item.path),
      })),
    },
  };
}

/** `AboutPage` whose subject is the one company entity. */
export function aboutPageJsonLd(
  path = "/about",
  { name, description }: { name?: string; description?: string } = {},
) {
  const url = abs(path);
  const org = organizationRef();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#webpage`,
    name: name ?? `About ${site.name}`,
    ...(description ? { description } : {}),
    url,
    ...pageLinks(),
    about: org,
    mainEntity: org,
  };
}

type DefinedTermJsonLdInput = {
  /** The term itself, e.g. "VSaaS". */
  name: string;
  /** The 40–80-word definition shown on the page. */
  description: string;
  /** Page path of the term, e.g. "/glossary/vsaas". */
  path: string;
  /** Other names for the term, e.g. "Video Surveillance as a Service". */
  alternateNames?: string[];
  /** The glossary hub the term belongs to. */
  termSet?: { name: string; path: string };
};

/** `DefinedTerm` for a glossary entry, linked to its `DefinedTermSet`. */
export function definedTermJsonLd({
  name,
  description,
  path,
  alternateNames,
  termSet = { name: `${site.name} glossary`, path: "/glossary" },
}: DefinedTermJsonLdInput) {
  const url = abs(path);
  const setUrl = abs(termSet.path);
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name,
    description,
    ...(alternateNames?.length ? { alternateName: alternateNames } : {}),
    url,
    inLanguage: IN_LANGUAGE,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${setUrl}#termset`,
      name: termSet.name,
      url: setUrl,
    },
  };
}

/** `DefinedTermSet` for the glossary hub, listing its terms. */
export function definedTermSetJsonLd({
  name = `${site.name} glossary`,
  path = "/glossary",
  description,
  terms,
}: {
  name?: string;
  path?: string;
  description?: string;
  terms: { name: string; path: string }[];
}) {
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#termset`,
    name,
    ...(description ? { description } : {}),
    url,
    ...pageLinks(),
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${abs(term.path)}#term`,
      name: term.name,
      url: abs(term.path),
    })),
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
