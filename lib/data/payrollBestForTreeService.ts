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

export const TREE_SERVICE_PAGE_PROPS = {
  title: "Best Payroll Software for Tree Service Companies (2026)",
  subtitle:
    "Compare payroll software for tree service businesses, arborists, and teams managing W-2 crews plus 1099 subcontractors.",
  useCase: "tree-service",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Tree service companies need payroll that handles W-2 crews and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or projects when you use QuickBooks. Our picks work for small and growing operations—from arborists and tree removal crews to full-service tree care teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small tree service companies",
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
      badge: "Best for tree service companies using QuickBooks",
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
      badge: "Best for growing tree service teams",
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
      bestFor: "Best overall for small tree service",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Tree service using QuickBooks",
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
      bestFor: "Growing tree service teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 crews and office vs 1099 subcontractors",
      body: "Tree service companies often have W-2 climbers and crew plus 1099 subs for peak demand or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and project costing",
      body: "Labor cost by job or project is central to tree service profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
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
      body: "Many tree service companies have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is strong payroll software for tree service companies that mix W-2 climbers and ground crews with 1099 crane, chipper, or trucking partners on hazardous jobs. Self-serve onboarding helps when storm work forces rapid crew adds without time for enterprise sales cycles. During your first payrolls, confirm deposits, overtime after long daylight storm pushes, and hazard or premium pay types if you use them. Run a test week with a municipal contract, a residential takedown, and a 1099 heavy-equipment invoice to ensure classifications and reimbursements read clearly on registers. If you track divisions for PHC versus removals, verify payroll dimensions before exporting to accounting. Layer benefits for office dispatch when emergency volume stabilizes.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software tree contractors pick when QuickBooks already estimates jobs, tracks equipment burden, and needs crew labor posted to each work order automatically. True job margin after chipper hours and disposal fees depends on payroll hitting the right jobs. On trial payrolls, reconcile payroll to a large removal and a pruning maintenance contract to confirm labor, burden, and equipment allocation codes behave. Integrate QuickBooks Time or another field tracker so crew lead approvals flow into payroll before Friday cutoff. Validate multi-state withholding if chase crews work across lines after weather events. Clean job ties keep insurance and municipal bids credible.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for tree service teams that want flat pricing clarity while scaling storm response crews up and down within weeks. Support helps when overtime from emergency callbacks stacks on top of scheduled municipal work. Use early payrolls to prove deposits, new-hire reporting for rapid hires, and 1099 payouts for repeat crane operators. Import a payroll with per-job bonuses, stump grinding reimbursements, and split crews across two territories to stress export mappings. Map GL accounts once if QuickBooks is downstream so job classes stay intact. Predictable bills help when diesel and disposal cash out before customer checks clear.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to evaluate for tree enterprises spanning regions, utility contracts, or municipal programs that need serviced payroll muscle and deeper HR compliance. Quoted implementations align complex earning codes with how you report to cities and insurers. After go-live, audit tax registrations for every state where storm crews temporarily bunk, not just your shop address. Test multi-branch labor reporting if you separate residential from utility books. If union line-clearance or prevailing wage work is in play, review certified payroll samples with ADP before agencies compare them to your tickets. Benchmark total serviced cost after those proofs.",
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
      q: "What is the best payroll software for tree service companies?",
      a: "Gusto is our top pick for most small tree service companies: it handles W-2 crews and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for tree service?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for tree service job costing and projects. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track crew time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets crew hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs.",
    },
    {
      q: "What payroll software is best for job costing in tree service?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job and project reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your tree service accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
