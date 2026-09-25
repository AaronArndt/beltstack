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
      "Thumbtack works when you answer fast and track booked-job math. There is no membership or annual fee on Thumbtack’s Pro page (re-checked September 2026); you pay under targeting, exact lead prices, and a weekly budget.",
      "Thumbtack Help: direct leads auto-pay when the customer reaches out from search results and the job matches your preferences. Opportunities charge only if the customer responds after you reach out. A customer not hiring you is not an automatic refund.",
      "Pair this review with Google Local Services Ads vs Thumbtack when you are choosing Google Search demand vs marketplace contacts, and Houzz Pro vs Thumbtack when the other product is remodel/design software rather than another lead marketplace.",
    ],
    ratingBreakdown: rb("Thumbtack"),
    compareLinks: [
      { label: "Google LSA vs Thumbtack", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-thumbtack") },
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
      { label: "Bark vs Thumbtack", href: getLeadGenerationCompareUrl("bark-vs-thumbtack") },
      { label: "Houzz Pro vs Thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
    ],
    pros: ["Broad trade coverage", "Self-serve budgets", "Works for many local categories"],
    cons: ["Limited competition is not exclusivity", "Quality varies by location", "Needs disciplined phone follow-up"],
    bestForEditorial: "Owner-operators and small teams that can answer leads quickly and measure cost per booked job.",
    whoShouldAvoid: "Teams that cannot staff inbound calls or that need exclusive high-ticket leads only.",
    pricingSummary:
      "No join, annual, or membership fee (Thumbtack Pro page, September 2026). Direct leads: auto-pay the exact lead price when a customer reaches out from search results and the job matches your preferences (Thumbtack Help). Opportunities: pay the shown price only if the customer responds. Weekly budget is a hard cap. Refunds are typically Thumbtack credit—duplicates within 7 days can auto-credit; some “Not what I do” declines auto-refund under smarter matching; Thumbtack-numbers leads may credit if the customer replies to no pro within 72 hours. Hired-someone-else is not automatic. There is no public national CPL table.",
    features: ["Lead marketplace", "Budget controls", "Messaging tools", "Profile and review surface"],
    keyFeatures: [
      { name: "Pay-per-lead buying", description: "Set targeting, exact lead prices, and a weekly budget. Direct leads are charged when the customer reaches out—not when you browse a feed." },
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
      { q: "How do I reduce bad leads?", a: "Tighten job preferences, area, hours, and exact lead prices so misfit work is less likely to auto-charge. Decline “Not what I do” when the flow offers it. Non-hire and many no-replies are not automatic refunds unless a documented policy (such as Thumbtack numbers 72-hour / smarter matching) applies." },
    ],
    relatedReading: RELATED_READING,
    alternativesPageHref: getLeadGenerationAlternativeUrl("thumbtack"),
    alternativesPageLabel: "Best Thumbtack alternatives (2026)",
  },
  angi: {
    ...LG_SHELL,
    toolName: "Angi",
    rating: "4.3",
    startingPrice: "Quote — Leads or Ads",
    bestFor: "Home service brands that confirm Angi Ads vs Angi Leads before they buy",
    visitUrl: "https://www.angi.com",
    logoSrc: "/Logos/angi.jpeg",
    quickVerdict: "Angi pairs directory strength with paid lead formats for residential trades.",
    quickVerdictParagraphs: [
      "Angi is Angi Inc.’s homeowner-facing brand for directory, advertising, and related lead products. HomeAdvisor is not a separate rival company—it is another Angi Inc. brand, and contractor-facing HomeAdvisor is largely the Angi Leads marketplace.",
      "Angi fits when homeowners already recognize the brand in your market and your team can operationalize lead response quickly. Confirm whether a quote is advertising/profile (Angi Ads lineage), Angi Leads, a subscription, or a mix before you compare it with anything else.",
      "Bundled programs can work, but they hide cost differences if you only track raw leads. Compare channels by booked-job margin and cancellation rates.",
      "Read Angi vs HomeAdvisor to understand the brand relationship, Google Local Services Ads vs Angi if you are weighing Search/Maps pay-per-lead against Angi, then Thumbtack vs Angi if you need an independent marketplace. If Angi economics flatten in your zip codes, use our Angi alternatives page.",
    ],
    ratingBreakdown: rb("Angi"),
    compareLinks: [
      { label: "Google LSA vs Angi", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-angi") },
      { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
      { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
    ],
    pros: ["Recognized consumer brand", "Multiple ad formats", "Strong home services focus"],
    cons: ["Bundle complexity", "Still marketplace economics", "Needs fast follow-up"],
    bestForEditorial: "Home improvement, cleaning, and related residential trades with operational speed.",
    whoShouldAvoid: "Teams that want fully exclusive enterprise leads without marketplace overlap.",
    pricingSummary:
      "Quoted. Identify Angi Leads vs Angi Ads on the Contract. Leads: pay per Lead, package, or auto-renewing Subscription (Pro Agreement); frequently sent to several other approved pros; you pay even if you do not win. Angi Help (updated Aug 14, 2026): some invalid-lead credits within 45 days if you attempted a call within 24 hours; credits toward future leads, expire in 6 months; not for lost jobs, no-answer, or annual-subscription leads. Ads: advertising/profile commitment—not Google’s per-valid-lead event. No public national rate card.",
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
      alt("Google Local Services Ads", "google-local-services-ads", "Search/Maps valid-lead ads", "/Logos/google.jpeg"),
      alt("HomeAdvisor", "homeadvisor", "Angi Leads (same parent)", "/Logos/homeadvisor.jpeg"),
    ],
    faqs: [
      { q: "Angi vs Thumbtack: which is better for contractors?", a: "Angi leans brand + bundled programs; Thumbtack leans flexible self-serve lead buying. Run both with the same response SLA and keep the winner on booked-job economics." },
      { q: "Google LSA vs Angi: which should contractors choose?", a: "Different products. Google charges per valid Search/Maps contact. Angi Leads are shared marketplace matches you pay for even if you lose; Angi Ads are directory advertising. Compare them on Google Local Services Ads vs Angi using booked-job CAC, not raw CPL." },
      { q: "Can I get a credit for a bad Angi lead?", a: "Angi Help (Aug 14, 2026): some invalid-contact, wrong-ZIP, service-mismatch, duplicate, or paused-flow leads can be credited within 45 days if you attempted a call within 24 hours. Credits apply to future leads and expire in 6 months. Lost jobs, no-answer, shopping, and annual-subscription leads are not credit-eligible." },
      { q: "Should I run Angi and HomeAdvisor together?", a: "They are the same parent company. Running both only makes sense if you are actually buying two different products (for example Angi Ads plus Angi Leads) and can tag them separately in CRM. Do not treat them as two unrelated vendors. See Angi vs HomeAdvisor." },
    ],
    relatedReading: RELATED_READING,
    alternativesPageHref: getLeadGenerationAlternativeUrl("angi"),
    alternativesPageLabel: "Best Angi alternatives (2026)",
  },
  "houzz-pro": {
    ...LG_SHELL,
    toolName: "Houzz Pro",
    rating: "4.2",
    startingPrice: "Software plans; ads extra from $499/mo",
    bestFor: "Remodelers and design-build firms that need software plus optional Houzz marketing",
    visitUrl: "https://www.houzz.com/pro",
    logoSrc: "/Logos/houzz.jpeg",
    quickVerdict: "Houzz Pro is remodel/design business software. Houzz ads and directory presence are separate acquisition layers—not a Thumbtack-style per-lead marketplace.",
    quickVerdictParagraphs: [
      "Houzz Pro is Houzz’s all-in-one platform for home building, remodeling, and design: CRM, estimates, project tools, invoicing, and payments. The US pricing page lists software plans separately from an Advertising Package starting at $499/month.",
      "A Houzz profile can receive inquiries, and Houzz describes lead generation as subscription/flat-rate rather than pay-per-lead. Do not treat the software seat as your cost per lead.",
      "Compare Houzz Pro vs Thumbtack when you are choosing marketplace contacts versus software-plus-optional-Houzz-ads. Houzz Pro is a weak fit as a lead network for emergency or non-visual trades.",
      "If the software-plus-portfolio motion is not the bottleneck, use our Houzz Pro alternatives page.",
    ],
    ratingBreakdown: rb("Houzz Pro"),
    compareLinks: [
      { label: "Houzz Pro vs Thumbtack", href: getLeadGenerationCompareUrl("houzz-pro-vs-thumbtack") },
      { label: "Houzz Pro vs Angi", href: getLeadGenerationCompareUrl("houzz-pro-vs-angi") },
    ],
    pros: ["CRM through invoicing in one product", "Houzz visual/directory discovery", "Ads sold separately from software"],
    cons: ["Most plans are annual 12-month contracts (Houzz Help)", "Ads start at $499/mo on the US pricing page", "Weak fit as a lead network for emergency trades"],
    bestForEditorial: "Remodelers, kitchen/bath, design-build, and interior designers who will use the software—not only a listing.",
    whoShouldAvoid: "Teams that only wanted pay-per-lead contacts, or trades with no use for estimates/project tools.",
    pricingSummary:
      "Software subscription plus optional advertising. Designer-facing US pricing view (September 2026): Design, Pro, and Teams (indexed prices include $99 / $199 / from $399+ per month) with extra seats $50/user/month on Design/Pro. Advertising Package from $499/month. 30-day trial; Houzz Help: most plans are 12-month annual contracts. Confirm the live quote for your trade. Houzz does not publish a national per-lead price.",
    features: ["CRM", "Estimates & proposals", "Project management", "Invoices & payments", "Optional Houzz ads"],
    keyFeatures: [
      {
        name: "Software, not a per-lead meter",
        description:
          "Houzz Pro pricing lists named software plans. Advertising is a separate package on the US page we fetched. Features docs: capture leads from Houzz, forms, email, or manually.",
      },
      {
        name: "Visual Houzz presence",
        description:
          "Project photos and Find Professionals discovery. Premium Profile marketing tools sit on higher/marketing tiers. Not a workmanship guarantee.",
      },
    ],
    integrations: ["QuickBooks Online", "Calendars", "Gmail", "Zoom", "Gusto (beta on Pro)"],
    contractorUse: ["Kitchen and bath remodel", "Design-build", "Interior design"],
    alternatives: [
      alt("Thumbtack", "thumbtack", "Pay-per-lead marketplace", "/Logos/thumbtack.jpeg"),
      alt("Google Local Services Ads", "google-local-services-ads", "Search/Maps valid-lead ads", "/Logos/google.jpeg"),
    ],
    faqs: [
      { q: "Is Houzz Pro only for designers?", a: "Houzz positions it for home building, remodeling, and design. Interior designers and kitchen/bath remodelers are core, but general contractors who need estimates and project tools are in-scope. It is not a generic lead marketplace for every trade." },
      { q: "Does Houzz Pro include advertising or charge per lead?", a: "The US pricing page lists advertising as an add-on starting at $499/month. Houzz describes lead generation as subscription/flat-rate, not pay-per-lead. Confirm the quote." },
      { q: "Houzz Pro vs Thumbtack: which should contractors choose?", a: "Thumbtack if you need marketplace contacts with no membership fee. Houzz Pro if you need remodel/design software and optional Houzz marketing. See Houzz Pro vs Thumbtack—they can be used together via manual CRM entry." },
      { q: "What are the best Houzz Pro alternatives?", a: "For leads: Thumbtack or Google Local Services Ads. For software: compare Houzz Pro to other contractor platforms; Thumbtack is not a substitute for estimating and project tools." },
    ],
    relatedReading: RELATED_READING,
    alternativesPageHref: getLeadGenerationAlternativeUrl("houzz-pro"),
    alternativesPageLabel: "Best Houzz Pro alternatives (2026)",
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
      { q: "Bark vs Thumbtack: which should I choose?", a: "Bark if you want to inspect each request and skip without paying. Thumbtack if you want customers contacting you under targeting, exact lead prices, and a weekly budget. Compare cost per booked job—see Bark vs Thumbtack." },
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
    startingPrice: "Pay per valid lead",
    bestFor: "Eligible local pros capturing Google Search and Maps hiring demand",
    visitUrl: "https://ads.google.com/local-services-ads",
    logoSrc: "/Logos/google.jpeg",
    quickVerdict: "LSA converts when homeowners pick Google first—and you keep profiles, hours, and budgets tight.",
    quickVerdictParagraphs: [
      "Google Local Services Ads sell a seat in Google’s Search and Maps local-services auction. You pay for valid leads, not clicks. Screening currently uses the Google Verified badge; requirements vary by category and location.",
      "US and Canada accounts use automated lead assessment and credits, plus a feedback survey—not the older “dispute every misfire” workflow. Google no longer credits job-type or geo-not-serviced leads.",
      "LSA is often strongest when paired with at least one secondary channel so you are not dependent on a single auction.",
      "If eligibility or booked-job CAC blocks growth, see Google LSA alternatives, Google Local Services Ads vs Thumbtack, and Google Local Services Ads vs Angi.",
    ],
    ratingBreakdown: rb("Google Local Services Ads"),
    compareLinks: [
      { label: "Google LSA vs Angi", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-angi") },
      { label: "Google LSA vs Thumbtack", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-thumbtack") },
      { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
    ],
    pros: ["Google Search/Maps intercept", "Pay per valid lead, not per click", "Google Verified screening"],
    cons: ["Eligibility and screening time", "Auction pressure", "Valid lead ≠ booked job"],
    bestForEditorial: "Trades eligible in their category with strong phone and message handling during advertised hours.",
    whoShouldAvoid: "Businesses outside eligible categories or regions, or teams that cannot answer inbound leads.",
    pricingSummary:
      "Pay per valid lead (not per click). Legacy Local Services accounts: average weekly budget (monthly max = weekly × 30.4 ÷ 7) and Maximize Leads / target CPL / max per lead. Some US accounts are migrating in phases (from August 2026) into specialized Performance Max campaigns with pay-per-lead goals in Google Ads: daily average budget, Maximize Conversions bidding, and no manual max-per-lead or vertical-level tCPA. Pay-per-valid-lead and Search/Maps placement stay the same. Prices vary by location, job type, lead type, and bidding—Google publishes no national CPL. Verified September 2026 on Local Services Help and Google Ads Help.",
    features: ["Google Verified profile", "Call / message / booking leads", "Automated lead credits (US/Canada)"],
    keyFeatures: [
      {
        name: "Pay per valid lead",
        description:
          "Charged after Google assesses a qualifying call, message, or booking from your Local Services ad—not when someone clicks.",
      },
      {
        name: "Google Verified",
        description:
          "Current screening badge after category-specific checks (license, insurance, background, and a verified Google Business Profile where required). Not a workmanship or hire guarantee.",
      },
    ],
    integrations: ["Google Ads ecosystem"],
    contractorUse: ["HVAC", "Plumbing", "Electrical", "Garage doors (eligible categories)"],
    alternatives: [
      alt("Angi", "angi", "Leads vs Ads—confirm the SKU", "/Logos/angi.jpeg"),
      alt("Thumbtack", "thumbtack", "Marketplace complement", "/Logos/thumbtack.jpeg"),
      alt("Yelp Ads", "yelp-ads", "Yelp searchers", "/Logos/yelp.png"),
    ],
    faqs: [
      { q: "Are Google Local Services Ads worth it?", a: "Often yes for eligible trades that can answer inbound contacts. Set a budget you can staff (weekly on legacy LSA, daily average after PMax pay-per-lead migration) and evaluate booked-job CAC after credits—not call volume." },
      { q: "Are Local Services Ads becoming Performance Max?", a: "Google is migrating existing LSA campaigns in phases into specialized Performance Max campaigns with pay-per-lead goals. You still pay for valid leads, not clicks; ads still show on Search and Maps only. That is not ordinary CPC Performance Max. Not every account has moved yet." },
      { q: "Can I dispute bad LSA leads?", a: "In the US and Canada, Google assesses leads automatically and may auto-credit. Use the lead feedback survey; job-type and geo-not-serviced credits are no longer supported. Healthcare, tax, and EMEA accounts are excluded from those credits." },
      { q: "What is the best LSA alternative?", a: "Thumbtack is a common independent marketplace complement (see Google LSA vs Thumbtack). Angi is a different comparison: split Angi Leads from Angi Ads first (see Google LSA vs Angi). Yelp Ads can work in Yelp-heavy metros." },
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
