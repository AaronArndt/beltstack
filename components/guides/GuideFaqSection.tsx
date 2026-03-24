"use client";

import { useState } from "react";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";

export type GuideFaqItem = { q: string; a: string };

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
          isFirst={i === 0}
          isLast={i === faqs.length - 1}
          itemClassName="border-b border-neutral-200/60 last:border-b-0"
          answerClassName="text-neutral-700 text-sm leading-relaxed"
        />
      ))}
    </div>
  );
}
