"use client";

import { Quote, Star } from "lucide-react";
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
          className={i < rating ? "fill-cyan text-cyan" : "text-line"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="panel relative flex h-full w-[min(86vw,22rem)] shrink-0 flex-col p-6 md:w-[24rem] md:p-7">
      <Quote size={28} className="text-cyan/40" aria-hidden />
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
          <p className="mt-2 inline-flex rounded-full border border-line bg-bg px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-caption">
            Placeholder · pending approval
          </p>
        ) : null}
      </footer>
    </article>
  );
}

export function TestimonialsSection({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`relative overflow-hidden bg-bg py-16 md:py-24 ${className ?? ""}`}
    >
      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="testimonials-heading"
              className="text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
            >
              Testimonials
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              Sample voices for layout only — replace with approved customer quotes before launch.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="certificate-marquee relative mt-10 overflow-hidden"
        role="region"
        aria-roledescription="marquee"
        aria-labelledby="testimonials-heading"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-20"
          aria-hidden
        />

        {reduce ? (
          <div className="flex gap-5 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="certificate-marquee-track certificate-marquee-track--slow gap-5 px-2">
            {loop.map((item, index) => (
              <TestimonialCard key={`${item.id}-${index}`} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
