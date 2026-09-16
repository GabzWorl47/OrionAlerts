import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { MagneticButton } from "@/components/MagneticButton";
import { CtaBand, Section } from "@/components/ui";
import { HashScroll } from "@/components/HashScroll";
import { NebulaArchitecture } from "@/components/nebula/NebulaArchitecture";
import { NebulaAudiences } from "@/components/nebula/NebulaAudiences";
import { NebulaBenefits } from "@/components/nebula/NebulaBenefits";
import { NebulaComparison } from "@/components/nebula/NebulaComparison";
import { NebulaDeployment } from "@/components/nebula/NebulaDeployment";
import { NebulaFaq } from "@/components/nebula/NebulaFaq";
import { NebulaIntro } from "@/components/nebula/NebulaIntro";
import { NebulaModules } from "@/components/nebula/NebulaModules";
import { NebulaProblem } from "@/components/nebula/NebulaProblem";
import { TechnologyChips } from "@/components/nebula/TechnologyChips";
import {
  nebulaFaqs,
  nebulaHeroPillars,
  nebulaSectionCopy,
} from "@/lib/nebula-os";
import { buildPageMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  JsonLdScript,
  softwareApplicationJsonLd,
} from "@/lib/jsonld";

const PAGE_PATH = "/nebula-os";

const META_TITLE = "Nebula OS — Vision AI Operating System";

const META_DESCRIPTION =
  "Nebula OS runs video management, AI video analytics, camera health, assets and AMC as one Linux-based operating system for your camera estate.";

export const metadata: Metadata = buildPageMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  pathname: PAGE_PATH,
  imageAlt: "Nebula OS — the Vision AI operating system from OrionAlerts",
  ogTitle: "Nebula OS — one operating system for video, AI and camera health",
  ogDescription:
    "The Vision AI operating system behind OrionAlerts: VMS, AI analytics, camera health monitoring, asset tracking and AMC as modules of one platform.",
});

export default function NebulaOsPage() {
  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Nebula OS", path: PAGE_PATH },
          ])}
        />
        <JsonLdScript
          data={softwareApplicationJsonLd({
            name: "Nebula OS",
            description: META_DESCRIPTION,
            path: PAGE_PATH,
            image: "/Images/nebula.png",
          })}
        />
        <JsonLdScript
          data={faqPageJsonLd(
            nebulaFaqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            })),
          )}
        />
        <HashScroll />

        {/* ---------------------------------------------------------- */}
        {/* Hero + architecture                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="relative overflow-hidden border-b border-[rgba(12,34,56,0.08)] bg-[#dfe9f2] pt-14 pb-16 md:pt-16 md:pb-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(126,200,255,0.28),transparent_48%),radial-gradient(ellipse_at_85%_90%,rgba(12,34,56,0.08),transparent_50%)]"
            aria-hidden
          />
          <div className="relative mx-auto w-[min(100%-2.5rem,96rem)] sm:w-[min(100%-3rem,96rem)]">
            <header className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">{nebulaSectionCopy.eyebrow}</p>
              <h1 className="text-balance text-[clamp(1.75rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-blue">
                {nebulaSectionCopy.pageHeading}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-strong md:text-base">
                {nebulaSectionCopy.pageLede}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton href="/book-demo">Book a demo</MagneticButton>
                <MagneticButton href="#nebula-architecture" variant="outline">
                  View architecture
                </MagneticButton>
              </div>
            </header>

            {/* Compressed USP under the fold line */}
            <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 md:mt-12">
              {nebulaHeroPillars.map((pillar) => (
                <li
                  key={pillar.id}
                  className="rounded-2xl border border-blue/10 bg-white/60 px-5 py-4 text-left backdrop-blur-sm"
                >
                  <p className="text-[15px] font-semibold leading-snug text-text">
                    {pillar.title}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted md:text-sm">
                    {pillar.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* Core engines, capability modules, cloud layer */}
            <NebulaArchitecture />
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* What it is                                                 */}
        {/* ---------------------------------------------------------- */}
        <NebulaIntro />

        {/* Why it exists */}
        <NebulaProblem />

        {/* The five modules — primary keyword surface */}
        <NebulaModules />

        {/* Platform technology + engineering benefits */}
        <Section id="nebula-platform" compact>
          <TechnologyChips />
          <NebulaBenefits />
        </Section>

        {/* How it is deployed */}
        <NebulaDeployment />

        {/* Differentiation */}
        <NebulaComparison />

        {/* Who it is for */}
        <NebulaAudiences />

        {/* FAQ — mirrored into FAQPage structured data above */}
        <NebulaFaq />

        <Section compact>
          <CtaBand
            title="See Nebula OS running on your cameras"
            lede="We will walk through the architecture, size a node for your channel count, and show the modules working on a live estate."
            primaryHref="/book-demo"
            primaryLabel="Book a demo"
            secondaryHref="/solutions"
            secondaryLabel="Explore the modules"
          />
          <p className="mt-8 text-center text-sm text-muted">
            Prefer to read first?{" "}
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 font-semibold text-text underline decoration-cyan/60 underline-offset-4 transition hover:text-blue"
            >
              Browse the solution modules
              <ArrowRight size={14} />
            </Link>
          </p>
        </Section>
      </>
    </PageShell>
  );
}
