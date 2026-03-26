/**
 * CRM hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/crm/page.tsx.
 */

import { getCrmReviewUrl, getCrmCompareUrl, getCrmBestForUrl } from "@/lib/routes";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import type { FeaturedPickRef } from "@/components/hubs/HubPageTemplate";
import type { ComparisonTableRow } from "@/components/hubs/HubPageTemplate";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";

// ——— Logo paths ———
const LOGOS = {
  hubspot: "/Logos/hubspot.jpeg",
  salesforce: "/Logos/salesforce.jpeg",
  zoho: "/Logos/zoho.jpeg",
  pipedrive: "/Logos/pipedrive.jpeg",
  monday: "/Logos/monday.jpeg",
  freshsales: "/Logos/freshsales.jpeg",
  copper: "/Logos/copper.png",
  close: "/Logos/close.jpeg",
  keap: "/Logos/keap.jpeg",
} as const;

/** Guide cards for the CRM Guides section on the hub. */
export type CrmGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

const CRM_GUIDES_BASE = "/crm/guides";

export const CRM_HUB_GUIDES: CrmGuideItem[] = [
  { slug: "how-to-choose-crm-software", title: "How to Choose CRM Software", description: "Evaluation criteria: pipeline design, automation depth, integrations, and total cost at your seat count.", href: `${CRM_GUIDES_BASE}/how-to-choose-crm-software` },
  { slug: "what-is-crm-software", title: "What Is CRM Software?", description: "Definitions, core objects (contacts, deals), and how CRM fits next to email and support tools.", href: `${CRM_GUIDES_BASE}/what-is-crm-software` },
  { slug: "crm-vs-marketing-automation", title: "CRM vs Marketing Automation", description: "Where each tool starts and stops—and how teams avoid duplicate systems.", href: `${CRM_GUIDES_BASE}/crm-vs-marketing-automation` },
  { slug: "crm-for-small-business", title: "CRM Concepts for Small Teams", description: "Adoption, permissions, and scope control so a small team doesn’t drown in features.", href: `${CRM_GUIDES_BASE}/crm-for-small-business` },
];

/** Editorial “best CRM by use case” blocks (scenario-based). */
export const CRM_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Small sales teams needing clear pipeline visibility",
    body: "If your priority is a simple deal pipeline and activity history—not a full marketing suite—look for fast onboarding, clear stages, and email or calendar integration your reps will actually use.",
    links: [
      { label: "Best CRM for small business →", href: getCrmBestForUrl("small-business") },
      { label: "Pipedrive vs Freshsales →", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
    ],
  },
  {
    title: "Outbound-heavy and activity-driven selling",
    body: "High-touch sales teams need tasks, call logging, and sequencing without admin overhead. The right CRM makes follow-ups visible and reporting honest about pipeline health.",
    links: [{ label: "Best CRM for sales teams →", href: getCrmBestForUrl("sales-teams") }],
  },
  {
    title: "All-in-one marketing + sales alignment",
    body: "When marketing and sales must share one customer record, you need native email, forms, and automation—often where HubSpot-style platforms win—balanced against cost at scale.",
    links: [
      { label: "Monday vs HubSpot →", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
      { label: "Full rankings →", href: "/crm/best-crm-software" },
    ],
  },
  {
    title: "Startups moving fast with lean ops",
    body: "Early-stage teams need something teams adopt quickly, with room to add seats and automation without a six-month implementation.",
    links: [{ label: "Best CRM for startups →", href: getCrmBestForUrl("startups") }],
  },
  {
    title: "Agencies and multi-account workflows",
    body: "Client businesses need visibility across accounts, retainers, and handoffs—without turning every contact into an unstructured list. Evaluate reporting and project tie-ins, not just CRM defaults.",
    links: [{ label: "Best CRM for agencies →", href: getCrmBestForUrl("agencies") }],
  },
  {
    title: "Solos and freelancers",
    body: "A full enterprise CRM can overwhelm a solo operator; you still need reliable follow-up and deal tracking. The goal is lightweight pipeline discipline, not unused modules.",
    links: [
      { label: "Best CRM for freelancers →", href: getCrmBestForUrl("freelancers") },
      { label: "Go to CRM by team type →", href: "#by-trade" },
    ],
  },
];

/** Top CRM picks — slugs resolve to canonical `crmBestSoftware` card data */
export const CRM_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "hubspot" },
  { slug: "salesforce" },
  { slug: "zoho-crm" },
  { slug: "pipedrive" },
  { slug: "monday-crm" },
];

/** Comparison table rows for the hub (all CRM tools) — canonical pick data. */
export const CRM_COMPARISON_TABLE_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("crm", [
    "hubspot",
    "salesforce",
    "zoho-crm",
    "pipedrive",
    "monday-crm",
    "freshsales",
    "copper",
    "close",
    "keap",
  ]).map(toHubComparisonTableRow),
];

/** Card data for Popular CRM comparisons (logos + vs + summary + link). */
export type CrmPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc: string };
  productB: { name: string; logoSrc: string };
  summaryParagraph: string;
  href: string;
};

