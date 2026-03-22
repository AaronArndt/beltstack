/**
 * Payroll alternatives page data.
 * Used by app/payroll/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live payroll review pages.
 */

import { getPayrollReviewUrl, getPayrollCompareUrl, getPayrollBestForUrl } from "@/lib/routes";
import { getPayrollComparisonBySlug } from "@/lib/data/payrollComparisons";
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

const CATEGORY = { href: "/payroll", label: "Payroll" };
const ROUNDUP_HREF = "/payroll/best-payroll-software";
const COMPARE_HUB = "/payroll/compare";
const GUIDES_HUB = "/payroll/guides";

/** Shared "how to choose" blocks for all payroll alternatives pages */
const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Payroll types (W-2 / 1099)", body: "Most small businesses need both employees and contractors. Choose a platform that handles both with clear tax treatment and contractor self-service. Confirm 1099 support and e-file if you pay subcontractors." },
  { heading: "Pricing transparency", body: "Prefer published base-plus-per-person pricing when you can budget upfront. Custom-quote providers (e.g. ADP, Paychex) are fine if you want full-service; compare total cost at your headcount." },
  { heading: "Tax automation and support", body: "Full-service payroll should calculate, file, and deposit taxes. Confirm what's included and whether you want self-serve or hands-on support. Some providers charge extra for 1099 e-file." },
  { heading: "HR and benefits", body: "If you offer health insurance or 401(k), choose a provider that can run benefits and deductions in sync with payroll. Gusto and OnPay bundle this; ADP and Paychex offer it at scale." },
  { heading: "Integrations", body: "Payroll should connect to your accounting software (QuickBooks, Xero) and optionally time tracking. Native integration avoids manual export. Match the tool to your stack." },
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

function payRel(slug: string) {
  return toAlternativesRelatedComparison(getPayrollCompareUrl(slug), getPayrollComparisonBySlug(slug));
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Payroll hub", href: CATEGORY.href },
    { label: "Best payroll software", href: ROUNDUP_HREF },
    { label: "Compare payroll software", href: COMPARE_HUB },
    { label: "Payroll guides", href: GUIDES_HUB },
    { label: `Best for small business`, href: getPayrollBestForUrl("small-business") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Gusto alternatives ———
const GUSTO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Straightforward payroll with flat pricing and no tier maze. Good for small teams that want simplicity and predictable cost.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("gusto-vs-onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "scale and enterprise support", description: "Full-service payroll and HR at scale. Custom pricing; strong for growing businesses that need more hand-holding.", reviewHref: getPayrollReviewUrl("adp"), compareHref: getPayrollCompareUrl("gusto-vs-adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT in one", description: "Payroll combined with workforce management, HR, and IT. For growing companies that want one platform for everything.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("rippling-vs-gusto"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Traditional payroll provider with strong compliance and hands-on support. Custom pricing; fits established SMBs.", reviewHref: getPayrollReviewUrl("paychex"), compareHref: getPayrollCompareUrl("gusto-vs-paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "micro businesses", description: "Free accounting plus payroll add-on. For solopreneurs and very small teams that want low cost.", reviewHref: getPayrollReviewUrl("wave"), startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll" },
];

const gustoOriginalRow: AlternativesTableRow = {
  slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "all-in-one payroll, benefits, and HR", startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX", reviewHref: getPayrollReviewUrl("gusto"), payrollTypes: "W-2, 1099",
};

const gustoPage: AlternativesTemplateProps = {
  title: "Best Gusto Alternatives (2026)",
  subtitle: "If Gusto isn't the right fit—because of price, features, or support—these payroll alternatives offer strong options for small businesses and contractors.",
  productName: "Gusto",
  productSlug: "gusto",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getPayrollReviewUrl("gusto"),
  showPayrollTypesColumn: true,
  quickAnswerParagraphs: [
    "Teams often look for Gusto alternatives when cost adds up at higher headcount, they need more hands-on support, or they want a different balance of features. OnPay is the best value-focused alternative with flat pricing and similar ease of use. ADP and Paychex suit businesses that want traditional full-service. Rippling fits teams that want payroll plus HR and IT in one platform.",
    "If you're a micro business or solopreneur, Wave offers free accounting plus a payroll add-on. For PEO-style benefits and payroll with custom pricing, Justworks is another option.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Pricing at scale", body: "Gusto's per-person costs can add up as you grow. Teams with many employees or contractors sometimes find OnPay or custom-quote providers (ADP, Paychex) more predictable or competitive at higher headcounts." },
    { heading: "Support preferences", body: "Gusto is largely self-serve with solid help resources; phone support isn't 24/7 on base plans. Businesses that want dedicated support or full-service handling may prefer ADP, Paychex, or SurePayroll." },
    { heading: "Feature gaps", body: "Some teams need deeper job costing, construction-specific features, or global payroll. Rippling and Deel offer broader workforce and global options; QuickBooks Payroll (if you use Intuit) ties payroll to job costing." },
    { heading: "Company size fit", body: "Very small teams may want the lowest possible cost (Wave, SurePayroll). Larger or more complex organizations may want enterprise depth (ADP, Paychex) or a single platform for payroll, HR, and IT (Rippling)." },
  ],
  topAlternatives: GUSTO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(gustoOriginalRow, GUSTO_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers similar ease of use with flat, transparent pricing and no tier maze. Strong for small teams that want straightforward payroll and benefits without Gusto's per-person creep. Support is included.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("gusto-vs-onpay") },
    { productName: "ADP", heading: "Best for scale and full-service", body: "ADP scales from small business to enterprise with custom pricing and dedicated support. Choose ADP when you want a traditional provider with strong compliance and hand-holding.", reviewHref: getPayrollReviewUrl("adp"), compareHref: getPayrollCompareUrl("gusto-vs-adp") },
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling combines payroll with workforce management, HR, and IT in one platform. Fits growing companies that want one system for pay runs, onboarding, and device management. Pricing is typically quoted.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("rippling-vs-gusto") },
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex offers full-service payroll and HR with strong support and compliance expertise. Custom pricing; good for established SMBs that prefer a partner over self-serve.", reviewHref: getPayrollReviewUrl("paychex"), compareHref: getPayrollCompareUrl("gusto-vs-paychex") },
    { productName: "Wave", heading: "Best for micro businesses", body: "Wave provides free accounting and a payroll add-on. Best for solopreneurs and very small teams that want minimal cost and don't need deep HR or benefits.", reviewHref: getPayrollReviewUrl("wave") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    payRel("gusto-vs-onpay"),
    payRel("gusto-vs-adp"),
    payRel("gusto-vs-paychex"),
    payRel("rippling-vs-gusto"),
  ],
  relatedResources: defaultRelatedResources("Gusto", getPayrollReviewUrl("gusto")),
  faqItems: [
    { q: "What is the best Gusto alternative?", a: "OnPay is the best value-focused alternative with flat pricing and similar ease of use. ADP and Paychex suit teams that want full-service. Rippling fits those who want payroll plus HR and IT in one platform." },
    { q: "Is Gusto better than OnPay?", a: "Gusto offers more brand recognition and a larger feature set; OnPay offers flatter pricing and simpler plans. Choose Gusto for breadth; choose OnPay for value and predictability." },
    { q: "Which payroll software is cheaper than Gusto?", a: "OnPay often has more predictable total cost at similar headcounts. Wave is cheaper for micro businesses (free accounting + payroll add-on). ADP and Paychex use custom pricing—get a quote to compare." },
  ],
};

// ——— OnPay alternatives ———
const ONPAY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "Full payroll, benefits, and HR in one platform with transparent pricing. Strong brand and feature set.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-onpay"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise and full-service", description: "Full-service payroll and HR at scale with custom pricing and dedicated support.", reviewHref: getPayrollReviewUrl("adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Traditional payroll with strong compliance and hands-on support. Custom pricing.", reviewHref: getPayrollReviewUrl("paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT", description: "Payroll, HR, and IT in one platform for growing companies.", reviewHref: getPayrollReviewUrl("rippling"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "micro businesses", description: "Free accounting plus payroll add-on. For solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave"), startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll" },
];
const onpayPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best OnPay Alternatives (2026)",
  subtitle: "If OnPay isn't the right fit, these payroll alternatives offer strong options—from all-in-one Gusto to full-service ADP and Paychex or value-focused Wave.",
  productName: "OnPay",
  productSlug: "onpay",
  originalReviewHref: getPayrollReviewUrl("onpay"),
  quickAnswerParagraphs: [
    "OnPay is a strong value pick with flat pricing; teams sometimes look for alternatives when they need more HR depth, enterprise support, or a different ecosystem. Gusto is the closest all-in-one alternative with more brand recognition. ADP and Paychex suit those who want traditional full-service. Rippling fits teams that want payroll plus HR and IT. Wave suits micro businesses that want free accounting plus payroll.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "HR and benefits depth", body: "OnPay covers core payroll and benefits well; some teams want more hiring tools, PTO workflows, or integrations. Gusto and Rippling offer broader HR suites." },
    { heading: "Support and scale", body: "Businesses that want dedicated reps or enterprise-level support may prefer ADP or Paychex with custom pricing." },
    { heading: "Ecosystem", body: "If you're deep in QuickBooks or need global payroll, alternatives like Gusto (integrations) or Deel (global) may fit better." },
  ],
  topAlternatives: ONPAY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "value and flat pricing", startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan", reviewHref: getPayrollReviewUrl("onpay"), payrollTypes: "W-2, 1099" },
    ONPAY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers similar ease of use with a larger feature set and strong benefits administration. Choose Gusto for more HR breadth and brand recognition.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-onpay") },
    { productName: "ADP", heading: "Best for enterprise and full-service", body: "ADP scales with custom pricing and dedicated support. Choose when you want a traditional provider with deep compliance.", reviewHref: getPayrollReviewUrl("adp") },
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex offers full-service payroll and HR with strong support. Custom pricing; good for established SMBs.", reviewHref: getPayrollReviewUrl("paychex") },
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling combines payroll with workforce, HR, and IT. For growing companies that want one platform for everything.", reviewHref: getPayrollReviewUrl("rippling") },
    { productName: "Wave", heading: "Best for micro businesses", body: "Wave provides free accounting and a payroll add-on. Best for solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave") },
  ],
  relatedComparisons: [
    payRel("gusto-vs-onpay"),
    payRel("adp-vs-paychex"),
  ],
  relatedResources: defaultRelatedResources("OnPay", getPayrollReviewUrl("onpay")),
  faqItems: [
    { q: "What is the best OnPay alternative?", a: "Gusto is the closest all-in-one alternative with more HR features and brand recognition. ADP and Paychex suit teams that want full-service; Rippling fits those who want payroll plus HR and IT." },
    { q: "Is OnPay better than Gusto?", a: "OnPay often has simpler, flatter pricing; Gusto has a larger feature set and more integrations. Choose OnPay for value and simplicity; choose Gusto for breadth." },
    { q: "Which payroll software is cheaper than OnPay?", a: "Wave can be cheaper for micro businesses (free accounting + payroll add-on). ADP and Paychex use custom pricing—compare at your headcount." },
  ],
};

