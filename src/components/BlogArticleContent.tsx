import Link from "next/link";
import { getHeadingIds, stripInlineMarkdown, type BlogPost, type BlogSection } from "@/lib/blogs";

const INLINE_TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
const MARKDOWN_LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;
const linkClass =
  "font-medium text-blue underline decoration-blue/30 underline-offset-[3px] transition hover:decoration-blue";

/** Light inline markdown: [links](/path), **bold**, *italic*, `code`. */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(INLINE_TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        const link = MARKDOWN_LINK.exec(part);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/") || href.startsWith("#")) {
            return (
              <Link key={index} href={href} className={linkClass}>
                {label}
              </Link>
            );
          }
          if (/^(https?:|mailto:)/i.test(href)) {
            return (
              <a key={index} href={href} target="_blank" rel="noopener" className={linkClass}>
                {label}
              </a>
            );
          }
          // Anything else (e.g. javascript:) renders as plain text.
          return <span key={index}>{label}</span>;
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-text">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return (
            <em key={index} className="italic text-text/90">
              {part.slice(1, -1)}
            </em>
          );
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code
              key={index}
              className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.9em] text-blue"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/** Headings sit under the fixed header when reached from the contents links. */
const headingAnchorOffset = "scroll-mt-[calc(var(--header-h)+1.5rem)]";

export function BlogArticleContent({
  takeaways,
  sections,
}: {
  takeaways: string[];
  sections: BlogSection[];
}) {
  const firstParagraphIndex = sections.findIndex((section) => section.type === "paragraph");
  const headingIds = getHeadingIds(sections);

  return (
    <div className="mx-auto max-w-3xl lg:mx-0">
      {takeaways.length > 0 ? (
        <div className="overflow-hidden rounded-[22px] border border-blue/15 bg-gradient-to-br from-blue/[0.07] via-white to-cyan/[0.08] p-5 md:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
            Key takeaways
          </p>
          <ul className="mt-5 space-y-4">
            {takeaways.map((item, index) => (
              <li key={item} className="flex gap-3.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-[11px] font-bold text-white shadow-[0_8px_18px_-10px_rgba(43,140,255,0.9)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-0.5 text-[15px] font-medium leading-relaxed text-text md:text-base">
                  <InlineText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className={`space-y-7 md:space-y-8 ${takeaways.length > 0 ? "mt-10" : ""}`}>
        {sections.map((section, index) => {
          if (section.type === "heading") {
            const isSub = section.level === 3;
            if (isSub) {
              return (
                <h3
                  key={`${section.type}-${index}`}
                  id={headingIds[index] ?? undefined}
                  className={`${headingAnchorOffset} pt-3 font-display text-[1.2rem] font-semibold normal-case leading-snug tracking-[-0.02em] text-text md:text-[1.35rem]`}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan align-middle" />
                  <InlineText text={section.text} />
                </h3>
              );
            }
            return (
              <h2
                key={`${section.type}-${index}`}
                id={headingIds[index] ?? undefined}
                className={`${headingAnchorOffset} display border-t border-line pt-8 text-[clamp(1.45rem,2.4vw,1.9rem)] normal-case leading-[1.2] tracking-[-0.03em] text-text first:border-t-0 first:pt-2`}
              >
                <InlineText text={section.text} />
              </h2>
            );
          }

          if (section.type === "quote") {
            return (
              <blockquote
                key={`${section.type}-${index}`}
                className="relative overflow-hidden rounded-[18px] border border-line bg-surface px-6 py-5 md:px-8 md:py-6"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-4 top-2 font-display text-5xl leading-none text-blue/20 md:left-5 md:text-6xl"
                >
                  “
                </span>
                <p className="relative font-display text-[1.15rem] leading-snug text-text md:text-[1.3rem]">
                  <InlineText text={section.text} />
                </p>
              </blockquote>
            );
          }

          if (section.type === "table") {
            return (
              <div
                key={`${section.type}-${index}`}
                className="overflow-x-auto rounded-[18px] border border-line bg-white"
              >
                <table className="w-full min-w-[560px] border-collapse text-left text-[14px] leading-relaxed md:text-[15px]">
                  <thead className="bg-surface">
                    <tr>
                      {section.headers.map((header, cellIndex) => (
                        <th
                          key={cellIndex}
                          scope="col"
                          className="border-b border-line px-4 py-3 align-bottom font-semibold text-text"
                        >
                          <InlineText text={header} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-line/70 last:border-b-0">
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th
                              key={cellIndex}
                              scope="row"
                              className="px-4 py-3 align-top font-semibold text-text"
                            >
                              <InlineText text={cell} />
                            </th>
                          ) : (
                            <td key={cellIndex} className="px-4 py-3 align-top text-muted-strong">
                              <InlineText text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          if (section.type === "list") {
            if (section.ordered) {
              return (
                <ol
                  key={`${section.type}-${index}`}
                  className="space-y-3 rounded-[18px] border border-line bg-white p-5 md:p-6"
                >
                  {section.items.map((item, itemIndex) => (
                    <li key={item} className="flex gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-[12px] font-bold text-blue">
                        {itemIndex + 1}
                      </span>
                      <span className="pt-0.5 text-[15px] leading-relaxed text-muted-strong md:text-[1.05rem]">
                        <InlineText text={item} />
                      </span>
                    </li>
                  ))}
                </ol>
              );
            }

            return (
              <ul
                key={`${section.type}-${index}`}
                className="space-y-3 rounded-[18px] border border-line/80 bg-gradient-to-br from-surface to-white p-5 md:p-6"
              >
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-blue to-cyan shadow-[0_0_0_3px_rgba(43,140,255,0.12)]" />
                    <span className="text-[15px] leading-relaxed text-muted-strong md:text-[1.05rem]">
                      <InlineText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          }

          const isLede = index === firstParagraphIndex;
          return (
            <p
              key={`${section.type}-${index}`}
              className={
                isLede
                  ? "text-[1.05rem] leading-[1.75] text-text md:text-[1.15rem] md:leading-[1.8]"
                  : "text-[15px] leading-[1.8] text-muted-strong md:text-[1.05rem] md:leading-[1.85]"
              }
            >
              <InlineText text={section.text} />
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function BlogArticleToc({ sections }: { sections: BlogPost["sections"] }) {
  const headingIds = getHeadingIds(sections);
  const allHeadings = sections
    .map((section, index) => ({ section, id: headingIds[index] }))
    .filter(
      (item): item is { section: Extract<BlogSection, { type: "heading" }>; id: string } =>
        item.section.type === "heading" && Boolean(item.id),
    );
  // Prefer top-level sections; posts written only with ### headings fall back to those.
  const topLevel = allHeadings.filter((item) => item.section.level !== 3);
  const headings = topLevel.length ? topLevel : allHeadings;
  if (!headings.length) return null;

  return (
    <nav aria-label="In this article" className="rounded-[20px] border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-caption">
        In this article
      </p>
      <ul className="mt-4 space-y-2.5">
        {headings.map(({ section, id }) => (
          <li key={id} className="flex gap-2.5 text-sm leading-snug text-muted-strong">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/50" />
            <a href={`#${id}`} className="transition hover:text-blue">
              {stripInlineMarkdown(section.text)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
