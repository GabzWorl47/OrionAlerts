"use client";

import { useEffect } from "react";
import { PageShell } from "@/components/PageShell";
import { Button, Section, SectionHeading } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell>
      <Section narrow>
        <SectionHeading
          eyebrow="Something went wrong"
          title="We couldn't load this page"
          lede="A temporary error stopped this page from loading. Please try again, or head back to the homepage."
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-[10px] border border-cyan/50 bg-cyan px-5 py-3 text-sm font-semibold !text-blue shadow-[0_10px_28px_rgba(12,34,56,0.12)] transition-smooth focus-ring hover:-translate-y-0.5 hover:bg-white"
          >
            Try again
          </button>
          <Button href="/" variant="outline">
            Back to home
          </Button>
        </div>
        {error.digest ? (
          <p className="mt-6 text-center text-xs text-muted">Reference: {error.digest}</p>
        ) : null}
      </Section>
    </PageShell>
  );
}
