"use client";

import Link from "next/link";

/** "On this page" nav for review pages only. Uses position: sticky under navbar. Full-bleed border-y; links centered in max-w-6xl. */
export type ReviewSectionNavItem = { label: string; href: string };

const NAVBAR_HEIGHT_PX = 72;

export type ReviewSectionNavProps = {
  items: ReviewSectionNavItem[];
  /** Pixels from top when sticky (default: navbar height). */
  stickyTop?: number;
  className?: string;
};

export function ReviewSectionNav({
  items,
  stickyTop = NAVBAR_HEIGHT_PX,
  className = "",
}: ReviewSectionNavProps) {
  return (
    <div
      className={`sticky z-30 w-full border-y border-neutral-200/70 bg-white py-3 ${className}`}
      style={{ top: `${stickyTop}px` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="On this page" className="flex flex-wrap items-center gap-1 overflow-x-auto">
          {items.map((item, i) => (
            <span key={item.href} className="flex shrink-0 items-center gap-1">
              {i > 0 && <span className="text-slate-200" aria-hidden>|</span>}
              <Link
                href={item.href}
                className="rounded px-2 py-1.5 text-sm font-medium text-[#6E6E6E] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1"
                onClick={(e) => {
                  const id = item.href.replace(/^#/, "");
                  const el = document.getElementById(id);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
