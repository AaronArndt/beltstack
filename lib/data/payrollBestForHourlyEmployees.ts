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

export const HOURLY_EMPLOYEES_PAGE_PROPS = {
  title: "Best Payroll Software for Hourly Employees (2026)",
  subtitle:
    "Compare payroll software built for hourly employees and time-based pay. Top picks for time tracking integration, overtime calculation, and straightforward hourly payroll.",
  useCase: "hourly-employees",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Hourly employees need accurate hours, correct overtime, and pay stubs that reflect time worked. The best payroll tools integrate with time tracking or include it, calculate overtime automatically, and handle multiple pay rates and schedules without extra hassle.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for hourly payroll",
      description:
        "Payroll with built-in time tracking and automatic overtime. Import hours from Gusto Time or integrate with other time apps. Handles hourly rates, overtime rules, and PTO—all in one platform.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for QuickBooks + time tracking",
      description:
        "Run hourly payroll inside QuickBooks with optional QuickBooks Time (formerly TSheets) integration. Labor cost flows into job costing. Good for teams that track time by job or project.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for hourly teams",
      description:
        "Hourly payroll with overtime calculation and time-tracking integrations. Flat pricing and one plan. Add your preferred time clock or use OnPay’s options—support included.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "Best overall for hourly payroll",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Built-in time tracking; automatic overtime",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "QuickBooks + time by job",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "QuickBooks Time integration; job costing",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Best value for hourly teams",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Overtime; time-tracking integrations",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Time tracking and hours",
      body: "Hourly payroll depends on accurate hours. Look for built-in time tracking (e.g. Gusto Time) or strong integrations with time clocks and apps. Some providers charge extra for time tracking—confirm what's included. Hours should flow into payroll with minimal manual entry.",
    },
    {
      heading: "Overtime calculation",
      body: "Federal and state overtime rules (e.g. time-and-a-half after 40 hours) must be applied correctly. The best payroll tools calculate overtime automatically from imported or entered hours. Verify that your provider supports your state’s rules and any industry-specific requirements.",
    },
    {
      heading: "Multiple rates and pay types",
      body: "If employees have different hourly rates, shift differentials, or multiple pay types, choose software that supports them without workarounds. Running payroll should be straightforward even with varied schedules and rates.",
    },
    {
      heading: "PTO and paid time off",
      body: "Many hourly teams track PTO (vacation, sick). Some payroll systems include PTO accrual and use; others integrate with HR or time tools. Confirm how PTO is tracked and how it affects pay when employees take time off.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is capable payroll software for hourly workforces that need built-in time collection, automatic overtime rules, and multiple pay rates without bolting on five separate vendors. Hours can flow from Gusto Time or supported clocks straight into approvals and payroll. During your first two payroll runs, import or enter a week with split shifts, meal breaks, and hours over 40 to confirm federal overtime and your state’s daily or seventh-day rules fire correctly. Add PTO requests that cross pay periods to see accruals reduce net pay the way your handbook promises. If you pay different rates by department or location, run a blended schedule and verify each hour lands on the right earning line. When deposits and registers look sane, you have a template for busy seasons.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software hourly teams choose when QuickBooks Time (or another integrated tracker) already captures clock-ins by job, customer, or class, and labor must post for costing as well as paychecks. Approved hours should cross into payroll without CSV fixes the night before payday. On trial payrolls, sync a week that includes travel between sites, overtime after inventory, and at least two pay rates to confirm QuickBooks maps burden to the correct jobs or classes. Reconcile the resulting payroll journal to your labor accounts and verify employer taxes hit the expected liability buckets. Confirm whether time tracking is bundled or billed separately so your true cost per hour stays accurate. Clean job costing evidence helps service and construction operators defend pricing.",
    },
    {
      heading: "OnPay",
      body: "OnPay is practical payroll software for hourly employers that want one flat plan covering overtime calculations, garnishment-friendly registers, and integrations with common time clocks or scheduling tools. Support picks up when a manager forgets to approve punches before cutoff. Use early payrolls to prove automated tax deposits, break rules configured for your state, and PTO balances if you track them inside payroll. Import a noisy week—split shifts, callbacks, and a holiday premium—to see if rounding or approval rules behave the way your policy states. Map GL exports once if QuickBooks or another ledger receives entries so location or department tags survive. Predictable pricing helps thin-margin operators schedule cash confidently.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for hourly employees?",
      a: "Gusto is our top pick for most hourly teams: built-in time tracking, automatic overtime, and payroll in one platform. QuickBooks Payroll is best if you use QuickBooks and need time tracking tied to jobs. OnPay is a strong value option with overtime support and time-tracking integrations.",
    },
    {
      q: "Does payroll software calculate overtime automatically?",
      a: "Yes. Gusto, QuickBooks Payroll, and OnPay all calculate overtime (e.g. time-and-a-half after 40 hours) based on the hours you enter or import. They apply federal and state rules. Confirm that your state’s rules are supported, especially if you have daily overtime or other variations.",
    },
    {
      q: "Can I integrate time tracking with payroll?",
      a: "Yes. Gusto has built-in time tracking (Gusto Time); QuickBooks Payroll integrates with QuickBooks Time; OnPay integrates with various time clocks and apps. Hours from time tracking flow into payroll so you don’t have to re-enter them.",
    },
    {
      q: "How much does payroll software cost for hourly employees?",
      a: "Cost is usually a base fee plus per employee per month. Time tracking may be included (Gusto) or an add-on (e.g. QuickBooks Time). Gusto often starts around $49/month base; OnPay often around $40/month base; QuickBooks Payroll around $30/month. Factor in time-tracking cost if you need it.",
    },
  ] as BestForFaqItem[],
};
