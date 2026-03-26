/**
 * POS (Point of Sale) alternatives page data.
 * Used by app/pos/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live POS review pages.
 */

import { getPosReviewUrl, getPosCompareUrl, getPosBestForUrl } from "@/lib/routes";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getPosComparison } from "@/lib/data/posComparisons";
import { POS_LOGOS } from "@/lib/data/posHubData";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/pos", label: "POS Software" };
const ROUNDUP_HREF = "/pos/best-pos-software";
const COMPARE_HUB = "/pos/compare";
const GUIDES_HUB = "/pos/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Retail vs restaurant", body: "Retail POS (Square, Lightspeed, Vend, Clover) focus on inventory and multi-location. Restaurant POS (Toast, TouchBistro) add table management, kitchen display, and online ordering. Choose by your primary use case." },
  { heading: "Hardware and payments", body: "Check which terminals, readers, and printers are supported. Square and Clover offer their own hardware; others support a range. Payment processing may be integrated or through a separate processor." },
  { heading: "Ecommerce and omnichannel", body: "If you sell online and in-store, Shopify POS and Lightspeed unify inventory and orders. Square links to its online store. Compare how well each ties online and in-person sales." },
  { heading: "Inventory and reporting", body: "Retail and multi-location businesses need stock levels, reorders, and consolidated reporting. Compare depth of inventory and reporting across locations." },
  { heading: "Pricing and contracts", body: "Square has free software and pay-per-swipe; others charge monthly plus processing. Compare software fees, hardware cost, and contract terms." },
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

