"use client";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";
import { nebulaComparison } from "@/lib/nebula-os";

/**
 * Nebula OS vs a traditional stack.
 *
 * Kept as a genuine semantic <table> (caption + scoped headers) because
 * tables extract cleanly for search engines and AI answer engines. On
 * phones the table is swapped for a stacked card list carrying the same
 * copy, so nothing is lost and the page never scrolls horizontally.
 */
export function NebulaComparison() {
  const { heading, lede, legacyLabel, nebulaLabel, rows } = nebulaComparison;

  return (
    <Section id="nebula-comparison">
      <SectionHeading eyebrow="COMPARISON" title={heading} lede={lede} />

      <Reveal>
        {/* Table — md and up */}
        <div className="hidden overflow-x-auto rounded-[28px] border border-blue/10 bg-white/60 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] md:block">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">
              {heading}: {legacyLabel} compared with {nebulaLabel} across{" "}
              {rows.length} dimensions.
            </caption>
            <thead>
              <tr className="border-b border-blue/10">
                <th
                  scope="col"
                  className="w-[22%] px-6 py-5 align-bottom text-xs font-semibold uppercase tracking-[0.16em] text-muted"
                >
                  <span className="sr-only">Dimension</span>
                </th>
                <th
                  scope="col"
                  className="w-[39%] px-6 py-5 align-bottom text-sm font-semibold leading-snug text-muted"
                >
                  {legacyLabel}
                </th>
                <th
                  scope="col"
                  className="w-[39%] bg-cyan/10 px-6 py-5 align-bottom text-sm font-semibold leading-snug text-text"
                >
                  {nebulaLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.dimension}
                  className="border-b border-blue/[0.07] last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-6 py-5 align-top text-sm font-semibold leading-snug text-text"
                  >
                    {row.dimension}
                  </th>
                  <td className="px-6 py-5 align-top text-sm leading-relaxed text-muted">
                    {row.legacy}
                  </td>
                  <td className="bg-cyan/10 px-6 py-5 align-top text-sm font-medium leading-relaxed text-text">
                    {row.nebula}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked fallback — below md */}
        <div className="grid gap-4 md:hidden">
          {rows.map((row) => (
            <article
              key={row.dimension}
              className="rounded-[28px] border border-blue/10 bg-white/60 p-5 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)]"
            >
              <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-text">
                {row.dimension}
              </h3>

              <div className="mt-4 rounded-[18px] border border-blue/[0.07] p-4">
                <p className="eyebrow mb-1.5">{legacyLabel}</p>
                <p className="text-sm leading-relaxed text-muted">{row.legacy}</p>
              </div>

              <div className="mt-3 rounded-[18px] border border-cyan/40 bg-cyan/10 p-4">
                <p className="eyebrow mb-1.5 text-blue">{nebulaLabel}</p>
                <p className="text-sm font-medium leading-relaxed text-text">
                  {row.nebula}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
