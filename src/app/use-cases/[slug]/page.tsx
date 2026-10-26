import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { FaqSection } from "@/components/content/FaqSection";
import { LinkCardGrid, LinkPills } from "@/components/content/LinkCards";
import { DetectionFlow } from "@/components/diagrams/DetectionFlow";
import { industryName, solutionLabel, solutionName } from "@/components/content/link-labels";
import { getGlossaryTerm } from "@/lib/glossary";
import {
  getUseCase,
  orionAlertsDetectionNote,
  requirementsFor,
  useCases,
  USE_CASES_PATH,
} from "@/lib/use-cases";
import { getSolution } from "@/lib/site";
import { breadcrumbJsonLd, faqPageJsonLd, JsonLdScript, videoObjectJsonLd } from "@/lib/jsonld";
import { getPublicVideoByContentPath } from "@/lib/videos";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return buildPageMetadata({
    title: useCase.seoTitle,
    description: useCase.seoDescription,
    pathname: `${USE_CASES_PATH}/${useCase.slug}`,
  });
}

/** Lower-cased title used in running copy; "…Alert" titles read as plural ("…alerts"). */
function runningName(title: string): { name: string; plural: boolean } {
  const lower = title.toLowerCase();
  if (lower.endsWith(" alert")) return { name: `${lower}s`, plural: true };
  // e.g. "Unauthorized Area Entry" → "unauthorized area entry detection"
  if (!/(detection|monitoring)$/.test(lower)) return { name: `${lower} detection`, plural: false };
  return { name: lower, plural: false };
}

function howHeading(title: string): string {
  const { name, plural } = runningName(title);
  return `How ${name} ${plural ? "work" : "works"}`;
}

