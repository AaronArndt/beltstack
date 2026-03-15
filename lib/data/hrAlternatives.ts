/**
 * HR alternatives page data.
 * Used by app/hr/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live HR review pages.
 */

import { getHrReviewUrl, getHrCompareUrl, getHrBestForUrl } from "@/lib/routes";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/hr", label: "HR" };
const ROUNDUP_HREF = "/hr/best-hr-software";
const COMPARE_HUB = "/hr/compare";
const GUIDES_HUB = "/hr/guides";

const LOGOS = {
  gusto: "/Logos/gusto.jpeg",
  bamboohr: "/Logos/bamboohr.png",
  rippling: "/Logos/rippling.jpeg",
  deel: "/Logos/deel.jpeg",
  adp: "/Logos/adp.jpeg",
  paychex: "/Logos/paychex.jpeg",
  trinet: "/Logos/trinet.jpeg",
  justworks: "/Logos/justworks.jpeg",
  zenefits: "/Logos/zenefits.jpeg",
} as const;

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Payroll vs HRIS vs PEO", body: "All-in-one payroll and HR (Gusto, Rippling) bundle pay and benefits. HRIS-first tools (BambooHR) focus on employee data and hiring, often with separate payroll. PEOs (Justworks, TriNet) offer co-employment for benefits and compliance. Choose by whether you need one vendor for pay or a best-in-class HRIS or PEO." },
  { heading: "Domestic vs global", body: "Gusto, BambooHR, and Rippling suit US-focused teams. Deel and Rippling support global hiring and EOR. If you have or plan international contractors or employees, compare global payroll and compliance." },
  { heading: "HR + IT", body: "Rippling unifies HR, payroll, and IT (devices, apps). Others focus on HR and payroll only. Choose Rippling if you want provisioning and IT in one place." },
  { heading: "Pricing and scale", body: "Gusto and Zenefits have transparent per-employee pricing; many others quote. Compare base fees, per-person cost, and what's included (payroll, benefits, hiring)." },
  { heading: "Support and implementation", body: "Larger vendors (ADP, Paychex) offer full-service and implementation. Modern platforms are often self-serve with optional support. Match support level to your team size and needs." },
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
    { label: "HR hub", href: CATEGORY.href },
    { label: "Best HR software", href: ROUNDUP_HREF },
    { label: "Compare HR software", href: COMPARE_HUB },
    { label: "HR guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getHrBestForUrl("small-business") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Gusto alternatives ———
const GUSTO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, rating: "4.6", bestFor: "HRIS", description: "Best-in-class HRIS and hiring; payroll via integration.", reviewHref: getHrReviewUrl("bamboohr"), compareHref: getHrCompareUrl("gusto-vs-bamboohr"), startingPrice: "Quote", standoutFeature: "HRIS; hiring" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "HR, payroll, and IT automation in one platform.", reviewHref: getHrReviewUrl("rippling"), compareHref: getHrCompareUrl("rippling-vs-gusto"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, rating: "4.3", bestFor: "all-in-one", description: "All-in-one HR and benefits at lower starting price.", reviewHref: getHrReviewUrl("zenefits"), startingPrice: "From ~$8/mo", standoutFeature: "All-in-one; value" },
  { slug: "justworks", name: "Justworks", logoSrc: LOGOS.justworks, rating: "4.5", bestFor: "PEO", description: "PEO with payroll, benefits, and HR for small businesses.", reviewHref: getHrReviewUrl("justworks"), startingPrice: "Quote", standoutFeature: "PEO; simple" },
  { slug: "deel", name: "Deel", logoSrc: LOGOS.deel, rating: "4.6", bestFor: "global", description: "Global hiring and payroll; EOR and contractors.", reviewHref: getHrReviewUrl("deel"), startingPrice: "Quote", standoutFeature: "Global; EOR" },
];

const gustoOriginalRow: AlternativesTableRow = {
  slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, bestFor: "overall SMB", startingPrice: "From ~$40/mo", standoutFeature: "Payroll + HR; ease of use", reviewHref: getHrReviewUrl("gusto"),
};

