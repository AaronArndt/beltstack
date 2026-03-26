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

export const AGRICULTURE_PAGE_PROPS = {
  title: "Best Payroll Software for Agriculture (2026)",
  subtitle:
    "Compare payroll software for farms and ag operations managing W-2 farm workers, seasonal labor, and optional 1099 custom operators or contractors.",
  useCase: "agriculture",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Farms and agricultural operations need payroll that handles W-2 farm workers and seasonal labor, 1099 custom operators or contractors when you use them, and labor cost that ties to crops, fields, or locations when you use QuickBooks. Our picks work for small and growing operations—from single-farm to multi-location ag businesses—whether you want an all-in-one platform or simple flat-rate payroll that syncs with your books.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small farm and ag operations",
      description:
        "All-in-one payroll with multiple pay rates, automatic tax forms, and built-in time tracking. Handles W-2 and 1099 in one system. No sales cycle—good for owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for ag operations using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into your books and reporting. Ideal when you run farm books in QuickBooks. Pay workers and 1099 in the same system; time tracking can tie hours to crops, fields, or locations.",
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
      badge: "Best for growing ag operations",
      description:
        "Payroll and HR that scale to more workers and locations. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small farm/ag",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Time tracking; multiple rates; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Ag using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost by crop/field; job costing",
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
      bestFor: "Growing ag operations",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 farm workers vs 1099 custom operators and contractors",
      body: "Agriculture often has W-2 farm workers and seasonal labor plus 1099 custom operators or contractors for harvest, spraying, or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets 1099s view pay stubs without extra admin.",
    },
    {
      heading: "Labor cost by crop, field, or location",
      body: "Allocating labor cost by crop, field, or location is central to farm profitability and enterprise reporting. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps crop and field costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Worker hours—field, shop, seasonal—can be captured with time clocks, mobile apps, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support labor cost and overtime compliance.",
    },
    {
      heading: "Seasonal and peak labor",
      body: "Agriculture scales staff up and down with planting, harvest, and season. Payroll software should make it easy to add and remove workers, run more frequent pay runs when needed, and keep tax and compliance correct. Gusto and OnPay scale up and down without long-term contracts.",
    },
    {
      heading: "Ease of use for busy operators",
      body: "Many farms have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small farm and ag operations: W-2 and 1099 in one system, automatic tax forms, and built-in time tracking. No sales cycle—owners and office managers can run payroll and add contractors without calling a rep. It scales as you add workers and locations.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run farm books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to jobs for crop, field, or location costing—critical for ag reporting. Pay workers and 1099 in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for ag operations that want predictability. Contractor payments and tax forms are included. Works with any accounting software.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing ag operations that want scale and optional dedicated support. Multi-state payroll, more workers, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
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
      q: "What is the best payroll software for agriculture?",
      a: "Gusto is our top pick for most small farm and ag operations: it handles W-2 farm workers and 1099 contractors in one system, with automatic tax forms and time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost by crop, field, or location. OnPay is a strong value option; ADP fits growing operations that want full-service support.",
    },
    {
      q: "Can payroll software handle seasonal farm labor?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support full-time, part-time, and seasonal employees with different pay rates and schedules. You can add and remove workers as planting and harvest demand; payroll calculates withholding and overtime correctly.",
    },
    {
      q: "What payroll software works best with QuickBooks for agriculture?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for crop, field, or location costing and farm P&L. If you run farm books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor to jobs the same way.",
    },
    {
      q: "How do I track worker time for farm payroll?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay and ADP integrate with various time clocks and apps. Choose a setup that gets hours into payroll without re-entry and, if you use job costing, allocates hours to the right crops or fields.",
    },
    {
      q: "Do farms need to support 1099 custom operators or contractors?",
      a: "If you pay 1099 custom harvesters, sprayers, or other contractors, yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 contractors in the same account, with the right tax treatment and 1099-NEC at year-end.",
    },
  ] as BestForFaqItem[],
};
