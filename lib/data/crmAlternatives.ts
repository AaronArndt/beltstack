/**
 * CRM alternatives page data.
 * Used by app/crm/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live CRM review pages.
 */

import {
  getCrmReviewUrl,
  getCrmCompareUrl,
  getCrmBestForUrl,
} from "@/lib/routes";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/crm", label: "CRM" };
const ROUNDUP_HREF = "/crm/best-crm-software";
const COMPARE_HUB = "/crm/compare";
const GUIDES_HUB = "/crm/guides";

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

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Free vs paid from day one", body: "HubSpot and Zoho CRM offer free tiers; Salesforce, Pipedrive, and others start paid. If you need zero upfront cost, narrow by free tier first." },
  { heading: "Marketing vs sales-only", body: "HubSpot and Keap combine marketing automation and CRM. Pipedrive, Close, and Freshsales are sales-pipeline focused. Choose by whether you need marketing hub or just pipeline." },
  { heading: "Ecosystem and integrations", body: "Copper is built for Google Workspace; Zoho fits the Zoho suite. If you live in one ecosystem, that may dictate the best CRM alternative." },
  { heading: "Scale and complexity", body: "Salesforce scales to enterprise with heavy customization; HubSpot and Zoho suit SMBs. Match the tool to your team size and admin capacity." },
  { heading: "Pipeline vs flexibility", body: "Pipedrive and Close are pipeline- and activity-focused. Monday CRM offers board-based flexibility. Choose by how structured your sales process is." },
];