// ——— ADP alternatives ———
const ADP_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Another major full-service provider with strong support and custom pricing.", reviewHref: getPayrollReviewUrl("paychex"), compareHref: getPayrollCompareUrl("adp-vs-paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT", description: "Modern platform combining payroll, HR, and IT. For companies that want one system.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("gusto-vs-adp"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "transparent pricing and self-serve", description: "All-in-one payroll and HR with published pricing. Good for SMBs that want clarity.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-adp"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "justworks", name: "Justworks", logoSrc: "/Logos/justworks.jpeg", rating: "4.5", bestFor: "PEO-style benefits and payroll", description: "PEO that bundles payroll with benefits and compliance. Custom pricing.", reviewHref: getPayrollReviewUrl("justworks"), startingPrice: "Custom", standoutFeature: "PEO benefits; simplified compliance" },
  { slug: "surepayroll", name: "SurePayroll", logoSrc: "/Logos/surepayroll.jpeg", rating: "4.2", bestFor: "small business payroll", description: "ADP-owned small business payroll with straightforward pricing.", reviewHref: getPayrollReviewUrl("surepayroll"), compareHref: getPayrollCompareUrl("surepayroll-vs-adp"), startingPrice: "From $49/mo", standoutFeature: "Simple small-business focus" },
];
const adpPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best ADP Alternatives (2026)",
  subtitle: "If ADP isn't the right fit—because of price, support model, or platform—these payroll alternatives offer strong options for small to midsize businesses.",
  productName: "ADP",
  productSlug: "adp",
  originalReviewHref: getPayrollReviewUrl("adp"),
  quickAnswerParagraphs: [
    "Teams look for ADP alternatives when they want published pricing, a simpler self-serve experience, or a different scale. Paychex is the closest traditional full-service alternative. Gusto and OnPay offer transparent pricing and modern UX. Rippling fits those who want payroll plus HR and IT. Justworks suits PEO-style benefits; SurePayroll is another ADP-owned option for small business.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Pricing transparency", body: "ADP uses custom pricing. Teams that want published base-plus-per-person rates often consider Gusto, OnPay, or SurePayroll." },
    { heading: "Self-serve vs full-service", body: "ADP leans full-service. Businesses that prefer a lighter-touch, self-serve platform may prefer Gusto or Rippling." },
    { heading: "Scale and complexity", body: "Very small teams may find ADP overkill; larger ones may compare Paychex, Rippling, or Justworks for different support and feature mixes." },
  ],
  topAlternatives: ADP_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", bestFor: "scale and enterprise support", startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support", reviewHref: getPayrollReviewUrl("adp"), payrollTypes: "W-2, 1099" },
    ADP_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex is the closest alternative to ADP: full-service payroll and HR with strong support and custom pricing. Compare both for your headcount.", reviewHref: getPayrollReviewUrl("paychex"), compareHref: getPayrollCompareUrl("adp-vs-paychex") },
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling offers a modern, unified platform for payroll, HR, and IT. For companies that want one system and more self-serve control.", reviewHref: getPayrollReviewUrl("rippling") },
    { productName: "Gusto", heading: "Best for transparent pricing and self-serve", body: "Gusto provides published pricing and an all-in-one payroll and HR experience. Strong for SMBs that want clarity and modern UX.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-adp") },
    { productName: "Justworks", heading: "Best for PEO-style benefits and payroll", body: "Justworks bundles payroll with PEO benefits and compliance. Custom pricing; good if you want a PEO without ADP's scale.", reviewHref: getPayrollReviewUrl("justworks") },
    { productName: "SurePayroll", heading: "Best for small business payroll", body: "SurePayroll is ADP-owned and focused on small business with simpler pricing. An option if you want the ADP ecosystem at a smaller scale.", reviewHref: getPayrollReviewUrl("surepayroll"), compareHref: getPayrollCompareUrl("surepayroll-vs-adp") },
  ],
  relatedComparisons: [
    payRel("adp-vs-paychex"),
    payRel("gusto-vs-adp"),
    payRel("surepayroll-vs-adp"),
  ],
  relatedResources: defaultRelatedResources("ADP", getPayrollReviewUrl("adp")),
  faqItems: [
    { q: "What is the best ADP alternative?", a: "Paychex is the closest traditional full-service alternative. Gusto and OnPay offer transparent pricing; Rippling fits those who want payroll plus HR and IT. Justworks suits PEO-style needs." },
    { q: "Is ADP better than Paychex?", a: "Both are full-service with custom pricing. Compare support, features, and total cost at your headcount; either can be a better fit depending on your needs." },
    { q: "Which payroll software is cheaper than ADP?", a: "Gusto, OnPay, and SurePayroll typically offer published pricing that can be lower at small headcounts. Get quotes from ADP and Paychex to compare." },
  ],
};

