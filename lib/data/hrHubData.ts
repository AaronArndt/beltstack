/**
 * HR software hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/hr/page.tsx.
 */

import { getHrReviewUrl, getHrCompareUrl, getHrBestForUrl } from "@/lib/routes";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import type { FeaturedPickRef, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";

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

/** Top HR picks — slugs resolve to canonical `hrBestSoftware` data */
export const HR_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "gusto" },
  { slug: "bamboohr" },
  { slug: "rippling" },
  { slug: "deel" },
  { slug: "justworks" },
];

/** Comparison table rows for the hub — canonical pick data. */
export const HR_COMPARISON_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("hr", [
    "gusto",
    "bamboohr",
    "rippling",
    "deel",
    "adp-workforce-now",
    "paychex",
    "trinet",
    "justworks",
    "zenefits",
  ]).map(toHubComparisonTableRow),
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
  { label: "Remote companies", href: "/hr/guides/hr-software-for-remote-teams" },
];

export const HR_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "Browse by company type", links: HR_BY_BUSINESS_TYPE },
];

/** Editorial “best HR by use case” — workforce model and compliance load, not org label alone. */
export const HR_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Payroll + benefits in one SMB stack",
    body: "If contractors are rare and W-2 payroll is central, evaluate onboarding quality, tax filing inclusion, and benefits admin—not just per-seat HR features. All-in-one pricing can beat piecing together payroll + HRIS.",
    links: [
      { label: "Best HR for small business →", href: getHrBestForUrl("small-business") },
      { label: "Gusto review →", href: getHrReviewUrl("gusto") },
    ],
  },
  {
    title: "People operations and hiring-first teams",
    body: "When ATS, performance, and culture tools matter more than running payroll in-app, an HRIS can be the spine—with payroll integrated or best-of-breed. Compare data model depth and employee self-service.",
    links: [
      { label: "BambooHR review →", href: getHrReviewUrl("bamboohr") },
      { label: "Gusto vs BambooHR →", href: getHrCompareUrl("gusto-vs-bamboohr") },
    ],
  },
  {
    title: "Startups with changing roles and light process",
    body: "Speed and flexibility beat enterprise modules you won’t staff. Watch how permissions scale and whether you’ll migrate when headcount jumps.",
    links: [
      { label: "Best HR for startups →", href: getHrBestForUrl("startups") },
      { label: "Full rankings →", href: "/hr/best-hr-software" },
    ],
  },
  {
    title: "Global hiring and employer-of-record complexity",
    body: "Contracts, currencies, and local compliance differ from domestic payroll. Evaluate whether you need EOR-first tooling versus HR with add-on global payroll.",
    links: [
      { label: "Best HR for global teams →", href: getHrBestForUrl("global-teams") },
      { label: "Deel vs Rippling →", href: getHrCompareUrl("deel-vs-rippling") },
    ],
  },
  {
    title: "Distributed and remote-first companies",
    body: "Async onboarding, equipment workflows, and clear time-off policies reduce friction. Prefer integrations with IT and payroll that match how async you really are.",
    links: [
      { label: "Best HR for global & distributed teams →", href: getHrBestForUrl("global-teams") },
      { label: "Rippling review →", href: getHrReviewUrl("rippling") },
    ],
  },
  {
    title: "Agencies and project-based staffing",
    body: "Contractor mixes, multiple entities, or rapid staffing swings stress lightweight HR. Map whether you need scheduling, permissions, or compliance help specific to client work.",
    links: [
      { label: "Best HR for agencies →", href: getHrBestForUrl("agencies") },
      { label: "Rippling vs Gusto →", href: getHrCompareUrl("rippling-vs-gusto") },
    ],
  },
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
    slug: "how-to-choose-hr-software",
    title: "How to Choose HR Software",
    description:
      "Evaluation framework: payroll vs HRIS vs PEO, compliance scope, and total cost—not just feature checklists.",
    href: `${HR_GUIDES_BASE}/how-to-choose-hr-software`,
  },
  {
    slug: "peo-vs-hr-software",
    title: "PEO vs HR Software",
    description:
      "When co-employment and bundled benefits beat software-only approaches—and what you give up either way.",
    href: `${HR_GUIDES_BASE}/peo-vs-hr-software`,
  },
  {
    slug: "hr-software-for-startups",
    title: "HR Software for Startups",
    description:
      "Lean hiring, role changes, and tool sprawl—implementation concepts for early-stage teams.",
    href: `${HR_GUIDES_BASE}/hr-software-for-startups`,
  },
  {
    slug: "hr-software-for-remote-teams",
    title: "HR Software for Remote Teams",
    description:
      "Onboarding, equipment, and policy distribution when people rarely share an office.",
    href: `${HR_GUIDES_BASE}/hr-software-for-remote-teams`,
  },
  {
    slug: "hr-software-for-global-teams",
    title: "HR Software for Global Teams",
    description:
      "Payroll currencies, contracts, and compliance across borders—what to validate before you buy.",
    href: `${HR_GUIDES_BASE}/hr-software-for-global-teams`,
  },
  {
    slug: "bamboohr-alternatives",
    title: "BambooHR Alternatives",
    description:
      "Tradeoffs if you’re comparing or migrating off BambooHR: hiring depth, payroll partners, and pricing cliffs.",
    href: `${HR_GUIDES_BASE}/bamboohr-alternatives`,
  },
  {
    slug: "gusto-alternatives",
    title: "Gusto Alternatives",
    description:
      "When payroll-first SMB stacks need different benefits, states, or global paths than Gusto optimizes for.",
    href: `${HR_GUIDES_BASE}/gusto-alternatives`,
  },
  {
    slug: "hr-guides",
    title: "All HR Guides",
    description: "Browse the full library of HR software guides and resources.",
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
