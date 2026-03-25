import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getSeoToolsAlternativeUrl,
  getSeoToolsBestForUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
} from "@/lib/routes";

export function getSeoToolsCompareUrlFromSlug(slug: string): string {
  return `/seo-tools/compare/${slug}`;
}

const SEO_TRADE_LINKS = [
  { label: "Best SEO tools for contractors", href: getSeoToolsBestForUrl("contractors") },
  { label: "Best for local SEO", href: getSeoToolsBestForUrl("local-seo") },
  { label: "Best for small business", href: getSeoToolsBestForUrl("small-business") },
  { label: "Best for HVAC", href: getSeoToolsBestForUrl("hvac") },
];

const P = {
  semrush: {
    name: "Semrush",
    slug: "semrush",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    logoSrc: "/Logos/semrush.jpeg",
    visitUrl: "https://www.semrush.com",
    bestForSummary: "All-in-one SEO research, audits, and rank tracking for growing teams.",
    rating: "4.6",
    startingPrice: "From ~$139/mo",
  },
  ahrefs: {
    name: "Ahrefs",
    slug: "ahrefs",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    logoSrc: "/Logos/ahrefs.jpeg",
    visitUrl: "https://ahrefs.com",
    bestForSummary: "Backlink intelligence and content research with strong rank tracking.",
    rating: "4.7",
    startingPrice: "From ~$129/mo",
  },
  "moz-pro": {
    name: "Moz Pro",
    slug: "moz-pro",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    logoSrc: "/Logos/mozpro.jpeg",
    visitUrl: "https://moz.com/products/pro",
    bestForSummary: "Approachable SEO suite for SMB keyword tracking and on-page work.",
    rating: "4.3",
    startingPrice: "From ~$99/mo",
  },
  ubersuggest: {
    name: "Ubersuggest",
    slug: "ubersuggest",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    logoSrc: "/Logos/ubersuggest.webp",
    visitUrl: "https://neilpatel.com/ubersuggest",
    bestForSummary: "Budget keyword ideas and light audits for early-stage SEO.",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
  },
  brightlocal: {
    name: "BrightLocal",
    slug: "brightlocal",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    logoSrc: "/Logos/brightlocal.jpeg",
    visitUrl: "https://www.brightlocal.com",
    bestForSummary: "Local SEO platform for GBP, citations, and grid rank tracking.",
    rating: "4.5",
    startingPrice: "From ~$39/mo",
  },
  whitespark: {
    name: "Whitespark",
    slug: "whitespark",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
    logoSrc: "/Logos/whitespark.jpeg",
    visitUrl: "https://whitespark.ca",
    bestForSummary: "Citation tools, local search education, and reputation workflows.",
    rating: "4.5",
    startingPrice: "From ~$25/mo",
  },
  "se-ranking": {
    name: "SE Ranking",
    slug: "se-ranking",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    logoSrc: "/Logos/seranking.jpeg",
    visitUrl: "https://seranking.com",
    bestForSummary: "Value all-in-one SEO with rank tracking and audits.",
    rating: "4.4",
    startingPrice: "From ~$65/mo",
  },
} as const;

const ALTERNATIVES_PAGE_SLUGS = new Set<keyof typeof P>(["semrush", "ahrefs", "moz-pro"]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const s of slugs) {
    if (!ALTERNATIVES_PAGE_SLUGS.has(s as keyof typeof P)) continue;
    const p = P[s as keyof typeof P];
    out.push({
      label: `Best ${p.name} alternatives (ranked)`,
      href: getSeoToolsAlternativeUrl(s),
    });
  }
  return out;
}

