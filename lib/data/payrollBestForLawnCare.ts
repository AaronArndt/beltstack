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

export const LAWN_CARE_PAGE_PROPS = {
  title: "Best Payroll Software for Lawn Care Companies (2026)",
  subtitle:
    "Compare payroll software for lawn care businesses, landscaping crews, and teams managing W-2 workers plus 1099 subcontractors.",
  useCase: "lawn-care",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Lawn care companies need payroll that handles W-2 crews and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or routes when you use QuickBooks. Our picks work for small and growing operations—from seasonal mowing crews to full-service lawn and landscape teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small lawn care companies",
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
      badge: "Best for lawn care companies using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job costing and routes. Ideal when you run invoicing and books in QuickBooks. Pay crews and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing lawn care teams",
      description:
        "Payroll and HR that scale to more crews and service areas. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small lawn care",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Lawn care using QuickBooks",
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
      bestFor: "Growing lawn care teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 crews and office vs 1099 subcontractors",
      body: "Lawn care companies often have W-2 crews and office staff plus 1099 subs for peak season or overflow work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and route costing",
      body: "Labor cost by job, route, or property is central to lawn care profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
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
      body: "Many lawn care companies have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is dependable payroll software for lawn care companies that run tight routes with W-2 mowers and occasional 1099 aeration or irrigation partners. Transparent pricing and fast setup help when spring renewals flood the schedule overnight. During your first payrolls, verify deposits, overtime when makeup Saturdays stack after rain, and seasonal onboarding or offboarding that does not break tax profiles mid-year. Run a test with per-stop bonuses, chemical reimbursement stipends, and a subcontractor aeration payout to confirm classifications stay defensible. If you separate maintenance from fertilization departments, check payroll tags before exporting to accounting. Add benefits for office dispatchers while crews still flex seasonally.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software lawn care operators choose when QuickBooks already tracks route density, customer profitability, or job costing, and they need labor mapped to those records. Route-level margin improves when payroll posts without manual spreadsheets. On trial payrolls, tie labor to a few representative residential routes and a commercial contract to confirm hours and burden land on the right jobs or classes. Integrate QuickBooks Time or route software exports so crew clocks, travel, and shop time feed payroll accurately. Validate local taxes if you serve multiple municipalities from one yard. Trusted numbers keep renewal pricing disciplined.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for lawn care teams that want one flat plan covering spikes in summer headcount and lean winter crews without renegotiating tiers. Support answers when a crew lead’s PTO hits the same week as a fertilizer push. Use early payrolls to prove deposits, new-hire reporting for rapid spring hiring, and 1099 payouts for specialty partners. Import a payroll with split crews across two trucks and blended overtime from long July days to stress any cost dimensions you care about. Map GL lines once if QuickBooks receives entries so route classes stay intact. Predictable fees help when chemical bills arrive before monthly client charges.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to quote for lawn care enterprises adding branches, franchise territories, or multi-state fertilization programs that need serviced payroll muscle. Implementation aligns earning codes with how you report branch EBITDA. After go-live, audit tax setups for every state where seasonal expansion crews actually work, not just headquarters. Test multi-location labor reporting if you separate residential from commercial P&L. If you acquire another brand, validate parallel FEIN payrolls and intercompany allocations the way auditors will ask. Compare serviced pricing after those checkpoints pass.",
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
      q: "What is the best payroll software for lawn care companies?",
      a: "Gusto is our top pick for most small lawn care companies: it handles W-2 crews and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for lawn care?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for lawn care job costing and routes. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track crew time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets crew hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs or routes.",
    },
    {
      q: "What payroll software is best for job costing in lawn care?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job and route reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your lawn care accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
