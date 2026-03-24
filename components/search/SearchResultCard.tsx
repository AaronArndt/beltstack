import Link from "next/link";
import type { SearchIndexItem } from "@/lib/search/searchIndex";

type Props = {
  item: SearchIndexItem;
};

const typeBadgeClass =
  "inline-flex items-center rounded-md bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#10B981] border border-[#10B981]/20";

export function SearchResultCard({ item }: Props) {
  return (
    <article className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className={typeBadgeClass}>{item.type}</span>
        <span className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs font-medium text-[#57534E]">
          {item.category}
        </span>
      </div>
      <h3 className="mt-2 text-[#1A2D48] text-lg font-semibold leading-snug">
        <Link
          href={item.href}
          className="inline-flex items-center gap-1 hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
        >
          <span>{item.title}</span>
          <span aria-hidden className="text-[#10B981]">
            →
          </span>
        </Link>
      </h3>
      {item.entity && (
        <p className="mt-1 text-[#57534E] text-sm">
          <span className="font-semibold text-[#1A2D48]">{item.entity}</span>
        </p>
      )}
    </article>
  );
}