// ——— Paychex alternatives ———
const PAYCHEX_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise and full-service", description: "The other major full-service provider. Custom pricing and scale.", reviewHref: getPayrollReviewUrl("adp"), compareHref: getPayrollCompareUrl("adp-vs-paychex"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "transparent pricing and self-serve", description: "All-in-one payroll and HR with published pricing and modern UX.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-paychex"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward payroll. Good for small teams.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("gusto-vs-paychex"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT", description: "Modern platform for payroll, HR, and IT in one.", reviewHref: getPayrollReviewUrl("rippling"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "surepayroll", name: "SurePayroll", logoSrc: "/Logos/surepayroll.jpeg", rating: "4.2", bestFor: "small business", description: "Small business payroll with straightforward pricing.", reviewHref: getPayrollReviewUrl("surepayroll"), startingPrice: "From $49/mo", standoutFeature: "Simple small-business focus" },
];
const paychexPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Paychex Alternatives (2026)",
  subtitle: "If Paychex isn't the right fit, these payroll alternatives offer options from traditional full-service (ADP) to transparent pricing (Gusto, OnPay) and modern platforms (Rippling).",
  productName: "Paychex",
  productSlug: "paychex",
  originalReviewHref: getPayrollReviewUrl("paychex"),
  quickAnswerParagraphs: [
    "Paychex is a strong full-service choice; teams look for alternatives when they want published pricing, a different support model, or a more modern platform. ADP is the closest traditional alternative. Gusto and OnPay offer transparent pricing. Rippling fits those who want payroll plus HR and IT. SurePayroll is a smaller-scale option.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Pricing and transparency", body: "Paychex uses custom pricing. Teams that want published rates often consider Gusto, OnPay, or SurePayroll." },
    { heading: "Support and touch", body: "Some prefer more self-serve (Gusto, Rippling); others want to compare with ADP for a different full-service experience." },
    { heading: "Platform and integrations", body: "Modern, API-first platforms like Rippling appeal to teams that want payroll, HR, and IT in one place." },
  ],
  topAlternatives: PAYCHEX_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", bestFor: "traditional full-service", startingPrice: "Custom", standoutFeature: "Full-service; strong support", reviewHref: getPayrollReviewUrl("paychex"), payrollTypes: "W-2, 1099" },
    PAYCHEX_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ADP", heading: "Best for traditional full-service", body: "ADP is the closest alternative to Paychex: full-service payroll and HR with custom pricing. Compare both for support and total cost.", reviewHref: getPayrollReviewUrl("adp"), compareHref: getPayrollCompareUrl("adp-vs-paychex") },
    { productName: "Gusto", heading: "Best for transparent pricing and self-serve", body: "Gusto offers published pricing and an all-in-one payroll and HR platform. Strong for SMBs that want clarity and modern UX.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-paychex") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward payroll. Good for small teams that want predictability.", reviewHref: getPayrollReviewUrl("onpay") },
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling combines payroll with HR and IT in one platform. For companies that want a single modern system.", reviewHref: getPayrollReviewUrl("rippling") },
    { productName: "SurePayroll", heading: "Best for small business", body: "SurePayroll focuses on small business with simpler pricing. An option if you want a lighter full-service alternative.", reviewHref: getPayrollReviewUrl("surepayroll") },
  ],
  relatedComparisons: [
    payRel("adp-vs-paychex"),
    payRel("gusto-vs-paychex"),
  ],
  relatedResources: defaultRelatedResources("Paychex", getPayrollReviewUrl("paychex")),
  faqItems: [
    { q: "What is the best Paychex alternative?", a: "ADP is the closest full-service alternative. Gusto and OnPay offer transparent pricing; Rippling fits those who want payroll plus HR and IT." },
    { q: "Is Paychex better than ADP?", a: "Both are full-service with custom pricing. Compare features, support, and cost at your headcount to decide." },
    { q: "Which payroll software is cheaper than Paychex?", a: "Gusto, OnPay, and SurePayroll typically have published pricing that can be lower for small teams. Get quotes from Paychex and ADP to compare." },
  ],
};

