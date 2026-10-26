"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import {
  formatBlogDateShort,
  getBlogCategoryCounts,
  getBlogUpdatedDay,
  getFilterCategories,
  type BlogPost,
} from "@/lib/blogs";
import { CtaBand } from "@/components/ui";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";
import { mediumImage } from "@/lib/responsive-images";

const ease = [0.22, 1, 0.36, 1] as const;

export function BlogsExperience({ posts }: { posts: BlogPost[] }) {
  const reduce = useSafeReducedMotion();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filterCategories = useMemo(() => getFilterCategories(posts), [posts]);
  const counts = getBlogCategoryCounts(posts);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts
      .filter((post) => {
        const matchesCategory = category === "All" || post.category === category;
        const matchesQuery =
          !normalized ||
          post.title.toLowerCase().includes(normalized) ||
          post.excerpt.toLowerCase().includes(normalized) ||
          post.author.toLowerCase().includes(normalized) ||
          post.category.toLowerCase().includes(normalized) ||
          (post.tags ?? []).some((tag) => tag.toLowerCase().includes(normalized));
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [category, query, posts]);

  const latestDate = posts.reduce<string | null>(
    (latest, post) => (post.date && (!latest || post.date > latest) ? post.date : latest),
    null,
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative -mt-[var(--header-h)] overflow-hidden bg-[#07111f] pt-[var(--header-h)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(43,140,255,0.35),transparent_45%),radial-gradient(ellipse_at_90%_40%,rgba(48,227,255,0.14),transparent_40%)]"
        />
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg to-transparent" />

        <div className="container relative z-10 pb-14 pt-12 md:pb-16 md:pt-16">
          <m.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="max-w-3xl"
          >
            <p className="font-display text-[clamp(1rem,1.8vw,1.2rem)] font-bold uppercase tracking-[0.14em] text-cyan">
              Blog
            </p>
            <h1 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold normal-case leading-[1.05] tracking-[-0.03em] text-white">
              OrionAlerts Blog: AI video analytics, VMS and CCTV operations
            </h1>
            <p className="mt-3 font-display text-[clamp(1.1rem,1.9vw,1.4rem)] font-semibold leading-snug tracking-[-0.02em] text-white/85">
              Insights for operators who can&apos;t afford noise.
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
              Practical guidance on AI video analytics, multi-site VMS, camera health monitoring and
              AMC operations for enterprise and industrial sites.
            </p>
            <p className="mt-5 text-sm font-medium text-white/45">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
              {latestDate ? ` · Last published ${formatBlogDateShort(latestDate)}` : ""}
            </p>
          </m.div>
        </div>
      </section>

      {/* Featured + filters + grid */}
      <section className="relative pb-14 pt-2 md:pb-16 md:pt-4">
        <div className="container relative">
          <AnimatePresence mode="wait">
            {featured ? (
              <m.div
                key={`featured-${featured.slug}-${category}-${query}`}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
              >
                <FeaturedArticle post={featured} />
              </m.div>
            ) : null}
          </AnimatePresence>

          <m.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease }}
            className="mt-10 flex flex-col gap-4 border-y border-line py-5 md:flex-row md:items-center md:justify-between"
          >
            <div className="relative w-full max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-caption"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                aria-label="Search articles"
                className="w-full rounded-[12px] border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-caption focus:border-blue/35 focus:ring-2 focus:ring-blue/10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filterCategories.map((item) => {
                const active = category === item;
                const count = counts[item] ?? 0;
                if (item !== "All" && count === 0) return null;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-[13px] ${
                      active
                        ? "bg-[#0f172a] text-white shadow-[0_10px_28px_rgba(15,23,42,0.18)]"
                        : "bg-white text-muted-strong ring-1 ring-line hover:text-blue"
                    }`}
                  >
                    {item}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                        active ? "bg-white/15 text-white" : "bg-surface-2 text-muted"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </m.div>

          <AnimatePresence mode="wait">
            {filtered.length ? (
              <m.div
                key={`${category}-${query}-grid`}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="mt-8"
              >
                {rest.length ? (
                  <>
                    <div className="mb-5 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
                          More articles
                        </p>
                        <h2 className="display mt-1 text-2xl normal-case text-text md:text-[1.75rem]">
                          Keep reading
                        </h2>
                      </div>
                      <p className="text-sm text-muted">
                        {rest.length} more piece{rest.length === 1 ? "" : "s"}
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {rest.map((post, index) => (
                        <ArticleCard key={post.slug} post={post} index={index} />
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted">
                    Showing the latest match above. Adjust filters to explore more.
                  </p>
                )}
              </m.div>
            ) : (
              <m.div
                key="empty"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 rounded-[22px] border border-dashed border-line bg-white px-8 py-16 text-center"
              >
                <p className="font-display text-2xl normal-case text-text">No articles found</p>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                  Try another keyword or category, or reset filters to see all insights.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("All");
                    setQuery("");
                  }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                >
                  Clear filters <ArrowRight size={14} />
                </button>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative pb-10 md:pb-12">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line pt-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
                Continue exploring
              </p>
              <p className="mt-1 text-sm text-muted-strong">
                Jump into product pages, FAQs, or talk to the team.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "/solutions", label: "Solutions" },
                { href: "/faqs", label: "FAQs" },
                { href: "/industries", label: "Industries" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-muted-strong transition hover:border-blue/30 hover:text-blue"
                >
                  {item.label}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-20">
        <div className="container">
          <CtaBand
            title="See OrionAlerts against your real workflows"
            lede="Book a demo tailored to your camera estate, staffing model, and industry constraints."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
            secondaryHref="/contact"
            secondaryLabel="Contact Us"
          />
        </div>
      </section>
    </div>
  );
}

function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group relative grid overflow-hidden rounded-[28px] bg-[#0c2238] lg:grid-cols-[1.2fr_0.9fr]"
    >
      <div className="relative min-h-[240px] lg:min-h-[360px]">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover card-media"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2238] via-[#0c2238]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0c2238]/35 lg:to-[#0c2238]" />
      </div>

      <div className="relative flex flex-col justify-end p-6 text-white md:p-8 lg:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
          Featured · {post.category}
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-semibold normal-case leading-[1.15] tracking-[-0.02em]">
          {post.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-[15px]">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <div className="flex items-center gap-3">
            <AuthorAvatar name={post.author} />
            <div>
              <p className="text-sm font-semibold text-white">{post.author}</p>
              <p className="text-xs text-white/55">
                <PostDates post={post} /> · {post.readTime}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
            Read article <ArrowRight size={15} aria-hidden className="arrow-nudge" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ post }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group card-lift focus-ring flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white hover:border-blue/25 hover:shadow-[0_24px_50px_-28px_rgba(15,61,120,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={mediumImage(post.image)}
          alt={post.imageAlt || post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
          className="object-cover card-media"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2238]/40 via-transparent to-transparent" />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-medium text-caption">
          <PostDates post={post} /> · {post.readTime}
        </p>
        <h3 className="display mt-2 text-[1.2rem] normal-case leading-snug text-text transition group-hover:text-blue md:text-[1.3rem]">
          {post.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <AuthorAvatar name={post.author} size="sm" />
            <p className="truncate text-sm font-semibold text-text">{post.author}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-blue">
            Read <ArrowRight size={14} aria-hidden className="arrow-nudge" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** "4 Aug 2026", plus "· Updated 26 Oct 2026" when the post was revised later. */
function PostDates({ post }: { post: BlogPost }) {
  const updatedDay = getBlogUpdatedDay(post);
  return (
    <>
      <time dateTime={post.date}>{formatBlogDateShort(post.date)}</time>
      {updatedDay ? (
        <>
          {" · Updated "}
          <time dateTime={updatedDay}>{formatBlogDateShort(updatedDay)}</time>
        </>
      ) : null}
    </>
  );
}

function AuthorAvatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const dim = size === "sm" ? "h-8 w-8 text-[10px]" : "h-10 w-10 text-xs";

  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a5fb0] via-blue to-cyan font-bold text-white shadow-[0_0_0_3px_rgba(43,140,255,0.12)] ${dim}`}
    >
      {initials || name.slice(0, 1)}
    </span>
  );
}
