"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const logos = [
  "Camera OEM",
  "Access Control",
  "Cloud Infra",
  "Sensors",
  "Network",
  "Identity",
  "Ticketing",
  "Maps",
];

const tracks = [
  {
    title: "System Integrators",
    copy: "Design, deploy, and support multi-site ORION estates with commercial upside.",
  },
  {
    title: "Technology Partners",
    copy: "Connect devices and ops systems into the ORION intelligence layer.",
  },
  {
    title: "White-Label Solutions",
    copy: "Deliver branded experiences where partner packaging allows.",
  },
  {
    title: "Training & Certification",
    copy: "Enable sales, deployment, and support teams with role-based tracks.",
  },
];

export function PartnersSection() {
  const reduce = useSafeReducedMotion();

  return (
    <section id="partners" className="relative overflow-hidden section-alt py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(26,115,232,0.1),transparent_50%)]" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden>
        <g stroke="rgba(26,115,232,0.2)" strokeWidth="1">
          <line x1="10%" y1="20%" x2="40%" y2="55%" />
          <line x1="40%" y1="55%" x2="75%" y2="30%" />
          <line x1="75%" y1="30%" x2="90%" y2="70%" />
          <line x1="20%" y1="75%" x2="55%" y2="60%" />
        </g>
        <g fill="rgba(26,115,232,0.45)">
          <circle cx="10%" cy="20%" r="3" />
          <circle cx="40%" cy="55%" r="3" />
          <circle cx="75%" cy="30%" r="3" />
          <circle cx="90%" cy="70%" r="3" />
          <circle cx="20%" cy="75%" r="3" />
          <circle cx="55%" cy="60%" r="3" />
        </g>
      </svg>

      <div className="container relative">
        <Reveal>
          <h2 className="display max-w-2xl text-[clamp(1.8rem,4vw,3rem)] text-text">
            Stronger
            <br />
            Together.
          </h2>
        </Reveal>

        <div className="mt-10 overflow-hidden border-y border-line py-5">
          <motion.div
            className="flex gap-8 whitespace-nowrap will-change-transform"
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-[12px] border border-line bg-white px-4 text-xs uppercase tracking-[0.14em] text-muted shadow-sm"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2" delay={0.08}>
          {tracks.map((track) => (
            <StaggerItem key={track.title}>
              <article className="panel p-6 transition hover:border-blue/25">
                <h3 className="font-display text-2xl text-text">{track.title}</h3>
                <p className="mt-2 text-sm text-muted">{track.copy}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10">
          <MagneticButton href="/partners">Become a Partner</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
