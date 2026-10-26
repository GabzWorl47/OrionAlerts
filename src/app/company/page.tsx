import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { LinkPills } from "@/components/content/LinkCards";
import { DeploymentModels } from "@/components/diagrams/DeploymentModels";
import { aboutPageJsonLd } from "@/components/content/structured-data";
import { companyFacts, companyPage, COMPANY_PATH } from "@/lib/company";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: companyPage.seoTitle,
  description: companyPage.seoDescription,
  pathname: COMPANY_PATH,
});

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "OrionAlerts at a glance", path: COMPANY_PATH },
];

export default function CompanyPage() {
  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(BREADCRUMBS)} />
      <JsonLdScript
        data={aboutPageJsonLd({
          name: companyPage.title,
          description: companyPage.seoDescription,
          path: COMPANY_PATH,
        })}
      />

      <ContentHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Company fact sheet"
        title={companyPage.title}
        answer={site.entityStatement}
        answerLabel="What is OrionAlerts?"
      />

      <Section compact>
        {/*
          Rows intentionally omitted until confirmed by the team (see src/lib/company.ts):
          founding year, headcount, leadership, customers / case studies,
          certifications with scope, public phone number, social profiles.
        */}
        <h2 className="text-[clamp(1.35rem,2.6vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
          Key facts
        </h2>
        <dl className="mt-6 overflow-hidden rounded-[28px] border border-blue/10 bg-white/70 shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)]">
          {companyFacts.map((fact) => (
            <div
              key={fact.id}
              id={fact.id}
              className="grid gap-1.5 border-b border-blue/[0.07] px-5 py-5 last:border-b-0 sm:px-7 md:grid-cols-[14rem_1fr] md:gap-8"
            >
              <dt className="text-sm font-semibold leading-snug text-text">{fact.label}</dt>
              <dd className="text-[0.95rem] leading-relaxed text-muted-strong">
                <p>{fact.value}</p>
                {fact.items?.length ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {fact.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {fact.links?.length ? (
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                    {fact.links.map((link) => (
                      <li key={link.href}>
                        {link.href.startsWith("mailto:") ? (
                          <a
                            href={link.href}
                            className="font-medium text-blue underline decoration-cyan/60 underline-offset-4 hover:decoration-blue"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="font-medium text-blue underline decoration-cyan/60 underline-offset-4 hover:decoration-blue"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
        <figure className="mt-8">
          <figcaption className="mb-4 text-sm font-semibold text-text">
            Deployment models at a glance{" "}
            <Link
              href="/docs#deployment"
              className="font-medium text-blue underline decoration-cyan/60 underline-offset-4 hover:decoration-blue"
            >
              (details)
            </Link>
          </figcaption>
          <DeploymentModels idPrefix="company-deploy" />
        </figure>
      </Section>

      <Section compact className="pt-0">
        <div className="panel-sm p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">More about OrionAlerts</h2>
          <div className="mt-4">
            <LinkPills
              items={[
                { href: "/about", label: "About us" },
                { href: "/nebula-os", label: "Nebula OS" },
                { href: "/solutions", label: "Solutions" },
                { href: "/docs", label: "Documentation" },
                { href: "/faqs", label: "FAQs" },
                { href: "/glossary", label: "Glossary" },
                { href: "/security", label: "Security" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Talk to the OrionAlerts team"
          lede="Questions about deployment, data handling or partnerships? Reach the right team directly."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Contact Us"
        />
      </Section>
    </PageShell>
  );
}
