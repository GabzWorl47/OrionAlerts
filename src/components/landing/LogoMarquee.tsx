"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { clients, type ClientLogo } from "@/lib/homepage";

function ClientItem({ client }: { client: ClientLogo }) {
  return (
    <div className="flex w-[7.5rem] shrink-0 items-center justify-center sm:w-[8.25rem] md:w-[8.75rem]">
      <div className="flex h-14 w-full items-center justify-center rounded-[12px] border border-line bg-white px-2.5 py-1.5 shadow-[0_8px_20px_rgba(12,34,56,0.05)]">
        {client.logoSrc ? (
          <Image
            src={client.logoSrc}
            alt={client.name}
            width={140}
            height={48}
            unoptimized
            className="h-8 w-auto max-w-full object-contain"
          />
        ) : (
          <span className="text-center text-xs font-semibold text-muted-strong">
            {client.name}
          </span>
        )}
      </div>
    </div>
  );
}

export function LogoMarquee({ compact = false }: { compact?: boolean } = {}) {
  const reduce = useReducedMotion();

  return (
    <section
      id="customers"
      aria-labelledby="trusted-clients-heading"
      className={`relative overflow-hidden border-y border-line bg-bg ${
        compact ? "py-8 md:py-10" : "py-10 md:py-12"
      }`}
    >
      <div className="container">
        <Reveal>
          <h2
            id="trusted-clients-heading"
            className={`text-center font-semibold leading-[1.1] tracking-[-0.03em] text-text ${
              compact
                ? "text-[clamp(1.35rem,2.8vw,1.9rem)]"
                : "text-[clamp(1.6rem,3.5vw,2.4rem)]"
            }`}
          >
            Trusted by Leading Organizations
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-center text-sm text-muted">
            Trusted technology for smarter, faster, and more connected security
            operations.
          </p>
        </Reveal>
      </div>

      <div
        className={`certificate-marquee relative overflow-hidden ${
          compact ? "mt-6 sm:mt-7" : "mt-8 sm:mt-10"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24"
          aria-hidden
        />

        {reduce ? (
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 px-4 sm:gap-x-6 md:gap-x-7">
            {clients.map((client) => (
              <li key={client.id}>
                <ClientItem client={client} />
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="certificate-marquee-track gap-4 px-2 sm:gap-5"
            role="list"
            aria-label="Trusted client organizations"
          >
            {clients.map((client) => (
              <div key={client.id} role="listitem">
                <ClientItem client={client} />
              </div>
            ))}
            {/* Visual clone for seamless marquee; hidden from assistive tech */}
            <div aria-hidden className="contents">
              {clients.map((client) => (
                <div key={`clone-${client.id}`}>
                  <ClientItem client={client} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
