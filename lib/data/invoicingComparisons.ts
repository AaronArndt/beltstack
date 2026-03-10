import { getInvoicingReviewUrl, getInvoicingCompareUrl, getInvoicingBestForUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getInvoicingCompareUrlFromSlug(slug: string): string {
  return `/invoicing/compare/${slug}`;
}

/** Product refs for invoicing comparisons — reuse for consistent review links and logos */
const P = {
  freshbooks: {
    name: "FreshBooks",
    slug: "freshbooks",
    reviewHref: getInvoicingReviewUrl("freshbooks"),
    logoSrc: "/Logos/freshbooks.jpeg",
    visitUrl: "https://www.freshbooks.com",
    bestForSummary: "Freelancers and service businesses; strong invoicing, time tracking, and ease of use.",
    rating: "4.5",
    startingPrice: "$19/mo",
  },
  quickbooks: {
    name: "QuickBooks",
    slug: "quickbooks",
    reviewHref: getInvoicingReviewUrl("quickbooks"),
    logoSrc: "/Logos/quickbooks.png",
    visitUrl: "https://quickbooks.intuit.com",
    bestForSummary: "Businesses already using QuickBooks; invoicing and accounting in one place.",
    rating: "4.6",
    startingPrice: "$30/mo",
  },
  wave: {
    name: "Wave",
    slug: "wave",
    reviewHref: getInvoicingReviewUrl("wave"),
    logoSrc: "/Logos/wave.jpeg",
    visitUrl: "https://www.waveapps.com",
    bestForSummary: "Free invoicing and receipt scanning for small businesses and freelancers.",
    rating: "4.3",
    startingPrice: "Free",
  },
  "zoho-invoice": {
    name: "Zoho Invoice",
    slug: "zoho-invoice",
    reviewHref: getInvoicingReviewUrl("zoho-invoice"),
    logoSrc: "/Logos/zoho.jpeg",
    visitUrl: "https://www.zoho.com/invoice",
    bestForSummary: "Value-conscious businesses and Zoho users; automation and client portal.",
    rating: "4.4",
    startingPrice: "Free tier",
  },
  xero: {
    name: "Xero",
    slug: "xero",
    reviewHref: getInvoicingReviewUrl("xero"),
    logoSrc: "/Logos/xero.png",
    visitUrl: "https://www.xero.com",
    bestForSummary: "Businesses needing invoicing plus full accounting and strong integrations.",
    rating: "4.5",
    startingPrice: "$15/mo",
  },
  "invoice-ninja": {
    name: "Invoice Ninja",
    slug: "invoice-ninja",
    reviewHref: getInvoicingReviewUrl("invoice-ninja"),
    logoSrc: "/Logos/invoiceninja.jpeg",
    visitUrl: "https://www.invoiceninja.com",
    bestForSummary: "Businesses wanting flexibility, open-source option, and customization.",
    rating: "4.3",
    startingPrice: "Free / paid",
  },
  honeybook: {
    name: "HoneyBook",
    slug: "honeybook",
    reviewHref: getInvoicingReviewUrl("honeybook"),
    logoSrc: "/Logos/honeybook.jpeg",
    visitUrl: "https://www.honeybook.com",
    bestForSummary: "Client-service businesses; proposals, contracts, and invoicing in one workflow.",
    rating: "4.4",
    startingPrice: "Quote",
  },
  bonsai: {
    name: "Bonsai",
    slug: "bonsai",
    reviewHref: getInvoicingReviewUrl("bonsai"),
    logoSrc: "/Logos/bonsai.jpeg",
    visitUrl: "https://www.hellobonsai.com",
    bestForSummary: "Freelancers and solo service businesses; proposals, contracts, and invoicing.",
    rating: "4.3",
    startingPrice: "Quote",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getInvoicingBestForUrl("freelancers") },
  { label: "Best for small business", href: getInvoicingBestForUrl("small-business") },
  { label: "Best for agencies", href: getInvoicingBestForUrl("agencies") },
  { label: "Best for contractors", href: getInvoicingBestForUrl("contractors") },
  { label: "Best for consultants", href: getInvoicingBestForUrl("consultants") },
];

/** Standard feature rows for invoicing comparisons */
const INVOICING_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  { feature: "Invoicing", productA: "Professional invoices and payment links", productB: "Professional invoices and payment links", supportA: "supported", supportB: "supported" },
  { feature: "Recurring billing", productA: "Recurring invoices and reminders", productB: "Recurring invoices and reminders", supportA: "supported", supportB: "supported" },
  { feature: "Estimates / proposals", productA: "Estimates and proposals; convert to invoice", productB: "Estimates and proposals; convert to invoice", supportA: "supported", supportB: "supported" },
  { feature: "Payment processing", productA: "Built-in and third-party payment options", productB: "Built-in and third-party payment options", supportA: "supported", supportB: "supported" },
  { feature: "Integrations", productA: "Accounting, payment, and productivity apps", productB: "Accounting, payment, and productivity apps", supportA: "supported", supportB: "supported" },
  { feature: "Reporting", productA: "Income, expenses, and basic reports", productB: "Income, expenses, and basic reports", supportA: "supported", supportB: "supported" },
  { feature: "Ease of use", productA: "Simple setup and daily use", productB: "Simple setup and daily use", supportA: "supported", supportB: "supported" },
];

function buildComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  content: Omit<ComparisonTemplateProps, "productA" | "productB" | "categoryHref" | "categoryLabel">
): [string, ComparisonTemplateProps] {
  return [
    slug,
    {
      ...content,
      productA: P[productAKey],
      productB: P[productBKey],
      categoryHref: "/invoicing",
      categoryLabel: "Invoicing",
    },
  ];
}

/** Build a minimal comparison — same structure, placeholder content */
function minimalComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  summary: string,
  quickA: string,
  quickB: string,
  verdict: string[],
  pricing: string,
  sidebar: { label: string; winner: "A" | "B" }[],
  featureOverrides?: Partial<ComparisonTemplateProps["featureComparison"][0]>[]
): [string, ComparisonTemplateProps] {
  const featureComparison = featureOverrides?.length
    ? INVOICING_FEATURE_ROWS.map((row, i) => ({ ...row, ...featureOverrides[i] }))
    : INVOICING_FEATURE_ROWS;
  return buildComparison(slug, productAKey, productBKey, {
    summaryParagraph: summary,
    quickRecommendationA: quickA,
    quickRecommendationB: quickB,
    quickVerdictParagraphs: verdict,
    featureComparison,
    pricingComparison: pricing,
    prosConsA: { pros: ["Strong invoicing features", "Good ease of use"], cons: ["Compare plan limits", "May need add-ons"] },
    prosConsB: { pros: ["Solid feature set", "Good value"], cons: ["Depends on your needs", "Compare tiers"] },
    bestFor: [
      { heading: "Best for different needs", body: "Each product suits different business sizes and workflows. Read our full reviews for detailed recommendations." },
    ],
    alternatives: [
      { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks"), logoSrc: "/Logos/freshbooks.jpeg" },
      { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks"), logoSrc: "/Logos/quickbooks.png" },
      { name: "Wave", href: getInvoicingReviewUrl("wave"), logoSrc: "/Logos/wave.jpeg" },
      { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice"), logoSrc: "/Logos/zoho.jpeg" },
      { name: "Xero", href: getInvoicingReviewUrl("xero"), logoSrc: "/Logos/xero.png" },
    ],
    faqs: [
      { q: `How do ${P[productAKey].name} and ${P[productBKey].name} compare for invoicing?`, a: summary.slice(0, 220) + " Read our full reviews for each product and this comparison for a head-to-head view." },
      { q: "Which is better for freelancers?", a: "Both serve freelancers; the better fit depends on your workflow, budget, and whether you need free vs paid features. See the Best for section above." },
    ],
    sidebarWinners: sidebar,
    relevantTradeLinks: RELEVANT_LINKS,
  });
}

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  minimalComparison(
    "freshbooks-vs-quickbooks",
    "freshbooks",
    "quickbooks",
    "FreshBooks is built for freelancers and service businesses with strong invoicing and time tracking; QuickBooks combines invoicing with full accounting and a larger ecosystem. This comparison helps you choose based on your need for simplicity vs full books.",
    "Best for freelancers and service businesses that want simple invoicing, time tracking, and client billing without full accounting.",
    "Best for businesses already using QuickBooks or that need invoicing and full accounting in one place.",
    [
      "FreshBooks wins on ease of use and freelancer-focused features; QuickBooks wins on accounting depth and ecosystem size. Choose FreshBooks for invoicing-first workflows; QuickBooks when you want one platform for books and billing.",
    ],
    "FreshBooks starts around $19/month; QuickBooks around $30/month. Both scale with tiers and add-ons. Compare client limits and accounting needs.",
    [
      { label: "Winner for freelancers", winner: "A" },
      { label: "Winner for accounting integrations", winner: "B" },
    ]
  ),
  minimalComparison(
    "freshbooks-vs-wave",
    "freshbooks",
    "wave",
    "FreshBooks is a paid invoicing and time-tracking tool for freelancers; Wave offers free invoicing and receipt scanning. This comparison breaks down when to pay for FreshBooks vs when free Wave is enough.",
    "Best for freelancers and service businesses that want strong invoicing, time tracking, and client tools and don't mind paying.",
    "Best for very small businesses and freelancers who want free invoicing and basic receipt scanning.",
    [
      "FreshBooks wins on features and polish; Wave wins on price—free core invoicing. Choose FreshBooks for better client workflow and time tracking; Wave for zero software cost.",
    ],
    "FreshBooks starts around $19/month; Wave is free for core invoicing. Wave charges for payment processing and payroll add-ons.",
    [
      { label: "Winner for features", winner: "A" },
      { label: "Winner for free option", winner: "B" },
    ]
  ),
  minimalComparison(
    "quickbooks-vs-wave",
    "quickbooks",
    "wave",
    "QuickBooks delivers invoicing plus full accounting with a large ecosystem; Wave offers free invoicing and receipt scanning. This comparison helps you decide between paid breadth and free simplicity.",
    "Best for businesses that need full accounting and invoicing in one place and can pay for it.",
    "Best for very small businesses and freelancers who want free invoicing.",
    [
      "QuickBooks wins on accounting depth and integrations; Wave wins on cost—free core features. Choose QuickBooks for full books; Wave for free invoicing.",
    ],
    "QuickBooks starts around $30/month; Wave is free for core invoicing. Wave add-ons (payments, payroll) cost extra.",
    [
      { label: "Winner for accounting integrations", winner: "A" },
      { label: "Winner for free", winner: "B" },
    ]
  ),
  minimalComparison(
    "zoho-invoice-vs-freshbooks",
    "zoho-invoice",
    "freshbooks",
    "Zoho Invoice offers strong value and automation, especially for Zoho users; FreshBooks is built for freelancers with polished invoicing and time tracking. This comparison covers pricing, features, and fit.",
    "Best for value-conscious businesses and those already using Zoho; strong automation and client portal.",
    "Best for freelancers who want the most polished invoicing and time-tracking experience.",
    [
      "Zoho Invoice wins on value and automation; FreshBooks wins on freelancer-focused ease and market familiarity. Choose Zoho for lower cost and Zoho ecosystem; FreshBooks for simplicity and client tools.",
    ],
    "Zoho Invoice has a free tier and paid plans from a low base; FreshBooks starts around $19/month. Compare client and invoice limits.",
    [
      { label: "Winner for value", winner: "A" },
      { label: "Winner for freelancers", winner: "B" },
    ]
  ),
  minimalComparison(
    "xero-vs-quickbooks",
    "xero",
    "quickbooks",
    "Xero and QuickBooks both combine invoicing with full accounting. Xero often has a lower entry price and cleaner UI; QuickBooks has the larger US ecosystem. This comparison helps you choose.",
    "Best for businesses that want full accounting plus invoicing with a cleaner interface and often lower entry price.",
    "Best for businesses that want the most established US platform and largest app marketplace.",
    [
      "Xero wins on entry pricing and modern UI; QuickBooks wins on ecosystem size and accountant familiarity. Both are full-featured; choose by preference, price, and accountant support.",
    ],
    "Xero starts around $15/month; QuickBooks around $30/month. Both add cost with higher tiers and add-ons.",
    [
      { label: "Winner for entry pricing", winner: "A" },
      { label: "Winner for ecosystem", winner: "B" },
    ]
  ),
  minimalComparison(
    "wave-vs-zoho-invoice",
    "wave",
    "zoho-invoice",
    "Wave is free for core invoicing; Zoho Invoice offers a free tier and paid plans with more automation and features. This comparison helps you choose between free simplicity and value-packed paid options.",
    "Best for very small businesses that want completely free core invoicing.",
    "Best for value-conscious businesses that want more automation and a free or low-cost tier.",
    [
      "Wave wins on zero cost for core features; Zoho Invoice wins on automation, client portal, and value at low price. Choose Wave for free; Zoho for more features at low cost.",
    ],
    "Wave is free for core invoicing; Zoho Invoice has a free tier and low-cost paid plans. Wave charges for payments and payroll.",
    [
      { label: "Winner for free", winner: "A" },
      { label: "Winner for value and features", winner: "B" },
    ]
  ),
  minimalComparison(
    "freshbooks-vs-xero",
    "freshbooks",
    "xero",
    "FreshBooks is invoicing-focused for freelancers and service businesses; Xero is full accounting plus invoicing. This comparison covers when to choose simplicity vs full books.",
    "Best for freelancers and service businesses that want strong invoicing and time tracking without full accounting.",
    "Best for businesses that need invoicing plus full accounting, reporting, and a large app ecosystem.",
    [
      "FreshBooks wins on freelancer ease and invoicing focus; Xero wins on accounting depth and integrations. Choose FreshBooks for invoice-first workflows; Xero for one platform for books and billing.",
    ],
    "FreshBooks starts around $19/month; Xero around $15/month. Xero scales with accounting features; FreshBooks with client count.",
    [
      { label: "Winner for freelancers", winner: "A" },
      { label: "Winner for accounting integrations", winner: "B" },
    ]
  ),
  minimalComparison(
    "invoice-ninja-vs-freshbooks",
    "invoice-ninja",
    "freshbooks",
    "Invoice Ninja offers open-source and cloud options with strong customization; FreshBooks is a polished, mainstream option for freelancers. This comparison helps you choose between flexibility and familiarity.",
    "Best for businesses that want customization, open-source option, or self-hosting and don't need mainstream support familiarity.",
    "Best for freelancers who want the most familiar, polished invoicing and time-tracking experience.",
    [
      "Invoice Ninja wins on customization and open-source/self-host option; FreshBooks wins on ease of use and market familiarity. Choose Invoice Ninja for control; FreshBooks for simplicity.",
    ],
    "Invoice Ninja has a free self-hosted option and paid cloud plans; FreshBooks starts around $19/month. Compare features and support needs.",
    [
      { label: "Winner for customization", winner: "A" },
      { label: "Winner for ease of use", winner: "B" },
    ]
  ),
  minimalComparison(
    "honeybook-vs-bonsai",
    "honeybook",
    "bonsai",
    "HoneyBook and Bonsai both focus on client workflow: proposals, contracts, and invoicing. HoneyBook is strong for creative and service businesses; Bonsai is built for freelancers. This comparison breaks down the differences.",
    "Best for creative and service businesses that want robust client management and project workflows.",
    "Best for freelancers who want a simple all-in-one for proposals, contracts, and invoicing.",
    [
      "HoneyBook wins on client workflow depth and creative-industry focus; Bonsai wins on freelancer simplicity and straightforward pricing. Both suit client-facing professionals; choose by workflow and industry fit.",
    ],
    "Both use subscription pricing; plans are often quoted. Compare features and pricing for your team size and workflow.",
    [
      { label: "Winner for client workflow depth", winner: "A" },
      { label: "Winner for freelancer simplicity", winner: "B" },
    ]
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getInvoicingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getInvoicingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
