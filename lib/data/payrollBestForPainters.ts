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

export const PAINTERS_PAGE_PROPS = {
  title: "Best Payroll Software for Painting Contractors (2026)",
  subtitle:
    "Compare payroll software for painting companies, residential and commercial painters, and teams managing W-2 crews plus 1099 subcontractors.",
  useCase: "painters",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Painting contractors need payroll that handles W-2 painters and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or projects when you use QuickBooks. Our picks work for small and growing operations—from residential and commercial painters to teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small painting companies",
      description:
        "All-in-one payroll with 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking for crews. No sales cycle—good for owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for painting companies using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job costing and projects. Ideal when you run invoicing and books in QuickBooks. Pay painters and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing painting teams",
      description:
        "Payroll and HR that scale to more crews and job sites. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small painting",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Painting using QuickBooks",
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
      bestFor: "Growing painting teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 painters and office vs 1099 subcontractors",
      body: "Painting companies often have W-2 painters and office staff plus 1099 subs for peak season or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and project costing",
      body: "Labor cost by job or project is central to painting profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
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
      heading: "Ease of use for small operations",
      body: "Many painting contractors have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is capable payroll software for painting contractors that mix W-2 crews, sprayers, and 1099 drywall or pressure-wash partners across residential and commercial sites. Self-serve tools and contractor portals keep color schedules from delaying payroll approvals. During your first payrolls, confirm deposits, overtime on long production weeks, and reimbursements for lift rentals or parking that should not distort taxable wages incorrectly. Model a pay cycle with a new construction job, a repaint with warranty touch-ups, and a 1099 scaffolding vendor to validate classifications side by side. If you track interior versus exterior divisions, verify dimensions on payroll exports before finance closes. Add another crew lead or benefits when backlog steadies.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software painting companies rely on when QuickBooks already handles estimates, change orders, and job P&L, and labor must post to each job automatically. True margin on repaint versus new construction depends on burdened payroll in the same ledger. On trial payrolls, reconcile labor to two active jobs with different spec levels and confirm burden, workers’ comp class, and materials pass-through reimbursements map as your accountant expects. Integrate QuickBooks Time so supers approve hours before payroll, including multi-site travel days. Check local taxes if you work across city lines on commercial towers. Clean job feeds keep bids honest when GCs compare labor rates.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for painting teams that want flat pricing clarity while scaling up for summer exterior season and trimming back in winter. Support helps when a GC delay pushes overtime the same week subs invoice. Use early payrolls to prove deposits, new-hire reporting, and 1099 handling for regular texture or spray partners. Import a payroll with per-job bonuses and warranty callback hours to see blended rates behave. Map GL accounts once if QuickBooks receives payroll entries so job classes stay aligned. Predictable fees help when paint houses invoice net-45 while payroll is weekly.",
    },
    {
      heading: "ADP",
      body: "ADP belongs in payroll software evaluations for painting enterprises spanning states, commercial GC programs, or union apprenticeship tracks that need deeper serviced compliance. Quoted onboarding aligns earning codes with how you report to developers and insurers. After go-live, audit tax registrations for jurisdictions where large commercial crews temporarily work. Test multi-branch labor splits if you separate residential from commercial books. If prevailing wage or certified payroll is on the horizon, review sample registers with ADP before the first agency submittal. Compare total serviced cost once those proofs look production-ready.",
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
      q: "What is the best payroll software for painting contractors?",
      a: "Gusto is our top pick for most small painting companies: it handles W-2 painters and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for painters?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for painting job costing and projects. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track crew time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets crew hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs.",
    },
    {
      q: "What payroll software is best for job costing in painting?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job and project reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your painting accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
