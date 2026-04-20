/**
 * Shared builder for field service /best-for trade pages. Products map to canonical field service reviews.
 * Related comparisons use only existing field-service comparison slugs.
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
import { getFieldServiceCompareUrl, getFieldServiceReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/field-service", label: "Field Service" };
const SEE_ALSO = {
  roundupLabel: "best field service management software",
  roundupHref: "/field-service/best-field-service-software",
  compareLabel: "field service software comparisons",
  compareHref: "/field-service/compare",
};

const FS_PRODUCT_CORE = {
  jobber: {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    startingPrice: "From ~$69/mo",
    visitUrl: "https://getjobber.com",
    defaultStandout: "Scheduling, dispatch, quotes, invoicing",
  },
  "housecall-pro": {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    startingPrice: "From ~$49/mo",
    visitUrl: "https://housecallpro.com",
    defaultStandout: "Customer comms & online booking",
  },
  servicetitan: {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    startingPrice: "Custom pricing",
    visitUrl: "https://servicetitan.com",
    defaultStandout: "Deep dispatch, memberships, analytics",
  },
  "service-fusion": {
    name: "Service Fusion",
    logoSrc: "/Logos/servicefusion.jpg",
    rating: "4.4",
    startingPrice: "From ~$99/mo",
    visitUrl: "https://servicefusion.com",
    defaultStandout: "Dispatch agreements & trade workflows",
  },
  workiz: {
    name: "Workiz",
    logoSrc: "/Logos/workiz.jpeg",
    rating: "4.4",
    startingPrice: "From ~$29/mo",
    visitUrl: "https://workiz.com",
    defaultStandout: "Affordable scheduling & dispatch",
  },
  kickserv: {
    name: "Kickserv",
    logoSrc: "/Logos/kickserv.jpeg",
    rating: "4.3",
    startingPrice: "From ~$55/mo",
    visitUrl: "https://www.kickserv.com",
    defaultStandout: "CRM-style customer & job tracking",
  },
  fieldpulse: {
    name: "FieldPulse",
    logoSrc: "/Logos/fieldpulse.png",
    rating: "4.4",
    startingPrice: "From ~$99/mo",
    visitUrl: "https://fieldpulse.com",
    defaultStandout: "Dispatch depth for ops-heavy trades",
  },
  servicetrade: {
    name: "ServiceTrade",
    logoSrc: "/Logos/servicetrade.jpeg",
    rating: "4.5",
    startingPrice: "Custom pricing",
    visitUrl: "https://servicetrade.com",
    defaultStandout: "Commercial service & inspections",
  },
  "workwave-service": {
    name: "WorkWave Service",
    logoSrc: "/Logos/workwave.jpeg",
    rating: "4.3",
    startingPrice: "Custom pricing",
    visitUrl: "https://www.workwave.com",
    defaultStandout: "Route-based fleet operations",
  },
  buildops: {
    name: "BuildOps",
    logoSrc: "/Logos/buildops.jpeg",
    rating: "4.4",
    startingPrice: "Custom pricing",
    visitUrl: "https://buildops.com",
    defaultStandout: "Commercial mechanical & construction",
  },
  connecteam: {
    name: "Connecteam",
    logoSrc: "/Logos/connecteam.jpeg",
    rating: "4.3",
    startingPrice: "From ~$29/mo",
    visitUrl: "https://connecteam.com",
    defaultStandout: "Deskless workforce & scheduling",
  },
  simpro: {
    name: "Simpro",
    logoSrc: "/Logos/simpro.jpeg",
    rating: "4.5",
    startingPrice: "Custom pricing",
    visitUrl: "https://www.simprogroup.com",
    defaultStandout: "Jobs, projects, inventory, field execution",
  },
  zuper: {
    name: "Zuper",
    logoSrc: "/Logos/zuper.jpeg",
    rating: "4.4",
    startingPrice: "Custom / tiered",
    visitUrl: "https://www.zuper.co",
    defaultStandout: "Configurable FSM & integrations",
  },
  "oracle-field-service": {
    name: "Oracle Field Service",
    logoSrc: "/Logos/oracle.png",
    rating: "4.4",
    startingPrice: "Custom pricing",
    visitUrl: "https://www.oracle.com/industries/field-service-management/",
    defaultStandout: "Enterprise scheduling & assets",
  },
} as const;

export type FsProductSlug = keyof typeof FS_PRODUCT_CORE;

export type FsProductPick = {
  slug: FsProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

type TradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  picks: [FsProductPick, FsProductPick, FsProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
  topPicksSub?: string;
  editorialSub?: string;
  whyThesePicksSub?: string;
};

const COMMON_FS_GUIDES: BestForGuideLink[] = [
  { label: "How to choose field service management software", href: "/field-service/guides/how-to-choose-field-service-software" },
  { label: "Dispatch and capacity planning for field service", href: "/field-service/guides/dispatch-and-capacity-planning-for-field-service" },
  { label: "Mobile field service apps for technicians", href: "/field-service/guides/mobile-field-service-apps-for-technicians" },
];

type FsComparePair = { label: string; compareSlug: string; products: [FsProductSlug, FsProductSlug] };

const FS_COMPARISON_PAIRS: FsComparePair[] = [
  { label: "Jobber vs Housecall Pro", compareSlug: "jobber-vs-housecall-pro", products: ["jobber", "housecall-pro"] },
  { label: "Jobber vs ServiceTitan", compareSlug: "jobber-vs-servicetitan", products: ["jobber", "servicetitan"] },
  { label: "Housecall Pro vs ServiceTitan", compareSlug: "housecall-pro-vs-servicetitan", products: ["housecall-pro", "servicetitan"] },
  { label: "Jobber vs Workiz", compareSlug: "jobber-vs-workiz", products: ["jobber", "workiz"] },
  { label: "ServiceTitan vs Service Fusion", compareSlug: "servicetitan-vs-service-fusion", products: ["servicetitan", "service-fusion"] },
  { label: "Kickserv vs Jobber", compareSlug: "kickserv-vs-jobber", products: ["kickserv", "jobber"] },
  { label: "FieldPulse vs Jobber", compareSlug: "fieldpulse-vs-jobber", products: ["fieldpulse", "jobber"] },
  { label: "FieldPulse vs Housecall Pro", compareSlug: "fieldpulse-vs-housecall-pro", products: ["fieldpulse", "housecall-pro"] },
  { label: "ServiceTrade vs ServiceTitan", compareSlug: "servicetrade-vs-servicetitan", products: ["servicetrade", "servicetitan"] },
  { label: "WorkWave Service vs Jobber", compareSlug: "workwave-service-vs-jobber", products: ["workwave-service", "jobber"] },
  { label: "BuildOps vs ServiceTitan", compareSlug: "buildops-vs-servicetitan", products: ["buildops", "servicetitan"] },
  { label: "BuildOps vs Service Fusion", compareSlug: "buildops-vs-service-fusion", products: ["buildops", "service-fusion"] },
  { label: "Connecteam vs Jobber", compareSlug: "connecteam-vs-jobber", products: ["connecteam", "jobber"] },
  { label: "Connecteam vs Housecall Pro", compareSlug: "connecteam-vs-housecall-pro", products: ["connecteam", "housecall-pro"] },
  { label: "Connecteam vs ServiceTitan", compareSlug: "connecteam-vs-servicetitan", products: ["connecteam", "servicetitan"] },
  { label: "Zuper vs Jobber", compareSlug: "zuper-vs-jobber", products: ["zuper", "jobber"] },
  { label: "Simpro vs ServiceTitan", compareSlug: "simpro-vs-servicetitan", products: ["simpro", "servicetitan"] },
  { label: "Oracle Field Service vs ServiceTitan", compareSlug: "oracle-field-service-vs-servicetitan", products: ["oracle-field-service", "servicetitan"] },
  { label: "Simpro vs Service Fusion", compareSlug: "simpro-vs-service-fusion", products: ["simpro", "service-fusion"] },
  { label: "BuildOps vs Simpro", compareSlug: "buildops-vs-simpro", products: ["buildops", "simpro"] },
];

const DEFAULT_FS_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
  { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
  { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
];

const REVIEW_FILL_ORDER: FsProductSlug[] = [
  "jobber",
  "housecall-pro",
  "servicetitan",
  "service-fusion",
  "workiz",
  "kickserv",
  "fieldpulse",
  "servicetrade",
  "workwave-service",
  "buildops",
  "connecteam",
  "simpro",
  "zuper",
  "oracle-field-service",
];

function buildRelatedComparisons(featured: FsProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = FS_COMPARISON_PAIRS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getFieldServiceCompareUrl(c.compareSlug), score };
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
  for (const f of DEFAULT_FS_COMPARISON_FALLBACK) {
    if (out.length >= 3) break;
    if (seen.has(f.href)) continue;
    seen.add(f.href);
    out.push(f);
  }
  return out;
}

function buildRelatedReviews(featured: FsProductSlug[]): BestForReviewLink[] {
  const ordered: FsProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: FS_PRODUCT_CORE[s].name,
    href: getFieldServiceReviewUrl(s),
  }));
}

export function buildFieldServiceTradeProps(p: TradeConfig): BestForTemplateProps {
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = FS_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getFieldServiceReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = FS_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getFieldServiceReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: FS_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const relatedGuides = [...(p.extraGuides ?? []), ...COMMON_FS_GUIDES].filter(
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
    topPicksSub: p.topPicksSub ?? "Our top field service picks for this trade.",
    editorialSub: p.editorialSub ?? "What to look for when you choose field service software for your operation.",
    whyThesePicksSub: p.whyThesePicksSub ?? "Why we recommend these tools for your use case.",
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: buildRelatedReviews(featuredSlugs),
    relatedComparisons: buildRelatedComparisons(featuredSlugs),
    relatedGuides,
    faqItems: p.faqItems,
  };
}
