"use client";

import { FormEvent, useState } from "react";

type Message = { role: "assistant" | "user"; text: string };

const starterReplies: Record<string, string> = {
  demo: "I can help you book a demo. Share your company and sites of interest, or go to /book-demo for the full form.",
  partner:
    "Partner programs cover white-label, pricing enablement, training, and portal access. Visit /partners or ask for a callback.",
  support:
    "I can open a support ticket draft. Describe the issue, site, and urgency — or use Connect With Us.",
  default:
    "I can answer briefly about VMS, AI Analytics, Asset Tracking, and AMC Management — or capture a callback request.",
};

function replyFor(input: string) {
  const q = input.toLowerCase();
  if (q.includes("demo")) return starterReplies.demo;
  if (q.includes("partner") || q.includes("reseller") || q.includes("white"))
    return starterReplies.partner;
  if (q.includes("support") || q.includes("ticket") || q.includes("down"))
    return starterReplies.support;
  if (q.includes("vms"))
    return "OrionAlerts VMS centralizes multi-site live walls, recording, and role-based access. Want a demo path or industry fit?";
  if (q.includes("analytics") || q.includes("ai"))
    return "AI Analytics turns camera feeds into prioritized alerts — intrusion, crowding, PPE, and custom rules. Book a demo to see your scenario.";
  if (q.includes("callback") || q.includes("call"))
    return "Callback noted. Use Connect With Us with topic “Sales conversation” and we’ll route it. I can also capture details here.";
  return starterReplies.default;
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi — I’m the OrionAlerts assistant. Ask about solutions, request a callback, or start a support ticket draft.",
    },
  ]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: replyFor(text) },
    ]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <div className="surface flex h-[28rem] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-[var(--radius)] shadow-2xl">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Orion Assistant</p>
              <p className="text-[0.7rem] text-white/60">Answers · tickets · visitor capture</p>
            </div>
            <button
              type="button"
              className="text-white/70 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-paper px-3 py-3">
            {messages.map((m, idx) => (
              <div
                key={`${m.role}-${idx}`}
                className={`max-w-[90%] rounded-lg px-3 py-2 text-sm ${
                  m.role === "assistant"
                    ? "bg-white text-ink-soft shadow-sm"
                    : "ml-auto bg-signal text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="border-t border-line bg-white p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask or request a callback…"
                className="flex-1 rounded border border-line px-3 py-2 text-sm outline-none focus:border-signal"
              />
              <button
                type="submit"
                className="rounded bg-ink px-3 py-2 text-sm font-semibold text-white hover:bg-ink-soft"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-ink-soft"
        aria-expanded={open}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
        </span>
        Ask Orion
      </button>
    </div>
  );
}
