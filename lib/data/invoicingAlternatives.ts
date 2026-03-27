/**
 * Invoicing alternatives page data.
 * Used by app/invoicing/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live invoicing review pages.
 */

import { getInvoicingReviewUrl, getInvoicingCompareUrl, getInvoicingBestForUrl } from "@/lib/routes";
import { getInvoicingComparisonBySlug } from "@/lib/data/invoicingComparisons";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesDetailBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/invoicing", label: "Invoicing" };
const ROUNDUP_HREF = "/invoicing/best-invoicing-software";
const COMPARE_HUB = "/invoicing/compare";
const GUIDES_HUB = "/invoicing/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Invoicing and recurring billing", body: "Choose software that supports the invoice types you need: one-off, recurring, and estimates. Recurring billing and payment reminders matter for retainers and subscriptions." },
  { heading: "Payment collection", body: "Look for payment links, online payment acceptance, and clear tracking of paid vs unpaid. Some tools include payment processing; others integrate with Stripe or PayPal." },
  { heading: "Time tracking and projects", body: "If you bill by time or project, pick a tool with time tracking and project-based invoicing. FreshBooks and Zoho Invoice are strong here; Wave is simpler." },
  { heading: "Accounting integration", body: "Invoicing data should sync to your accounting software. QuickBooks and Xero have built-in books; FreshBooks and Wave connect to accounting tools." },
  { heading: "Pricing and limits", body: "Compare base price, client or invoice limits, and payment processing fees. Free options (Wave, Zoho Invoice free tier) suit very small needs; paid tiers add capacity." },
];

function invRel(slug: string) {
  return toAlternativesRelatedComparison(getInvoicingCompareUrl(slug), getInvoicingComparisonBySlug(slug));
}

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
    { label: "Invoicing hub", href: CATEGORY.href },
    { label: "Best invoicing software", href: ROUNDUP_HREF },
    { label: "Compare invoicing software", href: COMPARE_HUB },
    { label: "Invoicing guides", href: GUIDES_HUB },
    { label: "Best for freelancers", href: getInvoicingBestForUrl("freelancers") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— FreshBooks alternatives ———
const FRESHBOOKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "QuickBooks ecosystem", description: "Full accounting plus invoicing for businesses on QuickBooks.", reviewHref: getInvoicingReviewUrl("quickbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-quickbooks"), startingPrice: "$30/mo", standoutFeature: "Full accounting; ecosystem" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing and receipt scanning for small business.", reviewHref: getInvoicingReviewUrl("wave"), compareHref: getInvoicingCompareUrl("freshbooks-vs-wave"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value and projects", description: "Affordable invoicing with projects and client portal. Free tier.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), compareHref: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "accounting integration", description: "Cloud invoicing and quoting with full accounting.", reviewHref: getInvoicingReviewUrl("xero"), compareHref: getInvoicingCompareUrl("freshbooks-vs-xero"), startingPrice: "$15/mo", standoutFeature: "Accounting integration" },
  { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: "4.3", bestFor: "self-hosted and open source", description: "Open-source and cloud options; flexible and customizable.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), compareHref: getInvoicingCompareUrl("invoice-ninja-vs-freshbooks"), startingPrice: "Free / paid", standoutFeature: "Self-hosted option" },
];

const freshbooksOriginalRow: AlternativesTableRow = {
  slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "freelancers and service businesses", startingPrice: "$19/mo", standoutFeature: "Time tracking; ease of use", reviewHref: getInvoicingReviewUrl("freshbooks"),
};

const freshbooksPage: AlternativesTemplateProps = {
  title: "Best FreshBooks Alternatives (2026)",
  subtitle: "If FreshBooks isn't the right fit—because of cost, accounting depth, or workflow—these invoicing alternatives offer strong options for freelancers and small businesses.",
  productName: "FreshBooks",
  productSlug: "freshbooks",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getInvoicingReviewUrl("freshbooks"),
  quickAnswerParagraphs: [
    "FreshBooks is our top pick for freelancers; teams look for alternatives when they need free software (Wave, Zoho Invoice), full accounting (QuickBooks, Xero), or different value (Invoice Ninja, HoneyBook, Bonsai). Wave and Zoho Invoice offer free or low-cost options; QuickBooks and Xero add accounting depth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Wave and Zoho Invoice have free tiers; FreshBooks is paid. Teams on a tight budget may prefer free options." },
    { heading: "Accounting depth", body: "QuickBooks and Xero combine invoicing with full accounting. Choose them if you need deeper books and reporting." },
    { heading: "Workflow", body: "HoneyBook and Bonsai focus on proposals and contracts; Invoice Ninja offers self-hosted and open source." },
  ],
  topAlternatives: FRESHBOOKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(freshbooksOriginalRow, FRESHBOOKS_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "QuickBooks", heading: "Best for QuickBooks ecosystem", body: "QuickBooks offers full accounting plus invoicing. For businesses already on or choosing QuickBooks.", reviewHref: getInvoicingReviewUrl("quickbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free invoicing and receipt scanning. For cost-conscious freelancers and small teams.", reviewHref: getInvoicingReviewUrl("wave"), compareHref: getInvoicingCompareUrl("freshbooks-vs-wave") },
    { productName: "Zoho Invoice", heading: "Best for value and projects", body: "Zoho Invoice offers a free tier and strong automation. Good for Zoho users and value-focused teams.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), compareHref: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks") },
    { productName: "Xero", heading: "Best for accounting integration", body: "Xero combines invoicing with full cloud accounting. For teams that want one platform for invoicing and books.", reviewHref: getInvoicingReviewUrl("xero"), compareHref: getInvoicingCompareUrl("freshbooks-vs-xero") },
    { productName: "Invoice Ninja", heading: "Best for self-hosted and open source", body: "Invoice Ninja offers cloud and self-hosted options with flexibility and customization.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), compareHref: getInvoicingCompareUrl("invoice-ninja-vs-freshbooks") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    invRel("freshbooks-vs-quickbooks"),
    invRel("freshbooks-vs-wave"),
    invRel("zoho-invoice-vs-freshbooks"),
    invRel("freshbooks-vs-xero"),
    invRel("invoice-ninja-vs-freshbooks"),
  ],
  relatedResources: defaultRelatedResources("FreshBooks", getInvoicingReviewUrl("freshbooks")),
  faqItems: [
    { q: "What is the best FreshBooks alternative?", a: "QuickBooks and Xero offer full accounting; Wave and Zoho Invoice offer free or low-cost invoicing; Invoice Ninja offers self-hosted and open source." },
    { q: "Is FreshBooks better than Wave?", a: "FreshBooks offers more features and polish for freelancers; Wave is free for core invoicing. Choose FreshBooks for features; Wave for free." },
    { q: "Which invoicing software is cheaper than FreshBooks?", a: "Wave is free for invoicing; Zoho Invoice has a free tier. Both can be cheaper than FreshBooks for basic needs." },
  ],
};

