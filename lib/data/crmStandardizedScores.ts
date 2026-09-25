/**
 * Scoring Methodology v1.0 records for the CRM production pilot.
 *
 * Only products that passed the publication gate are listed.
 * Freshsales, Monday CRM, Copper, and Keap are intentionally absent.
 *
 * Overall scores are never stored — they are derived by publishableOverallScore().
 * Evidence notes are source + verification month + a short fact. Confidence is
 * editorial metadata and is not shown on product cards.
 */

import type {
  EditorialDimensionEntry,
  EditorialDimensionScoreValue,
  EditorialScoreConfidence,
  EditorialScoreEvidenceNote,
  StandardizedEditorialScore,
} from "@/lib/editorial/scoring";

/** Month of the 2C.2 scoring research. No specific day is claimed. */
export const CRM_STANDARDIZED_SCORE_REVIEWED = "2026-09";

/** Verified Pipedrive CRM annual list (Lite), September 2026. */
export const PIPEDRIVE_CRM_STARTING_PRICE = "From $14/user/mo billed annually";

const VERIFIED = CRM_STANDARDIZED_SCORE_REVIEWED;

function note(sourceUrl: string, fact: string): EditorialScoreEvidenceNote {
  return { sourceUrl, verified: VERIFIED, fact };
}

function dim(
  score: EditorialDimensionScoreValue,
  confidence: EditorialScoreConfidence,
  notes: EditorialScoreEvidenceNote[]
): EditorialDimensionEntry {
  return { score, confidence, notes };
}

function score(
  dimensions: StandardizedEditorialScore["dimensions"]
): StandardizedEditorialScore {
  return {
    methodologyVersion: "1.0",
    lastReviewed: CRM_STANDARDIZED_SCORE_REVIEWED,
    dimensions,
  };
}

const HUBSPOT: StandardizedEditorialScore = score({
  pricingValue: dim(4.0, "high", [
    note(
      "https://legal.hubspot.com/hubspot-product-and-services-catalog",
      "Free CRM is documented alongside paid Sales, Marketing, and Service hubs; paid cost scales with seats and hubs."
    ),
    note(
      "https://knowledge.hubspot.com/account/hubspot-subscription-types-and-limits",
      "Official subscription types and limits distinguish Free from Starter, Professional, and Enterprise."
    ),
  ]),
  features: dim(4.5, "high", [
    note(
      "https://knowledge.hubspot.com/account/hubspot-subscription-types-and-limits",
      "Contacts, deals, pipelines, sequences, and reporting are documented; Marketing/Sales/Service hubs add automation depth."
    ),
    note(
      "https://legal.hubspot.com/hubspot-product-and-services-catalog",
      "Product catalog lists CRM objects plus hub add-ons rather than a single all-features SKU."
    ),
  ]),
  easeOfAdoptionAdmin: dim(3.5, "medium", [
    note(
      "https://knowledge.hubspot.com/account/hubspot-subscription-types-and-limits",
      "Self-serve signup exists, but Professional/Enterprise hubs add permissions, attribution, and admin configuration."
    ),
  ]),
  support: dim(4.0, "high", [
    note(
      "https://knowledge.hubspot.com/help-and-resources/get-help-with-hubspot",
      "Official get-help matrix documents support channels and plan entitlements (updated September 2026)."
    ),
  ]),
  integrations: dim(4.5, "high", [
    note(
      "https://legal.hubspot.com/hubspot-product-and-services-catalog",
      "Native email/ads connections and a large app marketplace are part of the documented product surface."
    ),
  ]),
  workflowFit: dim(4.0, "medium", [
    note(
      "https://knowledge.hubspot.com/account/hubspot-subscription-types-and-limits",
      "All-in-one CRM plus hubs fits marketing-and-sales SMBs; the same breadth is heavier than a pipeline-only tool."
    ),
  ]),
});

const SALESFORCE: StandardizedEditorialScore = score({
  pricingValue: dim(2.5, "high", [
    note(
      "https://www.salesforce.com/sales/pricing/",
      "Sales Cloud list pricing starts near $25/user/month; editions, add-ons, and quotes make total cost hard to predict for SMBs."
    ),
  ]),
  features: dim(5.0, "high", [
    note(
      "https://www.salesforce.com/sales/pricing/",
      "Sales Cloud documents leads, contacts, opportunities, automation, reporting, and customization depth unmatched in this CRM cohort."
    ),
  ]),
  easeOfAdoptionAdmin: dim(2.0, "medium", [
    note(
      "https://www.salesforce.com/sales/pricing/",
      "Edition model and customization surface imply dedicated administration; small teams cannot treat it as self-serve CRM."
    ),
  ]),
  support: dim(3.5, "high", [
    note(
      "https://www.salesforce.com/sales/pricing/",
      "Documentation and Trailhead are extensive; higher-touch support is plan-tiered and often sold as Premier."
    ),
  ]),
  integrations: dim(5.0, "high", [
    note(
      "https://www.salesforce.com/sales/pricing/",
      "AppExchange and enterprise integration are a documented platform differentiator."
    ),
  ]),
  workflowFit: dim(2.5, "medium", [
    note(
      "https://www.salesforce.com/sales/pricing/",
      "Built for enterprise process complexity; a typical small-business operator without an admin is not the primary design point."
    ),
  ]),
});

