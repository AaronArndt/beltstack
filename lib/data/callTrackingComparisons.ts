import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getCallTrackingAlternativeUrl,
  getCallTrackingBestForUrl,
  getCallTrackingCompareUrl,
  getCallTrackingReviewUrl,
} from "@/lib/routes";

export function getCallTrackingCompareUrlFromSlug(slug: string): string {
  return `/call-tracking/compare/${slug}`;
}

const CALL_TRACKING_TRADE_LINKS = [
  { label: "Best call tracking for contractors", href: getCallTrackingBestForUrl("contractors") },
  { label: "Best for small business", href: getCallTrackingBestForUrl("small-business") },
  { label: "Best for HVAC", href: getCallTrackingBestForUrl("hvac") },
  { label: "Best for home services", href: getCallTrackingBestForUrl("home-services") },
];

const P = {
  callrail: {
    name: "CallRail",
    slug: "callrail",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    logoSrc: "/Logos/callrail.jpeg",
    visitUrl: "https://www.callrail.com",
    bestForSummary: "SMB marketing attribution with broad integrations.",
    rating: "4.6",
    startingPrice: "From ~$45/mo",
  },
  calltrackingmetrics: {
    name: "CallTrackingMetrics",
    slug: "calltrackingmetrics",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    visitUrl: "https://www.calltrackingmetrics.com",
    bestForSummary: "Deep multi-touch attribution and automation.",
    rating: "4.5",
    startingPrice: "From ~$120/mo",
  },
  whatconverts: {
    name: "WhatConverts",
    slug: "whatconverts",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    logoSrc: "/Logos/whatconverts.jpeg",
    visitUrl: "https://www.whatconverts.com",
    bestForSummary: "Lead-level reporting across calls, forms, and chats.",
    rating: "4.5",
    startingPrice: "From ~$30/mo",
  },
  ringba: {
    name: "Ringba",
    slug: "ringba",
    reviewHref: getCallTrackingReviewUrl("ringba"),
    logoSrc: "/Logos/ringba.jpeg",
    visitUrl: "https://www.ringba.com",
    bestForSummary: "High-volume routing and buyer workflows.",
    rating: "4.3",
    startingPrice: "Custom / usage",
  },
  invoca: {
    name: "Invoca",
    slug: "invoca",
    reviewHref: getCallTrackingReviewUrl("invoca"),
    logoSrc: "/Logos/invoca.png",
    visitUrl: "https://www.invoca.com",
    bestForSummary: "Enterprise conversation intelligence and compliance.",
    rating: "4.4",
    startingPrice: "Enterprise",
  },
} as const;

const ALTERNATIVES_PAGE_SLUGS = new Set<keyof typeof P>(["callrail", "calltrackingmetrics", "whatconverts"]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const s of slugs) {
    if (!ALTERNATIVES_PAGE_SLUGS.has(s as keyof typeof P)) continue;
    const p = P[s as keyof typeof P];
    out.push({
      label: `Best ${p.name} alternatives (ranked)`,
      href: getCallTrackingAlternativeUrl(s),
    });
  }
  return out;
}

