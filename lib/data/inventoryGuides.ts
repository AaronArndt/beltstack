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
    title: "Cycle Counting and Inventory Accuracy",
    href: "/inventory/guides/cycle-counting-and-inventory-accuracy",
    description:
      "How cycle counts, ABC analysis, and inventory accuracy practices reduce stockouts and shrink—and how software supports them.",
  },
  {
    title: "What Are the 4 Types of Inventory Management?",
    href: "/inventory/guides/what-are-the-4-types-of-inventory-management",
    description:
      "Periodic, perpetual, just-in-time, and MRP-style inventory management explained—when each fits and how software supports them.",
  },
  {
    title: "The 5 Rs of Inventory Management Explained",
    href: "/inventory/guides/the-5-rs-of-inventory-management-explained",
    description:
      "Right product, place, time, quantity, and condition—the five Rs framework for diagnosing stock failures and improving fill rates.",
  },
  {
    title: "The 7 Cs of Supply Chain Management Explained",
    href: "/inventory/guides/the-7-cs-of-supply-chain-management-explained",
    description:
      "Cash, cost, consistency, control, customer, communication, and commitment—the seven Cs scorecard for supply chain and inventory health.",
  },
  {
    title: "The Different Types of Inventory Explained",
    href: "/inventory/guides/the-different-types-of-inventory-explained",
    description:
      "Raw materials, WIP, finished goods, MRO, safety stock, and in-transit inventory—how each type behaves and what to track in software.",
  },
  {
    title: "FEFO vs FIFO: What's the Difference?",
    href: "/inventory/guides/fefo-vs-fifo-whats-the-difference",
    description:
      "Compare first expired, first out vs first in, first out rotation—when to use each, waste reduction, and lot tracking in inventory software.",
  },
  {
    title: "The Most Popular Inventory Management Methods",
    href: "/inventory/guides/the-most-popular-inventory-management-methods",
    description:
      "FIFO, perpetual tracking, ABC analysis, reorder points, and JIT—how popular inventory methods work and when each fits your operation.",
  },
  {
    title: "What Is SAP Inventory Management?",
    href: "/inventory/guides/what-is-sap-inventory-management",
    description:
      "SAP Materials Management, EWM, and ERP inventory explained—and when SAP fits versus standalone inventory software.",
  },
  {
    title: "What Is a Warehouse Management System (WMS)?",
    href: "/inventory/guides/what-is-a-warehouse-management-system-wms",
    description:
      "Warehouse management systems defined: capabilities, WMS vs inventory software, and when to adopt floor-level warehouse control.",
  },
  {
    title: "The Most Popular WMS Software Compared",
    href: "/inventory/guides/the-most-popular-wms-software-compared",
    description:
      "How leading WMS platforms—SAP EWM, Oracle, Manhattan, Blue Yonder, and cloud options—compare on fit and ERP integration.",
  },
  {
    title: "The 80/20 Rule for Inventory Explained",
    href: "/inventory/guides/the-80-20-rule-for-inventory-explained",
    description:
      "Apply the Pareto principle to SKUs with ABC analysis, cycle count priorities, and inventory software that focuses effort on high-impact lines.",
  },
  {
    title: "The Different Types of Inventory Systems",
    href: "/inventory/guides/the-different-types-of-inventory-systems",
    description:
      "Periodic vs perpetual, barcode, multi-location, and ERP-integrated inventory systems—how each architecture works and which fits your operation.",
  },
  {
    title: "The Best Ways to Manage Inventory",
    href: "/inventory/guides/the-best-ways-to-manage-inventory",
    description:
      "Practical inventory management: cycle counting, reorder points, ABC prioritization, and software habits that improve accuracy and fill rates.",
  },
  {
    title: "Cloud vs On-Premise Inventory Management Software",
    href: "/inventory/guides/cloud-vs-on-premise-inventory-management-software",
    description:
      "Compare cloud and on-premise inventory software on deployment, integrations, mobile access, security, and total cost of ownership.",
  },
  {
    title: "Can Excel Be Used for Inventory Management?",
    href: "/inventory/guides/can-excel-be-used-for-inventory-management",
    description:
      "When Excel works for inventory tracking, common spreadsheet failure modes, upgrade signals, and how to migrate to inventory software.",
  },
  {
    title: "Free vs Paid Inventory Management Software",
    href: "/inventory/guides/free-vs-paid-inventory-management-software",
    description:
      "Compare free and paid inventory software: plan limits, upgrade triggers, total cost, and when paid sync beats spreadsheet workarounds.",
  },
  {
    title: "The Golden Rules of Inventory Management",
    href: "/inventory/guides/the-golden-rules-of-inventory-management",
    description:
      "Core inventory principles—visibility, right quantities, cycle counting, turnover, and software that turns rules into daily discipline.",
  },
  {
    title: "The ABC Method of Inventory Management",
    href: "/inventory/guides/the-abc-method-of-inventory-management",
    description:
      "How ABC classification ranks SKUs by impact, sets count schedules and service levels, and connects to inventory software for class-based control.",
  },
  {
    title: "What's a Good Inventory Turnover Ratio?",
    href: "/inventory/guides/whats-a-good-inventory-turnover-ratio",
    description:
      "Calculate inventory turnover, compare industry benchmarks, balance lean stock with service levels, and use software to track efficiency.",
  },
  {
    title: "The Pareto Principle in Inventory Management",
    href: "/inventory/guides/the-pareto-principle-in-inventory-management",
    description:
      "Apply Pareto thinking to SKUs—rank by contribution, link to 80/20 and ABC analysis, and focus counts and cash on the vital few.",
  },
  {
    title: "The 5 Steps of Inventory Management",
    href: "/inventory/guides/the-5-steps-of-inventory-management",
    description:
      "Plan, procure, receive, store, and fulfill—the five-step inventory cycle with controls, cycle counts, and software across each handoff.",
  },
  {
    title: "How to Create an Inventory Checklist",
    href: "/inventory/guides/how-to-create-an-inventory-checklist",
    description:
      "Build receiving, put-away, pick, and cycle count checklists aligned with ABC schedules, accuracy practices, and inventory software workflows.",
  },
  {
    title: "Inventory Management vs Warehouse Management Systems",
    href: "/inventory/guides/inventory-management-vs-warehouse-management-systems",
    description:
      "Compare inventory management software and WMS—capabilities, ERP overlap, upgrade signals, and when to run both layers in your stack.",
  },
  {
    title: "Common Inventory Management Mistakes Businesses Make",
    href: "/inventory/guides/common-inventory-management-mistakes-businesses-make",
    description:
      "Avoid recurring inventory errors—unchecked quantities, poor ABC discipline, process gaps, and broken golden rules—with practical fixes and count schedules.",
  },
  {
    title: "How Small Businesses Manage Inventory",
    href: "/inventory/guides/how-small-businesses-manage-inventory",
    description:
      "Practical SMB inventory habits—from spreadsheets to software—with tracking methods, upgrade triggers, and platform picks for small teams.",
  },
  {
    title: "Inventory Forecasting Explained",
    href: "/inventory/guides/inventory-forecasting-explained",
    description:
      "Demand forecasting for purchase planning and safety stock—methods, AI-assisted models, turnover benchmarks, and ecommerce forecasting nuance.",
  },
  {
    title: "Can QuickBooks Handle Inventory Management?",
    href: "/inventory/guides/can-quickbooks-handle-inventory-management",
    description:
      "What QuickBooks inventory covers, when QuickBooks Commerce or Fishbowl fits, and how accounting-first stock tracking compares to dedicated inventory software.",
  },
  {
    title: "Does Microsoft Have Inventory Management Software?",
    href: "/inventory/guides/does-microsoft-have-inventory-management-software",
    description:
      "Dynamics 365 Business Central and Supply Chain Management inventory explained—capabilities, SAP comparison, and field service parts boundaries.",
  },
  {
    title: "How AI Is Used in Inventory Management",
    href: "/inventory/guides/how-ai-is-used-in-inventory-management",
    description:
      "Practical AI in inventory: demand forecasting, reorder suggestions, and anomaly detection—what works, required data, and how to evaluate without hype.",
  },
  {
    title: "The Easiest Ways to Track Inventory",
    href: "/inventory/guides/the-easiest-ways-to-track-inventory",
    description:
      "Easiest inventory tracking paths: spreadsheets, barcode scanning apps, and dedicated software tiers—when to use each and how to upgrade without friction.",
  },
  {
    title: "What Features to Look for in Inventory Management Software",
    href: "/inventory/guides/what-features-to-look-for-in-inventory-management-software",
    description:
      "Inventory software feature checklist: core tracking, warehouse workflows, integrations, and reporting—paired with a structured vendor evaluation.",
  },
  {
    title: "Inventory Turnover Explained",
    href: "/inventory/guides/inventory-turnover-explained",
    description:
      "Inventory turnover formulas, what the ratio reveals about working capital, improving velocity with forecasting and ABC analysis, and tracking turnover in software.",
  },
  {
    title: "Safety Stock Explained",
    href: "/inventory/guides/safety-stock-explained",
    description:
      "Safety stock buffers for demand and lead-time risk—calculation methods, ABC service levels, reorder points, and automating buffers in inventory software.",
  },
  {
    title: "What Is Inventory Optimization?",
    href: "/inventory/guides/what-is-inventory-optimization",
    description:
      "Inventory optimization balances service, cost, and cash—forecasting, ABC classification, replenishment tuning, and software that turns policy into decisions.",
  },
  {
    title: "How Multi-Location Inventory Management Works",
    href: "/inventory/guides/how-multi-location-inventory-management-works",
    description:
      "Multi-warehouse inventory—location balances, transfers, allocation, ATP, cycle counts by site, and software for honest multi-location control.",
  },
  {
    title: "Inventory Management KPIs Businesses Should Track",
    href: "/inventory/guides/inventory-management-kpis-businesses-should-track",
    description:
      "Core inventory KPIs—turnover, fill rate, accuracy, forecast error, GMROI—review cadence, and dashboards in inventory software.",
  },
  {
    title: "How Businesses Prevent Overstocking and Stockouts",
    href: "/inventory/guides/how-businesses-prevent-overstocking-and-stockouts",
    description:
      "Balance lean inventory with reliable fill rates—forecasting, reorder points, safety stock, ABC discipline, and software alerts that catch drift early.",
  },
  {
    title: "Barcode Inventory Systems Explained",
    href: "/inventory/guides/barcode-inventory-systems-explained",
    description:
      "How barcode labels, scanners, and inventory software connect receiving, picking, and cycle counts—with accuracy tips and platform comparisons.",
  },
  {
    title: "RFID vs Barcode Inventory Tracking",
    href: "/inventory/guides/rfid-vs-barcode-inventory-tracking",
    description:
      "Compare RFID and barcode tracking on cost, accuracy, workflows, and ROI—with guidance on hybrid rollouts and software fit.",
  },
  {
    title: "Perpetual vs Periodic Inventory Systems",
    href: "/inventory/guides/perpetual-vs-periodic-inventory-systems",
    description:
      "Compare perpetual and periodic inventory—how each updates quantities, when to upgrade, and how barcode scanning supports real-time accuracy.",
  },
  {
    title: "FIFO vs LIFO Inventory Accounting Explained",
    href: "/inventory/guides/fifo-vs-lifo-inventory-accounting-explained",
    description:
      "FIFO, LIFO, and average cost for inventory accounting—COGS impact, tax considerations, and how they differ from warehouse FEFO rotation.",
  },
  {
    title: "ERP vs Inventory Management Software",
    href: "/inventory/guides/erp-vs-inventory-management-software",
    description:
      "Compare ERP and dedicated inventory software—scope, when to start with inventory tools, integration patterns, and evaluation checklists for both layers.",
  },
  {
    title: "Spreadsheet vs Inventory Management Software",
    href: "/inventory/guides/spreadsheet-vs-inventory-management-software",
    description:
      "When spreadsheets work for stock, where they break down, what inventory software adds, and practical migration paths for SMB teams.",
  },
  {
    title: "How Businesses Automate Inventory Tracking",
    href: "/inventory/guides/how-businesses-automate-inventory-tracking",
    description:
      "Automate inventory with barcode scanning, channel sync, perpetual records, cycle counts, and AI-assisted replenishment—layered paths for growing ops.",
  },
  {
    title: "How Inventory Management Affects Cash Flow",
    href: "/inventory/guides/how-inventory-management-affects-cash-flow",
    description:
      "How stock levels impact working capital—turnover, safety stock, overbuying risk, and aligning inventory software reports with accounting.",
  },
  {
    title: "How Ecommerce Inventory Management Works",
    href: "/inventory/guides/how-ecommerce-inventory-management-works",
    description:
      "Ecommerce inventory workflows—channel sync, order allocation, fulfillment, returns, and how operational process differs from choosing inventory software products.",
  },
  {
    title: "Inventory Management for Retail Businesses",
    href: "/inventory/guides/inventory-management-for-retail-businesses",
    description:
      "Retail inventory management—POS deductions, backroom stock, cycle counts, multi-store transfers, and keeping omnichannel counts aligned.",
  },
  {
    title: "Inventory Management for Contractors",
    href: "/inventory/guides/inventory-management-for-contractors",
    description:
      "Contractor parts and materials tracking—shop and van stock, job consumption, purchasing, and choosing between lightweight inventory apps and field service software.",
  },
  {
    title: "Inventory Management for Field Service Businesses",
    href: "/inventory/guides/inventory-management-for-field-service-businesses",
    description:
      "Field service parts inventory—depot and van stock, work order consumption, replenishment, accounting handoffs, and when to add dedicated inventory or WMS layers.",
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

