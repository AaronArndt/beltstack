"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
        className="ml-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#57534E]/50 bg-[#57534E]/10 text-[10px] font-semibold text-[#57534E] transition-colors hover:border-[#10B981] hover:bg-[#10B981]/10 hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1"
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
          <p className="text-sm font-semibold text-[#1A2D48]">How we rate</p>
          <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
            Scores combine pricing, features, ease of use, support, and contractor fit. We review sources and update
            regularly.
          </p>
          <Link
            href="/methodology"
            className="mt-2 inline-block rounded text-xs font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            onClick={() => setOpen(false)}
          >
            Read methodology →
          </Link>
        </div>
      )}
    </span>
  );
}
