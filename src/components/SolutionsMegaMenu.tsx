"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  Activity,
  Cpu,
  LayoutGrid,
  Package,
  Search,
  Shield,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { featureDeepLink } from "@/lib/feature-anchors";
import { solutionHref, solutionIcons, type NavSolution } from "@/lib/mega-menu";

/** Feature cards cycle through these icons by position. */
const featureIcons: LucideIcon[] = [Search, Cpu, Video, Shield, Activity, LayoutGrid, Wrench, Package];

type SolutionsMegaMenuProps = {
  /** Slim link data built on the server (see buildHeaderNav). */
  solutions: NavSolution[];
  activeId: string;
  onActiveChange: (id: string) => void;
  onClose: () => void;
  /**
   * The menu is server-rendered (closed) on every page so crawlers see its
   * links. Its overview image is only rendered once the menu has been opened,
   * so a closed menu never costs an image download.
   */
  showMedia?: boolean;
};

function FeatureCard({
  label,
  href,
  icon: Icon,
  onClose,
}: {
  label: string;
  href: string;
  icon: LucideIcon;
  onClose: () => void;
}) {

  return (
    <Link
      href={href}
      prefetch
      onClick={onClose}
      className="group flex w-full items-center justify-between gap-3 rounded-[12px] border border-white/80 bg-white px-3 py-2.5 text-left transition hover:border-cyan/50 hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)] focus-visible:border-cyan/50"
    >
      <span className="min-w-0 text-[13px] font-semibold leading-snug text-[#0f172a] group-hover:text-blue">
        {label}
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
  showMedia = true,
}: {
  title: string;
  description: string;
  href: string;
  image?: string;
  onClose: () => void;
  showMedia?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex h-full flex-col rounded-[16px] border border-white/10 bg-white/95 p-3.5 transition hover:border-cyan/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-[#0b1628]">
        {image ? (
          <>
            {showMedia ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="320px"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : null}
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
  solutions,
  activeId,
  onActiveChange,
  onClose,
  showMedia = true,
}: SolutionsMegaMenuProps) {
  const active = solutions.find((solution) => solution.slug === activeId) ?? solutions[0];

  return (
    <div className="relative min-h-0 overflow-visible pl-4 pr-2 xl:pr-4">
      <div className="flex min-h-0 overflow-visible">
        <aside className="w-[224px] shrink-0 py-6 pr-4 xl:w-[244px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Solutions
          </p>
          <ul className="mt-3 space-y-0.5">
            {solutions.map((item) => {
              const isActive = active?.slug === item.slug;
              const Icon = solutionIcons[item.slug] ?? LayoutGrid;
              return (
                <li key={item.slug}>
                  <Link
                    href={solutionHref(item.slug)}
                    className={`group -mx-2 flex w-[calc(100%+1rem)] items-center gap-3 rounded-[10px] px-2 py-2 text-left transition hover:bg-white/8 ${
                      isActive ? "bg-white/8" : ""
                    }`}
                    onMouseEnter={() => onActiveChange(item.slug)}
                    onFocus={() => onActiveChange(item.slug)}
                    onClick={onClose}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.75}
                      className={`mt-0.5 shrink-0 transition ${
                        isActive
                          ? "text-cyan"
                          : "text-white/55 group-hover:text-cyan"
                      }`}
                    />
                    <p
                      className={`min-w-0 text-[15px] font-semibold leading-snug transition ${
                        isActive
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
          {active ? (
            <m.div
              key={active.slug}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 lg:flex-row lg:items-start"
            >
              <div className="lg:w-[min(100%,320px)] lg:shrink-0">
                <OverviewCard
                  title={active.label}
                  description={active.headline}
                  href={solutionHref(active.slug)}
                  image={active.image}
                  showMedia={showMedia}
                  onClose={onClose}
                />
              </div>

              <div className="grid max-h-[min(70vh,560px)] min-w-0 flex-1 grid-cols-1 content-start gap-2 overflow-y-auto sm:grid-cols-2">
                {active.features.map((feature, index) => (
                  <FeatureCard
                    key={`${active.slug}-${feature}`}
                    label={feature}
                    href={featureDeepLink(active.slug, feature)}
                    icon={featureIcons[index % featureIcons.length]}
                    onClose={onClose}
                  />
                ))}
              </div>
            </m.div>
          ) : null}
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
