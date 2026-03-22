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
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getInventoryComparison } from "@/lib/data/inventoryComparisons";
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

function invAltRel(slug: string) {
  return toAlternativesRelatedComparison(getInventoryCompareUrl(slug), getInventoryComparison(slug));
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
    invAltRel("zoho-inventory-vs-cin7"),
    invAltRel("inflow-inventory-vs-zoho-inventory"),
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
    invAltRel("inflow-inventory-vs-zoho-inventory"),
    invAltRel("zoho-inventory-vs-cin7"),
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
    invAltRel("zoho-inventory-vs-cin7"),
    invAltRel("inflow-inventory-vs-zoho-inventory"),
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
    invAltRel("zoho-inventory-vs-cin7"),
    invAltRel("inflow-inventory-vs-zoho-inventory"),
  ],
  relatedResources: defaultRelatedResources("Finale Inventory", getInventoryReviewUrl("finale-inventory")),
  faqItems: [
    { q: "What is the best Finale Inventory alternative?", a: "Zoho Inventory for lower cost and SMB scale; inFlow for simple tracking; QuickBooks Commerce for QuickBooks users. Choose by scale and accounting stack." },
    { q: "Is Finale overkill for small business?", a: "For many small or low-volume sellers, yes. Zoho Inventory and inFlow are better fits for SMBs that don't need Finale's multi-channel and warehouse depth." },
    { q: "How does Finale compare to Zoho Inventory?", a: "Finale targets higher-order-volume and multi-channel ecommerce; Zoho is more SMB-focused with a free tier and broader ecosystem. Compare by order volume and channel count." },
  ],
};

// ——— Cin7 alternatives ———
const CIN7_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "overall SMB", description: "Lower cost and free tier; good for lighter multi-channel.", reviewHref: getInventoryReviewUrl("zoho-inventory"), compareHref: getInventoryCompareUrl("zoho-inventory-vs-cin7"), startingPrice: "Free tier", standoutFeature: "Balance; value" },
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business", description: "Straightforward SMB tracking at much lower cost.", reviewHref: getInventoryReviewUrl("inflow-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB; simple" },
  { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, rating: "4.4", bestFor: "ecommerce", description: "Ecommerce and warehouse focus; often lower cost than Cin7.", reviewHref: getInventoryReviewUrl("finale-inventory"), startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce; warehouse" },
  { slug: "katana", name: "Katana", logoSrc: INVENTORY_LOGOS.katana, rating: "4.5", bestFor: "manufacturing", description: "Manufacturing and production planning; different focus.", reviewHref: getInventoryReviewUrl("katana"), compareHref: getInventoryCompareUrl("cin7-vs-katana"), startingPrice: "From ~$129/mo", standoutFeature: "Manufacturing" },
];