const gustoPage: AlternativesTemplateProps = {
  title: "Best Gusto Alternatives (2026)",
  subtitle: "If Gusto isn't the right fit—because you need a stronger HRIS, HR+IT, PEO, or global hiring—these HR alternatives offer strong options for small and midsize businesses.",
  productName: "Gusto",
  productSlug: "gusto",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getHrReviewUrl("gusto"),
  quickAnswerParagraphs: [
    "Gusto is a strong default for SMB payroll and HR; alternatives include BambooHR for best-in-class HRIS and hiring, Rippling for HR and IT in one platform, Zenefits for all-in-one at lower entry price, Justworks for PEO, and Deel for global hiring. BambooHR and Rippling are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "HRIS depth", body: "BambooHR focuses on HRIS and hiring with payroll via integration. For teams that want the strongest HR experience and use a separate payroll provider." },
    { heading: "HR + IT", body: "Rippling unifies HR, payroll, and IT (devices, apps). For companies that want provisioning and automation in one place." },
    { heading: "PEO", body: "Justworks and TriNet offer PEO with co-employment for benefits and compliance. Different model from software-only Gusto." },
  ],
  topAlternatives: GUSTO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(gustoOriginalRow, GUSTO_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "BambooHR", heading: "Best for HRIS", body: "BambooHR is best-in-class for HRIS and hiring; payroll is via integration. For teams that want the strongest HR experience.", reviewHref: getHrReviewUrl("bamboohr"), compareHref: getHrCompareUrl("gusto-vs-bamboohr") },
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling combines HR, payroll, benefits, and IT automation. For companies that want one platform for people and systems.", reviewHref: getHrReviewUrl("rippling"), compareHref: getHrCompareUrl("rippling-vs-gusto") },
    { productName: "Zenefits", heading: "Best for all-in-one value", body: "Zenefits offers all-in-one HR and benefits at a lower starting price. For cost-conscious SMBs.", reviewHref: getHrReviewUrl("zenefits") },
    { productName: "Justworks", heading: "Best for PEO", body: "Justworks is a PEO with payroll, benefits, and HR support. For small businesses that want co-employment benefits.", reviewHref: getHrReviewUrl("justworks") },
    { productName: "Deel", heading: "Best for global", body: "Deel focuses on global hiring and payroll with EOR and contractor management. For distributed teams.", reviewHref: getHrReviewUrl("deel") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
    { label: "Gusto vs Rippling", href: getHrCompareUrl("gusto-vs-rippling") },
  ],
  relatedResources: defaultRelatedResources("Gusto", getHrReviewUrl("gusto")),
  faqItems: [
    { q: "What is the best Gusto alternative?", a: "BambooHR for HRIS; Rippling for HR+IT; Zenefits for value; Justworks for PEO; Deel for global. Choose by whether you need stronger HRIS, IT, or global." },
    { q: "Is Gusto better than BambooHR?", a: "Gusto is all-in-one payroll and HR; BambooHR is HRIS-first with payroll via integration. Choose Gusto for one vendor; BambooHR for best-in-class HR." },
    { q: "Which HR software is cheaper than Gusto?", a: "Zenefits has a lower starting price. Compare per-person and what's included; Gusto's pricing is transparent." },
  ],
};

// ——— BambooHR alternatives ———
const BAMBOOHR_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "all-in-one", description: "Payroll and HR in one place; one vendor.", reviewHref: getHrReviewUrl("gusto"), compareHref: getHrCompareUrl("gusto-vs-bamboohr"), startingPrice: "From ~$40/mo", standoutFeature: "Payroll + HR" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "HR, payroll, and IT in one platform.", reviewHref: getHrReviewUrl("rippling"), compareHref: getHrCompareUrl("bamboohr-vs-rippling"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, rating: "4.3", bestFor: "all-in-one", description: "HR and benefits with payroll options.", reviewHref: getHrReviewUrl("zenefits"), startingPrice: "From ~$8/mo", standoutFeature: "All-in-one; value" },
  { slug: "paychex", name: "Paychex", logoSrc: LOGOS.paychex, rating: "4.4", bestFor: "full-service", description: "Full-service payroll and HR.", reviewHref: getHrReviewUrl("paychex"), startingPrice: "Quote", standoutFeature: "Full-service" },
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, rating: "4.5", bestFor: "enterprise", description: "Enterprise payroll and HR.", reviewHref: getHrReviewUrl("adp-workforce-now"), startingPrice: "Quote", standoutFeature: "Enterprise" },
];

const bamboohrPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best BambooHR Alternatives (2026)",
  subtitle: "If BambooHR isn't the right fit—because you want all-in-one payroll, HR+IT, or different scale—these HR alternatives offer strong options.",
  productName: "BambooHR",
  productSlug: "bamboohr",
  originalReviewHref: getHrReviewUrl("bamboohr"),
  quickAnswerParagraphs: [
    "BambooHR is best-in-class for HRIS and hiring; alternatives include Gusto for all-in-one payroll and HR, Rippling for HR and IT, Zenefits for all-in-one value, and Paychex or ADP for full-service. Gusto and Rippling are the main alternatives when you want payroll in the same platform.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "All-in-one payroll", body: "BambooHR uses payroll via integration. Gusto and Rippling bundle payroll and HR in one platform." },
    { heading: "HR + IT", body: "Rippling adds IT provisioning and automation. For companies that want people and systems in one place." },
    { heading: "Full-service", body: "Paychex and ADP offer full-service payroll and HR with more hands-on support." },
  ],
  topAlternatives: BAMBOOHR_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, bestFor: "HRIS; hiring", startingPrice: "Quote", standoutFeature: "HRIS; hiring", reviewHref: getHrReviewUrl("bamboohr") },
    BAMBOOHR_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for all-in-one", body: "Gusto bundles payroll and HR in one place. For teams that want one vendor for pay and HR.", reviewHref: getHrReviewUrl("gusto"), compareHref: getHrCompareUrl("gusto-vs-bamboohr") },
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling combines HR, payroll, and IT. For companies that want unified people and systems.", reviewHref: getHrReviewUrl("rippling"), compareHref: getHrCompareUrl("bamboohr-vs-rippling") },
    { productName: "Zenefits", heading: "Best for all-in-one value", body: "Zenefits offers HR and benefits with payroll options at lower entry price.", reviewHref: getHrReviewUrl("zenefits") },
    { productName: "Paychex", heading: "Best for full-service", body: "Paychex provides full-service payroll and HR. For teams that want more support.", reviewHref: getHrReviewUrl("paychex") },
    { productName: "ADP Workforce Now", heading: "Best for enterprise", body: "ADP Workforce Now is enterprise payroll and HR. For larger organizations.", reviewHref: getHrReviewUrl("adp-workforce-now") },
  ],
  relatedComparisons: [
    { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
  ],
  relatedResources: defaultRelatedResources("BambooHR", getHrReviewUrl("bamboohr")),
  faqItems: [
    { q: "What is the best BambooHR alternative?", a: "Gusto for all-in-one payroll and HR; Rippling for HR+IT; Zenefits for value; Paychex and ADP for full-service." },
    { q: "Is BambooHR better than Gusto?", a: "BambooHR is stronger for HRIS and hiring; Gusto bundles payroll and HR. Choose BambooHR for best-in-class HR with separate payroll; Gusto for one vendor." },
    { q: "Which HR software includes payroll like Gusto?", a: "Gusto, Rippling, Zenefits, Paychex, and ADP include or bundle payroll. BambooHR typically pairs with a payroll provider." },
  ],
};

