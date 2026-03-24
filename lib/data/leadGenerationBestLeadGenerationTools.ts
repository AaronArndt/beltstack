import {
  getLeadGenerationBestForUrl,
  getLeadGenerationCompareUrl,
  getLeadGenerationReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestLeadGenPick = SoftwarePickCardContent & {
  standoutFeature: string;
};

export const TOP_PICKS: BestLeadGenPick[] = [
  {
    slug: "thumbtack",
    name: "Thumbtack",
    badge: "Best overall marketplace",
    comparisonTableBestFor: "Local pros who want pay-per-lead flow",
    description: "Pay-per-lead marketplace built for fast responses and local trade categories.",
    rating: "4.4",
    startingPrice: "Pay per lead",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.thumbtack.com",
    logoSrc: "/Logos/thumbtack.jpeg",
    compareSlugs: ["thumbtack-vs-angi", "bark-vs-thumbtack", "houzz-pro-vs-thumbtack"],
    standoutFeature: "Flexible budgets; broad local categories",
    editorialParagraph:
      "Thumbtack is the default shortlist product when you want marketplace leads without building funnels from scratch. It rewards fast follow-up and clear service definitions—weak ops burn budget.",
    pros: ["Large local buyer volume", "Self-serve lead buying", "Works across many trades"],
    cons: ["Shared leads in competitive markets", "Quality varies by metro", "Needs tight phone discipline"],
    pricingSummary: "Typically pay-per-lead pricing varies by service and geography. Confirm dispute and credit rules in your market before scaling.",
  },
  {
    slug: "angi",
    name: "Angi",
    badge: "Best directory + lead bundles",
    comparisonTableBestFor: "Home services brands on Angi",
    description: "Familiar home-services brand combining directory presence with lead products.",
    rating: "4.3",
    startingPrice: "Quote / bundles",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.angi.com",
    logoSrc: "/Logos/angi.jpeg",
    compareSlugs: ["thumbtack-vs-angi", "angi-vs-homeadvisor"],
    standoutFeature: "Brand trust; bundled marketing options",
    editorialParagraph:
      "Angi fits teams that want repeated exposure across search and directory behavior. Compare bundles against pure pay-per-lead tools using booked-job economics.",
    pros: ["Recognized consumer brand", "Multiple ad and listing formats", "Strong in home services"],
    cons: ["Overlap with other marketplaces", "Complex bundles", "Still requires lead ops discipline"],
    pricingSummary: "Pricing is often quoted by market and category. Ask how credits, refunds, and duplicate leads are handled.",
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    badge: "Best for Google search intent",
    comparisonTableBestFor: "Verified pros catching high-intent calls",
    description: "Google-screened placements for local services searches with pay-per-lead billing in eligible categories.",
    rating: "4.5",
    startingPrice: "Pay per lead",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://ads.google.com/local-services-ads",
    logoSrc: "/Logos/google.jpeg",
    compareSlugs: ["google-local-services-ads-vs-yelp-ads"],
    standoutFeature: "High-intent Google visibility; screened badge",
    editorialParagraph:
      "LSA is the channel when your customers start on Google and call fast. Verification and service-area setup matter—half-done profiles waste spend.",
    pros: ["High-intent search traffic", "Google trusted badge", "Lead dispute workflow"],
    cons: ["Category eligibility limits", "Bidding can be expensive", "Needs ongoing budget control"],
    pricingSummary: "Per-lead costs depend on category and auction pressure. Track booked jobs and LSA credits monthly.",
    alternativesSlug: null,
  },
  {
    slug: "houzz-pro",
    name: "Houzz Pro",
    badge: "Best for design-build visibility",
    comparisonTableBestFor: "Remodel and design portfolios",
    description: "Portfolio and project presence for homeowners browsing design-heavy categories.",
    rating: "4.2",
    startingPrice: "Subscription + ads",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.houzz.com/pro",
    logoSrc: "/Logos/houzz.jpeg",
    compareSlugs: ["houzz-pro-vs-thumbtack", "bark-vs-thumbtack"],
    standoutFeature: "Visual discovery; project storytelling",
    editorialParagraph:
      "Houzz Pro wins when your close rate depends on visual trust—kitchens, baths, and full remodels—not just the fastest phone answer.",
    pros: ["Strong for visual categories", "Project and ideation traffic", "Pro marketing tools"],
    cons: ["Less ideal for emergency trades", "Requires portfolio upkeep", "Not a pure pay-per-call shortcut"],
    pricingSummary: "Often subscription plus optional ad spend. Compare total cost to marketplaces using pipeline metrics.",
    alternativesSlug: null,
  },
];

/**
 * Full pick cards for registry only (alternatives pages, “more options”, trade hubs).
 * Kept separate from {@link TOP_PICKS} so the main roundup section stays four curated picks.
 */
export const LEAD_GENERATION_REGISTRY_SUPPLEMENT: SoftwarePickCardContent[] = [
  {
    slug: "bark",
    name: "Bark",
    badge: "Best for multi-category credit buying",
    comparisonTableBestFor: "Credit-based lead buying across categories",
    description:
      "Multi-category lead marketplace that uses credits and packs to test several service lines from one account.",
    rating: "4.0",
    startingPrice: "Credits / packs",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: false,
    visitUrl: "https://www.bark.com",
    logoSrc: "/Logos/bark.jpeg",
    compareSlugs: ["bark-vs-thumbtack"],
    standoutFeature: "Multi-category reach from one wallet",
    editorialParagraph:
      "Bark fits operators who want to experiment across categories without opening separate marketplace accounts for each trade.",
    pros: ["Multi-category reach", "Credit packs can simplify test budgets", "Fast setup for parallel line tests"],
    cons: ["Lead quality varies by category", "Still needs sharp qualification", "Shared economics like other marketplaces"],
    pricingSummary: "Credits and packs vary by category and region—model cost per booked job, not credits consumed.",
    alternativesSlug: null,
  },
  {
    slug: "homeadvisor",
    name: "HomeAdvisor",
    badge: "Best for homeowner marketplace scale",
    comparisonTableBestFor: "High-volume home service leads",
    description: "Established pay-per-lead marketplace with broad homeowner demand for residential trades.",
    rating: "4.1",
    startingPrice: "Pay per lead",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.homeadvisor.com",
    logoSrc: "/Logos/homeadvisor.jpeg",
    compareSlugs: ["angi-vs-homeadvisor", "thumbtack-vs-angi"],
    standoutFeature: "Large homeowner audience",
    editorialParagraph:
      "HomeAdvisor is a common parallel test to Angi and Thumbtack—success still hinges on dispute hygiene and phone speed.",
    pros: ["Large homeowner audience", "Familiar marketplace flow", "Works as a second channel with CRM tagging"],
    cons: ["Overlap with adjacent networks", "Margin depends on close rate", "Shared leads in competitive zips"],
    pricingSummary: "Typically pay per lead with market-specific quoting—confirm dispute and duplicate rules during onboarding.",
  },
  {
    slug: "yelp-ads",
    name: "Yelp Ads",
    badge: "Best for Yelp-native demand",
    comparisonTableBestFor: "Yelp-heavy metros and strong profiles",
    description: "Sponsored placements for businesses that already convert on Yelp searchers.",
    rating: "4.0",
    startingPrice: "Campaign budgets",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: false,
    visitUrl: "https://biz.yelp.com",
    logoSrc: "/Logos/yelp.png",
    compareSlugs: ["google-local-services-ads-vs-yelp-ads"],
    standoutFeature: "Amplifies a strong Yelp profile",
    editorialParagraph:
      "Yelp Ads reward accounts with photos, reviews, and Q&A dialed in—weak profiles rarely see efficient cost per booked job.",
    pros: ["Reaches Yelp browsers with intent", "Budget controls", "Pairs with reputation work you already do"],
    cons: ["Metro-dependent behavior", "Not ideal if customers never check Yelp", "Needs ongoing profile upkeep"],
    pricingSummary: "Campaign-based pricing; tune bids and geos using booked-job CPA.",
    alternativesSlug: null,
  },
  {
    slug: "facebook-lead-ads",
    name: "Facebook Lead Ads",
    badge: "Best for offer-led social campaigns",
    comparisonTableBestFor: "Paid social with fast CRM follow-up",
    description: "In-platform lead forms for Meta ads when creative, targeting, and instant response align.",
    rating: "4.1",
    startingPrice: "Campaign budgets",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.facebook.com/business/ads/lead-ads",
    logoSrc: "/Logos/facebook.jpeg",
    compareSlugs: ["google-local-services-ads-vs-yelp-ads", "thumbtack-vs-angi"],
    standoutFeature: "Granular audiences + instant forms",
    editorialParagraph:
      "Facebook Lead Ads work when offers, creative tests, and sub-five-minute follow-up are locked in—not as a drop-in replacement for search intent.",
    pros: ["Audience and creative control", "Fast in-app form fills", "Scales with iterative testing"],
    cons: ["Quality depends on targeting and speed-to-lead", "Not a substitute for urgent search channels", "Compliance and privacy care"],
    pricingSummary: "Auction-based; start with tight geos and measure cost per booked job after nurture.",
    alternativesSlug: null,
  },
];

export const MORE_LEAD_GEN_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "bark",
    name: "Bark",
    description: "Multi-category lead marketplace using credits.",
    reviewHref: getLeadGenerationReviewUrl("bark"),
    logoSrc: "/Logos/bark.jpeg",
  },
  {
    slug: "homeadvisor",
    name: "HomeAdvisor",
    description: "Established home-services marketplace leads.",
    reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
    logoSrc: "/Logos/homeadvisor.jpeg",
  },
  {
    slug: "yelp-ads",
    name: "Yelp Ads",
    description: "Sponsored visibility for Yelp searchers.",
    reviewHref: getLeadGenerationReviewUrl("yelp-ads"),
    logoSrc: "/Logos/yelp.png",
  },
  {
    slug: "facebook-lead-ads",
    name: "Facebook Lead Ads",
    description: "Paid social lead capture for local campaigns.",
    reviewHref: getLeadGenerationReviewUrl("facebook-lead-ads"),
    logoSrc: "/Logos/facebook.jpeg",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for contractors",
    href: getLeadGenerationBestForUrl("contractors"),
    description: "Fast follow-up and dispute-ready ops.",
  },
  {
    label: "Best for HVAC",
    href: getLeadGenerationBestForUrl("hvac"),
    description: "Seasonal demand and emergency calls.",
  },
  {
    label: "Best for plumbing",
    href: getLeadGenerationBestForUrl("plumbing"),
    description: "Emergency vs planned job mix.",
  },
  {
    label: "Best for home services",
    href: getLeadGenerationBestForUrl("home-services"),
    description: "General local service demand.",
  },
  {
    label: "Best for cleaning services",
    href: getLeadGenerationBestForUrl("cleaning-services"),
    description: "Recurring vs one-time bookings.",
  },
];