// ——— Rippling alternatives ———
const RIPPLING_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "Payroll and HR with published pricing. Simpler than Rippling for SMBs.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("rippling-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "justworks", name: "Justworks", logoSrc: "/Logos/justworks.jpeg", rating: "4.5", bestFor: "PEO-style benefits and payroll", description: "PEO that bundles payroll with benefits and compliance. Custom pricing.", reviewHref: getPayrollReviewUrl("justworks"), compareHref: getPayrollCompareUrl("justworks-vs-rippling"), startingPrice: "Custom", standoutFeature: "PEO benefits; simplified compliance" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise full-service", description: "Full-service payroll and HR at scale. Custom pricing.", reviewHref: getPayrollReviewUrl("adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Full-service payroll and HR with strong support. Custom pricing.", reviewHref: getPayrollReviewUrl("paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
  { slug: "deel", name: "Deel", logoSrc: "/Logos/deel.jpeg", rating: "4.6", bestFor: "global payroll and contractors", description: "Global payroll and contractor payments. For distributed and international teams.", reviewHref: getPayrollReviewUrl("deel"), compareHref: getPayrollCompareUrl("deel-vs-rippling"), startingPrice: "Custom", standoutFeature: "Global payroll; contractor focus" },
];
const ripplingPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Rippling Alternatives (2026)",
  subtitle: "If Rippling isn't the right fit—because of price, complexity, or focus—these payroll and HR alternatives offer strong options from Gusto and Justworks to ADP and Deel.",
  productName: "Rippling",
  productSlug: "rippling",
  originalReviewHref: getPayrollReviewUrl("rippling"),
  quickAnswerParagraphs: [
    "Teams look for Rippling alternatives when they want simpler pricing, a PEO model, or a different scale. Gusto is the best alternative for all-in-one payroll and HR with published pricing. Justworks suits PEO-style benefits and payroll. ADP and Paychex offer traditional full-service. Deel fits global and contractor-heavy teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Pricing and complexity", body: "Rippling is powerful but can be complex and custom-priced. Gusto and OnPay offer simpler, published pricing for SMBs." },
    { heading: "PEO vs unified platform", body: "Justworks offers a PEO model (benefits and compliance bundled); Rippling is a unified HR/IT platform. Different fits for different needs." },
    { heading: "Global and contractors", body: "Deel specializes in global payroll and contractor payments; consider it if that's your primary need." },
  ],
  topAlternatives: RIPPLING_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", bestFor: "payroll + HR + IT", startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one", reviewHref: getPayrollReviewUrl("rippling"), payrollTypes: "W-2, 1099" },
    RIPPLING_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers payroll and HR with published pricing and a simpler experience. Strong for SMBs that don't need Rippling's IT and workforce breadth.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("rippling-vs-gusto") },
    { productName: "Justworks", heading: "Best for PEO-style benefits and payroll", body: "Justworks bundles payroll with PEO benefits and compliance. Choose if you want a PEO without Rippling's platform scope.", reviewHref: getPayrollReviewUrl("justworks"), compareHref: getPayrollCompareUrl("justworks-vs-rippling") },
    { productName: "ADP", heading: "Best for enterprise full-service", body: "ADP provides full-service payroll and HR at scale. For teams that want traditional support and custom pricing.", reviewHref: getPayrollReviewUrl("adp") },
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex offers full-service payroll and HR with strong support. Another traditional alternative to Rippling.", reviewHref: getPayrollReviewUrl("paychex") },
    { productName: "Deel", heading: "Best for global payroll and contractors", body: "Deel focuses on global payroll and contractor payments. For distributed and international teams that need more than domestic-only payroll.", reviewHref: getPayrollReviewUrl("deel"), compareHref: getPayrollCompareUrl("deel-vs-rippling") },
  ],
  relatedComparisons: [
    payRel("rippling-vs-gusto"),
    payRel("justworks-vs-rippling"),
    payRel("deel-vs-rippling"),
  ],
  relatedResources: defaultRelatedResources("Rippling", getPayrollReviewUrl("rippling")),
  faqItems: [
    { q: "What is the best Rippling alternative?", a: "Gusto is the best alternative for all-in-one payroll and HR with published pricing. Justworks suits PEO-style needs; ADP and Paychex offer traditional full-service; Deel fits global and contractor focus." },
    { q: "Is Rippling better than Gusto?", a: "Rippling offers payroll plus HR and IT in one platform; Gusto is focused on payroll and HR with simpler pricing. Choose Rippling for breadth; Gusto for simplicity and transparency." },
    { q: "Which payroll software is cheaper than Rippling?", a: "Gusto and OnPay typically have published pricing that can be lower for SMBs. Get a quote from Rippling and compare to Gusto at your headcount." },
  ],
};

// ——— Justworks alternatives ———
const JUSTWORKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "payroll and HR without PEO", description: "All-in-one payroll and HR with published pricing. No PEO; more self-serve.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("justworks-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT", description: "Unified platform for payroll, HR, and IT. More self-serve than PEO.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("justworks-vs-rippling"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise full-service", description: "Full-service payroll and HR at scale. Custom pricing.", reviewHref: getPayrollReviewUrl("adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Full-service payroll and HR with strong support. Custom pricing.", reviewHref: getPayrollReviewUrl("paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward payroll. Good for small teams.", reviewHref: getPayrollReviewUrl("onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
];
const justworksPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Justworks Alternatives (2026)",
  subtitle: "If Justworks isn't the right fit—because you don't need a PEO, want published pricing, or prefer a different platform—these payroll and HR alternatives offer strong options.",
  productName: "Justworks",
  productSlug: "justworks",
  originalReviewHref: getPayrollReviewUrl("justworks"),
  quickAnswerParagraphs: [
    "Justworks is a PEO that bundles payroll with benefits and compliance. Teams look for alternatives when they want non-PEO payroll (Gusto, OnPay, Rippling), traditional full-service (ADP, Paychex), or different benefits models. Gusto and Rippling are the most common alternatives with published or clearer pricing.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "PEO vs non-PEO", body: "PEOs like Justworks bundle benefits and compliance; some teams prefer standalone payroll and HR (Gusto, Rippling) with more control and often published pricing." },
    { heading: "Pricing transparency", body: "Justworks uses custom pricing. Gusto and OnPay offer published base-plus-per-person rates." },
    { heading: "Platform scope", body: "Rippling offers payroll plus HR and IT without the PEO model; ADP and Paychex offer full-service without PEO." },
  ],
  topAlternatives: JUSTWORKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "justworks", name: "Justworks", logoSrc: "/Logos/justworks.jpeg", bestFor: "PEO-style benefits and payroll", startingPrice: "Custom", standoutFeature: "PEO benefits; simplified compliance", reviewHref: getPayrollReviewUrl("justworks"), payrollTypes: "W-2, 1099" },
    JUSTWORKS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for payroll and HR without PEO", body: "Gusto offers all-in-one payroll and HR with published pricing and no PEO. Choose when you want more self-serve and transparency.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("justworks-vs-gusto") },
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling combines payroll with HR and IT in one platform. More self-serve than a PEO; good for companies that want one system.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("justworks-vs-rippling") },
    { productName: "ADP", heading: "Best for enterprise full-service", body: "ADP provides full-service payroll and HR at scale. Traditional alternative without PEO.", reviewHref: getPayrollReviewUrl("adp") },
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex offers full-service payroll and HR with strong support. Another non-PEO option.", reviewHref: getPayrollReviewUrl("paychex") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward payroll. Good for small teams that don't need PEO.", reviewHref: getPayrollReviewUrl("onpay") },
  ],
  relatedComparisons: [
    payRel("justworks-vs-gusto"),
    payRel("justworks-vs-rippling"),
  ],
  relatedResources: defaultRelatedResources("Justworks", getPayrollReviewUrl("justworks")),
  faqItems: [
    { q: "What is the best Justworks alternative?", a: "Gusto is the best alternative for payroll and HR without a PEO and with published pricing. Rippling fits those who want payroll plus HR and IT; ADP and Paychex offer traditional full-service." },
    { q: "Is Justworks better than Gusto?", a: "Justworks is a PEO (benefits and compliance bundled); Gusto is standalone payroll and HR with published pricing. Choose Justworks for PEO; Gusto for transparency and self-serve." },
    { q: "Which payroll software is cheaper than Justworks?", a: "Gusto and OnPay typically have published pricing that can be lower. Justworks uses custom pricing—compare total cost including benefits at your headcount." },
  ],
};