const cin7Page: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best Cin7 Alternatives (2026)",
  subtitle: "If Cin7 isn't the right fit—because of cost, complexity, or focus—these inventory management alternatives offer strong options for multi-channel and SMB teams.",
  productName: "Cin7",
  productSlug: "cin7",
  originalReviewHref: getInventoryReviewUrl("cin7"),
  quickAnswerParagraphs: [
    "Cin7 is built for multi-channel operations; alternatives include Zoho Inventory for lower cost and free tier, inFlow for straightforward SMB tracking, Finale for ecommerce and warehouse at lower cost, and Katana for manufacturing focus. Zoho and inFlow are common alternatives when Cin7 is too much.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Cin7 starts at a higher price point. Zoho Inventory and inFlow offer similar core capabilities at much lower cost for smaller teams." },
    { heading: "Simpler needs", body: "Single-channel or light multi-channel teams often find Zoho, inFlow, or Sortly easier and cheaper." },
    { heading: "Manufacturing focus", body: "Katana is built for manufacturing and production planning; Cin7 is channel-centric." },
  ],
  topAlternatives: CIN7_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "cin7", name: "Cin7", logoSrc: INVENTORY_LOGOS.cin7, bestFor: "multi-channel", startingPrice: "From ~$349/mo", standoutFeature: "Multi-channel", reviewHref: getInventoryReviewUrl("cin7") },
    CIN7_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zoho Inventory", heading: "Best for value", body: "Zoho Inventory offers strong multi-channel and integrations at lower cost and a free tier.", reviewHref: getInventoryReviewUrl("zoho-inventory"), compareHref: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { productName: "inFlow Inventory", heading: "Best for SMB", body: "inFlow is straightforward inventory and ordering for small businesses at much lower cost.", reviewHref: getInventoryReviewUrl("inflow-inventory") },
    { productName: "Finale Inventory", heading: "Best for ecommerce", body: "Finale targets ecommerce and warehouse operations; often more affordable than Cin7.", reviewHref: getInventoryReviewUrl("finale-inventory") },
    { productName: "Katana", heading: "Best for manufacturing", body: "Katana is built for manufacturing and production; compare if your priority is production over channels.", reviewHref: getInventoryReviewUrl("katana"), compareHref: getInventoryCompareUrl("cin7-vs-katana") },
  ],
  relatedComparisons: [
    invAltRel("zoho-inventory-vs-cin7"),
    invAltRel("cin7-vs-katana"),
  ],
  relatedResources: defaultRelatedResources("Cin7", getInventoryReviewUrl("cin7")),
  faqItems: [
    { q: "What is the best Cin7 alternative?", a: "Zoho Inventory for value and free tier; inFlow for SMB tracking; Finale for ecommerce; Katana for manufacturing. Choose by budget and focus." },
    { q: "Is Cin7 too expensive for small business?", a: "For many small teams, yes. Zoho Inventory and inFlow offer strong alternatives at much lower cost. Cin7 fits when you have significant multi-channel volume." },
    { q: "Cin7 vs Zoho Inventory?", a: "Cin7 is built for heavier multi-channel and retail; Zoho is more SMB-friendly with a free tier. Compare by channel count and budget." },
  ],
};

// ——— Fishbowl alternatives ———
const FISHBOWL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "katana", name: "Katana", logoSrc: INVENTORY_LOGOS.katana, rating: "4.5", bestFor: "manufacturing", description: "Modern cloud manufacturing and production planning.", reviewHref: getInventoryReviewUrl("katana"), compareHref: getInventoryCompareUrl("fishbowl-vs-katana"), startingPrice: "From ~$129/mo", standoutFeature: "Manufacturing" },
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "SMB", description: "Full inventory with free tier; less warehouse-specific.", reviewHref: getInventoryReviewUrl("zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business", description: "Straightforward SMB inventory and ordering.", reviewHref: getInventoryReviewUrl("inflow-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB" },
  { slug: "unleashed", name: "Unleashed", logoSrc: INVENTORY_LOGOS.unleashed, rating: "4.4", bestFor: "inventory & manufacturing", description: "Strong inventory and manufacturing in one platform.", reviewHref: getInventoryReviewUrl("unleashed"), startingPrice: "Quote", standoutFeature: "Inventory; manufacturing" },
];