// ——— Rippling alternatives ———
const RIPPLING_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "simplicity", description: "Simpler payroll and HR for SMBs.", reviewHref: getHrReviewUrl("gusto"), compareHref: getHrCompareUrl("rippling-vs-gusto"), startingPrice: "From ~$40/mo", standoutFeature: "Simple; transparent" },
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, rating: "4.6", bestFor: "HRIS", description: "Best-in-class HRIS; no IT module.", reviewHref: getHrReviewUrl("bamboohr"), compareHref: getHrCompareUrl("bamboohr-vs-rippling"), startingPrice: "Quote", standoutFeature: "HRIS; hiring" },
  { slug: "deel", name: "Deel", logoSrc: LOGOS.deel, rating: "4.6", bestFor: "global", description: "Global hiring and EOR; stronger international focus.", reviewHref: getHrReviewUrl("deel"), compareHref: getHrCompareUrl("deel-vs-rippling"), startingPrice: "Quote", standoutFeature: "Global; EOR" },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, rating: "4.3", bestFor: "value", description: "All-in-one HR at lower entry price.", reviewHref: getHrReviewUrl("zenefits"), startingPrice: "From ~$8/mo", standoutFeature: "Value" },
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, rating: "4.5", bestFor: "enterprise", description: "Enterprise payroll and HR.", reviewHref: getHrReviewUrl("adp-workforce-now"), startingPrice: "Quote", standoutFeature: "Enterprise" },
];

const ripplingPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Rippling Alternatives (2026)",
  subtitle: "If Rippling isn't the right fit—because you want simpler HR, stronger global focus, or different scale—these HR alternatives offer strong options.",
  productName: "Rippling",
  productSlug: "rippling",
  originalReviewHref: getHrReviewUrl("rippling"),
  quickAnswerParagraphs: [
    "Rippling unifies HR, payroll, and IT; alternatives include Gusto for simpler SMB payroll and HR, BambooHR for best-in-class HRIS without IT, Deel for global hiring and EOR, and Zenefits or ADP for different value and scale. Gusto and Deel are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Simplicity", body: "Gusto is simpler and has more transparent pricing. For SMBs that don't need IT provisioning." },
    { heading: "Global", body: "Deel is focused on global hiring and EOR. For teams that prioritize international contractors and employees." },
    { heading: "HRIS only", body: "BambooHR is HRIS-first without IT. For teams that want best-in-class HR and use other tools for IT." },
  ],
  topAlternatives: RIPPLING_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, bestFor: "HR + IT", startingPrice: "Quote", standoutFeature: "HR + IT automation", reviewHref: getHrReviewUrl("rippling") },
    RIPPLING_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for simplicity", body: "Gusto is simpler all-in-one payroll and HR for SMBs. For teams that don't need Rippling's IT depth.", reviewHref: getHrReviewUrl("gusto"), compareHref: getHrCompareUrl("rippling-vs-gusto") },
    { productName: "BambooHR", heading: "Best for HRIS", body: "BambooHR is best-in-class HRIS without IT. For teams that want strongest HR and separate payroll.", reviewHref: getHrReviewUrl("bamboohr"), compareHref: getHrCompareUrl("bamboohr-vs-rippling") },
    { productName: "Deel", heading: "Best for global", body: "Deel focuses on global hiring and EOR. For distributed and international teams.", reviewHref: getHrReviewUrl("deel"), compareHref: getHrCompareUrl("deel-vs-rippling") },
    { productName: "Zenefits", heading: "Best for value", body: "Zenefits offers all-in-one HR at lower entry price. For cost-conscious teams.", reviewHref: getHrReviewUrl("zenefits") },
    { productName: "ADP Workforce Now", heading: "Best for enterprise", body: "ADP Workforce Now is enterprise payroll and HR. For larger organizations.", reviewHref: getHrReviewUrl("adp-workforce-now") },
  ],
  relatedComparisons: [
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
    { label: "Gusto vs Rippling", href: getHrCompareUrl("gusto-vs-rippling") },
    { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
    { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
  ],
  relatedResources: defaultRelatedResources("Rippling", getHrReviewUrl("rippling")),
  faqItems: [
    { q: "What is the best Rippling alternative?", a: "Gusto for simplicity; BambooHR for HRIS; Deel for global; Zenefits for value; ADP for enterprise." },
    { q: "Is Rippling better than Gusto?", a: "Rippling adds IT and more automation; Gusto is simpler and more transparent for SMBs. Choose Rippling for HR+IT; Gusto for ease and cost clarity." },
    { q: "Which HR software is for global teams like Rippling?", a: "Deel is focused on global hiring and EOR. Rippling also supports global; compare international features and pricing." },
  ],
};

// ——— Deel alternatives ———
const DEEL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "HR, payroll, and IT with global options.", reviewHref: getHrReviewUrl("rippling"), compareHref: getHrCompareUrl("deel-vs-rippling"), startingPrice: "Quote", standoutFeature: "HR + IT; domestic+global" },
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "domestic", description: "Domestic SMB payroll and HR.", reviewHref: getHrReviewUrl("gusto"), startingPrice: "From ~$40/mo", standoutFeature: "Domestic; simple" },
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, rating: "4.6", bestFor: "HRIS", description: "HRIS and hiring; payroll via integration.", reviewHref: getHrReviewUrl("bamboohr"), startingPrice: "Quote", standoutFeature: "HRIS" },
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, rating: "4.5", bestFor: "enterprise", description: "Enterprise payroll and HR; global options.", reviewHref: getHrReviewUrl("adp-workforce-now"), startingPrice: "Quote", standoutFeature: "Enterprise" },
  { slug: "paychex", name: "Paychex", logoSrc: LOGOS.paychex, rating: "4.4", bestFor: "full-service", description: "Full-service payroll and HR.", reviewHref: getHrReviewUrl("paychex"), startingPrice: "Quote", standoutFeature: "Full-service" },
];

const deelPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Deel Alternatives (2026)",
  subtitle: "If Deel isn't the right fit—because you need domestic focus, HR+IT, or different scale—these HR alternatives offer strong options for global and domestic teams.",
  productName: "Deel",
  productSlug: "deel",
  originalReviewHref: getHrReviewUrl("deel"),
  quickAnswerParagraphs: [
    "Deel focuses on global hiring and EOR; alternatives include Rippling for HR and IT with global options, Gusto for domestic SMB payroll and HR, and BambooHR or ADP for different focus. Rippling and Gusto are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Domestic focus", body: "Gusto is strong for US-only teams. Simpler and transparent pricing for domestic payroll and HR." },
    { heading: "HR + IT", body: "Rippling unifies HR, payroll, and IT with domestic and global options. Different balance than Deel's global-first focus." },
    { heading: "Enterprise", body: "ADP offers enterprise payroll and HR with global capabilities. For larger organizations." },
  ],
  topAlternatives: DEEL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "deel", name: "Deel", logoSrc: LOGOS.deel, bestFor: "global; EOR", startingPrice: "Quote", standoutFeature: "Global; EOR", reviewHref: getHrReviewUrl("deel") },
    DEEL_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling combines HR, payroll, and IT with global options. For companies that want domestic and global in one platform.", reviewHref: getHrReviewUrl("rippling"), compareHref: getHrCompareUrl("deel-vs-rippling") },
    { productName: "Gusto", heading: "Best for domestic", body: "Gusto is strong for domestic SMB payroll and HR. For US-only teams that don't need global EOR.", reviewHref: getHrReviewUrl("gusto") },
    { productName: "BambooHR", heading: "Best for HRIS", body: "BambooHR is HRIS-first with payroll via integration. For teams that want best-in-class HR.", reviewHref: getHrReviewUrl("bamboohr") },
    { productName: "ADP Workforce Now", heading: "Best for enterprise", body: "ADP offers enterprise payroll and HR with global options. For larger organizations.", reviewHref: getHrReviewUrl("adp-workforce-now") },
    { productName: "Paychex", heading: "Best for full-service", body: "Paychex provides full-service payroll and HR. For teams that want more support.", reviewHref: getHrReviewUrl("paychex") },
  ],
  relatedComparisons: [
    { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
  ],
  relatedResources: defaultRelatedResources("Deel", getHrReviewUrl("deel")),
  faqItems: [
    { q: "What is the best Deel alternative?", a: "Rippling for HR+IT with global; Gusto for domestic; BambooHR for HRIS; ADP for enterprise." },
    { q: "Is Deel better than Rippling?", a: "Deel is global-first for EOR and contractors; Rippling is HR+IT with domestic and global. Choose Deel for global hiring focus; Rippling for unified HR and IT." },
    { q: "Which HR software is best for domestic only?", a: "Gusto is strong for US-only SMB payroll and HR. BambooHR, Zenefits, and others focus on domestic as well." },
  ],
};

