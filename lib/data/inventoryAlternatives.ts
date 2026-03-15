/**
 * Inventory management alternatives page data.
 * Used by app/inventory/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live inventory review pages.
 */

import {
  getInventoryReviewUrl,
  getInventoryCompareUrl,
  getInventoryBestForUrl,
} from "@/lib/routes";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryHubData";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/inventory", label: "Inventory management" };
const ROUNDUP_HREF = "/inventory/best-inventory-software";
const COMPARE_HUB = "/inventory/compare";
const GUIDES_HUB = "/inventory/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Scale and complexity", body: "Small businesses often fit Zoho Inventory or inFlow; higher-volume ecommerce and warehouses may need Finale or dedicated WMS. Match the tool to your order volume and channel count." },
  { heading: "Accounting alignment", body: "QuickBooks Commerce makes sense when you already run on QuickBooks. Zoho Inventory fits Zoho Books users. Standalone tools like inFlow and Finale integrate with multiple accounting platforms." },
  { heading: "Multi-channel vs single-channel", body: "If you sell across marketplaces, ecommerce, and retail, compare multi-channel sync and reporting. Single-channel or low-volume sellers can use simpler tools." },
  { heading: "Warehouse and manufacturing", body: "Basic stock and reorder is enough for many SMBs. Deeper warehouse workflows (locations, scanners, picking) or manufacturing (BOMs, work orders) narrow the field—consider Finale for WMS-style needs." },
  { heading: "Pricing and total cost", body: "Compare entry tiers, user/location limits, and add-ons. Free or low-cost tiers (e.g. Zoho) suit early stage; mid-range (inFlow, Finale) and quote-based (QuickBooks Commerce) fit growing operations." },
];

