/**
 * Accounting alternatives page data.
 * Used by app/accounting/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live accounting review pages.
 */

import { getAccountingReviewUrl, getAccountingCompareUrl, getAccountingBestForUrl } from "@/lib/routes";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesDetailBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/accounting", label: "Accounting" };
const ROUNDUP_HREF = "/accounting/best-accounting-software";
const COMPARE_HUB = "/accounting/compare";
const GUIDES_HUB = "/accounting/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Invoicing and billing", body: "If you bill clients or track time, choose software with strong invoicing, payment links, and optional time tracking. FreshBooks and Wave excel for freelancers; QuickBooks and Xero scale for larger teams." },
  { heading: "Reporting and tax prep", body: "Most small businesses need P&L, balance sheet, and tax-ready exports. All major options provide these; compare report customization and accountant access." },
  { heading: "Integrations", body: "Accounting should connect to your bank, payroll, ecommerce, or time tools. QuickBooks has the largest US app marketplace; Xero and Zoho have strong ecosystems too." },
  { heading: "Pricing and scale", body: "Free options (Wave) suit very small needs; paid tiers add users and features. Compare base price plus per-user or per-client limits before committing." },
  { heading: "Ecosystem lock-in", body: "QuickBooks and Zoho tie you to their ecosystem; Xero and FreshBooks are more standalone. Choose based on whether you want one vendor or best-of-breed." },
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
    { label: "Accounting hub", href: CATEGORY.href },
    { label: "Best accounting software", href: ROUNDUP_HREF },
    { label: "Compare accounting software", href: COMPARE_HUB },
    { label: "Accounting guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getAccountingBestForUrl("small-business") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— QuickBooks Online alternatives ———
const QUICKBOOKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Strong cloud accounting with clean UI and accountant-friendly workflows. Lower entry price.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-xero"), startingPrice: "$15/mo", standoutFeature: "Clean UI; lower entry price" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking for freelancers and service businesses.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused; time tracking" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value and Zoho ecosystem", description: "Affordable accounting with automation and projects. Good for Zoho users.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-zoho-books"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing for small businesses and freelancers.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-wave"), startingPrice: "Free", standoutFeature: "Free core accounting" },
  { slug: "sage-accounting", name: "Sage Accounting", logoSrc: "/Logos/sage.png", rating: "4.3", bestFor: "SMBs and compliance", description: "Core accounting for SMBs with compliance focus. Quote-based pricing.", reviewHref: getAccountingReviewUrl("sage-accounting"), compareHref: getAccountingCompareUrl("sage-accounting-vs-quickbooks-online"), startingPrice: "Quote", standoutFeature: "Compliance-focused" },
];

const quickbooksOriginalRow: AlternativesTableRow = {
  slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", bestFor: "small business all-in-one", startingPrice: "$30/mo", standoutFeature: "Largest ecosystem; familiar", reviewHref: getAccountingReviewUrl("quickbooks-online"),
};

