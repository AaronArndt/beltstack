/**
 * Lead generation alternatives — templates only for products with dedicated pages per scope.
 */

import type {
  AlternativesDetailBlock,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesTableRow,
  AlternativesTemplateProps,
  AlternativesTopPick,
} from "@/components/alternatives/AlternativesTemplate";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getLeadGenerationComparisonBySlug } from "@/lib/data/leadGenerationComparisons";
import {
  getLeadGenerationAlternativeUrl,
  getLeadGenerationBestForUrl,
  getLeadGenerationCompareUrl,
  getLeadGenerationReviewUrl,
} from "@/lib/routes";

const CATEGORY = { href: "/lead-generation", label: "Lead Generation" };
const ROUNDUP_HREF = "/lead-generation/best-lead-generation-tools";
const COMPARE_HUB = "/lead-generation/compare";
const GUIDES_HUB = "/lead-generation/guides";

const HUB_RELATED_RESOURCES: AlternativesLink[] = [
  { label: "Lead generation hub", href: CATEGORY.href },
  { label: "Best lead generation tools", href: ROUNDUP_HREF },
  { label: "Compare lead generation platforms", href: COMPARE_HUB },
  { label: "Lead generation guides", href: GUIDES_HUB },
  { label: "Best for contractors", href: getLeadGenerationBestForUrl("contractors") },
  { label: "Best for home services", href: getLeadGenerationBestForUrl("home-services") },
];

function softwareReviewLinks(entries: [string, string][]): AlternativesLink[] {
  return entries.map(([slug, name]) => ({
    label: `${name} review`,
    href: getLeadGenerationReviewUrl(slug),
  }));
}

const ALL_REVIEW_TUPLES: [string, string][] = [
  ["thumbtack", "Thumbtack"],
  ["angi", "Angi"],
  ["houzz-pro", "Houzz Pro"],
  ["bark", "Bark"],
  ["google-local-services-ads", "Google Local Services Ads"],
  ["yelp-ads", "Yelp Ads"],
  ["facebook-lead-ads", "Facebook Lead Ads"],
  ["homeadvisor", "HomeAdvisor"],
];

function rel(slug: string) {
  return toAlternativesRelatedComparison(getLeadGenerationCompareUrl(slug), getLeadGenerationComparisonBySlug(slug));
}

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  {
    heading: "Lead economics",
    body: "Budget using booked jobs and gross margin—not raw lead count. Compare refund and duplicate-lead rules before scaling.",
  },
  {
    heading: "Speed to lead",
    body: "Shared marketplaces reward fast phone and SMS response. If you can’t staff inbound, paid leads underperform.",
  },
  {
    heading: "Channel fit",
    body: "Emergency trades lean on search and marketplaces; design-build may lean on visual platforms. Match channel to how customers choose you.",
  },
  {
    heading: "Owned vs rented",
    body: "Paid leads are rented. Pair them with CRM, reviews, and site SEO so you’re not 100% dependent on one vendor.",
  },
];

function buildTableRows(original: AlternativesTableRow, alts: AlternativesTopPick[]): AlternativesTableRow[] {
  return [
    original,
    ...alts.map((a) => ({
      slug: a.slug,
      name: a.name,
      logoSrc: a.logoSrc,
      bestFor: a.bestFor,
      startingPrice: a.startingPrice ?? "—",
      standoutFeature: a.standoutFeature ?? a.bestFor,
      reviewHref: a.reviewHref,
    })),
  ];
}

const thumbtackAlts: AlternativesTopPick[] = [
  {
    slug: "angi",
    name: "Angi",
    logoSrc: "/Logos/angi.jpeg",
    rating: "4.3",
    bestFor: "Home services directory + lead bundles",
    description: "Strong when you want Angi’s consumer brand alongside lead products.",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"),
    startingPrice: "Quote / bundles",
    standoutFeature: "Brand + bundled marketing",
  },
  {
    slug: "bark",
    name: "Bark",
    logoSrc: "/Logos/bark.jpeg",
    rating: "4.0",
    bestFor: "Credit-based lead buying across categories",
    description: "Useful when you want to test multiple service lines in one account.",
    reviewHref: getLeadGenerationReviewUrl("bark"),
    compareHref: getLeadGenerationCompareUrl("bark-vs-thumbtack"),
    startingPrice: "Credits / packs",
    standoutFeature: "Multi-category reach",
  },
  {
    slug: "homeadvisor",
    name: "HomeAdvisor",
    logoSrc: "/Logos/homeadvisor.jpeg",
    rating: "4.1",
    bestFor: "High-volume home service leads",
    description: "Comparable marketplace footprint for residential trades.",
    reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
    startingPrice: "Pay per lead",
    standoutFeature: "Homeowner marketplace scale",
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    logoSrc: "/Logos/google.jpeg",
    rating: "4.5",
    bestFor: "Google searchers calling now",
    description: "Best when your customers start on Google with urgent intent.",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    startingPrice: "Pay per lead",
    standoutFeature: "Google screened badge",
  },
  {
    slug: "houzz-pro",
    name: "Houzz Pro",
    logoSrc: "/Logos/houzz.jpeg",
    rating: "4.2",
    bestFor: "Portfolio-driven remodel leads",
    description: "Better when projects need visual proof and design trust.",
    reviewHref: getLeadGenerationReviewUrl("houzz-pro"),
    compareHref: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack"),
    startingPrice: "Subscription + ads",
    standoutFeature: "Visual discovery",
  },
];

