import {
  Activity,
  BookMarked,
  BookOpen,
  CircleHelp,
  Cpu,
  FileText,
  LayoutGrid,
  Package,
  Scale,
  ScanSearch,
  Search,
  Shield,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Solution } from "@/lib/site";
import { solutions, site } from "@/lib/site";
import { featureDeepLink } from "@/lib/feature-anchors";

export const PLATFORM_OVERVIEW_ID = "overview";

export type MegaMenuItem = {
  id: string;
  label: string;
  href: string;
  solution?: Solution;
};

export const megaMenuProducts: MegaMenuItem[] = solutions.map((solution) => ({
  id: solution.slug,
  label: solution.shortName,
  href: `/solutions/${solution.slug}`,
  solution,
}));

export const megaMenuNavItems: MegaMenuItem[] = [...megaMenuProducts];

export function getMegaMenuItem(id: string) {
  return megaMenuNavItems.find((item) => item.id === id) ?? megaMenuNavItems[0];
}

type FeatureCard = {
  label: string;
  description: string;
  preview: string;
  href: string;
  icon: LucideIcon;
};

const overviewLeads: Record<string, string> = {
  [PLATFORM_OVERVIEW_ID]:
    "One integrated platform for VMS, AI vision, assets, AMC, and health monitoring — so security and operations run from a single command layer.",
  vms: "Unify cameras, sites, and operators in one enterprise VMS for live monitoring, playback, and control.",
  "ai-analytics":
    "Turn live video into real-time AI alerts for safety, intrusion, PPE, and operational events.",
  "asset-tracking":
    "Track surveillance and IT assets across locations with clear ownership and lifecycle visibility.",
  "amc-management":
    "Keep AMC, warranties, vendors, and preventive maintenance on schedule from one workspace.",
  "health-monitoring":
    "Spot camera, NVR, storage, and network issues before they create operational blind spots.",
};

export const solutionIcons: Record<string, LucideIcon> = {
  vms: Video,
  "ai-analytics": Cpu,
  "asset-tracking": Package,
  "amc-management": Wrench,
  "health-monitoring": Activity,
};

const platformFeatureCards: FeatureCard[] = solutions.map((solution) => {
  const lead = overviewLeads[solution.slug] ?? solution.summary;
  return {
    label: solution.shortName,
    description: lead,
    preview: `${lead} Explore how ${solution.shortName} connects into the broader OrionAlerts platform for monitoring, alerts, search, and upkeep.`,
    href: `/solutions/${solution.slug}`,
    icon: solutionIcons[solution.slug] ?? LayoutGrid,
  };
});

const solutionImages: Record<string, string> = {
  [PLATFORM_OVERVIEW_ID]: "/visuals/platform-dashboard.svg",
  ...Object.fromEntries(solutions.map((solution) => [solution.slug, solution.image])),
};

export function getFeatureCards(activeId: string): FeatureCard[] {
  if (activeId === PLATFORM_OVERVIEW_ID) {
    return platformFeatureCards;
  }

  const item = getMegaMenuItem(activeId);
  if (!item.solution) return platformFeatureCards;

  const icons = [Search, Cpu, Video, Shield, Activity, LayoutGrid, Wrench, Package];

  return item.solution.features.map((feature, index) => ({
    label: feature.title,
    description: feature.description,
    preview: feature.description,
    href: featureDeepLink(item.solution!.slug, feature.title),
    icon: icons[index % icons.length],
  }));
}

export function getOverviewCopy(activeId: string) {
  const item = getMegaMenuItem(activeId);

  if (activeId === PLATFORM_OVERVIEW_ID || !item.solution) {
    return {
      title: "Overview",
      description: overviewLeads[PLATFORM_OVERVIEW_ID] ?? site.tagline,
      href: "/solutions",
      image: solutionImages[PLATFORM_OVERVIEW_ID],
    };
  }

  return {
    title: item.solution.shortName,
    description: item.solution.headline,
    href: `/solutions/${item.solution.slug}`,
    image: item.solution.image,
  };
}

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
