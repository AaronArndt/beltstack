/**
 * CRM comparison pages data.
 * Same structure as accountingComparisons / payrollComparisons / timeTrackingComparisons.
 * Used by app/crm/compare/page.tsx and app/crm/compare/[comparison]/page.tsx with ComparisonTemplate.
 */

import { getCrmReviewUrl, getCrmCompareUrl, getCrmBestForUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getCrmCompareUrlFromSlug(slug: string): string {
  return `/crm/compare/${slug}`;
}

/** Product refs for CRM comparisons — reuse for consistent review links and logos */
const P = {
  hubspot: {
    name: "HubSpot",
    slug: "hubspot",
    reviewHref: getCrmReviewUrl("hubspot"),
    logoSrc: "/Logos/hubspot.jpeg",
    visitUrl: "https://www.hubspot.com",
    bestForSummary: "Best overall CRM for many SMBs; strong marketing and sales ecosystem.",
    rating: "4.6",
    startingPrice: "Free tier",
  },
  salesforce: {
    name: "Salesforce",
    slug: "salesforce",
    reviewHref: getCrmReviewUrl("salesforce"),
    logoSrc: "/Logos/salesforce.jpeg",
    visitUrl: "https://www.salesforce.com",
    bestForSummary: "Best for enterprise teams; powerful customization and reporting.",
    rating: "4.5",
    startingPrice: "From $25/user/mo",
  },
  "zoho-crm": {
    name: "Zoho CRM",
    slug: "zoho-crm",
    reviewHref: getCrmReviewUrl("zoho-crm"),
    logoSrc: "/Logos/zoho.jpeg",
    visitUrl: "https://www.zoho.com/crm",
    bestForSummary: "Best value CRM; strong fit for Zoho users and cost-conscious teams.",
    rating: "4.4",
    startingPrice: "Free tier",
  },
  pipedrive: {
    name: "Pipedrive",
    slug: "pipedrive",
    reviewHref: getCrmReviewUrl("pipedrive"),
    logoSrc: "/Logos/pipedrive.jpeg",
    visitUrl: "https://www.pipedrive.com",
    bestForSummary: "Best for sales pipelines; clean, focused sales workflow.",
    rating: "4.5",
    startingPrice: "From $14.90/user/mo",
  },
  "monday-crm": {
    name: "Monday CRM",
    slug: "monday-crm",
    reviewHref: getCrmReviewUrl("monday-crm"),
    logoSrc: "/Logos/monday.jpeg",
    visitUrl: "https://monday.com",
    bestForSummary: "Best for customizable workflows; flexible structure and project crossover.",
    rating: "4.4",
    startingPrice: "From $10/user/mo",
  },
  freshsales: {
    name: "Freshsales",
    slug: "freshsales",
    reviewHref: getCrmReviewUrl("freshsales"),
    logoSrc: "/Logos/freshsales.jpeg",
    visitUrl: "https://www.freshworks.com/crm/sales",
    bestForSummary: "Good SMB CRM with AI and automation; value-oriented alternative.",
    rating: "4.3",
    startingPrice: "From $15/user/mo",
  },
  copper: {
    name: "Copper",
    slug: "copper",
    reviewHref: getCrmReviewUrl("copper"),
    logoSrc: "/Logos/copper.png",
    visitUrl: "https://www.copper.com",
    bestForSummary: "Good fit for Google Workspace users; CRM that lives in Gmail and Calendar.",
    rating: "4.4",
    startingPrice: "From $29/user/mo",
  },
  close: {
    name: "Close",
    slug: "close",
    reviewHref: getCrmReviewUrl("close"),
    logoSrc: "/Logos/close.jpeg",
    visitUrl: "https://www.close.com",
    bestForSummary: "Good fit for inside sales; built-in calling and pipeline in one place.",
    rating: "4.5",
    startingPrice: "From $49/user/mo",
  },
  keap: {
    name: "Keap",
    slug: "keap",
    reviewHref: getCrmReviewUrl("keap"),
    logoSrc: "/Logos/keap.jpeg",
    visitUrl: "https://keap.com",
    bestForSummary: "Good for small businesses needing CRM plus marketing automation.",
    rating: "4.3",
    startingPrice: "From $159/mo",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getCrmBestForUrl("freelancers") },
  { label: "Best for small business", href: getCrmBestForUrl("small-business") },
  { label: "Best for startups", href: getCrmBestForUrl("startups") },
  { label: "Best for agencies", href: getCrmBestForUrl("agencies") },
  { label: "Best for sales teams", href: getCrmBestForUrl("sales-teams") },
];

function buildComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  content: Omit<ComparisonTemplateProps, "productA" | "productB" | "categoryHref" | "categoryLabel">
): [string, ComparisonTemplateProps] {
  return [
    slug,
    {
      ...content,
      productA: P[productAKey],
      productB: P[productBKey],
      categoryHref: "/crm",
      categoryLabel: "CRM",
    },
  ];
}

