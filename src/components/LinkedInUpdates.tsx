"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LinkedInPost } from "@/lib/linkedin";

const ease = [0.22, 1, 0.36, 1] as const;

function LinkedInIcon({ size = 14 }: { size?: number }) {
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

type ApiResponse = {
  configured: boolean;
  pageUrl?: string;
  posts: LinkedInPost[];
  error?: string | null;
};

export function LinkedInUpdates() {
  const reduce = useReducedMotion();
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/linkedin/posts?count=6");
        const json = (await response.json()) as ApiResponse;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setData({ configured: false, posts: [] });
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data?.configured || data.posts.length === 0) {
    return null;
  }

  return (
    <section className="relative border-y border-line bg-surface py-12 md:py-14">
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
                <LinkedInIcon size={14} />
                From LinkedIn
              </p>
              <h2 className="display mt-2 text-2xl normal-case text-steel-gradient md:text-3xl">
                Company updates
              </h2>
            </div>
            {data.pageUrl ? (
              <a
                href={data.pageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition hover:underline"
              >
                View LinkedIn
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>

          <div className="mt-7 divide-y divide-line border-y border-line">
            {data.posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease }}
                className="group grid gap-2 py-5 transition hover:bg-white/70 md:grid-cols-[8rem_1fr_auto] md:items-center md:gap-6 md:px-2"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
                  {post.dateLabel}
                </p>
                <div className="min-w-0">
                  <h3 className="font-display text-[1.05rem] font-semibold normal-case leading-snug text-text transition group-hover:text-blue md:text-[1.15rem]">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-strong line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue md:justify-self-end">
                  Open
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
