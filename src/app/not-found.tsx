import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button, Section } from "@/components/ui";

export const metadata: Metadata = {
  // Next adds `noindex` to 404 responses automatically.
  title: "Page not found",
};

const RECOVERY_LINKS = [
  { href: "/solutions", label: "Solutions", description: "VMS, AI alerts, health monitoring and more" },
  { href: "/industries", label: "Industries", description: "How OrionAlerts fits your sector" },
  { href: "/faqs", label: "FAQs", description: "Answers to common questions" },
  { href: "/contact", label: "Contact", description: "Reach the right OrionAlerts team" },
  { href: "/blogs", label: "Blog", description: "Articles on video operations" },
] as const;

export default function NotFound() {
  return (
    <PageShell>
      <Section narrow>
        {/* Inline heading: SectionHeading renders an h2, and this page needs one h1. */}
        <div className="mx-auto mb-[var(--section-heading-gap)] max-w-3xl text-center">
          <p className="eyebrow mb-3">404</p>
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
            Page not found
          </h1>
          <p className="description mx-auto mt-4">
            This page may have moved. Try one of these instead, or{" "}
            <Link href="/contact" className="text-blue underline decoration-cyan/60 underline-offset-4">
              contact us
            </Link>{" "}
            if you followed a broken link.
          </p>
        </div>

        <nav aria-label="Popular pages" className="mx-auto max-w-2xl">
          <ul className="grid gap-3 sm:grid-cols-2">
            {RECOVERY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full items-start justify-between gap-3 rounded-[16px] border border-line bg-surface p-4 transition hover:border-blue/30"
                >
                  <span>
                    <span className="block font-semibold text-text group-hover:text-blue">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{link.description}</span>
                  </span>
                  <ArrowRight aria-hidden size={16} className="mt-1 shrink-0 text-blue" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
        </div>
      </Section>
    </PageShell>
  );
}
