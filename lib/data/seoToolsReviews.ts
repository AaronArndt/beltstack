/**
 * SEO tools reviews — cluster parity with lead-generation / website-builders.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getSeoToolsAlternativeUrl,
  getSeoToolsBestForUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
} from "@/lib/routes";

export type SeoToolsReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const CATEGORY_HREF = "/seo-tools";
const ROUNDUP_HREF = "/seo-tools/best-seo-tools";
const COMPARE_HUB = "/seo-tools/compare";
const GUIDES_HREF = "/seo-tools/guides";

const SCENARIOS = [
  { label: "Contractors", href: getSeoToolsBestForUrl("contractors") },
  { label: "Local SEO", href: getSeoToolsBestForUrl("local-seo") },
  { label: "Small business", href: getSeoToolsBestForUrl("small-business") },
  { label: "HVAC", href: getSeoToolsBestForUrl("hvac") },
  { label: "Plumbing", href: getSeoToolsBestForUrl("plumbing") },
];

const METHODOLOGY: SeoToolsReviewData["methodology"] = {
  title: "How we review SEO tools",
  sub: "Local service business lens.",
  introParagraph:
    "We evaluate SEO platforms for how they help contractors and local operators improve visibility—not vanity keyword counts alone.",
  bullets: [
    "We stress-test workflows for Google Business Profile, local rankings, and on-page basics.",
    "We compare pricing transparency and limits that matter at one to many locations.",
    "We map tools to realistic office time—solo owners vs agencies.",
  ],
};

const SEO_SHELL: Pick<
  SeoToolsReviewData,
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
  category: "SEO Tools",
  categoryHref: CATEGORY_HREF,
  methodology: METHODOLOGY,
  compareSectionTitle: "Compare with other SEO tools",
  bestPayrollSoftwareHref: ROUNDUP_HREF,
  compareHubHref: COMPARE_HUB,
  compareHubLabel: "Compare SEO tools",
  bestRoundupLabel: "Best SEO tools (2026) — full roundup",
  bestForSectionTitle: "Best SEO tools for different use cases",
  bestForSectionSub: "Scenario picks for local service businesses.",
  scenarioLinks: SCENARIOS,
  guideHubHref: GUIDES_HREF,
  guideHubLabel: "SEO tools guides",
  popularIndustryLinks: [
    { label: "Best for contractors", href: getSeoToolsBestForUrl("contractors") },
    { label: "Best for local SEO", href: getSeoToolsBestForUrl("local-seo") },
    { label: "Best for HVAC", href: getSeoToolsBestForUrl("hvac") },
    { label: "Best for roofers", href: getSeoToolsBestForUrl("roofing") },
    { label: "Best for landscapers", href: getSeoToolsBestForUrl("landscaping") },
  ],
};

function alt(name: string, slug: string, description: string, logo: string) {
  return { name, href: getSeoToolsReviewUrl(slug), description, logoSrc: logo };
}

function rb(tool: string): NonNullable<SeoToolsReviewData["ratingBreakdown"]> {
  return [
    { category: "Features", score: "4.5", explanation: `${tool} covers research, tracking, and technical workflows local teams commonly need.` },
    { category: "Pricing", score: "4.2", explanation: "Plans scale by keywords, seats, and locations—confirm limits before annual contracts." },
    { category: "Ease of Use", score: "4.3", explanation: "Dashboards vary; expect onboarding time for multi-location reporting." },
    { category: "Support", score: "4.1", explanation: "Quality tracks with tier; SMBs often rely on docs and community." },
    { category: "Local SEO fit", score: "4.4", explanation: "Weighted toward GBP, Map Pack, and service-area realities for trades." },
  ];
}

const RELATED_CROSS = [
  { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
  { label: "Lead generation hub", href: "/lead-generation" },
  { label: "CRM software hub", href: "/crm" },
];

const reviews: Record<string, SeoToolsReviewData> = {
  semrush: {
    ...SEO_SHELL,
    toolName: "Semrush",
    rating: "4.6",
    startingPrice: "From ~$139/mo",
    bestFor: "Teams that want keyword research, audits, and competitive tracking in one suite",
    visitUrl: "https://www.semrush.com",
    logoSrc: "/Logos/semrush.jpeg",
    quickVerdict: "Semrush is the broad all-in-one SEO suite many agencies and growing trades adopt after outgrowing free tools.",
    quickVerdictParagraphs: [
      "Semrush combines keyword research, site audits, position tracking, and content workflows—useful when you manage more than a single GBP listing.",
      "Local operators should still treat Google Business Profile, reviews, and citations as execution work—Semrush informs priorities but does not replace field photos or NAP consistency.",
      "Read Semrush vs Ahrefs when backlinks drive your strategy; pair with BrightLocal or Whitespark when Map Pack grids are the bottleneck.",
    ],
    ratingBreakdown: rb("Semrush"),
    compareLinks: [
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
    ],
    pros: ["Large dataset for keywords and SERPs", "Technical crawls and monitoring", "Scales for multi-location reporting"],
    cons: ["Premium pricing as seats grow", "Can overwhelm solo owners", "Local depth often needs a specialist add-on"],
    bestForEditorial: "Growing service businesses and agencies balancing content, technical fixes, and rank tracking.",
    whoShouldAvoid: "Owners who only need free Search Console checks and a single-location GBP—start there before buying.",
    pricingSummary: "Tiered SaaS; validate project limits, tracked keywords, and user seats.",
    features: ["Keyword research", "Site audit", "Position tracking", "Content tools"],
    keyFeatures: [
      { name: "Keyword & SERP research", description: "Discover terms service pages should target by city and service line." },
      { name: "Site health audits", description: "Catch crawl issues that block local landing pages from indexing cleanly." },
    ],
    integrations: ["Google Analytics / Looker Studio", "GBP data via other stacks", "CRM exports (varies)"],
    integrationsIntro: "Most teams export reports to Sheets or connect BI for franchise-style rollups.",
    contractorUse: ["City + service landing page expansion", "Competitor content gaps", "Post-site-launch monitoring"],
    alternatives: [
      alt("Ahrefs", "ahrefs", "Deeper backlink workflows", "/Logos/ahrefs.jpeg"),
      alt("SE Ranking", "se-ranking", "Lower-cost all-in-one", "/Logos/seranking.jpeg"),
      alt("Google Search Console", "google-search-console", "Free performance baseline", "/Logos/google.jpeg"),
    ],
    faqs: [
      { q: "Is Semrush good for local contractors?", a: "Yes for research and audits—pair with GBP execution and often a local listings tool for Map Pack work." },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getSeoToolsAlternativeUrl("semrush"),
    alternativesPageLabel: "Best Semrush alternatives (2026)",
  },
  ahrefs: {
    ...SEO_SHELL,
    toolName: "Ahrefs",
    rating: "4.7",
    startingPrice: "From ~$129/mo",
    bestFor: "Teams prioritizing backlinks, competitor content, and rank tracking",
    visitUrl: "https://ahrefs.com",
    logoSrc: "/Logos/ahrefs.jpeg",
    quickVerdict: "Ahrefs leads when link intelligence and content gap analysis steer your SEO roadmap.",
    quickVerdictParagraphs: [
      "Service businesses still win locally with reviews, GBP, and clear service pages—Ahrefs tells you what to build and who links to competitors.",
      "Compare Ahrefs vs Moz Pro if you want a lighter-weight suite with strong education.",
    ],
    ratingBreakdown: rb("Ahrefs"),
    compareLinks: [
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
      { label: "Ahrefs vs Moz Pro", href: getSeoToolsCompareUrl("ahrefs-vs-moz-pro") },
    ],
    pros: ["Strong link index", "Content explorer workflows", "Reliable rank tracking"],
    cons: ["Premium pricing", "Local listings not native", "Learning curve for new SEOs"],
    bestForEditorial: "Operators investing in content and links beyond bare-bones GBP hygiene.",
    whoShouldAvoid: "Teams with zero bandwidth for content—fix GBP and on-page basics first.",
    pricingSummary: "Credit and seat-based plans—model against active campaigns and tracked keywords.",
    features: ["Site Explorer", "Keywords Explorer", "Rank tracker", "Site Audit"],
    keyFeatures: [
      { name: "Backlink analysis", description: "See who links to competitors in your service vertical." },
      { name: "Content gaps", description: "Find topics your city pages never covered." },
    ],
    integrations: ["Search Console", "APIs for reporting stacks"],
    integrationsIntro: "Ahrefs complements Search Console; export reports for owners who want monthly visibility.",
    contractorUse: ["Competitive link benchmarks", "Blog and FAQ expansion", "Landing page gap analysis"],
    alternatives: [
      alt("Semrush", "semrush", "Broader marketing modules", "/Logos/semrush.jpeg"),
      alt("Moz Pro", "moz-pro", "Mid-market suite alternative", "/Logos/mozpro.jpeg"),
    ],
    faqs: [{ q: "Ahrefs vs Semrush for local?", a: "Ahrefs for links/content depth; Semrush for broader marketing OS—many locals run one suite plus a GBP-focused tool." }],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getSeoToolsAlternativeUrl("ahrefs"),
    alternativesPageLabel: "Best Ahrefs alternatives (2026)",
  },
  "moz-pro": {
    ...SEO_SHELL,
    toolName: "Moz Pro",
    rating: "4.3",
    startingPrice: "From ~$99/mo",
    bestFor: "SMBs wanting credible SEO fundamentals without the heaviest enterprise UI",
    visitUrl: "https://moz.com/products/pro",
    logoSrc: "/Logos/mozpro.jpeg",
    quickVerdict: "Moz Pro is a balanced suite for keyword tracking, on-page recommendations, and link research.",
    quickVerdictParagraphs: [
      "Moz’s education ecosystem helps owners who are newer to SEO—still invest in GBP photos, categories, and review responses.",
      "See Ahrefs vs Moz Pro when backlinks are the deciding factor.",
    ],
    ratingBreakdown: rb("Moz Pro"),
    compareLinks: [
      { label: "Ahrefs vs Moz Pro", href: getSeoToolsCompareUrl("ahrefs-vs-moz-pro") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: ["Approachable UX", "Solid rank tracking", "Trusted training content"],
    cons: ["Less link depth than Ahrefs", "Not a pure local platform", "Tier caps matter"],
    bestForEditorial: "Small teams building repeatable SEO habits alongside local listings work.",
    whoShouldAvoid: "Enterprise link analysts who need the deepest raw index daily.",
    pricingSummary: "Plans differ by crawl credits and tracked keywords—check campaign limits.",
    features: ["Rank tracking", "Site crawl", "On-page grader", "Link research"],
    keyFeatures: [{ name: "Page optimization", description: "Prioritize fixes on money service pages." }],
    integrations: ["Google Analytics", "Search Console"],
    integrationsIntro: "Connect Moz to Search Console for quicker insight sync.",
    contractorUse: ["Service page tune-ups", "Monthly ranking reports for owners"],
    alternatives: [
      alt("Ahrefs", "ahrefs", "Heavier link dataset", "/Logos/ahrefs.jpeg"),
      alt("Semrush", "semrush", "Broader marketing toolkit", "/Logos/semrush.jpeg"),
    ],
    faqs: [{ q: "Moz vs free tools?", a: "Moz adds scalable tracking and crawl guidance—Search Console stays essential either way." }],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getSeoToolsAlternativeUrl("moz-pro"),
    alternativesPageLabel: "Best Moz Pro alternatives (2026)",
  },
  ubersuggest: {
    ...SEO_SHELL,
    toolName: "Ubersuggest",
    rating: "4.0",
    startingPrice: "From ~$29/mo (often discounted)",
    bestFor: "Budget-conscious keyword ideas and light audits",
    visitUrl: "https://neilpatel.com/ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    quickVerdict: "Ubersuggest is an affordable entry point before graduating to Semrush or Ahrefs.",
    quickVerdictParagraphs: [
      "Use it to brainstorm page topics and catch obvious technical issues—pair with Search Console for truth data.",
      "See Semrush vs Ubersuggest for feature depth comparison.",
    ],
    ratingBreakdown: rb("Ubersuggest"),
    compareLinks: [
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
    ],
    pros: ["Low price", "Simple UI", "Good for experiments"],
    cons: ["Thinner datasets", "Limited advanced link work", "Local GBP still separate"],
    bestForEditorial: "Solo operators testing SEO before larger subscriptions.",
    whoShouldAvoid: "Multi-location franchises needing enterprise reporting.",
    pricingSummary: "Often sold as monthly or lifetime—verify keyword limits.",
    features: ["Keyword ideas", "Site audit", "Competitor snapshots"],
    keyFeatures: [{ name: "Content ideas", description: "Find FAQ and blog angles for trades." }],
    integrations: ["Limited vs larger suites"],
    integrationsIntro: "Export CSVs to pair with your CRM or project tools.",
    contractorUse: ["Early content calendar", "Quick audit before a site relaunch"],
    alternatives: [
      alt("Semrush", "semrush", "Full suite depth", "/Logos/semrush.jpeg"),
      alt("SE Ranking", "se-ranking", "Mid-tier all-in-one", "/Logos/seranking.jpeg"),
    ],
    faqs: [{ q: "Is Ubersuggest enough alone?", a: "Usually not for competitive metros—add Search Console and often a local SEO tool." }],
    relatedReading: RELATED_CROSS,
  },
  brightlocal: {
    ...SEO_SHELL,
    toolName: "BrightLocal",
    rating: "4.5",
    startingPrice: "From ~$39/mo",
    bestFor: "Local SEO reporting, citations, and GBP workflows",
    visitUrl: "https://www.brightlocal.com",
    logoSrc: "/Logos/brightlocal.jpeg",
    quickVerdict: "BrightLocal is built for Map Pack operators who need grids, citations, and client-ready reports.",
    quickVerdictParagraphs: [
      "Pair BrightLocal with strong on-site pages and review generation—software amplifies disciplined ops.",
      "Compare BrightLocal vs Whitespark when choosing a local specialist stack.",
    ],
    ratingBreakdown: rb("BrightLocal"),
    compareLinks: [
      { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: ["Local rank grids", "Citation tools", "White-label reporting"],
    cons: ["Not a full national content suite", "Costs scale with locations", "Still needs human execution"],
    bestForEditorial: "HVAC, plumbing, and home services brands optimizing Maps and directories.",
    whoShouldAvoid: "Pure ecommerce brands with no local footprint.",
    pricingSummary: "Per-location and module bundles—match to ZIPs you track.",
    features: ["Local search audit", "Citation tracker", "GBP tools", "Review monitoring"],
    keyFeatures: [{ name: "Local rank tracking", description: "See visibility by grid for service areas." }],
    integrations: ["GBP", "Data connectors for agencies"],
    integrationsIntro: "BrightLocal centers Google Business Profile and citation accuracy.",
    contractorUse: ["Multi-zip service areas", "Franchise reporting", "Before/after rebrand migrations"],
    alternatives: [
      alt("Whitespark", "whitespark", "Citation-heavy alternative", "/Logos/whitespark.jpeg"),
      alt("Semrush", "semrush", "Broader SEO research", "/Logos/semrush.jpeg"),
    ],
    faqs: [{ q: "BrightLocal vs a national suite?", a: "Use both when you need Map Pack execution plus content/competitor research." }],
    relatedReading: RELATED_CROSS,
  },
  whitespark: {
    ...SEO_SHELL,
    toolName: "Whitespark",
    rating: "4.5",
    startingPrice: "From ~$25/mo (varies by tool)",
    bestFor: "Citation building, local finder research, and reputation workflows",
    visitUrl: "https://whitespark.ca",
    logoSrc: "/Logos/whitespark.jpeg",
    quickVerdict: "Whitespark is a specialist favorite for listings, local search tools, and education.",
    quickVerdictParagraphs: [
      "Service businesses use Whitespark to find citation opportunities and track local results—execution still wins.",
      "See BrightLocal vs Whitespark for platform fit.",
    ],
    ratingBreakdown: rb("Whitespark"),
    compareLinks: [
      { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: ["Strong local SEO reputation", "Helpful training", "Grid and citation tooling"],
    cons: ["Modular pricing adds up", "Not a full content suite", "Requires consistent follow-through"],
    bestForEditorial: "Local operators serious about directories and Map Pack measurement.",
    whoShouldAvoid: "Teams that refuse to maintain NAP consistency or reviews.",
    pricingSummary: "Tool bundles vary—budget per active brand or location.",
    features: ["Local citation finder", "Rank tracking", "Review tools"],
    keyFeatures: [{ name: "Citation opportunities", description: "Discover listings competitors have that you lack." }],
    integrations: ["GBP ecosystem", "Agency reporting"],
    integrationsIntro: "Whitespark complements your website and CRM—not a replacement.",
    contractorUse: ["New market launches", "Post-merge rebrands", "Agency deliverables"],
    alternatives: [
      alt("BrightLocal", "brightlocal", "Local platform alternative", "/Logos/brightlocal.jpeg"),
    ],
    faqs: [{ q: "Whitespark enough without a suite?", a: "Many teams pair it with Semrush, Ahrefs, or SE Ranking for keyword/content depth." }],
    relatedReading: RELATED_CROSS,
  },
  "se-ranking": {
    ...SEO_SHELL,
    toolName: "SE Ranking",
    rating: "4.4",
    startingPrice: "From ~$65/mo",
    bestFor: "All-in-one SEO at a lower price than flagship suites",
    visitUrl: "https://seranking.com",
    logoSrc: "/Logos/seranking.jpeg",
    quickVerdict: "SE Ranking offers rank tracking, audits, and competitor modules for pragmatic budgets.",
    quickVerdictParagraphs: [
      "Local teams still need GBP discipline—SE Ranking helps prioritize pages and keywords to build.",
      "Compare SE Ranking vs Semrush for feature overlap.",
    ],
    ratingBreakdown: rb("SE Ranking"),
    compareLinks: [
      { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: ["Competitive pricing", "Solid feature spread", "Good for SMB reporting"],
    cons: ["Smaller brand footprint", "Advanced users may hit limits", "Local modules vary"],
    bestForEditorial: "Owners wanting one login for tracking and audits without flagship pricing.",
    whoShouldAvoid: "Enterprises needing the deepest proprietary datasets industry-wide.",
    pricingSummary: "Check keyword rank check quotas and user seats.",
    features: ["Rank tracker", "Website audit", "Competitor research"],
    keyFeatures: [{ name: "Marketing plan", description: "Outline tasks after audits complete." }],
    integrations: ["Analytics connectors", "Search Console"],
    integrationsIntro: "Export PDFs for owners who want monthly SEO snapshots.",
    contractorUse: ["Franchisee rollups", "Marketing manager dashboards"],
    alternatives: [
      alt("Semrush", "semrush", "Flagship breadth", "/Logos/semrush.jpeg"),
      alt("Ubersuggest", "ubersuggest", "Lower-cost starter", "/Logos/ubersuggest.webp"),
    ],
    faqs: [{ q: "SE Ranking for Maps?", a: "Add BrightLocal or Whitespark when citations and grid tracking dominate your roadmap." }],
    relatedReading: RELATED_CROSS,
  },
  "google-search-console": {
    ...SEO_SHELL,
    toolName: "Google Search Console",
    rating: "4.8",
    startingPrice: "Free",
    bestFor: "Every verified site—queries, coverage, and performance straight from Google",
    visitUrl: "https://search.google.com/search-console",
    logoSrc: "/Logos/google.jpeg",
    quickVerdict: "Search Console is non-negotiable: free performance data and indexing signals for every local site.",
    quickVerdictParagraphs: [
      "Use it to see which queries drive impressions, which pages slip, and where manual fixes matter.",
      "Pair with paid suites when you need competitor intelligence beyond your own property.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Core reports for queries, pages, and coverage—no competitor modules." },
      { category: "Pricing", score: "5.0", explanation: "Free for verified properties." },
      { category: "Ease of Use", score: "4.6", explanation: "Straightforward once verified; learning curve on coverage reports." },
      { category: "Support", score: "4.0", explanation: "Community and docs; limited hand-holding." },
      { category: "Local SEO fit", score: "4.7", explanation: "Shows how Google surfaces your pages—even if Map Pack needs GBP tools too." },
    ],
    compareLinks: [
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: ["Authoritative data", "Indexing alerts", "Query-level insight"],
    cons: ["No competitor keyword database", "Not a rank tracker replacement", "Historical limits"],
    bestForEditorial: "All contractors—verify before you spend on ads or SEO retainers.",
    whoShouldAvoid: "No one—every site should verify; skipping it hides preventable issues.",
    pricingSummary: "Free forever for standard use.",
    features: ["Performance reports", "URL inspection", "Coverage & indexing", "Sitemaps"],
    keyFeatures: [
      { name: "Search performance", description: "See which services and cities actually earn impressions." },
      { name: "Page indexing", description: "Fix crawl blocks before Maps traffic stalls." },
    ],
    integrations: ["BigQuery export (eligible sites)", "Looker Studio"],
    integrationsIntro: "Pipe GSC into Looker Studio for owner-friendly dashboards.",
    contractorUse: ["Post-launch monitoring", "Diagnosing drops after site changes", "Prioritizing page fixes"],
    alternatives: [
      alt("Semrush", "semrush", "Paid research + monitoring", "/Logos/semrush.jpeg"),
      alt("BrightLocal", "brightlocal", "Local grid + citation focus", "/Logos/brightlocal.jpeg"),
    ],
    faqs: [{ q: "Replace BrightLocal?", a: "No—GSC shows your site in Search; GBP/Maps often needs specialized local tools." }],
    relatedReading: RELATED_CROSS,
  },
};

export function getSeoToolsReviewBySlug(slug: string): SeoToolsReviewData | undefined {
  return reviews[slug];
}

export function getSeoToolsReviewSlugs(): string[] {
  return Object.keys(reviews);
}
