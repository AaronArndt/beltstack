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
  { label: "CRM software hub", href: "/crm" },
  { label: "Call tracking software hub", href: "/call-tracking" },
  { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
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
  {
    heading: "Response SLA discipline",
    body: "Lead quality decays fast. If your team cannot answer quickly by call/SMS, channel performance will look worse than it really is.",
  },
  {
    heading: "Compare channels with one scorecard",
    body: "Use the same disposition stages and scripts across vendors so your winner is based on booked-job margin, not reporting differences.",
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
    "Most pros win with a blended channel mix: keep one marketplace, layer one search-intent source, and tie everything back to CRM outcomes.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost per booked job", body: "Raw lead volume means nothing if close rates are low. Alternatives can improve match quality or intent." },
    { heading: "Category competition", body: "Dense markets exhaust shared lead pools quickly; a second channel stabilizes pipeline." },
    { heading: "Buyer behavior", body: "Some trades convert better on Google search or directory brands—match the channel to your customer." },
    { heading: "Risk concentration", body: "Relying on one platform exposes you to policy and auction swings. Diversification protects pipeline stability." },
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
    { q: "How do I know if Thumbtack is still profitable?", a: "Track booked-job margin by category and zip after refunds, cancellations, and response costs. If margin drops for multiple cycles, test alternatives." },
    { q: "What should I read next after this page?", a: "Open Thumbtack vs Angi and Bark vs Thumbtack, then validate finalists in each review page before changing budgets." },
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
    "Angi alternatives usually win when bundles reduce flexibility, geo coverage is uneven, or your team needs clearer per-lead economics.",
    "Use one scorecard across channels: same response SLA, same qualification script, and same booked-job attribution rules.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Bundle complexity", body: "Packaging can hide true cost per booked job; simpler pay-per-lead tools clarify math." },
    { heading: "Geography", body: "Some zips perform better on competing networks—test rather than assume." },
    { heading: "Control over pacing", body: "Teams often switch when they need tighter budget control by service line and season." },
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
    { q: "What is the best Angi alternative for contractors?", a: "Thumbtack is typically the most direct alternative for flexible local lead buying; Google LSA can outperform where search intent is strongest." },
    { q: "How should I test Angi alternatives?", a: "Run a 30-60 day split with identical scripts, response timing, and CRM stages, then choose by booked-job margin." },
    { q: "Where do I compare Angi alternatives and reviews?", a: "Use the alternatives table here, then open Thumbtack vs Angi, Angi vs HomeAdvisor, and the linked reviews." },
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
    "HomeAdvisor alternatives usually improve performance when duplicate overlap is high or gross margins cannot absorb shared-lead variance.",
    "For most local teams, the winning setup is one marketplace channel plus one intent channel with strict CRM attribution.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Duplicate leads", body: "Cross-marketplace overlap happens—tight CRM tagging and vendor policies matter." },
    { heading: "Margin squeeze", body: "If gross margin after lead cost falls, diversify before you scale spend." },
    { heading: "Inconsistent intent", body: "Category and geography can shift lead quality sharply; alternatives smooth volatility." },
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
  faqItems: [
    { q: "What replaced HomeAdvisor-only strategies?", a: "Most teams now blend marketplaces with Google LSA and owned marketing channels so one vendor does not control the full pipeline." },
    { q: "What is the best HomeAdvisor alternative?", a: "Angi and Thumbtack are the closest marketplace alternatives, while Google LSA is often the best intent-driven complement." },
    { q: "Should I keep HomeAdvisor while testing alternatives?", a: "Yes—reduce spend gradually and compare booked-job margin before fully switching." },
    { q: "What should I read next?", a: "Start with Angi vs HomeAdvisor, then review Thumbtack and Google LSA pages to finalize your channel mix." },
  ],
};

