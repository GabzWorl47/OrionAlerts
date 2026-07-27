"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const chips = [
  "How does AI detection work?",
  "Book a product demo",
  "Find a certified partner",
];

export function AskOrionTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="panel grid items-center gap-8 overflow-hidden p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="eyebrow">Assistant</p>
            <h2 className="display mt-3 text-4xl uppercase text-blue-gradient md:text-5xl">Ask Orion.</h2>
            <p className="mt-4 max-w-md text-muted">
              Get answers, request support, or connect with an expert.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className="rounded-full border border-line bg-bg px-3 py-1.5 text-xs text-muted transition hover:border-blue/40 hover:text-text"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[20px] border border-line bg-bg p-4"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
              <MessageSquare size={16} className="text-blue" />
              <span className="text-sm font-semibold">ORION Assistant · Teaser</span>
            </div>
            <div className="space-y-3">
              <div className="max-w-[85%] rounded-[14px] bg-surface px-3 py-2 text-sm text-muted">
                Hi — ask about detection, demos, or partners. This UI is ready to connect to a live
                assistant later.
              </div>
              <div className="ml-auto max-w-[75%] rounded-[14px] bg-blue/20 px-3 py-2 text-sm text-text">
                How does AI detection work?
              </div>
              <div className="max-w-[90%] rounded-[14px] bg-surface px-3 py-2 text-sm text-muted">
                Streams are evaluated against site policies; high-confidence events surface in the
                operator queue with evidence context.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
