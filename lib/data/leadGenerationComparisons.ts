import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getLeadGenerationAlternativeUrl,
  getLeadGenerationBestForUrl,
  getLeadGenerationReviewUrl,
} from "@/lib/routes";

export function getLeadGenerationCompareUrlFromSlug(slug: string): string {
  return `/lead-generation/compare/${slug}`;
}

const LG_TRADE_LINKS = [
  { label: "Best lead generation for contractors", href: getLeadGenerationBestForUrl("contractors") },
  { label: "Best for HVAC", href: getLeadGenerationBestForUrl("hvac") },
  { label: "Best for plumbing", href: getLeadGenerationBestForUrl("plumbing") },
  { label: "Best for home services", href: getLeadGenerationBestForUrl("home-services") },
];

const P = {
  thumbtack: {
    name: "Thumbtack",
    slug: "thumbtack",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
    logoSrc: "/Logos/thumbtack.jpeg",
    visitUrl: "https://www.thumbtack.com",
    bestForSummary: "Local pros who want pay-per-lead marketplace volume with self-serve tools.",
    rating: "4.4",
    startingPrice: "Pay per lead",
  },
  angi: {
    name: "Angi",
    slug: "angi",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    logoSrc: "/Logos/angi.jpeg",
    visitUrl: "https://www.angi.com",
    bestForSummary: "Home service brands that want combined ads and directory exposure.",
    rating: "4.3",
    startingPrice: "Quote / lead bundles",
  },
  homeadvisor: {
    name: "HomeAdvisor",
    slug: "homeadvisor",
    reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
    logoSrc: "/Logos/homeadvisor.jpeg",
    visitUrl: "https://www.homeadvisor.com",
    bestForSummary: "Contractors comfortable paying for shared marketplace leads at scale.",
    rating: "4.1",
    startingPrice: "Pay per lead",
  },
  bark: {
    name: "Bark",
    slug: "bark",
    reviewHref: getLeadGenerationReviewUrl("bark"),
    logoSrc: "/Logos/bark.jpeg",
    visitUrl: "https://www.bark.com",
    bestForSummary: "Multi-category pros who want to buy leads across services.",
    rating: "4.0",
    startingPrice: "Credits / lead packs",
  },
  "houzz-pro": {
    name: "Houzz Pro",
    slug: "houzz-pro",
    reviewHref: getLeadGenerationReviewUrl("houzz-pro"),
    logoSrc: "/Logos/houzz.jpeg",
    visitUrl: "https://www.houzz.com/pro",
    bestForSummary: "Design-build and remodeling firms with visual portfolios.",
    rating: "4.2",
    startingPrice: "Subscription + ads",
  },
  "google-local-services-ads": {
    name: "Google Local Services Ads",
    slug: "google-local-services-ads",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    logoSrc: "/Logos/google.jpeg",
    visitUrl: "https://ads.google.com/local-services-ads",
    bestForSummary: "Verified pros who want Google-screened calls on high-intent local searches.",
    rating: "4.5",
    startingPrice: "Pay per lead",
  },
  "yelp-ads": {
    name: "Yelp Ads",
    slug: "yelp-ads",
    reviewHref: getLeadGenerationReviewUrl("yelp-ads"),
    logoSrc: "/Logos/yelp.png",
    visitUrl: "https://biz.yelp.com",
    bestForSummary: "Businesses with strong Yelp profiles targeting local searchers on Yelp.",
    rating: "4.0",
    startingPrice: "Campaign budgets",
  },
} as const;