function buildTableRows(
  originalRow: AlternativesTableRow,
  alternatives: AlternativesTopPick[]
): AlternativesTableRow[] {
  const altRows: AlternativesTableRow[] = alternatives.map((a) => ({
    slug: a.slug,
    name: a.name,
    logoSrc: a.logoSrc,
    bestFor: a.bestFor,
    startingPrice: a.startingPrice ?? "—",
    standoutFeature: a.standoutFeature ?? a.bestFor,
    reviewHref: a.reviewHref,
  }));
  return [originalRow, ...altRows];
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "CRM hub", href: CATEGORY.href },
    { label: "Best CRM software", href: ROUNDUP_HREF },
    { label: "Compare CRM software", href: COMPARE_HUB },
    { label: "CRM guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getCrmBestForUrl("small-business") },
    { label: "Best for sales teams", href: getCrmBestForUrl("sales-teams") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— HubSpot alternatives ———
const HUBSPOT_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, rating: "4.5", bestFor: "enterprise scale", description: "Maximum customization and app ecosystem for large teams.", reviewHref: getCrmReviewUrl("salesforce"), compareHref: getCrmCompareUrl("hubspot-vs-salesforce"), startingPrice: "From $25/user/mo", standoutFeature: "Enterprise; AppExchange" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value & Zoho", description: "Full CRM at lower cost; strong for Zoho users.", reviewHref: getCrmReviewUrl("zoho-crm"), compareHref: getCrmCompareUrl("hubspot-vs-zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value; Zoho suite" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "sales pipeline", description: "Pipeline-first CRM without marketing hub.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("hubspot-vs-pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Sales pipeline" },
  { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, rating: "4.4", bestFor: "flexible workflows", description: "Boards and CRM in one; customizable.", reviewHref: getCrmReviewUrl("monday-crm"), compareHref: getCrmCompareUrl("monday-crm-vs-hubspot"), startingPrice: "From $10/user/mo", standoutFeature: "Flexibility; boards" },
  { slug: "copper", name: "Copper", logoSrc: LOGOS.copper, rating: "4.4", bestFor: "Google Workspace", description: "Native Gmail and Calendar integration.", reviewHref: getCrmReviewUrl("copper"), compareHref: getCrmCompareUrl("copper-vs-hubspot"), startingPrice: "From $29/user/mo", standoutFeature: "Google native" },
];

const hubspotOriginalRow: AlternativesTableRow = {
  slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, bestFor: "overall SMB", startingPrice: "Free tier", standoutFeature: "All-in-one; free CRM", reviewHref: getCrmReviewUrl("hubspot"),
};

const hubspotPage: AlternativesTemplateProps = {
  title: "Best HubSpot Alternatives (2026)",
  subtitle: "If HubSpot isn't the right fit—because of cost, ecosystem, or focus—these CRM alternatives offer strong options for small and mid-size businesses.",
  productName: "HubSpot",
  productSlug: "hubspot",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCrmReviewUrl("hubspot"),
  quickAnswerParagraphs: [
    "HubSpot is a top CRM for many SMBs; alternatives include Salesforce for enterprise scale, Zoho CRM for value and Zoho ecosystem, Pipedrive for sales-only pipeline focus, Monday CRM for flexible boards and workflows, and Copper for Google Workspace. Salesforce, Zoho CRM, and Pipedrive are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost at scale", body: "HubSpot's paid hubs add up. Zoho CRM and Pipedrive often cost less for similar core CRM; Salesforce is a different scale and price." },
    { heading: "Sales-only need", body: "Pipedrive and Close focus on pipeline and activity without marketing hub. Better if you don't need marketing automation." },
    { heading: "Ecosystem", body: "Copper fits Google Workspace; Zoho CRM fits Zoho users. Some teams prefer a tool that matches their stack." },
  ],
  topAlternatives: HUBSPOT_ALTERNATIVES,
  comparisonTableRows: buildTableRows(hubspotOriginalRow, HUBSPOT_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Salesforce", heading: "Best for enterprise scale", body: "Salesforce offers maximum customization and the largest app ecosystem. For teams that need enterprise depth.", reviewHref: getCrmReviewUrl("salesforce"), compareHref: getCrmCompareUrl("hubspot-vs-salesforce") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM delivers full CRM at lower cost and fits Zoho suite users. For cost-conscious SMBs.", reviewHref: getCrmReviewUrl("zoho-crm"), compareHref: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { productName: "Pipedrive", heading: "Best for sales pipeline", body: "Pipedrive is built for deal pipeline and activity-based selling. For sales teams that don't need marketing hub.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("hubspot-vs-pipedrive") },
    { productName: "Monday CRM", heading: "Best for flexibility", body: "Monday CRM combines boards and CRM for customizable workflows. For teams that want to design their process.", reviewHref: getCrmReviewUrl("monday-crm"), compareHref: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { productName: "Copper", heading: "Best for Google Workspace", body: "Copper is built for Gmail and Calendar. For teams that live in Google and want minimal context switching.", reviewHref: getCrmReviewUrl("copper"), compareHref: getCrmCompareUrl("copper-vs-hubspot") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
    { label: "Monday CRM vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { label: "Copper vs HubSpot", href: getCrmCompareUrl("copper-vs-hubspot") },
  ],
  relatedResources: defaultRelatedResources("HubSpot", getCrmReviewUrl("hubspot")),
  faqItems: [
    { q: "What is the best HubSpot alternative?", a: "Salesforce for enterprise; Zoho CRM for value; Pipedrive for sales-only; Monday CRM for flexibility; Copper for Google Workspace. Choose by scale, budget, and ecosystem." },
    { q: "Is HubSpot better than Salesforce?", a: "HubSpot is better for SMBs and free tier; Salesforce is better for enterprise and maximum customization. Most small teams prefer HubSpot; large teams often choose Salesforce." },
    { q: "Which CRM is cheaper than HubSpot?", a: "Zoho CRM and Pipedrive often cost less for similar core CRM. HubSpot's free tier is hard to beat for entry; paid hubs add cost." },
  ],
};

// ——— Salesforce alternatives ———
const SALESFORCE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "SMB", description: "Free CRM and easier setup for small and mid-size teams.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("hubspot-vs-salesforce"), startingPrice: "Free tier", standoutFeature: "Free; ease of use" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM at much lower cost.", reviewHref: getCrmReviewUrl("zoho-crm"), compareHref: getCrmCompareUrl("salesforce-vs-zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value; Zoho" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "sales pipeline", description: "Focused pipeline CRM without enterprise complexity.", reviewHref: getCrmReviewUrl("pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline focus" },
  { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, rating: "4.4", bestFor: "flexibility", description: "Customizable boards and workflows.", reviewHref: getCrmReviewUrl("monday-crm"), startingPrice: "From $10/user/mo", standoutFeature: "Boards; workflows" },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, rating: "4.3", bestFor: "AI & value", description: "AI-powered sales CRM at competitive pricing.", reviewHref: getCrmReviewUrl("freshsales"), startingPrice: "From $15/user/mo", standoutFeature: "AI; value" },
];

const salesforcePage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Salesforce Alternatives (2026)",
  subtitle: "If Salesforce isn't the right fit—because of cost, complexity, or team size—these CRM alternatives offer strong options from SMB to mid-market.",
  productName: "Salesforce",
  productSlug: "salesforce",
  originalReviewHref: getCrmReviewUrl("salesforce"),
  quickAnswerParagraphs: [
    "Salesforce is the leader for enterprise CRM; alternatives include HubSpot for SMBs and free tier, Zoho CRM for value and lower cost, Pipedrive for sales pipeline focus, Monday CRM for flexibility, and Freshsales for AI and value. HubSpot and Zoho CRM are the most common alternatives for smaller teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost and complexity", body: "HubSpot and Zoho CRM offer easier setup and lower cost. Better for teams without dedicated admins." },
    { heading: "SMB fit", body: "Salesforce can be overkill for small teams. HubSpot, Pipedrive, and Zoho are designed for SMB scale." },
    { heading: "Simpler pipeline", body: "Pipedrive and Freshsales focus on pipeline and activity without enterprise customization." },
  ],
  topAlternatives: SALESFORCE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, bestFor: "enterprise", startingPrice: "From $25/user/mo", standoutFeature: "Scale; customization", reviewHref: getCrmReviewUrl("salesforce") },
    SALESFORCE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for SMB", body: "HubSpot offers a free CRM and easier setup. For small and mid-size teams that don't need Salesforce's depth.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("hubspot-vs-salesforce") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM delivers full CRM at much lower cost. For cost-conscious teams.", reviewHref: getCrmReviewUrl("zoho-crm"), compareHref: getCrmCompareUrl("salesforce-vs-zoho-crm") },
    { productName: "Pipedrive", heading: "Best for sales pipeline", body: "Pipedrive is pipeline-focused without enterprise complexity.", reviewHref: getCrmReviewUrl("pipedrive") },
    { productName: "Monday CRM", heading: "Best for flexibility", body: "Monday CRM offers customizable boards and workflows.", reviewHref: getCrmReviewUrl("monday-crm") },
    { productName: "Freshsales", heading: "Best for AI and value", body: "Freshsales adds AI and automation at competitive pricing.", reviewHref: getCrmReviewUrl("freshsales") },
  ],
  relatedComparisons: [
    { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
    { label: "Salesforce vs Zoho CRM", href: getCrmCompareUrl("salesforce-vs-zoho-crm") },
  ],
  relatedResources: defaultRelatedResources("Salesforce", getCrmReviewUrl("salesforce")),
  faqItems: [
    { q: "What is the best Salesforce alternative?", a: "HubSpot for SMB and free tier; Zoho CRM for value; Pipedrive for pipeline focus; Monday CRM for flexibility. Choose by team size and budget." },
    { q: "Is Salesforce worth it for small business?", a: "Many small businesses find HubSpot or Zoho CRM easier and more affordable. Salesforce is worth it when you need maximum customization and scale." },
    { q: "Which CRM is cheaper than Salesforce?", a: "Zoho CRM and HubSpot (free tier) are typically much cheaper. Pipedrive and Freshsales also cost less for similar core features." },
  ],
};