const fishbowlPage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best Fishbowl Alternatives (2026)",
  subtitle: "If Fishbowl isn't the right fit—because of deployment, cost, or features—these inventory and manufacturing alternatives offer strong options.",
  productName: "Fishbowl",
  productSlug: "fishbowl",
  originalReviewHref: getInventoryReviewUrl("fishbowl"),
  quickAnswerParagraphs: [
    "Fishbowl is strong for warehouses and manufacturing; alternatives include Katana for modern cloud manufacturing, Zoho Inventory for value and free tier, inFlow for SMB tracking, and Unleashed for inventory and manufacturing. Katana and Zoho are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cloud and simplicity", body: "Katana and Zoho offer modern cloud apps; Fishbowl has desktop roots. Teams often compare for deployment and ease of use." },
    { heading: "Cost", body: "Zoho and inFlow are typically more affordable. Fishbowl is quote-based; compare total cost." },
    { heading: "Manufacturing focus", body: "Katana and Unleashed are strong manufacturing alternatives with different strengths." },
  ],
  topAlternatives: FISHBOWL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "fishbowl", name: "Fishbowl", logoSrc: INVENTORY_LOGOS.fishbowl, bestFor: "warehouse & manufacturing", startingPrice: "Quote", standoutFeature: "Warehouse; manufacturing", reviewHref: getInventoryReviewUrl("fishbowl") },
    FISHBOWL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Katana", heading: "Best for manufacturing", body: "Katana is modern cloud manufacturing and production planning. Compare for manufacturing depth.", reviewHref: getInventoryReviewUrl("katana"), compareHref: getInventoryCompareUrl("fishbowl-vs-katana") },
    { productName: "Zoho Inventory", heading: "Best for value", body: "Zoho Inventory offers full inventory with a free tier; less warehouse-specific than Fishbowl.", reviewHref: getInventoryReviewUrl("zoho-inventory") },
    { productName: "inFlow Inventory", heading: "Best for SMB", body: "inFlow is straightforward inventory for small businesses.", reviewHref: getInventoryReviewUrl("inflow-inventory") },
    { productName: "Unleashed", heading: "Best for inventory and manufacturing", body: "Unleashed combines inventory and manufacturing in one platform.", reviewHref: getInventoryReviewUrl("unleashed") },
  ],
  relatedComparisons: [
    invAltRel("fishbowl-vs-katana"),
    invAltRel("zoho-inventory-vs-cin7"),
  ],
  relatedResources: defaultRelatedResources("Fishbowl", getInventoryReviewUrl("fishbowl")),
  faqItems: [
    { q: "What is the best Fishbowl alternative?", a: "Katana for cloud manufacturing; Zoho for value; inFlow for SMB; Unleashed for inventory and manufacturing. Choose by deployment and focus." },
    { q: "Is Fishbowl cloud-based?", a: "Fishbowl has desktop and cloud options. Katana and Zoho are cloud-native. Compare by your deployment preference." },
    { q: "Fishbowl vs Katana?", a: "Both serve manufacturing and warehouse. Katana is modern cloud and production-focused; Fishbowl has strong warehouse roots. Compare features and pricing." },
  ],
};

// ——— Katana alternatives ———
const KATANA_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "cin7", name: "Cin7", logoSrc: INVENTORY_LOGOS.cin7, rating: "4.5", bestFor: "multi-channel", description: "Multi-channel inventory and orders; different focus.", reviewHref: getInventoryReviewUrl("cin7"), compareHref: getInventoryCompareUrl("cin7-vs-katana"), startingPrice: "From ~$349/mo", standoutFeature: "Multi-channel" },
  { slug: "unleashed", name: "Unleashed", logoSrc: INVENTORY_LOGOS.unleashed, rating: "4.4", bestFor: "inventory & manufacturing", description: "Strong inventory and manufacturing combined.", reviewHref: getInventoryReviewUrl("unleashed"), startingPrice: "Quote", standoutFeature: "Inventory; manufacturing" },
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "SMB", description: "Full inventory at lower cost; lighter manufacturing.", reviewHref: getInventoryReviewUrl("zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "fishbowl", name: "Fishbowl", logoSrc: INVENTORY_LOGOS.fishbowl, rating: "4.3", bestFor: "warehouse", description: "Warehouse and manufacturing; different deployment.", reviewHref: getInventoryReviewUrl("fishbowl"), compareHref: getInventoryCompareUrl("fishbowl-vs-katana"), startingPrice: "Quote", standoutFeature: "Warehouse" },
];

