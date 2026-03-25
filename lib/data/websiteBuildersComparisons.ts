import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersAlternativeUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

export function getWebsiteBuildersCompareUrlFromSlug(slug: string): string {
  return `/website-builders/compare/${slug}`;
}

const P = {
  wix: {
    name: "Wix",
    slug: "wix",
    reviewHref: getWebsiteBuildersReviewUrl("wix"),
    logoSrc: getWebsiteBuilderLogoSrc("wix"),
    visitUrl: "https://www.wix.com",
    bestForSummary: "Best overall for most local service businesses.",
    startingPrice: "$17/mo",
    rating: "4.6",
  },
  squarespace: {
    name: "Squarespace",
    slug: "squarespace",
    reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
    visitUrl: "https://www.squarespace.com",
    bestForSummary: "Best for polished design and trust-forward pages.",
    startingPrice: "$16/mo",
    rating: "4.4",
  },
  shopify: {
    name: "Shopify",
    slug: "shopify",
    reviewHref: getWebsiteBuildersReviewUrl("shopify"),
    logoSrc: getWebsiteBuilderLogoSrc("shopify"),
    visitUrl: "https://www.shopify.com",
    bestForSummary: "Best for service + ecommerce operations.",
    startingPrice: "$39/mo",
    rating: "4.5",
  },
  webflow: {
    name: "Webflow",
    slug: "webflow",
    reviewHref: getWebsiteBuildersReviewUrl("webflow"),
    logoSrc: getWebsiteBuilderLogoSrc("webflow"),
    visitUrl: "https://webflow.com",
    bestForSummary: "Best for advanced customization and CMS flexibility.",
    startingPrice: "$14/mo",
    rating: "4.3",
  },
  duda: {
    name: "Duda",
    slug: "duda",
    reviewHref: getWebsiteBuildersReviewUrl("duda"),
    logoSrc: getWebsiteBuilderLogoSrc("duda"),
    visitUrl: "https://www.duda.co",
    bestForSummary: "Best for agency and multi-site management.",
    startingPrice: "$19/mo",
    rating: "4.2",
  },
  "godaddy-website-builder": {
    name: "GoDaddy",
    slug: "godaddy-website-builder",
    reviewHref: getWebsiteBuildersReviewUrl("godaddy-website-builder"),
    logoSrc: getWebsiteBuilderLogoSrc("godaddy-website-builder"),
    visitUrl: "https://www.godaddy.com",
    bestForSummary: "Best for simple, fast launches.",
    startingPrice: "$10/mo",
    rating: "4.1",
  },
  "hostinger-website-builder": {
    name: "Hostinger",
    slug: "hostinger-website-builder",
    reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
    logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
    visitUrl: "https://www.hostinger.com",
    bestForSummary: "Best for budget-first launches and bundled hosting.",
    startingPrice: "$3/mo",
    rating: "4.0",
  },
} as const;

