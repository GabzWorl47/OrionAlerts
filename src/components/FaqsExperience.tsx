"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  CircleHelp,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";
import {
  faqCategories,
  faqGroups,
  faqs,
  type FaqCategoryFilter,
  type FaqItem,
} from "@/lib/faqs";

const ease = [0.22, 1, 0.36, 1] as const;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function FaqsExperience() {
  const reduce = useSafeReducedMotion();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategoryFilter>("All");
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery =
        !normalized ||
        faq.q.toLowerCase().includes(normalized) ||
        faq.a.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  // Group the visible questions under their buyer-journey H2s, keeping a
  // running number so the badges still count 01, 02, … down the page.
  const grouped = useMemo(() => {
    let counter = 0;
    return faqGroups
      .map((group) => ({
        group,
        items: filtered
          .filter((faq) => faq.category === group)
          .map((faq) => ({ faq, number: ++counter })),
      }))
      .filter((entry) => entry.items.length > 0);
  }, [filtered]);

  return (
    <div className="relative overflow-hidden">
      <Hero reduce={!!reduce} />

      <section className="relative pb-16 md:pb-20">
        <div className="container relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
            <div>
              <Filters
                query={query}
                onQueryChange={(value) => {
                  setQuery(value);
                  setOpen(null);
                }}
                category={category}
                onCategoryChange={(value) => {
                  setCategory(value);
                  setOpen(null);
                }}
                count={filtered.length}
              />

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  {filtered.length ? (
                    <motion.div
                      key={`${category}-${query}-${filtered.length}`}
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease }}
                      className="space-y-10"
                    >
                      {grouped.map(({ group, items }) => {
                        const groupId = `faq-group-${slugify(group)}`;
                        return (
                          <section key={group} aria-labelledby={groupId}>
                            <h2
                              id={groupId}
                              className="mb-4 text-[clamp(1.25rem,2.4vw,1.6rem)] font-semibold leading-tight tracking-[-0.02em] text-text"
                            >
                              {group}
                            </h2>
                            <div className="space-y-3">
                              {items.map(({ faq, number }) => (
                                <FaqRow
                                  key={faq.q}
                                  faq={faq}
                                  number={number}
                                  isOpen={open === faq.q}
                                  onToggle={() => setOpen(open === faq.q ? null : faq.q)}
                                  reduce={!!reduce}
                                />
                              ))}
                            </div>
                          </section>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-[24px] border border-dashed border-line bg-white px-8 py-16 text-center"
                    >
                      <CircleHelp className="mx-auto text-blue" size={28} />
                      <p className="mt-4 font-display text-2xl normal-case text-text">
                        No matches yet
                      </p>
                      <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                        Try another keyword, or reach out and we’ll get you a direct answer.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue"
                      >
                        Contact the team <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <aside className="lg:pt-2">
              <div className="space-y-4 lg:sticky lg:top-[calc(var(--header-h)+1.25rem)]">
                <HelpCard
                  icon={MessageCircle}
                  title="Talk to us"
                  body="Have a deployment question that isn’t covered here? Our team can walk through your sites and cameras with you."
                  href="/contact"
                  cta="Contact Us"
                />
                <HelpCard
                  icon={Sparkles}
                  title="See it in action"
                  body="Book a demo tailored to your cameras, sites, staffing model and industry workflows."
                  href="/book-demo"
                  cta="Book a Demo"
                  accent
                />
                <HelpCard
                  icon={BookOpen}
                  title="Browse insights"
                  body="Read articles on alert noise, multi-site operations and surveillance reliability."
                  href="/blogs"
                  cta="Read the Blog"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hero({ reduce }: { reduce: boolean }) {
  return (
    <section className="relative overflow-hidden pb-6 pt-10 md:pb-8 md:pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,140,255,0.14),transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(48,227,255,0.08),transparent_40%)]"
      />

      <div className="container relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue shadow-sm backdrop-blur">
            <CircleHelp size={13} />
            Resources
          </div>
          <h1 className="display mt-4 text-[clamp(1.9rem,4vw,2.75rem)] normal-case text-steel-gradient">
            OrionAlerts FAQs
          </h1>
          <p className="mt-2 text-[clamp(1.05rem,1.8vw,1.3rem)] font-semibold leading-snug tracking-[-0.02em] text-text">
            Answers, without the runaround.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-muted-strong">
            Straight answers on cameras, deployment, data, AI detections, pricing, security and
            partners.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="mx-auto mt-6 grid max-w-3xl gap-2.5 sm:grid-cols-3"
        >
          {[
            { icon: Building2, label: "Multi-site ready", value: "Deploy & expand" },
            { icon: Sparkles, label: "Operator-first", value: "Less alert noise" },
            { icon: MessageCircle, label: "Need more detail?", value: "Talk to an expert" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-[14px] border border-white/70 bg-white/80 px-3.5 py-3 shadow-[0_10px_30px_-24px_rgba(15,61,120,0.4)] backdrop-blur"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-surface-2 text-blue">
                <item.icon size={15} />
              </span>
              <div className="min-w-0 text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-caption">
                  {item.label}
                </p>
                <p className="font-display text-[15px] normal-case leading-tight text-text">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Filters({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  count,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  category: FaqCategoryFilter;
  onCategoryChange: (value: FaqCategoryFilter) => void;
  count: number;
}) {
  return (
    <div className="rounded-[24px] border border-line bg-white p-4 shadow-[0_18px_50px_-36px_rgba(15,61,120,0.45)] md:p-5">
      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-caption"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search questions…"
          className="w-full rounded-[14px] border border-line bg-bg py-3.5 pl-11 pr-4 text-sm text-text outline-none transition placeholder:text-caption focus:border-blue/35 focus:ring-2 focus:ring-blue/10"
          aria-label="Search FAQs"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {faqCategories.map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(item)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                active
                  ? "bg-blue text-white shadow-[0_8px_24px_rgba(43,140,255,0.35)]"
                  : "bg-surface-2 text-muted-strong hover:bg-blue/10 hover:text-blue"
              }`}
            >
              {item}
            </button>
          );
        })}
        <span className="ml-auto text-xs font-medium uppercase tracking-[0.12em] text-caption">
          {count} result{count === 1 ? "" : "s"}
        </span>
      </div>
    </div>
  );
}

function FaqRow({
  faq,
  number,
  isOpen,
  onToggle,
  reduce,
}: {
  faq: FaqItem;
  number: number;
  isOpen: boolean;
  onToggle: () => void;
  reduce: boolean;
}) {
  const baseId = `faq-${slugify(faq.q)}`;
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-[20px] border transition duration-300 ${
        isOpen
          ? "border-blue/25 bg-white shadow-[0_20px_50px_-28px_rgba(43,140,255,0.45)]"
          : "border-line bg-white/80 hover:border-blue/20 hover:bg-white"
      }`}
    >
      {/* WAI-ARIA accordion pattern: the heading wraps the toggle button. */}
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span
            aria-hidden
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] text-xs font-semibold transition ${
              isOpen ? "bg-blue text-white" : "bg-surface-2 text-blue"
            }`}
          >
            {String(number).padStart(2, "0")}
          </span>
          <span className="min-w-0 flex-1 pt-1.5 font-display text-lg leading-snug text-text md:text-xl">
            {faq.q}
          </span>
          <span
            aria-hidden
            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
              isOpen
                ? "border-blue/30 bg-blue/10 text-blue"
                : "border-line bg-surface-2 text-muted"
            }`}
          >
            <ChevronDown
              size={16}
              className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </h3>

      {/* Answer stays in the DOM when collapsed so it is server-rendered and crawlable. */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.32, ease }}
        className="overflow-hidden"
      >
        <div className="border-t border-line px-5 pb-5 pt-4 md:px-6 md:pb-6">
          <p className="text-sm leading-relaxed text-muted-strong md:pl-[3.25rem] md:text-[15px]">
            {faq.a}
          </p>
          {faq.links?.length ? (
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm md:pl-[3.25rem]">
              {faq.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={isOpen ? undefined : -1}
                  className="inline-flex items-center gap-1 font-semibold text-blue hover:underline"
                >
                  {link.label}
                  <ArrowRight size={13} aria-hidden />
                </Link>
              ))}
            </p>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

function HelpCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
  accent = false,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  href: string;
  cta: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-[22px] border p-5 transition duration-300 hover:-translate-y-1 ${
        accent
          ? "border-blue/20 bg-gradient-to-br from-[#1a5fb0] via-[#2b8cff] to-[#30e3ff] text-white shadow-[0_20px_50px_-24px_rgba(43,140,255,0.65)]"
          : "border-line bg-white hover:border-blue/25 hover:shadow-[0_18px_40px_-28px_rgba(15,61,120,0.4)]"
      }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${
          accent ? "bg-white/15 text-white" : "bg-surface-2 text-blue"
        }`}
      >
        <Icon size={18} />
      </div>
      <p className={`mt-4 font-display text-xl normal-case ${accent ? "text-white" : "text-text"}`}>
        {title}
      </p>
      <p className={`mt-2 text-sm leading-relaxed ${accent ? "text-white/85" : "text-muted"}`}>
        {body}
      </p>
      <span
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition ${
          accent
            ? "rounded-[8px] border border-cyan/40 bg-cyan px-3.5 py-2 text-[#0c2238] shadow-[0_0_20px_rgba(48,227,255,0.25)] group-hover:bg-white"
            : "text-blue"
        }`}
      >
        {cta}
        <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