const ALTERNATIVES_PAGE_SLUGS = new Set<keyof typeof P>([
  "thumbtack",
  "angi",
  "homeadvisor",
  "bark",
  "houzz-pro",
  "google-local-services-ads",
  "yelp-ads",
]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const s of slugs) {
    if (!ALTERNATIVES_PAGE_SLUGS.has(s as keyof typeof P)) continue;
    const p = P[s as keyof typeof P];
    out.push({
      label: `Best ${p.name} alternatives (ranked)`,
      href: getLeadGenerationAlternativeUrl(s),
    });
  }
  return out;
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
  const includesSearchIntent = a === "google-local-services-ads" || b === "google-local-services-ads";
  const includesYelp = a === "yelp-ads" || b === "yelp-ads";
  const includesPortfolio = a === "houzz-pro" || b === "houzz-pro";
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/lead-generation",
      categoryLabel: "Lead Generation",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [
        summary,
        `This ${pa.name} vs ${pb.name} matchup is usually decided by response operations and margin discipline, not by top-line lead counts. Teams that answer quickly and track booked-job outcomes in CRM outperform on either platform.`,
        "Run a controlled 30-60 day split with identical scripts, service-area rules, and disposition stages. Keep the winner on booked-job margin after refunds, no-shows, and follow-up cost.",
      ],
      decisionGuideA: [
        `Choose ${pa.name} when your workflow aligns with ${pa.bestForSummary.toLowerCase()}`,
        "Choose this option if your team can consistently execute the response playbook it requires.",
        "Choose this option when your best jobs map to the channel intent this platform captures.",
      ],
      decisionGuideB: [
        `Choose ${pb.name} when your workflow aligns with ${pb.bestForSummary.toLowerCase()}`,
        "Choose this option if your geography/category historically performs better on its buyer behavior.",
        "Choose this option when your lead-quality economics beat the alternative over a full month.",
      ],
      featureComparison: [
        { feature: "Lead model", productA: "Marketplace / platform", productB: "Marketplace / platform", supportA: "supported", supportB: "supported" },
        { feature: "Local intent", productA: includesSearchIntent ? "High local search intent" : "Strong for local service", productB: includesSearchIntent ? "High local search intent" : "Strong for local service", supportA: "supported", supportB: "supported" },
        { feature: "Dispute / credit policies", productA: "Policy varies by product", productB: "Policy varies by product", supportA: "partial", supportB: "partial" },
        { feature: "CRM / follow-up tooling", productA: "Built-in basics", productB: "Built-in basics", supportA: "partial", supportB: "partial" },
        { feature: "Best fit for urgent jobs", productA: includesSearchIntent ? "Very strong" : "Moderate to strong", productB: includesSearchIntent ? "Very strong" : "Moderate to strong", supportA: "supported", supportB: "supported" },
      ],
      pricingComparison: `Both products price on usage, geography, and category competition. Model blended cost per booked job—not cost per raw lead—and compare refund or credit rules before scaling spend.`,
      prosConsA: {
        pros: ["Strong local discovery for service businesses", "Clear self-serve campaign controls"],
        cons: ["Lead quality varies by market", "Shared leads can mean faster follow-up pressure"],
      },
      prosConsB: {
        pros: ["Established customer behavior on the platform", "Useful when profile and reviews are already strong"],
        cons: ["Less control than fully owned marketing funnels", "Budget needs active management"],
      },
      bestFor: [
        { heading: "Choose by lead economics", body: "Compare dispute policies, exclusivity, and how often leads match your service area before locking in a primary channel." },
        {
          heading: "Choose by search intent and operations",
          body: includesPortfolio
            ? "Portfolio-led channels fit planned projects; marketplace/search channels fit urgent demand. Match platform to your average ticket and sales cycle."
            : includesYelp
              ? "Yelp-heavy metros behave differently than Google-first metros. Pick based on where your best customers actually start research."
              : "If your best jobs are urgent, prioritize high-intent channels and response speed. If projects are planned, optimize qualification and trust assets.",
        },
      ],
      alternatives: [
        { name: "Thumbtack", href: getLeadGenerationReviewUrl("thumbtack"), logoSrc: "/Logos/thumbtack.jpeg", description: "Pay-per-lead marketplace for local pros." },
        { name: "Angi", href: getLeadGenerationReviewUrl("angi"), logoSrc: "/Logos/angi.jpeg", description: "Directory + lead products for home services." },
        { name: "Google Local Services Ads", href: getLeadGenerationReviewUrl("google-local-services-ads"), logoSrc: "/Logos/google.jpeg", description: "Google-screened local lead ads." },
      ],
      faqs: [
        { q: `Which is better for contractors—${pa.name} or ${pb.name}?`, a: summary },
        { q: "How should I compare cost?", a: "Track cost per booked job and gross margin after refunds—not just cost per lead name." },
        { q: "How long should I test each platform?", a: "Use a 30-60 day pilot with consistent scripts, response timing, and service-area filters before making a final call." },
        { q: "What metric predicts winner quality fastest?", a: "Booked-job margin by zip and service line. Lead volume alone can hide poor close quality." },
        { q: `Where can I see ${pa.name} and ${pb.name} alternatives?`, a: "Use the ranked alternatives links and full reviews below to compare substitutes by intent model, policy fit, and operational load." },
      ],
      sidebarWinners: [
        { label: "Speed to first lead", winner: "A" },
        { label: "Brand ecosystem depth", winner: "B" },
        { label: "Best fit for most local teams", winner: "A" },
      ],
      moreComparisons: [
        { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrlFromSlug("thumbtack-vs-angi") },
        { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrlFromSlug("angi-vs-homeadvisor") },
        { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrlFromSlug("google-local-services-ads-vs-yelp-ads") },
        ...alternativesPageLinksForSlugs([pa.slug, pb.slug]),
        { label: "How to choose a lead generation platform", href: "/lead-generation/guides/how-to-choose-a-lead-generation-platform" },
        { label: "Paid vs organic leads", href: "/lead-generation/guides/paid-vs-organic-leads" },
        { label: "Call tracking software hub", href: "/call-tracking" },
      ],
      relevantTradeLinks: LG_TRADE_LINKS,
      ...extra,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build(
    "thumbtack-vs-angi",
    "thumbtack",
    "angi",
    "Thumbtack fits pay-per-lead marketplace workflows with flexible budgets; Angi bundles directory presence with lead products for home services brands that want Angi’s ecosystem."
  ),
  build(
    "angi-vs-homeadvisor",
    "angi",
    "homeadvisor",
    "Angi and HomeAdvisor overlap in home-services marketplaces; compare lead exclusivity, geography fit, and bundled marketing before choosing a primary provider."
  ),
  build("bark-vs-thumbtack", "bark", "thumbtack", "Bark spans broader service categories with credit-style lead buying; Thumbtack is often tighter for US local trade lead flow and pro tooling."),
  build(
    "houzz-pro-vs-thumbtack",
    "houzz-pro",
    "thumbtack",
    "Houzz Pro fits design-build and remodel pros who want portfolio-led discovery; Thumbtack favors faster marketplace lead buying across many local trades."
  ),
  build(
    "google-local-services-ads-vs-yelp-ads",
    "google-local-services-ads",
    "yelp-ads",
    "Google Local Services Ads capture high-intent Google searchers with a screened listing; Yelp Ads monetize users already browsing Yelp—choose based on where your best customers start research."
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getLeadGenerationComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getLeadGenerationComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
