"use client";

import { FormEvent, type Dispatch, type SetStateAction, useState } from "react";
import { X, Loader2 } from "lucide-react";
import Link from "next/link";

export type AssistantMessage = { role: "assistant" | "user"; text: string };

function renderFormattedText(text: string) {
  // Simple markdown link parser [label](href)
  const parts: (string | React.ReactNode)[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    parts.push(
      <Link
        key={`${href}-${match.index}`}
        href={href}
        className="font-semibold text-blue underline hover:text-blue/80"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export function AiAssistantPanel({
  messages,
  setMessages,
  input,
  setInput,
  onClose,
}: {
  messages: AssistantMessage[];
  setMessages: Dispatch<SetStateAction<AssistantMessage[]>>;
  input: string;
  setInput: (value: string) => void;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    // Append user query immediately
    const userMsg: AssistantMessage = { role: "user", text };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: newHistory.slice(-6),
        }),
      });

      const data = (await res.json()) as { reply?: string };
      const reply = data.reply || "OrionAlerts connects VMS, AI video analytics, and CCTV health. How can I assist you?";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I can answer questions regarding OrionAlerts VMS, AI Vision, Health Monitoring, Asset Tracking, and our Partner Program. You can also [Book a Demo](/book-demo) or [Contact Support](/contact).",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[28rem] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-2xl">
      <div className="flex items-center justify-between border-b border-line bg-bg px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-text">Ask Orion</p>
          <p className="text-[0.7rem] text-muted">AI Assistant · Answers & Navigation</p>
        </div>
        <button
          type="button"
          className="text-muted hover:text-text"
          onClick={onClose}
          aria-label="Close assistant"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-bg/60 px-3 py-3">
        {messages.map((m, idx) => (
          <div
            key={`${m.role}-${idx}`}
            className={`max-w-[90%] rounded-[14px] px-3 py-2 text-sm leading-relaxed ${
              m.role === "assistant" ? "bg-surface text-muted shadow-sm" : "ml-auto bg-blue/15 text-text"
            }`}
          >
            {m.role === "assistant" ? renderFormattedText(m.text) : m.text}
          </div>
        ))}
        {loading ? (
          <div className="flex max-w-[80%] items-center gap-2 rounded-[14px] bg-surface px-3 py-2 text-xs text-muted shadow-sm">
            <Loader2 size={13} className="animate-spin text-blue" />
            <span>Thinking…</span>
          </div>
        ) : null}
      </div>

      <form onSubmit={onSubmit} className="border-t border-line bg-surface p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI alerts, VMS, or partner program…"
            disabled={loading}
            className="flex-1 rounded-[12px] border border-line bg-surface-2 px-3 py-2 text-xs text-text outline-none focus:border-blue/40 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-[12px] bg-blue px-3 py-2 text-xs font-semibold text-white hover:bg-blue/90 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
