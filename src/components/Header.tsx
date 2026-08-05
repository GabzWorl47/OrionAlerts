"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { solutions, industries, resourceNavItems } from "@/lib/site";
import { SolutionsMegaMenu } from "@/components/SolutionsMegaMenu";
import { IndustriesMegaMenu } from "@/components/IndustriesMegaMenu";
import { ResourcesMenu } from "@/components/ResourcesMenu";

type MegaKey = "solutions" | "industries" | "resources";

const defaultSolutionsMegaId = solutions[0]?.slug ?? "vms";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions", mega: "solutions" as const },
  { label: "Industries", href: "/industries", mega: "industries" as const },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "#", mega: "resources" as const },
  { label: "About Us", href: "/about" },
];

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/" || href === "#") return pathname === "/" && href === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isResourcesActive(pathname: string) {
  return pathname.startsWith("/blogs") || pathname.startsWith("/faqs");
}

function navItemClass(active: boolean) {
  return `nav-link inline-flex items-center gap-1 rounded-[12px] px-3 py-2 text-sm font-medium ${
    active ? "nav-link-active" : ""
  }`;
}

const menuEase = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [activeMegaId, setActiveMegaId] = useState(defaultSolutionsMegaId);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 8);
  });

  useEffect(() => {
    setOpen(false);
    setOpenMega(null);
    setMobileProductsOpen(false);
    setMobileIndustriesOpen(false);
    setMobileResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open || openMega ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, openMega]);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)] shadow-[0_10px_30px_rgba(8,24,42,0.35)]"
          : "border-[var(--nav-border)] bg-[var(--nav-bg)]"
      }`}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="site-header-bar container flex h-[var(--header-h)] items-center gap-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="display text-lg tracking-tight text-white sm:text-xl">
            ORION <span className="text-cyan">Alerts</span>
          </span>
        </Link>

        <nav
          className="mx-auto hidden flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.label} className="flex shrink-0">
                {link.mega === "solutions" ? (
                  <Link
                    href={link.href}
                    className={navItemClass(
                      openMega === "solutions" || pathname.startsWith("/solutions"),
                    )}
                    aria-expanded={openMega === "solutions"}
                    onMouseEnter={() => {
                      setActiveMegaId(defaultSolutionsMegaId);
                      setOpenMega("solutions");
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openMega === "solutions" ? "rotate-180" : ""}`}
                    />
                  </Link>
                ) : link.mega === "industries" ? (
                  <Link
                    href={link.href}
                    className={navItemClass(
                      openMega === "industries" || pathname.startsWith("/industries"),
                    )}
                    aria-expanded={openMega === "industries"}
                    onMouseEnter={() => setOpenMega("industries")}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openMega === "industries" ? "rotate-180" : ""}`}
                    />
                  </Link>
                ) : link.mega === "resources" ? (
                  <button
                    type="button"
                    className={`${navItemClass(
                      openMega === "resources" || isResourcesActive(pathname),
                    )} m-0 cursor-pointer border-0 bg-transparent text-[inherit]`}
                    aria-expanded={openMega === "resources"}
                    aria-haspopup="true"
                    onMouseEnter={() => setOpenMega("resources")}
                    onClick={() =>
                      setOpenMega((current) => (current === "resources" ? null : "resources"))
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openMega === "resources" ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={navItemClass(isNavLinkActive(pathname, link.href))}
                    onMouseEnter={() => setOpenMega(null)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
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
        {openMega ? (
          <motion.div
            key="nav-mega-panel"
            initial={
              reduce
                ? false
                : { opacity: 0, y: -18 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.42,
              ease: menuEase,
              opacity: { duration: 0.3, ease: menuEase },
            }}
            className="absolute inset-x-0 top-full hidden origin-top overflow-visible border-b border-white/10 bg-[#0f1c2e] shadow-[0_28px_70px_rgba(0,0,0,0.4)] lg:block"
            onMouseEnter={() => setOpenMega(openMega)}
          >
            <div className="container py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={openMega}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: menuEase }}
                >
                  {openMega === "solutions" ? (
                    <SolutionsMegaMenu
                      activeId={activeMegaId}
                      onActiveChange={setActiveMegaId}
                      onClose={() => setOpenMega(null)}
                    />
                  ) : openMega === "industries" ? (
                    <IndustriesMegaMenu onClose={() => setOpenMega(null)} />
                  ) : (
                    <ResourcesMenu onClose={() => setOpenMega(null)} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[var(--header-h)] z-40 flex flex-col bg-white lg:hidden"
          >
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="nav-link rounded-[10px] px-2 py-3 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  type="button"
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
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {solutions.map((solution) => (
                        <Link
                          key={solution.slug}
                          href={`/solutions/${solution.slug}`}
                          prefetch
                          className="block rounded-[10px] px-2 py-2.5 text-sm font-medium text-text hover:bg-surface-2 hover:text-blue"
                          onClick={() => {
                            document.body.style.overflow = "";
                            setOpen(false);
                            setMobileProductsOpen(false);
                          }}
                        >
                          {solution.shortName}
                        </Link>
                      ))}
                      <Link
                        href="/solutions"
                        prefetch
                        className="block px-2 py-2.5 text-sm font-semibold text-blue"
                        onClick={() => {
                          document.body.style.overflow = "";
                          setOpen(false);
                          setMobileProductsOpen(false);
                        }}
                      >
                        View all solutions
                      </Link>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <button
                  type="button"
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
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {industries.map((industry) => (
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
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <button
                  type="button"
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
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {resourceNavItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-[10px] px-2 py-2.5 text-sm text-muted-strong hover:text-blue"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {navLinks
                  .filter((l) => !l.mega && l.href !== "/")
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
