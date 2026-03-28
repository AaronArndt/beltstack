/**
 * SEO tools head-to-head comparisons — editorial copy emphasizes local/trades workflows,
 * Google Search Console as ground truth, honest product limits, and independence from vendors.
 */

import type { ComparisonFeatureRow, ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getSeoToolsAlternativeUrl,
  getSeoToolsBestForUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
} from "@/lib/routes";

export function getSeoToolsCompareUrlFromSlug(slug: string): string {
  return `/seo-tools/compare/${slug}`;
}

const SEO_TRADE_LINKS = [
  { label: "Best SEO tools for contractors", href: getSeoToolsBestForUrl("contractors") },
  { label: "Best for local SEO", href: getSeoToolsBestForUrl("local-seo") },
  { label: "Best for small business", href: getSeoToolsBestForUrl("small-business") },
  { label: "Best for HVAC", href: getSeoToolsBestForUrl("hvac") },
];

const P = {
  semrush: {
    name: "Semrush",
    slug: "semrush",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    logoSrc: "/Logos/semrush.jpeg",
    visitUrl: "https://www.semrush.com",
    bestForSummary: "All-in-one SEO research, audits, and rank tracking for growing teams.",
    rating: "4.6",
    startingPrice: "From ~$139/mo",
  },
  ahrefs: {
    name: "Ahrefs",
    slug: "ahrefs",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    logoSrc: "/Logos/ahrefs.jpeg",
    visitUrl: "https://ahrefs.com",
    bestForSummary: "Backlink intelligence and content research with strong rank tracking.",
    rating: "4.7",
    startingPrice: "From ~$129/mo",
  },
  "moz-pro": {
    name: "Moz Pro",
    slug: "moz-pro",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    logoSrc: "/Logos/mozpro.jpeg",
    visitUrl: "https://moz.com/products/pro",
    bestForSummary: "Approachable SEO suite for SMB keyword tracking and on-page work.",
    rating: "4.3",
    startingPrice: "From ~$99/mo",
  },
  ubersuggest: {
    name: "Ubersuggest",
    slug: "ubersuggest",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    logoSrc: "/Logos/ubersuggest.webp",
    visitUrl: "https://neilpatel.com/ubersuggest",
    bestForSummary: "Budget keyword ideas and light audits for early-stage SEO.",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
  },
  brightlocal: {
    name: "BrightLocal",
    slug: "brightlocal",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    logoSrc: "/Logos/brightlocal.jpeg",
    visitUrl: "https://www.brightlocal.com",
    bestForSummary: "Local SEO platform for GBP, citations, and grid rank tracking.",
    rating: "4.5",
    startingPrice: "From ~$39/mo",
  },
  whitespark: {
    name: "Whitespark",
    slug: "whitespark",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
    logoSrc: "/Logos/whitespark.jpeg",
    visitUrl: "https://whitespark.ca",
    bestForSummary: "Citation tools, local search education, and reputation workflows.",
    rating: "4.5",
    startingPrice: "From ~$25/mo",
  },
  "se-ranking": {
    name: "SE Ranking",
    slug: "se-ranking",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    logoSrc: "/Logos/seranking.jpeg",
    visitUrl: "https://seranking.com",
    bestForSummary: "Value all-in-one SEO with rank tracking and audits.",
    rating: "4.4",
    startingPrice: "From ~$65/mo",
  },
} as const;

const ALTERNATIVES_PAGE_SLUGS = new Set<keyof typeof P>(["semrush", "ahrefs", "moz-pro"]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const s of slugs) {
    if (!ALTERNATIVES_PAGE_SLUGS.has(s as keyof typeof P)) continue;
    const p = P[s as keyof typeof P];
    out.push({
      label: `Best ${p.name} alternatives (ranked)`,
      href: getSeoToolsAlternativeUrl(s),
    });
  }
  return out;
}

