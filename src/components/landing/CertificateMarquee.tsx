"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const featuredCertificates = [
  {
    id: "iso-9001",
    name: "ISO 9001",
    label: "ISO 9001 Certified",
    logoSrc: "/Images/certificates/iso-9001.webp",
  },
  {
    id: "soc-2",
    name: "SOC 2",
    label: "SOC 2 Type II",
    logoSrc: "/Images/certificates/soc2.png",
  },
  {
    id: "onvif",
    name: "ONVIF",
    label: "ONVIF Conformant",
    logoSrc: "/Images/certificates/onvif.svg",
  },
  {
    id: "iso-27001",
    name: "ISO 27001",
    label: "ISO 27001 Certified",
    logoSrc: "/Images/certificates/iso-27001.png",
  },
] as const;

export function CertificateMarquee() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative overflow-hidden border-y border-line bg-bg py-10 md:py-12"
    >
      <div className="container">
        <Reveal>
          <h2
            id="certifications-heading"
            className="text-center text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
          >
            Built for Compliance and Trust
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-center text-sm text-muted">
            Aligned with security frameworks and certifications that matter for enterprise
            and government deployments.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul
            className="mx-auto mt-8 grid max-w-4xl grid-cols-2 items-end justify-items-center gap-x-6 gap-y-8 sm:mt-10 md:grid-cols-4 md:gap-x-10"
            aria-label="Compliance and security certifications"
          >
            {featuredCertificates.map((certificate) => (
              <li
                key={certificate.id}
                className="flex w-full max-w-[10rem] flex-col items-center gap-3"
              >
                <div className="flex h-28 w-full items-center justify-center sm:h-32">
                  <Image
                    src={certificate.logoSrc}
                    alt={certificate.name}
                    width={180}
                    height={180}
                    unoptimized
                    className="h-full w-auto max-h-28 max-w-full object-contain sm:max-h-32"
                  />
                </div>
                <p className="text-center text-[11px] font-semibold leading-snug text-muted-strong sm:text-xs">
                  {certificate.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
