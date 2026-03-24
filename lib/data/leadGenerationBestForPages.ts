import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { getLeadGenerationCompareUrl, getLeadGenerationReviewUrl } from "@/lib/routes";

const GUIDES = "/lead-generation/guides";

const featuredProducts: BestForFeaturedProduct[] = [
  {
    slug: "thumbtack",
    name: "Thumbtack",
    badge: "Best marketplace starter",
    description: "Fast pay-per-lead testing across local categories with self-serve budgets.",
    rating: "4.4",
    startingPrice: "Pay per lead",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
    visitUrl: "https://www.thumbtack.com",
    logoSrc: "/Logos/thumbtack.jpeg",
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    badge: "Best for urgent search",
    description: "Google-screened placements when homeowners search with immediate intent.",
    rating: "4.5",
    startingPrice: "Pay per lead",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    visitUrl: "https://ads.google.com/local-services-ads",
    logoSrc: "/Logos/google.jpeg",
  },
  {
    slug: "angi",
    name: "Angi",
    badge: "Best directory + bundles",
    description: "Brand-backed home services exposure when bundles match your pipeline.",
    rating: "4.3",
    startingPrice: "Quote / bundles",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    visitUrl: "https://www.angi.com",
    logoSrc: "/Logos/angi.jpeg",
  },
];

const comparisonTableRows: BestForTableRow[] = [
  {
    slug: "thumbtack",
    name: "Thumbtack",
    logoSrc: "/Logos/thumbtack.jpeg",
    bestFor: "Pay-per-lead marketplace",
    startingPrice: "Pay per lead",
    standoutFeature: "Flexible budgets",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    logoSrc: "/Logos/google.jpeg",
    bestFor: "High-intent Google callers",
    startingPrice: "Pay per lead",
    standoutFeature: "Screened listing",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
  },
  {
    slug: "angi",
    name: "Angi",
    logoSrc: "/Logos/angi.jpeg",
    bestFor: "Home services brand",
    startingPrice: "Quote / bundles",
    standoutFeature: "Bundled programs",
    reviewHref: getLeadGenerationReviewUrl("angi"),
  },
];

