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
    bestForSummary: "Pay-per-lead marketplace with targeting, max lead prices, and weekly budgets.",
    rating: "4.4",
    startingPrice: "No membership fee; pay per lead",
  },
  angi: {
    name: "Angi",
    slug: "angi",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    logoSrc: "/Logos/angi.jpeg",
    visitUrl: "https://www.angi.com",
    bestForSummary: "Angi Ads (directory/advertising) and Angi Leads (pay-per-lead)—confirm which product a quote is.",
    rating: "4.3",
    startingPrice: "Quote — Leads or Ads",
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
    bestForSummary: "Inspect-then-buy credits; pay only when you choose to contact a lead.",
    rating: "4.0",
    startingPrice: "From $2.35/credit (leads cost multiple credits)",
  },
  "houzz-pro": {
    name: "Houzz Pro",
    slug: "houzz-pro",
    reviewHref: getLeadGenerationReviewUrl("houzz-pro"),
    logoSrc: "/Logos/houzz.jpeg",
    visitUrl: "https://www.houzz.com/pro",
    bestForSummary: "Remodel/design business software with optional Houzz advertising.",
    rating: "4.2",
    startingPrice: "Software plans; ads extra from $499/mo",
  },
  "google-local-services-ads": {
    name: "Google Local Services Ads",
    slug: "google-local-services-ads",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    logoSrc: "/Logos/google.jpeg",
    visitUrl: "https://ads.google.com/local-services-ads",
    bestForSummary: "Eligible local businesses capturing Google Search and Maps demand, paying per valid lead.",
    rating: "4.5",
    startingPrice: "Pay per valid lead",
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

/**
 * Pair-specific copy belongs in `extra`, not in the shared product registry `P`.
 * Do not store comparison editorial (“A is better than B for X”) as a global product property.
 * After a substantial A-vs-B update, audit related reviews/alternatives/hubs for factual consistency
 * (see `.cursor/rules/comparison-optimization.mdc`).
 */
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

const dim = (feature: string, productA: string, productB: string): ComparisonTemplateProps["featureComparison"][number] => ({
  feature,
  productA,
  productB,
  supportA: "text",
  supportB: "text",
});

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
    "Angi and HomeAdvisor are not two unrelated competing companies. Both are Angi Inc. brands. The useful question in 2026 is which Angi/HomeAdvisor product you are being offered—typically advertising/directory (Angi Ads lineage) versus Angi Leads marketplace connections still sold under the HomeAdvisor name—and whether the economics work for your jobs.",
    {
      pageHeading: "Angi vs HomeAdvisor (2026): What's the Difference?",
      seoTitle: "Angi vs HomeAdvisor (2026): What's the Difference? | BeltStack",
      seoDescription:
        "Angi and HomeAdvisor are Angi Inc. brands, not unrelated rivals. See Angi Ads vs Angi Leads, shared-lead terms, and how to judge cost per booked job.",
      quickVerdictHeading: "Short answer",
      quickVerdictSub: "This is not a traditional two-company bake-off.",
      researchNote:
        "Verified August 2026 against Angi Inc.’s 2025 Form 10-K, the Angi Pro Agreement, and Angi contractor product pages. Exact lead prices, exclusive-lead counts, and close rates are not published as one national figure—confirm the offer you receive.",
      productA: {
        ...P.angi,
        bestForSummary: "Angi Inc. ads, directory, and homeowner brand—often sold separately from Angi Leads.",
      },
      productB: {
        ...P.homeadvisor,
        bestForSummary: "Angi Leads marketplace still branded HomeAdvisor; same parent company as Angi.",
      },
      quickRecommendationA:
        "Treat this as Angi Inc.’s ads/directory side (often sold as Angi advertising or profile visibility)—not a separate company from HomeAdvisor.",
      quickRecommendationB:
        "Treat this as Angi Leads: pay-per-lead marketplace connections that still use HomeAdvisor branding on contractor tools and homeadvisor.com.",
      quickVerdictParagraphs: [
        "Angi Inc. still operates consumer and contractor brands including Angi, Angie’s List, HomeAdvisor, and Handy. People search “Angi vs HomeAdvisor” because the names were once independent, and contractors still see HomeAdvisor on signup, apps, and lead invoices.",
        "Contractor-facing “HomeAdvisor” is largely the Angi Leads marketplace. Angi also sells advertising and directory products in the Angi Ads lineage. A sales pitch that says “Angi” might mean ads, leads, a subscription, a pre-priced/Handy-style job, or a mix.",
        "The useful question is less “which company is better?” and more “which product am I buying, what am I paying for, and can my ticket size, close rate, and response speed support shared marketplace leads or an advertising commitment?”",
      ],
      relationshipContext: {
        heading: "Are Angi and HomeAdvisor the same company?",
        paragraphs: [
          "Historically, Angie’s List and HomeAdvisor were separate businesses. IAC combined HomeAdvisor with Angie’s List in 2017. In March 2021 the parent became Angi Inc.; Angie’s List was rebranded Angi and HomeAdvisor became “HomeAdvisor, powered by Angi.” Angi Inc.’s 2025 Form 10-K still lists Angi, Angie’s List, HomeAdvisor, and Handy as operating brands.",
          "HomeAdvisor still operates as a live consumer site and contractor brand. It is not a defunct nameplate. Contractor onboarding and the Angi Leads app still surface homeadvisor.com and related HomeAdvisor URLs. Older Angi filings described Angi Leads as the HomeAdvisor digital marketplace.",
          "That is why searchers still compare the names: leftover brand memory, two websites, and sales language that may not spell out ads versus leads. If you are evaluating lead generation today, start by identifying the product on the contract—marketplace leads, advertising/profile, subscription, or pre-priced work—then compare that product with independent channels such as Thumbtack or Google Local Services Ads. Do not treat Angi and HomeAdvisor as two unrelated vendors you can “split-test” without knowing which product each quote actually is.",
        ],
      },
      decisionGuideAHeading: "Choose Angi ads / directory products if:",
      decisionGuideBHeading: "Choose HomeAdvisor / Angi Leads if:",
      decisionGuideA: [
        "You are being sold advertising, directory, or profile visibility (Angi Ads lineage) and you already have reviews and a sales process that convert from shoppers who compare providers.",
        "You want longer-lived brand presence on Angi.com rather than paying primarily for each consumer match.",
        "Your jobs are planned projects where homeowners research brands before inviting bids—and you can verify the specific advertising terms, geography, and category in writing.",
      ],
      decisionGuideB: [
        "You need additional job flow and can staff speed-to-lead: Angi Leads / HomeAdvisor matches are frequently sent to several other approved pros, according to the Angi Pro Agreement.",
        "Your average ticket and gross margin can absorb paying for leads you do not win. The Pro Agreement states you pay for leads even if you do not win the job.",
        "You can track contact rate, appointments, close rate, and credits in CRM so you know cost per booked job—not just cost per lead name.",
      ],
      decisionGuideNeither: [
        "Low-margin or tiny-ticket work where shared-lead customer acquisition cost cannot fit even with a strong close rate.",
        "You cannot answer quickly or qualify on the first contact. Shared marketplace leads reward the first viable responder.",
        "The offer does not clearly state product type (ads vs leads), shared-lead behavior, pricing unit, contract length, or early-termination terms. Angi subscriptions can auto-renew and may include an early termination fee under the signed contract.",
        "Owned channels, Google Local Services Ads (if eligible), or another independent marketplace already fill your capacity at a better booked-job margin.",
      ],
      featureComparisonSub: "Pair-specific questions for this brand relationship—not a generic feature grid.",
      featureComparisonColumnLabel: "Question",
      featureComparison: [
        dim("Are these separate companies?", "No. Angi Inc. owns both brands.", "No. Same parent as Angi."),
        dim(
          "Current product / brand status",
          "Angi consumer brand plus advertising/directory products (Angi Ads lineage).",
          "Live HomeAdvisor brand; contractor marketplace commonly called Angi Leads."
        ),
        dim(
          "What are you actually buying?",
          "Typically profile, advertising, or bundled visibility—confirm the quote.",
          "Typically consumer matches / leads, sometimes via subscription or other Angi offerings."
        ),
        dim(
          "Lead model",
          "Not a pure pay-per-lead marketplace in the same way as Angi Leads—ads vs leads can be sold together.",
          "Pay-per-lead and related Angi Leads offerings (budgeted leads, subscriptions, other formats)."
        ),
        dim(
          "Shared vs exclusive leads",
          "Depends on product. Do not assume exclusivity unless the contract says so.",
          "Pro Agreement: leads are frequently sent to several other approved pros, including Angi Services."
        ),
        dim(
          "Advertising / profile exposure",
          "Core to Angi Ads / directory products.",
          "Basic membership can include a profile on HomeAdvisor.com and Angi.com, per Angi Inc.’s 2025 10-K."
        ),
        dim(
          "Pricing structure",
          "Quoted by market, category, and package. No reliable public national rate card.",
          "Usage- and market-based lead pricing; subscriptions and other packages exist. Confirm your invoice unit."
        ),
        dim(
          "Contract / commitment",
          "Advertising agreements vary. Verify term, auto-renewal, and cancellation in the documents you sign.",
          "Subscriptions may auto-renew. An early termination fee may apply per the signed Contract; cancel via Angi Customer Care."
        ),
        dim(
          "Lead credits / refunds",
          "Credit and dispute rules depend on the product. Verify before scaling.",
          "You pay for leads even if you do not win the job. Credits/disputes are offer-specific—do not assume a universal refund rate."
        ),
        dim(
          "How inquiries are delivered",
          "Varies by product (profile responses, advertised contacts).",
          "Matches, opt-in, and related flows. Angi implemented “homeowner choice” in January 2025; confirm current delivery in your offer."
        ),
        dim(
          "Best-fit contractor",
          "Teams that convert from directory/brand shoppers and can evaluate an advertising commitment.",
          "Teams that can win shared matches with speed, qualification, and enough job value/margin."
        ),
        dim(
          "Biggest drawback / risk",
          "Paying for the wrong Angi product, or treating ads like exclusive jobs.",
          "Paying for shared leads you lose, plus possible subscription/ETF exposure."
        ),
        dim(
          "How to evaluate ROI",
          "Cost per booked job and gross profit after ad spend—not impressions.",
          "Cost per booked job after credits, shared competition, and close rate—not cost per raw lead."
        ),
      ],
      pricingComparison:
        "Angi Inc. does not publish a single national lead price that applies to every trade and zip. Angi Inc.’s 2025 Form 10-K describes contractor offerings that include full-priced leads within a monthly budget, discounted leads in a subscription, double opt-in a-la-carte, and pre-priced offerings, plus advertising revenue alongside lead revenue. Contractors should treat any dollar figure a salesperson quotes as offer-specific.",
      pricingComparisonParagraphs: [
        "Angi Inc. does not publish a single national lead price that applies to every trade and zip. Angi Inc.’s 2025 Form 10-K describes contractor offerings that include full-priced leads within a monthly budget, discounted leads in a subscription, double opt-in a-la-carte, and pre-priced offerings, plus material advertising revenue alongside lead revenue.",
        "The Angi Pro Agreement states that leads are not guaranteed jobs, that a lead is frequently sent to several other approved pros, and that you pay for leads even if you do not win the job. Subscriptions can auto-renew; an early termination fee may apply under the signed Contract. On termination, the agreement language we reviewed does not provide a general refund of fees.",
        "Ask the rep to put in writing: product name (ads vs Angi Leads vs other), pricing unit, shared-lead behavior, credit/dispute process, term, auto-renewal, and any ETF. Then model cost per booked job with your own close rate. Do not scale on a verbal “average lead cost” alone.",
      ],
      roiGuidance: {
        heading: "How to evaluate ROI",
        paragraphs: [
          "Evaluate cost per booked job, not simply cost per raw lead. A cheap lead that never answers, never books, or loses to three other pros is more expensive than a higher-priced lead that becomes a profitable job.",
          "Use your numbers for: cost per lead, contact rate, appointment rate, close rate, lead credits or refunds you actually receive, shared/duplicate competition, average job value, gross profit, and customer lifetime or repeat value. If gross profit on the average won job cannot cover fully loaded CAC, the channel does not work—regardless of brand name.",
        ],
        example: {
          heading: "Hypothetical example (not Angi or HomeAdvisor pricing)",
          body: "20 leads × $50 illustrative average lead cost = $1,000 spend. If 3 become booked jobs, customer acquisition cost is about $333 per booked job. Replace every number with your invoices and CRM outcomes. If those 3 jobs cannot produce enough gross profit (and repeat work) to cover $333 plus follow-up labor, the offer is a no—even if the lead volume looks high.",
        },
      },
      prosConsA: {
        pros: [
          "Recognized Angi consumer brand for homeowners who comparison-shop directories",
          "Advertising/profile products can support visibility beyond a single match",
          "Same Angi Inc. ecosystem as HomeAdvisor—useful once you know which product you are buying",
        ],
        cons: [
          "“Angi” on a sales sheet may mean ads, leads, or a bundle—easy to compare the wrong thing",
          "Not a substitute for owned marketing or Google intent if shoppers never use Angi",
          "Contract and credit terms are offer-specific; there is no public one-price card",
        ],
      },
      prosConsB: {
        pros: [
          "HomeAdvisor remains a live brand; many homeowners still start there",
          "Angi Leads can add volume when you can win shared matches",
          "Profile presence on HomeAdvisor.com and Angi.com is part of the approved-pro model described in Angi Inc.’s 2025 10-K",
        ],
        cons: [
          "Shared-lead competition is explicit in the Pro Agreement—you often pay without winning the job",
          "Subscriptions may auto-renew and may carry an early termination fee",
          "Treating HomeAdvisor as an independent rival to Angi leads to the wrong test design",
        ],
      },
      bestFor: [
        {
          heading: "When marketplace / shared-lead acquisition can make sense",
          body: "You have unused crew capacity, you answer and qualify fast, and typical job value plus gross margin can cover paying for matches you lose to other approved pros. Track cost per booked job after credits—not lead count.",
        },
        {
          heading: "When advertising / profile products may make more sense",
          body: "Homeowners in your metro already shop Angi-branded directories, your reviews support conversion, and you prefer visibility over buying each match. Confirm geography, category, and term in the advertising agreement.",
        },
        {
          heading: "Who tends to struggle with these models",
          body: "Low-margin or one-off tiny tickets, slow follow-up, weak qualification, or no CRM attribution. Shared leads and pay-even-if-you-lose terms punish slow ops.",
        },
        {
          heading: "When neither Angi ads nor Angi Leads may be attractive",
          body: "If independent channels (Google Local Services Ads, Thumbtack, owned search/referral) already produce better booked-job margin, or the Angi/HomeAdvisor offer is opaque on product, sharing, or cancellation, pause spend until the paperwork is clear—or skip the channel.",
        },
      ],
      alternatives: [
        { name: "Thumbtack", href: getLeadGenerationReviewUrl("thumbtack"), logoSrc: "/Logos/thumbtack.jpeg", description: "Independent pay-per-lead marketplace—actual alternative to Angi Leads." },
        { name: "Google Local Services Ads", href: getLeadGenerationReviewUrl("google-local-services-ads"), logoSrc: "/Logos/google.jpeg", description: "Google-screened local search leads, independent of Angi Inc." },
        { name: "Bark", href: getLeadGenerationReviewUrl("bark"), logoSrc: "/Logos/bark.jpeg", description: "Separate credit-style marketplace across many service categories." },
      ],
      faqs: [
        {
          q: "Are Angi and HomeAdvisor the same company?",
          a: "Yes. Both are brands of Angi Inc. HomeAdvisor still operates as a distinct consumer and contractor brand. Contractor-facing HomeAdvisor is largely the Angi Leads marketplace. See our Angi review and HomeAdvisor review for product-level detail.",
        },
        {
          q: "Is HomeAdvisor the same as Angi Leads?",
          a: "In current contractor usage, HomeAdvisor is the long-running brand on the Angi Leads marketplace. Confirm the product name on your contract. Angi Ads is a different (advertising/directory) line.",
        },
        {
          q: "What’s the difference between Angi Ads and Angi Leads?",
          a: "Angi Ads is the advertising/directory lineage. Angi Leads is the pay-per-lead marketplace still associated with HomeAdvisor. A pitch that only says “Angi” is incomplete until you know which one you are buying.",
        },
        {
          q: "Do I pay if I don’t win the job?",
          a: "For Angi Leads, the Angi Pro Agreement states that you pay for leads even if you do not win the job, and that leads are frequently sent to several other approved pros. Credit and dispute rules vary by offer—get them in writing.",
        },
        {
          q: "Should I split-test Angi vs HomeAdvisor as two unrelated vendors?",
          a: "Not as if they were independent companies. First identify whether each quote is ads, Angi Leads, a subscription, or another Angi offering. Then compare that product with truly independent channels such as Thumbtack or Google Local Services Ads, using cost per booked job.",
        },
        {
          q: "How should I compare cost?",
          a: "Use cost per booked job after credits, shared competition, and follow-up labor. There is no reliable public national price list. Replace any example math on this page with your invoices and close rates.",
        },
        {
          q: "Where should I go next?",
          a: "Read the Angi and HomeAdvisor reviews, then Angi alternatives or HomeAdvisor alternatives if you need a channel outside Angi Inc. Compare Thumbtack vs Angi and Google Local Services Ads vs Angi when you want independent options.",
        },
      ],
      sidebarWinners: [
        { label: "Directory / advertising product", winner: "A" },
        { label: "Angi Leads marketplace", winner: "B" },
        { label: "HomeAdvisor name still used with contractors", winner: "B" },
      ],
      heroCallouts: [
        {
          label: "Ads / directory products",
          winner: "A",
          reason: "Angi Ads lineage is the advertising and profile side of Angi Inc.",
        },
        {
          label: "Pay-per-lead marketplace",
          winner: "B",
          reason: "HomeAdvisor branding still maps to Angi Leads connections.",
        },
        {
          label: "HomeAdvisor brand still live",
          winner: "B",
          reason: "homeadvisor.com and contractor tools still use the HomeAdvisor name.",
        },
      ],
      moreComparisons: lgMoreComparisons("angi-vs-homeadvisor", "angi", "homeadvisor", [
        RELATED.tbAngi,
        RELATED.lsaAngi,
        RELATED.lsaHa,
        RELATED.tbHa,
        RELATED.barkAngi,
      ]),
    }
  ),
  build(
    "bark-vs-thumbtack",
    "bark",
    "thumbtack",
    "Bark lets you inspect a matched request, see the credit cost, and pay only if you choose to contact. Thumbtack matches you from targeting preferences and, for direct leads, charges when a customer reaches out—controlled by max lead prices and a weekly budget, not by picking each lead from a feed.",
    {
      pageHeading: "Bark vs Thumbtack (2026): Cost, Leads & Best Fit",
      seoTitle: "Bark vs Thumbtack (2026): Cost, Leads & Best Fit | BeltStack",
      seoDescription:
        "Bark is inspect-then-buy credits (from $2.35 each). Thumbtack charges per lead when a customer reaches out, with budgets and no membership fee. Compare mechanics—not a fake CPL.",
      quickVerdictHeading: "Short answer",
      quickVerdictSub: "The useful difference is how you get charged—not which logo has “better leads.”",
      researchNote:
        "Verified August 2026 against Bark’s US professional pricing page and Help Center, and Thumbtack’s Pro marketing plus official community guidance. Bark lists a $2.35 standard credit price; individual leads cost a variable number of credits. Thumbtack does not publish a national cost-per-lead table. BeltStack has not purchased leads on either platform.",
      quickRecommendationA:
        "Choose Bark when you want to review each opportunity—job details, signals, and credit cost—and skip it without paying.",
      quickRecommendationB:
        "Choose Thumbtack when you want preference-based matching, a weekly budget and max lead prices, and customers contacting you inside a marketplace with no membership fee.",
      quickVerdictParagraphs: [
        "These are two independent marketplaces, not two skins of the same company. The decision is how a service professional acquires and pays for an opportunity: Bark is inspect-then-buy credits; Thumbtack is targeting plus budget, with a charge when a qualifying customer connection happens.",
        "On Bark (US Help Center and US pricing page, August 2026), you see matched leads for free. Credit cost is shown before you respond. You are charged credits only when you choose to contact. After that, Bark says you get the customer’s phone and email; follow-up messages are not extra. Bark states it does not take a commission. Standard credit price is $2.35; packs can lower the effective rate. Credits bought on or after November 1, 2025 expire after 3 months.",
        "On Thumbtack, Thumbtack says there is no charge to join, no annual fees, and no membership fees. You set targeting preferences, a max/exact lead price per service, and a weekly budget. Thumbtack staff have stated that you are charged for direct leads the moment the customer reaches out—not after you browse a feed and opt in to that specific job. A non-responsive customer is not, by itself, a published refund reason.",
        "Neither platform publishes a universal cost per booked job. The number that matters is marketplace spend ÷ booked jobs (then gross profit after that CAC). A $40 lead that books a $4,000 HVAC replacement is a different business than a $40 lead for a $120 one-time clean.",
      ],
      relationshipContext: {
        heading: "How you actually get a lead—and when you pay",
        paragraphs: [
          "Bark: A customer submits a request. Bark matches it to professionals. You see the lead in your feed with a credit cost and signals (Bark lists high hiring intent, urgent, first to respond, and verified phone). You can ignore it or use Bark’s “Not interested” control without spending credits. If you spend the credits, Bark says you receive phone and email and can message in-app. Further messages are free. You are not buying a guaranteed hire—you are buying the right to contact a customer who may also hear from other professionals.",
          "Thumbtack: A customer searches or submits a job. Thumbtack matches professionals using the targeting you set (services, area, hours, job preferences). Thumbtack’s Pro page says you receive leads from customers who choose you, that competition per lead is limited, and that your pricing and budget determine how many leads you get. A Thumbtack community administrator (August 2025) stated that you are always charged for direct leads the moment the customer reaches out. That is a different control surface than Bark’s per-lead purchase button: you mainly control fit before the match via targeting and price/budget, not by inspecting and declining each named opportunity without a charge.",
          "What happens before you get charged, then: On Bark, you can see the request and the credit price and still walk away. On Thumbtack, for direct leads, the charge is tied to the customer reaching out under your targeting—so wrong targeting is an expensive setting, not a skippable card in a feed. Confirm the current charge rules in your Thumbtack account; lead types can differ.",
        ],
      },
      decisionGuideAHeading: "Choose Bark if:",
      decisionGuideBHeading: "Choose Thumbtack if:",
      decisionGuideA: [
        "You want to inspect job details, signals, and credit cost and skip leads that do not fit—without paying.",
        "You will actually be selective: buying every lead in the feed defeats the model.",
        "You can respond quickly after unlocking contact details. Bark shows how many professionals have already responded; its Help Center states a customer can receive 5 responses.",
        "You can use credits before they expire (3 months from purchase for credits bought November 1, 2025 onward) and you understand that $2.35 is per credit, not per lead.",
      ],
      decisionGuideB: [
        "You want customers finding and contacting you inside a US local marketplace, with targeting and a weekly spend cap instead of a credit wallet.",
        "You will maintain job preferences, travel area, hours, and max lead prices so automatic direct-lead charges stay on work you actually want.",
        "Thumbtack has demand in your category and you can answer those conversations fast after the customer reaches out.",
        "You prefer no membership or annual platform fee (Thumbtack’s stated model) and will track spend against booked jobs, not raw lead count.",
      ],
      decisionGuideNeither: [
        "Paid marketplace CAC already exceeds gross profit on the jobs you actually win—fix close rate or ticket mix before buying more names.",
        "You cannot respond quickly. Shared or limited-competition marketplaces still reward the first viable reply.",
        "Referrals, Google Business Profile, or Google Local Services Ads (if eligible) already fill the calendar at a better booked-job margin.",
        "You need exclusive, high-ticket project flow—neither marketplace guarantees exclusivity. Houzz Pro or owned marketing may fit planned remodels better than either feed.",
      ],
      heroCallouts: [
        {
          label: "Inspect before you pay",
          winner: "A",
          reason: "Bark shows the request and credit cost; you pay only if you contact.",
        },
        {
          label: "Customer reaches out; budget caps spend",
          winner: "B",
          reason: "Thumbtack: targeting + max lead price + weekly budget; direct leads charged when the customer contacts you.",
        },
        {
          label: "Published credit price (not CPL)",
          winner: "A",
          reason: "Bark lists $2.35 per standard credit; lead cost = credits required × your effective credit rate.",
        },
      ],
      featureComparisonSub: "Mechanics that change whether you should buy a given opportunity.",
      featureComparisonColumnLabel: "Question",
      featureComparison: [
        dim(
          "How you receive opportunities",
          "Matched lead feed. Browse, filter, decide.",
          "Matches from targeting preferences; customers choose/contact you."
        ),
        dim(
          "When you pay",
          "When you spend credits to contact that lead.",
          "For direct leads: when the customer reaches out (Thumbtack staff, Aug 2025). Confirm current types in-account."
        ),
        dim(
          "Pricing unit",
          "Credits. Standard US price $2.35/credit; packs can discount. Lead cost = credits × rate.",
          "A lead price per connection. You set max/exact lead prices. No public national rate card."
        ),
        dim(
          "Inspect before paying?",
          "Yes. Cost and details are shown first. “Not interested” skips without credits.",
          "You shape matches via targeting and max price. Direct-lead charges are not a per-card “buy this one” step."
        ),
        dim(
          "Spend controls",
          "Buy only the leads you want. Optional auto top-up and credit-pack subscriptions. Credits expire.",
          "Weekly budget plus max lead prices. Thumbtack says budget/pricing determine lead volume."
        ),
        dim(
          "Competition",
          "Help Center: a customer can receive 5 responses. You can see how many have already responded.",
          "Thumbtack says competition per lead is limited. It does not publish a single number on the Pro page."
        ),
        dim(
          "Contact details",
          "Phone and email after you pay to respond, plus in-app Messenger.",
          "Conversation with the customer on Thumbtack (and related contact tools in the pro account)."
        ),
        dim(
          "Intent signals",
          "High hiring intent, urgent, first to respond, verified phone—plus job scope in the request.",
          "Thumbtack markets customers who choose you with intent to hire. Job completeness still varies—track your own close rate."
        ),
        dim(
          "Refunds / credits",
          "Credit return within 14 days for listed invalid reasons. Unresponsive customers and “hired someone else” do not qualify. Returns are credits, not automatically cash.",
          "A job not booking is not, by itself, a published refund. Thumbtack staff: non-responsive customers are not in the refund policy. Check current in-app rules."
        ),
        dim(
          "Credit / lead expiration",
          "Credits purchased from Nov 1, 2025 expire after 3 months. Unused credits cannot be refunded (Bark Help).",
          "No Bark-style credit wallet on the public Pro model. You pay lead prices against budget."
        ),
        dim(
          "Optional subscription",
          "Elite Pro is optional (20% credit-pack discount, 2 free weekly leads on 48-hour-old unanswered leads, ranking/directory perks). Not required to buy leads.",
          "No membership, annual, or join fee on Thumbtack’s Pro page."
        ),
        dim(
          "Biggest tradeoff",
          "Selectivity only helps if you skip weak leads and use credits before they expire. You still compete (up to 5 responses).",
          "You can be charged when a customer contacts you even if you never would have “bought” that job from a feed."
        ),
      ],
      pricingComparison:
        "Bark’s $2.35 is a credit price, not a lead price. Thumbtack does not publish a universal CPL. Compare both on cost per booked job using your own spend and CRM outcomes.",
      pricingComparisonParagraphs: [
        "Bark (US, August 2026): standard price is $2.35 per credit. Packs can lower the effective rate. Every lead shows how many credits it takes before you respond. Factors Bark lists: service type, job size/scope, location/demand, and customer engagement. Example math (hypothetical): a lead that costs 12 credits at $2.35 is $28.20; the same lead at a discounted pack rate of $2.00 would be $24. A bulk pack is not cheaper if you cannot use the credits in 3 months.",
        "Bark also sells optional Credit Pack Subscriptions (set up with Customer Success; weekly or monthly delivery; lower per-credit than one-off packs). Auto top-up can refill a low balance without a full subscription. Elite Pro, if you buy it, currently includes a 20% credit-pack discount and two free leads per week that apply only to leads with no responses after 48 hours; those free leads reset Mondays and are not return-eligible.",
        "Thumbtack: no published national price sheet. Official community guidance (2026) says Thumbtack uses exact lead prices: the price you set is what you pay unless a promotion applies. Max lead prices plus a weekly budget are the spend controls. Lead prices vary by service, job, and market. Do not use a blog’s “typical HVAC CPL” as your number. Read the range inside your pro account.",
        "Bark states no commission on the job. Thumbtack’s Pro page likewise emphasizes no membership/annual fees and paying for leads rather than a join fee. Neither claim is the same as “cheap leads.”",
      ],
      roiGuidance: {
        heading: "Compare cost per booked job—not cost per lead",
        paragraphs: [
          "Track, separately for each marketplace: spend, paid opportunities, conversations, estimates/appointments, booked jobs, revenue, and gross profit. Cost per booked job = total marketplace spend ÷ booked jobs. Customer acquisition cost for new customers is the same idea if you count unique new clients.",
          "The same $500 can be a win or a loss depending on ticket size, repeat work, and close rate. A landscaper buying recurring mowing can justify a higher CAC than a one-time $99 junk-haul. An HVAC replacement can absorb a higher lead cost than a $150 service call. Do not crown a platform from CPL alone.",
        ],
        example: {
          heading: "Hypothetical funnel — not a Bark or Thumbtack benchmark",
          body: "$500 spend → 20 paid opportunities → 12 conversations → 6 estimates → 3 booked jobs. CAC ≈ $167 per booked job. If those 3 jobs cannot produce enough gross profit (after labor, materials, and follow-up time) to cover $167 plus your time, the channel fails—whether the $500 was Bark credits or Thumbtack lead charges. Replace every number with your invoices and CRM.",
        },
      },
      prosConsA: {
        pros: [
          "See the request and credit cost before you pay",
          "Skip unfit leads without a charge",
          "Published $2.35 credit price and visible per-lead credit amounts",
          "No commission on won jobs (Bark’s stated model); optional Elite Pro, not required",
        ],
        cons: [
          "$2.35/credit is not the lead price—busy categories cost many credits",
          "Credits bought from Nov 1, 2025 expire in 3 months",
          "Up to 5 professionals can respond; unresponsive customers are not a credit-return reason",
          "Get Hired Guarantee applies to a first eligible pack/purchase with conditions—not every pack forever",
        ],
      },
      prosConsB: {
        pros: [
          "No membership, annual, or join fee (Thumbtack’s Pro page)",
          "Weekly budget and max lead prices cap spend",
          "Customers who choose you—Thumbtack’s stated high-intent story",
          "Limited competition per lead (stated; no public headcount)",
        ],
        cons: [
          "Direct-lead charge when the customer reaches out—you may pay for jobs you would have skipped on Bark",
          "No public national CPL; prices are account- and market-specific",
          "Non-response is not a published refund reason",
          "Wrong targeting or max prices can buy volume you cannot staff",
        ],
      },
      bestFor: [
        {
          heading: "HVAC, plumbing, and other urgent repair",
          body: "Speed still wins on both. Bark’s “urgent” and “first to respond” flags help you spend credits where delay is costly. Thumbtack’s customer-initiated contact can be a live conversation you must answer immediately. If you cannot staff the phone, neither marketplace is a lead-quality problem—it is an operations problem. Hypothetical: a $50 acquisition cost can be fine on a $4,000 replacement and fatal on a $179 diagnostic.",
        },
        {
          heading: "Recurring work (cleaning, lawn, maintenance)",
          body: "Judge CAC against the first year of the route, not the first visit. Bark lets you skip one-off tiny jobs if the credit price is high relative to a single clean. Thumbtack targeting and max prices should be set so you are not paying full freight for jobs you would never take. Track repeat rate in CRM or you will misread both channels.",
        },
        {
          heading: "Quoted projects (painting, remodeling, larger electrical)",
          body: "Higher tickets can absorb a higher lead cost if you close. Bark’s job-size pricing means larger scopes cost more credits—compare that to expected gross profit before you tap respond. Thumbtack max lead prices should be set from contribution margin, not from “I want more volume.” Neither platform replaces a qualification script.",
        },
        {
          heading: "Can you run both?",
          body: "Yes—they are independent. A useful test is not “30–60 days of vibes.” Pick a calendar window and a hard budget per channel. Tag every opportunity in CRM. Compare spend, conversations, estimates, booked jobs, revenue, and gross profit. Kill the channel whose CAC exceeds your gross-profit target after refunds/credit returns. If both clear the hurdle, keep the better CAC and use the other only when the first has no capacity. Deduplicate the same customer who appears on both.",
        },
      ],
      alternatives: [
        {
          name: "Google Local Services Ads",
          href: getLeadGenerationReviewUrl("google-local-services-ads"),
          logoSrc: "/Logos/google.jpeg",
          description: "Pay per Google-screened lead when search is already how customers find you.",
        },
        {
          name: "Angi",
          href: getLeadGenerationReviewUrl("angi"),
          logoSrc: "/Logos/angi.jpeg",
          description: "Directory/ads vs Angi Leads—different products; see Angi vs HomeAdvisor.",
        },
      ],
      faqs: [
        {
          q: "Is Bark cheaper than Thumbtack?",
          a: "Not as a universal fact. Bark’s published unit is $2.35 per credit; a lead that takes many credits can cost more than a Thumbtack lead in your account. Compare spend ÷ booked jobs on both, with the same job types.",
        },
        {
          q: "Does $2.35 mean each Bark lead costs $2.35?",
          a: "No. That is the standard price of one credit. Leads require a variable number of credits shown before you respond.",
        },
        {
          q: "When does Thumbtack charge me?",
          a: "Thumbtack staff have said you are charged for direct leads the moment the customer reaches out. Targeting, max lead prices, and weekly budget determine what can reach you. Confirm current lead types and terms in your account.",
        },
        {
          q: "Do Bark credits expire?",
          a: "Bark’s Help Center: credits purchased from November 1, 2025 expire 3 months after purchase (12 months if bought before that date). Unused credits cannot be refunded. The US pricing page also states credits are valid for 3 months.",
        },
        {
          q: "Does Bark refund unresponsive customers?",
          a: "No. Bark lists unresponsive customers and “hired someone else” as common decline reasons. Eligible returns include invalid contact details, duplicates, wrong service, and similar quality failures—within 14 days, at Bark’s discretion. Approved returns are credits, not automatically cash.",
        },
        {
          q: "How many pros compete on each lead?",
          a: "Bark’s Help Center says a customer can receive 5 responses and that you can see how many have already responded. Thumbtack says competition is limited per lead but does not publish a headcount on its Pro page. Do not assume a blog’s 3–5 figure for Thumbtack.",
        },
        {
          q: "Do I need Bark Elite Pro?",
          a: "No. You can buy credits without it. Elite Pro is an optional paid plan (credit-pack discount, limited free weekly leads on older unanswered requests, ranking/directory perks). Thumbtack does not have a comparable required membership.",
        },
        {
          q: "Bark vs Thumbtack for contractors?",
          a: "If you want to cherry-pick requests, start with Bark’s inspect-then-buy model. If you want customers contacting you under targeting and a weekly cap, Thumbtack fits that mechanic. Run both only with tagged CRM and a booked-job scorecard.",
        },
        {
          q: "Which has better lead quality?",
          a: "BeltStack cannot rank them from unpublished conversion data. Use your contact rate, estimate rate, close rate, average job value, and gross profit after spend. Vendor marketing is not a close-rate study.",
        },
      ],
      sidebarWinners: [
        { label: "Inspect before paying", winner: "A" },
        { label: "Weekly budget + customer-initiated direct leads", winner: "B" },
        { label: "Published per-credit price", winner: "A" },
      ],
      moreComparisons: lgMoreComparisons("bark-vs-thumbtack", "bark", "thumbtack", [
        RELATED.tbAngi,
        RELATED.tbHa,
        RELATED.lsaTb,
        RELATED.lsaBark,
        RELATED.barkAngi,
        RELATED.barkHa,
        RELATED.hzTb,
      ]),
    }
  ),
  build(
    "houzz-pro-vs-thumbtack",
    "houzz-pro",
    "thumbtack",
    "Houzz Pro vs Thumbtack is not two interchangeable lead marketplaces. Thumbtack sells homeowner contacts you pay for when a matching customer reaches out. Houzz Pro is remodeling/design business software; Houzz directory presence and a separate advertising package (from $499/month on the US pricing page) are additional acquisition layers—not a Thumbtack-style per-lead invoice.",
    {
      pageHeading: "Houzz Pro vs Thumbtack (2026): Leads, Cost & Best Fit",
      seoTitle: "Houzz Pro vs Thumbtack (2026): Leads, Cost & Best Fit | BeltStack",
      seoDescription:
        "Houzz Pro is remodel/design software plus optional Houzz ads. Thumbtack is a pay-per-lead marketplace with no membership fee. Compare payment, software, and booked-job economics—not two identical lead SKUs.",
      quickVerdictHeading: "First decide what problem you are buying a solution for.",
      quickVerdictSub: "Thumbtack buys marketplace demand. Houzz Pro is software; Houzz ads are a separate marketing line.",
      researchNote:
        "Verified September 2026 from Houzz Pro pricing (including the designer-facing plan view), Houzz Pro features, Houzz Pro Help on cancellation, Houzz Pro trial and Premium Profile pages, Thumbtack’s Pro page, and Thumbtack Help on exact lead prices and pay-for-leads. Houzz does not publish a national per-lead price. Thumbtack does not publish a national CPL. BeltStack has not subscribed to Houzz Pro, bought Houzz advertising, or purchased Thumbtack leads.",
      quickRecommendationA:
        "Choose Houzz Pro when you are a remodeler, builder, or design professional who needs CRM, estimates, project tools, and invoicing—and you will treat Houzz marketing/ads as a separate decision from the software subscription.",
      quickRecommendationB:
        "Choose Thumbtack when your primary gap is more homeowner contacts across local services, you want no membership fee, and you will run exact lead prices plus a weekly budget against booked-job CAC.",
      quickVerdictParagraphs: [
        "A contractor searching “Houzz Pro vs Thumbtack” is often asking whether Houzz will “get them leads like Thumbtack.” That is the wrong unit. Thumbtack’s Pro page (2026) states there is no charge to join, no annual fees, and no membership fees. You pay for leads: customers choose professionals, you set lead prices and a budget, and competition per lead is limited. Houzz Pro’s current US pricing page sells named software plans (Design, Pro, Teams on the designer-facing view) and, separately, an Advertising Package starting at $499/month. Houzz Pro’s features documentation describes lead generation as subscription/flat-rate rather than pay-per-lead.",
        "Houzz still has a consumer marketplace. Houzz states remodeling and design professionals can create a profile and appear in Find Professionals. Homeowners browse projects and search for pros. A free listing is not Thumbtack’s targeting-and-budget machine. Premium Profile, website, and email tools sit on higher Houzz Pro marketing/software tiers. Targeted ads are an add-on on the pricing page we fetched—geographic, service, and project-type targeting, with inquiries delivered from those placements. Do not assume the software subscription includes advertising unless the quote says so.",
        "Thumbtack does not attempt to replace Houzz Pro after the hire: estimates, selections, change orders, schedules, client dashboard, takeoffs, and online payments are Houzz Pro’s job. Houzz Pro does not attempt to be a broad local-services lead marketplace for a house cleaner or emergency plumber. If you need customers this month, compare Thumbtack’s variable lead spend to Houzz advertising—not to the software seat. If you need to run the job, compare Houzz Pro to other contractor software, not to Thumbtack.",
      ],
      relationshipContext: {
        heading: "What are you actually buying?",
        paragraphs: [
          "Thumbtack: you are buying homeowner contacts inside Thumbtack’s marketplace. Direct leads: Thumbtack Help states that when a customer reaches out from search results and the job matches your preferences, you auto-pay the exact lead price you set. Opportunities (open leads): you reach out first and pay the shown price only if the customer responds. Weekly budget is the cap across services. Thumbtack’s Pro page: customers choose you; limited competition; no hidden fees or contracts on that marketing page.",
          "Houzz Pro software: you are buying an all-in-one platform Houzz positions for home building, remodeling, and design. The designer-facing pricing view lists Design (CRM, estimates and proposals, invoices, online payments, 3D floor plans, mood boards, selections, product clipper), Pro (adds takeoffs, bid management, change orders, budget, contracts, project schedule, daily logs), and Teams (unlimited users plus marketing tools Houzz lists as premium profile, email marketing, custom website, dedicated support). Extra users are priced per seat on Design/Pro. Houzz’s pricing FAQ: 30-day free trial; cancel during the trial before the annual subscription begins.",
          "Houzz advertising / lead generation: a separate Advertising Package on the US pricing page, starting at $499/month. Houzz Pro features: ads target geography, services, project type, and budget ranges; inquiries come from those placements; you can turn ads on or off. Houzz Help account settings distinguish “ad and lead subscriptions” from the software plan. Houzz does not invoice a Thumbtack-style exact price per named contact on the public pricing page.",
          "Typical Thumbtack path: homeowner uses Thumbtack → describes the job → sees professionals → contacts you (direct lead, auto-charge) or you contact an Opportunity → you quote and compete to close. Typical Houzz path: homeowner browses Houzz photos, ideabooks, or Find Professionals (or sees a targeted ad) → contacts the profile → inquiry lands in Houzz Pro CRM (Houzz also says CRM can capture forms, email, or manual leads) → estimate/proposal → project tools → invoice/payment. Do not blend software ROI with acquisition CAC.",
        ],
      },
      decisionGuideAHeading: "Choose Houzz Pro if…",
      decisionGuideBHeading: "Choose Thumbtack if…",
      decisionGuideA: [
        "You remodel, design, or build, and you need one system for CRM, estimates, selections, schedule, and invoicing—not only a lead inbox.",
        "Homeowners in your category already research visually on Houzz, and you will maintain project photos and reviews.",
        "You have read the Pro Services Agreement: Houzz Help states most Houzz Pro plans are annual 12-month contracts, with a 30-day non-renewal request before the next term, and that early cancellation is generally not available.",
        "You will price Houzz advertising separately (from $499/month on the US pricing page we fetched) and will not pretend the software seat is your CPL.",
      ],
      decisionGuideB: [
        "Your main problem is more local customers this month across trades Thumbtack actually matches—not a construction ERP.",
        "You want no membership fee, exact lead prices, and a weekly budget you can raise or hit as a hard cap (Thumbtack Help).",
        "You can staff replies after the customer reaches out. Direct leads charge when they contact you under targeting; you do not inspect-and-skip each name the way Bark does.",
        "A house cleaner, plumber, or other non-visual trade would get little from Houzz Pro takeoffs and 3D plans even if a Houzz listing exists.",
      ],
      decisionGuideNeither: [
        "Gross profit cannot support paid CAC, or referrals/GBP already fill the calendar.",
        "You need emergency same-day search intercept—that is a Google Local Services Ads question, not this pair.",
        "You will not keep a Houzz portfolio current and you will not answer Thumbtack messages quickly.",
        "You only wanted “a cheap monthly lead plan.” Houzz software is an annual-style software commitment; Thumbtack is variable lead spend. Neither is a magic CPL.",
      ],
      featureComparisonColumnLabel: "What you’re comparing",
      featureComparisonSub:
        "Do not compare a Houzz Pro software invoice to a Thumbtack lead. Split software, Houzz ads, and Thumbtack spend.",
      featureComparison: [
        dim(
          "Primary job",
          "Business software for remodel/design/build (CRM through payment), plus Houzz marketplace presence and optional ads.",
          "Homeowner-to-pro marketplace. Pay for matching customer contacts. Not project-management software."
        ),
        dim(
          "Where the customer starts",
          "Houzz photos, ideabooks, Find Professionals search, or targeted Houzz ads.",
          "Thumbtack search or a submitted job; the customer chooses professionals on Thumbtack."
        ),
        dim(
          "What creates a charge",
          "Software: the subscription (trial then typically an annual term). Ads: the advertising package—not a public per-inquiry meter. Profile inquiries are not billed like Thumbtack exact prices.",
          "Direct lead: customer reaches out from search results and the job matches preferences—you auto-pay the exact price. Opportunity: you pay the shown price if they respond."
        ),
        dim(
          "Public price shape",
          "US pricing: software plans (indexed Design/Pro/Teams dollars include $99 / $199 / from $399+ on the designer-facing page family) plus ads from $499/mo. Extra seats $50/user/mo on Design/Pro in the view we fetched. Confirm your trade’s live page.",
          "No membership fee (Pro page). Exact lead prices per service + weekly budget. No national rate card."
        ),
        dim(
          "Commitment",
          "Pricing FAQ: 30-day trial, then annual subscription unless you cancel in trial. Help: most plans 12-month; 7-day post-trial grace (one month billed); 30-day non-renewal notice; generally no mid-term cancel.",
          "Pro page: no hidden fees or contracts on that marketing table. Pause by lowering budget / job preferences. You still pay for leads already incurred."
        ),
        dim(
          "After the lead",
          "CRM pipeline, estimates/proposals, takeoffs (Pro+), selections, change orders, schedule, client dashboard, invoices, card/ACH payments, QuickBooks Online.",
          "Messaging and the job thread. Thumbtack lists partner tools (e.g. field-service platforms) rather than replacing your estimate/project stack."
        ),
        dim(
          "External leads",
          "Houzz Pro features: capture leads from Houzz, forms, email, or manually; track source. No Thumbtack native integration listed on the features page we reviewed.",
          "You can export or copy a Thumbtack customer into another CRM by hand. That is an ops workflow, not a documented Houzz connector."
        ),
        dim(
          "Competition / sharing",
          "Homeowners can contact multiple Houzz profiles. Ads buy placement/targeting; Houzz does not publish a “sent to N contractors” lead-share count for every inquiry.",
          "Customers choose you; competition per lead is limited (Pro page). Thumbtack does not publish a headcount. Limited ≠ exclusive."
        ),
        dim(
          "Refunds / bad leads",
          "No Thumbtack-style per-lead credit table on public Houzz pricing. Software/ads follow the signed Pro Services Agreement and cancellation Help—not “this inquiry didn’t book.”",
          "Credits/refunds are documented for specific cases (duplicates, some smarter-matching declines, some Thumbtack Numbers 72-hour cases). Hired-someone-else is not automatic."
        ),
        dim(
          "Best-fit trade",
          "Kitchen/bath, remodel, design-build, interior design, architecture, landscape design—visual, planned, higher-ticket work.",
          "Broad local services: cleaning, handyman, trades, and remodelers who want marketplace volume without buying construction software."
        ),
        dim(
          "Biggest tradeoff",
          "You may pay for software (and possibly ads) whether or not a given week produces hires. You get the workflow after the yes.",
          "You pay when contacts happen. You still need some other system to estimate, schedule, and collect."
        ),
      ],
      pricingComparison:
        "Houzz software, Houzz advertising, and Thumbtack leads are three different expense types. Do not convert a monthly Houzz invoice into a fake CPL.",
      pricingComparisonParagraphs: [
        "Thumbtack: no join/annual/membership fee on the Pro page. You see exact lead prices in the account. Weekly budget stops new leads when hit (Help example: $10 lead price and $90 weekly budget → 9 leads). Prices vary by service, job, and market. Do not use a blog’s “average HVAC CPL.”",
        "Houzz Pro software: 30-day trial of the Essential package (trial page). After trial, Houzz’s pricing FAQ says the annual subscription begins unless you cancel. Indexed US software prices on the designer-facing pricing page family: $99/month, $199/month, and Teams starting at $399/month. Extra users $50/month on Design/Pro in the page we fetched. Other Houzz pricing renderings exist (including $60/user/month extra-seat copy). Get the line items in writing.",
        "Houzz advertising: add-on starting at $499/month on the US pricing page. Custom advertising packages: Houzz lists (888) 510-9389. Houzz describes this as targeted ads and subscription/flat-rate lead access—not pay-per-lead. Third-party “average Houzz lead cost” figures are not BeltStack facts.",
        "To compare unlike costs: (1) software dollars vs time saved / replacing other tools; (2) Houzz ads + any other Houzz marketing vs booked Houzz-sourced jobs; (3) Thumbtack spend minus credits vs booked Thumbtack jobs. Illustrative only: $199 software + $499 ads = $698/month before you have a single hire. Ten Thumbtack leads at $40 is $400 variable spend. Those numbers do not declare a winner—they show why mixing the invoices hides CAC.",
      ],
      roiGuidance: {
        heading: "Software cost is not customer-acquisition cost",
        paragraphs: [
          "Vendor fact: neither company publishes your close rate. BeltStack illustrative model—replace every number.",
          "Scorecard Thumbtack: spend, leads, qualified, estimates, booked jobs, gross profit, credits, cost per booked job.",
          "Scorecard Houzz: software + seats + processing fees you actually pay; advertising/marketing if purchased; Houzz-sourced leads; booked Houzz-sourced jobs; plus whether the software replaced another estimating/PM tool (that savings is not CAC).",
          "Maximum affordable Thumbtack lead cost (planning framework, not a bid): gross profit per completed job × lead-to-job close rate × the share of contribution you will spend on acquisition. Example: $2,000 × 20% × 25% = $100. Houzz ads need the same booked-job math, using ad spend—not the software seat—in the numerator.",
          "You can run both if you staff both. Houzz Pro features say you can add leads manually. Copy the Thumbtack customer into Houzz Pro CRM after you decide to bid. Deduplicate. Do not invent a native Thumbtack integration.",
        ],
        example: {
          heading: "Remodeler vs interior designer vs house cleaner vs plumber (fit, not winners)",
          body: "A kitchen remodeler may want Houzz photos and Houzz Pro selections/estimates, and still buy Thumbtack jobs when the calendar has holes. An interior designer often lives in Houzz visual discovery; Thumbtack may be secondary. A house cleaner typically needs recurring local contacts—Thumbtack’s marketplace is the closer product; Houzz Pro takeoffs and 3D plans are the wrong category. A plumber with emergency demand should look at Google Search/Maps pay-per-lead before treating Houzz Pro as a lead network. None of these are official vendor cutoffs.",
        },
      },
      prosConsA: {
        pros: [
          "Software covers estimate → project → invoice, not only the first message",
          "Houzz visual/directory discovery for planned home projects",
          "CRM accepts Houzz, form, email, and manual leads",
          "Advertising is a separate, targetable package—not hidden inside a fake CPL",
        ],
        cons: [
          "Annual-style software commitment (Help: most plans 12 months)",
          "Ads from $499/month are not a trial-sized lead test",
          "Weak fit for emergency or non-visual trades",
          "Software + ads + seats can exceed Thumbtack spend before a hire",
        ],
      },
      prosConsB: {
        pros: [
          "No membership fee; pay when matching contacts happen",
          "Exact prices + weekly budget; pause by turning spend down",
          "Broad local-service categories, not only remodel/design",
          "Customer chooses you; limited competition (not exclusivity)",
        ],
        cons: [
          "Does not replace estimating, scheduling, or invoicing software",
          "Direct leads charge when the customer reaches out—targeting errors are expensive",
          "No public national CPL; quality varies by zip",
          "Refunds are specific cases, not “they hired someone else”",
        ],
      },
      bestFor: [
        {
          heading: "Use both?",
          body: "Operationally yes for a remodeler who generates contacts on Thumbtack (and elsewhere) and runs the job in Houzz Pro. Enter the customer manually. Track Thumbtack CAC separately from Houzz software and Houzz ads. Houzz Pro vs Angi is a different Houzz-ecosystem question if you are comparing directories, not this software-vs-marketplace split.",
        },
        {
          heading: "When Thumbtack is the acquisition test",
          body: "You need more jobs, you can answer fast, and you will not sign a 12-month software contract to “get leads.” Measure booked-job CAC after credits.",
        },
        {
          heading: "When Houzz Pro is the operations test",
          body: "You already have demand (referrals, Houzz profile, Google, Thumbtack) and the bottleneck is estimates, selections, and getting paid. Buy software for that bottleneck. Add Houzz ads only if you can afford the package and will measure Houzz-sourced booked jobs.",
        },
      ],
      heroCallouts: [
        {
          label: "Winner for remodel/design software after the lead",
          winner: "A",
          reason: "CRM, estimates, projects, invoices, and payments are Houzz Pro’s product.",
        },
        {
          label: "Winner for variable marketplace customer contacts",
          winner: "B",
          reason: "No membership fee; exact lead prices and a weekly budget.",
        },
        {
          label: "Houzz ads are not the software seat",
          winner: "A",
          reason: "US pricing lists advertising from $499/month as an add-on.",
        },
      ],
      faqs: [
        {
          q: "Is Houzz Pro better than Thumbtack?",
          a: "They answer different jobs. Thumbtack sells marketplace contacts. Houzz Pro sells remodel/design software plus optional Houzz marketing. Compare booked-job CAC for acquisition and workflow fit for software—not a single winner.",
        },
        {
          q: "Is Houzz Pro a lead-generation service? Does it provide leads?",
          a: "It can, but that is not the whole product. A Houzz profile can receive inquiries. Targeted advertising is a separate package on the US pricing page. Software CRM can also store leads you add yourself. Houzz describes lead access as subscription/flat-rate, not pay-per-lead.",
        },
        {
          q: "Does Houzz Pro charge per lead?",
          a: "Not as a public Thumbtack-style exact price per contact. You pay for software, and separately for ads if you buy them. Confirm the quote.",
        },
        {
          q: "Does Thumbtack have a monthly fee?",
          a: "Thumbtack’s Pro page: no charge to join, no annual fees, no membership fees. You pay for leads under prices and a weekly budget.",
        },
        {
          q: "Is Houzz Pro worth it just for leads?",
          a: "Treat that as an advertising/profile question, not a reason to buy takeoffs and 3D plans. Compare Houzz ad spend to Thumbtack booked-job CAC. Software value is separate.",
        },
        {
          q: "Can Houzz Pro replace Thumbtack? Can Thumbtack replace Houzz Pro?",
          a: "Houzz software does not replace a pay-per-lead marketplace. Thumbtack does not replace Houzz Pro’s estimate/project/invoice stack. A remodeler often needs an acquisition channel and a job-running system.",
        },
        {
          q: "Can I use Thumbtack leads in Houzz Pro?",
          a: "Manually: Houzz Pro features say you can add leads by hand and track source. We did not find a native Thumbtack integration on Houzz’s features page.",
        },
        {
          q: "Does Houzz Pro include advertising?",
          a: "The US pricing page lists an Advertising Package as an add-on starting at $499/month. Teams includes some marketing tools (premium profile, email, website). Do not assume ads are in every software plan.",
        },
        {
          q: "Which is better for remodelers, interior designers, or contractors?",
          a: "Remodelers and designers: Houzz software and visual discovery often matter; Thumbtack can still buy extra jobs. General contractors: same split—PM software vs marketplace. Cleaners and many emergency trades: Thumbtack (or Google) is usually the acquisition comparison; Houzz Pro is the wrong category unless you also run design-build work.",
        },
        {
          q: "Which is cheaper?",
          a: "Not as a universal fact. Houzz software is a subscription (often annual). Houzz ads start at $499/month on the public US page. Thumbtack is variable. A month of Houzz ads can cost more than a cautious Thumbtack budget—or less than a hot week of expensive leads.",
        },
      ],
      alternatives: [
        {
          name: "Houzz Pro review",
          href: getLeadGenerationReviewUrl("houzz-pro"),
          logoSrc: "/Logos/houzz.jpeg",
          description: "Software plans, trial, and how Houzz marketing sits beside the subscription.",
        },
        {
          name: "Thumbtack review",
          href: getLeadGenerationReviewUrl("thumbtack"),
          logoSrc: "/Logos/thumbtack.jpeg",
          description: "Exact lead prices, weekly budget, and when a direct lead charges.",
        },
        {
          name: "Google LSA vs Thumbtack",
          href: getLeadGenerationCompareUrlFromSlug("google-local-services-ads-vs-thumbtack"),
          logoSrc: "/Logos/google.jpeg",
          description: "If the real question is Search/Maps demand vs Thumbtack marketplace contacts.",
        },
        {
          name: "Bark vs Thumbtack",
          href: getLeadGenerationCompareUrlFromSlug("bark-vs-thumbtack"),
          logoSrc: "/Logos/bark.jpeg",
          description: "Inspect-then-buy credits vs Thumbtack’s customer-initiated charge.",
        },
      ],
      sidebarWinners: [
        { label: "Remodel/design software after the hire", winner: "A" },
        { label: "Variable marketplace contacts", winner: "B" },
        { label: "No membership fee", winner: "B" },
      ],
      moreComparisons: lgMoreComparisons("houzz-pro-vs-thumbtack", "houzz-pro", "thumbtack", [
        RELATED.lsaTb,
        RELATED.barkTb,
        RELATED.hzAngi,
        RELATED.lsaHz,
        RELATED.tbAngi,
      ]),
    }
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
    "Google Local Services Ads and Thumbtack can both charge per lead. They are not the same product. LSA sells a seat in Google’s Search and Maps local-services auction. Thumbtack sells customer contacts inside Thumbtack’s marketplace. Compare them on how the customer arrives, what you can control before a charge, and cost per booked job—not on which logo sounds higher-intent.",
    {
      pageHeading: "Google Local Services Ads vs Thumbtack (2026): Cost & Leads",
      seoTitle: "Google Local Services Ads vs Thumbtack (2026): Cost & Leads | BeltStack",
      seoDescription:
        "Google LSA vs Thumbtack is not two interchangeable pay-per-lead sources. LSA is a Google Search/Maps auction you pay per valid lead. Thumbtack is a marketplace that charges when a customer contacts you under your targeting. Compare payment triggers, credits, and booked-job math.",
      quickVerdictHeading: "Both can charge per lead. They intercept demand differently.",
      quickVerdictSub: "Google sells auction visibility on Search and Maps. Thumbtack sells marketplace contacts.",
      researchNote:
        "Verified September 2026 from Google Local Services Help (how leads work, automated lead credits, bidding, ad rankings, Google Verified badge) and Thumbtack Help plus Thumbtack’s Pro page (pay-for-leads, exact lead prices, smarter-matching refunds, Thumbtack numbers, background checks). Google does not publish a national CPL. Thumbtack does not publish a national lead-price table. BeltStack has not run LSA campaigns, bought Thumbtack leads, disputed credits, or measured close rates.",
      quickRecommendationA:
        "Choose Google Local Services Ads when eligible customers already search Google for the job, you can complete Google’s screening, and you will staff calls/messages so auction responsiveness does not work against you.",
      quickRecommendationB:
        "Choose Thumbtack when you want marketplace demand with exact lead prices and a weekly budget, and you will keep job preferences tight so customer-initiated direct leads stay on work you actually take.",
      quickVerdictParagraphs: [
        "Someone typing “emergency plumber near me” into Google is not doing the same thing as someone filling out a Thumbtack job. Google Local Services Ads (LSA) appear in Google Search and Maps results for eligible local services. You pay for valid leads—Google states you do not pay for ad clicks. Thumbtack’s Pro page says there is no charge to join, no annual fees, and no membership fees; you pay for leads from customers who choose you, with pricing and budget determining how many you get.",
        "A “lead” is not defined the same way. Google charges after it assesses a valid contact from your LSA (call, message, voicemail engagement, booking, or a returned missed call that connects, per current Help). Thumbtack Help: when a customer reaches out to you directly from search results and the job matches your preferences, you auto-pay the exact lead price you set. Opportunities (also called open leads) work the other way: you reach out first and pay the shown price only if the customer responds.",
        "Do not pick LSA because “Google leads are better.” Do not pick Thumbtack because it “looks cheaper.” Google publishes no national plumber or HVAC CPL. Thumbtack publishes no national rate card. The number that decides the channel is spend ÷ booked jobs (then gross profit after that CAC). A more expensive lead can win; a cheaper lead that never books can lose.",
      ],
      relationshipContext: {
        heading: "Google LSA vs Thumbtack: what are you actually buying?",
        paragraphs: [
          "Google Local Services Ads: you are paying to compete in Google’s local-services auction when people search for relevant services on Google Search and Maps. You set an average weekly budget and a bidding mode (Maximize Leads, target cost per lead, or max per lead). Ads are ranked by an auction that Google documents as bid plus overall profile quality—not “pay more, always appear first.” Current screening uses the Google Verified badge (Google Help: a single badge replacing the older Google Guarantee / Google Screened split). The Google Money Back Guarantee associated with Google Guarantee was discontinued for services booked after December 7, 2025.",
          "Thumbtack: you are paying for customer contacts generated inside Thumbtack’s marketplace. Customers search or submit a job on Thumbtack, see professionals, and choose whom to contact. You control services, job preferences, area, hours, an exact lead price per service, and a weekly budget. Thumbtack says customers choose pros directly, competition per lead is limited (it does not publish a headcount), and you communicate with the customer on the platform.",
          "Typical LSA path: Google search → LSA results → customer evaluates the profile (reviews, photos, verification callouts) → call, message, or booking → Google assesses whether that contact is a valid lead → you pay if it is charged. Typical Thumbtack path: customer uses Thumbtack → describes the project → matches/sees professionals from targeting → customer contacts you (direct lead, auto-charge) or you contact an Opportunity (charge if they respond) → you compete to close the job.",
          "What you control before a charge: On LSA, services, service area, hours, lead types (message and booking opt-in), bidding mode, and weekly budget. You do not inspect each searcher before paying. On Thumbtack, targeting and exact lead prices are the pre-charge filter for direct leads; Opportunities let you see a price before you reach out. Neither model is Bark-style “skip this card without paying” for every contact.",
        ],
      },
      decisionGuideAHeading: "Choose Google Local Services Ads if…",
      decisionGuideBHeading: "Choose Thumbtack if…",
      decisionGuideA: [
        "Your category and location are eligible, you can complete Google’s screening (public verified Google Business Profile plus category-specific license, insurance, and background checks where required), and you want to appear in Google Search/Maps local-services results.",
        "Customers commonly start on Google for the work you sell—especially same-day or emergency searches—and you can answer the phone and messages during advertised hours.",
        "You will treat Maximize Leads, target CPL, or max-per-lead as auction controls, not as a guaranteed CPL, and you will track charged leads vs booked jobs after credits.",
        "You want reviews and profile quality to compound on Google surfaces customers already use—not only inside a marketplace app.",
      ],
      decisionGuideB: [
        "You want marketplace demand with no membership or annual fee (Thumbtack’s Pro page), exact lead prices, and a hard weekly spend cap that stops new leads when you hit it.",
        "Job preferences, travel area, and hours can be set tightly enough that automatic direct-lead charges stay on work you actually take.",
        "Customers in your category already shop Thumbtack for quotes and comparisons, and you can respond quickly after they reach out.",
        "You will use Opportunities only when you are willing to pay if the customer replies—and you will not treat “limited competition” as exclusivity.",
      ],
      decisionGuideNeither: [
        "You are not eligible for LSA and Thumbtack does not produce useful demand in your service/geo.",
        "Gross profit cannot support paid-lead CAC after a realistic close rate—referrals, Google Business Profile, or owned inbound already fill the calendar cheaper.",
        "You cannot answer calls or messages quickly. Google lists responsiveness (including missed calls) as an auction factor; Thumbtack still rewards the first viable reply.",
        "You primarily need a CRM, a phone system, or long-cycle B2B selling—not consumer lead generation.",
      ],
      featureComparisonColumnLabel: "What you’re comparing",
      featureComparisonSub:
        "A lead is not the same event on both platforms. Read payment triggers and credit rules before you compare sticker CPL.",
      featureComparison: [
        dim(
          "Acquisition model",
          "Pay-per-valid-lead auction on Google Search and Maps for eligible local services.",
          "Pay-per-lead marketplace. No join/annual/membership fee on Thumbtack’s Pro page."
        ),
        dim(
          "Where the customer starts",
          "Google Search or Maps for a service (including “near me” and brand/direct-business search when enabled).",
          "Thumbtack search or a submitted job; customers choose professionals on Thumbtack."
        ),
        dim(
          "What creates a charge",
          "A valid lead after Google’s assessment: answered call, message/email (US/Canada), voicemail or IVR engagement, booking (US/Canada), or a returned missed call that connects. Not a click.",
          "Direct leads: customer reaches out from search results and the job matches your preferences—you auto-pay the exact price. Opportunities: you reach out; you pay only if the customer responds."
        ),
        dim(
          "Price you set",
          "Bidding mode: Maximize Leads (Google sets bids; Help recommends ~10 leads/week and ~2 weeks of learning), target CPL, or max per lead (manual ceiling). You may pay less than a max bid.",
          "Exact lead price per service—the amount you pay unless a discount applies—plus a weekly budget. Hitting the budget stops new leads until next week (or you raise it)."
        ),
        dim(
          "Budget behavior",
          "Average weekly budget can overspend in a given week; monthly max = weekly × 30.4 ÷ 7. After monthly max, the ad stops until you change budget.",
          "Weekly budget is a hard cap across services. Lead price × count must fit the weekly cap."
        ),
        dim(
          "How you compete",
          "Auction: bid + likelihood of a lead (responsiveness, search context, relevance, message/booking enabled) + profile quality (rating, reviews, response time, images, verification). Ranking is not guaranteed.",
          "Customers choose you. Thumbtack says pricing and budget determine lead volume and that competition per lead is limited—no published competitor count."
        ),
        dim(
          "Pre-charge targeting",
          "Job types, service area, hours, message/booking opt-in, bidding, weekly budget. You cannot skip an individual searcher without paying if Google charges the lead.",
          "Services, job preferences, area, hours, exact lead prices. Direct leads are not a per-card skip. Opportunities show a price before you reach out."
        ),
        dim(
          "Phone / message / booking",
          "Reports break out charged leads by call, message, and booking. Message leads typically cost less than phone (not always). Booking leads: US and Canada. Message price can factor in whether the customer contacted other LSA advertisers.",
          "Direct customer communication on Thumbtack (messages; Thumbtack numbers on many direct leads). Some services are excluded from Thumbtack numbers for legal/regulatory reasons."
        ),
        dim(
          "When a lead is bad",
          "US/Canada: first assessment may not charge; charged leads may auto-credit (often within 30 days). Feedback survey may occasionally credit. Google no longer credits “job type not serviced” or “geo not serviced.” Research-only, cancellations, no response, and outside-hours valid leads are listed as not credited.",
          "Refunds are Thumbtack credit. Automatic cases include duplicates within 7 days and some “Not what I do” declines under smarter lead matching. Thumbtack numbers: if the customer replies to no pro within 72 hours (and you stayed on-platform), Help describes a refund. Hired-someone-else is not an automatic refund."
        ),
        dim(
          "Reviews / trust",
          "Google Verified badge after screening. Profile quality includes rating, review count, photos. Google Business Profile must be public and verified. Verification is not a workmanship guarantee.",
          "Account owners must pass a criminal background check. “Licensed pro” means Thumbtack verified a submitted license number against a public database. Thumbtack Guarantee is a customer reimbursement product (up to $2,500 money-back / $100,000 property damage, with conditions)—not a lead-quality SLA for you."
        ),
        dim(
          "Biggest tradeoff",
          "You intercept Google demand where many urgent jobs start—and you pay when Google calls the contact valid, including some outcomes that never book.",
          "You get marketplace volume with a visible exact price and weekly cap—and you can be charged when a customer contacts you for a job you would never have bought from a feed."
        ),
      ],
      pricingComparison:
        "Neither vendor publishes a national cost-per-lead table. Google: pay per valid lead; prices vary by location, job type, lead type, and bidding mode. Thumbtack: the exact lead price you set, times volume, capped by weekly budget.",
      pricingComparisonParagraphs: [
        "Google currently lists three LSA bid modes. Maximize Leads lets Google set bids to get the most leads for your budget (Help recommends a budget sized for about 10 leads per week and notes about two weeks for the model to learn). Target cost per lead (tCPL) is automated bidding around an average you or Google set. Max per lead is a manual ceiling—the most you would pay; Google says you may pay less. Weekly budget is a target: some weeks underspend, some overspend, but you do not exceed monthly max (weekly × 30.4 ÷ 7). After monthly max, the ad does not show unless you raise budget. Message leads are typically priced lower than the matching phone lead. Google does not publish a US average plumber or HVAC CPL—do not use a blog’s number as yours.",
        "Thumbtack Help: exact lead prices mean the price you set is what you pay unless a discount or promotion applies. You set a price per service; as you move the slider, Thumbtack shows an estimate of how many leads that service might produce. Weekly budget is the most you will spend across all services that week. Example Thumbtack publishes: $10 lead price and $90 weekly budget → 9 leads, then leads stop until next week unless you raise the budget. Minimum prices can change; prices near the minimum may increase automatically. There is still no public national CPL table.",
        "To compare equivalent scope, do not match “$50 Google vs $50 Thumbtack” in the abstract. Match a calendar window, a spend cap, and the same CRM stages. Ask Google’s reports for charged vs credited leads by call/message/booking. Ask Thumbtack’s payment history for lead vs Opportunity charges and credits. Then compute booked-job CAC on both.",
      ],
      roiGuidance: {
        heading: "Cost per lead is not the decision. Cost per booked job is.",
        paragraphs: [
          "Vendor fact: neither Google nor Thumbtack publishes your close rate. BeltStack illustrative model—replace every number with your invoices.",
          "Channel scorecard (run separately): spend, leads, qualified leads, booked estimates, booked jobs, revenue, gross profit, credits/refunds, cost per lead, cost per qualified lead, cost per booked job, CAC, revenue/spend, gross profit/spend. Cost per booked job = lead spend ÷ booked jobs. A channel with fewer, more expensive leads can win if it books more work.",
          "Illustrative only: Channel A (LSA-shaped) 20 charged leads × $45 = $900 spend, 5 booked jobs → $180 per booked job. Channel B (Thumbtack-shaped) 12 leads × $35 = $420 spend, 3 booked jobs → $140 per booked job. If Channel A’s five jobs are $4,000 replacements and Channel B’s three are $180 diagnostics, A can still be the better business. Invert the tickets and B wins. Do not crown a winner from CPL.",
          "Maximum affordable lead cost (illustrative framework, not a Google or Thumbtack bid): gross profit per completed job × lead-to-job close rate × the share of that contribution you will spend on acquisition. Example: $600 gross profit × 25% close × 30% acquisition share = $45. That $45 is not a recommended LSA bid or Thumbtack max price. Substitute your average job, margin, close rate, and repeat-customer value. If your close rate is 10%, the same $600 and 30% share only supports $18.",
          "These channels can run together. Tag source in CRM. Deduplicate the same customer who Googles you and also sends a Thumbtack request. Google Help notes about two weeks of bidding-model learning on Maximize Leads/tCPL—do not call a two-day sample a test. Use a window long enough to cover your sales cycle and at least a handful of booked jobs, not a generic 30-day slogan.",
        ],
        example: {
          heading: "Emergency plumber vs house painter (behavior, not a winner table)",
          body: "An emergency leak often starts as a Google search; LSA is structurally built for that query. A painter gathering three quotes may browse portfolios and marketplace options; Thumbtack’s customer-choice flow can fit that shopping. A landscaper selling a weekly route should judge CAC against season-one gross profit, not the first mow. A cleaner with high repeat value can afford a higher first-job CAC than a one-off junk haul. A roofer’s high ticket can support a high lead cost only if qualification is real—an unqualified $200 “lead” that never inspects is still a loss. None of these location or trade counts are vendor cutoffs.",
        },
      },
      prosConsA: {
        pros: [
          "Meets customers on Google Search and Maps when they search for the service",
          "Pay per valid lead, not per click (Google Help)",
          "Google Verified screening; profile quality can also lower cost per lead (Google’s ranking article)",
          "Weekly budget + monthly max; message/booking lead types when enabled",
        ],
        cons: [
          "Category/geo eligibility and screening (often 3–4 weeks after documents)",
          "You pay when Google calls the contact valid—even if the job never books",
          "No public CPL; auction + usage can spike; Maximize Leads is not a price lock",
          "Old “dispute every bad lead” workflow is not the current US/Canada system",
        ],
      },
      prosConsB: {
        pros: [
          "No membership/annual/join fee (Thumbtack Pro page)",
          "Exact lead prices plus a weekly cap you can see before volume runs",
          "Targeting and Opportunities give different control surfaces than a pure auction",
          "Customers who choose you—Thumbtack’s stated high-intent marketplace story",
        ],
        cons: [
          "Direct-lead auto-charge when the customer reaches out under your preferences",
          "No public national price sheet; minimums can move",
          "Limited competition is not exclusivity; hired-someone-else is not an automatic refund",
          "Thumbtack reviews and guarantee live on Thumbtack—they do not replace a Google profile",
        ],
      },
      bestFor: [
        {
          heading: "Can you use both?",
          body: "Yes. They are independent acquisition channels, not substitutes you must pick forever. Run a controlled test: same service area and script, separate source tags, hard spend caps, and a scorecard of spend → qualified → booked → gross profit after credits. Keep the channel whose booked-job CAC clears your threshold; keep the other only if it still clears after overlapping customers are deduped. Do not invent a required 30-day duration—cover your sales cycle and Google’s stated ~two-week bidding learning if you use automated LSA bidding.",
        },
        {
          heading: "Urgent trades (plumbing, HVAC service, electrical)",
          body: "Google search is often the customer’s first move. LSA matches that environment if you answer during business hours—missed calls can hurt responsiveness in Google’s auction. Thumbtack can still produce jobs when customers start in the app; it is not “low quality” by default. Measure close rate by job type (emergency vs quote).",
        },
        {
          heading: "Quote-driven and repeat work (painting, cleaning, landscaping, roofing)",
          body: "Shoppers who compare two or three pros may use Thumbtack’s marketplace or Google’s LSA profiles. High tickets can support higher lead costs; repeat routes should use first-year gross profit, not the first visit. Qualification still matters more than which logo sent the name.",
        },
      ],
      heroCallouts: [
        {
          label: "Winner for Google Search / Maps intercept",
          winner: "A",
          reason: "LSA is the product that appears in Google local-services results when eligible queries fire.",
        },
        {
          label: "Winner for exact price + weekly cap",
          winner: "B",
          reason: "Thumbtack Help: the price you set is what you pay; weekly budget stops leads when hit.",
        },
        {
          label: "Winner for inspect-then-pay (Opportunities only)",
          winner: "B",
          reason: "Open leads show a price; you pay if the customer responds. Direct leads still auto-charge on contact.",
        },
      ],
      faqs: [
        {
          q: "Is Google Local Services Ads better than Thumbtack?",
          a: "It depends which demand you can intercept and what you pay per booked job. LSA fits eligible Google Search/Maps hiring. Thumbtack fits marketplace customers who choose a pro on Thumbtack. Compare charged spend after credits ÷ booked jobs—not lead volume or vendor marketing.",
        },
        {
          q: "Is Thumbtack cheaper than Google LSA?",
          a: "Not as a universal fact. Google has no public national CPL. Thumbtack has exact account-level prices, not a published US average. A cheaper Thumbtack lead that does not book can cost more than a dearer LSA lead that does.",
        },
        {
          q: "Does Google LSA charge per click or per lead?",
          a: "Per valid lead, not per click. Google Help: you are charged for each valid lead from your Local Services ad. Lead types include calls, messages, and bookings (bookings US/Canada).",
        },
        {
          q: "When does Thumbtack charge professionals?",
          a: "Thumbtack Help: direct leads auto-pay when a customer reaches out from search results and the job matches your preferences. Opportunities: you contact first and pay the shown price only if the customer responds. Confirm current types in your Pro account.",
        },
        {
          q: "Can I use Google LSA and Thumbtack together?",
          a: "Yes. Tag both in CRM, staff both, and compare booked-job CAC. Deduplicate overlap. Automated LSA bidding needs about two weeks of learning per Google Help—do not judge either channel on a handful of names.",
        },
        {
          q: "Which has better-quality leads?",
          a: "BeltStack has not measured conversion rates. Structurally, LSA intercepts Google queries; Thumbtack intercepts marketplace requests. Multiple providers can be in play on both (Google even prices some message leads using whether the customer contacted other LSA advertisers). Use your booking and close rates.",
        },
        {
          q: "Can I dispute bad Google LSA leads?",
          a: "The current US/Canada system is automated assessment plus a lead feedback survey—not the older “immediately dispute every misfire” workflow. Invalid/low-quality contacts may not be charged; charged leads may auto-credit (often within 30 days). Google no longer supports credits for job type or geo not serviced. Feedback may occasionally produce a credit. Healthcare, tax specialists, and EMEA advertisers are excluded from those credits. Research-only customers, cancellations, and no-response are listed as not credited.",
        },
        {
          q: "Does Google LSA guarantee jobs? Is Google Guaranteed the same as LSA?",
          a: "No. LSA is the ad product. Google Verified is the current screening badge. Google Guarantee (including the consumer money-back benefit) is not the current badge system; Google discontinued that money-back guarantee for services booked after December 7, 2025. Verification is not a promise the lead will hire you.",
        },
        {
          q: "How should I compare lead costs?",
          a: "Spend after credits/refunds ÷ booked jobs, then gross profit after that CAC. Optionally cap bids with: gross profit × close rate × acquisition share. That formula is a planning tool, not a vendor price.",
        },
      ],
      alternatives: [
        {
          name: "Google Local Services Ads review",
          href: getLeadGenerationReviewUrl("google-local-services-ads"),
          logoSrc: "/Logos/google.jpeg",
          description: "Pay-per-valid-lead Google Search/Maps product, screening, and current credit rules.",
        },
        {
          name: "Thumbtack review",
          href: getLeadGenerationReviewUrl("thumbtack"),
          logoSrc: "/Logos/thumbtack.jpeg",
          description: "Marketplace targeting, exact lead prices, weekly budget, and refund rules.",
        },
        {
          name: "Bark vs Thumbtack",
          href: getLeadGenerationCompareUrlFromSlug("bark-vs-thumbtack"),
          logoSrc: "/Logos/bark.jpeg",
          description: "Inspect-then-buy credits vs Thumbtack’s customer-initiated direct leads.",
        },
        {
          name: "Google LSA vs Angi",
          href: getLeadGenerationCompareUrlFromSlug("google-local-services-ads-vs-angi"),
          logoSrc: "/Logos/angi.jpeg",
          description: "Google auction vs Angi Inc. directory/lead products—separate comparison.",
        },
      ],
      sidebarWinners: [
        { label: "Google Search / Maps intercept", winner: "A" },
        { label: "Exact lead price + weekly hard cap", winner: "B" },
        { label: "Reviews that live on Google", winner: "A" },
      ],
      moreComparisons: lgMoreComparisons(
        "google-local-services-ads-vs-thumbtack",
        "google-local-services-ads",
        "thumbtack",
        [RELATED.lsaYelp, RELATED.lsaAngi, RELATED.tbAngi, RELATED.barkTb, RELATED.tbHa],
        [
          { label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" },
          { label: "Paid vs organic leads", href: "/lead-generation/guides/paid-vs-organic-leads" },
          { label: "Speed-to-lead for inbound inquiries", href: "/lead-generation/guides/speed-to-lead-for-inbound-inquiries" },
        ]
      ),
    }
  ),
  build(
    "google-local-services-ads-vs-angi",
    "google-local-services-ads",
    "angi",
    "“Angi” is not one product. Google Local Services Ads (including accounts migrating into specialized Performance Max campaigns with pay-per-lead goals) sell a Search/Maps valid-lead. Angi Leads sell shared marketplace matches you pay for even if you lose the job. Angi Ads sell directory/profile advertising. Identify the Angi SKU on the contract before you compare cost.",
    {
      pageHeading: "Google Local Services Ads vs Angi (2026): Cost & Leads",
      seoTitle: "Google Local Services Ads vs Angi (2026): Cost & Leads | BeltStack",
      seoDescription:
        "Google LSA vs Angi is not two interchangeable lead sources. Google charges per valid Search/Maps contact. Angi Leads are shared marketplace matches; Angi Ads are directory advertising. Compare payment, contracts, and booked-job CAC.",
      quickVerdictHeading: "First identify which Angi product. Then compare how you compete and pay.",
      quickVerdictSub: "Google sells a Search/Maps valid-lead. Angi may be selling leads, ads, or both.",
      researchNote:
        "Verified September 2026 from Google Ads Help on Local Services Ads transitioning to Performance Max campaigns with pay-per-lead goals, Local Services Help (leads, credits, rankings, Google Verified), the Angi Pro Agreement (last updated May 11, 2026), Angi Help on lead credits (updated August 14, 2026), and Angi consumer/pro pages. Neither company publishes a national CPL. BeltStack has not run LSA or PMax pay-per-lead campaigns, bought Angi Leads or Ads, or measured close rates.",
      quickRecommendationA:
        "Choose Google’s local pay-per-lead system when eligible customers already search Google for the job, you can complete screening, and you want to pause/resume spend without an Angi-style subscription ETF—then track booked-job CAC after credits.",
      quickRecommendationB:
        "Choose Angi only after the quote names the product: Angi Leads if you can profit on shared matches you pay for even when you lose; Angi Ads if you want directory/profile visibility on Angi and the advertising term is acceptable.",
      quickVerdictParagraphs: [
        "A contractor searching “Google Local Services Ads vs Angi” is rarely comparing two identical lead SKUs. Google sells participation in local Search and Maps results: you pay when Google treats a customer contact from that ad as a valid lead—not when someone clicks. Angi Inc. sells more than one contractor acquisition product. The Angi Pro Agreement (HomeAdvisor, Inc. d/b/a Angi Pro) describes Leads—homeowner Service Requests that Angi may send to you, send your info to the homeowner, and/or facilitate as a connection—and separately describes directory profiles, enhanced profiles, and advertising. Angi consumer FAQ copy also describes paid advertising for Approved Pros on Angi websites, magazine, and call center.",
        "Angi Leads are the closer apples-to-apples pay-per-contact comparison with Google. The Pro Agreement states leads are not guaranteed jobs, that a lead is frequently sent to several other approved pros (including Angi Services, Angi’s pre-priced job platform), and that you pay even if you do not win the job. Angi Ads are not “another lead network with a Google-like CPL.” They are advertising/profile exposure inside Angi. Comparing Google’s per-valid-lead invoice to an Angi Ads monthly commitment as if both were CPL is how contractors pick the wrong number.",
        "Google’s management UI is also in motion. Google Ads Help: existing Local Services Ads are being migrated in phases into specialized Performance Max campaigns with pay-per-lead goals. That is not ordinary CPC Performance Max (those campaigns still serve YouTube, Gmail, and Display). Pay-per-valid-lead and Search/Maps placement stay. Budget and bidding controls change after migration. Some accounts remain on the legacy Local Services dashboard during the rollout. Confirm which console you are in before you copy a competitor’s bid settings.",
      ],
      relationshipContext: {
        heading: "What are you actually buying?",
        paragraphs: [
          "Google (legacy Local Services Ads or migrated pay-per-lead Performance Max): you are buying the chance for your Google Business Profile–based listing to appear in Google’s local-services results when someone searches on Search or Maps. Targeting is keywordless—categories, service types, and service area—not keyword lists. The homeowner picks a provider card. You pay if Google assesses a valid lead (call, message, or booking per current Help). Google Verified is the current screening badge. Google Guarantee money-back for services booked after December 7, 2025 is discontinued. A valid lead is not a booked job.",
          "Angi Leads: you are buying connections from homeowner Service Requests that can arrive via angi.com, the Angi app, homeadvisor.com, phone, or third-party sites (Pro Agreement). Angi may give you the homeowner’s contact info, give the homeowner yours, or facilitate the conversation. You pay per lead or via a subscription/package that prepays for discounted leads. You do not get to inspect-and-skip each name after it matches your tasks and geography the way Bark does. The Pro FAQ states you pay even if you do not win the job.",
          "Angi Ads / directory advertising: you are buying increased visibility in Angi search, directory, and related Angi surfaces for Approved Pros who meet advertising criteria (Angi’s consumer FAQ: typically a 3-star average and other eligibility; “Angi Approved” is described as including paying to advertise). This is not priced as Google’s per-valid-lead event. Angi does not publish a national Ads rate card. Term, auto-renewal, and any early termination fee live in the Contract you sign—not on a public price table.",
          "Typical Google path: “roof repair near me” → Search/Maps local-services results → homeowner evaluates the profile → call/message/booking → valid-lead assessment → you pay if charged. Typical Angi Leads path: homeowner describes a project in the Angi/HomeAdvisor ecosystem → Angi matches/distributes → you and often other approved pros receive a Lead → you compete to contact and close → you are charged for the lead even if another pro wins. Typical Angi Ads path: homeowner browses Angi directory/search → sees advertised/Approved profiles → contacts the business they selected → you paid for advertising presence, not (in the Ads product) a Google-style per-lead meter. Do not blend Leads and Ads into one journey.",
        ],
      },
      decisionGuideAHeading: "Choose Google Local Services Ads if…",
      decisionGuideBHeading: "Choose Angi if…",
      decisionGuideA: [
        "Customers in your category start on Google Search or Maps, you are eligible, and you can finish screening (verified Google Business Profile plus category-specific checks).",
        "You want to pay per valid contact and pause the campaign in-product (legacy inbox or Google Ads Enabled/Paused) without an Angi subscription ETF—confirm your signed Angi Contract if you are comparing commitments.",
        "You will staff calls and messages during advertised hours. Google lists responsiveness, including missed calls, as an auction factor.",
        "You will export performance before a PMax pay-per-lead migration if Google has scheduled your account—historical LSA campaign reports do not automatically move into Google Ads.",
      ],
      decisionGuideB: [
        "Angi Leads: you want incremental Angi/HomeAdvisor marketplace matches, your ticket and close rate can absorb paying for leads you lose, and you can answer shared opportunities fast. The Pro Agreement says a lead is frequently sent to several other approved pros.",
        "Angi Ads: you want directory/profile visibility on Angi for homeowners who already use that brand, you meet Angi Approved/advertising eligibility, and you have read term, auto-renewal, and any ETF in writing.",
        "The quote names the product (Leads vs Ads vs bundle vs Angi Services pre-priced work). If it only says “Angi,” do not sign until it does.",
        "You will tag Angi separately from Google in CRM. HomeAdvisor is the same parent—see Angi vs HomeAdvisor—not a third independent vendor.",
      ],
      decisionGuideNeither: [
        "Gross profit cannot cover paid CAC after a realistic close rate, or referrals/GBP already fill the calendar.",
        "You cannot answer inbound leads quickly. Shared Angi Leads and Google’s responsiveness factor both punish slow follow-up.",
        "You are not eligible for Google’s local pay-per-lead categories and Angi has weak demand or an unacceptable contract in your trade/geo.",
        "You need a CRM or a phone system, not a lead-generation contract.",
      ],
      featureComparisonColumnLabel: "What you’re comparing",
      featureComparisonSub:
        "Do not compare Google’s valid-lead invoice to an Angi Ads monthly as if both were CPL. Split Angi Leads from Angi Ads.",
      featureComparison: [
        dim(
          "What the product is",
          "Local Search/Maps pay-per-valid-lead ads (legacy LSA dashboard or specialized PMax with pay-per-lead goals).",
          "Two common contractor SKUs: Angi Leads (marketplace matches) and Angi Ads (directory/advertising). Confirm the Contract."
        ),
        dim(
          "Where the customer starts",
          "Google Search or Maps query for a local service (keywordless; service types + area).",
          "Angi/HomeAdvisor sites, app, phone, or third-party requests Angi receives (Pro Agreement)."
        ),
        dim(
          "What creates a charge",
          "A valid lead Google assesses from the ad (call, message, booking)—not a click. Same model after PMax pay-per-lead migration.",
          "Leads: you pay for Leads received (per-lead, subscription, or package) even if you do not win. Ads: advertising/profile commitment per the Contract—not Google’s per-lead event."
        ),
        dim(
          "Lead distribution",
          "Homeowner selects a provider card. They can still contact more than one business. Google prices some message leads using whether the customer contacted other LSA advertisers.",
          "Pro Agreement: frequently sent to several other approved pros, including Angi Services. FAQ: competition limits; homeowner choice. Angi does not publish one official “always N contractors” number for every lead."
        ),
        dim(
          "Budget / bidding",
          "Legacy: average weekly budget (monthly max ≈ weekly × 30.4 ÷ 7) and Maximize Leads / tCPL / max per lead. Migrated: daily average budget (weekly ÷ 7); monthly cap = daily × 30.4; bidding defaults to Maximize Conversions; Google says manual max-per-lead and vertical-level tCPA are not supported.",
          "Leads: pay-per-lead and/or auto-renewing Subscription that prepays discounted leads. Ads: quoted advertising. No public national rate card."
        ),
        dim(
          "Contract / pause",
          "No Angi-style ETF in Google’s public LSA/PMax-PPL Help. Pause Enabled/Paused (migrated) or stop the campaign; you still pay for valid leads already incurred.",
          "Subscriptions can auto-renew; Angi may raise the Subscription Fee up to 10% on renewal. ETF if the signed Contract includes one. Cancel via Customer Care (877) 947-3639. Guidance on lead volume is an estimate, not a guarantee."
        ),
        dim(
          "Pre-charge control",
          "Categories/service types, service area, hours/ad schedule, message/booking opt-in, budget, bidding. You cannot skip an individual searcher after they contact you if Google charges the lead.",
          "Tasks, geography, lead on/off (turning Leads off can reduce subscription value). You do not inspect each Lead before the match the way an inspect-then-buy marketplace does."
        ),
        dim(
          "Credits / refunds",
          "US/Canada: auto assessment; charged leads may auto-credit (~30 days). Feedback survey may occasionally credit. No credits for job type/geo not serviced. Research, cancel, no-response, outside-hours valid leads listed as not credited.",
          "Angi Help (Aug 14, 2026): request within 45 days; attempted call within 24 hours; credits toward future leads, expire in 6 months. Eligible: bad contact, wrong ZIP vs profile, service mismatch, duplicate within 45 days, charged while paused. Annual subscriptions: report leads but credits not offered. Not eligible: no answer, hired another pro, changed mind, shopping, lost the job."
        ),
        dim(
          "Reviews / verification",
          "Google Verified after screening. GBP reviews and rating feed profile quality in the auction. Not a workmanship guarantee.",
          "Angi Approved (consumer FAQ): typically 3.0+ rating if reviewed, owner background check (except labeled Approved Corporate), license attestation, and paying to advertise. Badging is at Angi’s discretion (Pro Agreement). Not a workmanship guarantee."
        ),
        dim(
          "Reporting after Google migration",
          "Google: historical LSA campaign performance reports do not automatically migrate to Google Ads. Save/export before your date. Lead history is described as moving into Google Ads Leads/Lead Manager.",
          "Angi for Pros app / Leads tab for lead status and credit requests. Ask the rep what ROI reporting the specific product includes."
        ),
        dim(
          "Biggest tradeoff",
          "You intercept Google demand and pay when Google calls the contact valid—including contacts that never book. Migrated bidding is automated; you may lose legacy manual max-per-lead.",
          "Leads: volume from a known homeowner brand, with shared competition and possible subscription/ETF. Ads: Angi visibility that is not a Google CPL. Mixing the two on one invoice hides CAC."
        ),
      ],
      pricingComparison:
        "Google does not publish a national CPL. Angi does not publish a national Leads or Ads rate card. Compare booked-job CAC after credits, using the product actually on the contract.",
      pricingComparisonParagraphs: [
        "Google: you see charges for valid leads. Prices vary by location, job type, lead type, and bidding. Legacy accounts set an average weekly budget. Migrated pay-per-lead PMax accounts get a daily average equal to historical weekly ÷ 7; monthly billing is capped at daily × 30.4. Google Ads Help: this specialized campaign type still charges for valid leads (calls, messages, bookings), not clicks, and still serves only Search and Maps—unlike standard Performance Max. Do not use a blog’s “average HVAC CPL.”",
        "Angi Leads: Pro Agreement—pay per Lead, as part of a package, or via Subscription (prepay for discounted leads; term in the Contract). Guidance on how many leads you will get is an estimate. Angi Help credits expire in six months and do not apply to annual-subscription leads. Angi Inc. does not publish one national lead price.",
        "Angi Ads: quoted advertising. Angi consumer FAQ describes paid advertising for eligible Approved Pros. Third-party monthly ranges are not BeltStack facts. Get line items: product name, geography, term, auto-renewal, ETF, what happens if you pause.",
        "To compare equivalent scope: match a calendar window and CRM stages. Put Google charged-minus-credited spend next to Angi Leads spend after credits (and ETF/subscription if any) and Angi Ads spend if that is what you bought. Then booked jobs and gross profit. A $40 shared Angi Lead that loses to two other pros is not the same unit as a $40 Google valid-lead from a homeowner who tapped your card.",
      ],
      roiGuidance: {
        heading: "Price per lead is not price per customer",
        paragraphs: [
          "Vendor fact: neither Google nor Angi publishes your close rate or a national CPL. BeltStack illustrative model—replace every number.",
          "Scorecard each channel: spend, leads (or ad-attributed contacts), qualified, estimates, booked jobs, revenue, gross profit, credits, cost per lead, cost per booked job, gross profit/spend.",
          "Illustrative only—not vendor averages: 15 Angi Leads × $40 = $600. If the Pro Agreement’s shared-lead pattern holds and you book 2 jobs, CAC is $300 per booked job. 10 Google valid-leads × $70 = $700. If you book 4 jobs, CAC is $175. Invert close rates and the ranking flips. Shared-lead math is why CPL lies: you paid for a name that several approved pros also received.",
          "Maximum affordable lead cost (planning framework, not a bid): gross profit per completed job × lead-to-job close rate × the share of contribution you will spend on acquisition. Example: $800 × 20% × 25% = $40. Substitute your jobs. If Angi Leads close at 10% in your shop, the same $800 and 25% share only supports $20.",
          "You can run Google and Angi together if staffing and contracts allow. Tag sources. Deduplicate the homeowner who Googled you and also submitted an Angi request. Do not split budget 50/50 by habit. Do not use a generic 30-day test: cover your sales cycle, and if your Google account just migrated, Google is still learning automated bids.",
        ],
        example: {
          heading: "Urgent plumbing vs painting vs HVAC replacement (mechanics, not winners)",
          body: "An emergency drain backup often starts as a Google query; Google’s Search/Maps intercept is built for that. A painter collecting three quotes may use Angi directory/search or an Angi Service Request that several pros receive—speed and a real estimate process matter more than which logo is cheaper per name. HVAC replacement can support a higher CAC than a $129 service call; it cannot support paying for every shared match you lose. None of these are official vendor cutoffs.",
        },
      },
      prosConsA: {
        pros: [
          "Intercepts Google Search/Maps hiring demand",
          "Pay per valid lead, not per click—same after specialized PMax pay-per-lead migration",
          "Pause in-product without an Angi Subscription ETF (Google public Help)",
          "Google Verified + GBP reviews sit on surfaces customers already use",
        ],
        cons: [
          "Eligibility and screening time; not every trade/geo",
          "Valid lead ≠ booked job; some outcomes are not credited",
          "Phased migration: bidding/budget UI changes; historical LSA reports do not auto-migrate",
          "No public CPL; auction can get expensive",
        ],
      },
      prosConsB: {
        pros: [
          "Known homeowner brand; Leads plus Ads are distinct tools once named on the Contract",
          "Directory/Approved presence for shoppers already on Angi",
          "Task and ZIP controls; credit path for some invalid Leads (not for lost jobs)",
          "Can sit beside Google rather than replacing it",
        ],
        cons: [
          "“Angi” on a pitch may mean Leads, Ads, a bundle, or Angi Services",
          "Leads frequently shared; you pay if you do not win",
          "Subscriptions auto-renew; ETF possible; annual-subscription leads not credit-eligible per Help",
          "No public national price list",
        ],
      },
      bestFor: [
        {
          heading: "Use both?",
          body: "Operationally yes if you can staff both and the Angi Contract allows. Track Google and Angi as separate P&Ls. Keep the channel whose booked-job CAC and gross profit clear your threshold after credits. Angi Ads vs Angi Leads should be two lines, not one “Angi” bucket. Google LSA vs Thumbtack is a different marketplace comparison if you need an independent lead marketplace rather than Angi Inc.",
        },
        {
          heading: "When Google usually gets the first test",
          body: "Eligible emergency and “near me” demand, a usable GBP, and a team that answers the phone. Migration does not change that job—it changes where you click Pause.",
        },
        {
          heading: "When Angi Leads or Ads may still earn a line",
          body: "Leads: you have margin for shared matches and will measure close rate by zip. Ads: Angi is already how some homeowners shortlist pros in your market and you accept an advertising term. If the salesperson will not separate Leads from Ads, you cannot compare either one to Google.",
        },
      ],
      heroCallouts: [
        {
          label: "Winner for Google Search/Maps intercept",
          winner: "A",
          reason: "That is the product: local-services results on Search and Maps, pay per valid contact.",
        },
        {
          label: "Winner for Angi directory/brand shoppers",
          winner: "B",
          reason: "Angi Ads/Approved profiles live in Angi search and directory—not on Google.",
        },
        {
          label: "Name the Angi SKU first",
          winner: "B",
          reason: "Leads ≠ Ads. Comparing the wrong Angi product to Google produces a fake winner.",
        },
      ],
      faqs: [
        {
          q: "Is Google Local Services Ads better than Angi?",
          a: "It depends which Angi product you were quoted and your booked-job CAC. Google intercepts Search/Maps queries and charges per valid lead. Angi Leads are marketplace matches you often share and pay for even if you lose. Angi Ads are advertising. Compare those units separately.",
        },
        {
          q: "Is Angi cheaper than Google LSA?",
          a: "Not as a universal fact. Neither publishes a national CPL. A cheaper shared Angi Lead that does not book can cost more than a dearer Google valid-lead that does. Subscriptions and ETFs are part of Angi cost; they are not in Google’s public pay-per-lead Help.",
        },
        {
          q: "Does Google charge per click or per lead?",
          a: "Per valid lead, not per click—on both the legacy Local Services product and specialized Performance Max campaigns with pay-per-lead goals.",
        },
        {
          q: "How does Angi charge contractors?",
          a: "Leads: per Lead, package, or auto-renewing Subscription (Pro Agreement). Ads: advertising per the Contract. You pay for Leads even if you do not win the job.",
        },
        {
          q: "Are Angi leads shared?",
          a: "The Pro Agreement says a Lead is frequently sent to several other approved pros, including Angi Services, and that competition limits apply with homeowner choice. Angi does not publish one official headcount that applies to every lead. Do not use an old “always four contractors” blog figure as policy.",
        },
        {
          q: "Does Angi require a contract?",
          a: "The onboarding Contract sets term. Subscriptions can auto-renew; an ETF may apply if the Contract includes one. Cancel via Customer Care. Google’s public LSA/PMax-PPL Help describes pausing the campaign; it does not describe an Angi-style ETF.",
        },
        {
          q: "Can I use Google LSA and Angi together?",
          a: "Yes if you staff both and tag CRM. Deduplicate overlap. Do not treat HomeAdvisor as a third company.",
        },
        {
          q: "What happens if a Google lead is bad? Can I credit a bad Angi lead?",
          a: "Google (US/CA): automated assessment and possible auto-credit; many “didn’t book” outcomes are not credited. Angi Help: some invalid-contact / wrong ZIP / mismatch / duplicate / paused-flow credits within 45 days if you called within 24 hours—not for no-answer, shopping, or lost jobs. Annual Angi subscriptions: credits not offered for those leads.",
        },
        {
          q: "Is Google Guaranteed still a thing? What is Google Verified?",
          a: "Google Verified is the current screening badge. Google Guarantee money-back was discontinued for services booked after December 7, 2025. Neither badge is a hire or workmanship guarantee.",
        },
        {
          q: "Are Local Services Ads becoming Performance Max? Does that change how I pay?",
          a: "Google is migrating existing LSA campaigns in phases into specialized Performance Max campaigns with pay-per-lead goals (US home/storefront categories began August 2026; broader groups late 2026; remaining/non-US in 2027). You still pay for valid leads, not clicks; ads still show on Search and Maps only. That is not standard CPC PMax. Migrated accounts: daily average budget, Maximize Conversions bidding, no manual max-per-lead / vertical tCPA. Historical LSA performance reports do not auto-migrate. Not every account has moved yet.",
        },
      ],
      alternatives: [
        {
          name: "Google Local Services Ads review",
          href: getLeadGenerationReviewUrl("google-local-services-ads"),
          logoSrc: "/Logos/google.jpeg",
          description: "Pay-per-valid-lead Search/Maps product, credits, and Google Verified.",
        },
        {
          name: "Angi review",
          href: getLeadGenerationReviewUrl("angi"),
          logoSrc: "/Logos/angi.jpeg",
          description: "Identify Ads vs Leads before you compare any quote to Google.",
        },
        {
          name: "Angi vs HomeAdvisor",
          href: getLeadGenerationCompareUrlFromSlug("angi-vs-homeadvisor"),
          logoSrc: "/Logos/homeadvisor.jpeg",
          description: "Same Angi Inc. ecosystem—ads/directory vs Angi Leads branding.",
        },
        {
          name: "Google LSA vs Thumbtack",
          href: getLeadGenerationCompareUrlFromSlug("google-local-services-ads-vs-thumbtack"),
          logoSrc: "/Logos/thumbtack.jpeg",
          description: "Google Search/Maps auction vs an independent marketplace (not Angi Inc.).",
        },
      ],
      sidebarWinners: [
        { label: "Google Search/Maps intercept", winner: "A" },
        { label: "Angi directory/brand shoppers", winner: "B" },
        { label: "Pause without a lead subscription ETF", winner: "A" },
      ],
      moreComparisons: lgMoreComparisons("google-local-services-ads-vs-angi", "google-local-services-ads", "angi", [
        RELATED.lsaTb,
        RELATED.angiHa,
        RELATED.tbAngi,
        RELATED.lsaHa,
        RELATED.lsaYelp,
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
          productA: "Credits (from $2.35; lead cost varies)",
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