const katanaPage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best Katana Alternatives (2026)",
  subtitle: "If Katana isn't the right fit—because of focus, cost, or deployment—these manufacturing and inventory alternatives offer strong options.",
  productName: "Katana",
  productSlug: "katana",
  originalReviewHref: getInventoryReviewUrl("katana"),
  quickAnswerParagraphs: [
    "Katana is our top pick for manufacturing inventory; alternatives include Cin7 for multi-channel focus, Unleashed for inventory and manufacturing, Zoho Inventory for value and lighter needs, and Fishbowl for warehouse and manufacturing. Cin7 and Unleashed are common alternatives when manufacturing isn't the main driver.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Multi-channel over manufacturing", body: "Cin7 is built for multi-channel sales; Katana is manufacturing-first. Choose by primary need." },
    { heading: "Cost or simplicity", body: "Zoho Inventory offers full inventory at lower cost with lighter manufacturing features." },
    { heading: "Different manufacturing stack", body: "Unleashed and Fishbowl are strong manufacturing alternatives with different strengths." },
  ],
  topAlternatives: KATANA_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "katana", name: "Katana", logoSrc: INVENTORY_LOGOS.katana, bestFor: "manufacturing", startingPrice: "From ~$129/mo", standoutFeature: "Manufacturing", reviewHref: getInventoryReviewUrl("katana") },
    KATANA_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Cin7", heading: "Best for multi-channel", body: "Cin7 is built for multi-channel inventory and orders; compare if channels matter more than production.", reviewHref: getInventoryReviewUrl("cin7"), compareHref: getInventoryCompareUrl("cin7-vs-katana") },
    { productName: "Unleashed", heading: "Best for inventory and manufacturing", body: "Unleashed combines inventory and manufacturing in one platform.", reviewHref: getInventoryReviewUrl("unleashed") },
    { productName: "Zoho Inventory", heading: "Best for value", body: "Zoho Inventory offers full inventory at lower cost; manufacturing features are lighter than Katana.", reviewHref: getInventoryReviewUrl("zoho-inventory") },
    { productName: "Fishbowl", heading: "Best for warehouse", body: "Fishbowl is strong for warehouse and manufacturing; compare deployment and features.", reviewHref: getInventoryReviewUrl("fishbowl"), compareHref: getInventoryCompareUrl("fishbowl-vs-katana") },
  ],
  relatedComparisons: [
    invAltRel("cin7-vs-katana"),
    invAltRel("fishbowl-vs-katana"),
  ],
  relatedResources: defaultRelatedResources("Katana", getInventoryReviewUrl("katana")),
  faqItems: [
    { q: "What is the best Katana alternative?", a: "Cin7 for multi-channel; Unleashed for inventory and manufacturing; Zoho for value; Fishbowl for warehouse. Choose by primary focus." },
    { q: "Is Katana only for manufacturing?", a: "Katana is built for manufacturing and production planning. For buy-and-resell or multi-channel without production, Cin7 or Zoho may fit better." },
    { q: "Katana vs Cin7?", a: "Katana is manufacturing-first; Cin7 is multi-channel and order management. Choose by whether production or channels drive your operations." },
  ],
};

// ——— Sortly alternatives ———
const SORTLY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business", description: "Deeper purchasing and sales; still SMB-friendly.", reviewHref: getInventoryReviewUrl("inflow-inventory"), compareHref: getInventoryCompareUrl("sortly-vs-inflow-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB; orders" },
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "overall SMB", description: "Full inventory with free tier.", reviewHref: getInventoryReviewUrl("zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, rating: "4.4", bestFor: "ecommerce", description: "Ecommerce and warehouse as you grow.", reviewHref: getInventoryReviewUrl("finale-inventory"), startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce" },
  { slug: "quickbooks-commerce", name: "QuickBooks Commerce", logoSrc: INVENTORY_LOGOS.quickbooksCommerce, rating: "4.2", bestFor: "QuickBooks users", description: "Inventory tied to QuickBooks.", reviewHref: getInventoryReviewUrl("quickbooks-commerce"), startingPrice: "Quote", standoutFeature: "QuickBooks" },
];

