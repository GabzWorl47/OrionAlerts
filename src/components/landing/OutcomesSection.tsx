"use client";

import { motion } from "framer-motion";

const outcomes = [
  { value: "60%", label: "Faster Incident Response" },
  { value: "24/7", label: "Intelligent Monitoring" },
  { value: "1", label: "Unified Operational View" },
];

const quotes = [
  {
    quote:
      "Placeholder customer voice: operators finally have one place to see alerts, video, and next actions.",
    role: "Security Operations Lead",
    company: "Enterprise Logo Placeholder",
  },
  {
    quote:
      "Placeholder customer voice: multi-site visibility without stitching together disconnected tools.",
    role: "Facilities Director",
    company: "Enterprise Logo Placeholder",
  },
  {
    quote:
      "Placeholder customer voice: AI noise dropped, and the team started trusting the queue again.",
    role: "SOC Manager",
    company: "Enterprise Logo Placeholder",
  },
];

export function OutcomesSection() {
  return (
    <section className="bg-[#e8eef5] py-24 text-[#0b1520] md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display max-w-3xl text-[clamp(2.2rem,5vw,4.4rem)] uppercase text-[#0b1520]"
        >
          Built for
          <br />
          Real-World Impact.
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-t border-[#0b1520]/15 pt-6"
            >
              <p className="display text-5xl text-[#0b1520] md:text-6xl">{item.value}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-[#4d5d70]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {quotes.map((item, i) => (
            <motion.blockquote
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-[20px] border border-[#0b1520]/1 bg-white p-6"
            >
              <p className="text-sm leading-relaxed text-[#243446]">“{item.quote}”</p>
              <footer className="mt-6">
                <div className="mb-3 flex h-8 w-24 items-center justify-center rounded bg-[#dfe7f0] text-[10px] uppercase tracking-wider text-[#607286]">
                  Logo
                </div>
                <p className="text-sm font-semibold text-[#0b1520]">{item.role}</p>
                <p className="text-xs text-[#607286]">{item.company}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
