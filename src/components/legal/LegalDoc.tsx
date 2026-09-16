import Link from "next/link";
import { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/ui";
import { legalMeta } from "@/lib/legal";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
  relatedLinks?: { href: string; label: string }[];
};

export function LegalDoc({
  eyebrow,
  title,
  description,
  sections,
  relatedLinks = [],
}: LegalDocProps) {
  return (
    <PageShell>
      <Section narrow className="pt-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-3 text-4xl text-text md:text-5xl">{title}</h1>
        <p className="lede mt-4">{description}</p>
        <p className="mt-4 text-sm text-muted">
          Effective {legalMeta.effectiveDateLabel} · Last reviewed {legalMeta.lastReviewed}
        </p>

        <nav aria-label="On this page" className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            On this page
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-strong">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="transition hover:text-blue">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-text md:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-[1.0625rem] leading-[1.72] text-muted">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {relatedLinks.length > 0 ? (
          <div className="mt-14 border-t border-line pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Related
            </p>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-blue hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>
    </PageShell>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
