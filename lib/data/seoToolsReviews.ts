/**
 * SEO tools reviews — cluster parity with lead-generation / website-builders.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import { BEST_FOR_BY_TRADE } from "@/lib/data/seoToolsBestSeoTools";
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

const METHODOLOGY: SeoToolsReviewData["methodology"] = {
  title: "How we review SEO tools",
  sub: "Experience-informed analysis for local service businesses, trades, and agencies.",
  introParagraph:
    "BeltStack reviews SEO software through the same workflows owners and marketers use: verifying a site in Search Console, tightening Google Business Profile, tracking Map Pack movement, fixing crawl errors after a redesign, and reporting to stakeholders who care about calls—not only keyword volume. We synthesize public pricing, documented features, and typical SMB use cases; we do not have access to your Search Console or ranking history, so always cross-check recommendations against your own property data and a qualified SEO or agency when stakes are high.",
  bullets: [
    "Local truth first: we score how each product supports GBP hygiene, service-area pages, reviews, citations, and grid-style local tracking—not generic national SERP vanity.",
    "Honest limits: paid suites complement but do not replace on-site content, backlinks where they matter, and operational follow-through; we say when a free baseline (especially Search Console) is enough before you subscribe.",
    "Pricing and quotas: we flag keyword limits, seats, locations, and crawl credits that bite growing teams—headline prices rarely match your cart at checkout.",
    "Independence: rankings are editorial; vendors cannot pay for placement. We may earn affiliate commissions on some links—see site disclosure—without changing our scoring framework.",
    "Accuracy: product surfaces and plans change; verify current terms with the vendor and your own exports before annual commitments.",
  ],
};

const DISCLOSURE_STANDARD =
  "Plans, limits, and regional availability change. Confirm pricing and quotas on the vendor’s site and validate priorities in your own Search Console before you buy.";

const SEO_SHELL: Pick<
  SeoToolsReviewData,
  | "category"
  | "categoryHref"
  | "methodology"
  | "disclosureLine"
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
  disclosureLine: DISCLOSURE_STANDARD,
  compareSectionTitle: "Compare with other SEO tools",
  bestPayrollSoftwareHref: ROUNDUP_HREF,
  compareHubHref: COMPARE_HUB,
  compareHubLabel: "Compare SEO tools",
  bestRoundupLabel: "Best SEO tools (2026) — full roundup",
  bestForSectionTitle: "Best SEO tools for different use cases",
  bestForSectionSub: "Scenario picks for local service businesses.",
  scenarioLinks: BEST_FOR_BY_TRADE,
  guideHubHref: GUIDES_HREF,
  guideHubLabel: "SEO tools guides",
  popularIndustryLinks: [
    { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
    { label: "Lead generation hub", href: "/lead-generation" },
    { label: "CRM software hub", href: "/crm" },
  ],
};

function alt(name: string, slug: string, description: string, logo: string) {
  return { name, href: getSeoToolsReviewUrl(slug), description, logoSrc: logo };
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
      "We do not see your Search Console queries or conversion data—if Semrush’s keyword ideas disagree with what actually drives clicks for your property, trust GSC and your call tracking, not the tool’s defaults.",
      "Semrush’s breadth is a trade-off: more modules mean more training and license math. Assign an owner for renewals so you are not paying for crawls and seats nobody uses.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.7", explanation: "Strong keyword, SERP, audit, and tracking depth; marketing extras beyond core SEO for teams that will use them." },
      { category: "Pricing", score: "4.0", explanation: "Premium as users, projects, and keywords scale—model annual cost against active campaigns, not the entry banner." },
      { category: "Ease of Use", score: "4.2", explanation: "Powerful but dense; new users need saved views and a simple monthly ritual so the suite does not become shelfware." },
      { category: "Support", score: "4.1", explanation: "Tier-dependent; many SMBs live in docs, academy content, and community—plan time for self-serve learning." },
      { category: "Local SEO fit", score: "4.5", explanation: "Solid for research and landing-page work; Map Pack and citation operations often still need a dedicated local tool or disciplined manual process." },
    ],
    compareLinks: [
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
    ],
    pros: [
      "Large dataset for keywords and SERPs",
      "Technical crawls and monitoring",
      "Scales for multi-location reporting",
      "Useful competitive and content workflows when you publish service-area and blog content regularly",
    ],
    cons: [
      "Premium pricing as seats grow",
      "Can overwhelm solo owners",
      "Local depth often needs a specialist add-on",
      "Easy to over-buy features if nobody owns the weekly SEO cadence",
    ],
    bestForEditorial: "Growing service businesses and agencies balancing content, technical fixes, and rank tracking—with someone accountable for login and renewals.",
    whoShouldAvoid: "Owners who only need free Search Console checks and a single-location GBP—start there before buying.",
    pricingSummary: "Tiered SaaS; validate project limits, tracked keywords, and user seats against what you will actually run each month.",
    pricingTiers: "Higher tiers unlock more projects, keywords, and users—export a quote and compare to Ahrefs or SE Ranking for identical usage assumptions.",
    costVsCompetitors: "Versus Ahrefs, Semrush often wins when you want broader marketing modules in one vendor; versus SE Ranking or Ubersuggest, you pay for dataset breadth and ecosystem depth.",
    features: ["Keyword research", "Site audit", "Position tracking", "Content tools"],
    keyFeatures: [
      { name: "Keyword & SERP research", description: "Discover terms service pages should target by city and service line." },
      { name: "Site health audits", description: "Catch crawl issues that block local landing pages from indexing cleanly." },
      {
        name: "Position tracking",
        description: "Monitor movement on money pages—pair with GSC to avoid chasing keywords that never convert to calls.",
      },
    ],
    integrations: ["Google Analytics / Looker Studio", "GBP data via other stacks", "CRM exports (varies)"],
    integrationsIntro:
      "Connect analytics and Search Console where Semrush allows it so keyword lists stay grounded in real queries. For franchises, standardize one export template so each location’s reports roll up without manual reformatting every month.",
    contractorUse: [
      "City + service landing page expansion",
      "Competitor content gaps",
      "Post-site-launch monitoring",
      "Monthly review: align Semrush opportunities with top GSC landing pages and GBP insights",
      "Brief writers using SERP features and questions—so new pages match search intent, not only volume",
    ],
    alternatives: [
      alt("Ahrefs", "ahrefs", "Deeper backlink workflows", "/Logos/ahrefs.jpeg"),
      alt("SE Ranking", "se-ranking", "Lower-cost all-in-one", "/Logos/seranking.jpeg"),
      alt("Google Search Console", "google-search-console", "Free performance baseline", "/Logos/google.jpeg"),
    ],
    faqs: [
      { q: "Is Semrush good for local contractors?", a: "Yes for research and audits—pair with GBP execution and often a local listings tool for Map Pack work." },
      {
        q: "How should I verify BeltStack’s Semrush takeaways?",
        a: "Compare our themes to your Search Console performance report, your GBP insights, and—if you use them—call or form attribution. If your data shows different winning queries, follow your property—not a generic review.",
      },
      {
        q: "Does BeltStack get paid by Semrush?",
        a: "We do not accept payment for ratings. Affiliate links may appear elsewhere on the site; they do not determine scores here. Always confirm current plans on semrush.com before purchase.",
      },
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
      "Link and content intelligence is only useful if someone acts on it: outreach, internal links, or new pages. Without an owner, Ahrefs becomes an expensive dashboard.",
      "We cannot see your backlink profile or disavow history—use Site Explorer and GSC links reports together; editorial reviews never replace your disavow or penalty context.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.8", explanation: "Industry-respected link index, content exploration, and rank tracking for teams serious about off-site and content strategy." },
      { category: "Pricing", score: "4.0", explanation: "Premium; credits and seats require honest modeling against how many campaigns and keywords you track weekly." },
      { category: "Ease of Use", score: "4.2", explanation: "Logical for experienced SEOs; newer owners should budget learning time or agency support." },
      { category: "Support", score: "4.1", explanation: "Strong help content; direct support experience varies by plan and issue type." },
      { category: "Local SEO fit", score: "4.3", explanation: "Excellent for competitive content and links; GBP grids and citation ops usually need BrightLocal, Whitespark, or disciplined manual work." },
    ],
    compareLinks: [
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
      { label: "Ahrefs vs Moz Pro", href: getSeoToolsCompareUrl("ahrefs-vs-moz-pro") },
    ],
    pros: [
      "Strong link index",
      "Content explorer workflows",
      "Reliable rank tracking",
      "Clear workflows to reverse-engineer competitor pages and link sources",
    ],
    cons: [
      "Premium pricing",
      "Local listings not native",
      "Learning curve for new SEOs",
      "Risk of analysis paralysis if nobody prioritizes a short backlog of shipped pages",
    ],
    bestForEditorial: "Operators investing in content and links beyond bare-bones GBP hygiene—with time to execute or an agency partner.",
    whoShouldAvoid: "Teams with zero bandwidth for content—fix GBP and on-page basics first.",
    pricingSummary: "Credit and seat-based plans—model against active campaigns and tracked keywords before annual prepay.",
    pricingTiers: "Plans differ by user limits and usage credits—align subscription tier to how many sites and reports you run monthly, not peak-season curiosity.",
    costVsCompetitors: "Versus Semrush, Ahrefs often wins pure link-and-content research; versus Moz Pro, expect deeper raw link exploration at higher cost and complexity.",
    features: ["Site Explorer", "Keywords Explorer", "Rank tracker", "Site Audit"],
    keyFeatures: [
      { name: "Backlink analysis", description: "See who links to competitors in your service vertical." },
      { name: "Content gaps", description: "Find topics your city pages never covered." },
      {
        name: "Broken link and internal link ideas",
        description: "Improve crawl paths to money service pages—especially after template or CMS changes.",
      },
    ],
    integrations: ["Search Console", "APIs for reporting stacks"],
    integrationsIntro:
      "Pipe GSC-verified URLs into your workflow so Ahrefs opportunities match pages Google actually serves. For owners, export one-page summaries: top gaps, top link targets, and three agreed actions—avoid raw exports nobody reads.",
    contractorUse: [
      "Competitive link benchmarks",
      "Blog and FAQ expansion",
      "Landing page gap analysis",
      "Prioritize internal links from high-traffic blog posts to city + service landers",
    ],
    alternatives: [
      alt("Semrush", "semrush", "Broader marketing modules", "/Logos/semrush.jpeg"),
      alt("Moz Pro", "moz-pro", "Mid-market suite alternative", "/Logos/mozpro.jpeg"),
    ],
    faqs: [
      { q: "Ahrefs vs Semrush for local?", a: "Ahrefs for links/content depth; Semrush for broader marketing OS—many locals run one suite plus a GBP-focused tool." },
      {
        q: "Can Ahrefs replace Google Search Console?",
        a: "No—GSC is first-party performance and indexing data for your site. Ahrefs adds competitive and link context; use both, and when they conflict on priority, test with small shipped changes and watch GSC.",
      },
      {
        q: "Who writes BeltStack’s Ahrefs review?",
        a: "Editors focused on SMB and local SEO software; we do not sell Ahrefs or receive payment for this score. Confirm features and limits on ahrefs.com for your region.",
      },
    ],
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
      "Moz Pro fits teams that want credible fundamentals without living inside the heaviest enterprise interfaces—success still depends on whether you publish and earn links, not only run crawls.",
      "We do not grade your Domain Authority against competitors in your city—use Moz metrics as one signal alongside GSC, rankings, and real leads.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.3", explanation: "Solid rank tracking, crawls, on-page guidance, and link research for typical SMB SEO programs." },
      { category: "Pricing", score: "4.2", explanation: "Mid-market relative to flagship suites—watch crawl credits and keyword caps as you add locations or campaigns." },
      { category: "Ease of Use", score: "4.5", explanation: "Often friendlier for marketers stepping up from spreadsheets and GSC alone." },
      { category: "Support", score: "4.2", explanation: "Good educational brand; direct support quality still varies by issue and tier." },
      { category: "Local SEO fit", score: "4.2", explanation: "Supports on-page and visibility tracking; Map Pack and citation programs usually need parallel local tooling or process." },
    ],
    compareLinks: [
      { label: "Ahrefs vs Moz Pro", href: getSeoToolsCompareUrl("ahrefs-vs-moz-pro") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: ["Approachable UX", "Solid rank tracking", "Trusted training content", "Useful on-page prioritization when you cannot hire a full-time SEO"],
    cons: [
      "Less link depth than Ahrefs",
      "Not a pure local platform",
      "Tier caps matter",
      "Still requires content and GBP execution—Moz does not run your reviews program",
    ],
    bestForEditorial: "Small teams building repeatable SEO habits alongside local listings work and clear publishing cadence.",
    whoShouldAvoid: "Enterprise link analysts who need the deepest raw index daily.",
    pricingSummary: "Plans differ by crawl credits and tracked keywords—check campaign limits before you lock annual billing.",
    pricingTiers: "Higher plans typically raise crawl frequency, keyword tracking, and user seats—match tier to active sites, not every microsite you own.",
    costVsCompetitors: "Often sits between Ubersuggest/SE Ranking on price-to-depth and Ahrefs on raw link exploration—good when education and UX matter as much as index size.",
    features: ["Rank tracking", "Site crawl", "On-page grader", "Link research"],
    keyFeatures: [
      { name: "Page optimization", description: "Prioritize fixes on money service pages." },
      { name: "Rank tracking", description: "Report movement on priority city + service URLs for owner meetings." },
    ],
    integrations: ["Google Analytics", "Search Console"],
    integrationsIntro:
      "Link Search Console early so Moz recommendations align with how Google actually crawls and serves your URLs. Avoid duplicate work: if GSC shows a coverage fix, ship it before debating third-party scores.",
    contractorUse: [
      "Service page tune-ups",
      "Monthly ranking reports for owners",
      "Post-redesign crawl comparison to catch dropped templates or orphan pages",
    ],
    alternatives: [
      alt("Ahrefs", "ahrefs", "Heavier link dataset", "/Logos/ahrefs.jpeg"),
      alt("Semrush", "semrush", "Broader marketing toolkit", "/Logos/semrush.jpeg"),
    ],
    faqs: [
      { q: "Moz vs free tools?", a: "Moz adds scalable tracking and crawl guidance—Search Console stays essential either way." },
      {
        q: "Is Moz Pro enough for Map Pack dominance?",
        a: "Rarely by itself—you still need strong GBP, reviews, citations, and relevant landing pages. Use Moz for on-site and tracking; add BrightLocal or Whitespark or rigorous manual local ops when Maps is the goal.",
      },
      {
        q: "Does BeltStack favor Moz over Ahrefs?",
        a: "No—we match tool to job. Ahrefs often wins raw link research; Moz often wins approachable workflows and learning. Your stack should follow your workflow and budget, not our headline rating alone.",
      },
    ],
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
      "Ubersuggest is a sensible experiment when budget is tight—set a 90-day goal (e.g. three new service pages shipped) so you know whether to graduate or cancel.",
      "Data freshness and depth lag flagship suites in competitive metros; do not expect it to replace Ahrefs-level link forensics for aggressive niches.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "3.9", explanation: "Keyword ideas, light audits, and competitor snapshots—enough to start, thin for advanced link campaigns." },
      { category: "Pricing", score: "4.5", explanation: "Among the most accessible paid entry points; still verify limits and renewal terms." },
      { category: "Ease of Use", score: "4.4", explanation: "Simple UI lowers barrier for owners new to SEO tooling." },
      { category: "Support", score: "3.8", explanation: "Expect self-serve help at this tier; community depth smaller than enterprise suites." },
      { category: "Local SEO fit", score: "3.9", explanation: "Supports page-level thinking; GBP grids and citation engines are not the product’s core strength." },
    ],
    compareLinks: [
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
    ],
    pros: ["Low price", "Simple UI", "Good for experiments", "Fast way to generate content angles for trades blogs and FAQ pages"],
    cons: ["Thinner datasets", "Limited advanced link work", "Local GBP still separate", "May underdeliver in hyper-competitive cities without added tools or agency help"],
    bestForEditorial: "Solo operators testing SEO before larger subscriptions—with Search Console pinned as the source of truth.",
    whoShouldAvoid: "Multi-location franchises needing enterprise reporting and strict SLA-style support.",
    pricingSummary: "Often sold as monthly or lifetime—verify keyword limits, export caps, and whether ‘lifetime’ matches how long you plan to keep the domain.",
    costVsCompetitors: "Cheaper than Semrush or Ahrefs for light research; expect to add budget or tools when you outgrow idea generation and need deep links or multi-brand reporting.",
    features: ["Keyword ideas", "Site audit", "Competitor snapshots"],
    keyFeatures: [
      { name: "Content ideas", description: "Find FAQ and blog angles for trades." },
      { name: "Site audit snapshots", description: "Catch obvious technical issues before you pay for a full redesign or migrate hosts." },
    ],
    integrations: ["Limited vs larger suites"],
    integrationsIntro:
      "Treat exports as tasks in your project tool or CRM—Ubersuggest’s value is realized when ideas become published pages with internal links and GSC monitoring.",
    contractorUse: ["Early content calendar", "Quick audit before a site relaunch", "Validate whether paid SEO software earns a slot before upgrading to Semrush or SE Ranking"],
    alternatives: [
      alt("Semrush", "semrush", "Full suite depth", "/Logos/semrush.jpeg"),
      alt("SE Ranking", "se-ranking", "Mid-tier all-in-one", "/Logos/seranking.jpeg"),
    ],
    faqs: [
      { q: "Is Ubersuggest enough alone?", a: "Usually not for competitive metros—add Search Console and often a local SEO tool." },
      {
        q: "Why does BeltStack still recommend Search Console with Ubersuggest?",
        a: "Search Console reports how Google treats your verified property; Ubersuggest estimates and suggests. When they disagree, ship a small test and watch GSC—not the review page—for results.",
      },
    ],
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
      "Grid reports and white-label PDFs impress clients only when someone acts on NAP fixes, review replies, and photo updates—assign weekly ownership.",
      "We do not see your GBP suspension history or competitor spam patterns; those change risk and tactics beyond what any review can cover.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.6", explanation: "Strong local audit, citation, grid tracking, and reporting workflows for agencies and multi-location brands." },
      { category: "Pricing", score: "4.1", explanation: "Scales with locations and modules—budget honestly for every ZIP or brand you track." },
      { category: "Ease of Use", score: "4.3", explanation: "Built for local SEO operators; first-time users should expect terminology learning (citations, grids, NAP)." },
      { category: "Support", score: "4.2", explanation: "Generally solid for a specialist platform; complex edge cases still need experienced local SEO judgment." },
      { category: "Local SEO fit", score: "4.8", explanation: "Core product aligns with Map Pack, directories, and GBP-adjacent operations for service businesses." },
    ],
    compareLinks: [
      { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: [
      "Local rank grids",
      "Citation tools",
      "White-label reporting",
      "Client-ready reporting that ties local work to visible metrics when data is interpreted honestly",
    ],
    cons: [
      "Not a full national content suite",
      "Costs scale with locations",
      "Still needs human execution",
      "Grids without GBP and on-page fixes can mislead—correlate with Search Console and call data",
    ],
    bestForEditorial: "HVAC, plumbing, and home services brands optimizing Maps and directories—with ops discipline on reviews and NAP.",
    whoShouldAvoid: "Pure ecommerce brands with no local footprint.",
    pricingSummary: "Per-location and module bundles—match to ZIPs you track and cancel modules you do not open monthly.",
    pricingTiers: "Listings, reputation, and reporting bundles stack—quote the combination you will actually use for each brand, not every add-on on the pricing page.",
    costVsCompetitors: "Versus Whitespark, compare citation workflows, grid UX, and agency reporting; versus Semrush, BrightLocal wins dedicated local ops—not national content research.",
    features: ["Local search audit", "Citation tracker", "GBP tools", "Review monitoring"],
    keyFeatures: [
      { name: "Local rank tracking", description: "See visibility by grid for service areas." },
      { name: "Citation management", description: "Track and fix directory inconsistencies that dilute Map Pack trust." },
    ],
    integrations: ["GBP", "Data connectors for agencies"],
    integrationsIntro:
      "Sync thinking with your website CMS and CRM: citations and grids should match the addresses and phone numbers customers see on live pages and in email signatures.",
    contractorUse: [
      "Multi-zip service areas",
      "Franchise reporting",
      "Before/after rebrand migrations",
      "Monthly owner review: grid + review velocity + top GSC landing pages for the same cities",
    ],
    alternatives: [
      alt("Whitespark", "whitespark", "Citation-heavy alternative", "/Logos/whitespark.jpeg"),
      alt("Semrush", "semrush", "Broader SEO research", "/Logos/semrush.jpeg"),
    ],
    faqs: [
      { q: "BrightLocal vs a national suite?", a: "Use both when you need Map Pack execution plus content/competitor research." },
      {
        q: "How does BeltStack review BrightLocal fairly?",
        a: "We assess local SEO workflows for trades and agencies, not pay-for-placement. Confirm module pricing and data regions on BrightLocal’s site; your market competitiveness may require more or less tooling than our typical scenario.",
      },
    ],
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
      "Whitespark’s reputation comes from education and specialist tooling—budget for both software and the hours to build and clean listings.",
      "Editorial reviews cannot see your duplicate listings or practitioner GBP conflicts; those audits need eyes on your live SERPs and GBP support cases.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Citation finder, local rank tracking, and reputation-oriented tools trusted by local SEO practitioners." },
      { category: "Pricing", score: "4.2", explanation: "Modular tools can add up—price per active brand and which modules you will run monthly." },
      { category: "Ease of Use", score: "4.2", explanation: "Power users love it; newcomers should expect specialist vocabulary and workflows." },
      { category: "Support", score: "4.3", explanation: "Strong community and educational culture around local SEO best practices." },
      { category: "Local SEO fit", score: "4.8", explanation: "Purpose-built for listings, discovery, and local measurement—not a replacement for national content suites." },
    ],
    compareLinks: [
      { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: [
      "Strong local SEO reputation",
      "Helpful training",
      "Grid and citation tooling",
      "Practical for launches and rebrands when listings must be rebuilt systematically",
    ],
    cons: ["Modular pricing adds up", "Not a full content suite", "Requires consistent follow-through", "Still need on-site relevance and review culture for durable Maps results"],
    bestForEditorial: "Local operators serious about directories and Map Pack measurement—and willing to maintain data monthly.",
    whoShouldAvoid: "Teams that refuse to maintain NAP consistency or reviews.",
    pricingSummary: "Tool bundles vary—budget per active brand or location and re-evaluate quarterly when you add markets.",
    costVsCompetitors: "Often compared directly to BrightLocal: Whitespark shines on citation discovery and education; choose on reporting, agency workflow, and which UI your team will actually log into.",
    features: ["Local citation finder", "Rank tracking", "Review tools"],
    keyFeatures: [
      { name: "Citation opportunities", description: "Discover listings competitors have that you lack." },
      { name: "Local rank tracking", description: "Measure grid movement after GBP and on-page changes—not in isolation from leads." },
    ],
    integrations: ["GBP ecosystem", "Agency reporting"],
    integrationsIntro:
      "Document every listing login and owner email in your CRM or ops wiki—Whitespark accelerates discovery, but long-term wins need governance when staff or agencies change.",
    contractorUse: ["New market launches", "Post-merge rebrands", "Agency deliverables", "Quarterly citation hygiene after staff or phone number changes"],
    alternatives: [
      alt("BrightLocal", "brightlocal", "Local platform alternative", "/Logos/brightlocal.jpeg"),
    ],
    faqs: [
      { q: "Whitespark enough without a suite?", a: "Many teams pair it with Semrush, Ahrefs, or SE Ranking for keyword/content depth." },
      {
        q: "Does BeltStack get referral fees from Whitespark?",
        a: "We may use affiliate links on the broader site; they do not buy placement in this review. Compare Whitespark’s current modules and pricing directly before you commit.",
      },
    ],
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
      "Treat SE Ranking as a pragmatic hub for rank checks, audits, and light competitor views—validate every priority against Search Console and your call or form data.",
      "Quotas on keywords, projects, and audit depth vary by plan; model your cart for every location or brand you track, not the headline monthly price.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Rank tracking, site audit, backlink and competitor modules cover typical SMB workflows without flagship depth everywhere." },
      { category: "Pricing", score: "4.5", explanation: "Often undercuts Semrush/Ahrefs for comparable breadth—watch upgrade tiers when you add users or keyword sets." },
      { category: "Ease of Use", score: "4.3", explanation: "Cleaner than the largest suites for many SMBs; still needs a monthly ritual so reports drive actions, not PDFs in email." },
      { category: "Support", score: "4.0", explanation: "Adequate for mid-market; complex edge cases may still need an experienced SEO or agency." },
      { category: "Local SEO fit", score: "4.1", explanation: "Supports local keyword and landing-page work; Map Pack, citations, and grids usually need BrightLocal, Whitespark, or disciplined manual GBP ops." },
    ],
    compareLinks: [
      { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
      { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
      { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    ],
    pros: [
      "Competitive pricing",
      "Solid feature spread",
      "Good for SMB reporting",
      "Reasonable middle ground when Semrush feels heavy but free tools feel thin",
    ],
    cons: [
      "Smaller brand footprint",
      "Advanced users may hit limits",
      "Local modules vary",
      "Rank positions in any tool can disagree with live SERPs—spot-check high-value terms",
    ],
    bestForEditorial: "Owners wanting one login for tracking and audits without flagship pricing—and someone accountable to act on the audit queue monthly.",
    whoShouldAvoid: "Enterprises needing the deepest proprietary datasets industry-wide.",
    pricingSummary: "Check keyword rank-check quotas, audit frequency, and user seats before annual billing.",
    pricingTiers: "Plans typically ladder by tracked keywords, audit depth, and seats—map each tier to one primary domain or brand first, then expand.",
    costVsCompetitors: "Versus Semrush: less ecosystem polish and third-party buzz, often better SMB value if you use core modules only. Versus Ubersuggest: more traditional SEO depth; versus Ahrefs: lighter on backlink exploration for power users.",
    features: ["Rank tracker", "Website audit", "Competitor research"],
    keyFeatures: [
      { name: "Marketing plan", description: "Outline tasks after audits complete." },
      { name: "Rank tracking", description: "Monitor target terms and landing URLs; reconcile drops with GSC coverage and recent site or GBP changes." },
    ],
    integrations: ["Analytics connectors", "Search Console"],
    integrationsIntro:
      "Connect Search Console and analytics so SE Ranking’s dashboards sit beside first-party clicks and conversions—paid tools should never override what Google already shows for your property.",
    contractorUse: ["Franchisee rollups", "Marketing manager dashboards", "Monthly review: top GSC queries vs tracked keywords in SE Ranking"],
    alternatives: [
      alt("Semrush", "semrush", "Flagship breadth", "/Logos/semrush.jpeg"),
      alt("Ubersuggest", "ubersuggest", "Lower-cost starter", "/Logos/ubersuggest.webp"),
    ],
    faqs: [
      { q: "SE Ranking for Maps?", a: "Add BrightLocal or Whitespark when citations and grid tracking dominate your roadmap." },
      {
        q: "How does BeltStack stay independent on SE Ranking?",
        a: "Scores reflect SMB and contractor workflows, not vendor relationships. We may earn affiliate commissions elsewhere on the site; that does not change this review. Confirm current plans and limits on SE Ranking’s pricing page before you subscribe.",
      },
    ],
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
      "GSC is first-party Google data for your verified property—when a paid tool disagrees with Performance or Coverage, default to GSC for indexing truth and spot-check SERPs for high-value terms.",
      "Local trades should still manage Google Business Profile separately; GSC explains how search surfaces your website, not every Maps ranking factor or review signal.",
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
    pros: [
      "Authoritative data",
      "Indexing alerts",
      "Query-level insight",
      "No vendor lock-in—baseline truth for stakeholders who ask “what is Google actually doing with our site?”",
    ],
    cons: [
      "No competitor keyword database",
      "Not a rank tracker replacement",
      "Historical limits",
      "Sampling and thresholds can hide tail queries—export periodically for long-term trending",
    ],
    bestForEditorial: "All contractors—verify before you spend on ads or SEO retainers, and assign someone to open Coverage when you launch new service-area pages.",
    whoShouldAvoid: "No one—every site should verify; skipping it hides preventable issues.",
    pricingSummary: "Free forever for standard use; BigQuery export where eligible is an ops cost, not a Google subscription.",
    costVsCompetitors: "Paid suites add competitor databases and workflow; GSC remains the trust anchor for your own indexing and query performance—budget paid tools as supplements, not replacements.",
    features: ["Performance reports", "URL inspection", "Coverage & indexing", "Sitemaps"],
    keyFeatures: [
      { name: "Search performance", description: "See which services and cities actually earn impressions." },
      { name: "Page indexing", description: "Fix crawl blocks before Maps traffic stalls." },
    ],
    integrations: ["BigQuery export (eligible sites)", "Looker Studio"],
    integrationsIntro:
      "Pipe GSC into Looker Studio or your BI stack so owners see clicks and impressions next to leads—keep URL inspection and manual checks in GSC when you ship major template or schema changes.",
    contractorUse: [
      "Post-launch monitoring",
      "Diagnosing drops after site changes",
      "Prioritizing page fixes",
      "After GBP or NAP updates, watch branded and city+service queries in Performance for a few weeks",
    ],
    alternatives: [
      alt("Semrush", "semrush", "Paid research + monitoring", "/Logos/semrush.jpeg"),
      alt("BrightLocal", "brightlocal", "Local grid + citation focus", "/Logos/brightlocal.jpeg"),
    ],
    faqs: [
      { q: "Replace BrightLocal?", a: "No—GSC shows your site in Search; GBP/Maps often needs specialized local tools." },
      {
        q: "Why trust BeltStack on a free Google product?",
        a: "We have no incentive to upsell Search Console; our guidance is to verify every property and cross-check paid SEO tools against GSC. Product behavior changes with Google’s updates—confirm critical settings in your own account.",
      },
    ],
    relatedReading: RELATED_CROSS,
  },
};

export function getSeoToolsReviewBySlug(slug: string): SeoToolsReviewData | undefined {
  return reviews[slug];
}

export function getSeoToolsReviewSlugs(): string[] {
  return Object.keys(reviews);
}
