import {
  Activity,
  BookMarked,
  BookOpen,
  CircleHelp,
  Cpu,
  FileText,
  Package,
  Scale,
  ScanSearch,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Industry, Solution } from "@/lib/site";

/*
 * Header navigation data.
 *
 * The header and its mega menus are client components. They must not import
 * `@/lib/site` (every solution's features/FAQs and every industry), or that
 * whole module ships in the shared JS bundle on every page. Instead the server
 * (SiteChrome) builds these slim link lists with `buildHeaderNav` and passes
 * them down as props. Keep this file free of runtime imports from `@/lib/site`
 * (type-only imports are erased).
 */

/*
 * Only the fields the menus render. Hrefs are derived on the client
 * (solutionHref / featureDeepLink / industryHref) to keep the props, which are
 * serialized into every page's HTML, small.
 */
export type NavSolution = {
  slug: string;
  label: string;
  headline: string;
  image: string;
  /** Feature titles; link with featureDeepLink(slug, title). */
  features: string[];
};

export type NavIndustry = { slug: string; name: string };

export const solutionHref = (slug: string) => `/solutions/${slug}`;
export const industryHref = (slug: string) => `/industries/${slug}`;

export type HeaderNavData = {
  solutions: NavSolution[];
  /** First industries in site order; the desktop menu shows these, the mobile drawer the first few. */
  industries: NavIndustry[];
};

/** Desktop industries mega menu is 3 columns x 5 rows. */
export const INDUSTRIES_MENU_COUNT = 15;

/** Server-only helper: pass it the data from `@/lib/site`. */
export function buildHeaderNav(
  solutions: readonly Solution[],
  industries: readonly Industry[],
): HeaderNavData {
  return {
    solutions: solutions.map((solution) => ({
      slug: solution.slug,
      label: solution.shortName,
      headline: solution.headline,
      image: solution.image,
      features: solution.features.map((feature) => feature.title),
    })),
    industries: industries.slice(0, INDUSTRIES_MENU_COUNT).map((industry) => ({
      slug: industry.slug,
      name: industry.name,
    })),
  };
}

export const solutionIcons: Record<string, LucideIcon> = {
  vms: Video,
  "ai-analytics": Cpu,
  "asset-tracking": Package,
  "amc-management": Wrench,
  "health-monitoring": Activity,
};

/* ------------------------------------------------------------------ */
/* Resources menu (header mega menu, mobile drawer)                    */
/* ------------------------------------------------------------------ */

export type ResourceMenuItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

/** Where the "Resources" nav item itself links (it also opens the menu). */
export const RESOURCES_HUB_HREF = "/blogs";

export const resourceMenuItems: ResourceMenuItem[] = [
  {
    label: "Blog",
    description: "Operator playbooks and video intelligence articles.",
    href: "/blogs",
    icon: BookOpen,
  },
  {
    label: "FAQs",
    description: "Cameras, AI, multi-site and platform answers.",
    href: "/faqs",
    icon: CircleHelp,
  },
  {
    label: "Glossary",
    description: "Short definitions of video surveillance and video analytics terms.",
    href: "/glossary",
    icon: BookMarked,
  },
  {
    label: "Use cases",
    description: "What each AI detection does and what it needs to work.",
    href: "/use-cases",
    icon: ScanSearch,
  },
  {
    label: "Compare",
    description: "Side-by-side guides to common surveillance architecture choices.",
    href: "/compare",
    icon: Scale,
  },
  {
    label: "Docs",
    description: "Product and integration documentation.",
    href: "/docs",
    icon: FileText,
  },
];

/** Route prefixes that belong to the Resources section (for the active nav state). */
export const resourceRoutePrefixes = resourceMenuItems.map((item) => item.href);