// ——— Zoho CRM alternatives ———
const ZOHO_CRM_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "marketing-sales", description: "Stronger marketing hub and polish; free CRM.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("hubspot-vs-zoho-crm"), startingPrice: "Free tier", standoutFeature: "Marketing; free tier" },
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, rating: "4.5", bestFor: "enterprise", description: "Maximum scale and app ecosystem.", reviewHref: getCrmReviewUrl("salesforce"), compareHref: getCrmCompareUrl("salesforce-vs-zoho-crm"), startingPrice: "From $25/user/mo", standoutFeature: "Enterprise" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "sales pipeline", description: "Pipeline-first; cleaner sales focus.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("zoho-crm-vs-pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline" },
  { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, rating: "4.4", bestFor: "flexibility", description: "Boards and customizable workflows.", reviewHref: getCrmReviewUrl("monday-crm"), startingPrice: "From $10/user/mo", standoutFeature: "Boards" },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, rating: "4.3", bestFor: "AI", description: "AI-powered sales and built-in communication.", reviewHref: getCrmReviewUrl("freshsales"), compareHref: getCrmCompareUrl("freshsales-vs-pipedrive"), startingPrice: "From $15/user/mo", standoutFeature: "AI; dialer" },
];

const zohoCrmPage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Zoho CRM Alternatives (2026)",
  subtitle: "If Zoho CRM isn't the right fit—because you're not on Zoho, need more marketing, or want a different focus—these CRM alternatives offer strong options.",
  productName: "Zoho CRM",
  productSlug: "zoho-crm",
  originalReviewHref: getCrmReviewUrl("zoho-crm"),
  quickAnswerParagraphs: [
    "Zoho CRM is a strong value pick; alternatives include HubSpot for marketing-sales alignment and free tier, Salesforce for enterprise scale, Pipedrive for sales pipeline focus, Monday CRM for flexibility, and Freshsales for AI. HubSpot and Pipedrive are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not in Zoho ecosystem", body: "HubSpot and Pipedrive are popular standalone choices. Better if you don't use other Zoho apps." },
    { heading: "Stronger marketing", body: "HubSpot has a more robust marketing hub. For teams that need marketing automation first." },
    { heading: "Pipeline-only", body: "Pipedrive is built for pipeline and activity. Cleaner if you only need sales CRM." },
  ],
  topAlternatives: ZOHO_CRM_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, bestFor: "value", startingPrice: "Free tier", standoutFeature: "Value; Zoho", reviewHref: getCrmReviewUrl("zoho-crm") },
    ZOHO_CRM_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for marketing-sales", body: "HubSpot offers stronger marketing hub and a free CRM. For teams that want all-in-one marketing and sales.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { productName: "Salesforce", heading: "Best for enterprise", body: "Salesforce scales to enterprise with maximum customization.", reviewHref: getCrmReviewUrl("salesforce"), compareHref: getCrmCompareUrl("salesforce-vs-zoho-crm") },
    { productName: "Pipedrive", heading: "Best for sales pipeline", body: "Pipedrive is pipeline-first and activity-based. For sales-only focus.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
    { productName: "Monday CRM", heading: "Best for flexibility", body: "Monday CRM offers boards and customizable workflows.", reviewHref: getCrmReviewUrl("monday-crm") },
    { productName: "Freshsales", heading: "Best for AI", body: "Freshsales adds AI and built-in communication at competitive pricing.", reviewHref: getCrmReviewUrl("freshsales") },
  ],
  relatedComparisons: [
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
    { label: "Salesforce vs Zoho CRM", href: getCrmCompareUrl("salesforce-vs-zoho-crm") },
  ],
  relatedResources: defaultRelatedResources("Zoho CRM", getCrmReviewUrl("zoho-crm")),
  faqItems: [
    { q: "What is the best Zoho CRM alternative?", a: "HubSpot for marketing and free tier; Pipedrive for pipeline focus; Salesforce for enterprise; Monday CRM for flexibility. Choose by ecosystem and focus." },
    { q: "Is Zoho CRM better than HubSpot?", a: "Zoho CRM often costs less and fits Zoho users; HubSpot has a stronger marketing hub and broader recognition. Compare by your stack and budget." },
    { q: "Which CRM is best for sales pipeline?", a: "Pipedrive is built for pipeline and activity. Zoho CRM and HubSpot also have pipelines; Pipedrive is the most pipeline-focused." },
  ],
};