function buildTableRows(
  originalRow: AlternativesTableRow,
  alternatives: AlternativesTopPick[]
): AlternativesTableRow[] {
  const altRows: AlternativesTableRow[] = alternatives.map((a) => ({
    slug: a.slug,
    name: a.name,
    logoSrc: a.logoSrc,
    bestFor: a.bestFor,
    startingPrice: a.startingPrice ?? "—",
    standoutFeature: a.standoutFeature ?? a.bestFor,
    reviewHref: a.reviewHref,
  }));
  return [originalRow, ...altRows];
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Inventory management hub", href: CATEGORY.href },
    { label: "Best inventory management software", href: ROUNDUP_HREF },
    { label: "Compare inventory software", href: COMPARE_HUB },
    { label: "Inventory guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getInventoryBestForUrl("small-business") },
    { label: "Best for ecommerce", href: getInventoryBestForUrl("ecommerce") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Zoho Inventory alternatives ———
const ZOHO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business tracking", description: "Straightforward inventory and reordering for SMBs; simpler than Zoho.", reviewHref: getInventoryReviewUrl("inflow-inventory"), compareHref: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB tracking; simple" },
  { slug: "quickbooks-commerce", name: "QuickBooks Commerce", logoSrc: INVENTORY_LOGOS.quickbooksCommerce, rating: "4.2", bestFor: "QuickBooks users", description: "Tight accounting alignment when you already use QuickBooks.", reviewHref: getInventoryReviewUrl("quickbooks-commerce"), startingPrice: "Quote", standoutFeature: "QuickBooks native" },
  { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, rating: "4.4", bestFor: "higher-volume ecommerce", description: "Scalable multi-channel and warehouse for growing operations.", reviewHref: getInventoryReviewUrl("finale-inventory"), startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce; warehouse" },
];

const zohoOriginalRow: AlternativesTableRow = {
  slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, bestFor: "overall SMB", startingPrice: "Free tier", standoutFeature: "Balance; integrations", reviewHref: getInventoryReviewUrl("zoho-inventory"),
};

const zohoPage: AlternativesTemplateProps = {
  title: "Best Zoho Inventory Alternatives (2026)",
  subtitle: "If Zoho Inventory isn't the right fit—because of ecosystem, scale, or accounting—these inventory management alternatives offer strong options for small and midsize businesses.",
  productName: "Zoho Inventory",
  productSlug: "zoho-inventory",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getInventoryReviewUrl("zoho-inventory"),
  quickAnswerParagraphs: [
    "Zoho Inventory is a top pick for many SMBs; alternatives include inFlow Inventory for straightforward small business tracking, QuickBooks Commerce for teams already on QuickBooks, and Finale Inventory for higher-volume ecommerce and warehouse operations. inFlow and QuickBooks Commerce are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not in the Zoho ecosystem", body: "inFlow and Finale are standalone and integrate with multiple accounting and ecommerce tools. Better if you don't use Zoho Books or Zoho CRM." },
    { heading: "QuickBooks-centric", body: "QuickBooks Commerce keeps inventory and accounting in one place for businesses that run on QuickBooks." },
    { heading: "Higher volume and channels", body: "Finale targets higher-order-volume and multi-channel ecommerce with stronger warehouse features." },
  ],
  topAlternatives: ZOHO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(zohoOriginalRow, ZOHO_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "inFlow Inventory", heading: "Best for small business tracking", body: "inFlow focuses on straightforward inventory, purchasing, and sales for SMBs. For teams that want simplicity without the Zoho ecosystem.", reviewHref: getInventoryReviewUrl("inflow-inventory"), compareHref: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
    { productName: "QuickBooks Commerce", heading: "Best for QuickBooks users", body: "QuickBooks Commerce extends QuickBooks into inventory and orders. For businesses that prioritize accounting alignment.", reviewHref: getInventoryReviewUrl("quickbooks-commerce") },
    { productName: "Finale Inventory", heading: "Best for higher-volume ecommerce", body: "Finale is built for ecommerce and warehouse operations with more order volume and multi-channel sync.", reviewHref: getInventoryReviewUrl("finale-inventory") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  ],
  relatedResources: defaultRelatedResources("Zoho Inventory", getInventoryReviewUrl("zoho-inventory")),
  faqItems: [
    { q: "What is the best Zoho Inventory alternative?", a: "inFlow Inventory for simple SMB tracking; QuickBooks Commerce for QuickBooks users; Finale for higher-volume ecommerce and warehouse. Choose by accounting stack and scale." },
    { q: "Is Zoho Inventory better than inFlow?", a: "Zoho fits teams in the Zoho ecosystem and those who want a free tier. inFlow is simpler and standalone. Compare integrations and pricing for your stack." },
    { q: "Which inventory software works with QuickBooks?", a: "QuickBooks Commerce is native; Zoho Inventory and others offer QuickBooks integrations. For tight accounting alignment, QuickBooks Commerce is the closest fit." },
  ],
};

// ——— inFlow Inventory alternatives ———
const INFLOW_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "overall SMB", description: "Strong integrations and free tier; good if you use Zoho.", reviewHref: getInventoryReviewUrl("zoho-inventory"), compareHref: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Balance; integrations" },
  { slug: "quickbooks-commerce", name: "QuickBooks Commerce", logoSrc: INVENTORY_LOGOS.quickbooksCommerce, rating: "4.2", bestFor: "QuickBooks users", description: "Inventory and orders tied to QuickBooks.", reviewHref: getInventoryReviewUrl("quickbooks-commerce"), startingPrice: "Quote", standoutFeature: "QuickBooks native" },
  { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, rating: "4.4", bestFor: "higher-volume ecommerce", description: "Scalable multi-channel and warehouse.", reviewHref: getInventoryReviewUrl("finale-inventory"), startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce; warehouse" },
];

const inflowPage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best inFlow Inventory Alternatives (2026)",
  subtitle: "If inFlow Inventory isn't the right fit—because of integrations, scale, or accounting—these inventory management alternatives offer strong options for small businesses.",
  productName: "inFlow Inventory",
  productSlug: "inflow-inventory",
  originalReviewHref: getInventoryReviewUrl("inflow-inventory"),
  quickAnswerParagraphs: [
    "inFlow Inventory is a solid fit for SMB tracking; alternatives include Zoho Inventory for stronger integrations and a free tier, QuickBooks Commerce for QuickBooks-centric teams, and Finale Inventory for higher-volume ecommerce and warehouse operations. Zoho and QuickBooks Commerce are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "More integrations", body: "Zoho Inventory has a broader ecosystem and free tier. Better if you need deeper ecommerce or accounting connectors." },
    { heading: "QuickBooks alignment", body: "QuickBooks Commerce keeps inventory and accounting in one place for QuickBooks users." },
    { heading: "Scale and multi-channel", body: "Finale targets higher order volume and multi-channel sync with stronger warehouse features." },
  ],
  topAlternatives: INFLOW_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, bestFor: "small business tracking", startingPrice: "From ~$89/mo", standoutFeature: "SMB; simple", reviewHref: getInventoryReviewUrl("inflow-inventory") },
    INFLOW_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zoho Inventory", heading: "Best for overall SMB", body: "Zoho Inventory offers strong integrations and a free tier. For teams that want more ecosystem and lower entry cost.", reviewHref: getInventoryReviewUrl("zoho-inventory"), compareHref: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
    { productName: "QuickBooks Commerce", heading: "Best for QuickBooks users", body: "QuickBooks Commerce extends QuickBooks into inventory and orders. For accounting-first teams.", reviewHref: getInventoryReviewUrl("quickbooks-commerce") },
    { productName: "Finale Inventory", heading: "Best for higher-volume ecommerce", body: "Finale is built for ecommerce and warehouse operations with more scale and multi-channel sync.", reviewHref: getInventoryReviewUrl("finale-inventory") },
  ],
  relatedComparisons: [
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  ],
  relatedResources: defaultRelatedResources("inFlow Inventory", getInventoryReviewUrl("inflow-inventory")),
  faqItems: [
    { q: "What is the best inFlow Inventory alternative?", a: "Zoho Inventory for integrations and free tier; QuickBooks Commerce for QuickBooks users; Finale for higher-volume ecommerce. Choose by accounting and scale." },
    { q: "Is inFlow better than Zoho Inventory?", a: "inFlow is simpler and focused on SMB tracking; Zoho has a broader ecosystem and free tier. Compare integrations and pricing for your stack." },
    { q: "Which inventory software is cheaper than inFlow?", a: "Zoho Inventory has a free tier and lower entry cost for many teams. QuickBooks Commerce is quote-based; compare total cost for your size." },
  ],
};

