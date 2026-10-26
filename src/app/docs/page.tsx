import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { LinkCardGrid, LinkPills } from "@/components/content/LinkCards";
import { DeploymentModelDiagram, isDeploymentModelId } from "@/components/diagrams/DeploymentModels";
import { nebulaDeployment, nebulaStack } from "@/lib/nebula-os";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

const PAGE_PATH = "/docs";

/** CP Plus integration article (blog). */
const CP_PLUS_BLOG_PATH = "/blogs/cp-plus-ai-video-analytics-integration";

export const metadata: Metadata = buildPageMetadata({
  title: "Documentation: Deployment & Compatibility",
  description:
    "OrionAlerts documentation hub: deployment models, ONVIF and RTSP camera compatibility, GPU sizing, updates, data handling and integrations on Nebula OS.",
  pathname: PAGE_PATH,
});

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Documentation", path: PAGE_PATH },
];

const ANSWER =
  "This page summarizes how OrionAlerts is deployed and what it works with: deployment models, camera compatibility over ONVIF, RTSP and vendor SDKs, on-site GPU processing, updates, data handling and integrations. It is a technical overview, not a full product manual. For questions specific to your cameras and sites, book a technical walkthrough.";

const TOC = [
  { href: "#deployment", label: "Deployment models" },
  { href: "#cameras", label: "Camera compatibility" },
  { href: "#hardware", label: "Hardware & AI processing" },
  { href: "#updates", label: "Updates" },
  { href: "#data-security", label: "Data & security" },
  { href: "#integrations", label: "Integrations" },
  { href: "#resources", label: "More resources" },
];

const H2 =
  "text-[clamp(1.35rem,2.6vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text";
const PROSE = "mt-4 max-w-3xl space-y-4 text-[1rem] leading-[1.72] text-muted-strong";
const INLINE_LINK =
  "font-semibold text-blue underline decoration-cyan/60 underline-offset-4 hover:decoration-blue";

/** Deployment traits are plain strings, optionally with a link (shape owned by nebula-os.ts). */
type DeploymentTrait = string | { label: string; href: string };

const coreEngines = nebulaStack.find((layer) => layer.id === "core")?.items ?? [];

