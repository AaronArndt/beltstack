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

export const HANDYMAN_BUSINESS_PAGE_PROPS = {
  title: "Best Payroll Software for Handyman Businesses (2026)",
  subtitle:
    "Compare payroll software for handyman businesses and teams managing W-2 workers plus 1099 subcontractors.",
  useCase: "handyman-business",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Handyman businesses need payroll that handles W-2 technicians and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or service calls when you use QuickBooks. Our picks work for small and growing operations—from solo handymen adding a helper to multi-trade teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small handyman businesses",
      description:
        "All-in-one payroll with 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking. No sales cycle—good for owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for handyman businesses using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job costing and service calls. Ideal when you run invoicing and books in QuickBooks. Pay techs and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing handyman teams",
      description:
        "Payroll and HR that scale to more techs and service areas. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small handyman",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Handyman using QuickBooks",
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
      bestFor: "Growing handyman teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 technicians and office vs 1099 subcontractors",
      body: "Handyman businesses often have W-2 techs and office staff plus 1099 subs for overflow or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and service-call costing",
      body: "Labor cost by job or service call is central to handyman profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Tech hours can be captured with mobile apps, time clocks, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support job costing and overtime compliance.",
    },
    {
      heading: "Tax forms and contractor payments",
      body: "1099 subcontractors need 1099-NEC at year-end. Confirm your payroll provider includes 1099 runs and e-file without per-form fees. Running contractor payments through the same system as W-2 payroll keeps one record and simplifies reporting.",
    },
    {
      heading: "Ease of use for small operations",
      body: "Many handyman businesses have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is approachable payroll software for handyman businesses that often start with the owner on the tools and add a W-2 helper or two plus rotating 1099 specialists. Published pricing and quick setup mean you can run payroll without a franchise-style sales process. During your first payrolls, confirm deposits, overtime when small jobs stack into long days, and reimbursements for small parts runs that should post cleanly. Run a test week with a mix of T&M tickets, flat-fee installs, and a 1099 electrician payout to ensure employee versus contractor reporting stays distinct. If you track vans or neighborhoods, verify tags on payroll detail before syncing to QuickBooks. Scale into benefits when you promote a lead tech to salary.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software handyman owners pick when QuickBooks already tracks customer tickets, estimates, and simple job costing, and they want labor dollars on those jobs without double entry. Solo operators scaling into a micro-team especially benefit from one familiar UI. On trial payrolls, reconcile payroll to a few representative service calls and confirm labor maps to the income accounts or classes you use for reporting. Pair payroll with QuickBooks Time if you need mobile clocks for multi-stop days. Validate local taxes if you hop municipalities on small jobs. Clean ties keep your true hourly cost visible when you price recurring maintenance.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for handyman shops that want flat per-person pricing and full-service taxes while occasionally paying 1099 trades for work outside your license. Support helps when a part-time helper’s first payroll lands the same week as quarterlies. Use early runs to prove deposits, new-hire reporting, and 1099 readiness for repeat plumbers or electricians you pay as subs. Import a payroll with Saturday makeups and mileage reimbursements to confirm taxable versus non-taxable treatment matches your policy. Map GL exports once if QuickBooks is downstream so each service line still ties out. Predictable bills matter on thin margins.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to consider for handyman franchises or multi-city brands that outgrow owner-operated payroll administration and need serviced compliance at scale. Quoted programs add dedicated teams as you standardize hiring across territories. After go-live, audit tax registrations for every metro where vans actually work, not just your mailing address. Test multi-location reporting if royalty or marketing fees allocate by branch. If you convert subs to W-2 as you tighten compliance, walk those transitions with ADP during the first month. Compare serviced cost to self-serve tools once those workflows stabilize.",
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
      q: "What is the best payroll software for handyman businesses?",
      a: "Gusto is our top pick for most small handyman businesses: it handles W-2 technicians and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for handyman?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for handyman job costing and service calls. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track tech time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets tech hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs.",
    },
    {
      q: "What payroll software is best for job costing in handyman?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job and service-call reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your handyman accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