const sortlyPage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best Sortly Alternatives (2026)",
  subtitle: "If Sortly isn't the right fit—because you need more ordering, reporting, or scale—these inventory management alternatives offer strong options.",
  productName: "Sortly",
  productSlug: "sortly",
  originalReviewHref: getInventoryReviewUrl("sortly"),
  quickAnswerParagraphs: [
    "Sortly is best for simple visual tracking; alternatives include inFlow Inventory for fuller purchasing and sales, Zoho Inventory for full inventory and free tier, Finale for ecommerce growth, and QuickBooks Commerce for QuickBooks users. inFlow and Zoho are common alternatives when you need more than tracking.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "More ordering and workflows", body: "inFlow and Zoho add purchase orders, sales orders, and deeper workflows. Sortly is tracking-focused." },
    { heading: "Free tier", body: "Zoho Inventory has a free tier; Sortly starts paid. Compare cost for your team size." },
    { heading: "Ecommerce or scale", body: "Finale and Cin7 support higher-volume and multi-channel; Sortly stays simple." },
  ],
  topAlternatives: SORTLY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "sortly", name: "Sortly", logoSrc: INVENTORY_LOGOS.sortly, bestFor: "simple tracking", startingPrice: "From ~$39/mo", standoutFeature: "Visual; simple", reviewHref: getInventoryReviewUrl("sortly") },
    SORTLY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "inFlow Inventory", heading: "Best for small business", body: "inFlow adds purchase and sales orders while staying SMB-friendly. Compare when you need more than tracking.", reviewHref: getInventoryReviewUrl("inflow-inventory"), compareHref: getInventoryCompareUrl("sortly-vs-inflow-inventory") },
    { productName: "Zoho Inventory", heading: "Best for value", body: "Zoho Inventory offers full inventory with a free tier and strong integrations.", reviewHref: getInventoryReviewUrl("zoho-inventory") },
    { productName: "Finale Inventory", heading: "Best for ecommerce", body: "Finale is built for ecommerce and warehouse as you grow beyond simple tracking.", reviewHref: getInventoryReviewUrl("finale-inventory") },
    { productName: "QuickBooks Commerce", heading: "Best for QuickBooks users", body: "QuickBooks Commerce extends QuickBooks into inventory and orders.", reviewHref: getInventoryReviewUrl("quickbooks-commerce") },
  ],
  relatedComparisons: [
    invAltRel("sortly-vs-inflow-inventory"),
    invAltRel("inflow-inventory-vs-zoho-inventory"),
  ],
  relatedResources: defaultRelatedResources("Sortly", getInventoryReviewUrl("sortly")),
  faqItems: [
    { q: "What is the best Sortly alternative?", a: "inFlow for fuller SMB inventory; Zoho for value and free tier; Finale for ecommerce; QuickBooks Commerce for QuickBooks. Choose by need for orders vs tracking." },
    { q: "Does Sortly do purchase orders?", a: "Sortly focuses on tracking and visual catalog. inFlow and Zoho add purchase orders, sales orders, and reordering." },
    { q: "Sortly vs inFlow?", a: "Sortly is simpler and more visual; inFlow adds purchasing and sales workflows. Many teams outgrow Sortly and move to inFlow or Zoho." },
  ],
};

// ——— Unleashed alternatives ———
const UNLEASHED_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "katana", name: "Katana", logoSrc: INVENTORY_LOGOS.katana, rating: "4.5", bestFor: "manufacturing", description: "Modern cloud manufacturing and production.", reviewHref: getInventoryReviewUrl("katana"), startingPrice: "From ~$129/mo", standoutFeature: "Manufacturing" },
  { slug: "cin7", name: "Cin7", logoSrc: INVENTORY_LOGOS.cin7, rating: "4.5", bestFor: "multi-channel", description: "Multi-channel inventory and orders.", reviewHref: getInventoryReviewUrl("cin7"), startingPrice: "From ~$349/mo", standoutFeature: "Multi-channel" },
  { slug: "zoho-inventory", name: "Zoho Inventory", logoSrc: INVENTORY_LOGOS.zoho, rating: "4.6", bestFor: "SMB", description: "Full inventory at lower cost; free tier.", reviewHref: getInventoryReviewUrl("zoho-inventory"), startingPrice: "Free tier", standoutFeature: "Value" },
  { slug: "inflow-inventory", name: "inFlow Inventory", logoSrc: INVENTORY_LOGOS.inflow, rating: "4.4", bestFor: "small business", description: "Straightforward SMB inventory.", reviewHref: getInventoryReviewUrl("inflow-inventory"), startingPrice: "From ~$89/mo", standoutFeature: "SMB" },
  { slug: "finale-inventory", name: "Finale Inventory", logoSrc: INVENTORY_LOGOS.finale, rating: "4.4", bestFor: "ecommerce", description: "Ecommerce and warehouse focus.", reviewHref: getInventoryReviewUrl("finale-inventory"), startingPrice: "From ~$99/mo", standoutFeature: "Ecommerce" },
];

