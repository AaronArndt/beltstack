/**
 * POS (Point of Sale) hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/pos/page.tsx.
 */

import {
  getPosReviewUrl,
  getPosCompareUrl,
  getPosBestForUrl,
} from "@/lib/routes";
import type { FeaturedPickRef, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { POS_LOGOS } from "@/lib/data/posLogos";

export { POS_LOGOS };

/** Top POS picks — slugs resolve to canonical `posBestSoftware` data */
export const POS_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "square-pos" },
  { slug: "shopify-pos" },
  { slug: "lightspeed-pos" },
  { slug: "toast-pos" },
  { slug: "clover-pos" },
];

/** Comparison table rows for the hub (POS tools) — canonical pick data. */
export const POS_COMPARISON_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("pos", [
    "square-pos",
    "shopify-pos",
    "lightspeed-pos",
    "clover-pos",
    "toast-pos",
    "revel-systems",
    "vend-pos",
    "touchbistro",
    "epos-now",
  ]).map(toHubComparisonTableRow),
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
