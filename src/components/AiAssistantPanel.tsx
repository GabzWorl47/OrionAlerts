"use client";

import { FormEvent, type Dispatch, type SetStateAction } from "react";
import { X } from "lucide-react";

export type AssistantMessage = { role: "assistant" | "user"; text: string };

function replyFor(input: string) {
  const q = input.toLowerCase();
  if (q.includes("demo"))
    return "I can help you book a demo. Share your company and sites, or open Book a Demo for the full form.";
  if (q.includes("partner"))
    return "Partner tracks cover integrators, technology partners, white-label, and certification. Visit Become a Partner or request a callback.";
  if (q.includes("detection") || q.includes("ai") || q.includes("copilot") || q.includes("vision"))
    return "AI Vision turns camera streams into prioritized alerts — intrusion, PPE, safety events, and custom rules.";
  if (q.includes("search") || q.includes("investigat") || q.includes("footage"))
    return "Investigations stay in the AI Vision and VMS workflow — prioritized alerts with clip context help operators find what matters without scrubbing hours of video.";
  if (q.includes("health"))
    return "Health Monitoring tracks cameras, NVRs, servers, storage, and network status in real time so issues are caught before they impact operations.";
  if (q.includes("support") || q.includes("ticket"))
    return "Describe the issue, site, and urgency — or use Talk to Our Team to open a contact lead.";
  return "I can answer briefly about VMS, AI Vision, Asset Tracking, AMC, and Health Monitoring — or capture a callback request.";
}

/**
 * The Ask Orion chat window. Loaded on demand by `AiAssistant` the first time
 * the launcher is opened; conversation state lives in the launcher so it
 * survives closing and reopening the panel.
 */
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
    <div className="flex h-[28rem] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-2xl">
      <div className="flex items-center justify-between border-b border-line bg-bg px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-text">Ask Orion</p>
          <p className="text-[0.7rem] text-muted">Answers · tickets · visitor capture</p>
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
  );
}
