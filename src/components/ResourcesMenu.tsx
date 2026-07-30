"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CircleHelp,
  Sparkles,
} from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { getFeaturedFaqs } from "@/lib/faqs";

type ResourcesMenuProps = {
  onClose: () => void;
};

const topics = [
  {
    label: "Video Intelligence",
    description: "Why passive CCTV no longer scales",
    href: "/blogs",
  },
  {
    label: "Vision Intelligence",
    description: "Platforms that turn video into decisions",
    href: "/blogs",
  },
  {
    label: "Operations",
    description: "Alert triage, estates, and uptime",
    href: "/blogs",
  },
];

export function ResourcesMenu({ onClose }: ResourcesMenuProps) {
  const latest = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
  const featuredFaqs = getFeaturedFaqs(3);

  return (
    <div className="px-1 py-5 xl:px-2">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3 px-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
            Resources
          </p>
          <p className="mt-1 text-sm text-muted">
            Operator playbooks for AI surveillance
          </p>
        </div>
        <Link
          href="/blogs"
          onClick={onClose}
          className="inline-flex items-center gap-1 text-sm font-semibold text-blue transition hover:underline"
        >
          All insights
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.95fr]">
        {/* Latest */}
        <div className="px-2">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
            Latest
          </p>
          {latest ? (
            <Link
              href={`/blogs/${latest.slug}`}
              onClick={onClose}
              className="group block overflow-hidden rounded-[16px] border border-line bg-surface transition hover:border-blue/30 hover:shadow-md"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={latest.image}
                  alt=""
                  fill
                  sizes="360px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {latest.category}
                </span>
              </div>
              <div className="p-4">
                <p className="font-display text-[15px] leading-snug text-text transition group-hover:text-blue">
                  {latest.title}
                </p>
                <p className="mt-2 text-xs text-muted">
                  {latest.readTime} · {latest.dateLabel}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Read
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ) : null}
        </div>

        {/* Topics + destinations */}
        <div className="px-2">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
            Browse
          </p>
          <div className="space-y-1">
            {topics.map((topic) => (
              <Link
                key={topic.label}
                href={topic.href}
                onClick={onClose}
                className="group flex gap-3 rounded-[12px] px-2 py-2.5 transition hover:bg-surface-2/80"
              >
                <Sparkles
                  size={18}
                  className="mt-0.5 shrink-0 text-muted-strong transition group-hover:text-blue"
                />
                <span>
                  <span className="block text-[15px] font-semibold text-text transition group-hover:text-blue">
                    {topic.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {topic.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-3 space-y-1 border-t border-line pt-3">
            <Link
              href="/blogs"
              onClick={onClose}
              className="group flex items-center gap-3 rounded-[12px] px-2 py-2 transition hover:bg-surface-2/80"
            >
              <BookOpen size={18} className="text-muted-strong group-hover:text-blue" />
              <span className="text-[15px] font-semibold text-text group-hover:text-blue">
                All blogs
              </span>
            </Link>
            <Link
              href="/faqs"
              onClick={onClose}
              className="group flex items-center gap-3 rounded-[12px] px-2 py-2 transition hover:bg-surface-2/80"
            >
              <CircleHelp size={18} className="text-muted-strong group-hover:text-blue" />
              <span className="text-[15px] font-semibold text-text group-hover:text-blue">
                FAQs
              </span>
            </Link>
          </div>
        </div>

        {/* FAQs + CTA */}
        <div className="px-2">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
            Most asked
          </p>
          <div className="space-y-2">
            {featuredFaqs.map((faq) => (
              <Link
                key={faq.q}
                href="/faqs"
                onClick={onClose}
                className="group block rounded-[12px] border border-line bg-white px-3 py-2.5 transition hover:border-blue/30"
              >
                <p className="text-sm font-medium leading-snug text-text transition group-hover:text-blue">
                  {faq.q}
                </p>
              </Link>
            ))}
          </div>

          <Link
            href="/book-demo"
            onClick={onClose}
            className="mt-4 flex items-center justify-between rounded-[14px] bg-[#0c2238] px-4 py-3.5 text-white transition hover:bg-[#102a45]"
          >
            <span>
              <span className="block text-sm font-semibold">Talk to an expert</span>
              <span className="mt-0.5 block text-xs text-white/65">
                Book a guided demo
              </span>
            </span>
            <ArrowRight size={16} className="text-cyan" />
          </Link>
        </div>
      </div>
    </div>
  );
}
