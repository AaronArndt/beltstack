"use client";

import Link from "next/link";

export type SectionNavItem = { label: string; href: string };

const NAVBAR_HEIGHT = 72;

export type SectionNavProps = {
  items: SectionNavItem[];
  sticky?: boolean;
  /** Pixels from top when sticky (default: navbar height). Use for navbar + StickyStackFinder when present. */
  offsetTop?: number;
  /** Alias for offsetTop: pixels from top when sticky. Takes precedence if set. */
  stickyTop?: number;
  /** Optional class for the wrapper */
  className?: string;
};

export function SectionNav({
  items,
  sticky = true,
  offsetTop = NAVBAR_HEIGHT,
  stickyTop,
  className = "",
}: SectionNavProps) {
  const topPx = stickyTop ?? offsetTop;
  const topValue =
    topPx === NAVBAR_HEIGHT ? "var(--navbar-h)" : `${topPx}px`;
  const style = sticky ? { top: topValue } as React.CSSProperties : undefined;

  return (
    <nav
      aria-label="On this page"
      className={`flex items-center gap-1 border-t border-neutral-200/70 pt-1 pb-2 ${sticky ? "sticky z-30 border-b border-neutral-200/70 bg-white" : ""} ${className}`}
      style={style}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-1 px-4 sm:px-6 lg:px-8 overflow-x-auto">
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
      </div>
    </nav>
  );
}
