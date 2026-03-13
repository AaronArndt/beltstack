/**
 * Inventory management hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/inventory/page.tsx.
 */

import {
  getInventoryReviewUrl,
  getInventoryCompareUrl,
  getInventoryBestForUrl,
} from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

// ——— Logo paths (place under /public/Logos/) ———
export const INVENTORY_LOGOS = {
  zoho: "/Logos/zoho.jpeg",
  cin7: "/Logos/cin7.jpeg",
  inflow: "/Logos/inflow.jpeg",
  katana: "/Logos/katana.png",
  fishbowl: "/Logos/fishbowl.jpeg",
  sortly: "/Logos/sortly.png",
  // QuickBooks Commerce reuses the existing QuickBooks logo
  quickbooksCommerce: "/Logos/quickbooks.png",
  unleashed: "/Logos/unleashed.png",
  finale: "/Logos/finale.jpeg",
} as const;

/** Top inventory management picks for the hub hero section. */
export const INVENTORY_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "zoho-inventory",
    name: "Zoho Inventory",
    badge: "Best overall",
    descriptor: "Well-rounded inventory software for small and midsize businesses, especially if you already use Zoho.",
    rating: "4.6",
    price: "Free tier",
    features: ["Stock & order management", "Multi-warehouse support", "Integrations with Zoho apps"],
    reviewHref: getInventoryReviewUrl("zoho-inventory"),
    compareHref: getInventoryCompareUrl("zoho-inventory-vs-cin7"),
    logoSrc: INVENTORY_LOGOS.zoho,
  },
  {
    slug: "cin7",
    name: "Cin7",
    badge: "Best for multi-channel",
    descriptor: "Inventory and order management built for businesses selling across ecommerce, retail, and wholesale channels.",
    rating: "4.5",
    price: "From ~$349/mo",
    features: ["Multi-channel inventory", "Retail & wholesale workflows", "Built-in POS options"],
    reviewHref: getInventoryReviewUrl("cin7"),
    compareHref: getInventoryCompareUrl("zoho-inventory-vs-cin7"),
    logoSrc: INVENTORY_LOGOS.cin7,
  },
  {
    slug: "inflow-inventory",
    name: "inFlow Inventory",
    badge: "Best for small business tracking",
    descriptor:
      "Simple, practical inventory tracking for small businesses that need to track stock, orders, and reordering.",
    rating: "4.4",
    price: "From ~$89/mo",
    features: ["Stock & reorder alerts", "Sales & purchase orders", "Barcode support"],
    reviewHref: getInventoryReviewUrl("inflow-inventory"),
    compareHref: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory"),
    logoSrc: INVENTORY_LOGOS.inflow,
  },
  {
    slug: "katana",
    name: "Katana",
    badge: "Best for manufacturing",
    descriptor: "Inventory and production planning for manufacturers that need to track materials, work orders, and finished goods.",
    rating: "4.5",
    price: "From ~$129/mo",
    features: ["Bill of materials", "Production planning", "Shop floor tracking"],
    reviewHref: getInventoryReviewUrl("katana"),
    compareHref: getInventoryCompareUrl("cin7-vs-katana"),
    logoSrc: INVENTORY_LOGOS.katana,
  },
  {
    slug: "sortly",
    name: "Sortly",
    badge: "Best for simple tracking",
    descriptor: "Easy-to-use inventory tracking for small teams that want barcodes, photos, and basic stock control.",
    rating: "4.3",
    price: "From ~$39/mo",
    features: ["Visual item catalog", "Barcode & QR labels", "Mobile apps"],
    reviewHref: getInventoryReviewUrl("sortly"),
    compareHref: getInventoryCompareUrl("sortly-vs-inflow-inventory"),
    logoSrc: INVENTORY_LOGOS.sortly,
  },
] as FeaturedPick[];

