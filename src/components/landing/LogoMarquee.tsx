"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { clients, type ClientLogo } from "@/lib/homepage";

function LogoBadge({ client }: { client: ClientLogo }) {
  const content = client.logoSrc ? (
    <Image
      src={client.logoSrc}
      alt={client.name}
      width={140}
      height={40}
      className="h-8 w-auto max-w-[140px] object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
    />
  ) : (
    <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted transition group-hover:text-text group-focus-visible:text-text">
      {client.name}
    </span>
  );

  const className =
    "group flex h-16 w-[200px] shrink-0 items-center justify-center rounded-[14px] border border-line bg-surface px-5 shadow-sm transition hover:border-blue/30 focus-visible:border-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/30";

  if (client.href) {
    return (
      <Link href={client.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className} tabIndex={0} aria-label={client.name}>
      {content}
    </div>
  );
}

export function LogoMarquee() {
  const reduce = useReducedMotion();
  const loop = [...clients, ...clients];

  return (
    <section
      id="customers"
      aria-labelledby="trusted-clients-heading"
      className="relative overflow-hidden border-y border-line bg-bg py-14 md:py-16"
    >
      <div className="container">
        <Reveal>
          <h2
            id="trusted-clients-heading"
            className="display text-center text-[clamp(1.6rem,3.5vw,2.4rem)] uppercase text-steel-gradient"
          >
            Trusted by Leading Organizations
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
            Industry segments and partner categories from existing site content — swap in approved
            client logos when available.
          </p>
        </Reveal>
      </div>

      <div className="certificate-marquee relative mt-8 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24"
          aria-hidden
        />

        {reduce ? (
          <div className="flex gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {clients.map((client) => (
              <LogoBadge key={client.id} client={client} />
            ))}
          </div>
        ) : (
          <div className="certificate-marquee-track gap-4 px-2">
            {loop.map((client, index) => (
              <LogoBadge key={`${client.id}-${index}`} client={client} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
