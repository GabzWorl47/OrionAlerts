"use client";

import Link from "next/link";
import {
  AnimatePresence,
  m,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent, type ReactNode } from "react";
import { solutions, industries } from "@/lib/site";
import { featureDeepLink } from "@/lib/feature-anchors";
import {
  RESOURCES_HUB_HREF,
  resourceMenuItems,
  resourceRoutePrefixes,
} from "@/lib/mega-menu";
import { SolutionsMegaMenu } from "@/components/SolutionsMegaMenu";
import { IndustriesMegaMenu } from "@/components/IndustriesMegaMenu";
import { ResourcesMenu } from "@/components/ResourcesMenu";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

type MegaKey = "solutions" | "industries" | "resources";

type NavLinkItem = { label: string; href: string; mega?: MegaKey };

const defaultSolutionsMegaId = solutions[0]?.slug ?? "vms";

// No "Home" item: the logo links home.
const navLinks: NavLinkItem[] = [
  { label: "Solutions", href: "/solutions", mega: "solutions" },
  { label: "Industries", href: "/industries", mega: "industries" },
  { label: "Nebula OS", href: "/nebula-os" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: RESOURCES_HUB_HREF, mega: "resources" },
  { label: "About", href: "/about" },
];

function matchesRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return matchesRoute(pathname, href);
}

function isMegaSectionActive(key: MegaKey, pathname: string) {
  if (key === "resources") {
    return resourceRoutePrefixes.some((prefix) => matchesRoute(pathname, prefix));
  }
  return matchesRoute(pathname, `/${key}`);
}

function navItemClass(active: boolean) {
  return `nav-link inline-flex items-center gap-1 rounded-[12px] px-3 py-2 text-sm font-medium ${
    active ? "nav-link-active" : ""
  }`;
}

/**
 * Desktop mega-menu panel. Always rendered (so its links are in the server
 * HTML for crawlers) and hidden with `visibility` + `inert` while closed, which
 * also keeps closed panels out of the tab order and the accessibility tree.
 * It sits in the DOM right after its trigger, so Tab moves from the trigger
 * into the open panel. Positioned against the fixed header.
 */
