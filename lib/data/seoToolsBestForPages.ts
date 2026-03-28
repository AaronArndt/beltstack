/**
 * SEO tools “best for” scenario pages — editorial framing for trades and local SMBs.
 * Emphasizes Google Search Console as ground truth, GBP/listings execution, honest tool limits,
 * pricing verification, and independence from vendors (see site affiliate disclosure).
 */

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
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";

const GUIDES = "/seo-tools/guides";

const featuredProducts: BestForFeaturedProduct[] = [
  {
    slug: "semrush",
    name: "Semrush",
    badge: "Best all-in-one depth",
    description:
      "Keyword research, crawls, and rank tracking when you outgrow free tools—assign an owner so renewals match modules you actually open weekly, and reconcile keyword ideas with Search Console queries on your site.",
    rating: "4.6",
    startingPrice: "From ~$139/mo",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    visitUrl: "https://www.semrush.com",
    logoSrc: "/Logos/semrush.jpeg",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    badge: "Best local SEO ops",
    description:
      "GBP-adjacent reporting, citations, and local rank grids when Map Pack and directories are the bottleneck—grids without NAP fixes and review cadence are vanity; pair with strong service-area pages.",
    rating: "4.5",
    startingPrice: "From ~$39/mo",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    visitUrl: "https://www.brightlocal.com",
    logoSrc: "/Logos/brightlocal.jpeg",
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    badge: "Best for links + content gaps",
    description:
      "Competitive backlinks and content-gap research when organic strategy is link- or SERP-led—ethical link targets still need ops capacity; use GSC to confirm which pages already earn clicks before you chase volume scores alone.",
    rating: "4.7",
    startingPrice: "From ~$129/mo",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    visitUrl: "https://ahrefs.com",
    logoSrc: "/Logos/ahrefs.jpeg",
  },
];

