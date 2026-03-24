"use client";

import Link from "next/link";
import { useState } from "react";

export type GuideSidebarItem = {
  name: string;
  logoSrc?: string;
  rating?: string | number;
  bestFor?: string;
  reviewHref: string;
  visitHref?: string;
};

type GuideSidebarProps = {
  title: string;
  items: readonly GuideSidebarItem[];
  /** Sticky top offset in px (e.g. below navbar). Default 24. */
  stickyTop?: number;
};

function SidebarItem({ item }: { item: GuideSidebarItem }) {
  const [imgError, setImgError] = useState(false);
  const showLogo = item.logoSrc != null && item.logoSrc !== "" && !imgError;
  const ratingStr =
    item.rating != null
      ? typeof item.rating === "number"
        ? String(item.rating)
        : item.rating
      : null;

  return (
    <div className="flex flex-col gap-2 pt-4 first:pt-0 border-t border-neutral-100 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-3">
        {showLogo && (
          <img
            src={item.logoSrc}
            alt=""
            className="h-9 w-auto max-w-[72px] object-contain shrink-0"
            onError={() => setImgError(true)}
          />
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-[#1A2D48] font-semibold text-sm leading-tight">{item.name}</h3>
          {ratingStr != null && (
            <p className="text-[#10B981] font-semibold text-sm mt-0.5">{ratingStr} rating</p>
          )}
          {item.bestFor != null && item.bestFor !== "" && (
            <p className="text-[#57534E] text-xs leading-snug mt-1">{item.bestFor}</p>
          )}
          <Link
            href={item.reviewHref}
            className="inline-block mt-2 text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1 rounded"
          >
            Read review →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function GuideSidebar({ title, items, stickyTop = 24 }: GuideSidebarProps) {
  return (
    <aside
      className="hidden lg:block lg:sticky lg:self-start lg:w-full"
      style={{ top: `${stickyTop}px` }}
      aria-label="Recommended payroll software"
    >
      <div className="border border-neutral-200/60 rounded-lg bg-white p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]">
        <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">Related reviews</p>
        <h2 className="text-[#1A2D48] text-base font-semibold leading-tight">{title}</h2>
        <div className="mt-4 space-y-0">
          {items.map((item) => (
            <SidebarItem key={item.reviewHref} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
