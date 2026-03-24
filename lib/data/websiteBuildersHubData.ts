import type { ComparisonTableRow, FeaturedPickRef, FaqItem } from "@/components/hubs/HubPageTemplate";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
} from "@/lib/routes";

export const WEBSITE_BUILDERS_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "wix" },
  { slug: "squarespace" },
  { slug: "shopify" },
  { slug: "webflow" },
  { slug: "duda" },
  { slug: "godaddy-website-builder" },
  { slug: "hostinger-website-builder" },
];

export const WEBSITE_BUILDERS_COMPARISON_TABLE_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("website-builders", [
    "wix",
    "squarespace",
    "shopify",
    "webflow",
    "duda",
    "godaddy-website-builder",
    "hostinger-website-builder",
  ]).map(toHubComparisonTableRow),
];

/** Scenario pills (shown when no custom editorial replaces them — kept in sync with payroll hub structure). */
export const WEBSITE_BUILDERS_SCENARIO_LINKS = [
  { label: "Best website builders (roundup)", href: "/website-builders/best-website-builders" },
  { label: "Compare website builders", href: "/website-builders/compare" },
  { label: "Website builder guides", href: "/website-builders/guides" },
  { label: "Small business", href: getWebsiteBuildersBestForUrl("small-business") },
  { label: "Contractors", href: getWebsiteBuildersBestForUrl("contractors") },
  { label: "HVAC", href: getWebsiteBuildersBestForUrl("hvac") },
  { label: "Plumbers", href: getWebsiteBuildersBestForUrl("plumbers") },
  { label: "Electricians", href: getWebsiteBuildersBestForUrl("electricians") },
  { label: "Roofers", href: getWebsiteBuildersBestForUrl("roofers") },
  { label: "Landscapers", href: getWebsiteBuildersBestForUrl("landscapers") },
  { label: "Painters", href: getWebsiteBuildersBestForUrl("painters") },
  { label: "Cleaning services", href: getWebsiteBuildersBestForUrl("cleaning-services") },
  { label: "Home services", href: getWebsiteBuildersBestForUrl("home-services") },
];

const WEBSITE_BUILDERS_BY_TRADE = [
  { label: "Contractors", href: getWebsiteBuildersBestForUrl("contractors") },
  { label: "Small business", href: getWebsiteBuildersBestForUrl("small-business") },
  { label: "Home services", href: getWebsiteBuildersBestForUrl("home-services") },
  { label: "HVAC", href: getWebsiteBuildersBestForUrl("hvac") },
  { label: "Plumbing", href: getWebsiteBuildersBestForUrl("plumbers") },
  { label: "Electrical", href: getWebsiteBuildersBestForUrl("electricians") },
  { label: "Roofing", href: getWebsiteBuildersBestForUrl("roofers") },
  { label: "Landscaping", href: getWebsiteBuildersBestForUrl("landscapers") },
  { label: "Painters", href: getWebsiteBuildersBestForUrl("painters") },
  { label: "Cleaning services", href: getWebsiteBuildersBestForUrl("cleaning-services") },
];

export const WEBSITE_BUILDERS_TRADE_GROUPS = [
  { groupLabel: "Primary business types", links: WEBSITE_BUILDERS_BY_TRADE.slice(0, 6) },
  {
    groupLabel: "More trades & related resources",
    links: [
      ...WEBSITE_BUILDERS_BY_TRADE.slice(6),
      { label: "How to choose a website builder", href: "/website-builders/guides/how-to-choose-a-website-builder" },
      { label: "Local SEO for service sites", href: "/website-builders/guides/best-website-builder-for-local-seo" },
      { label: "CRM for lead follow-up", href: "/crm" },
    ],
  },
];

