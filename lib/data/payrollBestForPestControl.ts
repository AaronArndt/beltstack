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

export const PEST_CONTROL_PAGE_PROPS = {
  title: "Best Payroll Software for Pest Control Companies (2026)",
  subtitle:
    "Compare payroll software for pest control businesses, exterminators, and teams managing W-2 technicians plus 1099 subcontractors.",
  useCase: "pest-control",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Pest control companies need payroll that handles W-2 technicians and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or routes when you use QuickBooks. Our picks work for small and growing operations—from residential and commercial exterminators to teams that want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small pest control companies",
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
      badge: "Best for pest control companies using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job costing and service routes. Ideal when you run invoicing and books in QuickBooks. Pay techs and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing pest control teams",
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
      bestFor: "Best overall for small pest control",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Pest control using QuickBooks",
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
      bestFor: "Growing pest control teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 technicians and office vs 1099 subcontractors",
      body: "Pest control companies often have W-2 technicians and office staff plus 1099 subs for peak season or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and route costing",
      body: "Labor cost by job, route, or service call is central to pest control profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
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
      body: "Many pest control companies have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is dependable payroll software for pest control companies that dispatch licensed W-2 techs on routes while paying 1099 termite or wildlife specialists on bigger jobs. Contractor portals and automated tax work keep small offices compliant when spring swarms compress schedules. During your first payrolls, confirm deposits, overtime when callbacks extend evening routes, and reimbursements for PPE or mileage that match your handbook. Model a pay week with residential renewals, a commercial account with after-hours service, and a 1099 subcontractor payout to keep W-2 versus 1099 registers clean. If you separate residential from commercial departments, verify payroll dimensions before commission or route reports. Add benefits for inside sales when recurring revenue grows.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software pest control operators choose when QuickBooks already tracks service agreements, stops, and renewals, and they need labor mapped to those records for margin and sales crediting. One system keeps chemical and labor burden aligned with the routes finance already measures. On trial payrolls, reconcile payroll to a few active routes and a large initial service job to confirm hours post to the right customers or classes. Integrate QuickBooks Time or your route software so stop durations and drive time feed payroll without duplicate entry. Validate locals if municipalities add occupational or sick-leave rules. Clean feeds keep pricing disciplined when you bundle mosquito or termite programs.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for pest control teams that want flat per-person pricing while routes expand through acquisitions or seasonal marketing pushes. Support helps when a surge week stacks overtime on top of new-hire training pay. Use early payrolls to prove deposits, new-hire reporting for licensed tech onboarding, and 1099 workflows for recurring wildlife partners. Import hours with Saturday routes, reservice callbacks, and chemical stipends to confirm taxable versus non-taxable treatment matches policy. Map GL exports once if QuickBooks is downstream so branch or brand classes survive. Predictable fees help when truck leases and chemical invoices hit before monthly customer drafts.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to quote for pest control enterprises with multi-state branches, dealer networks, or franchise systems that need serviced payroll beyond mid-market self-serve. Implementation aligns earning codes with how you report labor to private equity or franchisors. After go-live, audit tax registrations for every state where roaming techs earn wages, not just corporate HQ. Test multi-location reporting if you separate residential from commercial P&L. If you centralize HR and payroll for acquisitions, validate parallel FEIN transitions with ADP during the first pay cycle after close. Compare serviced cost once those controls prove out.",
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
      q: "What is the best payroll software for pest control companies?",
      a: "Gusto is our top pick for most small pest control companies: it handles W-2 technicians and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for pest control?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for pest control job costing and service routes. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track tech time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets tech hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs or routes.",
    },
    {
      q: "What payroll software is best for job costing in pest control?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job and route reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your pest control accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