// ——— QuickBooks Commerce alternatives ———
const QUICKBOOKS_COMMERCE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "overall SMB", description: "Standalone inventory with strong integrations and free tier.", reviewHref: getInventoryReviewUrl("zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Balance; integrations" },
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business tracking", description: "Straightforward SMB inventory without QuickBooks lock-in.", reviewHref: getInventoryReviewUrl("inflow-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB; simple" },
  { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, rating: "4.4", bestFor: "higher-volume ecommerce", description: "Multi-channel and warehouse for growing operations.", reviewHref: getInventoryReviewUrl("finale-inventory"), startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce; warehouse" },
];

const quickbooksCommercePage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best QuickBooks Commerce Alternatives (2026)",
  subtitle: "If QuickBooks Commerce isn't the right fit—because you're not on QuickBooks, need deeper inventory, or want more flexibility—these inventory management alternatives offer strong options.",
  productName: "QuickBooks Commerce",
  productSlug: "quickbooks-commerce",
  originalReviewHref: getInventoryReviewUrl("quickbooks-commerce"),
  quickAnswerParagraphs: [
    "QuickBooks Commerce fits businesses that run on QuickBooks; alternatives include Zoho Inventory for a standalone system with strong integrations and free tier, inFlow for straightforward SMB tracking, and Finale for higher-volume ecommerce and warehouse. Zoho and inFlow are the main alternatives for teams not committed to QuickBooks.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not on QuickBooks", body: "Zoho Inventory and inFlow are standalone and work with multiple accounting platforms. Better if you use Xero, other tools, or want to avoid vendor lock-in." },
    { heading: "Deeper inventory features", body: "Zoho and Finale offer more flexibility and depth for multi-channel and warehouse workflows." },
    { heading: "Lower or transparent cost", body: "Zoho has a free tier; inFlow has transparent subscription pricing. QuickBooks Commerce is often quote-based." },
  ],
  topAlternatives: QUICKBOOKS_COMMERCE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "quickbooks-commerce", name: "QuickBooks Commerce", logoSrc: INVENTORY_LOGOS.quickbooksCommerce, bestFor: "QuickBooks users", startingPrice: "Quote", standoutFeature: "QuickBooks native", reviewHref: getInventoryReviewUrl("quickbooks-commerce") },
    QUICKBOOKS_COMMERCE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zoho Inventory", heading: "Best for overall SMB", body: "Zoho Inventory is a standalone option with strong integrations and a free tier. For teams that want flexibility beyond QuickBooks.", reviewHref: getInventoryReviewUrl("zoho-inventory") },
    { productName: "inFlow Inventory", heading: "Best for small business tracking", body: "inFlow focuses on straightforward inventory and ordering for SMBs. Integrates with multiple accounting tools.", reviewHref: getInventoryReviewUrl("inflow-inventory") },
    { productName: "Finale Inventory", heading: "Best for higher-volume ecommerce", body: "Finale targets ecommerce and warehouse operations with more scale and multi-channel sync.", reviewHref: getInventoryReviewUrl("finale-inventory") },
  ],
  relatedComparisons: [
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  ],
  relatedResources: defaultRelatedResources("QuickBooks Commerce", getInventoryReviewUrl("quickbooks-commerce")),
  faqItems: [
    { q: "What is the best QuickBooks Commerce alternative?", a: "Zoho Inventory for standalone and free tier; inFlow for simple SMB tracking; Finale for higher-volume ecommerce. Choose by whether you need to stay in QuickBooks or not." },
    { q: "Can I use inventory software without QuickBooks?", a: "Yes. Zoho Inventory, inFlow, and Finale all work with or without QuickBooks and integrate with other accounting and ecommerce tools." },
    { q: "Is QuickBooks Commerce good for ecommerce?", a: "QuickBooks Commerce supports ecommerce and orders; for heavy multi-channel and warehouse complexity, Finale or dedicated platforms may offer more depth." },
  ],
};