const unleashedPage: AlternativesTemplateProps = {
  ...zohoPage,
  title: "Best Unleashed Alternatives (2026)",
  subtitle: "If Unleashed isn't the right fit—because of cost, focus, or deployment—these inventory and manufacturing alternatives offer strong options.",
  productName: "Unleashed",
  productSlug: "unleashed",
  originalReviewHref: getInventoryReviewUrl("unleashed"),
  quickAnswerParagraphs: [
    "Unleashed combines inventory and manufacturing; alternatives include Katana for modern cloud manufacturing, Cin7 for multi-channel focus, Zoho Inventory for value and free tier, inFlow for SMB tracking, and Finale for ecommerce. Katana and Cin7 are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Modern cloud", body: "Katana is built as a modern cloud manufacturing app; compare for UX and deployment." },
    { heading: "Multi-channel", body: "Cin7 is built for multi-channel sales; Unleashed is strong on inventory and manufacturing." },
    { heading: "Cost", body: "Zoho and inFlow are typically more affordable for SMBs; Unleashed is quote-based." },
  ],
  topAlternatives: UNLEASHED_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "unleashed", name: "Unleashed", logoSrc: INVENTORY_LOGOS.unleashed, bestFor: "inventory & manufacturing", startingPrice: "Quote", standoutFeature: "Inventory; manufacturing", reviewHref: getInventoryReviewUrl("unleashed") },
    UNLEASHED_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Katana", heading: "Best for manufacturing", body: "Katana is modern cloud manufacturing and production planning.", reviewHref: getInventoryReviewUrl("katana") },
    { productName: "Cin7", heading: "Best for multi-channel", body: "Cin7 is built for multi-channel inventory and orders.", reviewHref: getInventoryReviewUrl("cin7") },
    { productName: "Zoho Inventory", heading: "Best for value", body: "Zoho Inventory offers full inventory at lower cost with a free tier.", reviewHref: getInventoryReviewUrl("zoho-inventory") },
    { productName: "inFlow Inventory", heading: "Best for SMB", body: "inFlow is straightforward inventory for small businesses.", reviewHref: getInventoryReviewUrl("inflow-inventory") },
    { productName: "Finale Inventory", heading: "Best for ecommerce", body: "Finale targets ecommerce and warehouse operations.", reviewHref: getInventoryReviewUrl("finale-inventory") },
  ],
  relatedComparisons: [
    invAltRel("zoho-inventory-vs-cin7"),
    invAltRel("cin7-vs-katana"),
  ],
  relatedResources: defaultRelatedResources("Unleashed", getInventoryReviewUrl("unleashed")),
  faqItems: [
    { q: "What is the best Unleashed alternative?", a: "Katana for cloud manufacturing; Cin7 for multi-channel; Zoho for value; inFlow for SMB. Choose by manufacturing vs channel focus." },
    { q: "Unleashed vs Katana?", a: "Both combine inventory and manufacturing. Katana is modern cloud and production-focused; Unleashed has strong inventory and costing. Compare features and pricing." },
    { q: "Is Unleashed good for small business?", a: "Unleashed can suit SMBs but is often quote-based. Zoho and inFlow are more affordable for smaller teams; compare total cost." },
  ],
};

const PAGES: Record<string, AlternativesTemplateProps> = {
  "zoho-inventory": zohoPage,
  "inflow-inventory": inflowPage,
  "quickbooks-commerce": quickbooksCommercePage,
  "finale-inventory": finalePage,
  cin7: cin7Page,
  fishbowl: fishbowlPage,
  katana: katanaPage,
  sortly: sortlyPage,
  unleashed: unleashedPage,
};

export function getInventoryAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getInventoryAlternativesSlugs(): string[] {
  return Object.keys(PAGES);
}
