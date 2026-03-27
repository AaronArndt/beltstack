import { getInvoicingReviewUrl, getInvoicingBestForUrl, getInvoicingCompareUrl } from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestInvoicingPick = SoftwarePickCardContent & {
  standoutFeature: string;
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
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.freshbooks.com",
    logoSrc: "/Logos/freshbooks.jpeg",
    compareSlugs: ["freshbooks-vs-quickbooks", "freshbooks-vs-wave", "zoho-invoice-vs-freshbooks"],
    standoutFeature: "Invoicing, time tracking, client billing",
    editorialParagraph:
      "FreshBooks is our top pick for most freelancers and service-based businesses. It combines professional invoicing, recurring billing, time tracking, and payment collection in an easy-to-use package. Client portals and estimates round out the workflow. If you want to get paid faster and look professional without spreadsheets, FreshBooks is the default choice.",
    pros: [
      "Professional invoicing, recurring billing, and payment collection",
      "Time tracking and client portals in one place",
      "Estimates and proposals that convert to invoices",
      "Easy to use; built for freelancers and service businesses",
    ],
    cons: [
      "Client and project limits on lower tiers",
      "Less suited to product or inventory-heavy businesses",
      "Reporting depth below full accounting tools",
    ],
    pricingSummary:
      "FreshBooks uses tiered plans starting around $19/month; pricing scales by client count and features. Check current plans on FreshBooks' site.",
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    badge: "Best for QuickBooks users",
    description:
      "Invoicing inside QuickBooks for businesses already on the platform. Books and invoices stay in one place.",
    rating: "4.6",
    startingPrice: "$30/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://quickbooks.intuit.com",
    logoSrc: "/Logos/quickbooks.png",
    compareSlugs: ["freshbooks-vs-quickbooks", "quickbooks-vs-wave", "xero-vs-quickbooks"],
    standoutFeature: "Native QuickBooks integration; books and invoices in one place",
    editorialParagraph:
      "QuickBooks is the obvious fit when you already run your books in QuickBooks. Invoicing, payment links, and estimates are built in, and paid invoices flow straight into your accounts. No sync or export. If you're not on QuickBooks, a dedicated invoicing tool like FreshBooks or Wave may be simpler and cheaper.",
    pros: [
      "Invoicing, payment links, and estimates built in",
      "Paid invoices flow straight into books; no sync",
      "Familiar if you already use QuickBooks",
      "Strong reporting and tax prep alongside invoicing",
    ],
    cons: [
      "Heavy and expensive if you only need invoicing",
      "Add-ons and higher tiers increase cost",
      "Overkill for freelancers who don't need full accounting",
    ],
    pricingSummary:
      "QuickBooks Online plans start around $30/month; invoicing is included. Higher tiers add more users and features. Compare with dedicated invoicing tools if you don't need full accounting.",
  },
  {
    slug: "wave",
    name: "Wave",
    badge: "Best free invoicing software",
    description:
      "Free invoicing and receipt scanning with no monthly fee. Ideal for freelancers and very small businesses.",
    rating: "4.3",
    startingPrice: "Free",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.waveapps.com",
    logoSrc: "/Logos/wave.jpeg",
    compareSlugs: ["freshbooks-vs-wave", "quickbooks-vs-wave"],
    standoutFeature: "Free core invoicing and receipt scan",
    editorialParagraph:
      "Wave is the best free invoicing option. You get professional invoices, payment tracking, and receipt scanning without a subscription; Wave makes money on payment processing. It's a good way to start or run a very small business on a tight budget. For more features or client workflows, paid options like FreshBooks or Zoho Invoice are worth considering.",
    pros: [
      "Free core invoicing and receipt scanning; no monthly fee",
      "Good for freelancers and very small businesses",
      "Payment tracking and basic reporting included",
      "Low barrier to start",
    ],
    cons: [
      "Fewer features and client workflows than paid tools",
      "Support more limited than paid options",
      "Revenue from payment processing",
    ],
    pricingSummary:
      "Wave's core invoicing is free; payment processing has its own fees. No subscription for the free plan. Compare with paid tools if you need more clients or features.",
  },
  {
    slug: "zoho-invoice",
    name: "Zoho Invoice",
    badge: "Best value",
    description:
      "Affordable invoicing with projects, client portal, and automation. Good fit for value-focused teams.",
    rating: "4.4",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.zoho.com/invoice",
    logoSrc: "/Logos/zoho.png",
    compareSlugs: ["zoho-invoice-vs-freshbooks", "zoho-invoice-vs-quickbooks"],
    standoutFeature: "Automation, client portal, value pricing",
    editorialParagraph:
      "Zoho Invoice delivers strong value: good automation, project and client tracking, and a client portal at a lower price than FreshBooks or QuickBooks. It's especially compelling if you already use other Zoho apps. The free tier is generous for light use; paid plans add more invoices and features.",
    pros: [
      "Strong automation and client portal at lower price",
      "Free tier generous for light use",
      "Good fit if you already use Zoho apps",
      "Project and client tracking included",
    ],
    cons: [
      "Invoice limits on free tier",
      "Less brand recognition than FreshBooks or QuickBooks",
      "Smaller ecosystem than QuickBooks",
    ],
    pricingSummary:
      "Zoho Invoice offers a free tier and paid plans; paid plans add more invoices and features. Compare tiers for your volume and needs.",
  },
  {
    slug: "xero",
    name: "Xero",
    badge: "Best for businesses needing accounting + invoicing",
    description:
      "Cloud invoicing and quoting with full accounting. Strong for growing teams that want one platform.",
    rating: "4.5",
    startingPrice: "$15/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.xero.com",
    logoSrc: "/Logos/xero.png",
    compareSlugs: ["xero-vs-quickbooks", "xero-vs-freshbooks"],
    standoutFeature: "Invoicing plus full accounting, 700+ integrations",
    editorialParagraph:
      "Xero is the pick when you want invoicing and full accounting in one place. Invoices, quotes, and payments tie into the same books and reports. The interface is clean and the app marketplace is large. If you need more than just invoicing—bank feeds, reporting, multi-currency—Xero is a strong choice. For invoicing-only, FreshBooks or Wave can be simpler.",
    pros: [
      "Invoicing plus full accounting in one place",
      "Clean interface and large app marketplace",
      "Bank feeds, reporting, multi-currency",
      "Competitive entry-level pricing",
    ],
    cons: [
      "User limits on lower plans",
      "Heavier than invoicing-only tools",
      "Some features require higher tiers",
    ],
    pricingSummary:
      "Xero offers tiered plans starting around $15/month; higher tiers add more users and features. Compare with invoicing-only tools if you don't need full accounting.",
  },
  {
    slug: "invoice-ninja",
    name: "Invoice Ninja",
    badge: "Best for open-source & self-hosted",
    description:
      "Open-source invoicing with cloud or self-hosted options. Strong for teams that want control, customization, and minimal vendor lock-in.",
    rating: "4.3",
    startingPrice: "Free / paid",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.invoiceninja.com",
    logoSrc: "/Logos/invoiceninja.jpeg",
    compareSlugs: ["invoice-ninja-vs-freshbooks", "freshbooks-vs-wave", "zoho-invoice-vs-freshbooks"],
    standoutFeature: "Self-hosted option; open-source flexibility",
    editorialParagraph:
      "Invoice Ninja appeals to teams that want invoicing without being tied to a single SaaS vendor. You can run it in the cloud or self-host for more control. The trade-off is more operational responsibility than polished all-in-one tools like FreshBooks. Compare features and support needs before choosing self-hosted.",
    pros: [
      "Open-source with cloud and self-hosted deployment options",
      "Flexible for developers and technical teams",
      "Can reduce long-term vendor lock-in when self-hosted",
      "Solid invoicing and client-facing basics",
    ],
    cons: [
      "Self-hosting requires hosting and maintenance",
      "Less hand-holding than mainstream SaaS invoicing leaders",
      "Ecosystem smaller than QuickBooks or FreshBooks",
    ],
    pricingSummary:
      "Invoice Ninja offers free and paid tiers; self-hosted setups add hosting and ops costs. Compare total cost of ownership with FreshBooks or Zoho Invoice.",
  },
  {
    slug: "honeybook",
    name: "HoneyBook",
    badge: "Best for creative client workflows",
    description:
      "Proposals, contracts, scheduling, and invoicing for creative and service professionals who want client work in one place.",
    rating: "4.4",
    startingPrice: "Quote",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.honeybook.com",
    logoSrc: "/Logos/honeybook.jpeg",
    compareSlugs: ["honeybook-vs-bonsai", "freshbooks-vs-wave", "freshbooks-vs-quickbooks"],
    standoutFeature: "Proposals, contracts, and client experience",
    editorialParagraph:
      "HoneyBook is built for creatives and service businesses that sell projects, not just invoices. Proposals, contracts, and payments live in one client-facing workflow. Pricing is often quote-based; compare with Bonsai for a similar freelancer-focused model or FreshBooks if you prioritize time tracking and accounting depth.",
    pros: [
      "End-to-end client workflow: proposals through payment",
      "Strong fit for photographers, designers, and coaches",
      "Polished experience for clients and prospects",
      "Combines scheduling and communication in one hub",
    ],
    cons: [
      "Less pure accounting depth than QuickBooks or Xero",
      "Quote-based pricing can be harder to compare upfront",
      "May be more than you need for invoice-only use cases",
    ],
    pricingSummary:
      "HoneyBook typically uses subscription pricing with tiers or quotes depending on plan. Compare with Bonsai and FreshBooks for total cost at your client volume.",
  },
  {
    slug: "bonsai",
    name: "Bonsai",
    badge: "Best for freelancer contracts + invoicing",
    description:
      "Contracts, proposals, and invoicing tailored to freelancers and small creative businesses that want paperwork and billing together.",
    rating: "4.3",
    startingPrice: "Quote",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.hellobonsai.com",
    logoSrc: "/Logos/bonsai.jpeg",
    compareSlugs: ["honeybook-vs-bonsai", "freshbooks-vs-wave", "invoice-ninja-vs-freshbooks"],
    standoutFeature: "Contracts, proposals, and invoicing for freelancers",
    editorialParagraph:
      "Bonsai focuses on freelancers who need contracts and invoices in one workflow. It’s lighter than full accounting platforms but stronger than invoice-only tools for legal-style documents and client onboarding. Compare with HoneyBook for a similar creative workflow or FreshBooks if time tracking and reporting matter more.",
    pros: [
      "Contracts and proposals paired with invoicing",
      "Built for freelancers and small creative shops",
      "Streamlined onboarding from lead to paid invoice",
      "Less complexity than full accounting suites",
    ],
    cons: [
      "Not a replacement for full bookkeeping in QuickBooks or Xero",
      "Quote-based or tiered pricing—verify current plans",
      "Narrower ecosystem than mainstream accounting tools",
    ],
    pricingSummary:
      "Bonsai uses tiered or quote-based plans depending on edition. Compare with HoneyBook and FreshBooks for freelancer workflows and total cost.",
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
    logoSrc: "/Logos/zoho.png",
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
}[] = [];

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
