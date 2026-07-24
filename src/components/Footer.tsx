import Link from "next/link";
import { industries, navLinks, site, solutions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="display text-2xl">
            Orion<span className="text-signal">Alerts</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">{site.tagline}</p>
          <div className="mt-6 space-y-1 text-sm text-white/80">
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <p className="text-white/55">{site.address}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Solutions</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about#team" className="hover:text-white">
                Meet the Team
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Industries</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="hover:text-white">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <Link href="/book-demo" className="font-semibold text-signal hover:text-white">
              Book a Demo →
            </Link>
            <Link href="/contact" className="text-white/75 hover:text-white">
              Connect With Us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Protected with Cloudflare · Rate-limited form submissions · 2FA-ready portals</p>
        </div>
      </div>
    </footer>
  );
}