/** Base CRM feature rows for comparisons */
const BASE_CRM_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  { feature: "Contact & deal management", productA: "Contacts, deals, pipeline", productB: "Contacts, deals, pipeline", supportA: "supported", supportB: "supported" },
  { feature: "Pipeline & stages", productA: "Customizable pipeline", productB: "Customizable pipeline", supportA: "supported", supportB: "supported" },
  { feature: "Reporting & dashboards", productA: "Reports and dashboards", productB: "Reports and dashboards", supportA: "supported", supportB: "supported" },
  { feature: "Integrations", productA: "App marketplace / API", productB: "App marketplace / API", supportA: "supported", supportB: "supported" },
];

function minimalComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  summary: string,
  quickA: string,
  quickB: string,
  verdict: string[],
  pricing: string,
  sidebar: { label: string; winner: "A" | "B" }[],
  overrides?: Partial<Omit<ComparisonTemplateProps, "productA" | "productB" | "categoryHref" | "categoryLabel">>
): [string, ComparisonTemplateProps] {
  const productA = P[productAKey];
  const productB = P[productBKey];
  return buildComparison(slug, productAKey, productBKey, {
    summaryParagraph: summary,
    quickRecommendationA: quickA,
    quickRecommendationB: quickB,
    quickVerdictParagraphs: verdict,
    featureComparison: overrides?.featureComparison ?? BASE_CRM_FEATURE_ROWS,
    pricingComparison: pricing,
    prosConsA: overrides?.prosConsA ?? { pros: ["Strong feature set", "Good ecosystem"], cons: ["Cost can scale", "Compare tiers"] },
    prosConsB: overrides?.prosConsB ?? { pros: ["Solid CRM", "Good value"], cons: ["Depends on needs", "Compare add-ons"] },
    bestFor: overrides?.bestFor ?? [
      { heading: "Best for different needs", body: "Each product suits different team sizes and workflows. Read our full reviews for detailed recommendations." },
    ],
    alternatives: overrides?.alternatives ?? [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), logoSrc: "/Logos/hubspot.jpeg" },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), logoSrc: "/Logos/pipedrive.jpeg" },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), logoSrc: "/Logos/zoho.jpeg" },
    ],
    faqs: overrides?.faqs ?? [
      { q: `How do ${productA.name} and ${productB.name} compare?`, a: summary.slice(0, 220) + " Read our full reviews and this comparison for a head-to-head view." },
      { q: "Which is better for small business?", a: "Both can serve small businesses; the better fit depends on your workflow, budget, and whether you need free vs paid features. See the Best for section above." },
    ],
    sidebarWinners: sidebar,
    relevantTradeLinks: RELEVANT_LINKS,
    ...overrides,
  });
}

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // hubspot-vs-salesforce
  minimalComparison(
    "hubspot-vs-salesforce",
    "hubspot",
    "salesforce",
    "HubSpot offers a friendlier entry point and strong free tier; Salesforce scales for large teams and complex customization. Compare features, pricing, and ease of use to see which fits your business.",
    "Best for most SMBs: free CRM core, strong marketing and sales alignment, and easier setup.",
    "Best for enterprise teams that need maximum customization, reporting, and app ecosystem.",
    [
      "HubSpot wins on ease of use and free tier; Salesforce wins on scale and customization. Small and mid-size teams typically prefer HubSpot; enterprises with dedicated admins often choose Salesforce. Both offer strong reporting and integrations—choose by team size and implementation resources.",
    ],
    "HubSpot has a free CRM; paid hubs add cost per seat. Salesforce starts around $25/user/month with custom pricing for higher editions. HubSpot is often more affordable for SMBs; Salesforce costs more but delivers enterprise depth.",
    [
      { label: "Winner for SMBs", winner: "A" },
      { label: "Winner for enterprise", winner: "B" },
      { label: "Winner for ease of use", winner: "A" },
    ],
    {
      decisionGuideA: [
        "You want a free CRM and strong marketing-sales alignment.",
        "You prefer easier setup and published pricing.",
        "You're a small or mid-size team without dedicated admins.",
      ],
      decisionGuideB: [
        "You need maximum customization and scale.",
        "You have dedicated admins or implementation partners.",
        "You want the largest app ecosystem (AppExchange).",
      ],
      ratingsComparison: [
        { category: "Features", productA: "4.7", productB: "4.8" },
        { category: "Ease of use", productA: "4.7", productB: "4.2" },
        { category: "Pricing", productA: "4.5", productB: "4.2" },
        { category: "Integrations", productA: "4.7", productB: "4.9" },
        { category: "Support", productA: "4.5", productB: "4.5" },
      ],
      prosConsA: {
        pros: ["Free CRM core", "Strong marketing-sales alignment", "Easier to set up", "Clear pricing"],
        cons: ["Can get expensive at scale", "Less customization than Salesforce"],
      },
      prosConsB: {
        pros: ["Unmatched customization", "Largest app ecosystem", "Scales to enterprise", "Strong reporting"],
        cons: ["Steep learning curve", "Higher cost", "Heavier to implement"],
      },
      moreComparisons: [
        { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
        { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
        { label: "Salesforce vs Zoho CRM", href: getCrmCompareUrl("salesforce-vs-zoho-crm") },
      ],
    }
  ),

  // hubspot-vs-zoho-crm
  minimalComparison(
    "hubspot-vs-zoho-crm",
    "hubspot",
    "zoho-crm",
    "Both offer free tiers and solid CRM. HubSpot excels at marketing-sales alignment; Zoho CRM fits teams already using Zoho apps and want one ecosystem at lower cost.",
    "Best for marketing and sales in one platform with a polished SMB experience.",
    "Best for value and Zoho ecosystem users; full CRM at lower cost.",
    [
      "HubSpot has stronger marketing hub and brand recognition; Zoho CRM delivers more for the price and fits Zoho users. Choose HubSpot for all-in-one marketing and sales polish; Zoho for value and suite integration.",
    ],
    "HubSpot free CRM; paid hubs per seat. Zoho CRM has a free tier and affordable paid plans—often lower than HubSpot at similar capability.",
    [
      { label: "Winner for marketing-sales", winner: "A" },
      { label: "Winner for value", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
        { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
      ],
    }
  ),

  // zoho-crm-vs-pipedrive
  minimalComparison(
    "zoho-crm-vs-pipedrive",
    "zoho-crm",
    "pipedrive",
    "Zoho CRM is broader and suite-oriented; Pipedrive is built for sales pipelines and activity-based selling. Compare which fits your sales process.",
    "Best for full CRM at lower cost and Zoho suite integration.",
    "Best for sales-only pipeline focus and activity-based selling.",
    [
      "Zoho CRM offers more breadth and value; Pipedrive offers a cleaner, pipeline-first experience. Choose Zoho for full CRM and cost; Pipedrive for a dedicated sales tool that's easy to adopt.",
    ],
    "Zoho CRM has a free tier and low-cost paid plans; Pipedrive starts around $15/user/month. Zoho often costs less for similar capability; Pipedrive is straightforward per-seat pricing.",
    [
      { label: "Winner for value", winner: "A" },
      { label: "Winner for sales pipeline", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
        { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
      ],
    }
  ),

  // monday-crm-vs-hubspot
  minimalComparison(
    "monday-crm-vs-hubspot",
    "monday-crm",
    "hubspot",
    "Monday CRM brings customizable boards and project-style workflows; HubSpot is a full marketing and sales CRM. See which fits your team's way of working.",
    "Best for customizable workflows and CRM plus project management in one place.",
    "Best for full marketing and sales CRM with a traditional pipeline and strong free tier.",
    [
      "Monday wins on flexibility and board-based customization; HubSpot wins on out-of-the-box marketing and sales alignment. Choose Monday if you want to design your process and combine CRM with projects; choose HubSpot for a ready-made marketing and sales CRM.",
    ],
    "Monday starts around $10/user/month; HubSpot has a free CRM and paid hubs. Compare by whether you need boards and projects (Monday) or marketing hub (HubSpot).",
    [
      { label: "Winner for flexibility", winner: "A" },
      { label: "Winner for marketing-sales", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
        { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
      ],
    }
  ),

  // freshsales-vs-pipedrive
  minimalComparison(
    "freshsales-vs-pipedrive",
    "freshsales",
    "pipedrive",
    "Freshsales adds AI and a broad feature set; Pipedrive stays focused on the deal pipeline. Compare pricing and sales features side by side.",
    "Best for sales teams that want AI, built-in phone/email, and automation.",
    "Best for pipeline-only focus and activity-based selling with minimal complexity.",
    [
      "Freshsales wins on AI and all-in-one communication; Pipedrive wins on pipeline simplicity and ease of use. Choose Freshsales for AI and built-in dialer; Pipedrive for a clean, focused sales tool.",
    ],
    "Freshsales has a free tier and paid plans from around $15/user/month; Pipedrive starts around $15/user/month. Both are competitive for sales CRM—compare AI and communication features vs simplicity.",
    [
      { label: "Winner for AI & communication", winner: "A" },
      { label: "Winner for simplicity", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
        { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      ],
    }
  ),

  // hubspot-vs-pipedrive
  minimalComparison(
    "hubspot-vs-pipedrive",
    "hubspot",
    "pipedrive",
    "HubSpot is all-in-one marketing and sales CRM; Pipedrive is pipeline-first and sales-focused. Compare which fits your team: breadth vs focus.",
    "Best for marketing and sales in one platform with free CRM and strong automation.",
    "Best for sales teams that want a clean pipeline and activity-based selling without marketing hub.",
    [
      "HubSpot wins when you need marketing automation and sales in one place; Pipedrive wins when you only need a strong sales pipeline and prefer simplicity. Choose HubSpot for breadth; Pipedrive for focus.",
    ],
    "HubSpot offers free CRM; paid hubs add cost. Pipedrive starts around $15/user/month with no free plan. HubSpot can cost more as you add hubs; Pipedrive is straightforward per-seat.",
    [
      { label: "Winner for all-in-one", winner: "A" },
      { label: "Winner for sales focus", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
        { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
      ],
    }
  ),

  // salesforce-vs-zoho-crm
  minimalComparison(
    "salesforce-vs-zoho-crm",
    "salesforce",
    "zoho-crm",
    "Salesforce is enterprise-grade with maximum customization; Zoho CRM offers full CRM at lower cost and fits Zoho users. Compare scale vs value.",
    "Best for enterprise teams that need maximum customization and app ecosystem.",
    "Best for SMBs and value-conscious teams; full CRM and Zoho suite integration.",
    [
      "Salesforce wins on scale and ecosystem; Zoho CRM wins on cost and value. Enterprises with dedicated admins often choose Salesforce; SMBs and Zoho users often choose Zoho CRM. Both are capable—choose by budget and complexity tolerance.",
    ],
    "Salesforce starts around $25/user/month with custom pricing; Zoho CRM has a free tier and lower-cost paid plans. Zoho is typically much more affordable for similar core capability.",
    [
      { label: "Winner for enterprise", winner: "A" },
      { label: "Winner for value", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
        { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
      ],
    }
  ),

  // close-vs-pipedrive
  minimalComparison(
    "close-vs-pipedrive",
    "close",
    "pipedrive",
    "Close is built for inside sales with built-in calling and email; Pipedrive is pipeline-focused with activity tracking. Compare for call-heavy vs pipeline-only workflows.",
    "Best for inside sales teams that want calling, email, and pipeline in one product.",
    "Best for sales teams that want a clear pipeline and activity-based selling without a dialer.",
    [
      "Close wins when your team lives on the phone and wants one tool for calling and CRM; Pipedrive wins when you want a clean pipeline without built-in dialer. Close costs more but bundles communication; Pipedrive is lower cost and more focused on pipeline.",
    ],
    "Close starts around $49/user/month and includes dialer; Pipedrive starts around $15/user/month. Close is higher cost but all-in-one for inside sales; Pipedrive is cheaper and pipeline-only.",
    [
      { label: "Winner for inside sales & calling", winner: "A" },
      { label: "Winner for pipeline simplicity", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
        { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      ],
    }
  ),

  // copper-vs-hubspot
  minimalComparison(
    "copper-vs-hubspot",
    "copper",
    "hubspot",
    "Copper is built for Google Workspace with deep Gmail and Calendar integration; HubSpot is all-in-one marketing and sales CRM with a free tier. Compare for Google-native vs breadth.",
    "Best for teams that live in Google Workspace and want CRM that feels native to Gmail and Calendar.",
    "Best for most SMBs: free CRM, marketing and sales hubs, and broad ecosystem.",
    [
      "Copper wins for Google Workspace users who want minimal context switching; HubSpot wins for teams that need marketing automation and a free CRM. Choose Copper if you're all-in on Google; HubSpot if you want one platform for marketing and sales beyond Gmail.",
    ],
    "Copper starts around $29/user/month; HubSpot has a free CRM and paid hubs. Copper is higher per-seat but justifies cost for Google users; HubSpot can be free or scale with hubs.",
    [
      { label: "Winner for Google Workspace", winner: "A" },
      { label: "Winner for all-in-one", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
        { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      ],
    }
  ),

  // keap-vs-hubspot
  minimalComparison(
    "keap-vs-hubspot",
    "keap",
    "hubspot",
    "Keap combines marketing automation and CRM for small businesses; HubSpot offers a free CRM and scales to larger teams. Compare for small-business focus vs ecosystem.",
    "Best for small businesses that want marketing automation and CRM in one with flat or simplified pricing.",
    "Best for most SMBs: free CRM core, strong marketing and sales tools, and clear upgrade path.",
    [
      "Keap wins for small businesses that want marketing and CRM in one with often simpler pricing at low scale; HubSpot wins for free tier and scalability. Choose Keap for small-business-focused automation; HubSpot for free CRM and growth path.",
    ],
    "Keap often starts around $159/month (flat); HubSpot has free CRM and per-seat hubs. Keap can be simpler for very small teams; HubSpot scales better and has a free option.",
    [
      { label: "Winner for small business automation", winner: "A" },
      { label: "Winner for free tier & scale", winner: "B" },
    ],
    {
      moreComparisons: [
        { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
        { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
      ],
    }
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getCrmComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getCrmComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
