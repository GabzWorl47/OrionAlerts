"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import type { AssistantMessage } from "@/components/AiAssistantPanel";

const loadPanel = () => import("@/components/AiAssistantPanel");

// The chat window is only needed once someone opens Ask Orion, so it is split
// out of the shared bundle. The launcher button stays server-rendered.
const AiAssistantPanel = dynamic(() => loadPanel().then((mod) => mod.AiAssistantPanel), {
  ssr: false,
});

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      role: "assistant",
      text: "Hi — I’m Ask Orion. Ask about solutions, request a callback, or start a support ticket draft.",
    },
  ]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <AiAssistantPanel
          messages={messages}
          setMessages={setMessages}
          input={input}
          setInput={setInput}
          onClose={() => setOpen(false)}
        />
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        // Warm the panel chunk on intent so the first open feels instant.
        onPointerEnter={() => void loadPanel()}
        onFocus={() => void loadPanel()}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-3 text-sm font-semibold text-text shadow-xl transition hover:border-blue/40 ai-glow"
        aria-expanded={open}
      >
        <MessageSquare size={16} className="text-cyan" />
        Ask Orion
      </button>
    </div>
  );
}