function buildMoreComparisons(pa: (typeof P)[keyof typeof P], pb: (typeof P)[keyof typeof P]) {
  const fromSlugs = alternativesPageLinksForSlugs([pa.slug, pb.slug]);
  const fallback =
    fromSlugs.length === 0
      ? [{ label: "Best Semrush alternatives (ranked)", href: getSeoToolsAlternativeUrl("semrush") }]
      : [];
  const isLocalDuel =
    (pa.slug === "brightlocal" || pa.slug === "whitespark") &&
    (pb.slug === "brightlocal" || pb.slug === "whitespark");
  const crossCluster = isLocalDuel
    ? [
        { label: "Best website builders (2026)", href: "/website-builders/best-website-builders" },
        { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
      ]
    : [
        { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
        { label: "CRM software hub", href: "/crm" },
      ];
  return [
    { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
    { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
    { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
    ...fromSlugs,
    ...fallback,
    ...crossCluster,
  ];
}

const PRICING_EEAT_FOOTNOTE =
  "Confirm current list prices, taxes, and add-ons on each vendor’s site—headline tiers rarely match your cart. BeltStack does not accept pay-for-placement in comparisons; we may earn affiliate commissions on some outbound links elsewhere without changing how we score trade-offs. Reconcile any keyword, impression, or rank story with Google Search Console on your verified properties before you annualize a contract.";

function featureComparisonForSlug(slug: string): ComparisonFeatureRow[] {
  switch (slug) {
    case "semrush-vs-ahrefs":
      return [
        {
          feature: "Keyword & SERP intelligence",
          productA: "Broad marketing-angled datasets",
          productB: "Deep SERP + content research",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Backlink index & history",
          productA: "Strong exploration",
          productB: "Often the reference for link research",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Adjacent marketing workflows",
          productA: "Wider platform (content, ads-adjacent tools, etc.)",
          productB: "SEO-and-content centric",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Local / Map Pack operations",
          productA: "Supports local research; not a GBP ops hub",
          productB: "Same—pair with BrightLocal or Whitespark when grids/citations are daily work",
          supportA: "partial",
          supportB: "partial",
        },
        {
          feature: "Site audits & crawling",
          productA: "Full crawl workflows",
          productB: "Full crawl workflows",
          supportA: "supported",
          supportB: "supported",
        },
      ];
    case "ahrefs-vs-moz-pro":
      return [
        {
          feature: "Backlink exploration",
          productA: "Deep index + competitive link context",
          productB: "Useful but not class-leading depth",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Onboarding & education",
          productA: "Power-user UX; steeper for generalists",
          productB: "Approachable training and SMB-friendly framing",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Rank tracking & on-page guidance",
          productA: "Strong",
          productB: "Core strength for Moz",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Keyword research",
          productA: "Explorer-scale ideas and gaps",
          productB: "Solid fundamentals for growing sites",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Local / GBP-centric ops",
          productA: "Not a replacement for listings tools",
          productB: "Same—add BrightLocal/Whitespark for Map Pack execution",
          supportA: "partial",
          supportB: "partial",
        },
      ];
    case "semrush-vs-ubersuggest":
      return [
        {
          feature: "Dataset depth & scale",
          productA: "Enterprise-style limits and breadth",
          productB: "Lighter quotas; starter-oriented",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Keyword & content research",
          productA: "Broad workflows",
          productB: "Good for experiments; less depth at scale",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Backlink analysis",
          productA: "Strong exploration",
          productB: "Limited vs flagship suites",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Site audits",
          productA: "Full crawl/issue workflows",
          productB: "Useful but shallower for large sites",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "Local / Map Pack operations",
          productA: "Research layer; not GBP ops",
          productB: "Same",
          supportA: "partial",
          supportB: "partial",
        },
      ];
    case "brightlocal-vs-whitespark":
      return [
        {
          feature: "Map Pack & grid-style rank tracking",
          productA: "Grids and local reporting",
          productB: "Local rank + measurement tooling",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Citation discovery & cleanup",
          productA: "Listings and citation workflows",
          productB: "Often praised for citation finder depth",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Agency reporting & white-label",
          productA: "Strong client PDF / rollup story",
          productB: "Varies by module—check what you will ship monthly",
          supportA: "supported",
          supportB: "partial",
          stronger: "A",
        },
        {
          feature: "National SEO / content research",
          productA: "Not the core product",
          productB: "Not the core product—pair with a suite if needed",
          supportA: "partial",
          supportB: "partial",
        },
        {
          feature: "Site-wide technical SEO crawl",
          productA: "Local and listing focus first",
          productB: "Complement with Semrush, Ahrefs, or SE Ranking",
          supportA: "partial",
          supportB: "partial",
        },
      ];
    case "se-ranking-vs-semrush":
      return [
        {
          feature: "All-in-one breadth",
          productA: "Pragmatic audits + tracking + competitor views",
          productB: "Broader datasets and marketing-adjacent modules",
          supportA: "supported",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Price-to-feature for SMBs",
          productA: "Often lower total for comparable core SEO tasks",
          productB: "Premium as seats/projects scale",
          supportA: "supported",
          supportB: "supported",
          stronger: "A",
        },
        {
          feature: "Backlink tooling",
          productA: "Useful; not class-leading depth",
          productB: "Stronger exploration for heavy link workflows",
          supportA: "partial",
          supportB: "supported",
          stronger: "B",
        },
        {
          feature: "Local / Map Pack operations",
          productA: "Research layer; add a local platform if needed",
          productB: "Same",
          supportA: "partial",
          supportB: "partial",
        },
        {
          feature: "Site audits & rank tracking",
          productA: "Core product strengths",
          productB: "Core product strengths",
          supportA: "supported",
          supportB: "supported",
        },
      ];
    default:
      return [];
  }
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
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/seo-tools",
      categoryLabel: "SEO Tools",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [summary],
      featureComparison: featureComparisonForSlug(slug),
      pricingComparison: `Both products price on usage tiers—model annual cost against tracked keywords, crawl credits, locations, and seats. For local contractors, tie software spend to booked jobs and branded plus service-area queries in Search Console, not vanity national rankings alone. ${PRICING_EEAT_FOOTNOTE}`,
      prosConsA: {
        pros: ["Strong dataset or workflow fit for its segment", "Useful reporting for service pages"],
        cons: ["Costs rise with scale", "Requires consistent execution on GBP and reviews"],
      },
      prosConsB: {
        pros: ["Complementary strengths vs competitor", "Scales with documented processes"],
        cons: ["Learning curve for new SEO owners", "Still needs human content and citation work"],
      },
      bestFor: [
        {
          heading: "Choose by your bottleneck",
          body: "If Map Pack and citations lag, favor BrightLocal or Whitespark. If content and links lag, favor Semrush or Ahrefs. Always keep Google Search Console verified.",
        },
      ],
      alternatives: [
        { name: "Semrush", href: getSeoToolsReviewUrl("semrush"), logoSrc: "/Logos/semrush.jpeg", description: "All-in-one SEO suite." },
        { name: "Ahrefs", href: getSeoToolsReviewUrl("ahrefs"), logoSrc: "/Logos/ahrefs.jpeg", description: "Backlink-forward research." },
        { name: "BrightLocal", href: getSeoToolsReviewUrl("brightlocal"), logoSrc: "/Logos/brightlocal.jpeg", description: "Local SEO operations." },
      ],
      faqs: [
        { q: `Which is better for local contractors—${pa.name} or ${pb.name}?`, a: summary },
        { q: "Do I still need Google Business Profile work?", a: "Yes—SEO tools inform and measure; they do not replace photos, categories, reviews, and accurate service areas." },
      ],
      sidebarWinners: [
        { label: "Workflow breadth", winner: "A" },
        { label: "Focused strength", winner: "B" },
      ],
      moreComparisons: buildMoreComparisons(pa, pb),
      relevantTradeLinks: SEO_TRADE_LINKS,
      ...extra,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build(
    "semrush-vs-ahrefs",
    "semrush",
    "ahrefs",
    "Semrush packages SEO with broader marketing-adjacent workflows; Ahrefs is the usual pick when link history and content gaps steer weekly priorities. Neither replaces disciplined Google Business Profile work for Map Pack-heavy trades—validate priorities in Search Console on your verified properties.",
    {
      sidebarWinners: [
        { label: "Marketing platform breadth", winner: "A" },
        { label: "Link + content research", winner: "B" },
      ],
      quickRecommendationA:
        "Choose Semrush when you want one login spanning SEO plus adjacent marketing surfaces (and accept a busier UI), and when your team will actually use those extra modules—not just the rank tracker.",
      quickRecommendationB:
        "Choose Ahrefs when competitor backlinks, broken link opportunities, and content gap research are weekly rituals, and when you are willing to pair it with GBP execution or a local specialist tool for Maps.",
      quickVerdictParagraphs: [
        "Semrush and Ahrefs both serve serious SEO teams, but they optimize for different centers of gravity. Semrush tends to win evaluations where breadth—keyword workflows, audits, and platform sprawl—matters as much as raw link rows. Ahrefs tends to win when practitioners live in Site Explorer and Content Gap views and want a tight narrative around links and SERPs.",
        "For HVAC, plumbing, and other local service businesses, the decisive question is often operational: who will maintain reviews, photos, categories, and accurate service areas? These suites inform which pages and terms to build; they do not dispatch trucks. When Map Pack grids and citations are the bottleneck, budget BrightLocal or Whitespark alongside either suite.",
        "We do not see your Search Console queries, conversion paths, or GBP suspension history. If either tool’s keyword priorities disagree with the queries and landing pages that already earn impressions for your property, trust first-party GSC data and spot-check high-value SERPs—not default tool presets.",
        "BeltStack comparisons are editorial; vendors cannot pay for placement. We may use affiliate links elsewhere on the site. Confirm seats, projects, crawl credits, and regional pricing on Semrush.com and Ahrefs.com before you annualize.",
      ],
      decisionGuideA: [
        "You run multi-channel marketing and want SEO data adjacent to content, advertising, or broader reporting in one ecosystem.",
        "Your team prefers a wide feature footprint over maximizing link-index depth per dollar.",
        "You accept higher renewal complexity and assign owners so unused modules do not quietly renew.",
      ],
      decisionGuideB: [
        "Backlink gap analysis and historical link context are how you prioritize outreach and content every sprint.",
        "You want a product culture centered on SEO and content research rather than an all-in marketing OS.",
        "You will pair the suite with Search Console and, when needed, a dedicated local tool for listings and grids.",
      ],
      ratingsComparison: [
        { category: "Marketing platform breadth", productA: "4.7", productB: "3.5" },
        { category: "Backlink intelligence", productA: "4.3", productB: "4.8" },
        { category: "SMB ease of adoption", productA: "3.9", productB: "3.8" },
        { category: "Local SEO (native)", productA: "3.6", productB: "3.5" },
        { category: "Value for lean teams", productA: "3.8", productB: "3.9" },
      ],
      pricingComparison: `Semrush and Ahrefs both move up-market as you add users, projects, and tracked keywords or credits. Model the cart you would actually check out—not the blog headline—and compare annual prepay vs monthly. Local operators should relate cost to booked jobs from organic calls and forms, not vanity national rankings. ${PRICING_EEAT_FOOTNOTE}`,
      prosConsA: {
        pros: [
          "Broad datasets plus workflows that extend beyond pure SEO for teams that will adopt them",
          "Strong audits and rank tracking suitable for multi-location and agency reporting",
          "Useful when stakeholders want one vendor relationship spanning several marketing questions",
        ],
        cons: [
          "Renewal math climbs with seats, keywords, and add-ons—easy to overbuy",
          "Density of modules can slow adoption if nobody owns a monthly ritual",
          "Native Map Pack operations still usually need BrightLocal, Whitespark, or tight manual GBP process",
        ],
      },
      prosConsB: {
        pros: [
          "Link index and content explorer workflows many practitioners treat as industry standard",
          "Clear story for competitive gap analysis and prioritizing what to build or pitch",
          "Strong rank tracking and site auditing for SEO-centric teams",
        ],
        cons: [
          "Less of a full marketing OS than Semrush—adjacent channels may need other tools",
          "Premium pricing can sting if you only need a thin slice of the product",
          "Local listings and citation grids are still a different software category for heavy Map Pack ops",
        ],
      },
      bestFor: [
        {
          heading: "Local contractors and home services",
          body: "Either tool can support service-area landing pages and content strategy. Map Pack wins still hinge on GBP quality, reviews, and NAP consistency—allocate budget and hours there, then pick Semrush or Ahrefs based on whether marketing breadth or link research is your daily habit.",
        },
        {
          heading: "Agencies reporting to owners",
          body: "Semrush often fits when clients expect multi-surface reporting; Ahrefs fits when retainers are justified by link and content narratives. Export or pipe Google Search Console alongside either tool so owners see queries and clicks from Google, not only third-party scores.",
        },
        {
          heading: "When neither is the right sole spend",
          body: "Smaller teams with one site and tight ops sometimes start with Search Console plus SE Ranking or Moz until workload justifies flagship spend—see our other comparisons and full reviews before you over-stack.",
        },
      ],
      alternatives: [
        {
          name: "SE Ranking",
          href: getSeoToolsReviewUrl("se-ranking"),
          logoSrc: "/Logos/seranking.jpeg",
          description: "Value all-in-one when Semrush feels heavy and Ahrefs feels pricey.",
        },
        {
          name: "BrightLocal",
          href: getSeoToolsReviewUrl("brightlocal"),
          logoSrc: "/Logos/brightlocal.jpeg",
          description: "Map Pack grids and citation workflows alongside either suite.",
        },
        {
          name: "Moz Pro",
          href: getSeoToolsReviewUrl("moz-pro"),
          logoSrc: "/Logos/mozpro.jpeg",
          description: "Gentler SMB onboarding when raw link depth is not the bottleneck.",
        },
      ],
      faqs: [
        {
          q: "Which is better for local contractors—Semrush or Ahrefs?",
          a: "Often neither alone: use Semrush or Ahrefs for research and audits, add BrightLocal or Whitespark when grids and citations are daily work, and keep Google Search Console verified. Pick between these two based on whether you need marketing breadth (Semrush) or link-led research (Ahrefs).",
        },
        {
          q: "Do I still need Google Business Profile work?",
          a: "Yes. Photos, categories, reviews, accurate service areas, and consistent NAP across the web still drive Map Pack outcomes. SEO suites complement that work; they do not replace field photos or review replies.",
        },
        {
          q: "How should I verify what these tools claim about my rankings?",
          a: "Cross-check priority keywords in Search Console and with manual SERP checks signed into the right market. Rank trackers can disagree with live results; GSC shows how Google surfaces your URLs for queries that matter to your business.",
        },
        {
          q: "Does BeltStack get paid to favor one vendor?",
          a: "No pay-for-placement in comparisons. We may earn affiliate commissions on some outbound links site-wide; that does not buy a winner here. Use trials and your own analytics before committing.",
        },
      ],
      heroCallouts: [
        {
          label: "Marketing platform breadth",
          winner: "A",
          reason: "More adjacent workflows beyond core SEO when your team will actually adopt them.",
        },
        {
          label: "Backlink & content gap research",
          winner: "B",
          reason: "Deeper link context and explorer workflows for practitioners who live in competitive analysis.",
        },
      ],
    }
  ),
  build(
    "ahrefs-vs-moz-pro",
    "ahrefs",
    "moz-pro",
    "Ahrefs leads on backlink intelligence and competitive content research; Moz Pro leads on approachable education, onboarding, and SMB-friendly rank tracking—choose based on team skill and whether links or steady fundamentals drive your roadmap. Always pair with Search Console and real GBP execution for local trades.",
    {
      sidebarWinners: [
        { label: "Backlink intelligence", winner: "A" },
        { label: "SMB onboarding + education", winner: "B" },
      ],
      quickRecommendationA:
        "Choose Ahrefs when link indexes, content gaps, and SERP-level competitive research are how you prioritize work each week—and your team can handle a power-user interface.",
      quickRecommendationB:
        "Choose Moz Pro when stakeholders need clearer education, gentler UX, and credible fundamentals without living inside the deepest link graph—especially shared marketing and owner roles.",
      quickVerdictParagraphs: [
        "Ahrefs and Moz Pro both belong in the SEO tooling conversation, but they reward different user profiles. Ahrefs shines when experienced marketers and SEOs need granular link history, gap analysis, and explorer-style research. Moz Pro shines when the organization needs a calmer on-ramp, strong training culture, and rank tracking that owners can understand without a dozen tabs open.",
        "Neither product is a substitute for operational local SEO: review generation, GBP categories, and accurate service-area coverage still require people and process. If your bottleneck is Map Pack or directories, allocate budget to BrightLocal or Whitespark—or disciplined manual work—not only to a national research suite.",
        "Third-party metrics and keyword difficulty scores are models, not guarantees. When Moz or Ahrefs disagrees with the queries and pages that actually earn clicks in your Search Console property, prioritize fixes and content that align with GSC and your call-tracking reality.",
        "Confirm current plans and limits on ahrefs.com and moz.com; BeltStack does not accept sponsored comparison outcomes. We may earn affiliate commissions elsewhere—trials and invoice math should still decide your stack.",
      ],
      decisionGuideA: [
        "Competitive backlinks and broken-link or gap workflows are central to your strategy.",
        "You have someone who will use explorer views weekly—not a shelfware subscription.",
        "You accept pairing Ahrefs with other tools for adjacent marketing or heavy local ops if needed.",
      ],
      decisionGuideB: [
        "Your team mixes owners, generalists, and junior marketers who need clearer guidance and vocabulary.",
        "You want solid rank tracking and on-page direction without optimizing only for link-index depth.",
        "You prefer a vendor known for education and community when SEO is one of several hats people wear.",
      ],
      ratingsComparison: [
        { category: "Backlink intelligence", productA: "4.8", productB: "3.7" },
        { category: "Onboarding & education", productA: "3.6", productB: "4.5" },
        { category: "Rank tracking & on-page", productA: "4.4", productB: "4.3" },
        { category: "Keyword research depth", productA: "4.6", productB: "4.0" },
        { category: "Local SEO (native)", productA: "3.5", productB: "3.5" },
      ],
      pricingComparison: `Ahrefs and Moz Pro use different tiering logic—compare list prices against tracked keywords, seats, and campaign limits you will actually use. Moz can feel more approachable at entry tiers; Ahrefs can justify cost when link research is daily work. ${PRICING_EEAT_FOOTNOTE}`,
      prosConsA: {
        pros: [
          "Deep link exploration and content gap workflows trusted by advanced SEOs",
          "Strong keyword and SERP research for competitive niches",
          "Useful site auditing when crawl depth matches your property size",
        ],
        cons: [
          "Steeper learning curve for teams without a dedicated SEO owner",
          "Premium positioning if you only need basic rank checks",
          "Not a turnkey Map Pack operations platform for local listings",
        ],
      },
      prosConsB: {
        pros: [
          "Approachable UX and learning paths for SMB and mixed-skill teams",
          "Credible rank tracking and on-page recommendations without maximal UI density",
          "Strong brand trust with owners who want education, not only dashboards",
        ],
        cons: [
          "Backlink depth generally trails Ahrefs for heavy competitive analysis",
          "Power users may outgrow mid-market indexes sooner than they expect",
          "Still needs BrightLocal/Whitespark or process when citations and grids dominate",
        ],
      },
      bestFor: [
        {
          heading: "Growing service businesses",
          body: "If SEO is one of several marketing responsibilities, Moz Pro’s clarity can improve adoption. If SEO is a core growth lever and you compete on links and content in tough SERPs, Ahrefs often earns its seat. In both cases, verify Search Console before you chase keywords the tool likes but your customers never type.",
        },
        {
          heading: "When to pick a third path",
          body: "Budget-conscious teams sometimes land on SE Ranking or Semrush depending on whether they want value all-in-one or flagship breadth—see our SE Ranking vs Semrush and Semrush vs Ahrefs comparisons rather than forcing a false binary.",
        },
      ],
      alternatives: [
        {
          name: "Semrush",
          href: getSeoToolsReviewUrl("semrush"),
          logoSrc: "/Logos/semrush.jpeg",
          description: "Broader marketing OS when Moz feels limited and Ahrefs feels narrow for your stack.",
        },
        {
          name: "SE Ranking",
          href: getSeoToolsReviewUrl("se-ranking"),
          logoSrc: "/Logos/seranking.jpeg",
          description: "Mid-market all-in-one pricing when both flagships feel heavy.",
        },
        {
          name: "BrightLocal",
          href: getSeoToolsReviewUrl("brightlocal"),
          logoSrc: "/Logos/brightlocal.jpeg",
          description: "Local grids and citations next to either research suite.",
        },
      ],
      faqs: [
        {
          q: "Is Ahrefs better than Moz Pro?",
          a: "For backlink intelligence and competitive content research, Ahrefs usually leads. For SMB onboarding, education, and approachable fundamentals, Moz often leads. Your bottleneck—not a slogan—should decide.",
        },
        {
          q: "Can local contractors use only one of these?",
          a: "You can start with one plus Google Search Console, but Map Pack-heavy trades often add BrightLocal or Whitespark for listings and grids. GBP execution remains manual work either way.",
        },
        {
          q: "How do I avoid buying the wrong tier?",
          a: "List the keywords, locations, and users you will track monthly, then match that to each vendor’s pricing page. Overbuying enterprise depth is a common mistake for single-location shops.",
        },
        {
          q: "Why trust this comparison?",
          a: "We describe typical workflows for service businesses and agencies; we do not run your Search Console. Use our head-to-head as orientation, then validate in your own accounts and trials.",
        },
      ],
      heroCallouts: [
        {
          label: "Backlink & competitive research",
          winner: "A",
          reason: "Deeper explorer workflows when links and gaps steer the roadmap.",
        },
        {
          label: "SMB education & adoption",
          winner: "B",
          reason: "Clearer paths for mixed-skill teams that need sustainable habits.",
        },
      ],
    }
  ),
  build(
    "semrush-vs-ubersuggest",
    "semrush",
    "ubersuggest",
    "Semrush is built for scaling SEO and marketing research; Ubersuggest fits low-cost experimentation and early keyword ideas—plan to graduate when audits, competitor depth, and team seats outgrow starter limits. Either way, anchor decisions in Search Console and operational GBP work for local trades.",
    {
      sidebarWinners: [
        { label: "Depth + scale", winner: "A" },
        { label: "Entry price", winner: "B" },
      ],
      quickRecommendationA:
        "Choose Semrush when you manage multiple campaigns, need serious crawls, and will use competitor and keyword depth beyond occasional lookups.",
      quickRecommendationB:
        "Choose Ubersuggest when budget is tight, you are validating SEO as a channel, and you accept lighter quotas and shallower backlink views until workload justifies a flagship suite.",
      quickVerdictParagraphs: [
        "Semrush and Ubersuggest are rarely interchangeable at maturity: Semrush targets teams that need durable workflows across audits, tracking, and competitive intelligence. Ubersuggest targets owners and marketers who want an affordable on-ramp and can tolerate limits as they prove ROI. The wrong choice is usually paying for Semrush nobody opens—or outgrowing Ubersuggest in the middle of a busy season without a migration plan.",
        "Local service businesses should still judge tools against booked jobs, not keyword volume alone. Use Search Console to see which services and cities already earn impressions, then decide whether starter metrics or enterprise depth matches how you operate.",
        "Neil Patel’s Ubersuggest and Semrush both change features and pricing over time; our comparison reflects typical positioning, not a guarantee of your checkout total. Confirm quotas for audits, tracked keywords, and users on each site before you commit annually.",
        "BeltStack does not sell comparison placement. Affiliate relationships may exist site-wide; they do not determine this write-up. When stakes are high—new site launch, penalty recovery, major replatform—involve a qualified SEO rather than software alone.",
      ],
      decisionGuideA: [
        "You have (or will hire) someone accountable for SEO weekly—not a one-off audit.",
        "Multi-location, franchise, or agency reporting needs cleaner exports and higher limits.",
        "Competitor research and backlink context matter as much as keyword ideas.",
      ],
      decisionGuideB: [
        "You are testing SEO before you hire or retain an agency.",
        "You need quick keyword and content prompts without flagship invoices.",
        "You accept upgrading later when crawl depth and tracking limits bite.",
      ],
      ratingsComparison: [
        { category: "Depth & enterprise fit", productA: "4.7", productB: "3.4" },
        { category: "Entry affordability", productA: "3.5", productB: "4.5" },
        { category: "Keyword research", productA: "4.6", productB: "3.8" },
        { category: "Backlink analysis", productA: "4.3", productB: "3.2" },
        { category: "Site audits", productA: "4.5", productB: "3.6" },
      ],
      pricingComparison: `Ubersuggest typically undercuts Semrush on headline monthly price; Semrush undercuts nobody on renewal complexity—model seats, keywords, and add-ons honestly. If you only need occasional ideas, starter pricing wins; if you need reliable crawls at scale, false savings hurt. ${PRICING_EEAT_FOOTNOTE}`,
      prosConsA: {
        pros: [
          "Datasets and limits suited to growing and multi-user teams",
          "Strong audits and competitor views when you use them monthly",
          "Path to adjacent marketing workflows if your organization adopts them",
        ],
        cons: [
          "Easy to overbuy projects and seats without governance",
          "Busy interface for owners who only want a simple dashboard",
          "Still not a replacement for GBP operations in local markets",
        ],
      },
      prosConsB: {
        pros: [
          "Lower barrier to start keyword and content experiments",
          "Simple story for owners new to SEO tooling",
          "Can be enough early on for single-site operators with tight ops",
        ],
        cons: [
          "Shallower backlink and competitive views vs flagship suites",
          "Quotas and crawl depth become constraints as the site grows",
          "May require migration planning when you graduate to Semrush-class tooling",
        ],
      },
      bestFor: [
        {
          heading: "Contractors on a budget",
          body: "Ubersuggest can be a reasonable first step if you pair it with Search Console and disciplined GBP work. Semrush becomes relevant when you are competing in crowded metros or running enough pages that audits and tracking need enterprise headroom.",
        },
        {
          heading: "Avoid false economies",
          body: "Paying for Semrush but only opening it quarterly wastes money; living in Ubersuggest when you need Semrush-depth competitor research wastes time. Pick the tier that matches weekly habits.",
        },
      ],
      alternatives: [
        {
          name: "Ahrefs",
          href: getSeoToolsReviewUrl("ahrefs"),
          logoSrc: "/Logos/ahrefs.jpeg",
          description: "Link-led upgrade path when Semrush feels too broad and Ubersuggest too thin.",
        },
        {
          name: "SE Ranking",
          href: getSeoToolsReviewUrl("se-ranking"),
          logoSrc: "/Logos/seranking.jpeg",
          description: "Middle-ground all-in-one if both extremes miss your price band.",
        },
        {
          name: "Moz Pro",
          href: getSeoToolsReviewUrl("moz-pro"),
          logoSrc: "/Logos/mozpro.jpeg",
          description: "SMB-friendly fundamentals between starter and flagship depth.",
        },
      ],
      faqs: [
        {
          q: "Is Ubersuggest enough for a local business?",
          a: "Sometimes, if you also use Search Console and maintain GBP seriously. When you need deeper competitor research, scalable audits, or multi-user reporting, plan to graduate to Semrush, Ahrefs, SE Ranking, or Moz.",
        },
        {
          q: "When is Semrush clearly worth the extra cost?",
          a: "When multiple people depend on the data weekly, when crawl and keyword limits are blocking work, or when you need competitor intelligence Ubersuggest cannot supply at your property’s scale.",
        },
        {
          q: "Do I still need Google Search Console if I pay for either?",
          a: "Yes. GSC is authoritative for your property’s queries, pages, and indexing. Paid tools estimate and aggregate; GSC shows what Google reports for you.",
        },
        {
          q: "How independent is this Semrush vs Ubersuggest comparison?",
          a: "Editorial only—no paid ranking. Affiliate links may appear elsewhere on BeltStack. Verify pricing and features directly with each vendor.",
        },
      ],
      heroCallouts: [
        {
          label: "Scale & workflow depth",
          winner: "A",
          reason: "Built for teams that outgrow starter quotas and need serious audits.",
        },
        {
          label: "Starter affordability",
          winner: "B",
          reason: "Lower entry cost when you are proving SEO value before you scale spend.",
        },
      ],
    }
  ),
  build(
    "brightlocal-vs-whitespark",
    "brightlocal",
    "whitespark",
    "BrightLocal and Whitespark both serve serious local SEO operators: BrightLocal often wins agency-style reporting and platform packaging; Whitespark often wins citation discovery and specialist education—trial both against your locations, PDF deliverables, and monthly maintenance capacity before you standardize.",
    {
      sidebarWinners: [
        { label: "Platform reporting", winner: "A" },
        { label: "Citation tooling depth", winner: "B" },
      ],
      quickRecommendationA:
        "Choose BrightLocal when client-ready reporting, multi-location rollups, and a packaged local platform matter as much as raw citation discovery.",
      quickRecommendationB:
        "Choose Whitespark when citation research, local SEO education, and modular specialist tools align with how your team already works—or when BrightLocal’s packaging overshoots a lean operation.",
      quickVerdictParagraphs: [
        "This comparison is between two credible local SEO vendors, not between ‘local’ and ‘national’ suites. Both expect you to execute: fix NAP inconsistencies, respond to reviews, maintain accurate categories, and keep service-area pages aligned with how you actually operate. Software makes that work visible; it does not send technicians to job sites.",
        "BrightLocal frequently wins evaluations where agencies need white-label PDFs, repeatable monthly deliverables, and a single platform narrative for franchise or multi-brand clients. Whitespark frequently wins when practitioners want strong citation tooling, educational depth, and a modular stack they can combine with other SEO software.",
        "Pricing is usually per-location, module, or market—quote the combination you will open every month, not every SKU on the pricing page. BeltStack cannot see your duplicate listings, practitioner GBP conflicts, or spam patterns in your market; those factors change how much tooling you need.",
        "We do not accept pay-for-placement. Confirm data regions, user seats, and module bundles on brightlocal.com and whitespark.ca. Cross-check grid or ranking movements with Search Console branded and service queries, not only tool dashboards.",
      ],
      decisionGuideA: [
        "You deliver recurring local SEO reports to owners or franchisors who expect polished PDFs.",
        "You want a broad local platform story (grids, listings, reputation-adjacent workflows) in one vendor.",
        "You have staff who will log in weekly to act on citations and grid data.",
      ],
      decisionGuideB: [
        "Citation discovery and cleanup are the heart of your process.",
        "You prefer modular tools and strong community education over an all-in-one dashboard.",
        "You already pair local tooling with Semrush, Ahrefs, or SE Ranking for national content work.",
      ],
      ratingsComparison: [
        { category: "Agency / client reporting", productA: "4.6", productB: "4.0" },
        { category: "Citation discovery tooling", productA: "4.2", productB: "4.7" },
        { category: "Local rank grids", productA: "4.5", productB: "4.4" },
        { category: "Education & community", productA: "4.1", productB: "4.6" },
        { category: "National SEO suite (native)", productA: "2.5", productB: "2.5" },
      ],
      pricingComparison: `Both vendors price by modules, markets, and tracked geography—build a spreadsheet per brand you manage and re-quote when you add ZIPs or locations. Local SEO software fails ROI when nobody acts on listings monthly; cancel modules you do not use. ${PRICING_EEAT_FOOTNOTE}`,
      prosConsA: {
        pros: [
          "Strong packaging for agencies delivering recurring local reports",
          "Grids and listings workflows many multi-location teams standardize on",
          "Useful when clients expect a single named platform in proposals",
        ],
        cons: [
          "Costs scale with locations and add-ons—easy to overbuy ZIPs",
          "Not a replacement for on-site content and review culture",
          "Citation power users sometimes still admire Whitespark’s finder depth",
        ],
      },
      prosConsB: {
        pros: [
          "Citation tooling and education respected by local SEO practitioners",
          "Modular approach fits teams that mix-and-match their stack",
          "Practical for operators who prioritize listings discovery over platform breadth",
        ],
        cons: [
          "May require more assembly for agency-style reporting vs all-in-one competitors",
          "Modular pricing can add up if you enable many tools",
          "Still demands human follow-through on GBP and reviews",
        ],
      },
      bestFor: [
        {
          heading: "Franchise and multi-location brands",
          body: "Compare how each product handles rollups, user permissions, and monthly PDF narratives your stakeholders actually read. The right choice is often the one your account managers will sustain, not the one with the longest feature list.",
        },
        {
          heading: "Single-location trades",
          body: "Either vendor can be overkill if you will not maintain listings monthly. In some cases Search Console plus disciplined GBP work is the right ‘stack’ until demand justifies paid local software.",
        },
      ],
      alternatives: [
        {
          name: "Semrush",
          href: getSeoToolsReviewUrl("semrush"),
          logoSrc: "/Logos/semrush.jpeg",
          description: "National keyword and audit depth to pair with local specialists.",
        },
        {
          name: "Google Search Console",
          href: getSeoToolsReviewUrl("google-search-console"),
          logoSrc: "/Logos/google.jpeg",
          description: "Free first-party queries and indexing checks on every property.",
        },
        {
          name: "Ahrefs",
          href: getSeoToolsReviewUrl("ahrefs"),
          logoSrc: "/Logos/ahrefs.jpeg",
          description: "Content and link research when local listings are only half the story.",
        },
      ],
      faqs: [
        {
          q: "Which is better for local contractors—BrightLocal or Whitespark?",
          a: "Whichever matches how you work: BrightLocal for packaged reporting and platform workflows; Whitespark for citation-centric operations and education-heavy teams. Both need GBP execution; neither replaces reviews and photos.",
        },
        {
          q: "Do I still need a national SEO suite?",
          a: "Often yes for content, backlinks, and technical crawls at scale—these tools center listings and local measurement. Many teams pair BrightLocal or Whitespark with Semrush, Ahrefs, or SE Ranking.",
        },
        {
          q: "How do I evaluate fairly?",
          a: "Run a parallel trial on the same locations, document hours spent per tool, and compare deliverables your clients or leadership will act on. Grids without NAP fixes are vanity.",
        },
        {
          q: "Are BeltStack’s local SEO comparisons sponsored?",
          a: "No sponsored winners. We may use affiliate links elsewhere; confirm pricing and modules directly with each vendor.",
        },
      ],
      heroCallouts: [
        {
          label: "Client & franchise reporting",
          winner: "A",
          reason: "Packaging and PDF-style narratives many agencies standardize on.",
        },
        {
          label: "Citation specialist tooling",
          winner: "B",
          reason: "Often favored when discovery and listings research are the core habit.",
        },
      ],
    }
  ),
  build(
    "se-ranking-vs-semrush",
    "se-ranking",
    "semrush",
    "SE Ranking is the pragmatic value all-in-one for many SMBs; Semrush adds flagship breadth, datasets, and marketing-adjacent modules—choose based on invoice tolerance, seat count, and whether you will use Semrush’s extra surface area or quietly renew unused tools.",
    {
      sidebarWinners: [
        { label: "Price-to-feature value", winner: "A" },
        { label: "Enterprise breadth", winner: "B" },
      ],
      quickRecommendationA:
        "Choose SE Ranking when rank tracking, audits, and competitor views need to stay affordable and you will run a tight monthly SEO ritual without dozens of extra modules.",
      quickRecommendationB:
        "Choose Semrush when broader marketing workflows, larger datasets, and multi-channel reporting justify higher renewal math—and you have owners for those modules.",
      quickVerdictParagraphs: [
        "SE Ranking versus Semrush is often a budget-and-adoption decision more than a pure quality binary. SE Ranking packages sensible SEO workflows—tracking, audits, backlink and competitor views—for teams that want one login without flagship invoices. Semrush packages SEO inside a wider platform story that can replace several point solutions when adoption is real.",
        "Local contractors should evaluate both against Search Console: which interface gets your team to fix coverage issues, improve service pages, and align content with queries you already earn? The expensive mistake is Semrush shelfware; the painful mistake is outgrowing SE Ranking mid-year without budget to upgrade.",
        "Neither product removes the need for Google Business Profile discipline when Maps drives revenue. If grids and citations are your bottleneck, allocate dollars to BrightLocal or Whitespark in addition to whichever all-in-one you pick.",
        "BeltStack comparisons are editorial. Affiliate commissions may apply on other pages. Verify keyword quotas, audit frequency, seats, and regional pricing on seranking.com and semrush.com before you sign annual contracts.",
      ],
      decisionGuideA: [
        "You want flagship-class SEO basics without paying for every adjacent marketing module.",
        "Your team is small and needs a simpler surface area to maintain habits.",
        "You will reconcile ranks and landing pages with GSC weekly.",
      ],
      decisionGuideB: [
        "You run multi-channel marketing and want SEO data beside broader workflows you already use.",
        "You need the deepest third-party datasets and competitor intelligence your stack can afford.",
        "You have governance so seats, projects, and keywords do not balloon unchecked.",
      ],
      ratingsComparison: [
        { category: "SMB value / pricing story", productA: "4.5", productB: "4.0" },
        { category: "Platform & dataset breadth", productA: "4.0", productB: "4.8" },
        { category: "Backlink tooling", productA: "3.8", productB: "4.4" },
        { category: "Audits & rank tracking", productA: "4.2", productB: "4.5" },
        { category: "Local SEO (native)", productA: "3.5", productB: "3.6" },
      ],
      pricingComparison: `Model SE Ranking and Semrush with the same keyword counts, user seats, and audit frequency you need—not the cheapest advertised tier. Semrush typically climbs faster as you scale; SE Ranking often stays gentler until you add many brands or high-volume tracking. ${PRICING_EEAT_FOOTNOTE}`,
      prosConsA: {
        pros: [
          "Strong price-to-feature story for SMB and agency starter tiers",
          "Covers audits, tracking, and light competitor views in one pragmatic login",
          "Often easier renewal conversations with owners who watch software spend",
        ],
        cons: [
          "Less ecosystem depth than Semrush for power users and enterprise edge cases",
          "Heavy national or enterprise workflows may still push you flagship later",
          "Native local/Map Pack ops may still need a specialist tool",
        ],
      },
      prosConsB: {
        pros: [
          "Broad datasets and workflows when your team adopts them",
          "Useful for organizations that want SEO inside a wider marketing platform",
          "Strong choice when competitor intelligence and scale matter daily",
        ],
        cons: [
          "Renewals can surprise teams that add keywords, seats, and modules casually",
          "UI density can slow adoption without training and saved views",
          "Risk of paying for breadth nobody uses if governance is weak",
        ],
      },
      bestFor: [
        {
          heading: "Growing service businesses",
          body: "SE Ranking often fits until workload or reporting expectations justify Semrush spend. If you are adding cities, services, or franchisees, re-run the math quarterly—under-buying and over-buying both hurt.",
        },
        {
          heading: "Agencies managing many SMBs",
          body: "SE Ranking can keep per-client economics sane; Semrush can win when clients expect Semrush-class reporting by name. Be honest about pass-through costs and who pays for unused seats.",
        },
      ],
      alternatives: [
        {
          name: "Ahrefs",
          href: getSeoToolsReviewUrl("ahrefs"),
          logoSrc: "/Logos/ahrefs.jpeg",
          description: "When link research matters more than all-in-one breadth.",
        },
        {
          name: "Moz Pro",
          href: getSeoToolsReviewUrl("moz-pro"),
          logoSrc: "/Logos/mozpro.jpeg",
          description: "Gentler SMB onboarding between value and flagship extremes.",
        },
        {
          name: "BrightLocal",
          href: getSeoToolsReviewUrl("brightlocal"),
          logoSrc: "/Logos/brightlocal.jpeg",
          description: "Local grids and citations next to whichever all-in-one you choose.",
        },
      ],
      faqs: [
        {
          q: "Is SE Ranking ‘enough’ compared to Semrush?",
          a: "For many single-brand SMBs, yes—especially with Search Console and solid GBP work. For multi-channel enterprises or teams that live in competitor datasets daily, Semrush’s breadth may justify the cost.",
        },
        {
          q: "Which is better for local SEO?",
          a: "Tie on native local depth—both are primarily national SEO suites. Add BrightLocal or Whitespark when Map Pack and citations are the core problem.",
        },
        {
          q: "How do I avoid the wrong renewal?",
          a: "Export your tracked keyword list, user count, and audit schedule; match that to each vendor’s pricing page. Add 20% headroom for growth or accept you will upgrade mid-cycle.",
        },
        {
          q: "Does BeltStack favor Semrush because it is bigger?",
          a: "No—we describe trade-offs for typical SMB and contractor workflows. Larger vendors do not buy placement here. Use trials and your own GSC exports to decide.",
        },
      ],
      heroCallouts: [
        {
          label: "SMB invoice friendliness",
          winner: "A",
          reason: "Often easier to justify when every dollar is scrutinized.",
        },
        {
          label: "Flagship breadth & datasets",
          winner: "B",
          reason: "Wins when teams actually consume the extra modules and data.",
        },
      ],
    }
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getSeoToolsComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getSeoToolsComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
