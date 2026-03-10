import { getPayrollReviewUrl, getPayrollBestForUrl } from "@/lib/routes";
import { getPayrollCompareUrl } from "@/lib/data/payrollComparisons";

export type BestPayrollPick = {
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
  /** For comparison table */
  payrollTypes: string;
  standoutFeature: string;
  /** Editorial paragraph for the individual section */
  editorialParagraph: string;
  pros: string[];
  cons: string[];
  pricingSummary: string;
};

export const TOP_PICKS: BestPayrollPick[] = [
  {
    slug: "gusto",
    name: "Gusto",
    badge: "Best overall",
    description: "All-in-one payroll, benefits, and HR with transparent pricing and a modern interface. Strong for small businesses and contractors.",
    rating: "4.8",
    startingPrice: "$40/mo",
    reviewHref: getPayrollReviewUrl("gusto"),
    visitUrl: "https://gusto.com",
    logoSrc: "/Logos/gusto.jpeg",
    compareSlugs: ["gusto-vs-quickbooks-payroll", "gusto-vs-onpay", "gusto-vs-adp", "gusto-vs-paychex"],
    payrollTypes: "W-2, 1099",
    standoutFeature: "All-in-one payroll, benefits, and HR; transparent pricing",
    editorialParagraph:
      "Gusto is our top pick for most small businesses and growing teams. It combines payroll, benefits, and HR in one platform with published pricing—no sales call required. Setup is straightforward, tax filing is automatic, and contractor support is built in. If you want a single place to run payroll, offer benefits, and manage onboarding, Gusto is the default choice.",
    pros: [
      "All-in-one payroll, benefits, and HR with transparent pricing",
      "Automatic tax filing and contractor self-service",
      "Modern interface and straightforward setup",
      "No sales call required; published plans",
    ],
    cons: [
      "Can get expensive with add-ons and higher headcount",
      "Some advanced HR features on higher tiers only",
      "Less hand-holding than traditional providers",
    ],
    pricingSummary:
      "Gusto uses base-plus-per-person pricing; plans often start around $40/month base plus per-employee fees. Add-ons for time tracking, benefits, and contractor payments may apply. Check current pricing for your team size.",
  },
  {
    slug: "quickbooks-payroll",
    name: "QuickBooks Payroll",
    badge: "Best for QuickBooks users",
    description: "Payroll that runs inside QuickBooks so your books and pay runs stay in one place. Ideal if you already use QuickBooks for accounting.",
    rating: "4.6",
    startingPrice: "$30/mo",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    visitUrl: "https://quickbooks.intuit.com/payroll",
    logoSrc: "/Logos/quickbooks.png",
    compareSlugs: ["gusto-vs-quickbooks-payroll", "quickbooks-payroll-vs-onpay"],
    payrollTypes: "W-2, 1099",
    standoutFeature: "Native QuickBooks integration; job costing and books in one place",
    editorialParagraph:
      "QuickBooks Payroll is the obvious fit when you already run your books in QuickBooks. Payroll posts to the right accounts and jobs with no sync or export, and labor cost flows straight into job costing. Pricing is competitive at entry, and the workflow is seamless for anyone who lives in QuickBooks. If you're not on QuickBooks, other options often offer better standalone value.",
    pros: [
      "Native QuickBooks integration; payroll and books in one place",
      "Labor cost flows into job costing automatically",
      "Familiar to many small businesses and accountants",
      "Same-day direct deposit available",
    ],
    cons: [
      "Tied to QuickBooks; not ideal if you use other accounting software",
      "Add-ons and higher tiers can increase cost",
      "Less all-in-one HR than Gusto or Rippling",
    ],
    pricingSummary:
      "QuickBooks Payroll plans start around $30/month; pricing varies by tier and add-ons like time tracking or tax filing. Compare plans on Intuit's site for your user count.",
  },
  {
    slug: "onpay",
    name: "OnPay",
    badge: "Best value",
    description: "Straightforward payroll with flat pricing and no tier maze. Good for small teams that want simplicity and predictable costs.",
    rating: "4.5",
    startingPrice: "$40/mo",
    reviewHref: getPayrollReviewUrl("onpay"),
    visitUrl: "https://onpay.com",
    logoSrc: "/Logos/onpay.jpeg",
    compareSlugs: ["gusto-vs-onpay", "quickbooks-payroll-vs-onpay", "paychex-vs-onpay"],
    payrollTypes: "W-2, 1099",
    standoutFeature: "Flat pricing; one plan with no add-on maze",
    editorialParagraph:
      "OnPay stands out for value and clarity. One main plan, base-plus-per-person pricing you can see upfront, and solid payroll plus benefits without the complexity of tiered plans. It's a strong alternative to Gusto if you want similar ease of use with a simpler pricing structure. Support is included, and it works with any accounting software.",
    pros: [
      "Flat pricing; one plan with no add-on maze",
      "Unlimited pay runs and solid support included",
      "Works with any accounting software",
      "Straightforward setup and predictable costs",
    ],
    cons: [
      "Smaller brand than Gusto or ADP",
      "Fewer advanced HR modules than enterprise tools",
      "Less name recognition with some accountants",
    ],
    pricingSummary:
      "OnPay uses base-plus-per-person pricing, often around $40/month base. One main plan covers payroll and benefits; compare total cost at your headcount on OnPay's site.",
  },
  {
    slug: "adp",
    name: "ADP",
    badge: "Best for larger teams",
    description: "Enterprise-grade payroll and HR that scales. Custom pricing and optional dedicated support for growing and multi-state businesses.",
    rating: "4.4",
    startingPrice: "Custom pricing",
    reviewHref: getPayrollReviewUrl("adp"),
    visitUrl: "https://www.adp.com/small-business",
    logoSrc: "/Logos/adp.jpeg",
    compareSlugs: ["gusto-vs-adp", "adp-vs-paychex"],
    payrollTypes: "W-2, 1099, multi-state",
    standoutFeature: "Scale and enterprise features; multi-country option",
    editorialParagraph:
      "ADP is the pick when you need to scale. It handles large headcounts, multi-state payroll, and optional global payroll. Pricing is custom—you get a quote—and you can get dedicated account management. For very small teams, Gusto or OnPay are often simpler; for growing or midsize businesses that want a full-service provider, ADP is a top option.",
    pros: [
      "Scales to large headcounts and multi-state payroll",
      "Optional dedicated support and account management",
      "Enterprise-grade compliance and global payroll options",
      "Strong reputation and long track record",
    ],
    cons: [
      "Custom pricing; no transparent published plans",
      "Can feel heavy and sales-driven for very small teams",
      "Implementation may require more time than self-serve tools",
    ],
    pricingSummary:
      "ADP uses custom pricing—you request a quote based on headcount, state, and needs. Total cost varies; compare quotes with Gusto or OnPay at your size.",
  },
  {
    slug: "paychex",
    name: "Paychex",
    badge: "Best for payroll + HR support",
    description: "Full-service payroll with strong support and advisory. Good for businesses that want a partner for compliance and benefits.",
    rating: "4.3",
    startingPrice: "Custom pricing",
    reviewHref: getPayrollReviewUrl("paychex"),
    visitUrl: "https://www.paychex.com/small-business",
    logoSrc: "/Logos/paychex.jpeg",
    compareSlugs: ["gusto-vs-paychex", "adp-vs-paychex", "paychex-vs-onpay"],
    payrollTypes: "W-2, 1099",
    standoutFeature: "Dedicated support; compliance and benefits advisory",
    editorialParagraph:
      "Paychex is the full-service alternative: custom pricing, optional dedicated reps, and a reputation for hands-on support. If you want someone to guide you through compliance, benefits, and setup—rather than running everything yourself—Paychex is a strong choice. Compare with ADP if you're weighing two traditional providers.",
    pros: [
      "Dedicated support and compliance advisory",
      "Full-service payroll and benefits",
      "Good for businesses that want a partner",
      "Strong reputation for hand-holding",
    ],
    cons: [
      "Custom pricing; no published self-serve plans",
      "Can be more expensive than Gusto or OnPay for small teams",
      "Sales process may be slower than self-serve signup",
    ],
    pricingSummary:
      "Paychex uses custom pricing—you get a quote based on headcount and services. Compare with ADP and with Gusto or OnPay for your team size.",
  },
];