// ——— Pipedrive alternatives ———
const PIPEDRIVE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "all-in-one", description: "Free CRM and marketing hub.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("hubspot-vs-pipedrive"), startingPrice: "Free tier", standoutFeature: "Free; marketing" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM at lower cost; free tier.", reviewHref: getCrmReviewUrl("zoho-crm"), compareHref: getCrmCompareUrl("zoho-crm-vs-pipedrive"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, rating: "4.3", bestFor: "AI & communication", description: "AI and built-in phone/email.", reviewHref: getCrmReviewUrl("freshsales"), compareHref: getCrmCompareUrl("freshsales-vs-pipedrive"), startingPrice: "From $15/user/mo", standoutFeature: "AI; dialer" },
  { slug: "close", name: "Close", logoSrc: LOGOS.close, rating: "4.5", bestFor: "inside sales", description: "Built-in calling and email for inside sales.", reviewHref: getCrmReviewUrl("close"), compareHref: getCrmCompareUrl("close-vs-pipedrive"), startingPrice: "From $49/user/mo", standoutFeature: "Calling; email" },
  { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, rating: "4.4", bestFor: "flexibility", description: "Boards and workflows beyond pipeline.", reviewHref: getCrmReviewUrl("monday-crm"), startingPrice: "From $10/user/mo", standoutFeature: "Boards" },
];

const pipedrivePage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Pipedrive Alternatives (2026)",
  subtitle: "If Pipedrive isn't the right fit—because you need marketing, free tier, or different features—these CRM alternatives offer strong options for sales teams.",
  productName: "Pipedrive",
  productSlug: "pipedrive",
  originalReviewHref: getCrmReviewUrl("pipedrive"),
  quickAnswerParagraphs: [
    "Pipedrive is a top pipeline CRM; alternatives include HubSpot for free CRM and marketing, Zoho CRM for value and free tier, Freshsales for AI and built-in communication, Close for inside sales and calling, and Monday CRM for flexibility. HubSpot, Zoho CRM, and Freshsales are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Free tier", body: "HubSpot and Zoho CRM offer free CRM. Pipedrive is paid from day one." },
    { heading: "Marketing + sales", body: "HubSpot combines marketing and sales. Better if you need marketing automation." },
    { heading: "Built-in calling", body: "Close and Freshsales bundle dialer and communication. Better for inside sales teams." },
  ],
  topAlternatives: PIPEDRIVE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, bestFor: "sales pipeline", startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
    PIPEDRIVE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for all-in-one", body: "HubSpot offers free CRM and marketing hub. For teams that want marketing and sales in one.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("hubspot-vs-pipedrive") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM has a free tier and full CRM at lower cost.", reviewHref: getCrmReviewUrl("zoho-crm"), compareHref: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
    { productName: "Freshsales", heading: "Best for AI and communication", body: "Freshsales adds AI and built-in phone/email. Compare with Pipedrive for features and price.", reviewHref: getCrmReviewUrl("freshsales"), compareHref: getCrmCompareUrl("freshsales-vs-pipedrive") },
    { productName: "Close", heading: "Best for inside sales", body: "Close is built for inside sales with calling and email in one product.", reviewHref: getCrmReviewUrl("close"), compareHref: getCrmCompareUrl("close-vs-pipedrive") },
    { productName: "Monday CRM", heading: "Best for flexibility", body: "Monday CRM offers boards and customizable workflows beyond a traditional pipeline.", reviewHref: getCrmReviewUrl("monday-crm") },
  ],
  relatedComparisons: [
    { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
    { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
    { label: "Close vs Pipedrive", href: getCrmCompareUrl("close-vs-pipedrive") },
  ],
  relatedResources: defaultRelatedResources("Pipedrive", getCrmReviewUrl("pipedrive")),
  faqItems: [
    { q: "What is the best Pipedrive alternative?", a: "HubSpot for free and marketing; Zoho CRM for value; Freshsales for AI and communication; Close for inside sales. Choose by need for free tier, marketing, or calling." },
    { q: "Is Pipedrive better than HubSpot?", a: "Pipedrive is better for pipeline-only focus; HubSpot is better for marketing and sales together and has a free tier. Choose by whether you need marketing hub." },
    { q: "Which CRM has built-in calling?", a: "Close and Freshsales include dialer and communication. Pipedrive is pipeline-focused without a built-in dialer." },
  ],
};

// ——— Monday CRM alternatives ———
const MONDAY_CRM_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "full CRM", description: "Traditional CRM with marketing and sales; free tier.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("monday-crm-vs-hubspot"), startingPrice: "Free tier", standoutFeature: "Marketing; free" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM at lower cost.", reviewHref: getCrmReviewUrl("zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "pipeline", description: "Pipeline-focused without boards.", reviewHref: getCrmReviewUrl("pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline" },
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, rating: "4.5", bestFor: "enterprise", description: "Maximum customization and scale.", reviewHref: getCrmReviewUrl("salesforce"), startingPrice: "From $25/user/mo", standoutFeature: "Enterprise" },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, rating: "4.3", bestFor: "AI", description: "AI-powered sales CRM.", reviewHref: getCrmReviewUrl("freshsales"), startingPrice: "From $15/user/mo", standoutFeature: "AI" },
];

