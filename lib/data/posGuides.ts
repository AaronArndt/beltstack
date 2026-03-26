/**
 * POS (Point of Sale) guides hub and related data.
 * Used by app/pos/guides/page.tsx and individual POS guide pages.
 */

import { getPosReviewUrl, getPosCompareUrl } from "@/lib/routes";
import { POS_LOGOS } from "@/lib/data/posHubData";

export type PosGuideEntry = { title: string; href: string; description: string };

export const POS_GUIDES: PosGuideEntry[] = [
  {
    title: "Best POS for Small Business",
    href: "/pos/guides/best-pos-for-small-business",
    description:
      "Why small businesses move beyond cash registers, what to look for in a POS, and which systems offer the best ease of use, pricing, and payment integrations.",
  },
  {
    title: "Retail POS Software Guide",
    href: "/pos/guides/retail-pos-software-guide",
    description:
      "How retail POS systems handle inventory, reporting, and customer tracking—and which platforms fit single-location and multi-store retailers.",
  },
  {
    title: "Restaurant POS Systems Guide",
    href: "/pos/guides/restaurant-pos-systems-guide",
    description:
      "Restaurant workflows, menu management, table service, and order routing—and how to choose a POS built for food service.",
  },
  {
    title: "How to Choose a POS System",
    href: "/pos/guides/how-to-choose-pos-system",
    description:
      "A step-by-step framework for choosing a POS based on business type, scale, integrations, reporting, and hardware needs.",
  },
  {
    title: "POS vs Payment Processor",
    href: "/pos/guides/pos-vs-payment-processor",
    description:
      "The difference between POS software and payment gateways—and when you need each.",
  },
  {
    title: "POS Software Pricing Guide",
    href: "/pos/guides/pos-software-pricing-guide",
    description:
      "How POS pricing works: subscription vs transaction fees, hardware costs, and what to budget for retail and restaurant operations.",
  },
  {
    title: "POS System for Ecommerce",
    href: "/pos/guides/pos-system-for-ecommerce",
    description:
      "How to unify online and in-person sales with a POS that syncs with your ecommerce store.",
  },
  {
    title: "POS Inventory Integration",
    href: "/pos/guides/pos-inventory-integration",
    description:
      "How POS integrates with inventory management systems and why it matters for accurate stock and reporting.",
  },
];

export type PosGuideSidebarItem = {
  name: string;
  logoSrc?: string;
  rating?: string | number;
  bestFor?: string;
  reviewHref: string;
};

export const POS_GUIDE_SIDEBAR_ITEMS: PosGuideSidebarItem[] = [
  {
    name: "Square",
    logoSrc: POS_LOGOS.square,
    rating: "4.6",
    bestFor: "Best overall for SMBs",
    reviewHref: getPosReviewUrl("square-pos"),
  },
  {
    name: "Shopify POS",
    logoSrc: POS_LOGOS.shopify,
    rating: "4.5",
    bestFor: "Ecommerce + in-store",
    reviewHref: getPosReviewUrl("shopify-pos"),
  },
  {
    name: "Lightspeed",
    logoSrc: POS_LOGOS.lightspeed,
    rating: "4.4",
    bestFor: "Retail & multi-location",
    reviewHref: getPosReviewUrl("lightspeed-pos"),
  },
  {
    name: "Toast",
    logoSrc: POS_LOGOS.toast,
    rating: "4.5",
    bestFor: "Restaurants",
    reviewHref: getPosReviewUrl("toast-pos"),
  },
  {
    name: "Clover",
    logoSrc: POS_LOGOS.clover,
    rating: "4.3",
    bestFor: "Hardware & apps",
    reviewHref: getPosReviewUrl("clover-pos"),
  },
];

export const POS_GUIDE_RELATED_ITEMS = [
  { label: "POS Software Hub", href: "/pos" },
  { label: "Best POS software by use case", href: "/pos/best-for" },
  { label: "Best POS Software", href: "/pos/best-pos-software" },
  { label: "Compare POS Software", href: "/pos/compare" },
  { label: "POS Software Guides", href: "/pos/guides" },
  { label: "Inventory Management Software Hub", href: "/inventory" },
  { label: "Square Review", href: getPosReviewUrl("square-pos") },
  { label: "Shopify POS Review", href: getPosReviewUrl("shopify-pos") },
  { label: "Lightspeed Review", href: getPosReviewUrl("lightspeed-pos") },
  { label: "Clover Review", href: getPosReviewUrl("clover-pos") },
  { label: "Toast Review", href: getPosReviewUrl("toast-pos") },
  { label: "Vend Review", href: getPosReviewUrl("vend-pos") },
  { label: "TouchBistro Review", href: getPosReviewUrl("touchbistro") },
  { label: "Epos Now Review", href: getPosReviewUrl("epos-now") },
  { label: "Square vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
  { label: "Square vs Clover", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  { label: "Shopify POS vs Lightspeed", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
  { label: "Toast vs Square", href: getPosCompareUrl("toast-pos-vs-square-pos") },
  { label: "Lightspeed vs Vend", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
] as const;