const comparisonTableRows: BestForTableRow[] = [
  {
    slug: "semrush",
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    bestFor: "All-in-one SEO + adjacent workflows",
    startingPrice: "From ~$139/mo",
    standoutFeature: "Breadth: research, audit, tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    bestFor: "Listings, grids, local reporting",
    startingPrice: "From ~$39/mo",
    standoutFeature: "Map Pack–oriented measurement",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    bestFor: "Backlinks + content competitive research",
    startingPrice: "From ~$129/mo",
    standoutFeature: "Link index + gap workflows",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const relatedReviews: BestForReviewLink[] = [
  { name: "Semrush", href: getSeoToolsReviewUrl("semrush") },
  { name: "Ahrefs", href: getSeoToolsReviewUrl("ahrefs") },
  { name: "Moz Pro", href: getSeoToolsReviewUrl("moz-pro") },
  { name: "BrightLocal", href: getSeoToolsReviewUrl("brightlocal") },
  { name: "Whitespark", href: getSeoToolsReviewUrl("whitespark") },
  { name: "SE Ranking", href: getSeoToolsReviewUrl("se-ranking") },
  { name: "Google Search Console", href: getSeoToolsReviewUrl("google-search-console") },
  { name: "Ubersuggest", href: getSeoToolsReviewUrl("ubersuggest") },
];

const relatedComparisons: BestForComparisonLink[] = [
  { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
  { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
  { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
];

const EEAT_FAQ_TRUST: BestForFaqItem = {
  q: "How does BeltStack pick SEO tools for these scenarios?",
  a: "We score how each product fits contractor and local-SMB workflows—GBP execution, Search Console habits, and realistic seat usage—not pay-for-placement. Product limits and pricing change; confirm quotas and checkout totals on each vendor’s site before you commit.",
};

const EEAT_FAQ_AFFILIATE: BestForFaqItem = {
  q: "Do affiliate links change these recommendations?",
  a: "We may earn commissions on some outbound links site-wide; they do not buy rankings on BeltStack. Use our reviews and comparisons as orientation, then validate priorities in your own Search Console and trials.",
};

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
    categoryHref: "/seo-tools",
    categoryLabel: "SEO Tools",
    introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Editorial top picks for ${label}. Confirm pricing, modules, and regional availability on each vendor’s site—our shortlist is a workflow map, not a substitute for your own invoice math.`,
    editorialSub: `Experience-informed criteria for ${label}: Google Search Console as ground truth, honest limits of software vs field execution, and tying spend to calls or booked jobs—not vanity rankings.`,
    whyThesePicksSub: `Why Semrush, BrightLocal, and Ahrefs often surface for ${label}. We highlight three anchors; SE Ranking, Moz Pro, Whitespark, and Ubersuggest are in the full reviews list when budget or niche fit points elsewhere.`,
    seeAlsoBlock: {
      roundupLabel: "Best SEO tools (2026) — full roundup",
      roundupHref: "/seo-tools/best-seo-tools",
      compareLabel: "Compare SEO tools",
      compareHref: "/seo-tools/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance,
    whyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides: [
      ...relatedGuides,
      { label: "How to choose a website builder", href: "/website-builders/guides/how-to-choose-a-website-builder" },
      {
        label: "Lead generation strategies for local business",
        href: "/lead-generation/guides/lead-generation-strategies-for-local-business",
      },
      { label: "CRM software hub", href: "/crm" },
    ],
    faqItems: [...faqItems, EEAT_FAQ_TRUST, EEAT_FAQ_AFFILIATE],
  };
}

export const SEO_TOOLS_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage(
    "small-business",
    "Best SEO Tools for Small Business (2026)",
    "Lean stacks: Search Console first, one credible research layer, and local software only when Map Pack and listings—not more dashboards—are what’s holding you back.",
    "Small businesses win when they verify every site in Google Search Console, tighten money pages (services, locations, contact), and pick one primary paid research tool someone will log into weekly. Add BrightLocal-class tooling when grids, citations, or multi-location reporting are the bottleneck—not when keyword ideas alone feel exciting. BeltStack does not run your analytics; if tool suggestions conflict with the queries and landing pages that already earn impressions in GSC, trust your property data and spot-check SERPs for the cities you actually serve.",
    [
      {
        heading: "Start with first-party truth",
        body: "Search Console is free and authoritative for your verified domain—queries, pages, and indexing. Build a monthly habit there before you annualize a suite; paid tools should extend decisions you can already see in GSC, not replace them.",
      },
      {
        heading: "Avoid shelfware",
        body: "If nobody opens the tool between invoices, downgrade seats or cancel modules until adoption returns. Headline pricing rarely matches checkout once you add keywords, users, and crawl add-ons—quote the cart you need, not the marketing page teaser.",
      },
      {
        heading: "Tie spend to pipeline",
        body: "Rankings that never produce calls, forms, or visits to service pages are vanity. Pair SEO software cost with booked jobs or qualified leads influenced by organic search where you can measure them.",
      },
      {
        heading: "When to call a pro",
        body: "Penalties, major replatforms, or multi-brand migrations may warrant a qualified SEO or agency—software alone does not replace technical and strategic judgment when revenue is at stake.",
      },
    ],
    [
      {
        heading: "Semrush",
        body: "Strong default when audits, keyword sets, and rank tracking need to live in one suite as you add pages or locations—governance matters so you do not renew unused breadth.",
      },
      {
        heading: "BrightLocal",
        body: "Fits when Maps, citations, and client-ready local reports dominate your funnel; still requires GBP hygiene and review culture outside the dashboard.",
      },
      {
        heading: "Ahrefs",
        body: "Choose when backlinks and competitor content gaps—not only keyword volume—steer what you build next; reconcile with GSC before you chase every suggested term.",
      },
    ],
    [
      {
        q: "Do small businesses need Semrush and Ahrefs?",
        a: "Usually not at once—pick one flagship-style suite, keep Search Console on every property, and add a local platform when listings and grids are daily work. SE Ranking or Moz can sit in the middle when budget or UX dictates.",
      },
      {
        q: "Is Google Search Console enough?",
        a: "Often for a single site with tight ops—GSC is essential everywhere. Paid tools earn their keep when competitor research, scalable crawls, or multi-user reporting speed decisions you cannot get from exports alone.",
      },
    ],
    [
      { label: "On-page SEO for local business", href: `${GUIDES}/on-page-seo-for-local-business` },
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
    ]
  ),
  contractors: makePage(
    "contractors",
    "Best SEO Tools for Contractors (2026)",
    "Homeowners search by trade and city—your stack should support GBP truth, review cadence, and service pages that match trucks on the road, plus research tools aligned with how people actually book.",
    "Contractors live or die on Google Business Profile accuracy, fast review responses, and service-area pages that match dispatch reality. SEO software should make local visibility and technical fixes measurable—not replace photos, categories, or the crew showing up on time. Use Search Console to see which services and cities already earn impressions; use paid suites to prioritize gaps and competitor coverage, not to chase national keywords that never produce a truck roll. We generalize from typical contractor workflows; your market’s spam, suspensions, or competition may require more or less tooling than this outline.",
    [
      {
        heading: "GBP execution beats dashboards",
        body: "Photos, primary categories, services, Q&A, and honest service areas move Map Pack more than another keyword list. Tools report movement; your office or agency still does the work.",
      },
      {
        heading: "City + trade pages humans trust",
        body: "Build pages a homeowner can skim on a phone; tools help find content gaps competitors cover. Align copy with licenses, warranties, and real service boundaries.",
      },
      {
        heading: "Grid tracking with accountability",
        body: "Local rank grids diagnose ZIP-level visibility—then you fix on-site relevance, reviews, and citations. Grids without assigned follow-through become pretty PDFs only.",
      },
      {
        heading: "Verify tool claims",
        body: "Rank trackers can disagree with live SERPs. Cross-check high-value terms in-browser and against Search Console performance before you rewrite your whole site.",
      },
    ],
    [
      {
        heading: "BrightLocal",
        body: "Strong when you report on Maps, citations, and listings for crews, franchises, or agency clients who expect recurring local deliverables.",
      },
      {
        heading: "Semrush",
        body: "Useful when you also scale landing pages, monitor technical health after template changes, and track keyword groups across cities you genuinely serve.",
      },
      {
        heading: "Ahrefs",
        body: "Helps when competitor backlinks and page-level gaps explain why rivals outrank you on high-ticket services—pair with ethical outreach or content you can maintain.",
      },
    ],
    [
      {
        q: "What free SEO tool should contractors use?",
        a: "Google Search Console on every site—queries, coverage, and URL inspection before you spend on paid suites. Add paid tools when competitor research and crawl scale justify the line item.",
      },
      {
        q: "BrightLocal or Whitespark for contractors?",
        a: "Both are credible local specialists—compare citation workflows, grid UX, agency PDFs, and per-location pricing on each vendor’s site. See our BrightLocal vs Whitespark comparison.",
      },
    ],
    [
      { label: "How to do SEO for contractors", href: `${GUIDES}/how-to-do-seo-for-contractors` },
      { label: "How to rank in Google Maps", href: `${GUIDES}/how-to-rank-in-google-maps` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best SEO Tools for HVAC (2026)",
    "Emergency repair intent spikes with weather; installs and maintenance need separate page and keyword discipline—tooling should match dispatch, GBP truth, and seasonal reporting, not generic national SEO vanity.",
    "HVAC blends urgent “no heat” searches with planned replacements and maintenance agreements. Your stack should support fast page updates when offers change, GBP that reflects real territories, and tracking that separates emergency from install intent. Search Console shows which queries and landing pages Google already associates with your brand—use that before you trust default keyword lists from any suite. Software cannot answer after-hours calls; it helps you prioritize pages and markets worth fighting for.",
    [
      {
        heading: "Intent coverage on separate pages",
        body: "Keep emergency repair, replacement, and maintenance keywords mapped to pages that match dispatcher scripts—mixed intent confuses users and weakens relevance.",
      },
      {
        heading: "Service-area honesty",
        body: "Over-stretching maps and cities you cannot serve quickly creates bad reviews. Align GBP, ads, and on-site copy with trucks and licenses.",
      },
      {
        heading: "Measure by season, not one week",
        body: "Compare quarter-over-quarter in GSC and call data; heat waves and cold snaps skew short windows.",
      },
      {
        heading: "Stack discipline",
        body: "One research suite plus Search Console is enough for many shops; add local grid/listings software when Map Pack is the revenue engine and someone owns the tasks weekly.",
      },
    ],
    [
      {
        heading: "BrightLocal",
        body: "Track Map Pack movement across ZIPs you actually roll trucks to—useful for multi-crew metros and franchise reporting.",
      },
      {
        heading: "Semrush",
        body: "Expand city and service landing pages, monitor technical issues after CMS changes, and group keywords by equipment or ticket type.",
      },
      {
        heading: "Ahrefs",
        body: "Study which competitors earn links and content visibility in your metro—inform partnerships and content you can sustain.",
      },
    ],
    [
      {
        q: "HVAC: local tool or all-in-one first?",
        a: "If emergency calls come from Maps, pair Search Console with BrightLocal or Whitespark for grids and listings, then add Semrush or Ahrefs when content and link gaps—not only GBP—are the constraint.",
      },
      {
        q: "How independent is this HVAC guidance?",
        a: "Editorial only. We do not see your call logs or GSC history. Confirm pricing and modules with vendors and validate priorities with your own data.",
      },
    ],
    [
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
    ]
  ),
  plumbing: makePage(
    "plumbing",
    "Best SEO Tools for Plumbing (2026)",
    "Slab leaks, water heaters, and emergency dispatch demand high-intent local pages and a clean GBP—tools should support crawl health, competitor gaps, and grid visibility, not hype that replaces review velocity.",
    "Plumbing SEO succeeds when urgent queries land on pages with obvious click-to-call trust, accurate service areas, and fast mobile performance. Software helps audit crawl errors after theme changes, discover competitor service coverage, and monitor local visibility—but it does not answer the phone at 2 a.m. BeltStack’s picks assume you will maintain review cadence and NAP consistency; without that, dashboards only show a sinking pack. Cross-check any “priority keyword” against Search Console: if you already earn impressions for it, improve the page; if not, confirm demand exists in your city before you build.",
    [
      {
        heading: "Call-focused pages",
        body: "Above-the-fold phone/SMS, licensed-and-insured proof, and clear service boundaries beat keyword stuffing for real conversions.",
      },
      {
        heading: "Duplicate GBP risk",
        body: "One strong profile per brand; fix suspensions and duplicates before buying more software—tools cannot override Google’s enforcement.",
      },
      {
        heading: "Review velocity",
        body: "Map Pack rewards recent proof. Tools monitor movement; your crew and office still need a respectful ask-and-reply process.",
      },
      {
        heading: "Pricing realism",
        body: "Model per-seat and per-location costs before annual contracts—plumbing groups that add territories often outgrow starter tiers mid-year.",
      },
    ],
    [
      {
        heading: "Semrush",
        body: "Strong for technical audits when migrations, staging pushes, or multi-city templates threaten indexing—pair fixes with GSC coverage checks.",
      },
      {
        heading: "BrightLocal",
        body: "Useful when you run multiple vans or territories and need grid and citation reporting owners will act on monthly.",
      },
      {
        heading: "Ahrefs",
        body: "Helps uncover content gaps on high-ticket jobs competitors promote before you do.",
      },
    ],
    [
      {
        q: "Do plumbers need expensive SEO suites?",
        a: "Not on day one—verify Search Console, fix GBP basics, then buy suites when multi-location scale or competitor depth demands crawls and tracking you cannot do manually.",
      },
      {
        q: "What should plumbers verify before buying?",
        a: "Keyword quotas, user seats, crawl limits, and whether you will use local grids monthly. Unused enterprise depth is a common waste for single-shop operators.",
      },
    ],
    [
      { label: "On-page SEO for local business", href: `${GUIDES}/on-page-seo-for-local-business` },
      { label: "How to rank in Google Maps", href: `${GUIDES}/how-to-rank-in-google-maps` },
    ]
  ),
  electricians: makePage(
    "electricians",
    "Best SEO Tools for Electricians (2026)",
    "Panel upgrades, EV charger installs, and emergency calls need trust-heavy pages and citation accuracy—SEO tools support technical health and competitive research, not license claims you cannot back up.",
    "Electrical contractors compete on specificity and trust: clear licensing, insurance, and project-type segmentation help both users and relevance signals. Use SEO software to catch crawl issues after redesigns, benchmark competitors’ pages and links, and monitor local rankings—but keep canonical NAP and GBP categories aligned with how you actually dispatch. Search Console remains the honest view of which queries surface your URLs; paid keyword scores are secondary. High-stakes commercial work may need custom content and compliance review beyond any tool’s suggestions.",
    [
      {
        heading: "License and trust content",
        body: "Credentials, bonding, and insurance copy should be accurate and easy to find—both for homeowners and for aligning page topics with real permits.",
      },
      {
        heading: "Project vs service calls",
        body: "Segment keywords so pages match ticket types your crew wants (e.g., EV charger install vs emergency repair) to avoid attracting the wrong leads.",
      },
      {
        heading: "Citation accuracy",
        body: "NAP drift across directories undermines Maps trust—local tools flag issues; humans still fix logins and duplicates.",
      },
      {
        heading: "First-party checks",
        body: "When a tool says you “should rank” for a term, confirm demand and current impressions in GSC before reallocating build time.",
      },
    ],
    [
      {
        heading: "Ahrefs",
        body: "Benchmark backlinks separately for commercial vs residential competitors if you play in both lanes—avoid averaging apples and oranges.",
      },
      {
        heading: "Semrush",
        body: "Track keyword clusters per county or city as you expand—watch seat and project limits as you add properties.",
      },
      {
        heading: "BrightLocal",
        body: "Report grid visibility where permit-heavy suburbs behave differently from urban emergency demand.",
      },
    ],
    [
      {
        q: "Electricians: prioritize website or GBP?",
        a: "Both—GBP captures Map Pack; your site closes trust for larger jobs. Search Console links web performance to queries; use it weekly alongside either paid suite.",
      },
      {
        q: "Does BeltStack favor certain vendors?",
        a: "No pay-for-placement. Affiliate commissions may exist site-wide. Choose tools based on trials, your GSC data, and who will log in weekly.",
      },
    ],
    [
      { label: "How to do SEO for contractors", href: `${GUIDES}/how-to-do-seo-for-contractors` },
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
    ]
  ),
  roofing: makePage(
    "roofing",
    "Best SEO Tools for Roofing (2026)",
    "Retail replacement, storm surges, and insurance-adjacent keywords need different landing pages and honest service areas—your SEO stack should support geo expansion, listing hygiene after acquisitions, and competitor content intel.",
    "Roofing demand swings with weather and storms; your site and GBP must stay aligned with real dispatch territory and crew capacity. Tools help scale city pages, watch technical health on large sites, and study which competitors earn links during events—but they do not replace job-site photos, reviews after installs, or honest storm-market entry. After mergers or DBA changes, audit listings manually; software flags issues but humans resolve GBP support cases. Always reconcile keyword targets with Search Console: storm terms spike fast; evergreen replacement terms need sustained relevance.",
    [
      {
        heading: "Segment demand types",
        body: "Retail replacement, maintenance, and CAT/storm modes need different offers, tracking, and sometimes different landing paths—don’t blend them into one generic page.",
      },
      {
        heading: "Photo and project proof",
        body: "GBP and galleries influence clicks; SEO dashboards do not take before/after photos on the roof.",
      },
      {
        heading: "Listings after M&A",
        body: "Name changes and acquisitions break Maps—plan listing audits whenever brands combine.",
      },
      {
        heading: "Verify with GSC",
        body: "Storm queries can spike impressions overnight; use Performance reports to separate temporary noise from durable service lines.",
      },
    ],
    [
      {
        heading: "Semrush",
        body: "Scale geo pages and monitor crawl/index health across large multi-city sites—assign owners for renewals.",
      },
      {
        heading: "BrightLocal",
        body: "Track how weather events and competitive pressure shift grid visibility in affected counties—act on listings, not only charts.",
      },
      {
        heading: "Ahrefs",
        body: "Study which competitors earn attention and links during major weather cycles to inform ethical PR and community partnerships.",
      },
    ],
    [
      {
        q: "Roofing and local SEO tools?",
        a: "If Map Pack in multiple metros drives estimates, BrightLocal or Whitespark plus a research suite (Semrush or Ahrefs) is a common stack—always with Search Console on every domain.",
      },
      {
        q: "How current is this roofing advice?",
        a: "Product features and pricing change; confirm on vendor sites. Market competitiveness varies—use our guides as a framework, not a guarantee of rankings.",
      },
    ],
    [
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
      { label: "On-page SEO for local business", href: `${GUIDES}/on-page-seo-for-local-business` },
    ]
  ),
  landscaping: makePage(
    "landscaping",
    "Best SEO Tools for Landscaping (2026)",
    "Seasonal routes, design-build, and maintenance contracts mean geography and portfolio proof matter as much as keywords—tools should support page prioritization, local tracking, and post-redesign crawls.",
    "Landscaping SEO ties tightly to where crews actually drive and how homeowners browse photos and reviews. Use software to find content gaps on hardscape, drainage, or seasonal promos, and to monitor local rankings—but rank #3 outside your route still wastes fuel. Search Console shows which services and towns already earn impressions; invest copy and media there first. Off-season is the right time to ship pages so spring demand hits indexed content. Sponsorships and local links help; they never replace review cadence and GBP accuracy.",
    [
      {
        heading: "Route reality",
        body: "Target cities and neighborhoods you can serve profitably; misaligned SEO creates bad reviews and drive-time losses.",
      },
      {
        heading: "Visual + long-form balance",
        body: "Project galleries and educational pages support premium tickets—tools suggest topics; your team supplies proof.",
      },
      {
        heading: "Off-season publishing",
        body: "Ship winter planning and hardscape pages early so spring queries land on mature URLs.",
      },
      {
        heading: "Limitations of scores",
        body: "Keyword difficulty metrics are models—validate commercial intent with GSC, SERP spot-checks, and your close rate.",
      },
    ],
    [
      {
        heading: "Ahrefs",
        body: "Find gaps on hardscape, drainage, irrigation, and seasonal offers competitors already monetize.",
      },
      {
        heading: "Semrush",
        body: "Separate tracking groups for maintenance vs install vs design-build if those are distinct P&L lines.",
      },
      {
        heading: "BrightLocal",
        body: "Monitor Maps where homeowners compare landscapers visually in the pack—still requires photo and review discipline.",
      },
    ],
    [
      {
        q: "Do landscapers need backlinks?",
        a: "Local sponsors and project features can help, but reviews, GBP, and service pages usually come first in most markets. Use link tools ethically—chasing junk links hurts more than it helps.",
      },
      {
        q: "Why these three tools for landscaping?",
        a: "They cover national research (Semrush, Ahrefs) and local measurement (BrightLocal) most teams reference—SE Ranking or Moz may fit if budget or UX is the deciding factor.",
      },
    ],
    [
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
      { label: "How to rank in Google Maps", href: `${GUIDES}/how-to-rank-in-google-maps` },
    ]
  ),
  "local-seo": makePage(
    "local-seo",
    "Best SEO Tools for Local SEO (2026)",
    "Map Pack wins are operational: one NAP truth, review cadence, accurate categories, and pages that match service areas—software should make GBP, citations, and grids measurable, not magical.",
    "Local SEO for service businesses is mostly execution: canonical name/address/phone, GBP categories and photos, review replies, and on-site signals that match how you really serve customers. Pick tools that make citation fixes and grid movement visible to stakeholders—but grids without NAP cleanup are theater. Search Console still belongs on every site to connect organic queries with landing pages; local platforms complement that with listings-centric workflows, not replace it. BeltStack highlights BrightLocal and Whitespark as specialist peers alongside Semrush for keyword depth; trial both local vendors against your footprint before you standardize.",
    [
      {
        heading: "Single source of truth",
        body: "Decide canonical NAP, categories, and primary website URL before you scale locations—conflicting data erodes Maps trust faster than any suite can fix.",
      },
      {
        heading: "Grid tracking discipline",
        body: "Grids diagnose markets; they do not replace better photos, faster review replies, or accurate service-area settings.",
      },
      {
        heading: "Pair with Search Console",
        body: "Organic web visibility and Maps overlap—verify every property and review which queries drive clicks to service pages, not only pack rankings.",
      },
      {
        heading: "Independence and verification",
        body: "Compare BrightLocal vs Whitespark on your own locations—reporting style and per-ZIP pricing differ. Confirm module bundles on each vendor’s site.",
      },
    ],
    [
      {
        heading: "BrightLocal",
        body: "Purpose-built for GBP-adjacent reporting, citations, and local rank grids—strong when agencies need packaged client narratives.",
      },
      {
        heading: "Whitespark (peer pick)",
        body: "Often chosen when citation discovery, education, and modular tools fit your process—featured cards show three anchors; Whitespark remains a head-to-head peer. Read our BrightLocal vs Whitespark comparison.",
      },
      {
        heading: "Semrush",
        body: "Adds keyword research, crawls, and broader competitive context once listings fundamentals are stable—still not a full substitute for daily GBP ops.",
      },
    ],
    [
      {
        q: "BrightLocal vs Whitespark?",
        a: "Both are credible—compare reporting UX, citation workflows, education resources, and per-location or per-ZIP pricing for your footprint. See our dedicated comparison page.",
      },
      {
        q: "Can I skip paid tools for local SEO?",
        a: "Search Console plus disciplined GBP and manual citation checks can suffice for a single location. Paid local platforms earn their keep when you manage many ZIPs, brands, or client reports monthly.",
      },
    ],
    [
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
    ]
  ),
};

export function getSeoToolsBestForPageProps(slug: string): BestForTemplateProps | null {
  return SEO_TOOLS_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getSeoToolsBestForSlugs(): string[] {
  return Object.keys(SEO_TOOLS_BEST_FOR_BY_SLUG);
}
