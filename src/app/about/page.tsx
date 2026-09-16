import type { Metadata } from "next";
import {
  AboutContactCta,
  AboutHero,
  AboutWhoWeAre,
  AboutWhyWeExist,
} from "@/components/AboutPageSections";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "OrionAlerts is an enterprise AI video intelligence platform that turns existing CCTV into operational insight for security and safety teams.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      {/* Leadership photos and bios publish only after named profiles are approved. */}
      <AboutWhoWeAre />
      <AboutWhyWeExist />
      <AboutContactCta />
    </PageShell>
  );
}
