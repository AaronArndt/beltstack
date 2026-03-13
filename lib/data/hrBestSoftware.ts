import { getHrReviewUrl, getHrCompareUrl, getHrBestForUrl } from "@/lib/routes";

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

export type BestHrPick = {
  slug: string;
  name: string;
  badge: string;
  description: string;
  rating: string;
  startingPrice: string;
  reviewHref: string;
  visitUrl: string;
  logoSrc: string;
  compareSlugs: string[];
  editorialParagraph: string;
  pros: string[];
  cons: string[];
  pricingSummary: string;
};

export type HrComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export const TOP_PICKS: BestHrPick[] = [
  {
    slug: "gusto",
    name: "Gusto",
    badge: "Best overall HR software for SMBs",
    description:
      "Payroll, benefits, hiring, and HR in one place for small and midsize businesses.",
    rating: "4.8",
    startingPrice: "From ~$40/mo",
    reviewHref: getHrReviewUrl("gusto"),
    visitUrl: "https://gusto.com",
    logoSrc: LOGOS.gusto,
    compareSlugs: ["gusto-vs-bamboohr", "rippling-vs-gusto"],
    editorialParagraph:
      "Gusto is our top pick for most small and midsize businesses that want all-in-one HR. It combines payroll, benefits, hiring, and people management in one platform with clear pricing and strong support. Setup is straightforward, and it scales from a handful of employees to hundreds. Ideal when you want one vendor for payroll, benefits admin, and core HR without enterprise complexity.",
    pros: [
      "All-in-one payroll, benefits, and HR",
      "Clear pricing and good support",
      "Hiring and onboarding included",
    ],
    cons: [
      "Less IT/device management than Rippling",
      "Global payroll via partners, not native",
    ],
    pricingSummary:
      "Gusto pricing typically starts around $40/month plus per-person fees; plans include payroll, tax filing, benefits, and HR tools. Check Gusto’s site for current tiers.",
  },
  {
    slug: "bamboohr",
    name: "BambooHR",
    badge: "Best HR management system",
    description:
      "People-focused HRIS with hiring, onboarding, time tracking, and culture tools.",
    rating: "4.6",
    startingPrice: "Quote",
    reviewHref: getHrReviewUrl("bamboohr"),
    visitUrl: "https://www.bamboohr.com",
    logoSrc: LOGOS.bamboohr,
    compareSlugs: ["gusto-vs-bamboohr", "bamboohr-vs-rippling"],
    editorialParagraph:
      "BambooHR is the go-to when you want a dedicated HR management system rather than payroll-first. Applicant tracking, onboarding, time off, performance, and culture features are strong. It integrates with many payroll providers so you can pair it with Gusto, Rippling, or others. Best for companies that prioritize people operations and hiring over all-in-one payroll.",
    pros: [
      "Strong hiring and onboarding workflows",
      "Time tracking and PTO built in",
      "Culture and performance tools",
    ],
    cons: [
      "Payroll is via integration, not built-in",
      "Pricing is quote-based",
    ],
    pricingSummary:
      "BambooHR uses quote-based pricing; plans scale with employee count and modules. Contact sales for current pricing.",
  },
  {
    slug: "rippling",
    name: "Rippling",
    badge: "Best HR automation platform",
    description:
      "Unified HR, payroll, benefits, and IT provisioning in one platform.",
    rating: "4.6",
    startingPrice: "Quote",
    reviewHref: getHrReviewUrl("rippling"),
    visitUrl: "https://www.rippling.com",
    logoSrc: LOGOS.rippling,
    compareSlugs: ["rippling-vs-gusto", "bamboohr-vs-rippling", "deel-vs-rippling"],
    editorialParagraph:
      "Rippling stands out for unifying HR, payroll, benefits, and IT—onboarding can provision devices and apps automatically. It suits growing companies that want one system for people and technology. Pricing is quote-based; the platform is powerful but can be more than small teams need. Choose Rippling when you want automation across HR and IT.",
    pros: [
      "HR, payroll, benefits, and IT in one",
      "Strong automation and workflows",
      "Global workforce support",
    ],
    cons: [
      "Quote-based pricing; can be complex",
      "Heavier than Gusto for payroll-only needs",
    ],
    pricingSummary:
      "Rippling uses quote-based pricing; cost depends on modules (HR, payroll, benefits, IT) and headcount. Contact Rippling for a quote.",
  },
  {
    slug: "deel",
    name: "Deel",
    badge: "Best for global HR and hiring",
    description:
      "Hire, pay, and manage global employees and contractors in one system.",
    rating: "4.6",
    startingPrice: "Quote",
    reviewHref: getHrReviewUrl("deel"),
    visitUrl: "https://www.deel.com",
    logoSrc: LOGOS.deel,
    compareSlugs: ["deel-vs-rippling"],
    editorialParagraph:
      "Deel is built for global teams: hire and pay employees and contractors in hundreds of countries through EOR and contractor management. Compliance, contracts, and payments are centralized. It’s the top choice when your workforce is distributed across borders and you want one platform for hiring and payroll. Domestic-only teams may find Gusto or Rippling simpler.",
    pros: [
      "Global payroll and EOR",
      "Contractor and employee in one place",
      "Compliance and contracts handled",
    ],
    cons: [
      "Focused on global; domestic-only may overpay",
      "Quote-based pricing",
    ],
    pricingSummary:
      "Deel pricing is quote-based and varies by country, employment type (EOR vs contractor), and headcount. Request a quote on Deel’s site.",
  },
  {
    slug: "justworks",
    name: "Justworks",
    badge: "Best PEO for small businesses",
    description:
      "PEO with payroll, benefits, compliance, and HR support for growing teams.",
    rating: "4.5",
    startingPrice: "Quote",
    reviewHref: getHrReviewUrl("justworks"),
    visitUrl: "https://justworks.com",
    logoSrc: LOGOS.justworks,
    compareSlugs: ["gusto-vs-justworks"],
    editorialParagraph:
      "Justworks is a PEO that bundles payroll, benefits, compliance, and HR support so small businesses can offer enterprise-level benefits and reduce compliance burden. Co-employment means Justworks becomes the employer of record for benefits and payroll administration. A good fit when you want a single partner for benefits, payroll, and compliance without building an internal HR team.",
    pros: [
      "PEO benefits and compliance",
      "Payroll and HR support included",
      "Simple for small teams",
    ],
    cons: [
      "Co-employment model not for everyone",
      "Quote-based pricing",
    ],
    pricingSummary:
      "Justworks pricing is quote-based and typically includes per-employee fees for PEO services, payroll, and benefits. Contact Justworks for current plans.",
  },
];

