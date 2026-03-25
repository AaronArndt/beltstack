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
    description: "Keyword research, audits, and tracking for teams outgrowing free tools.",
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
    description: "GBP, citations, and local rank grids for Map Pack-focused operators.",
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
    description: "Competitive backlinks and content research when organic strategy is link-led.",
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
    bestFor: "All-in-one SEO suite",
    startingPrice: "From ~$139/mo",
    standoutFeature: "Broad research + audits",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    bestFor: "Local listings + grids",
    startingPrice: "From ~$39/mo",
    standoutFeature: "Map Pack reporting",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    bestFor: "Backlinks + content gaps",
    startingPrice: "From ~$129/mo",
    standoutFeature: "Link index depth",
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
    topPicksSub: `Our top SEO tool picks for ${label}.`,
    editorialSub: `What to evaluate when you're improving visibility as ${label}.`,
    whyThesePicksSub: `Why these tools fit ${label}.`,
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
    faqItems,
  };
}

export const SEO_TOOLS_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage(
    "small-business",
    "Best SEO Tools for Small Business (2026)",
    "Lean stacks that cover Search Console, local basics, and honest rank tracking—without enterprise overhead.",
    "Small businesses win when they verify Search Console, tighten service pages, and pick one primary research tool—then add local software only if Map Pack work is the bottleneck.",
    [
      { heading: "Start with truth data", body: "Search Console is free and authoritative; build habits there before you buy." },
      { heading: "Avoid shelfware", body: "If nobody logs in weekly, downgrade tiers until adoption returns." },
      { heading: "Tie spend to calls", body: "Rankings that never produce booked jobs are vanity—measure pipeline impact." },
    ],
    [
      { heading: "Semrush", body: "Best when you want audits, keywords, and tracking in one suite as you grow pages." },
      { heading: "BrightLocal", body: "Best when Maps, citations, and GBP reporting dominate your funnel." },
      { heading: "Ahrefs", body: "Best when backlinks and competitor content gaps steer your roadmap." },
    ],
    [{ q: "Do small businesses need Semrush and Ahrefs?", a: "Usually not—pick one flagship-style suite, keep Search Console, and add a local tool if needed." }],
    [
      { label: "On-page SEO for local business", href: `${GUIDES}/on-page-seo-for-local-business` },
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
    ]
  ),
  contractors: makePage(
    "contractors",
    "Best SEO Tools for Contractors (2026)",
    "Map Pack, reviews, and city service pages—paired with research tools that match how homeowners search.",
    "Contractors need GBP hygiene, fast review responses, and clear service-area pages. SEO tools should prioritize local measurement and page fixes—not national vanity keywords.",
    [
      { heading: "GBP execution", body: "Photos, categories, services, and Q&A beat dashboards if neglected." },
      { heading: "City + trade pages", body: "Build pages humans can quote from; tools help you find gaps competitors cover." },
      { heading: "Grid tracking sanity", body: "Use local rank grids to spot markets—then fix on-site and reputation drivers." },
    ],
    [
      { heading: "BrightLocal", body: "Strong when you report on Maps, citations, and listings for crews or clients." },
      { heading: "Semrush", body: "Useful when you also expand content, track keywords, and run technical audits." },
      { heading: "Ahrefs", body: "Helps when backlinks and competitor pages explain why rivals outrank you." },
    ],
    [{ q: "What free SEO tool should contractors use?", a: "Google Search Console on every site—then add paid tools when competitor research justifies the cost." }],
    [
      { label: "How to do SEO for contractors", href: `${GUIDES}/how-to-do-seo-for-contractors` },
      { label: "How to rank in Google Maps", href: `${GUIDES}/how-to-rank-in-google-maps` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best SEO Tools for HVAC (2026)",
    "Seasonal spikes, emergency intent, and local pack competition—tooling should match dispatch reality.",
    "HVAC sees urgent searches in heat waves and installs in shoulder seasons. SEO stacks should support fast page updates, strong GBP, and keyword tracking that reflects your actual service mix.",
    [
      { heading: "Intent coverage", body: "Separate emergency repair terms from replacement and maintenance content." },
      { heading: "Service-area honesty", body: "Over-stretching maps creates bad reviews—keep listings aligned with trucks." },
      { heading: "Measure by season", body: "Compare quarters, not single weeks, when judging SEO ROI." },
    ],
    [
      { heading: "BrightLocal", body: "Track Map Pack movement across ZIPs you actually serve." },
      { heading: "Semrush", body: "Expand landing pages and monitor technical health as you add cities." },
      { heading: "Ahrefs", body: "Study who links to top competitors in your metro." },
    ],
    [{ q: "HVAC: local tool or all-in-one first?", a: "If calls come from Maps, start BrightLocal or Whitespark alongside Search Console; add Semrush or Ahrefs when content scale matters." }],
    [
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
    ]
  ),
  plumbing: makePage(
    "plumbing",
    "Best SEO Tools for Plumbing (2026)",
    "Emergency keywords, slab leaks, and water heater pages—SEO tools should support high-intent local queries.",
    "Plumbing SEO is about matching urgent queries to pages that convert calls. Tools help you audit crawl issues, discover competitor coverage, and monitor local visibility—execution still wins.",
    [
      { heading: "Call-focused pages", body: "Above-the-fold phone/SMS and trust signals matter as much as keywords." },
      { heading: "Duplicate GBP risk", body: "Keep one strong profile per brand; fix suspensions before buying more software." },
      { heading: "Review velocity", body: "Map Pack leans on recent proof—tools monitor; your team collects." },
    ],
    [
      { heading: "Semrush", body: "Great for technical audits when site migrations or template changes hit indexing." },
      { heading: "BrightLocal", body: "Useful when you manage multiple vans or territories with different ZIP performance." },
      { heading: "Ahrefs", body: "Helps find content gaps on high-ticket services competitors promote." },
    ],
    [{ q: "Do plumbers need expensive SEO suites?", a: "Not on day one—verify Search Console, fix GBP, then buy suites when multi-location or content scale demands it." }],
    [
      { label: "On-page SEO for local business", href: `${GUIDES}/on-page-seo-for-local-business` },
      { label: "How to rank in Google Maps", href: `${GUIDES}/how-to-rank-in-google-maps` },
    ]
  ),
  electricians: makePage(
    "electricians",
    "Best SEO Tools for Electricians (2026)",
    "Panel upgrades, EV charger pages, and emergency service keywords—local SEO tools should match licensed work you actually sell.",
    "Electrical contractors compete on trust and specificity. Use SEO software to strengthen service pages, monitor local rankings, and catch technical errors—especially after redesigns.",
    [
      { heading: "License and trust content", body: "Clear credentials and insurance signals improve both users and local relevance." },
      { heading: "Project vs service calls", body: "Segment keywords so pages match ticket types your crew wants." },
      { heading: "Citation accuracy", body: "NAP consistency supports Maps—tools flag drift across directories." },
    ],
    [
      { heading: "Ahrefs", body: "Benchmark backlinks for commercial vs residential competitors separately." },
      { heading: "Semrush", body: "Track keyword sets per county or city cluster as you expand." },
      { heading: "BrightLocal", body: "Report grid visibility where permit-heavy suburbs behave differently." },
    ],
    [{ q: "Electricians: prioritize website or GBP?", a: "Both—GBP captures Map Pack; your site closes trust for larger jobs. Search Console ties them together." }],
    [
      { label: "How to do SEO for contractors", href: `${GUIDES}/how-to-do-seo-for-contractors` },
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
    ]
  ),
  roofing: makePage(
    "roofing",
    "Best SEO Tools for Roofing (2026)",
    "Storm surges, insurance keywords, and visual proof—SEO stacks should support both retail and event-driven demand.",
    "Roofing SEO mixes always-on replacement terms with volatile storm demand. Tools should help you expand geo pages, monitor competitor content, and keep GBP aligned with real dispatch areas.",
    [
      { heading: "Segment demand types", body: "Retail replacement and CAT-mode leads need different landing pages and tracking." },
      { heading: "Photo proof", body: "GBP and galleries influence clicks—SEO tools do not replace job-site media." },
      { heading: "Watch duplicate listings", body: "Acquisition and name changes break Maps—audit listings after mergers." },
    ],
    [
      { heading: "Semrush", body: "Scale city pages and monitor technical health across large sites." },
      { heading: "BrightLocal", body: "Track how storm events shift grid visibility in affected counties." },
      { heading: "Ahrefs", body: "Study which competitors earn links during major weather events." },
    ],
    [{ q: "Roofing and local SEO tools?", a: "If you chase Map Pack in multiple metros, BrightLocal or Whitespark plus a research suite is a common stack." }],
    [
      { label: "Local SEO for service businesses", href: `${GUIDES}/local-seo-for-service-businesses` },
      { label: "On-page SEO for local business", href: `${GUIDES}/on-page-seo-for-local-business` },
    ]
  ),
  landscaping: makePage(
    "landscaping",
    "Best SEO Tools for Landscaping (2026)",
    "Seasonal routes, design-build keywords, and maintenance contracts—local SEO should match how buyers shop outdoor work.",
    "Landscaping blends visual portfolios with tight geography. SEO tools help prioritize service pages, track local keywords, and fix crawl issues—especially when you add locations or crews.",
    [
      { heading: "Route reality", body: "Ranking far outside your cluster wastes drive time—align SEO targets with trucks." },
      { heading: "Visual + long-form", body: "Project galleries and educational pages support premium tickets." },
      { heading: "Off-season content", body: "Plan winter pages early so spring demand hits indexed pages." },
    ],
    [
      { heading: "Ahrefs", body: "Find content gaps on hardscape, drainage, and seasonal promos." },
      { heading: "Semrush", body: "Track rankings across maintenance vs install keyword groups." },
      { heading: "BrightLocal", body: "Monitor Maps where homeowners compare landscapers visually in the pack." },
    ],
    [{ q: "Landscapers need backlinks?", a: "Local sponsors and project features help; prioritize reviews, GBP, and service pages first in most markets." }],
    [
      { label: "Google Business Profile optimization", href: `${GUIDES}/google-business-profile-optimization` },
      { label: "How to rank in Google Maps", href: `${GUIDES}/how-to-rank-in-google-maps` },
    ]
  ),
  "local-seo": makePage(
    "local-seo",
    "Best SEO Tools for Local SEO (2026)",
    "Google Business Profile, citations, reviews, and on-site local signals—software that matches Map Pack work.",
    "Local SEO for service businesses is operational: accurate listings, review cadence, and pages that reflect real service areas. Pick tools that make GBP and citation workflows measurable.",
    [
      { heading: "Single source of truth", body: "Decide canonical NAP and categories before you scale locations." },
      { heading: "Grid tracking discipline", body: "Grids diagnose markets—they do not replace better photos or faster review replies." },
      { heading: "Pair with Search Console", body: "Organic and local surfaces overlap; verify every property." },
    ],
    [
      { heading: "BrightLocal", body: "Purpose-built reporting for GBP, citations, and local rank grids." },
      { heading: "Whitespark", body: "Strong when citation discovery and local education matter to your team." },
      { heading: "Semrush", body: "Adds keyword and technical depth when local fundamentals are stable." },
    ],
    [{ q: "BrightLocal vs Whitespark?", a: "Both are credible—compare reporting style, citation workflows, and per-location pricing for your footprint." }],
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