const mondayCrmPage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Monday CRM Alternatives (2026)",
  subtitle: "If Monday CRM isn't the right fit—because you want traditional CRM, different pricing, or less customization—these CRM alternatives offer strong options.",
  productName: "Monday CRM",
  productSlug: "monday-crm",
  originalReviewHref: getCrmReviewUrl("monday-crm"),
  quickAnswerParagraphs: [
    "Monday CRM is strong for flexible workflows; alternatives include HubSpot for full marketing and sales CRM with free tier, Zoho CRM for value, Pipedrive for pipeline focus, Salesforce for enterprise, and Freshsales for AI. HubSpot and Pipedrive are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Traditional CRM", body: "HubSpot and Pipedrive offer a more traditional pipeline. Better if you don't need board-based customization." },
    { heading: "Free tier", body: "HubSpot and Zoho CRM have free CRM tiers. Monday starts paid." },
    { heading: "Pipeline-only", body: "Pipedrive is built for pipeline and activity. Simpler if you don't need boards." },
  ],
  topAlternatives: MONDAY_CRM_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, bestFor: "flexibility", startingPrice: "From $10/user/mo", standoutFeature: "Boards; workflows", reviewHref: getCrmReviewUrl("monday-crm") },
    MONDAY_CRM_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for full CRM", body: "HubSpot offers traditional CRM with marketing and sales and a free tier.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM delivers full CRM at lower cost with a free tier.", reviewHref: getCrmReviewUrl("zoho-crm") },
    { productName: "Pipedrive", heading: "Best for pipeline", body: "Pipedrive is pipeline-focused without board customization.", reviewHref: getCrmReviewUrl("pipedrive") },
    { productName: "Salesforce", heading: "Best for enterprise", body: "Salesforce scales to enterprise with maximum customization.", reviewHref: getCrmReviewUrl("salesforce") },
    { productName: "Freshsales", heading: "Best for AI", body: "Freshsales adds AI and automation at competitive pricing.", reviewHref: getCrmReviewUrl("freshsales") },
  ],
  relatedComparisons: [
    { label: "Monday CRM vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  ],
  relatedResources: defaultRelatedResources("Monday CRM", getCrmReviewUrl("monday-crm")),
  faqItems: [
    { q: "What is the best Monday CRM alternative?", a: "HubSpot for full CRM and free tier; Pipedrive for pipeline; Zoho CRM for value; Salesforce for enterprise. Choose by need for traditional CRM vs boards." },
    { q: "Is Monday CRM good for sales?", a: "Monday CRM can be used for sales with customizable boards. Pipedrive and HubSpot are more purpose-built for sales pipeline." },
    { q: "Which CRM has a free tier?", a: "HubSpot and Zoho CRM offer free CRM tiers. Monday CRM starts with a paid plan." },
  ],
};

// ——— Freshsales alternatives ———
const FRESHSALES_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "all-in-one", description: "Free CRM and marketing hub.", reviewHref: getCrmReviewUrl("hubspot"), startingPrice: "Free tier", standoutFeature: "Free; marketing" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "pipeline", description: "Pipeline focus without AI complexity.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("freshsales-vs-pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM and free tier.", reviewHref: getCrmReviewUrl("zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "close", name: "Close", logoSrc: LOGOS.close, rating: "4.5", bestFor: "inside sales", description: "Built-in calling and email.", reviewHref: getCrmReviewUrl("close"), startingPrice: "From $49/user/mo", standoutFeature: "Calling" },
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, rating: "4.5", bestFor: "enterprise", description: "Maximum scale and ecosystem.", reviewHref: getCrmReviewUrl("salesforce"), startingPrice: "From $25/user/mo", standoutFeature: "Enterprise" },
];