// ——— Finale Inventory alternatives ———
const FINALE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "overall SMB", description: "Lower cost and simpler for smaller or single-channel operations.", reviewHref: getInventoryReviewUrl("zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Balance; integrations" },
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business tracking", description: "Straightforward SMB tracking at lower scale.", reviewHref: getInventoryReviewUrl("inflow-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB; simple" },
  { slug: "quickbooks-commerce", name: "QuickBooks Commerce", logoSrc: INVENTORY_LOGOS.quickbooksCommerce, rating: "4.2", bestFor: "QuickBooks users", description: "Tight accounting alignment when you run on QuickBooks.", reviewHref: getInventoryReviewUrl("quickbooks-commerce"), startingPrice: "Quote", standoutFeature: "QuickBooks native" },
];

const finalePage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best Finale Inventory Alternatives (2026)",
  subtitle: "If Finale Inventory isn't the right fit—because of scale, cost, or focus—these inventory management alternatives offer strong options for ecommerce and warehouse operations.",
  productName: "Finale Inventory",
  productSlug: "finale-inventory",
  originalReviewHref: getInventoryReviewUrl("finale-inventory"),
  quickAnswerParagraphs: [
    "Finale Inventory targets higher-volume ecommerce and warehouses; alternatives include Zoho Inventory for lower cost and SMB focus, inFlow for straightforward small business tracking, and QuickBooks Commerce for teams that prioritize QuickBooks alignment. Zoho and inFlow suit smaller or lower-volume operations.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Smaller scale or cost", body: "Zoho Inventory and inFlow are more affordable and simpler for lower order volume and single-channel or light multi-channel." },
    { heading: "Accounting-first", body: "QuickBooks Commerce keeps inventory and accounting in one place for QuickBooks-centric teams." },
    { heading: "Simpler implementation", body: "Finale is built for operations-heavy environments; Zoho and inFlow are easier to adopt for growing SMBs." },
  ],
  topAlternatives: FINALE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, bestFor: "higher-volume ecommerce", startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce; warehouse", reviewHref: getInventoryReviewUrl("finale-inventory") },
    FINALE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zoho Inventory", heading: "Best for overall SMB", body: "Zoho Inventory is more SMB-friendly with a free tier and lower cost. For teams that don't need Finale's scale.", reviewHref: getInventoryReviewUrl("zoho-inventory") },
    { productName: "inFlow Inventory", heading: "Best for small business tracking", body: "inFlow focuses on straightforward inventory and ordering. For lower volume and simpler workflows.", reviewHref: getInventoryReviewUrl("inflow-inventory") },
    { productName: "QuickBooks Commerce", heading: "Best for QuickBooks users", body: "QuickBooks Commerce extends QuickBooks into inventory and orders. For accounting alignment over operational depth.", reviewHref: getInventoryReviewUrl("quickbooks-commerce") },
  ],
  relatedComparisons: [
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  ],
  relatedResources: defaultRelatedResources("Finale Inventory", getInventoryReviewUrl("finale-inventory")),
  faqItems: [
    { q: "What is the best Finale Inventory alternative?", a: "Zoho Inventory for lower cost and SMB scale; inFlow for simple tracking; QuickBooks Commerce for QuickBooks users. Choose by scale and accounting stack." },
    { q: "Is Finale overkill for small business?", a: "For many small or low-volume sellers, yes. Zoho Inventory and inFlow are better fits for SMBs that don't need Finale's multi-channel and warehouse depth." },
    { q: "How does Finale compare to Zoho Inventory?", a: "Finale targets higher-order-volume and multi-channel ecommerce; Zoho is more SMB-focused with a free tier and broader ecosystem. Compare by order volume and channel count." },
  ],
};

const PAGES: Record<string, AlternativesTemplateProps> = {
  "zoho-inventory": zohoPage,
  "inflow-inventory": inflowPage,
  "quickbooks-commerce": quickbooksCommercePage,
  "finale-inventory": finalePage,
};

export function getInventoryAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getInventoryAlternativesSlugs(): string[] {
  return Object.keys(PAGES);
}
