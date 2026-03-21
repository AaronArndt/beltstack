/**
 * POS best-software roundup page data.
 * Used by app/pos/best-pos-software/page.tsx.
 */

import {
  getPosReviewUrl,
  getPosCompareUrl,
  getPosBestForUrl,
} from "@/lib/routes";
import { POS_LOGOS } from "@/lib/data/posLogos";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestPosPick = SoftwarePickCardContent;

export type PosComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const TOP_PICKS: BestPosPick[] = [
  {
    slug: "square-pos",
    name: "Square POS",
    badge: "Best overall POS system",
    description:
      "Simple, flexible POS for small businesses with in-person and online payments, inventory, and reporting.",
    rating: "4.6",
    startingPrice: "Free software, hardware from $49",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://squareup.com",
    logoSrc: POS_LOGOS.square,
    compareSlugs: ["square-pos-vs-shopify-pos", "square-pos-vs-clover-pos"],
    editorialParagraph:
      "Square POS is our top pick for most small businesses. It offers free software, straightforward pricing, and a range of hardware so you can start small and scale. Payments, basic inventory, and reporting are all in one place. If you want a POS that is easy to set up and doesn’t lock you into long-term contracts, Square is a strong default.",
    pros: [
      "Free software tier and transparent pricing",
      "Wide range of hardware (terminals, stands, registers)",
      "In-person and online payments in one system",
      "Simple reporting and inventory for small operations",
    ],
    cons: [
      "Advanced retail or restaurant features require higher tiers",
      "Payment processing rates can add up at high volume",
      "Less depth than purpose-built retail or restaurant POS",
    ],
    pricingSummary:
      "Square offers free POS software; hardware starts around $49. Payment processing is per transaction. Paid add-ons and advanced features are available for growing businesses.",
  },
  {
    slug: "shopify-pos",
    name: "Shopify POS",
    badge: "Best POS for ecommerce stores",
    description:
      "Unified POS for stores that sell online and in-person, with inventory sync and Shopify’s ecommerce ecosystem.",
    rating: "4.5",
    startingPrice: "From $39/mo (with Shopify plan)",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.shopify.com/pos",
    logoSrc: POS_LOGOS.shopify,
    compareSlugs: ["square-pos-vs-shopify-pos", "shopify-pos-vs-lightspeed-pos"],
    editorialParagraph:
      "Shopify POS is the best fit when your primary sales channel is (or will be) a Shopify store. It keeps online and in-person sales, orders, and inventory in one place. If you already use Shopify for ecommerce or plan to, adding POS gives you a single system for both channels. The trade-off is the requirement to be on a Shopify plan.",
    pros: [
      "Single system for ecommerce and in-person sales",
      "Unified inventory and order management",
      "Strong ecosystem of apps and themes",
      "Good for brands building an online presence",
    ],
    cons: [
      "Requires a Shopify subscription",
      "Can be more than you need if you only sell in-person",
      "Hardware and pricing scale with plan tier",
    ],
    pricingSummary:
      "Shopify POS is included with Shopify plans, which start around $39/month. Hardware is sold separately. Payment processing and add-ons vary by plan.",
  },
  {
    slug: "lightspeed-pos",
    name: "Lightspeed POS",
    badge: "Best POS for retail businesses",
    description:
      "Retail-focused POS with robust inventory, multi-location support, and advanced retail workflows.",
    rating: "4.4",
    startingPrice: "From ~$69/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.lightspeedhq.com",
    logoSrc: POS_LOGOS.lightspeed,
    compareSlugs: ["shopify-pos-vs-lightspeed-pos", "lightspeed-pos-vs-vend-pos"],
    editorialParagraph:
      "Lightspeed POS is built for retail. It offers deep inventory management, multi-location support, and reporting that fits stores with more complex operations. If you have (or plan to have) multiple locations, lots of SKUs, or need stronger purchasing and vendor management, Lightspeed is a strong choice. It’s more capable—and more involved—than general-purpose POS tools.",
    pros: [
      "Retail-focused inventory and reporting",
      "Multi-location and multi-store support",
      "Advanced retail workflows and integrations",
      "Scalable for growing retail operations",
    ],
    cons: [
      "Higher starting price than Square or simple tools",
      "Setup and training can take more time",
      "Overkill for very small or single-location shops",
    ],
    pricingSummary:
      "Lightspeed typically starts around $69/month and scales with locations and features. Hardware and payment processing are separate. Quote-based for larger deployments.",
  },
  {
    slug: "toast-pos",
    name: "Toast POS",
    badge: "Best POS for restaurants",
    description:
      "Restaurant-specific POS with table management, kitchen display, online ordering, and hospitality reporting.",
    rating: "4.5",
    startingPrice: "Quote (restaurant-focused)",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://pos.toasttab.com",
    logoSrc: POS_LOGOS.toast,
    compareSlugs: ["toast-pos-vs-square-pos"],
    editorialParagraph:
      "Toast is purpose-built for restaurants. It handles tables, courses, kitchen display systems, online ordering, and tips in a way general-purpose POS systems don’t. If you run a full-service or quick-service restaurant and want one system for front and back of house, Toast is a top pick. Pricing is quote-based and scales with location size and features.",
    pros: [
      "Designed for restaurants and hospitality",
      "Table management and kitchen display",
      "Integrated online ordering and delivery",
      "Restaurant-specific reporting and labor tools",
    ],
    cons: [
      "Pricing is quote-based and can be high for very small operations",
      "Focused on restaurants—not ideal for retail-only",
      "Contract and hardware commitments may apply",
    ],
    pricingSummary:
      "Toast pricing is custom and typically includes software, hardware, and payment processing. Expect quote-based pricing that scales with your restaurant size and needs.",
  },
  {
    slug: "clover-pos",
    name: "Clover POS",
    badge: "Best POS hardware ecosystem",
    description:
      "Flexible POS with a wide range of terminals, registers, and add-ons for various business types.",
    rating: "4.3",
    startingPrice: "From ~$69/mo (with hardware)",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.clover.com",
    logoSrc: POS_LOGOS.clover,
    compareSlugs: ["square-pos-vs-clover-pos"],
    editorialParagraph:
      "Clover stands out for hardware choice. You can run a simple counter setup, a full register, or a mobile station, with a large app market to extend functionality. If you want more say in terminals and peripherals and don’t mind a monthly hardware-related fee, Clover is a strong option. It works for retail, restaurants, and services.",
    pros: [
      "Wide variety of hardware (terminals, registers, handhelds)",
      "App market for added features",
      "Works for retail, restaurant, and service businesses",
      "Flexible configuration and add-ons",
    ],
    cons: [
      "Monthly costs typically include hardware",
      "Can feel fragmented compared to all-in-one platforms",
      "Some features require paid apps",
    ],
    pricingSummary:
      "Clover often bundles software and hardware starting around $69/month. Payment processing and apps add to the cost. Plans vary by device and feature set.",
  },
] as BestPosPick[];

