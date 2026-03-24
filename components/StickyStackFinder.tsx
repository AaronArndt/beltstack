"use client";

import { useEffect, useState } from "react";

type Option = { value: string; label: string };

type StickyStackFinderProps = {
  sentinelRef: React.RefObject<HTMLDivElement | null>;
  stackCategory: string;
  stackTrade: string;
  onCategoryChange: (value: string) => void;
  onTradeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  categoryOptions: Option[];
  tradeOptions: Option[];
};

export function StickyStackFinder({
  sentinelRef,
  stackCategory,
  stackTrade,
  onCategoryChange,
  onTradeChange,
  onSubmit,
  categoryOptions,
  tradeOptions,
}: StickyStackFinderProps) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sentinelRef]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
    setMobileOpen(false);
  };

  const selectClass =
    "w-full h-11 rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";
  const labelClass = "block text-xs font-semibold text-[#1A2D48] mb-1";

  return (
    <>
      <div
        aria-hidden
        className={`fixed left-0 right-0 z-40 hidden min-h-[72px] items-center border-b border-stone-200/80 bg-white py-4 shadow-sm transition-all duration-200 ease-out md:flex md:min-h-[88px] md:py-5 ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
        style={{ top: "var(--header-offset, 72px)" }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 pb-2 sm:px-6 lg:px-8">
          {/* Desktop: full form (mobile sticky bar hidden; in-page form + drawer used on mobile) */}
          <form
            onSubmit={handleSubmit}
            className="hidden w-full items-center gap-4 md:flex"
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="sticky-stack-category" className={labelClass}>
                I need help with
              </label>
              <select
                id="sticky-stack-category"
                value={stackCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className={selectClass}
                aria-label="I need help with"
              >
                <option value="">Select category</option>
                {categoryOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="min-w-0 flex-1">
              <label htmlFor="sticky-stack-trade" className={labelClass}>
                My trade
              </label>
              <select
                id="sticky-stack-trade"
                value={stackTrade}
                onChange={(e) => onTradeChange(e.target.value)}
                className={selectClass}
                aria-label="My trade"
              >
                <option value="">Select trade</option>
                {tradeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="shrink-0 self-end rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              See Results
            </button>
          </form>

          {/* Mobile: single button */}
          <div className="flex w-full justify-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-md bg-[#10B981] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              Find your stack
            </button>
          </div>
        </div>
      </div>

      {/* Mobile modal / drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-[#1A2D48]/40 md:hidden"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sticky-stack-drawer-title"
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-auto rounded-t-xl border-t border-neutral-200 bg-white p-5 shadow-lg md:hidden"
          >
            <h3
              id="sticky-stack-drawer-title"
              className="text-[#1A2D48] text-lg font-bold"
            >
              Find your stack
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
              <div>
                <label
                  htmlFor="sticky-drawer-category"
                  className={labelClass}
                >
                  I need help with
                </label>
                <select
                  id="sticky-drawer-category"
                  value={stackCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Select category</option>
                  {categoryOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sticky-drawer-trade" className={labelClass}>
                  My trade
                </label>
                <select
                  id="sticky-drawer-trade"
                  value={stackTrade}
                  onChange={(e) => onTradeChange(e.target.value)}
                  className={selectClass}
                >
                  <option value="">Select trade</option>
                  {tradeOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
              >
                See Results
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
