"use client";

import Link from "next/link";
import { openCookieSettings } from "@/components/consent/ConsentProvider";
import { site, solutions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
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
            <p>{site.address}</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-strong">
            <li><Link href="/about" className="transition hover:text-blue">About</Link></li>
            <li><Link href="/blogs" className="transition hover:text-blue">Blog</Link></li>
            <li><Link href="/careers" className="transition hover:text-blue">Careers</Link></li>
            <li><Link href="/security" className="transition hover:text-blue">Trust & Security</Link></li>
            <li><Link href="/pricing" className="transition hover:text-blue">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Solutions</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-strong">
            <li><Link href="/nebula-os" className="transition hover:text-blue">Nebula OS</Link></li>
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="transition hover:text-blue">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Support</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-strong">
            <li><Link href="/contact" className="transition hover:text-blue">Contact</Link></li>
            <li><Link href="/faqs" className="transition hover:text-blue">Support</Link></li>
            <li><Link href="/partners" className="transition hover:text-blue">Find Partners</Link></li>
            <li><Link href="/docs" className="transition hover:text-blue">Documentation</Link></li>
            <li>
              <Link href="/book-demo" className="font-semibold text-cyan transition hover:text-blue">
                Live Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ORION Alerts. All rights reserved.</p>
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
            <Link href="/security" className="transition hover:text-blue">Security</Link>
            <Link href="/terms" className="transition hover:text-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
