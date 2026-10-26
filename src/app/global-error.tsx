"use client";

/**
 * Last-resort boundary for errors in the root layout itself. It replaces the
 * whole document, so it can't rely on globals.css, fonts, or site chrome.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f4f6f8",
          color: "#0c2238",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <main>
          <p style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>
            Orion<span style={{ color: "#3b9ae1" }}>Alerts</span>
          </p>
          <h1 style={{ fontSize: 28, margin: "24px 0 8px" }}>Something went wrong</h1>
          <p style={{ color: "#64788c", margin: "0 0 24px" }}>
            Please try again in a moment.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                background: "#0c2238",
                color: "#fff",
                border: 0,
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* Full reload on purpose: the app shell may be broken. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                border: "1px solid #0c2238",
                color: "#0c2238",
                borderRadius: 999,
                padding: "12px 24px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to home
            </a>
          </div>
          {error.digest ? (
            <p style={{ marginTop: 24, fontSize: 12, color: "#64788c" }}>Reference: {error.digest}</p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