const H2 =
  "text-[clamp(1.35rem,2.6vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text";

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const path = `${USE_CASES_PATH}/${useCase.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Use cases", path: USE_CASES_PATH },
    { name: useCase.title, path },
  ];
  const solution = getSolution(useCase.solution.replace(/^\/solutions\//, ""));
  const glossary = useCase.relatedGlossary
    .map((s) => getGlossaryTerm(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const related = useCase.relatedUseCases
    .map((s) => getUseCase(s))
    .filter((u): u is NonNullable<typeof u> => Boolean(u));
  const requirements = requirementsFor(useCase);
  // VideoObject only for a clip registered in videos.ts for this page, so the
  // upload date and duration are measured values and match the video sitemap.
  const videoAsset = useCase.video ? getPublicVideoByContentPath(useCase.video.src) : undefined;
  const videoJsonLd =
    useCase.video && videoAsset?.pagePath === path
      ? videoObjectJsonLd({
          name: videoAsset.name,
          description: videoAsset.description,
          contentPath: useCase.video.src,
          thumbnailPath: useCase.video.poster,
          pagePath: path,
          uploadDate: videoAsset.uploadDate,
          duration: videoAsset.duration,
        })
      : null;

  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={faqPageJsonLd(useCase.faqs)} />
      {videoJsonLd ? <JsonLdScript data={videoJsonLd} /> : null}

      <ContentHero
        breadcrumbs={breadcrumbs}
        eyebrow="AI video analytics use case"
        title={useCase.h1}
        answer={useCase.definition}
      >
        <LinkPills
          items={[
            { href: useCase.solution, label: `Part of ${solutionName(useCase.solution)}` },
            { href: "/nebula-os", label: "Runs on Nebula OS" },
          ]}
        />
      </ContentHero>

      {/* How detection works */}
      <Section compact>
        <div
          className={`grid gap-10 ${useCase.video ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-start" : ""}`}
        >
          <div className={useCase.video ? "" : "max-w-3xl"}>
            <h2 className={H2}>{howHeading(useCase.title)}</h2>
            <div className="mt-4 space-y-4 text-[1rem] leading-[1.72] text-muted-strong">
              {useCase.howItWorks.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-6 rounded-[20px] border border-cyan/40 bg-cyan/10 p-5 sm:p-6">
              <p className="eyebrow mb-2 text-blue">In OrionAlerts</p>
              <p className="text-[0.975rem] leading-[1.7] text-text">
                {useCase.orionAlertsNote ?? orionAlertsDetectionNote}
              </p>
            </div>
          </div>
          {useCase.video ? (
            <figure className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <div className="relative overflow-hidden rounded-[24px] bg-[#071525] shadow-[0_28px_70px_-40px_rgba(12,34,56,0.6)] ring-1 ring-cyan/25">
                <video
                  src={useCase.video.src}
                  poster={useCase.video.poster}
                  muted
                  playsInline
                  controls
                  preload="none"
                  className="aspect-video h-auto w-full object-cover"
                  aria-label={`${useCase.title} demonstration video`}
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                {useCase.title}: {useCase.summary}
              </figcaption>
            </figure>
          ) : null}
        </div>
        <div className="mt-10">
          <DetectionFlow />
        </div>
      </Section>

      {/* Reliability + requirements */}
      <Section compact className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel-sm p-6 sm:p-8">
            <h2 className={H2}>What affects reliability</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-strong">
              Detection quality depends on the scene as much as the model. These are the factors to
              check during site survey and pilot.
            </p>
            <ul className="mt-5 space-y-3">
              {useCase.reliability.map((item) => {
                const [lead, ...rest] = item.split(": ");
                return (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-strong">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    <span>
                      {rest.length ? (
                        <>
                          <strong className="font-semibold text-text">{lead}:</strong>{" "}
                          {rest.join(": ")}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="panel-sm p-6 sm:p-8">
            <h2 className={H2}>What you need</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-strong">
              No camera replacement is assumed. A typical OrionAlerts deployment needs:
            </p>
            <ul className="mt-5 space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-strong">
                  <Check aria-hidden size={18} className="mt-0.5 shrink-0 text-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              See{" "}
              <Link href="/docs" className="font-semibold text-blue underline decoration-cyan/60 underline-offset-4">
                deployment and compatibility notes
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Where it's used + solution */}
      <Section compact>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className={H2}>Where it is used</h2>
            <p className="mt-3 max-w-2xl text-[0.975rem] leading-relaxed text-muted-strong">
              This use case commonly applies in the industries below. Each industry page covers the
              risks, detections and modules that matter for that kind of site.
            </p>
            <div className="mt-5">
              <LinkPills
                items={useCase.industries.map((s) => ({
                  href: `/industries/${s}`,
                  label: industryName(s),
                }))}
              />
            </div>
            <p className="mt-5 text-sm text-muted">
              <Link
                href="/industries"
                className="inline-flex items-center gap-1.5 font-semibold text-text underline decoration-cyan/60 underline-offset-4 transition hover:text-blue"
              >
                All industries
                <ArrowRight aria-hidden size={14} />
              </Link>
            </p>
          </div>
          <div className="rounded-[24px] border border-blue/10 bg-[#dfe9f2]/60 p-6 sm:p-7">
            <p className="eyebrow mb-2">Solution</p>
            <h2 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-text">
              Which solution it belongs to
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-strong">
              {useCase.title} is part of{" "}
              <strong className="font-semibold text-text">{solutionName(useCase.solution)}</strong>
              {solution ? `: ${solution.headline.charAt(0).toLowerCase()}${solution.headline.slice(1)}` : "."}
            </p>
            <Link
              href={useCase.solution}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue underline decoration-cyan/60 underline-offset-4 transition hover:decoration-blue"
            >
              {solutionLabel(useCase.solution)}
              <ArrowRight aria-hidden size={14} />
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection heading={`${useCase.title}: common questions`} faqs={useCase.faqs} />

      <Section compact className="pt-0">
        <h2 className={`${H2} mb-5`}>Related use cases</h2>
        <LinkCardGrid
          items={related.map((u) => ({
            href: `${USE_CASES_PATH}/${u.slug}`,
            title: u.title,
            description: u.summary,
          }))}
        />
        {glossary.length ? (
          <div className="mt-8">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">Terms on this page</h2>
            <div className="mt-3">
              <LinkPills
                items={glossary.map((t) => ({ href: `/glossary/${t.slug}`, label: t.term }))}
              />
            </div>
          </div>
        ) : null}
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Plan this use case for your sites"
          lede="We will review your camera views for this use case, scope the deployment for your sites and show it in a live demo."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref={USE_CASES_PATH}
          secondaryLabel="All Use Cases"
        />
      </Section>
    </PageShell>
  );
}