// ——— Deel alternatives ———
const DEEL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT", description: "Unified platform for payroll, HR, and IT. Strong domestic and growing global.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("deel-vs-rippling"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "domestic payroll and HR", description: "All-in-one domestic payroll and HR with published pricing.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("deel-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise full-service", description: "Full-service payroll and HR at scale. Custom pricing.", reviewHref: getPayrollReviewUrl("adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "justworks", name: "Justworks", logoSrc: "/Logos/justworks.jpeg", rating: "4.5", bestFor: "PEO-style benefits and payroll", description: "PEO that bundles payroll with benefits and compliance.", reviewHref: getPayrollReviewUrl("justworks"), startingPrice: "Custom", standoutFeature: "PEO benefits; simplified compliance" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward domestic payroll.", reviewHref: getPayrollReviewUrl("onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
];
const deelPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Deel Alternatives (2026)",
  subtitle: "If Deel isn't the right fit—because you're domestic-only, want different global coverage, or prefer a different platform—these payroll and workforce alternatives offer strong options.",
  productName: "Deel",
  productSlug: "deel",
  originalReviewHref: getPayrollReviewUrl("deel"),
  quickAnswerParagraphs: [
    "Deel specializes in global payroll and contractor payments. Teams look for alternatives when they're primarily domestic (Gusto, OnPay), want payroll plus HR and IT (Rippling), or prefer traditional full-service (ADP, Paychex). Rippling is the closest alternative with growing global and domestic breadth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Domestic-only needs", body: "If you only run US payroll and don't need global contractor or EOR services, Gusto or OnPay can be simpler and often cheaper." },
    { heading: "Platform scope", body: "Rippling offers payroll, HR, and IT with growing global capabilities; compare if you want one platform for more than payments." },
    { heading: "Pricing and model", body: "Deel's pricing is custom and tied to global use cases. Domestic-only providers often have published pricing." },
  ],
  topAlternatives: DEEL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "deel", name: "Deel", logoSrc: "/Logos/deel.jpeg", bestFor: "global payroll and contractors", startingPrice: "Custom", standoutFeature: "Global payroll; contractor focus", reviewHref: getPayrollReviewUrl("deel"), payrollTypes: "W-2, 1099, global" },
    DEEL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling offers a unified platform for payroll, HR, and IT with growing global capabilities. Compare for domestic and international needs.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("deel-vs-rippling") },
    { productName: "Gusto", heading: "Best for domestic payroll and HR", body: "Gusto is focused on domestic payroll and HR with published pricing. Best if you don't need global or contractor-heavy workflows.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("deel-vs-gusto") },
    { productName: "ADP", heading: "Best for enterprise full-service", body: "ADP provides full-service payroll and HR at scale. For teams that want traditional support.", reviewHref: getPayrollReviewUrl("adp") },
    { productName: "Justworks", heading: "Best for PEO-style benefits and payroll", body: "Justworks bundles payroll with PEO benefits and compliance. Domestic focus with PEO model.", reviewHref: getPayrollReviewUrl("justworks") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward domestic payroll. Good for small US-only teams.", reviewHref: getPayrollReviewUrl("onpay") },
  ],
  relatedComparisons: [
    payRel("deel-vs-rippling"),
    payRel("deel-vs-gusto"),
  ],
  relatedResources: defaultRelatedResources("Deel", getPayrollReviewUrl("deel")),
  faqItems: [
    { q: "What is the best Deel alternative?", a: "Rippling is the closest alternative with payroll, HR, and IT and growing global capabilities. Gusto and OnPay suit domestic-only needs; ADP and Paychex offer traditional full-service." },
    { q: "Is Deel better than Rippling?", a: "Deel specializes in global payroll and contractors; Rippling offers a broader HR/IT platform with growing global. Choose Deel for global/contractor focus; Rippling for one platform for everything." },
    { q: "Which payroll software is cheaper than Deel?", a: "Domestic-only tools like Gusto and OnPay often have lower published pricing for US-only payroll. Deel's value is in global and contractor coverage—compare at your mix of domestic vs global." },
  ],
};

// ——— SurePayroll alternatives ———
const SUREPAYROLL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "Payroll and HR with more features and transparent pricing.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("surepayroll-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward payroll. Good for small teams.", reviewHref: getPayrollReviewUrl("onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise and full-service", description: "ADP (SurePayroll's parent) for scale and full-service. Custom pricing.", reviewHref: getPayrollReviewUrl("adp"), compareHref: getPayrollCompareUrl("surepayroll-vs-adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "micro businesses", description: "Free accounting plus payroll add-on. For solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave"), startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll" },
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Full-service payroll and HR with strong support. Custom pricing.", reviewHref: getPayrollReviewUrl("paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
];
const surepayrollPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best SurePayroll Alternatives (2026)",
  subtitle: "If SurePayroll isn't the right fit, these payroll alternatives offer options from all-in-one Gusto and OnPay to full-service ADP and Paychex or value-focused Wave.",
  productName: "SurePayroll",
  productSlug: "surepayroll",
  originalReviewHref: getPayrollReviewUrl("surepayroll"),
  quickAnswerParagraphs: [
    "SurePayroll is ADP's small business payroll brand. Teams look for alternatives when they want more HR features (Gusto, OnPay), full-service at scale (ADP, Paychex), or the lowest cost (Wave). Gusto and OnPay are the most common alternatives with more features and transparent pricing.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Features and HR", body: "SurePayroll covers core payroll; teams that want more HR, benefits, or integrations often look at Gusto or OnPay." },
    { heading: "Scale and support", body: "For more hand-holding or enterprise features, ADP (parent brand) or Paychex offer full-service options." },
    { heading: "Cost", body: "Wave offers free accounting plus payroll add-on for micro businesses; compare total cost at your size." },
  ],
  topAlternatives: SUREPAYROLL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "surepayroll", name: "SurePayroll", logoSrc: "/Logos/surepayroll.jpeg", bestFor: "small business payroll", startingPrice: "From $49/mo", standoutFeature: "Simple small-business focus", reviewHref: getPayrollReviewUrl("surepayroll"), payrollTypes: "W-2, 1099" },
    SUREPAYROLL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers more HR and benefits features with transparent pricing. Strong alternative if you've outgrown SurePayroll's scope.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("surepayroll-vs-gusto") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward payroll with good value. Good for small teams.", reviewHref: getPayrollReviewUrl("onpay") },
    { productName: "ADP", heading: "Best for enterprise and full-service", body: "ADP is SurePayroll's parent; upgrade path for full-service and scale. Custom pricing.", reviewHref: getPayrollReviewUrl("adp"), compareHref: getPayrollCompareUrl("surepayroll-vs-adp") },
    { productName: "Wave", heading: "Best for micro businesses", body: "Wave provides free accounting and a payroll add-on. Best for solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave") },
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex offers full-service payroll and HR with strong support. For teams that want more hand-holding.", reviewHref: getPayrollReviewUrl("paychex") },
  ],
  relatedComparisons: [
    payRel("surepayroll-vs-gusto"),
    payRel("surepayroll-vs-adp"),
  ],
  relatedResources: defaultRelatedResources("SurePayroll", getPayrollReviewUrl("surepayroll")),
  faqItems: [
    { q: "What is the best SurePayroll alternative?", a: "Gusto and OnPay are the best alternatives with more HR features and transparent pricing. ADP and Paychex suit full-service needs; Wave suits micro businesses." },
    { q: "Is SurePayroll better than Gusto?", a: "SurePayroll is simpler and small-business focused; Gusto offers more features and HR depth. Choose SurePayroll for simplicity; Gusto for breadth." },
    { q: "Which payroll software is cheaper than SurePayroll?", a: "Wave can be cheaper for micro businesses. Gusto and OnPay have published pricing—compare at your headcount." },
  ],
};