function posRel(slug: string) {
  return toAlternativesRelatedComparison(getPosCompareUrl(slug), getPosComparison(slug));
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "POS Software hub", href: CATEGORY.href },
    { label: "Best POS software", href: ROUNDUP_HREF },
    { label: "Compare POS software", href: COMPARE_HUB },
    { label: "POS guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getPosBestForUrl("small-business") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Square alternatives ———
const SQUARE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "shopify-pos", name: "Shopify POS", logoSrc: POS_LOGOS.shopify, rating: "4.5", bestFor: "ecommerce", description: "Unified online and in-store when you use Shopify.", reviewHref: getPosReviewUrl("shopify-pos"), compareHref: getPosCompareUrl("square-pos-vs-shopify-pos"), startingPrice: "From $39/mo", standoutFeature: "Ecommerce unified" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "hardware and apps", description: "Wide hardware and app ecosystem; higher typical cost.", reviewHref: getPosReviewUrl("clover-pos"), compareHref: getPosCompareUrl("square-pos-vs-clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; app market" },
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Deeper inventory and multi-location for retail.", reviewHref: getPosReviewUrl("lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-location" },
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Table management, kitchen display, online ordering.", reviewHref: getPosReviewUrl("toast-pos"), compareHref: getPosCompareUrl("toast-pos-vs-square-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
  { slug: "vend-pos", name: "Vend (Lightspeed Retail)", logoSrc: POS_LOGOS.vend, rating: "4.3", bestFor: "retail", description: "Retail-focused; now part of Lightspeed.", reviewHref: getPosReviewUrl("vend-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-store" },
];

const squareOriginalRow: AlternativesTableRow = {
  slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, bestFor: "overall small business", startingPrice: "Free software", standoutFeature: "Simple; flexible", reviewHref: getPosReviewUrl("square-pos"),
};

const squarePage: AlternativesTemplateProps = {
  title: "Best Square Alternatives (2026)",
  subtitle: "If Square isn't the right fit—because you need ecommerce, deeper retail, restaurant features, or different hardware—these POS alternatives offer strong options for small businesses.",
  productName: "Square",
  productSlug: "square-pos",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getPosReviewUrl("square-pos"),
  quickAnswerParagraphs: [
    "Square is a strong default for many small businesses; alternatives include Shopify POS for ecommerce, Clover for hardware and apps, Lightspeed for retail depth, Toast for restaurants, and Vend for retail multi-store. Shopify and Clover are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Ecommerce", body: "Shopify POS unifies online and in-store when you run a Shopify store. Better if ecommerce is central." },
    { heading: "Retail depth", body: "Lightspeed and Vend offer deeper inventory and multi-location reporting. For growing retail." },
    { heading: "Restaurant", body: "Toast and TouchBistro are built for restaurants: tables, kitchen display, online ordering." },
  ],
  topAlternatives: SQUARE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(squareOriginalRow, SQUARE_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Shopify POS", heading: "Best for ecommerce", body: "Shopify POS unifies online and in-store sales when you use Shopify. For ecommerce-first businesses.", reviewHref: getPosReviewUrl("shopify-pos"), compareHref: getPosCompareUrl("square-pos-vs-shopify-pos") },
    { productName: "Clover", heading: "Best for hardware and apps", body: "Clover offers a wide choice of terminals and an app market. For businesses that want more hardware and add-on options.", reviewHref: getPosReviewUrl("clover-pos"), compareHref: getPosCompareUrl("square-pos-vs-clover-pos") },
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed provides deeper inventory and multi-location for retail. For stores that outgrow Square's retail depth.", reviewHref: getPosReviewUrl("lightspeed-pos") },
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is purpose-built for restaurants with table and kitchen management. Compare with Square for food service.", reviewHref: getPosReviewUrl("toast-pos"), compareHref: getPosCompareUrl("toast-pos-vs-square-pos") },
    { productName: "Vend", heading: "Best for retail", body: "Vend (Lightspeed Retail) is retail-focused with multi-store support. Part of the Lightspeed family.", reviewHref: getPosReviewUrl("vend-pos") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    posRel("square-pos-vs-shopify-pos"),
    posRel("square-pos-vs-clover-pos"),
    posRel("toast-pos-vs-square-pos"),
  ],
  relatedResources: defaultRelatedResources("Square", getPosReviewUrl("square-pos")),
  faqItems: [
    { q: "What is the best Square alternative?", a: "Shopify POS for ecommerce; Clover for hardware and apps; Lightspeed for retail; Toast for restaurants. Choose by your primary use case." },
    { q: "Is Square better than Clover?", a: "Square has free software and simpler pricing; Clover has more hardware and app options. Choose Square for simplicity; Clover for flexibility and ecosystem." },
    { q: "Which POS is best for restaurants besides Square?", a: "Toast and TouchBistro are built for restaurants with table management, kitchen display, and online ordering. Square can work for simple cafes." },
  ],
};

// ——— Shopify POS alternatives ———
const SHOPIFY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "no monthly fee", description: "Free software and simple setup; no Shopify required.", reviewHref: getPosReviewUrl("square-pos"), compareHref: getPosCompareUrl("square-pos-vs-shopify-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Retail-first with deeper inventory and multi-location.", reviewHref: getPosReviewUrl("lightspeed-pos"), compareHref: getPosCompareUrl("shopify-pos-vs-lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-location" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "hardware and apps", description: "Wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
  { slug: "vend-pos", name: "Vend (Lightspeed Retail)", logoSrc: POS_LOGOS.vend, rating: "4.3", bestFor: "retail", description: "Retail-focused; part of Lightspeed.", reviewHref: getPosReviewUrl("vend-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-store" },
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Restaurant-focused with table and kitchen management.", reviewHref: getPosReviewUrl("toast-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
];

const shopifyPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Shopify POS Alternatives (2026)",
  subtitle: "If Shopify POS isn't the right fit—because you don't use Shopify, want lower cost, or need different features—these POS alternatives offer strong options.",
  productName: "Shopify POS",
  productSlug: "shopify-pos",
  originalReviewHref: getPosReviewUrl("shopify-pos"),
  quickAnswerParagraphs: [
    "Shopify POS is best when you run a Shopify store; alternatives include Square for free software and no Shopify requirement, Lightspeed for retail depth, and Clover or Vend for different ecosystems. Square and Lightspeed are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "No Shopify store", body: "Square doesn't require a Shopify subscription. Free software and pay-per-swipe suit many in-person-only businesses." },
    { heading: "Retail depth", body: "Lightspeed and Vend offer retail-focused inventory and multi-location without ecommerce at the core." },
    { heading: "Cost", body: "Shopify POS requires a Shopify plan. Square has no monthly software fee." },
  ],
  topAlternatives: SHOPIFY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "shopify-pos", name: "Shopify POS", logoSrc: POS_LOGOS.shopify, bestFor: "ecommerce unified", startingPrice: "From $39/mo", standoutFeature: "Ecommerce; unified", reviewHref: getPosReviewUrl("shopify-pos") },
    SHOPIFY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Square", heading: "Best for no monthly fee", body: "Square offers free POS software and doesn't require Shopify. For in-person-first businesses that want simple pricing.", reviewHref: getPosReviewUrl("square-pos"), compareHref: getPosCompareUrl("square-pos-vs-shopify-pos") },
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed is retail-first with deeper inventory and multi-location. For stores that don't need Shopify's ecommerce.", reviewHref: getPosReviewUrl("lightspeed-pos"), compareHref: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
    { productName: "Clover", heading: "Best for hardware and apps", body: "Clover offers a wide hardware and app ecosystem. Alternative for businesses that want flexibility.", reviewHref: getPosReviewUrl("clover-pos") },
    { productName: "Vend", heading: "Best for retail", body: "Vend (Lightspeed Retail) is retail-focused with multi-store support.", reviewHref: getPosReviewUrl("vend-pos") },
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is built for restaurants. For food service that doesn't need Shopify.", reviewHref: getPosReviewUrl("toast-pos") },
  ],
  relatedComparisons: [
    posRel("square-pos-vs-shopify-pos"),
    posRel("shopify-pos-vs-lightspeed-pos"),
  ],
  relatedResources: defaultRelatedResources("Shopify POS", getPosReviewUrl("shopify-pos")),
  faqItems: [
    { q: "What is the best Shopify POS alternative?", a: "Square for free software and no Shopify; Lightspeed for retail; Clover for hardware and apps. Choose by whether you need ecommerce or not." },
    { q: "Is Shopify POS better than Square?", a: "Shopify POS is best when you have a Shopify store and want unified online and in-store. Square is better for in-person-only or when you don't want a Shopify subscription." },
    { q: "Which POS works without a monthly subscription?", a: "Square offers free POS software; you pay per transaction. Most others charge a monthly software fee." },
  ],
};