const quickbooksPage: AlternativesTemplateProps = {
  title: "Best QuickBooks Online Alternatives (2026)",
  subtitle: "If QuickBooks Online isn't the right fit—because of cost, complexity, or ecosystem—these accounting alternatives offer strong options for small businesses and freelancers.",
  productName: "QuickBooks Online",
  productSlug: "quickbooks-online",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getAccountingReviewUrl("quickbooks-online"),
  quickAnswerParagraphs: [
    "QuickBooks Online is the market leader, but teams often look for alternatives when cost adds up, they want a simpler tool (FreshBooks, Wave), or they prefer a different ecosystem (Xero, Zoho Books). Xero is the best full QuickBooks alternative with a lower entry price. FreshBooks fits freelancers; Wave fits free accounting; Zoho Books fits value and automation.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "QuickBooks tiers and add-ons can get expensive. Xero and Zoho Books often have lower entry prices; Wave is free for core accounting." },
    { heading: "Complexity", body: "Very small teams or freelancers may find QuickBooks more than they need. FreshBooks and Wave offer simpler onboarding." },
    { heading: "Ecosystem", body: "Some prefer not to lock into Intuit. Xero and Sage are established alternatives; Zoho fits those already in Zoho." },
  ],
  topAlternatives: QUICKBOOKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(quickbooksOriginalRow, QUICKBOOKS_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with a cleaner UI and often lower entry price. Strong for businesses that want capable accounting without QuickBooks.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on invoicing and time tracking for freelancers and service businesses. Simpler than QuickBooks; strong client-facing tools.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { productName: "Zoho Books", heading: "Best for value and Zoho ecosystem", body: "Zoho Books offers strong value and automation. Best if you already use Zoho or want more for the price.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing. For very small businesses and freelancers that don't need advanced features.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-wave") },
    { productName: "Sage Accounting", heading: "Best for SMBs and compliance", body: "Sage Accounting offers core accounting with a compliance focus. Quote-based pricing; good for businesses that prefer Sage.", reviewHref: getAccountingReviewUrl("sage-accounting"), compareHref: getAccountingCompareUrl("sage-accounting-vs-quickbooks-online") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { label: "QuickBooks Online vs Zoho Books", href: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
    { label: "QuickBooks Online vs Wave", href: getAccountingCompareUrl("quickbooks-online-vs-wave") },
  ],
  relatedResources: defaultRelatedResources("QuickBooks Online", getAccountingReviewUrl("quickbooks-online")),
  faqItems: [
    { q: "What is the best QuickBooks Online alternative?", a: "Xero is the best full alternative with lower entry price and clean UI. FreshBooks fits freelancers; Wave fits free accounting; Zoho Books fits value and automation." },
    { q: "Is QuickBooks better than Xero?", a: "QuickBooks has the larger US ecosystem and market share; Xero often has lower entry price and a cleaner interface. Both are full-featured; choose by preference and price." },
    { q: "Which accounting software is cheaper than QuickBooks?", a: "Xero and Zoho Books often have lower starting prices. Wave is free for core accounting. Compare at your user count and feature needs." },
  ],
};

// ——— Xero alternatives ———
const XERO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "largest US ecosystem", description: "Market leader with broad features and largest app marketplace.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-xero"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem; familiar" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking for freelancers.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("xero-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused; time tracking" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value and automation", description: "Affordable with strong automation. Good for Zoho users.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("xero-vs-zoho-books"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing.", reviewHref: getAccountingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free core accounting" },
  { slug: "sage-accounting", name: "Sage Accounting", logoSrc: "/Logos/sage.png", rating: "4.3", bestFor: "SMBs and compliance", description: "Core accounting with compliance focus. Quote-based.", reviewHref: getAccountingReviewUrl("sage-accounting"), compareHref: getAccountingCompareUrl("sage-accounting-vs-xero"), startingPrice: "Quote", standoutFeature: "Compliance-focused" },
];

const xeroPage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best Xero Alternatives (2026)",
  subtitle: "If Xero isn't the right fit—because of features, integrations, or workflow—these accounting alternatives offer strong options from QuickBooks to FreshBooks and Wave.",
  productName: "Xero",
  productSlug: "xero",
  originalReviewHref: getAccountingReviewUrl("xero"),
  quickAnswerParagraphs: [
    "Teams look for Xero alternatives when they want the largest US ecosystem (QuickBooks), simpler freelancer tools (FreshBooks), free accounting (Wave), or value and automation (Zoho Books). QuickBooks Online is the main alternative with broader market share; FreshBooks and Wave suit smaller or cost-conscious teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "US ecosystem and mindshare", body: "QuickBooks has larger US market share and more accountants who use it. Some businesses prefer that familiarity." },
    { heading: "Simplicity or free", body: "FreshBooks and Wave offer simpler onboarding or free core accounting for very small teams." },
    { heading: "Zoho or Sage ecosystem", body: "Zoho Books and Sage Accounting suit businesses already in those ecosystems." },
  ],
  topAlternatives: XERO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", bestFor: "QuickBooks alternative", startingPrice: "$15/mo", standoutFeature: "Clean UI; accountant-friendly", reviewHref: getAccountingReviewUrl("xero") },
    XERO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks Online", heading: "Best for largest US ecosystem", body: "QuickBooks has the broadest US ecosystem and app marketplace. Choose when you want the most established platform.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on freelancers with simple invoicing and time tracking. Lighter than Xero for solos.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("xero-vs-freshbooks") },
    { productName: "Zoho Books", heading: "Best for value and automation", body: "Zoho Books offers strong value and automation. Good for Zoho users or value-conscious teams.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("xero-vs-zoho-books") },
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing. For very small businesses that don't need paid features.", reviewHref: getAccountingReviewUrl("wave") },
    { productName: "Sage Accounting", heading: "Best for SMBs and compliance", body: "Sage Accounting offers core accounting with compliance focus. For businesses that prefer Sage.", reviewHref: getAccountingReviewUrl("sage-accounting"), compareHref: getAccountingCompareUrl("sage-accounting-vs-xero") },
  ],
  relatedComparisons: [
    { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
    { label: "Xero vs Zoho Books", href: getAccountingCompareUrl("xero-vs-zoho-books") },
    { label: "Sage Accounting vs Xero", href: getAccountingCompareUrl("sage-accounting-vs-xero") },
  ],
  relatedResources: defaultRelatedResources("Xero", getAccountingReviewUrl("xero")),
  faqItems: [
    { q: "What is the best Xero alternative?", a: "QuickBooks Online is the main alternative with the largest US ecosystem. FreshBooks fits freelancers; Wave fits free accounting; Zoho Books fits value." },
    { q: "Is Xero better than QuickBooks?", a: "Xero often has lower entry price and a cleaner UI; QuickBooks has larger US market share and ecosystem. Both are full-featured; choose by preference and price." },
    { q: "Which accounting software is cheaper than Xero?", a: "Wave is free for core accounting. Zoho Books can be similarly priced or lower. Compare tiers at your needs." },
  ],
};

