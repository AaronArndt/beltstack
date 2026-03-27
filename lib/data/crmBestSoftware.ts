/**
 * CRM best-software roundup page data.
 * Used by app/crm/best-crm-software/page.tsx.
 */

import { getCrmReviewUrl, getCrmCompareUrl, getCrmBestForUrl } from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

const LOGOS = {
  hubspot: "/Logos/hubspot.jpeg",
  salesforce: "/Logos/salesforce.jpeg",
  zoho: "/Logos/zoho.png",
  pipedrive: "/Logos/pipedrive.jpeg",
  monday: "/Logos/monday.jpeg",
  freshsales: "/Logos/freshsales.jpeg",
  copper: "/Logos/copper.png",
  close: "/Logos/close.jpeg",
  keap: "/Logos/keap.jpeg",
} as const;

export type BestCrmPick = SoftwarePickCardContent;

export type CrmComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export const TOP_PICKS: BestCrmPick[] = [
  {
    slug: "hubspot",
    name: "HubSpot",
    badge: "Best overall CRM",
    description:
      "All-in-one CRM with marketing, sales, and service hubs. Strong free tier and clear upgrade path for small and mid-size teams.",
    rating: "4.6",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.hubspot.com",
    logoSrc: LOGOS.hubspot,
    compareSlugs: ["hubspot-vs-salesforce", "hubspot-vs-zoho-crm", "monday-crm-vs-hubspot"],
    editorialParagraph:
      "HubSpot is our top pick for most small businesses and sales teams. The free CRM core covers contacts, deals, and pipeline; paid tiers add marketing automation, sales sequences, and service tools. Setup is straightforward, and the platform scales without forcing you into enterprise complexity. If you want one place for leads, deals, and marketing, HubSpot is the default choice.",
    pros: [
      "Free CRM core with solid contact and deal management",
      "Strong marketing and sales automation as you scale",
      "Clear pricing and self-serve signup",
      "Large ecosystem of integrations and templates",
    ],
    cons: [
      "Can get expensive at higher tiers and with add-ons",
      "Some features require Sales or Marketing Hub",
      "Heavier than needed for very simple use cases",
    ],
    pricingSummary:
      "HubSpot offers a free CRM; paid plans (Starter, Professional, Enterprise) add marketing, sales, and service features. Pricing is per seat and per hub—check current tiers for your team size.",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    badge: "Best for enterprise teams",
    description:
      "Enterprise-grade CRM with extensive customization, AppExchange, and scale. Best when you need deep control and large teams.",
    rating: "4.5",
    startingPrice: "From $25/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.salesforce.com",
    logoSrc: LOGOS.salesforce,
    compareSlugs: ["hubspot-vs-salesforce"],
    editorialParagraph:
      "Salesforce is the pick when you need maximum flexibility and scale. Leads, contacts, opportunities, and custom objects are fully configurable; the AppExchange adds thousands of apps. Implementation can be complex and pricing is often custom—ideal for larger teams with dedicated admins. For small teams, HubSpot or Zoho CRM are often easier and more affordable.",
    pros: [
      "Unmatched customization and app ecosystem",
      "Scales to large teams and complex processes",
      "Strong reporting and dashboards",
      "Industry-specific editions available",
    ],
    cons: [
      "Steep learning curve and implementation cost",
      "Pricing can be opaque; often requires a quote",
      "Overkill for simple pipeline needs",
    ],
    pricingSummary:
      "Salesforce uses tiered per-user pricing starting around $25/user/month. Higher editions add more features and support; exact cost depends on edition and user count.",
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    badge: "Best value CRM",
    description:
      "Full-featured CRM at competitive pricing. Good for SMBs and teams already in the Zoho ecosystem.",
    rating: "4.4",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.zoho.com/crm",
    logoSrc: LOGOS.zoho,
    compareSlugs: ["hubspot-vs-zoho-crm", "zoho-crm-vs-pipedrive"],
    editorialParagraph:
      "Zoho CRM delivers a lot for the price. Pipeline, automation, reporting, and integrations are solid; the free tier is usable for very small teams, and paid plans stay competitive. If you already use Zoho Mail, Books, or other Zoho apps, the CRM fits naturally. It’s a strong alternative to HubSpot when you want similar breadth with lower cost.",
    pros: [
      "Free tier and affordable paid plans",
      "Integrates with Zoho suite and many third-party apps",
      "Good automation and workflow tools",
      "Solid mobile apps",
    ],
    cons: [
      "UI can feel busy compared to simpler CRMs",
      "Some advanced features require higher tiers",
      "Less brand recognition than HubSpot or Salesforce",
    ],
    pricingSummary:
      "Zoho CRM has a free edition; paid plans start low and scale by features and users. Compare tiers for your team size and needed modules.",
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    badge: "Best for sales pipelines",
    description:
      "Sales-pipeline-focused CRM with clear deal stages and activity tracking. Built for teams that live in the pipeline.",
    rating: "4.5",
    startingPrice: "From $14.90/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.pipedrive.com",
    logoSrc: LOGOS.pipedrive,
    compareSlugs: ["zoho-crm-vs-pipedrive", "freshsales-vs-pipedrive"],
    editorialParagraph:
      "Pipedrive is built for salespeople. The pipeline view is central; deal stages, activities, and next steps keep reps focused. It’s less about marketing automation and more about moving deals. If your team cares most about pipeline clarity and activity-based selling, Pipedrive is a top choice. For all-in-one marketing and sales, HubSpot may fit better.",
    pros: [
      "Pipeline-first design; easy to see deal stage",
      "Activity-based selling and reminders",
      "Clear pricing and straightforward setup",
      "Good for small and mid-size sales teams",
    ],
    cons: [
      "Marketing automation is lighter than HubSpot",
      "Fewer out-of-the-box integrations than Salesforce",
      "Can feel narrow if you need broad marketing CRM",
    ],
    pricingSummary:
      "Pipedrive uses per-user monthly pricing with several tiers. Higher plans add automation, reporting, and integrations. Check current pricing for your team size.",
  },
  {
    slug: "monday-crm",
    name: "Monday",
    badge: "Best for customizable workflows",
    description:
      "Work OS with CRM capabilities. Customizable boards and workflows suit teams that want flexibility beyond a traditional pipeline.",
    rating: "4.4",
    startingPrice: "From $10/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://monday.com",
    logoSrc: LOGOS.monday,
    compareSlugs: ["monday-crm-vs-hubspot"],
    editorialParagraph:
      "Monday brings board-based flexibility to CRM. You can model deals, contacts, and projects in custom views and automate workflows across the board. It suits teams that want CRM plus project management in one place. If you prefer a traditional pipeline-only tool, Pipedrive or HubSpot may feel more focused; if you like building your own process, Monday is a strong fit.",
    pros: [
      "Highly customizable boards and views",
      "CRM and project management in one platform",
      "Strong automation and integrations",
      "Visual and easy to adapt to your process",
    ],
    cons: [
      "Less opinionated than pipeline-first CRMs",
      "Can require more setup to match your workflow",
      "Pricing scales with seats and features",
    ],
    pricingSummary:
      "Monday offers multiple plans; CRM features are available from lower tiers. Price per seat; check current plans for the right feature set.",
  },
];