// ——— Lightspeed alternatives ———
const LIGHTSPEED_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "shopify-pos", name: "Shopify POS", logoSrc: POS_LOGOS.shopify, rating: "4.5", bestFor: "ecommerce", description: "Unified online and in-store with Shopify.", reviewHref: getPosReviewUrl("shopify-pos"), compareHref: getPosCompareUrl("shopify-pos-vs-lightspeed-pos"), startingPrice: "From $39/mo", standoutFeature: "Ecommerce unified" },
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "simplicity", description: "Free software and simpler setup for single-location.", reviewHref: getPosReviewUrl("square-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "vend-pos", name: "Vend (Lightspeed Retail)", logoSrc: POS_LOGOS.vend, rating: "4.3", bestFor: "retail", description: "Same family; retail-focused alternative.", reviewHref: getPosReviewUrl("vend-pos"), compareHref: getPosCompareUrl("lightspeed-pos-vs-vend-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; Lightspeed family" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "hardware and apps", description: "Wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Restaurant-focused POS.", reviewHref: getPosReviewUrl("toast-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
];

const lightspeedPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Lightspeed Alternatives (2026)",
  subtitle: "If Lightspeed isn't the right fit—because of cost, ecommerce focus, or simpler needs—these POS alternatives offer strong options for retail and multi-location.",
  productName: "Lightspeed",
  productSlug: "lightspeed-pos",
  originalReviewHref: getPosReviewUrl("lightspeed-pos"),
  quickAnswerParagraphs: [
    "Lightspeed is strong for retail and multi-location; alternatives include Shopify POS for ecommerce, Square for simplicity and free software, Vend (same family) for a similar retail focus, and Clover or Toast for different use cases. Shopify and Square are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Ecommerce", body: "Shopify POS unifies online and in-store when you use Shopify. Better if ecommerce is central." },
    { heading: "Simplicity and cost", body: "Square has free software and simpler setup. For single-location or straightforward retail." },
    { heading: "Same family", body: "Vend is now part of Lightspeed; similar positioning with a different product history." },
  ],
  topAlternatives: LIGHTSPEED_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, bestFor: "retail; multi-location", startingPrice: "From ~$69/mo", standoutFeature: "Retail; inventory", reviewHref: getPosReviewUrl("lightspeed-pos") },
    LIGHTSPEED_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Shopify POS", heading: "Best for ecommerce", body: "Shopify POS unifies online and in-store. For ecommerce-first businesses.", reviewHref: getPosReviewUrl("shopify-pos"), compareHref: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
    { productName: "Square", heading: "Best for simplicity", body: "Square offers free software and simpler setup. For single-location or lower complexity.", reviewHref: getPosReviewUrl("square-pos") },
    { productName: "Vend", heading: "Best for retail (same family)", body: "Vend (Lightspeed Retail) is in the Lightspeed family with similar retail focus. Compare for fit.", reviewHref: getPosReviewUrl("vend-pos"), compareHref: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
    { productName: "Clover", heading: "Best for hardware and apps", body: "Clover offers a wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos") },
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is built for restaurants. For food service instead of retail.", reviewHref: getPosReviewUrl("toast-pos") },
  ],
  relatedComparisons: [
    posRel("shopify-pos-vs-lightspeed-pos"),
    posRel("lightspeed-pos-vs-vend-pos"),
  ],
  relatedResources: defaultRelatedResources("Lightspeed", getPosReviewUrl("lightspeed-pos")),
  faqItems: [
    { q: "What is the best Lightspeed alternative?", a: "Shopify POS for ecommerce; Square for simplicity and free software; Vend for similar retail in the same family; Clover for hardware and apps." },
    { q: "Is Lightspeed better than Shopify POS?", a: "Lightspeed is stronger for retail and multi-location; Shopify POS is best when you have a Shopify store and want unified online and in-store. Choose by ecommerce vs retail focus." },
    { q: "Which POS is cheaper than Lightspeed?", a: "Square has free software. Clover and Vend have similar price ranges; compare plans and features for your size." },
  ],
};