const relatedReviews: BestForReviewLink[]  = [
  { name: "Thumbtack", href: getLeadGenerationReviewUrl("thumbtack") },
  { name: "Angi", href: getLeadGenerationReviewUrl("angi") },
  { name: "Houzz Pro", href: getLeadGenerationReviewUrl("houzz-pro") },
  { name: "Bark", href: getLeadGenerationReviewUrl("bark") },
  { name: "Google Local Services Ads", href: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Yelp Ads", href: getLeadGenerationReviewUrl("yelp-ads") },
  { name: "Facebook Lead Ads", href: getLeadGenerationReviewUrl("facebook-lead-ads") },
  { name: "HomeAdvisor", href: getLeadGenerationReviewUrl("homeadvisor") },
];

const relatedComparisons: BestForComparisonLink[] = [
  { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
  { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
  { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
];

function makePage(
  useCase: string,
  title: string,
  subtitle: string,
  introParagraph: string,
  editorialGuidance: BestForEditorialBlock[],
  whyThesePicks: BestForEditorialBlock[],
  faqItems: BestForFaqItem[],
  relatedGuides: BestForGuideLink[]
): BestForTemplateProps {
  const label = useCase.replace(/-/g, " ");
  return {
    title,
    subtitle,
    useCase,
    categoryHref: "/lead-generation",
    categoryLabel: "Lead Generation",
    introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top lead generation picks for ${label}.`,
    editorialSub: `What to evaluate when you're buying leads as ${label}.`,
    whyThesePicksSub: `Why these channels fit ${label}.`,
    seeAlsoBlock: {
      roundupLabel: "Best lead generation tools (2026) — full roundup",
      roundupHref: "/lead-generation/best-lead-generation-tools",
      compareLabel: "Compare lead generation platforms",
      compareHref: "/lead-generation/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance,
    whyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides,
    faqItems,
  };
}

export const LEAD_GENERATION_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  contractors: makePage(
    "contractors",
    "Best Lead Generation Tools for Contractors (2026)",
    "Marketplaces, Google LSA, and directory leads—picked for trade businesses that live on the phone.",
    "Contractors need fast response, clear service areas, and economics measured as margin after lead refunds—not vanity lead counts.",
    [
      { heading: "Speed to lead", body: "If you cannot answer in minutes, shared marketplaces burn budget. Fix routing before scaling." },
      { heading: "Dispute hygiene", body: "Learn each vendor’s dispute window; bad matches are inevitable at volume." },
      { heading: "Blend channels", body: "Pair rented leads with reviews, site SEO, and referrals to reduce single-vendor risk." },
    ],
    [
      { heading: "Thumbtack", body: "Best when you want flexible pay-per-lead testing with broad category coverage." },
      { heading: "Google Local Services Ads", body: "Best when homeowners start on Google with urgent intent and you’re eligible." },
      { heading: "Angi", body: "Best when Angi’s brand resonates in your market and bundles match your sales motion." },
    ],
    [
      {
        q: "What lead source should contractors try first?",
        a: "Most teams pilot Thumbtack or Google LSA—whichever matches how customers find you today.",
      },
      {
        q: "How do I know if leads are profitable?",
        a: "Track cost per booked job and gross margin after refunds for 30–60 days before increasing spend.",
      },
    ],
    [
      { label: "How to get leads for contractors", href: `${GUIDES}/how-to-get-leads-for-contractors` },
      { label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best Lead Generation Tools for HVAC (2026)",
    "High-intent emergency and seasonal demand—balance LSA with marketplaces.",
    "HVAC swings between urgent calls and tune-up campaigns; pick channels that match the job types you want this quarter.",
    [
      { heading: "Emergency intent", body: "Search and LSA often outperform social for same-day calls—if you’re eligible and staffed." },
      { heading: "Seasonality", body: "Raise caps before peaks; cut spend in slow weeks to protect margin." },
    ],
    [
      { heading: "Google Local Services Ads", body: "Strong when searchers need help now and you can answer live." },
      { heading: "Thumbtack", body: "Useful for marketplace volume across maintenance and install keywords." },
      { heading: "Angi", body: "Helpful when homeowners browse directory brands for planned replacements." },
    ],
    [{ q: "HVAC: LSA or Thumbtack?", a: "Often both—LSA for urgent search, Thumbtack for broader local prospecting." }],
    [
      { label: "How Google LSA works", href: `${GUIDES}/how-google-local-services-ads-work` },
      { label: "Lead strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` },
    ]
  ),
  plumbing: makePage(
    "plumbing",
    "Best Lead Generation Tools for Plumbers (2026)",
    "Capture emergency demand and planned jobs without overpaying for mismatched leads.",
    "Plumbers win or lose on phone speed—choose vendors you can dispute cleanly when dispatch rules differ from the lead’s story.",
    [
      { heading: "Dispatch fit", body: "Define what jobs you want—drains, water heaters, remodel partners—to filter mentally even when leads are shared." },
      { heading: "After-hours", body: "If you roll to on-call, make sure notifications reach the tech—not voicemail dead-ends." },
    ],
    [
      { heading: "Thumbtack", body: "Flexible budgets for mixed plumbing keywords." },
      { heading: "Google Local Services Ads", body: "High-intent callers if you’re eligible in plumbing categories." },
      { heading: "Angi / HomeAdvisor", body: "Parallel tests when directory shoppers match your ticket size." },
    ],
    [{ q: "Too many bad plumbing leads?", a: "Dispute early, tighten service definitions, and test a second channel before blaming one vendor." }],
    [{ label: "How to choose a lead platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  electricians: makePage(
    "electricians",
    "Best Lead Generation Tools for Electricians (2026)",
    "From service calls to panel upgrades—pick channels that match permit-heavy work or quick service tickets.",
    "Electrical work ranges from small service to large projects; align lead sources with the ticket sizes your crew actually wants.",
    [
      { heading: "Safety and qualification", body: "Ask discovery questions fast to avoid sending techs to out-of-scope jobs." },
      { heading: "Multi-trade overlap", body: "If you also run HVAC, watch duplicate leads across categories." },
    ],
    [
      { heading: "Google Local Services Ads", body: "Strong for urgent electrical keywords where searchers call immediately." },
      { heading: "Thumbtack", body: "Broad local lead flow for service and install." },
      { heading: "Angi", body: "Useful for planned projects where homeowners research brands." },
    ],
    [{ q: "Electricians and exclusivity?", a: "True exclusivity is rare in marketplaces—win on speed, reviews, and follow-up." }],
    [{ label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` }]
  ),
  roofing: makePage(
    "roofing",
    "Best Lead Generation Tools for Roofers (2026)",
    "Storm chasing and retail replacement leads need different math—segment your campaigns.",
    "Roofing has retail and event-driven demand; measure channels separately so storm spend doesn’t mask weak retail close rates.",
    [
      { heading: "Retail vs CAT", body: "Don’t blend economics—track close rate by source and geography." },
      { heading: "Visual proof", body: "Portfolio platforms can complement paid leads for larger tickets." },
    ],
    [
      { heading: "Angi", body: "Common directory test for replacement-minded homeowners." },
      { heading: "Thumbtack", body: "Flexible marketplace tests across repair and replace intents." },
      { heading: "Google Local Services Ads", body: "Retail search volume when eligible—watch budget on competitive keywords." },
    ],
    [{ q: "Should roofers use social leads?", a: "Optional—often secondary to search and marketplaces for urgent leaks." }],
    [{ label: "Lead strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` }]
  ),
  landscaping: makePage(
    "landscaping",
    "Best Lead Generation Tools for Landscapers (2026)",
    "Seasonal funnels for maintenance and install—avoid buying snow leads if you only mow.",
    "Landscaping leads are seasonal; adjust budgets monthly and qualify for recurring routes vs one-off cleanups.",
    [
      { heading: "Route density", body: "Leads far outside your cluster kill margin—set geo rules mentally or in CRM." },
      { heading: "Visual platforms", body: "Portfolio-driven channels can assist high-ticket design work." },
    ],
    [
      { heading: "Thumbtack", body: "Good for testing local landscaping demand quickly." },
      { heading: "Angi", body: "Helpful where homeowners research landscapers in directory ecosystems." },
      { heading: "Facebook Lead Ads", body: "Useful for promos when you have creative and fast follow-up." },
    ],
    [{ q: "LSA for landscaping?", a: "If eligible and search volume exists, test small—many markets lean marketplace or social." }],
    [{ label: "How to get leads for contractors", href: `${GUIDES}/how-to-get-leads-for-contractors` }]
  ),
  "cleaning-services": makePage(
    "cleaning-services",
    "Best Lead Generation Tools for Cleaning Services (2026)",
    "Recurring route customers vs one-time deep cleans—qualify fast.",
    "Cleaning businesses win on recurring revenue; use lead channels that match the ticket type you can staff.",
    [
      { heading: "Recurrence", body: "Ask about frequency on the first call—don’t optimize for one-offs if you need routes." },
      { heading: "Marketplace promos", body: "Directory brands can help when homeowners compare cleaners actively." },
    ],
    [
      { heading: "Thumbtack", body: "Fast tests for residential cleaning keywords." },
      { heading: "Angi", body: "Strong when homeowners browse established home-services brands." },
      { heading: "Google Local Services Ads", body: "If eligible, captures high-intent move-out or deep clean searches." },
    ],
    [{ q: "Low margins on cleaning leads?", a: "Tighten frequency filters and upsell packages—raise prices before blaming the marketplace." }],
    [{ label: "How to choose a lead platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  "home-services": makePage(
    "home-services",
    "Best Lead Generation Tools for Home Services (2026)",
    "General local operators balancing many trades—start with two channels max.",
    "Home services is broad: nail dispatch and measurement before stacking five vendors.",
    [
      { heading: "Focus", body: "Master one marketplace + one search channel before expanding." },
      { heading: "CRM hygiene", body: "Tag duplicates across Angi, HomeAdvisor, and Thumbtack to see true CPA." },
    ],
    [
      { heading: "Thumbtack", body: "Flexible entry point for multi-trade operators." },
      { heading: "Google Local Services Ads", body: "Adds high-intent calls where categories qualify." },
      { heading: "Angi", body: "Adds directory-centric demand in many metros." },
    ],
    [{ q: "Where should home services start?", a: "Thumbtack + Google LSA is a common stack when eligible—read our comparisons." }],
    [
      { label: "Lead strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` },
      { label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` },
    ]
  ),
};

export function getLeadGenerationBestForPageProps(slug: string): BestForTemplateProps | null {
  return LEAD_GENERATION_BEST_FOR_BY_SLUG[slug] ?? null;
}

