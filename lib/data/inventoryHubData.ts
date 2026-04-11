/**
 * Inventory management hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/inventory/page.tsx.
 */

import {
  getInventoryReviewUrl,
  getInventoryCompareUrl,
  getInventoryBestForUrl,
} from "@/lib/routes";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import type { FeaturedPickRef, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryLogos";

export { INVENTORY_LOGOS };

/** Top inventory picks — slugs resolve to canonical `inventoryBestSoftware` data */
export const INVENTORY_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "zoho-inventory" },
  { slug: "cin7" },
  { slug: "inflow-inventory" },
  { slug: "katana" },
  { slug: "sortly" },
  { slug: "fishbowl" },
  { slug: "quickbooks-commerce" },
  { slug: "unleashed" },
  { slug: "finale-inventory" },
];

/** Comparison table rows for the hub (inventory tools) — canonical pick data. */
export const INVENTORY_COMPARISON_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("inventory", [
    "zoho-inventory",
    "cin7",
    "inflow-inventory",
    "katana",
    "fishbowl",
    "sortly",
    "quickbooks-commerce",
    "unleashed",
    "finale-inventory",
  ]).map(toHubComparisonTableRow),
] as ComparisonTableRow[];

/** Best inventory software by use case (scenario) links. */
export const INVENTORY_SCENARIO_LINKS = [
  { label: "Best inventory software (roundup)", href: "/inventory/best-inventory-software" },
  { label: "Compare inventory software", href: getInventoryCompareUrl() },
  { label: "All best-for scenarios", href: "/inventory/best-for" },
  { label: "Small business", href: getInventoryBestForUrl("small-business") },
  { label: "Ecommerce business", href: getInventoryBestForUrl("ecommerce") },
  { label: "Retail", href: getInventoryBestForUrl("retail") },
  { label: "Manufacturing", href: getInventoryBestForUrl("manufacturing") },
  { label: "Warehousing", href: getInventoryBestForUrl("warehouses") },
  { label: "HVAC businesses", href: getInventoryBestForUrl("hvac") },
  { label: "General contractors", href: getInventoryBestForUrl("general-contractors") },
  { label: "Construction companies", href: getInventoryBestForUrl("construction") },
  { label: "Property management", href: getInventoryBestForUrl("property-management") },
] as const;

/** Trade-specific best-for guides (inventory for trucks, job sites, and shops). */
export const INVENTORY_TRADE_BEST_FOR_LINKS: { label: string; href: string }[] = [
  { label: "HVAC businesses", href: getInventoryBestForUrl("hvac") },
  { label: "Plumbing companies", href: getInventoryBestForUrl("plumbing") },
  { label: "Electricians", href: getInventoryBestForUrl("electricians") },
  { label: "Painting contractors", href: getInventoryBestForUrl("painting") },
  { label: "Roofing companies", href: getInventoryBestForUrl("roofing") },
  { label: "General contractors", href: getInventoryBestForUrl("general-contractors") },
  { label: "Landscaping companies", href: getInventoryBestForUrl("landscaping") },
  { label: "Construction companies", href: getInventoryBestForUrl("construction") },
  { label: "Remodeling businesses", href: getInventoryBestForUrl("remodeling") },
  { label: "Handyman businesses", href: getInventoryBestForUrl("handyman") },
  { label: "Property management companies", href: getInventoryBestForUrl("property-management") },
  { label: "Pest control businesses", href: getInventoryBestForUrl("pest-control") },
  { label: "Pool service companies", href: getInventoryBestForUrl("pool-service") },
  { label: "Junk removal businesses", href: getInventoryBestForUrl("junk-removal") },
  { label: "Moving companies", href: getInventoryBestForUrl("moving") },
];

/** Inventory by operation type (channels, BOM depth, warehouse scale). */
export const INVENTORY_OPERATION_BEST_FOR_LINKS: { label: string; href: string }[] = [
  { label: "Small businesses", href: getInventoryBestForUrl("small-business") },
  { label: "Retail stores", href: getInventoryBestForUrl("retail") },
  { label: "Ecommerce companies", href: getInventoryBestForUrl("ecommerce") },
  { label: "Manufacturers", href: getInventoryBestForUrl("manufacturing") },
  { label: "Warehouse operations", href: getInventoryBestForUrl("warehouses") },
];

