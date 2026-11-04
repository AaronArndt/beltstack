/**
 * BeltStack color roles live in `app/globals.css`.
 * Navy `#1A2D48` is structure. Emerald `#10B981` (hover `#0D9668`) is buttons, links, and accents.
 * Mint `#E7F8F2` is selected and hover surfaces. The page canvas is stone `#F5F5F4`.
 */

/** Short section underline — emerald accent. */
export const sectionRuleAccent = "mt-2 h-[2px] w-14 bg-emerald";

/**
 * Filled CTA buttons, including outbound vendor links.
 * Emerald fill, white label, 14px semibold. Pair with existing padding, radius, and shadow.
 */
export const vendorCtaButtonClass =
  "bg-emerald text-sm font-semibold text-white hover:bg-emerald-hover";

/**
 * Outlined CTA buttons (for example Read Review beside Learn More).
 * White fill, emerald label and border. Hover uses mint.
 * 14px semibold, matching the filled CTA label.
 */
export const secondaryButtonClass =
  "border border-emerald bg-white text-sm font-semibold text-emerald hover:bg-mint";

/** Comparison / data table wrapper — slate borders for clarity vs soft stone page bands */
export const tableShell =
  "overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm";

export const tableHeadRow = "border-b border-slate-200 bg-slate-50";

export const tableBodyRow =
  "border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80";

/**
 * Trust / validation hero rows (Updated monthly, Independent reviews, Affiliate disclosure).
 * Navy text. Do not use for article body lists.
 */
export const trustIndicatorListClass =
  "flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-brand";

/** Affiliate disclosure trigger in a trust row — hover uses emerald for affordance */
export const trustIndicatorAffiliateButtonClass =
  "flex items-center gap-2 text-left text-sm font-medium text-brand hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded";
