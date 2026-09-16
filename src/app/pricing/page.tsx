import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "OrionAlerts pricing is scoped per estate. Public list prices are not published; request a guided commercial conversation.",
  pathname: "/pricing",
});

export default function PricingPage() {
  return (
    <PageShell>
      <Section narrow className="pt-14 pb-20">
        <p className="eyebrow">Company</p>
        <h1 className="display mt-3 text-4xl text-text md:text-5xl">Pricing</h1>
        <p className="lede mt-4">
          We do not publish a public price list. Commercial terms depend on camera count, sites,
          modules, and support scope—so every engagement starts with a conversation about your
          estate.
        </p>
        <div className="mt-8 space-y-3 text-[1.0625rem] leading-[1.72] text-muted">
          <p>
            The fastest path to a tailored estimate is a{" "}
            <Link href="/book-demo" className="font-semibold text-blue hover:underline">
              live demo
            </Link>{" "}
            with your operating context.
          </p>
          <p>
            Prefer email first? Reach{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:underline">
              {site.email}
            </a>{" "}
            or use{" "}
            <Link href="/contact" className="font-semibold text-blue hover:underline">
              Contact
            </Link>{" "}
            and note approximate site count and the modules you care about (VMS, AI alerts, health,
            assets, AMC).
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
