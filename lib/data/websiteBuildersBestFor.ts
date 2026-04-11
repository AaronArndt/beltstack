import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

function makeBestForPage(titleSuffix: string, slug: string, subtitleFocus: string): BestForTemplateProps {
  const focusLc = subtitleFocus.toLowerCase();
  return {
    title: `Best Website Builders for ${titleSuffix} (2026)`,
    subtitle: `Compare website builders for ${subtitleFocus} with a focus on local lead generation, trust signals, and easy updates.`,
    useCase: slug,
    categoryHref: "/website-builders",
    categoryLabel: "Website Builders",
    introParagraph:
      `Service businesses need websites that convert visitors into calls and quote requests, not just pretty templates. This page is optimized for teams searching "best website builder for ${focusLc}" and choosing between faster launch, better local SEO control, and long-term workflow fit.`,
    freshnessText: "Updated for 2026",
    topPicksSub: `Top picks for ${subtitleFocus.toLowerCase()}.`,
    editorialSub: `What matters most when choosing a website builder for ${focusLc}.`,
    whyThesePicksSub: `Why these platforms rank best for ${focusLc}.`,
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
      {
        heading: "Prioritize conversion architecture first",
        body: "Structure pages around high-intent actions: calls, quote requests, booking, and contact forms. Clear hero messaging plus service-specific landing pages usually beats design flair for local lead generation.",
      },
      {
        heading: "Match builder complexity to the real owner",
        body: "Pick the platform the day-to-day operator can maintain. If office staff cannot publish pages and updates quickly, growth stalls regardless of feature depth.",
      },
      {
        heading: "Treat local SEO as an operating system",
        body: "You need editable metadata, URL control, internal linking, and rapid publishing for service + city pages. Ranking consistency comes from weekly execution, not one-time setup.",
      },
      {
        heading: "Model 12-month cost, not launch pricing",
        body: "Compare total cost including apps, seats, integrations, and migration friction. Cheap entry tiers often become expensive once marketing workflows are fully active.",
      },
    ],
    whyThesePicks: [
      {
        heading: "Wix",
        body: "Wix is the most consistent fit for service businesses that need city and service-line pages, quote or booking forms, and weekly publishing without waiting on a developer queue. During a trial, publish a real service page, connect your primary lead form, and confirm mobile click-to-call and map embeds behave the way dispatch expects—not just how the template looks on desktop. Its app ecosystem helps when you outgrow bare forms and need routing, CRM handoffs, or scheduling. For local SEO workflows, validate that titles, meta, and internal links stay easy to adjust after launch; the best builder is the one your team will actually update. It balances speed-to-launch with enough depth to scale as you add locations, offers, or proof galleries.",
      },
      {
        heading: "Squarespace",
        body: "Squarespace shines when visual trust—portfolio galleries, testimonials, and polished before/after layouts—directly influences whether homeowners or commercial buyers request a quote. Use the trial to build one high-intent landing page and have a real estimator or office manager try to edit copy and swap photos without support tickets. It is a strong match for premium positioning where design consistency signals craftsmanship, safety, and reliability. Confirm form notifications and spam handling meet your lead SLA; beautiful pages still fail if submissions get lost. For teams that prioritize brand presentation over deep app sprawl, Squarespace often stays simpler day to day than heavier stacks.",
      },
      {
        heading: "Shopify",
        body: "Shopify belongs in the shortlist when online checkout is strategic—filters, memberships, maintenance plan SKUs, merch, or recurring charges—not a one-off PayPal button buried on a contact page. Trial it with a small catalog, test tax and shipping rules if relevant, and ensure the POS or field workflow still makes sense if crews sell in person too. Service businesses adding ecommerce should validate abandoned-cart and email integration paths so marketing can follow up compliantly. If you only need calls and quote forms, Wix or Squarespace usually stay leaner; if revenue truly moves through carts, Shopify’s commerce depth wins. Treat the trial as a finance and operations exercise, not only a theme preview.",
      },
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
      { label: "Best website builder for local SEO", href: "/website-builders/guides/best-website-builder-for-local-seo" },
      { label: "Contractor website features", href: "/website-builders/guides/contractor-website-features" },
      { label: "Website builders vs WordPress", href: "/website-builders/guides/website-builders-vs-wordpress" },
      { label: "Lead generation tools hub", href: "/lead-generation" },
    ],
    faqItems: [
      {
        q: `What should ${focusLc} prioritize in a website builder?`,
        a: "Prioritize lead capture flow, mobile conversion UX, local SEO publishing speed, and ease of weekly updates. The best platform is the one your team can maintain without technical delays.",
      },
      {
        q: `What is the best website builder for ${focusLc}?`,
        a: "For most service-business use cases, Wix is the practical default because it combines flexible lead workflows with manageable day-to-day operations. Squarespace is strong for design-first brands, and Shopify is best when ecommerce is central.",
      },
      {
        q: "Is Wix or Squarespace better for service websites?",
        a: "Wix usually wins for operational flexibility and app-driven workflows; Squarespace wins when polished visual branding is the top priority. Use our Wix vs Squarespace comparison and both reviews before migrating.",
      },
      {
        q: "Should I use Shopify if I mainly need leads, not ecommerce?",
        a: "Usually no. Shopify is excellent for transaction-heavy operations, but service businesses focused on calls and quote forms often get better ROI from Wix or Squarespace unless checkout revenue is strategic.",
      },
      {
        q: "What should I read after this best-for page?",
        a: "Open the full best website builders roundup, compare head-to-head pages (Wix vs Squarespace, Wix vs Shopify), then validate your final shortlist in the detailed review pages linked above.",
      },
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