/** Comparison table rows for the hub (inventory tools). */
export const INVENTORY_COMPARISON_ROWS: ComparisonTableRow[] = [
  {
    tool: "Zoho Inventory",
    bestFor: "Best overall inventory software for SMBs",
    price: "Free tier",
    rating: "4.6",
    slug: "zoho-inventory",
    logoSrc: INVENTORY_LOGOS.zoho,
  },
  {
    tool: "Cin7",
    bestFor: "Multi-channel inventory management",
    price: "From ~$349/mo",
    rating: "4.5",
    slug: "cin7",
    logoSrc: INVENTORY_LOGOS.cin7,
  },
  {
    tool: "inFlow Inventory",
    bestFor: "Small business inventory tracking",
    price: "From ~$89/mo",
    rating: "4.4",
    slug: "inflow-inventory",
    logoSrc: INVENTORY_LOGOS.inflow,
  },
  {
    tool: "Katana",
    bestFor: "Manufacturing inventory management",
    price: "From ~$129/mo",
    rating: "4.5",
    slug: "katana",
    logoSrc: INVENTORY_LOGOS.katana,
  },
  {
    tool: "Fishbowl",
    bestFor: "Inventory and manufacturing for QuickBooks users",
    price: "Quote",
    rating: "4.3",
    slug: "fishbowl",
    logoSrc: INVENTORY_LOGOS.fishbowl,
  },
  {
    tool: "Sortly",
    bestFor: "Simple inventory tracking",
    price: "From ~$39/mo",
    rating: "4.3",
    slug: "sortly",
    logoSrc: INVENTORY_LOGOS.sortly,
  },
  {
    tool: "QuickBooks Commerce",
    bestFor: "Inventory for QuickBooks-centric teams",
    price: "Quote",
    rating: "4.2",
    slug: "quickbooks-commerce",
    logoSrc: INVENTORY_LOGOS.quickbooksCommerce,
  },
  {
    tool: "Unleashed",
    bestFor: "Wholesalers and manufacturers",
    price: "From ~$349/mo",
    rating: "4.4",
    slug: "unleashed",
    logoSrc: INVENTORY_LOGOS.unleashed,
  },
  {
    tool: "Finale Inventory",
    bestFor: "High-volume ecommerce and warehouses",
    price: "From ~$99/mo",
    rating: "4.4",
    slug: "finale-inventory",
    logoSrc: INVENTORY_LOGOS.finale,
  },
] as ComparisonTableRow[];

/** Best inventory software by use case (scenario) links. */
export const INVENTORY_SCENARIO_LINKS = [
  { label: "Best inventory software (roundup)", href: "/inventory/best-inventory-software" },
  { label: "Compare inventory software", href: getInventoryCompareUrl() },
  { label: "Small business", href: getInventoryBestForUrl("small-business") },
  { label: "Ecommerce business", href: getInventoryBestForUrl("ecommerce") },
  { label: "Retail", href: getInventoryBestForUrl("retail") },
  { label: "Manufacturing", href: getInventoryBestForUrl("manufacturing") },
  { label: "Warehousing", href: getInventoryBestForUrl("warehouses") },
] as const;

/** Inventory by business type (trade-style links). */
export const INVENTORY_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Small businesses", href: getInventoryBestForUrl("small-business") },
  { label: "Retail stores", href: getInventoryBestForUrl("retail") },
  { label: "Ecommerce companies", href: getInventoryBestForUrl("ecommerce") },
  { label: "Manufacturers", href: getInventoryBestForUrl("manufacturing") },
  { label: "Warehouse operations", href: getInventoryBestForUrl("warehouses") },
];

export const INVENTORY_BY_BUSINESS_TYPE_GROUPS: {
  groupLabel: string;
  links: { label: string; href: string }[];
}[] = [
  {
    groupLabel: "Primary business types",
    links: INVENTORY_BY_BUSINESS_TYPE.slice(0, 3),
  },
  {
    groupLabel: "Other business types",
    links: INVENTORY_BY_BUSINESS_TYPE.slice(3),
  },
];