// ——— QuickBooks alternatives ———
const QUICKBOOKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Invoicing and time tracking built for freelancers and service businesses.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-quickbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused; ease of use" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "accounting integration", description: "Cloud invoicing and accounting. Lower entry price.", reviewHref: getInvoicingReviewUrl("xero"), compareHref: getInvoicingCompareUrl("xero-vs-quickbooks"), startingPrice: "$15/mo", standoutFeature: "Accounting integration" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing and accounting for small business.", reviewHref: getInvoicingReviewUrl("wave"), compareHref: getInvoicingCompareUrl("quickbooks-vs-wave"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value", description: "Affordable invoicing with free tier and automation.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: "4.3", bestFor: "self-hosted", description: "Open-source and cloud options; no ecosystem lock-in.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), startingPrice: "Free / paid", standoutFeature: "Self-hosted option" },
];

const quickbooksPage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best QuickBooks Invoicing Alternatives (2026)",
  subtitle: "If QuickBooks invoicing isn't the right fit—because you're not on QuickBooks, want simpler or free options—these invoicing alternatives offer strong options.",
  productName: "QuickBooks",
  productSlug: "quickbooks",
  originalReviewHref: getInvoicingReviewUrl("quickbooks"),
  quickAnswerParagraphs: [
    "QuickBooks invoicing fits businesses already on QuickBooks. Teams look for alternatives when they're not on the platform, want freelancer-focused tools (FreshBooks), free software (Wave, Zoho Invoice), or a different ecosystem (Xero). FreshBooks and Xero are the main alternatives; Wave and Zoho Invoice suit free or value needs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not on QuickBooks", body: "If you don't use QuickBooks for accounting, its invoicing module has less advantage. FreshBooks and Xero work standalone." },
    { heading: "Cost and simplicity", body: "Wave is free; Zoho Invoice has a free tier. FreshBooks is often simpler for invoicing-only workflows." },
    { heading: "Ecosystem", body: "Xero offers a different accounting ecosystem; Invoice Ninja offers self-hosted and open source." },
  ],
  topAlternatives: QUICKBOOKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", bestFor: "QuickBooks ecosystem", startingPrice: "$30/mo", standoutFeature: "Integrated with QB books", reviewHref: getInvoicingReviewUrl("quickbooks") },
    QUICKBOOKS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks is built for freelancers with strong invoicing and time tracking. Simpler than QuickBooks for invoicing-focused users.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { productName: "Xero", heading: "Best for accounting integration", body: "Xero offers cloud invoicing and full accounting. Lower entry price than QuickBooks.", reviewHref: getInvoicingReviewUrl("xero"), compareHref: getInvoicingCompareUrl("xero-vs-quickbooks") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free invoicing and receipt scanning. For teams that want zero cost for core features.", reviewHref: getInvoicingReviewUrl("wave"), compareHref: getInvoicingCompareUrl("quickbooks-vs-wave") },
    { productName: "Zoho Invoice", heading: "Best for value", body: "Zoho Invoice offers a free tier and strong automation. Good for Zoho users.", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
    { productName: "Invoice Ninja", heading: "Best for self-hosted", body: "Invoice Ninja offers cloud and self-hosted options. For teams that want flexibility and no vendor lock-in.", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
  ],
  relatedComparisons: [
    invRel("freshbooks-vs-quickbooks"),
    invRel("xero-vs-quickbooks"),
    invRel("quickbooks-vs-wave"),
  ],
  relatedResources: defaultRelatedResources("QuickBooks", getInvoicingReviewUrl("quickbooks")),
  faqItems: [
    { q: "What is the best QuickBooks invoicing alternative?", a: "FreshBooks and Xero are the best alternatives. FreshBooks fits freelancers; Xero offers full accounting. Wave and Zoho Invoice suit free or value needs." },
    { q: "Is QuickBooks better than FreshBooks for invoicing?", a: "QuickBooks wins if you're already on QuickBooks and want invoicing in the same system. FreshBooks wins for freelancer-focused invoicing and time tracking." },
    { q: "Which invoicing software is free like QuickBooks?", a: "Wave is free for invoicing; Zoho Invoice has a free tier. QuickBooks is paid; compare features at your needs." },
  ],
};

// ——— Wave alternatives ———
const WAVE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Strong invoicing and time tracking for freelancers. Paid.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-wave"), startingPrice: "$19/mo", standoutFeature: "Time tracking; polish" },
  { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "QuickBooks ecosystem", description: "Full accounting plus invoicing.", reviewHref: getInvoicingReviewUrl("quickbooks"), compareHref: getInvoicingCompareUrl("quickbooks-vs-wave"), startingPrice: "$30/mo", standoutFeature: "Full accounting" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value and free tier", description: "Free tier and affordable paid plans. Projects and automation.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), compareHref: getInvoicingCompareUrl("wave-vs-zoho-invoice"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "accounting integration", description: "Cloud invoicing and full accounting.", reviewHref: getInvoicingReviewUrl("xero"), startingPrice: "$15/mo", standoutFeature: "Accounting integration" },
  { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: "4.3", bestFor: "self-hosted", description: "Open-source and cloud options.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), startingPrice: "Free / paid", standoutFeature: "Self-hosted option" },
];

const wavePage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best Wave Invoicing Alternatives (2026)",
  subtitle: "If Wave isn't the right fit—because you need more features, time tracking, or accounting depth—these invoicing alternatives offer strong options.",
  productName: "Wave",
  productSlug: "wave",
  originalReviewHref: getInvoicingReviewUrl("wave"),
  quickAnswerParagraphs: [
    "Wave is free for core invoicing; teams look for alternatives when they need more features (FreshBooks), full accounting (QuickBooks, Xero), or different value (Zoho Invoice, Invoice Ninja). FreshBooks adds time tracking and polish; QuickBooks and Xero add accounting depth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Feature depth", body: "Wave focuses on essentials. FreshBooks adds time tracking and stronger client tools; Zoho Invoice adds projects and automation." },
    { heading: "Accounting", body: "QuickBooks and Xero combine invoicing with full accounting and reporting." },
    { heading: "Support and customization", body: "Paid tools often offer better support; Invoice Ninja offers self-hosted and open source." },
  ],
  topAlternatives: WAVE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", bestFor: "free invoicing", startingPrice: "Free", standoutFeature: "Free invoicing", reviewHref: getInvoicingReviewUrl("wave") },
    WAVE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks offers stronger time tracking and client workflows. Paid; more features than Wave.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-wave") },
    { productName: "QuickBooks", heading: "Best for QuickBooks ecosystem", body: "QuickBooks offers full accounting plus invoicing. For businesses that want one platform.", reviewHref: getInvoicingReviewUrl("quickbooks"), compareHref: getInvoicingCompareUrl("quickbooks-vs-wave") },
    { productName: "Zoho Invoice", heading: "Best for value and free tier", body: "Zoho Invoice has a free tier and strong automation. Alternative free or low-cost option.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), compareHref: getInvoicingCompareUrl("wave-vs-zoho-invoice") },
    { productName: "Xero", heading: "Best for accounting integration", body: "Xero combines invoicing with full cloud accounting.", reviewHref: getInvoicingReviewUrl("xero") },
    { productName: "Invoice Ninja", heading: "Best for self-hosted", body: "Invoice Ninja offers cloud and self-hosted options. For teams that want flexibility.", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
  ],
  relatedComparisons: [
    invRel("freshbooks-vs-wave"),
    invRel("quickbooks-vs-wave"),
    invRel("wave-vs-zoho-invoice"),
  ],
  relatedResources: defaultRelatedResources("Wave", getInvoicingReviewUrl("wave")),
  faqItems: [
    { q: "What is the best Wave alternative?", a: "FreshBooks offers more features for freelancers; QuickBooks and Xero offer full accounting; Zoho Invoice offers a free tier and value; Invoice Ninja offers self-hosted." },
    { q: "Is Wave better than FreshBooks?", a: "Wave is free for core invoicing; FreshBooks offers more features and polish for a monthly fee. Choose Wave for free; FreshBooks for features." },
    { q: "Which invoicing software is free like Wave?", a: "Zoho Invoice has a free tier. Wave is one of the few with free core invoicing; compare limits and features." },
  ],
};

