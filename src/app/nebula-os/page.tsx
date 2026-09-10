import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { MagneticButton } from "@/components/MagneticButton";
import { NebulaArchitecture } from "@/components/nebula/NebulaArchitecture";
import { NebulaBenefits } from "@/components/nebula/NebulaBenefits";
import { TechnologyChips } from "@/components/nebula/TechnologyChips";
import { nebulaSectionCopy } from "@/lib/nebula-os";

export const metadata: Metadata = {
  title: "Nebula OS",
  description:
    "Nebula OS — the purpose-built Vision AI operating system that unifies video, AI, health, assets, and maintenance.",
};

export default function NebulaOsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-[rgba(12,34,56,0.08)] bg-[#dfe9f2] pt-14 pb-16 md:pt-16 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(126,200,255,0.28),transparent_48%),radial-gradient(ellipse_at_85%_90%,rgba(12,34,56,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto w-[min(100%-2.5rem,96rem)] sm:w-[min(100%-3rem,96rem)]">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="whitespace-nowrap text-[clamp(1.05rem,3.2vw,2.65rem)] font-semibold uppercase leading-[1.1] tracking-[-0.03em] text-blue underline decoration-cyan/50 decoration-2 underline-offset-[0.35em]">
              {nebulaSectionCopy.heading}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-text md:text-[15px]">
              {nebulaSectionCopy.supporting}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="#nebula-architecture" variant="outline">
                View architecture
              </MagneticButton>
            </div>
          </header>

          {/* Core engines, capability modules, cloud layer */}
          <NebulaArchitecture />

          {/* Platform technology chips */}
          <TechnologyChips />

          {/* Benefits */}
          <NebulaBenefits />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:mt-14">
            <MagneticButton href="/book-demo">Book a demo</MagneticButton>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text transition hover:gap-2.5 hover:text-blue"
            >
              Explore solutions
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