const ZOHO_CRM: StandardizedEditorialScore = score({
  pricingValue: dim(4.5, "high", [
    note(
      "https://www.zoho.com/sites/zweb/images/crm/zohocrm-edition-comparison-usd.pdf",
      "USD edition comparison lists a free edition and low paid list prices relative to HubSpot paid hubs and Salesforce."
    ),
    note(
      "https://www.zoho.com/crm/pricing.html",
      "Official pricing page publishes edition list prices and user/record limits."
    ),
  ]),
  features: dim(4.5, "high", [
    note(
      "https://www.zoho.com/sites/zweb/images/crm/zohocrm-edition-comparison-usd.pdf",
      "Edition matrix covers pipeline, automation, reports, and Zoho suite modules across paid plans."
    ),
  ]),
  easeOfAdoptionAdmin: dim(3.0, "medium", [
    note(
      "https://www.zoho.com/sites/zweb/images/crm/zohocrm-edition-comparison-usd.pdf",
      "Breadth of modules and workflow options means a small team can run it, but administration is nontrivial."
    ),
  ]),
  support: dim(4.0, "high", [
    note(
      "https://www.zoho.com/crm/support-plans.html",
      "Official support-plans matrix documents channels and entitlements by plan."
    ),
  ]),
  integrations: dim(4.0, "high", [
    note(
      "https://www.zoho.com/crm/pricing.html",
      "Zoho suite connections plus marketplace/third-party integrations are documented on the product pricing/edition surface."
    ),
  ]),
  workflowFit: dim(4.0, "medium", [
    note(
      "https://www.zoho.com/crm/pricing.html",
      "Strong SMB value fit, especially for Zoho-suite users; less of a marketing-led all-in-one than HubSpot."
    ),
  ]),
});

const PIPEDRIVE: StandardizedEditorialScore = score({
  pricingValue: dim(4.0, "high", [
    note(
      "https://www.pipedrive.com/en/pricing",
      "Annual list: Lite $14, Growth $39, Premium $59, Ultimate $79 per user/month (September 2026)."
    ),
    note(
      "https://support.pipedrive.com/en/article/how-does-pricing-work-in-pipedrive",
      "Official pricing article documents per-seat billing and plan structure (help article updated September 2026)."
    ),
  ]),
  features: dim(4.0, "high", [
    note(
      "https://support.pipedrive.com/en/article/pipedrive-plans-and-features",
      "Plans document pipeline, activities, email, and reporting; the product is sales-first rather than a marketing hub."
    ),
  ]),
  easeOfAdoptionAdmin: dim(4.0, "medium", [
    note(
      "https://support.pipedrive.com/en/article/pipedrive-plans-and-features",
      "Pipeline-centric product is straightforward to adopt; higher plans still require admin of automations and permissions."
    ),
  ]),
  support: dim(3.5, "high", [
    note(
      "https://support.pipedrive.com/en/contact-us",
      "Official contact page documents support channels and how to reach Pipedrive."
    ),
    note(
      "https://support.pipedrive.com/en/article/pipedrive-plans-and-features",
      "Plan comparison includes support-related entitlements alongside product features."
    ),
  ]),
  integrations: dim(4.0, "high", [
    note(
      "https://support.pipedrive.com/en/article/pipedrive-plans-and-features",
      "Marketplace and email/calendar connections are documented; the ecosystem is narrower than Salesforce or HubSpot."
    ),
  ]),
  workflowFit: dim(4.0, "medium", [
    note(
      "https://support.pipedrive.com/en/article/pipedrive-plans-and-features",
      "Fits SMB sales-pipeline teams; weaker fit when marketing and sales must live in one native platform."
    ),
  ]),
});

const CLOSE: StandardizedEditorialScore = score({
  pricingValue: dim(3.0, "high", [
    note(
      "https://www.close.com/pricing",
      "Published per-user plans starting around $49/month; calling is native, and entry cost is higher than pipeline-only Lite CRMs."
    ),
  ]),
  features: dim(4.0, "high", [
    note(
      "https://www.close.com/pricing",
      "Pricing/product surface documents calling, email, SMS, and pipeline in one inside-sales CRM."
    ),
  ]),
  easeOfAdoptionAdmin: dim(4.0, "medium", [
    note(
      "https://www.close.com/pricing",
      "Opinionated inside-sales workflow is quick to adopt; it remains a full CRM to administer."
    ),
  ]),
  support: dim(3.5, "high", [
    note("https://close.com/support", "Official support page documents how customers get help."),
    note("https://help.close.com", "Help Center documents product workflows and support resources."),
  ]),
  integrations: dim(3.5, "high", [
    note(
      "https://www.close.com/pricing",
      "Core sales integrations are documented; the marketplace is smaller than HubSpot or Salesforce."
    ),
  ]),
  workflowFit: dim(3.0, "medium", [
    note(
      "https://www.close.com/pricing",
      "Best fit for inside-sales/calling teams; less of a general small-business CRM than HubSpot or Zoho CRM."
    ),
  ]),
});

const CRM_STANDARDIZED_SCORES: Record<string, StandardizedEditorialScore> = {
  hubspot: HUBSPOT,
  salesforce: SALESFORCE,
  "zoho-crm": ZOHO_CRM,
  pipedrive: PIPEDRIVE,
  close: CLOSE,
};

export function getCrmStandardizedScore(slug: string): StandardizedEditorialScore | undefined {
  return CRM_STANDARDIZED_SCORES[slug];
}

export function getCrmStandardizedSlugs(): string[] {
  return Object.keys(CRM_STANDARDIZED_SCORES);
}