// ——— FreshBooks alternatives ———
const FRESHBOOKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "full accounting", description: "Full-featured accounting with largest ecosystem.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-freshbooks"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem; full depth" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Full cloud accounting with clean UI.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("xero-vs-freshbooks"), startingPrice: "$15/mo", standoutFeature: "Clean UI; accountant-friendly" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing for small business.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("wave-vs-freshbooks"), startingPrice: "Free", standoutFeature: "Free core accounting" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value and projects", description: "Affordable with projects and client portal.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("zoho-books-vs-freshbooks"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
  { slug: "kashoo", name: "Kashoo", logoSrc: "/Logos/kashoo.jpeg", rating: "4.2", bestFor: "simple bookkeeping", description: "Simple bookkeeping for small business.", reviewHref: getAccountingReviewUrl("kashoo"), compareHref: getAccountingCompareUrl("kashoo-vs-freshbooks"), startingPrice: "Quote", standoutFeature: "Simplicity" },
];

const freshbooksPage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best FreshBooks Alternatives (2026)",
  subtitle: "If FreshBooks isn't the right fit—because you need full accounting, free software, or a different workflow—these alternatives offer strong options.",
  productName: "FreshBooks",
  productSlug: "freshbooks",
  originalReviewHref: getAccountingReviewUrl("freshbooks"),
  quickAnswerParagraphs: [
    "FreshBooks is built for freelancers; teams look for alternatives when they need full double-entry accounting (QuickBooks, Xero), free software (Wave), or different value (Zoho Books, Kashoo). QuickBooks and Xero offer more depth; Wave offers free accounting; Zoho Books offers strong value.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Full accounting depth", body: "FreshBooks is optimized for invoicing and time tracking. QuickBooks and Xero offer full double-entry accounting and reporting." },
    { heading: "Cost", body: "Wave is free for core accounting; Zoho Books and Kashoo can be lower cost for similar simplicity." },
    { heading: "Ecosystem", body: "QuickBooks and Xero have larger app marketplaces; Zoho fits the Zoho suite." },
  ],
  topAlternatives: FRESHBOOKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "freelancers", startingPrice: "$19/mo", standoutFeature: "Freelancer-focused; time tracking", reviewHref: getAccountingReviewUrl("freshbooks") },
    FRESHBOOKS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks Online", heading: "Best for full accounting", body: "QuickBooks offers full accounting depth and the largest US ecosystem. For businesses that outgrow FreshBooks.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with a clean UI. Strong alternative with lower entry price.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("xero-vs-freshbooks") },
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing. For freelancers who want to minimize cost.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("wave-vs-freshbooks") },
    { productName: "Zoho Books", heading: "Best for value and projects", body: "Zoho Books offers projects and client portal at good value. Good for Zoho users.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("zoho-books-vs-freshbooks") },
    { productName: "Kashoo", heading: "Best for simple bookkeeping", body: "Kashoo offers straightforward bookkeeping. Simpler, often cheaper option.", reviewHref: getAccountingReviewUrl("kashoo"), compareHref: getAccountingCompareUrl("kashoo-vs-freshbooks") },
  ],
  relatedComparisons: [
    { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
    { label: "Wave vs FreshBooks", href: getAccountingCompareUrl("wave-vs-freshbooks") },
    { label: "Zoho Books vs FreshBooks", href: getAccountingCompareUrl("zoho-books-vs-freshbooks") },
    { label: "Kashoo vs FreshBooks", href: getAccountingCompareUrl("kashoo-vs-freshbooks") },
  ],
  relatedResources: defaultRelatedResources("FreshBooks", getAccountingReviewUrl("freshbooks")),
  faqItems: [
    { q: "What is the best FreshBooks alternative?", a: "QuickBooks and Xero offer full accounting; Wave offers free accounting; Zoho Books offers value and projects; Kashoo offers simplicity." },
    { q: "Is FreshBooks better than QuickBooks?", a: "FreshBooks is better for freelancers who want simple invoicing and time tracking; QuickBooks is better for full accounting and ecosystem. Choose by scope." },
    { q: "Which accounting software is free like FreshBooks?", a: "Wave offers free accounting and invoicing. FreshBooks is paid; Wave is free for core features with add-ons for payments and payroll." },
  ],
};