/** Comparison table: all 9 CRM tools. Columns: Tool, Best for, Starting price, Rating, Read review */
export const COMPARISON_TABLE_ROWS: CrmComparisonTableRow[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, bestFor: "Best overall", startingPrice: "Free tier", rating: "4.6", reviewHref: getCrmReviewUrl("hubspot") },
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, bestFor: "Enterprise teams", startingPrice: "From $25/user/mo", rating: "4.5", reviewHref: getCrmReviewUrl("salesforce") },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, bestFor: "Best value", startingPrice: "Free tier", rating: "4.4", reviewHref: getCrmReviewUrl("zoho-crm") },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, bestFor: "Sales pipelines", startingPrice: "From $14.90/user/mo", rating: "4.5", reviewHref: getCrmReviewUrl("pipedrive") },
  { slug: "monday-crm", name: "Monday", logoSrc: LOGOS.monday, bestFor: "Customizable workflows", startingPrice: "From $10/user/mo", rating: "4.4", reviewHref: getCrmReviewUrl("monday-crm") },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, bestFor: "AI-powered sales", startingPrice: "From $15/user/mo", rating: "4.3", reviewHref: getCrmReviewUrl("freshsales") },
  { slug: "copper", name: "Copper", logoSrc: LOGOS.copper, bestFor: "Google Workspace users", startingPrice: "From $29/user/mo", rating: "4.4", reviewHref: getCrmReviewUrl("copper") },
  { slug: "close", name: "Close", logoSrc: LOGOS.close, bestFor: "Inside sales & calling", startingPrice: "From $49/user/mo", rating: "4.5", reviewHref: getCrmReviewUrl("close") },
  { slug: "keap", name: "Keap", logoSrc: LOGOS.keap, bestFor: "Small business marketing + CRM", startingPrice: "From $159/mo", rating: "4.3", reviewHref: getCrmReviewUrl("keap") },
];

