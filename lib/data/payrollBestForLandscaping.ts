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

export const LANDSCAPING_PAGE_PROPS = {
  title: "Best Payroll Software for Landscaping Companies (2026)",
  subtitle:
    "Compare payroll software for landscaping businesses, lawn care companies, and teams managing crew payroll plus seasonal workers and 1099 subs.",
  useCase: "landscaping",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Landscaping and lawn care companies need payroll that handles W-2 crew and office staff, seasonal hires, and 1099 subcontractors—with labor cost that ties to properties or jobs when you use QuickBooks. Our picks work for small and growing operations, from those running books in QuickBooks to teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small landscaping companies",
      description:
        "All-in-one payroll with 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking helps with crew hours. No sales cycle—good for owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for landscaping companies using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job or property costing. Ideal when you run invoicing and books in QuickBooks. Pay crews and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
        "Flat pricing and one plan. Pay W-2 employees and 1099 subcontractors with tax forms included. Simple for small teams and seasonal workforce—works with any accounting software. Support included.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for growing landscaping teams",
      description:
        "Payroll and HR that scale to more crews and locations. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small landscaping",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Landscaping using QuickBooks",
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
      bestFor: "Growing landscaping teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 crew and office vs 1099 subcontractors",
      body: "Landscaping companies often have W-2 crew and office staff plus 1099 subs for specialized work (e.g. irrigation, tree work). Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Seasonal workforce and flexibility",
      body: "Peak season means more crew; off-season may mean fewer. Choose payroll that makes it easy to add and remove seasonal employees without long contracts or complex setup. Gusto and OnPay are month-to-month and straightforward; QuickBooks Payroll fits the same pattern when you're already in QuickBooks.",
    },
    {
      heading: "Job, route, or property costing",
      body: "When labor works across properties, routes, or jobs, you need labor cost allocated correctly for pricing and profit. QuickBooks Payroll posts labor to jobs in QuickBooks—ideal if you run books there. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking hours.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Crew hours can be captured with mobile apps, time clocks, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support job costing and overtime compliance.",
    },
    {
      heading: "Tax forms and contractor payments",
      body: "1099 subcontractors need 1099-NEC at year-end. Confirm your payroll provider includes 1099 runs and e-file without per-form fees. Running contractor payments through the same system as W-2 payroll keeps one record and simplifies reporting.",
    },
    {
      heading: "Ease of use for small teams",
      body: "Many landscaping companies have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is solid payroll software for landscaping companies that blend seasonal W-2 crews, year-round leads, and 1099 subs for specialty installs or snow overflow. Self-serve onboarding helps when spring hiring spikes before mulch season. During your first payrolls, confirm deposits, overtime on long daylight routes, and easy add-remove for temps without breaking tax accounts. Run a test cycle with maintenance contracts, a one-off hardscape partner paid 1099, and per-job bonuses to see how reimbursements and class splits behave. If you tag crews by route or branch, scan payroll detail before pushing to job costing. You can layer benefits for office staff while field headcount still flexes.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software landscaping operators pick when QuickBooks already tracks properties, phases, or jobs, and they need crew labor to post for gross margin by account. One ledger keeps maintenance recurring revenue honest against direct labor. On trial payrolls, reconcile payroll to a few active contracts and a large spring clean job to confirm hours land on the right customers or jobs. Sync QuickBooks Time or another tracker so drive time, shop time, and crew lead time do not get retyped. Validate locals if municipalities layer occupational taxes on top of state withholding. Clean feeds protect pricing when you renew HOA bids.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for landscaping businesses that want flat, understandable pricing while crews grow and shrink with the seasons. Support helps when a late freeze compresses installs into the same pay week as overtime snow pushes. Use early payrolls to prove deposits, new-hire reporting for H-2A adjacent workflows if you hire domestically, and 1099 payouts for irrigation or lighting partners. Import hours with Saturday makeups and split crews across two branches to stress any dimensions you export. Map accounting once if QuickBooks is downstream so class tracking survives. Predictable bills matter when fertilizer invoices hit before client autopays clear.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to evaluate for landscaping enterprises with multi-state routes, nursery divisions, or snow operations that need serviced payroll depth as they scale. Quoted programs align complex earning codes with how you report branch P&L to investors or franchisors. After go-live, audit tax registrations for every state where seasonal crews camp during large municipal contracts, not just your yard address. Test multi-location labor splits if you separate design-build from maintenance books. If union municipal work or prevailing wage appears, review certified payroll samples with ADP before agencies ask. Benchmark total serviced cost after those proofs.",
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
      q: "What is the best payroll software for landscaping companies?",
      a: "Gusto is our top pick for most small landscaping companies: it handles W-2 crew and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job or property costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle seasonal workers and subcontractors?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support W-2 employees (including seasonal) and 1099 subcontractors in the same account. You can add and remove seasonal hires as needed; contractor payments and 1099-NEC are handled in the same system.",
    },
    {
      q: "What payroll software works best with QuickBooks for landscaping?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs or properties—ideal for landscaping job costing. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I handle crew time tracking for payroll?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets crew hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs or properties.",
    },
    {
      q: "What payroll software is best for job costing in landscaping?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs or properties you assign. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job or property costing in QuickBooks is central to your landscaping accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