/** More options — review links for additional payroll tools (not in top picks) */
export const MORE_PAYROLL_OPTIONS: { slug: string; name: string; description: string; reviewHref: string; logoSrc: string }[] = [
  {
    slug: "rippling",
    name: "Rippling",
    description: "Payroll, HR, and IT in one platform. Strong for growing businesses that want automation and breadth.",
    reviewHref: getPayrollReviewUrl("rippling"),
    logoSrc: "/Logos/rippling.jpeg",
  },
  {
    slug: "square-payroll",
    name: "Square Payroll",
    description: "Simple payroll for businesses already using Square. Easy setup and straightforward pricing.",
    reviewHref: getPayrollReviewUrl("square-payroll"),
    logoSrc: "/Logos/square.jpeg",
  },
  {
    slug: "patriot-payroll",
    name: "Patriot Payroll",
    description: "Affordable payroll for budget-conscious small businesses. Solid basics and low cost.",
    reviewHref: getPayrollReviewUrl("patriot-payroll"),
    logoSrc: "/Logos/patriot.jpeg",
  },
  {
    slug: "justworks",
    name: "Justworks",
    description: "PEO-style payroll and benefits in one platform. Good for teams that want large-group benefits and compliance support.",
    reviewHref: getPayrollReviewUrl("justworks"),
    logoSrc: "/Logos/justworks.jpeg",
  },
  {
    slug: "deel",
    name: "Deel",
    description: "Global contractor and employee payments, EOR, and compliant payroll in 150+ countries. Strong for distributed teams.",
    reviewHref: getPayrollReviewUrl("deel"),
    logoSrc: "/Logos/deel.jpeg",
  },
  {
    slug: "surepayroll",
    name: "SurePayroll",
    description: "Simple small-business payroll with optional full-service. Part of the Paychex family.",
    reviewHref: getPayrollReviewUrl("surepayroll"),
    logoSrc: "/Logos/surepayroll.jpeg",
  },
  {
    slug: "wave",
    name: "Wave",
    description: "Free accounting plus payroll add-on. Good for micro businesses and solopreneurs who want books and pay in one place.",
    reviewHref: getPayrollReviewUrl("wave"),
    logoSrc: "/Logos/wave.jpeg",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best for contractors", href: getPayrollBestForUrl("contractors"), description: "Payroll that handles 1099 and mixed workforces." },
  { label: "Best for small business", href: getPayrollBestForUrl("small-business"), description: "Top options for small teams and startups." },
  { label: "Best for 1099 contractors", href: getPayrollBestForUrl("1099-contractors"), description: "Software that makes contractor payments simple." },
  { label: "Best for hourly teams", href: getPayrollBestForUrl("hourly-employees"), description: "Time tracking and hourly payroll in one." },
  { label: "Best for growing businesses", href: getPayrollBestForUrl("growing-businesses"), description: "Scale payroll and HR as you add people." },
];

/** All best-for trade/industry pages — for "Best payroll software by trade" section */
export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "Construction", href: getPayrollBestForUrl("construction") },
  { label: "Electricians", href: getPayrollBestForUrl("electricians") },
  { label: "Landscaping", href: getPayrollBestForUrl("landscaping") },
  { label: "Plumbing", href: getPayrollBestForUrl("plumbing") },
  { label: "HVAC", href: getPayrollBestForUrl("hvac") },
  { label: "Cleaning business", href: getPayrollBestForUrl("cleaning-business") },
  { label: "Roofing", href: getPayrollBestForUrl("roofing") },
  { label: "Painters", href: getPayrollBestForUrl("painters") },
  { label: "Pest control", href: getPayrollBestForUrl("pest-control") },
  { label: "Lawn care", href: getPayrollBestForUrl("lawn-care") },
  { label: "Tree service", href: getPayrollBestForUrl("tree-service") },
  { label: "Remodeling contractors", href: getPayrollBestForUrl("remodeling-contractors") },
  { label: "General contractors", href: getPayrollBestForUrl("general-contractors") },
  { label: "Handyman business", href: getPayrollBestForUrl("handyman-business") },
  { label: "Pool service", href: getPayrollBestForUrl("pool-service") },
  { label: "Home services", href: getPayrollBestForUrl("home-services") },
  { label: "Property management", href: getPayrollBestForUrl("property-management") },
  { label: "Maintenance companies", href: getPayrollBestForUrl("maintenance-companies") },
  { label: "Auto repair", href: getPayrollBestForUrl("auto-repair") },
  { label: "Restaurants", href: getPayrollBestForUrl("restaurants") },
  { label: "Retail", href: getPayrollBestForUrl("retail") },
  { label: "Agriculture", href: getPayrollBestForUrl("agriculture") },
  { label: "Nonprofits", href: getPayrollBestForUrl("nonprofits") },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
  { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
  { label: "Gusto vs Paychex", href: getPayrollCompareUrl("gusto-vs-paychex") },
  { label: "ADP vs Paychex", href: getPayrollCompareUrl("adp-vs-paychex") },
  { label: "Justworks vs Gusto", href: getPayrollCompareUrl("justworks-vs-gusto") },
  { label: "Deel vs Gusto", href: getPayrollCompareUrl("deel-vs-gusto") },
  { label: "Wave vs Gusto", href: getPayrollCompareUrl("wave-vs-gusto") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best payroll software for small businesses?",
    a: "Gusto is our top pick for most small businesses: transparent pricing, payroll plus benefits and HR in one platform, and no sales cycle. OnPay is a close alternative with flat pricing. QuickBooks Payroll is best if you already use QuickBooks for accounting.",
  },
  {
    q: "What payroll software is best for contractors?",
    a: "Gusto and OnPay both handle 1099 contractors well with clear contractor self-service and tax forms. QuickBooks Payroll is strong if you need payroll and job costing in the same system. Choose based on whether you want all-in-one (Gusto), value and simplicity (OnPay), or QuickBooks integration.",
  },
  {
    q: "Is Gusto better than QuickBooks Payroll?",
    a: "It depends. Gusto is better if you want a standalone all-in-one for payroll, benefits, and HR with no accounting lock-in. QuickBooks Payroll is better if you already use QuickBooks—payroll and books stay in one place and labor cost flows into job costing. Compare both in our Gusto vs QuickBooks Payroll article.",
  },
  {
    q: "What payroll software is best for 1099 contractors?",
    a: "Gusto, OnPay, and QuickBooks Payroll all support 1099 payments and tax forms. Gusto and OnPay offer clear contractor portals and flat or transparent pricing; QuickBooks Payroll ties into your books. For contractor-only or mixed W-2/1099 teams, any of these three can work—pick by pricing and whether you need QuickBooks integration.",
  },
  {
    q: "How much does payroll software cost?",
    a: "Many providers charge a base fee plus per-person per month. Gusto and OnPay often start around $40/month base plus a few dollars per person; QuickBooks Payroll can start around $30/month. ADP and Paychex use custom pricing. Total cost depends on headcount and add-ons like time tracking or benefits.",
  },
];
