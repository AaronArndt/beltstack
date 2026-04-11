import { getPayrollReviewUrl } from "@/lib/routes";
import { getPayrollCompareUrl } from "@/lib/data/payrollComparisons";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

export const JUNK_REMOVAL_PAGE_PROPS = {
  title: "Best Payroll Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare payroll for junk hauling teams: W-2 truck crews, day-labor spikes, 1099 loaders, tips and dump-fee reimbursements, and lean back-office reality.",
  useCase: "junk-removal",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Junk removal companies run tight margins with truck-heavy payroll, frequent overtime on big cleanouts, and a mix of W-2 drivers or helpers plus 1099 labor on busy weekends. You need payroll that handles both employee and contractor pay in one place, keeps tax filing automatic, and stays affordable when headcount swings week to week. Our shortlist favors flat, predictable pricing and tools that work without a full HR department—Patriot when cost matters most, OnPay and Gusto when you want more support and time tracking, QuickBooks Payroll when your books already live in QuickBooks.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for fluctuating crew size",
      description:
        "Flat base-plus-person pricing, W-2 and 1099 in one account, and included support—strong when truck count and crew size change month to month.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best all-in-one for growing haulers",
      description:
        "Payroll, contractor portal, built-in time tracking, and benefits paths when you’re adding trucks and want less spreadsheet glue.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best if you run QuickBooks for jobs",
      description:
        "Payroll inside QuickBooks so labor can align with job or class reporting when you track routes or territories in the same file.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "patriot-payroll",
      name: "Patriot Payroll",
      badge: "Best budget starter",
      description:
        "Low published pricing for very small teams—when you’re one or two trucks and need compliant pay runs without paying for HR you won’t use yet.",
      rating: "4.2",
      startingPrice: "$17/mo",
      reviewHref: getPayrollReviewUrl("patriot-payroll"),
      visitUrl: "https://www.patriotsoftware.com/payroll",
      logoSrc: "/Logos/patriot.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Variable crew; flat pricing",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Support included; simple scaling",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "All-in-one growth",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Time tracking; contractor portal",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "QuickBooks-centric ops",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor in QuickBooks jobs/classes",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
    {
      slug: "patriot-payroll",
      name: "Patriot Payroll",
      logoSrc: "/Logos/patriot.jpeg",
      bestFor: "Smallest teams; lowest cost",
      startingPrice: "$17/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Affordable basics",
      reviewHref: getPayrollReviewUrl("patriot-payroll"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 crews vs 1099 day labor",
      body: "Junk removal often blends employees with occasional 1099 help. Run both through payroll software that separates withholding rules and issues W-2s vs 1099-NEC correctly. Misclassification is a liability—document roles with your accountant, then configure the system to match.",
    },
    {
      heading: "Overtime and long cleanout days",
      body: "Estate and commercial cleanouts can push hours past daily or weekly thresholds. Pick payroll that calculates overtime reliably from imported or entered hours and flags anomalies before you approve pay.",
    },
    {
      heading: "Reimbursements for fuel and dumps",
      body: "Truck fuel and transfer-station fees are common. Use consistent earning or reimbursement codes so P&L and job reporting stay clean and audit-friendly.",
    },
    {
      heading: "Tips and cash-out jobs",
      body: "If crews receive tips or job bonuses, define taxable vs non-taxable treatment with your payroll provider and post them the same way every run.",
    },
    {
      heading: "Lean admin",
      body: "Many haulers have the owner or dispatcher running payroll. Favor tools with clear pricing, good support (OnPay, Gusto), or the lowest fee (Patriot) until you hire dedicated back office.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "OnPay",
      body: "OnPay fits junk removal operators whose crew count swings with job volume—flat pricing makes Friday approvals predictable when three trucks run one week and five the next. W-2 drivers and 1099 loaders stay in one account with tax filing included. During setup, map overtime rules for double shifts on commercial cleanouts and test reimbursement codes for dump receipts. If you integrate accounting, confirm journal entries land in the classes you use for each territory.",
    },
    {
      heading: "Gusto",
      body: "Gusto suits junk removal brands adding benefits, hiring, or multiple locations and wanting time tracking plus contractor self-service without a separate HR stack. Trial contractor payments alongside W-2 pay so year-end 1099 workflows match who actually touched the trucks. Validate mobile time capture if foremen clock crews from the yard. Compare total cost at your peak headcount before you commit to tiers.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is the fit when invoicing, AR, and P&L already live in QuickBooks and you want labor to post to jobs or classes for route or franchise reporting. Reconcile payroll detail to a sample week with mixed residential and commercial hauls. Pair with QuickBooks Time if you need geofenced or job-based hours. If you never open job reports, you may not need this lock-in—standalone payroll can be simpler.",
    },
    {
      heading: "Patriot Payroll",
      body: "Patriot Payroll targets owner-operators and two-truck shops that need compliant payroll at the lowest published monthly cost. Expect fewer integrations and lighter HR—acceptable when you’re proving the business model. Upgrade path matters: once you add HRIS needs or multi-state complexity, budget a migration to OnPay or Gusto. Early on, Patriot keeps cash in the business while you invest in trucks and marketing.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Patriot Payroll", href: getPayrollReviewUrl("patriot-payroll") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "Patriot Payroll vs OnPay", href: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
    { label: "Patriot Payroll vs Gusto", href: getPayrollCompareUrl("patriot-payroll-vs-gusto") },
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for junk removal businesses?",
      a: "OnPay is our top pick for many haulers with changing crew sizes: flat pricing, W-2 and 1099 together, and included support. Gusto fits growing teams that want time tracking and HR tools. QuickBooks Payroll fits if you already run QuickBooks and want labor on jobs or classes. Patriot Payroll is a strong budget option for very small teams.",
    },
    {
      q: "Can junk removal companies pay 1099 and W-2 in one system?",
      a: "Yes. OnPay, Gusto, QuickBooks Payroll, and Patriot Payroll all support paying employees and contractors from the same account with appropriate tax treatment and year-end forms.",
    },
    {
      q: "How should junk haulers handle overtime?",
      a: "Configure overtime rules to match federal and state law, import or enter actual hours per pay period, and review long cleanout weeks before approval. Most modern payroll systems calculate OT automatically when hours are correct.",
    },
    {
      q: "Is Patriot Payroll enough for a junk removal startup?",
      a: "Often yes for one or two trucks with straightforward payroll. If you add states, deep integrations, or HR workflows, plan to move to OnPay or Gusto as complexity grows.",
    },
  ] as BestForFaqItem[],
};
