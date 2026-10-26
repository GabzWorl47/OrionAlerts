import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail. Mirrors the BreadcrumbList JSON-LD each page
 * ships, so the structured data always describes something on the page.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-muted-strong">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="rounded-sm transition-smooth-fast focus-ring hover:text-blue"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden className="h-3.5 w-3.5 text-caption" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Hero for answer-first content pages (glossary, use cases, comparisons,
 * fact sheet, docs). One H1, then the 40–60 word definition in a
 * "Short answer" panel so answer engines can lift it verbatim.
 */
export function ContentHero({
  breadcrumbs,
  eyebrow,
  title,
  answer,
  answerLabel = "Short answer",
  children,
}: {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  answer: string;
  answerLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(12,34,56,0.08)] bg-[#dfe9f2] pt-10 pb-12 md:pt-14 md:pb-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(126,200,255,0.28),transparent_48%),radial-gradient(ellipse_at_85%_90%,rgba(12,34,56,0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="container relative">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="text-balance text-[clamp(1.75rem,4.6vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-blue">
            {title}
          </h1>
          <div className="mt-6 rounded-[20px] border border-blue/10 bg-white/70 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
            <p className="eyebrow mb-2 text-blue">{answerLabel}</p>
            <p className="text-[15px] leading-relaxed text-text md:text-base">{answer}</p>
          </div>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