/** Flat list for components that expect a single array (trades, then operations, then hub). */
export const INVENTORY_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  ...INVENTORY_TRADE_BEST_FOR_LINKS,
  ...INVENTORY_OPERATION_BEST_FOR_LINKS,
  { label: "All best-for scenarios", href: "/inventory/best-for" },
];

export const INVENTORY_BY_BUSINESS_TYPE_GROUPS: {
  groupLabel: string;
  links: { label: string; href: string }[];
}[] = [
  {
    groupLabel: "Browse by trade",
    links: INVENTORY_TRADE_BEST_FOR_LINKS,
  },
  {
    groupLabel: "Browse by operation type",
    links: [
      ...INVENTORY_OPERATION_BEST_FOR_LINKS,
      { label: "All best-for scenarios", href: "/inventory/best-for" },
    ],
  },
];

/** Editorial “best inventory by use case” — ops reality (channels, BOM, warehouse depth), not org label alone. */
export const INVENTORY_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Lean SMBs replacing spreadsheets",
    body: "You need trustworthy on-hand counts, low training overhead, and affordable user limits before you add automation. Start with barcode basics and purchase orders—then layer channels once stock discipline sticks.",
    links: [
      { label: "Best inventory for small business →", href: getInventoryBestForUrl("small-business") },
      { label: "Zoho Inventory review →", href: getInventoryReviewUrl("zoho-inventory") },
    ],
  },
  {
    title: "Ecommerce and multichannel stock sync",
    body: "Marketplaces punish oversells: prioritize real-time sync, bundle/kit logic, and returns workflows. Compare integration breadth and whether inventory or your cart owns the product catalog.",
    links: [
      { label: "Best inventory for ecommerce →", href: getInventoryBestForUrl("ecommerce") },
      { label: "Zoho Inventory vs Cin7 →", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    ],
  },
  {
    title: "Retail with stores and back rooms",
    body: "You’re balancing POS pulls, transfers, and cycle counts. Look for multi-location permissions, receiving workflows, and how painful physical counts are on mobile.",
    links: [
      { label: "Best inventory for retail →", href: getInventoryBestForUrl("retail") },
      { label: "Full rankings →", href: "/inventory/best-inventory-software" },
    ],
  },
  {
    title: "Manufacturing with BOMs and production",
    body: "Raw materials, assemblies, and scrap change the software class. Evaluate whether you need true MRP features or lighter assembly—cost and complexity jump quickly.",
    links: [
      { label: "Best inventory for manufacturing →", href: getInventoryBestForUrl("manufacturing") },
      { label: "Fishbowl vs Katana →", href: getInventoryCompareUrl("fishbowl-vs-katana") },
    ],
  },
  {
    title: "Warehouse-heavy receiving and fulfillment",
    body: "At higher volume, bin locations, pick/pack, and transfer accuracy matter more than a slick UI. Plan for scanner workflows and whether you’re flirting with WMS territory.",
    links: [
      { label: "Best inventory for warehouses →", href: getInventoryBestForUrl("warehouses") },
      { label: "Cin7 vs Katana →", href: getInventoryCompareUrl("cin7-vs-katana") },
    ],
  },
];

/** Educational hub guides (evaluation concepts). Exported for HubGuidesGrid on the inventory hub. */
export const INVENTORY_HUB_GUIDES_GRID: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    href: "/inventory/guides/how-to-choose-inventory-management-software",
    title: "What is Inventory Management Software?",
    description:
      "Definitions and scope: when stock tracking is enough versus when you need manufacturing, WMS, or multichannel ops.",
  },
  {
    href: "/inventory/guides/best-inventory-software-for-small-business",
    title: "Inventory Software Pricing",
    description:
      "How vendors charge for users, locations, orders, and SKUs—so you can compare total cost, not teaser tiers.",
  },
  {
    href: "/inventory/guides/inventory-software-for-ecommerce",
    title: "Inventory for Ecommerce and Retail",
    description:
      "Channel sync, returns, and fulfillment concepts—evaluation depth without duplicating product picks above.",
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