// ——— Clover alternatives ———
const CLOVER_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "free software", description: "Free software and simpler pricing; less hardware variety.", reviewHref: getPosReviewUrl("square-pos"), compareHref: getPosCompareUrl("square-pos-vs-clover-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "shopify-pos", name: "Shopify POS", logoSrc: POS_LOGOS.shopify, rating: "4.5", bestFor: "ecommerce", description: "Unified online and in-store with Shopify.", reviewHref: getPosReviewUrl("shopify-pos"), startingPrice: "From $39/mo", standoutFeature: "Ecommerce unified" },
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Deeper retail inventory and multi-location.", reviewHref: getPosReviewUrl("lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-location" },
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Purpose-built for restaurants.", reviewHref: getPosReviewUrl("toast-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
  { slug: "vend-pos", name: "Vend (Lightspeed Retail)", logoSrc: POS_LOGOS.vend, rating: "4.3", bestFor: "retail", description: "Retail-focused; part of Lightspeed.", reviewHref: getPosReviewUrl("vend-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-store" },
];

const cloverPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Clover Alternatives (2026)",
  subtitle: "If Clover isn't the right fit—because of cost, preference for simpler setup, or different features—these POS alternatives offer strong options.",
  productName: "Clover",
  productSlug: "clover-pos",
  originalReviewHref: getPosReviewUrl("clover-pos"),
  quickAnswerParagraphs: [
    "Clover offers a wide hardware and app ecosystem; alternatives include Square for free software and simplicity, Shopify for ecommerce, Lightspeed for retail depth, and Toast for restaurants. Square is the most common alternative for lower cost.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Square has free software and no monthly fee. Clover typically has higher monthly cost plus hardware." },
    { heading: "Simplicity", body: "Square is simpler to set up and run. Clover's breadth can be more than some businesses need." },
    { heading: "Use case", body: "Shopify for ecommerce; Lightspeed for retail; Toast for restaurants." },
  ],
  topAlternatives: CLOVER_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, bestFor: "hardware and apps", startingPrice: "From ~$69/mo", standoutFeature: "Hardware; app market", reviewHref: getPosReviewUrl("clover-pos") },
    CLOVER_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Square", heading: "Best for free software", body: "Square offers free POS software and simpler pricing. For businesses that want to minimize cost and complexity.", reviewHref: getPosReviewUrl("square-pos"), compareHref: getPosCompareUrl("square-pos-vs-clover-pos") },
    { productName: "Shopify POS", heading: "Best for ecommerce", body: "Shopify POS unifies online and in-store when you use Shopify.", reviewHref: getPosReviewUrl("shopify-pos") },
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed provides deeper retail inventory and multi-location.", reviewHref: getPosReviewUrl("lightspeed-pos") },
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is purpose-built for restaurants with full restaurant suite.", reviewHref: getPosReviewUrl("toast-pos") },
    { productName: "Vend", heading: "Best for retail", body: "Vend (Lightspeed Retail) is retail-focused with multi-store support.", reviewHref: getPosReviewUrl("vend-pos") },
  ],
  relatedComparisons: [
    posRel("square-pos-vs-clover-pos"),
  ],
  relatedResources: defaultRelatedResources("Clover", getPosReviewUrl("clover-pos")),
  faqItems: [
    { q: "What is the best Clover alternative?", a: "Square for free software and simplicity; Shopify for ecommerce; Lightspeed for retail; Toast for restaurants." },
    { q: "Is Clover better than Square?", a: "Clover has more hardware and app options; Square has free software and simpler pricing. Choose Clover for ecosystem; Square for cost and ease." },
    { q: "Which POS has free software like Square?", a: "Square offers free POS software; you pay per transaction. Most others, including Clover, charge a monthly software fee." },
  ],
};

// ——— Toast alternatives ———
const TOAST_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "simplicity and cost", description: "Simpler and cheaper for cafes or simple restaurant setups.", reviewHref: getPosReviewUrl("square-pos"), compareHref: getPosCompareUrl("toast-pos-vs-square-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "touchbistro", name: "TouchBistro", logoSrc: POS_LOGOS.touchbistro, rating: "4.4", bestFor: "restaurants", description: "Strong restaurant POS with hospitality focus.", reviewHref: getPosReviewUrl("touchbistro"), startingPrice: "Quote", standoutFeature: "Restaurant; ease of use" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "general POS", description: "General-purpose POS with restaurant apps.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Retail-focused; less restaurant depth.", reviewHref: getPosReviewUrl("lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail" },
  { slug: "shopify-pos", name: "Shopify POS", logoSrc: POS_LOGOS.shopify, rating: "4.5", bestFor: "ecommerce", description: "Unified online and in-store with Shopify.", reviewHref: getPosReviewUrl("shopify-pos"), startingPrice: "From $39/mo", standoutFeature: "Ecommerce" },
];

const toastPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Toast Alternatives (2026)",
  subtitle: "If Toast isn't the right fit—because of cost, simpler needs, or different restaurant focus—these POS alternatives offer strong options for restaurants and food service.",
  productName: "Toast",
  productSlug: "toast-pos",
  originalReviewHref: getPosReviewUrl("toast-pos"),
  quickAnswerParagraphs: [
    "Toast is built for restaurants; alternatives include Square for simplicity and lower cost, TouchBistro for another strong restaurant option, and Clover for general-purpose POS with restaurant apps. Square and TouchBistro are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Toast is typically higher cost. Square has free software and suits simple cafes or small operations." },
    { heading: "Restaurant alternative", body: "TouchBistro is another restaurant-focused POS with strong hospitality features." },
    { heading: "Simplicity", body: "Clover and Square offer general-purpose POS with optional restaurant features; less depth than Toast." },
  ],
  topAlternatives: TOAST_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, bestFor: "restaurants", startingPrice: "Quote", standoutFeature: "Restaurant suite", reviewHref: getPosReviewUrl("toast-pos") },
    TOAST_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Square", heading: "Best for simplicity and cost", body: "Square is simpler and cheaper for cafes or very simple restaurant setups. Free software and pay-per-swipe.", reviewHref: getPosReviewUrl("square-pos"), compareHref: getPosCompareUrl("toast-pos-vs-square-pos") },
    { productName: "TouchBistro", heading: "Best for restaurants", body: "TouchBistro is a strong restaurant POS alternative with focus on hospitality and ease of use.", reviewHref: getPosReviewUrl("touchbistro") },
    { productName: "Clover", heading: "Best for general POS", body: "Clover is general-purpose with restaurant apps; less depth than Toast for full-service restaurants.", reviewHref: getPosReviewUrl("clover-pos") },
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed is retail-focused. For businesses that need retail more than restaurant features.", reviewHref: getPosReviewUrl("lightspeed-pos") },
    { productName: "Shopify POS", heading: "Best for ecommerce", body: "Shopify POS unifies online and in-store. For ecommerce-first with some in-person.", reviewHref: getPosReviewUrl("shopify-pos") },
  ],
  relatedComparisons: [
    posRel("toast-pos-vs-square-pos"),
  ],
  relatedResources: defaultRelatedResources("Toast", getPosReviewUrl("toast-pos")),
  faqItems: [
    { q: "What is the best Toast alternative?", a: "Square for simplicity and cost; TouchBistro for another restaurant-focused option; Clover for general POS with restaurant apps." },
    { q: "Is Toast better than Square for restaurants?", a: "Toast is purpose-built for restaurants with table and kitchen management; Square is simpler and cheaper for cafes or simple setups. Choose Toast for full-service; Square for simplicity." },
    { q: "Which restaurant POS is cheaper than Toast?", a: "Square has free software. TouchBistro and Clover have different pricing; compare quotes for your size and needs." },
  ],
};