/** More CRM options (below table) — card style */
export const MORE_CRM_OPTIONS: { slug: string; name: string; description: string; reviewHref: string; logoSrc: string }[] = [
  { slug: "freshsales", name: "Freshsales", description: "AI-powered CRM with built-in phone and email. Good for sales teams that want automation and engagement tools.", reviewHref: getCrmReviewUrl("freshsales"), logoSrc: LOGOS.freshsales },
  { slug: "copper", name: "Copper", description: "CRM built for Google Workspace. Contact and deal management that lives in Gmail and Google Calendar.", reviewHref: getCrmReviewUrl("copper"), logoSrc: LOGOS.copper },
  { slug: "close", name: "Close", description: "Inside sales CRM with calling, email, and pipeline in one. Built for teams that spend time on the phone.", reviewHref: getCrmReviewUrl("close"), logoSrc: LOGOS.close },
  { slug: "keap", name: "Keap", description: "Marketing automation and CRM for small businesses. Combines email marketing, automation, and pipeline in one platform.", reviewHref: getCrmReviewUrl("keap"), logoSrc: LOGOS.keap },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best for freelancers", href: getCrmBestForUrl("freelancers"), description: "Lightweight CRM for solos and freelancers who need contact and deal tracking." },
  { label: "Best for small business", href: getCrmBestForUrl("small-business"), description: "CRM that scales with your team without enterprise complexity." },
  { label: "Best for startups", href: getCrmBestForUrl("startups"), description: "Affordable CRM with room to grow as you add sales and marketing." },
  { label: "Best for agencies", href: getCrmBestForUrl("agencies"), description: "Manage clients, deals, and pipeline across multiple accounts." },
  { label: "Best for sales teams", href: getCrmBestForUrl("sales-teams"), description: "Pipeline-focused CRM for inside and field sales." },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
  { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is CRM software?",
    a: "CRM (customer relationship management) software helps you store contacts, track leads and deals, manage your sales pipeline, and often automate marketing and follow-up. It keeps customer and prospect information in one place so your team can sell and support more effectively.",
  },
  {
    q: "What CRM is best for small businesses?",
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
  {
    q: "What CRM integrates with marketing tools?",
    a: "HubSpot, Salesforce, Zoho CRM, and Keap all offer strong marketing automation and integrations with email, ads, and analytics. HubSpot is known for its native marketing-sales alignment; Zoho and Keap are good for small business marketing plus CRM.",
  },
];
