"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Bell,
  Cpu,
  Map,
  Search,
  ShieldCheck,
  Video,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  getFeatureCards,
  getOverviewCopy,
  megaMenuNavItems,
  PLATFORM_OVERVIEW_ID,
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
  open,
  onToggle,
}: {
  feature: FeatureItem;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = feature.icon;
  const rootRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, placeLeft: false });

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open || !rootRef.current) return;

    const updatePosition = () => {
      const rect = rootRef.current!.getBoundingClientRect();
      const popoverWidth = 280;
      const gap = 10;
      const spaceRight = window.innerWidth - rect.right;
      const placeLeft = spaceRight < popoverWidth + gap + 16;
      const left = placeLeft
        ? Math.max(16, rect.left - popoverWidth - gap)
        : Math.min(rect.right + gap, window.innerWidth - popoverWidth - 16);
      const top = Math.min(
        Math.max(12, rect.top),
        window.innerHeight - 180,
      );
      setCoords({ top, left, placeLeft });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const inTrigger = rootRef.current?.contains(target);
      const inPopover = popoverRef.current?.contains(target);
      if (!inTrigger && !inPopover) onToggle();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open, onToggle]);

  const popover = mounted
    ? createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              key="feature-popover"
              ref={popoverRef}
              role="dialog"
              aria-label={`${feature.label} preview`}
              initial={{ opacity: 0, x: coords.placeLeft ? 10 : -10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: coords.placeLeft ? 8 : -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              style={{ top: coords.top, left: coords.left }}
              className="fixed z-[80] w-[270px] rounded-[14px] border border-cyan/25 bg-white p-3.5 shadow-[0_18px_44px_rgba(0,0,0,0.28)]"
            >
              <span
                aria-hidden
                className={`absolute top-4 h-2.5 w-2.5 rotate-45 border-cyan/25 bg-white ${
                  coords.placeLeft
                    ? "-right-[5px] border-r border-t"
                    : "-left-[5px] border-b border-l"
                }`}
              />

              <div className="flex items-start justify-between gap-2">
                <p className="min-w-0 text-sm font-bold leading-snug text-[#0f172a]">
                  {feature.label}
                </p>
                <button
                  type="button"
                  onClick={onToggle}
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3f7fc] text-muted transition hover:bg-blue/10 hover:text-blue"
                  aria-label="Close preview"
                >
                  <X size={13} />
                </button>
              </div>

              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-strong">
                {feature.preview}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`group flex w-full items-center justify-between gap-3 rounded-[12px] border bg-white px-3.5 py-3 text-left transition ${
          open
            ? "border-cyan/50 shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
            : "border-white/80 hover:border-cyan/50 hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
        }`}
      >
        <span className="min-w-0 text-sm font-semibold leading-snug text-[#0f172a] group-hover:text-blue">
          {feature.label}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition ${
            open ? "bg-blue text-white" : "bg-[#e8f4ff] text-blue group-hover:bg-blue/15"
          }`}
        >
          <Icon size={16} />
        </span>
      </button>
      {popover}
    </div>
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
  showPlatformTiles: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex h-full min-h-[240px] flex-col overflow-hidden rounded-[16px] border border-white/80 bg-white p-4 transition hover:border-cyan/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
    >
      <p className="text-sm font-semibold text-[#0f172a] group-hover:text-blue">{title}</p>

      <div className="relative mt-3 min-h-[140px] flex-1 overflow-hidden rounded-[12px] border border-line bg-[#f3f7fc]">
        {showPlatformTiles ? (
          <div className="flex h-full flex-col p-3">
            <div className="mb-3 h-7 rounded-[8px] bg-white px-3 text-[10px] leading-7 text-muted">
              Search sites, cameras, alerts…
            </div>
            <div className="grid flex-1 grid-cols-4 gap-2">
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
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  useEffect(() => {
    setOpenFeature(null);
  }, [activeId]);

  return (
    <div className="relative min-h-0 overflow-visible">
      <div className="flex min-h-0 overflow-visible">
        <aside className="w-[240px] shrink-0 py-6 pl-1 pr-4 xl:w-[260px]">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Solutions
          </p>
          <ul className="mt-3 space-y-0.5">
            {megaMenuNavItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`group block w-full rounded-[10px] px-2 py-2 text-left transition hover:bg-white/8 ${
                      active ? "bg-white/8" : ""
                    }`}
                    onMouseEnter={() => onActiveChange(item.id)}
                    onFocus={() => onActiveChange(item.id)}
                    onClick={onClose}
                  >
                    <p
                      className={`text-[15px] font-semibold leading-snug transition ${
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

        <div className="flex-1 overflow-visible bg-[#0f1c2e] px-5 py-5 xl:px-6">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 lg:flex-row lg:items-stretch"
          >
            <div className="lg:w-[min(100%,320px)] lg:shrink-0">
              <OverviewCard
                {...overview}
                showPlatformTiles={isPlatformOverview}
                onClose={onClose}
              />
            </div>

            <div className="grid min-w-0 flex-1 grid-cols-1 content-start gap-2 overflow-visible sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard
                  key={`${activeId}-${feature.label}`}
                  feature={feature}
                  open={openFeature === feature.label}
                  onToggle={() =>
                    setOpenFeature((current) =>
                      current === feature.label ? null : feature.label,
                    )
                  }
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-4 border-t border-white/10 px-2 pt-4 pb-1 xl:px-4">
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
