import { getInvoicingReviewUrl, getInvoicingBestForUrl, getInvoicingCompareUrl } from "@/lib/routes";

export type BestInvoicingPick = {
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

/** Row for comparison table (logoSrc optional for tools without logo asset). */
export type ComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc?: string;
  bestFor: string;
  startingPrice: string;
  standoutFeature: string;
  reviewHref: string;
};

export const TOP_PICKS: BestInvoicingPick[] = [
  {
    slug: "freshbooks",
    name: "FreshBooks",
    badge: "Best overall",
    description:
      "Invoicing, time tracking, and expense management built for freelancers and service businesses. Professional invoices and recurring billing.",
    rating: "4.5",
    startingPrice: "$19/mo",
    reviewHref: getInvoicingReviewUrl("freshbooks"),
    visitUrl: "https://www.freshbooks.com",
    logoSrc: "/Logos/freshbooks.jpeg",
    compareSlugs: ["freshbooks-vs-quickbooks", "freshbooks-vs-wave", "zoho-invoice-vs-freshbooks"],
    standoutFeature: "Invoicing, time tracking, client billing",
    editorialParagraph:
      "FreshBooks is our top pick for most freelancers and service-based businesses. It combines professional invoicing, recurring billing, time tracking, and payment collection in an easy-to-use package. Client portals and estimates round out the workflow. If you want to get paid faster and look professional without spreadsheets, FreshBooks is the default choice.",
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    badge: "Best for QuickBooks users",
    description:
      "Invoicing inside QuickBooks for businesses already on the platform. Books and invoices stay in one place.",
    rating: "4.6",
    startingPrice: "$30/mo",
    reviewHref: getInvoicingReviewUrl("quickbooks"),
    visitUrl: "https://quickbooks.intuit.com",
    logoSrc: "/Logos/quickbooks.png",
    compareSlugs: ["freshbooks-vs-quickbooks", "quickbooks-vs-wave", "xero-vs-quickbooks"],
    standoutFeature: "Native QuickBooks integration; books and invoices in one place",
    editorialParagraph:
      "QuickBooks is the obvious fit when you already run your books in QuickBooks. Invoicing, payment links, and estimates are built in, and paid invoices flow straight into your accounts. No sync or export. If you're not on QuickBooks, a dedicated invoicing tool like FreshBooks or Wave may be simpler and cheaper.",
  },
  {
    slug: "wave",
    name: "Wave",
    badge: "Best free invoicing software",
    description:
      "Free invoicing and receipt scanning with no monthly fee. Ideal for freelancers and very small businesses.",
    rating: "4.3",
    startingPrice: "Free",
    reviewHref: getInvoicingReviewUrl("wave"),
    visitUrl: "https://www.waveapps.com",
    logoSrc: "/Logos/wave.jpeg",
    compareSlugs: ["freshbooks-vs-wave", "quickbooks-vs-wave"],
    standoutFeature: "Free core invoicing and receipt scan",
    editorialParagraph:
      "Wave is the best free invoicing option. You get professional invoices, payment tracking, and receipt scanning without a subscription; Wave makes money on payment processing. It's a good way to start or run a very small business on a tight budget. For more features or client workflows, paid options like FreshBooks or Zoho Invoice are worth considering.",
  },
  {
    slug: "zoho-invoice",
    name: "Zoho Invoice",
    badge: "Best value",
    description:
      "Affordable invoicing with projects, client portal, and automation. Good fit for value-focused teams.",
    rating: "4.4",
    startingPrice: "Free tier",
    reviewHref: getInvoicingReviewUrl("zoho-invoice"),
    visitUrl: "https://www.zoho.com/invoice",
    logoSrc: "/Logos/zoho.jpeg",
    compareSlugs: ["zoho-invoice-vs-freshbooks", "zoho-invoice-vs-quickbooks"],
    standoutFeature: "Automation, client portal, value pricing",
    editorialParagraph:
      "Zoho Invoice delivers strong value: good automation, project and client tracking, and a client portal at a lower price than FreshBooks or QuickBooks. It's especially compelling if you already use other Zoho apps. The free tier is generous for light use; paid plans add more invoices and features.",
  },
  {
    slug: "xero",
    name: "Xero",
    badge: "Best for businesses needing accounting + invoicing",
    description:
      "Cloud invoicing and quoting with full accounting. Strong for growing teams that want one platform.",
    rating: "4.5",
    startingPrice: "$15/mo",
    reviewHref: getInvoicingReviewUrl("xero"),
    visitUrl: "https://www.xero.com",
    logoSrc: "/Logos/xero.png",
    compareSlugs: ["xero-vs-quickbooks", "xero-vs-freshbooks"],
    standoutFeature: "Invoicing plus full accounting, 700+ integrations",
    editorialParagraph:
      "Xero is the pick when you want invoicing and full accounting in one place. Invoices, quotes, and payments tie into the same books and reports. The interface is clean and the app marketplace is large. If you need more than just invoicing—bank feeds, reporting, multi-currency—Xero is a strong choice. For invoicing-only, FreshBooks or Wave can be simpler.",
  },
];

