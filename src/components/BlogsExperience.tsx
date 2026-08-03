"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  blogCategories,
  blogPosts,
  getBlogCategoryCounts,
  type BlogCategoryFilter,
  type BlogPost,
} from "@/lib/blogs";

const ease = [0.22, 1, 0.36, 1] as const;

export function BlogsExperience() {
  const reduce = useReducedMotion();
  const [category, setCategory] = useState<BlogCategoryFilter>("All");
  const [query, setQuery] = useState("");
  const counts = getBlogCategoryCounts();

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !normalized ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.author.toLowerCase().includes(normalized) ||
        post.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="relative overflow-hidden">
      <section className="relative pb-6 pt-10 md:pb-8 md:pt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,140,255,0.12),transparent_55%)]"
        />
        <div className="container relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <p className="eyebrow">Blog</p>
            <h1 className="display mt-3 text-[clamp(2rem,4.5vw,3.4rem)] normal-case text-steel-gradient">
              Insights & updates
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-strong md:text-base">
              Articles on AI Vision, Smart Search, video operations, and operational intelligence.
            </p>
            <p className="mt-4 text-sm font-medium text-muted">
              {blogPosts.length} article{blogPosts.length === 1 ? "" : "s"}
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="mt-7 space-y-4"
          >
            <div className="relative max-w-xl">
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
                className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-text outline-none transition placeholder:text-caption focus:border-blue/35 focus:ring-2 focus:ring-blue/10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {blogCategories.map((item) => {
                const active = category === item;
                const count = counts[item] ?? 0;
                if (item !== "All" && count === 0) return null;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-[#0f172a] text-white shadow-[0_10px_28px_rgba(15,23,42,0.22)]"
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
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-20">
        <div className="container">
          <AnimatePresence mode="wait">
            {filtered.length ? (
              <motion.div
                key={`${category}-${query}`}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="grid gap-6 md:grid-cols-2"
              >
                {filtered.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[22px] border border-dashed border-line bg-white px-8 py-16 text-center"
              >
                <p className="font-display text-2xl normal-case text-text">No articles found</p>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                  Try another keyword or category. You can also reset filters to see all insights.
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
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-14 border-t border-line pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-caption">
              Continue exploring
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/solutions", label: "Solutions" },
                { href: "/faqs", label: "FAQ" },
                { href: "/book-demo", label: "Request a Demo" },
                { href: "/contact", label: "Contact Us" },
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

      <section className="relative overflow-hidden border-t border-line bg-[#0c2238] py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(43,140,255,0.28),transparent_50%),radial-gradient(ellipse_at_90%_80%,rgba(48,227,255,0.12),transparent_40%)]"
        />
        <div className="container relative">
          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                Ready for critical operations
              </p>
              <h2 className="display mt-3 max-w-2xl text-[clamp(1.8rem,3.5vw,2.8rem)] normal-case text-white">
                Ready to respond faster when every second counts?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                See how OrionAlerts helps teams monitor, detect, notify, and analyze critical events
                across your organization.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                {["Live demo", "Enterprise-ready", "No hardware swap"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center rounded-[8px] border border-cyan/40 bg-cyan px-5 py-3 text-sm font-semibold text-[#0c2238] shadow-[0_0_24px_rgba(48,227,255,0.28)] transition-colors hover:bg-white"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_24px_50px_-28px_rgba(15,61,120,0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2238]/45 via-[#0c2238]/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-medium text-caption">
          {post.dateLabel} · {post.readTime}
        </p>
        <h2 className="display mt-2 text-[1.35rem] normal-case leading-snug text-text transition group-hover:text-blue md:text-[1.5rem]">
          {post.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
          <div className="flex items-center gap-3">
            <AuthorAvatar name={post.author} />
            <div>
              <p className="text-sm font-semibold text-text">{post.author}</p>
              <p className="text-xs text-muted">{post.authorRole}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition group-hover:gap-2">
            Learn more <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
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
    <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#1a5fb0] via-blue to-cyan text-xs font-bold text-white shadow-[0_0_0_3px_rgba(43,140,255,0.12)]">
      {initials || name.slice(0, 1)}
    </span>
  );
}
