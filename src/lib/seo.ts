import type { Metadata } from "next";
import { site } from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/Images/favicon.png";

export const SITE_DEFAULT_TITLE =
  "Enterprise Video Intelligence for AI Alerts & VMS";

export const SITE_DEFAULT_DESCRIPTION =
  "OrionAlerts unifies VMS, AI video alerts, camera health, asset tracking, and AMC ops across enterprise sites.";

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

/** Prefer topic-first titles under ~60 characters for SERP display. */
export function clipTitle(text: string, max = 60): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > 40 ? slice.slice(0, lastSpace) : slice).trimEnd()}…`;
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
  const clippedTitle = clipTitle(title);
  const desc = clipDescription(description);
  const socialDescription = ogDescription ? clipDescription(ogDescription) : desc;
  const socialTitle = clipTitle(
    ogTitle ?? (absoluteTitle ? clippedTitle : `${clippedTitle} | ${site.name}`),
    70,
  );

  return {
    title: absoluteTitle ? { absolute: clippedTitle } : clippedTitle,
    description: desc,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: path,
      siteName: site.name,
      type,
      images: [{ url: image, alt: imageAlt ?? socialTitle }],
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
