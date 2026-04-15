import {
  getReputationManagementBestForUrl,
  getReputationManagementCompareUrl,
  getReputationManagementReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestReputationManagementPick = SoftwarePickCardContent & {
  standoutFeature: string;
};

const LOGOS = {
  podium: "/Logos/podium.jpeg",
  birdeye: "/Logos/birdeye.svg",
  nicejob: "/Logos/nicejob.jpeg",
  "reputation-com": "/Logos/reputation.jpeg",
  broadly: "/Logos/broadly.png",
  "grade-us": "/Logos/gradeus.png",
  "trustpilot-business": "/Logos/trustpilot.png",
} as const;

export const TOP_PICKS: BestReputationManagementPick[] = [
  {
    slug: "podium",
    name: "Podium",
    badge: "Best for SMS-first review requests",
    comparisonTableBestFor: "Text-heavy workflows for local teams",
    description: "Podium is strong for teams that already run customer communication through text.",
    rating: "4.5",
    startingPrice: "Custom / quote",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.podium.com",
    logoSrc: LOGOS.podium,
    compareSlugs: ["podium-vs-birdeye", "podium-vs-broadly"],
    standoutFeature: "Review requests via SMS automations",
    editorialParagraph:
      "Podium usually wins when speed-to-request and front-office texting are the operating bottleneck.",
    pros: ["Strong text workflows", "Good local-business orientation", "Fast review request setup"],
    cons: ["Pricing transparency varies", "Can be heavy for very small shops"],
    pricingSummary: "Model total seats and add-on modules before annualizing.",
    alternativesSlug: "podium",
  },
  {
    slug: "birdeye",
    name: "Birdeye",
    badge: "Best all-in-one reputation suite",
    comparisonTableBestFor: "Multi-location reputation operations",
    description: "Birdeye is a broad platform for review, listing, and response workflows at scale.",
    rating: "4.6",
    startingPrice: "Custom / quote",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://birdeye.com",
    logoSrc: LOGOS.birdeye,
    compareSlugs: ["podium-vs-birdeye", "birdeye-vs-nicejob", "reputation-com-vs-birdeye", "gradeus-vs-birdeye"],
    standoutFeature: "Location-level review and response management",
    editorialParagraph:
      "Birdeye is often the default for teams needing one system across many locations and service lines.",
    pros: ["Wide feature set", "Strong multi-location controls", "Mature category presence"],
    cons: ["Can feel heavyweight", "Requires process ownership to realize value"],
    pricingSummary: "Quotes vary by footprint and modules; compare per-location economics.",
    alternativesSlug: "birdeye",
  },
  {
    slug: "nicejob",
    name: "NiceJob",
    badge: "Best for simple automation",
    comparisonTableBestFor: "Lean teams needing easy review growth",
    description: "NiceJob is usually the easiest path for service businesses that want less setup friction.",
    rating: "4.4",
    startingPrice: "From ~$75/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://nicejob.com",
    logoSrc: LOGOS.nicejob,
    compareSlugs: ["birdeye-vs-nicejob"],
    standoutFeature: "Simple review request automations",
    editorialParagraph:
      "NiceJob fits owner-led teams that care more about consistency than enterprise dashboards.",
    pros: ["Easy onboarding", "Clear focus on reviews", "Good fit for small operators"],
    cons: ["Less enterprise depth", "Fewer advanced workflow options"],
    pricingSummary: "Usually straightforward, but confirm limits as locations grow.",
    alternativesSlug: "nicejob",
  },
  {
    slug: "reputation-com",
    name: "Reputation.com",
    badge: "Best enterprise governance",
    comparisonTableBestFor: "Enterprise and regulated multi-location brands",
    description: "Reputation.com is designed for organizations with strict governance and reporting needs.",
    rating: "4.2",
    startingPrice: "Enterprise / custom",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://reputation.com",
    logoSrc: LOGOS["reputation-com"],
    compareSlugs: ["reputation-com-vs-birdeye"],
    standoutFeature: "Enterprise controls and policy workflows",
    editorialParagraph:
      "Choose Reputation.com when legal, compliance, and corporate reporting requirements lead the decision.",
    pros: ["Enterprise controls", "Strong governance orientation", "Multi-location reporting depth"],
    cons: ["Higher complexity", "Not ideal for lean teams"],
    pricingSummary: "Enterprise quote model; include services in total-cost math.",
  },
];

export const REPUTATION_MANAGEMENT_REGISTRY_SUPPLEMENT: SoftwarePickCardContent[] = [
  {
    slug: "broadly",
    name: "Broadly",
    badge: "Best local service simplicity",
    comparisonTableBestFor: "Small service teams needing lightweight reputation workflows",
    description: "Broadly is a practical option when teams want straightforward review follow-up.",
    rating: "4.2",
    startingPrice: "Custom / quote",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://broadly.com",
    logoSrc: LOGOS.broadly,
    compareSlugs: ["podium-vs-broadly"],
    standoutFeature: "Simple local-business messaging and review requests",
    editorialParagraph: "Broadly emphasizes usability for small service operations.",
    pros: ["Simple setup", "Good local focus", "Lower process overhead"],
    cons: ["Less depth for enterprise", "Fewer advanced controls"],
    pricingSummary: "Confirm modules and contact limits before scaling.",
  },
  {
    slug: "grade-us",
    name: "Grade.us",
    badge: "Best agency-friendly review funnels",
    comparisonTableBestFor: "Agencies managing review growth across clients",
    description: "Grade.us is commonly used by agencies managing campaigns across multiple clients.",
    rating: "4.1",
    startingPrice: "From ~$110/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.grade.us",
    logoSrc: LOGOS["grade-us"],
    compareSlugs: ["gradeus-vs-birdeye"],
    standoutFeature: "Agency-oriented campaign management",
    editorialParagraph: "Grade.us is strong when agencies need repeatable review operations.",
    pros: ["Agency workflow fit", "Campaign control", "Good reporting flexibility"],
    cons: ["Not as broad as suites", "Can require more setup for owners"],
    pricingSummary: "Match plan to active clients and campaign volume.",
  },
  {
    slug: "trustpilot-business",
    name: "Trustpilot (Business)",
    badge: "Best third-party trust signal",
    comparisonTableBestFor: "Brands prioritizing third-party review visibility",
    description: "Trustpilot can help businesses that rely on high-volume social proof beyond local maps.",
    rating: "4.0",
    startingPrice: "Custom / quote",
    hasFreeTrial: false,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://business.trustpilot.com",
    logoSrc: LOGOS["trustpilot-business"],
    compareSlugs: [],
    standoutFeature: "Recognized third-party review brand",
    editorialParagraph: "Trustpilot is typically a supplement to Google-first local review operations.",
    pros: ["Strong public trust brand", "Third-party visibility", "Useful for brand-first teams"],
    cons: ["May not be primary local channel", "Value varies by trade"],
    pricingSummary: "Validate ROI against actual lead and close contribution.",
  },
  {
    slug: "yelp-for-business",
    name: "Yelp for Business",
    badge: "Best Yelp-market visibility",
    comparisonTableBestFor: "Markets where Yelp meaningfully influences buyer choice",
    description: "Yelp for Business matters most in metros where Yelp behavior is strong.",
    rating: "4.0",
    startingPrice: "Varies by market",
    hasFreeTrial: false,
    hasFreePlan: true,
    hasIntegrations: false,
    visitUrl: "https://business.yelp.com",
    logoSrc: "/Logos/yelp.png",
    compareSlugs: [],
    standoutFeature: "Yelp marketplace presence",
    editorialParagraph: "Yelp fit varies sharply by geography; validate locally before heavy spend.",
    pros: ["Strong in specific metros", "Consumer familiarity", "Direct local visibility"],
    cons: ["Inconsistent fit by market", "Not enough as a stand-alone strategy"],
    pricingSummary: "Economics vary by category and geography.",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best Reputation Management Software for HVAC Businesses (2026)", href: getReputationManagementBestForUrl("hvac"), description: "High-volume seasonal demand patterns and response consistency." },
  { label: "Best Reputation Management Software for Plumbing Companies (2026)", href: getReputationManagementBestForUrl("plumbing"), description: "Urgent intent and fast follow-up review workflows." },
  { label: "Best Reputation Management Software for Electricians (2026)", href: getReputationManagementBestForUrl("electricians"), description: "Trust and credibility-led review operations." },
  { label: "Best Reputation Management Software for Roofing Companies (2026)", href: getReputationManagementBestForUrl("roofing"), description: "High-ticket trust signals and escalation controls." },
];

export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "HVAC businesses", href: getReputationManagementBestForUrl("hvac") },
  { label: "Plumbing companies", href: getReputationManagementBestForUrl("plumbing") },
  { label: "Electricians", href: getReputationManagementBestForUrl("electricians") },
  { label: "Painting contractors", href: getReputationManagementBestForUrl("painting") },
  { label: "Roofing companies", href: getReputationManagementBestForUrl("roofing") },
  { label: "General contractors", href: getReputationManagementBestForUrl("general-contractors") },
  { label: "Landscaping companies", href: getReputationManagementBestForUrl("landscaping") },
  { label: "Construction companies", href: getReputationManagementBestForUrl("construction") },
  { label: "Remodeling businesses", href: getReputationManagementBestForUrl("remodeling") },
  { label: "Handyman businesses", href: getReputationManagementBestForUrl("handyman") },
  { label: "Property management companies", href: getReputationManagementBestForUrl("property-management") },
  { label: "Pest control businesses", href: getReputationManagementBestForUrl("pest-control") },
  { label: "Pool service companies", href: getReputationManagementBestForUrl("pool-service") },
  { label: "Junk removal businesses", href: getReputationManagementBestForUrl("junk-removal") },
  { label: "Moving companies", href: getReputationManagementBestForUrl("moving") },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Podium vs Birdeye", href: getReputationManagementCompareUrl("podium-vs-birdeye") },
  { label: "Birdeye vs NiceJob", href: getReputationManagementCompareUrl("birdeye-vs-nicejob") },
  { label: "Podium vs Broadly", href: getReputationManagementCompareUrl("podium-vs-broadly") },
  { label: "Reputation.com vs Birdeye", href: getReputationManagementCompareUrl("reputation-com-vs-birdeye") },
  { label: "Grade.us vs Birdeye", href: getReputationManagementCompareUrl("gradeus-vs-birdeye") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best reputation management software for local businesses?",
    a: "It depends on operating model. Podium and Birdeye are common shortlists for multi-location and communication-heavy teams, while NiceJob is often easier for smaller operators.",
  },
  {
    q: "Is reputation management software worth it for contractors?",
    a: "Usually yes if your close rate depends on review volume and response quality. The software only works when requests and responses are tied to daily service workflows.",
  },
  {
    q: "Should I prioritize Google reviews or Yelp reviews?",
    a: "For most trades, Google reviews carry more local search impact, while Yelp matters in specific metros and categories. The right mix is market-specific.",
  },
  {
    q: "Can reputation tools replace a CRM?",
    a: "No. Reputation tools manage review and feedback workflows; CRM manages pipeline, follow-up, and revenue outcomes.",
  },
];

export const MORE_REPUTATION_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  { slug: "broadly", name: "Broadly", description: "Simple local-service review workflows.", reviewHref: getReputationManagementReviewUrl("broadly"), logoSrc: LOGOS.broadly },
  { slug: "grade-us", name: "Grade.us", description: "Agency-friendly review campaign controls.", reviewHref: getReputationManagementReviewUrl("grade-us"), logoSrc: LOGOS["grade-us"] },
  { slug: "trustpilot-business", name: "Trustpilot (Business)", description: "Third-party review brand presence.", reviewHref: getReputationManagementReviewUrl("trustpilot-business"), logoSrc: LOGOS["trustpilot-business"] },
  { slug: "yelp-for-business", name: "Yelp for Business", description: "Yelp-focused visibility in relevant metros.", reviewHref: getReputationManagementReviewUrl("yelp-for-business"), logoSrc: "/Logos/yelp.png" },
];
