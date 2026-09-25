/**
 * Optional editorial-maintenance dates. Populate only when a human actually
 * reviewed or checked the page. Do not fabricate historical dates.
 */
export type EditorialDates = {
  /** ISO date (YYYY-MM-DD) if a real publication date is known. */
  publishedDate?: string;
  /** YYYY-MM or YYYY-MM-DD of the last editorial review of the page. */
  lastReviewed?: string;
  /** ISO date pricing facts were last checked against vendor sources. */
  pricingChecked?: string;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** True when the value is a full calendar date, safe for schema.org dateModified. */
export function isFullIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value.trim());
}

/** Formats YYYY-MM-DD as "Month D, YYYY" and YYYY-MM as "Month YYYY". */
export function formatEditorialDate(iso: string): string {
  const trimmed = iso.trim();
  const day = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (day) {
    const month = MONTHS[Number(day[2]) - 1];
    if (!month) return iso;
    return `${month} ${Number(day[3])}, ${day[1]}`;
  }
  const monthOnly = /^(\d{4})-(\d{2})$/.exec(trimmed);
  if (monthOnly) {
    const month = MONTHS[Number(monthOnly[2]) - 1];
    if (!month) return iso;
    return `${month} ${monthOnly[1]}`;
  }
  return iso;
}