/** Card data for Popular inventory comparisons (logos + vs + summary + link). */
export type InventoryPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const INVENTORY_POPULAR_COMPARISONS: InventoryPopularComparisonCard[] = [
  {
    slug: "zoho-inventory-vs-cin7",
    productA: { name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho },
    productB: { name: "Cin7", logoSrc: INVENTORY_LOGOS.cin7 },
    summaryParagraph:
      "Zoho Inventory is a flexible, budget-friendly choice for SMBs, especially if you already use Zoho apps; Cin7 is better for complex, multi-channel operations with more advanced retail and wholesale features.",
    href: getInventoryCompareUrl("zoho-inventory-vs-cin7"),
  },
  {
    slug: "cin7-vs-katana",
    productA: { name: "Cin7", logoSrc: INVENTORY_LOGOS.cin7 },
    productB: { name: "Katana", logoSrc: INVENTORY_LOGOS.katana },
    summaryParagraph:
      "Cin7 covers inventory and orders across ecommerce, retail, and wholesale; Katana specializes in production planning and inventory for manufacturers with bills of materials and shop floor tracking.",
    href: getInventoryCompareUrl("cin7-vs-katana"),
  },
  {
    slug: "inflow-inventory-vs-zoho-inventory",
    productA: { name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow },
    productB: { name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho },
    summaryParagraph:
      "inFlow focuses on straightforward stock tracking and reordering for small businesses; Zoho Inventory layers in deeper integrations, automation, and multi-warehouse support inside the Zoho ecosystem.",
    href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory"),
  },
  {
    slug: "sortly-vs-inflow-inventory",
    productA: { name: "Sortly", logoSrc: INVENTORY_LOGOS.sortly },
    productB: { name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow },
    summaryParagraph:
      "Sortly emphasizes visual, barcode-based tracking that is easy for teams to adopt; inFlow adds more structured order workflows, reporting, and purchasing features for growing inventory operations.",
    href: getInventoryCompareUrl("sortly-vs-inflow-inventory"),
  },
  {
    slug: "fishbowl-vs-katana",
    productA: { name: "Fishbowl", logoSrc: INVENTORY_LOGOS.fishbowl },
    productB: { name: "Katana", logoSrc: INVENTORY_LOGOS.katana },
    summaryParagraph:
      "Fishbowl is a long-standing option for manufacturers and distributors that rely on QuickBooks; Katana offers a more modern, cloud-native take on production and inventory for small manufacturers.",
    href: getInventoryCompareUrl("fishbowl-vs-katana"),
  },
] as InventoryPopularComparisonCard[];

/** FAQ items for the hub. */
export const INVENTORY_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is inventory management software?",
    a: "Inventory management software helps businesses track stock levels, sales, purchases, and reordering across locations and channels. It replaces spreadsheets with a real-time system so you know what you have on hand, what is on order, and when to restock.",
  },
  {
    q: "What inventory software is best for small businesses?",
    a: "Zoho Inventory and inFlow Inventory are strong fits for many small businesses: both offer clear stock tracking, purchase orders, and basic reporting at reasonable prices. Sortly is a good option if you mainly need simple, visual tracking with barcodes and photos.",
  },
  {
    q: "Does inventory software integrate with accounting software?",
    a: "Most modern inventory tools integrate with accounting platforms like QuickBooks, Xero, or Zoho Books. Integrations help keep stock, sales, and cost of goods sold in sync so your books reflect what is actually happening in your warehouse or storeroom.",
  },
  {
    q: "What is the difference between inventory software and warehouse management systems?",
    a: "Inventory software focuses on tracking stock levels, orders, and basic warehouse activities. Warehouse management systems (WMS) go deeper into warehouse workflows like picking, packing, slotting, labor management, and advanced logistics. Many small businesses start with inventory software and only need full WMS as operations scale.",
  },
];

/** Methodology for the hub. */
export const INVENTORY_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review inventory management software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate inventory tools on how well they help small businesses track stock accurately, prevent stockouts, and manage orders across channels.",
  bullets: [
    "We test core workflows: adding products, tracking stock movements, creating purchase and sales orders, and managing reorders.",
    "We compare pricing tiers, user and location limits, and add-ons so you understand total cost at your size and complexity.",
    "We look at integrations with ecommerce, accounting, and shipping tools, plus reporting on stock, margins, and demand.",
  ],
};

