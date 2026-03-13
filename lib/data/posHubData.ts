/**
 * POS (Point of Sale) hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/pos/page.tsx.
 */

import {
  getPosReviewUrl,
  getPosCompareUrl,
  getPosBestForUrl,
} from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

// ——— Logo paths (place under /public/Logos/) ———
export const POS_LOGOS = {
  square: "/Logos/square.jpeg",
  shopify: "/Logos/shopify.jpeg",
  lightspeed: "/Logos/lightspeed.png",
  clover: "/Logos/clover.png",
  toast: "/Logos/toast.png",
  revel: "/Logos/revel.png",
  vend: "/Logos/vend.jpeg",
  touchbistro: "/Logos/touchbistro.jpeg",
  eposNow: "/Logos/eposnow.jpeg",
} as const;

/** Top POS picks for the hub hero section. */
export const POS_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "square-pos",
    name: "Square POS",
    badge: "Best overall",
    descriptor: "Best overall POS for small businesses: simple setup, flexible hardware, and strong payment and reporting.",
    rating: "4.6",
    price: "Free software, hardware from $49",
    features: ["In-person and online payments", "Inventory and reporting", "Hardware options"],
    reviewHref: getPosReviewUrl("square-pos"),
    compareHref: getPosCompareUrl("square-pos-vs-shopify-pos"),
    logoSrc: POS_LOGOS.square,
    visitUrl: "https://squareup.com",
  },
  {
    slug: "shopify-pos",
    name: "Shopify POS",
    badge: "Best for ecommerce",
    descriptor: "Best POS for ecommerce stores: unified online and in-person sales, orders, and inventory with Shopify.",
    rating: "4.5",
    price: "From $39/mo (with Shopify plan)",
    features: ["Unified online and retail", "Inventory sync", "Shopify ecosystem"],
    reviewHref: getPosReviewUrl("shopify-pos"),
    compareHref: getPosCompareUrl("square-pos-vs-shopify-pos"),
    logoSrc: POS_LOGOS.shopify,
    visitUrl: "https://www.shopify.com/pos",
  },
  {
    slug: "lightspeed-pos",
    name: "Lightspeed POS",
    badge: "Best for retail",
    descriptor: "Best POS for retail stores: robust inventory, multi-location, and advanced retail workflows.",
    rating: "4.4",
    price: "From ~$69/mo",
    features: ["Retail-focused inventory", "Multi-location", "Reporting and analytics"],
    reviewHref: getPosReviewUrl("lightspeed-pos"),
    compareHref: getPosCompareUrl("shopify-pos-vs-lightspeed-pos"),
    logoSrc: POS_LOGOS.lightspeed,
    visitUrl: "https://www.lightspeedhq.com",
  },
  {
    slug: "toast-pos",
    name: "Toast POS",
    badge: "Best for restaurants",
    descriptor: "Best POS for restaurants: table management, kitchen display, online ordering, and restaurant-specific reporting.",
    rating: "4.5",
    price: "Quote (restaurant-focused)",
    features: ["Table and order management", "Kitchen display", "Online ordering"],
    reviewHref: getPosReviewUrl("toast-pos"),
    compareHref: getPosCompareUrl("toast-pos-vs-square-pos"),
    logoSrc: POS_LOGOS.toast,
    visitUrl: "https://pos.toasttab.com",
  },
  {
    slug: "clover-pos",
    name: "Clover POS",
    badge: "Best hardware ecosystem",
    descriptor: "Best POS hardware ecosystem: flexible terminals, registers, and add-ons for various business types.",
    rating: "4.3",
    price: "From ~$69/mo (with hardware)",
    features: ["Multiple hardware options", "App market", "Payments and reporting"],
    reviewHref: getPosReviewUrl("clover-pos"),
    compareHref: getPosCompareUrl("square-pos-vs-clover-pos"),
    logoSrc: POS_LOGOS.clover,
    visitUrl: "https://www.clover.com",
  },
] as FeaturedPick[];

