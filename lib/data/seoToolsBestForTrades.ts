/**
 * SEO tools best-for pages — featured product triples vary by trade / scenario (not the same three everywhere).
 * Registry maps to canonical SEO tools reviews; related comparisons only use URLs that exist in `seoToolsComparisons`.
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

const CATEGORY = { href: "/seo-tools", label: "SEO Tools" };
const SEE_ALSO = {
  roundupLabel: "Best SEO tools (2026) — full roundup",
  roundupHref: "/seo-tools/best-seo-tools",
  compareLabel: "Compare SEO tools",
  compareHref: "/seo-tools/compare",
};

const SEO_TOOLS_PRODUCT_CORE = {
  semrush: {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: "4.6",
    startingPrice: "From ~$139/mo",
    visitUrl: "https://www.semrush.com",
    defaultStandout: "Keyword research, audits, rank tracking",
  },
  ahrefs: {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: "4.7",
    startingPrice: "From ~$129/mo",
    visitUrl: "https://ahrefs.com",
    defaultStandout: "Backlinks, content gaps, SERP research",
  },
  "moz-pro": {
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: "4.3",
    startingPrice: "From ~$99/mo",
    visitUrl: "https://moz.com/products/pro",
    defaultStandout: "Approachable rank tracking and on-page",
  },
  ubersuggest: {
    name: "Ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
    visitUrl: "https://neilpatel.com/ubersuggest",
    defaultStandout: "Budget keyword ideas and light audits",
  },
  brightlocal: {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    startingPrice: "From ~$39/mo",
    visitUrl: "https://www.brightlocal.com",
    defaultStandout: "GBP, citations, local rank grids",
  },
  whitespark: {
    name: "Whitespark",
    logoSrc: "/Logos/whitespark.jpeg",
    rating: "4.5",
    startingPrice: "From ~$25/mo (tooling varies)",
    visitUrl: "https://whitespark.ca",
    defaultStandout: "Citation discovery, local education",
  },
  "se-ranking": {
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    startingPrice: "From ~$65/mo",
    visitUrl: "https://seranking.com",
    defaultStandout: "Value all-in-one tracking and audits",
  },
  "google-search-console": {
    name: "Google Search Console",
    logoSrc: "/Logos/google.jpeg",
    rating: "4.8",
    startingPrice: "Free",
    visitUrl: "https://search.google.com/search-console",
    defaultStandout: "First-party queries, coverage, indexing",
  },
} as const;

export type SeoToolsProductSlug = keyof typeof SEO_TOOLS_PRODUCT_CORE;

export type SeoToolsProductPick = {
  slug: SeoToolsProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

export type SeoToolsTradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  picks: [SeoToolsProductPick, SeoToolsProductPick, SeoToolsProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

const SEO_TOOLS_COMPARISONS: {
  label: string;
  compareSlug: string;
  products: [SeoToolsProductSlug, SeoToolsProductSlug];
}[] = [
  { label: "Semrush vs Ahrefs", compareSlug: "semrush-vs-ahrefs", products: ["semrush", "ahrefs"] },
  { label: "Ahrefs vs Moz Pro", compareSlug: "ahrefs-vs-moz-pro", products: ["ahrefs", "moz-pro"] },
  { label: "Semrush vs Ubersuggest", compareSlug: "semrush-vs-ubersuggest", products: ["semrush", "ubersuggest"] },
  {
    label: "BrightLocal vs Whitespark",
    compareSlug: "brightlocal-vs-whitespark",
    products: ["brightlocal", "whitespark"],
  },
  { label: "SE Ranking vs Semrush", compareSlug: "se-ranking-vs-semrush", products: ["se-ranking", "semrush"] },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
  { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
  { label: "SE Ranking vs Semrush", href: getSeoToolsCompareUrl("se-ranking-vs-semrush") },
];

function buildRelatedComparisons(featured: SeoToolsProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = SEO_TOOLS_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getSeoToolsCompareUrl(c.compareSlug), score };
  })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);
  const out: BestForComparisonLink[] = [];
  const seen = new Set<string>();
  for (const c of scored) {
    if (seen.has(c.href)) continue;
    seen.add(c.href);
    out.push({ label: c.label, href: c.href });
    if (out.length >= 5) break;
  }
  for (const f of DEFAULT_COMPARISON_FALLBACK) {
    if (out.length >= 3) break;
    if (seen.has(f.href)) continue;
    seen.add(f.href);
    out.push(f);
  }
  return out;
}

const REVIEW_FILL_ORDER: SeoToolsProductSlug[] = [
  "semrush",
  "ahrefs",
  "brightlocal",
  "moz-pro",
  "se-ranking",
  "ubersuggest",
  "whitespark",
  "google-search-console",
];

function buildRelatedReviews(featured: SeoToolsProductSlug[]): BestForReviewLink[] {
  const ordered: SeoToolsProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 8) break;
  }
  return ordered.map((s) => ({
    name: SEO_TOOLS_PRODUCT_CORE[s].name,
    href: getSeoToolsReviewUrl(s),
  }));
}

const EDITORIAL_FAQ_HOW_WE_PICK: BestForFaqItem = {
  q: "How does BeltStack pick SEO tools for these scenarios?",
  a: "We score how each product fits contractor and local-SMB workflows—GBP execution, Search Console habits, and realistic seat usage—not pay-for-placement. Product limits and pricing change; confirm quotas and checkout totals on each vendor’s site before you commit.",
};

const EDITORIAL_FAQ_AFFILIATE: BestForFaqItem = {
  q: "Do affiliate links change these recommendations?",
  a: "We may earn commissions on some outbound links site-wide; they do not buy rankings on BeltStack. Use our reviews and comparisons as orientation, then validate priorities in your own Search Console and trials.",
};

const COMMON_RELATED_GUIDES: BestForGuideLink[] = [
  { label: "How to choose a website builder", href: "/website-builders/guides/how-to-choose-a-website-builder" },
  {
    label: "Lead generation strategies for local business",
    href: "/lead-generation/guides/lead-generation-strategies-for-local-business",
  },
  { label: "CRM software hub", href: "/crm" },
];

export function buildSeoToolsTradeProps(p: SeoToolsTradeConfig): BestForTemplateProps {
  const label = p.useCase.replace(/-/g, " ");
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = SEO_TOOLS_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getSeoToolsReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = SEO_TOOLS_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getSeoToolsReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: SEO_TOOLS_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const featuredNames = new Set(p.picks.map((x) => SEO_TOOLS_PRODUCT_CORE[x.slug].name));
  const otherReviewNames = REVIEW_FILL_ORDER.map((s) => SEO_TOOLS_PRODUCT_CORE[s].name).filter((n) => !featuredNames.has(n));
  const othersPhrase = otherReviewNames.slice(0, 5).join(", ");
  const [n1, n2, n3] = p.picks.map((pk) => SEO_TOOLS_PRODUCT_CORE[pk.slug].name);

  const relatedGuides = [...(p.extraGuides ?? []), ...COMMON_RELATED_GUIDES].filter(
    (item, i, arr) => arr.findIndex((x) => x.href === item.href) === i
  );

  return {
    title: p.title,
    subtitle: p.subtitle,
    useCase: p.useCase,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    introParagraph: p.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Editorial top picks for ${label}. Confirm pricing, modules, and regional availability on each vendor’s site—our shortlist is a workflow map, not a substitute for your own invoice math.`,
    editorialSub: `Experience-informed criteria for ${label}: Google Search Console as ground truth, honest limits of software vs field execution, and tying spend to calls or booked jobs—not vanity rankings.`,
    whyThesePicksSub: `Why ${n1}, ${n2}, and ${n3} lead this shortlist for ${label}. ${othersPhrase.length > 0 ? `${othersPhrase} are in the full reviews list when budget or niche fit points elsewhere.` : "See related reviews for the full field."}`,
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: buildRelatedReviews(featuredSlugs),
    relatedComparisons: buildRelatedComparisons(featuredSlugs),
    relatedGuides,
    faqItems: [...p.faqItems, EDITORIAL_FAQ_HOW_WE_PICK, EDITORIAL_FAQ_AFFILIATE],
  };
}
