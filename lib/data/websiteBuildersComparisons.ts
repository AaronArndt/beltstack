import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

export function getWebsiteBuildersCompareUrlFromSlug(slug: string): string {
  return `/website-builders/compare/${slug}`;
}

const P = {
  wix: {
    name: "Wix",
    slug: "wix",
    reviewHref: getWebsiteBuildersReviewUrl("wix"),
    logoSrc: getWebsiteBuilderLogoSrc("wix"),
    visitUrl: "https://www.wix.com",
    bestForSummary: "Best overall for most local service businesses.",
    startingPrice: "$17/mo",
    rating: "4.6",
  },
  squarespace: {
    name: "Squarespace",
    slug: "squarespace",
    reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
    visitUrl: "https://www.squarespace.com",
    bestForSummary: "Best for polished design and trust-forward pages.",
    startingPrice: "$16/mo",
    rating: "4.4",
  },
  shopify: {
    name: "Shopify",
    slug: "shopify",
    reviewHref: getWebsiteBuildersReviewUrl("shopify"),
    logoSrc: getWebsiteBuilderLogoSrc("shopify"),
    visitUrl: "https://www.shopify.com",
    bestForSummary: "Best for service + ecommerce operations.",
    startingPrice: "$39/mo",
    rating: "4.5",
  },
  webflow: {
    name: "Webflow",
    slug: "webflow",
    reviewHref: getWebsiteBuildersReviewUrl("webflow"),
    logoSrc: getWebsiteBuilderLogoSrc("webflow"),
    visitUrl: "https://webflow.com",
    bestForSummary: "Best for advanced customization and CMS flexibility.",
    startingPrice: "$14/mo",
    rating: "4.3",
  },
  duda: {
    name: "Duda",
    slug: "duda",
    reviewHref: getWebsiteBuildersReviewUrl("duda"),
    logoSrc: getWebsiteBuilderLogoSrc("duda"),
    visitUrl: "https://www.duda.co",
    bestForSummary: "Best for agency and multi-site management.",
    startingPrice: "$19/mo",
    rating: "4.2",
  },
  "godaddy-website-builder": {
    name: "GoDaddy",
    slug: "godaddy-website-builder",
    reviewHref: getWebsiteBuildersReviewUrl("godaddy-website-builder"),
    logoSrc: getWebsiteBuilderLogoSrc("godaddy-website-builder"),
    visitUrl: "https://www.godaddy.com",
    bestForSummary: "Best for simple, fast launches.",
    startingPrice: "$10/mo",
    rating: "4.1",
  },
  "hostinger-website-builder": {
    name: "Hostinger",
    slug: "hostinger-website-builder",
    reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
    logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
    visitUrl: "https://www.hostinger.com",
    bestForSummary: "Best for budget-first launches and bundled hosting.",
    startingPrice: "$3/mo",
    rating: "4.0",
  },
} as const;

function buildComparison(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string
): [string, ComparisonTemplateProps] {
  return [
    slug,
    {
      productA: P[a],
      productB: P[b],
      categoryHref: "/website-builders",
      categoryLabel: "Website Builders",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${P[a].name} if you prioritize ${P[a].bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${P[b].name} if you prioritize ${P[b].bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [summary],
      featureComparison: [
        { feature: "Ease of use", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
        { feature: "Local SEO controls", productA: "Good", productB: "Good", supportA: "supported", supportB: "supported" },
        { feature: "Design flexibility", productA: "Good", productB: "Good", supportA: "supported", supportB: "supported" },
        { feature: "Integrations", productA: "Strong ecosystem", productB: "Solid ecosystem", supportA: "supported", supportB: "supported" },
      ],
      pricingComparison: `Both products offer tiered plans; compare total cost at your expected page count, features, and growth stage.`,
      prosConsA: { pros: ["Strong template coverage", "Good local business fit"], cons: ["Advanced custom logic can be limited"] },
      prosConsB: { pros: ["Good performance and maintainability", "Useful for growing teams"], cons: ["May require more setup"] },
      bestFor: [
        { heading: "Best for different business models", body: "Pick based on lead generation workflow, editing ownership, and how much customization you need over the next 12-24 months." },
      ],
      alternatives: [
        { name: "Wix", href: getWebsiteBuildersReviewUrl("wix"), logoSrc: getWebsiteBuilderLogoSrc("wix") },
        { name: "Squarespace", href: getWebsiteBuildersReviewUrl("squarespace"), logoSrc: getWebsiteBuilderLogoSrc("squarespace") },
        { name: "Shopify", href: getWebsiteBuildersReviewUrl("shopify"), logoSrc: getWebsiteBuilderLogoSrc("shopify") },
      ],
      faqs: [
        { q: `How does ${P[a].name} compare with ${P[b].name}?`, a: summary },
        { q: "Which is better for local service businesses?", a: "The right fit depends on design needs, lead workflow, and whether ecommerce is central to your business model." },
      ],
      sidebarWinners: [
        { label: "Ease of use", winner: "A" },
        { label: "Customization depth", winner: "B" },
      ],
      relevantTradeLinks: [
        { label: "Best for contractors", href: getWebsiteBuildersBestForUrl("contractors") },
        { label: "Best for HVAC", href: getWebsiteBuildersBestForUrl("hvac") },
        { label: "Best for plumbers", href: getWebsiteBuildersBestForUrl("plumbers") },
      ],
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  buildComparison("wix-vs-squarespace", "wix", "squarespace", "Wix is stronger for app flexibility and rapid lead-generation pages, while Squarespace leads on polished visual design and presentation."),
  buildComparison("wix-vs-shopify", "wix", "shopify", "Wix is better for straightforward service-business websites; Shopify wins when ecommerce and online transactions are central."),
  buildComparison("squarespace-vs-shopify", "squarespace", "shopify", "Squarespace fits design-first content and service websites; Shopify is better for businesses where selling online is the primary driver."),
  buildComparison("webflow-vs-wix", "webflow", "wix", "Webflow offers deeper design control and CMS flexibility, while Wix is faster for non-technical teams and local business launch speed."),
  buildComparison("duda-vs-wix", "duda", "wix", "Duda is better for agencies and multi-site management workflows; Wix is better for owner-operators managing one primary business site."),
  buildComparison("godaddy-website-builder-vs-wix", "godaddy-website-builder", "wix", "GoDaddy is simpler and faster for basic launch needs; Wix offers more flexibility, app depth, and growth runway."),
  buildComparison(
    "hostinger-website-builder-vs-wix",
    "hostinger-website-builder",
    "wix",
    "Hostinger wins on entry price and a tight hosting-plus-site bundle for new operators; Wix wins on app breadth, local-business workflows, and long-term marketing depth."
  ),
  buildComparison(
    "godaddy-website-builder-vs-hostinger-website-builder",
    "godaddy-website-builder",
    "hostinger-website-builder",
    "GoDaddy is often the faster path for non-technical owners who want a recognizable brand and checkout domain services in one flow; Hostinger is stronger when ultra-low cost and hosting stack value matter most."
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getWebsiteBuildersComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getWebsiteBuildersComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