// ——— Zoho Invoice alternatives ———
const ZOHO_INVOICE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Invoicing and time tracking for freelancers. More polish.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing and receipt scanning.", reviewHref: getInvoicingReviewUrl("wave"), compareHref: getInvoicingCompareUrl("wave-vs-zoho-invoice"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "QuickBooks ecosystem", description: "Full accounting plus invoicing.", reviewHref: getInvoicingReviewUrl("quickbooks"), startingPrice: "$30/mo", standoutFeature: "Full accounting" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "accounting integration", description: "Cloud invoicing and accounting.", reviewHref: getInvoicingReviewUrl("xero"), startingPrice: "$15/mo", standoutFeature: "Accounting integration" },
  { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: "4.3", bestFor: "self-hosted", description: "Open-source and cloud options.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), startingPrice: "Free / paid", standoutFeature: "Self-hosted option" },
];

const zohoInvoicePage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best Zoho Invoice Alternatives (2026)",
  subtitle: "If Zoho Invoice isn't the right fit—because you're not in Zoho, want different features or free options—these invoicing alternatives offer strong options.",
  productName: "Zoho Invoice",
  productSlug: "zoho-invoice",
  originalReviewHref: getInvoicingReviewUrl("zoho-invoice"),
  quickAnswerParagraphs: [
    "Zoho Invoice fits Zoho users and value-conscious teams. Alternatives include FreshBooks for freelancers, Wave for free invoicing, QuickBooks and Xero for full accounting, and Invoice Ninja for self-hosted or open source.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not in Zoho", body: "If you don't use other Zoho apps, FreshBooks or Xero may offer better standalone invoicing or accounting." },
    { heading: "Free or different value", body: "Wave is free for core invoicing; FreshBooks may suit freelancers better with time tracking." },
    { heading: "Accounting depth", body: "QuickBooks and Xero combine invoicing with full accounting." },
  ],
  topAlternatives: ZOHO_INVOICE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", bestFor: "value and projects", startingPrice: "Free tier", standoutFeature: "Value; automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
    ZOHO_INVOICE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks offers stronger time tracking and polish for freelancers.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("zoho-invoice-vs-freshbooks") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free invoicing and receipt scanning.", reviewHref: getInvoicingReviewUrl("wave"), compareHref: getInvoicingCompareUrl("wave-vs-zoho-invoice") },
    { productName: "QuickBooks", heading: "Best for QuickBooks ecosystem", body: "QuickBooks offers full accounting plus invoicing.", reviewHref: getInvoicingReviewUrl("quickbooks") },
    { productName: "Xero", heading: "Best for accounting integration", body: "Xero combines invoicing with full cloud accounting.", reviewHref: getInvoicingReviewUrl("xero") },
    { productName: "Invoice Ninja", heading: "Best for self-hosted", body: "Invoice Ninja offers cloud and self-hosted options.", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
  ],
  relatedComparisons: [
    invRel("zoho-invoice-vs-freshbooks"),
    invRel("wave-vs-zoho-invoice"),
  ],
  relatedResources: defaultRelatedResources("Zoho Invoice", getInvoicingReviewUrl("zoho-invoice")),
  faqItems: [
    { q: "What is the best Zoho Invoice alternative?", a: "FreshBooks fits freelancers; Wave is free; QuickBooks and Xero offer full accounting; Invoice Ninja offers self-hosted." },
    { q: "Is Zoho Invoice better than FreshBooks?", a: "Zoho Invoice offers a free tier and value; FreshBooks offers more freelancer-focused features and polish. Choose by ecosystem and budget." },
    { q: "Which invoicing software is free like Zoho Invoice?", a: "Wave is free for core invoicing. Zoho Invoice has a free tier; compare limits and features." },
  ],
};

