import {
  getSeoToolsBestForUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestSeoToolsPick = SoftwarePickCardContent & {
  standoutFeature: string;
};

export const TOP_PICKS: BestSeoToolsPick[] = [
  {
    slug: "semrush",
    name: "Semrush",
    badge: "Best all-in-one SEO suite",
    comparisonTableBestFor: "Keyword research, site audits, and competitive tracking",
    description: "Full-stack SEO and content toolkit with strong rank tracking and technical audits.",
    rating: "4.6",
    startingPrice: "From ~$139/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.semrush.com",
    logoSrc: "/Logos/semrush.jpeg",
    compareSlugs: ["semrush-vs-ahrefs", "semrush-vs-ubersuggest", "se-ranking-vs-semrush"],
    standoutFeature: "Broad feature depth + workflow scale",
    editorialParagraph:
      "Semrush is the default enterprise-grade shortlist when you want research, audits, and reporting in one login. Local operators still need GBP discipline—software does not replace citations or review velocity.",
    pros: ["Huge keyword and SERP dataset", "Site audit and monitoring", "Useful for agencies and multi-location"],
    cons: ["Price jumps with seats and projects", "Learning curve vs lighter tools", "Can feel heavy for solo owners"],
    pricingSummary: "Tiered plans by features and limits; confirm how many projects and tracked keywords you need before committing.",
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    badge: "Best for backlink intelligence",
    comparisonTableBestFor: "Link analysis, content research, and rank tracking",
    description: "Deep backlink index and content explorer for competitive SEO research.",
    rating: "4.7",
    startingPrice: "From ~$129/mo",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://ahrefs.com",
    logoSrc: "/Logos/ahrefs.jpeg",
    compareSlugs: ["semrush-vs-ahrefs", "ahrefs-vs-moz-pro"],
    standoutFeature: "Backlink and content research depth",
    editorialParagraph:
      "Ahrefs shines when backlinks and competitor content gaps drive your roadmap. Pair it with BrightLocal or Whitespark when Maps and citations are the bottleneck.",
    pros: ["Strong link index and UI", "Content gap workflows", "Reliable rank tracking for many markets"],
    cons: ["No free trial on all plans historically", "Premium pricing for full seats", "Local pack reporting still needs GBP hygiene"],
    pricingSummary: "Plans scale by credits, seats, and tracked keywords—model cost per active location or brand.",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    badge: "Best for local SEO ops",
    comparisonTableBestFor: "Google Business Profile, citations, and local rank tracking",
    description: "Purpose-built local SEO platform for listings, audits, and local search reporting.",
    rating: "4.5",
    startingPrice: "From ~$39/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.brightlocal.com",
    logoSrc: "/Logos/brightlocal.jpeg",
    compareSlugs: ["brightlocal-vs-whitespark"],
    standoutFeature: "GBP + citation workflows",
    editorialParagraph:
      "BrightLocal fits service businesses that live in the Map Pack: tracking, reporting, and citation work matter more than generic national keyword volumes.",
    pros: ["Local rank tracking grids", "Citation and listing tools", "Client reporting for agencies"],
    cons: ["Less broad than all-in-one suites", "Still requires on-site and content execution", "Pricing by locations/reports"],
    pricingSummary: "Often priced per location or report bundle—align plans to how many ZIPs you track.",
  },
  {
    slug: "google-search-console",
    name: "Google Search Console",
    badge: "Best free essentials",
    comparisonTableBestFor: "Coverage, queries, and Maps-related performance signals",
    description: "Google’s free console for search performance, indexing, and core issues.",
    rating: "4.8",
    startingPrice: "Free",
    hasFreeTrial: false,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://search.google.com/search-console",
    logoSrc: "/Logos/google.jpeg",
    compareSlugs: ["semrush-vs-ubersuggest"],
    standoutFeature: "Direct from Google—no subscription",
    editorialParagraph:
      "Every local site should verify Search Console: it surfaces queries, page performance, and indexing problems paid tools only infer. It will not replace rank trackers or citation tools.",
    pros: ["Free and authoritative", "Query and page insights", "Indexing and coverage alerts"],
    cons: ["Not a full rank tracker", "No competitor backlink database", "Limited historical depth vs paid tools"],
    pricingSummary: "Free; pair with paid tools when you need competitive research and scalable reporting.",
    alternativesSlug: null,
  },
];

export const SEO_TOOLS_REGISTRY_SUPPLEMENT: SoftwarePickCardContent[] = [
  {
    slug: "moz-pro",
    name: "Moz Pro",
    badge: "Solid mid-market SEO suite",
    comparisonTableBestFor: "Rank tracking, on-page, and link research",
    description: "Moz Pro bundles keyword research, site crawls, and link metrics for growing teams.",
    rating: "4.3",
    startingPrice: "From ~$99/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://moz.com/products/pro",
    logoSrc: "/Logos/mozpro.jpeg",
    compareSlugs: ["ahrefs-vs-moz-pro"],
    standoutFeature: "Approachable UX + education",
    editorialParagraph:
      "Moz Pro fits operators who want credible SEO fundamentals without Ahrefs-level link obsession—still budget for local-specific tooling if Maps matter most.",
    pros: ["Clear onboarding and learning content", "Rank tracking and on-page tools", "Trusted brand for SMBs"],
    cons: ["Less link index depth vs Ahrefs", "Not a dedicated local platform alone", "Feature caps by tier"],
    pricingSummary: "Tiered by keywords and campaigns; confirm crawl limits for multi-location sites.",
  },
  {
    slug: "ubersuggest",
    name: "Ubersuggest",
    badge: "Best budget keyword research",
    comparisonTableBestFor: "Affordable keyword ideas and site audits",
    description: "Lower-cost SEO toolkit from Neil Patel’s team—good for light research and audits.",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: false,
    visitUrl: "https://neilpatel.com/ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    compareSlugs: ["semrush-vs-ubersuggest"],
    standoutFeature: "Entry price for basics",
    editorialParagraph:
      "Ubersuggest helps solo trades test SEO ideas before buying Semrush-level seats—expect thinner data and fewer local-pack-specific workflows.",
    pros: ["Affordable entry", "Simple dashboards", "Lifetime deals sometimes available"],
    cons: ["Less depth than Semrush/Ahrefs", "Weaker for advanced link work", "Local GBP still separate"],
    pricingSummary: "Often individual or lifetime tiers—verify keyword and crawl limits vs your locations.",
    alternativesSlug: null,
  },
  {
    slug: "whitespark",
    name: "Whitespark",
    badge: "Best citation & local finder depth",
    comparisonTableBestFor: "Citation building, local rank tracking, and review tools",
    description: "Local SEO specialist tools for citations, grid rank tracking, and reputation.",
    rating: "4.5",
    startingPrice: "From ~$25/mo (tooling varies)",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://whitespark.ca",
    logoSrc: "/Logos/whitespark.jpeg",
    compareSlugs: ["brightlocal-vs-whitespark"],
    standoutFeature: "Citation and local search tooling",
    editorialParagraph:
      "Whitespark competes directly with BrightLocal on listings and local rank insight—pick based on reporting style and which workflows your agency or office prefers.",
    pros: ["Strong citation and local finder reputation", "Useful grid tracking", "Education for local SEO"],
    cons: ["Not a full content/technical suite alone", "Pricing can stack with add-ons", "Requires execution discipline"],
    pricingSummary: "Modular tools and bundles—map spend to active locations and campaigns.",
    alternativesSlug: null,
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    badge: "Best value all-in-one alternative",
    comparisonTableBestFor: "Rank tracking, audits, and competitor research on a budget",
    description: "All-in-one SEO platform with competitive pricing vs larger suites.",
    rating: "4.4",
    startingPrice: "From ~$65/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://seranking.com",
    logoSrc: "/Logos/seranking.jpeg",
    compareSlugs: ["se-ranking-vs-semrush"],
    standoutFeature: "Price-to-feature balance",
    editorialParagraph:
      "SE Ranking is a pragmatic Semrush alternative when you need rank tracking and audits without every enterprise module—still pair with BrightLocal/Whitespark for heavy citation programs.",
    pros: ["Competitive pricing", "Solid rank tracking", "Audit and competitor modules"],
    cons: ["Smaller brand than Semrush/Ahrefs", "Data depth varies by use case", "Local workflows may need add-ons"],
    pricingSummary: "Plans scale by keywords checked and account features—model per brand or location.",
    alternativesSlug: null,
  },
];

export const MORE_SEO_TOOLS_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "moz-pro",
    name: "Moz Pro",
    description: "Mid-market SEO suite with approachable workflows.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    logoSrc: "/Logos/mozpro.jpeg",
  },
  {
    slug: "ubersuggest",
    name: "Ubersuggest",
    description: "Budget keyword and audit tooling.",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    logoSrc: "/Logos/ubersuggest.webp",
  },
  {
    slug: "whitespark",
    name: "Whitespark",
    description: "Citations, grid tracking, and local reputation.",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
    logoSrc: "/Logos/whitespark.jpeg",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    description: "All-in-one SEO at a lower price tier.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    logoSrc: "/Logos/seranking.jpeg",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for contractors",
    href: getSeoToolsBestForUrl("contractors"),
    description: "GBP, reviews, and service-area pages that win calls.",
  },
  {
    label: "Best for local SEO",
    href: getSeoToolsBestForUrl("local-seo"),
    description: "Map Pack, citations, and local reporting.",
  },
  {
    label: "Best for small business",
    href: getSeoToolsBestForUrl("small-business"),
    description: "Lean stacks without enterprise overhead.",
  },
  {
    label: "Best for HVAC",
    href: getSeoToolsBestForUrl("hvac"),
    description: "Seasonal demand and emergency search intent.",
  },
];

