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

export const MOVING_PAGE_PROPS = {
  title: "Best Payroll Software for Moving Companies (2026)",
  subtitle:
    "Compare payroll for movers: seasonal crews, deposits vs final pay cycles, multi-state van lines, W-2 drivers and packers, and 1099 labor on peak weekends.",
  useCase: "moving",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Moving companies surge around month-end and summer season, often mixing full-time dispatch and warehouse staff with temporary crews. Payroll must handle W-2 drivers and packers, 1099 labor when you scale for peak, and sometimes multi-state registrations if you run interstate lanes. QuickBooks Payroll leads when your books and job files already live in QuickBooks; Gusto fits the most common all-in-one path; Rippling suits multi-location or fast-scaling brands that want payroll plus HR automation; OnPay stays the value play with flat pricing and strong support.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for movers already on QuickBooks",
      description:
        "Payroll in the same system as estimates, deposits, and job costing—so labor lines up with move revenue when you track jobs in QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best all-in-one for most local movers",
      description:
        "W-2 and 1099 together, contractor portal, benefits-ready, and time tools—strong when you’re not married to QuickBooks for everything.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best for multi-branch / scaling brands",
      description:
        "Payroll plus HR and workforce automation when you add warehouses, franchises, or multi-state hiring and need one system to govern onboarding and pay.",
      rating: "4.6",
      startingPrice: "Custom / quote",
      reviewHref: getPayrollReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: "/Logos/rippling.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best flat pricing & support",
      description:
        "Straightforward payroll with transparent fees—ideal when seasonal spikes mean you add and remove people and want predictable math on the invoice.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "QuickBooks + job tracking",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Native books + payroll",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "All-in-one SMB movers",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "HR + time + contractors",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "rippling",
      name: "Rippling",
      logoSrc: "/Logos/rippling.jpeg",
      bestFor: "Scaling / multi-state",
      startingPrice: "Quote",
      payrollTypes: "W-2, 1099",
      standoutFeature: "HR + IT + automation",
      reviewHref: getPayrollReviewUrl("rippling"),
    },
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Value + simplicity",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Flat pricing; support",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Seasonal and surge hiring",
      body: "Moving demand spikes around leases and summer. Payroll should make new-hire onboarding, state registrations, and final pay for short-term workers straightforward. Rippling and Gusto emphasize onboarding workflows; OnPay keeps pricing flat as headcount swings.",
    },
    {
      heading: "Interstate and multi-state compliance",
      body: "If vans earn revenue across state lines, you may need payroll tax registrations in multiple states. Confirm your provider supports each jurisdiction and surfaces filing deadlines—Rippling and ADP-class tools often help larger footprints; Gusto and QuickBooks handle many common cases for SMBs.",
    },
    {
      heading: "Deposits vs final settlement",
      body: "Customer deposits affect cash flow, not payroll timing—but commission or job bonuses tied to closed moves should be defined clearly in payroll earning codes.",
    },
    {
      heading: "Warehouse vs road crew",
      body: "Different roles may have different overtime or break rules. Use departments or classes so reporting separates warehouse, drivers, and sales if you bonus by function.",
    },
    {
      heading: "Tips and crew incentives",
      body: "If crews share tips or job bonuses, document tax treatment. Payroll systems can pay earning types consistently once your CPA signs off.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll fits moving companies that estimate, invoice, and close books in QuickBooks and want driver and crew wages to land on jobs or classes without CSV exports. Test payroll against a busy month-end with split crews and storage rent if you warehouse goods. Integrate time tools so long-distance linehaul hours don’t get re-keyed. If you never use job profitability in QuickBooks, evaluate whether standalone payroll is simpler.",
    },
    {
      heading: "Gusto",
      body: "Gusto is the default when you want one modern stack for W-2 movers, 1099 weekend crews, and eventual benefits without Rippling-level complexity. Contractor self-service cuts admin when drivers want pay stubs on their phones. Run parallel pay tests for local vs interstate teams if you have different OT rules. Watch per-person cost as seasonal headcount peaks—still often cheaper than serviced payroll until you’re enterprise scale.",
    },
    {
      heading: "Rippling",
      body: "Rippling suits moving brands adding branches, franchises, or corporate HR policies who want payroll, onboarding, and device policies in one automated spine. Pricing is typically quoted—model TCO against Gusto at your steady-state headcount plus peak surge. Implementation pays off when hiring volume justifies workflows; micro movers may find it heavy.",
    },
    {
      heading: "OnPay",
      body: "OnPay keeps payroll predictable for owner-operators and regional movers who spike crews in summer but don’t need Rippling’s breadth. Flat base plus per-person pricing and included support help when the owner approves payroll between dispatch calls. Validate multi-state if you truly run interstate payroll—OnPay supports many cases; confirm before you hire across a new line.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "Rippling", href: getPayrollReviewUrl("rippling") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Rippling vs Gusto", href: getPayrollCompareUrl("rippling-vs-gusto") },
    { label: "Rippling vs QuickBooks Payroll", href: getPayrollCompareUrl("rippling-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for moving companies?",
      a: "QuickBooks Payroll if you already run QuickBooks and want labor tied to jobs. Gusto for most small to mid-size movers needing W-2 and 1099 in one platform. Rippling when you’re scaling multi-location or want deeper HR automation. OnPay for straightforward payroll with flat pricing and included support.",
    },
    {
      q: "Do moving companies need multi-state payroll?",
      a: "If employees work and earn wages in multiple states, you may need registrations and filings in each. Confirm with your provider during setup—don’t assume one home state covers interstate crews.",
    },
    {
      q: "How do movers handle seasonal workers?",
      a: "Use payroll that supports easy onboarding and offboarding, clear final pay rules, and 1099 workflows for legitimate contractors. Run headcount projections before summer so tax accounts stay current.",
    },
    {
      q: "Rippling or Gusto for a growing mover?",
      a: "Choose Gusto until HR and multi-entity automation clearly outgrow it. Rippling fits when hiring, devices, and policies need one connected system and you accept quoted pricing.",
    },
  ] as BestForFaqItem[],
};
