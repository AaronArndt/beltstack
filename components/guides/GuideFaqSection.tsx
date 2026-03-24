"use client";

import { useState } from "react";

export type GuideFaqItem = { q: string; a: string };

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-200/60 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1A2D48] text-sm sm:text-base">{question}</span>
        <span
          className={`shrink-0 text-[#57534E] transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pr-8">
          <p className="text-neutral-700 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function GuideFaqSection({ faqs }: { faqs: GuideFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="rounded-lg border border-neutral-200/60 overflow-hidden">
      {faqs.map((item, i) => (
        <FaqAccordionItem
          key={i}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
