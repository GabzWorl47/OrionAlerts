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
import { solutions } from "@/lib/site";
import { MagneticButton } from "@/components/MagneticButton";

const links = [
  {
    label: "Solutions",
    href: "/#solutions",
    children: solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.shortName })),
  },
  { href: "/#industries", label: "Industries" },
  { href: "/#partners", label: "Partners" },
  { href: "/#resources", label: "Resources" },
  { href: "/about", label: "About Us" },
];

const menuEase = [0.22, 1, 0.36, 1] as const;

const panelVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const itemVariants = {
  closed: { opacity: 0, x: 28 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.45, ease: menuEase },
  }),
};

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 16);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  let itemIndex = 0;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: menuEase }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-[var(--header-h)] items-center gap-4">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: menuEase, delay: 0.1 }}
        >
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <span className="display text-lg tracking-tight text-text sm:text-xl">
              ORION <span className="text-cyan">Alerts</span>
            </span>
          </Link>
        </motion.div>

        <nav className="mx-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link, i) =>
            link.children ? (
              <motion.div
                key={link.label}
                initial={reduce ? false : { opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: menuEase, delay: 0.2 + i * 0.07 }}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  className="nav-link inline-flex items-center gap-1 rounded-[12px] px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                  <ChevronDown size={14} />
                </Link>
                <AnimatePresence>
                  {productsOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 pt-2"
                    >
                      <div className="min-w-[14rem] rounded-[16px] border border-line bg-surface p-2 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-[12px] px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-blue"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key={link.href}
                initial={reduce ? false : { opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: menuEase, delay: 0.2 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  className={`nav-link rounded-[12px] px-3 py-2 text-sm font-medium ${
                    pathname.startsWith(link.href.replace("/#", "/")) ? "nav-link-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ),
          )}
        </nav>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: menuEase, delay: 0.2 + links.length * 0.07 }}
          className="ml-auto hidden lg:flex"
        >
          <MagneticButton href="/book-demo" className="px-4 py-2.5">
            Book a Demo
          </MagneticButton>
        </motion.div>

        <button
          type="button"
          className="relative z-[60] ml-auto inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-line bg-surface text-text lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-[var(--header-h)] z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={reduce ? false : "closed"}
              animate="open"
              exit="closed"
              variants={panelVariants}
              transition={{ duration: 0.42, ease: menuEase }}
              className="fixed right-0 top-[var(--header-h)] z-50 h-[calc(100svh-var(--header-h))] w-full max-w-sm border-l border-line bg-bg shadow-[-20px_0_60px_rgba(0,0,0,0.45)] lg:hidden"
            >
              <div className="container flex h-full flex-col gap-1 overflow-y-auto py-4">
                {links.map((link) => {
                  const parentIdx = itemIndex++;
                  return (
                    <div key={link.label ?? link.href}>
                      <motion.div
                        custom={parentIdx}
                        variants={reduce ? undefined : itemVariants}
                        initial={reduce ? false : "closed"}
                        animate="open"
                      >
                        <Link
                          href={link.href}
                          className="block rounded-[12px] px-2 py-2.5 text-base font-medium text-text transition hover:text-blue"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                      {link.children?.map((child) => {
                        const childIdx = itemIndex++;
                        return (
                          <motion.div
                            key={child.href}
                            custom={childIdx}
                            variants={reduce ? undefined : itemVariants}
                            initial={reduce ? false : "closed"}
                            animate="open"
                          >
                            <Link
                              href={child.href}
                              className="block rounded-[12px] px-4 py-1.5 text-sm text-muted transition hover:text-blue"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  );
                })}

                <motion.div
                  custom={itemIndex++}
                  variants={reduce ? undefined : itemVariants}
                  initial={reduce ? false : "closed"}
                  animate="open"
                  className="mt-3 border-t border-line pt-4"
                  onClick={() => setOpen(false)}
                >
                  <MagneticButton href="/book-demo">Book a Demo</MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
