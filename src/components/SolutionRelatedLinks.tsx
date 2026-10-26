import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { RelatedLink } from "@/app/solutions/solution-page-content";

type SolutionRelatedLinksProps = {
  solutionLabel: string;
  industries: RelatedLink[];
  furtherReading: RelatedLink[];
  glossary: RelatedLink[];
};

function LinkList({ links }: { links: RelatedLink[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group inline-flex items-start gap-1.5 text-[14px] font-medium leading-snug text-text hover:text-blue"
          >
            <span>{link.label}</span>
            <ArrowUpRight
              size={14}
              className="arrow-nudge-diag mt-0.5 shrink-0 text-blue/60 transition group-hover:text-blue"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** "Used in" industries, further reading and glossary links for one solution. */
export function SolutionRelatedLinks({
  solutionLabel,
  industries,
  furtherReading,
  glossary,
}: SolutionRelatedLinksProps) {
  const columns = [
    { id: "used-in", title: `Industries that use ${solutionLabel}`, links: industries },
    { id: "further-reading", title: "Further reading", links: furtherReading },
    { id: "key-terms", title: "Key terms explained", links: glossary },
  ].filter((column) => column.links.length > 0);

  if (!columns.length) return null;

  return (
    <section aria-label="Related industries and reading" className="bg-bg py-10 md:py-12">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {columns.map((column) => (
            <div
              key={column.id}
              id={column.id}
              className="rounded-[22px] border border-line bg-white px-5 py-5 md:px-6"
            >
              <h2 className="font-display text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-text">
                {column.title}
              </h2>
              <LinkList links={column.links} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