function MegaPanel({
  id,
  label,
  open,
  children,
}: {
  id: string;
  label: string;
  open: boolean;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      role="region"
      aria-label={label}
      inert={!open}
      // Visibility flips instantly on open (so Tab can enter the panel straight
      // away) and only after the fade on close.
      className={`absolute inset-x-0 top-full hidden origin-top overflow-visible border-b border-white/10 bg-[#0f1c2e] shadow-[0_28px_70px_rgba(0,0,0,0.4)] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:block ${
        open
          ? "visible translate-y-0 opacity-100 transition-[opacity,transform]"
          : "pointer-events-none invisible -translate-y-3 opacity-0 transition-[opacity,transform,visibility]"
      }`}
    >
      <div className="container py-2">{children}</div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const reduce = useSafeReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [activeMegaId, setActiveMegaId] = useState(defaultSolutionsMegaId);
  // The solutions panel's overview image loads only after the menu is first opened.
  const [solutionsMediaReady, setSolutionsMediaReady] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileSolutionSlug, setMobileSolutionSlug] = useState<string | null>(null);
  const triggerRefs = useRef<Partial<Record<MegaKey, HTMLAnchorElement | null>>>({});
  // Set when Escape hands focus back to a trigger, so its onFocus doesn't reopen the menu.
  const skipFocusOpen = useRef(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 8);
  });

  // Reset transient menu/drawer state when the route changes.
  // Adjusted during render (React's official "adjusting state when a
  // prop changes" pattern) instead of an effect. Refs can't be read or
  // written during render, so the previous pathname is tracked in state.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setOpenMega(null);
    setMobileProductsOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
    setMobileSolutionSlug(null);
  }

  useEffect(() => {
    // Only lock scroll for the mobile drawer. Locking for mega menus
    // removes the scrollbar and can fire header mouseleave (menu flashes closed).
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes an open mega menu and, if focus was inside it, returns focus
  // to the menu's trigger.
  useEffect(() => {
    if (!openMega) return;
    const key = openMega;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMega(null);
      const trigger = triggerRefs.current[key];
      const item = trigger?.parentElement;
      if (trigger && item?.contains(document.activeElement)) {
        skipFocusOpen.current = document.activeElement !== trigger;
        trigger.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMega]);

  function openMenu(key: MegaKey) {
    if (key === "solutions") {
      setActiveMegaId(defaultSolutionsMegaId);
      setSolutionsMediaReady(true);
    }
    setOpenMega(key);
  }

  function closeMenus() {
    setOpenMega(null);
  }

  /** Close a menu when keyboard focus moves to something outside its nav item. */
  function handleMegaItemBlur(key: MegaKey, event: FocusEvent<HTMLLIElement>) {
    const next = event.relatedTarget as Node | null;
    // `null` means focus left the document or went to a non-focusable area
    // (e.g. a click on the panel background) — leave that to mouseleave.
    if (!next || event.currentTarget.contains(next)) return;
    setOpenMega((current) => (current === key ? null : current));
  }

  function renderMegaPanel(key: MegaKey) {
    if (key === "solutions") {
      return (
        <SolutionsMegaMenu
          activeId={activeMegaId}
          onActiveChange={setActiveMegaId}
          onClose={closeMenus}
          showMedia={solutionsMediaReady}
        />
      );
    }
    if (key === "industries") return <IndustriesMegaMenu onClose={closeMenus} />;
    return <ResourcesMenu onClose={closeMenus} />;
  }

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)] shadow-[0_10px_30px_rgba(8,24,42,0.35)]"
          : "border-[var(--nav-border)] bg-[var(--nav-bg)]"
      }`}
      onMouseLeave={closeMenus}
    >
      <div className="site-header-bar container flex h-[var(--header-h)] items-center gap-6">
        <Link href="/" className="shrink-0" aria-label="OrionAlerts home" onClick={() => setOpen(false)}>
          <span className="display text-lg tracking-tight text-white sm:text-xl">
            ORION <span className="text-cyan">Alerts</span>
          </span>
        </Link>

        <nav
          className="mx-auto hidden flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const mega = link.mega;
              if (!mega) {
                return (
                  <li key={link.label} className="flex shrink-0">
                    <Link
                      href={link.href}
                      className={navItemClass(isNavLinkActive(pathname, link.href))}
                      onMouseEnter={closeMenus}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = openMega === mega;
              const panelId = `mega-panel-${mega}`;
              return (
                <li
                  key={link.label}
                  className="flex shrink-0"
                  onBlur={(event) => handleMegaItemBlur(mega, event)}
                >
                  <Link
                    ref={(node) => {
                      triggerRefs.current[mega] = node;
                    }}
                    href={link.href}
                    className={navItemClass(isOpen || isMegaSectionActive(mega, pathname))}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={panelId}
                    onMouseEnter={() => openMenu(mega)}
                    onFocus={() => {
                      if (skipFocusOpen.current) {
                        skipFocusOpen.current = false;
                        return;
                      }
                      openMenu(mega);
                    }}
                    onClick={(e) => {
                      // First click opens the submenu; second click (while open) navigates.
                      if (!isOpen) {
                        e.preventDefault();
                        openMenu(mega);
                      }
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      aria-hidden
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  <MegaPanel id={panelId} label={`${link.label} menu`} open={isOpen}>
                    {renderMegaPanel(mega)}
                  </MegaPanel>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-[8px] border border-cyan/40 bg-cyan px-4 py-2.5 text-sm font-semibold !text-[#0c2238] shadow-[0_0_24px_rgba(48,227,255,0.28)] transition-colors hover:bg-white hover:!text-[#0c2238]"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[var(--header-h)] z-40 flex flex-col bg-white lg:hidden"
          >
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  aria-expanded={mobileProductsOpen}
                  className="nav-link flex w-full items-center justify-between rounded-[10px] px-2 py-3 text-left text-base font-medium"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                >
                  Solutions
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen ? (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {solutions.map((solution) => {
                        const expanded = mobileSolutionSlug === solution.slug;
                        return (
                          <div key={solution.slug} className="border-b border-line/60 last:border-b-0">
                            <div className="flex items-center gap-1">
                              <Link
                                href={`/solutions/${solution.slug}`}
                                prefetch
                                className="min-w-0 flex-1 rounded-[10px] px-2 py-2.5 text-sm font-medium text-text hover:bg-surface-2 hover:text-blue"
                                onClick={() => {
                                  document.body.style.overflow = "";
                                  setOpen(false);
                                  setMobileProductsOpen(false);
                                  setMobileSolutionSlug(null);
                                }}
                              >
                                {solution.shortName}
                              </Link>
                              <button
                                type="button"
                                aria-expanded={expanded}
                                aria-label={`${expanded ? "Hide" : "Show"} ${solution.shortName} capabilities`}
                                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-muted hover:bg-surface-2 hover:text-blue"
                                onClick={() =>
                                  setMobileSolutionSlug((current) =>
                                    current === solution.slug ? null : solution.slug,
                                  )
                                }
                              >
                                <ChevronDown
                                  size={16}
                                  className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                                />
                              </button>
                            </div>
                            <AnimatePresence>
                              {expanded ? (
                                <m.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden pb-2 pl-2"
                                >
                                  {solution.features.map((feature) => (
                                    <Link
                                      key={feature.title}
                                      href={featureDeepLink(solution.slug, feature.title)}
                                      prefetch
                                      className="block rounded-[10px] px-2 py-2 text-[13px] font-medium leading-snug text-muted-strong hover:bg-surface-2 hover:text-blue"
                                      onClick={() => {
                                        document.body.style.overflow = "";
                                        setOpen(false);
                                        setMobileProductsOpen(false);
                                        setMobileSolutionSlug(null);
                                      }}
                                    >
                                      {feature.title}
                                    </Link>
                                  ))}
                                </m.div>
                              ) : null}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                      <Link
                        href="/solutions"
                        prefetch
                        className="block px-2 py-2.5 text-sm font-semibold text-blue"
                        onClick={() => {
                          document.body.style.overflow = "";
                          setOpen(false);
                          setMobileProductsOpen(false);
                          setMobileSolutionSlug(null);
                        }}
                      >
                        View all solutions
                      </Link>
                    </m.div>
                  ) : null}
                </AnimatePresence>

                <button
                  type="button"
                  aria-expanded={mobileIndustriesOpen}
                  className="nav-link flex w-full items-center justify-between rounded-[10px] px-2 py-3 text-left text-base font-medium"
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                >
                  Industries
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen ? (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {industries.slice(0, 5).map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="block rounded-[10px] px-2 py-2.5 text-sm text-muted-strong hover:text-blue"
                          onClick={() => setOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                      <Link
                        href="/industries"
                        className="block px-2 py-2.5 text-sm font-semibold text-blue"
                        onClick={() => setOpen(false)}
                      >
                        View all industries
                      </Link>
                    </m.div>
                  ) : null}
                </AnimatePresence>

                <button
                  type="button"
                  aria-expanded={mobileResourcesOpen}
                  className="nav-link flex w-full items-center justify-between rounded-[10px] px-2 py-3 text-left text-base font-medium"
                  onClick={() => setMobileResourcesOpen((v) => !v)}
                >
                  Resources
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen ? (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {resourceMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-[10px] px-2 py-2.5 text-sm text-muted-strong hover:text-blue"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </m.div>
                  ) : null}
                </AnimatePresence>

                {navLinks
                  .filter((l) => !l.mega)
                  .map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`nav-link block rounded-[10px] px-2 py-3 text-base font-medium ${
                        isNavLinkActive(pathname, link.href) ? "nav-link-active" : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>

            <div className="border-t border-line px-4 py-5">
              <Link
                href="/book-demo"
                className="flex w-full items-center justify-center rounded-[8px] border border-cyan/40 bg-cyan py-3 text-sm font-semibold !text-[#0c2238] shadow-[0_0_24px_rgba(48,227,255,0.28)] transition-colors hover:bg-white hover:!text-[#0c2238]"
                onClick={() => setOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
