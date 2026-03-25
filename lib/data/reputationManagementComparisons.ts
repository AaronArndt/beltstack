import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getReputationManagementAlternativeUrl,
  getReputationManagementBestForUrl,
  getReputationManagementCompareUrl,
  getReputationManagementReviewUrl,
} from "@/lib/routes";

export function getReputationManagementCompareUrlFromSlug(slug: string): string {
  return `/reputation-management/compare/${slug}`;
}

const TRADE_LINKS = [
  { label: "Best for contractors", href: getReputationManagementBestForUrl("contractors") },
  { label: "Best for small business", href: getReputationManagementBestForUrl("small-business") },
  { label: "Best for HVAC", href: getReputationManagementBestForUrl("hvac") },
  { label: "Best for home services", href: getReputationManagementBestForUrl("home-services") },
];

const LOGOS = {
  podium: "/Logos/podium.jpeg",
  birdeye: "/Logos/birdeye.svg",
  nicejob: "/Logos/nicejob.jpeg",
  "reputation-com": "/Logos/reputation.jpeg",
  broadly: "/Logos/broadly.png",
  "grade-us": "/Logos/gradeus.png",
} as const;

const P = {
  podium: {
    name: "Podium",
    slug: "podium",
    reviewHref: getReputationManagementReviewUrl("podium"),
    logoSrc: LOGOS.podium,
    visitUrl: "https://www.podium.com",
    bestForSummary: "SMS-first review request workflows.",
    rating: "4.5",
    startingPrice: "Custom / quote",
  },
  birdeye: {
    name: "Birdeye",
    slug: "birdeye",
    reviewHref: getReputationManagementReviewUrl("birdeye"),
    logoSrc: LOGOS.birdeye,
    visitUrl: "https://birdeye.com",
    bestForSummary: "All-in-one multi-location reputation operations.",
    rating: "4.6",
    startingPrice: "Custom / quote",
  },
  nicejob: {
    name: "NiceJob",
    slug: "nicejob",
    reviewHref: getReputationManagementReviewUrl("nicejob"),
    logoSrc: LOGOS.nicejob,
    visitUrl: "https://nicejob.com",
    bestForSummary: "Simple review automation for lean teams.",
    rating: "4.4",
    startingPrice: "From ~$75/mo",
  },
  "reputation-com": {
    name: "Reputation.com",
    slug: "reputation-com",
    reviewHref: getReputationManagementReviewUrl("reputation-com"),
    logoSrc: LOGOS["reputation-com"],
    visitUrl: "https://reputation.com",
    bestForSummary: "Enterprise governance and policy workflows.",
    rating: "4.2",
    startingPrice: "Enterprise / custom",
  },
  broadly: {
    name: "Broadly",
    slug: "broadly",
    reviewHref: getReputationManagementReviewUrl("broadly"),
    logoSrc: LOGOS.broadly,
    visitUrl: "https://broadly.com",
    bestForSummary: "Local service business simplicity.",
    rating: "4.2",
    startingPrice: "Custom / quote",
  },
  "grade-us": {
    name: "Grade.us",
    slug: "grade-us",
    reviewHref: getReputationManagementReviewUrl("grade-us"),
    logoSrc: LOGOS["grade-us"],
    visitUrl: "https://www.grade.us",
    bestForSummary: "Agency-oriented review campaigns.",
    rating: "4.1",
    startingPrice: "From ~$110/mo",
  },
} as const;

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const supported = new Set(["podium", "birdeye", "nicejob"]);
  const name: Record<string, string> = { podium: "Podium", birdeye: "Birdeye", nicejob: "NiceJob" };
  return slugs
    .filter((s) => supported.has(s))
    .map((s) => ({ label: `Best ${name[s]} alternatives (ranked)`, href: getReputationManagementAlternativeUrl(s) }));
}

