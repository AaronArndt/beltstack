import { getAccountingReviewUrl, getAccountingBestForUrl, getAccountingCompareUrl } from "@/lib/routes";

export type BestAccountingPick = {
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
  standoutFeature: string;
  editorialParagraph: string;
};

/** Row for comparison table only (includes all 8 tools). */
export type ComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  standoutFeature: string;
  reviewHref: string;
};

export const TOP_PICKS: BestAccountingPick[] = [
  {
    slug: "quickbooks-online",
    name: "QuickBooks Online",
    badge: "Best overall",
    description:
      "Full accounting for small businesses: bookkeeping, invoicing, reporting, and a huge ecosystem. The default choice for many SMBs and their accountants.",
    rating: "4.7",
    startingPrice: "$20/mo",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
    visitUrl: "https://quickbooks.intuit.com",
    logoSrc: "/Logos/quickbooks.png",
    compareSlugs: ["quickbooks-online-vs-xero", "quickbooks-online-vs-freshbooks", "quickbooks-online-vs-zoho-books", "quickbooks-online-vs-wave"],
    standoutFeature: "Full bookkeeping, reporting, and ecosystem",
    editorialParagraph:
      "QuickBooks Online is our top pick for most small businesses that need full accounting. It covers invoicing, expense tracking, bank feeds, reporting, and tax prep in one place, and most accountants know it. It can feel heavy for very small or freelancer-only needs, but it scales well and integrates with almost everything.",
  },
  {
    slug: "xero",
    name: "Xero",
    badge: "Best QuickBooks alternative",
    description:
      "Strong accounting with a clean interface and accountant-friendly workflows. Good reporting and a large app marketplace.",
    rating: "4.6",
    startingPrice: "$19/mo",
    reviewHref: getAccountingReviewUrl("xero"),
    visitUrl: "https://www.xero.com",
    logoSrc: "/Logos/xero.png",
    compareSlugs: ["quickbooks-online-vs-xero", "xero-vs-freshbooks", "xero-vs-zoho-books"],
    standoutFeature: "Clean UI, reporting, accountant-friendly",
    editorialParagraph:
      "Xero is the go-to QuickBooks alternative for many businesses. The interface is modern, reporting is strong, and the app marketplace gives you flexibility for ecommerce, inventory, and industry-specific tools. It's a solid choice if you want full accounting without the QuickBooks brand.",
  },
  {
    slug: "freshbooks",
    name: "FreshBooks",
    badge: "Best for freelancers and service businesses",
    description:
      "Invoicing-first accounting with time tracking and client billing. Built for solo pros and service businesses who want to get paid and stay organized.",
    rating: "4.5",
    startingPrice: "$19/mo",
    reviewHref: getAccountingReviewUrl("freshbooks"),
    visitUrl: "https://www.freshbooks.com",
    logoSrc: "/Logos/freshbooks.jpeg",
    compareSlugs: ["quickbooks-online-vs-freshbooks", "xero-vs-freshbooks"],
    standoutFeature: "Invoicing, time tracking, client billing",
    editorialParagraph:
      "FreshBooks is our top pick for freelancers and service-based businesses. It focuses on invoicing, time tracking, and client billing in an easy-to-use package. It's less suited to product businesses or complex inventory, but for consultants, agencies, and solo pros it's a strong fit.",
  },
  {
    slug: "zoho-books",
    name: "Zoho Books",
    badge: "Best value",
    description:
      "Affordable accounting with strong automation and client portal. Good fit for businesses that want solid features without premium pricing.",
    rating: "4.4",
    startingPrice: "$15/mo",
    reviewHref: getAccountingReviewUrl("zoho-books"),
    visitUrl: "https://www.zoho.com/books/",
    logoSrc: "/Logos/zoho.jpeg",
    compareSlugs: ["quickbooks-online-vs-zoho-books", "xero-vs-zoho-books"],
    standoutFeature: "Automation, client portal, value pricing",
    editorialParagraph:
      "Zoho Books delivers strong value: good automation, project and client tracking, and a client portal at a lower price than QuickBooks or Xero. It's especially compelling if you already use other Zoho apps. The feature set is competitive for small businesses that don't need the largest brand names.",
  },
  {
    slug: "wave",
    name: "Wave",
    badge: "Best free accounting software",
    description:
      "Free accounting and invoicing with no monthly fee. Ideal for very small businesses and freelancers who want to keep costs down.",
    rating: "4.3",
    startingPrice: "Free",
    reviewHref: getAccountingReviewUrl("wave"),
    visitUrl: "https://waveapps.com",
    logoSrc: "/Logos/wave.jpeg",
    compareSlugs: ["quickbooks-online-vs-wave", "wave-vs-freshbooks"],
    standoutFeature: "Free core accounting and invoicing",
    editorialParagraph:
      "Wave is the best free accounting option. You get real double-entry accounting and invoicing without a subscription; Wave makes money on payment processing and payroll add-ons. It's a good way to start or run a very small business on a tight budget. You may outgrow it as complexity increases.",
  },
];