export const CRM_POPULAR_COMPARISONS: CrmPopularComparisonCard[] = [
  {
    slug: "hubspot-vs-salesforce",
    productA: { name: "HubSpot", logoSrc: LOGOS.hubspot },
    productB: { name: "Salesforce", logoSrc: LOGOS.salesforce },
    summaryParagraph:
      "HubSpot offers a friendlier entry point and strong free tier; Salesforce scales for large teams and complex customization. Compare features, pricing, and ease of use.",
    href: getCrmCompareUrl("hubspot-vs-salesforce"),
  },
  {
    slug: "hubspot-vs-zoho-crm",
    productA: { name: "HubSpot", logoSrc: LOGOS.hubspot },
    productB: { name: "Zoho CRM", logoSrc: LOGOS.zoho },
    summaryParagraph:
      "Both offer free tiers and solid CRM. HubSpot excels at marketing-sales alignment; Zoho CRM fits teams already using Zoho apps and want one ecosystem.",
    href: getCrmCompareUrl("hubspot-vs-zoho-crm"),
  },
  {
    slug: "zoho-crm-vs-pipedrive",
    productA: { name: "Zoho CRM", logoSrc: LOGOS.zoho },
    productB: { name: "Pipedrive", logoSrc: LOGOS.pipedrive },
    summaryParagraph:
      "Zoho CRM is broader and suite-oriented; Pipedrive is built for sales pipelines and activity-based selling. Compare which fits your sales process.",
    href: getCrmCompareUrl("zoho-crm-vs-pipedrive"),
  },
  {
    slug: "monday-crm-vs-hubspot",
    productA: { name: "Monday", logoSrc: LOGOS.monday },
    productB: { name: "HubSpot", logoSrc: LOGOS.hubspot },
    summaryParagraph:
      "Monday brings customizable boards and project-style workflows; HubSpot is a full marketing and sales CRM. See which fits your team's way of working.",
    href: getCrmCompareUrl("monday-crm-vs-hubspot"),
  },
  {
    slug: "freshsales-vs-pipedrive",
    productA: { name: "Freshsales", logoSrc: LOGOS.freshsales },
    productB: { name: "Pipedrive", logoSrc: LOGOS.pipedrive },
    summaryParagraph:
      "Freshsales adds AI and a broad feature set; Pipedrive stays focused on the deal pipeline. Compare pricing and sales features side by side.",
    href: getCrmCompareUrl("freshsales-vs-pipedrive"),
  },
];

/** Best CRM by use case (scenario) links. */
export const CRM_SCENARIO_LINKS = [
  { label: "Best CRM software (roundup)", href: "/crm/best-crm-software" },
  { label: "Compare CRM software", href: "/crm/compare" },
  { label: "Freelancers", href: getCrmBestForUrl("freelancers") },
  { label: "Small business", href: getCrmBestForUrl("small-business") },
  { label: "Startups", href: getCrmBestForUrl("startups") },
  { label: "Agencies", href: getCrmBestForUrl("agencies") },
  { label: "Sales teams", href: getCrmBestForUrl("sales-teams") },
];

/** CRM by team / org identity (same routes as some scenarios—different section intent: how you describe your team). */
export const CRM_BY_BUSINESS_TYPE = [
  { label: "Freelancers & solos", href: getCrmBestForUrl("freelancers") },
  { label: "Small businesses", href: getCrmBestForUrl("small-business") },
  { label: "Startups", href: getCrmBestForUrl("startups") },
  { label: "Agencies & client services", href: getCrmBestForUrl("agencies") },
  { label: "Sales teams & pipeline orgs", href: getCrmBestForUrl("sales-teams") },
];

export const CRM_BY_BUSINESS_TYPE_GROUPS = [
  { groupLabel: "Browse by team type", links: CRM_BY_BUSINESS_TYPE },
];

/** FAQ items for the hub. */
export const CRM_FAQ_ITEMS = [
  {
    q: "What is CRM software?",
    a: "CRM (customer relationship management) software helps you store contacts, track leads and deals, manage your sales pipeline, and often automate marketing and follow-up. It keeps customer and prospect information in one place so your team can sell and support more effectively.",
  },
  {
    q: "What CRM is best for small business?",
    a: "HubSpot, Zoho CRM, and Pipedrive are strong options for small businesses: each offers a clear pipeline, reasonable pricing or a free tier, and scales as you grow. Choose based on whether you need heavy marketing automation (HubSpot), value and suite integration (Zoho), or a strict sales focus (Pipedrive).",
  },
  {
    q: "Is HubSpot a good CRM?",
    a: "Yes. HubSpot is one of our top picks for small and mid-size teams. It offers a free CRM core, strong marketing and sales tools, and a clear upgrade path. It can get expensive at scale, so compare plans and add-ons to your team size and needs.",
  },
  {
    q: "What CRM is easiest to use?",
    a: "HubSpot and Pipedrive are often cited as among the easiest CRMs to adopt: both have clear pipelines and straightforward interfaces. Monday is easy if you like board-based views. Ease of use depends on your workflow—try free trials to see which fits your team.",
  },
];

/** Methodology for the hub. */
export const CRM_METHODOLOGY = {
  title: "How we review CRM software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information.",
  bullets: [
    "We test CRM workflows: contact and lead management, pipeline stages, reporting, and automation.",
    "We compare pricing tiers, user limits, and add-ons so you can budget accurately.",
    "Reviews are written for small businesses, sales teams, and startups—not only enterprise needs.",
  ],
};
