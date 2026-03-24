const BASE = "/lead-generation/guides";

export type LeadGenerationGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const LEAD_GENERATION_GUIDES: LeadGenerationGuideItem[] = [
  {
    slug: "how-to-get-leads-for-contractors",
    title: "How to Get Leads for Contractors",
    description: "Practical channels, budgets, and follow-up basics for trade businesses buying or earning leads.",
    href: `${BASE}/how-to-get-leads-for-contractors`,
  },
  {
    slug: "lead-generation-strategies-for-local-business",
    title: "Lead Generation Strategies for Local Business",
    description: "How local operators mix paid marketplaces, search, and referrals without overpaying.",
    href: `${BASE}/lead-generation-strategies-for-local-business`,
  },
  {
    slug: "paid-vs-organic-leads",
    title: "Paid vs Organic Leads",
    description: "Trade-offs between marketplace leads, ads, SEO, and reputation-driven inbound.",
    href: `${BASE}/paid-vs-organic-leads`,
  },
  {
    slug: "how-google-local-services-ads-work",
    title: "How Google Local Services Ads Work",
    description: "Screening, bidding, and lead dispute basics for Google’s local paid lead product.",
    href: `${BASE}/how-google-local-services-ads-work`,
  },
  {
    slug: "how-to-choose-a-lead-generation-platform",
    title: "How to Choose a Lead Generation Platform",
    description: "A decision framework for marketplaces, LSA, and paid social for lead buyers.",
    href: `${BASE}/how-to-choose-a-lead-generation-platform`,
  },
];
