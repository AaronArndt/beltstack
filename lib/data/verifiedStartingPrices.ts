/**
 * Advertised-entry starting prices verified against the 2026 pricing research
 * snapshot (25 Sep 2026). These are lowest public ongoing list prices, not
 * frozen usable-scenario costs.
 *
 * Wave is keyed as payroll:wave so invoicing Wave stays Free.
 */

const CATEGORY_FROM_HREF: Record<string, string> = {
  "/crm": "crm",
  "/field-service": "field-service",
  "/payroll": "payroll",
  "/invoicing": "invoicing",
  "/scheduling": "scheduling",
  "/time-tracking": "time-tracking",
};

/** slug, or `${category}:${slug}` when the same slug exists in more than one category. */
const VERIFIED_STARTING_PRICES: Record<string, string> = {
  "monday-crm": "From $12/user/mo billed annually",
  freshsales: "From $9/user/mo billed annually",
  copper: "From $23/user/mo billed annually",
  close: "From $19/user/mo (Solo, 1 user)",
  salesforce: "From $25/user/mo (paid Sales Cloud)",
  "housecall-pro": "From $59/mo billed annually (Basic)",
  "service-fusion": "From $208/mo billed annually (Starter)",
  workiz: "Custom pricing",
  fieldpulse: "Custom pricing",
  mhelpdesk: "From $169/mo (Pro)",
  kickserv: "From $60/mo (Start)",
  "quickbooks-payroll": "$50/mo + $7/person",
  onpay: "$49/mo + $6/person",
  surepayroll: "$39/mo + $7/employee",
  xero: "$25/mo",
  honeybook: "$29/mo billed annually",
  bonsai: "$9/mo billed annually",
  youcanbookme: "Free",
  gusto: "$49/mo + $6/person",
  "square-payroll": "$35/mo + $6/person paid",
  "patriot-payroll": "$17/mo + $4/worker",
  "payroll:wave": "$40/mo + $6/person",
  hubstaff: "$4.99/user/mo billed annually (2-user min.)",
  harvest: "Free",
  appointy: "Free",
  simplybookme: "Free",
  freshbooks: "$23/mo",
};

export function categoryFromHubHref(href: string | undefined | null): string | undefined {
  if (!href) return undefined;
  return CATEGORY_FROM_HREF[href];
}

export function overlayVerifiedStartingPrice(
  slug: string,
  fallback: string,
  category?: string | null
): string {
  if (category) {
    const keyed = VERIFIED_STARTING_PRICES[`${category}:${slug}`];
    if (keyed) return keyed;
  }
  return VERIFIED_STARTING_PRICES[slug] ?? fallback;
}

export function overlayVerifiedStartingPriceFromHref(
  slug: string,
  fallback: string,
  categoryHref?: string | null
): string {
  return overlayVerifiedStartingPrice(slug, fallback, categoryFromHubHref(categoryHref));
}
