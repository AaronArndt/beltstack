/**
 * Lead generation tool reviews — hub parity with website builders / payroll clusters.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getLeadGenerationAlternativeUrl,
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
  { label: "Best website builders for contractors", href: "/website-builders/best-for/contractors" },
  { label: "CRM software hub for lead follow-up", href: "/crm" },
  { label: "Accounting software hub", href: "/accounting" },
];

const reviews: Record<string, LeadGenerationReviewData> = {
  thumbtack: {
    ...LG_SHELL,
    toolName: "Thumbtack",
    rating: "4.4",
    startingPrice: "No membership fee; pay per lead",
    bestFor: "Local pros who want flexible pay-per-lead marketplace volume",
    visitUrl: "https://www.thumbtack.com",
    logoSrc: "/Logos/thumbtack.jpeg",
    quickVerdict: "Thumbtack is the default marketplace shortlist for fast local lead buying across trades.",
    quickVerdictParagraphs: [
      "Thumbtack works when you answer fast and track booked-job math. There is no membership or annual fee on Thumbtack’s Pro page; you pay per lead under targeting, max lead prices, and a weekly budget.",
      "Thumbtack staff have said you are charged for direct leads when the customer reaches out. Lead quality swings by category and zip—non-response is not a published refund reason. Don’t scale spend until you know your close rate.",
      "Pair this review with our Thumbtack vs Angi comparison and the contractors best-for page when you choose budgets.",
    ],
    ratingBreakdown: rb("Thumbtack"),
    compareLinks: [
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
      { label: "Bark vs Thumbtack", href: getLeadGenerationCompareUrl("bark-vs-thumbtack") },
      { label: "Houzz Pro vs Thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
    ],
    pros: ["Broad trade coverage", "Self-serve budgets", "Works for many local categories"],
    cons: ["Limited competition is not exclusivity", "Quality varies by location", "Needs disciplined phone follow-up"],
    bestForEditorial: "Owner-operators and small teams that can answer leads quickly and measure cost per booked job.",
    whoShouldAvoid: "Teams that cannot staff inbound calls or that need exclusive high-ticket leads only.",
    pricingSummary:
      "No join, annual, or membership fee (Thumbtack Pro page, August 2026). You pay a lead price when a qualifying connection happens—Thumbtack staff: direct leads are charged when the customer reaches out. Set max lead prices and a weekly budget. There is no public national CPL table. Confirm refund rules in-account; a customer not hiring you is not automatically refundable.",
    features: ["Lead marketplace", "Budget controls", "Messaging tools", "Profile and review surface"],
    keyFeatures: [
      { name: "Pay-per-lead buying", description: "Set targeting, max lead prices, and a weekly budget. Direct leads are charged when the customer reaches out—not when you browse a feed." },
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
      { q: "How do I reduce bad leads?", a: "Tighten targeting and max lead prices so the wrong jobs never reach you. Dispute per current policy. Non-responsive customers are not a published refund reason." },
    ],
    relatedReading: RELATED_READING,
    alternativesPageHref: getLeadGenerationAlternativeUrl("thumbtack"),
    alternativesPageLabel: "Best Thumbtack alternatives (2026)",
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
      "Angi is Angi Inc.’s homeowner-facing brand for directory, advertising, and related lead products. HomeAdvisor is not a separate rival company—it is another Angi Inc. brand, and contractor-facing HomeAdvisor is largely the Angi Leads marketplace.",
      "Angi fits when homeowners already recognize the brand in your market and your team can operationalize lead response quickly. Confirm whether a quote is advertising/profile (Angi Ads lineage), Angi Leads, a subscription, or a mix before you compare it with anything else.",
      "Bundled programs can work, but they hide cost differences if you only track raw leads. Compare channels by booked-job margin and cancellation rates.",
      "Read Angi vs HomeAdvisor to understand the brand relationship, then Thumbtack vs Angi if you need an independent marketplace. If Angi economics flatten in your zip codes, use our Angi alternatives page.",
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
      alt("HomeAdvisor", "homeadvisor", "Angi Leads (same parent)", "/Logos/homeadvisor.jpeg"),
      alt("Yelp Ads", "yelp-ads", "Yelp-first metros", "/Logos/yelp.png"),
    ],
    faqs: [
      { q: "Angi vs Thumbtack: which is better for contractors?", a: "Angi leans brand + bundled programs; Thumbtack leans flexible self-serve lead buying. Run both with the same response SLA and keep the winner on booked-job economics." },
      { q: "How do I evaluate Angi lead quality?", a: "Track close rate, average ticket, cancellations, and refund-adjusted cost per booked job by zip and service line." },
      { q: "Should I run Angi and HomeAdvisor together?", a: "They are the same parent company. Running both only makes sense if you are actually buying two different products (for example Angi Ads plus Angi Leads) and can tag them separately in CRM. Do not treat them as two unrelated vendors. See Angi vs HomeAdvisor." },
      { q: "Where can I compare Angi alternatives quickly?", a: "Use our dedicated Angi alternatives page, then confirm fit with Angi vs HomeAdvisor and Thumbtack vs Angi." },
    ],
    relatedReading: RELATED_READING,
    alternativesPageHref: getLeadGenerationAlternativeUrl("angi"),
    alternativesPageLabel: "Best Angi alternatives (2026)",
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
      "Great for kitchen, bath, and full remodel pipelines where project imagery and design trust move deals forward.",
      "Houzz Pro underperforms when your jobs are urgent and search-first; those buyers often convert faster through Google or high-volume marketplaces.",
      "Treat it as a channel for visual-consideration demand, not a universal lead source for every trade category.",
      "If your portfolio motion is weakening, use our Houzz Pro alternatives page to compare Thumbtack, Google LSA, and Angi with clearer intent economics.",
    ],
    ratingBreakdown: rb("Houzz Pro"),
    compareLinks: [
      { label: "Houzz Pro vs Thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
    ],
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
    faqs: [
      { q: "Is Houzz Pro only for designers?", a: "No, but it performs best when visuals drive trust and ticket size—remodelers and design-build contractors usually see the strongest fit." },
      { q: "When should contractors avoid Houzz Pro?", a: "Avoid using it as your only channel if your pipeline depends on urgent emergency calls or categories with low visual consideration." },
      { q: "How do I improve Houzz lead quality?", a: "Keep project galleries current, tighten service descriptions, and route inquiries into CRM quickly to protect close rates." },
      { q: "What are the best Houzz Pro alternatives?", a: "Thumbtack for marketplace scale and Google Local Services Ads for high-intent search are common alternatives." },
    ],
    relatedReading: RELATED_READING,
  },
  bark: {
    ...LG_SHELL,
    toolName: "Bark",
    rating: "4.0",
    startingPrice: "From $2.35/credit (leads cost multiple credits)",
    bestFor: "Pros who want to inspect each lead and pay credits only to contact",
    visitUrl: "https://www.bark.com",
    logoSrc: "/Logos/bark.jpeg",
    quickVerdict: "Bark is an inspect-then-buy credit marketplace: you see the request and credit cost, and you pay only if you contact.",
    quickVerdictParagraphs: [
      "Bark shows matched leads for free. According to Bark’s US Help Center, the credit cost is visible before you respond, and you are not charged for browsing. After you spend credits, Bark says you get phone and email; follow-ups are free. Bark states it does not take a commission.",
      "Standard US credit price is $2.35 (August 2026). That is not the lead price. Job type, scope, location, and engagement change how many credits a lead takes. Credits purchased from November 1, 2025 expire after 3 months.",
      "Compare Bark vs Thumbtack when you need to choose inspect-then-buy credits versus Thumbtack’s targeting-and-budget model. If credits expire unused or CAC exceeds gross profit, see Bark alternatives.",
    ],
    ratingBreakdown: rb("Bark"),
    compareLinks: [
      { label: "Bark vs Thumbtack", href: getLeadGenerationCompareUrl("bark-vs-thumbtack") },
      { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
    ],
    pros: ["Multi-category", "Credit model clarity for some teams"],
    cons: ["Quality variance", "Needs tight qualification"],
    bestForEditorial: "Operators testing several service lines or regions.",
    whoShouldAvoid: "Teams needing hyper-specialized exclusive leads only.",
    pricingSummary:
      "US standard credit price $2.35 (August 2026 Help Center). Packs can lower the effective rate. Lead cost = credits required × your rate. Credits bought from Nov 1, 2025 expire in 3 months. Elite Pro is optional (credit-pack discount and limited free weekly leads). Credit returns are not cash refunds and do not cover unresponsive customers.",
    features: ["Credit wallet", "Lead notifications", "Lead signals", "Categories"],
    keyFeatures: [
      { name: "Credits", description: "Buy credits or packs; spend them only when you choose to contact a lead whose credit cost you already see." },
      { name: "Lead signals", description: "Bark lists high hiring intent, urgent, first to respond, and verified phone on leads." },
    ],
    integrations: ["Manual CRM export"],
    contractorUse: ["Multi-service operators"],
    alternatives: [
      alt("Thumbtack", "thumbtack", "US local marketplace depth", "/Logos/thumbtack.jpeg"),
      alt("Angi", "angi", "Home services directories", "/Logos/angi.jpeg"),
    ],
    faqs: [
      { q: "Bark vs Thumbtack: which should I choose?", a: "Bark if you want to inspect each request and skip without paying. Thumbtack if you want customers contacting you under targeting, max lead prices, and a weekly budget. Compare cost per booked job—see Bark vs Thumbtack." },
      { q: "How should I manage Bark credit spend?", a: "Treat $2.35 as the credit unit, not CPL. Skip leads whose credit cost cannot fit expected gross profit. Use credits before the 3-month expiry. Unresponsive customers are not a return reason." },
      { q: "Are Bark leads lower quality?", a: "BeltStack has not measured conversion rates. Quality varies by category and market. Use Bark’s signals and your own close rate—do not assume they are worse or better than Thumbtack." },
      { q: "Where do I compare Bark alternatives?", a: "Use the Bark alternatives page, then validate against Bark vs Thumbtack and your own close-rate data." },
    ],
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
      "Screened listings increase trust and call intent, but onboarding and verification require operational discipline.",
      "Dispute low-fit leads quickly and review category economics weekly—auction pressure can move cost per booked job fast.",
      "LSA is often strongest when paired with at least one secondary channel to reduce dependency and smooth seasonality.",
      "If eligibility or auction costs block growth, see our Google LSA alternatives page for marketplace and social substitutes.",
    ],
    ratingBreakdown: rb("Google Local Services Ads"),
    compareLinks: [
      { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
    ],
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
    faqs: [
      { q: "Are Google Local Services Ads worth it?", a: "Often yes for eligible trades. Start with controlled weekly caps and evaluate booked revenue, not just call volume." },
      { q: "Why are my LSA leads expensive?", a: "Category competition, service-area breadth, and profile quality all affect auction outcomes. Tighten targeting before raising spend." },
      { q: "What is the best LSA alternative?", a: "Thumbtack and Angi are common marketplace alternatives; Yelp Ads can work in Yelp-heavy metros." },
      { q: "Should I run LSA with other channels?", a: "Yes. Most strong operators blend LSA with one marketplace and owned channels to stabilize pipeline risk." },
    ],
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
    quickVerdictParagraphs: [
      "Yelp Ads amplify profile quality; weak reviews, sparse photos, and stale business details usually suppress returns.",
      "In Yelp-heavy metros, profile optimization plus sponsored placement can work well. In Google-first markets, alternatives often outperform.",
      "Treat Yelp Ads as one channel in a blended acquisition mix rather than a full pipeline strategy.",
      "Use our Yelp Ads alternatives page to compare Google LSA, Thumbtack, and Angi against your booked-job economics.",
    ],
    ratingBreakdown: rb("Yelp Ads"),
    compareLinks: [
      { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
      { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
    ],
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
    faqs: [
      { q: "Yelp Ads vs Google LSA: which is better?", a: "It depends on market behavior. Yelp can win where profile trust is strong; LSA usually wins on urgent Google-first intent." },
      { q: "How do I improve Yelp Ads performance?", a: "Upgrade profile completeness, review velocity, photos, and response speed before scaling ad budgets." },
      { q: "When should I stop Yelp Ads?", a: "Pause or reduce when refund-adjusted cost per booked job stays above your margin threshold after profile improvements." },
      { q: "What are strong Yelp Ads alternatives?", a: "Google LSA, Thumbtack, and Angi are the most common alternatives depending on category and zip." },
    ],
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
      "Great for offers, promos, and audience segments you can target precisely with strong creative and follow-up systems.",
      "Lead quality varies with targeting and funnel design; social forms can underperform if teams are slow to qualify and respond.",
      "Facebook Lead Ads works best as a complement to search-intent channels, not a full replacement.",
      "If social economics are weak, our Facebook Lead Ads alternatives page outlines when to pivot toward LSA or marketplace channels.",
    ],
    ratingBreakdown: rb("Facebook Lead Ads"),
    compareLinks: [
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
      { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
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
    faqs: [
      { q: "Are Facebook leads low quality?", a: "They can be, especially with broad targeting. Tight audience filters, clearer offers, and sub-5-minute follow-up improve quality." },
      { q: "When should I use Facebook Lead Ads?", a: "Use it for seasonal offers, promo campaigns, and retargeting where social creative can create demand." },
      { q: "What is the best Facebook Lead Ads alternative?", a: "Google Local Services Ads is the top intent alternative for eligible categories; Thumbtack is a common marketplace backup." },
      { q: "How do I reduce no-show Facebook leads?", a: "Add qualification fields, confirm by SMS quickly, and enforce CRM disposition tracking across reps." },
    ],
    relatedReading: [
      RELATED_READING[0],
      RELATED_READING[1],
      { label: "Paid vs organic leads guide", href: `${GUIDES_HREF}/paid-vs-organic-leads` },
    ],
  },
  homeadvisor: {
    ...LG_SHELL,
    toolName: "HomeAdvisor",
    rating: "4.1",
    startingPrice: "Pay per lead",
    bestFor: "Residential pros comfortable with shared marketplace economics",
    visitUrl: "https://www.homeadvisor.com",
    logoSrc: "/Logos/homeadvisor.jpeg",
    quickVerdict: "HomeAdvisor is Angi Inc.’s Angi Leads marketplace brand—volume only works if shared-lead economics fit.",
    quickVerdictParagraphs: [
      "HomeAdvisor remains a live brand under Angi Inc., not an independent competitor to Angi. Contractor-facing HomeAdvisor is largely Angi Leads: pay-per-lead marketplace connections, often shared with other approved pros.",
      "It can deliver volume when your team handles marketplace variance and responds quickly. Always tag leads in CRM and monitor overlap with Thumbtack or Google LSA so duplicate economics do not hide true CAC.",
      "Read Angi vs HomeAdvisor before long commitments so you know whether a quote is Angi Leads, ads, or a bundle. Keep spend tied to booked-job margin by zip.",
      "If economics flatten, use our HomeAdvisor alternatives page for channels outside Angi Inc.—especially Thumbtack and Google Local Services Ads.",
    ],
    ratingBreakdown: rb("HomeAdvisor"),
    compareLinks: [
      { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
    ],
    pros: ["Large homeowner audience", "Established flows"],
    cons: ["Shared leads (same parent as Angi)", "Margin depends on close rate"],
    bestForEditorial: "Home improvement and repair trades ready for fast response.",
    whoShouldAvoid: "Low-margin trades that cannot absorb refund variance.",
    pricingSummary: "Pay per lead; validate dispute rules in onboarding.",
    features: ["Marketplace leads", "Profile"],
    keyFeatures: [{ name: "Homeowner marketplace", description: "Connections to homeowners requesting services." }],
    integrations: ["CRM export"],
    contractorUse: ["Remodel adjacent", "Handyman", "Cleaning"],
    alternatives: [
      alt("Angi", "angi", "Same parent — ads/directory", "/Logos/angi.jpeg"),
      alt("Thumbtack", "thumbtack", "Flexible marketplace", "/Logos/thumbtack.jpeg"),
    ],
    faqs: [
      { q: "Angi vs HomeAdvisor for my zip?", a: "They are the same parent. Identify whether you are being sold Angi Leads, Angi Ads, or a mix, then compare that product with independent channels using booked-job margin. See Angi vs HomeAdvisor." },
      { q: "How do I reduce HomeAdvisor lead waste?", a: "Tighten service-area filters, qualify fast, and dispute out-of-scope leads per the credit rules in your offer—not a generic internet refund rate." },
      { q: "What are the best HomeAdvisor alternatives?", a: "Thumbtack is the closest independent marketplace alternative; Google LSA is a strong intent complement where eligible. Angi ads/directory products are the same parent company—read Angi vs HomeAdvisor rather than treating Angi as an unrelated vendor." },
      { q: "Should I run HomeAdvisor year-round?", a: "Only if seasonal margin supports it. Many teams pulse spend by service demand and staffing capacity." },
    ],
    relatedReading: RELATED_READING,
    alternativesPageHref: getLeadGenerationAlternativeUrl("homeadvisor"),
    alternativesPageLabel: "Best HomeAdvisor alternatives (2026)",
  },
};

export function getLeadGenerationReviewBySlug(slug: string): LeadGenerationReviewData | null {
  return reviews[slug] ?? null;
}

export function getLeadGenerationReviewSlugs(): string[] {
  return Object.keys(reviews);
}