/** Comparison table: 9 HR tools. */
export const COMPARISON_TABLE_ROWS: HrComparisonTableRow[] = [
  { slug: "gusto", name: "Gusto", logoSrc: LOGOS.gusto, bestFor: "Best overall for SMBs", startingPrice: "From ~$40/mo", rating: "4.8", reviewHref: getHrReviewUrl("gusto") },
  { slug: "bamboohr", name: "BambooHR", logoSrc: LOGOS.bamboohr, bestFor: "HR management system", startingPrice: "Quote", rating: "4.6", reviewHref: getHrReviewUrl("bamboohr") },
  { slug: "rippling", name: "Rippling", logoSrc: LOGOS.rippling, bestFor: "HR + IT automation", startingPrice: "Quote", rating: "4.6", reviewHref: getHrReviewUrl("rippling") },
  { slug: "deel", name: "Deel", logoSrc: LOGOS.deel, bestFor: "Global HR and hiring", startingPrice: "Quote", rating: "4.6", reviewHref: getHrReviewUrl("deel") },
  { slug: "adp-workforce-now", name: "ADP Workforce Now", logoSrc: LOGOS.adp, bestFor: "Enterprise HR & payroll", startingPrice: "Quote", rating: "4.5", reviewHref: getHrReviewUrl("adp-workforce-now") },
  { slug: "paychex", name: "Paychex", logoSrc: LOGOS.paychex, bestFor: "Full-service payroll & HR", startingPrice: "Quote", rating: "4.4", reviewHref: getHrReviewUrl("paychex") },
  { slug: "trinet", name: "TriNet", logoSrc: LOGOS.trinet, bestFor: "PEO for mid-market", startingPrice: "Quote", rating: "4.4", reviewHref: getHrReviewUrl("trinet") },
  { slug: "justworks", name: "Justworks", logoSrc: LOGOS.justworks, bestFor: "PEO for small businesses", startingPrice: "Quote", rating: "4.5", reviewHref: getHrReviewUrl("justworks") },
  { slug: "zenefits", name: "Zenefits", logoSrc: LOGOS.zenefits, bestFor: "All-in-one HR platform", startingPrice: "From ~$8/mo", rating: "4.3", reviewHref: getHrReviewUrl("zenefits") },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best HR software (roundup)", href: "/hr/best-hr-software", description: "Full rankings and top picks for HR software." },
  { label: "Compare HR software", href: "/hr/compare", description: "Side-by-side comparisons of popular HR tools." },
  { label: "HR guides", href: "/hr/guides", description: "How to choose and use HR software." },
  { label: "Best HR software by use case", href: "/hr/best-for", description: "Browse HR picks by use case." },
  { label: "Best for freelancers", href: getHrBestForUrl("freelancers"), description: "HR tools that fit freelancers and solos." },
  { label: "Best for small business", href: getHrBestForUrl("small-business"), description: "HR software for small teams." },
  { label: "Best for startups", href: getHrBestForUrl("startups"), description: "HR platforms for startups." },
  { label: "Best for agencies", href: getHrBestForUrl("agencies"), description: "HR software for agencies." },
  { label: "Best for global teams", href: getHrBestForUrl("global-teams"), description: "HR and payroll for distributed teams." },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
  { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
  { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is HR software?",
    a: "HR software helps businesses manage people operations: employee data, hiring and onboarding, payroll, benefits, time off, and compliance. It can be a standalone HRIS (e.g. BambooHR), an all-in-one platform with payroll (e.g. Gusto, Rippling), or a PEO that bundles HR and benefits (e.g. Justworks, TriNet).",
  },
  {
    q: "What HR software is best for small businesses?",
    a: "Gusto is a top choice for small businesses: it combines payroll, benefits, hiring, and HR in one place with clear pricing. BambooHR is strong if you want a dedicated HRIS with excellent hiring and culture tools. Rippling suits teams that also need IT and device management. Compare options in our best HR software roundup and use-case pages.",
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