function buildMoreComparisons(pa: (typeof P)[keyof typeof P], pb: (typeof P)[keyof typeof P]) {
  const fromSlugs = alternativesPageLinksForSlugs([pa.slug, pb.slug]);
  const fallback =
    fromSlugs.length === 0
      ? [{ label: "Best CallRail alternatives (ranked)", href: getCallTrackingAlternativeUrl("callrail") }]
      : [];
  const crossCluster = [
    { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
    { label: "CRM software hub", href: "/crm" },
  ];
  return [
    { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
    { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
    {
      label: "CallTrackingMetrics vs WhatConverts",
      href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
    },
    { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
    { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
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
      categoryHref: "/call-tracking",
      categoryLabel: "Call Tracking",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [summary],
      featureComparison: [
        {
          feature: "SMB onboarding speed",
          productA: a === "ringba" || a === "invoca" ? "Varies" : "Fast",
          productB: b === "ringba" || b === "invoca" ? "Varies" : "Fast",
          supportA: a === "ringba" || a === "invoca" ? "partial" : "supported",
          supportB: b === "ringba" || b === "invoca" ? "partial" : "supported",
        },
        {
          feature: "Attribution depth",
          productA: a === "calltrackingmetrics" || a === "invoca" ? "Advanced" : "Strong",
          productB: b === "calltrackingmetrics" || b === "invoca" ? "Advanced" : "Strong",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "CRM / ad integrations",
          productA: "Broad",
          productB: "Broad",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Telco / routing power",
          productA: a === "ringba" ? "Very strong" : "Standard",
          productB: b === "ringba" ? "Very strong" : "Standard",
          supportA: a === "ringba" ? "supported" : "partial",
          supportB: b === "ringba" ? "supported" : "partial",
        },
      ],
      pricingComparison: `Both vendors price on usage—numbers, minutes, and seats. Model annual cost against booked-job economics, not raw call counts alone.`,
      prosConsA: {
        pros: ["Fits its target segment well", "Clear reporting story"],
        cons: ["Usage can scale quickly", "Needs CRM discipline"],
      },
      prosConsB: {
        pros: ["Complementary strengths", "Scales with documented ops"],
        cons: ["Configuration time", "Still needs human QA on numbers"],
      },
      bestFor: [
        {
          heading: "Choose by your funnel",
          body: "SMB trades often start with CallRail-class stacks; enterprise or buyer programs may need Invoca or Ringba depth. Always tag outcomes in CRM.",
        },
      ],
      alternatives: [
        {
          name: "CallRail",
          href: getCallTrackingReviewUrl("callrail"),
          logoSrc: "/Logos/callrail.jpeg",
          description: "SMB-friendly attribution.",
        },
        {
          name: "WhatConverts",
          href: getCallTrackingReviewUrl("whatconverts"),
          logoSrc: "/Logos/whatconverts.jpeg",
          description: "Lead inbox clarity.",
        },
        {
          name: "CallTrackingMetrics",
          href: getCallTrackingReviewUrl("calltrackingmetrics"),
          logoSrc: "/Logos/calltrackingmetrics.jpeg",
          description: "Deep attribution.",
        },
      ],
      faqs: [
        { q: `Which fits local contractors better—${pa.name} or ${pb.name}?`, a: summary },
        { q: "Do I still need CRM tags?", a: "Yes—source data without booked-job outcomes still hides bad spend." },
      ],
      sidebarWinners: [
        { label: "Workflow fit", winner: "A" },
        { label: "Alternate strength", winner: "B" },
      ],
      moreComparisons: buildMoreComparisons(pa, pb),
      relevantTradeLinks: CALL_TRACKING_TRADE_LINKS,
      ...extra,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build(
    "callrail-vs-calltrackingmetrics",
    "callrail",
    "calltrackingmetrics",
    "CallRail wins on approachable SMB rollout and integration breadth; CallTrackingMetrics pulls ahead when teams need heavier multi-touch models and automation—both assume you wire CRM stages honestly.",
    {
      sidebarWinners: [
        { label: "Fast SMB adoption", winner: "A" },
        { label: "Attribution depth", winner: "B" },
      ],
    }
  ),
  build(
    "callrail-vs-whatconverts",
    "callrail",
    "whatconverts",
    "CallRail emphasizes call-centric marketing stacks; WhatConverts emphasizes unified lead reporting across calls, forms, and chats—pick based on whether calls or total leads are your north star.",
    {
      sidebarWinners: [
        { label: "Call + ad workflows", winner: "A" },
        { label: "Lead inbox simplicity", winner: "B" },
      ],
    }
  ),
  build(
    "calltrackingmetrics-vs-whatconverts",
    "calltrackingmetrics",
    "whatconverts",
    "CallTrackingMetrics targets operators defending complex paid programs; WhatConverts targets teams that want cleaner lead rollups without enterprise overhead.",
    {
      sidebarWinners: [
        { label: "Advanced analytics", winner: "A" },
        { label: "Lead clarity", winner: "B" },
      ],
    }
  ),
  build(
    "ringba-vs-callrail",
    "ringba",
    "callrail",
    "Ringba is built for performance routing and buyer economics; CallRail fits typical local service marketing stacks—most contractors should not start with Ringba unless calls are monetized inventory.",
    {
      sidebarWinners: [
        { label: "Routing / scale", winner: "A" },
        { label: "SMB marketing fit", winner: "B" },
      ],
    }
  ),
  build(
    "invoca-vs-callrail",
    "invoca",
    "callrail",
    "Invoca adds conversation AI and enterprise governance; CallRail remains the pragmatic choice for lean teams that need working attribution this month.",
    {
      sidebarWinners: [
        { label: "Enterprise signal", winner: "A" },
        { label: "SMB time-to-value", winner: "B" },
      ],
    }
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getCallTrackingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getCallTrackingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
