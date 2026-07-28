import { Activity, Cpu, LayoutGrid, Search, Shield, Video } from "lucide-react";
import type { Solution } from "@/lib/site";
import { solutions } from "@/lib/site";

export type MegaMenuItem = {
  id: string;
  label: string;
  href: string;
  solution: Solution;
};

export const megaMenuProducts: MegaMenuItem[] = solutions.map((solution) => ({
  id: solution.slug,
  label: solution.shortName,
  href: `/solutions/${solution.slug}`,
  solution,
}));

export function getMegaMenuItem(id: string) {
  return megaMenuProducts.find((item) => item.id === id) ?? megaMenuProducts[0];
}

type FeatureCard = {
  label: string;
  href: string;
  icon: typeof Video;
};

export function getFeatureCards(activeId: string): FeatureCard[] {
  const item = getMegaMenuItem(activeId);
  const icons = [Search, Cpu, Video, Shield, Activity, LayoutGrid];

  return item.solution.features.slice(0, 5).map((feature, index) => ({
    label: feature.title.split(" & ")[0].split(" — ")[0].slice(0, 28),
    href: `/solutions/${item.solution.slug}`,
    icon: icons[index % icons.length],
  }));
}

export function getOverviewCopy(activeId: string) {
  const item = getMegaMenuItem(activeId);

  return {
    title: "Overview",
    description: item.solution.summary,
    href: `/solutions/${item.solution.slug}`,
  };
}