// ——— Xero alternatives ———
const XERO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "QuickBooks ecosystem", description: "Full accounting plus invoicing. Largest US ecosystem.", reviewHref: getInvoicingReviewUrl("quickbooks"), compareHref: getInvoicingCompareUrl("xero-vs-quickbooks"), startingPrice: "$30/mo", standoutFeature: "Largest ecosystem" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Invoicing and time tracking for freelancers.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-xero"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing and accounting.", reviewHref: getInvoicingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value", description: "Affordable with free tier and automation.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: "4.3", bestFor: "self-hosted", description: "Open-source and cloud options.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), startingPrice: "Free / paid", standoutFeature: "Self-hosted option" },
];

const xeroPage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best Xero Invoicing Alternatives (2026)",
  subtitle: "If Xero invoicing isn't the right fit—because of ecosystem, cost, or workflow—these invoicing alternatives offer strong options.",
  productName: "Xero",
  productSlug: "xero",
  originalReviewHref: getInvoicingReviewUrl("xero"),
  quickAnswerParagraphs: [
    "Xero combines invoicing with full accounting. Teams look for alternatives when they want the QuickBooks ecosystem (QuickBooks), freelancer focus (FreshBooks), free software (Wave, Zoho Invoice), or self-hosted options (Invoice Ninja).",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "US ecosystem", body: "QuickBooks has larger US market share. Some businesses prefer QuickBooks for accountant familiarity." },
    { heading: "Simplicity or free", body: "FreshBooks is simpler for invoicing-only; Wave and Zoho Invoice offer free options." },
    { heading: "Workflow", body: "HoneyBook and Bonsai focus on proposals and contracts; Invoice Ninja offers self-hosted." },
  ],
  topAlternatives: XERO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", bestFor: "accounting integration", startingPrice: "$15/mo", standoutFeature: "Accounting integration", reviewHref: getInvoicingReviewUrl("xero") },
    XERO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "QuickBooks", heading: "Best for QuickBooks ecosystem", body: "QuickBooks has the largest US ecosystem for accounting and invoicing.", reviewHref: getInvoicingReviewUrl("quickbooks"), compareHref: getInvoicingCompareUrl("xero-vs-quickbooks") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks is built for freelancers with strong time tracking and invoicing.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("freshbooks-vs-xero") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free invoicing and receipt scanning.", reviewHref: getInvoicingReviewUrl("wave") },
    { productName: "Zoho Invoice", heading: "Best for value", body: "Zoho Invoice offers a free tier and strong automation.", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
    { productName: "Invoice Ninja", heading: "Best for self-hosted", body: "Invoice Ninja offers cloud and self-hosted options.", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
  ],
  relatedComparisons: [
    invRel("xero-vs-quickbooks"),
    invRel("freshbooks-vs-xero"),
  ],
  relatedResources: defaultRelatedResources("Xero", getInvoicingReviewUrl("xero")),
  faqItems: [
    { q: "What is the best Xero invoicing alternative?", a: "QuickBooks is the main alternative with larger US ecosystem. FreshBooks fits freelancers; Wave and Zoho Invoice suit free or value needs." },
    { q: "Is Xero better than QuickBooks for invoicing?", a: "Xero often has lower entry price and clean UI; QuickBooks has larger US ecosystem. Both combine invoicing with full accounting." },
    { q: "Which invoicing software is cheaper than Xero?", a: "Wave is free; Zoho Invoice has a free tier. FreshBooks is comparable; compare at your client count." },
  ],
};

