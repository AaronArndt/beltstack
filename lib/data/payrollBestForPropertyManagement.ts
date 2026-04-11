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

export const PROPERTY_MANAGEMENT_PAGE_PROPS = {
  title: "Best Payroll Software for Property Management (2026)",
  subtitle:
    "Compare payroll software for property management companies managing W-2 on-site staff, leasing agents, and maintenance crews plus 1099 contractors.",
  useCase: "property-management",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Property management companies need payroll that handles W-2 on-site staff, leasing agents, maintenance crews, and office employees—plus 1099 contractors for repairs and turnover work. Our picks work for small and growing operations, from single-property managers to multi-site portfolios, whether you want an all-in-one platform or simple flat-rate payroll that syncs with your accounting.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small property management companies",
      description:
        "All-in-one payroll with 1099 support for contractors, self-service for employees and subs, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking. No sales cycle—good for owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for property management using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into property or job costing. Ideal when you run books and owner statements in QuickBooks. Pay staff and 1099 contractors in the same system; time tracking can tie hours to properties or projects.",
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
      badge: "Best for growing property management portfolios",
      description:
        "Payroll and HR that scale to more properties and staff. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small property management",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 contractors; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Property management using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost by property/job; job costing",
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
      bestFor: "Growing property management portfolios",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 staff vs 1099 contractors",
      body: "Property management often has W-2 on-site staff, leasing agents, and maintenance employees plus 1099 contractors for repairs, turnover, and specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets vendors view pay stubs without extra admin.",
    },
    {
      heading: "Labor cost by property or job",
      body: "Allocating labor cost by property or job is central to property management reporting and owner statements. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps property-level costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Staff hours—on-site, leasing, maintenance—can be captured with time clocks, mobile apps, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support property costing and overtime compliance.",
    },
    {
      heading: "Multi-state and compliance",
      body: "Property managers with portfolios across states need payroll that handles multi-state tax registration, filing, and compliance. All of our picks support multi-state; ADP and full-service options add dedicated support when you have more locations or complexity.",
    },
    {
      heading: "Ease of use for small operations",
      body: "Many property management companies have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is practical payroll software for property management companies that employ W-2 leasing and maintenance coordinators while paying 1099 vendors for turnovers, landscaping, or specialty repairs. Self-serve onboarding helps boutique PM shops compete with national platforms on back-office efficiency. During your first payrolls, confirm deposits, overtime when month-end move-outs stack work orders, and reimbursements for mileage or lockbox runs that match your employee handbook. Model a pay week with portfolio staff, a centralized bookkeeper, and a 1099 turnover crew invoice to keep W-2 versus 1099 registers audit-friendly. If you tag staff by region or owner group, verify payroll dimensions before owner statements. Add benefits when you hire a second property accountant.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software property managers choose when QuickBooks already tracks owner statements, trust accounts, and property-level P&L, and they need payroll burden aligned with the same classes owners review. Clean labor allocation reduces arguments during annual budget meetings. On trial payrolls, reconcile payroll to a few representative properties or owner groups and confirm wages map to the jobs or classes your reporting package expects. Integrate QuickBooks Time if maintenance techs clock by property so approvals feed payroll without spreadsheets. Validate multi-state rules if you manage portfolios across borders or have remote corporate staff. Trusted feeds keep management fees and pass-through expenses credible.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for PM firms that want flat per-person pricing and full-service taxes while portfolios grow through acquisitions or owner onboarding waves. Support helps when a large lease-up weekend pushes overtime for showing agents and coordinators. Use early payrolls to prove deposits, new-hire reporting for rapid leasing hires, and 1099 workflows for recurring cleaning or punch-list partners. Import a payroll with bonuses tied to occupancy targets and reimbursements for owner-meeting travel to confirm taxable treatment matches policy. Map GL exports once if QuickBooks receives payroll so each owner class ties out. Predictable fees help when management income lags owner distributions.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to quote for property management enterprises with multistate portfolios, REIT-adjacent reporting, or large onsite staff pools that need serviced payroll beyond mid-market self-serve. Implementation aligns earning codes with how you report burden to institutional owners and lenders. After go-live, audit tax registrations for every state where onsite staff work, not just the corporate entity address. Test multi-entity payroll if you silo associations under different FEINs. If unionized maintenance or prevailing wage on capital projects applies, review certified outputs with ADP before agencies compare them to your certified apps. Compare serviced cost once those proofs pass.",
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
      q: "What is the best payroll software for property management?",
      a: "Gusto is our top pick for most small property management companies: it handles W-2 staff and 1099 contractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in property or job costing. OnPay is a strong value option; ADP fits growing portfolios that want full-service support.",
    },
    {
      q: "Can payroll software handle contractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 contractors in the same account. You run payroll for staff and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for property management?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for property-level or job costing and owner statements. If you run books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I allocate staff labor cost by property?",
      a: "QuickBooks Payroll posts labor to jobs you assign, so you can allocate cost by property or project. Gusto and OnPay sync payroll to QuickBooks; you can use classes, jobs, or accounts to assign cost in your chart of accounts. Time tracking that ties hours to properties (e.g. QuickBooks Time with job codes) helps keep allocation accurate.",
    },
    {
      q: "Do property managers need multi-state payroll?",
      a: "If you have staff or properties in more than one state, yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support multi-state payroll with the right tax registration, filing, and deposits. Choose based on your headcount, whether you use QuickBooks, and whether you want dedicated support (ADP) or self-serve (Gusto, OnPay).",
    },
  ] as BestForFaqItem[],
};