// ——— Revel Systems alternatives ———
const REVEL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Retail and multi-location; lower entry cost.", reviewHref: getPosReviewUrl("lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-location" },
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "simplicity", description: "Simpler and more affordable for small or single-location.", reviewHref: getPosReviewUrl("square-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Restaurant-focused for food service at scale.", reviewHref: getPosReviewUrl("toast-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
  { slug: "epos-now", name: "Epos Now", logoSrc: POS_LOGOS.eposNow, rating: "4.2", bestFor: "flexibility", description: "Flexible POS with various integrations.", reviewHref: getPosReviewUrl("epos-now"), startingPrice: "Quote", standoutFeature: "Flexible; integrations" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "hardware and apps", description: "Wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
];

const revelPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Revel Systems Alternatives (2026)",
  subtitle: "If Revel Systems isn't the right fit—because of cost, preference for different scale, or features—these POS alternatives offer strong options.",
  productName: "Revel Systems",
  productSlug: "revel-systems",
  originalReviewHref: getPosReviewUrl("revel-systems"),
  quickAnswerParagraphs: [
    "Revel Systems targets enterprise and multi-location; alternatives include Lightspeed for retail at lower entry cost, Square for simplicity, Toast for restaurants, and Epos Now or Clover for different flexibility. Lightspeed and Square are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost and scale", body: "Lightspeed and Square can suit mid-size and small at lower cost. Revel is often enterprise-priced." },
    { heading: "Use case", body: "Toast for restaurants; Lightspeed for retail; Square for simplicity." },
    { heading: "Flexibility", body: "Epos Now and Clover offer different deployment and app options." },
  ],
  topAlternatives: REVEL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "revel-systems", name: "Revel Systems", logoSrc: POS_LOGOS.revel, bestFor: "enterprise; multi-location", startingPrice: "Quote", standoutFeature: "Enterprise", reviewHref: getPosReviewUrl("revel-systems") },
    REVEL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed offers strong retail and multi-location at lower entry cost for mid-size operations.", reviewHref: getPosReviewUrl("lightspeed-pos") },
    { productName: "Square", heading: "Best for simplicity", body: "Square is simpler and more affordable for small or single-location businesses.", reviewHref: getPosReviewUrl("square-pos") },
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is restaurant-focused for food service at scale.", reviewHref: getPosReviewUrl("toast-pos") },
    { productName: "Epos Now", heading: "Best for flexibility", body: "Epos Now offers flexible POS with various integrations.", reviewHref: getPosReviewUrl("epos-now") },
    { productName: "Clover", heading: "Best for hardware and apps", body: "Clover has a wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Revel Systems", getPosReviewUrl("revel-systems")),
  faqItems: [
    { q: "What is the best Revel Systems alternative?", a: "Lightspeed for retail at lower cost; Square for simplicity; Toast for restaurants; Epos Now for flexibility; Clover for hardware and apps." },
    { q: "Is Revel better than Lightspeed?", a: "Revel targets enterprise; Lightspeed suits mid-size retail with lower entry cost. Choose by scale and budget." },
    { q: "Which POS is cheaper than Revel?", a: "Square has free software. Lightspeed, Clover, and others have lower typical entry cost; compare quotes for your size." },
  ],
};

// ——— Vend alternatives ———
const VEND_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "same family", description: "Full Lightspeed suite; same family as Vend.", reviewHref: getPosReviewUrl("lightspeed-pos"), compareHref: getPosCompareUrl("lightspeed-pos-vs-vend-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Lightspeed family" },
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "simplicity", description: "Simpler and lower cost for single-location retail.", reviewHref: getPosReviewUrl("square-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "shopify-pos", name: "Shopify POS", logoSrc: POS_LOGOS.shopify, rating: "4.5", bestFor: "ecommerce", description: "Unified online and in-store with Shopify.", reviewHref: getPosReviewUrl("shopify-pos"), startingPrice: "From $39/mo", standoutFeature: "Ecommerce unified" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "hardware and apps", description: "Wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Restaurant-focused POS.", reviewHref: getPosReviewUrl("toast-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
];

const vendPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Vend (Lightspeed Retail) Alternatives (2026)",
  subtitle: "If Vend isn't the right fit—because you want the full Lightspeed suite, simpler setup, or different focus—these POS alternatives offer strong options.",
  productName: "Vend (Lightspeed Retail)",
  productSlug: "vend-pos",
  originalReviewHref: getPosReviewUrl("vend-pos"),
  quickAnswerParagraphs: [
    "Vend is now part of Lightspeed (Lightspeed Retail); alternatives include Lightspeed for the full suite, Square for simplicity and free software, and Shopify for ecommerce. Lightspeed and Square are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Full Lightspeed", body: "Lightspeed is the full Lightspeed product; Vend is the retail brand within the family. Some teams prefer the main Lightspeed suite." },
    { heading: "Simplicity", body: "Square has free software and simpler setup for single-location or straightforward retail." },
    { heading: "Ecommerce", body: "Shopify POS unifies online and in-store when you use Shopify." },
  ],
  topAlternatives: VEND_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "vend-pos", name: "Vend (Lightspeed Retail)", logoSrc: POS_LOGOS.vend, bestFor: "retail; multi-store", startingPrice: "From ~$69/mo", standoutFeature: "Retail; Lightspeed", reviewHref: getPosReviewUrl("vend-pos") },
    VEND_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Lightspeed", heading: "Best for same family", body: "Lightspeed is the full Lightspeed suite. For teams that want more modules or the main Lightspeed branding.", reviewHref: getPosReviewUrl("lightspeed-pos"), compareHref: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
    { productName: "Square", heading: "Best for simplicity", body: "Square is simpler and lower cost for single-location or straightforward retail.", reviewHref: getPosReviewUrl("square-pos") },
    { productName: "Shopify POS", heading: "Best for ecommerce", body: "Shopify POS unifies online and in-store when ecommerce is central.", reviewHref: getPosReviewUrl("shopify-pos") },
    { productName: "Clover", heading: "Best for hardware and apps", body: "Clover offers a wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos") },
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is built for restaurants. For food service instead of retail.", reviewHref: getPosReviewUrl("toast-pos") },
  ],
  relatedComparisons: [
    posRel("lightspeed-pos-vs-vend-pos"),
  ],
  relatedResources: defaultRelatedResources("Vend (Lightspeed Retail)", getPosReviewUrl("vend-pos")),
  faqItems: [
    { q: "What is the best Vend alternative?", a: "Lightspeed for the full Lightspeed suite; Square for simplicity and free software; Shopify for ecommerce." },
    { q: "Is Vend the same as Lightspeed?", a: "Vend is now part of Lightspeed (Lightspeed Retail). Lightspeed is the main product; Vend is the retail-focused brand in the family." },
    { q: "Which POS is simpler than Vend?", a: "Square has free software and simpler setup. Compare Square's retail features to your needs." },
  ],
};