// ——— Zoho Books alternatives ———
const ZOHO_BOOKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "largest ecosystem", description: "Market leader with broad features and app marketplace.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-zoho-books"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Cloud accounting with clean UI and 700+ integrations.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("xero-vs-zoho-books"), startingPrice: "$15/mo", standoutFeature: "Clean UI; integrations" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking for freelancers.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("zoho-books-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("zoho-books-vs-wave"), startingPrice: "Free", standoutFeature: "Free core accounting" },
  { slug: "sage-accounting", name: "Sage Accounting", logoSrc: "/Logos/sage.png", rating: "4.3", bestFor: "SMBs and compliance", description: "Core accounting for SMBs. Quote-based.", reviewHref: getAccountingReviewUrl("sage-accounting"), startingPrice: "Quote", standoutFeature: "Compliance-focused" },
];

const zohoBooksPage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best Zoho Books Alternatives (2026)",
  subtitle: "If Zoho Books isn't the right fit—because you're not in Zoho, need a larger ecosystem, or prefer free software—these alternatives offer strong options.",
  productName: "Zoho Books",
  productSlug: "zoho-books",
  originalReviewHref: getAccountingReviewUrl("zoho-books"),
  quickAnswerParagraphs: [
    "Zoho Books fits Zoho users and value-conscious teams. Alternatives include QuickBooks and Xero for larger ecosystems, FreshBooks for freelancers, Wave for free accounting, and Sage for compliance-focused SMBs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not in Zoho", body: "If you don't use other Zoho apps, QuickBooks or Xero may offer better third-party integration breadth." },
    { heading: "Free or different value", body: "Wave is free for core accounting; FreshBooks may suit freelancers better." },
    { heading: "Compliance or brand", body: "Sage Accounting suits businesses that prefer Sage; QuickBooks has more US mindshare." },
  ],
  topAlternatives: ZOHO_BOOKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", bestFor: "value and Zoho ecosystem", startingPrice: "$15/mo", standoutFeature: "Value; automation", reviewHref: getAccountingReviewUrl("zoho-books") },
    ZOHO_BOOKS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks Online", heading: "Best for largest ecosystem", body: "QuickBooks has the largest US app marketplace and accountant familiarity. For teams that want maximum integration options.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with strong integrations. Similar price tier to Zoho with different ecosystem.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("xero-vs-zoho-books") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on freelancers with invoicing and time tracking. Simpler client-facing tools.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("zoho-books-vs-freshbooks") },
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing. For teams that want zero cost for core features.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("zoho-books-vs-wave") },
    { productName: "Sage Accounting", heading: "Best for SMBs and compliance", body: "Sage Accounting offers core accounting with compliance focus. For businesses that prefer Sage.", reviewHref: getAccountingReviewUrl("sage-accounting") },
  ],
  relatedComparisons: [
    { label: "QuickBooks Online vs Zoho Books", href: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
    { label: "Xero vs Zoho Books", href: getAccountingCompareUrl("xero-vs-zoho-books") },
    { label: "Zoho Books vs FreshBooks", href: getAccountingCompareUrl("zoho-books-vs-freshbooks") },
    { label: "Zoho Books vs Wave", href: getAccountingCompareUrl("zoho-books-vs-wave") },
  ],
  relatedResources: defaultRelatedResources("Zoho Books", getAccountingReviewUrl("zoho-books")),
  faqItems: [
    { q: "What is the best Zoho Books alternative?", a: "QuickBooks and Xero offer larger ecosystems; FreshBooks fits freelancers; Wave is free; Sage fits compliance-focused SMBs." },
    { q: "Is Zoho Books better than QuickBooks?", a: "Zoho Books often offers better value and automation; QuickBooks has the larger US ecosystem. Choose Zoho for value and Zoho ecosystem; QuickBooks for breadth." },
    { q: "Which accounting software is free like Zoho Books?", a: "Wave is free for core accounting and invoicing. Zoho Books is paid but affordable; Wave is free with add-ons for payments and payroll." },
  ],
};

