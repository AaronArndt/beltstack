import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getReputationManagementBestForUrl, getReputationManagementCompareUrl } from "@/lib/routes";

const GUIDES_BASE = "/reputation-management/guides";

export const REPUTATION_MANAGEMENT_HUB_GUIDES = [
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to Get More Google Reviews",
    description: "Build a repeatable review request system tied to completed jobs and real customer outcomes.",
    href: `${GUIDES_BASE}/how-to-get-more-google-reviews`,
  },
  {
    slug: "reputation-management-for-contractors",
    title: "Reputation Management for Contractors",
    description: "Trade-focused workflows for review growth, response quality, and trust-led conversion.",
    href: `${GUIDES_BASE}/reputation-management-for-contractors`,
  },
  {
    slug: "how-to-respond-to-negative-reviews",
    title: "How to Respond to Negative Reviews",
    description: "Response playbooks that protect trust and move customers into resolution.",
    href: `${GUIDES_BASE}/how-to-respond-to-negative-reviews`,
  },
  {
    slug: "google-reviews-vs-yelp-reviews",
    title: "Google Reviews vs Yelp Reviews",
    description: "Where each channel matters by local market behavior and service category.",
    href: `${GUIDES_BASE}/google-reviews-vs-yelp-reviews`,
  },
  {
    slug: "how-to-improve-online-reputation",
    title: "How to Improve Online Reputation",
    description: "A practical 90-day plan for stronger ratings, better responses, and higher trust conversion.",
    href: `${GUIDES_BASE}/how-to-improve-online-reputation`,
  },
];

export const REPUTATION_MANAGEMENT_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Small business review consistency",
    body: "Most teams underperform because requests are inconsistent and responses are delayed. Operational consistency beats feature breadth.",
    links: [{ label: "Best for small business →", href: getReputationManagementBestForUrl("small-business") }],
  },
  {
    title: "Contractor and home-services trust workflows",
    body: "Trade businesses should tie review requests to completed jobs, then route negative feedback to ops before ratings drift.",
    links: [
      { label: "Best for contractors →", href: getReputationManagementBestForUrl("contractors") },
      { label: "Best for home services →", href: getReputationManagementBestForUrl("home-services") },
    ],
  },
  {
    title: "Conversion impact beyond ratings",
    body: "Higher review velocity and better response quality usually lift close rates when paired with stronger lead handling and CRM follow-up.",
    links: [
      { label: "Lead generation hub →", href: "/lead-generation" },
      { label: "CRM software hub →", href: "/crm" },
    ],
  },
  {
    title: "Reviews + local visibility systems",
    body: "Reputation works best when paired with local SEO execution, website trust placement, and call attribution.",
    links: [
      { label: "SEO tools hub →", href: "/seo-tools" },
      { label: "Website builders hub →", href: "/website-builders" },
    ],
  },
];

export const REPUTATION_MANAGEMENT_HUB_POPULAR_COMPARISONS = [
  { label: "Podium vs Birdeye", slug: "podium-vs-birdeye", href: getReputationManagementCompareUrl("podium-vs-birdeye") },
  { label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob", href: getReputationManagementCompareUrl("birdeye-vs-nicejob") },
  { label: "Podium vs Broadly", slug: "podium-vs-broadly", href: getReputationManagementCompareUrl("podium-vs-broadly") },
  { label: "Reputation.com vs Birdeye", slug: "reputation-com-vs-birdeye", href: getReputationManagementCompareUrl("reputation-com-vs-birdeye") },
  { label: "Grade.us vs Birdeye", slug: "gradeus-vs-birdeye", href: getReputationManagementCompareUrl("gradeus-vs-birdeye") },
];
