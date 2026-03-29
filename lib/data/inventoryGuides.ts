import { getInventoryReviewUrl, getInventoryCompareUrl } from "@/lib/routes";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryHubData";

export type InventoryGuideEntry = { title: string; href: string; description: string };

export const INVENTORY_GUIDES: InventoryGuideEntry[] = [
  {
    title: "Best Inventory Software for Small Business",
    href: "/inventory/guides/best-inventory-software-for-small-business",
    description:
      "Why small businesses move beyond spreadsheets, what to look for in inventory tools, and which platforms are best for small teams.",
  },
  {
    title: "Inventory Software for Ecommerce",
    href: "/inventory/guides/inventory-software-for-ecommerce",
    description:
      "How ecommerce brands use inventory software to sync stock across channels, manage orders, and prevent overselling.",
  },
  {
    title: "Inventory Software for Manufacturing",
    href: "/inventory/guides/inventory-software-for-manufacturing",
    description:
      "How manufacturers use inventory and production tools to track materials, work orders, and finished goods.",
  },
  {
    title: "How to Choose Inventory Management Software",
    href: "/inventory/guides/how-to-choose-inventory-management-software",
    description:
      "A step-by-step framework for choosing inventory software based on business size, channels, warehouse needs, and budget.",
  },
  {
    title: "Inventory Management Software vs ERP",
    href: "/inventory/guides/how-to-choose-inventory-management-software",
    description:
      "Where inventory tools stop and ERP systems begin—and how to know which your business actually needs.",
  },
  {
    title: "Warehouse Management Software vs Inventory Software",
    href: "/inventory/guides/inventory-software-for-manufacturing",
    description:
      "The difference between WMS and general inventory tools, and when each makes sense for growing operations.",
  },
  {
    title: "How to Track Inventory for a Small Business",
    href: "/inventory/guides/best-inventory-software-for-small-business",
    description:
      "Practical guidance on counts, reorder points, and processes to move from ad hoc tracking to a reliable system.",
  },
  {
    title: "Inventory Software Pricing Guide",
    href: "/inventory/guides/how-to-choose-inventory-management-software",
    description:
      "How inventory platforms price their tools, what drives costs, and how to budget based on complexity and volume.",
  },
  {
    title: "Cycle Counting and Inventory Accuracy",
    href: "/inventory/guides/cycle-counting-and-inventory-accuracy",
    description:
      "How cycle counts, ABC analysis, and inventory accuracy practices reduce stockouts and shrink—and how software supports them.",
  },
] as const;

// Re-export commonly used inventory logos for guide sidebars.
export const INVENTORY_GUIDE_LOGOS = INVENTORY_LOGOS;

export const INVENTORY_GUIDE_SIDEBAR_ITEMS = [
  {
    name: "Zoho Inventory",
    logoSrc: INVENTORY_LOGOS.zoho,
    rating: 4.6,
    bestFor: "Best overall for SMBs",
    reviewHref: getInventoryReviewUrl("zoho-inventory"),
  },
  {
    name: "Cin7",
    logoSrc: INVENTORY_LOGOS.cin7,
    rating: 4.5,
    bestFor: "Multi-channel inventory",
    reviewHref: getInventoryReviewUrl("cin7"),
  },
  {
    name: "inFlow Inventory",
    logoSrc: INVENTORY_LOGOS.inflow,
    rating: 4.4,
    bestFor: "Small business tracking",
    reviewHref: getInventoryReviewUrl("inflow-inventory"),
  },
] as const;

export const INVENTORY_GUIDE_RELATED_ITEMS = [
  { label: "Inventory Management Software Hub", href: "/inventory" },
  { label: "Best Inventory Management Software", href: "/inventory/best-inventory-software" },
  { label: "Compare Inventory Software", href: "/inventory/compare" },
  { label: "Inventory Management Guides", href: "/inventory/guides" },
  { label: "Zoho Inventory Review", href: getInventoryReviewUrl("zoho-inventory") },
  { label: "Cin7 Review", href: getInventoryReviewUrl("cin7") },
  { label: "inFlow Inventory Review", href: getInventoryReviewUrl("inflow-inventory") },
  { label: "Katana Review", href: getInventoryReviewUrl("katana") },
  { label: "Fishbowl Review", href: getInventoryReviewUrl("fishbowl") },
  { label: "Sortly Review", href: getInventoryReviewUrl("sortly") },
  { label: "QuickBooks Commerce Review", href: getInventoryReviewUrl("quickbooks-commerce") },
  { label: "Unleashed Review", href: getInventoryReviewUrl("unleashed") },
  { label: "Finale Inventory Review", href: getInventoryReviewUrl("finale-inventory") },
  { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  { label: "Cin7 vs Katana", href: getInventoryCompareUrl("cin7-vs-katana") },
  { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  { label: "Sortly vs inFlow Inventory", href: getInventoryCompareUrl("sortly-vs-inflow-inventory") },
  { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
] as const;