// ——— Wave alternatives ———
const WAVE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "full accounting", description: "Full-featured accounting with largest ecosystem.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("wave-vs-quickbooks-online"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Full cloud accounting with clean UI.", reviewHref: getAccountingReviewUrl("xero"), startingPrice: "$15/mo", standoutFeature: "Clean UI; accountant-friendly" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking for freelancers.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("wave-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value", description: "Affordable with automation and projects.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("zoho-books-vs-wave"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
  { slug: "kashoo", name: "Kashoo", logoSrc: "/Logos/kashoo.jpeg", rating: "4.2", bestFor: "simple bookkeeping", description: "Simple paid bookkeeping for small business.", reviewHref: getAccountingReviewUrl("kashoo"), compareHref: getAccountingCompareUrl("kashoo-vs-wave"), startingPrice: "Quote", standoutFeature: "Simplicity" },
];

const wavePage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best Wave Alternatives (2026)",
  subtitle: "If Wave isn't the right fit—because you need more features, paid support, or a larger ecosystem—these accounting alternatives offer strong options.",
  productName: "Wave",
  productSlug: "wave",
  originalReviewHref: getAccountingReviewUrl("wave"),
  quickAnswerParagraphs: [
    "Wave is free for core accounting; teams look for alternatives when they need more features, better support, or a larger ecosystem. QuickBooks and Xero offer full depth; FreshBooks fits freelancers; Zoho Books offers value; Kashoo is another simple option.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Feature depth", body: "Wave focuses on essentials. QuickBooks, Xero, and Zoho Books offer more reporting, integrations, and scalability." },
    { heading: "Support and ecosystem", body: "Paid products often include better support and larger app marketplaces." },
    { heading: "Alternatives to free", body: "Kashoo is a simple paid option; FreshBooks and Zoho offer more structure for similar or low cost." },
  ],
  topAlternatives: WAVE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", bestFor: "free accounting", startingPrice: "Free", standoutFeature: "Free core accounting", reviewHref: getAccountingReviewUrl("wave") },
    WAVE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks Online", heading: "Best for full accounting", body: "QuickBooks offers full accounting and the largest US ecosystem. For businesses that outgrow Wave.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("wave-vs-quickbooks-online") },
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with clean UI and lower entry price than QuickBooks.", reviewHref: getAccountingReviewUrl("xero") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on freelancers with stronger time tracking and client tools.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("wave-vs-freshbooks") },
    { productName: "Zoho Books", heading: "Best for value", body: "Zoho Books offers strong value and automation at low cost. More features than Wave for a modest price.", reviewHref: getAccountingReviewUrl("zoho-books"), compareHref: getAccountingCompareUrl("zoho-books-vs-wave") },
    { productName: "Kashoo", heading: "Best for simple bookkeeping", body: "Kashoo is a simple paid bookkeeping option. For teams that want straightforward paid software.", reviewHref: getAccountingReviewUrl("kashoo"), compareHref: getAccountingCompareUrl("kashoo-vs-wave") },
  ],
  relatedComparisons: [
    { label: "Wave vs QuickBooks Online", href: getAccountingCompareUrl("wave-vs-quickbooks-online") },
    { label: "Wave vs FreshBooks", href: getAccountingCompareUrl("wave-vs-freshbooks") },
    { label: "Zoho Books vs Wave", href: getAccountingCompareUrl("zoho-books-vs-wave") },
    { label: "Kashoo vs Wave", href: getAccountingCompareUrl("kashoo-vs-wave") },
  ],
  relatedResources: defaultRelatedResources("Wave", getAccountingReviewUrl("wave")),
  faqItems: [
    { q: "What is the best Wave alternative?", a: "QuickBooks and Xero offer full accounting; FreshBooks fits freelancers; Zoho Books offers value; Kashoo offers simple paid bookkeeping." },
    { q: "Is Wave better than QuickBooks?", a: "Wave is free for core accounting; QuickBooks offers more features, integrations, and support. Choose Wave for free; QuickBooks for depth." },
    { q: "Which accounting software is free like Wave?", a: "Wave is one of the few with free core accounting and invoicing. Others are paid; Zoho and FreshBooks have low-cost tiers." },
  ],
};

