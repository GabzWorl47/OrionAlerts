import { LeadForm } from "@/components/LeadForm";

export const BOOK_DEMO_INTRO =
  "Tell us about your sites and priorities. We’ll schedule a guided walkthrough.";

/**
 * Full-page demo request form for `/book-demo`. Rendered on the server (the
 * form itself hydrates as a client component) so the H1, intro and fields are
 * in the initial HTML. No entrance animation: content must not start hidden.
 */
export function BookDemoPanel() {
  return (
    <div className="relative flex min-h-[calc(100dvh-var(--header-h))] items-center justify-center px-4 py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(43,140,255,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(48,227,255,0.08),transparent_40%)]" />

      <div className="relative z-10 w-full max-w-xl">
        <div className="rounded-[28px] shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
          <LeadForm kind="demo" title="Book a Demo" titleAs="h1" subtitle={BOOK_DEMO_INTRO} />
        </div>
      </div>
    </div>
  );
}