const freshsalesPage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Freshsales Alternatives (2026)",
  subtitle: "If Freshsales isn't the right fit—because of pricing, focus, or ecosystem—these CRM alternatives offer strong options for sales teams.",
  productName: "Freshsales",
  productSlug: "freshsales",
  originalReviewHref: getCrmReviewUrl("freshsales"),
  quickAnswerParagraphs: [
    "Freshsales is strong for AI and value; alternatives include HubSpot for free CRM and marketing, Pipedrive for pipeline simplicity, Zoho CRM for value and free tier, Close for inside sales and calling, and Salesforce for enterprise. HubSpot and Pipedrive are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Free tier", body: "HubSpot and Zoho CRM offer free CRM. Freshsales starts paid." },
    { heading: "Simpler pipeline", body: "Pipedrive is pipeline-only without AI. Better if you want minimal complexity." },
    { heading: "Ecosystem", body: "HubSpot and Salesforce have larger ecosystems. Compare integrations for your stack." },
  ],
  topAlternatives: FRESHSALES_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, bestFor: "AI & value", startingPrice: "From $15/user/mo", standoutFeature: "AI; communication", reviewHref: getCrmReviewUrl("freshsales") },
    FRESHSALES_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for all-in-one", body: "HubSpot offers free CRM and marketing hub.", reviewHref: getCrmReviewUrl("hubspot") },
    { productName: "Pipedrive", heading: "Best for pipeline", body: "Pipedrive is pipeline-focused; compare features and price.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("freshsales-vs-pipedrive") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM has a free tier and full CRM at lower cost.", reviewHref: getCrmReviewUrl("zoho-crm") },
    { productName: "Close", heading: "Best for inside sales", body: "Close bundles calling and email for inside sales.", reviewHref: getCrmReviewUrl("close") },
    { productName: "Salesforce", heading: "Best for enterprise", body: "Salesforce scales to enterprise with maximum customization.", reviewHref: getCrmReviewUrl("salesforce") },
  ],
  relatedComparisons: [
    { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  ],
  relatedResources: defaultRelatedResources("Freshsales", getCrmReviewUrl("freshsales")),
  faqItems: [
    { q: "What is the best Freshsales alternative?", a: "HubSpot for free and marketing; Pipedrive for pipeline simplicity; Zoho CRM for value; Close for inside sales. Choose by need for free tier, AI, or calling." },
    { q: "Is Freshsales better than Pipedrive?", a: "Freshsales adds AI and built-in communication; Pipedrive is simpler and pipeline-focused. Compare by whether you want AI and dialer or minimal complexity." },
    { q: "Which CRM has AI features?", a: "Freshsales includes AI; HubSpot and Salesforce also offer AI capabilities. Compare by your use case and budget." },
  ],
};

// ——— Copper alternatives ———
const COPPER_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "all-in-one", description: "Free CRM and marketing; not Google-specific.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("copper-vs-hubspot"), startingPrice: "Free tier", standoutFeature: "Free; marketing" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM at lower cost; free tier.", reviewHref: getCrmReviewUrl("zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "pipeline", description: "Pipeline-focused; integrates with Google.", reviewHref: getCrmReviewUrl("pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline" },
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, rating: "4.5", bestFor: "enterprise", description: "Maximum scale; Google integrations.", reviewHref: getCrmReviewUrl("salesforce"), startingPrice: "From $25/user/mo", standoutFeature: "Enterprise" },
  { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, rating: "4.4", bestFor: "flexibility", description: "Boards and workflows.", reviewHref: getCrmReviewUrl("monday-crm"), startingPrice: "From $10/user/mo", standoutFeature: "Boards" },
];

const copperPage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Copper Alternatives (2026)",
  subtitle: "If Copper isn't the right fit—because you're not on Google Workspace, need a free tier, or want different features—these CRM alternatives offer strong options.",
  productName: "Copper",
  productSlug: "copper",
  originalReviewHref: getCrmReviewUrl("copper"),
  quickAnswerParagraphs: [
    "Copper is built for Google Workspace; alternatives include HubSpot for free CRM and marketing, Zoho CRM for value and free tier, Pipedrive for pipeline focus, Salesforce for enterprise, and Monday CRM for flexibility. HubSpot and Zoho CRM are common alternatives for non-Google or budget-conscious teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not on Google Workspace", body: "HubSpot and Pipedrive work across ecosystems. Better if you're not all-in on Google." },
    { heading: "Free tier", body: "HubSpot and Zoho CRM offer free CRM. Copper starts paid." },
    { heading: "Lower cost", body: "Zoho CRM and Pipedrive often cost less. Copper's Google-native focus commands a premium." },
  ],
  topAlternatives: COPPER_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "copper", name: "Copper", logoSrc: LOGOS.copper, bestFor: "Google Workspace", startingPrice: "From $29/user/mo", standoutFeature: "Google native", reviewHref: getCrmReviewUrl("copper") },
    COPPER_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for all-in-one", body: "HubSpot offers free CRM and marketing; not Google-specific.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("copper-vs-hubspot") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM has a free tier and full CRM at lower cost.", reviewHref: getCrmReviewUrl("zoho-crm") },
    { productName: "Pipedrive", heading: "Best for pipeline", body: "Pipedrive is pipeline-focused and integrates with Google.", reviewHref: getCrmReviewUrl("pipedrive") },
    { productName: "Salesforce", heading: "Best for enterprise", body: "Salesforce scales to enterprise with Google integrations.", reviewHref: getCrmReviewUrl("salesforce") },
    { productName: "Monday CRM", heading: "Best for flexibility", body: "Monday CRM offers boards and customizable workflows.", reviewHref: getCrmReviewUrl("monday-crm") },
  ],
  relatedComparisons: [
    { label: "Copper vs HubSpot", href: getCrmCompareUrl("copper-vs-hubspot") },
    { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  ],
  relatedResources: defaultRelatedResources("Copper", getCrmReviewUrl("copper")),
  faqItems: [
    { q: "What is the best Copper alternative?", a: "HubSpot for free and marketing; Zoho CRM for value; Pipedrive for pipeline. Choose by whether you need Google-native or broader ecosystem." },
    { q: "Is Copper only for Google?", a: "Copper is built for Google Workspace. If you're not on Google, HubSpot, Zoho CRM, or Pipedrive are strong alternatives." },
    { q: "Which CRM works with Gmail?", a: "Copper is native to Gmail and Calendar. HubSpot, Salesforce, and others also integrate with Google; Copper is the most deeply integrated." },
  ],
};

