/**
 * Lead generation tool reviews — hub parity with website builders / payroll clusters.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getLeadGenerationBestForUrl,
  getLeadGenerationCompareUrl,
  getLeadGenerationReviewUrl,
} from "@/lib/routes";

export type LeadGenerationReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const CATEGORY_HREF = "/lead-generation";
const ROUNDUP_HREF = "/lead-generation/best-lead-generation-tools";
const COMPARE_HUB = "/lead-generation/compare";
const GUIDES_HREF = "/lead-generation/guides";

const SCENARIOS = [
  { label: "Contractors", href: getLeadGenerationBestForUrl("contractors") },
  { label: "HVAC", href: getLeadGenerationBestForUrl("hvac") },
  { label: "Plumbing", href: getLeadGenerationBestForUrl("plumbing") },
  { label: "Electricians", href: getLeadGenerationBestForUrl("electricians") },
  { label: "Home services", href: getLeadGenerationBestForUrl("home-services") },
  { label: "Cleaning services", href: getLeadGenerationBestForUrl("cleaning-services") },
];

const METHODOLOGY: LeadGenerationReviewData["methodology"] = {
  title: "How we review lead generation tools",
  sub: "Local service business lens.",
  introParagraph: "We evaluate paid lead products for local trades: lead quality signals, dispute policies, speed-to-lead, and real economics—not vanity metrics.",
  bullets: [
    "We compare marketplace, search, and social lead models on intent and follow-up fit.",
    "We stress-test pricing transparency and refund or credit rules.",
    "We map each tool to how service businesses actually book jobs in the field.",
  ],
};

const LG_SHELL: Pick<
  LeadGenerationReviewData,
  | "category"
  | "categoryHref"
  | "methodology"
  | "compareSectionTitle"
  | "bestPayrollSoftwareHref"
  | "compareHubHref"
  | "compareHubLabel"
  | "bestRoundupLabel"
  | "bestForSectionTitle"
  | "bestForSectionSub"
  | "scenarioLinks"
  | "guideHubHref"
  | "guideHubLabel"
  | "popularIndustryLinks"
> = {
  category: "Lead Generation",
  categoryHref: CATEGORY_HREF,
  methodology: METHODOLOGY,
  compareSectionTitle: "Compare with other lead generation platforms",
  bestPayrollSoftwareHref: ROUNDUP_HREF,
  compareHubHref: COMPARE_HUB,
  compareHubLabel: "Compare lead generation platforms",
  bestRoundupLabel: "Best lead generation tools (2026) — full roundup",
  bestForSectionTitle: "Best lead generation tools for different use cases",
  bestForSectionSub: "Scenario picks for local service businesses.",
  scenarioLinks: SCENARIOS,
  guideHubHref: GUIDES_HREF,
  guideHubLabel: "Lead generation guides",
  popularIndustryLinks: [
    { label: "Best for contractors", href: getLeadGenerationBestForUrl("contractors") },
    { label: "Best for HVAC", href: getLeadGenerationBestForUrl("hvac") },
    { label: "Best for plumbing", href: getLeadGenerationBestForUrl("plumbing") },
    { label: "Best for electricians", href: getLeadGenerationBestForUrl("electricians") },
    { label: "Best for roofing", href: getLeadGenerationBestForUrl("roofing") },
    { label: "Best for landscaping", href: getLeadGenerationBestForUrl("landscaping") },
  ],
};

function alt(name: string, slug: string, description: string, logo: string) {
  return { name, href: getLeadGenerationReviewUrl(slug), description, logoSrc: logo };
}

function rb(tool: string): NonNullable<LeadGenerationReviewData["ratingBreakdown"]> {
  return [
    { category: "Features", score: "4.5", explanation: `${tool} covers the workflows local teams need to buy, dispute, and follow up on leads.` },
    { category: "Pricing", score: "4.2", explanation: "Spend varies heavily by metro and category—model cost per booked job, not per raw name." },
    { category: "Ease of Use", score: "4.4", explanation: "Self-serve campaign controls are mostly approachable; verification steps add onboarding time." },
    { category: "Support", score: "4.1", explanation: "Support quality depends on spend tier; marketplace accounts often rely on help centers." },
    { category: "Integrations", score: "4.0", explanation: "Expect light CRM hooks; most teams export leads or use call tracking alongside." },
  ];
}

const RELATED_READING = [
  { label: "CRM software hub", href: "/crm" },
  { label: "Website builders hub", href: "/website-builders" },
];

const reviews: Record<string, LeadGenerationReviewData> = {
  thumbtack: {
    ...LG_SHELL,
    toolName: "Thumbtack",
    rating: "4.4",
    startingPrice: "Pay per lead",
    bestFor: "Local pros who want flexible pay-per-lead marketplace volume",
    visitUrl: "https://www.thumbtack.com",
    logoSrc: "/Logos/thumbtack.jpeg",
    quickVerdict: "Thumbtack is the default marketplace shortlist for fast local lead buying across trades.",
    quickVerdictParagraphs: [
      "Thumbtack works when you answer fast and track booked-job math. The marketplace model rewards short response times and clear service areas.",
      "Lead quality swings by category and zip—use disputes intentionally and don’t scale spend until you know your close rate.",
      "Pair this review with our Thumbtack vs Angi comparison and the contractors best-for page when you choose budgets.",
    ],
    ratingBreakdown: rb("Thumbtack"),
    compareLinks: [
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
      { label: "Bark vs Thumbtack", href: getLeadGenerationCompareUrl("bark-vs-thumbtack") },
      { label: "Houzz Pro vs Thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
    ],
    pros: ["Broad trade coverage", "Self-serve budgets", "Works for many local categories"],
    cons: ["Shared leads in competitive markets", "Quality varies by location", "Needs disciplined phone follow-up"],
    bestForEditorial: "Owner-operators and small teams that can answer leads quickly and measure cost per booked job.",
    whoShouldAvoid: "Teams that cannot staff inbound calls or that need exclusive high-ticket leads only.",
    pricingSummary: "Typically pay-per-lead. Confirm dispute windows and credits in your market before scaling.",
    features: ["Lead marketplace", "Budget controls", "Messaging tools", "Profile and review surface"],
    keyFeatures: [
      { name: "Pay-per-lead buying", description: "Set budgets and categories; pay when consumers reach out." },
      { name: "Fast lead routing", description: "Speed matters—configure notifications to win shared leads." },
    ],
    integrations: ["CRM exports (varies)", "Call tracking partners"],
    integrationsIntro: "Most teams pair Thumbtack with a simple CRM or spreadsheet plus call tracking.",
    contractorUse: ["Emergency trades answering fast", "Seasonal staffing for burst demand", "Testing new zip codes"],
    alternatives: [
      alt("Angi", "angi", "Home services brand + lead bundles", "/Logos/angi.jpeg"),
      alt("HomeAdvisor", "homeadvisor", "Residential marketplace scale", "/Logos/homeadvisor.jpeg"),
      alt("Google Local Services Ads", "google-local-services-ads", "High-intent Google callers", "/Logos/google.jpeg"),
    ],
    faqs: [
      { q: "Is Thumbtack good for contractors?", a: "Yes when you can answer quickly and track margin after refunds. If not, fix ops before scaling spend." },
      { q: "How do I reduce bad leads?", a: "Tighten service definitions, dispute out-of-scope matches per policy, and review duplicate rules." },
    ],
    relatedReading: RELATED_READING,
  },
  angi: {
    ...LG_SHELL,
    toolName: "Angi",
    rating: "4.3",
    startingPrice: "Quote / bundles",
    bestFor: "Home service brands that want Angi discovery plus lead products",
    visitUrl: "https://www.angi.com",
    logoSrc: "/Logos/angi.jpeg",
    quickVerdict: "Angi pairs directory strength with paid lead formats for residential trades.",
    quickVerdictParagraphs: [
      "Angi fits when homeowners already recognize the brand in your market.",
      "Compare bundled packages to pure pay-per-lead tools using the same follow-up script.",
      "Read Angi vs HomeAdvisor when you’re narrowing marketplaces.",
    ],
    ratingBreakdown: rb("Angi"),
    compareLinks: [
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
      { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
    ],
    pros: ["Recognized consumer brand", "Multiple ad formats", "Strong home services focus"],
    cons: ["Bundle complexity", "Still marketplace economics", "Needs fast follow-up"],
    bestForEditorial: "Home improvement, cleaning, and related residential trades with operational speed.",
    whoShouldAvoid: "Teams that want fully exclusive enterprise leads without marketplace overlap.",
    pricingSummary: "Often quoted; ask how credits, refunds, and duplicates are handled.",
    features: ["Directory presence", "Lead products", "Campaign tooling"],
    keyFeatures: [
      { name: "Brand-backed leads", description: "Consumers may convert differently than generic classified traffic." },
      { name: "Bundled programs", description: "Compare contract terms to your pay-per-lead alternatives." },
    ],
    integrations: ["Marketing stacks (varies)", "Call tracking"],
    integrationsIntro: "Export leads or route into CRM once you pick a single source of truth.",
    contractorUse: ["Kitchen and bath", "Handyman", "Cleaning"],
    alternatives: [
      alt("Thumbtack", "thumbtack", "Flexible marketplace budgets", "/Logos/thumbtack.jpeg"),
      alt("HomeAdvisor", "homeadvisor", "Parallel marketplace", "/Logos/homeadvisor.jpeg"),
      alt("Yelp Ads", "yelp-ads", "Yelp-first metros", "/Logos/yelp.png"),
    ],
    faqs: [
      { q: "Angi vs Thumbtack?", a: "Angi leans brand + bundles; Thumbtack leans flexible pay-per-lead—test both if budget allows." },
    ],
    relatedReading: RELATED_READING,
  },
  "houzz-pro": {
    ...LG_SHELL,
    toolName: "Houzz Pro",
    rating: "4.2",
    startingPrice: "Subscription + ads",
    bestFor: "Design-build and remodel pros with portfolio-driven sales",
    visitUrl: "https://www.houzz.com/pro",
    logoSrc: "/Logos/houzz.jpeg",
    quickVerdict: "Houzz Pro wins when visuals and project stories drive trust—not emergency calls.",
    quickVerdictParagraphs: [
      "Great for kitchen, bath, and full remodel pipelines where photos matter.",
      "Less ideal for ultra-urgent emergency trades that live on search volume alone.",
    ],
    ratingBreakdown: rb("Houzz Pro"),
    compareLinks: [{ label: "Houzz Pro vs Thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") }],
    pros: ["Visual discovery", "Project storytelling", "Pro marketing features"],
    cons: ["Heavier content upkeep", "Not a pure emergency-lead channel", "Subscription + ads stack"],
    bestForEditorial: "Remodelers and designers who win on portfolios.",
    whoShouldAvoid: "Trade businesses without photo assets or design-heavy sales cycles.",
    pricingSummary: "Subscription plus optional ads—compare to marketplace cost per booked job.",
    features: ["Profile", "Lead manager", "Ads", "Idea books exposure"],
    keyFeatures: [{ name: "Visual brand", description: "Projects and photos influence homeowner trust." }],
    integrations: ["Light CRM handoffs"],
    contractorUse: ["Design-build", "Architect-led projects"],
    alternatives: [
      alt("Thumbtack", "thumbtack", "Fast marketplace testing", "/Logos/thumbtack.jpeg"),
      alt("Google Local Services Ads", "google-local-services-ads", "Search intent leads", "/Logos/google.jpeg"),
    ],
    faqs: [{ q: "Is Houzz only for designers?", a: "It’s strongest when visuals drive your sales motion—even for contractors with strong photo libraries." }],
    relatedReading: RELATED_READING,
  },
  bark: {
    ...LG_SHELL,
    toolName: "Bark",
    rating: "4.0",
    startingPrice: "Credits / lead packs",
    bestFor: "Multi-category pros experimenting with credit-based lead buying",
    visitUrl: "https://www.bark.com",
    logoSrc: "/Logos/bark.jpeg",
    quickVerdict: "Bark broadens categories beyond a single trade vertical in one account.",
    quickVerdictParagraphs: ["Useful for agencies or operators listing multiple services.", "Compare Bark vs Thumbtack when speed-to-launch matters."],
    ratingBreakdown: rb("Bark"),
    compareLinks: [{ label: "Bark vs Thumbtack", href: getLeadGenerationCompareUrl("bark-vs-thumbtack") }],
    pros: ["Multi-category", "Credit model clarity for some teams"],
    cons: ["Quality variance", "Needs tight qualification"],
    bestForEditorial: "Operators testing several service lines or regions.",
    whoShouldAvoid: "Teams needing hyper-specialized exclusive leads only.",
    pricingSummary: "Credits and packs vary—track cost per booked job by category.",
    features: ["Credit wallet", "Lead notifications", "Categories"],
    keyFeatures: [{ name: "Credits", description: "Buy packs and spend down by accepted leads." }],
    integrations: ["Manual CRM export"],
    contractorUse: ["Multi-service operators"],
    alternatives: [
      alt("Thumbtack", "thumbtack", "US local marketplace depth", "/Logos/thumbtack.jpeg"),
      alt("Angi", "angi", "Home services directories", "/Logos/angi.jpeg"),
    ],
    faqs: [{ q: "Bark vs Thumbtack?", a: "Compare duplicate policies and category strength in your metro." }],
    relatedReading: RELATED_READING,
  },
  "google-local-services-ads": {
    ...LG_SHELL,
    toolName: "Google Local Services Ads",
    rating: "4.5",
    startingPrice: "Pay per lead",
    bestFor: "Verified local pros capturing urgent Google search calls",
    visitUrl: "https://ads.google.com/local-services-ads",
    logoSrc: "/Logos/google.jpeg",
    quickVerdict: "LSA converts when homeowners pick Google first—and you keep profiles and budgets tight.",
    quickVerdictParagraphs: [
      "Screened listings increase trust but require verification work.",
      "Dispute bad leads early; competition swings cost per call.",
    ],
    ratingBreakdown: rb("Google Local Services Ads"),
    compareLinks: [{ label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") }],
    pros: ["High-intent Google traffic", "Screened badge", "Call-focused"],
    cons: ["Eligibility limits", "Auction pressure", "Setup discipline required"],
    bestForEditorial: "Trades eligible in their category with strong phone handling.",
    whoShouldAvoid: "Businesses outside eligible categories or regions.",
    pricingSummary: "Pay per lead; set weekly caps until your close rate is known.",
    features: ["Screened profile", "Disputes", "Budget caps"],
    keyFeatures: [{ name: "Google Screened", description: "Trust signal on high-intent local searches." }],
    integrations: ["Google Ads ecosystem"],
    contractorUse: ["HVAC", "Plumbing", "Electrical", "Garage doors (eligible categories)"],
    alternatives: [
      alt("Yelp Ads", "yelp-ads", "Yelp searchers", "/Logos/yelp.png"),
      alt("Thumbtack", "thumbtack", "Marketplace complement", "/Logos/thumbtack.jpeg"),
    ],
    faqs: [{ q: "Are LSAs worth it?", a: "Often yes for eligible trades—test at small weekly caps and measure booked revenue." }],
    relatedReading: RELATED_READING,
  },
  "yelp-ads": {
    ...LG_SHELL,
    toolName: "Yelp Ads",
    rating: "4.0",
    startingPrice: "Campaign budgets",
    bestFor: "Businesses that already win on Yelp reviews and profile completeness",
    visitUrl: "https://biz.yelp.com",
    logoSrc: "/Logos/yelp.png",
    quickVerdict: "Yelp Ads amplify existing profile strength—weak profiles see weak returns.",
    quickVerdictParagraphs: ["Fix photos, reviews, and Q&A before raising spend.", "Compare to Google LSA with our head-to-head."],
    ratingBreakdown: rb("Yelp Ads"),
    compareLinks: [{ label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") }],
    pros: ["Captures Yelp searchers", "Familiar local product"],
    cons: ["Platform-dependent", "Needs strong profile"],
    bestForEditorial: "Metro-heavy trades where consumers default to Yelp.",
    whoShouldAvoid: "Markets where customers never check Yelp.",
    pricingSummary: "Budget-based; tune by cost per booked job.",
    features: ["Sponsored placements", "Budget controls"],
    keyFeatures: [{ name: "Sponsored results", description: "Boost visibility in Yelp search for your services." }],
    integrations: ["Yelp business tools"],
    contractorUse: ["Restaurants-adjacent home services", "Metro services"],
    alternatives: [
      alt("Google Local Services Ads", "google-local-services-ads", "Google-first buyers", "/Logos/google.jpeg"),
      alt("Angi", "angi", "Directory + marketplace", "/Logos/angi.jpeg"),
    ],
    faqs: [{ q: "Yelp vs Google?", a: "See our comparison—intent and profile behavior differ." }],
    relatedReading: RELATED_READING,
  },
  "facebook-lead-ads": {
    ...LG_SHELL,
    toolName: "Facebook Lead Ads",
    rating: "4.1",
    startingPrice: "Campaign budgets",
    bestFor: "Teams running paid social with CRM follow-up",
    visitUrl: "https://www.facebook.com/business/ads/lead-ads",
    logoSrc: "/Logos/facebook.jpeg",
    quickVerdict: "Facebook Lead Ads work when creative, targeting, and instant follow-up align.",
    quickVerdictParagraphs: [
      "Great for offers, promos, and audiences you can target precisely.",
      "Not a replacement for high-intent search—blend with LSA or marketplaces.",
    ],
    ratingBreakdown: rb("Facebook Lead Ads"),
    compareLinks: [
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
      { label: "Paid vs organic leads (guide)", href: `${GUIDES_HREF}/paid-vs-organic-leads` },
    ],
    pros: ["Granular audience control", "Fast form fills", "Scales with creative tests"],
    cons: ["Lead quality depends on targeting", "Needs quick follow-up", "Compliance and privacy care"],
    bestForEditorial: "Marketing-led contractors with SMS/email nurture.",
    whoShouldAvoid: "Teams without fast lead response or creative capacity.",
    pricingSummary: "Auction-based; start with tight geos and proof offers.",
    features: ["Instant forms", "Campaign optimization", "Creative testing"],
    keyFeatures: [{ name: "In-platform leads", description: "Users submit without leaving the app." }],
    integrations: ["CRM webhooks", "Zapier-style stacks"],
    contractorUse: ["Promotional offers", "Seasonal demand generation"],
    alternatives: [
      alt("Google Local Services Ads", "google-local-services-ads", "Search intent", "/Logos/google.jpeg"),
      alt("Thumbtack", "thumbtack", "Marketplace leads", "/Logos/thumbtack.jpeg"),
    ],
    faqs: [{ q: "Are Facebook leads low quality?", a: "They can be—fix targeting, offers, and sub-5-minute follow-up." }],
    relatedReading: RELATED_READING,
  },
  homeadvisor: {
    ...LG_SHELL,
    toolName: "HomeAdvisor",
    rating: "4.1",
    startingPrice: "Pay per lead",
    bestFor: "Residential pros comfortable with shared marketplace economics",
    visitUrl: "https://www.homeadvisor.com",
    logoSrc: "/Logos/homeadvisor.jpeg",
    quickVerdict: "HomeAdvisor delivers scale when your ops can handle marketplace variance.",
    quickVerdictParagraphs: [
      "Pair with CRM tagging to track duplicates across vendors.",
      "Compare Angi vs HomeAdvisor before multi-year commitments.",
    ],
    ratingBreakdown: rb("HomeAdvisor"),
    compareLinks: [
      { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
    ],
    pros: ["Large homeowner audience", "Established flows"],
    cons: ["Overlap with other networks", "Margin depends on close rate"],
    bestForEditorial: "Home improvement and repair trades ready for fast response.",
    whoShouldAvoid: "Low-margin trades that cannot absorb refund variance.",
    pricingSummary: "Pay per lead; validate dispute rules in onboarding.",
    features: ["Marketplace leads", "Profile"],
    keyFeatures: [{ name: "Homeowner marketplace", description: "Connections to homeowners requesting services." }],
    integrations: ["CRM export"],
    contractorUse: ["Remodel adjacent", "Handyman", "Cleaning"],
    alternatives: [
      alt("Angi", "angi", "Bundled competitor", "/Logos/angi.jpeg"),
      alt("Thumbtack", "thumbtack", "Flexible marketplace", "/Logos/thumbtack.jpeg"),
    ],
    faqs: [{ q: "Angi vs HomeAdvisor for my zip?", a: "Test modest spend on both with identical scripts; keep the winner on booked-job margin." }],
    relatedReading: RELATED_READING,
  },
};

export function getLeadGenerationReviewBySlug(slug: string): LeadGenerationReviewData | null {
  return reviews[slug] ?? null;
}

export function getLeadGenerationReviewSlugs(): string[] {
  return Object.keys(reviews);
}
