import Link from "next/link";
import { getSoftwareCategoryHubLabel, getSoftwareCategoryShortLabel } from "@/lib/data/tradeHubs";
import type { TradeHubCategoryPreview } from "@/lib/data/tradeHubs/resolveTradeHubCategoryPreview";
import type { TradeHubCategoryStackItem } from "@/lib/types/tradeHub";

type TradeHubStackSummaryRow = {
  item: TradeHubCategoryStackItem;
  preview: TradeHubCategoryPreview;
};

export function TradeHubStackSummary({
  heading,
  rows,
}: {
  heading: string;
  rows: readonly TradeHubStackSummaryRow[];
}) {
  const headingId = "trade-hub-stack-summary-heading";

  return (
    <div className="mt-8">
      <h3 id={headingId} className="text-lg font-bold text-[#1A2D48] sm:text-xl">
        {heading}
      </h3>
      <div
        className="mt-4 rounded-lg border border-stone-200 bg-white"
        role="table"
        aria-labelledby={headingId}
      >
        <div
          className="hidden border-b border-stone-200 bg-stone-50 px-4 py-2.5 md:grid md:grid-cols-[minmax(10rem,1fr)_minmax(13rem,1.5fr)_minmax(0,1.1fr)_auto] md:gap-4"
          role="row"
        >
          <div role="columnheader" className="text-xs font-semibold uppercase tracking-wide text-[#1A2D48]">
            Category
          </div>
          <div role="columnheader" className="text-xs font-semibold uppercase tracking-wide text-[#1A2D48]">
            Recommended pick
          </div>
          <div role="columnheader" className="text-xs font-semibold uppercase tracking-wide text-[#1A2D48]">
            Why it matters
          </div>
          <div role="columnheader" className="text-xs font-semibold uppercase tracking-wide text-[#1A2D48] md:text-right">
            Details
          </div>
        </div>
        {rows.map(({ item, preview }) => {
          const shortLabel = getSoftwareCategoryShortLabel(preview.softwareCategory);
          const firstPick = preview.picks[0];
          const linkLabel = preview.mapped ? "See recommendations →" : `View ${shortLabel} hub →`;
          const linkAria = preview.mapped
            ? `See ${item.heading} recommendations`
            : `${getSoftwareCategoryHubLabel(preview.softwareCategory)} — opens category hub`;

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-2 border-b border-stone-200/80 px-4 py-4 last:border-0 md:grid-cols-[minmax(10rem,1fr)_minmax(13rem,1.5fr)_minmax(0,1.1fr)_auto] md:items-center md:gap-4"
              role="row"
            >
              <div role="cell" className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#57534E] md:hidden">Category</div>
                <p className="text-sm font-semibold leading-snug text-[#1A2D48]">{item.heading}</p>
              </div>
              <div role="cell" className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#57534E] md:hidden">
                  Recommended pick
                </div>
                {firstPick != null ? (
                  <div className="flex min-w-0 items-center gap-2.5">
                    {firstPick.pick.logoSrc ? (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded border border-stone-200 bg-white">
                        <img
                          src={firstPick.pick.logoSrc}
                          alt=""
                          className="max-h-7 max-w-7 object-contain"
                        />
                      </span>
                    ) : null}
                    <p className="min-w-0 text-base font-bold leading-snug text-[#1A2D48]">
                      {firstPick.pick.name}
                    </p>
                  </div>
                ) : null}
              </div>
              <div role="cell" className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#57534E] md:hidden">
                  Why it matters
                </div>
                <p
                  className="line-clamp-2 text-sm leading-snug text-[#57534E] md:line-clamp-1"
                  title={item.body}
                >
                  {item.body}
                </p>
              </div>
              <div role="cell" className="md:text-right">
                <Link
                  href={preview.href}
                  className="inline-block text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
                  aria-label={linkAria}
                >
                  {linkLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
