"use client";

import Link from "next/link";
import { BookOpen, CircleHelp, type LucideIcon } from "lucide-react";
import { resourceNavItems } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Blogs: BookOpen,
  FAQs: CircleHelp,
};

type ResourcesMenuProps = {
  onClose: () => void;
};

function ResourceItem({
  label,
  description,
  href,
  onClose,
}: {
  label: string;
  description: string;
  href: string;
  onClose: () => void;
}) {
  const Icon = icons[label] ?? BookOpen;

  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex gap-3 rounded-[10px] px-2 py-2 transition hover:bg-white/8"
    >
      <Icon
        size={20}
        strokeWidth={1.75}
        className="mt-0.5 shrink-0 text-white/55 transition group-hover:text-cyan"
      />
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-snug text-white/90 transition group-hover:text-cyan">
          {label}
        </p>
        <p className="mt-0.5 text-sm leading-snug text-white/45">{description}</p>
      </div>
    </Link>
  );
}

export function ResourcesMenu({ onClose }: ResourcesMenuProps) {
  return (
    <div className="px-2 py-5 xl:px-4">
      <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
        Resources
      </p>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
        {resourceNavItems.map((item) => (
          <ResourceItem
            key={item.href}
            label={item.label}
            description={item.description}
            href={item.href}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