function build(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/reputation-management",
      categoryLabel: "Reputation Management",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [
        summary,
        "This decision usually comes down to team workflow ownership and response discipline, not feature count screenshots.",
        "Run a 30-60 day pilot with the same request cadence and response SLA before finalizing stack decisions.",
      ],
      featureComparison: [
        { feature: "Review request automation", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
        { feature: "Multi-location controls", productA: "Varies", productB: "Varies", supportA: "partial", supportB: "partial" },
        { feature: "Response workflow depth", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
        { feature: "SMB onboarding speed", productA: "Fast to moderate", productB: "Fast to moderate", supportA: "supported", supportB: "supported" },
      ],
      pricingComparison:
        "Both products often use quote-based pricing. Compare cost by active locations, messaging volume, and operating ownership over 12 months.",
      prosConsA: {
        pros: [`${pa.name} aligns well with ${pa.bestForSummary.toLowerCase()}`, "Useful fit for local-service reputation workflows"],
        cons: ["Can get expensive as footprint grows", "Requires process discipline and response ownership"],
      },
      prosConsB: {
        pros: [`${pb.name} aligns well with ${pb.bestForSummary.toLowerCase()}`, "Competitive option for operations-first teams"],
        cons: ["Value drops without consistent request cadence", "Migration and training can slow short-term gains"],
      },
      bestFor: [
        {
          heading: "Best for operating model fit",
          body: "Pick the platform your team can run every week with consistent request and response workflows.",
        },
        {
          heading: "Best for conversion outcomes",
          body: "Review growth should map to higher booked-job conversion and lower lead friction across channels.",
        },
      ],
      alternatives: [
        { name: "Podium", href: getReputationManagementReviewUrl("podium"), logoSrc: LOGOS.podium, description: "SMS-led reputation workflow" },
        { name: "Birdeye", href: getReputationManagementReviewUrl("birdeye"), logoSrc: LOGOS.birdeye, description: "Broad suite for scale" },
        { name: "NiceJob", href: getReputationManagementReviewUrl("nicejob"), logoSrc: LOGOS.nicejob, description: "Simple automation path" },
      ],
      faqs: [
        { q: `Which is better for local service businesses—${pa.name} or ${pb.name}?`, a: summary },
        { q: "How long should we test before deciding?", a: "Run at least 30-60 days with stable request cadence, response SLA, and location settings." },
        { q: "What metric matters most?", a: "Track review velocity, average rating trend, and booked-job conversion impact—not review count alone." },
        { q: "Should we switch if pricing is similar?", a: "Switch only when workflow fit, adoption quality, and conversion outcomes clearly improve." },
      ],
      sidebarWinners: [
        { label: "Time to launch", winner: "A" },
        { label: "Scale depth", winner: "B" },
      ],
      moreComparisons: [
        { label: "Best reputation management software (2026) roundup", href: "/reputation-management/best-reputation-management-software" },
        { label: "Best reputation management by scenario", href: "/reputation-management/best-for" },
        { label: "Podium vs Birdeye", href: getReputationManagementCompareUrl("podium-vs-birdeye") },
        { label: "Birdeye vs NiceJob", href: getReputationManagementCompareUrl("birdeye-vs-nicejob") },
        { label: "Podium vs Broadly", href: getReputationManagementCompareUrl("podium-vs-broadly") },
        { label: "Reputation.com vs Birdeye", href: getReputationManagementCompareUrl("reputation-com-vs-birdeye") },
        { label: "Grade.us vs Birdeye", href: getReputationManagementCompareUrl("gradeus-vs-birdeye") },
        ...alternativesPageLinksForSlugs([pa.slug, pb.slug]),
        { label: "SEO tools hub", href: "/seo-tools" },
        { label: "Lead generation hub", href: "/lead-generation" },
        { label: "CRM software hub", href: "/crm" },
      ],
      relevantTradeLinks: TRADE_LINKS,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build("podium-vs-birdeye", "podium", "birdeye", "Podium is often stronger for SMS-first service teams, while Birdeye is stronger for broader multi-location reputation operations."),
  build("birdeye-vs-nicejob", "birdeye", "nicejob", "Birdeye usually wins on feature breadth at scale, while NiceJob often wins on simplicity and faster owner-led adoption."),
  build("podium-vs-broadly", "podium", "broadly", "Podium typically offers more communication depth, while Broadly can be easier for smaller service teams with simpler workflows."),
  build("reputation-com-vs-birdeye", "reputation-com", "birdeye", "Reputation.com is often chosen for enterprise governance, while Birdeye is a common balance of breadth and usability."),
  build("gradeus-vs-birdeye", "grade-us", "birdeye", "Grade.us is often agency-oriented, while Birdeye is often better for in-house multi-location reputation teams."),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getReputationManagementComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getReputationManagementComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