// ——— TouchBistro alternatives ———
const TOUCHBISTRO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "toast-pos", name: "Toast", logoSrc: POS_LOGOS.toast, rating: "4.5", bestFor: "restaurants", description: "Stronger for large or multi-location restaurants.", reviewHref: getPosReviewUrl("toast-pos"), startingPrice: "Quote", standoutFeature: "Restaurant suite" },
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "simplicity", description: "Simpler and cheaper for very simple food service or cafes.", reviewHref: getPosReviewUrl("square-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "general POS", description: "General-purpose POS with restaurant apps.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Retail-focused; less restaurant depth.", reviewHref: getPosReviewUrl("lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail" },
  { slug: "epos-now", name: "Epos Now", logoSrc: POS_LOGOS.eposNow, rating: "4.2", bestFor: "flexibility", description: "Flexible POS with various integrations.", reviewHref: getPosReviewUrl("epos-now"), startingPrice: "Quote", standoutFeature: "Flexible" },
];

const touchbistroPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best TouchBistro Alternatives (2026)",
  subtitle: "If TouchBistro isn't the right fit—because of cost, preference for different restaurant focus, or scale—these POS alternatives offer strong options for restaurants.",
  productName: "TouchBistro",
  productSlug: "touchbistro",
  originalReviewHref: getPosReviewUrl("touchbistro"),
  quickAnswerParagraphs: [
    "TouchBistro is a strong restaurant POS; alternatives include Toast for larger or multi-location restaurants, Square for simplicity and cost, and Clover for general-purpose with restaurant apps. Toast and Square are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Scale", body: "Toast is stronger for large or multi-location restaurants with a more comprehensive suite." },
    { heading: "Cost", body: "Square is simpler and cheaper for very simple food service or cafes." },
    { heading: "General POS", body: "Clover is general-purpose with restaurant apps; less depth than TouchBistro for full-service." },
  ],
  topAlternatives: TOUCHBISTRO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "touchbistro", name: "TouchBistro", logoSrc: POS_LOGOS.touchbistro, bestFor: "restaurants; hospitality", startingPrice: "Quote", standoutFeature: "Restaurant; ease of use", reviewHref: getPosReviewUrl("touchbistro") },
    TOUCHBISTRO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Toast", heading: "Best for restaurants", body: "Toast is stronger for large or multi-location restaurants with more comprehensive restaurant suite.", reviewHref: getPosReviewUrl("toast-pos") },
    { productName: "Square", heading: "Best for simplicity", body: "Square is simpler and cheaper for very simple food service or cafes.", reviewHref: getPosReviewUrl("square-pos") },
    { productName: "Clover", heading: "Best for general POS", body: "Clover is general-purpose with restaurant apps; less depth than TouchBistro for full-service.", reviewHref: getPosReviewUrl("clover-pos") },
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed is retail-focused. For businesses that need retail more than restaurant features.", reviewHref: getPosReviewUrl("lightspeed-pos") },
    { productName: "Epos Now", heading: "Best for flexibility", body: "Epos Now offers flexible POS with various integrations.", reviewHref: getPosReviewUrl("epos-now") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("TouchBistro", getPosReviewUrl("touchbistro")),
  faqItems: [
    { q: "What is the best TouchBistro alternative?", a: "Toast for larger restaurants; Square for simplicity and cost; Clover for general POS with restaurant apps." },
    { q: "Is TouchBistro better than Toast?", a: "TouchBistro is strong for hospitality and ease of use; Toast is often chosen for larger or multi-location restaurants. Compare features and pricing for your size." },
    { q: "Which restaurant POS is cheaper than TouchBistro?", a: "Square has free software. Compare Toast, Clover, and others for your restaurant size and needs." },
  ],
};