// ——— Close alternatives ———
const CLOSE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "pipeline", description: "Pipeline focus without dialer; lower cost.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("close-vs-pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline" },
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "all-in-one", description: "Free CRM and marketing hub.", reviewHref: getCrmReviewUrl("hubspot"), startingPrice: "Free tier", standoutFeature: "Free; marketing" },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, rating: "4.3", bestFor: "AI & dialer", description: "AI and built-in communication; lower cost.", reviewHref: getCrmReviewUrl("freshsales"), startingPrice: "From $15/user/mo", standoutFeature: "AI; dialer" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM and free tier.", reviewHref: getCrmReviewUrl("zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "salesforce", name: "Salesforce", logoSrc: LOGOS.salesforce, rating: "4.5", bestFor: "enterprise", description: "Scale and customization; add dialer via app.", reviewHref: getCrmReviewUrl("salesforce"), startingPrice: "From $25/user/mo", standoutFeature: "Enterprise" },
];

const closePage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Close Alternatives (2026)",
  subtitle: "If Close isn't the right fit—because of cost, pipeline-only need, or ecosystem—these CRM alternatives offer strong options for sales teams.",
  productName: "Close",
  productSlug: "close",
  originalReviewHref: getCrmReviewUrl("close"),
  quickAnswerParagraphs: [
    "Close is built for inside sales with calling and email; alternatives include Pipedrive for pipeline-only at lower cost, HubSpot for free CRM and marketing, Freshsales for AI and built-in communication, Zoho CRM for value, and Salesforce for enterprise. Pipedrive and Freshsales are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Close starts around $49/user/month. Pipedrive and Freshsales cost less; HubSpot and Zoho have free tiers." },
    { heading: "Pipeline-only", body: "Pipedrive is pipeline-focused without a dialer. Better if you don't need built-in calling." },
    { heading: "Marketing", body: "HubSpot adds marketing hub. Better if you need marketing automation and CRM." },
  ],
  topAlternatives: CLOSE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "close", name: "Close", logoSrc: LOGOS.close, bestFor: "inside sales", startingPrice: "From $49/user/mo", standoutFeature: "Calling; email", reviewHref: getCrmReviewUrl("close") },
    CLOSE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Pipedrive", heading: "Best for pipeline", body: "Pipedrive is pipeline-focused at lower cost without built-in dialer.", reviewHref: getCrmReviewUrl("pipedrive"), compareHref: getCrmCompareUrl("close-vs-pipedrive") },
    { productName: "HubSpot", heading: "Best for all-in-one", body: "HubSpot offers free CRM and marketing hub.", reviewHref: getCrmReviewUrl("hubspot") },
    { productName: "Freshsales", heading: "Best for AI and dialer", body: "Freshsales adds AI and built-in communication at lower cost.", reviewHref: getCrmReviewUrl("freshsales") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM has a free tier and full CRM.", reviewHref: getCrmReviewUrl("zoho-crm") },
    { productName: "Salesforce", heading: "Best for enterprise", body: "Salesforce scales to enterprise; add dialer via AppExchange.", reviewHref: getCrmReviewUrl("salesforce") },
  ],
  relatedComparisons: [
    { label: "Close vs Pipedrive", href: getCrmCompareUrl("close-vs-pipedrive") },
    { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  ],
  relatedResources: defaultRelatedResources("Close", getCrmReviewUrl("close")),
  faqItems: [
    { q: "What is the best Close alternative?", a: "Pipedrive for pipeline-only and lower cost; Freshsales for AI and dialer; HubSpot for free and marketing. Choose by need for calling vs cost." },
    { q: "Is Close good for small teams?", a: "Close is built for inside sales; cost can be high for very small teams. Pipedrive and HubSpot often fit small teams better on budget." },
    { q: "Which CRM has built-in calling?", a: "Close and Freshsales include built-in dialer and communication. Pipedrive is pipeline-only; add a separate dialer if needed." },
  ],
};

