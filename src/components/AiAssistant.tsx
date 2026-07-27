"use client";

import { FormEvent, useState } from "react";
import { MessageSquare, X } from "lucide-react";

type Message = { role: "assistant" | "user"; text: string };

function replyFor(input: string) {
  const q = input.toLowerCase();
  if (q.includes("demo"))
    return "I can help you book a demo. Share your company and sites, or open Book a Demo for the full form.";
  if (q.includes("partner"))
    return "Partner tracks cover integrators, technology partners, white-label, and certification. Visit Become a Partner or request a callback.";
  if (q.includes("detection") || q.includes("ai"))
    return "AI detection evaluates streams against site policies and surfaces high-confidence events with evidence context.";
  if (q.includes("support") || q.includes("ticket"))
    return "Describe the issue, site, and urgency — or use Talk to Our Team to open a contact lead.";
  return "I can answer briefly about VMS, AI Analytics, Asset Tracking, and AMC — or capture a callback request.";
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi — I’m Ask Orion. Ask about solutions, request a callback, or start a support ticket draft.",
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
        <div className="flex h-[28rem] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-2xl">
          <div className="flex items-center justify-between border-b border-line bg-bg px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-text">Ask Orion</p>
              <p className="text-[0.7rem] text-muted">Answers · tickets · visitor capture</p>
            </div>
            <button
              type="button"
              className="text-muted hover:text-text"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-bg/60 px-3 py-3">
            {messages.map((m, idx) => (
              <div
                key={`${m.role}-${idx}`}
                className={`max-w-[90%] rounded-[14px] px-3 py-2 text-sm ${
                  m.role === "assistant" ? "bg-surface text-muted" : "ml-auto bg-blue/20 text-text"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="border-t border-line bg-surface p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask or request a callback…"
                className="flex-1 rounded-[12px] border border-line bg-white px-3 py-2 text-sm text-text outline-none focus:border-blue/40"
              />
              <button
                type="submit"
                className="rounded-[12px] bg-blue px-3 py-2 text-sm font-semibold text-white hover:bg-[#1f7aef]"
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
        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-3 text-sm font-semibold text-text shadow-xl transition hover:border-blue/40 ai-glow"
        aria-expanded={open}
      >
        <MessageSquare size={16} className="text-cyan" />
        Ask Orion
      </button>
    </div>
  );
}
