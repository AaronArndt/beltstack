import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import {
  getLeadGenerationBestForUrl,
  getLeadGenerationCompareUrl,
} from "@/lib/routes";
import { getLeadGenerationCompareUrlFromSlug } from "@/lib/data/leadGenerationComparisons";

const GUIDES_BASE = "/lead-generation/guides";

export type LeadGenerationGuideCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const LEAD_GENERATION_HUB_GUIDES: LeadGenerationGuideCard[] = [
  {
    slug: "how-to-get-leads-for-contractors",
    title: "How to Get Leads for Contractors",
    description: "Channels, budgets, and follow-up rhythms for trade businesses.",
    href: `${GUIDES_BASE}/how-to-get-leads-for-contractors`,
  },
  {
    slug: "paid-vs-organic-leads",
    title: "Paid vs Organic Leads",
    description: "When to buy leads vs invest in inbound—and how to measure both.",
    href: `${GUIDES_BASE}/paid-vs-organic-leads`,
  },
  {
    slug: "how-google-local-services-ads-work",
    title: "How Google Local Services Ads Work",
    description: "Screening, cost, and dispute basics for LSA.",
    href: `${GUIDES_BASE}/how-google-local-services-ads-work`,
  },
  {
    slug: "how-to-choose-a-lead-generation-platform",
    title: "How to Choose a Lead Generation Platform",
    description: "Pick marketplaces and ad products based on economics, not hype.",
    href: `${GUIDES_BASE}/how-to-choose-a-lead-generation-platform`,
  },
  {
    slug: "lead-generation-strategies-for-local-business",
    title: "Lead Generation Strategies for Local Business",
    description: "Blend paid and owned channels for sustainable local growth.",
    href: `${GUIDES_BASE}/lead-generation-strategies-for-local-business`,
  },
];

export const LEAD_GENERATION_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Contractors buying shared marketplace leads",
    body: "If you answer phones fast, dispute bad matches, and track cost per booked job, marketplaces can work. If not, you’ll burn budget—tighten follow-up before you scale.",
    links: [
      { label: "Best lead gen for contractors →", href: getLeadGenerationBestForUrl("contractors") },
      { label: "Thumbtack vs Angi →", href: getLeadGenerationCompareUrlFromSlug("thumbtack-vs-angi") },
    ],
  },
  {
    title: "High-intent Google search traffic",
    body: "Local Services Ads capture searchers ready to call—but verification, budget caps, and service definitions matter. Compare LSA with Yelp and marketplaces for your trade.",
    links: [
      { label: "Google LSA vs Yelp Ads →", href: getLeadGenerationCompareUrlFromSlug("google-local-services-ads-vs-yelp-ads") },
      { label: "How LSA works (guide) →", href: `${GUIDES_BASE}/how-google-local-services-ads-work` },
    ],
  },
  {
    title: "Home services brands comparing Angi and HomeAdvisor",
    body: "Overlapping lead networks still differ in bundles, dispute rules, and geography. Read both reviews and the head-to-head before you commit annual spend.",
    links: [{ label: "Angi vs HomeAdvisor →", href: getLeadGenerationCompareUrlFromSlug("angi-vs-homeadvisor") }],
  },
  {
    title: "Design-build and remodeling visibility",
    body: "Portfolio-driven discovery behaves differently than emergency plumbing. Houzz Pro competes more on brand and visuals than pure pay-per-call marketplaces.",
    links: [{ label: "Houzz Pro vs Thumbtack →", href: getLeadGenerationCompareUrlFromSlug("houzz-pro-vs-thumbtack") }],
  },
  {
    title: "Choosing paid vs organic (long term)",
    body: "Paid leads fill this week; organic builds next year. Use the guides hub to model both—then pick platforms that match your sales speed and margin.",
    links: [
      { label: "Paid vs organic leads →", href: `${GUIDES_BASE}/paid-vs-organic-leads` },
      { label: "Full rankings →", href: "/lead-generation/best-lead-generation-tools" },
    ],
  },
];

export type LeadGenHubComparisonLink = { label: string; slug: string; href: string };

export const LEAD_GENERATION_HUB_POPULAR_COMPARISONS: LeadGenHubComparisonLink[] = [
  { label: "Thumbtack vs Angi", slug: "thumbtack-vs-angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
  { label: "Angi vs HomeAdvisor", slug: "angi-vs-homeadvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
  { label: "Bark vs Thumbtack", slug: "bark-vs-thumbtack", href: getLeadGenerationCompareUrl("bark-vs-thumbtack") },
  { label: "Houzz Pro vs Thumbtack", slug: "houzz-pro-vs-thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
  { label: "Google LSA vs Yelp Ads", slug: "google-local-services-ads-vs-yelp-ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
];
