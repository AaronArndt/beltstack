import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getLeadGenerationAlternativeUrl,
  getLeadGenerationBestForUrl,
  getLeadGenerationReviewUrl,
} from "@/lib/routes";

export function getLeadGenerationCompareUrlFromSlug(slug: string): string {
  return `/lead-generation/compare/${slug}`;
}

const LG_TRADE_LINKS = [
  { label: "Best lead generation for contractors", href: getLeadGenerationBestForUrl("contractors") },
  { label: "Best for HVAC", href: getLeadGenerationBestForUrl("hvac") },
  { label: "Best for plumbing", href: getLeadGenerationBestForUrl("plumbing") },
  { label: "Best for home services", href: getLeadGenerationBestForUrl("home-services") },
];

const P = {
  thumbtack: {
    name: "Thumbtack",
    slug: "thumbtack",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
    logoSrc: "/Logos/thumbtack.jpeg",
    visitUrl: "https://www.thumbtack.com",
    bestForSummary: "Local pros who want pay-per-lead marketplace volume with self-serve tools.",
    rating: "4.4",
    startingPrice: "Pay per lead",
  },
  angi: {
    name: "Angi",
    slug: "angi",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    logoSrc: "/Logos/angi.jpeg",
    visitUrl: "https://www.angi.com",
    bestForSummary: "Home service brands that want combined ads and directory exposure.",
    rating: "4.3",
    startingPrice: "Quote / lead bundles",
  },
  homeadvisor: {
    name: "HomeAdvisor",
    slug: "homeadvisor",
    reviewHref: getLeadGenerationReviewUrl("homeadvisor"),
    logoSrc: "/Logos/homeadvisor.jpeg",
    visitUrl: "https://www.homeadvisor.com",
    bestForSummary: "Contractors comfortable paying for shared marketplace leads at scale.",
    rating: "4.1",
    startingPrice: "Pay per lead",
  },
  bark: {
    name: "Bark",
    slug: "bark",
    reviewHref: getLeadGenerationReviewUrl("bark"),
    logoSrc: "/Logos/bark.jpeg",
    visitUrl: "https://www.bark.com",
    bestForSummary: "Multi-category pros who want to buy leads across services.",
    rating: "4.0",
    startingPrice: "Credits / lead packs",
  },
  "houzz-pro": {
    name: "Houzz Pro",
    slug: "houzz-pro",
    reviewHref: getLeadGenerationReviewUrl("houzz-pro"),
    logoSrc: "/Logos/houzz.jpeg",
    visitUrl: "https://www.houzz.com/pro",
    bestForSummary: "Design-build and remodeling firms with visual portfolios.",
    rating: "4.2",
    startingPrice: "Subscription + ads",
  },
  "google-local-services-ads": {
    name: "Google Local Services Ads",
    slug: "google-local-services-ads",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    logoSrc: "/Logos/google.jpeg",
    visitUrl: "https://ads.google.com/local-services-ads",
    bestForSummary: "Verified pros who want Google-screened calls on high-intent local searches.",
    rating: "4.5",
    startingPrice: "Pay per lead",
  },
  "yelp-ads": {
    name: "Yelp Ads",
    slug: "yelp-ads",
    reviewHref: getLeadGenerationReviewUrl("yelp-ads"),
    logoSrc: "/Logos/yelp.png",
    visitUrl: "https://biz.yelp.com",
    bestForSummary: "Businesses with strong Yelp profiles targeting local searchers on Yelp.",
    rating: "4.0",
    startingPrice: "Campaign budgets",
  },
} as const;

const ALTERNATIVES_PAGE_SLUGS = new Set<keyof typeof P>([
  "thumbtack",
  "angi",
  "homeadvisor",
  "bark",
  "houzz-pro",
  "google-local-services-ads",
  "yelp-ads",
]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const s of slugs) {
    if (!ALTERNATIVES_PAGE_SLUGS.has(s as keyof typeof P)) continue;
    const p = P[s as keyof typeof P];
    out.push({
      label: `Best ${p.name} alternatives (ranked)`,
      href: getLeadGenerationAlternativeUrl(s),
    });
  }
  return out;
}

function lgMoreComparisons(
  currentSlug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  related: { label: string; slug: string }[],
  guideExtras?: { label: string; href: string }[]
): NonNullable<ComparisonTemplateProps["moreComparisons"]> {
  const compareLinks = related
    .filter((r) => r.slug !== currentSlug)
    .map((r) => ({ label: r.label, href: getLeadGenerationCompareUrlFromSlug(r.slug) }));
  const guides = guideExtras ?? [];
  return [
    ...compareLinks,
    ...alternativesPageLinksForSlugs([P[a].slug, P[b].slug]),
    { label: "Best lead generation tools (2026 roundup)", href: "/lead-generation/best-lead-generation-tools" },
    { label: "How to choose a lead generation platform", href: "/lead-generation/guides/how-to-choose-a-lead-generation-platform" },
    { label: "Paid vs organic leads", href: "/lead-generation/guides/paid-vs-organic-leads" },
    { label: "Speed-to-lead for inbound inquiries", href: "/lead-generation/guides/speed-to-lead-for-inbound-inquiries" },
    ...guides,
    { label: "Call tracking software hub", href: "/call-tracking" },
    { label: "How we review software (methodology)", href: "/methodology" },
  ];
}

function build(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string,
  extra?: Partial<ComparisonTemplateProps>
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  const includesSearchIntent = a === "google-local-services-ads" || b === "google-local-services-ads";
  const includesYelp = a === "yelp-ads" || b === "yelp-ads";
  const includesPortfolio = a === "houzz-pro" || b === "houzz-pro";
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/lead-generation",
      categoryLabel: "Lead Generation",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [
        summary,
        `This ${pa.name} vs ${pb.name} matchup is usually decided by response operations and margin discipline, not by top-line lead counts. Teams that answer quickly and track booked-job outcomes in CRM outperform on either platform.`,
        "Run a controlled 30-60 day split with identical scripts, service-area rules, and disposition stages. Keep the winner on booked-job margin after refunds, no-shows, and follow-up cost.",
      ],
      decisionGuideA: [
        `Choose ${pa.name} when your workflow aligns with ${pa.bestForSummary.toLowerCase()}`,
        "Choose this option if your team can consistently execute the response playbook it requires.",
        "Choose this option when your best jobs map to the channel intent this platform captures.",
      ],
      decisionGuideB: [
        `Choose ${pb.name} when your workflow aligns with ${pb.bestForSummary.toLowerCase()}`,
        "Choose this option if your geography/category historically performs better on its buyer behavior.",
        "Choose this option when your lead-quality economics beat the alternative over a full month.",
      ],
      featureComparison: [
        { feature: "Lead model", productA: "Marketplace / platform", productB: "Marketplace / platform", supportA: "supported", supportB: "supported" },
        { feature: "Local intent", productA: includesSearchIntent ? "High local search intent" : "Strong for local service", productB: includesSearchIntent ? "High local search intent" : "Strong for local service", supportA: "supported", supportB: "supported" },
        { feature: "Dispute / credit policies", productA: "Policy varies by product", productB: "Policy varies by product", supportA: "partial", supportB: "partial" },
        { feature: "CRM / follow-up tooling", productA: "Built-in basics", productB: "Built-in basics", supportA: "partial", supportB: "partial" },
        { feature: "Best fit for urgent jobs", productA: includesSearchIntent ? "Very strong" : "Moderate to strong", productB: includesSearchIntent ? "Very strong" : "Moderate to strong", supportA: "supported", supportB: "supported" },
      ],
      pricingComparison: `Both products price on usage, geography, and category competition. Model blended cost per booked job—not cost per raw lead—and compare refund or credit rules before scaling spend.`,
      prosConsA: {
        pros: ["Strong local discovery for service businesses", "Clear self-serve campaign controls"],
        cons: ["Lead quality varies by market", "Shared leads can mean faster follow-up pressure"],
      },
      prosConsB: {
        pros: ["Established customer behavior on the platform", "Useful when profile and reviews are already strong"],
        cons: ["Less control than fully owned marketing funnels", "Budget needs active management"],
      },
      bestFor: [
        { heading: "Choose by lead economics", body: "Compare dispute policies, exclusivity, and how often leads match your service area before locking in a primary channel." },
        {
          heading: "Choose by search intent and operations",
          body: includesPortfolio
            ? "Portfolio-led channels fit planned projects; marketplace/search channels fit urgent demand. Match platform to your average ticket and sales cycle."
            : includesYelp
              ? "Yelp-heavy metros behave differently than Google-first metros. Pick based on where your best customers actually start research."
              : "If your best jobs are urgent, prioritize high-intent channels and response speed. If projects are planned, optimize qualification and trust assets.",
        },
      ],
      alternatives: [
        { name: "Thumbtack", href: getLeadGenerationReviewUrl("thumbtack"), logoSrc: "/Logos/thumbtack.jpeg", description: "Pay-per-lead marketplace for local pros." },
        { name: "Angi", href: getLeadGenerationReviewUrl("angi"), logoSrc: "/Logos/angi.jpeg", description: "Directory + lead products for home services." },
        { name: "Google Local Services Ads", href: getLeadGenerationReviewUrl("google-local-services-ads"), logoSrc: "/Logos/google.jpeg", description: "Google-screened local lead ads." },
      ],
      faqs: [
        { q: `Which is better for contractors—${pa.name} or ${pb.name}?`, a: summary },
        { q: "How should I compare cost?", a: "Track cost per booked job and gross margin after refunds—not just cost per lead name." },
        { q: "How long should I test each platform?", a: "Use a 30-60 day pilot with consistent scripts, response timing, and service-area filters before making a final call." },
        { q: "What metric predicts winner quality fastest?", a: "Booked-job margin by zip and service line. Lead volume alone can hide poor close quality." },
        { q: `Where can I see ${pa.name} and ${pb.name} alternatives?`, a: "Use the ranked alternatives links and full reviews below to compare substitutes by intent model, policy fit, and operational load." },
      ],
      sidebarWinners: [
        { label: "Speed to first lead", winner: "A" },
        { label: "Brand ecosystem depth", winner: "B" },
        { label: "Best fit for most local teams", winner: "A" },
      ],
      moreComparisons: [
        { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrlFromSlug("thumbtack-vs-angi") },
        { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrlFromSlug("angi-vs-homeadvisor") },
        { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrlFromSlug("google-local-services-ads-vs-yelp-ads") },
        ...alternativesPageLinksForSlugs([pa.slug, pb.slug]),
        { label: "How to choose a lead generation platform", href: "/lead-generation/guides/how-to-choose-a-lead-generation-platform" },
        { label: "Paid vs organic leads", href: "/lead-generation/guides/paid-vs-organic-leads" },
        { label: "Call tracking software hub", href: "/call-tracking" },
      ],
      relevantTradeLinks: LG_TRADE_LINKS,
      ...extra,
    },
  ];
}

