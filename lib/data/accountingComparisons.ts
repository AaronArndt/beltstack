import { getAccountingReviewUrl, getAccountingCompareUrl, getAccountingBestForUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getAccountingCompareUrlFromSlug(slug: string): string {
  return `/accounting/compare/${slug}`;
}

/** Product refs for accounting comparisons — reuse for consistent review links and logos */
const P = {
  "quickbooks-online": {
    name: "QuickBooks Online",
    slug: "quickbooks-online",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
    logoSrc: "/Logos/quickbooks.png",
    visitUrl: "https://quickbooks.intuit.com",
    bestForSummary: "Small businesses needing full accounting software with broad features.",
    rating: "4.6",
    startingPrice: "$30/mo",
  },
  xero: {
    name: "Xero",
    slug: "xero",
    reviewHref: getAccountingReviewUrl("xero"),
    logoSrc: "/Logos/xero.png",
    visitUrl: "https://www.xero.com",
    bestForSummary: "QuickBooks alternative with accountant-friendly workflows and clean UI.",
    rating: "4.5",
    startingPrice: "$15/mo",
  },
  freshbooks: {
    name: "FreshBooks",
    slug: "freshbooks",
    reviewHref: getAccountingReviewUrl("freshbooks"),
    logoSrc: "/Logos/freshbooks.jpeg",
    visitUrl: "https://www.freshbooks.com",
    bestForSummary: "Freelancers and service businesses; strong invoicing and time tracking.",
    rating: "4.5",
    startingPrice: "$19/mo",
  },
  "zoho-books": {
    name: "Zoho Books",
    slug: "zoho-books",
    reviewHref: getAccountingReviewUrl("zoho-books"),
    logoSrc: "/Logos/zoho.jpeg",
    visitUrl: "https://www.zoho.com/books",
    bestForSummary: "Businesses already using the Zoho ecosystem; strong value and automation.",
    rating: "4.4",
    startingPrice: "$15/mo",
  },
  wave: {
    name: "Wave",
    slug: "wave",
    reviewHref: getAccountingReviewUrl("wave"),
    logoSrc: "/Logos/wave.jpeg",
    visitUrl: "https://www.waveapps.com",
    bestForSummary: "Free accounting software for very small businesses and freelancers.",
    rating: "4.3",
    startingPrice: "Free",
  },
  "sage-accounting": {
    name: "Sage Accounting",
    slug: "sage-accounting",
    reviewHref: getAccountingReviewUrl("sage-accounting"),
    logoSrc: "/Logos/sage.png",
    visitUrl: "https://www.sage.com/en-us/products/sage-business-cloud-accounting",
    bestForSummary: "Small businesses needing basic accounting features and compliance.",
    rating: "4.3",
    startingPrice: "Quote",
  },
  "odoo-accounting": {
    name: "Odoo Accounting",
    slug: "odoo-accounting",
    reviewHref: getAccountingReviewUrl("odoo-accounting"),
    logoSrc: "/Logos/odoo.jpeg",
    visitUrl: "https://www.odoo.com/app/accounting",
    bestForSummary: "Businesses already using the Odoo ERP ecosystem.",
    rating: "4.2",
    startingPrice: "Quote",
  },
  kashoo: {
    name: "Kashoo",
    slug: "kashoo",
    reviewHref: getAccountingReviewUrl("kashoo"),
    logoSrc: "/Logos/kashoo.jpeg",
    visitUrl: "https://kashoo.com",
    bestForSummary: "Simple bookkeeping for small businesses.",
    rating: "4.2",
    startingPrice: "Quote",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getAccountingBestForUrl("freelancers") },
  { label: "Best for small business", href: getAccountingBestForUrl("small-business") },
  { label: "Best for contractors", href: getAccountingBestForUrl("contractors") },
  { label: "Best for ecommerce", href: getAccountingBestForUrl("ecommerce") },
  { label: "Best for agencies", href: getAccountingBestForUrl("agencies") },
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
      categoryHref: "/accounting",
      categoryLabel: "Accounting",
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
  sidebar: { label: string; winner: "A" | "B" }[]
): [string, ComparisonTemplateProps] {
  return buildComparison(slug, productAKey, productBKey, {
    summaryParagraph: summary,
    quickRecommendationA: quickA,
    quickRecommendationB: quickB,
    quickVerdictParagraphs: verdict,
    featureComparison: [
      { feature: "Invoicing", productA: "Full invoicing and payments", productB: "Full invoicing and payments", supportA: "supported", supportB: "supported" },
      { feature: "Expenses & bank feeds", productA: "Expense tracking and bank sync", productB: "Expense tracking and bank sync", supportA: "supported", supportB: "supported" },
      { feature: "Reporting", productA: "P&L, balance sheet, reports", productB: "P&L, balance sheet, reports", supportA: "supported", supportB: "supported" },
      { feature: "Integrations", productA: "App marketplace and third-party apps", productB: "App marketplace and third-party apps", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison: pricing,
    prosConsA: { pros: ["Full accounting features", "Strong ecosystem"], cons: ["Can be complex", "Cost varies by tier"] },
    prosConsB: { pros: ["Solid feature set", "Good value"], cons: ["Depends on your needs", "Compare add-ons"] },
    bestFor: [
      { heading: "Best for different needs", body: "Each product suits different business sizes and workflows. Read our full reviews for detailed recommendations." },
    ],
    alternatives: [
      { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online"), logoSrc: "/Logos/quickbooks.png" },
      { name: "Xero", href: getAccountingReviewUrl("xero"), logoSrc: "/Logos/xero.png" },
      { name: "Wave", href: getAccountingReviewUrl("wave"), logoSrc: "/Logos/wave.jpeg" },
    ],
    faqs: [
      { q: `How do ${P[productAKey].name} and ${P[productBKey].name} compare?`, a: summary.slice(0, 200) + " Read our full reviews for each product and this comparison for a head-to-head view." },
      { q: "Which is better for small business?", a: "Both serve small businesses; the better fit depends on your workflow, budget, and whether you need free vs paid features. See the Best for section above." },
    ],
    sidebarWinners: sidebar,
    relevantTradeLinks: RELEVANT_LINKS,
  });
}

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  buildComparison(
    "quickbooks-online-vs-xero",
    "quickbooks-online",
    "xero",
    {
      summaryParagraph:
        "QuickBooks Online and Xero are the two most popular cloud accounting platforms for small businesses. QuickBooks has broader market share and depth; Xero offers a cleaner interface and strong accountant adoption. This comparison breaks down features, pricing, and who each fits best.",
      quickRecommendationA: "Best for small businesses that want the most established platform and widest ecosystem.",
      quickRecommendationB: "Best for businesses that want a strong QuickBooks alternative with a cleaner UI and accountant-friendly workflows.",
      quickVerdictParagraphs: [
        "QuickBooks Online and Xero both deliver full small business accounting: invoicing, expenses, bank feeds, and reporting. QuickBooks has the larger market share and app marketplace in the US; Xero is the leading alternative with a modern interface and strong adoption among accountants.",
        "QuickBooks wins on ecosystem breadth and familiarity—many bookkeepers and CPAs already use it. Xero often wins on ease of use and clarity; pricing can be lower at entry. Both integrate with hundreds of apps and support multi-user and multi-currency on higher tiers.",
        "Choose QuickBooks if you want the most established name and don't mind the cost. Choose Xero if you prefer a QuickBooks alternative with a cleaner experience and often lower starting price.",
      ],
      decisionGuideA: [
        "You want the broadest ecosystem and market familiarity.",
        "You prefer the most established name and largest app marketplace.",
        "Your accountant or bookkeeper already uses QuickBooks.",
      ],
      decisionGuideB: [
        "You want a strong QuickBooks alternative with a cleaner interface.",
        "You prefer lower entry pricing and transparent tiers.",
        "You value accountant-friendly workflows and modern UX.",
      ],
      ratingsComparison: [
        { category: "Features", productA: "4.7", productB: "4.6" },
        { category: "Ease of use", productA: "4.5", productB: "4.5" },
        { category: "Pricing", productA: "4.3", productB: "4.5" },
        { category: "Integrations", productA: "4.8", productB: "4.7" },
        { category: "Support", productA: "4.5", productB: "4.4" },
      ],
      featureComparison: [
        { feature: "Invoicing & payments", productA: "Strong; payment links and tracking", productB: "Strong; quotes and invoicing", supportA: "supported", supportB: "supported" },
        { feature: "Bank feeds", productA: "Built-in; many banks", productB: "Built-in; many banks", supportA: "supported", supportB: "supported" },
        { feature: "Reporting", productA: "P&L, balance sheet, custom reports", productB: "P&L, balance sheet, dashboards", supportA: "supported", supportB: "supported", stronger: "A" },
        { feature: "Integrations", productA: "Very large app marketplace", productB: "700+ integrations", supportA: "supported", supportB: "supported", stronger: "A" },
        { feature: "Multi-currency", productA: "On higher tiers", productB: "On higher tiers", supportA: "supported", supportB: "supported" },
      ],
      pricingComparison:
        "QuickBooks Online starts around $30/month with tiered plans; Xero often starts around $15/month. Both add cost with higher tiers and add-ons. Xero typically has a lower entry price; QuickBooks can be more expensive as you add users and features. Compare at your expected user count and feature needs.",
      prosConsA: {
        pros: ["Broadest feature set and ecosystem", "Largest app marketplace", "Familiar to most accountants", "Strong reporting and tax tools"],
        cons: ["Higher starting price", "Can feel complex for very small teams", "Cost adds up with tiers and add-ons"],
      },
      prosConsB: {
        pros: ["Lower entry price", "Clean, modern interface", "Accountant-friendly", "Strong integrations"],
        cons: ["Add-ons can increase cost", "Smaller US market share than QuickBooks", "Some learning curve for new users"],
      },
      bestFor: [
        { heading: "Best for established ecosystem", body: "QuickBooks Online is the better fit if you want the most widely used platform and the largest selection of add-ons and accountants who know it." },
        { heading: "Best for QuickBooks alternative", body: "Xero is the better fit if you want capable accounting without QuickBooks—cleaner UI and often lower entry cost." },
        { heading: "Best for accountant collaboration", body: "Both work well with accountants; QuickBooks has more US practitioners; Xero is strong among forward-looking firms." },
      ],
      alternatives: [
        { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks"), description: "Simpler option for freelancers.", logoSrc: "/Logos/freshbooks.jpeg" },
        { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books"), description: "Value-focused; good for Zoho users.", logoSrc: "/Logos/zoho.jpeg" },
        { name: "Wave", href: getAccountingReviewUrl("wave"), description: "Free option for basic needs.", logoSrc: "/Logos/wave.jpeg" },
      ],
      faqs: [
        { q: "Which is better: QuickBooks or Xero?", a: "It depends. QuickBooks has the larger US ecosystem and market share; Xero is a strong alternative with a cleaner interface and often lower entry price. Both are full-featured; choose by preference, price, and whether your accountant uses one or the other." },
        { q: "Is Xero cheaper than QuickBooks?", a: "Xero often has a lower starting price (e.g. around $15/month vs QuickBooks around $30/month). Total cost depends on tier, users, and add-ons for both." },
        { q: "Can I switch from QuickBooks to Xero?", a: "Yes. You can export data from QuickBooks and import or re-enter in Xero. Many accountants support both; plan for a transition period." },
      ],
      sidebarWinners: [
        { label: "Winner for ecosystem breadth", winner: "A" },
        { label: "Winner for entry pricing", winner: "B" },
        { label: "Winner for ease of use", winner: "B" },
      ],
      heroCallouts: [
        { label: "Winner for ecosystem", winner: "A", reason: "Largest app marketplace and most accountants familiar with QuickBooks." },
        { label: "Winner for value", winner: "B", reason: "Lower starting price and cleaner, modern interface." },
      ],
      moreComparisons: [
        { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrlFromSlug("quickbooks-online-vs-freshbooks") },
        { label: "Xero vs FreshBooks", href: getAccountingCompareUrlFromSlug("xero-vs-freshbooks") },
      ],
      relevantTradeLinks: RELEVANT_LINKS,
    }
  ),
  minimalComparison(
    "quickbooks-online-vs-freshbooks",
    "quickbooks-online",
    "freshbooks",
    "QuickBooks Online offers full accounting depth; FreshBooks focuses on freelancers and service businesses with simpler invoicing and time tracking.",
    "Best for small businesses that need full accounting and a large ecosystem.",
    "Best for freelancers and service businesses that want simple invoicing and time tracking.",
    [
      "QuickBooks Online is the full accounting play; FreshBooks is the simplicity play for freelancers who bill by time and project. Choose QuickBooks for full books; FreshBooks for ease of use and client billing.",
    ],
    "QuickBooks starts around $30/month; FreshBooks around $19/month. Compare at your size and needs.",
    [
      { label: "Winner for full accounting", winner: "A" },
      { label: "Winner for freelancers", winner: "B" },
    ]
  ),
  minimalComparison(
    "quickbooks-online-vs-zoho-books",
    "quickbooks-online",
    "zoho-books",
    "QuickBooks Online has the larger ecosystem; Zoho Books offers strong value and fits businesses already in the Zoho ecosystem.",
    "Best for small businesses that want the most established platform.",
    "Best for value-conscious businesses and those already using Zoho.",
    [
      "QuickBooks wins on ecosystem size; Zoho Books wins on value and automation, especially if you use other Zoho apps. Choose QuickBooks for breadth; Zoho Books for lower cost and Zoho integration.",
    ],
    "QuickBooks starts around $30/month; Zoho Books around $15/month. Zoho often offers more for the price.",
    [
      { label: "Winner for ecosystem", winner: "A" },
      { label: "Winner for value", winner: "B" },
    ]
  ),
  minimalComparison(
    "quickbooks-online-vs-wave",
    "quickbooks-online",
    "wave",
    "QuickBooks Online is full-featured paid accounting; Wave offers free accounting and invoicing.",
    "Best for small businesses that need full accounting and can pay for it.",
    "Best for very small businesses and freelancers who want free accounting.",
    [
      "QuickBooks delivers more features and integrations; Wave delivers free core accounting. Choose QuickBooks for advanced reporting; Wave if free software and simplicity matter most.",
    ],
    "QuickBooks starts around $30/month; Wave is free for core accounting. Wave charges for payments and payroll add-ons.",
    [
      { label: "Winner for features", winner: "A" },
      { label: "Winner for free option", winner: "B" },
    ]
  ),
  minimalComparison(
    "xero-vs-freshbooks",
    "xero",
    "freshbooks",
    "Xero is full cloud accounting; FreshBooks is built for freelancers and service businesses.",
    "Best for businesses that want full accounting with a clean interface.",
    "Best for freelancers who want simple invoicing and time tracking.",
    [
      "Xero offers full double-entry accounting; FreshBooks offers easier onboarding and strong client-facing invoicing and time tracking. Choose Xero for depth; FreshBooks for freelancer simplicity.",
    ],
    "Xero starts around $15/month; FreshBooks around $19/month. Both scale with features and usage.",
    [
      { label: "Winner for full accounting", winner: "A" },
      { label: "Winner for freelancers", winner: "B" },
    ]
  ),
  minimalComparison(
    "xero-vs-zoho-books",
    "xero",
    "zoho-books",
    "Xero has a larger standalone app ecosystem; Zoho Books fits the Zoho suite and offers good automation.",
    "Best for businesses that want a QuickBooks alternative with a large app store.",
    "Best for businesses already using Zoho or wanting strong value and automation.",
    [
      "Xero wins on third-party integrations; Zoho Books wins on price and automation within the Zoho ecosystem. Choose Xero for breadth; Zoho Books for value.",
    ],
    "Both often start around $15/month. Zoho can be more affordable at scale.",
    [
      { label: "Winner for integrations", winner: "A" },
      { label: "Winner for value", winner: "B" },
    ]
  ),
  minimalComparison(
    "wave-vs-freshbooks",
    "wave",
    "freshbooks",
    "Wave is free for core accounting; FreshBooks is paid and built for freelancers with stronger time tracking and client tools.",
    "Best for very small businesses that want free accounting.",
    "Best for freelancers who want strong invoicing and time tracking and don't mind paying.",
    [
      "Wave wins on price—free core accounting. FreshBooks wins on freelancer features: time tracking, client portal, and polish. Choose Wave for free; FreshBooks for better client-facing tools.",
    ],
    "Wave is free for accounting and invoicing; FreshBooks starts around $19/month. Wave charges for payments and payroll.",
    [
      { label: "Winner for free", winner: "A" },
      { label: "Winner for freelancer features", winner: "B" },
    ]
  ),
  minimalComparison(
    "wave-vs-quickbooks-online",
    "wave",
    "quickbooks-online",
    "Wave offers free accounting; QuickBooks Online is the market leader with full features and a large ecosystem.",
    "Best for very small businesses and freelancers who want free accounting.",
    "Best for small businesses that need full accounting and can pay for it.",
    [
      "Wave is free for core accounting; QuickBooks offers more features, integrations, and support at a monthly cost. Choose Wave for zero cost; QuickBooks for full depth.",
    ],
    "Wave is free; QuickBooks starts around $30/month. Wave add-ons (payments, payroll) cost extra.",
    [
      { label: "Winner for free", winner: "A" },
      { label: "Winner for features", winner: "B" },
    ]
  ),
  minimalComparison(
    "zoho-books-vs-freshbooks",
    "zoho-books",
    "freshbooks",
    "Zoho Books offers value and automation; FreshBooks is built for freelancers with strong invoicing and time tracking.",
    "Best for value-conscious businesses and those using Zoho.",
    "Best for freelancers that want simple, polished invoicing.",
    [
      "Zoho Books wins on value and automation; FreshBooks wins on freelancer-focused ease and client-facing tools. Choose Zoho for price; FreshBooks for freelancer workflow.",
    ],
    "Zoho Books around $15/month; FreshBooks around $19/month. Both scale by users or clients.",
    [
      { label: "Winner for value", winner: "A" },
      { label: "Winner for freelancers", winner: "B" },
    ]
  ),
  minimalComparison(
    "sage-accounting-vs-quickbooks-online",
    "sage-accounting",
    "quickbooks-online",
    "Sage Accounting provides core accounting for SMBs; QuickBooks Online has the larger US ecosystem.",
    "Best for small businesses that need basic accounting and prefer Sage.",
    "Best for small businesses that want the most established US platform.",
    [
      "QuickBooks has more integrations and mindshare in the US. Sage is a recognized brand with solid core accounting. Choose QuickBooks for ecosystem; Sage for compliance-focused basics.",
    ],
    "QuickBooks has transparent tiered pricing; Sage often uses quote-based pricing. Compare for your region.",
    [
      { label: "Winner for US ecosystem", winner: "B" },
      { label: "Winner for compliance focus", winner: "A" },
    ]
  ),
  minimalComparison(
    "odoo-accounting-vs-quickbooks-online",
    "odoo-accounting",
    "quickbooks-online",
    "Odoo Accounting is the accounting module within Odoo ERP; QuickBooks Online is standalone accounting.",
    "Best for businesses already using Odoo for CRM, inventory, or other modules.",
    "Best for small businesses that want standalone accounting with a large ecosystem.",
    [
      "Odoo Accounting fits when you already use Odoo; QuickBooks fits when you want dedicated accounting and the largest app marketplace. Choose Odoo for suite integration; QuickBooks for standalone.",
    ],
    "Odoo is per-app or suite pricing; QuickBooks starts around $30/month. Compare total cost for your stack.",
    [
      { label: "Winner for ERP integration", winner: "A" },
      { label: "Winner for standalone accounting", winner: "B" },
    ]
  ),
  minimalComparison(
    "kashoo-vs-wave",
    "kashoo",
    "wave",
    "Kashoo and Wave both aim at simple bookkeeping. Wave is free for core accounting; Kashoo is paid with a straightforward interface.",
    "Best for small businesses that want simple paid bookkeeping.",
    "Best for very small businesses that want free accounting.",
    [
      "Wave is free for accounting and invoicing; Kashoo is a low-cost paid option. Both suit micro businesses. Choose Wave for free; Kashoo if you prefer a paid, simple option.",
    ],
    "Wave is free for core features; Kashoo uses subscription pricing. Compare current plans.",
    [
      { label: "Winner for free", winner: "B" },
      { label: "Winner for simple paid option", winner: "A" },
    ]
  ),
  minimalComparison(
    "sage-accounting-vs-xero",
    "sage-accounting",
    "xero",
    "Sage Accounting offers core SMB accounting; Xero is a leading cloud alternative with a large app ecosystem.",
    "Best for small businesses that prefer Sage and need compliance basics.",
    "Best for businesses that want a modern cloud platform with strong integrations.",
    [
      "Xero has a larger app marketplace; Sage is established with solid core accounting. Choose Xero for ecosystem; Sage for Sage-specific workflows.",
    ],
    "Xero has transparent tiers; Sage often uses quote-based pricing. Compare for your region.",
    [
      { label: "Winner for ecosystem", winner: "B" },
      { label: "Winner for compliance", winner: "A" },
    ]
  ),
  minimalComparison(
    "odoo-accounting-vs-xero",
    "odoo-accounting",
    "xero",
    "Odoo Accounting is part of the Odoo ERP suite; Xero is standalone cloud accounting.",
    "Best for businesses already using Odoo for other modules.",
    "Best for businesses that want standalone accounting with a large app store.",
    [
      "Odoo Accounting fits when you run Odoo for CRM or projects; Xero fits when you want best-of-breed accounting. Choose Odoo for suite integration; Xero for standalone depth.",
    ],
    "Odoo is per-app pricing; Xero starts around $15/month. Compare total cost.",
    [
      { label: "Winner for ERP integration", winner: "A" },
      { label: "Winner for accounting ecosystem", winner: "B" },
    ]
  ),
  minimalComparison(
    "kashoo-vs-freshbooks",
    "kashoo",
    "freshbooks",
    "Kashoo offers simple bookkeeping; FreshBooks is built for freelancers with strong invoicing and time tracking.",
    "Best for small businesses that want straightforward bookkeeping.",
    "Best for freelancers who want polished invoicing and time tracking.",
    [
      "Kashoo is simpler and often cheaper; FreshBooks has more freelancer-focused features. Choose Kashoo for simplicity; FreshBooks for freelancer workflow.",
    ],
    "Both use subscription pricing; FreshBooks often has higher tiers. Compare plans.",
    [
      { label: "Winner for simplicity", winner: "A" },
      { label: "Winner for freelancers", winner: "B" },
    ]
  ),
  minimalComparison(
    "zoho-books-vs-wave",
    "zoho-books",
    "wave",
    "Zoho Books is paid with strong value and automation; Wave is free for core accounting.",
    "Best for value-conscious businesses and Zoho users.",
    "Best for very small businesses that want free accounting.",
    [
      "Zoho Books offers more features for a low price; Wave offers free core accounting. Choose Zoho for value and features; Wave for free software.",
    ],
    "Zoho Books around $15/month; Wave is free for core features. Wave charges for payments and payroll.",
    [
      { label: "Winner for value/features", winner: "A" },
      { label: "Winner for free", winner: "B" },
    ]
  ),
  minimalComparison(
    "sage-accounting-vs-freshbooks",
    "sage-accounting",
    "freshbooks",
    "Sage Accounting is core SMB accounting; FreshBooks is built for freelancers.",
    "Best for small businesses that need core accounting and compliance.",
    "Best for freelancers and service businesses that want simple invoicing and time tracking.",
    [
      "Sage offers traditional accounting depth; FreshBooks offers freelancer-focused ease. Choose Sage for accounting basics; FreshBooks for freelancer workflow.",
    ],
    "Sage often uses quote-based pricing; FreshBooks starts around $19/month. Compare for your needs.",
    [
      { label: "Winner for accounting depth", winner: "A" },
      { label: "Winner for freelancers", winner: "B" },
    ]
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getAccountingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getAccountingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
