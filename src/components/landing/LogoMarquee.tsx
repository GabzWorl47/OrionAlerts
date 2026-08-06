"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { certificates, type CertificateBadge } from "@/lib/homepage";

function CertificateItem({ certificate }: { certificate: CertificateBadge }) {
  return (
    <div className="flex w-[9.75rem] shrink-0 flex-col items-center gap-2 sm:w-[10.75rem] md:w-[11.5rem]">
      <div className="flex h-[4.5rem] w-full items-center justify-center rounded-[16px] border border-line bg-white px-3 py-2 shadow-[0_10px_28px_rgba(12,34,56,0.06)]">
        <Image
          src={certificate.logoSrc}
          alt={certificate.name}
          width={160}
          height={64}
          unoptimized
          className="h-11 w-auto max-w-full object-contain"
        />
      </div>
      <p className="text-center text-[11px] font-semibold leading-snug text-muted-strong sm:text-xs">
        {certificate.label}
      </p>
    </div>
  );
}

export function LogoMarquee({ compact = false }: { compact?: boolean } = {}) {
  const reduce = useReducedMotion();
  const loop = [...certificates, ...certificates];

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
            Built to align with industry standards and security frameworks that matter for
            enterprise and government surveillance.
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
          <ul className="flex flex-wrap items-start justify-center gap-x-4 gap-y-6 px-4 sm:gap-x-6 md:gap-x-7">
            {certificates.map((certificate) => (
              <li key={certificate.id}>
                <CertificateItem certificate={certificate} />
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="certificate-marquee-track gap-4 px-2 sm:gap-5"
            role="list"
            aria-label="Compliance and security certifications"
          >
            {loop.map((certificate, index) => (
              <div key={`${certificate.id}-${index}`} role="listitem">
                <CertificateItem certificate={certificate} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
