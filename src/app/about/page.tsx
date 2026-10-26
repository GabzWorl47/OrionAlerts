import type { Metadata } from "next";
import {
  AboutContactCta,
  AboutFacts,
  AboutFaq,
  AboutHero,
  AboutWhoWeAre,
  AboutWhyWeExist,
} from "@/components/AboutPageSections";
import { PageShell } from "@/components/PageShell";
import { aboutFaqs } from "@/lib/about";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import { breadcrumbJsonLd, faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const ABOUT_DESCRIPTION =
  "OrionAlerts is an AI video analytics and VMS platform by Global Ace Technology Pvt. Ltd., Mumbai. See who we are, who we serve and how we work.";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us: AI Video Analytics Company, Mumbai",
  description: ABOUT_DESCRIPTION,
  pathname: "/about",
});

/** `AboutPage` pointing at the one Organization node shipped by the root layout. */
function aboutPageJsonLd() {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${site.name}`,
    description: ABOUT_DESCRIPTION,
    url: `${origin}/about`,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": `${origin}/#organization` },
    mainEntity: { "@id": `${origin}/#organization` },
  };
}

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLdScript data={aboutPageJsonLd()} />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <JsonLdScript data={faqPageJsonLd(aboutFaqs)} />
      <AboutHero />
      {/* Leadership photos and bios publish only after named profiles are approved. */}
      <AboutWhoWeAre />
      <AboutWhyWeExist />
      <AboutFacts />
      <AboutFaq items={aboutFaqs} />
      <AboutContactCta />
    </PageShell>
  );
}
