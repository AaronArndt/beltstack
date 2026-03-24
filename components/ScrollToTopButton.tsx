"use client";

import { useCallback, useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

/**
 * Fixed bottom-right control to scroll back to the top. Hidden near the top of the page.
 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(typeof window !== "undefined" && window.scrollY > SHOW_AFTER_PX);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-[#1A2D48] shadow-sm transition-colors hover:border-[#10B981]/50 hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