function buildComparison(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  const isCommerceMatchup = a === "shopify" || b === "shopify";
  const hasWebflow = a === "webflow" || b === "webflow";
  const hasBudgetBundle =
    a === "hostinger-website-builder" ||
    b === "hostinger-website-builder" ||
    a === "godaddy-website-builder" ||
    b === "godaddy-website-builder";

  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/website-builders",
      categoryLabel: "Website Builders",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [
        summary,
        `This ${pa.name} vs ${pb.name} comparison is most useful for teams deciding between speed of execution, design control, and long-term operating cost. For most local service businesses, the winner is usually the platform your team can update weekly without waiting on a specialist.`,
        `Before migrating, map your top service pages, quote forms, and call-to-action paths first. Platform choice only improves results when your local SEO publishing rhythm and lead follow-up process stay consistent after launch.`,
      ],
      decisionGuideA: [
        `Choose ${pa.name} if your team needs to publish and update service pages quickly.`,
        `Choose ${pa.name} if non-technical owners or office staff will manage daily edits.`,
        `Choose ${pa.name} if your near-term goal is better lead capture with lower operational friction.`,
      ],
      decisionGuideB: [
        `Choose ${pb.name} if your team values ${pb.bestForSummary.toLowerCase()}`,
        `Choose ${pb.name} if your workflow can support a slightly steeper setup or design process.`,
        `Choose ${pb.name} if your roadmap depends on its strongest differentiator, not just launch speed.`,
      ],
      featureComparison: [
        { feature: "Ease of use for non-technical teams", productA: "Strong", productB: hasWebflow ? "Moderate to strong" : "Strong", supportA: "supported", supportB: "supported" },
        { feature: "Local SEO page publishing workflow", productA: "Good", productB: "Good", supportA: "supported", supportB: "supported" },
        { feature: "Design and layout control", productA: hasWebflow ? "Advanced" : "Good", productB: hasWebflow ? "Advanced" : "Good", supportA: "supported", supportB: "supported" },
        { feature: "Service-business conversion tooling", productA: "Strong", productB: isCommerceMatchup ? "Strong (commerce-leaning)" : "Strong", supportA: "supported", supportB: "supported" },
        { feature: "Integrations and extensibility", productA: "Strong ecosystem", productB: hasBudgetBundle ? "Basic to solid" : "Solid ecosystem", supportA: "supported", supportB: "supported" },
      ],
      pricingComparison: `Both products use tiered pricing. Compare annual cost including premium templates/apps, team seats, ecommerce fees (if relevant), and migration effort. For local operators, the cheapest entry plan is often not the lowest 12-month operating cost.`,
      prosConsA: {
        pros: [
          `${pa.name} aligns well with ${pa.bestForSummary.toLowerCase()}`,
          "Strong fit for core service-page and lead-generation workflows",
          "Clear path from launch to ongoing optimization",
        ],
        cons: [
          "Can become expensive when add-ons and growth features stack",
          "No platform fixes weak content or poor lead follow-up process",
        ],
      },
      prosConsB: {
        pros: [
          `${pb.name} supports ${pb.bestForSummary.toLowerCase()}`,
          "Useful differentiation when your business model matches it",
          "Competitive option for teams with clear platform requirements",
        ],
        cons: [
          "May require more setup discipline depending on stack complexity",
          "Migration cost can erase short-term pricing advantages",
        ],
      },
      bestFor: [
        {
          heading: "Best for different search intents",
          body: `Choose based on the outcome you are trying to improve: "best website builder for local SEO," "easiest website builder for contractors," or "website builder for service + ecommerce." Match platform strengths to your actual growth bottleneck.`,
        },
        {
          heading: "Best for operational ownership",
          body: "Decide who owns weekly website updates. If one person can consistently publish service pages, offers, and trust content, that execution speed usually beats theoretical feature depth.",
        },
      ],
      alternatives: [
        { name: "Wix", href: getWebsiteBuildersReviewUrl("wix"), logoSrc: getWebsiteBuilderLogoSrc("wix") },
        { name: "Squarespace", href: getWebsiteBuildersReviewUrl("squarespace"), logoSrc: getWebsiteBuilderLogoSrc("squarespace") },
        { name: "Shopify", href: getWebsiteBuildersReviewUrl("shopify"), logoSrc: getWebsiteBuilderLogoSrc("shopify") },
      ],
      faqs: [
        { q: `How does ${pa.name} compare with ${pb.name}?`, a: summary },
        {
          q: "Which is better for local service businesses?",
          a: "The better fit depends on your lead workflow, publishing speed, and whether ecommerce is central. For most local operators, pick the platform your team can run weekly without delays.",
        },
        {
          q: `Is ${pa.name} or ${pb.name} better for SEO?`,
          a: "Both can perform for SEO when implemented well. Results usually depend more on content cadence, internal linking, and technical hygiene than builder branding alone.",
        },
        {
          q: `What should I read after this ${pa.name} vs ${pb.name} comparison?`,
          a: `Open both review pages, then check the best website builders roundup and the best-for pages to confirm fit by trade and operating model before migrating.`,
        },
        {
          q: "How should I evaluate migration risk?",
          a: "Audit page inventory, redirect mapping, form logic, analytics, and conversion tracking before moving. A clean migration plan protects rankings and lead flow during the switch.",
        },
      ],
      sidebarWinners: [
        { label: "Ease of use", winner: "A" },
        { label: "Customization depth", winner: "B" },
        { label: "Best fit for non-technical teams", winner: "A" },
      ],
      moreComparisons: [
        { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
        { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
        { label: "Squarespace vs Shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
        { label: "Webflow vs Wix", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") },
        { label: "GoDaddy vs Hostinger", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder") },
        { label: "Best Wix alternatives", href: getWebsiteBuildersAlternativeUrl("wix") },
        { label: "Best Squarespace alternatives", href: getWebsiteBuildersAlternativeUrl("squarespace") },
        { label: "Best Shopify alternatives", href: getWebsiteBuildersAlternativeUrl("shopify") },
        { label: "Best Webflow alternatives", href: getWebsiteBuildersAlternativeUrl("webflow") },
        { label: "Best website builder for local SEO", href: "/website-builders/guides/best-website-builder-for-local-seo" },
      ],
      relevantTradeLinks: [
        { label: "Best for contractors", href: getWebsiteBuildersBestForUrl("contractors") },
        { label: "Best for HVAC", href: getWebsiteBuildersBestForUrl("hvac") },
        { label: "Best for plumbers", href: getWebsiteBuildersBestForUrl("plumbers") },
        { label: "Best for small business", href: getWebsiteBuildersBestForUrl("small-business") },
        { label: "Best for home services", href: getWebsiteBuildersBestForUrl("home-services") },
      ],
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  buildComparison("wix-vs-squarespace", "wix", "squarespace", "Wix is stronger for app flexibility and rapid lead-generation pages, while Squarespace leads on polished visual design and presentation."),
  buildComparison("wix-vs-shopify", "wix", "shopify", "Wix is better for straightforward service-business websites; Shopify wins when ecommerce and online transactions are central."),
  buildComparison("squarespace-vs-shopify", "squarespace", "shopify", "Squarespace fits design-first content and service websites; Shopify is better for businesses where selling online is the primary driver."),
  buildComparison("webflow-vs-wix", "webflow", "wix", "Webflow offers deeper design control and CMS flexibility, while Wix is faster for non-technical teams and local business launch speed."),
  buildComparison("duda-vs-wix", "duda", "wix", "Duda is better for agencies and multi-site management workflows; Wix is better for owner-operators managing one primary business site."),
  buildComparison("godaddy-website-builder-vs-wix", "godaddy-website-builder", "wix", "GoDaddy is simpler and faster for basic launch needs; Wix offers more flexibility, app depth, and growth runway."),
  buildComparison(
    "hostinger-website-builder-vs-wix",
    "hostinger-website-builder",
    "wix",
    "Hostinger wins on entry price and a tight hosting-plus-site bundle for new operators; Wix wins on app breadth, local-business workflows, and long-term marketing depth."
  ),
  buildComparison(
    "godaddy-website-builder-vs-hostinger-website-builder",
    "godaddy-website-builder",
    "hostinger-website-builder",
    "GoDaddy is often the faster path for non-technical owners who want a recognizable brand and checkout domain services in one flow; Hostinger is stronger when ultra-low cost and hosting stack value matter most."
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getWebsiteBuildersComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getWebsiteBuildersComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