// ——— Sage Accounting alternatives ———
const SAGE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "largest US ecosystem", description: "Market leader with broad features and app marketplace.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("sage-accounting-vs-quickbooks-online"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Cloud accounting with clean UI and integrations.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("sage-accounting-vs-xero"), startingPrice: "$15/mo", standoutFeature: "Clean UI; integrations" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("sage-accounting-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value", description: "Affordable with automation.", reviewHref: getAccountingReviewUrl("zoho-books"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing.", reviewHref: getAccountingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free core accounting" },
];

const sagePage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best Sage Accounting Alternatives (2026)",
  subtitle: "If Sage Accounting isn't the right fit—because of pricing, ecosystem, or features—these accounting alternatives offer strong options.",
  productName: "Sage Accounting",
  productSlug: "sage-accounting",
  originalReviewHref: getAccountingReviewUrl("sage-accounting"),
  quickAnswerParagraphs: [
    "Sage Accounting suits SMBs that prefer Sage; teams look for alternatives when they want transparent pricing (QuickBooks, Xero, Zoho), free software (Wave), or freelancer focus (FreshBooks). QuickBooks and Xero are the main alternatives with larger US ecosystems.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Pricing transparency", body: "Sage often uses quote-based pricing. QuickBooks, Xero, and Zoho Books have published tiers." },
    { heading: "US ecosystem", body: "QuickBooks and Xero have larger US app marketplaces and accountant adoption." },
    { heading: "Simplicity or free", body: "FreshBooks and Wave offer simpler onboarding or free core accounting." },
  ],
  topAlternatives: SAGE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "sage-accounting", name: "Sage Accounting", logoSrc: "/Logos/sage.png", bestFor: "SMBs and compliance", startingPrice: "Quote", standoutFeature: "Compliance-focused", reviewHref: getAccountingReviewUrl("sage-accounting") },
    SAGE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks Online", heading: "Best for largest US ecosystem", body: "QuickBooks has the largest US ecosystem and transparent pricing. For teams that want maximum integration options.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("sage-accounting-vs-quickbooks-online") },
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with clean UI and strong integrations.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("sage-accounting-vs-xero") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on freelancers with simple invoicing and time tracking.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("sage-accounting-vs-freshbooks") },
    { productName: "Zoho Books", heading: "Best for value", body: "Zoho Books offers strong value and automation with published pricing.", reviewHref: getAccountingReviewUrl("zoho-books") },
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing.", reviewHref: getAccountingReviewUrl("wave") },
  ],
  relatedComparisons: [
    { label: "Sage Accounting vs QuickBooks Online", href: getAccountingCompareUrl("sage-accounting-vs-quickbooks-online") },
    { label: "Sage Accounting vs Xero", href: getAccountingCompareUrl("sage-accounting-vs-xero") },
    { label: "Sage Accounting vs FreshBooks", href: getAccountingCompareUrl("sage-accounting-vs-freshbooks") },
  ],
  relatedResources: defaultRelatedResources("Sage Accounting", getAccountingReviewUrl("sage-accounting")),
  faqItems: [
    { q: "What is the best Sage Accounting alternative?", a: "QuickBooks and Xero are the main alternatives with larger US ecosystems and published pricing. FreshBooks fits freelancers; Wave is free; Zoho Books offers value." },
    { q: "Is Sage Accounting better than QuickBooks?", a: "Sage suits businesses that prefer Sage and compliance focus; QuickBooks has the larger US ecosystem and more transparent pricing. Choose by preference and region." },
    { q: "Which accounting software has transparent pricing like Sage?", a: "QuickBooks, Xero, Zoho Books, and FreshBooks have published pricing tiers. Sage often uses quote-based pricing." },
  ],
};

