"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Link2,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui";
import type { BlogPost } from "@/lib/blogs";

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="fill-current"
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-3.88V8.5z" />
    </svg>
  );
}

type BlogArticleProps = {
  post: BlogPost;
  related: BlogPost[];
};

export function BlogArticle({ post, related }: BlogArticleProps) {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const [shareUrl, setShareUrl] = useState(`https://orionalerts.com/blogs/${post.slug}`);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("blog-article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(Math.round((scrolled / Math.max(total, 1)) * 100));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <div className="fixed inset-x-0 top-[var(--header-h)] z-40 h-1 bg-surface-2">
        <div
          className="h-full bg-gradient-to-r from-blue to-cyan transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article id="blog-article" className="pb-8">
        <section className="container pt-10 md:pt-14">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-blue"
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="rounded-full bg-blue/10 px-2.5 py-1 text-blue">{post.category}</span>
            <span className="text-caption">·</span>
            <span className="text-caption">{post.dateLabel}</span>
            <span className="text-caption">·</span>
            <span className="text-caption">{post.readTime}</span>
          </div>

          <h1 className="display mt-4 max-w-4xl text-[clamp(2rem,4.5vw,3.4rem)] normal-case text-steel-gradient">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-strong">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AuthorAvatar name={post.author} size="lg" />
              <div>
                <p className="text-sm font-semibold text-text">{post.author}</p>
                <p className="text-xs text-muted">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-1 hidden text-xs font-semibold uppercase tracking-[0.12em] text-caption sm:inline">
                Share
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition hover:border-blue/30 hover:text-blue"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition hover:border-blue/30 hover:text-blue"
                aria-label="Copy link"
              >
                {copied ? <Check size={15} className="text-blue" /> : <Link2 size={15} />}
              </button>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-2 text-xs font-semibold text-muted-strong transition hover:border-blue/30 hover:text-blue sm:hidden"
              >
                <Share2 size={13} />
                {copied ? "Copied" : "Share"}
              </button>
            </div>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[22px] border border-line">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 76rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2238]/25 via-transparent to-transparent" />
          </div>
        </section>

        <section className="container mt-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <div className="rounded-[20px] border border-blue/15 bg-gradient-to-br from-blue/[0.06] to-cyan/[0.08] p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                  Key takeaways
                </p>
                <ul className="mt-4 space-y-3">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-strong">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted-strong md:text-base">
                {post.sections.map((section, index) => {
                  if (section.type === "heading") {
                    return (
                      <h2
                        key={`${section.type}-${index}`}
                        className="display pt-2 text-2xl normal-case text-text md:text-[1.75rem]"
                      >
                        {section.text}
                      </h2>
                    );
                  }
                  if (section.type === "quote") {
                    return (
                      <blockquote
                        key={`${section.type}-${index}`}
                        className="border-l-4 border-blue/40 bg-surface px-5 py-4 font-display text-lg leading-snug text-text"
                      >
                        {section.text}
                      </blockquote>
                    );
                  }
                  if (section.type === "list") {
                    return (
                      <ul key={`${section.type}-${index}`} className="space-y-2 pl-1">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={`${section.type}-${index}`}>{section.text}</p>;
                })}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/book-demo">Request a Demo</Button>
                <Button href="/blogs" variant="outline">
                  More articles
                </Button>
              </div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
              <div className="rounded-[20px] border border-line bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-caption">
                  In this article
                </p>
                <ul className="mt-4 space-y-2">
                  {post.sections
                    .filter((section) => section.type === "heading")
                    .map((section) =>
                      section.type === "heading" ? (
                        <li key={section.text} className="text-sm text-muted-strong">
                          {section.text}
                        </li>
                      ) : null,
                    )}
                </ul>
              </div>
              <div className="rounded-[20px] border border-line bg-[#0c2238] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                  Next step
                </p>
                <p className="mt-3 font-display text-xl normal-case leading-snug">
                  See OrionAlerts on your workflows.
                </p>
                <Link
                  href="/book-demo"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
                >
                  Book a demo <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {related.length ? (
          <section className="container mt-16 border-t border-line pt-12">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Keep reading</p>
                <h2 className="display mt-2 text-3xl normal-case text-steel-gradient">
                  Related articles
                </h2>
              </div>
              <Link href="/blogs" className="hidden text-sm font-semibold text-blue sm:inline">
                View all →
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blogs/${item.slug}`}
                  className="group overflow-hidden rounded-[20px] border border-line bg-white transition hover:-translate-y-1 hover:border-blue/25"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">
                      {item.category}
                    </p>
                    <h3 className="display mt-2 text-xl normal-case text-text group-hover:text-blue">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}

function AuthorAvatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
  const dim = size === "lg" ? "h-11 w-11 text-sm" : "h-10 w-10 text-xs";

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a5fb0] via-blue to-cyan font-bold text-white shadow-[0_0_0_3px_rgba(43,140,255,0.12)] ${dim}`}
    >
      {initials || name.slice(0, 1)}
    </span>
  );
}
