import type { BlogPost, BlogSection } from "@/lib/blogs";

/** Light inline markdown: **bold**, *italic*, `code`. */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-text">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={index} className="italic text-text/90">
              {part.slice(1, -1)}
            </em>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
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

export function BlogArticleContent({
  takeaways,
  sections,
}: {
  takeaways: string[];
  sections: BlogSection[];
}) {
  const firstParagraphIndex = sections.findIndex((section) => section.type === "paragraph");

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
                  className="pt-3 font-display text-[1.2rem] font-semibold normal-case leading-snug tracking-[-0.02em] text-text md:text-[1.35rem]"
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan align-middle" />
                  {section.text}
                </h3>
              );
            }
            return (
              <h2
                key={`${section.type}-${index}`}
                className="display border-t border-line pt-8 text-[clamp(1.45rem,2.4vw,1.9rem)] normal-case leading-[1.2] tracking-[-0.03em] text-text first:border-t-0 first:pt-2"
              >
                {section.text}
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
  const headings = sections.filter(
    (section): section is Extract<BlogSection, { type: "heading" }> =>
      section.type === "heading" && section.level !== 3,
  );

  return (
    <div className="rounded-[20px] border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-caption">
        In this article
      </p>
      {headings.length ? (
        <ul className="mt-4 space-y-2.5">
          {headings.map((section) => (
            <li key={section.text} className="flex gap-2.5 text-sm leading-snug text-muted-strong">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/50" />
              {section.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-muted">Section headings will appear here.</p>
      )}
    </div>
  );
}
