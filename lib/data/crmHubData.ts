/**
 * CRM hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/crm/page.tsx.
 */

import { getCrmReviewUrl, getCrmCompareUrl, getCrmBestForUrl } from "@/lib/routes";
import type { FeaturedPick } from "@/components/hubs/HubPageTemplate";
import type { ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

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
  { slug: "what-is-crm-software", title: "What is CRM Software", description: "What CRM software is, who uses it, and how it helps manage contacts, leads, and pipelines.", href: `${CRM_GUIDES_BASE}/what-is-crm-software` },
  { slug: "crm-for-small-business", title: "CRM for Small Business", description: "Choosing and using CRM when you're a small team or startup.", href: `${CRM_GUIDES_BASE}/crm-for-small-business` },
  { slug: "crm-vs-marketing-automation", title: "CRM vs Marketing Automation", description: "When you need CRM, marketing automation, or both.", href: `${CRM_GUIDES_BASE}/crm-vs-marketing-automation` },
  { slug: "how-to-choose-crm-software", title: "How to Choose CRM Software", description: "Key factors when comparing CRM platforms for your team.", href: `${CRM_GUIDES_BASE}/how-to-choose-crm-software` },
];

/** Top CRM picks for the hub hero section. */
export const CRM_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "hubspot",
    name: "HubSpot",
    badge: "Best overall",
    descriptor: "All-in-one CRM with marketing, sales, and service hubs. Strong for small and mid-size teams.",
    rating: "4.6",
    price: "Free tier",
    features: ["Contact & deal pipeline", "Marketing automation", "Free CRM core"],
    reviewHref: getCrmReviewUrl("hubspot"),
    compareHref: getCrmCompareUrl("hubspot-vs-salesforce"),
    logoSrc: LOGOS.hubspot,
    visitUrl: "https://www.hubspot.com",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    badge: "Best for scale",
    descriptor: "Enterprise-grade CRM with extensive customization and app ecosystem.",
    rating: "4.5",
    price: "From $25/user/mo",
    features: ["Leads, contacts, opportunities", "Reports & dashboards", "AppExchange"],
    reviewHref: getCrmReviewUrl("salesforce"),
    compareHref: getCrmCompareUrl("hubspot-vs-salesforce"),
    logoSrc: LOGOS.salesforce,
    visitUrl: "https://www.salesforce.com",
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    badge: "Best value",
    descriptor: "Full-featured CRM at competitive pricing. Good for SMBs already in the Zoho ecosystem.",
    rating: "4.4",
    price: "Free tier",
    features: ["Pipeline & automation", "Zoho suite integration", "Mobile apps"],
    reviewHref: getCrmReviewUrl("zoho-crm"),
    compareHref: getCrmCompareUrl("hubspot-vs-zoho-crm"),
    logoSrc: LOGOS.zoho,
    visitUrl: "https://www.zoho.com/crm",
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    badge: "Best for sales teams",
    descriptor: "Sales-pipeline-focused CRM with clear deal stages and activity tracking.",
    rating: "4.5",
    price: "From $14.90/user/mo",
    features: ["Deal pipeline", "Activity-based selling", "Reporting"],
    reviewHref: getCrmReviewUrl("pipedrive"),
    compareHref: getCrmCompareUrl("zoho-crm-vs-pipedrive"),
    logoSrc: LOGOS.pipedrive,
    visitUrl: "https://www.pipedrive.com",
  },
  {
    slug: "monday-crm",
    name: "Monday CRM",
    badge: "Best for flexibility",
    descriptor: "Work OS with CRM capabilities. Suits teams that want boards and workflows in one place.",
    rating: "4.4",
    price: "From $10/user/mo",
    features: ["Customizable boards", "Automations", "Project + CRM"],
    reviewHref: getCrmReviewUrl("monday-crm"),
    compareHref: getCrmCompareUrl("monday-crm-vs-hubspot"),
    logoSrc: LOGOS.monday,
    visitUrl: "https://monday.com",
  },
];

/** Comparison table rows for the hub (all CRM tools). */
export const CRM_COMPARISON_TABLE_ROWS: ComparisonTableRow[] = [
  { tool: "HubSpot", bestFor: "All-in-one marketing & sales", price: "Free tier", rating: "4.6", slug: "hubspot", logoSrc: LOGOS.hubspot },
  { tool: "Salesforce", bestFor: "Enterprise & scale", price: "From $25/user/mo", rating: "4.5", slug: "salesforce", logoSrc: LOGOS.salesforce },
  { tool: "Zoho CRM", bestFor: "Value & Zoho ecosystem", price: "Free tier", rating: "4.4", slug: "zoho-crm", logoSrc: LOGOS.zoho },
  { tool: "Pipedrive", bestFor: "Sales pipeline focus", price: "From $14.90/user/mo", rating: "4.5", slug: "pipedrive", logoSrc: LOGOS.pipedrive },
  { tool: "Monday CRM", bestFor: "Flexible boards & workflows", price: "From $10/user/mo", rating: "4.4", slug: "monday-crm", logoSrc: LOGOS.monday },
  { tool: "Freshsales", bestFor: "AI-powered sales", price: "From $15/user/mo", rating: "4.3", slug: "freshsales", logoSrc: LOGOS.freshsales },
  { tool: "Copper", bestFor: "Google Workspace users", price: "From $29/user/mo", rating: "4.4", slug: "copper", logoSrc: LOGOS.copper },
  { tool: "Close", bestFor: "Inside sales & calling", price: "From $49/user/mo", rating: "4.5", slug: "close", logoSrc: LOGOS.close },
  { tool: "Keap", bestFor: "Small business marketing + CRM", price: "From $159/mo", rating: "4.3", slug: "keap", logoSrc: LOGOS.keap },
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
    productA: { name: "Monday CRM", logoSrc: LOGOS.monday },
    productB: { name: "HubSpot", logoSrc: LOGOS.hubspot },
    summaryParagraph:
      "Monday CRM brings customizable boards and project-style workflows; HubSpot is a full marketing and sales CRM. See which fits your team's way of working.",
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

/** CRM by business type (trade links). */
export const CRM_BY_BUSINESS_TYPE = [
  { label: "Agencies", href: getCrmBestForUrl("agencies") },
  { label: "Startups", href: getCrmBestForUrl("startups") },
  { label: "Sales teams", href: getCrmBestForUrl("sales-teams") },
  { label: "Consultants", href: getCrmBestForUrl("consultants") },
  { label: "Freelancers", href: getCrmBestForUrl("freelancers") },
];

export const CRM_BY_BUSINESS_TYPE_GROUPS = [
  { groupLabel: "Primary business types", links: CRM_BY_BUSINESS_TYPE.slice(0, 3) },
  { groupLabel: "Other business types", links: CRM_BY_BUSINESS_TYPE.slice(3) },
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
    a: "HubSpot and Pipedrive are often cited as among the easiest CRMs to adopt: both have clear pipelines and straightforward interfaces. Monday CRM is easy if you like board-based views. Ease of use depends on your workflow—try free trials to see which fits your team.",
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