// ——— Odoo Accounting alternatives ———
const ODOO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "standalone accounting", description: "Market leader with largest ecosystem. No ERP lock-in.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("odoo-accounting-vs-quickbooks-online"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Full cloud accounting with clean UI.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("odoo-accounting-vs-xero"), startingPrice: "$15/mo", standoutFeature: "Clean UI; integrations" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking.", reviewHref: getAccountingReviewUrl("freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value and Zoho suite", description: "Affordable; part of Zoho suite.", reviewHref: getAccountingReviewUrl("zoho-books"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing.", reviewHref: getAccountingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free core accounting" },
];

const odooPage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best Odoo Accounting Alternatives (2026)",
  subtitle: "If Odoo Accounting isn't the right fit—because you don't use Odoo ERP, want standalone accounting, or prefer a different vendor—these alternatives offer strong options.",
  productName: "Odoo Accounting",
  productSlug: "odoo-accounting",
  originalReviewHref: getAccountingReviewUrl("odoo-accounting"),
  quickAnswerParagraphs: [
    "Odoo Accounting is the accounting module within Odoo ERP. Teams look for alternatives when they don't use Odoo, want standalone accounting (QuickBooks, Xero), or prefer simpler tools (FreshBooks, Wave). QuickBooks and Xero are the main standalone alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not using Odoo", body: "Odoo Accounting is best when you already use Odoo for CRM, inventory, or projects. Standalone accounting (QuickBooks, Xero) fits otherwise." },
    { heading: "Standalone depth", body: "QuickBooks and Xero are built as best-of-breed accounting with larger app marketplaces." },
    { heading: "Simplicity or free", body: "FreshBooks and Wave offer simpler onboarding or free accounting." },
  ],
  topAlternatives: ODOO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "odoo-accounting", name: "Odoo Accounting", logoSrc: "/Logos/odoo.jpeg", bestFor: "Odoo ERP users", startingPrice: "Quote", standoutFeature: "ERP integration", reviewHref: getAccountingReviewUrl("odoo-accounting") },
    ODOO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks Online", heading: "Best for standalone accounting", body: "QuickBooks is the market leader for standalone accounting with the largest US ecosystem.", reviewHref: getAccountingReviewUrl("quickbooks-online"), compareHref: getAccountingCompareUrl("odoo-accounting-vs-quickbooks-online") },
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with clean UI. Strong standalone alternative.", reviewHref: getAccountingReviewUrl("xero"), compareHref: getAccountingCompareUrl("odoo-accounting-vs-xero") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on freelancers with simple invoicing and time tracking.", reviewHref: getAccountingReviewUrl("freshbooks") },
    { productName: "Zoho Books", heading: "Best for value and Zoho suite", body: "Zoho Books is part of the Zoho suite with good value and automation.", reviewHref: getAccountingReviewUrl("zoho-books") },
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing.", reviewHref: getAccountingReviewUrl("wave") },
  ],
  relatedComparisons: [
    { label: "Odoo Accounting vs QuickBooks Online", href: getAccountingCompareUrl("odoo-accounting-vs-quickbooks-online") },
    { label: "Odoo Accounting vs Xero", href: getAccountingCompareUrl("odoo-accounting-vs-xero") },
  ],
  relatedResources: defaultRelatedResources("Odoo Accounting", getAccountingReviewUrl("odoo-accounting")),
  faqItems: [
    { q: "What is the best Odoo Accounting alternative?", a: "QuickBooks and Xero are the best standalone alternatives. FreshBooks fits freelancers; Wave is free; Zoho Books fits the Zoho suite." },
    { q: "Is Odoo Accounting better than QuickBooks?", a: "Odoo Accounting fits when you already use Odoo ERP; QuickBooks is better for standalone accounting and has the larger US ecosystem. Choose by whether you need ERP integration." },
    { q: "Can I use accounting software without Odoo?", a: "Yes. QuickBooks, Xero, FreshBooks, Zoho Books, and Wave are all standalone accounting products. Choose based on your needs and budget." },
  ],
};

// ——— Kashoo alternatives ———
const KASHOO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free accounting", description: "Free accounting and invoicing. Similar simplicity.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("kashoo-vs-wave"), startingPrice: "Free", standoutFeature: "Free core accounting" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Simple invoicing and time tracking for freelancers.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("kashoo-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "quickbooks-online", name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "full accounting", description: "Full-featured accounting with largest ecosystem.", reviewHref: getAccountingReviewUrl("quickbooks-online"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "QuickBooks alternative", description: "Cloud accounting with clean UI.", reviewHref: getAccountingReviewUrl("xero"), startingPrice: "$15/mo", standoutFeature: "Clean UI; integrations" },
  { slug: "zoho-books", name: "Zoho Books", logoSrc: "/Logos/zoho.jpeg", rating: "4.4", bestFor: "value", description: "Affordable with automation.", reviewHref: getAccountingReviewUrl("zoho-books"), startingPrice: "$15/mo", standoutFeature: "Value; automation" },
];

