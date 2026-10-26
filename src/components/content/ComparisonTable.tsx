export type ComparisonTableRow = {
  dimension: string;
  a: string;
  b: string;
};

/**
 * Two-option comparison as a real semantic <table> (caption + scoped headers),
 * which extracts cleanly for search and answer engines. Below md the same copy
 * is shown as stacked cards so the page never scrolls horizontally.
 * Server component — no client JS.
 */
export function ComparisonTable({
  caption,
  labelA,
  labelB,
  rows,
  highlight = "b",
}: {
  caption: string;
  labelA: string;
  labelB: string;
  rows: ComparisonTableRow[];
  /** Which column (if any) gets the accent tint. */
  highlight?: "a" | "b" | "none";
}) {
  const tintA = highlight === "a" ? "bg-cyan/10 text-text font-medium" : "text-muted-strong";
  const tintB = highlight === "b" ? "bg-cyan/10 text-text font-medium" : "text-muted-strong";

  return (
    <>
      <div className="hidden overflow-hidden rounded-[28px] border border-blue/10 bg-white/60 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-blue/10">
              <th
                scope="col"
                className="w-[22%] px-6 py-5 align-bottom text-xs font-semibold uppercase tracking-[0.16em] text-muted"
              >
                Dimension
              </th>
              <th
                scope="col"
                className={`w-[39%] px-6 py-5 align-bottom text-sm font-semibold leading-snug ${
                  highlight === "a" ? "bg-cyan/10 text-text" : "text-muted"
                }`}
              >
                {labelA}
              </th>
              <th
                scope="col"
                className={`w-[39%] px-6 py-5 align-bottom text-sm font-semibold leading-snug ${
                  highlight === "b" ? "bg-cyan/10 text-text" : "text-muted"
                }`}
              >
                {labelB}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dimension} className="border-b border-blue/[0.07] last:border-b-0">
                <th
                  scope="row"
                  className="px-6 py-5 align-top text-sm font-semibold leading-snug text-text"
                >
                  {row.dimension}
                </th>
                <td className={`px-6 py-5 align-top text-sm leading-relaxed ${tintA}`}>{row.a}</td>
                <td className={`px-6 py-5 align-top text-sm leading-relaxed ${tintB}`}>{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {rows.map((row) => (
          <article
            key={row.dimension}
            className="rounded-[24px] border border-blue/10 bg-white/60 p-5 backdrop-blur-sm"
          >
            <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-text">
              {row.dimension}
            </h3>
            <div
              className={`mt-4 rounded-[16px] border p-4 ${
                highlight === "a" ? "border-cyan/40 bg-cyan/10" : "border-blue/[0.07]"
              }`}
            >
              <p className="eyebrow mb-1.5">{labelA}</p>
              <p className="text-sm leading-relaxed text-muted-strong">{row.a}</p>
            </div>
            <div
              className={`mt-3 rounded-[16px] border p-4 ${
                highlight === "b" ? "border-cyan/40 bg-cyan/10" : "border-blue/[0.07]"
              }`}
            >
              <p className="eyebrow mb-1.5">{labelB}</p>
              <p className="text-sm leading-relaxed text-muted-strong">{row.b}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
