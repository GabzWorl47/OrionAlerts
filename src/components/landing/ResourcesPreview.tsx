"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { blogPosts } from "@/lib/blogs";
import { getFeaturedFaqs } from "@/lib/faqs";

const ease = [0.22, 1, 0.36, 1] as const;

const topics = [
  { label: "Video Intelligence", href: "/blogs" },
  { label: "Vision Intelligence", href: "/blogs" },
  { label: "Operations", href: "/blogs" },
];

export function ResourcesPreview() {
  const reduce = useReducedMotion();
  const [featured, ...rest] = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );
  const secondary = rest.slice(0, 2);
  const featuredFaqs = getFeaturedFaqs(3);

  if (!featured) return null;

  return (
    <section id="resources" className="relative overflow-hidden bg-[#07111f] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(43,140,255,0.28),transparent_50%),radial-gradient(ellipse_at_90%_80%,rgba(48,227,255,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-20" />

      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              Resources
            </p>
            <h2 className="display mt-3 max-w-2xl text-[clamp(1.9rem,4.2vw,3.2rem)] normal-case leading-[1.05] text-white">
              Intelligence beyond the platform
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
              Operator playbooks, vision intelligence briefs, and clear answers — curated for teams
              running real camera estates.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              Browse all insights
              <ArrowRight
                size={14}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_0.9fr]">
          <Reveal direction="left">
            <Link
              href={`/blogs/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[28px]"
            >
              <div className="relative aspect-[16/11] min-h-[320px] md:aspect-[16/10] md:min-h-[420px]">
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  transition={{ duration: 0.7, ease }}
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority={false}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/55 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                    <span>{featured.category}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-white/55">{featured.readTime}</span>
                  </div>
                  <h3 className="display mt-3 max-w-2xl text-[clamp(1.55rem,3vw,2.45rem)] normal-case leading-[1.12] text-white transition group-hover:text-cyan">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 md:text-[15px]">
                    {featured.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Read the brief
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Stagger className="flex flex-col gap-4" delay={0.08}>
              {secondary.map((post, index) => (
                <StaggerItem
                  key={post.slug}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="group grid grid-cols-[110px_1fr] gap-4 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan/30 hover:bg-white/[0.07] sm:grid-cols-[132px_1fr]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="140px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col justify-center py-1 pr-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan/90">
                        {post.category}
                      </p>
                      <h3 className="mt-1.5 font-display text-base normal-case leading-snug text-white transition group-hover:text-cyan sm:text-lg">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-white/45">
                        {post.dateLabel} · {post.readTime}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal direction="right" delay={0.12}>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    Browse by topic
                  </p>
                  <Link
                    href="/blogs"
                    className="text-xs font-semibold text-cyan hover:text-white"
                  >
                    View all
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <Link
                      key={topic.label}
                      href={topic.href}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75 transition hover:border-cyan/40 hover:text-white"
                    >
                      {topic.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal direction="up" delay={0.06}>
          <div className="mt-6 grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[0.9fr_1.4fr] md:p-6 lg:grid-cols-[0.75fr_1.5fr_auto]">
            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
                Most asked
              </p>
              <h3 className="display mt-2 text-2xl normal-case text-white">
                Straight answers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                From existing cameras to AI-assisted operations — the questions buyers ask first.
              </p>
              <Link
                href="/faqs"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan transition hover:text-white"
              >
                Open FAQs
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {featuredFaqs.map((faq, index) => (
                <Link
                  key={faq.q}
                  href="/faqs"
                  className="group rounded-[16px] border border-white/10 bg-[#0c1a2e] p-4 transition hover:border-cyan/35"
                >
                  <p className="font-display text-xs text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-snug text-white/90 transition group-hover:text-cyan">
                    {faq.q}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex items-stretch md:col-span-2 lg:col-span-1">
              <Link
                href="/book-demo"
                className="flex w-full flex-col justify-center rounded-[16px] bg-blue px-5 py-4 text-center transition hover:bg-[#1f7aef] md:min-w-[160px]"
              >
                <span className="text-sm font-semibold text-white">Talk to an expert</span>
                <span className="mt-1 text-xs text-white/80">Book a demo</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