// ——— Invoice Ninja alternatives ———
const INVOICE_NINJA_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Polished invoicing and time tracking for freelancers.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("invoice-ninja-vs-freshbooks"), startingPrice: "$19/mo", standoutFeature: "Freelancer-focused" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing and receipt scanning.", reviewHref: getInvoicingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value", description: "Free tier and automation. Cloud-only.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "QuickBooks ecosystem", description: "Full accounting plus invoicing.", reviewHref: getInvoicingReviewUrl("quickbooks"), startingPrice: "$30/mo", standoutFeature: "Full accounting" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "accounting integration", description: "Cloud invoicing and accounting.", reviewHref: getInvoicingReviewUrl("xero"), startingPrice: "$15/mo", standoutFeature: "Accounting integration" },
];

const invoiceNinjaPage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best Invoice Ninja Alternatives (2026)",
  subtitle: "If Invoice Ninja isn't the right fit—because you want simpler cloud options, free software, or full accounting—these invoicing alternatives offer strong options.",
  productName: "Invoice Ninja",
  productSlug: "invoice-ninja",
  originalReviewHref: getInvoicingReviewUrl("invoice-ninja"),
  quickAnswerParagraphs: [
    "Invoice Ninja offers self-hosted and cloud options; teams look for alternatives when they want simpler SaaS (FreshBooks, Wave), free cloud options (Wave, Zoho Invoice), or full accounting (QuickBooks, Xero). FreshBooks and Wave are the main cloud alternatives; QuickBooks and Xero add accounting depth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Simpler cloud SaaS", body: "FreshBooks and Wave offer straightforward cloud invoicing without self-hosting or open-source management." },
    { heading: "Free or low cost", body: "Wave is free; Zoho Invoice has a free tier. Invoice Ninja has free and paid options but may require more setup." },
    { heading: "Accounting integration", body: "QuickBooks and Xero combine invoicing with full accounting and reporting." },
  ],
  topAlternatives: INVOICE_NINJA_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", bestFor: "self-hosted and open source", startingPrice: "Free / paid", standoutFeature: "Self-hosted option", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
    INVOICE_NINJA_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks offers polished cloud invoicing and time tracking for freelancers.", reviewHref: getInvoicingReviewUrl("freshbooks"), compareHref: getInvoicingCompareUrl("invoice-ninja-vs-freshbooks") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free cloud invoicing and receipt scanning.", reviewHref: getInvoicingReviewUrl("wave") },
    { productName: "Zoho Invoice", heading: "Best for value", body: "Zoho Invoice offers a free tier and automation in the cloud.", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
    { productName: "QuickBooks", heading: "Best for QuickBooks ecosystem", body: "QuickBooks offers full accounting plus invoicing.", reviewHref: getInvoicingReviewUrl("quickbooks") },
    { productName: "Xero", heading: "Best for accounting integration", body: "Xero combines invoicing with full cloud accounting.", reviewHref: getInvoicingReviewUrl("xero") },
  ],
  relatedComparisons: [
    invRel("invoice-ninja-vs-freshbooks"),
  ],
  relatedResources: defaultRelatedResources("Invoice Ninja", getInvoicingReviewUrl("invoice-ninja")),
  faqItems: [
    { q: "What is the best Invoice Ninja alternative?", a: "FreshBooks and Wave are the best cloud alternatives. Zoho Invoice offers a free tier; QuickBooks and Xero offer full accounting." },
    { q: "Is Invoice Ninja better than FreshBooks?", a: "Invoice Ninja offers self-hosted and open source; FreshBooks offers polished cloud SaaS. Choose Invoice Ninja for flexibility; FreshBooks for ease of use." },
    { q: "Which invoicing software is free like Invoice Ninja?", a: "Wave is free for cloud invoicing; Zoho Invoice has a free tier. Invoice Ninja has a free self-hosted option." },
  ],
};

