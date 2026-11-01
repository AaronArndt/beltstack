"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BELTSTACK_RATING_TOOLTIP } from "@/lib/editorial";

/** "How we rate" popover next to scores — matches review pages; hover + click; links to /methodology. */
export function RatingInfoTooltip({ align = "left" }: { align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) === false &&
        popoverRef.current?.contains(target) === false
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <span
      className="relative inline-flex items-baseline align-baseline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="How we rate"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="ml-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-muted-foreground/50 bg-muted-foreground/10 text-[10px] font-semibold text-muted-foreground transition-colors hover:border-indigo hover:bg-sage hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-1"
      >
        i
      </button>
      {open && (
        <div
          ref={popoverRef}
          role="tooltip"
          className={`absolute top-full z-50 mt-1.5 w-64 rounded-lg border border-neutral-200/60 bg-white p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] ${
            align === "right" ? "left-auto right-0" : "left-0"
          }`}
        >
          <p className="text-sm font-semibold text-brand">How we rate</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {BELTSTACK_RATING_TOOLTIP}
          </p>
          <Link
            href="/methodology"
            className="mt-2 inline-block rounded text-xs font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
            onClick={() => setOpen(false)}
          >
            Read methodology →
          </Link>
        </div>
      )}
    </span>
  );
}