function buildMoreComparisons(pa: (typeof P)[keyof typeof P], pb: (typeof P)[keyof typeof P]) {
  const fromSlugs = alternativesPageLinksForSlugs([pa.slug, pb.slug]);
  const fallback =
    fromSlugs.length === 0
      ? [{ label: "Best Semrush alternatives (ranked)", href: getSeoToolsAlternativeUrl("semrush") }]
      : [];
  const isLocalDuel =
    (pa.slug === "brightlocal" || pa.slug === "whitespark") &&
    (pb.slug === "brightlocal" || pb.slug === "whitespark");
  const crossCluster = isLocalDuel
    ? [
        { label: "Best website builders (2026)", href: "/website-builders/best-website-builders" },
        { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
      ]
    : [
        { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
        { label: "CRM software hub", href: "/crm" },
      ];
  return [
    { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
    { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
    ...fromSlugs,
    ...fallback,
    ...crossCluster,
  ];
}

function build(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string,
  extra?: Partial<ComparisonTemplateProps>
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/seo-tools",
      categoryLabel: "SEO Tools",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [summary],
      featureComparison: [
        {
          feature: "Keyword research depth",
          productA: "Broad datasets",
          productB: "Broad datasets",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Backlink analysis",
          productA: a === "ahrefs" || a === "semrush" ? "Strong" : "Varies",
          productB: b === "ahrefs" || b === "semrush" ? "Strong" : "Varies",
          supportA: a === "ahrefs" ? "supported" : a === "semrush" ? "supported" : "partial",
          supportB: b === "ahrefs" ? "supported" : b === "semrush" ? "supported" : "partial",
        },
        {
          feature: "Local / GBP workflows",
          productA: a === "brightlocal" || a === "whitespark" ? "Purpose-built" : "Add-on / partner",
          productB: b === "brightlocal" || b === "whitespark" ? "Purpose-built" : "Add-on / partner",
          supportA: a === "brightlocal" || a === "whitespark" ? "supported" : "partial",
          supportB: b === "brightlocal" || b === "whitespark" ? "supported" : "partial",
        },
        {
          feature: "Site audits",
          productA: "Crawl + issues",
          productB: "Crawl + issues",
          supportA: "supported",
          supportB: "supported",
        },
      ],
      pricingComparison: `Both products price on usage tiers—model annual cost against tracked keywords, locations, and seats. Local contractors should tie spend to booked jobs influenced by organic visibility, not vanity rankings alone.`,
      prosConsA: {
        pros: ["Strong dataset or workflow fit for its segment", "Useful reporting for service pages"],
        cons: ["Costs rise with scale", "Requires consistent execution on GBP and reviews"],
      },
      prosConsB: {
        pros: ["Complementary strengths vs competitor", "Scales with documented processes"],
        cons: ["Learning curve for new SEO owners", "Still needs human content and citation work"],
      },
      bestFor: [
        {
          heading: "Choose by your bottleneck",
          body: "If Map Pack and citations lag, favor BrightLocal or Whitespark. If content and links lag, favor Semrush or Ahrefs. Always keep Google Search Console verified.",
        },
      ],
      alternatives: [
        { name: "Semrush", href: getSeoToolsReviewUrl("semrush"), logoSrc: "/Logos/semrush.jpeg", description: "All-in-one SEO suite." },
        { name: "Ahrefs", href: getSeoToolsReviewUrl("ahrefs"), logoSrc: "/Logos/ahrefs.jpeg", description: "Backlink-forward research." },
        { name: "BrightLocal", href: getSeoToolsReviewUrl("brightlocal"), logoSrc: "/Logos/brightlocal.jpeg", description: "Local SEO operations." },
      ],
      faqs: [
        { q: `Which is better for local contractors—${pa.name} or ${pb.name}?`, a: summary },
        { q: "Do I still need Google Business Profile work?", a: "Yes—SEO tools inform and measure; they do not replace photos, categories, reviews, and accurate service areas." },
      ],
      sidebarWinners: [
        { label: "Workflow breadth", winner: "A" },
        { label: "Focused strength", winner: "B" },
      ],
      moreComparisons: buildMoreComparisons(pa, pb),
      relevantTradeLinks: SEO_TRADE_LINKS,
      ...extra,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build(
    "semrush-vs-ahrefs",
    "semrush",
    "ahrefs",
    "Semrush spreads across broader marketing workflows; Ahrefs leads when backlink and content gap research drives your roadmap—both need GBP execution for Map Pack wins.",
    {
      sidebarWinners: [
        { label: "Marketing platform breadth", winner: "A" },
        { label: "Link + content research", winner: "B" },
      ],
    }
  ),
  build(
    "ahrefs-vs-moz-pro",
    "ahrefs",
    "moz-pro",
    "Ahrefs offers deeper link intelligence; Moz Pro emphasizes approachable rank tracking and education—pick based on team skill and whether links or steady fundamentals matter more.",
    {
      sidebarWinners: [
        { label: "Backlink intelligence", winner: "A" },
        { label: "SMB onboarding + education", winner: "B" },
      ],
    }
  ),
  build(
    "semrush-vs-ubersuggest",
    "semrush",
    "ubersuggest",
    "Semrush delivers enterprise-grade depth and limits suitable for scaling teams; Ubersuggest fits early experimentation—graduate when competitor research and audits outgrow it.",
    {
      sidebarWinners: [
        { label: "Depth + scale", winner: "A" },
        { label: "Entry price", winner: "B" },
      ],
    }
  ),
  build(
    "brightlocal-vs-whitespark",
    "brightlocal",
    "whitespark",
    "Both specialize in local SEO operations: compare reporting style, citation workflows, and pricing per location before standardizing your franchise or agency stack.",
    {
      sidebarWinners: [
        { label: "Platform reporting", winner: "A" },
        { label: "Citation tooling depth", winner: "B" },
      ],
    }
  ),
  build(
    "se-ranking-vs-semrush",
    "se-ranking",
    "semrush",
    "SE Ranking targets value-focused all-in-one SEO; Semrush adds broader marketing surface area—choose based on budget, seat count, and how many adjacent channels you manage.",
    {
      sidebarWinners: [
        { label: "Price-to-feature value", winner: "A" },
        { label: "Enterprise breadth", winner: "B" },
      ],
    }
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getSeoToolsComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getSeoToolsComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