// ——— HoneyBook alternatives ———
const HONEYBOOK_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "bonsai", name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", rating: "4.3", bestFor: "freelancers and contracts", description: "Proposals, contracts, invoicing for freelancers. Similar all-in-one.", reviewHref: getInvoicingReviewUrl("bonsai"), compareHref: getInvoicingCompareUrl("honeybook-vs-bonsai"), startingPrice: "Quote", standoutFeature: "Contracts; freelancer focus" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "invoicing and time tracking", description: "Strong invoicing and time tracking. Less proposal/contract focus.", reviewHref: getInvoicingReviewUrl("freshbooks"), startingPrice: "$19/mo", standoutFeature: "Invoicing; time tracking" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing. Simpler; no full client workflow.", reviewHref: getInvoicingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value", description: "Affordable invoicing with projects and client portal.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "xero", name: "Xero", logoSrc: "/Logos/xero.png", rating: "4.5", bestFor: "accounting integration", description: "Invoicing and full accounting.", reviewHref: getInvoicingReviewUrl("xero"), startingPrice: "$15/mo", standoutFeature: "Accounting integration" },
];

const honeybookPage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best HoneyBook Alternatives (2026)",
  subtitle: "If HoneyBook isn't the right fit—because of cost, workflow, or features—these invoicing and client-workflow alternatives offer strong options for creatives and service businesses.",
  productName: "HoneyBook",
  productSlug: "honeybook",
  originalReviewHref: getInvoicingReviewUrl("honeybook"),
  quickAnswerParagraphs: [
    "HoneyBook focuses on proposals, contracts, and invoicing for creative professionals. Teams look for alternatives when they want lower cost (Bonsai, FreshBooks, Wave), different workflow (Bonsai for contracts, FreshBooks for time tracking), or full accounting (QuickBooks, Xero). Bonsai is the closest alternative; FreshBooks and Wave suit simpler invoicing needs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "HoneyBook uses quote-based pricing. Bonsai is a direct alternative; FreshBooks and Wave can be lower cost for invoicing-focused needs." },
    { heading: "Workflow", body: "Bonsai emphasizes contracts and freelancer workflow; FreshBooks emphasizes time tracking and invoicing." },
    { heading: "Scope", body: "QuickBooks and Xero add full accounting; Wave and Zoho Invoice offer simpler or free invoicing." },
  ],
  topAlternatives: HONEYBOOK_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "honeybook", name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", bestFor: "creative professionals", startingPrice: "Quote", standoutFeature: "Proposals; client workflow", reviewHref: getInvoicingReviewUrl("honeybook") },
    HONEYBOOK_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Bonsai", heading: "Best for freelancers and contracts", body: "Bonsai offers proposals, contracts, and invoicing in one place. Closest alternative to HoneyBook.", reviewHref: getInvoicingReviewUrl("bonsai"), compareHref: getInvoicingCompareUrl("honeybook-vs-bonsai") },
    { productName: "FreshBooks", heading: "Best for invoicing and time tracking", body: "FreshBooks focuses on invoicing and time tracking for freelancers. Less proposal/contract depth.", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free invoicing. Simpler; no full client workflow suite.", reviewHref: getInvoicingReviewUrl("wave") },
    { productName: "Zoho Invoice", heading: "Best for value", body: "Zoho Invoice offers affordable invoicing with projects and client portal.", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
    { productName: "Xero", heading: "Best for accounting integration", body: "Xero combines invoicing with full accounting.", reviewHref: getInvoicingReviewUrl("xero") },
  ],
  relatedComparisons: [
    invRel("honeybook-vs-bonsai"),
  ],
  relatedResources: defaultRelatedResources("HoneyBook", getInvoicingReviewUrl("honeybook")),
  faqItems: [
    { q: "What is the best HoneyBook alternative?", a: "Bonsai is the closest alternative with proposals, contracts, and invoicing. FreshBooks fits invoicing and time tracking; Wave fits free invoicing." },
    { q: "Is HoneyBook better than Bonsai?", a: "Both serve creatives and freelancers with client workflow. Compare pricing and features; Bonsai often appeals to freelancers who want contracts and invoicing together." },
    { q: "Which invoicing software is cheaper than HoneyBook?", a: "FreshBooks and Wave have published pricing that can be lower. Bonsai uses quote-based pricing; compare total cost for your needs." },
  ],
};

