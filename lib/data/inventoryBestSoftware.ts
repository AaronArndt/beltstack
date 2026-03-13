/**
 * Inventory best-software roundup page data.
 * Used by app/inventory/best-inventory-software/page.tsx.
 */

import {
  getInventoryReviewUrl,
  getInventoryCompareUrl,
  getInventoryBestForUrl,
} from "@/lib/routes";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryHubData";

export type BestInventoryPick = {
  slug: string;
  name: string;
  badge: string;
  description: string;
  rating: string;
  startingPrice: string;
  reviewHref: string;
  visitUrl: string;
  logoSrc: string;
  compareSlugs: string[];
  editorialParagraph: string;
  pros: string[];
  cons: string[];
  pricingSummary: string;
};

export type InventoryComparisonTableRow = {
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

export const TOP_PICKS: BestInventoryPick[] = [
  {
    slug: "zoho-inventory",
    name: "Zoho Inventory",
    badge: "Best overall inventory software",
    description:
      "Well-rounded inventory management for small and midsize businesses, especially if you already use Zoho apps.",
    rating: "4.6",
    startingPrice: "Free tier",
    reviewHref: getInventoryReviewUrl("zoho-inventory"),
    visitUrl: "https://www.zoho.com/inventory",
    logoSrc: INVENTORY_LOGOS.zoho,
    compareSlugs: ["zoho-inventory-vs-cin7", "inflow-inventory-vs-zoho-inventory"],
    editorialParagraph:
      "Zoho Inventory is our top pick for most small and midsize businesses. It combines stock tracking, orders, and basic warehouse tools with tight integrations to Zoho Books and other Zoho apps. The interface is approachable, and the free and entry-level plans are friendly to small budgets. If you want a modern inventory system that can grow with you—without jumping straight into enterprise pricing—Zoho Inventory is a strong default.",
    pros: [
      "Free and affordable paid tiers for small businesses",
      "Strong integrations with Zoho Books and other Zoho apps",
      "Multi-warehouse support and multi-channel order syncing",
      "Good balance of features without overwhelming complexity",
    ],
    cons: [
      "Deepest reporting and automation reserved for higher tiers",
      "Best experience if you are already in the Zoho ecosystem",
      "Interface can feel busy compared to very lightweight tools",
    ],
    pricingSummary:
      "Zoho Inventory offers a free plan with limits and paid plans that scale by orders, warehouses, and features. Pricing is generally lower than many rivals at similar feature levels—check current tiers for your order volume and channels.",
  },
  {
    slug: "cin7",
    name: "Cin7",
    badge: "Best for multi-channel inventory",
    description:
      "Inventory and order management built for businesses selling across ecommerce, retail, and wholesale channels.",
    rating: "4.5",
    startingPrice: "From ~$349/mo",
    reviewHref: getInventoryReviewUrl("cin7"),
    visitUrl: "https://www.cin7.com",
    logoSrc: INVENTORY_LOGOS.cin7,
    compareSlugs: ["zoho-inventory-vs-cin7", "cin7-vs-katana"],
    editorialParagraph:
      "Cin7 is designed for complex, multi-channel inventory. It connects ecommerce storefronts, marketplaces, retail POS, and wholesale orders so stock stays in sync across channels. The trade-off is higher pricing and more implementation work than lighter tools. If you are already selling through multiple channels and are running into limitations with basic inventory apps, Cin7 is a strong upgrade path.",
    pros: [
      "Robust multi-channel inventory and order management",
      "Built-in retail and wholesale workflows",
      "Integrations with major ecommerce and POS platforms",
      "Strong fit for growing brands with complex operations",
    ],
    cons: [
      "Higher starting price than SMB-focused tools",
      "Implementation and onboarding can take time",
      "Overkill for very small or single-channel businesses",
    ],
    pricingSummary:
      "Cin7 typically starts in the mid-hundreds per month, with plans that scale by users, warehouses, and channels. It makes the most sense once you have enough volume and complexity to justify the investment.",
  },
  {
    slug: "inflow-inventory",
    name: "inFlow Inventory",
    badge: "Best for small business inventory tracking",
    description:
      "Straightforward stock and order tracking for small businesses that need practical control over products and reordering.",
    rating: "4.4",
    startingPrice: "From ~$89/mo",
    reviewHref: getInventoryReviewUrl("inflow-inventory"),
    visitUrl: "https://www.inflowinventory.com",
    logoSrc: INVENTORY_LOGOS.inflow,
    compareSlugs: ["inflow-inventory-vs-zoho-inventory", "sortly-vs-inflow-inventory"],
    editorialParagraph:
      "inFlow Inventory is built squarely for small businesses that have outgrown spreadsheets. It focuses on practical workflows—receiving, shipping, reordering, and basic reporting—without diving too deep into enterprise features. If you want clear stock levels, barcode support, and purchase orders in a tool you can actually roll out quickly, inFlow is a very solid choice.",
    pros: [
      "Easy to understand for teams moving off spreadsheets",
      "Good barcode support and mobile options",
      "Useful purchase and sales order workflows",
      "Pricing that fits many small operations",
    ],
    cons: [
      "Less suited to very complex multi-channel setups",
      "Some advanced integrations are more limited than larger suites",
      "Reporting is good but not as deep as high-end systems",
    ],
    pricingSummary:
      "inFlow offers plans geared toward small and growing businesses, with pricing based on users and locations. Expect a lower entry price than full multi-channel platforms, but higher than the simplest tools like Sortly.",
  },
  {
    slug: "katana",
    name: "Katana",
    badge: "Best for manufacturing inventory",
    description:
      "Inventory and production planning for manufacturers that need to track materials, work orders, and finished goods.",
    rating: "4.5",
    startingPrice: "From ~$129/mo",
    reviewHref: getInventoryReviewUrl("katana"),
    visitUrl: "https://katanamrp.com",
    logoSrc: INVENTORY_LOGOS.katana,
    compareSlugs: ["cin7-vs-katana", "fishbowl-vs-katana"],
    editorialParagraph:
      "Katana is our top pick for small manufacturers. It combines bills of materials, production scheduling, and inventory so you can see what materials you have, what is in production, and what is ready to ship. The UI is more modern and accessible than many legacy MRP systems. If you assemble or manufacture products and want cloud-based inventory plus production, Katana is a strong fit.",
    pros: [
      "Built specifically for manufacturers and makers",
      "Bills of materials and production planning baked in",
      "Modern, cloud-based interface",
      "Integrations with ecommerce and accounting tools",
    ],
    cons: [
      "More than you need if you only buy and resell finished goods",
      "Requires clean product and BOM data to get the most value",
      "Pricing is higher than basic inventory tools",
    ],
    pricingSummary:
      "Katana’s plans start around the low hundreds per month and scale with users and features. It is priced for serious manufacturing operations rather than occasional inventory tracking.",
  },
  {
    slug: "sortly",
    name: "Sortly",
    badge: "Best for simple inventory tracking",
    description:
      "Easy-to-use inventory tracking for small teams that want visual item records, barcodes, and basic stock control.",
    rating: "4.3",
    startingPrice: "From ~$39/mo",
    reviewHref: getInventoryReviewUrl("sortly"),
    visitUrl: "https://www.sortly.com",
    logoSrc: INVENTORY_LOGOS.sortly,
    compareSlugs: ["sortly-vs-inflow-inventory"],
    editorialParagraph:
      "Sortly is the simplicity pick in this list. Visual item records, photos, and custom fields make it easy for teams to know what they have and where it is, without heavy setup. It is great for offices, field teams, and small operations that mainly need better tracking—not full-blown order management. If you want a friendlier step up from a spreadsheet or clipboard, Sortly is worth a look.",
    pros: [
      "Very approachable for non-technical teams",
      "Photos, barcodes, and QR labels for items",
      "Mobile-friendly for teams away from desks",
      "Lower starting price than many complex tools",
    ],
    cons: [
      "Limited order and purchasing workflows compared to inFlow or Zoho Inventory",
      "Not aimed at deep manufacturing or multi-channel ecommerce",
      "Reporting is more basic than in higher-end platforms",
    ],
    pricingSummary:
      "Sortly offers tiered plans starting around a few dozen dollars per month, based on items, users, and features. It is priced to be accessible for small teams that mainly need tracking and visibility.",
  },
] as BestInventoryPick[];

export const COMPARISON_TABLE_ROWS: InventoryComparisonTableRow[] = [
  {
    slug: "zoho-inventory",
    name: "Zoho Inventory",
    logoSrc: INVENTORY_LOGOS.zoho,
    bestFor: "Best overall inventory software",
    startingPrice: "Free tier",
    rating: "4.6",
    reviewHref: getInventoryReviewUrl("zoho-inventory"),
  },
  {
    slug: "cin7",
    name: "Cin7",
    logoSrc: INVENTORY_LOGOS.cin7,
    bestFor: "Multi-channel inventory management",
    startingPrice: "From ~$349/mo",
    rating: "4.5",
    reviewHref: getInventoryReviewUrl("cin7"),
  },
  {
    slug: "inflow-inventory",
    name: "inFlow Inventory",
    logoSrc: INVENTORY_LOGOS.inflow,
    bestFor: "Small business inventory tracking",
    startingPrice: "From ~$89/mo",
    rating: "4.4",
    reviewHref: getInventoryReviewUrl("inflow-inventory"),
  },
  {
    slug: "katana",
    name: "Katana",
    logoSrc: INVENTORY_LOGOS.katana,
    bestFor: "Manufacturing inventory management",
    startingPrice: "From ~$129/mo",
    rating: "4.5",
    reviewHref: getInventoryReviewUrl("katana"),
  },
  {
    slug: "fishbowl",
    name: "Fishbowl",
    logoSrc: INVENTORY_LOGOS.fishbowl,
    bestFor: "Inventory and manufacturing for QuickBooks users",
    startingPrice: "Quote",
    rating: "4.3",
    reviewHref: getInventoryReviewUrl("fishbowl"),
  },
  {
    slug: "sortly",
    name: "Sortly",
    logoSrc: INVENTORY_LOGOS.sortly,
    bestFor: "Simple inventory tracking",
    startingPrice: "From ~$39/mo",
    rating: "4.3",
    reviewHref: getInventoryReviewUrl("sortly"),
  },
  {
    slug: "quickbooks-commerce",
    name: "QuickBooks Commerce",
    logoSrc: INVENTORY_LOGOS.quickbooksCommerce,
    bestFor: "Inventory for QuickBooks-centric teams",
    startingPrice: "Quote",
    rating: "4.2",
    reviewHref: getInventoryReviewUrl("quickbooks-commerce"),
  },
  {
    slug: "unleashed",
    name: "Unleashed",
    logoSrc: INVENTORY_LOGOS.unleashed,
    bestFor: "Wholesalers and manufacturers",
    startingPrice: "From ~$349/mo",
    rating: "4.4",
    reviewHref: getInventoryReviewUrl("unleashed"),
  },
  {
    slug: "finale-inventory",
    name: "Finale Inventory",
    logoSrc: INVENTORY_LOGOS.finale,
    bestFor: "High-volume ecommerce and warehouses",
    startingPrice: "From ~$99/mo",
    rating: "4.4",
    reviewHref: getInventoryReviewUrl("finale-inventory"),
  },
] as InventoryComparisonTableRow[];

export const MORE_INVENTORY_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "fishbowl",
    name: "Fishbowl",
    description:
      "Long-standing inventory and manufacturing solution that pairs well with QuickBooks for manufacturers and distributors.",
    reviewHref: getInventoryReviewUrl("fishbowl"),
    logoSrc: INVENTORY_LOGOS.fishbowl,
  },
  {
    slug: "quickbooks-commerce",
    name: "QuickBooks Commerce",
    description:
      "Inventory and order management designed for businesses that already rely on QuickBooks for accounting.",
    reviewHref: getInventoryReviewUrl("quickbooks-commerce"),
    logoSrc: INVENTORY_LOGOS.quickbooksCommerce,
  },
  {
    slug: "unleashed",
    name: "Unleashed",
    description:
      "Inventory and production management for wholesalers and manufacturers that need deeper control over stock and margins.",
    reviewHref: getInventoryReviewUrl("unleashed"),
    logoSrc: INVENTORY_LOGOS.unleashed,
  },
  {
    slug: "finale-inventory",
    name: "Finale Inventory",
    description:
      "Inventory software tuned for high-volume ecommerce and warehouses with strong channel and warehouse support.",
    reviewHref: getInventoryReviewUrl("finale-inventory"),
    logoSrc: INVENTORY_LOGOS.finale,
  },
];

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for small business",
    href: getInventoryBestForUrl("small-business"),
    description: "Inventory tools that stay approachable as you grow from a few shelves to a busier stockroom.",
  },
  {
    label: "Best for ecommerce",
    href: getInventoryBestForUrl("ecommerce"),
    description: "Platforms that sync orders and stock across online stores and marketplaces.",
  },
  {
    label: "Best for retail",
    href: getInventoryBestForUrl("retail"),
    description: "Inventory and POS-friendly options for brick-and-mortar retailers.",
  },
  {
    label: "Best for manufacturing",
    href: getInventoryBestForUrl("manufacturing"),
    description: "Inventory and production planning tools built for manufacturers and assemblers.",
  },
  {
    label: "Best for warehouses",
    href: getInventoryBestForUrl("warehouses"),
    description: "Inventory software that supports multiple locations, bins, and higher-volume warehouse operations.",
  },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  { label: "Cin7 vs Katana", href: getInventoryCompareUrl("cin7-vs-katana") },
  { label: "inFlow vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  { label: "Sortly vs inFlow", href: getInventoryCompareUrl("sortly-vs-inflow-inventory") },
  { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
];

export const FAQ_ITEMS: FaqItem[] = [
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