export const COMPARISON_TABLE_ROWS: PosComparisonTableRow[] = [
  {
    slug: "square-pos",
    name: "Square POS",
    logoSrc: POS_LOGOS.square,
    bestFor: "Best overall POS for small businesses",
    startingPrice: "Free software, hardware from $49",
    rating: "4.6",
    reviewHref: getPosReviewUrl("square-pos"),
  },
  {
    slug: "shopify-pos",
    name: "Shopify POS",
    logoSrc: POS_LOGOS.shopify,
    bestFor: "Best POS for ecommerce stores",
    startingPrice: "From $39/mo (with Shopify plan)",
    rating: "4.5",
    reviewHref: getPosReviewUrl("shopify-pos"),
  },
  {
    slug: "lightspeed-pos",
    name: "Lightspeed POS",
    logoSrc: POS_LOGOS.lightspeed,
    bestFor: "Best POS for retail businesses",
    startingPrice: "From ~$69/mo",
    rating: "4.4",
    reviewHref: getPosReviewUrl("lightspeed-pos"),
  },
  {
    slug: "clover-pos",
    name: "Clover POS",
    logoSrc: POS_LOGOS.clover,
    bestFor: "Best POS hardware ecosystem",
    startingPrice: "From ~$69/mo (with hardware)",
    rating: "4.3",
    reviewHref: getPosReviewUrl("clover-pos"),
  },
  {
    slug: "toast-pos",
    name: "Toast POS",
    logoSrc: POS_LOGOS.toast,
    bestFor: "Best POS for restaurants",
    startingPrice: "Quote (restaurant-focused)",
    rating: "4.5",
    reviewHref: getPosReviewUrl("toast-pos"),
  },
  {
    slug: "revel-systems",
    name: "Revel Systems",
    logoSrc: POS_LOGOS.revel,
    bestFor: "Enterprise retail and restaurant POS",
    startingPrice: "Quote",
    rating: "4.2",
    reviewHref: getPosReviewUrl("revel-systems"),
  },
  {
    slug: "vend-pos",
    name: "Vend POS (Lightspeed Retail)",
    logoSrc: POS_LOGOS.vend,
    bestFor: "Retail POS with inventory and multi-store",
    startingPrice: "From ~$69/mo",
    rating: "4.3",
    reviewHref: getPosReviewUrl("vend-pos"),
  },
  {
    slug: "touchbistro",
    name: "TouchBistro",
    logoSrc: POS_LOGOS.touchbistro,
    bestFor: "Restaurant and hospitality POS",
    startingPrice: "From ~$69/mo",
    rating: "4.4",
    reviewHref: getPosReviewUrl("touchbistro"),
  },
  {
    slug: "epos-now",
    name: "Epos Now",
    logoSrc: POS_LOGOS.eposNow,
    bestFor: "Flexible POS for retail and hospitality",
    startingPrice: "From ~$29/mo",
    rating: "4.2",
    reviewHref: getPosReviewUrl("epos-now"),
  },
] as PosComparisonTableRow[];

