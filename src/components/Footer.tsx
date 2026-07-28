import Link from "next/link";
import { site, solutions } from "@/lib/site";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-3.88V8.5z" />
    </svg>
  );
}

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
            <p>{site.phone}</p>
            <p>{site.address}</p>
          </div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-line text-muted hover:border-blue/30 hover:text-blue"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-strong">
            <li><Link href="/about" className="transition hover:text-blue">About</Link></li>
            <li><Link href="/resources#insights" className="transition hover:text-blue">Blog</Link></li>
            <li><Link href="/about#team" className="transition hover:text-blue">Careers</Link></li>
            <li><Link href="/resources#docs" className="transition hover:text-blue">Trust & Security</Link></li>
            <li><Link href="/book-demo" className="transition hover:text-blue">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Solutions</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-strong">
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
            <li><Link href="/resources#faqs" className="transition hover:text-blue">Support</Link></li>
            <li><Link href="/partners" className="transition hover:text-blue">Find Partners</Link></li>
            <li><Link href="/resources#docs" className="transition hover:text-blue">Documentation</Link></li>
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
            <Link href="/resources#docs" className="transition hover:text-blue">Privacy Policy</Link>
            <Link href="/resources#docs" className="transition hover:text-blue">Security</Link>
            <Link href="/resources#docs" className="transition hover:text-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
