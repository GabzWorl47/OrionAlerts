"use client";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";
import { nebulaComparison } from "@/lib/nebula-os";

/**
 * Nebula OS vs a traditional stack.
 *
 * Kept as a genuine semantic <table> (caption + scoped headers) because
 * tables extract cleanly for search engines and AI answer engines. On
 * phones the same table restyles into stacked cards via CSS only.
 */
export function NebulaComparison() {
  const { heading, lede, legacyLabel, nebulaLabel, rows } = nebulaComparison;

  return (
    <Section id="nebula-comparison">
      <SectionHeading eyebrow="COMPARISON" title={heading} lede={lede} />

      <Reveal>
        {/*
          One semantic table at every width. Below md the rows restyle into
          stacked cards (labels come from data-label), so the comparison is
          never duplicated in the DOM and the page never scrolls sideways.
        */}
        <div className="md:overflow-x-auto md:rounded-[28px] md:border md:border-blue/10 md:bg-white/60 md:backdrop-blur-sm md:shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)]">
          <table className="w-full border-collapse text-left max-md:block md:min-w-[46rem]">
            <caption className="sr-only">
              {heading}: {legacyLabel} compared with {nebulaLabel} across{" "}
              {rows.length} dimensions.
            </caption>
            <thead className="max-md:sr-only">
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
            <tbody className="max-md:grid max-md:gap-4">
              {rows.map((row) => (
                <tr
                  key={row.dimension}
                  className="border-b border-blue/[0.07] last:border-b-0 max-md:block max-md:rounded-[28px] max-md:border max-md:border-blue/10 max-md:bg-white/60 max-md:p-5 max-md:shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] max-md:last:border-b"
                >
                  <th
                    scope="row"
                    className="px-6 py-5 align-top text-sm font-semibold leading-snug text-text max-md:block max-md:p-0 max-md:text-base max-md:tracking-[-0.02em]"
                  >
                    {row.dimension}
                  </th>
                  <td
                    data-label={legacyLabel}
                    className="px-6 py-5 align-top text-sm leading-relaxed text-muted max-md:mt-4 max-md:block max-md:rounded-[18px] max-md:border max-md:border-blue/[0.07] max-md:p-4 max-md:before:mb-1.5 max-md:before:block max-md:before:text-[11px] max-md:before:font-semibold max-md:before:uppercase max-md:before:tracking-[0.14em] max-md:before:text-caption max-md:before:content-[attr(data-label)]"
                  >
                    {row.legacy}
                  </td>
                  <td
                    data-label={nebulaLabel}
                    className="bg-cyan/10 px-6 py-5 align-top text-sm font-medium leading-relaxed text-text max-md:mt-3 max-md:block max-md:rounded-[18px] max-md:border max-md:border-cyan/40 max-md:p-4 max-md:before:mb-1.5 max-md:before:block max-md:before:text-[11px] max-md:before:font-semibold max-md:before:uppercase max-md:before:tracking-[0.14em] max-md:before:text-blue max-md:before:content-[attr(data-label)]"
                  >
                    {row.nebula}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