// ——— Bonsai alternatives ———
const BONSAI_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "honeybook", name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", rating: "4.4", bestFor: "creative professionals", description: "Proposals, contracts, invoicing for creatives. Similar all-in-one.", reviewHref: getInvoicingReviewUrl("honeybook"), compareHref: getInvoicingCompareUrl("honeybook-vs-bonsai"), startingPrice: "Quote", standoutFeature: "Proposals; client workflow" },
  { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: "4.5", bestFor: "freelancers", description: "Invoicing and time tracking for freelancers.", reviewHref: getInvoicingReviewUrl("freshbooks"), startingPrice: "$19/mo", standoutFeature: "Invoicing; time tracking" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "free invoicing", description: "Free invoicing for small business.", reviewHref: getInvoicingReviewUrl("wave"), startingPrice: "Free", standoutFeature: "Free invoicing" },
  { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: "4.4", bestFor: "value", description: "Affordable invoicing with projects and client portal.", reviewHref: getInvoicingReviewUrl("zoho-invoice"), startingPrice: "Free tier", standoutFeature: "Value; automation" },
  { slug: "invoice-ninja", name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: "4.3", bestFor: "self-hosted", description: "Open-source and cloud options.", reviewHref: getInvoicingReviewUrl("invoice-ninja"), startingPrice: "Free / paid", standoutFeature: "Self-hosted option" },
];

