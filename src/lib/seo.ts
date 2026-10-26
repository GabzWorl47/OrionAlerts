import type { Metadata } from "next";
import { site } from "@/lib/site";

/** 1200×630 social share card (Open Graph / Twitter). */
export const DEFAULT_OG_IMAGE = "/Images/og-default.jpg";
export const DEFAULT_OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

/** Square brand mark for schema.org `logo` fields. */
export const SITE_LOGO = "/Images/favicon.png";

export const SITE_DEFAULT_TITLE = "AI Video Analytics & VMS Platform in India";

export const SITE_DEFAULT_DESCRIPTION =
  "OrionAlerts turns existing CCTV into real-time AI alerts and unifies VMS, camera health, asset tracking and AMC for multi-site enterprises in India.";

/** Open Graph locale for the India-targeted site. */
export const OG_LOCALE = "en_IN";

/** Hard ceiling for the rendered `<title>` (and share titles) in SERPs. */
export const MAX_TITLE_LENGTH = 60;

/** Suffix the root layout's title template appends (`%s | OrionAlerts`). */
export const TITLE_SUFFIX = ` | ${site.name}`;

type BuildPageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  /** Absolute title without the layout template. */
  absoluteTitle?: boolean;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
};

/** Keep meta descriptions in the editorial 120–155 character band when possible. */
export function clipDescription(text: string, max = 155): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trimEnd()}…`;
}

/** Words a clipped title should never end on. */
const TRAILING_STOPWORDS = new Set([
  "a", "an", "and", "as", "at", "by", "for", "from", "in", "into", "is",
  "of", "on", "or", "the", "to", "vs", "with", "your",
]);

/**
 * Prefer topic-first titles under ~60 characters for SERP display.
 * Cuts on a word boundary (no mid-word ellipsis), then drops dangling
 * separators and connective words so the title still reads as a phrase.
 */
export function clipTitle(text: string, max = MAX_TITLE_LENGTH): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  const words = cleaned.slice(0, max + 1).split(" ");
  // The last fragment is only a whole word if the cut landed on a space.
  if (cleaned[max] !== " ") words.pop();
  while (words.length > 1) {
    const last = words[words.length - 1].replace(/[\s:;,.\-–—|&/]+$/, "");
    if (!last || TRAILING_STOPWORDS.has(last.toLowerCase())) {
      words.pop();
      continue;
    }
    words[words.length - 1] = last;
    break;
  }
  const clipped = words.join(" ").trim();
  // A single over-long word: fall back to a hard cut.
  if (clipped.length < max * 0.5) return `${cleaned.slice(0, max - 1).trimEnd()}…`;
  return clipped;
}

/**
 * Consistent canonical, Open Graph, and Twitter fields for indexable pages.
 * Keep meta descriptions separate from long on-page summaries.
 */
export function buildPageMetadata({
  title,
  description,
  pathname,
  absoluteTitle = false,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
  ogTitle,
  ogDescription,
}: BuildPageMetadataInput): Metadata {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const cleanedTitle = title.replace(/\s+/g, " ").trim();
  // The layout template appends TITLE_SUFFIX, so a templated title only has
  // MAX_TITLE_LENGTH - TITLE_SUFFIX.length characters to work with. A title
  // that is too long for the suffix but fits on its own ships without the
  // brand rather than being cut mid-phrase; anything longer is clipped on a
  // word boundary to the full 60.
  const useTemplate =
    !absoluteTitle &&
    cleanedTitle.length <= MAX_TITLE_LENGTH - TITLE_SUFFIX.length;
  const pageTitle = useTemplate ? cleanedTitle : clipTitle(cleanedTitle);
  const renderedTitle = useTemplate ? `${pageTitle}${TITLE_SUFFIX}` : pageTitle;
  const desc = clipDescription(description);
  const socialDescription = ogDescription ? clipDescription(ogDescription) : desc;
  const socialTitle = ogTitle ? clipTitle(ogTitle) : renderedTitle;

  return {
    title: useTemplate ? pageTitle : { absolute: pageTitle },
    description: desc,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: path,
      siteName: site.name,
      locale: OG_LOCALE,
      type,
      images: [
        {
          url: image,
          alt: imageAlt ?? socialTitle,
          ...(image === DEFAULT_OG_IMAGE ? DEFAULT_OG_IMAGE_SIZE : {}),
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors?.length ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [image],
    },
  };
}

/** Concise solution meta descriptions (not the long on-page summary). */
export const solutionSeoDescriptions: Record<string, string> = {
  vms: "Enterprise VMS for multi-site live monitoring, playback, alarms, and evidence export—built for control-room teams that outgrow fragmented NVRs.",
  "ai-analytics":
    "AI video analytics that turn live CCTV into real-time alerts for intrusion, PPE, safety, and operations—with less noise for security teams.",
  "asset-tracking":
    "Centralize surveillance and IT asset inventory, ownership, warranty, and lifecycle tracking across sites—without spreadsheet chase-downs.",
  "amc-management":
    "Digitize AMC, warranties, preventive maintenance, vendor SLAs, and renewals so camera estates stay covered and serviceable.",
  "health-monitoring":
    "Monitor camera, NVR, storage, and network health in real time so teams fix blind spots before operations lose coverage.",
};
