"use client";

import Link from "next/link";
import { openCookieSettings } from "@/components/consent/ConsentProvider";
import { legalMeta } from "@/lib/legal";
import { industries, site, solutions } from "@/lib/site";

/**
 * Sectors linked from every page's footer. Weakly linked pages (textile,
 * healthcare, banking) are included on purpose; the rest are the largest
 * buyer groups. Labels come from each industry's short card label.
 */
const FOOTER_INDUSTRY_SLUGS = [
  "manufacturing",
  "logistics",
  "pharma",
  "healthcare",
  "banking",
  "retail-shopping",
  "data-centres",
  "education-campuses",
  "construction",
  "textile",
];

const footerIndustries = FOOTER_INDUSTRY_SLUGS.map((slug) =>
  industries.find((industry) => industry.slug === slug),
).filter((industry): industry is (typeof industries)[number] => Boolean(industry));

const resourceLinks = [
  { href: "/blogs", label: "Blog" },
  { href: "/glossary", label: "Glossary" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/compare", label: "Compare" },
  { href: "/docs", label: "Docs" },
  { href: "/company", label: "Company facts" },
];

const headingClass = "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted";
const listClass = "mt-4 space-y-2 text-sm text-muted-strong";
const linkClass = "transition hover:text-blue";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-7">
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <p className="display text-2xl text-text">
            ORION <span className="text-cyan">Alerts</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted">{site.tagline}</p>
          <div className="mt-5 space-y-1 text-sm text-muted">
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-blue">
                {site.email}
              </a>
            </p>
            {site.phone ? <p>{site.phone}</p> : null}
            <p className="max-w-sm">{site.address}</p>
          </div>
        </div>

        <div>
          <p className={headingClass}>Solutions</p>
          <ul className={listClass}>
            <li><Link href="/nebula-os" className={linkClass}>Nebula OS</Link></li>
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className={linkClass}>
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headingClass}>Industries</p>
          <ul className={listClass}>
            {footerIndustries.map((industry) => (
              <li key={industry.slug}>
                <Link href={`/industries/${industry.slug}`} className={linkClass}>
                  {industry.cardLabel ?? industry.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/industries" className="font-semibold text-blue transition hover:text-cyan">
                All industries
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={headingClass}>Resources</p>
          <ul className={listClass}>
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headingClass}>Company</p>
          <ul className={listClass}>
            <li><Link href="/about" className={linkClass}>About</Link></li>
            <li><Link href="/careers" className={linkClass}>Careers</Link></li>
            <li><Link href="/security" className={linkClass}>Trust & Security</Link></li>
            <li><Link href="/pricing" className={linkClass}>Pricing</Link></li>
          </ul>
        </div>

        <div>
          <p className={headingClass}>Support</p>
          <ul className={listClass}>
            <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            <li><Link href="/faqs" className={linkClass}>FAQs</Link></li>
            <li><Link href="/partners" className={linkClass}>Partner program</Link></li>
            <li>
              <Link href="/book-demo" className="font-semibold text-cyan transition hover:text-blue">
                Book a demo
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, a product of {legalMeta.controllerLegalName}{" "}
            All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition hover:text-blue">Privacy Policy</Link>
            <Link href="/cookies" className="transition hover:text-blue">Cookie Notice</Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="transition hover:text-blue"
            >
              Cookie Settings
            </button>
            <Link href="/terms" className="transition hover:text-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