export const MORE_POS_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "revel-systems",
    name: "Revel Systems",
    description:
      "Enterprise-grade POS for large retail and restaurant operations with advanced reporting and integrations.",
    reviewHref: getPosReviewUrl("revel-systems"),
    logoSrc: POS_LOGOS.revel,
  },
  {
    slug: "vend-pos",
    name: "Vend POS (Lightspeed Retail)",
    description:
      "Retail POS with strong inventory and multi-store support, now part of the Lightspeed family.",
    reviewHref: getPosReviewUrl("vend-pos"),
    logoSrc: POS_LOGOS.vend,
  },
  {
    slug: "touchbistro",
    name: "TouchBistro",
    description:
      "Restaurant and hospitality POS with table management, menus, and integrated payments.",
    reviewHref: getPosReviewUrl("touchbistro"),
    logoSrc: POS_LOGOS.touchbistro,
  },
  {
    slug: "epos-now",
    name: "Epos Now",
    description:
      "Flexible POS for retail and hospitality with affordable entry-level pricing and add-ons.",
    reviewHref: getPosReviewUrl("epos-now"),
    logoSrc: POS_LOGOS.eposNow,
  },
];

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for small business",
    href: getPosBestForUrl("small-business"),
    description: "POS systems that stay simple and affordable as you grow.",
  },
  {
    label: "Best for retail",
    href: getPosBestForUrl("retail"),
    description: "POS built for retail stores with inventory and multi-location.",
  },
  {
    label: "Best for restaurants",
    href: getPosBestForUrl("restaurants"),
    description: "Restaurant POS with table management, kitchen display, and ordering.",
  },
  {
    label: "Best for ecommerce",
    href: getPosBestForUrl("ecommerce"),
    description: "POS that unifies online and in-person sales and inventory.",
  },
  {
    label: "Best for multi-location",
    href: getPosBestForUrl("multi-location"),
    description: "POS that supports multiple stores and centralized reporting.",
  },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Square POS vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
  { label: "Square POS vs Clover POS", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  { label: "Shopify POS vs Lightspeed POS", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
  { label: "Toast POS vs Square POS", href: getPosCompareUrl("toast-pos-vs-square-pos") },
  { label: "Lightspeed POS vs Vend POS", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is POS software?",
    a: "POS (point of sale) software is used at the checkout to process sales, accept payments, and often manage inventory, orders, and reporting. It can run on tablets, terminals, or computers and typically connects to payment processors and sometimes to accounting or ecommerce systems.",
  },
  {
    q: "What POS system is best for small businesses?",
    a: "Square POS is a strong choice for many small businesses because of its free software tier, simple setup, and flexible hardware. Clover and Shopify POS are also popular—Clover for a wide hardware ecosystem, Shopify POS when you already sell or plan to sell online with Shopify.",
  },
  {
    q: "Can POS software integrate with inventory management?",
    a: "Yes. Most modern POS systems include basic inventory (items, stock levels, low-stock alerts) and many integrate with dedicated inventory or accounting software so sales and stock stay in sync. Check that the POS supports the integrations you need for your size and channels.",
  },
  {
    q: "What is the difference between POS software and payment processors?",
    a: "POS software is the application that runs your register: it handles the sale, items, discounts, and often inventory and reporting. A payment processor authorizes and settles card (or other) payments. Many POS systems bundle or partner with a processor so you get both in one; others let you connect your own processor.",
  },
];
