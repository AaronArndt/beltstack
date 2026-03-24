"use client";

import { useId, useState } from "react";

export type FaqAccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  /** First row in the list — top corners match the card (`rounded-lg`). */
  isFirst?: boolean;
  /** Last row in the list — bottom corners match the card (`rounded-lg`). */
  isLast?: boolean;
  /** Row wrapper: borders between items. */
  itemClassName?: string;
  /** Answer paragraph typography. */
  answerClassName?: string;
};

/** FAQ row with the same hover / active motion as `SoftwarePickCard` accordions. */
export function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
  isLast,
  itemClassName = "border-b border-stone-200 last:border-b-0",
  answerClassName = "text-[#57534E] text-sm leading-relaxed",
}: FaqAccordionItemProps) {
  const baseId = useId();
  const panelId = `${baseId}-faq-panel`;
  const buttonId = `${baseId}-faq-button`;
  const [hover, setHover] = useState(false);
  const showGreenOutline = hover && !isOpen;
  const topRadius = isFirst ? "rounded-t-lg" : "";
  const bottomRadiusWhenClosed = isLast && !isOpen ? "rounded-b-lg" : "";

  return (
    <div
      className={itemClassName}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-3 text-left transition-[background-color,box-shadow] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 sm:px-6 ${topRadius} ${bottomRadiusWhenClosed} ${
          isOpen
            ? "bg-[#E7F8F2]"
            : showGreenOutline
              ? "bg-[#E7F8F2] shadow-[inset_0_0_0_1px_#10B981]"
              : "bg-white hover:bg-[#E7F8F2]"
        }`}
      >
        <span className="font-semibold text-[#1A2D48] text-sm sm:text-base">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-[#57534E] transition-transform duration-200 ease-out ${
            isOpen ? "-rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={`border-t border-stone-200/80 bg-white px-5 pb-5 pt-4 sm:px-6${isLast ? " rounded-b-lg" : ""}`}
        >
          <p className={answerClassName}>{answer}</p>
        </div>
      )}
    </div>
  );
}
