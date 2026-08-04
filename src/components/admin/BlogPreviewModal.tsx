"use client";

import { useEffect } from "react";
import { Eye, X } from "lucide-react";
import { formatRelativeTime, type BlogPost } from "@/lib/blogs";
import { BlogArticleContent, BlogArticleToc } from "@/components/BlogArticleContent";

export function BlogPreviewModal({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-stretch justify-center bg-[#07111f]/55 p-3 backdrop-blur-sm md:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Blog post preview"
        className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-[24px] border border-line bg-bg shadow-[0_40px_100px_-40px_rgba(7,17,31,0.7)]"
      >
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-line bg-white px-4 py-3 md:px-6">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
              <Eye size={14} />
              Live preview
            </p>
            <p className="mt-0.5 truncate text-sm text-muted-strong">
              This is how the article will look on the website. Close to keep editing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] ${
                post.published
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {post.published ? "Will publish" : "Draft"}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-muted-strong transition hover:border-blue/30 hover:text-blue"
            >
              <X size={15} />
              Close preview
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <article className="pb-10">
            <section className="container pt-8 md:pt-10">
              <p className="text-sm font-medium text-muted">Back to blog</p>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
                <span className="rounded-full bg-blue/10 px-2.5 py-1 text-blue">
                  {post.category}
                </span>
                <span className="text-caption">·</span>
                <span className="text-caption">
                  Posted {formatRelativeTime(post.publishedAt || post.date).toLowerCase()}
                </span>
                <span className="text-caption">·</span>
                <span className="text-caption">{post.dateLabel}</span>
                <span className="text-caption">·</span>
                <span className="text-caption">{post.readTime}</span>
              </div>

              <h1 className="display mt-4 max-w-4xl text-[clamp(1.85rem,4vw,3rem)] normal-case text-steel-gradient">
                {post.title || "Untitled post"}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-strong">
                {post.excerpt || "Add an excerpt to introduce the article."}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <AuthorAvatar name={post.author || "Author"} />
                <div>
                  <p className="text-sm font-semibold text-text">
                    {post.author || "Author name"}
                  </p>
                  <p className="text-xs text-muted">{post.authorRole || "Role"}</p>
                </div>
              </div>

              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[22px] border border-line bg-surface-2">
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt={post.title || "Cover"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted">
                    Add a cover image to see it here
                  </div>
                )}
              </div>
            </section>

            <section className="container mt-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
                <div>
                  {post.sections.length === 0 && post.takeaways.length === 0 ? (
                    <p className="rounded-[16px] border border-dashed border-line bg-white px-4 py-8 text-center text-sm text-muted">
                      Add article body content to preview paragraphs, headings, quotes, and lists.
                    </p>
                  ) : (
                    <BlogArticleContent
                      takeaways={post.takeaways}
                      sections={post.sections}
                    />
                  )}
                </div>

                <aside className="space-y-4 lg:self-start">
                  <BlogArticleToc sections={post.sections} />
                  <div className="rounded-[20px] border border-line bg-[#0c2238] p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                      Next step
                    </p>
                    <p className="mt-3 font-display text-xl normal-case leading-snug">
                      See OrionAlerts on your workflows.
                    </p>
                  </div>
                </aside>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

function AuthorAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a5fb0] via-blue to-cyan text-sm font-bold text-white shadow-[0_0_0_3px_rgba(43,140,255,0.12)]">
      {initials || name.slice(0, 1)}
    </span>
  );
}