// ——— Keap alternatives ———
const KEAP_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubspot", name: "HubSpot", logoSrc: LOGOS.hubspot, rating: "4.6", bestFor: "free & scale", description: "Free CRM and paid hubs; scales to larger teams.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("keap-vs-hubspot"), startingPrice: "Free tier", standoutFeature: "Free; scale" },
  { slug: "zoho-crm", name: "Zoho CRM", logoSrc: LOGOS.zoho, rating: "4.4", bestFor: "value", description: "Full CRM and marketing at lower cost.", reviewHref: getCrmReviewUrl("zoho-crm"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "pipedrive", name: "Pipedrive", logoSrc: LOGOS.pipedrive, rating: "4.5", bestFor: "sales pipeline", description: "Pipeline focus; add marketing separately.", reviewHref: getCrmReviewUrl("pipedrive"), startingPrice: "From $14.90/user/mo", standoutFeature: "Pipeline" },
  { slug: "freshsales", name: "Freshsales", logoSrc: LOGOS.freshsales, rating: "4.3", bestFor: "AI & sales", description: "AI-powered sales CRM.", reviewHref: getCrmReviewUrl("freshsales"), startingPrice: "From $15/user/mo", standoutFeature: "AI" },
  { slug: "monday-crm", name: "Monday CRM", logoSrc: LOGOS.monday, rating: "4.4", bestFor: "flexibility", description: "Boards and workflows.", reviewHref: getCrmReviewUrl("monday-crm"), startingPrice: "From $10/user/mo", standoutFeature: "Boards" },
];

const keapPage: AlternativesTemplateProps = {
  ...hubspotPage,
  title: "Best Keap Alternatives (2026)",
  subtitle: "If Keap isn't the right fit—because of pricing, scale, or focus—these CRM and marketing automation alternatives offer strong options for small businesses.",
  productName: "Keap",
  productSlug: "keap",
  originalReviewHref: getCrmReviewUrl("keap"),
  quickAnswerParagraphs: [
    "Keap combines marketing automation and CRM for small businesses; alternatives include HubSpot for free CRM and scale, Zoho CRM for value, Pipedrive for sales pipeline focus, Freshsales for AI, and Monday CRM for flexibility. HubSpot and Zoho CRM are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Free tier", body: "HubSpot has a free CRM; Keap starts paid. For teams that need zero upfront cost." },
    { heading: "Scale", body: "HubSpot scales to larger teams with clear tiers. Keap is small-business focused." },
    { heading: "Sales-only", body: "Pipedrive is pipeline-focused. Better if you don't need marketing automation." },
  ],
  topAlternatives: KEAP_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "keap", name: "Keap", logoSrc: LOGOS.keap, bestFor: "small business automation", startingPrice: "From $159/mo", standoutFeature: "Marketing + CRM", reviewHref: getCrmReviewUrl("keap") },
    KEAP_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HubSpot", heading: "Best for free and scale", body: "HubSpot offers free CRM and scales with paid hubs. Compare for small business fit.", reviewHref: getCrmReviewUrl("hubspot"), compareHref: getCrmCompareUrl("keap-vs-hubspot") },
    { productName: "Zoho CRM", heading: "Best for value", body: "Zoho CRM delivers full CRM and value at lower cost.", reviewHref: getCrmReviewUrl("zoho-crm") },
    { productName: "Pipedrive", heading: "Best for sales pipeline", body: "Pipedrive is pipeline-focused; pair with a separate marketing tool if needed.", reviewHref: getCrmReviewUrl("pipedrive") },
    { productName: "Freshsales", heading: "Best for AI and sales", body: "Freshsales adds AI to sales CRM at competitive pricing.", reviewHref: getCrmReviewUrl("freshsales") },
    { productName: "Monday CRM", heading: "Best for flexibility", body: "Monday CRM offers boards and customizable workflows.", reviewHref: getCrmReviewUrl("monday-crm") },
  ],
  relatedComparisons: [
    { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  ],
  relatedResources: defaultRelatedResources("Keap", getCrmReviewUrl("keap")),
  faqItems: [
    { q: "What is the best Keap alternative?", a: "HubSpot for free CRM and scale; Zoho CRM for value; Pipedrive for sales-only. Choose by need for marketing automation vs cost." },
    { q: "Is Keap better than HubSpot?", a: "Keap is focused on small business marketing and CRM; HubSpot has a free tier and scales to larger teams. Many small businesses compare both." },
    { q: "Which CRM is best for small business?", a: "HubSpot and Keap both target small businesses; HubSpot has a free tier. Zoho CRM and Pipedrive are also strong for SMBs. Compare pricing and features for your size." },
  ],
};

const PAGES: Record<string, AlternativesTemplateProps> = {
  hubspot: hubspotPage,
  salesforce: salesforcePage,
  "zoho-crm": zohoCrmPage,
  pipedrive: pipedrivePage,
  "monday-crm": mondayCrmPage,
  freshsales: freshsalesPage,
  copper: copperPage,
  close: closePage,
  keap: keapPage,
};

export function getCrmAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getCrmAlternativesSlugs(): string[] {
  return Object.keys(PAGES);
}