const thumbtackOriginal: AlternativesTableRow = {
  slug: "thumbtack",
  name: "Thumbtack",
  logoSrc: "/Logos/thumbtack.jpeg",
  bestFor: "Pay-per-lead marketplace for local pros",
  startingPrice: "Pay per lead",
  standoutFeature: "Flexible budgets; broad trade coverage",
  reviewHref: getLeadGenerationReviewUrl("thumbtack"),
};

const thumbtackDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Angi",
    heading: "Best home-services brand depth",
    body: "Choose Angi when bundled directory and ad products align with how you already market.",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"),
  },
  {
    productName: "Google Local Services Ads",
    heading: "Best for urgent Google search",
    body: "LSA fits high-intent local searchers who call immediately from results.",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
  },
  {
    productName: "HomeAdvisor",
    heading: "Best parallel marketplace test",
    body: "Many teams run Thumbtack alongside HomeAdvisor to compare lead quality by zip.",
    reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
  },
];

const thumbtackPage: AlternativesTemplateProps = {
  title: "Best Thumbtack Alternatives (2026)",
  subtitle:
    "If Thumbtack isn’t matching your margins—or you want to diversify lead sources—these alternatives cover marketplaces, Google LSA, and visual pros.",
  productName: "Thumbtack",
  productSlug: "thumbtack",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getLeadGenerationReviewUrl("thumbtack"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Teams look beyond Thumbtack when lead quality in their zip code slips, competition spikes, or Google search becomes the dominant buyer path.",
    "Start by retesting dispute rules and follow-up speed—then diversify with Angi, HomeAdvisor, or Google Local Services Ads using booked-job math.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost per booked job", body: "Raw lead volume means nothing if close rates are low. Alternatives can improve match quality or intent." },
    { heading: "Category competition", body: "Dense markets exhaust shared lead pools quickly; a second channel stabilizes pipeline." },
    { heading: "Buyer behavior", body: "Some trades convert better on Google search or directory brands—match the channel to your customer." },
  ],
  topAlternatives: thumbtackAlts,
  comparisonTableRows: buildTableRows(thumbtackOriginal, thumbtackAlts),
  detailedAlternatives: thumbtackDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    rel("thumbtack-vs-angi"),
    rel("bark-vs-thumbtack"),
    rel("houzz-pro-vs-thumbtack"),
  ],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "What is the best alternative to Thumbtack?", a: "Angi and HomeAdvisor are the closest marketplace peers; Google Local Services Ads is the best high-intent search alternative when you’re eligible." },
    { q: "Should I run Thumbtack and HomeAdvisor together?", a: "Many pros do—compare duplicate lead policies and net cost per booked job before doubling spend." },
  ],
};

const angiAlts: AlternativesTopPick[] = [
  {
    slug: "thumbtack",
    name: "Thumbtack",
    logoSrc: "/Logos/thumbtack.jpeg",
    rating: "4.4",
    bestFor: "Flexible pay-per-lead buying",
    description: "Self-serve lead budgets across many local categories.",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
    compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"),
    startingPrice: "Pay per lead",
    standoutFeature: "Broad trade coverage",
  },
  {
    slug: "homeadvisor",
    name: "HomeAdvisor",
    logoSrc: "/Logos/homeadvisor.jpeg",
    rating: "4.1",
    bestFor: "Parallel home-services marketplace",
    description: "Often the first split test against Angi for residential trades.",
    reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
    compareHref: getLeadGenerationCompareUrl("angi-vs-homeadvisor"),
    startingPrice: "Pay per lead",
    standoutFeature: "Homeowner marketplace",
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    logoSrc: "/Logos/google.jpeg",
    rating: "4.5",
    bestFor: "Google-first customers",
    description: "Use when searchers convert better than directory browsers.",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    startingPrice: "Pay per lead",
    standoutFeature: "Screened Google placement",
  },
  {
    slug: "bark",
    name: "Bark",
    logoSrc: "/Logos/bark.jpeg",
    rating: "4.0",
    bestFor: "Multi-category prospecting",
    description: "Useful when you list more than one trade service line.",
    reviewHref: getLeadGenerationReviewUrl("bark"),
    startingPrice: "Credits / packs",
    standoutFeature: "Wide category mix",
  },
  {
    slug: "yelp-ads",
    name: "Yelp Ads",
    logoSrc: "/Logos/yelp.png",
    rating: "4.0",
    bestFor: "Yelp-heavy metros",
    description: "Double down when your reviews and profile already win on Yelp.",
    reviewHref: getLeadGenerationReviewUrl("yelp-ads"),
    startingPrice: "Campaign budgets",
    standoutFeature: "Sponsored Yelp placement",
  },
];