/** All tools for comparison table (top 5 + more options). */
export const COMPARISON_TABLE_ROWS: ComparisonTableRow[] = [
  {
    slug: "quickbooks-online",
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    bestFor: "Best overall",
    startingPrice: "$20/mo",
    standoutFeature: "Full bookkeeping, reporting, ecosystem",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    slug: "xero",
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    bestFor: "Best QuickBooks alternative",
    startingPrice: "$19/mo",
    standoutFeature: "Clean UI, reporting, integrations",
    reviewHref: getAccountingReviewUrl("xero"),
  },
  {
    slug: "freshbooks",
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    bestFor: "Best for freelancers and service",
    startingPrice: "$19/mo",
    standoutFeature: "Invoicing, time tracking, ease of use",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
  {
    slug: "zoho-books",
    name: "Zoho Books",
    logoSrc: "/Logos/zoho.jpeg",
    bestFor: "Best value",
    startingPrice: "$15/mo",
    standoutFeature: "Automation, client portal, value",
    reviewHref: getAccountingReviewUrl("zoho-books"),
  },
  {
    slug: "wave",
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    bestFor: "Best free",
    startingPrice: "Free",
    standoutFeature: "Free core accounting and invoicing",
    reviewHref: getAccountingReviewUrl("wave"),
  },
  {
    slug: "sage-accounting",
    name: "Sage Accounting",
    logoSrc: "/Logos/sage.png",
    bestFor: "SMB accounting basics",
    startingPrice: "From $10/mo",
    standoutFeature: "Core bookkeeping, invoicing, familiarity",
    reviewHref: getAccountingReviewUrl("sage-accounting"),
  },
  {
    slug: "odoo-accounting",
    name: "Odoo Accounting",
    logoSrc: "/Logos/odoo.jpeg",
    bestFor: "Broader ERP workflows",
    startingPrice: "From $24/user/mo",
    standoutFeature: "Unified suite, inventory, ecommerce",
    reviewHref: getAccountingReviewUrl("odoo-accounting"),
  },
  {
    slug: "kashoo",
    name: "Kashoo",
    logoSrc: "/Logos/kashoo.jpeg",
    bestFor: "Simple bookkeeping",
    startingPrice: "From $20/mo",
    standoutFeature: "Straightforward books, ease of use",
    reviewHref: getAccountingReviewUrl("kashoo"),
  },
];

export const MORE_ACCOUNTING_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "sage-accounting",
    name: "Sage Accounting",
    description: "Core accounting and invoicing for small businesses. Solid basics and SMB familiarity.",
    reviewHref: getAccountingReviewUrl("sage-accounting"),
    logoSrc: "/Logos/sage.png",
  },
  {
    slug: "odoo-accounting",
    name: "Odoo Accounting",
    description: "Accounting as part of the Odoo suite. Best when you want ecommerce, inventory, and finance in one platform.",
    reviewHref: getAccountingReviewUrl("odoo-accounting"),
    logoSrc: "/Logos/odoo.jpeg",
  },
  {
    slug: "kashoo",
    name: "Kashoo",
    description: "Simple bookkeeping for small businesses. Straightforward setup and ease of use.",
    reviewHref: getAccountingReviewUrl("kashoo"),
    logoSrc: "/Logos/kashoo.jpeg",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best for freelancers", href: getAccountingBestForUrl("freelancers"), description: "Accounting that fits solo pros and invoicing-focused workflows." },
  { label: "Best for contractors", href: getAccountingBestForUrl("contractors"), description: "Job costing and project-based bookkeeping." },
  { label: "Best for small business", href: getAccountingBestForUrl("small-business"), description: "Top options for small teams and growing businesses." },
  { label: "Best for ecommerce", href: getAccountingBestForUrl("ecommerce"), description: "Inventory and sales channel integrations." },
  { label: "Best for agencies", href: getAccountingBestForUrl("agencies"), description: "Invoicing, project billing, and client retainers." },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
  { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
  { label: "QuickBooks Online vs Zoho Books", href: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
  { label: "QuickBooks Online vs Wave", href: getAccountingCompareUrl("quickbooks-online-vs-wave") },
  { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
  { label: "Xero vs Zoho Books", href: getAccountingCompareUrl("xero-vs-zoho-books") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best accounting software for small businesses?",
    a: "QuickBooks Online is our top pick for most small businesses: full bookkeeping, reporting, and a familiar ecosystem. Xero is a strong alternative with a cleaner interface. Wave is best if you want free software; FreshBooks and Zoho Books suit service businesses and value-focused teams.",
  },
  {
    q: "Is QuickBooks Online still the best accounting software?",
    a: "QuickBooks Online remains the default for many small businesses and accountants because of its breadth, integrations, and market share. It's not always the best fit—Xero, FreshBooks, Zoho Books, and Wave can be better depending on your size, budget, and workflow. See our QuickBooks alternatives guide to compare.",
  },
  {
    q: "What accounting software is best for freelancers?",
    a: "FreshBooks is our top pick for freelancers: invoicing, time tracking, and client billing in one place. Wave is the best free option. QuickBooks Online and Zoho Books work well for freelancers who need more reporting or better value. See our best accounting software for freelancers roundup for details.",
  },
  {
    q: "What is the best free accounting software?",
    a: "Wave offers free accounting and invoicing with no monthly fee. You pay for payment processing and payroll if you use them. It's a good choice for very small businesses and freelancers who want to minimize cost. For more features and support, paid options like QuickBooks Online or Zoho Books are worth considering.",
  },
  {
    q: "What is the difference between bookkeeping software and accounting software?",
    a: "In practice, the terms are often used interchangeably. Bookkeeping focuses on recording and organizing transactions; accounting adds analysis, reporting, and tax prep. Most modern 'accounting software' (QuickBooks, Xero, Wave) supports both. See our accounting vs bookkeeping guide for more.",
  },
];
