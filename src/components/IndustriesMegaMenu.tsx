"use client";

import Link from "next/link";
import {
  Building2,
  Car,
  Factory,
  FlaskConical,
  GraduationCap,
  Landmark,
  Package,
  Plane,
  Pill,
  Shield,
  Truck,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { industryHref, type NavIndustry } from "@/lib/mega-menu";

const industryIcons: Record<string, LucideIcon> = {
  manufacturing: Factory,
  automotive: Car,
  cement: Building2,
  "metals-mining": Shield,
  "oil-gas": FlaskConical,
  pharma: Pill,
  "food-fmcg": Utensils,
  logistics: Truck,
  "dark-stores": Package,
  "quick-commerce": Package,
  "ecommerce-fulfilment": Package,
  "cold-storage": Package,
  "airports-ports-railways": Plane,
  "commercial-buildings": Building2,
  "data-centres": Landmark,
  "education-campuses": GraduationCap,
  healthcare: Pill,
  "retail-shopping": Building2,
  "hotels-hospitality": Building2,
  utilities: Landmark,
  construction: Building2,
  "pulp-paper": Package,
  textile: Package,
  "polymers-plastics": FlaskConical,
  banking: Landmark,
  residential: Building2,
  government: Landmark,
  "solar-renewable": Landmark,
  "telecom-remote": Shield,
  "sports-events": Shield,
};

type IndustriesMegaMenuProps = {
  /** Slim link data built on the server (see buildHeaderNav); already capped at 15. */
  industries: NavIndustry[];
  onClose: () => void;
};

function IndustryItem({
  slug,
  name,
  onClose,
}: {
  slug: string;
  name: string;
  onClose: () => void;
}) {
  const Icon = industryIcons[slug] ?? Building2;

  return (
    <Link
      href={industryHref(slug)}
      onClick={onClose}
      className="group flex gap-3 rounded-[10px] px-2 py-2 transition hover:bg-white/8 focus-visible:bg-white/8"
    >
      <Icon
        size={20}
        strokeWidth={1.75}
        className="mt-0.5 shrink-0 text-white/55 transition group-hover:text-cyan"
      />
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-snug text-white/90 transition group-hover:text-cyan">
          {name}
        </p>
      </div>
    </Link>
  );
}

/** Desktop mega menu is 3 columns x 5 rows = 15 industries (INDUSTRIES_MENU_COUNT). */
export function IndustriesMegaMenu({ industries, onClose }: IndustriesMegaMenuProps) {

  return (
    <div className="relative min-h-0 overflow-visible px-2 pt-5 xl:px-4">
      <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
        Industry
      </p>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <IndustryItem
            key={industry.slug}
            slug={industry.slug}
            name={industry.name}
            onClose={onClose}
          />
        ))}
      </div>

      <div className="mt-2 border-t border-white/10 pt-2 pb-1">
        <Link
          href="/industries"
          onClick={onClose}
          className="text-sm font-semibold text-cyan transition hover:text-white"
        >
          View all industries
        </Link>
      </div>
    </div>
  );
}