const bonsaiPage: AlternativesTemplateProps = {
  ...freshbooksPage,
  title: "Best Bonsai Alternatives (2026)",
  subtitle: "If Bonsai isn't the right fit—because of cost, workflow, or features—these invoicing and freelancer-workflow alternatives offer strong options.",
  productName: "Bonsai",
  productSlug: "bonsai",
  originalReviewHref: getInvoicingReviewUrl("bonsai"),
  quickAnswerParagraphs: [
    "Bonsai combines proposals, contracts, and invoicing for freelancers. Teams look for alternatives when they want a different client-workflow tool (HoneyBook), simpler invoicing (FreshBooks, Wave), or value (Zoho Invoice, Invoice Ninja). HoneyBook is the closest alternative; FreshBooks and Wave suit invoicing-focused needs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Client workflow", body: "HoneyBook offers a similar all-in-one for creatives. Compare proposal and contract features." },
    { heading: "Invoicing focus", body: "FreshBooks and Wave focus on invoicing and time tracking with less contract/proposal depth." },
    { heading: "Cost and flexibility", body: "Wave is free; Zoho Invoice has a free tier; Invoice Ninja offers self-hosted." },
  ],
  topAlternatives: BONSAI_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "bonsai", name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", bestFor: "freelancers and contracts", startingPrice: "Quote", standoutFeature: "Contracts; proposals", reviewHref: getInvoicingReviewUrl("bonsai") },
    BONSAI_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "HoneyBook", heading: "Best for creative professionals", body: "HoneyBook offers proposals, contracts, and invoicing for creatives. Closest alternative to Bonsai.", reviewHref: getInvoicingReviewUrl("honeybook"), compareHref: getInvoicingCompareUrl("honeybook-vs-bonsai") },
    { productName: "FreshBooks", heading: "Best for freelancers", body: "FreshBooks focuses on invoicing and time tracking. Strong for freelancers who bill by time.", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { productName: "Wave", heading: "Best for free invoicing", body: "Wave provides free invoicing. Simpler option for basic needs.", reviewHref: getInvoicingReviewUrl("wave") },
    { productName: "Zoho Invoice", heading: "Best for value", body: "Zoho Invoice offers a free tier and automation.", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
    { productName: "Invoice Ninja", heading: "Best for self-hosted", body: "Invoice Ninja offers cloud and self-hosted options.", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
  ],
  relatedComparisons: [
    invRel("honeybook-vs-bonsai"),
  ],
  relatedResources: defaultRelatedResources("Bonsai", getInvoicingReviewUrl("bonsai")),
  faqItems: [
    { q: "What is the best Bonsai alternative?", a: "HoneyBook is the closest alternative. FreshBooks fits invoicing and time tracking; Wave fits free invoicing; Zoho Invoice fits value." },
    { q: "Is Bonsai better than HoneyBook?", a: "Both serve freelancers and creatives with proposals, contracts, and invoicing. Compare pricing and workflow; choice is often preference." },
    { q: "Which invoicing software is cheaper than Bonsai?", a: "FreshBooks and Wave have published or free pricing. Bonsai and HoneyBook use quote-based pricing; compare for your workflow." },
  ],
};

// ——— Export ———
const INVOICING_ALTERNATIVES_SLUGS = [
  "freshbooks", "quickbooks", "wave", "zoho-invoice", "xero",
  "invoice-ninja", "honeybook", "bonsai",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  freshbooks: freshbooksPage,
  quickbooks: quickbooksPage,
  wave: wavePage,
  "zoho-invoice": zohoInvoicePage,
  xero: xeroPage,
  "invoice-ninja": invoiceNinjaPage,
  honeybook: honeybookPage,
  bonsai: bonsaiPage,
};

export function getInvoicingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getInvoicingAlternativesSlugs(): string[] {
  return [...INVOICING_ALTERNATIVES_SLUGS];
}