const angiOriginal: AlternativesTableRow = {
  slug: "angi",
  name: "Angi",
  logoSrc: "/Logos/angi.jpeg",
  bestFor: "Home services directory + lead products",
  startingPrice: "Quote / bundles",
  standoutFeature: "Trusted brand; bundled formats",
  reviewHref: getLeadGenerationReviewUrl("angi"),
};

const angiPage: AlternativesTemplateProps = {
  title: "Best Angi Alternatives (2026)",
  subtitle: "If Angi’s bundles, overlap, or geography don’t pencil out, these channels replace or complement marketplace leads.",
  productName: "Angi",
  productSlug: "angi",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getLeadGenerationReviewUrl("angi"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Pros add Thumbtack, HomeAdvisor, or Google LSA when Angi economics drift—or when they need diversification beyond one network.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Bundle complexity", body: "Packaging can hide true cost per booked job; simpler pay-per-lead tools clarify math." },
    { heading: "Geography", body: "Some zips perform better on competing networks—test rather than assume." },
  ],
  topAlternatives: angiAlts,
  comparisonTableRows: buildTableRows(angiOriginal, angiAlts),
  detailedAlternatives: [
    {
      productName: "Thumbtack",
      heading: "Best self-serve marketplace",
      body: "Flexible budgets and broad trade coverage—great when you want direct control.",
      reviewHref: getLeadGenerationReviewUrl("thumbtack"),
      compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"),
    },
    {
      productName: "HomeAdvisor",
      heading: "Best head-to-head marketplace",
      body: "Run Angi vs HomeAdvisor with the same follow-up script to compare quality.",
      reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
      compareHref: getLeadGenerationCompareUrl("angi-vs-homeadvisor"),
    },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("thumbtack-vs-angi"), rel("angi-vs-homeadvisor")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "Is Angi or HomeAdvisor better?", a: "It depends on your geography and category. Read our comparison and test both at modest spend." },
  ],
};

const homeadvisorAlts: AlternativesTopPick[] = angiAlts.filter((x) => x.slug !== "homeadvisor");

const homeadvisorOriginal: AlternativesTableRow = {
  slug: "homeadvisor",
  name: "HomeAdvisor",
  logoSrc: "/Logos/homeadvisor.jpeg",
  bestFor: "Residential marketplace leads",
  startingPrice: "Pay per lead",
  standoutFeature: "Scale across home services",
  reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
};

const homeadvisorPage: AlternativesTemplateProps = {
  title: "Best HomeAdvisor Alternatives (2026)",
  subtitle: "Swap or complement HomeAdvisor when overlap, cost, or lead quality forces a broader mix.",
  productName: "HomeAdvisor",
  productSlug: "homeadvisor",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getLeadGenerationReviewUrl("homeadvisor"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Angi, Thumbtack, and Google LSA are the most common pivots—choose based on intent (search vs marketplace) and your dispute comfort.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Duplicate leads", body: "Cross-marketplace overlap happens—tight CRM tagging and vendor policies matter." },
    { heading: "Margin squeeze", body: "If gross margin after lead cost falls, diversify before you scale spend." },
  ],
  topAlternatives: homeadvisorAlts,
  comparisonTableRows: buildTableRows(homeadvisorOriginal, homeadvisorAlts),
  detailedAlternatives: [
    {
      productName: "Angi",
      heading: "Best parallel competitor",
      body: "Evaluate Angi bundles against HomeAdvisor in the same zip codes.",
      reviewHref: getLeadGenerationReviewUrl("angi"),
      compareHref: getLeadGenerationCompareUrl("angi-vs-homeadvisor"),
    },
    {
      productName: "Thumbtack",
      heading: "Best flexible marketplace",
      body: "Self-serve controls help when you want faster budget changes.",
      reviewHref: getLeadGenerationReviewUrl("thumbtack"),
      compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"),
    },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("angi-vs-homeadvisor"), rel("bark-vs-thumbtack")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [{ q: "What replaced HomeAdvisor-only strategies?", a: "Most teams now blend marketplaces with Google LSA and owned marketing—see our guides for economics." }],
};

const pages: Record<string, AlternativesTemplateProps> = {
  thumbtack: thumbtackPage,
  angi: angiPage,
  homeadvisor: homeadvisorPage,
};

export function getLeadGenerationAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getLeadGenerationAlternativesSlugs(): string[] {
  return Object.keys(pages);
}

export function getLeadGenerationAlternativePath(slug: string): string {
  return getLeadGenerationAlternativeUrl(slug);
}
