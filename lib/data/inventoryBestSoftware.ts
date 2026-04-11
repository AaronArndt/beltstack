/**
 * Inventory best-software roundup page data.
 * Used by app/inventory/best-inventory-software/page.tsx.
 */

import {
  getInventoryReviewUrl,
  getInventoryCompareUrl,
  getInventoryBestForUrl,
} from "@/lib/routes";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryLogos";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestInventoryPick = SoftwarePickCardContent;

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
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
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
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
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
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
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
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
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
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
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

export const INVENTORY_REGISTRY_SUPPLEMENT: BestInventoryPick[] = [
  {
    slug: "fishbowl",
    name: "Fishbowl",
    badge: "Best for QuickBooks-centric manufacturing teams",
    description:
      "Long-standing inventory and manufacturing solution that pairs well with QuickBooks for manufacturers and distributors.",
    editorialParagraph:
      "Fishbowl is a practical fit for businesses that need deeper inventory and light manufacturing workflows while keeping QuickBooks as the accounting backbone. It is especially common among distributors and manufacturers that want stronger warehouse control than basic SMB tools provide.",
    rating: "4.3",
    startingPrice: "Quote",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.fishbowlinventory.com",
    logoSrc: INVENTORY_LOGOS.fishbowl,
    compareSlugs: ["fishbowl-vs-katana", "zoho-inventory-vs-cin7"],
    pros: [
      "Strong fit for QuickBooks-centric inventory and manufacturing",
      "Deeper warehouse and operational workflows than lightweight SMB tools",
      "Established product used by manufacturers and distributors",
    ],
    cons: [
      "Quote-based pricing can make budgeting less transparent",
      "Interface and onboarding can feel heavier than modern cloud SMB tools",
      "More operational complexity than many small teams need",
    ],
    pricingSummary:
      "Fishbowl pricing is generally quote-based and depends on team size, modules, and implementation scope. It is typically considered when operations have outgrown simpler inventory tools.",
    comparisonTableBestFor: "Inventory and manufacturing for QuickBooks users",
  },
  {
    slug: "quickbooks-commerce",
    name: "QuickBooks Commerce",
    badge: "Best for QuickBooks-native inventory workflows",
    description:
      "Inventory and order management designed for businesses that already rely on QuickBooks for accounting.",
    editorialParagraph:
      "QuickBooks Commerce is a natural shortlist option for teams that want inventory and order flows tightly connected to QuickBooks. The main advantage is accounting alignment and reduced reconciliation overhead for finance-heavy operations.",
    rating: "4.2",
    startingPrice: "Quote",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://quickbooks.intuit.com",
    logoSrc: INVENTORY_LOGOS.quickbooksCommerce,
    compareSlugs: ["inflow-inventory-vs-zoho-inventory"],
    pros: [
      "Strong alignment for teams already committed to QuickBooks",
      "Useful inventory and order workflows for accounting-centric operations",
      "Can reduce manual sync and reconciliation work",
    ],
    cons: [
      "Less flexibility than broader multi-channel specialists in some cases",
      "Pricing and packaging can require sales conversations",
      "Best fit is narrower if you are not already in the Intuit ecosystem",
    ],
    pricingSummary:
      "QuickBooks Commerce pricing is generally quote-based. It tends to be most compelling when accounting and inventory alignment in the Intuit ecosystem is the top priority.",
    comparisonTableBestFor: "Inventory for QuickBooks-centric teams",
  },
  {
    slug: "unleashed",
    name: "Unleashed",
    badge: "Best for wholesalers and inventory-heavy product businesses",
    description:
      "Inventory and production management for wholesalers and manufacturers that need deeper control over stock and margins.",
    editorialParagraph:
      "Unleashed is a stronger fit for inventory-heavy operations that need better visibility into stock, purchasing, and product margins. It is often considered by wholesalers and manufacturers that want more depth than SMB-first tools.",
    rating: "4.4",
    startingPrice: "From ~$349/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.unleashedsoftware.com",
    logoSrc: INVENTORY_LOGOS.unleashed,
    compareSlugs: ["cin7-vs-katana", "fishbowl-vs-katana"],
    pros: [
      "Strong fit for wholesale and inventory-heavy operations",
      "Good depth for purchasing, stock control, and margin visibility",
      "Useful integrations with accounting and commerce tools",
    ],
    cons: [
      "Higher starting price than SMB-focused tools",
      "Can take more implementation effort to roll out well",
      "May be overkill for simpler single-location teams",
    ],
    pricingSummary:
      "Unleashed starts in the mid-hundreds per month and scales by features and usage. It is usually evaluated by businesses that need deeper stock and margin control than entry-level tools provide.",
    comparisonTableBestFor: "Wholesalers and manufacturers",
  },
  {
    slug: "finale-inventory",
    name: "Finale Inventory",
    badge: "Best for high-volume ecommerce and warehouse operations",
    description:
      "Inventory software tuned for high-volume ecommerce and warehouses with strong channel and warehouse support.",
    editorialParagraph:
      "Finale Inventory is a strong option for ecommerce and warehouse-heavy teams that need better scanner workflows, location control, and channel sync than lightweight inventory apps can offer.",
    rating: "4.4",
    startingPrice: "From ~$99/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.finaleinventory.com",
    logoSrc: INVENTORY_LOGOS.finale,
    compareSlugs: ["zoho-inventory-vs-cin7", "inflow-inventory-vs-zoho-inventory"],
    pros: [
      "Strong fit for higher-volume ecommerce and warehouse workflows",
      "Better operational depth than many entry-level inventory tools",
      "Good option between lightweight SMB tools and full WMS/ERP",
    ],
    cons: [
      "More setup and process definition than very simple inventory apps",
      "Feature depth can be more than tiny teams need",
      "Advanced workflow quality still depends on clean data and implementation",
    ],
    pricingSummary:
      "Finale Inventory starts around the low hundreds or high double-digits per month depending on plan and scale. It is usually selected by teams that need stronger operational workflows without going full enterprise.",
    comparisonTableBestFor: "High-volume ecommerce and warehouses",
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
  {
    label: "Best for HVAC",
    href: getInventoryBestForUrl("hvac"),
    description: "Truck stock, parts rooms, and seasonal SKUs for HVAC installs and service.",
  },
  {
    label: "Best for plumbing",
    href: getInventoryBestForUrl("plumbing"),
    description: "Fittings, water heaters, and multi-truck parts discipline.",
  },
  {
    label: "Best for electricians",
    href: getInventoryBestForUrl("electricians"),
    description: "Wire, breakers, fixtures, and van-to-shop visibility.",
  },
  {
    label: "Best for general contractors",
    href: getInventoryBestForUrl("general-contractors"),
    description: "Job materials, cages, allowances, and multi-site stock.",
  },
  {
    label: "Best for construction",
    href: getInventoryBestForUrl("construction"),
    description: "Laydown yards, prefab, and job-committed material.",
  },
  {
    label: "Best for property management",
    href: getInventoryBestForUrl("property-management"),
    description: "MRO stock, turnovers, and portfolio-wide maintenance shops.",
  },
  {
    label: "All best-for scenarios",
    href: "/inventory/best-for",
    description: "Browse every trade and operation-type guide: roofing, landscaping, pool service, movers, and more.",
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

