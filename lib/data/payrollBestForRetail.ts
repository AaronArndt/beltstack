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

export const RETAIL_PAGE_PROPS = {
  title: "Best Payroll Software for Retail (2026)",
  subtitle:
    "Compare payroll software for retail stores managing W-2 associates, managers, and part-time or seasonal staff.",
  useCase: "retail",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Retail stores need payroll that handles W-2 associates and managers, part-time and seasonal workers, and labor cost that ties to locations or departments when you use QuickBooks. Our picks work for small and growing operations—from single-location shops to multi-store retailers—whether you want an all-in-one platform or simple flat-rate payroll that syncs with your books.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small retail stores",
      description:
        "All-in-one payroll with multiple pay rates, automatic tax forms, and built-in time tracking. Handles W-2 and 1099 in one system. No sales cycle—good for owners and managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for retail stores using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into your books and reporting. Ideal when you run books in QuickBooks. Pay associates and managers in the same system; time tracking can tie hours to locations or departments.",
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
      badge: "Best for growing retail chains",
      description:
        "Payroll and HR that scale to more locations and staff. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small retail",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Time tracking; multiple rates; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Retail using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost in books; location/department",
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
      bestFor: "Growing retail chains",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Associates, managers, and multiple pay rates",
      body: "Retail often mixes full-time and part-time associates with different pay rates, plus salaried or hourly managers. Your payroll system should handle multiple pay types and rates, overtime calculation, and possibly location or department codes. All of our picks support varied rates and overtime; time tracking that syncs to payroll reduces errors and supports labor cost reporting.",
    },
    {
      heading: "Labor cost by location or department",
      body: "Allocating labor cost by store or department is central to retail P&L and labor control. If you run your books in QuickBooks, payroll that posts labor to jobs or classes (QuickBooks Payroll) keeps location or department costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Employee hours—clock in/out, breaks, overtime—can be captured with time clocks, POS integration, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time. Accurate hours support labor cost control and overtime compliance.",
    },
    {
      heading: "Seasonal and part-time staffing",
      body: "Retail often scales staff up and down with season and traffic. Payroll software should make it easy to add and remove workers, run more frequent pay runs when needed, and keep tax and compliance correct. Gusto and OnPay scale up and down without long-term contracts.",
    },
    {
      heading: "Ease of use for busy operators",
      body: "Many retail stores have an owner or manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small retail stores: W-2 and 1099 in one system, automatic tax forms, and built-in time tracking. No sales cycle—owners and managers can run payroll without calling a rep. It scales as you add locations and staff.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to the right accounts, jobs, or classes for reporting—critical for retail P&L and labor by location. Pay associates and managers in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for retail stores that want predictability. Contractor payments and tax forms are included. Works with any accounting software.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing retail chains that want scale and optional dedicated support. Multi-state payroll, more locations, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
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
      q: "What is the best payroll software for retail stores?",
      a: "Gusto is our top pick for most small retail stores: it handles W-2 associates and managers in one system, with automatic tax forms and time tracking. QuickBooks Payroll is best if you already use QuickBooks and want labor cost in your books by location or department. OnPay is a strong value option; ADP fits growing chains that want full-service support.",
    },
    {
      q: "Can payroll software handle part-time and seasonal retail staff?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support full-time, part-time, and seasonal employees with different pay rates and schedules. You can add and remove workers as needed; payroll calculates withholding and overtime correctly.",
    },
    {
      q: "What payroll software works best with QuickBooks for retail?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to your chart of accounts, jobs, or classes—ideal for retail P&L and labor by location. If you run books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor to jobs/classes the same way.",
    },
    {
      q: "How do I track employee time for retail payroll?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time. OnPay and ADP integrate with various time clocks and systems. Choose a setup that gets clock-in/out and break data into payroll without re-entry and supports overtime calculation.",
    },
    {
      q: "Do retail stores need multi-location or multi-state payroll?",
      a: "If you have stores or staff in more than one state, yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support multi-state payroll with the right tax registration, filing, and deposits. For multi-location labor reporting, QuickBooks Payroll can post labor to jobs or classes by location; other tools sync to QuickBooks where you can allocate cost.",
    },
  ] as BestForFaqItem[],
};
