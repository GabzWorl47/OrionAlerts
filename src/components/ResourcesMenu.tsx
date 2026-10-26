"use client";

import Link from "next/link";
import { resourceMenuItems, type ResourceMenuItem } from "@/lib/mega-menu";

type ResourcesMenuProps = {
  onClose: () => void;
};

function ResourceItem({
  item,
  onClose,
}: {
  item: ResourceMenuItem;
  onClose: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex gap-3 rounded-[10px] px-2 py-2 transition hover:bg-white/8 focus-visible:bg-white/8"
    >
      <Icon
        size={20}
        strokeWidth={1.75}
        className="mt-0.5 shrink-0 text-white/55 transition group-hover:text-cyan group-focus-visible:text-cyan"
      />
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-snug text-white/90 transition group-hover:text-cyan group-focus-visible:text-cyan">
          {item.label}
        </p>
        <p className="mt-0.5 text-sm leading-snug text-white/45">{item.description}</p>
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

      <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        {resourceMenuItems.map((item) => (
          <li key={item.href}>
            <ResourceItem item={item} onClose={onClose} />
          </li>
        ))}
      </ul>
    </div>
  );
}
