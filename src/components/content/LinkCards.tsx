import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type LinkCard = {
  href: string;
  title: string;
  description?: string;
  meta?: string;
};

/** Grid of linked cards used for hubs and "related" blocks. */
export function LinkCardGrid({
  items,
  columns = 3,
  headingLevel = "h3",
}: {
  items: LinkCard[];
  columns?: 2 | 3;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <ul
      className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex h-full flex-col rounded-[20px] border border-line bg-surface p-5 transition-smooth focus-ring hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_16px_36px_rgba(126,200,255,0.22)] sm:p-6"
          >
            {item.meta ? <p className="eyebrow mb-2">{item.meta}</p> : null}
            <Heading className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.015em] text-text">
              {item.title}
            </Heading>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">{item.description}</p>
            ) : null}
            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-semibold text-blue">
              Read more
              <ArrowRight
                aria-hidden
                size={14}
                className="transition-transform duration-[var(--dur-fast)] group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Compact inline list of related links (pills). */
export function LinkPills({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-flex items-center rounded-full border border-blue/15 bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-text transition-smooth-fast focus-ring hover:border-blue/35 hover:text-blue"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
