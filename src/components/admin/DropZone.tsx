"use client";

import { useRef, useState, type DragEvent, type ReactNode } from "react";
import { LoaderCircle, Upload } from "lucide-react";

export function DropZone({
  label,
  hint,
  accept,
  busy = false,
  disabled = false,
  onFiles,
  children,
}: {
  label: string;
  hint: string;
  accept: string;
  busy?: boolean;
  disabled?: boolean;
  onFiles: (files: FileList) => void | Promise<void>;
  children?: ReactNode;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    if (!disabled && !busy) setDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  }

  async function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
    if (disabled || busy) return;
    if (event.dataTransfer.files?.length) {
      await onFiles(event.dataTransfer.files);
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(event) => void handleDrop(event)}
      className={`rounded-[16px] border border-dashed px-4 py-5 transition ${
        dragging
          ? "border-blue bg-blue/5"
          : "border-line bg-surface hover:border-blue/35"
      } ${disabled || busy ? "opacity-70" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-text">
            <Upload size={15} className="text-blue" />
            {label}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{hint}</p>
        </div>
        <button
          type="button"
          disabled={disabled || busy}
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-semibold text-muted-strong transition hover:border-blue/30 hover:text-blue disabled:opacity-60"
        >
          {busy ? <LoaderCircle size={14} className="animate-spin" /> : null}
          {busy ? "Working…" : "Browse"}
        </button>
      </div>
      {children}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        disabled={disabled || busy}
        onChange={(event) => {
          if (event.target.files?.length) {
            void onFiles(event.target.files);
            event.target.value = "";
          }
        }}
      />
    </div>
  );
}
