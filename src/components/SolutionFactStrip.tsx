import Link from "next/link";
import { BellRing, Plug, Server } from "lucide-react";
import { solutionFacts } from "@/app/solutions/solution-page-content";

/**
 * "Works with · Deploys as · Alerts via" — the hard facts a buyer (or an AI
 * assistant) looks for first. Same facts on every solution page, all sourced
 * from nebula-os.ts / faqs.ts. Server-rendered so the text is in the HTML.
 */
export function SolutionFactStrip({ className = "" }: { className?: string }) {
  const items = [
    { icon: Plug, label: "Works with", value: solutionFacts.worksWith },
    { icon: Server, label: "Deploys as", value: solutionFacts.deploysAs },
    { icon: BellRing, label: "Alerts via", value: solutionFacts.alertsVia },
  ];

  return (
    <div className={className}>
      <dl className="grid gap-3 text-left sm:grid-cols-3">
        {items.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-[18px] border border-blue/15 bg-white/85 px-4 py-3.5 shadow-[0_10px_24px_rgba(26,115,232,0.06)]"
          >
            <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue">
              <Icon size={14} aria-hidden />
              {label}
            </dt>
            <dd className="mt-1.5 text-sm leading-snug text-text">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">
        {solutionFacts.dataNote}{" "}
        <Link href="/nebula-os" className="font-medium text-blue hover:underline">
          How Nebula OS works
        </Link>
      </p>
    </div>
  );
}
