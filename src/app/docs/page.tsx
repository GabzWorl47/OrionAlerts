import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Documentation",
  description:
    "Public product documentation is not hosted on this site yet. Use FAQs for common answers or Contact for support.",
  pathname: "/docs",
});

export default function DocsPage() {
  return (
    <PageShell>
      <Section narrow className="pt-14 pb-20">
        <p className="eyebrow">Support</p>
        <h1 className="display mt-3 text-4xl text-text md:text-5xl">Documentation</h1>
        <p className="lede mt-4">
          A public product docs portal is not published on this site yet. Until it ships, use the
          links below for common answers, platform context, or a walkthrough with the team.
        </p>
        <div className="mt-8 space-y-3 text-[1.0625rem] leading-[1.72] text-muted">
          <p>
            For deployment, cameras, detections, and multi-site questions, start with{" "}
            <Link href="/faqs" className="font-semibold text-blue hover:underline">
              FAQs
            </Link>
            .
          </p>
          <p>
            For a platform-level view of how VMS, AI analytics, camera health, asset tracking, and
            AMC management fit together, read about{" "}
            <Link href="/nebula-os" className="font-semibold text-blue hover:underline">
              Nebula OS, our Vision AI operating system
            </Link>
            .
          </p>
          <p>
            Need a walkthrough or implementation help?{" "}
            <Link href="/contact" className="font-semibold text-blue hover:underline">
              Contact
            </Link>{" "}
            the team or{" "}
            <Link href="/book-demo" className="font-semibold text-blue hover:underline">
              book a live demo
            </Link>
            .
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
