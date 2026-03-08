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

export const NONPROFITS_PAGE_PROPS = {
  title: "Best Payroll Software for Nonprofits (2026)",
  subtitle:
    "Compare payroll software for nonprofits managing W-2 staff, grant-funded positions, and optional 1099 consultants or contractors.",
  useCase: "nonprofits",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Nonprofits need payroll that handles W-2 staff—program, admin, and grant-funded positions—plus 1099 consultants or contractors when you use them. Labor cost that ties to programs, grants, or projects matters for reporting and fund accounting when you use QuickBooks or similar. Our picks work for small and growing organizations, whether you want an all-in-one platform or simple flat-rate payroll that syncs with your books.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small nonprofits",
      description:
        "All-in-one payroll with multiple pay rates, automatic tax forms, and built-in time tracking. Handles W-2 and 1099 in one system. No sales cycle—good for executive directors and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for nonprofits using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into your books and reporting. Ideal when you run books in QuickBooks. Pay staff and 1099 in the same system; time tracking can tie hours to programs, grants, or classes.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for straightforward payroll",
      description:
        "Flat pricing and one plan. Pay W-2 employees and 1099 contractors with tax forms included. Simple for small teams—works with any accounting software. Support included.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for growing nonprofits",
      description:
        "Payroll and HR that scale to more staff and locations. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "Best overall for small nonprofits",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Time tracking; multiple rates; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Nonprofits using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost by program/grant; job costing",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Best value; straightforward payroll",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Flat pricing; 1099 included",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
    {
      slug: "adp",
      name: "ADP",
      logoSrc: "/Logos/adp.jpeg",
      bestFor: "Growing nonprofits",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 staff vs 1099 consultants and contractors",
      body: "Nonprofits often have W-2 staff (program, admin, grant-funded) plus 1099 consultants or contractors for projects, audits, or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets 1099s view pay stubs without extra admin.",
    },
    {
      heading: "Labor cost by program, grant, or project",
      body: "Allocating labor cost by program, grant, or project is central to nonprofit reporting and funder requirements. If you run your books in QuickBooks, payroll that posts labor to jobs or classes (QuickBooks Payroll) keeps program and grant costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll—you can allocate in your chart of accounts or fund accounting tool.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Staff hours—by program or grant—can be captured with time tracking, timesheets, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support grant reporting and labor allocation.",
    },
    {
      heading: "Compliance and multi-state",
      body: "Nonprofits with staff in more than one state need payroll that handles multi-state tax registration, filing, and compliance. All of our picks support multi-state; ADP adds dedicated support when you have more complexity or locations.",
    },
    {
      heading: "Ease of use for lean teams",
      body: "Many nonprofits have an executive director or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small nonprofits: W-2 and 1099 in one system, automatic tax forms, and built-in time tracking. No sales cycle—executive directors and office managers can run payroll and add contractors without calling a rep. It scales as you add staff and programs.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to jobs or classes for program and grant costing—critical for nonprofit reporting. Pay staff and 1099 in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for nonprofits that want predictability. Contractor payments and tax forms are included. Works with any accounting software.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing nonprofits that want scale and optional dedicated support. Multi-state payroll, more staff, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "ADP", href: getPayrollReviewUrl("adp") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "ADP vs Paychex", href: getPayrollCompareUrl("adp-vs-paychex") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for nonprofits?",
      a: "Gusto is our top pick for most small nonprofits: it handles W-2 staff and 1099 contractors in one system, with automatic tax forms and time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost by program, grant, or project. OnPay is a strong value option; ADP fits growing organizations that want full-service support.",
    },
    {
      q: "Can payroll software allocate labor cost to grants or programs?",
      a: "QuickBooks Payroll posts labor to jobs you assign, so you can allocate cost by program, grant, or project. Gusto and OnPay sync payroll to QuickBooks; you can use classes, jobs, or accounts to assign cost in your chart of accounts. Time tracking that ties hours to programs (e.g. QuickBooks Time with job codes) helps keep allocation accurate for grant reporting.",
    },
    {
      q: "What payroll software works best with QuickBooks for nonprofits?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs or classes—ideal for program and grant costing and nonprofit reporting. If you run books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor to jobs the same way.",
    },
    {
      q: "How do I track staff time for grant or program allocation?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay and ADP integrate with various time and timesheet tools. Choose a setup that gets hours into payroll without re-entry and, if you allocate labor to grants or programs, allocates hours to the right jobs or classes.",
    },
    {
      q: "Do nonprofits need to support 1099 consultants or contractors?",
      a: "If you pay 1099 consultants, trainers, or other contractors, yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 contractors in the same account, with the right tax treatment and 1099-NEC at year-end.",
    },
  ] as BestForFaqItem[],
};
