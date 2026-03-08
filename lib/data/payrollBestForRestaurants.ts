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

export const RESTAURANTS_PAGE_PROPS = {
  title: "Best Payroll Software for Restaurants (2026)",
  subtitle:
    "Compare payroll software for restaurants managing W-2 FOH and BOH staff, tipped employees, and optional 1099 delivery or contractors.",
  useCase: "restaurants",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Restaurants need payroll that handles W-2 front-of-house and back-of-house staff, tipped employees with correct tip reporting and tip credit where allowed, and 1099 contractors when you use them (e.g. delivery). Our picks work for small and growing operations—from single-location spots to multi-unit groups—whether you want an all-in-one platform or simple flat-rate payroll that syncs with your books.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small restaurants",
      description:
        "All-in-one payroll with tip reporting, multiple pay rates, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking. No sales cycle—good for owners and managers running payroll.",
      rating: "4.8",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for restaurants using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into your books and reporting. Ideal when you run books in QuickBooks. Pay FOH, BOH, and 1099 in the same system; time tracking can tie hours to departments or locations.",
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
      badge: "Best for growing restaurant groups",
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
      bestFor: "Best overall for small restaurants",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Tip reporting; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Restaurants using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost in books; job/department",
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
      bestFor: "Growing restaurant groups",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Tipped employees and tip reporting",
      body: "Restaurants with tipped FOH staff need payroll that supports tip entry, tip reporting for taxes, and tip credit where state law allows. Your payroll system should calculate withholding on wages plus reported tips and handle the right tax treatment. Gusto, QuickBooks Payroll, OnPay, and ADP all support tipped employees; confirm tip credit and state rules for your location.",
    },
    {
      heading: "FOH vs BOH and multiple pay rates",
      body: "Servers, hosts, and bartenders often have different pay rates than BOH; overtime and split roles are common. Your payroll system should handle multiple pay rates, overtime calculation, and possibly tip allocation. All of our picks support varied rates and overtime; time tracking that syncs to payroll reduces errors and supports labor cost reporting.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Employee hours—clock in/out, breaks, overtime—can be captured with POS integration, time clocks, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time. Accurate hours support labor cost control and overtime compliance.",
    },
    {
      heading: "Seasonal and variable staffing",
      body: "Restaurants often scale staff up and down with season and traffic. Payroll software should make it easy to add and remove workers, run more frequent pay runs when needed, and keep tax and compliance correct. Gusto and OnPay scale up and down without long-term contracts.",
    },
    {
      heading: "Ease of use for busy operators",
      body: "Many restaurants have an owner or manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small restaurants: W-2 and 1099 in one system, tip reporting, automatic tax forms, and built-in time tracking. No sales cycle—owners and managers can run payroll without calling a rep. It scales as you add locations and staff.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to the right accounts for reporting—critical for restaurant P&L. Pay FOH, BOH, and 1099 in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for restaurants that want predictability. Contractor payments and tax forms are included. Works with any accounting software.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing restaurant groups that want scale and optional dedicated support. Multi-state payroll, more locations, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
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
      q: "What is the best payroll software for restaurants?",
      a: "Gusto is our top pick for most small restaurants: it handles W-2 FOH and BOH staff, tip reporting, and 1099 contractors in one system, with automatic tax forms and time tracking. QuickBooks Payroll is best if you already use QuickBooks and want labor cost in your books. OnPay is a strong value option; ADP fits growing groups that want full-service support.",
    },
    {
      q: "Can payroll software handle tipped employees?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP support tipped employees: you enter or import tip amounts, and the system calculates withholding on wages plus reported tips. Confirm that your chosen product supports tip credit for your state if you use it.",
    },
    {
      q: "What payroll software works best with QuickBooks for restaurants?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to your chart of accounts—ideal for restaurant P&L and labor cost reporting. If you run books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor to accounts the same way.",
    },
    {
      q: "How do I track employee time for restaurant payroll?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time. OnPay and ADP integrate with various time clocks and POS systems. Choose a setup that gets clock-in/out and break data into payroll without re-entry and supports overtime calculation.",
    },
    {
      q: "Do restaurants need to support 1099 contractors?",
      a: "If you pay 1099 delivery drivers, musicians, or other contractors, yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 contractors in the same account, with the right tax treatment and 1099-NEC at year-end.",
    },
  ] as BestForFaqItem[],
};
