"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Cpu,
  LayoutGrid,
  Map,
  Search,
  ShieldCheck,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  getFeatureCards,
  getOverviewCopy,
  megaMenuNavItems,
  PLATFORM_OVERVIEW_ID,
  solutionIcons,
} from "@/lib/mega-menu";

const overviewTiles: { label: string; icon: LucideIcon }[] = [
  { label: "VMS", icon: Video },
  { label: "AI", icon: Cpu },
  { label: "Assets", icon: ShieldCheck },
  { label: "AMC", icon: Wrench },
  { label: "Search", icon: Search },
  { label: "Health", icon: Activity },
  { label: "Alerts", icon: Bell },
  { label: "Maps", icon: Map },
];

type FeatureItem = ReturnType<typeof getFeatureCards>[number];

type SolutionsMegaMenuProps = {
  activeId: string;
  onActiveChange: (id: string) => void;
  onClose: () => void;
};

function FeatureCard({
  feature,
  onClose,
}: {
  feature: FeatureItem;
  onClose: () => void;
}) {
  const Icon = feature.icon;

  return (
    <Link
      href={feature.href}
      prefetch
      onClick={onClose}
      className="group flex w-full items-center justify-between gap-3 rounded-[12px] border border-white/80 bg-white px-3 py-2.5 text-left transition hover:border-cyan/50 hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
    >
      <span className="min-w-0 text-[13px] font-semibold leading-snug text-[#0f172a] group-hover:text-blue">
        {feature.label}
      </span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#e8f4ff] text-blue transition group-hover:bg-blue/15">
        <Icon size={15} />
      </span>
    </Link>
  );
}

function OverviewCard({
  title,
  description,
  href,
  image,
  onClose,
  showPlatformTiles,
}: {
  title: string;
  description: string;
  href: string;
  image?: string;
  onClose: () => void;
  showPlatformTiles?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex h-full flex-col rounded-[16px] border border-white/10 bg-white/95 p-3.5 transition hover:border-cyan/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-[#0b1628]">
        {showPlatformTiles ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_50%_30%,rgba(126,200,255,0.18),transparent_60%)] p-3">
            <div className="grid w-full grid-cols-4 gap-1.5">
              {overviewTiles.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-1 rounded-[8px] bg-white py-2 text-[9px] font-medium text-muted-strong"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-[7px] bg-[#e8f4ff] text-blue">
                    <Icon size={13} strokeWidth={2.2} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        ) : image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="320px"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {title}
            </span>
          </>
        ) : null}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-strong">{description}</p>
    </Link>
  );
}

export function SolutionsMegaMenu({
  activeId,
  onActiveChange,
  onClose,
}: SolutionsMegaMenuProps) {
  const overview = getOverviewCopy(activeId);
  const features = getFeatureCards(activeId);
  const isPlatformOverview = activeId === PLATFORM_OVERVIEW_ID;

  return (
    <div className="relative min-h-0 overflow-visible pl-4 pr-2 xl:pr-4">
      <div className="flex min-h-0 overflow-visible">
        <aside className="w-[224px] shrink-0 py-6 pr-4 xl:w-[244px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Solutions
          </p>
          <ul className="mt-3 space-y-0.5">
            {megaMenuNavItems.map((item) => {
              const active = activeId === item.id;
              const Icon = solutionIcons[item.id] ?? LayoutGrid;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`group -mx-2 flex w-[calc(100%+1rem)] items-center gap-3 rounded-[10px] px-2 py-2 text-left transition hover:bg-white/8 ${
                      active ? "bg-white/8" : ""
                    }`}
                    onMouseEnter={() => onActiveChange(item.id)}
                    onFocus={() => onActiveChange(item.id)}
                    onClick={onClose}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.75}
                      className={`mt-0.5 shrink-0 transition ${
                        active
                          ? "text-cyan"
                          : "text-white/55 group-hover:text-cyan"
                      }`}
                    />
                    <p
                      className={`min-w-0 text-[15px] font-semibold leading-snug transition ${
                        active
                          ? "text-cyan"
                          : "text-white/90 group-hover:text-cyan"
                      }`}
                    >
                      {item.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="flex-1 overflow-y-auto bg-[#0f1c2e] px-5 py-5 xl:px-6">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 lg:flex-row lg:items-start"
          >
            <div className="lg:w-[min(100%,320px)] lg:shrink-0">
              <OverviewCard
                {...overview}
                showPlatformTiles={isPlatformOverview}
                onClose={onClose}
              />
            </div>

            <div className="grid max-h-[min(70vh,560px)] min-w-0 flex-1 grid-cols-1 content-start gap-2 overflow-y-auto sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard
                  key={`${activeId}-${feature.label}`}
                  feature={feature}
                  onClose={onClose}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-2 border-t border-white/10 pt-2 pb-1">
        <Link
          href="/solutions"
          onClick={onClose}
          className="text-sm font-semibold text-cyan transition hover:text-white"
        >
          View all solutions
        </Link>
      </div>
    </div>
  );
}