/** Editorial blocks for “best website builders by use case” (hub — matches payroll pattern). */
export const WEBSITE_BUILDERS_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Lead-first local service sites (calls, forms, quotes)",
    body: "Most trades win on speed-to-lead: mobile-friendly pages, obvious click-to-call, and quote requests without friction. Prioritize builders that make service-area pages and form workflows easy to maintain—so seasonal promos and new services do not stall on a dev queue.",
    links: [
      { label: "Best website builders for contractors →", href: getWebsiteBuildersBestForUrl("contractors") },
      { label: "Best website builders for home services →", href: getWebsiteBuildersBestForUrl("home-services") },
    ],
  },
  {
    title: "Small teams that need fast launches and simple edits",
    body: "Owner-operators and small offices should optimize for low maintenance: templates that look credible out of the box, SEO basics you can control, and editing that does not require a web specialist. Total cost matters—model apps, bookings, and marketing add-ons at year two, not just month one.",
    links: [
      { label: "Best website builders for small business →", href: getWebsiteBuildersBestForUrl("small-business") },
      { label: "Wix vs Squarespace →", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
      { label: "Hostinger vs Wix →", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
    ],
  },
  {
    title: "Brand-forward trades (galleries, before/after, visual trust)",
    body: "Roofing, painting, landscaping, and similar trades often close on proof. You need strong image handling, testimonial layouts, and fast-loading galleries on phones—without burying your phone number and quote CTA below the fold.",
    links: [
      { label: "Best for roofers →", href: getWebsiteBuildersBestForUrl("roofers") },
      { label: "Best for painters →", href: getWebsiteBuildersBestForUrl("painters") },
      { label: "Best for landscapers →", href: getWebsiteBuildersBestForUrl("landscapers") },
    ],
  },
  {
    title: "Service businesses that also sell online",
    body: "If you sell parts, retail add-ons, memberships, or maintenance plans, ecommerce depth can matter as much as lead capture. Compare checkout, inventory, and how cleanly service pages coexist with a storefront—especially on mobile.",
    links: [
      { label: "Wix vs Shopify →", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
      { label: "Squarespace vs Shopify →", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
    ],
  },
  {
    title: "Teams that need deeper design or CMS control",
    body: "Agencies, multi-location brands, or marketing-heavy operators may outgrow the simplest editors. Evaluate CMS flexibility, component reuse, performance tuning, and who actually owns day-to-day publishing before you commit.",
    links: [
      { label: "Webflow vs Wix →", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") },
      { label: "Duda vs Wix →", href: getWebsiteBuildersCompareUrl("duda-vs-wix") },
    ],
  },
  {
    title: "Budget launches: GoDaddy, Hostinger, and total cost",
    body: "When entry price and bundled hosting matter, compare renewal rates—not promos—and whether you still get service pages, forms, and local SEO basics. Simpler stacks can be enough for first-year lead gen if you commit to ongoing updates.",
    links: [
      { label: "GoDaddy vs Hostinger →", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder") },
      { label: "GoDaddy vs Wix →", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix") },
    ],
  },
  {
    title: "Industry-specific website picks",
    body: "When your question is “what fits my trade” rather than general ease of use, start from business-type pages below. They map common service workflows—urgent calls, recurring service, seasonal crews—to realistic builder strengths.",
    links: [{ label: "Go to website builders by business type →", href: "#by-trade" }],
  },
];

export const WEBSITE_BUILDERS_FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best website builder for contractors?",
    a: "Wix is our best overall for most contractors, with Squarespace strong for design and Shopify best for service + product selling.",
  },
  {
    q: "Do local service businesses need website builders with SEO tools?",
    a: "Yes. You need editable metadata, structured service pages, mobile speed, and conversion-focused local page layouts.",
  },
  {
    q: "What should home service websites prioritize?",
    a: "Lead forms, click-to-call, service-area clarity, reviews/testimonials, and easy ongoing updates.",
  },
];

export const WEBSITE_BUILDERS_METHODOLOGY = {
  title: "How we review website builders",
  sub: "Service-business conversion and maintainability criteria.",
  introParagraph:
    "We evaluate platforms for local lead generation, SEO controls, mobile conversion paths, and long-term editing simplicity.",
  bullets: [
    "We compare lead-capture and conversion workflows relevant to local operators.",
    "We assess local SEO capabilities and service-page architecture.",
    "We evaluate cost, flexibility, and ease of maintenance for small teams.",
  ],
};

/** Popular comparisons on the hub — slugs must exist in websiteBuildersComparisons. */
export const WEBSITE_BUILDERS_HUB_POPULAR_COMPARISONS: { label: string; slug: string; href: string }[] = [
  { label: "Wix vs Squarespace", slug: "wix-vs-squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
  { label: "Wix vs Shopify", slug: "wix-vs-shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
  { label: "Squarespace vs Shopify", slug: "squarespace-vs-shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
  { label: "Webflow vs Wix", slug: "webflow-vs-wix", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") },
  { label: "Duda vs Wix", slug: "duda-vs-wix", href: getWebsiteBuildersCompareUrl("duda-vs-wix") },
  { label: "GoDaddy vs Wix", slug: "godaddy-website-builder-vs-wix", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix") },
  { label: "Hostinger vs Wix", slug: "hostinger-website-builder-vs-wix", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
  { label: "GoDaddy vs Hostinger", slug: "godaddy-website-builder-vs-hostinger-website-builder", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder") },
];