// ——— Wave alternatives ———
const WAVE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "Payroll and HR with more features. No free accounting.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("wave-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward payroll. Good for small teams.", reviewHref: getPayrollReviewUrl("onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "surepayroll", name: "SurePayroll", logoSrc: "/Logos/surepayroll.jpeg", rating: "4.2", bestFor: "small business payroll", description: "Small business payroll with straightforward pricing.", reviewHref: getPayrollReviewUrl("surepayroll"), startingPrice: "From $49/mo", standoutFeature: "Simple small-business focus" },
  { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", rating: "4.4", bestFor: "enterprise full-service", description: "Full-service payroll and HR at scale. Custom pricing.", reviewHref: getPayrollReviewUrl("adp"), startingPrice: "Custom", standoutFeature: "Enterprise depth; dedicated support" },
  { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", rating: "4.3", bestFor: "traditional full-service", description: "Full-service payroll and HR with strong support. Custom pricing.", reviewHref: getPayrollReviewUrl("paychex"), startingPrice: "Custom", standoutFeature: "Full-service; strong support" },
];
const wavePage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Wave Payroll Alternatives (2026)",
  subtitle: "If Wave isn't the right fit—because you need more payroll or HR features, or don't need free accounting—these payroll alternatives offer strong options from Gusto and OnPay to full-service providers.",
  productName: "Wave",
  productSlug: "wave",
  originalReviewHref: getPayrollReviewUrl("wave"),
  quickAnswerParagraphs: [
    "Wave pairs free accounting with a payroll add-on. Teams look for alternatives when they need more HR features, benefits, or support. Gusto and OnPay are the best alternatives with full payroll and HR. SurePayroll is another small-business option. ADP and Paychex suit those who want full-service.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "HR and benefits", body: "Wave focuses on accounting and basic payroll. Teams that need benefits, PTO, or more HR tools often choose Gusto or OnPay." },
    { heading: "Support and scale", body: "Wave is self-serve; businesses that want more support may prefer SurePayroll, Gusto, or full-service ADP/Paychex." },
    { heading: "Accounting ecosystem", body: "If you don't need Wave's free accounting, standalone payroll options (Gusto, OnPay) may offer more payroll depth." },
  ],
  topAlternatives: WAVE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", bestFor: "micro businesses", startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll", reviewHref: getPayrollReviewUrl("wave"), payrollTypes: "W-2, 1099" },
    WAVE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers full payroll and HR with benefits and transparent pricing. Best if you've outgrown Wave's scope.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("wave-vs-gusto") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward payroll. Good for small teams that want more than Wave without Gusto's tier structure.", reviewHref: getPayrollReviewUrl("onpay") },
    { productName: "SurePayroll", heading: "Best for small business payroll", body: "SurePayroll focuses on small business with straightforward pricing. Another step up from Wave.", reviewHref: getPayrollReviewUrl("surepayroll") },
    { productName: "ADP", heading: "Best for enterprise full-service", body: "ADP provides full-service payroll and HR at scale. For teams that want traditional support.", reviewHref: getPayrollReviewUrl("adp") },
    { productName: "Paychex", heading: "Best for traditional full-service", body: "Paychex offers full-service payroll and HR with strong support. Another full-service alternative.", reviewHref: getPayrollReviewUrl("paychex") },
  ],
  relatedComparisons: [
    payRel("wave-vs-gusto"),
  ],
  relatedResources: defaultRelatedResources("Wave", getPayrollReviewUrl("wave")),
  faqItems: [
    { q: "What is the best Wave Payroll alternative?", a: "Gusto and OnPay are the best alternatives with full payroll and HR features. SurePayroll is another small-business option; ADP and Paychex suit full-service needs." },
    { q: "Is Wave better than Gusto?", a: "Wave offers free accounting plus payroll; Gusto offers more payroll and HR features without built-in accounting. Choose Wave for free accounting; Gusto for payroll and HR depth." },
    { q: "Which payroll software is cheaper than Wave?", a: "Wave's appeal is free accounting plus a payroll add-on. For payroll-only, Gusto and OnPay have published pricing—compare total cost with your accounting needs." },
  ],
};