// ——— ADP Workforce Now alternatives ———
const ADP_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "paychex", name: "Paychex", logoSrc: LOGOS.paychex, rating: "4.4", bestFor: "full-service", description: "Full-service payroll and HR; mid-market.", reviewHref: getHrReviewUrl("paychex"), compareHref: getHrCompareUrl("adp-vs-paychex"), startingPrice: "Quote", standoutFeature: "Full-service" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "modern platform", description: "Unified HR and IT; modern UX.", reviewHref: getHrReviewUrl("rippling"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "SMB", description: "Self-serve payroll and HR with transparent pricing.", reviewHref: getHrReviewUrl("gusto"), startingPrice: "From ~$40/mo", standoutFeature: "SMB; transparent" },
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, rating: "4.6", bestFor: "HRIS", description: "Best-in-class HRIS; payroll via integration.", reviewHref: getHrReviewUrl("bamboohr"), startingPrice: "Quote", standoutFeature: "HRIS" },
  { slug: "trinet", name: "TriNet", logoSrc: LOGOS.trinet, rating: "4.4", bestFor: "PEO", description: "PEO for mid-market; benefits and compliance.", reviewHref: getHrReviewUrl("trinet"), startingPrice: "Quote", standoutFeature: "PEO" },
];

const adpPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best ADP Workforce Now Alternatives (2026)",
  subtitle: "If ADP Workforce Now isn't the right fit—because of cost, preference for modern UX, or scale—these HR alternatives offer strong options.",
  productName: "ADP Workforce Now",
  productSlug: "adp-workforce-now",
  originalReviewHref: getHrReviewUrl("adp-workforce-now"),
  quickAnswerParagraphs: [
    "ADP Workforce Now is enterprise payroll and HR; alternatives include Paychex for full-service at similar scale, Rippling for modern unified HR and IT, Gusto for SMB with transparent pricing, and BambooHR or TriNet for different focus. Paychex and Rippling are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Modern UX", body: "Rippling and Gusto offer more modern, self-serve platforms. For teams that want simpler UX and automation." },
    { heading: "Pricing", body: "Gusto has transparent per-person pricing. ADP and Paychex typically quote. Compare total cost." },
    { heading: "Scale", body: "Paychex is a direct full-service alternative. Rippling suits mid-market and growth companies." },
  ],
  topAlternatives: ADP_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, bestFor: "enterprise", startingPrice: "Quote", standoutFeature: "Enterprise; compliance", reviewHref: getHrReviewUrl("adp-workforce-now") },
    ADP_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Paychex", heading: "Best for full-service", body: "Paychex is full-service payroll and HR for mid-market. Direct alternative to ADP.", reviewHref: getHrReviewUrl("paychex"), compareHref: getHrCompareUrl("adp-vs-paychex") },
    { productName: "Rippling", heading: "Best for modern platform", body: "Rippling offers unified HR and IT with modern UX. For companies that want automation and one platform.", reviewHref: getHrReviewUrl("rippling") },
    { productName: "Gusto", heading: "Best for SMB", body: "Gusto is self-serve payroll and HR with transparent pricing. For SMBs that don't need enterprise scale.", reviewHref: getHrReviewUrl("gusto") },
    { productName: "BambooHR", heading: "Best for HRIS", body: "BambooHR is best-in-class HRIS with payroll via integration. For teams that want strongest HR.", reviewHref: getHrReviewUrl("bamboohr") },
    { productName: "TriNet", heading: "Best for PEO", body: "TriNet is a PEO for mid-market. For companies that want co-employment benefits.", reviewHref: getHrReviewUrl("trinet") },
  ],
  relatedComparisons: [
    { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
  ],
  relatedResources: defaultRelatedResources("ADP Workforce Now", getHrReviewUrl("adp-workforce-now")),
  faqItems: [
    { q: "What is the best ADP alternative?", a: "Paychex for full-service; Rippling for modern platform; Gusto for SMB; BambooHR for HRIS; TriNet for PEO." },
    { q: "Is ADP better than Paychex?", a: "Both are full-service payroll and HR. Compare features, support, and pricing for your size and needs." },
    { q: "Which HR software has transparent pricing like Gusto?", a: "Gusto and Zenefits have more transparent pricing. ADP and Paychex typically quote." },
  ],
};

// ——— Paychex alternatives ———
const PAYCHEX_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, rating: "4.5", bestFor: "enterprise", description: "Enterprise payroll and HR.", reviewHref: getHrReviewUrl("adp-workforce-now"), compareHref: getHrCompareUrl("adp-vs-paychex"), startingPrice: "Quote", standoutFeature: "Enterprise" },
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "SMB", description: "Self-serve with transparent pricing.", reviewHref: getHrReviewUrl("gusto"), startingPrice: "From ~$40/mo", standoutFeature: "SMB; transparent" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "Unified HR and IT; modern UX.", reviewHref: getHrReviewUrl("rippling"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, rating: "4.6", bestFor: "HRIS", description: "Best-in-class HRIS; payroll via integration.", reviewHref: getHrReviewUrl("bamboohr"), startingPrice: "Quote", standoutFeature: "HRIS" },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, rating: "4.3", bestFor: "value", description: "All-in-one HR at lower entry price.", reviewHref: getHrReviewUrl("zenefits"), startingPrice: "From ~$8/mo", standoutFeature: "Value" },
];

const paychexPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Paychex Alternatives (2026)",
  subtitle: "If Paychex isn't the right fit—because of cost, preference for self-serve, or scale—these HR alternatives offer strong options.",
  productName: "Paychex",
  productSlug: "paychex",
  originalReviewHref: getHrReviewUrl("paychex"),
  quickAnswerParagraphs: [
    "Paychex is full-service payroll and HR; alternatives include ADP for enterprise, Gusto for SMB with transparent pricing, Rippling for modern HR and IT, and BambooHR or Zenefits for different value. ADP and Gusto are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Self-serve", body: "Gusto and Rippling offer more self-serve and modern UX. For teams that want to run payroll and HR without full-service support." },
    { heading: "Pricing", body: "Gusto and Zenefits have more transparent pricing. Paychex and ADP typically quote." },
    { heading: "Enterprise", body: "ADP is the direct enterprise alternative. Compare support and features." },
  ],
  topAlternatives: PAYCHEX_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "paychex", name: "Paychex", logoSrc: LOGOS.paychex, bestFor: "full-service", startingPrice: "Quote", standoutFeature: "Full-service", reviewHref: getHrReviewUrl("paychex") },
    PAYCHEX_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ADP Workforce Now", heading: "Best for enterprise", body: "ADP is enterprise payroll and HR. Direct full-service alternative to Paychex.", reviewHref: getHrReviewUrl("adp-workforce-now"), compareHref: getHrCompareUrl("adp-vs-paychex") },
    { productName: "Gusto", heading: "Best for SMB", body: "Gusto is self-serve payroll and HR with transparent pricing. For SMBs.", reviewHref: getHrReviewUrl("gusto") },
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling unifies HR and IT with modern UX. For growth companies.", reviewHref: getHrReviewUrl("rippling") },
    { productName: "BambooHR", heading: "Best for HRIS", body: "BambooHR is HRIS-first with payroll via integration. For best-in-class HR.", reviewHref: getHrReviewUrl("bamboohr") },
    { productName: "Zenefits", heading: "Best for value", body: "Zenefits offers all-in-one HR at lower entry price. For cost-conscious teams.", reviewHref: getHrReviewUrl("zenefits") },
  ],
  relatedComparisons: [
    { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
  ],
  relatedResources: defaultRelatedResources("Paychex", getHrReviewUrl("paychex")),
  faqItems: [
    { q: "What is the best Paychex alternative?", a: "ADP for enterprise; Gusto for SMB; Rippling for modern HR+IT; BambooHR for HRIS; Zenefits for value." },
    { q: "Is Paychex better than ADP?", a: "Both are full-service. Compare features, support, and pricing for your organization." },
    { q: "Which HR software is self-serve like Gusto?", a: "Gusto, Rippling, Zenefits, and BambooHR are more self-serve. Paychex and ADP offer full-service options." },
  ],
};

// ——— TriNet alternatives ———
const TRINET_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "justworks", name: "Justworks", logoSrc: LOGOS.justworks, rating: "4.5", bestFor: "PEO small biz", description: "PEO with simpler UX for small businesses.", reviewHref: getHrReviewUrl("justworks"), compareHref: getHrCompareUrl("justworks-vs-trinet"), startingPrice: "Quote", standoutFeature: "PEO; simple" },
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "software-only", description: "Payroll and HR without PEO.", reviewHref: getHrReviewUrl("gusto"), startingPrice: "From ~$40/mo", standoutFeature: "Software-only" },
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, rating: "4.5", bestFor: "enterprise", description: "Enterprise payroll and HR; some PEO options.", reviewHref: getHrReviewUrl("adp-workforce-now"), startingPrice: "Quote", standoutFeature: "Enterprise" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "Unified HR and IT; no PEO.", reviewHref: getHrReviewUrl("rippling"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, rating: "4.3", bestFor: "all-in-one", description: "All-in-one HR and benefits.", reviewHref: getHrReviewUrl("zenefits"), startingPrice: "From ~$8/mo", standoutFeature: "All-in-one" },
];

const trinetPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best TriNet Alternatives (2026)",
  subtitle: "If TriNet isn't the right fit—because of scale, preference for software-only, or different PEO—these HR alternatives offer strong options.",
  productName: "TriNet",
  productSlug: "trinet",
  originalReviewHref: getHrReviewUrl("trinet"),
  quickAnswerParagraphs: [
    "TriNet is a PEO for mid-market; alternatives include Justworks for PEO with simpler UX for small businesses, Gusto for software-only payroll and HR, and ADP or Rippling for different scale and model. Justworks and Gusto are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Small business PEO", body: "Justworks is a PEO with simpler UX for small businesses. Different scale than TriNet's mid-market focus." },
    { heading: "Software-only", body: "Gusto and Rippling are software-only (no PEO). For teams that don't want co-employment." },
    { heading: "Enterprise", body: "ADP offers enterprise payroll and HR with some PEO-style options." },
  ],
  topAlternatives: TRINET_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "trinet", name: "TriNet", logoSrc: LOGOS.trinet, bestFor: "PEO mid-market", startingPrice: "Quote", standoutFeature: "PEO; mid-market", reviewHref: getHrReviewUrl("trinet") },
    TRINET_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Justworks", heading: "Best for PEO small biz", body: "Justworks is a PEO with simpler UX for small businesses. Compare PEO benefits and pricing.", reviewHref: getHrReviewUrl("justworks"), compareHref: getHrCompareUrl("justworks-vs-trinet") },
    { productName: "Gusto", heading: "Best for software-only", body: "Gusto is payroll and HR without PEO. For teams that don't need co-employment.", reviewHref: getHrReviewUrl("gusto") },
    { productName: "ADP Workforce Now", heading: "Best for enterprise", body: "ADP offers enterprise payroll and HR with some PEO-style options.", reviewHref: getHrReviewUrl("adp-workforce-now") },
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling unifies HR and IT; no PEO. For companies that want one platform.", reviewHref: getHrReviewUrl("rippling") },
    { productName: "Zenefits", heading: "Best for all-in-one", body: "Zenefits offers all-in-one HR and benefits. For cost-conscious teams.", reviewHref: getHrReviewUrl("zenefits") },
  ],
  relatedComparisons: [
    { label: "Justworks vs TriNet", href: getHrCompareUrl("justworks-vs-trinet") },
  ],
  relatedResources: defaultRelatedResources("TriNet", getHrReviewUrl("trinet")),
  faqItems: [
    { q: "What is the best TriNet alternative?", a: "Justworks for PEO small business; Gusto for software-only; ADP for enterprise; Rippling for HR+IT; Zenefits for all-in-one." },
    { q: "Is TriNet better than Justworks?", a: "TriNet targets mid-market; Justworks is for small businesses with simpler UX. Choose by company size and PEO needs." },
    { q: "Which HR software is not a PEO?", a: "Gusto, Rippling, BambooHR, and Zenefits are software-only (no PEO co-employment)." },
  ],
};

// ——— Justworks alternatives ———
const JUSTWORKS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "trinet", name: "TriNet", logoSrc: LOGOS.trinet, rating: "4.4", bestFor: "PEO mid-market", description: "PEO for mid-market; benefits and compliance.", reviewHref: getHrReviewUrl("trinet"), compareHref: getHrCompareUrl("justworks-vs-trinet"), startingPrice: "Quote", standoutFeature: "PEO; mid-market" },
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "software-only", description: "Payroll and HR without PEO.", reviewHref: getHrReviewUrl("gusto"), startingPrice: "From ~$40/mo", standoutFeature: "Software-only" },
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, rating: "4.5", bestFor: "enterprise", description: "Enterprise payroll and HR; some PEO options.", reviewHref: getHrReviewUrl("adp-workforce-now"), startingPrice: "Quote", standoutFeature: "Enterprise" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "Unified HR and IT; no PEO.", reviewHref: getHrReviewUrl("rippling"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, rating: "4.3", bestFor: "all-in-one", description: "All-in-one HR and benefits.", reviewHref: getHrReviewUrl("zenefits"), startingPrice: "From ~$8/mo", standoutFeature: "All-in-one" },
];

const justworksPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Justworks Alternatives (2026)",
  subtitle: "If Justworks isn't the right fit—because of scale, preference for software-only, or different PEO—these HR alternatives offer strong options.",
  productName: "Justworks",
  productSlug: "justworks",
  originalReviewHref: getHrReviewUrl("justworks"),
  quickAnswerParagraphs: [
    "Justworks is a PEO for small businesses; alternatives include TriNet for PEO at mid-market scale, Gusto for software-only payroll and HR, and ADP or Rippling for different models. TriNet and Gusto are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Mid-market PEO", body: "TriNet is a PEO for mid-market. For larger companies that need PEO at scale." },
    { heading: "Software-only", body: "Gusto and Rippling are software-only. For teams that don't want PEO co-employment." },
    { heading: "Enterprise", body: "ADP offers enterprise payroll and HR with some PEO-style options." },
  ],
  topAlternatives: JUSTWORKS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "justworks", name: "Justworks", logoSrc: LOGOS.justworks, bestFor: "PEO small biz", startingPrice: "Quote", standoutFeature: "PEO; simple", reviewHref: getHrReviewUrl("justworks") },
    JUSTWORKS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "TriNet", heading: "Best for PEO mid-market", body: "TriNet is a PEO for mid-market. For larger companies that need PEO benefits and compliance.", reviewHref: getHrReviewUrl("trinet"), compareHref: getHrCompareUrl("justworks-vs-trinet") },
    { productName: "Gusto", heading: "Best for software-only", body: "Gusto is payroll and HR without PEO. For teams that don't need co-employment.", reviewHref: getHrReviewUrl("gusto") },
    { productName: "ADP Workforce Now", heading: "Best for enterprise", body: "ADP offers enterprise payroll and HR with some PEO-style options.", reviewHref: getHrReviewUrl("adp-workforce-now") },
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling unifies HR and IT; no PEO. For growth companies.", reviewHref: getHrReviewUrl("rippling") },
    { productName: "Zenefits", heading: "Best for all-in-one", body: "Zenefits offers all-in-one HR and benefits. For cost-conscious teams.", reviewHref: getHrReviewUrl("zenefits") },
  ],
  relatedComparisons: [
    { label: "Justworks vs TriNet", href: getHrCompareUrl("justworks-vs-trinet") },
  ],
  relatedResources: defaultRelatedResources("Justworks", getHrReviewUrl("justworks")),
  faqItems: [
    { q: "What is the best Justworks alternative?", a: "TriNet for PEO mid-market; Gusto for software-only; ADP for enterprise; Rippling for HR+IT; Zenefits for all-in-one." },
    { q: "Is Justworks better than TriNet?", a: "Justworks is for small businesses with simpler UX; TriNet targets mid-market. Choose by company size." },
    { q: "Which HR software is software-only like Gusto?", a: "Gusto, Rippling, BambooHR, and Zenefits are software-only. Justworks and TriNet are PEOs." },
  ],
};

