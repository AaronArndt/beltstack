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

export const AGENCIES_PAGE_PROPS = {
  title: "Best Accounting Software for Agencies (2026)",
  subtitle:
    "Compare accounting software built for agencies: invoicing, project billing, time tracking, client retainers, and reporting that fits service-based teams.",
  useCase: "agencies",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Agencies need software that supports client-based work: project and retainer billing, time tracking, and clear visibility into profitability by client or project. Our picks below combine strong invoicing with reporting and ease of use so your team can focus on delivery instead of spreadsheets.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top accounting picks for agencies.",
  editorialSub: "What to look for when you're choosing accounting software for an agency.",
  whyThesePicksSub: "Why we chose these tools for agencies.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best for service agencies",
      description:
        "Invoicing, time tracking, and client billing built for service businesses. Retainers, project billing, and a simple interface that agencies can run without a dedicated bookkeeper.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      badge: "Best overall",
      description:
        "Full accounting with project tracking, invoicing, and reporting. Scales as you add team members and clients and need deeper bookkeeping and accountant collaboration.",
      rating: "4.7",
      startingPrice: "$20/mo",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "xero",
      name: "Xero",
      badge: "Best for accountants and reporting",
      description:
        "Clean accounting with strong reporting and accountant-friendly workflows. Good for agencies that work with an external accountant or need polished financials.",
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
        "Affordable accounting with project and client tracking, automation, and client portal. Good value for agencies that want solid features without premium pricing.",
      rating: "4.4",
      startingPrice: "$15/mo",
      reviewHref: getAccountingReviewUrl("zoho-books"),
      visitUrl: "https://www.zoho.com/books/",
      logoSrc: "/Logos/zoho.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      logoSrc: "/Logos/freshbooks.jpeg",
      bestFor: "Best for service agencies",
      startingPrice: "$19/mo",
      standoutFeature: "Invoicing, time tracking, retainers",
      reviewHref: getAccountingReviewUrl("freshbooks"),
    },
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Best overall",
      startingPrice: "$20/mo",
      standoutFeature: "Project tracking, reporting, ecosystem",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
    },
    {
      slug: "xero",
      name: "Xero",
      logoSrc: "/Logos/xero.png",
      bestFor: "Best for accountants and reporting",
      startingPrice: "$19/mo",
      standoutFeature: "Reporting, accountant collaboration",
      reviewHref: getAccountingReviewUrl("xero"),
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      logoSrc: "/Logos/zoho.png",
      bestFor: "Best value",
      startingPrice: "$15/mo",
      standoutFeature: "Project tracking, automation, value",
      reviewHref: getAccountingReviewUrl("zoho-books"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Invoicing and project billing",
      body: "Agencies bill by project, retainer, or hour. Look for software that supports your billing model: recurring invoices, project-based billing, and time-based invoicing. FreshBooks and QuickBooks both handle these well; Xero and Zoho Books offer project and client tracking.",
    },
    {
      heading: "Time tracking",
      body: "Time tracking that ties to projects and invoices keeps billing accurate and helps you understand profitability. FreshBooks is built around this; QuickBooks, Xero, and Zoho Books include time tracking or integrate with dedicated tools.",
    },
    {
      heading: "Client retainers and reporting",
      body: "Retainer management (recurring revenue, draw-down against retainer) and reporting by client or project are important for agencies. Check that your chosen platform supports the reporting you need for internal and client-facing updates.",
    },
    {
      heading: "Ease of use and collaboration",
      body: "Agency teams often need multiple people to log time or manage invoices. Choose software that’s easy for your team to use and that your accountant can work with at year-end or for ongoing cleanup.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "FreshBooks",
      body: "FreshBooks is built for service businesses and agencies: strong invoicing, time tracking, and client billing in an approachable interface. It’s a natural fit for teams that bill by project or retainer.",
    },
    {
      heading: "QuickBooks Online",
      body: "QuickBooks Online adds full accounting and project tracking so agencies can scale. It’s the default for many firms and works well when you need deeper reporting and accountant collaboration.",
    },
    {
      heading: "Xero",
      body: "Xero appeals to agencies that want clean reporting and an accountant-friendly workflow. The interface is modern and the reporting is strong for client-based businesses.",
    },
    {
      heading: "Zoho Books",
      body: "Zoho Books delivers project and client tracking, automation, and a client portal at a lower price. It’s a solid value choice for agencies that don’t need the biggest names.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks") },
    { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online") },
    { name: "Xero", href: getAccountingReviewUrl("xero") },
    { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
    { label: "Xero vs Zoho Books", href: getAccountingCompareUrl("xero-vs-zoho-books") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best accounting software for agencies?",
      a: "FreshBooks is our top pick for service-focused agencies: invoicing, time tracking, and client billing. QuickBooks Online is best overall when you need full accounting and project tracking. Xero and Zoho Books are strong for reporting and value.",
    },
    {
      q: "Do agencies need time tracking in their accounting software?",
      a: "Time tracking that feeds into invoicing and project reporting is very useful for agencies. FreshBooks has it built in; QuickBooks, Xero, and Zoho Books offer it or integrate with dedicated time-tracking tools.",
    },
    {
      q: "How do I handle retainer billing in accounting software?",
      a: "Many platforms support recurring invoices and let you track retainer balance or draw-down. FreshBooks and QuickBooks both handle retainers; check that your chosen tool matches how you bill (e.g. monthly recurring vs. prepaid block).",
    },
  ] as BestForFaqItem[],
};
