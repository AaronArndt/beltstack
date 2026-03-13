/**
 * HR software hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/hr/page.tsx.
 */

import { getHrReviewUrl, getHrCompareUrl, getHrBestForUrl } from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

// ——— Logo paths (public/Logos/) ———
const LOGOS = {
  gusto: "/Logos/gusto.jpeg",
  bamboohr: "/Logos/bamboohr.png",
  rippling: "/Logos/rippling.jpeg",
  deel: "/Logos/deel.jpeg",
  adp: "/Logos/adp.jpeg",
  paychex: "/Logos/paychex.jpeg",
  trinet: "/Logos/trinet.jpeg",
  justworks: "/Logos/justworks.jpeg",
  zenefits: "/Logos/zenefits.jpeg",
} as const;

/** Top HR picks for the hub hero section. */
export const HR_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "gusto",
    name: "Gusto",
    badge: "Best overall HR platform for SMBs",
    descriptor: "Payroll, benefits, hiring, and HR in one place for small and midsize businesses.",
    rating: "4.8",
    price: "From ~$40/mo",
    features: ["Payroll & tax", "Benefits", "Onboarding"],
    reviewHref: getHrReviewUrl("gusto"),
    compareHref: getHrCompareUrl("gusto-vs-bamboohr"),
    logoSrc: LOGOS.gusto,
    visitUrl: "https://gusto.com",
  },
  {
    slug: "bamboohr",
    name: "BambooHR",
    badge: "Best HR management system",
    descriptor: "People-focused HRIS with hiring, onboarding, time tracking, and culture tools.",
    rating: "4.6",
    price: "Quote",
    features: ["Applicant tracking", "Onboarding", "Time & PTO"],
    reviewHref: getHrReviewUrl("bamboohr"),
    compareHref: getHrCompareUrl("gusto-vs-bamboohr"),
    logoSrc: LOGOS.bamboohr,
    visitUrl: "https://www.bamboohr.com",
  },
  {
    slug: "rippling",
    name: "Rippling",
    badge: "Best HR + IT automation",
    descriptor: "Unified HR, payroll, benefits, and IT provisioning in one platform.",
    rating: "4.6",
    price: "Quote",
    features: ["HR & payroll", "IT & devices", "Integrations"],
    reviewHref: getHrReviewUrl("rippling"),
    compareHref: getHrCompareUrl("rippling-vs-gusto"),
    logoSrc: LOGOS.rippling,
    visitUrl: "https://www.rippling.com",
  },
  {
    slug: "deel",
    name: "Deel",
    badge: "Best for global hiring and payroll",
    descriptor: "Hire, pay, and manage global employees and contractors in one system.",
    rating: "4.6",
    price: "Quote",
    features: ["Global payroll", "EOR & contractors", "Compliance"],
    reviewHref: getHrReviewUrl("deel"),
    compareHref: getHrCompareUrl("deel-vs-rippling"),
    logoSrc: LOGOS.deel,
    visitUrl: "https://www.deel.com",
  },
  {
    slug: "justworks",
    name: "Justworks",
    badge: "Best PEO solution",
    descriptor: "PEO with payroll, benefits, compliance, and HR support for growing teams.",
    rating: "4.5",
    price: "Quote",
    features: ["PEO benefits", "Payroll", "Compliance"],
    reviewHref: getHrReviewUrl("justworks"),
    compareHref: getHrCompareUrl("gusto-vs-justworks"),
    logoSrc: LOGOS.justworks,
    visitUrl: "https://justworks.com",
  },
];

/** Comparison table rows for the hub. */
export const HR_COMPARISON_ROWS: ComparisonTableRow[] = [
  { tool: "Gusto", bestFor: "Best overall for SMBs", price: "From ~$40/mo", rating: "4.8", slug: "gusto", logoSrc: LOGOS.gusto },
  { tool: "BambooHR", bestFor: "HR management system", price: "Quote", rating: "4.6", slug: "bamboohr", logoSrc: LOGOS.bamboohr },
  { tool: "Rippling", bestFor: "HR + IT automation", price: "Quote", rating: "4.6", slug: "rippling", logoSrc: LOGOS.rippling },
  { tool: "Deel", bestFor: "Global hiring & payroll", price: "Quote", rating: "4.6", slug: "deel", logoSrc: LOGOS.deel },
  { tool: "ADP Workforce Now", bestFor: "Enterprise HR & payroll", price: "Quote", rating: "4.5", slug: "adp-workforce-now", logoSrc: LOGOS.adp },
  { tool: "Paychex", bestFor: "Full-service payroll & HR", price: "Quote", rating: "4.4", slug: "paychex", logoSrc: LOGOS.paychex },
  { tool: "TriNet", bestFor: "PEO for mid-market", price: "Quote", rating: "4.4", slug: "trinet", logoSrc: LOGOS.trinet },
  { tool: "Justworks", bestFor: "PEO solution", price: "Quote", rating: "4.5", slug: "justworks", logoSrc: LOGOS.justworks },
  { tool: "Zenefits", bestFor: "All-in-one HR platform", price: "From ~$8/mo", rating: "4.3", slug: "zenefits", logoSrc: LOGOS.zenefits },
];

/** Best HR software by use case. */
export const HR_SCENARIO_LINKS = [
  { label: "Best HR software (roundup)", href: "/hr/best-hr-software" },
  { label: "Compare HR software", href: "/hr/compare" },
  { label: "Best HR software by use case", href: "/hr/best-for" },
  { label: "Best for freelancers", href: getHrBestForUrl("freelancers") },
  { label: "Best for small business", href: getHrBestForUrl("small-business") },
  { label: "Best for startups", href: getHrBestForUrl("startups") },
  { label: "Best for agencies", href: getHrBestForUrl("agencies") },
  { label: "Best for global teams", href: getHrBestForUrl("global-teams") },
] as const;

