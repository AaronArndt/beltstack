import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

function makeBestForPage(titleSuffix: string, slug: string, subtitleFocus: string): BestForTemplateProps {
  return {
    title: `Best Website Builders for ${titleSuffix} (2026)`,
    subtitle: `Compare website builders for ${subtitleFocus} with a focus on local lead generation, trust signals, and easy updates.`,
    useCase: slug,
    categoryHref: "/website-builders",
    categoryLabel: "Website Builders",
    introParagraph:
      "Service businesses need websites that convert visitors into calls and quote requests, not just pretty templates.",
    freshnessText: "Updated for 2026",
    topPicksSub: `Top picks for ${subtitleFocus.toLowerCase()}.`,
    editorialSub: "What matters most for this service-business use case.",
    whyThesePicksSub: "Why these platforms are best for this audience.",
    seeAlsoBlock: {
      roundupLabel: "best website builders",
      roundupHref: "/website-builders/best-website-builders",
      compareLabel: "website builder comparisons",
      compareHref: "/website-builders/compare",
    },
    featuredProducts: [
      { slug: "wix", name: "Wix", badge: "Best overall", description: "Strong local-business feature set with fast publishing and lead capture.", rating: "4.6", startingPrice: "From $17/mo", reviewHref: getWebsiteBuildersReviewUrl("wix"), visitUrl: "https://www.wix.com", logoSrc: getWebsiteBuilderLogoSrc("wix") },
      { slug: "squarespace", name: "Squarespace", badge: "Best for polished trust pages", description: "Great visual presentation for galleries, testimonials, and credibility.", rating: "4.4", startingPrice: "From $16/mo", reviewHref: getWebsiteBuildersReviewUrl("squarespace"), visitUrl: "https://www.squarespace.com", logoSrc: getWebsiteBuilderLogoSrc("squarespace") },
      { slug: "shopify", name: "Shopify", badge: "Best for selling online", description: "Best fit when your business also sells products, memberships, or plans.", rating: "4.5", startingPrice: "From $39/mo", reviewHref: getWebsiteBuildersReviewUrl("shopify"), visitUrl: "https://www.shopify.com", logoSrc: getWebsiteBuilderLogoSrc("shopify") },
    ],
    comparisonTableRows: [
      { slug: "wix", name: "Wix", logoSrc: getWebsiteBuilderLogoSrc("wix"), bestFor: "Local service conversion", startingPrice: "From $17/mo", standoutFeature: "Fast lead-gen pages", reviewHref: getWebsiteBuildersReviewUrl("wix") },
      { slug: "squarespace", name: "Squarespace", logoSrc: getWebsiteBuilderLogoSrc("squarespace"), bestFor: "Brand and visual trust", startingPrice: "From $16/mo", standoutFeature: "Design quality", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
      { slug: "shopify", name: "Shopify", logoSrc: getWebsiteBuilderLogoSrc("shopify"), bestFor: "Service + ecommerce", startingPrice: "From $39/mo", standoutFeature: "Checkout depth", reviewHref: getWebsiteBuildersReviewUrl("shopify") },
    ],
    editorialGuidance: [
      { heading: "Prioritize conversion structure", body: "Use clear above-the-fold messaging, service-specific pages, and frictionless quote/contact forms." },
      { heading: "Build local trust", body: "Include reviews, before/after proof, licenses, and service-area clarity so high-intent visitors convert quickly." },
      { heading: "Keep maintenance simple", body: "Your team should be able to update content, promotions, and seasonal offers without developer dependencies." },
    ],
    whyThesePicks: [
      { heading: "Wix", body: "Best all-around balance of usability, SEO controls, and practical lead-generation modules for local operators." },
      { heading: "Squarespace", body: "Great for service brands where visual credibility and presentation quality impact close rates." },
      { heading: "Shopify", body: "Best when website revenue includes products, subscriptions, or online transactions beyond lead capture." },
    ],
    relatedReviews: [
      { name: "Wix", href: getWebsiteBuildersReviewUrl("wix") },
      { name: "Squarespace", href: getWebsiteBuildersReviewUrl("squarespace") },
      { name: "Shopify", href: getWebsiteBuildersReviewUrl("shopify") },
    ],
    relatedComparisons: [
      { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
      { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
      { label: "Squarespace vs Shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
      { label: "Hostinger vs Wix", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
      { label: "GoDaddy vs Hostinger", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder") },
    ],
    relatedGuides: [
      { label: "How to choose a website builder", href: "/website-builders/guides/how-to-choose-a-website-builder" },
      { label: "How to build a service business website", href: "/website-builders/guides/how-to-build-a-service-business-website" },
    ],
    faqItems: [
      { q: `What should ${subtitleFocus.toLowerCase()} prioritize in a website builder?`, a: "Prioritize lead capture, mobile performance, local SEO controls, and easy page updates." },
      { q: "Is Wix or Squarespace better for service websites?", a: "Wix is usually better for operational flexibility; Squarespace is better for design-first presentation." },
    ],
  };
}

export const WEBSITE_BUILDERS_BEST_FOR: Record<string, BestForTemplateProps> = {
  "small-business": makeBestForPage("Small Business", "small-business", "small businesses"),
  contractors: makeBestForPage("Contractors", "contractors", "contractors"),
  hvac: makeBestForPage("HVAC", "hvac", "HVAC companies"),
  plumbers: makeBestForPage("Plumbers", "plumbers", "plumbing businesses"),
  electricians: makeBestForPage("Electricians", "electricians", "electrical contractors"),
  roofers: makeBestForPage("Roofers", "roofers", "roofing companies"),
  landscapers: makeBestForPage("Landscapers", "landscapers", "landscaping businesses"),
  painters: makeBestForPage("Painters", "painters", "painting businesses"),
  "cleaning-services": makeBestForPage("Cleaning Services", "cleaning-services", "cleaning service businesses"),
  "home-services": makeBestForPage("Home Services", "home-services", "home service businesses"),
};

export function getWebsiteBuildersBestForBySlug(slug: string): BestForTemplateProps | null {
  return WEBSITE_BUILDERS_BEST_FOR[slug] ?? null;
}

export function getWebsiteBuildersBestForSlugs(): string[] {
  return Object.keys(WEBSITE_BUILDERS_BEST_FOR);
}

export const WEBSITE_BUILDERS_BEST_FOR_INDEX = [
  { label: "Best website builders (roundup)", href: "/website-builders/best-website-builders", description: "Full rankings for service-business websites." },
  { label: "Best website builders for small business", href: getWebsiteBuildersBestForUrl("small-business"), description: "Core picks for owner-operators and small teams." },
  { label: "Best website builders for contractors", href: getWebsiteBuildersBestForUrl("contractors"), description: "Lead and quote workflows for contractor sites." },
  { label: "Best website builders for HVAC", href: getWebsiteBuildersBestForUrl("hvac"), description: "Mobile-first local conversion for HVAC." },
  { label: "Best website builders for plumbers", href: getWebsiteBuildersBestForUrl("plumbers"), description: "Urgent intent pages and trust signals for plumbing." },
  { label: "Best website builders for electricians", href: getWebsiteBuildersBestForUrl("electricians"), description: "Conversion pages for electrical services." },
  { label: "Best website builders for roofers", href: getWebsiteBuildersBestForUrl("roofers"), description: "Gallery-heavy roofing websites that convert." },
  { label: "Best website builders for landscapers", href: getWebsiteBuildersBestForUrl("landscapers"), description: "Visual portfolio and service-area pages." },
  { label: "Best website builders for painters", href: getWebsiteBuildersBestForUrl("painters"), description: "Before/after and estimate-request optimized sites." },
  { label: "Best website builders for cleaning services", href: getWebsiteBuildersBestForUrl("cleaning-services"), description: "Recurring service lead workflows and trust content." },
  { label: "Best website builders for home services", href: getWebsiteBuildersBestForUrl("home-services"), description: "Broad recommendations for home-service operators." },
];