// ——— QuickBooks Payroll alternatives ———
const QUICKBOOKS_PAYROLL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "Standalone payroll and HR with published pricing. Best if you're not locked into QuickBooks.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-quickbooks-payroll"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward payroll. Good for small teams without QuickBooks.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("quickbooks-payroll-vs-onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "square-payroll", name: "Square Payroll", logoSrc: "/Logos/square.jpeg", rating: "4.3", bestFor: "Square ecosystem", description: "Payroll inside Square. For businesses that use Square for payments or POS.", reviewHref: getPayrollReviewUrl("square-payroll"), compareHref: getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll"), startingPrice: "$35/mo", standoutFeature: "Square integration; simplicity" },
  { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", rating: "4.6", bestFor: "payroll + HR + IT", description: "Unified platform for payroll, HR, and IT. For growing companies.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("rippling-vs-quickbooks-payroll"), startingPrice: "Custom", standoutFeature: "Payroll, HR, and IT in one" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "micro businesses", description: "Free accounting plus payroll add-on. For solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave"), compareHref: getPayrollCompareUrl("wave-vs-quickbooks-payroll"), startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll" },
];
const quickbooksPayrollPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best QuickBooks Payroll Alternatives (2026)",
  subtitle: "If QuickBooks Payroll isn't the right fit—because you're not on QuickBooks, want more HR depth, or prefer a different ecosystem—these payroll alternatives offer strong options.",
  productName: "QuickBooks Payroll",
  productSlug: "quickbooks-payroll",
  originalReviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  quickAnswerParagraphs: [
    "QuickBooks Payroll is built for businesses that already use QuickBooks. Teams look for alternatives when they're not in the Intuit ecosystem, want more HR and benefits (Gusto, OnPay), or prefer a different workflow. Gusto is the best all-in-one alternative. OnPay offers similar ease with flat pricing. Square Payroll fits Square users; Wave fits micro businesses; Rippling fits companies that want payroll plus HR and IT.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not on QuickBooks", body: "If you use Xero, FreshBooks, or another accounting tool, QuickBooks Payroll's main advantage disappears. Gusto and OnPay integrate with multiple accounting systems." },
    { heading: "HR and benefits depth", body: "QuickBooks Payroll focuses on pay runs and tax filing; HR and benefits lag behind Gusto and OnPay. Choose Gusto or Rippling for more HR breadth." },
    { heading: "Pricing and ecosystem", body: "Lock-in to Intuit can mean rising costs. Teams that want to compare openly often look at Gusto, OnPay, or Square Payroll for published pricing." },
  ],
  topAlternatives: QUICKBOOKS_PAYROLL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "businesses already using QuickBooks", startingPrice: "$30/mo", standoutFeature: "Seamless QuickBooks integration", reviewHref: getPayrollReviewUrl("quickbooks-payroll"), payrollTypes: "W-2, 1099" },
    QUICKBOOKS_PAYROLL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers payroll and HR with published pricing and no accounting lock-in. Strong for teams that want one platform for payroll and benefits.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward payroll. Good for small teams that want predictability without the QuickBooks ecosystem.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
    { productName: "Square Payroll", heading: "Best for Square ecosystem", body: "Square Payroll fits businesses that use Square for payments or POS. Simpler payroll inside one ecosystem—similar idea to QB Payroll but for Square.", reviewHref: getPayrollReviewUrl("square-payroll"), compareHref: getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll") },
    { productName: "Rippling", heading: "Best for payroll + HR + IT", body: "Rippling combines payroll with HR and IT in one platform. For companies that want a single system beyond accounting.", reviewHref: getPayrollReviewUrl("rippling"), compareHref: getPayrollCompareUrl("rippling-vs-quickbooks-payroll") },
    { productName: "Wave", heading: "Best for micro businesses", body: "Wave provides free accounting and a payroll add-on. For solopreneurs and very small teams that want low cost.", reviewHref: getPayrollReviewUrl("wave"), compareHref: getPayrollCompareUrl("wave-vs-quickbooks-payroll") },
  ],
  relatedComparisons: [
    payRel("gusto-vs-quickbooks-payroll"),
    payRel("quickbooks-payroll-vs-onpay"),
    payRel("square-payroll-vs-quickbooks-payroll"),
    payRel("wave-vs-quickbooks-payroll"),
  ],
  relatedResources: defaultRelatedResources("QuickBooks Payroll", getPayrollReviewUrl("quickbooks-payroll")),
  faqItems: [
    { q: "What is the best QuickBooks Payroll alternative?", a: "Gusto is the best all-in-one alternative with more HR and benefits. OnPay offers flat pricing and similar ease of use. Square Payroll fits Square users; Wave fits micro businesses." },
    { q: "Is QuickBooks Payroll better than Gusto?", a: "QuickBooks Payroll wins if you already run your books in QuickBooks and want payroll in the same system. Gusto wins on HR depth and for teams not in the Intuit ecosystem." },
    { q: "Which payroll software is cheaper than QuickBooks Payroll?", a: "Patriot and Wave can be cheaper for very small teams. OnPay often has predictable total cost. Compare at your headcount and feature needs." },
  ],
};

// ——— Square Payroll alternatives ———
const SQUARE_PAYROLL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "More HR and benefits; best if you're not tied to Square.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("square-payroll-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and straightforward payroll. Good for small teams.", reviewHref: getPayrollReviewUrl("onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", rating: "4.6", bestFor: "QuickBooks ecosystem", description: "Payroll inside QuickBooks. Best if you use QuickBooks for accounting.", reviewHref: getPayrollReviewUrl("quickbooks-payroll"), compareHref: getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll"), startingPrice: "$30/mo", standoutFeature: "Seamless QuickBooks integration" },
  { slug: "patriot-payroll", name: "Patriot Payroll", logoSrc: "/Logos/patriot.jpeg", rating: "4.2", bestFor: "budget payroll", description: "Low-cost payroll for very small teams. No ecosystem lock-in.", reviewHref: getPayrollReviewUrl("patriot-payroll"), startingPrice: "$17/mo", standoutFeature: "Low cost; simplicity" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "micro businesses", description: "Free accounting plus payroll add-on. For solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave"), startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll" },
];
const squarePayrollPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Square Payroll Alternatives (2026)",
  subtitle: "If Square Payroll isn't the right fit—because you're not on Square, need more HR features, or want a different ecosystem—these payroll alternatives offer strong options.",
  productName: "Square Payroll",
  productSlug: "square-payroll",
  originalReviewHref: getPayrollReviewUrl("square-payroll"),
  quickAnswerParagraphs: [
    "Square Payroll fits businesses already using Square. Teams look for alternatives when they're not on Square, need more HR and benefits (Gusto, OnPay), or want different integrations. Gusto is the best all-in-one alternative. OnPay offers flat pricing. QuickBooks Payroll fits QuickBooks users; Patriot fits budget-conscious teams; Wave fits micro businesses.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not on Square", body: "If you don't use Square for payments or POS, Square Payroll's main advantage is lost. Gusto and OnPay work with any accounting stack." },
    { heading: "HR and benefits", body: "Square Payroll focuses on payroll basics. Gusto and OnPay offer more HR, benefits, and PTO. Choose them if you need more than simple pay runs." },
    { heading: "Integrations", body: "Square is strongest within its own ecosystem. For deeper accounting or time-tracking integration, Gusto or QuickBooks Payroll may fit better." },
  ],
  topAlternatives: SQUARE_PAYROLL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "square-payroll", name: "Square Payroll", logoSrc: "/Logos/square.jpeg", bestFor: "businesses already using Square", startingPrice: "$35/mo", standoutFeature: "Square integration; simplicity", reviewHref: getPayrollReviewUrl("square-payroll"), payrollTypes: "W-2, 1099" },
    SQUARE_PAYROLL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers more HR and benefits with published pricing. Best if you're not tied to Square and want a standalone payroll platform.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("square-payroll-vs-gusto") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and straightforward payroll. Good for small teams that want predictability.", reviewHref: getPayrollReviewUrl("onpay") },
    { productName: "QuickBooks Payroll", heading: "Best for QuickBooks ecosystem", body: "QuickBooks Payroll fits businesses that use QuickBooks for accounting. Payroll and books in one place.", reviewHref: getPayrollReviewUrl("quickbooks-payroll"), compareHref: getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll") },
    { productName: "Patriot Payroll", heading: "Best for budget payroll", body: "Patriot offers low-cost payroll for very small teams. No ecosystem lock-in; good when cost is the priority.", reviewHref: getPayrollReviewUrl("patriot-payroll") },
    { productName: "Wave", heading: "Best for micro businesses", body: "Wave provides free accounting and a payroll add-on. For solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave") },
  ],
  relatedComparisons: [
    payRel("square-payroll-vs-gusto"),
    payRel("square-payroll-vs-quickbooks-payroll"),
  ],
  relatedResources: defaultRelatedResources("Square Payroll", getPayrollReviewUrl("square-payroll")),
  faqItems: [
    { q: "What is the best Square Payroll alternative?", a: "Gusto is the best alternative with more HR and benefits. OnPay offers flat pricing; QuickBooks Payroll fits QuickBooks users; Patriot fits budget needs; Wave fits micro businesses." },
    { q: "Is Square Payroll better than Gusto?", a: "Square Payroll wins if you already use Square and want one ecosystem. Gusto wins on HR depth and for teams not on Square." },
    { q: "Which payroll software is cheaper than Square Payroll?", a: "Patriot and Wave can be cheaper for very small teams. Compare base and per-person pricing at your headcount." },
  ],
};

