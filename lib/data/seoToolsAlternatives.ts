/**
 * SEO tools alternatives — dedicated pages for Semrush, Ahrefs, and Moz Pro.
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
import { getSeoToolsComparisonBySlug } from "@/lib/data/seoToolsComparisons";
import {
  getSeoToolsAlternativeUrl,
  getSeoToolsBestForUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
} from "@/lib/routes";

const CATEGORY = { href: "/seo-tools", label: "SEO Tools" };
const ROUNDUP_HREF = "/seo-tools/best-seo-tools";
const COMPARE_HUB = "/seo-tools/compare";
const GUIDES_HUB = "/seo-tools/guides";

const HUB_RELATED_RESOURCES: AlternativesLink[] = [
  { label: "SEO tools hub", href: CATEGORY.href },
  { label: "Best SEO tools", href: ROUNDUP_HREF },
  { label: "Compare SEO tools", href: COMPARE_HUB },
  { label: "SEO tools guides", href: GUIDES_HUB },
  { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
  { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
  { label: "Best for contractors", href: getSeoToolsBestForUrl("contractors") },
  { label: "Best for local SEO", href: getSeoToolsBestForUrl("local-seo") },
  { label: "Best website builders (2026)", href: "/website-builders/best-website-builders" },
  { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
  { label: "CRM software hub", href: "/crm" },
];

function softwareReviewLinks(entries: [string, string][]): AlternativesLink[] {
  return entries.map(([slug, name]) => ({
    label: `${name} review`,
    href: getSeoToolsReviewUrl(slug),
  }));
}

const ALL_REVIEW_TUPLES: [string, string][] = [
  ["semrush", "Semrush"],
  ["ahrefs", "Ahrefs"],
  ["moz-pro", "Moz Pro"],
  ["ubersuggest", "Ubersuggest"],
  ["brightlocal", "BrightLocal"],
  ["whitespark", "Whitespark"],
  ["se-ranking", "SE Ranking"],
  ["google-search-console", "Google Search Console"],
];

function rel(slug: string) {
  return toAlternativesRelatedComparison(getSeoToolsCompareUrl(slug), getSeoToolsComparisonBySlug(slug));
}

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  {
    heading: "Local execution first",
    body: "GBP photos, categories, reviews, and accurate service areas beat dashboards if they are neglected. Tools inform priorities—they do not replace field work.",
  },
  {
    heading: "Stack discipline",
    body: "One primary research suite plus Search Console is enough for many teams. Add BrightLocal or Whitespark when Map Pack and citations are the bottleneck.",
  },
  {
    heading: "Limit math",
    body: "Model tracked keywords, locations, and seats before annual contracts. Local contractors often pay for unused enterprise depth.",
  },
  {
    heading: "Measure booked jobs",
    body: "Tie SEO time and software cost to calls and booked revenue—not vanity national rankings that never produce service calls.",
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

const semrushAlts: AlternativesTopPick[] = [
  {
    slug: "ahrefs",
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: "4.7",
    bestFor: "Backlinks and content gap research",
    description: "Best when competitor links and content gaps steer your roadmap.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
    startingPrice: "From ~$129/mo",
    standoutFeature: "Link index depth",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    bestFor: "Value all-in-one SEO",
    description: "Solid rank tracking and audits at a lower tier than flagship suites.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    compareHref: getSeoToolsCompareUrl("se-ranking-vs-semrush"),
    startingPrice: "From ~$65/mo",
    standoutFeature: "Price-to-feature balance",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    bestFor: "Local SEO operations",
    description: "GBP, citations, and local rank grids when Maps is the focus.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    startingPrice: "From ~$39/mo",
    standoutFeature: "Map Pack workflows",
  },
  {
    slug: "moz-pro",
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: "4.3",
    bestFor: "Approachable SMB suite",
    description: "Easier onboarding with credible fundamentals and education.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    startingPrice: "From ~$99/mo",
    standoutFeature: "Training + UX",
  },
  {
    slug: "google-search-console",
    name: "Google Search Console",
    logoSrc: "/Logos/google.jpeg",
    rating: "4.8",
    bestFor: "Free performance truth",
    description: "Queries, coverage, and indexing signals straight from Google.",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
    startingPrice: "Free",
    standoutFeature: "Authoritative data",
  },
];

const semrushOriginal: AlternativesTableRow = {
  slug: "semrush",
  name: "Semrush",
  logoSrc: "/Logos/semrush.jpeg",
  bestFor: "All-in-one SEO and marketing research",
  startingPrice: "From ~$139/mo",
  standoutFeature: "Broad datasets + workflows",
  reviewHref: getSeoToolsReviewUrl("semrush"),
};

const semrushDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Ahrefs",
    heading: "Best for link-led strategy",
    body: "When backlinks and competitor content gaps matter more than extra marketing modules.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
  },
  {
    productName: "SE Ranking",
    heading: "Best value all-in-one",
    body: "When you need rank tracking and audits without flagship pricing.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    compareHref: getSeoToolsCompareUrl("se-ranking-vs-semrush"),
  },
  {
    productName: "BrightLocal",
    heading: "Best local SEO add-on",
    body: "When Map Pack grids and citations are the real bottleneck.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const semrushPage: AlternativesTemplateProps = {
  title: "Best Semrush Alternatives (2026)",
  subtitle:
    "If Semrush pricing, UI weight, or feature overlap pushes you to switch—these alternatives cover backlinks, local SEO, and leaner all-in-one stacks for service businesses.",
  productName: "Semrush",
  productSlug: "semrush",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSeoToolsReviewUrl("semrush"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Teams pivot from Semrush when they want deeper backlinks (Ahrefs), lower-cost all-in-one (SE Ranking), or a dedicated local platform (BrightLocal) alongside Search Console.",
    "Verify you are not paying for enterprise depth you never open—local contractors often need one suite plus GBP execution.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Price at scale", body: "Seats, projects, and tracked keywords climb quickly for multi-location brands." },
    { heading: "Feature overlap", body: "If you only use audits and tracking, lighter tools may fit better." },
    { heading: "Local-first workflows", body: "Map Pack operators sometimes prefer BrightLocal or Whitespark for daily GBP work." },
  ],
  topAlternatives: semrushAlts,
  comparisonTableRows: buildTableRows(semrushOriginal, semrushAlts),
  detailedAlternatives: semrushDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("semrush-vs-ahrefs"), rel("semrush-vs-ubersuggest"), rel("se-ranking-vs-semrush")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "What is the closest alternative to Semrush?", a: "Ahrefs for link-first teams; SE Ranking for budget all-in-one; add BrightLocal when local listings dominate your roadmap." },
    { q: "Can I replace Semrush with free tools?", a: "Search Console is essential, but competitor research and scalable audits usually need a paid suite for growing sites." },
  ],
};

const ahrefsAlts: AlternativesTopPick[] = [
  {
    slug: "semrush",
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: "4.6",
    bestFor: "Broader marketing OS + SEO",
    description: "When you want research, audits, and adjacent marketing modules in one login.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
    startingPrice: "From ~$139/mo",
    standoutFeature: "Platform breadth",
  },
  {
    slug: "moz-pro",
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: "4.3",
    bestFor: "SMB-friendly fundamentals",
    description: "Less intimidating UX with solid rank tracking and on-page guidance.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
    startingPrice: "From ~$99/mo",
    standoutFeature: "Education + onboarding",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    bestFor: "Budget rank tracking + audits",
    description: "Pragmatic alternative when Ahrefs credits feel heavy for your usage.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    startingPrice: "From ~$65/mo",
    standoutFeature: "Value pricing",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    bestFor: "Local SEO depth",
    description: "Adds Map Pack and citation workflows Ahrefs does not natively replace.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    startingPrice: "From ~$39/mo",
    standoutFeature: "Local grids + GBP",
  },
  {
    slug: "ubersuggest",
    name: "Ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    rating: "4.0",
    bestFor: "Entry-level research",
    description: "Lightweight keyword and audit tooling before flagship pricing.",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ubersuggest"),
    startingPrice: "From ~$29/mo",
    standoutFeature: "Low entry cost",
  },
];

const ahrefsOriginal: AlternativesTableRow = {
  slug: "ahrefs",
  name: "Ahrefs",
  logoSrc: "/Logos/ahrefs.jpeg",
  bestFor: "Backlink intelligence and content research",
  startingPrice: "From ~$129/mo",
  standoutFeature: "Link index + content explorer",
  reviewHref: getSeoToolsReviewUrl("ahrefs"),
};

const ahrefsDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Semrush",
    heading: "Best all-in-one breadth",
    body: "When you want SEO plus adjacent marketing workflows beyond pure link research.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
  },
  {
    productName: "Moz Pro",
    heading: "Best approachable suite",
    body: "When your team wants credible SEO fundamentals with less steep learning curve.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
  },
  {
    productName: "BrightLocal",
    heading: "Best local complement",
    body: "When Map Pack and citations—not national keyword volumes—are the constraint.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const ahrefsPage: AlternativesTemplateProps = {
  title: "Best Ahrefs Alternatives (2026)",
  subtitle:
    "If Ahrefs pricing, seat limits, or local workflow gaps push you elsewhere—these tools cover all-in-one SEO, SMB-friendly suites, and dedicated local stacks.",
  productName: "Ahrefs",
  productSlug: "ahrefs",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSeoToolsReviewUrl("ahrefs"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Semrush is the common enterprise-style swap; Moz Pro fits teams wanting gentler onboarding; SE Ranking targets value buyers; BrightLocal covers Map Pack execution.",
    "Keep Google Search Console on every property regardless of paid suite.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Budget and credits", body: "Ahrefs plans can feel premium when you only need a slice of the toolkit." },
    { heading: "Local SEO workload", body: "Ahrefs informs content and links; GBP and citations often need a local specialist tool." },
    { heading: "Team skill mix", body: "Not every office wants deep link indexes—sometimes simpler reporting wins adoption." },
  ],
  topAlternatives: ahrefsAlts,
  comparisonTableRows: buildTableRows(ahrefsOriginal, ahrefsAlts),
  detailedAlternatives: ahrefsDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("semrush-vs-ahrefs"), rel("ahrefs-vs-moz-pro"), rel("se-ranking-vs-semrush")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "What is the best Ahrefs alternative for local contractors?", a: "Often Semrush or SE Ranking for research plus BrightLocal or Whitespark for Map Pack—Search Console stays free either way." },
    { q: "Is Moz Pro easier than Ahrefs?", a: "Many SMBs find Moz’s education and UI more approachable; Ahrefs still leads for raw link intelligence." },
  ],
};

const mozAlts: AlternativesTopPick[] = [
  {
    slug: "ahrefs",
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: "4.7",
    bestFor: "Link-first research",
    description: "When competitor backlinks and content gaps drive strategy.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
    startingPrice: "From ~$129/mo",
    standoutFeature: "Link index depth",
  },
  {
    slug: "semrush",
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: "4.6",
    bestFor: "Full marketing + SEO stack",
    description: "When you outgrow mid-market limits and want broader workflows.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
    startingPrice: "From ~$139/mo",
    standoutFeature: "Dataset breadth",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    bestFor: "Value all-in-one",
    description: "Competitive audits and tracking without flagship spend.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    compareHref: getSeoToolsCompareUrl("se-ranking-vs-semrush"),
    startingPrice: "From ~$65/mo",
    standoutFeature: "SMB pricing",
  },
  {
    slug: "ubersuggest",
    name: "Ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    rating: "4.0",
    bestFor: "Budget experimentation",
    description: "Lower-cost keyword and audit entry before larger suites.",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ubersuggest"),
    startingPrice: "From ~$29/mo",
    standoutFeature: "Affordable start",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    bestFor: "Local SEO platform",
    description: "When Moz handles fundamentals but Map Pack needs dedicated tooling.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    startingPrice: "From ~$39/mo",
    standoutFeature: "GBP + citations",
  },
];

const mozOriginal: AlternativesTableRow = {
  slug: "moz-pro",
  name: "Moz Pro",
  logoSrc: "/Logos/mozpro.jpeg",
  bestFor: "SMB SEO fundamentals",
  startingPrice: "From ~$99/mo",
  standoutFeature: "Rank tracking + on-page",
  reviewHref: getSeoToolsReviewUrl("moz-pro"),
};

const mozDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Ahrefs",
    heading: "Best for advanced links",
    body: "When backlink analysis outgrows mid-market indexes.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
  },
  {
    productName: "Semrush",
    heading: "Best enterprise-style depth",
    body: "When you need broader datasets and marketing-adjacent modules.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    productName: "SE Ranking",
    heading: "Best budget all-in-one",
    body: "When Moz limits push you toward more features per dollar.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
  },
];

const mozPage: AlternativesTemplateProps = {
  title: "Best Moz Pro Alternatives (2026)",
  subtitle:
    "If Moz Pro limits, link depth, or local workflows prompt a change—these alternatives span flagship suites, value all-in-ones, and dedicated local SEO platforms.",
  productName: "Moz Pro",
  productSlug: "moz-pro",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSeoToolsReviewUrl("moz-pro"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Ahrefs and Semrush are the common upgrades for research depth; SE Ranking and Ubersuggest fit tighter budgets; BrightLocal complements any suite when Maps dominates.",
    "Pair paid tools with Google Search Console on every verified domain.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Link index expectations", body: "Power users sometimes need deeper crawl cadence and raw link data." },
    { heading: "Local execution", body: "Moz helps fundamentals; Map Pack operators still invest in GBP and citations." },
    { heading: "Price vs usage", body: "If you only track a handful of keywords, lighter tiers may fit better." },
  ],
  topAlternatives: mozAlts,
  comparisonTableRows: buildTableRows(mozOriginal, mozAlts),
  detailedAlternatives: mozDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("ahrefs-vs-moz-pro"), rel("semrush-vs-ahrefs"), rel("se-ranking-vs-semrush")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "Is Ahrefs better than Moz Pro?", a: "For backlink intelligence, usually yes; Moz can win on approachable education and SMB workflows—see our head-to-head." },
    { q: "What is the best Moz alternative for local contractors?", a: "Keep Search Console, add BrightLocal or Whitespark for listings, and choose Semrush, Ahrefs, or SE Ranking for keyword and audit depth." },
  ],
};

const pages: Record<string, AlternativesTemplateProps> = {
  semrush: semrushPage,
  ahrefs: ahrefsPage,
  "moz-pro": mozPage,
};

export function getSeoToolsAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getSeoToolsAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