const kashooPage: AlternativesTemplateProps = {
  ...quickbooksPage,
  title: "Best Kashoo Alternatives (2026)",
  subtitle: "If Kashoo isn't the right fit—because you want free software, more features, or a different workflow—these accounting alternatives offer strong options.",
  productName: "Kashoo",
  productSlug: "kashoo",
  originalReviewHref: getAccountingReviewUrl("kashoo"),
  quickAnswerParagraphs: [
    "Kashoo offers simple bookkeeping; teams look for alternatives when they want free accounting (Wave), more freelancer features (FreshBooks), or full depth (QuickBooks, Xero, Zoho Books). Wave is the closest free alternative; FreshBooks adds time tracking and polish; QuickBooks and Xero add ecosystem.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Free option", body: "Wave offers free accounting and invoicing with similar simplicity to Kashoo." },
    { heading: "More features", body: "FreshBooks adds time tracking and client tools; QuickBooks and Xero add full ecosystem." },
    { heading: "Value", body: "Zoho Books offers strong value and automation at comparable or lower cost." },
  ],
  topAlternatives: KASHOO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "kashoo", name: "Kashoo", logoSrc: "/Logos/kashoo.jpeg", bestFor: "simple bookkeeping", startingPrice: "Quote", standoutFeature: "Simplicity", reviewHref: getAccountingReviewUrl("kashoo") },
    KASHOO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Wave", heading: "Best for free accounting", body: "Wave provides free accounting and invoicing. Closest to Kashoo's simplicity with no subscription for core features.", reviewHref: getAccountingReviewUrl("wave"), compareHref: getAccountingCompareUrl("kashoo-vs-wave") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on freelancers with stronger invoicing and time tracking.", reviewHref: getAccountingReviewUrl("freshbooks"), compareHref: getAccountingCompareUrl("kashoo-vs-freshbooks") },
    { productName: "QuickBooks Online", heading: "Best for full accounting", body: "QuickBooks offers full accounting and the largest US ecosystem.", reviewHref: getAccountingReviewUrl("quickbooks-online") },
    { productName: "Xero", heading: "Best QuickBooks alternative", body: "Xero offers full cloud accounting with clean UI.", reviewHref: getAccountingReviewUrl("xero") },
    { productName: "Zoho Books", heading: "Best for value", body: "Zoho Books offers strong value and automation.", reviewHref: getAccountingReviewUrl("zoho-books") },
  ],
  relatedComparisons: [
    { label: "Kashoo vs Wave", href: getAccountingCompareUrl("kashoo-vs-wave") },
    { label: "Kashoo vs FreshBooks", href: getAccountingCompareUrl("kashoo-vs-freshbooks") },
  ],
  relatedResources: defaultRelatedResources("Kashoo", getAccountingReviewUrl("kashoo")),
  faqItems: [
    { q: "What is the best Kashoo alternative?", a: "Wave is the best free alternative with similar simplicity. FreshBooks fits freelancers; QuickBooks and Xero offer full depth; Zoho Books offers value." },
    { q: "Is Kashoo better than Wave?", a: "Kashoo is paid with straightforward bookkeeping; Wave is free for core accounting. Choose Kashoo for a paid simple option; Wave for free." },
    { q: "Which accounting software is free like Kashoo?", a: "Wave is free for core accounting and invoicing. Kashoo is paid; Wave offers similar simplicity at no cost for core features." },
  ],
};

// ——— Export ———
const ACCOUNTING_ALTERNATIVES_SLUGS = [
  "quickbooks-online", "xero", "freshbooks", "zoho-books", "wave",
  "sage-accounting", "odoo-accounting", "kashoo",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  "quickbooks-online": quickbooksPage,
  xero: xeroPage,
  freshbooks: freshbooksPage,
  "zoho-books": zohoBooksPage,
  wave: wavePage,
  "sage-accounting": sagePage,
  "odoo-accounting": odooPage,
  kashoo: kashooPage,
};

export function getAccountingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getAccountingAlternativesSlugs(): string[] {
  return [...ACCOUNTING_ALTERNATIVES_SLUGS];
}
