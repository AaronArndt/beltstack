import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getReputationManagementAlternativeUrl,
  getReputationManagementBestForUrl,
  getReputationManagementCompareUrl,
  getReputationManagementReviewUrl,
} from "@/lib/routes";

export type ReputationManagementReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const LOGOS = {
  podium: "/Logos/podium.jpeg",
  birdeye: "/Logos/birdeye.svg",
  nicejob: "/Logos/nicejob.jpeg",
  "reputation-com": "/Logos/reputation.jpeg",
  broadly: "/Logos/broadly.png",
  "grade-us": "/Logos/gradeus.png",
  "trustpilot-business": "/Logos/trustpilot.png",
  "yelp-for-business": "/Logos/yelp.png",
} as const;
const categoryHref = "/reputation-management";

function review(
  slug: string,
  toolName: string,
  rating: string,
  startingPrice: string,
  bestFor: string,
  compareA: { label: string; slug: string },
  compareB: { label: string; slug: string },
  alternativesPage?: string
): ReputationManagementReviewData {
  return {
    category: "Reputation Management",
    categoryHref,
    toolName,
    rating,
    startingPrice,
    bestFor,
    visitUrl: "https://example.com",
    logoSrc: LOGOS[slug as keyof typeof LOGOS] ?? LOGOS.podium,
    quickVerdict: `${toolName} is a strong option for teams matching its operating model and review workflow depth.`,
    quickVerdictParagraphs: [
      `${toolName} can improve review growth and response consistency when request timing and team ownership are clearly defined.`,
      "Most local operators should evaluate this platform based on workflow adoption, not just feature checklists or brand familiarity.",
      "Use a 30-60 day pilot to compare review velocity, response speed, and lead conversion impact against your current process.",
    ],
    ratingBreakdown: [
      { category: "Features", score: rating, explanation: "Category-appropriate feature depth for local-service review operations." },
      { category: "Pricing", score: "4.0", explanation: "Total-cost value depends on location count, seat model, and adoption quality." },
      { category: "Ease of Use", score: "4.2", explanation: "Most teams can onboard quickly with defined request and response ownership." },
      { category: "Support", score: "4.1", explanation: "Support outcomes vary by plan and implementation scope." },
      { category: "Service-business fit", score: "4.3", explanation: "Strong when tied to operational habits and customer follow-up discipline." },
    ],
    compareLinks: [
      { label: compareA.label, href: getReputationManagementCompareUrl(compareA.slug) },
      { label: compareB.label, href: getReputationManagementCompareUrl(compareB.slug) },
    ],
    pros: ["Improves review request consistency", "Supports response workflows", "Useful for local-service trust signals"],
    cons: ["Results depend on team execution", "Cost can scale with footprint", "Migration requires process alignment"],
    bestForEditorial:
      "Best for service businesses that can run consistent post-job requests and maintain response SLAs across teams.",
    whoShouldAvoid:
      "Teams without clear ownership for review requests and responses; no tool can fix an undefined process.",
    pricingSummary:
      "Compare annual cost by locations, seats, and messaging volume. Total cost usually matters more than headline pricing.",
    pricingTiers:
      "Plan structure and feature packaging vary. Validate what is included in base pricing versus add-ons.",
    costVsCompetitors:
      "Competitive fit depends on operating model: some teams prioritize suite depth, others prioritize simplicity and execution speed.",
    features: ["Review requests", "Response workflows", "Reporting", "Integrations"],
    keyFeatures: [
      { name: "Automated review requests", description: "Trigger review requests consistently after jobs complete." },
      { name: "Response management", description: "Manage positive and negative review responses with clear ownership." },
      { name: "Location reporting", description: "Track review trends by location and service line." },
      { name: "Integration workflows", description: "Connect with CRM and operational systems where needed." },
    ],
    integrations: ["CRM tools", "Messaging workflows", "Review channels"],
    integrationsIntro:
      "Most teams should connect request triggers and outcome tracking to existing CRM and service workflows.",
    contractorUse: [
      "Increase review velocity after completed jobs.",
      "Standardize responses to protect trust signals.",
      "Improve close rates by strengthening public social proof.",
      "Align review operations with lead and CRM follow-up.",
    ],
    alternatives: [
      { name: "Podium", href: getReputationManagementReviewUrl("podium"), description: "SMS-first reputation workflows", logoSrc: LOGOS.podium },
      { name: "Birdeye", href: getReputationManagementReviewUrl("birdeye"), description: "Broad multi-location operations", logoSrc: LOGOS.birdeye },
      { name: "NiceJob", href: getReputationManagementReviewUrl("nicejob"), description: "Simple automation and adoption", logoSrc: LOGOS.nicejob },
    ],
    faqs: [
      { q: `Is ${toolName} worth it for contractors?`, a: "It can be, if your team consistently sends review requests and follows a response SLA after every completed job." },
      { q: `How should I compare ${toolName} pricing?`, a: "Compare annual total cost by active locations, user access, and message volume—not just starting plan labels." },
      { q: `What should I test before committing to ${toolName}?`, a: "Run a pilot for 30-60 days with fixed request cadence and response ownership, then compare conversion impact." },
      { q: `Does ${toolName} replace CRM software?`, a: "No. Reputation tools support trust signals and feedback workflows; CRM still manages pipeline and revenue outcomes." },
    ],
    relatedReading: [
      { label: "Best reputation management software roundup", href: "/reputation-management/best-reputation-management-software" },
      { label: "Reputation software comparisons", href: "/reputation-management/compare" },
      { label: "Reputation management guides", href: "/reputation-management/guides" },
      { label: "SEO tools hub", href: "/seo-tools" },
      { label: "Lead generation hub", href: "/lead-generation" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Call tracking hub", href: "/call-tracking" },
    ],
    methodology: {
      title: "How we review reputation management software",
      sub: "Service-business workflow lens.",
      introParagraph:
        "We evaluate tools on execution fit for local operators, not generic enterprise checklists.",
      bullets: [
        "We assess request consistency, response workflows, and adoption quality.",
        "We compare pricing through 12-month operating cost and footprint fit.",
        "We prioritize conversion and trust impact for service-business buying journeys.",
      ],
    },
    compareSectionTitle: "Compare with other reputation platforms",
    bestPayrollSoftwareHref: "/reputation-management/best-reputation-management-software",
    compareHubHref: "/reputation-management/compare",
    compareHubLabel: "Compare reputation management software",
    bestRoundupLabel: "Best reputation management software (2026) — full roundup",
    bestForSectionTitle: "Best reputation software for different use cases",
    bestForSectionSub: "Scenario picks for local and trade-focused businesses.",
    scenarioLinks: [
      { label: "Small business", href: getReputationManagementBestForUrl("small-business") },
      { label: "Contractors", href: getReputationManagementBestForUrl("contractors") },
      { label: "HVAC", href: getReputationManagementBestForUrl("hvac") },
      { label: "Home services", href: getReputationManagementBestForUrl("home-services") },
    ],
    guideHubHref: "/reputation-management/guides",
    guideHubLabel: "Reputation management guides",
    popularIndustryLinks: [
      { label: "Best for contractors", href: getReputationManagementBestForUrl("contractors") },
      { label: "Best for plumbers", href: getReputationManagementBestForUrl("plumbers") },
      { label: "Best for electricians", href: getReputationManagementBestForUrl("electricians") },
      { label: "Best for roofers", href: getReputationManagementBestForUrl("roofers") },
    ],
    ...(alternativesPage
      ? {
          alternativesPageHref: getReputationManagementAlternativeUrl(alternativesPage),
          alternativesPageLabel: `Best ${toolName} alternatives (2026)`,
        }
      : {}),
  };
}

const reviews: Record<string, ReputationManagementReviewData> = {
  podium: review("podium", "Podium", "4.5", "Custom / quote", "SMS-first local communication", { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }, { label: "Podium vs Broadly", slug: "podium-vs-broadly" }, "podium"),
  birdeye: review("birdeye", "Birdeye", "4.6", "Custom / quote", "All-in-one multi-location operations", { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }, { label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob" }, "birdeye"),
  nicejob: review("nicejob", "NiceJob", "4.4", "From ~$75/mo", "Simple review growth", { label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob" }, { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }, "nicejob"),
  "reputation-com": review("reputation-com", "Reputation.com", "4.2", "Enterprise / custom", "Enterprise governance", { label: "Reputation.com vs Birdeye", slug: "reputation-com-vs-birdeye" }, { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }),
  broadly: review("broadly", "Broadly", "4.2", "Custom / quote", "Local-service simplicity", { label: "Podium vs Broadly", slug: "podium-vs-broadly" }, { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }),
  "grade-us": review("grade-us", "Grade.us", "4.1", "From ~$110/mo", "Agency campaign management", { label: "Grade.us vs Birdeye", slug: "gradeus-vs-birdeye" }, { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }),
  "trustpilot-business": review("trustpilot-business", "Trustpilot (Business)", "4.0", "Custom / quote", "Third-party trust visibility", { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" }, { label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob" }),
  "yelp-for-business": review("yelp-for-business", "Yelp for Business", "4.0", "Varies by market", "Yelp-heavy local markets", { label: "Podium vs Broadly", slug: "podium-vs-broadly" }, { label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob" }),
};

export function getReputationManagementReviewBySlug(slug: string): ReputationManagementReviewData | undefined {
  return reviews[slug];
}

export function getReputationManagementReviewSlugs(): string[] {
  return Object.keys(reviews);
}