/** Comparison table rows for the hub (POS tools). */
export const POS_COMPARISON_ROWS: ComparisonTableRow[] = [
  {
    tool: "Square POS",
    bestFor: "Best overall POS for small businesses",
    price: "Free software, hardware from $49",
    rating: "4.6",
    slug: "square-pos",
    logoSrc: POS_LOGOS.square,
  },
  {
    tool: "Shopify POS",
    bestFor: "Best POS for ecommerce stores",
    price: "From $39/mo (with Shopify plan)",
    rating: "4.5",
    slug: "shopify-pos",
    logoSrc: POS_LOGOS.shopify,
  },
  {
    tool: "Lightspeed POS",
    bestFor: "Best POS for retail stores",
    price: "From ~$69/mo",
    rating: "4.4",
    slug: "lightspeed-pos",
    logoSrc: POS_LOGOS.lightspeed,
  },
  {
    tool: "Clover POS",
    bestFor: "Best POS hardware ecosystem",
    price: "From ~$69/mo (with hardware)",
    rating: "4.3",
    slug: "clover-pos",
    logoSrc: POS_LOGOS.clover,
  },
  {
    tool: "Toast POS",
    bestFor: "Best POS for restaurants",
    price: "Quote (restaurant-focused)",
    rating: "4.5",
    slug: "toast-pos",
    logoSrc: POS_LOGOS.toast,
  },
  {
    tool: "Revel Systems",
    bestFor: "Enterprise retail and restaurant POS",
    price: "Quote",
    rating: "4.2",
    slug: "revel-systems",
    logoSrc: POS_LOGOS.revel,
  },
  {
    tool: "Vend POS (Lightspeed Retail)",
    bestFor: "Retail POS with inventory and multi-store",
    price: "From ~$69/mo",
    rating: "4.3",
    slug: "vend-pos",
    logoSrc: POS_LOGOS.vend,
  },
  {
    tool: "TouchBistro",
    bestFor: "Restaurant and hospitality POS",
    price: "From ~$69/mo",
    rating: "4.4",
    slug: "touchbistro",
    logoSrc: POS_LOGOS.touchbistro,
  },
  {
    tool: "Epos Now",
    bestFor: "Flexible POS for retail and hospitality",
    price: "From ~$29/mo",
    rating: "4.2",
    slug: "epos-now",
    logoSrc: POS_LOGOS.eposNow,
  },
] as ComparisonTableRow[];

/** Best POS software by use case (scenario) links. */
export const POS_SCENARIO_LINKS = [
  { label: "Best POS software (roundup)", href: "/pos/best-pos-software" },
  { label: "Best POS by use case", href: "/pos/best-for" },
  { label: "Compare POS software", href: getPosCompareUrl() },
  { label: "Small business", href: getPosBestForUrl("small-business") },
  { label: "Retail", href: getPosBestForUrl("retail") },
  { label: "Restaurants", href: getPosBestForUrl("restaurants") },
  { label: "Ecommerce", href: getPosBestForUrl("ecommerce") },
  { label: "Multi-location", href: getPosBestForUrl("multi-location") },
] as const;

/** POS by business type. */
export const POS_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Retail stores", href: getPosBestForUrl("retail") },
  { label: "Restaurants", href: getPosBestForUrl("restaurants") },
  { label: "Ecommerce businesses", href: getPosBestForUrl("ecommerce") },
  { label: "Small businesses", href: getPosBestForUrl("small-business") },
  { label: "Multi-location businesses", href: getPosBestForUrl("multi-location") },
];

export const POS_BY_BUSINESS_TYPE_GROUPS: {
  groupLabel: string;
  links: { label: string; href: string }[];
}[] = [
  {
    groupLabel: "Primary business types",
    links: POS_BY_BUSINESS_TYPE.slice(0, 3),
  },
  {
    groupLabel: "Other business types",
    links: POS_BY_BUSINESS_TYPE.slice(3),
  },
];