export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "Contractors", href: getLeadGenerationBestForUrl("contractors") },
  { label: "HVAC", href: getLeadGenerationBestForUrl("hvac") },
  { label: "Plumbing", href: getLeadGenerationBestForUrl("plumbing") },
  { label: "Electricians", href: getLeadGenerationBestForUrl("electricians") },
  { label: "Roofing", href: getLeadGenerationBestForUrl("roofing") },
  { label: "Landscaping", href: getLeadGenerationBestForUrl("landscaping") },
  { label: "Cleaning services", href: getLeadGenerationBestForUrl("cleaning-services") },
  { label: "Home services", href: getLeadGenerationBestForUrl("home-services") },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
  { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
  { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best lead generation tool for contractors?",
    a: "The best tool is the one you can answer quickly and measure as cost per booked job. Most teams shortlist Thumbtack, Angi, and Google Local Services Ads—then pick based on geography and lead quality.",
  },
  {
    q: "Are paid lead marketplaces worth it?",
    a: "They can be—if you dispute bad matches, track margins, and staff phones. If not, you’ll outperform with fewer, higher-quality channels.",
  },
  {
    q: "How do Google Local Services Ads differ from Yelp Ads?",
    a: "LSA targets Google searchers with screened listings; Yelp Ads reach people browsing Yelp. See our comparison for fit by customer research behavior.",
  },
];
