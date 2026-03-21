import type { ReactNode } from "react";

/**
 * Canonical, site-wide product facts for SoftwarePickCard.
 * One record per product slug within a vertical (payroll, crm, …).
 * Pages must not duplicate summary/pros/cons/flags for the same slug.
 */
export type SoftwarePickCardFeatureFlags = {
  hasFreeTrial: boolean;
  hasFreePlan: boolean;
  /** Broad marketplace / accounting / HRIS / API integrations — not “any Zapier” */
  hasIntegrations: boolean;
};

export type SoftwarePickCardContent = SoftwarePickCardFeatureFlags & {
  slug: string;
  name: string;
  /** Default badge for the card (crown label). Pages may override for context. */
  badge: string;
  /** Primary highlight paragraph (card summary). */
  description: string;
  /** Second paragraph under Highlights. */
  editorialParagraph: string;
  rating: string;
  /** Shown next to pricing accordion opener, e.g. "$40/mo" */
  startingPrice: string;
  logoSrc: string;
  visitUrl: string;
  /** Comparison page slugs (e.g. gusto-vs-onpay); first 3 used on the card */
  compareSlugs: string[];
  pros: string[];
  cons: string[];
  /** Plain text for pricing accordion body */
  pricingSummary: string;
  /**
   * Short “who it’s for” line for hub/best-of comparison tables.
   * Falls back to `badge` when unset.
   */
  comparisonTableBestFor?: string;
  /** Payroll best-of comparison table */
  payrollTypes?: string;
  standoutFeature?: string;
};

/** Optional overrides when rendering a canonical pick on a specific page */
export type SoftwarePickCardRenderOverrides = {
  id?: string;
  badgeText?: string;
};

export type SoftwarePickCardPricingDetails = ReactNode;
