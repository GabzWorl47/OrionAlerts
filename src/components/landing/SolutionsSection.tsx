"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    index: "01",
    name: "Video Management System",
    outcome: "Unify multi-site live walls, recording, and incident response.",
    href: "/solutions/vms",
    preview: "Live wall · retention · roles",
    direction: "left" as const,
  },
  {
    index: "02",
    name: "AI Vision & Real-Time Alerts",
    outcome: "Turn camera streams into prioritized, actionable alerts.",
    href: "/solutions/ai-analytics",
    preview: "Detection · rules · forensics",
    direction: "right" as const,
  },
  {
    index: "03",
    name: "Vision Copilot",
    outcome: "Ask operations questions in plain language and get instant answers.",
    href: "/solutions/vision-copilot",
    preview: "Ask · reports · role answers",
    direction: "left" as const,
  },
  {
    index: "04",
    name: "Smart Search",
    outcome: "Retrieve relevant clips and alerts in seconds — no manual scrubbing.",
    href: "/solutions/smart-search",
    preview: "Query · filters · ranked clips",
    direction: "right" as const,
  },
  {
    index: "05",
    name: "Asset Tracking",
    outcome: "Locate critical assets across facilities in real time.",
    href: "/solutions/asset-tracking",
    preview: "Maps · geofences · custody",
    direction: "left" as const,
  },
  {
    index: "06",
    name: "AMC Management",
    outcome: "Keep the estate healthy with contracts, SLAs, and tickets.",
    href: "/solutions/amc-management",
    preview: "Contracts · SLA · health",
    direction: "right" as const,
  },
  {
    index: "07",
    name: "Health Monitoring",
    outcome: "Detect device, recording, and network issues before they impact operations.",
    href: "/solutions/health-monitoring",
    preview: "Devices · storage · alerts",
    direction: "left" as const,
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="display max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] uppercase text-blue-gradient"
        >
          One Platform.
          <br />
          Critical Capabilities.
        </motion.h2>

        <div className="mt-14 space-y-6 md:space-y-8">
          {solutions.map((solution, i) => (
            <motion.article
              key={solution.index}
              initial={{
                opacity: 0,
                x: solution.direction === "left" ? -40 : 40,
                y: 24,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="sticky top-24"
            >
              <Link
                href={solution.href}
                className="group panel relative block overflow-hidden p-6 transition duration-300 hover:border-blue/40 md:p-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
              >
                <div className={`flex flex-col ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <p className="font-display text-sm text-blue">{solution.index}</p>
                  <h3 className="display mt-3 text-3xl text-text md:text-4xl">{solution.name}</h3>
                  <p className="mt-3 max-w-md text-muted">{solution.outcome}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:text-blue">
                    Explore Solution <ArrowUpRight size={16} />
                  </span>
                </div>

                <div
                  className={`mt-6 aspect-[16/10] overflow-hidden rounded-[20px] border border-line bg-[#0a1018] lg:mt-0 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative h-full w-full p-4">
                    <div className="absolute inset-0 grid-texture opacity-40" />
                    <div className="relative grid h-full grid-cols-3 gap-2">
                      <div className="col-span-2 rounded-[12px] border border-line bg-gradient-to-br from-[#15233a] to-[#0d1624]" />
                      <div className="rounded-[12px] border border-blue/30 bg-[#0f1a2a]" />
                      <div className="rounded-[12px] border border-line bg-[#121c2c]" />
                      <div className="col-span-2 rounded-[12px] border border-blue/25 bg-gradient-to-r from-[#102038] to-[#16304d]" />
                    </div>
                    <p className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.16em] text-muted">
                      {solution.preview} · placeholder
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(43,140,255,0.12),transparent_40%)]" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
