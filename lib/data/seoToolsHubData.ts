import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getSeoToolsBestForUrl, getSeoToolsCompareUrl } from "@/lib/routes";
import { getSeoToolsCompareUrlFromSlug } from "@/lib/data/seoToolsComparisons";

const GUIDES_BASE = "/seo-tools/guides";

export type SeoToolsGuideCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const SEO_TOOLS_HUB_GUIDES: SeoToolsGuideCard[] = [
  {
    slug: "how-to-do-seo-for-contractors",
    title: "How to Do SEO for Contractors",
    description:
      "Phased playbook: Search Console, GBP, NAP, service pages, reviews, when to add Semrush/Ahrefs or BrightLocal, and CRM measurement for trades.",
    href: `${GUIDES_BASE}/how-to-do-seo-for-contractors`,
  },
  {
    slug: "local-seo-for-service-businesses",
    title: "Local SEO for Service Businesses",
    description:
      "Three pillars—Maps, website, authority—plus citations, content intent, blending paid and organic, and tool choices for service companies.",
    href: `${GUIDES_BASE}/local-seo-for-service-businesses`,
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    description:
      "Categories, services, service areas, photos, Q&A, reviews, and tools—optimize GBP as a conversion surface, not a stale listing.",
    href: `${GUIDES_BASE}/google-business-profile-optimization`,
  },
  {
    slug: "on-page-seo-for-local-business",
    title: "On-Page SEO for Local Business",
    description:
      "Service and area pages, titles and meta, internal links, technical hygiene, and how Search Console plus Semrush/Ahrefs support on-page work.",
    href: `${GUIDES_BASE}/on-page-seo-for-local-business`,
  },
  {
    slug: "how-to-rank-in-google-maps",
    title: "How to Rank in Google Maps",
    description:
      "Relevance, distance, prominence explained; GBP levers, website alignment, rank grids, tactics to avoid, and when to blend paid leads.",
    href: `${GUIDES_BASE}/how-to-rank-in-google-maps`,
  },
];

export const SEO_TOOLS_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Contractors optimizing the Map Pack",
    body: "Grid rank trackers help, but photos, categories, review responses, and accurate service areas still drive wins. Pair BrightLocal or Whitespark with Semrush or Ahrefs when you also need content and links.",
    links: [
      { label: "Best SEO tools for contractors →", href: getSeoToolsBestForUrl("contractors") },
      { label: "BrightLocal vs Whitespark →", href: getSeoToolsCompareUrlFromSlug("brightlocal-vs-whitespark") },
    ],
  },
  {
    title: "All-in-one suite vs specialist local stack",
    body: "National keyword suites rarely replace GBP execution. Choose one primary research tool, add a local platform if citations and grids are your bottleneck, and keep Search Console on every property.",
    links: [
      { label: "Semrush vs Ahrefs →", href: getSeoToolsCompareUrlFromSlug("semrush-vs-ahrefs") },
      { label: "Best for local SEO →", href: getSeoToolsBestForUrl("local-seo") },
    ],
  },
  {
    title: "Budget-conscious SMBs testing SEO",
    body: "Start with Search Console and structured service pages before stacking paid seats. Ubersuggest or SE Ranking can bridge the gap until competitor research demands a flagship suite.",
    links: [
      { label: "Semrush vs Ubersuggest →", href: getSeoToolsCompareUrlFromSlug("semrush-vs-ubersuggest") },
      { label: "SE Ranking vs Semrush →", href: getSeoToolsCompareUrlFromSlug("se-ranking-vs-semrush") },
    ],
  },
  {
    title: "After your website goes live",
    body: "Once your site is live, SEO tools help you measure queries, fix technical issues, and expand city pages. Our website builder hub covers publishing; this hub covers visibility and local measurement.",
    links: [
      { label: "Website builders for contractors →", href: "/website-builders/best-for/contractors" },
      { label: "Best SEO tools roundup →", href: "/seo-tools/best-seo-tools" },
    ],
  },
  {
    title: "Pairing organic visibility with paid leads",
    body: "SEO compounds slowly; lead marketplaces fill this week. Use SEO tools to improve owned demand, then compare lead gen channels when you need faster pipeline—track both in your CRM.",
    links: [
      { label: "Lead generation hub →", href: "/lead-generation" },
      { label: "CRM software hub →", href: "/crm" },
    ],
  },
];

export type SeoToolsHubComparisonLink = { label: string; slug: string; href: string };

export const SEO_TOOLS_HUB_POPULAR_COMPARISONS: SeoToolsHubComparisonLink[] = [
  { label: "Semrush vs Ahrefs", slug: "semrush-vs-ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
  { label: "BrightLocal vs Whitespark", slug: "brightlocal-vs-whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
  { label: "SE Ranking vs Semrush", slug: "se-ranking-vs-semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
  { label: "Ahrefs vs Moz Pro", slug: "ahrefs-vs-moz-pro", href: getSeoToolsCompareUrl("ahrefs-vs-moz-pro") },
  { label: "Semrush vs Ubersuggest", slug: "semrush-vs-ubersuggest", href: getSeoToolsCompareUrl("semrush-vs-ubersuggest") },
];
