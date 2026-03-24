import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

export type BestWebsiteBuilderPick = SoftwarePickCardContent;

export const TOP_PICKS: BestWebsiteBuilderPick[] = [
  {
    slug: "wix",
    name: "Wix",
    badge: "Best overall for service businesses",
    description:
      "Easy drag-and-drop builder with strong local business features, booking, and lead forms.",
    editorialParagraph:
      "Wix is the easiest all-around pick for local service businesses that need a modern site, quote/contact forms, and quick updates without hiring a developer.",
    rating: "4.6",
    startingPrice: "From $17/mo",
    logoSrc: getWebsiteBuilderLogoSrc("wix"),
    visitUrl: "https://www.wix.com",
    compareSlugs: ["wix-vs-squarespace", "wix-vs-shopify", "webflow-vs-wix"],
    pros: ["Fast setup", "Strong templates", "Good local business apps", "Built-in SEO tools"],
    cons: ["Can get pricey with apps", "Advanced customization is limited"],
    pricingSummary: "Wix starts with low-cost plans and scales with ecommerce and marketing add-ons.",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    comparisonTableBestFor: "Most local service businesses",
    standoutFeature: "Easy website + bookings + forms",
  },
  {
    slug: "squarespace",
    name: "Squarespace",
    badge: "Best design quality",
    description: "Polished templates and strong content presentation for brand-forward service companies.",
    editorialParagraph:
      "Squarespace works well when visual quality and trust matter most, especially for trades that rely on galleries and before/after work.",
    rating: "4.4",
    startingPrice: "From $16/mo",
    logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
    visitUrl: "https://www.squarespace.com",
    compareSlugs: ["wix-vs-squarespace", "squarespace-vs-shopify"],
    pros: ["Great templates", "Strong media presentation", "Simple editor"],
    cons: ["Less app flexibility than Wix", "Fewer advanced workflow options"],
    pricingSummary: "Squarespace offers straightforward plans with higher tiers for commerce.",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    comparisonTableBestFor: "Design-focused websites",
    standoutFeature: "High-end templates",
  },
  {
    slug: "shopify",
    name: "Shopify",
    badge: "Best for selling services + products",
    description: "Commerce-first platform for businesses that need online sales plus service lead generation.",
    editorialParagraph:
      "Shopify is best when your website must handle real ecommerce while still supporting service pages, lead capture, and local credibility.",
    rating: "4.5",
    startingPrice: "From $39/mo",
    logoSrc: getWebsiteBuilderLogoSrc("shopify"),
    visitUrl: "https://www.shopify.com",
    compareSlugs: ["wix-vs-shopify", "squarespace-vs-shopify"],
    pros: ["Best commerce stack", "Strong app ecosystem", "Reliable checkout"],
    cons: ["Higher monthly cost", "More setup for content-first sites"],
    pricingSummary: "Shopify starts higher than typical builders but includes robust ecommerce.",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    comparisonTableBestFor: "Service + ecommerce hybrid businesses",
    standoutFeature: "Best-in-class commerce",
  },
  {
    slug: "webflow",
    name: "Webflow",
    badge: "Best for advanced customization",
    description: "Powerful visual development platform for custom layouts and conversion-focused pages.",
    editorialParagraph:
      "Webflow is ideal for teams or agencies that need full design control and better performance tuning than template-first builders.",
    rating: "4.3",
    startingPrice: "From $14/mo",
    logoSrc: getWebsiteBuilderLogoSrc("webflow"),
    visitUrl: "https://webflow.com",
    compareSlugs: ["webflow-vs-wix"],
    pros: ["High design flexibility", "Strong CMS", "Clean performance"],
    cons: ["Steeper learning curve", "Not as beginner-friendly"],
    pricingSummary: "Webflow has separate site and workspace pricing, so cost scales with usage.",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    comparisonTableBestFor: "Custom, high-converting sites",
    standoutFeature: "Designer-level control",
  },
  {
    slug: "duda",
    name: "Duda",
    badge: "Best for agencies and multi-location",
    description: "Website builder built for teams managing multiple client or location sites.",
    editorialParagraph:
      "Duda is a strong fit for agency workflows and service brands with multiple locations that need repeatable site operations.",
    rating: "4.2",
    startingPrice: "From $19/mo",
    logoSrc: getWebsiteBuilderLogoSrc("duda"),
    visitUrl: "https://www.duda.co",
    compareSlugs: ["duda-vs-wix"],
    pros: ["Great client management tools", "Fast templates", "Solid page speed"],
    cons: ["Smaller app ecosystem", "Less brand familiarity"],
    pricingSummary: "Duda pricing is competitive for teams managing several sites.",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    comparisonTableBestFor: "Agencies and multi-site operations",
    standoutFeature: "Multi-site management",
  },
  {
    slug: "godaddy-website-builder",
    name: "GoDaddy",
    badge: "Best for fast, simple local sites",
    description: "Low-friction setup for contact-forward business sites and basic service pages.",
    editorialParagraph:
      "GoDaddy is a practical choice when you need to go live quickly with a phone number, map, and quote form—without diving into apps or complex design systems.",
    rating: "4.1",
    startingPrice: "From $10/mo",
    logoSrc: getWebsiteBuilderLogoSrc("godaddy-website-builder"),
    visitUrl: "https://www.godaddy.com/websites/website-builder",
    compareSlugs: ["godaddy-website-builder-vs-wix", "godaddy-website-builder-vs-hostinger-website-builder"],
    pros: ["Very fast publish path", "Simple editor", "Good for bare-bones local listings"],
    cons: ["Less flexibility than Wix", "Fewer advanced marketing and SEO controls"],
    pricingSummary: "Entry plans are affordable; add-ons and renewal pricing should be checked before you commit.",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    comparisonTableBestFor: "Quick launch, minimal complexity",
    standoutFeature: "Speed to live",
  },
  {
    slug: "hostinger-website-builder",
    name: "Hostinger",
    badge: "Best budget-friendly launch",
    description: "Affordable builder for new service businesses that need a credible site on a tight budget.",
    editorialParagraph:
      "Hostinger fits very budget-conscious operators who still need mobile-friendly templates, basic SEO, and room to grow into hosting and email in one stack.",
    rating: "4.0",
    startingPrice: "From $3/mo",
    logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
    visitUrl: "https://www.hostinger.com/website-builder",
    compareSlugs: ["hostinger-website-builder-vs-wix", "godaddy-website-builder-vs-hostinger-website-builder"],
    pros: ["Low entry price", "Straightforward templates", "Bundled hosting positioning"],
    cons: ["Ecosystem smaller than Wix", "Less hand-holding for advanced marketing"],
    pricingSummary: "Promotional pricing is common—confirm renewal rates and what is included long term.",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    comparisonTableBestFor: "Budget-first service businesses",
    standoutFeature: "Low cost of entry",
  },
];

