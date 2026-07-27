"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const feeds = ["CAM-01", "CAM-04", "CAM-09", "CAM-12"];
const alerts = [
  { time: "14:02:11", text: "Restricted zone entry", level: "high" },
  { time: "14:01:48", text: "Vehicle dwell exceeded", level: "med" },
  { time: "14:01:12", text: "Asset left geofence", level: "med" },
  { time: "14:00:37", text: "Crowd density rising", level: "low" },
];

export function LiveDashboard() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.2fr]">
        <Reveal direction="left">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
            Live Intelligence
          </span>
          <h2 className="display mt-5 text-[clamp(1.8rem,4vw,3rem)] uppercase text-steel-gradient">
            Operations you can trust at a glance.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            A command view for feeds, alerts, heatmaps, asset routes, and AI confidence — designed
            for operators who need clarity, not clutter.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.12} className="panel overflow-hidden p-3 md:p-4">
          <div className="rounded-[20px] border border-line bg-[#080d14] p-4">
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-muted">
              <span>ORION Ops · Demo Frame</span>
              <span className="text-cyan">Confidence 94.2%</span>
            </div>

            <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
              <div className="grid grid-cols-2 gap-2">
                {feeds.map((cam, i) => (
                  <motion.div
                    key={cam}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="aspect-video rounded-[12px] border border-line bg-gradient-to-br from-[#15233a] to-[#0d1626] p-2"
                  >
                    <div className="flex items-center justify-between text-[10px] text-muted">
                      <span>{cam}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-alert pulse-dot" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-[12px] border border-line bg-surface p-3"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Alert timeline</p>
                <ul className="mt-3 space-y-2">
                  {alerts.map((alert) => (
                    <li key={alert.time} className="flex items-start gap-2 text-xs">
                      <span className="text-muted">{alert.time}</span>
                      <span
                        className={
                          alert.level === "high"
                            ? "text-alert"
                            : alert.level === "med"
                              ? "text-cyan"
                              : "text-text"
                        }
                      >
                        {alert.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <Stagger className="mt-3 grid gap-3 sm:grid-cols-3" delay={0.08}>
              {[
                { label: "Detection heatmap", value: "Zone B · elevated" },
                { label: "Asset route", value: "TAG-204 · Dock 3" },
                { label: "KPI · open alerts", value: "12 active" },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="rounded-[12px] border border-line bg-surface-2 p-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted">{item.label}</p>
                    <p className="mt-2 font-display text-sm text-text">{item.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