/** HR by business type. */
export const HR_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Freelancers", href: getHrBestForUrl("freelancers") },
  { label: "Small business", href: getHrBestForUrl("small-business") },
  { label: "Startups", href: getHrBestForUrl("startups") },
  { label: "Agencies", href: getHrBestForUrl("agencies") },
  { label: "Global teams", href: getHrBestForUrl("global-teams") },
  { label: "Remote companies", href: getHrBestForUrl("remote-teams") },
];

export const HR_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "By business type", links: HR_BY_BUSINESS_TYPE },
];

/** Card data for Popular HR comparisons. */
export type HrPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const HR_POPULAR_COMPARISONS: HrPopularComparisonCard[] = [
  {
    slug: "gusto-vs-bamboohr",
    productA: { name: "Gusto", logoSrc: LOGOS.gusto },
    productB: { name: "BambooHR", logoSrc: LOGOS.bamboohr },
    summaryParagraph:
      "Gusto and BambooHR both serve SMBs: Gusto emphasizes payroll and benefits; BambooHR is a strong HRIS with hiring and culture tools. Choose Gusto for all-in-one payroll and HR; BambooHR for deeper people management.",
    href: getHrCompareUrl("gusto-vs-bamboohr"),
  },
  {
    slug: "rippling-vs-gusto",
    productA: { name: "Rippling", logoSrc: LOGOS.rippling },
    productB: { name: "Gusto", logoSrc: LOGOS.gusto },
    summaryParagraph:
      "Rippling unifies HR, payroll, and IT; Gusto focuses on payroll and benefits for small businesses. Rippling suits companies that want one system for people and devices; Gusto is often simpler for payroll-first SMBs.",
    href: getHrCompareUrl("rippling-vs-gusto"),
  },
  {
    slug: "bamboohr-vs-rippling",
    productA: { name: "BambooHR", logoSrc: LOGOS.bamboohr },
    productB: { name: "Rippling", logoSrc: LOGOS.rippling },
    summaryParagraph:
      "BambooHR is a people-focused HRIS; Rippling adds payroll, benefits, and IT. Both scale with growing teams. BambooHR excels at culture and hiring; Rippling at automation and cross-system workflows.",
    href: getHrCompareUrl("bamboohr-vs-rippling"),
  },
  {
    slug: "adp-vs-paychex",
    productA: { name: "ADP", logoSrc: LOGOS.adp },
    productB: { name: "Paychex", logoSrc: LOGOS.paychex },
    summaryParagraph:
      "ADP and Paychex are established enterprise payroll and HR providers. Both offer full-service payroll, benefits, and compliance. Compare pricing and support models for your size and industry.",
    href: getHrCompareUrl("adp-vs-paychex"),
  },
  {
    slug: "deel-vs-rippling",
    productA: { name: "Deel", logoSrc: LOGOS.deel },
    productB: { name: "Rippling", logoSrc: LOGOS.rippling },
    summaryParagraph:
      "Deel specializes in global hiring and payroll; Rippling covers HR, payroll, and IT domestically and internationally. Deel is strongest for distributed and global teams; Rippling for unified HR and IT automation.",
    href: getHrCompareUrl("deel-vs-rippling"),
  },
];

/** FAQ items for the hub. */
export const HR_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is HR software?",
    a: "HR software helps businesses manage people operations: employee data, hiring and onboarding, payroll, benefits, time off, compliance, and reporting. It can be a standalone HRIS (e.g. BambooHR), an all-in-one platform with payroll (e.g. Gusto, Rippling), or a PEO that bundles HR and benefits (e.g. Justworks, TriNet).",
  },
  {
    q: "What HR software is best for small businesses?",
    a: "Gusto is a top choice for small businesses: it combines payroll, benefits, hiring, and HR in one place with transparent pricing. BambooHR is strong if you want a dedicated HRIS with great hiring and culture tools. Rippling suits teams that also need IT and device management. Compare options in our best HR software roundup.",
  },
  {
    q: "Do HR tools include payroll?",
    a: "Many do. Gusto, Rippling, Deel, ADP, Paychex, Justworks, and Zenefits all include or integrate payroll. Some HRIS tools (e.g. BambooHR) focus on people data and hiring and integrate with separate payroll providers. Check each product for payroll inclusion or partnerships.",
  },
  {
    q: "What is the difference between HR software and a PEO?",
    a: "HR software is a platform you use to manage HR tasks (data, hiring, time off, etc.); you may still run payroll and benefits yourself or with separate tools. A PEO (professional employer organization) like Justworks or TriNet co-employs your workers and provides payroll, benefits, and compliance under their umbrella—often giving small teams access to enterprise-level benefits and support.",
  },
];

/** Guide cards for the HR Guides section on the hub. */
export type HrGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

const HR_GUIDES_BASE = "/hr/guides";

export const HR_HUB_GUIDES: HrGuideItem[] = [
  {
    slug: "hr-guides",
    title: "HR Software Guides",
    description: "Browse guides on how to choose and use HR software for small businesses, startups, and growing teams.",
    href: HR_GUIDES_BASE,
  },
];

/** Methodology for the hub. */
export const HR_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review HR software",
  sub: "Transparent process, people-operations criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly. We evaluate HR software on ease of use, hiring and onboarding, payroll and benefits integration, compliance support, and automation and integrations.",
  bullets: [
    "We assess core workflows: employee data, hiring and onboarding, payroll and benefits setup, and reporting.",
    "We compare pricing models, feature sets, and support so you understand cost and capability at your size.",
    "We look at integrations with accounting, time tracking, and other business tools.",
  ],
};
