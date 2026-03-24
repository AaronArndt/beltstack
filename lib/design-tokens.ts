/**
 * BeltStack design tokens (refinement pass).
 * Globals keep: page background #F5F5F4, muted #57534E, lighter shadows — see `app/globals.css`.
 *
 * Use these in shared components so section/table patterns stay consistent.
 */

/** Primary H2 section underline — controlled emerald accent for hierarchy (not decorative) */
export const sectionRuleAccent = "mt-2 h-[2px] w-14 bg-[#10B981]";

/** Comparison / data table wrapper — slate borders for clarity vs soft stone page bands */
export const tableShell =
  "overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm";

export const tableHeadRow = "border-b border-slate-200 bg-slate-50";

export const tableBodyRow =
  "border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80";

/**
 * Trust / validation hero rows (Updated monthly, Independent reviews, Affiliate disclosure).
 * Navy primary text + emerald dots — not body-muted. Do not use for article body lists.
 */
export const trustIndicatorListClass =
  "flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-[#1A2D48]";

/** Affiliate disclosure trigger in a trust row — matches row weight; hover uses emerald for affordance */
export const trustIndicatorAffiliateButtonClass =
  "flex items-center gap-2 text-left text-sm font-medium text-[#1A2D48] hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
