"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  getFeatureCards,
  getOverviewCopy,
  megaMenuProducts,
} from "@/lib/mega-menu";

type SolutionsMegaMenuProps = {
  activeId: string;
  onActiveChange: (id: string) => void;
  onClose: () => void;
};

function FeatureCard({
  label,
  href,
  icon: Icon,
  onClose,
}: {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex items-center justify-between rounded-[12px] border border-line/80 bg-white px-3.5 py-2.5 transition hover:border-blue/25 hover:shadow-sm"
    >
      <span className="min-w-0 truncate text-sm font-semibold text-text group-hover:text-blue">{label}</span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-surface-2 text-blue transition group-hover:bg-blue/10">
        <Icon size={16} />
      </span>
    </Link>
  );
}

function OverviewCard({
  title,
  description,
  href,
  onClose,
}: {
  title: string;
  description: string;
  href: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex h-full min-h-[200px] flex-col overflow-hidden rounded-[16px] border border-line bg-white p-4 transition hover:border-blue/25 hover:shadow-md"
    >
      <p className="text-sm font-semibold text-text group-hover:text-blue">{title}</p>
      <div className="mt-3 flex-1 overflow-hidden rounded-[12px] border border-line bg-surface-2/80 p-3">
        <div className="mb-3 h-7 rounded-[8px] bg-white px-3 text-[10px] leading-7 text-muted">
          Search sites, cameras, alerts…
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["VMS", "AI", "Assets", "AMC", "Search", "Health", "Alerts", "Maps"].map((chip) => (
            <div
              key={chip}
              className="flex aspect-square flex-col items-center justify-center rounded-[8px] bg-white text-[9px] font-medium text-muted-strong"
            >
              <span className="mb-1 h-1.5 w-1.5 rounded-full bg-blue/60" />
              {chip}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-strong">{description}</p>
    </Link>
  );
}

export function SolutionsMegaMenu({ activeId, onActiveChange, onClose }: SolutionsMegaMenuProps) {
  const overview = getOverviewCopy(activeId);
  const features = getFeatureCards(activeId);

  return (
    <div className="flex min-h-0">
      <aside className="w-[220px] shrink-0 border-r border-line py-6 pl-1 pr-4 xl:w-[240px]">
        <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
          Solutions
        </p>
        <ul className="mt-2 space-y-0.5">
          {megaMenuProducts.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`block w-full rounded-[8px] px-3 py-2.5 text-left text-[15px] font-semibold transition ${
                  activeId === item.id
                    ? "text-cyan"
                    : "text-text hover:bg-surface-2/80"
                }`}
                onMouseEnter={() => onActiveChange(item.id)}
                onFocus={() => onActiveChange(item.id)}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 bg-[#f6f8fb] px-5 py-5 xl:px-6">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-2 lg:flex-row lg:items-start"
        >
          <div className="lg:w-[min(100%,320px)] lg:shrink-0">
            <OverviewCard {...overview} onClose={onClose} />
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-1.5 sm:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={`${activeId}-${feature.label}`} {...feature} onClose={onClose} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
