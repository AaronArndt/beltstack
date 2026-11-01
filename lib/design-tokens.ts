/**
 * BeltStack color roles live in `app/globals.css` (`brand`, `sage`, `indigo`, `terracotta`).
 * Use these class strings in shared components so section and table patterns stay consistent.
 */

/** Short section underline — terracotta, decorative only. */
export const sectionRuleAccent = "mt-2 h-[2px] w-14 bg-terracotta";

/** Comparison / data table wrapper — slate borders for clarity vs soft stone page bands */
export const tableShell =
  "overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm";

export const tableHeadRow = "border-b border-slate-200 bg-slate-50";

export const tableBodyRow =
  "border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80";

/**
 * Trust / validation hero rows (Updated monthly, Independent reviews, Affiliate disclosure).
 * Deep teal text. Do not use for article body lists.
 */
export const trustIndicatorListClass =
  "flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-brand";

/** Affiliate disclosure trigger in a trust row — hover uses indigo for affordance */
export const trustIndicatorAffiliateButtonClass =
  "flex items-center gap-2 text-left text-sm font-medium text-brand hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded";