// ——— Epos Now alternatives ———
const EPOS_NOW_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "lightspeed-pos", name: "Lightspeed", logoSrc: POS_LOGOS.lightspeed, rating: "4.4", bestFor: "retail", description: "Strong retail with lower entry cost for mid-size.", reviewHref: getPosReviewUrl("lightspeed-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-location" },
  { slug: "revel-systems", name: "Revel Systems", logoSrc: POS_LOGOS.revel, rating: "4.2", bestFor: "enterprise", description: "Enterprise and multi-location focus.", reviewHref: getPosReviewUrl("revel-systems"), startingPrice: "Quote", standoutFeature: "Enterprise" },
  { slug: "square-pos", name: "Square", logoSrc: POS_LOGOS.square, rating: "4.6", bestFor: "simplicity", description: "Simpler setup and free software.", reviewHref: getPosReviewUrl("square-pos"), startingPrice: "Free software", standoutFeature: "Free; simple" },
  { slug: "clover-pos", name: "Clover", logoSrc: POS_LOGOS.clover, rating: "4.3", bestFor: "hardware and apps", description: "Wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Hardware; apps" },
  { slug: "vend-pos", name: "Vend (Lightspeed Retail)", logoSrc: POS_LOGOS.vend, rating: "4.3", bestFor: "retail", description: "Retail-focused; part of Lightspeed.", reviewHref: getPosReviewUrl("vend-pos"), startingPrice: "From ~$69/mo", standoutFeature: "Retail; multi-store" },
];

const eposNowPage: AlternativesTemplateProps = {
  ...squarePage,
  title: "Best Epos Now Alternatives (2026)",
  subtitle: "If Epos Now isn't the right fit—because of cost, preference for different features, or integrations—these POS alternatives offer strong options.",
  productName: "Epos Now",
  productSlug: "epos-now",
  originalReviewHref: getPosReviewUrl("epos-now"),
  quickAnswerParagraphs: [
    "Epos Now offers flexible POS with various integrations; alternatives include Lightspeed for retail, Revel for enterprise, Square for simplicity, and Clover or Vend for different ecosystems. Lightspeed and Square are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Retail", body: "Lightspeed and Vend offer strong retail focus and multi-location. Compare depth and pricing." },
    { heading: "Simplicity", body: "Square has simpler setup and free software. For single-location or straightforward needs." },
    { heading: "Enterprise", body: "Revel targets enterprise and multi-location at scale." },
  ],
  topAlternatives: EPOS_NOW_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "epos-now", name: "Epos Now", logoSrc: POS_LOGOS.eposNow, bestFor: "flexibility", startingPrice: "Quote", standoutFeature: "Flexible; integrations", reviewHref: getPosReviewUrl("epos-now") },
    EPOS_NOW_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Lightspeed", heading: "Best for retail", body: "Lightspeed offers strong retail and multi-location at lower entry cost for mid-size operations.", reviewHref: getPosReviewUrl("lightspeed-pos") },
    { productName: "Revel Systems", heading: "Best for enterprise", body: "Revel targets enterprise and multi-location with comprehensive features.", reviewHref: getPosReviewUrl("revel-systems") },
    { productName: "Square", heading: "Best for simplicity", body: "Square has simpler setup and free software; stronger brand and support.", reviewHref: getPosReviewUrl("square-pos") },
    { productName: "Clover", heading: "Best for hardware and apps", body: "Clover has a wide hardware and app ecosystem.", reviewHref: getPosReviewUrl("clover-pos") },
    { productName: "Vend", heading: "Best for retail", body: "Vend (Lightspeed Retail) is retail-focused with multi-store support.", reviewHref: getPosReviewUrl("vend-pos") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Epos Now", getPosReviewUrl("epos-now")),
  faqItems: [
    { q: "What is the best Epos Now alternative?", a: "Lightspeed for retail; Revel for enterprise; Square for simplicity; Clover and Vend for different ecosystems." },
    { q: "Is Epos Now better than Lightspeed?", a: "Epos Now offers flexibility and integrations; Lightspeed is strong for retail and multi-location. Compare features and pricing for your needs." },
    { q: "Which POS is simpler than Epos Now?", a: "Square has simpler setup and free software. Compare Square's features to your requirements." },
  ],
};

// ——— Export ———
const POS_ALTERNATIVES_SLUGS = [
  "square-pos", "shopify-pos", "lightspeed-pos", "clover-pos", "toast-pos",
  "revel-systems", "vend-pos", "touchbistro", "epos-now",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  "square-pos": squarePage,
  "shopify-pos": shopifyPage,
  "lightspeed-pos": lightspeedPage,
  "clover-pos": cloverPage,
  "toast-pos": toastPage,
  "revel-systems": revelPage,
  "vend-pos": vendPage,
  touchbistro: touchbistroPage,
  "epos-now": eposNowPage,
};

export function getPosAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getPosAlternativesSlugs(): string[] {
  return [...POS_ALTERNATIVES_SLUGS];
}
