import { Activity, Cpu, LayoutGrid, Package, Search, Shield, Video, Wrench, type LucideIcon } from "lucide-react";
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
    preview: `${lead} Explore how ${solution.shortName} connects into the broader Orion Alerts platform for monitoring, alerts, search, and upkeep.`,
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