// ——— Zenefits alternatives ———
const ZENEFITS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, rating: "4.8", bestFor: "overall SMB", description: "Payroll and HR with strong reputation.", reviewHref: getHrReviewUrl("gusto"), startingPrice: "From ~$40/mo", standoutFeature: "Payroll + HR" },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, rating: "4.6", bestFor: "HR + IT", description: "HR, payroll, and IT in one platform.", reviewHref: getHrReviewUrl("rippling"), startingPrice: "Quote", standoutFeature: "HR + IT" },
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, rating: "4.6", bestFor: "HRIS", description: "Best-in-class HRIS; payroll via integration.", reviewHref: getHrReviewUrl("bamboohr"), startingPrice: "Quote", standoutFeature: "HRIS" },
  { slug: "justworks", name: "Justworks", logoSrc: LOGOS.justworks, rating: "4.5", bestFor: "PEO", description: "PEO with payroll and benefits.", reviewHref: getHrReviewUrl("justworks"), startingPrice: "Quote", standoutFeature: "PEO" },
  { slug: "paychex", name: "Paychex", logoSrc: LOGOS.paychex, rating: "4.4", bestFor: "full-service", description: "Full-service payroll and HR.", reviewHref: getHrReviewUrl("paychex"), startingPrice: "Quote", standoutFeature: "Full-service" },
];

const zenefitsPage: AlternativesTemplateProps = {
  ...gustoPage,
  title: "Best Zenefits Alternatives (2026)",
  subtitle: "If Zenefits isn't the right fit—because you need stronger payroll, HR+IT, or PEO—these HR alternatives offer strong options.",
  productName: "Zenefits",
  productSlug: "zenefits",
  originalReviewHref: getHrReviewUrl("zenefits"),
  quickAnswerParagraphs: [
    "Zenefits offers all-in-one HR and benefits at lower entry price; alternatives include Gusto for stronger payroll and reputation, Rippling for HR and IT, BambooHR for best-in-class HRIS, and Justworks for PEO. Gusto and Rippling are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Payroll strength", body: "Gusto is often preferred for payroll and overall SMB fit. Stronger brand and support." },
    { heading: "HR + IT", body: "Rippling adds IT provisioning and automation. For companies that want one platform for people and systems." },
    { heading: "HRIS", body: "BambooHR is best-in-class for HRIS and hiring. For teams that want strongest HR experience." },
  ],
  topAlternatives: ZENEFITS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, bestFor: "all-in-one value", startingPrice: "From ~$8/mo", standoutFeature: "All-in-one; value", reviewHref: getHrReviewUrl("zenefits") },
    ZENEFITS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Gusto", heading: "Best for overall SMB", body: "Gusto is payroll and HR with strong reputation. For SMBs that want proven platform.", reviewHref: getHrReviewUrl("gusto") },
    { productName: "Rippling", heading: "Best for HR + IT", body: "Rippling combines HR, payroll, and IT. For companies that want automation and one platform.", reviewHref: getHrReviewUrl("rippling") },
    { productName: "BambooHR", heading: "Best for HRIS", body: "BambooHR is best-in-class HRIS with payroll via integration. For strongest HR experience.", reviewHref: getHrReviewUrl("bamboohr") },
    { productName: "Justworks", heading: "Best for PEO", body: "Justworks is a PEO with payroll and benefits. For small businesses that want co-employment.", reviewHref: getHrReviewUrl("justworks") },
    { productName: "Paychex", heading: "Best for full-service", body: "Paychex provides full-service payroll and HR. For teams that want more support.", reviewHref: getHrReviewUrl("paychex") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Zenefits", getHrReviewUrl("zenefits")),
  faqItems: [
    { q: "What is the best Zenefits alternative?", a: "Gusto for overall SMB; Rippling for HR+IT; BambooHR for HRIS; Justworks for PEO; Paychex for full-service." },
    { q: "Is Zenefits better than Gusto?", a: "Zenefits has lower entry price; Gusto is often preferred for payroll and overall fit. Compare features and pricing for your size." },
    { q: "Which HR software is cheapest?", a: "Zenefits has a low starting price. Gusto and others have transparent pricing; compare per-person and what's included." },
  ],
};

// ——— Export ———
const HR_ALTERNATIVES_SLUGS = [
  "gusto", "bamboohr", "rippling", "deel", "adp-workforce-now", "paychex", "trinet", "justworks", "zenefits",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  gusto: gustoPage,
  bamboohr: bamboohrPage,
  rippling: ripplingPage,
  deel: deelPage,
  "adp-workforce-now": adpPage,
  paychex: paychexPage,
  trinet: trinetPage,
  justworks: justworksPage,
  zenefits: zenefitsPage,
};

export function getHrAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getHrAlternativesSlugs(): string[] {
  return [...HR_ALTERNATIVES_SLUGS];
}