// ——— Patriot Payroll alternatives ———
const PATRIOT_PAYROLL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: "4.8", bestFor: "all-in-one payroll and HR", description: "More HR, benefits, and features. Higher cost, more breadth.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("patriot-payroll-vs-gusto"), startingPrice: "$40/mo", standoutFeature: "Transparent pricing; modern UX" },
  { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: "4.5", bestFor: "value and flat pricing", description: "Flat pricing and more features than Patriot. Good middle ground.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("patriot-payroll-vs-onpay"), startingPrice: "$40/mo", standoutFeature: "Flat pricing; one plan" },
  { slug: "square-payroll", name: "Square Payroll", logoSrc: "/Logos/square.jpeg", rating: "4.3", bestFor: "Square ecosystem", description: "Simple payroll if you already use Square. Similar simplicity.", reviewHref: getPayrollReviewUrl("square-payroll"), startingPrice: "$35/mo", standoutFeature: "Square integration; simplicity" },
  { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: "4.3", bestFor: "micro businesses", description: "Free accounting plus payroll add-on. For solopreneurs and very small teams.", reviewHref: getPayrollReviewUrl("wave"), startingPrice: "Payroll add-on", standoutFeature: "Free accounting + payroll" },
  { slug: "surepayroll", name: "SurePayroll", logoSrc: "/Logos/surepayroll.jpeg", rating: "4.2", bestFor: "small business payroll", description: "Small business payroll with straightforward pricing. Slightly more features.", reviewHref: getPayrollReviewUrl("surepayroll"), startingPrice: "From $49/mo", standoutFeature: "Simple small-business focus" },
];
const patriotPayrollPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Patriot Payroll Alternatives (2026)",
  subtitle: "If Patriot Payroll isn't the right fit—because you need more features, HR depth, or different integrations—these payroll alternatives offer strong options.",
  productName: "Patriot Payroll",
  productSlug: "patriot-payroll",
  originalReviewHref: getPayrollReviewUrl("patriot-payroll"),
  quickAnswerParagraphs: [
    "Patriot Payroll is built for budget-conscious small businesses. Teams look for alternatives when they need more HR (Gusto, OnPay), want ecosystem integration (QuickBooks Payroll, Square Payroll), or prefer more features at slightly higher cost. Gusto and OnPay are the best alternatives with more breadth; Square Payroll and Wave suit simple or ecosystem-focused needs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "More features and HR", body: "Patriot keeps cost low with a focused feature set. Gusto and OnPay offer more HR, benefits, and integrations for a higher price." },
    { heading: "Ecosystem fit", body: "If you're in QuickBooks or Square, QuickBooks Payroll or Square Payroll may offer better workflow. Patriot is standalone." },
    { heading: "Support and scale", body: "Businesses that want more hand-holding or full-service may prefer ADP, Paychex, or SurePayroll." },
  ],
  topAlternatives: PATRIOT_PAYROLL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "patriot-payroll", name: "Patriot Payroll", logoSrc: "/Logos/patriot.jpeg", bestFor: "budget-conscious small business", startingPrice: "$17/mo", standoutFeature: "Low cost; simplicity", reviewHref: getPayrollReviewUrl("patriot-payroll"), payrollTypes: "W-2, 1099" },
    PATRIOT_PAYROLL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one payroll and HR", body: "Gusto offers more HR, benefits, and features with published pricing. Choose when you've outgrown Patriot's scope.", reviewHref: getPayrollReviewUrl("gusto"), compareHref: getPayrollCompareUrl("patriot-payroll-vs-gusto") },
    { productName: "OnPay", heading: "Best for value and flat pricing", body: "OnPay delivers flat pricing and more features than Patriot. Good middle ground between budget and breadth.", reviewHref: getPayrollReviewUrl("onpay"), compareHref: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
    { productName: "Square Payroll", heading: "Best for Square ecosystem", body: "Square Payroll fits businesses that use Square. Similar simplicity with Square integration.", reviewHref: getPayrollReviewUrl("square-payroll") },
    { productName: "Wave", heading: "Best for micro businesses", body: "Wave provides free accounting and a payroll add-on. For solopreneurs and very small teams that want low cost.", reviewHref: getPayrollReviewUrl("wave") },
    { productName: "SurePayroll", heading: "Best for small business payroll", body: "SurePayroll offers small business payroll with slightly more features. Another step up from Patriot.", reviewHref: getPayrollReviewUrl("surepayroll") },
  ],
  relatedComparisons: [
    payRel("patriot-payroll-vs-gusto"),
    payRel("patriot-payroll-vs-onpay"),
  ],
  relatedResources: defaultRelatedResources("Patriot Payroll", getPayrollReviewUrl("patriot-payroll")),
  faqItems: [
    { q: "What is the best Patriot Payroll alternative?", a: "Gusto and OnPay are the best alternatives with more HR and features. Square Payroll fits Square users; Wave fits micro businesses; SurePayroll is another small-business option." },
    { q: "Is Patriot Payroll better than Gusto?", a: "Patriot is cheaper and simpler; Gusto offers more HR, benefits, and integrations. Choose Patriot for budget; Gusto for breadth." },
    { q: "Which payroll software is cheaper than Patriot Payroll?", a: "Patriot is among the lowest-cost options. Wave can be competitive with free accounting plus payroll add-on. Compare at your headcount." },
  ],
};

// ——— Export ———
const PAYROLL_ALTERNATIVES_SLUGS = ["gusto", "onpay", "adp", "paychex", "rippling", "justworks", "deel", "surepayroll", "wave", "quickbooks-payroll", "square-payroll", "patriot-payroll"] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  gusto: gustoPage,
  onpay: onpayPage,
  adp: adpPage,
  paychex: paychexPage,
  rippling: ripplingPage,
  justworks: justworksPage,
  deel: deelPage,
  surepayroll: surepayrollPage,
  wave: wavePage,
  "quickbooks-payroll": quickbooksPayrollPage,
  "square-payroll": squarePayrollPage,
  "patriot-payroll": patriotPayrollPage,
};

export function getPayrollAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getPayrollAlternativesSlugs(): string[] {
  return [...PAYROLL_ALTERNATIVES_SLUGS];
}