/** Card data for Popular POS comparisons. */
export type PosPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const POS_POPULAR_COMPARISONS: PosPopularComparisonCard[] = [
  {
    slug: "square-pos-vs-shopify-pos",
    productA: { name: "Square POS", logoSrc: POS_LOGOS.square },
    productB: { name: "Shopify POS", logoSrc: POS_LOGOS.shopify },
    summaryParagraph:
      "Square offers a simple, flexible POS that works for many small businesses with low upfront cost; Shopify POS is the better fit when your primary channel is ecommerce and you want one system for online and in-person sales.",
    href: getPosCompareUrl("square-pos-vs-shopify-pos"),
  },
  {
    slug: "square-pos-vs-clover-pos",
    productA: { name: "Square POS", logoSrc: POS_LOGOS.square },
    productB: { name: "Clover POS", logoSrc: POS_LOGOS.clover },
    summaryParagraph:
      "Square is known for easy setup and transparent pricing with a free software tier; Clover offers a wider range of hardware and built-in apps for businesses that want more customization and in-person terminal options.",
    href: getPosCompareUrl("square-pos-vs-clover-pos"),
  },
  {
    slug: "shopify-pos-vs-lightspeed-pos",
    productA: { name: "Shopify POS", logoSrc: POS_LOGOS.shopify },
    productB: { name: "Lightspeed POS", logoSrc: POS_LOGOS.lightspeed },
    summaryParagraph:
      "Shopify POS shines for stores that sell online and in-person on Shopify; Lightspeed is built for retail-first businesses that need deeper inventory, multi-location, and advanced retail workflows.",
    href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos"),
  },
  {
    slug: "toast-pos-vs-square-pos",
    productA: { name: "Toast POS", logoSrc: POS_LOGOS.toast },
    productB: { name: "Square POS", logoSrc: POS_LOGOS.square },
    summaryParagraph:
      "Toast is purpose-built for restaurants with table management, kitchen display, and online ordering; Square is a general-purpose POS that can work for cafes and small restaurants with simpler needs.",
    href: getPosCompareUrl("toast-pos-vs-square-pos"),
  },
  {
    slug: "lightspeed-pos-vs-vend-pos",
    productA: { name: "Lightspeed POS", logoSrc: POS_LOGOS.lightspeed },
    productB: { name: "Vend POS", logoSrc: POS_LOGOS.vend },
    summaryParagraph:
      "Lightspeed and Vend (Lightspeed Retail) both serve retail with strong inventory and multi-location; Lightspeed has a broader product family while Vend focuses on retail POS with a clear upgrade path.",
    href: getPosCompareUrl("lightspeed-pos-vs-vend-pos"),
  },
] as PosPopularComparisonCard[];

/** FAQ items for the hub. */
export const POS_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is POS software?",
    a: "POS (point of sale) software is used at the checkout to process sales, accept payments, and often manage inventory, orders, and reporting. It can run on tablets, terminals, or computers and typically connects to payment processors and sometimes to accounting or ecommerce systems.",
  },
  {
    q: "What POS system is best for small businesses?",
    a: "Square POS is a strong choice for many small businesses because of its free software tier, simple setup, and flexible hardware. Clover and Shopify POS are also popular—Clover for a wide hardware ecosystem, Shopify POS when you already sell or plan to sell online with Shopify.",
  },
  {
    q: "Can POS software integrate with inventory and accounting systems?",
    a: "Yes. Most modern POS systems integrate with inventory (to track stock and reorders) and with accounting software like QuickBooks or Xero so sales and payment data flow into your books. Integration depth varies by POS and plan, so check that the integrations you need are supported.",
  },
  {
    q: "What is the difference between POS software and payment processors?",
    a: "POS software is the application that runs your register: it handles the sale, items, discounts, and often inventory and reporting. A payment processor authorizes and settles card (or other) payments. Many POS systems bundle or partner with a processor so you get both in one; others let you connect your own processor.",
  },
];

/** Methodology for the hub. */
export const POS_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review POS software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate POS tools on how well they help small businesses process sales, manage payments, and support inventory and reporting.",
  bullets: [
    "We test core workflows: processing sales, accepting payments, managing items and inventory, and viewing reports.",
    "We compare pricing (software and hardware), payment processing rates, and add-ons so you understand total cost.",
    "We look at hardware compatibility, integrations with accounting and ecommerce, and multi-location support where relevant.",
  ],
};