const RELATED = {
  lsaTb: { label: "Google Local Services Ads vs Thumbtack", slug: "google-local-services-ads-vs-thumbtack" },
  lsaYelp: { label: "Google Local Services Ads vs Yelp Ads", slug: "google-local-services-ads-vs-yelp-ads" },
  lsaAngi: { label: "Google Local Services Ads vs Angi", slug: "google-local-services-ads-vs-angi" },
  lsaHa: { label: "Google Local Services Ads vs HomeAdvisor", slug: "google-local-services-ads-vs-homeadvisor" },
  lsaBark: { label: "Google Local Services Ads vs Bark", slug: "google-local-services-ads-vs-bark" },
  lsaHz: { label: "Google Local Services Ads vs Houzz Pro", slug: "google-local-services-ads-vs-houzz-pro" },
  tbAngi: { label: "Thumbtack vs Angi", slug: "thumbtack-vs-angi" },
  tbHa: { label: "Thumbtack vs HomeAdvisor", slug: "thumbtack-vs-homeadvisor" },
  angiHa: { label: "Angi vs HomeAdvisor", slug: "angi-vs-homeadvisor" },
  yelpTb: { label: "Yelp Ads vs Thumbtack", slug: "yelp-ads-vs-thumbtack" },
  yelpAngi: { label: "Yelp Ads vs Angi", slug: "yelp-ads-vs-angi" },
  yelpHa: { label: "Yelp Ads vs HomeAdvisor", slug: "yelp-ads-vs-homeadvisor" },
  barkTb: { label: "Bark vs Thumbtack", slug: "bark-vs-thumbtack" },
  barkAngi: { label: "Bark vs Angi", slug: "bark-vs-angi" },
  barkHa: { label: "Bark vs HomeAdvisor", slug: "bark-vs-homeadvisor" },
  barkYelp: { label: "Bark vs Yelp Ads", slug: "bark-vs-yelp-ads" },
  barkHz: { label: "Bark vs Houzz Pro", slug: "bark-vs-houzz-pro" },
  hzTb: { label: "Houzz Pro vs Thumbtack", slug: "houzz-pro-vs-thumbtack" },
  hzAngi: { label: "Houzz Pro vs Angi", slug: "houzz-pro-vs-angi" },
  hzHa: { label: "Houzz Pro vs HomeAdvisor", slug: "houzz-pro-vs-homeadvisor" },
  hzYelp: { label: "Houzz Pro vs Yelp Ads", slug: "houzz-pro-vs-yelp-ads" },
} as const;