export default function DocsPage() {
  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(BREADCRUMBS)} />

      <ContentHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Documentation"
        title="OrionAlerts documentation: deployment, compatibility and integrations"
        answer={ANSWER}
        answerLabel="Overview"
      >
        <nav aria-label="On this page">
          <LinkPills items={TOC} />
        </nav>
      </ContentHero>

      {/* Deployment models */}
      <Section compact id="deployment">
        <h2 className={H2}>{nebulaDeployment.heading}</h2>
        <p className="mt-3 max-w-3xl text-[1rem] leading-[1.72] text-muted-strong">
          {nebulaDeployment.lede}
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {nebulaDeployment.models.map((model) => (
            <article key={model.id} className="panel-sm flex flex-col p-6">
              {isDeploymentModelId(model.id) ? (
                <div className="mb-5 rounded-[16px] bg-cyan/10 p-3">
                  <DeploymentModelDiagram model={model.id} idPrefix="docs-deploy" className="mx-auto max-w-[22rem]" />
                </div>
              ) : null}
              <p className="eyebrow mb-2">{model.bestFor}</p>
              <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.015em] text-text">
                {model.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">{model.description}</p>
              <ul className="mt-4 space-y-2">
                {(model.traits as readonly DeploymentTrait[]).map((trait) => {
                  const label = typeof trait === "string" ? trait : trait.label;
                  return (
                    <li key={label} className="flex gap-2.5 text-sm leading-relaxed text-text">
                      <Check aria-hidden size={16} className="mt-0.5 shrink-0 text-blue" />
                      {typeof trait === "string" ? (
                        <span>{trait}</span>
                      ) : (
                        <Link href={trait.href} className={INLINE_LINK}>
                          {trait.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Camera compatibility */}
      <Section compact id="cameras" className="pt-0">
        <h2 className={H2}>Camera compatibility</h2>
        <div className={PROSE}>
          <p>
            You do not need to replace existing cameras. Nebula OS includes a universal device layer
            that connects supported IP cameras and recorders through{" "}
            <Link href="/glossary/onvif" className={INLINE_LINK}>ONVIF</Link>,{" "}
            <Link href="/glossary/rtsp" className={INLINE_LINK}>RTSP</Link> and vendor (OEM) SDKs,
            and translates them into one internal device model. This keeps a deployment
            brand-neutral.
          </p>
          <p>
            Compatibility is confirmed per camera model during solution design, because available
            protocols, stream formats and firmware capabilities differ between models and
            generations.
          </p>
        </div>
      </Section>

      {/* Hardware & AI processing */}
      <Section compact id="hardware" className="pt-0">
        <h2 className={H2}>Hardware and AI processing</h2>
        <div className={PROSE}>
          <p>
            Nebula OS boots on a single appliance or server at the site. Power it on and the video,
            AI, storage and health services come up together. Its core engines are:{" "}
            {coreEngines.join(", ")}.
          </p>
          <p>
            AI processing happens on the site node. Nebula OS is designed for hardware-accelerated
            video decoding and AI inference, so GPU acceleration is used where AI analytics are
            enabled. Node sizing depends on channel count and which detections are running, and our
            team sizes it per deployment.
          </p>
          <p>
            The AI runtime reads decoded frames from the same video engine that records the cameras,
            so analytics run on the streams you already record. See{" "}
            <Link href="/glossary/edge-ai-video-analytics" className={INLINE_LINK}>
              edge AI video analytics
            </Link>{" "}
            and{" "}
            <Link href="/compare/on-prem-vs-cloud-video-analytics" className={INLINE_LINK}>
              on-prem vs cloud video analytics
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Updates */}
      <Section compact id="updates" className="pt-0">
        <h2 className={H2}>Updates</h2>
        <div className={PROSE}>
          <p>
            Nebula OS and the services that run on it are released and updated as one unit. Updates
            follow a managed, rollback-ready deployment path, and connected nodes can receive secure
            over-the-air updates, so there is no separate upgrade and re-test cycle for video,
            analytics and monitoring components.
          </p>
        </div>
      </Section>

      {/* Data & security */}
      <Section compact id="data-security" className="pt-0">
        <h2 className={H2}>Data and security</h2>
        <div className={PROSE}>
          <p>
            In the standard deployment, video and AI inference stay on the on-site Nebula OS node.
            Orion Cloud synchronizes health status, alerts, configuration and operational metadata for
            central management, without requiring raw video to be uploaded. Alerts are delivered to
            the dashboard, mobile app and email.
          </p>
          <p>
            For how we handle security and personal data, see{" "}
            <Link href="/security" className={INLINE_LINK}>Security</Link> and the{" "}
            <Link href="/privacy" className={INLINE_LINK}>Privacy Policy</Link>.
          </p>
        </div>
      </Section>

      {/* Integrations */}
      <Section compact id="integrations" className="pt-0">
        <h2 className={H2}>Integrations</h2>
        <div className={PROSE}>
          <p>
            OrionAlerts is designed to work alongside existing IP camera networks, NVRs, VMS
            platforms, IoT devices, access control systems and enterprise applications where
            required. A built-in API engine is part of the Nebula OS core, and the integrations each
            site needs are scoped during solution design rather than assumed up front.
          </p>
          <p>
            <strong className="font-semibold text-text">CP Plus.</strong> OrionAlerts is a technology
            partner for CP Plus. Through its API engine, OrionAlerts can connect compatible CP Plus
            cameras and recording systems, so existing CP Plus installations can gain AI video
            analytics without replacing every working camera. Compatibility is assessed model by
            model.{" "}
            <Link href={CP_PLUS_BLOG_PATH} className={INLINE_LINK}>
              Read the CP Plus integration notes
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* More resources */}
      <Section compact id="resources" className="pt-0">
        <h2 className={`${H2} mb-5`}>More resources</h2>
        <LinkCardGrid
          items={[
            {
              href: "/faqs",
              title: "FAQs",
              description: "Deployment, cameras, detections, multi-site operations and partners.",
            },
            {
              href: "/nebula-os",
              title: "Nebula OS",
              description: "Architecture, modules, deployment models and how the platform is built.",
            },
            {
              href: "/glossary",
              title: "Glossary",
              description: "Definitions of VMS, VSaaS, ONVIF, RTSP, edge AI, ANPR, AMC and more.",
            },
            {
              href: "/use-cases",
              title: "Use cases",
              description: "How each AI detection works, what affects it and what you need to run it.",
            },
            {
              href: "/compare",
              title: "Comparisons",
              description: "VMS vs VSaaS, on-prem vs cloud analytics, and Nebula OS vs NVR plus analytics.",
            },
            {
              href: "/company",
              title: "OrionAlerts at a glance",
              description: "Legal entity, headquarters, modules, protocols, video handling and contacts.",
            },
          ]}
        />
        <p className="mt-6 text-sm text-muted">
          Need a walkthrough or implementation help?{" "}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-text underline decoration-cyan/60 underline-offset-4 transition hover:text-blue"
          >
            Contact the team
            <ArrowRight aria-hidden size={14} />
          </Link>
        </p>
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Book a technical walkthrough"
          lede="We will review your cameras, sites and network, confirm compatibility per model and size a node for your deployment."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Contact Sales"
        />
      </Section>
    </PageShell>
  );
}