export const COMPARISON_TABLE_ROWS: ComparisonTableRow[] = [
  {
    slug: "freshbooks",
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    bestFor: "Best overall",
    startingPrice: "$19/mo",
    standoutFeature: "Invoicing, time tracking, ease of use",
    reviewHref: getInvoicingReviewUrl("freshbooks"),
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    logoSrc: "/Logos/quickbooks.png",
    bestFor: "QuickBooks ecosystem",
    startingPrice: "$30/mo",
    standoutFeature: "Books and invoices in one place",
    reviewHref: getInvoicingReviewUrl("quickbooks"),
  },
  {
    slug: "wave",
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    bestFor: "Best free",
    startingPrice: "Free",
    standoutFeature: "Free core invoicing",
    reviewHref: getInvoicingReviewUrl("wave"),
  },
  {
    slug: "zoho-invoice",
    name: "Zoho Invoice",
    logoSrc: "/Logos/zoho.jpeg",
    bestFor: "Best value",
    startingPrice: "Free tier",
    standoutFeature: "Automation, client portal",
    reviewHref: getInvoicingReviewUrl("zoho-invoice"),
  },
  {
    slug: "xero",
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    bestFor: "Accounting + invoicing",
    startingPrice: "$15/mo",
    standoutFeature: "Full accounting, integrations",
    reviewHref: getInvoicingReviewUrl("xero"),
  },
  {
    slug: "invoice-ninja",
    name: "Invoice Ninja",
    bestFor: "Open-source / self-hosted",
    startingPrice: "Free / paid",
    standoutFeature: "Self-hosted option, open source",
    reviewHref: getInvoicingReviewUrl("invoice-ninja"),
  },
  {
    slug: "honeybook",
    name: "HoneyBook",
    bestFor: "Service businesses / client workflows",
    startingPrice: "Quote",
    standoutFeature: "Client management, proposals",
    reviewHref: getInvoicingReviewUrl("honeybook"),
  },
  {
    slug: "bonsai",
    name: "Bonsai",
    bestFor: "Freelancers / creative businesses",
    startingPrice: "Quote",
    standoutFeature: "Contracts, proposals, invoicing",
    reviewHref: getInvoicingReviewUrl("bonsai"),
  },
];

export const MORE_INVOICING_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc?: string;
}[] = [
  {
    slug: "invoice-ninja",
    name: "Invoice Ninja",
    description: "Open-source invoicing with optional self-hosting. Strong for teams that want control and no vendor lock-in.",
    reviewHref: getInvoicingReviewUrl("invoice-ninja"),
    logoSrc: "/Logos/invoiceninja.jpeg",
  },
  {
    slug: "honeybook",
    name: "HoneyBook",
    description: "Client workflows, proposals, and invoicing for creative and service professionals. Good for client-heavy businesses.",
    reviewHref: getInvoicingReviewUrl("honeybook"),
    logoSrc: "/Logos/honeybook.jpeg",
  },
  {
    slug: "bonsai",
    name: "Bonsai",
    description: "Contracts, proposals, and invoicing in one place. Built for freelancers and small creative businesses.",
    reviewHref: getInvoicingReviewUrl("bonsai"),
    logoSrc: "/Logos/bonsai.jpeg",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best for freelancers", href: getInvoicingBestForUrl("freelancers"), description: "Invoicing that fits solo pros and project-based billing." },
  { label: "Best for small business", href: getInvoicingBestForUrl("small-business"), description: "Top options for small teams and service businesses." },
  { label: "Best for agencies", href: getInvoicingBestForUrl("agencies"), description: "Invoicing, retainer billing, and client portals." },
  { label: "Best for contractors", href: getInvoicingBestForUrl("contractors"), description: "Job-based invoicing and payment tracking." },
  { label: "Best for consultants", href: getInvoicingBestForUrl("consultants"), description: "Professional invoices and time-based billing." },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
  { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
  { label: "QuickBooks vs Wave", href: getInvoicingCompareUrl("quickbooks-vs-wave") },
  { label: "Zoho Invoice vs FreshBooks", href: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks") },
  { label: "Xero vs QuickBooks", href: getInvoicingCompareUrl("xero-vs-quickbooks") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best invoicing software for small businesses?",
    a: "FreshBooks is our top pick for most small businesses and freelancers: it combines professional invoicing, recurring billing, time tracking, and payment collection in one place. QuickBooks fits businesses already on the platform; Wave is the best free option. Zoho Invoice offers strong value.",
  },
  {
    q: "What is the best free invoicing software?",
    a: "Wave offers free invoicing and receipt scanning with no subscription. Zoho Invoice has a free tier for a limited number of invoices. Both are suitable for freelancers and very small teams; paid plans add more features and payment processing.",
  },
  {
    q: "Do freelancers need invoicing software?",
    a: "Yes. Invoicing software helps freelancers create professional invoices, track what's sent and paid, set up recurring billing for retainers, and accept online payments. It reduces admin work and keeps records in one place. FreshBooks and Wave are popular choices.",
  },
  {
    q: "What is the difference between invoicing software and accounting software?",
    a: "Invoicing software focuses on creating and sending invoices, tracking payments, and sometimes estimates and time tracking. Accounting software includes that plus full bookkeeping, P&L and balance sheet reports, bank feeds, and tax prep. Many accounting products (e.g. QuickBooks, Xero) include strong invoicing; standalone invoicing tools are lighter and often cheaper. See our invoicing software vs accounting software guide.",
  },
  {
    q: "Can invoicing software accept online payments?",
    a: "Yes. Most invoicing tools let you accept card and ACH payments via payment links or embedded buttons. Some use built-in payment processing; others integrate with Stripe, PayPal, or similar. Compare fees and supported methods when choosing.",
  },
];
