import { getAccountingReviewUrl, getAccountingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/accounting", label: "Accounting" };
const SEE_ALSO = {
  roundupLabel: "accounting software hub",
  roundupHref: "/accounting",
  compareLabel: "accounting software comparisons",
  compareHref: "/accounting/compare",
};

export const ECOMMERCE_PAGE_PROPS = {
  title: "Best Accounting Software for Ecommerce Businesses (2026)",
  subtitle:
    "Compare accounting software built for ecommerce: inventory, sales channel integrations, transaction volume, and reporting that keeps up with online sales.",
  useCase: "ecommerce",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Ecommerce businesses need accounting that connects to sales channels, handles inventory and COGS, and keeps reconciliation manageable as order volume grows. Our picks below support integrations with major platforms and reporting that works for product-based businesses.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top accounting picks for ecommerce businesses.",
  editorialSub: "What to look for when you're choosing accounting software for ecommerce.",
  whyThesePicksSub: "Why we chose these tools for ecommerce.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      badge: "Best overall for ecommerce",
      description:
        "Full accounting with inventory, ecommerce integrations (Shopify, Amazon, etc.), and reporting. Scales with multi-channel sales and higher transaction volume.",
      rating: "4.7",
      startingPrice: "$20/mo",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "xero",
      name: "Xero",
      badge: "Best for integrations",
      description:
        "Strong accounting with a large app marketplace. Connects to ecommerce platforms and inventory tools so sales and costs flow into your books automatically.",
      rating: "4.6",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("xero"),
      visitUrl: "https://www.xero.com",
      logoSrc: "/Logos/xero.png",
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      badge: "Best value",
      description:
        "Affordable accounting with inventory and ecommerce-friendly features. Good automation and reporting for growing product businesses on a budget.",
      rating: "4.4",
      startingPrice: "$15/mo",
      reviewHref: getAccountingReviewUrl("zoho-books"),
      visitUrl: "https://www.zoho.com/books/",
      logoSrc: "/Logos/zoho.png",
    },
    {
      slug: "odoo-accounting",
      name: "Odoo",
      badge: "Best for broader ERP workflows",
      description:
        "Accounting as part of the Odoo suite: inventory, sales, and operations in one system. Best when you want a single platform for ecommerce, orders, and finance.",
      rating: "4.2",
      startingPrice: "From $24/user/mo",
      reviewHref: getAccountingReviewUrl("odoo-accounting"),
      visitUrl: "https://www.odoo.com",
      logoSrc: "/Logos/odoo.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Best overall for ecommerce",
      startingPrice: "$20/mo",
      standoutFeature: "Inventory, ecommerce integrations, reporting",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
    },
    {
      slug: "xero",
      name: "Xero",
      logoSrc: "/Logos/xero.png",
      bestFor: "Best for integrations",
      startingPrice: "$19/mo",
      standoutFeature: "App marketplace, ecommerce connectors",
      reviewHref: getAccountingReviewUrl("xero"),
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      logoSrc: "/Logos/zoho.png",
      bestFor: "Best value",
      startingPrice: "$15/mo",
      standoutFeature: "Inventory, automation, value",
      reviewHref: getAccountingReviewUrl("zoho-books"),
    },
    {
      slug: "odoo-accounting",
      name: "Odoo",
      logoSrc: "/Logos/odoo.jpeg",
      bestFor: "Broader ERP workflows",
      startingPrice: "From $24/user/mo",
      standoutFeature: "Unified ecommerce, inventory, accounting",
      reviewHref: getAccountingReviewUrl("odoo-accounting"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Inventory and COGS",
      body: "Ecommerce accounting should track inventory levels and cost of goods sold so your P&L reflects true product margins. Look for software that integrates with your sales channels or supports inventory tracking and COGS allocation.",
    },
    {
      heading: "Ecommerce integrations",
      body: "Connectors to Shopify, Amazon, WooCommerce, or other platforms reduce manual data entry and keep sales and fees in sync. QuickBooks and Xero have broad integration options; Zoho and Odoo offer ecommerce-focused modules or apps.",
    },
    {
      heading: "Transaction volume and reconciliation",
      body: "High order volume can make bank reconciliation and categorization time-consuming. Choose a platform that can import or sync transactions at scale and supports rules or automation to keep books manageable.",
    },
    {
      heading: "Reporting",
      body: "Product businesses need clear views of revenue by channel, gross margin, and operating expenses. Check that your software delivers the reports you and your accountant actually use.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "QuickBooks Online",
      body: "QuickBooks Online is the default for many ecommerce businesses: strong inventory features, broad ecommerce integrations, and reporting that scales. It’s familiar to accountants and supports multi-channel sales well.",
    },
    {
      heading: "Xero",
      body: "Xero’s app marketplace gives ecommerce sellers flexibility to connect sales channels, inventory, and shipping. The core accounting is solid and the ecosystem keeps growing.",
    },
    {
      heading: "Zoho Books",
      body: "Zoho Books offers good inventory and automation at a lower price. It’s a strong value choice for product businesses that don’t need the largest brand names.",
    },
    {
      heading: "Odoo",
      body: "Odoo fits when you want ecommerce, orders, inventory, and accounting in one ERP-style system. Best for businesses ready to standardize on the Odoo platform.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online") },
    { name: "Xero", href: getAccountingReviewUrl("xero") },
    { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books") },
    { name: "Odoo", href: getAccountingReviewUrl("odoo-accounting") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { label: "QuickBooks Online vs Zoho Books", href: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
    { label: "Odoo vs QuickBooks Online", href: getAccountingCompareUrl("odoo-accounting-vs-quickbooks-online") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best accounting software for ecommerce?",
      a: "QuickBooks Online is our top pick for most ecommerce businesses: inventory, ecommerce integrations, and reporting. Xero is a strong alternative with a large app ecosystem. Zoho Books and Odoo suit value-focused or ERP-minded sellers.",
    },
    {
      q: "Do I need special accounting software for ecommerce?",
      a: "Product businesses benefit from software that handles inventory, COGS, and sales channel data. General accounting tools can work with manual entry, but integrations and inventory features save time and improve accuracy as you scale.",
    },
    {
      q: "How do ecommerce integrations work with accounting software?",
      a: "Apps or built-in connectors sync sales, fees, and sometimes inventory from your sales channels (e.g. Shopify, Amazon) into your accounting software. That reduces manual entry and keeps revenue and costs aligned.",
    },
  ] as BestForFaqItem[],
};