export const COMPARISON_TABLE_ROWS = TOP_PICKS.map((pick) => ({
  slug: pick.slug,
  name: pick.name,
  logoSrc: pick.logoSrc,
  bestFor: pick.comparisonTableBestFor ?? pick.badge,
  startingPrice: pick.startingPrice,
  rating: pick.rating,
  reviewHref: getWebsiteBuildersReviewUrl(pick.slug),
}));

/** Additional builders featured on the roundup below main picks (not duplicated in TOP_PICKS). */
export const MORE_WEBSITE_BUILDER_OPTIONS = [
  {
    slug: "wordpress",
    name: "WordPress",
    description: "Content-friendly option for businesses that prioritize blogging and SEO content.",
    reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
    logoSrc: getWebsiteBuilderLogoSrc("wordpress"),
  },
];

export const USE_CASE_LINKS = [
  { label: "Best website builders for small business", href: getWebsiteBuildersBestForUrl("small-business"), description: "Reliable local business websites with lead generation." },
  { label: "Best website builders for contractors", href: getWebsiteBuildersBestForUrl("contractors"), description: "Quote forms, service pages, and trust signals for contractors." },
  { label: "Best website builders for HVAC", href: getWebsiteBuildersBestForUrl("hvac"), description: "Lead capture and mobile-first service area pages." },
  { label: "Best website builders for home services", href: getWebsiteBuildersBestForUrl("home-services"), description: "Conversion-focused websites for local operators." },
];

/** Trade / industry best-for links (roundup “by trade” row — aligned with hub trade pills). */
export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
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

export const RELATED_COMPARISONS = [
  { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
  { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
  { label: "Squarespace vs Shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
  { label: "Webflow vs Wix", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") },
  { label: "Duda vs Wix", href: getWebsiteBuildersCompareUrl("duda-vs-wix") },
  { label: "GoDaddy vs Wix", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix") },
  { label: "Hostinger vs Wix", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
  { label: "GoDaddy vs Hostinger", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder") },
];

export const FAQ_ITEMS = [
  { q: "What is the best website builder for service businesses?", a: "Wix is our best overall for most local service businesses, while Squarespace is best for polished design and Shopify is best when ecommerce matters." },
  { q: "Do contractors need a website builder with SEO tools?", a: "Yes. Local service businesses should prioritize local SEO basics, service-area pages, reviews, and conversion-focused contact forms." },
  { q: "Is Shopify overkill for service companies?", a: "Not always. If you sell products, memberships, or maintenance plans online, Shopify can be a strong fit." },
];