function makeLeadGenAlternativesPage(config: {
  slug: string;
  productName: string;
  title: string;
  subtitle: string;
  originalBestFor: string;
  originalPricing: string;
  originalStandout: string;
  quickAnswerParagraphs: string[];
  why: AlternativesEditorialBlock[];
  topAlternatives: AlternativesTopPick[];
  detailed: AlternativesDetailBlock[];
  relatedComparisonSlugs: string[];
  faqs: AlternativesTemplateProps["faqItems"];
}): AlternativesTemplateProps {
  const LOGO_BY_SLUG: Record<string, string> = {
    "google-local-services-ads": "/Logos/google.jpeg",
    "yelp-ads": "/Logos/yelp.png",
    "houzz-pro": "/Logos/houzz.jpeg",
    "facebook-lead-ads": "/Logos/facebook.jpeg",
    bark: "/Logos/bark.jpeg",
    thumbtack: "/Logos/thumbtack.jpeg",
    angi: "/Logos/angi.jpeg",
    homeadvisor: "/Logos/homeadvisor.jpeg",
  };
  const original: AlternativesTableRow = {
    slug: config.slug,
    name: config.productName,
    logoSrc: LOGO_BY_SLUG[config.slug] ?? "/Logos/thumbtack.jpeg",
    bestFor: config.originalBestFor,
    startingPrice: config.originalPricing,
    standoutFeature: config.originalStandout,
    reviewHref: getLeadGenerationReviewUrl(config.slug),
  };
  return {
    title: config.title,
    subtitle: config.subtitle,
    productName: config.productName,
    productSlug: config.slug,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    originalReviewHref: getLeadGenerationReviewUrl(config.slug),
    showPayrollTypesColumn: false,
    quickAnswerParagraphs: config.quickAnswerParagraphs,
    whyPeopleLookForAlternatives: config.why,
    topAlternatives: config.topAlternatives,
    comparisonTableRows: buildTableRows(original, config.topAlternatives),
    detailedAlternatives: config.detailed,
    howToChoose: HOW_TO_CHOOSE,
    relatedComparisons: config.relatedComparisonSlugs.map((slug) => rel(slug)),
    relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
    faqItems: config.faqs,
  };
}

