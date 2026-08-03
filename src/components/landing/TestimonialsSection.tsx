"use client";

import { useId, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { testimonials, type Testimonial } from "@/lib/homepage";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-blue text-blue" : "text-line"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="panel relative flex h-full flex-col p-6 md:p-7">
      <Quote size={28} className="text-cyan/30" aria-hidden />
      {item.rating ? (
        <div className="mt-4">
          <Stars rating={item.rating} />
        </div>
      ) : null}
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-text md:text-base">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <footer className="mt-6 border-t border-line pt-4">
        <p className="text-sm font-semibold text-text">{item.name}</p>
        <p className="mt-0.5 text-sm text-muted-strong">{item.designation}</p>
        <p className="mt-0.5 text-xs text-muted">{item.organization}</p>
        {item.placeholder ? (
          <p className="mt-2 inline-flex rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
            Placeholder · pending approval
          </p>
        ) : null}
      </footer>
    </article>
  );
}

export function TestimonialsSection() {
  const reduce = useReducedMotion();
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index] ?? testimonials[0];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(48,227,255,0.08),transparent_40%)]" />
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Customers</p>
          <h2
            id="testimonials-heading"
            className="display mt-2 max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] uppercase text-steel-gradient"
          >
            What Our Clients Say
          </h2>
          <p className="description mt-4 max-w-2xl text-base md:text-lg">
            Sample voices for layout only — replace with approved customer quotes before launch.
          </p>
        </Reveal>

        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-labelledby="testimonials-heading"
            aria-describedby={labelId}
          >
            <p id={labelId} className="sr-only" aria-live="polite">
              Testimonial {index + 1} of {total}
            </p>
            <TestimonialCard item={current} />
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-text transition hover:border-blue/35"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5" role="tablist" aria-label="Testimonial pages">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? "bg-blue" : "bg-line"
                    } ${reduce ? "" : ""}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-text transition hover:border-blue/35"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