const entries: [string, ComparisonTemplateProps][] = [
  build(
    "thumbtack-vs-angi",
    "thumbtack",
    "angi",
    "Thumbtack fits pay-per-lead marketplace workflows with flexible budgets; Angi bundles directory presence with lead products for home services brands that want Angi’s ecosystem."
  ),
  build(
    "angi-vs-homeadvisor",
    "angi",
    "homeadvisor",
    "Angi and HomeAdvisor overlap in home-services marketplaces; compare lead exclusivity, geography fit, and bundled marketing before choosing a primary provider."
  ),
  build("bark-vs-thumbtack", "bark", "thumbtack", "Bark spans broader service categories with credit-style lead buying; Thumbtack is often tighter for US local trade lead flow and pro tooling."),
  build(
    "houzz-pro-vs-thumbtack",
    "houzz-pro",
    "thumbtack",
    "Houzz Pro fits design-build and remodel pros who want portfolio-led discovery; Thumbtack favors faster marketplace lead buying across many local trades."
  ),
  build(
    "google-local-services-ads-vs-yelp-ads",
    "google-local-services-ads",
    "yelp-ads",
    "Google Local Services Ads capture high-intent Google searchers with a screened listing; Yelp Ads monetize users already browsing Yelp—choose based on where your best customers start research."
  ),
  build(
    "google-local-services-ads-vs-thumbtack",
    "google-local-services-ads",
    "thumbtack",
    "Google Local Services Ads meet homeowners at the moment they search on Google with Google Screened trust cues; Thumbtack aggregates marketplace demand across trades. Choose LSA when Google is your dominant discovery path; choose Thumbtack when you want diversified marketplace volume and category experimentation.",
    {
      quickVerdictParagraphs: [
        "Google Local Services Ads meet homeowners at the moment they search on Google with Google Screened trust cues; Thumbtack aggregates marketplace demand across trades. Choose LSA when Google is your dominant discovery path; choose Thumbtack when you want diversified marketplace volume and category experimentation.",
        "BeltStack evaluates lead channels on operator reality: verification burden, dispute transparency, and whether your dispatch team can hit speed-to-lead SLAs—not on headline CPCs or lead counts alone.",
        "Run a 30–60 day test with the same territories, after-hours coverage, and CRM dispositions. Pick the channel that wins on booked-job margin after credits, refunds, and no-shows.",
      ],
      heroCallouts: [
        {
          label: "High-intent Google Search & Maps",
          winner: "A",
          reason: "LSA appears alongside local results when homeowners are actively hiring.",
        },
        {
          label: "Broad marketplace liquidity",
          winner: "B",
          reason: "Thumbtack pools many service categories in one buyer journey.",
        },
        { label: "Same-ecosystem trust badge", winner: "A", reason: "Google Screened reinforces verification inside Search and Maps." },
      ],
      featureComparison: [
        {
          feature: "Where demand starts",
          productA: "Google Search / Maps queries (service + location)",
          productB: "Thumbtack marketplace browse + matching",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Verification / screening",
          productA: "Google Screened requirements by category",
          productB: "Profile, reviews, and marketplace policies",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Lead pricing model",
          productA: "Pay per lead; varies by job type & market",
          productB: "Pay per lead with budget controls",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Creative & landing needs",
          productA: "Light—profile-led in Google surfaces",
          productB: "Profile + responsiveness matter for win rate",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best when urgency is high",
          productA: "Very strong for “need someone today” intent",
          productB: "Strong when homeowners use marketplace flows",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "Google Local Services Ads bill per lead; the price is set by Google’s local auction and changes by job type, zip, and competition (no single public rate card). Thumbtack also bills per lead, with marketplace pricing that varies by category and market. Compare net cost per lead after disputes and credits, then the same cost per booked job—include CSR and scheduling time for both.",
      prosConsA: {
        pros: ["Captures Google-first homeowners", "Screened badge reduces friction on cold inbound"],
        cons: ["Category and geo eligibility rules", "Auction pressure can spike in competitive metros"],
      },
      prosConsB: {
        pros: ["Single interface for many trades", "Useful when you want marketplace diversification"],
        cons: ["Shared-lead dynamics in busy markets", "Quality varies by category and territory"],
      },
      bestFor: [
        {
          heading: "Choose Google LSA when",
          body: "Your best customers say they “Googled you,” you can maintain Google’s verification requirements, and dispatch can answer calls within minutes during business hours.",
        },
        {
          heading: "Choose Thumbtack when",
          body: "You want marketplace demand without building a separate Google Ads muscle, or you are testing multiple service lines where Thumbtack’s liquidity helps.",
        },
      ],
      sidebarWinners: [
        { label: "Google Search intent match", winner: "A" },
        { label: "Cross-category experimentation", winner: "B" },
        { label: "Trust signal inside Google UI", winner: "A" },
      ],
      faqs: [
        {
          q: "Google Local Services Ads vs Thumbtack: which is better for contractors?",
          a: "If homeowners in your market start on Google for urgent repairs, LSA often matches intent more tightly. If you want marketplace volume across categories and can execute fast follow-up, Thumbtack can win. Validate with booked-job margin, not lead volume.",
        },
        {
          q: "Do I need both?",
          a: "Many teams run LSA as a primary Google channel and keep a marketplace as a secondary test—only if staffing can maintain separate SLAs and attribution in CRM.",
        },
        {
          q: "How do I attribute leads fairly?",
          a: "Use unique numbers or call tracking, tag source in CRM, and review assisted conversions before cutting a channel that feeds branded search.",
        },
        {
          q: "What should I read next?",
          a: "Start with our guide on how Google Local Services Ads work, then speed-to-lead—response time is often the bottleneck, not the marketplace brand.",
        },
        {
          q: "Where are alternatives compared?",
          a: "Use the ranked alternatives pages and individual reviews linked from this comparison for substitutes outside both ecosystems.",
        },
      ],
      moreComparisons: lgMoreComparisons(
        "google-local-services-ads-vs-thumbtack",
        "google-local-services-ads",
        "thumbtack",
        [RELATED.lsaYelp, RELATED.tbAngi, RELATED.angiHa, RELATED.barkTb],
        [
          { label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" },
          { label: "Landing pages for paid lead campaigns", href: "/lead-generation/guides/landing-pages-for-paid-lead-campaigns" },
        ]
      ),
    }
  ),
  build(
    "google-local-services-ads-vs-angi",
    "google-local-services-ads",
    "angi",
    "Google Local Services Ads intercept Google Search and Maps demand with screened listings; Angi pairs directory presence with lead products inside the Angi ecosystem for home services brands. Choose LSA for Google-native intent; choose Angi when bundled Angi marketing and directory reach justify the operational fit.",
    {
      quickVerdictParagraphs: [
        "Google Local Services Ads intercept Google Search and Maps demand with screened listings; Angi pairs directory presence with lead products inside the Angi ecosystem for home services brands. Choose LSA for Google-native intent; choose Angi when bundled Angi marketing and directory reach justify the operational fit.",
        "We weigh how each channel behaves in real metros: lead mix (repair vs replace), dispute handling, and whether your brand already has Angi profile equity.",
        "Pilot with identical territories and CSR scripts. Decide on net margin per booked job after refunds and rework, not on top-of-funnel lead names.",
      ],
      heroCallouts: [
        { label: "Google-native demand capture", winner: "A", reason: "LSA meets searchers where they look for “near me” help." },
        { label: "Angi brand + bundled programs", winner: "B", reason: "Angi can matter when homeowners already trust the directory path." },
        { label: "Fast emergency intent", winner: "A", reason: "Search-led flows skew toward immediate needs." },
      ],
      featureComparison: [
        {
          feature: "Primary surface",
          productA: "Google Search / Maps",
          productB: "Angi directory + lead products",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Home services focus",
          productA: "Eligible categories on Google",
          productB: "Strong home-services positioning",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Trust / verification",
          productA: "Google Screened",
          productB: "Platform policies + reviews",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Operational load",
          productA: "Google verification + LSA ops",
          productB: "Profile, reviews, and lead handling",
          supportA: "partial",
          supportB: "partial",
        },
        {
          feature: "Best for Google-first metros",
          productA: "Very strong",
          productB: "Moderate (depends on Angi usage locally)",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "Google LSA charges per lead via Google’s auction (varies by geography and service type). Angi often mixes per-lead fees with directory or marketing bundles, so statements can lump several charges together. Ask Angi for line-item per-lead and per-booking economics where possible; for LSA, pull cost per lead from the Ads interface—then run both through the same refund/dispute assumptions and cost per booked job.",
      prosConsA: {
        pros: ["High-intent Google traffic", "Screened badge at decision time"],
        cons: ["Eligibility and category limits", "Auction volatility"],
      },
      prosConsB: {
        pros: ["Directory depth for home services", "Familiar consumer path on Angi"],
        cons: ["Less Google-native than LSA", "Bundle economics need finance review"],
      },
      bestFor: [
        {
          heading: "Choose LSA when",
          body: "Your pipeline already skews Google, you can pass screening, and you want leads tied to explicit local queries.",
        },
        {
          heading: "Choose Angi when",
          body: "Angi is already part of your market’s research habit, or bundled programs align with how you sell larger tickets.",
        },
      ],
      sidebarWinners: [
        { label: "Google search intent", winner: "A" },
        { label: "Home-services directory depth", winner: "B" },
        { label: "Screened in-SERP trust", winner: "A" },
      ],
      faqs: [
        {
          q: "Should a remodeling contractor pick Google LSA or Angi?",
          a: "If discovery is Google-led for urgent or high-intent searches, LSA is the tighter match. If your buyers research long cycles inside Angi portfolios, Angi may deserve more budget—test both on booked jobs, not clicks.",
        },
        {
          q: "How do refunds compare?",
          a: "Read each product’s dispute documentation for your categories. Model expected credit rates into cost per booked job.",
        },
        {
          q: "Can I run both?",
          a: "Yes, if you separate tracking and avoid double-paying for the same homeowner—use CRM source tags and call tracking.",
        },
        {
          q: "What should I read before I choose?",
          a: "Read how to choose a lead generation platform and paid vs organic leads so you budget channels against referrals and SEO, not in isolation.",
        },
        {
          q: "Where are Angi alternatives?",
          a: "Use the Angi alternatives page and related comparisons linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons("google-local-services-ads-vs-angi", "google-local-services-ads", "angi", [
        RELATED.lsaTb,
        RELATED.lsaHa,
        RELATED.lsaYelp,
        RELATED.tbAngi,
        RELATED.angiHa,
      ], [{ label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" }]),
    }
  ),
  build(
    "google-local-services-ads-vs-homeadvisor",
    "google-local-services-ads",
    "homeadvisor",
    "Google Local Services Ads target explicit Google queries with screened placements; HomeAdvisor is a pay-per-lead marketplace for home services with its own buyer behavior. Prefer LSA when Google is the starting point; prefer HomeAdvisor when marketplace economics and category fit outperform in your zip codes.",
    {
      quickVerdictParagraphs: [
        "Google Local Services Ads target explicit Google queries with screened placements; HomeAdvisor is a pay-per-lead marketplace for home services with its own buyer behavior. Prefer LSA when Google is the starting point; prefer HomeAdvisor when marketplace economics and category fit outperform in your zip codes.",
        "BeltStack treats marketplaces and Google surfaces as different intent funnels—compare dispute rules, exclusivity expectations, and how often leads match your crew’s actual service area.",
        "Use a disciplined pilot: same CSR script, same territories, same definition of a qualified lead. Winner = better margin per booked job.",
      ],
      heroCallouts: [
        { label: "Searcher on Google right now", winner: "A", reason: "LSA aligns with immediate local service searches." },
        { label: "Marketplace-native buyers", winner: "B", reason: "HomeAdvisor fits homeowners already in marketplace flows." },
        { label: "In-Google verification badge", winner: "A", reason: "Google Screened is visible in Search/Maps." },
      ],
      featureComparison: [
        {
          feature: "Demand origin",
          productA: "Google Search / Maps",
          productB: "HomeAdvisor marketplace",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Lead model",
          productA: "Pay per lead (Google)",
          productB: "Pay per lead (marketplace)",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Category fit",
          productA: "Google eligible services",
          productB: "Home services marketplace categories",
          supportA: "partial",
          supportB: "supported",
        },
        {
          feature: "Trust signals",
          productA: "Google Screened",
          productB: "Reviews + marketplace reputation",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Ops for urgent calls",
          productA: "Very strong when staffed",
          productB: "Strong with fast follow-up",
          supportA: "supported",
          supportB: "supported",
        },
      ],
      pricingComparison:
        "LSA is pay per lead, priced by Google’s auction (competition and job category move the number). HomeAdvisor is pay per lead with marketplace-set rates that also vary by trade and territory. Neither has one national price list—export actual cost per lead from each product for your zips, subtract credited or disputed leads, and compare cost per booked job including follow-up labor.",
      prosConsA: {
        pros: ["Tight match to Google demand", "Screened badge at click time"],
        cons: ["Not every trade or geo is eligible", "Requires responsive call handling"],
      },
      prosConsB: {
        pros: ["Established marketplace for home projects", "Can scale when territory fit is good"],
        cons: ["Shared leads in competitive zips", "Quality variance by category"],
      },
      bestFor: [
        {
          heading: "Choose LSA when",
          body: "Your customers discover you on Google first and you can maintain verification and fast phone pickup.",
        },
        {
          heading: "Choose HomeAdvisor when",
          body: "Marketplace leads in your service area convert reliably for your trade, and your team can win speed-to-lead battles.",
        },
      ],
      sidebarWinners: [
        { label: "Google intent alignment", winner: "A" },
        { label: "Marketplace familiarity (home)", winner: "B" },
        { label: "Screened SERP placement", winner: "A" },
      ],
      faqs: [
        {
          q: "Is Google LSA or HomeAdvisor cheaper?",
          a: "Cheap is the wrong frame—compare cost per booked job after refunds. One may look cheaper per lead but lose on close rate or ticket size.",
        },
        {
          q: "How does this relate to Angi?",
          a: "Angi and HomeAdvisor overlap historically for many operators—see Angi vs HomeAdvisor and keep CRM source hygiene clean.",
        },
        {
          q: "What guides should I read?",
          a: "How Google Local Services Ads work, speed-to-lead, and how to choose a lead generation platform.",
        },
        {
          q: "Do I need call tracking?",
          a: "Yes for fair attribution—see our call tracking hub for number-level routing ideas.",
        },
        {
          q: "Where are HomeAdvisor alternatives?",
          a: "Use the HomeAdvisor alternatives page linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons(
        "google-local-services-ads-vs-homeadvisor",
        "google-local-services-ads",
        "homeadvisor",
        [RELATED.lsaTb, RELATED.angiHa, RELATED.lsaYelp, RELATED.tbHa],
        [{ label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" }]
      ),
    }
  ),
  build(
    "thumbtack-vs-homeadvisor",
    "thumbtack",
    "homeadvisor",
    "Thumbtack and HomeAdvisor both sell pay-per-lead marketplace demand for home services, but buyer paths, category liquidity, and dispute handling differ by metro. Choose Thumbtack when its marketplace motion fits your trades and ops; choose HomeAdvisor when its lead mix and territory economics outperform in your data.",
    {
      quickVerdictParagraphs: [
        "Thumbtack and HomeAdvisor both sell pay-per-lead marketplace demand for home services, but buyer paths, category liquidity, and dispute handling differ by metro. Choose Thumbtack when its marketplace motion fits your trades and ops; choose HomeAdvisor when its lead mix and territory economics outperform in your data.",
        "We do not crown a universal winner—local proof beats brand preference. Your CRM should tell you which source yields booked jobs at target margin.",
        "Run parallel budgets with the same qualification questions and dispatch rules. Re-evaluate monthly as seasonality shifts trade mix.",
      ],
      heroCallouts: [
        { label: "Broad marketplace experimentation", winner: "A", reason: "Thumbtack spans many local service categories." },
        { label: "Home-project marketplace depth", winner: "B", reason: "HomeAdvisor is synonymous with home services marketplaces for many homeowners." },
        { label: "Shared-lead urgency", winner: "B", reason: "HomeAdvisor’s shared leads often go to multiple pros—first viable caller wins." },
      ],
      featureComparison: [
        {
          feature: "Core model",
          productA: "Pay-per-lead marketplace",
          productB: "Pay-per-lead marketplace",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Category breadth",
          productA: "Wide beyond single trade",
          productB: "Home services focus",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Profile & reviews",
          productA: "Critical for win rate",
          productB: "Critical for win rate",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Disputes / credits",
          productA: "Policy-driven by product",
          productB: "Policy-driven by product",
          supportA: "partial",
          supportB: "partial",
        },
        {
          feature: "Best starting point if unsure",
          productA: "Strong default for multi-trade tests",
          productB: "Strong when home vertical converts locally",
          supportA: "supported",
          supportB: "supported",
        },
      ],
      pricingComparison:
        "Thumbtack and HomeAdvisor both sell pay-per-lead access; published per-lead rates differ by category, zip, and timing on each platform. You won’t know which is cheaper until you compare your own invoices for the same month and territories: gross leads, then credited leads, then booked jobs. The better deal is lower fully loaded cost per booked job (include CSR time, callbacks, and no-shows).",
      prosConsA: {
        pros: ["Flexible for multiple service lines", "Self-serve controls for budgets"],
        cons: ["Shared leads in competitive markets", "Quality swings by zip"],
      },
      prosConsB: {
        pros: ["Recognized home-services marketplace", "Can scale when geography fits"],
        cons: ["Same shared-lead dynamics as other marketplaces", "Needs rigorous follow-up"],
      },
      bestFor: [
        {
          heading: "Pick Thumbtack when",
          body: "You want one marketplace to test several offerings, or Thumbtack’s liquidity is simply stronger in your city for your trades.",
        },
        {
          heading: "Pick HomeAdvisor when",
          body: "Your historical data shows better close rates from HomeAdvisor in target zips, or homeowners in your market reference it by name.",
        },
      ],
      sidebarWinners: [
        { label: "Multi-category testing", winner: "A" },
        { label: "Home-services marketplace recognition", winner: "B" },
        { label: "Requires CRM proof, not brand bias", winner: "A" },
      ],
      faqs: [
        {
          q: "Thumbtack vs HomeAdvisor for plumbers—who wins?",
          a: "Whichever delivers booked jobs at better margin in your territory after refunds. Run a split test with identical scripts and measure close rate by source.",
        },
        {
          q: "How does Angi fit?",
          a: "See Angi vs HomeAdvisor—many teams compare all three Angi/HA/Thumbtack relationships together.",
        },
        {
          q: "What operational mistake hurts both?",
          a: "Slow response. Read speed-to-lead and fix routing before changing budgets.",
        },
        {
          q: "Organic vs paid?",
          a: "Paid marketplaces amplify ops gaps. See paid vs organic leads before over-investing.",
        },
        {
          q: "Alternatives?",
          a: "Use Thumbtack and HomeAdvisor alternatives pages for ranked substitutes.",
        },
      ],
      moreComparisons: lgMoreComparisons("thumbtack-vs-homeadvisor", "thumbtack", "homeadvisor", [
        RELATED.tbAngi,
        RELATED.angiHa,
        RELATED.barkTb,
        RELATED.lsaTb,
      ]),
    }
  ),
  build(
    "yelp-ads-vs-thumbtack",
    "yelp-ads",
    "thumbtack",
    "Yelp Ads monetize homeowners already on Yelp; Thumbtack is a pay-per-lead marketplace across many local trades. Choose Yelp when your profile strength and Yelp-heavy metros make paid visibility efficient; choose Thumbtack when you want marketplace leads independent of Yelp browsing behavior.",
    {
      quickVerdictParagraphs: [
        "Yelp Ads monetize homeowners already on Yelp; Thumbtack is a pay-per-lead marketplace across many local trades. Choose Yelp when your profile strength and Yelp-heavy metros make paid visibility efficient; choose Thumbtack when you want marketplace leads independent of Yelp browsing behavior.",
        "BeltStack stresses channel–market fit: some cities skew Yelp-first; others skew Google or marketplaces. Let your call logs and CRM sources decide.",
        "Pilot with the same offers, hours, and territories. Compare booked jobs and average ticket—not impressions.",
      ],
      heroCallouts: [
        { label: "Yelp-native audience", winner: "A", reason: "Ads reach users already comparing businesses on Yelp." },
        { label: "Marketplace breadth", winner: "B", reason: "Thumbtack isn’t limited to Yelp’s user base." },
        { label: "Profile + review leverage", winner: "A", reason: "Yelp rewards strong reputations with better ad efficiency." },
      ],
      featureComparison: [
        {
          feature: "Audience",
          productA: "Yelp users in-session",
          productB: "Thumbtack marketplace users",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Depends on review equity",
          productA: "High—star rating shapes CTR",
          productB: "Moderate—reviews still matter",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Lead type",
          productA: "Calls, messages, visits from Yelp",
          productB: "Matched marketplace leads",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Creative workload",
          productA: "Profile-led",
          productB: "Profile + responsiveness",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best when Yelp is a research hub locally",
          productA: "Very strong",
          productB: "Variable",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "Yelp Ads run on campaign budgets (auction for placements inside Yelp): you pay for visibility and clicks, not a fixed fee per lead. Thumbtack charges per lead when you accept or connect with a customer. Yelp’s effective cost per lead is ad spend divided by qualified leads; Thumbtack’s is closer to stated per-lead spend. Compare both on cost per booked job after the same follow-up process—not on raw Yelp impressions versus Thumbtack lead count.",
      prosConsA: {
        pros: ["Efficient when Yelp is already part of local research", "Strong synergy with a polished profile"],
        cons: ["Weak if your market ignores Yelp", "Needs ongoing budget tuning"],
      },
      prosConsB: {
        pros: ["Broader marketplace model beyond Yelp", "Good for multi-trade experiments"],
        cons: ["Different buyer behavior than Yelp scrollers", "Shared-lead pressure in hot zips"],
      },
      bestFor: [
        {
          heading: "Choose Yelp Ads when",
          body: "Your analytics show Yelp as a touchpoint, your rating is competitive, and paid placement lifts qualified calls.",
        },
        {
          heading: "Choose Thumbtack when",
          body: "Yelp isn’t central in your market, or you want marketplace leads without anchoring to Yelp sessions.",
        },
      ],
      sidebarWinners: [
        { label: "Yelp-dominant metros", winner: "A" },
        { label: "Category breadth outside Yelp", winner: "B" },
        { label: "Review-driven efficiency", winner: "A" },
      ],
      faqs: [
        {
          q: "Yelp Ads vs Thumbtack for HVAC?",
          a: "If homeowners in your city compare HVAC on Yelp, ads can work. If they book through marketplaces or Google first, Thumbtack or LSA may deserve the test budget.",
        },
        {
          q: "Should I fix my Yelp profile first?",
          a: "Yes—run reputation basics before scaling spend. Poor stars waste ad budget.",
        },
        {
          q: "How do I compare to Google LSA?",
          a: "See Google Local Services Ads vs Yelp Ads for search-led vs Yelp-led intent.",
        },
        {
          q: "What guides pair with this comparison?",
          a: "Start with lead generation strategies for local business and paid vs organic leads for how to budget channels together.",
        },
        {
          q: "Do I need call tracking?",
          a: "Yes—use the call tracking hub to separate Yelp-driven calls from Thumbtack and other sources.",
        },
      ],
      moreComparisons: lgMoreComparisons("yelp-ads-vs-thumbtack", "yelp-ads", "thumbtack", [
        RELATED.lsaYelp,
        RELATED.tbAngi,
        RELATED.barkTb,
        RELATED.yelpAngi,
      ]),
    }
  ),
  build(
    "yelp-ads-vs-angi",
    "yelp-ads",
    "angi",
    "Yelp Ads amplify visibility for businesses homeowners find on Yelp; Angi combines directory presence with lead products for home services. Choose Yelp when Yelp is a research hub in your city; choose Angi when Angi’s bundled ecosystem and lead programs outperform Yelp economics for your trade.",
    {
      quickVerdictParagraphs: [
        "Yelp Ads amplify visibility for businesses homeowners find on Yelp; Angi combines directory presence with lead products for home services. Choose Yelp when Yelp is a research hub in your city; choose Angi when Angi’s bundled ecosystem and lead programs outperform Yelp economics for your trade.",
        "We compare these as different funnels—Yelp session intent vs Angi directory + marketplace behavior—not as interchangeable ad networks.",
        "Measure booked jobs with the same CSR qualification checklist. If Angi bundles blur accounting, allocate true cost per job anyway.",
      ],
      heroCallouts: [
        { label: "In-Yelp placement", winner: "A", reason: "Ads show while users compare local businesses." },
        { label: "Angi home-services stack", winner: "B", reason: "Angi aligns with directory-led home projects." },
        { label: "Review sensitivity", winner: "A", reason: "Yelp performance ties tightly to rating and recency." },
      ],
      featureComparison: [
        {
          feature: "Primary user mindset",
          productA: "Comparing businesses on Yelp",
          productB: "Researching home pros via Angi",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Home services alignment",
          productA: "Strong for many local categories",
          productB: "Very strong home positioning",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Budget control",
          productA: "Campaign budgets in Yelp",
          productB: "Varies by Angi program",
          supportA: "supported",
          supportB: "partial",
        },
        {
          feature: "Creative needs",
          productA: "Profile + photos",
          productB: "Profile + proof assets",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Winning in Yelp-heavy cities",
          productA: "Very strong",
          productB: "Context-dependent",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "Yelp Ads are budget-based: you set monthly or periodic ad spend and compete in Yelp’s auction for placement. Angi usually includes per-lead charges and may add bundled marketing or directory fees on one statement. For Yelp, compute spend divided by leads or calls you attribute; for Angi, isolate true lead fees from bundles—then compare cost per booked job on equal footing.",
      prosConsA: {
        pros: ["Great when Yelp is culturally used locally", "Clear tie between reviews and ad performance"],
        cons: ["Underperforms if Yelp isn’t in your research path", "Budget needs monitoring"],
      },
      prosConsB: {
        pros: ["Deep home-services positioning", "Can pair directory with lead products"],
        cons: ["Less Yelp-session specificity", "Bundle math can hide true CPL"],
      },
      bestFor: [
        {
          heading: "Choose Yelp Ads when",
          body: "Your customers mention Yelp, your rating is competitive, and paid placement yields qualified calls you can answer fast.",
        },
        {
          heading: "Choose Angi when",
          body: "Angi is already part of how your market shops for contractors, or bundled programs match your sales motion.",
        },
      ],
      sidebarWinners: [
        { label: "Yelp research behavior", winner: "A" },
        { label: "Angi ecosystem fit", winner: "B" },
        { label: "Star-rating leverage", winner: "A" },
      ],
      faqs: [
        {
          q: "Can I run Yelp Ads and Angi together?",
          a: "Yes with strict CRM tagging—avoid double-counting the same homeowner moving between channels.",
        },
        {
          q: "Which is better for emergency calls?",
          a: "Often neither is purely “emergency-first”—compare Google LSA vs marketplace options for urgent intent.",
        },
        {
          q: "What guide helps budgeting?",
          a: "Paid vs organic leads and how to choose a lead generation platform.",
        },
        {
          q: "Angi vs HomeAdvisor?",
          a: "Read Angi vs HomeAdvisor if you are evaluating the Angi family of products.",
        },
        {
          q: "Alternatives?",
          a: "See ranked alternatives for Yelp and Angi below.",
        },
      ],
      moreComparisons: lgMoreComparisons("yelp-ads-vs-angi", "yelp-ads", "angi", [
        RELATED.lsaYelp,
        RELATED.yelpTb,
        RELATED.tbAngi,
        RELATED.angiHa,
      ]),
    }
  ),
  build(
    "yelp-ads-vs-homeadvisor",
    "yelp-ads",
    "homeadvisor",
    "Yelp Ads reach homeowners comparing businesses inside Yelp; HomeAdvisor sells marketplace leads for home services. Choose Yelp when Yelp-driven discovery and review equity drive efficient calls; choose HomeAdvisor when marketplace lead economics beat Yelp in your territories.",
    {
      quickVerdictParagraphs: [
        "Yelp Ads reach homeowners comparing businesses inside Yelp; HomeAdvisor sells marketplace leads for home services. Choose Yelp when Yelp-driven discovery and review equity drive efficient calls; choose HomeAdvisor when marketplace lead economics beat Yelp in your territories.",
        "Channel choice should follow local behavior—not national brand recognition. Use CRM and call tracking to see which source produces booked revenue.",
        "Keep qualification scripts identical during tests so sales skill doesn’t bias the results.",
      ],
      heroCallouts: [
        { label: "Yelp session monetization", winner: "A", reason: "Paid visibility while users compare listings." },
        { label: "Marketplace lead flow", winner: "B", reason: "HomeAdvisor matches homeowners to pros actively seeking projects." },
        { label: "Reputation leverage", winner: "A", reason: "Yelp ads amplify a strong profile; weak profiles struggle." },
      ],
      featureComparison: [
        {
          feature: "Funnel type",
          productA: "Directory ads",
          productB: "Pay-per-lead marketplace",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Home services focus",
          productA: "Broad local categories",
          productB: "Home-oriented marketplace",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Depends on star rating",
          productA: "Very high",
          productB: "Moderate (reviews still matter)",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Speed-to-lead",
          productA: "Critical for call conversion",
          productB: "Critical—shared leads",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best when Yelp is dominant locally",
          productA: "Very strong",
          productB: "N/A",
          supportA: "supported",
          supportB: "none",
          stronger: "A",
        },
      ],
      pricingComparison:
        "HomeAdvisor bills per matched lead (rate depends on service and market). Yelp Ads bill against an advertising budget—leads are an outcome of how well your profile and ads convert, not a guaranteed per-lead line item. HomeAdvisor invoices usually make per-lead math clearer; on Yelp, derive cost per lead from ad spend divided by qualified conversations, then compare cost per booked job for each.",
      prosConsA: {
        pros: ["Efficient in Yelp-centric markets", "Synergy with organic Yelp presence"],
        cons: ["Poor fit if Yelp isn’t used locally", "Needs active budget management"],
      },
      prosConsB: {
        pros: ["Direct marketplace leads for home work", "Can scale when zip fit is proven"],
        cons: ["Shared-lead competition", "Quality varies by trade and season"],
      },
      bestFor: [
        {
          heading: "Choose Yelp Ads when",
          body: "Your market researches on Yelp and your profile converts browsers to callers.",
        },
        {
          heading: "Choose HomeAdvisor when",
          body: "Marketplace leads in your area close at target margin and your team wins follow-up races.",
        },
      ],
      sidebarWinners: [
        { label: "Yelp-centric cities", winner: "A" },
        { label: "Marketplace home leads", winner: "B" },
        { label: "Star-rating leverage", winner: "A" },
      ],
      faqs: [
        {
          q: "Yelp vs HomeAdvisor for small contractors?",
          a: "Whichever your data supports. Start small on both if budget allows, tag CRM sources, and scale the winner on margin per booked job.",
        },
        {
          q: "What about Google?",
          a: "See Google Local Services Ads vs Yelp Ads and LSA vs HomeAdvisor for search-led intent.",
        },
        {
          q: "How long to test?",
          a: "30–60 days minimum to smooth weekly variance.",
        },
        {
          q: "Operational prerequisite?",
          a: "Speed-to-lead—fix routing before blaming the marketplace.",
        },
        {
          q: "Alternatives?",
          a: "HomeAdvisor and Yelp alternatives pages list ranked substitutes.",
        },
      ],
      moreComparisons: lgMoreComparisons("yelp-ads-vs-homeadvisor", "yelp-ads", "homeadvisor", [
        RELATED.lsaYelp,
        RELATED.yelpTb,
        RELATED.angiHa,
        RELATED.tbHa,
      ]),
    }
  ),
  build(
    "bark-vs-angi",
    "bark",
    "angi",
    "Bark sells credits across many service categories with a broad marketplace model; Angi focuses home services with directory depth and bundled lead products. Choose Bark when multi-category lead buying fits your expansion; choose Angi when Angi’s home ecosystem and lead bundles align with how you sell.",
    {
      quickVerdictParagraphs: [
        "Bark sells credits across many service categories with a broad marketplace model; Angi focuses home services with directory depth and bundled lead products. Choose Bark when multi-category lead buying fits your expansion; choose Angi when Angi’s home ecosystem and lead bundles align with how you sell.",
        "BeltStack treats Bark’s breadth as a double-edged sword: more categories can mean more noise—qualification discipline matters.",
        "Track cost per booked job by category. Bark may shine on some lines and underperform on others in the same account.",
      ],
      heroCallouts: [
        { label: "Multi-category reach", winner: "A", reason: "Bark spans beyond a single trade vertical." },
        { label: "Home-services directory depth", winner: "B", reason: "Angi is purpose-built around home projects." },
        { label: "Operator qualification load", winner: "B", reason: "Broad Bark feeds can increase filtering work—train CSRs accordingly." },
      ],
      featureComparison: [
        {
          feature: "Category scope",
          productA: "Broad marketplace categories",
          productB: "Home services emphasis",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Lead purchase model",
          productA: "Credits / packs",
          productB: "Lead programs + directory",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Brand familiarity (US home)",
          productA: "Growing",
          productB: "Established",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "CRM hygiene needed",
          productA: "High—filter aggressively",
          productB: "High—standard marketplace",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best for pure home focus",
          productA: "Variable",
          productB: "Strong",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
      ],
      pricingComparison:
        "Bark sells lead credits in packs; each opportunity consumes credits, so effective cost per lead is pack cost divided by leads (then divide again by booked jobs). Angi typically charges per lead on lead products and may add bundle or directory fees. Split Angi into lead fees versus everything else; convert Bark credits to dollars per lead in the same period—then compare net cost after disputes and cost per booked job.",
      prosConsA: {
        pros: ["Useful for testing multiple service lines", "Credit model can throttle spend"],
        cons: ["Broader feeds need tighter qualification", "Quality varies by category"],
      },
      prosConsB: {
        pros: ["Strong home-services positioning", "Familiar consumer path"],
        cons: ["Bundle economics need scrutiny", "Same marketplace follow-up pressure"],
      },
      bestFor: [
        {
          heading: "Choose Bark when",
          body: "You intentionally sell several local services and want one buying interface to experiment—if ops can qualify fast.",
        },
        {
          heading: "Choose Angi when",
          body: "Your growth is home-services-centric and Angi’s directory plus lead products match local buyer behavior.",
        },
      ],
      sidebarWinners: [
        { label: "Category breadth", winner: "A" },
        { label: "Home vertical focus", winner: "B" },
        { label: "CSR qualification discipline required", winner: "A" },
      ],
      faqs: [
        {
          q: "Bark vs Angi for a handyman?",
          a: "If handyman is one of many services you sell, Bark can be a testbed. If you are positioning purely as a home pro in an Angi-heavy market, Angi may convert better—verify with a pilot.",
        },
        {
          q: "Is Bark cheaper?",
          a: "Compare booked margin, not credits. Cheap leads that don’t close are the most expensive kind.",
        },
        {
          q: "What about Thumbtack?",
          a: "See Bark vs Thumbtack—similar marketplace dynamics, different liquidity by city.",
        },
        {
          q: "Guides?",
          a: "How to get leads for contractors and lead generation strategies for local business.",
        },
        {
          q: "Alternatives?",
          a: "Ranked Bark and Angi alternatives are linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons("bark-vs-angi", "bark", "angi", [
        RELATED.barkTb,
        RELATED.tbAngi,
        RELATED.angiHa,
        RELATED.barkHa,
      ]),
    }
  ),
  build(
    "bark-vs-homeadvisor",
    "bark",
    "homeadvisor",
    "Bark’s credit-based marketplace spans many categories; HomeAdvisor focuses pay-per-lead home services demand. Choose Bark when you want multi-category experiments from one buyer; choose HomeAdvisor when home marketplace economics are already proven in your zips.",
    {
      quickVerdictParagraphs: [
        "Bark’s credit-based marketplace spans many categories; HomeAdvisor focuses pay-per-lead home services demand. Choose Bark when you want multi-category experiments from one buyer; choose HomeAdvisor when home marketplace economics are already proven in your zips.",
        "HomeAdvisor leads often assume fast phone response; Bark may require more filtering—plan CSR training accordingly.",
        "Compare both on booked-job margin with identical territories and offers.",
      ],
      heroCallouts: [
        { label: "Cross-category buying", winner: "A", reason: "Bark can feed more than one trade line." },
        { label: "Home marketplace specialization", winner: "B", reason: "HomeAdvisor is built around home project intent." },
        { label: "Lead filtering workload", winner: "A", reason: "Broader feeds can increase unqualified names without tight scripts." },
      ],
      featureComparison: [
        {
          feature: "Focus",
          productA: "Multi-category marketplace",
          productB: "Home services marketplace",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Purchase model",
          productA: "Credits",
          productB: "Pay per lead",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Follow-up urgency",
          productA: "High",
          productB: "Very high (shared leads)",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Data needed to decide",
          productA: "Per-category close rates",
          productB: "Per-zip close rates",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best when home-only focus",
          productA: "Moderate",
          productB: "Strong",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
      ],
      pricingComparison:
        "Bark: prepaid credits redeemed per lead opportunity—spend is capped until you buy more credits; effective cost per lead is credit spend divided by leads. HomeAdvisor: pay per lead with rates that vary by category and zip; invoices usually show per-lead charges clearly. Sticker cost per lead is often easier to read on HomeAdvisor; Bark needs you to track credits burned per lead. On both, subtract refunds and credits, then divide by booked jobs for a fair comparison.",
      prosConsA: {
        pros: ["Good for multi-service operators", "Credits can cap experimentation spend"],
        cons: ["May need heavier qualification", "Uneven quality by category"],
      },
      prosConsB: {
        pros: ["Clear home-services marketplace intent", "Scales when zip fit is good"],
        cons: ["Competitive follow-up races", "Seasonal variance"],
      },
      bestFor: [
        {
          heading: "Choose Bark when",
          body: "You sell several local services and want one interface to buy leads while you validate which lines to scale.",
        },
        {
          heading: "Choose HomeAdvisor when",
          body: "Your crew converts HomeAdvisor leads profitably in target territories and you can sustain speed-to-lead.",
        },
      ],
      sidebarWinners: [
        { label: "Home-only vertical focus", winner: "B" },
        { label: "Multi-category tests", winner: "A" },
        { label: "Shared-lead urgency", winner: "B" },
      ],
      faqs: [
        {
          q: "Bark vs HomeAdvisor for cleaning businesses?",
          a: "If cleaning is one offering among many, Bark may help you test. If HomeAdvisor already wins in your city for cleaning, double down only if margin holds after refunds.",
        },
        {
          q: "Angi overlap?",
          a: "Read Angi vs HomeAdvisor to understand how buyers perceive related brands.",
        },
        {
          q: "Call tracking?",
          a: "Essential—use the call tracking hub to tag marketplace sources.",
        },
        {
          q: "Speed-to-lead?",
          a: "Yes—read our speed-to-lead guide before increasing spend.",
        },
        {
          q: "Alternatives?",
          a: "Bark and HomeAdvisor alternatives pages list substitutes.",
        },
      ],
      moreComparisons: lgMoreComparisons("bark-vs-homeadvisor", "bark", "homeadvisor", [
        RELATED.barkTb,
        RELATED.tbHa,
        RELATED.angiHa,
        RELATED.barkAngi,
      ]),
    }
  ),
  build(
    "google-local-services-ads-vs-bark",
    "google-local-services-ads",
    "bark",
    "Google Local Services Ads capture Google Search and Maps intent with screened listings; Bark is a broad credit-based marketplace across categories. Choose LSA for Google-native, high-intent leads; choose Bark when multi-category marketplace buying is part of your growth tests.",
    {
      quickVerdictParagraphs: [
        "Google Local Services Ads capture Google Search and Maps intent with screened listings; Bark is a broad credit-based marketplace across categories. Choose LSA for Google-native, high-intent leads; choose Bark when multi-category marketplace buying is part of your growth tests.",
        "These channels rarely substitute cleanly—LSA is search-led; Bark is marketplace-led. Your CRM should show which intent type closes for your ticket sizes.",
        "Pilot with the same dispatch rules and measure booked margin. LSA leads often expect immediate phone response; Bark may need stronger qualification.",
      ],
      heroCallouts: [
        { label: "Google intent capture", winner: "A", reason: "LSA meets explicit local queries." },
        { label: "Multi-category marketplace", winner: "B", reason: "Bark buys demand across services." },
        { label: "Screened Google badge", winner: "A", reason: "Visible in Search and Maps UI." },
      ],
      featureComparison: [
        {
          feature: "Intent source",
          productA: "Google Search / Maps",
          productB: "Bark marketplace",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Category breadth",
          productA: "Eligible Google categories",
          productB: "Broad marketplace categories",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Verification",
          productA: "Google Screened",
          productB: "Platform policies",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Operator filtering",
          productA: "Moderate",
          productB: "Higher for some categories",
          supportA: "supported",
          supportB: "partial",
        },
        {
          feature: "Best for urgent local search",
          productA: "Very strong",
          productB: "Varies",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "LSA charges per lead at auction-driven prices from Google (volatile by metro and job type). Bark charges through credit packs spent per lead opportunity—up-front cost is predictable, but effective cost per lead depends on how many leads you get per credit. LSA costs can spike when competition heats up; Bark can feel steadier until low-quality leads burn credits—compare both on cost per booked job after your team’s follow-up time.",
      prosConsA: {
        pros: ["High-intent Google traffic", "Trust badge in Google surfaces"],
        cons: ["Eligibility constraints", "Auction competition"],
      },
      prosConsB: {
        pros: ["Flexible category experiments", "Credit pacing"],
        cons: ["Broader feeds can dilute quality", "Less Google-native than LSA"],
      },
      bestFor: [
        {
          heading: "Choose LSA when",
          body: "Google is how your market hires pros, you meet screening, and you can answer fast.",
        },
        {
          heading: "Choose Bark when",
          body: "You are testing multiple service lines and want marketplace demand beyond Google-only campaigns.",
        },
      ],
      sidebarWinners: [
        { label: "Google search intent", winner: "A" },
        { label: "Category experimentation", winner: "B" },
        { label: "Screened placement", winner: "A" },
      ],
      faqs: [
        {
          q: "Should I run LSA and Bark together?",
          a: "Only if ops can tag CRM sources and maintain SLAs on both. Otherwise master one channel first.",
        },
        {
          q: "What guide explains LSA?",
          a: "How Google Local Services Ads work.",
        },
        {
          q: "Bark vs Thumbtack?",
          a: "See Bark vs Thumbtack for marketplace-to-marketplace nuance.",
        },
        {
          q: "Landing pages?",
          a: "Landing pages for paid lead campaigns helps message match for any paid source.",
        },
        {
          q: "Alternatives?",
          a: "Google LSA and Bark alternatives are linked from this page.",
        },
      ],
      moreComparisons: lgMoreComparisons(
        "google-local-services-ads-vs-bark",
        "google-local-services-ads",
        "bark",
        [RELATED.lsaTb, RELATED.lsaYelp, RELATED.barkTb, RELATED.barkAngi],
        [{ label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" }]
      ),
    }
  ),
  build(
    "bark-vs-yelp-ads",
    "bark",
    "yelp-ads",
    "Bark is a credit-based marketplace across categories; Yelp Ads promote your business to users already browsing Yelp. Choose Bark when marketplace breadth matters; choose Yelp Ads when Yelp is a dominant research channel and your profile converts.",
    {
      quickVerdictParagraphs: [
        "Bark is a credit-based marketplace across categories; Yelp Ads promote your business to users already browsing Yelp. Choose Bark when marketplace breadth matters; choose Yelp Ads when Yelp is a dominant research channel and your profile converts.",
        "Yelp performance is review-sensitive; Bark performance is qualification-sensitive—different operational bottlenecks.",
        "Test each on booked margin with identical territories and offers.",
      ],
      heroCallouts: [
        { label: "Yelp in-session reach", winner: "B", reason: "Ads appear while users compare Yelp listings." },
        { label: "Cross-category marketplace", winner: "A", reason: "Bark isn’t limited to Yelp’s audience." },
        { label: "Star rating leverage", winner: "B", reason: "Yelp ads amplify strong reputations." },
      ],
      featureComparison: [
        {
          feature: "Audience",
          productA: "Bark marketplace users",
          productB: "Yelp users",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Depends on reviews",
          productA: "Moderate",
          productB: "Very high",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Buying model",
          productA: "Credits",
          productB: "Ad budgets",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Ops focus",
          productA: "Qualify leads fast",
          productB: "Answer calls/messages fast",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best in Yelp-heavy cities",
          productA: "Variable",
          productB: "Very strong",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
      ],
      pricingComparison:
        "Bark uses purchased credits: you spend credits when you receive a lead opportunity, so cost per lead is roughly dollars spent on credits divided by leads (then by booked jobs). Yelp Ads use advertising budgets—you pay for ad delivery (for example clicks) inside Yelp, and leads depend on your profile and competition. There is no standard Yelp price-per-lead line on the invoice; derive it from spend divided by qualified calls or messages. Compare the two using the same definition of a qualified lead and the same cost per booked job.",
      prosConsA: {
        pros: ["Broad marketplace access", "Useful multi-category tests"],
        cons: ["May require aggressive filtering", "Uneven category quality"],
      },
      prosConsB: {
        pros: ["Efficient when Yelp is culturally used", "Synergy with profile optimization"],
        cons: ["Weak where Yelp isn’t researched", "Budget upkeep"],
      },
      bestFor: [
        {
          heading: "Choose Bark when",
          body: "You want marketplace leads outside Yelp’s user base or you are testing several services at once.",
        },
        {
          heading: "Choose Yelp Ads when",
          body: "Yelp is part of local research for your trade and your rating supports paid amplification.",
        },
      ],
      sidebarWinners: [
        { label: "Yelp-centric metros", winner: "B" },
        { label: "Marketplace breadth", winner: "A" },
        { label: "Review-driven efficiency", winner: "B" },
      ],
      faqs: [
        {
          q: "Bark or Yelp for restaurants vs contractors?",
          a: "This site focuses contractor and home-service workflows—validate category fit in your own CRM before scaling either.",
        },
        {
          q: "Google vs Yelp ads?",
          a: "See Google Local Services Ads vs Yelp Ads.",
        },
        {
          q: "Reputation help?",
          a: "See our reputation management hub if reviews are the bottleneck.",
        },
        {
          q: "Call tracking?",
          a: "Use the call tracking hub for clean source attribution.",
        },
        {
          q: "Alternatives?",
          a: "Bark and Yelp alternatives pages are linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons("bark-vs-yelp-ads", "bark", "yelp-ads", [
        RELATED.lsaYelp,
        RELATED.yelpTb,
        RELATED.barkTb,
        RELATED.yelpAngi,
      ]),
    }
  ),
  build(
    "bark-vs-houzz-pro",
    "bark",
    "houzz-pro",
    "Bark sells broad marketplace credits across categories; Houzz Pro pairs remodeling-oriented discovery with portfolio-led workflows. Choose Bark for multi-category lead buying; choose Houzz Pro when design-build and visual portfolios drive your pipeline.",
    {
      quickVerdictParagraphs: [
        "Bark sells broad marketplace credits across categories; Houzz Pro pairs remodeling-oriented discovery with portfolio-led workflows. Choose Bark for multi-category lead buying; choose Houzz Pro when design-build and visual portfolios drive your pipeline.",
        "Houzz favors longer-cycle, visual-first buyers; Bark can include faster-turn services—match channel to your average sales cycle.",
        "Measure pipeline value, not just lead count: remodel tickets behave differently than single-trade repairs.",
      ],
      heroCallouts: [
        { label: "Portfolio & design audience", winner: "B", reason: "Houzz users browse visuals for projects." },
        { label: "General marketplace breadth", winner: "A", reason: "Bark spans many non-design categories." },
        { label: "Sales cycle alignment", winner: "B", reason: "Houzz aligns with planned projects more than one-off quick jobs." },
      ],
      featureComparison: [
        {
          feature: "Buyer mindset",
          productA: "Marketplace requests",
          productB: "Design/remodel inspiration",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Visual portfolio impact",
          productA: "Lower",
          productB: "High",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Category breadth",
          productA: "Very broad",
          productB: "Design-build / remodel skew",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Ops: qualification",
          productA: "Filter marketplace names",
          productB: "Qualify longer projects",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best for urgent repairs",
          productA: "Varies by category",
          productB: "Less typical",
          supportA: "partial",
          supportB: "partial",
        },
      ],
      pricingComparison:
        "Bark is credit-based marketplace buying (cost per lead comes from how fast you burn credits). Houzz Pro commonly combines a monthly subscription for software and pro presence with separate ad or lead spend. When comparing, add Houzz subscription plus promotional spend for the month and divide by leads or consultations; compare that all-in number to Bark credit cost divided by leads—both should be judged on cost per booked job.",
      prosConsA: {
        pros: ["Flexible tests across categories", "Credit-based pacing"],
        cons: ["Can require aggressive filtering", "Quality inconsistency by line"],
      },
      prosConsB: {
        pros: ["Strong for remodel/design positioning", "Visual proof is native to the channel"],
        cons: ["Less ideal for quick single-trade jobs", "Subscription + ad math needs clarity"],
      },
      bestFor: [
        {
          heading: "Choose Bark when",
          body: "You want marketplace leads across several services or trades without committing to a visual-first funnel.",
        },
        {
          heading: "Choose Houzz Pro when",
          body: "Your best work is showcased in photos and your sales cycle rewards portfolio discovery.",
        },
      ],
      sidebarWinners: [
        { label: "Design/remodel fit", winner: "B" },
        { label: "Category breadth", winner: "A" },
        { label: "Portfolio-led selling", winner: "B" },
      ],
      faqs: [
        {
          q: "Bark vs Houzz for a kitchen remodeler?",
          a: "Houzz is often the closer fit when homeowners browse inspiration. Bark may still work as a secondary test—let booked revenue decide.",
        },
        {
          q: "What about Thumbtack?",
          a: "Compare Houzz Pro vs Thumbtack and Bark vs Thumbtack for marketplace alternatives.",
        },
        {
          q: "Do I still need my own website?",
          a: "Yes for owned proof and SEO—see the website builders hub (/website-builders) if your portfolio site needs to match the quality of your Houzz or Bark presence.",
        },
        {
          q: "Lead quality?",
          a: "Use how to choose a lead generation platform for a decision checklist.",
        },
        {
          q: "Alternatives?",
          a: "Bark and Houzz Pro alternatives are linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons("bark-vs-houzz-pro", "bark", "houzz-pro", [
        RELATED.hzTb,
        RELATED.barkTb,
        RELATED.lsaHz,
        RELATED.hzAngi,
      ]),
    }
  ),
  build(
    "houzz-pro-vs-angi",
    "houzz-pro",
    "angi",
    "Houzz Pro aligns with portfolio-led remodel and design-build discovery; Angi pairs a major home-services directory with lead products and bundled programs. Choose Houzz Pro when visuals and project planning drive your sales cycle; choose Angi when directory-led home demand and Angi programs outperform in your market.",
    {
      quickVerdictParagraphs: [
        "Houzz Pro aligns with portfolio-led remodel and design-build discovery; Angi pairs a major home-services directory with lead products and bundled programs. Choose Houzz Pro when visuals and project planning drive your sales cycle; choose Angi when directory-led home demand and Angi programs outperform in your market.",
        "These tools serve overlapping but not identical buyers: Houzz skews inspiration-heavy project planning; Angi skews directory comparison for hiring pros. Let your average job size and sales cycle pick the primary channel.",
        "Compare on pipeline quality: measure cost per design consultation or booked remodel, not raw message volume.",
      ],
      heroCallouts: [
        { label: "Visual portfolio discovery", winner: "A", reason: "Houzz is built around photos and ideation." },
        { label: "Directory + lead stack for home", winner: "B", reason: "Angi’s ecosystem targets home hiring journeys." },
        { label: "Longer sales cycles", winner: "A", reason: "Houzz fits planned projects more than emergency repairs." },
      ],
      featureComparison: [
        {
          feature: "Primary strength",
          productA: "Design/remodel inspiration + pro tools",
          productB: "Home-services directory + leads",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Urgent repair intent",
          productA: "Less typical",
          productB: "Moderate via marketplace flows",
          supportA: "partial",
          supportB: "supported",
        },
        {
          feature: "Proof assets",
          productA: "Project photos critical",
          productB: "Reviews + profile critical",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Bundle / subscription clarity",
          productA: "Often subscription + ads",
          productB: "Bundled programs vary",
          supportA: "partial",
          supportB: "partial",
        },
        {
          feature: "Best for design-build firms",
          productA: "Very strong",
          productB: "Context-dependent",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "Houzz Pro typically includes a recurring subscription plus variable spend for visibility or leads—true acquisition cost must include both. Angi is usually lead- and program-driven: per-lead fees plus possible bundled marketing. Model Houzz as subscription plus ads, divided by leads; model Angi as unbundled lead fees divided by leads—then compare cost per booked job after disputes.",
      prosConsA: {
        pros: ["Strong for showcase portfolios", "Aligns with remodel planning behavior"],
        cons: ["Less natural for quick one-off trades", "Needs investment in visual content"],
      },
      prosConsB: {
        pros: ["Broad home-services familiarity", "Can pair directory with lead products"],
        cons: ["Less visual-native than Houzz", "Bundle economics need finance review"],
      },
      bestFor: [
        {
          heading: "Choose Houzz Pro when",
          body: "Your closes depend on design trust, before/after proof, and homeowners who research in visual feeds.",
        },
        {
          heading: "Choose Angi when",
          body: "Your market hires through Angi’s directory path and lead programs match how you quote and dispatch.",
        },
      ],
      sidebarWinners: [
        { label: "Portfolio-led remodel sales", winner: "A" },
        { label: "Directory-scale home reach", winner: "B" },
        { label: "Visual proof in-channel", winner: "A" },
      ],
      faqs: [
        {
          q: "Houzz Pro vs Angi for a general contractor?",
          a: "If your GC brand wins on project galleries and design collaboration, Houzz often fits. If homeowners in your city hire via Angi first, weight Angi higher—validate with CRM source data.",
        },
        {
          q: "What about Thumbtack?",
          a: "See Houzz Pro vs Thumbtack for marketplace-style alternatives.",
        },
        {
          q: "How does this relate to HomeAdvisor?",
          a: "Compare Houzz Pro vs HomeAdvisor and Angi vs HomeAdvisor—some buyers treat brands interchangeably; your data should not.",
        },
        {
          q: "How should I trust a comparison like this?",
          a: "Verify in your own CRM: we prioritize workflows operators actually run—proof assets, response time, dispute rules, and margin per booked job—not generic feature lists. See our methodology page for how we review software.",
        },
        {
          q: "Alternatives?",
          a: "Houzz Pro and Angi alternatives pages are linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons("houzz-pro-vs-angi", "houzz-pro", "angi", [
        RELATED.hzTb,
        RELATED.hzHa,
        RELATED.tbAngi,
        RELATED.angiHa,
      ]),
    }
  ),
  build(
    "houzz-pro-vs-homeadvisor",
    "houzz-pro",
    "homeadvisor",
    "Houzz Pro emphasizes visual discovery for remodel and design-build projects; HomeAdvisor is a pay-per-lead marketplace for home services. Choose Houzz Pro when portfolios drive trust; choose HomeAdvisor when marketplace lead volume and zip economics are already proven.",
    {
      quickVerdictParagraphs: [
        "Houzz Pro emphasizes visual discovery for remodel and design-build projects; HomeAdvisor is a pay-per-lead marketplace for home services. Choose Houzz Pro when portfolios drive trust; choose HomeAdvisor when marketplace lead volume and zip economics are already proven.",
        "HomeAdvisor leads often demand phone-first speed; Houzz leads may need design consultation follow-up—staff accordingly.",
        "Do not compare on lead count alone: remodel opportunities can be fewer but higher ticket.",
      ],
      heroCallouts: [
        { label: "Visual project marketing", winner: "A", reason: "Houzz rewards strong photography and ideation." },
        { label: "Marketplace lead flow", winner: "B", reason: "HomeAdvisor matches active project seekers to pros." },
        { label: "Shared-lead races", winner: "B", reason: "HomeAdvisor’s model rewards fastest responders." },
      ],
      featureComparison: [
        {
          feature: "Buyer journey",
          productA: "Browse portfolios → contact",
          productB: "Marketplace match → call",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Speed-to-lead pressure",
          productA: "Moderate to high",
          productB: "Very high",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Ticket size potential",
          productA: "Often higher on remodel",
          productB: "Varies by trade",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Subscription / fees",
          productA: "Common (platform + ads)",
          productB: "Primarily per-lead",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best for quick repairs",
          productA: "Less typical",
          productB: "Strong when category fits",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
      ],
      pricingComparison:
        "HomeAdvisor charges per lead for marketplace matches (rate varies by trade and territory). Houzz Pro usually has a fixed monthly subscription plus ad or lead spend, so you pay base cost even in slow weeks. You can allocate Houzz subscription across won projects if that matches your sales cycle, but still compare total Houzz spend divided by leads versus HomeAdvisor per-lead price times leads—normalized to gross margin per booked job after refunds.",
      prosConsA: {
        pros: ["Excellent for showcase-driven sales", "Aligns with planning-stage homeowners"],
        cons: ["Needs ongoing visual content", "Less suited to purely transactional repair brands"],
      },
      prosConsB: {
        pros: ["Direct marketplace demand", "Can scale with zip discipline"],
        cons: ["Shared leads", "Quality swings by season and territory"],
      },
      bestFor: [
        {
          heading: "Choose Houzz Pro when",
          body: "Your close rate rises when homeowners see finished work and want design guidance before signing.",
        },
        {
          heading: "Choose HomeAdvisor when",
          body: "You win on fast phone pickup and your trade converts marketplace leads profitably in target zips.",
        },
      ],
      sidebarWinners: [
        { label: "Portfolio / remodel positioning", winner: "A" },
        { label: "Marketplace speed contests", winner: "B" },
        { label: "Higher-ticket design cycles", winner: "A" },
      ],
      faqs: [
        {
          q: "Houzz vs HomeAdvisor for kitchen remodel leads?",
          a: "Kitchen remodels often start with inspiration—Houzz can fit earlier in the funnel. HomeAdvisor can still work if your market shops there first; test both on consultation-to-contract rate.",
        },
        {
          q: "Can I use both?",
          a: "Yes with strict CRM tagging and different follow-up playbooks for portfolio-led vs marketplace leads.",
        },
        {
          q: "What should I read next?",
          a: "How to get leads for contractors and landing pages for paid lead campaigns—especially if you send paid traffic to weak pages.",
        },
        {
          q: "Call tracking?",
          a: "Use the call tracking hub to attribute marketplace vs Houzz-sourced calls.",
        },
        {
          q: "Alternatives?",
          a: "Houzz Pro and HomeAdvisor alternatives are linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons("houzz-pro-vs-homeadvisor", "houzz-pro", "homeadvisor", [
        RELATED.hzTb,
        RELATED.hzAngi,
        RELATED.tbHa,
        RELATED.angiHa,
      ]),
    }
  ),
  build(
    "google-local-services-ads-vs-houzz-pro",
    "google-local-services-ads",
    "houzz-pro",
    "Google Local Services Ads capture high-intent Google Search and Maps queries with Google Screened listings; Houzz Pro reaches homeowners in a visual, project-planning context. Choose LSA for urgent, search-led hiring; choose Houzz Pro when portfolio discovery and longer remodel cycles drive revenue.",
    {
      quickVerdictParagraphs: [
        "Google Local Services Ads capture high-intent Google Search and Maps queries with Google Screened listings; Houzz Pro reaches homeowners in a visual, project-planning context. Choose LSA for urgent, search-led hiring; choose Houzz Pro when portfolio discovery and longer remodel cycles drive revenue.",
        "These channels measure success differently: LSA rewards call-ready intent; Houzz rewards visual trust and consultative follow-up.",
        "Pilot with the same territories. Compare booked margin and average ticket—not lead volume.",
      ],
      heroCallouts: [
        { label: "Google “near me” intent", winner: "A", reason: "LSA appears when homeowners search for immediate help." },
        { label: "Visual ideation feeds", winner: "B", reason: "Houzz users plan projects with photos." },
        { label: "Screened badge in Google UI", winner: "A", reason: "Verification shows in Search and Maps." },
      ],
      featureComparison: [
        {
          feature: "Intent timing",
          productA: "Often immediate / urgent",
          productB: "Often planning / design phase",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Asset requirements",
          productA: "Profile + screening",
          productB: "Portfolio photography + proof",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Primary surface",
          productA: "Google Search / Maps",
          productB: "Houzz app / site",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Pricing model",
          productA: "Pay per lead (auction)",
          productB: "Subscription + ads (typical)",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best for same-day calls",
          productA: "Very strong",
          productB: "Less typical",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
      ],
      pricingComparison:
        "LSA is pay per lead with auction pricing (changes by zip, job type, and competition). Houzz Pro is usually subscription plus paid promotion, not a single per-lead price—you have a higher fixed floor and variable upside with ads. LSA spend tracks lead volume closely; Houzz can cost about the same in a quiet month as a busy one—compare fully loaded monthly spend divided by booked jobs (or by qualified consultations) for each.",
      prosConsA: {
        pros: ["High-intent Google traffic", "Screened trust in SERP"],
        cons: ["Eligibility limits", "Needs fast call handling"],
      },
      prosConsB: {
        pros: ["Strong for remodel storytelling", "Aligns with visual buyers"],
        cons: ["Less urgent-repair native", "Requires content investment"],
      },
      bestFor: [
        {
          heading: "Choose LSA when",
          body: "Your crew lives on emergency and high-intent Google calls and you can pass Google screening.",
        },
        {
          heading: "Choose Houzz Pro when",
          body: "Your pipeline is design-build or remodel-heavy and photos sell the job before price talk.",
        },
      ],
      sidebarWinners: [
        { label: "Urgent Google search intent", winner: "A" },
        { label: "Portfolio-led remodel", winner: "B" },
        { label: "Google Screened visibility", winner: "A" },
      ],
      faqs: [
        {
          q: "Google LSA vs Houzz for contractors?",
          a: "If your revenue is repair-heavy and Google-driven, LSA is the natural test. If you sell staged remodels, Houzz may feed higher-ticket opportunities—confirm in CRM.",
        },
        {
          q: "What should I read about LSA?",
          a: "How Google Local Services Ads work (guide) plus this comparison’s links to reviews and alternatives.",
        },
        {
          q: "Speed-to-lead still matters on Houzz?",
          a: "Yes—slow follow-up wastes expensive attention. Read speed-to-lead for inbound inquiries.",
        },
        {
          q: "Website complement?",
          a: "Owned sites still matter; see website builders and landing pages for paid lead campaigns.",
        },
        {
          q: "Alternatives?",
          a: "Google LSA and Houzz Pro alternatives pages are linked below.",
        },
      ],
      moreComparisons: lgMoreComparisons(
        "google-local-services-ads-vs-houzz-pro",
        "google-local-services-ads",
        "houzz-pro",
        [RELATED.lsaTb, RELATED.lsaYelp, RELATED.hzTb, RELATED.barkHz],
        [
          { label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" },
          { label: "Landing pages for paid lead campaigns", href: "/lead-generation/guides/landing-pages-for-paid-lead-campaigns" },
        ]
      ),
    }
  ),
  build(
    "houzz-pro-vs-yelp-ads",
    "houzz-pro",
    "yelp-ads",
    "Houzz Pro supports portfolio-led discovery for remodel and design-build pros; Yelp Ads reach homeowners comparing businesses inside Yelp. Choose Houzz Pro when project photos and planning-stage buyers matter; choose Yelp Ads when Yelp is a dominant research channel and your star rating converts.",
    {
      quickVerdictParagraphs: [
        "Houzz Pro supports portfolio-led discovery for remodel and design-build pros; Yelp Ads reach homeowners comparing businesses inside Yelp. Choose Houzz Pro when project photos and planning-stage buyers matter; choose Yelp Ads when Yelp is a dominant research channel and your star rating converts.",
        "Yelp ads amplify an existing profile; Houzz rewards visual catalogs—different creative obligations.",
        "Test on the same metro with clear definitions of a qualified lead for each channel.",
      ],
      heroCallouts: [
        { label: "Remodel / design audience", winner: "A", reason: "Houzz centers on project inspiration." },
        { label: "Local directory ad placements", winner: "B", reason: "Yelp Ads monetize in-session comparisons." },
        { label: "Review sensitivity", winner: "B", reason: "Yelp efficiency tracks closely to rating and recency." },
      ],
      featureComparison: [
        {
          feature: "Core experience",
          productA: "Visual portfolios + pro tools",
          productB: "Yelp profile + ads",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Star rating impact",
          productA: "Moderate",
          productB: "Very high",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Project planning fit",
          productA: "Very strong",
          productB: "Varies",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Budget type",
          productA: "Subscription + ad spend typical",
          productB: "Campaign budgets",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Best in Yelp-dominant cities",
          productA: "N/A",
          productB: "Very strong",
          supportA: "none",
          supportB: "supported",
          stronger: "B",
        },
      ],
      pricingComparison:
        "Houzz Pro normally combines subscription fees with advertising or boosted placement; Yelp Ads are campaign spend only (no Houzz-style software subscription). Total Houzz cost is subscription plus promotions; Yelp is your ad budget alone. Derive cost per lead on each as monthly spend divided by qualified inquiries, then compare cost per booked job and average ticket—Houzz can still win on higher-ticket remodel economics even when monthly spend looks larger.",
      prosConsA: {
        pros: ["Built for showcase-driven remodel brands", "Aligns with visual research behavior"],
        cons: ["Requires strong photography", "Less plug-and-play than a simple Yelp boost"],
      },
      prosConsB: {
        pros: ["Efficient when Yelp is culturally used", "Fast to test with a solid profile"],
        cons: ["Weak if Yelp isn’t in your research path", "Ongoing budget tuning"],
      },
      bestFor: [
        {
          heading: "Choose Houzz Pro when",
          body: "You sell design-build or remodel work where ideation and proof drive the sale.",
        },
        {
          heading: "Choose Yelp Ads when",
          body: "Your customers compare pros on Yelp and your rating supports paid amplification.",
        },
      ],
      sidebarWinners: [
        { label: "Portfolio-led remodel", winner: "A" },
        { label: "Yelp-heavy metros", winner: "B" },
        { label: "Star-rating leverage", winner: "B" },
      ],
      faqs: [
        {
          q: "Houzz vs Yelp for a remodeling company?",
          a: "Remodelers often benefit from Houzz-style portfolios; Yelp can still work as a trust layer—test whether Yelp assists branded search before cutting it.",
        },
        {
          q: "Google vs these channels?",
          a: "See Google Local Services Ads vs Yelp Ads and Google LSA vs Houzz Pro.",
        },
        {
          q: "Reputation management?",
          a: "If reviews are weak, fix reputation fundamentals before scaling paid Yelp.",
        },
        {
          q: "Guides?",
          a: "Lead generation strategies for local business and paid vs organic leads.",
        },
        {
          q: "Alternatives?",
          a: "Houzz Pro and Yelp alternatives pages are linked from this comparison.",
        },
      ],
      moreComparisons: lgMoreComparisons("houzz-pro-vs-yelp-ads", "houzz-pro", "yelp-ads", [
        RELATED.lsaYelp,
        RELATED.yelpTb,
        RELATED.hzTb,
        RELATED.hzAngi,
      ]),
    }
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getLeadGenerationComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getLeadGenerationComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