export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "Contractors", href: getSeoToolsBestForUrl("contractors") },
  { label: "HVAC businesses", href: getSeoToolsBestForUrl("hvac") },
  { label: "Plumbing companies", href: getSeoToolsBestForUrl("plumbing") },
  { label: "Electricians", href: getSeoToolsBestForUrl("electricians") },
  { label: "Painting contractors", href: getSeoToolsBestForUrl("painting") },
  { label: "Roofing companies", href: getSeoToolsBestForUrl("roofing") },
  { label: "General contractors", href: getSeoToolsBestForUrl("general-contractors") },
  { label: "Landscaping companies", href: getSeoToolsBestForUrl("landscaping") },
  { label: "Construction companies", href: getSeoToolsBestForUrl("construction") },
  { label: "Remodeling businesses", href: getSeoToolsBestForUrl("remodeling") },
  { label: "Handyman businesses", href: getSeoToolsBestForUrl("handyman") },
  { label: "Property management companies", href: getSeoToolsBestForUrl("property-management") },
  { label: "Pest control businesses", href: getSeoToolsBestForUrl("pest-control") },
  { label: "Pool service companies", href: getSeoToolsBestForUrl("pool-service") },
  { label: "Junk removal businesses", href: getSeoToolsBestForUrl("junk-removal") },
  { label: "Moving companies", href: getSeoToolsBestForUrl("moving") },
  { label: "Local SEO", href: getSeoToolsBestForUrl("local-seo") },
  { label: "Small business", href: getSeoToolsBestForUrl("small-business") },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
  { label: "Ahrefs vs Moz Pro", href: getSeoToolsCompareUrl("ahrefs-vs-moz-pro") },
  { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
  { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
  { label: "Semrush vs Ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What SEO tool is best for local contractors?",
    a: "Most teams combine Google Search Console (free) with a local platform like BrightLocal or Whitespark for citations and Map Pack tracking, plus Semrush or Ahrefs when you need deeper keyword and content research.",
  },
  {
    q: "Do I need both Semrush and Ahrefs?",
    a: "Usually not at first—pick one primary suite, add a local specialist tool if Maps and listings are your bottleneck, and keep Search Console on every property.",
  },
  {
    q: "Can SEO tools replace a website?",
    a: "No. Once your site is live, use our website builder hub to improve pages—then SEO tools measure and expand visibility.",
  },
];
