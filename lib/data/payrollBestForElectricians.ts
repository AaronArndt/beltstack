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

export const ELECTRICIANS_PAGE_PROPS = {
  title: "Best Payroll Software for Electricians (2026)",
  subtitle:
    "Compare payroll software for electrical contractors, electrician teams, and companies managing W-2 technicians plus 1099 subcontractors.",
  useCase: "electricians",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Electrical contractors need payroll that handles W-2 electricians and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or projects when you use QuickBooks. Our picks work for small and growing operations—from those running books in QuickBooks to teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small electrical contractors",
      description:
        "All-in-one payroll with 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking for techs. No sales cycle—good for owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for electricians using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job costing and projects. Ideal when you run invoicing and books in QuickBooks. Pay electricians and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
        "Flat pricing and one plan. Pay W-2 employees and 1099 subcontractors with tax forms included. Simple for small teams—works with any accounting software. Support included.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for growing electrical contractors",
      description:
        "Payroll and HR that scale to more electricians and job sites. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small electrical",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Electricians using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost in jobs; job costing",
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
      bestFor: "Growing electrical contractors",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 electricians and office vs 1099 subcontractors",
      body: "Electrical contractors often have W-2 electricians and office staff plus 1099 subs for specialty or overflow work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and project costing",
      body: "Labor cost by job or project is central to electrical contracting profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Electrician hours can be captured with mobile apps, time clocks, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support job costing and overtime compliance.",
    },
    {
      heading: "Tax forms and contractor payments",
      body: "1099 subcontractors need 1099-NEC at year-end. Confirm your payroll provider includes 1099 runs and e-file without per-form fees. Running contractor payments through the same system as W-2 payroll keeps one record and simplifies reporting.",
    },
    {
      heading: "Ease of use for small operations",
      body: "Many electrical contractors have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is strong payroll software for electrical contractors balancing licensed electricians, apprentices, and 1099 specialty subs under one login with published pricing. Built-in time tracking and contractor self-service trim the email chains that usually accompany permit-heavy work. During your first two payroll runs, confirm federal and state tax deposits, verify overtime against service and project hours, and keep W-2 wages distinct from subcontractor payouts in every register. Add a test week with a bucket-truck crew, a low-voltage partner paid as 1099, and a permit hold day to see how partial weeks and adjustments behave. If you segment by service line or branch, scan those tags on payroll exports before trusting job cost feeds. You can add benefits or another office without changing payroll engines.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is purpose-built payroll software for electrical shops that already job-cost in QuickBooks and need labor dollars on the right projects automatically. Tie payroll to estimates, change orders, and actuals without CSV bridges. On early payrolls, reconcile at least one commercial job and one service truck to confirm labor, burden, and workers’ comp mappings match how your accountant closes. Flow hours from QuickBooks Time or another integrated tracker so travel, shop time, and field time do not get re-keyed. Validate multi-state withholding if you chase storms or large regional bids. When those pieces tie out, your electrical margin story stays credible to lenders and bonding agents.",
    },
    {
      heading: "OnPay",
      body: "OnPay is practical payroll software for electrical contractors who want flat base-plus-employee pricing and a single plan that still covers mixed W-2 and 1099 payroll. Human support matters when a journeyman’s license renewal hits the same week as quarterlies. Use trial payrolls to prove automated deposits, new-hire reporting, and clean 1099 handling for regular low-voltage or excavation partners. Import a pay period with blended regular and overtime across commercial versus residential work codes to stress rate tables. If you export to QuickBooks, confirm account mappings once with your bookkeeper so class tracking survives. Predictable bills help when job deposits and progress billings do not line up neatly.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to evaluate for electrical contracting groups that outgrow self-serve administration across several states, unions, or complex prevailing-wage jobs. Quoted implementations pair you with specialists who understand construction compliance calendars. After launch, audit tax registrations and deposit schedules for every state where crews temporarily work, not just your license address. Test cost-center or job allocations if you report labor by division to a parent builder or developer. If union fringe or certified payroll is in play, review sample registers with ADP before agencies ask for them. Compare serviced pricing to mid-market peers once those guardrails look solid.",
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
      q: "What is the best payroll software for electricians?",
      a: "Gusto is our top pick for most small electrical contractors: it handles W-2 electricians and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for electricians?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for electrical job costing and projects. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track electrician time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs.",
    },
    {
      q: "What payroll software is best for job costing for electrical contractors?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so project reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your electrical contracting accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
