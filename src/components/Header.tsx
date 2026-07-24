"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-[#f3f7f9]/90 backdrop-blur-md">
      <div className="container flex h-[var(--header-h)] items-center gap-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="display text-xl tracking-tight text-ink sm:text-2xl">
            Orion<span className="text-signal">Alerts</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`rounded px-2.5 py-2 text-sm font-medium transition xl:px-3 ${
                    pathname.startsWith(link.href)
                      ? "text-signal-deep"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
                {solutionsOpen ? (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="surface min-w-[14rem] rounded-[var(--radius)] p-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded px-3 py-2 text-sm text-ink-soft hover:bg-mist hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-2.5 py-2 text-sm font-medium transition xl:px-3 ${
                  pathname.startsWith(link.href)
                    ? "text-signal-deep"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Button href="/contact" variant="ghost" className="px-3 py-2">
            Connect
          </Button>
          <Button href="/book-demo" className="px-4 py-2.5">
            Book a Demo
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1">
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col">
                <Link
                  href={link.href}
                  className="rounded px-2 py-2 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="rounded px-4 py-1.5 text-sm text-muted"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2" onClick={() => setOpen(false)}>
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/contact" variant="secondary">
                Connect With Us
              </Button>
            </div>
            <p className="mt-3 px-2 text-xs text-muted">{site.email}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