const houzzProPage = makeLeadGenAlternativesPage({
  slug: "houzz-pro",
  productName: "Houzz Pro",
  title: "Best Houzz Pro Alternatives (2026)",
  subtitle: "If Houzz Pro’s portfolio-driven model is too narrow for your pipeline mix, these alternatives expand into marketplaces, Google intent demand, and lower-maintenance lead flows.",
  originalBestFor: "Portfolio-first remodel and design-build leads",
  originalPricing: "Subscription + ads",
  originalStandout: "Visual credibility and project storytelling",
  quickAnswerParagraphs: [
    "Teams replace Houzz Pro when lead volume depends less on project galleries and more on urgent calls or broader trade categories.",
    "Thumbtack and Angi usually win for faster marketplace volume, while Google Local Services Ads wins for high-intent search behavior in eligible categories.",
    "Keep Houzz Pro if your close rate is anchored by before/after proof and long sales cycles; switch when speed-to-lead and category breadth matter more.",
  ],
  why: [
    { heading: "Intent mismatch", body: "Design-led browsing can underperform when your best jobs come from urgent repair intent." },
    { heading: "Content overhead", body: "Houzz Pro rewards fresh project assets—teams without regular photo pipelines can struggle." },
    { heading: "Channel diversification", body: "Many operators add search and marketplace channels to stabilize lead flow seasonally." },
  ],
  topAlternatives: [
    { slug: "thumbtack", name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: "4.4", bestFor: "Broad marketplace demand", description: "Best for multi-trade local lead buying with flexible budgets.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), compareHref: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack"), startingPrice: "Pay per lead", standoutFeature: "Category breadth" },
    { slug: "google-local-services-ads", name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: "4.5", bestFor: "Urgent search leads", description: "Best for high-intent Google callers in eligible categories.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"), startingPrice: "Pay per lead", standoutFeature: "Google screened trust" },
    { slug: "angi", name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: "4.3", bestFor: "Home-services brand demand", description: "Strong brand-backed residential lead options.", reviewHref: getLeadGenerationReviewUrl("angi"), compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"), startingPrice: "Quote / bundles", standoutFeature: "Brand + bundled products" },
    { slug: "facebook-lead-ads", name: "Facebook Lead Ads", logoSrc: "/Logos/facebook.jpeg", rating: "4.1", bestFor: "Offer-driven paid social demand", description: "Useful for promos and seasonal campaigns with tight follow-up.", reviewHref: getLeadGenerationReviewUrl("facebook-lead-ads"), startingPrice: "Campaign budgets", standoutFeature: "Targeting + instant forms" },
  ],
  detailed: [
    { productName: "Thumbtack", heading: "Best volume replacement", body: "Use when you want faster marketplace testing across more service categories.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), compareHref: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
    { productName: "Google Local Services Ads", heading: "Best high-intent search replacement", body: "Switch here when emergency or same-day calls matter more than visual browsing journeys.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  ],
  relatedComparisonSlugs: ["houzz-pro-vs-thumbtack", "thumbtack-vs-angi", "google-local-services-ads-vs-yelp-ads"],
  faqs: [
    { q: "What is the best Houzz Pro alternative for contractors?", a: "Thumbtack is usually the first alternative for broader marketplace volume; Google LSA is best for urgent Google-first intent where eligible." },
    { q: "Should remodelers leave Houzz Pro?", a: "Not always—if portfolio-led trust drives your close rate, Houzz Pro can still be a top channel. Replace only when channel economics no longer work." },
    { q: "How should I test alternatives?", a: "Run a 30-60 day split with identical lead response scripts, then compare booked-job margin and no-show rates rather than raw lead count." },
  ],
});

const barkPage = makeLeadGenAlternativesPage({
  slug: "bark",
  productName: "Bark",
  title: "Best Bark Alternatives (2026)",
  subtitle: "If Bark credit packs are not producing consistent booked jobs, these alternatives offer stronger local category depth and clearer intent channels.",
  originalBestFor: "Credit-based, multi-category lead buying",
  originalPricing: "Credits / lead packs",
  originalStandout: "Multi-category breadth",
  quickAnswerParagraphs: [
    "Bark alternatives are common when teams want stronger category depth by metro and less variability in lead quality.",
    "Thumbtack and Angi are the usual marketplace replacements; Google LSA and Yelp Ads can win where search/profile behavior is stronger.",
  ],
  why: [
    { heading: "Credit efficiency", body: "Credit models can feel opaque when lead acceptance rates or close quality vary by category." },
    { heading: "Category depth", body: "Some verticals simply perform better on US-focused marketplaces with denser supply." },
    { heading: "Intent quality", body: "When broad category reach attracts low-fit leads, narrower channels often improve economics." },
  ],
  topAlternatives: [
    { slug: "thumbtack", name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: "4.4", bestFor: "US local marketplace depth", description: "Often the most direct Bark alternative in US markets.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), compareHref: getLeadGenerationCompareUrl("bark-vs-thumbtack"), startingPrice: "Pay per lead", standoutFeature: "Trade breadth + controls" },
    { slug: "angi", name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: "4.3", bestFor: "Home-services ecosystem", description: "Directory + lead products for residential categories.", reviewHref: getLeadGenerationReviewUrl("angi"), compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"), startingPrice: "Quote / bundles", standoutFeature: "Brand-led demand" },
    { slug: "google-local-services-ads", name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: "4.5", bestFor: "Urgent search demand", description: "High-intent caller channel for eligible service categories.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"), startingPrice: "Pay per lead", standoutFeature: "Google trust + intent" },
  ],
  detailed: [
    { productName: "Thumbtack", heading: "Best direct marketplace replacement", body: "Switch when you want a familiar pay-per-lead model with stronger local depth.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), compareHref: getLeadGenerationCompareUrl("bark-vs-thumbtack") },
    { productName: "Google Local Services Ads", heading: "Best intent upgrade", body: "Use when speed-to-lead on urgent Google searches drives better margin than broad-category feeds.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  ],
  relatedComparisonSlugs: ["bark-vs-thumbtack", "thumbtack-vs-angi", "google-local-services-ads-vs-yelp-ads"],
  faqs: [
    { q: "What is the closest Bark alternative?", a: "Thumbtack is usually the closest US-focused alternative for local service lead buying." },
    { q: "Are Bark credits better than pay-per-lead?", a: "Not always. Evaluate by booked-job margin after disputes and response costs, not by headline credit price." },
    { q: "Should I run Bark and Thumbtack together?", a: "You can, but dedupe leads in CRM and compare channel-level close rates before expanding both budgets." },
  ],
});

const googleLsaPage = makeLeadGenAlternativesPage({
  slug: "google-local-services-ads",
  productName: "Google Local Services Ads",
  title: "Best Google Local Services Ads Alternatives (2026)",
  subtitle: "If LSA eligibility, lead costs, or category limitations block growth, these alternatives provide marketplace and social lead channels with different intent profiles.",
  originalBestFor: "Verified, high-intent Google call leads",
  originalPricing: "Pay per lead",
  originalStandout: "Google Screened trust signal",
  quickAnswerParagraphs: [
    "Teams seek LSA alternatives when categories are ineligible, lead auctions spike, or profile verification becomes operationally heavy.",
    "Thumbtack and Angi are the usual marketplace complements; Yelp Ads and Facebook Lead Ads add profile/social demand where they already perform.",
    "Keep LSA in the mix when it delivers high-intent calls profitably—most teams layer alternatives, not replace completely.",
  ],
  why: [
    { heading: "Eligibility constraints", body: "Not every category or region qualifies for LSA, forcing blended channel strategies." },
    { heading: "Auction pressure", body: "Cost per lead can rise quickly in competitive metros and seasonal peaks." },
    { heading: "Channel concentration risk", body: "Single-channel dependence creates volatility; alternatives stabilize lead flow." },
  ],
  topAlternatives: [
    { slug: "thumbtack", name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: "4.4", bestFor: "Marketplace diversification", description: "Adds marketplace volume when LSA caps or eligibility limit growth.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"), startingPrice: "Pay per lead", standoutFeature: "Flexible budgets" },
    { slug: "angi", name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: "4.3", bestFor: "Home-services alternatives", description: "Brand-backed residential demand outside Google auctions.", reviewHref: getLeadGenerationReviewUrl("angi"), compareHref: getLeadGenerationCompareUrl("thumbtack-vs-angi"), startingPrice: "Quote / bundles", standoutFeature: "Directory + bundles" },
    { slug: "yelp-ads", name: "Yelp Ads", logoSrc: "/Logos/yelp.png", rating: "4.0", bestFor: "Yelp-centric metros", description: "Useful where Yelp profiles and review volume already convert.", reviewHref: getLeadGenerationReviewUrl("yelp-ads"), compareHref: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads"), startingPrice: "Campaign budgets", standoutFeature: "Sponsored Yelp visibility" },
    { slug: "facebook-lead-ads", name: "Facebook Lead Ads", logoSrc: "/Logos/facebook.jpeg", rating: "4.1", bestFor: "Offer-based paid social", description: "Demand generation channel when search volume is limited.", reviewHref: getLeadGenerationReviewUrl("facebook-lead-ads"), startingPrice: "Campaign budgets", standoutFeature: "Audience targeting" },
  ],
  detailed: [
    { productName: "Yelp Ads", heading: "Best profile-driven alternative", body: "Best where Yelp behavior is already strong and reviews influence call intent.", reviewHref: getLeadGenerationReviewUrl("yelp-ads"), compareHref: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
    { productName: "Thumbtack", heading: "Best marketplace backup", body: "Adds spendable lead volume when LSA budgets hit efficiency ceilings.", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  ],
  relatedComparisonSlugs: ["google-local-services-ads-vs-yelp-ads", "thumbtack-vs-angi", "angi-vs-homeadvisor"],
  faqs: [
    { q: "What is the best Google LSA alternative?", a: "Thumbtack is the most common marketplace complement; Yelp Ads is viable in Yelp-heavy metros; Angi/HomeAdvisor fit residential marketplace strategies." },
    { q: "Should I replace LSA entirely?", a: "Usually no. Most profitable operators keep LSA and diversify with one or two alternatives by category and zip." },
    { q: "How do I compare alternatives fairly?", a: "Use the same response SLA, call script, and CRM disposition stages across channels, then compare booked-job margin." },
  ],
});

const yelpAdsPage = makeLeadGenAlternativesPage({
  slug: "yelp-ads",
  productName: "Yelp Ads",
  title: "Best Yelp Ads Alternatives (2026)",
  subtitle: "If Yelp Ads spend is not converting consistently, these alternatives offer stronger intent channels and broader local lead options.",
  originalBestFor: "Yelp profile and review-driven lead capture",
  originalPricing: "Campaign budgets",
  originalStandout: "Sponsored Yelp placements",
  quickAnswerParagraphs: [
    "Yelp Ads alternatives are common when profile-driven demand is inconsistent across neighborhoods or service categories.",
    "Google LSA is often the highest-intent alternative for eligible trades, while Thumbtack and Angi provide marketplace diversification.",
  ],
  why: [
    { heading: "Platform dependency", body: "Yelp performance depends heavily on profile health and local Yelp usage behavior." },
    { heading: "Intent variability", body: "Some metros convert better from Google-first intent than directory browsing." },
    { heading: "Budget efficiency", body: "If cost per booked job drifts, split testing alternatives can recover margin." },
  ],
  topAlternatives: [
    { slug: "google-local-services-ads", name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: "4.5", bestFor: "High-intent search calls", description: "Strongest Yelp replacement where urgent Google behavior dominates.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"), compareHref: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads"), startingPrice: "Pay per lead", standoutFeature: "Google Screened" },
    { slug: "thumbtack", name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: "4.4", bestFor: "Flexible marketplace volume", description: "Marketplace breadth for service categories beyond Yelp strength.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), startingPrice: "Pay per lead", standoutFeature: "Category reach" },
    { slug: "angi", name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: "4.3", bestFor: "Residential lead programs", description: "Brand-backed home-services alternative to Yelp-first strategies.", reviewHref: getLeadGenerationReviewUrl("angi"), startingPrice: "Quote / bundles", standoutFeature: "Brand demand" },
  ],
  detailed: [
    { productName: "Google Local Services Ads", heading: "Best high-intent alternative", body: "Use when your buyers search on Google and want immediate contact.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"), compareHref: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
    { productName: "Thumbtack", heading: "Best marketplace substitute", body: "Helps diversify when Yelp profile traffic underdelivers in your zip.", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  ],
  relatedComparisonSlugs: ["google-local-services-ads-vs-yelp-ads", "thumbtack-vs-angi", "bark-vs-thumbtack"],
  faqs: [
    { q: "What is better than Yelp Ads for contractors?", a: "Google Local Services Ads is often better for urgent service calls in eligible categories; Thumbtack is a common marketplace alternative." },
    { q: "Should I keep Yelp Ads while testing alternatives?", a: "Yes—reduce budget gradually and compare booked-job economics before shutting down a channel entirely." },
    { q: "Do Yelp reviews still matter if I switch?", a: "Yes. Yelp reviews still influence trust even when lead volume shifts to Google or marketplaces." },
  ],
});

const facebookLeadAdsPage = makeLeadGenAlternativesPage({
  slug: "facebook-lead-ads",
  productName: "Facebook Lead Ads",
  title: "Best Facebook Lead Ads Alternatives (2026)",
  subtitle: "If paid social leads are inconsistent or hard to close, these alternatives provide stronger local intent and clearer lead economics.",
  originalBestFor: "Offer-driven paid social lead capture",
  originalPricing: "Campaign budgets",
  originalStandout: "Audience targeting + instant forms",
  quickAnswerParagraphs: [
    "Facebook Lead Ads alternatives are common when lead quality is soft, follow-up speed is inconsistent, or social creative fatigue raises cost.",
    "Google LSA is the top intent upgrade for eligible trades; Thumbtack and Angi are common marketplace alternatives for local volume.",
  ],
  why: [
    { heading: "Intent quality", body: "In-platform social forms can generate lower buyer intent than search or marketplace channels." },
    { heading: "Creative dependency", body: "Performance decays without consistent creative testing and offer refreshes." },
    { heading: "Operational lag", body: "If response workflows are slow, social leads decay quickly and CAC rises." },
  ],
  topAlternatives: [
    { slug: "google-local-services-ads", name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: "4.5", bestFor: "Urgent search intent", description: "Higher-intent local demand where eligibility allows.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"), startingPrice: "Pay per lead", standoutFeature: "Search intent quality" },
    { slug: "thumbtack", name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: "4.4", bestFor: "Marketplace lead buying", description: "Useful if social targeting volatility is hurting consistency.", reviewHref: getLeadGenerationReviewUrl("thumbtack"), startingPrice: "Pay per lead", standoutFeature: "Budget controls" },
    { slug: "angi", name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: "4.3", bestFor: "Residential lead programs", description: "Alternative for home-services operators needing non-social channels.", reviewHref: getLeadGenerationReviewUrl("angi"), startingPrice: "Quote / bundles", standoutFeature: "Brand-backed demand" },
  ],
  detailed: [
    { productName: "Google Local Services Ads", heading: "Best intent upgrade", body: "Move here when you need urgent, high-intent calls rather than top-funnel social inquiries.", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
    { productName: "Thumbtack", heading: "Best marketplace backup", body: "Use when you want controllable local lead volume without constant creative cycles.", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  ],
  relatedComparisonSlugs: ["google-local-services-ads-vs-yelp-ads", "thumbtack-vs-angi", "bark-vs-thumbtack"],
  faqs: [
    { q: "What is the best alternative to Facebook Lead Ads?", a: "Google LSA is best for high-intent local search leads; Thumbtack and Angi are common alternatives for marketplace-based volume." },
    { q: "Should I stop Facebook ads completely?", a: "Not always. Many teams keep Facebook for retargeting/offers and shift top-budget acquisition to higher-intent channels." },
    { q: "How can I improve social lead quality before switching?", a: "Tighten targeting, raise form friction, and enforce sub-5-minute response workflows. If margin remains weak, diversify channels." },
  ],
});

const pages: Record<string, AlternativesTemplateProps> = {
  thumbtack: thumbtackPage,
  angi: angiPage,
  homeadvisor: homeadvisorPage,
  "houzz-pro": houzzProPage,
  bark: barkPage,
  "google-local-services-ads": googleLsaPage,
  "yelp-ads": yelpAdsPage,
  "facebook-lead-ads": facebookLeadAdsPage,
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
