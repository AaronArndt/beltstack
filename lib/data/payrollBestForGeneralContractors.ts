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

export const GENERAL_CONTRACTORS_PAGE_PROPS = {
  title: "Best Payroll Software for General Contractors (2026)",
  subtitle:
    "Compare payroll software for general contractors (GCs) and teams managing W-2 crews plus 1099 subcontractors across trades.",
  useCase: "general-contractors",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "General contractors need payroll that handles W-2 crews and office staff, 1099 subcontractors across trades, and labor cost that ties to jobs or projects when you use QuickBooks. Our picks work for small and growing GC operations—from those running books in QuickBooks to teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small general contractors",
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
      badge: "Best for GCs using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job costing and projects. Ideal when you run invoicing and books in QuickBooks. Pay crews and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing GC teams",
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
      bestFor: "Best overall for small GCs",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "GCs using QuickBooks",
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
      bestFor: "Growing GC teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 crews and office vs 1099 subcontractors",
      body: "General contractors often have W-2 superintendents and office staff plus 1099 subs across trades (electrical, plumbing, framing, etc.). Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and project costing",
      body: "Labor cost by job or project is central to GC profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
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
      body: "Many general contractors have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is modern payroll software for general contractors coordinating superintendents, carpenters, and steady 1099 trades without a long enterprise purchase. Contractor self-service and automated filings keep owner-operated GC offices from living in PDFs. During your first payroll cycles, confirm deposits, job or phase tags on labor (if you track them), and clean separation between employee payroll and subcontractor payments that should not hit wage reports. Model a pay week with multi-job supers, a temp labor spike, and a long-standing framer paid 1099 to validate blended scenarios. If you allocate overhead to jobs, ensure payroll exports still match how your PM software consumes labor dollars. Add another division or benefits when retainage finally clears.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software GCs pick when QuickBooks already runs job costing, AIA-style billing, or internal P&L by project, and payroll must post labor straight to those jobs. One system reduces arguments between accounting and field about true burdened cost. On trial payrolls, reconcile labor to two active projects and confirm burden, workers’ comp class, and equipment allocation codes behave. Pipe in time from QuickBooks Time or another tracker so field hours, drive time, and overtime do not get retyped after the superintendent approves them. Validate multi-state setups if you chase regional work. Trusted job cost feeds protect estimates on the next negotiated contract.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for general contractors who want predictable pricing and full-service taxes while paying large pools of subs and smaller W-2 field staff from one account. Support helps when a lien-sensitive payroll question lands the day draws are due. Use early runs to prove deposit cadence, new-hire reporting, and 1099 readiness for repeat specialty contractors. Stress a payroll with blended overtime across two concurrent jobs to see if cost dimensions you care about survive export. Confirm GL mapping to QuickBooks or another ledger if finance closes by cost code. Flat invoices matter when cash is tied up in retention.",
    },
    {
      heading: "ADP",
      body: "ADP belongs on the payroll software short list for general contractors scaling across states, joint ventures, or union-heavy verticals that need serviced compliance depth. Quoted programs bring implementation rigor for complex earning codes and reporting packages owners demand. After go-live, audit tax accounts for every jurisdiction where you temporarily park crews, not just your home office. Validate multi-entity or intercompany labor allocations if you use siloed LLCs per project. If certified payroll is routine, walk sample outputs with ADP before agencies compare them to your certified apps. Compare total serviced cost once those checkpoints pass.",
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
      q: "What is the best payroll software for general contractors?",
      a: "Gusto is our top pick for most small general contractors: it handles W-2 crews and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for general contractors?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for GC job costing and projects. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track crew time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets crew hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs.",
    },
    {
      q: "What payroll software is best for job costing for general contractors?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job and project reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your GC accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
