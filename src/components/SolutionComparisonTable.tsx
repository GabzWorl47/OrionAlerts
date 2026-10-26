import type { ComparisonTable } from "@/app/solutions/solution-page-content";

/** A real <table> so search and answer engines can read the comparison. */
export function SolutionComparisonTable({ table }: { table: ComparisonTable }) {
  const [dimensionLabel, otherLabel, orionLabel] = table.columns;

  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="bg-[linear-gradient(180deg,#f4faff_0%,#ffffff_100%)] py-10 md:py-14"
    >
      <div className="container max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-2">Compare</p>
          <h2
            id="comparison-heading"
            className="text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text"
          >
            {table.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-strong md:text-[15px]">
            {table.lede}
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[22px] border border-line bg-white shadow-[0_18px_40px_-32px_rgba(15,61,120,0.45)]">
          <table className="w-full border-collapse text-left text-[13px] sm:text-sm">
            <caption className="sr-only">{table.heading}</caption>
            <thead>
              <tr className="border-b border-line bg-surface-2/60">
                <th scope="col" className="w-[26%] px-3 py-3 sm:px-4 sm:py-3.5 font-semibold text-muted-strong md:px-5">
                  {dimensionLabel || <span className="sr-only">Aspect</span>}
                </th>
                <th scope="col" className="px-3 py-3 sm:px-4 sm:py-3.5 font-semibold text-muted-strong md:px-5">
                  {otherLabel}
                </th>
                <th scope="col" className="px-3 py-3 sm:px-4 sm:py-3.5 font-semibold text-blue md:px-5">
                  {orionLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.dimension} className="border-b border-line last:border-b-0">
                  <th scope="row" className="px-3 py-3 sm:px-4 sm:py-3.5 align-top font-semibold text-text md:px-5">
                    {row.dimension}
                  </th>
                  <td className="px-3 py-3 sm:px-4 sm:py-3.5 align-top leading-relaxed text-muted-strong md:px-5">
                    {row.other}
                  </td>
                  <td className="bg-blue/[0.03] px-3 py-3 sm:px-4 sm:py-3.5 align-top leading-relaxed text-text md:px-5">
                    {row.orion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
