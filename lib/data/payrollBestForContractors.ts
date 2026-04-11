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

export const CONTRACTORS_PAGE_PROPS = {
  title: "Best Payroll Software for Contractors (2026)",
  subtitle:
    "Compare payroll software built for contractors and trade businesses. Top picks for 1099 payments, mixed W-2/contractor crews, and job-costing-friendly workflows.",
  useCase: "contractors",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Contractors and trade businesses need payroll that handles both W-2 employees and 1099 subs, keeps labor cost tied to jobs when you use QuickBooks, and doesn't add unnecessary complexity. Our picks below excel at contractor support, tax forms, and ease of use.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for contractors",
      description:
        "All-in-one payroll with strong 1099 support, contractor self-service, and automatic tax forms. No sales cycle—published pricing and fast setup.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for QuickBooks + job costing",
      description:
        "Payroll inside QuickBooks so labor cost flows straight into job costing. Ideal if you already run your books in QuickBooks and pay crews and subs.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for contractors",
      description:
        "Flat pricing and straightforward 1099 runs. Contractor payments and tax forms without a tier maze. Works with any accounting software.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "Best overall for contractors",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Contractor portal; 1099-NEC; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "QuickBooks + job costing",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost in QuickBooks jobs",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Best value",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Flat pricing; 1099 included",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "1099 and mixed crews",
      body: "If you pay both W-2 employees and 1099 contractors, choose a platform that handles both in one place with clear tax treatment. Contractor self-service portals let subs view pay stubs and documents without extra back-and-forth.",
    },
    {
      heading: "Tax forms and compliance",
      body: "Look for automatic 1099-NEC (and 1099-MISC where applicable) and year-end filing. Some providers charge extra for 1099 e-file—confirm it's included. Multi-state contractors need a provider that handles state withholding and reporting.",
    },
    {
      heading: "Job costing and accounting",
      body: "If you run job-based books in QuickBooks, payroll that posts labor to jobs saves time and keeps reporting accurate. QuickBooks Payroll does this natively; Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way.",
    },
    {
      heading: "Ease of use and support",
      body: "Contractors often wear many hats. Pick payroll you can set up and run without a long sales cycle. Published pricing (Gusto, OnPay) makes comparison easier; QuickBooks Payroll fits if you're already in the ecosystem.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is capable payroll software for contractors who mix W-2 crews and 1099 trade partners and want contractor self-service without committing to a single accounting platform. Published pricing and fast onboarding help small GCs and trade shops stand up compliant payroll between jobs. During your first payrolls, confirm federal and state deposits, validate that subcontractor payments never inflate wage tax bases, and run at least one dual-type cycle with both employee wages and 1099 payouts on the same approval path. If you track cost codes or locations, export payroll detail and confirm dimensions still align with how your PM or accountant allocates labor. Test new-hire reporting for a fresh apprentice and year-end 1099 prep for a repeat sub before busy season. The stack scales into benefits when you promote leads to salary.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is purpose-built payroll software for contractors who already estimate, bill, and job-cost inside QuickBooks and need labor dollars on the correct jobs automatically. Eliminating CSV bridges means supers, accountants, and owners argue less about true burdened cost. On trial payrolls, post payroll against two active jobs and confirm labor, burden, workers’ comp class mappings, and any equipment allocations hit the accounts your job reports expect. Flow approved hours from QuickBooks Time or another integrated tracker so drive time and overtime are not retyped after field approval. Validate multi-state tax setups if crews earn revenue across lines. When registers tie to job profitability, you have evidence the stack will survive your next bond or credit review.",
    },
    {
      heading: "OnPay",
      body: "OnPay is practical payroll software for contractors who want one transparent plan with flat base-plus-employee pricing while still paying large 1099 pools alongside smaller W-2 teams. Support is included when a lien-sensitive payroll question hits the same week as a draw deadline. Use early payrolls to prove automated deposits, clean contractor versus employee registers, and included 1099 e-file workflows for repeat subs. Import a pay period with blended overtime across two jobs to stress any dimensions you export to QuickBooks or another GL. Map accounts once with your bookkeeper so class tracking survives payroll journals. Predictable fees help when job deposits and supplier invoices do not align with payroll Fridays.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for contractors?",
      a: "Gusto is our top pick for most contractors: it handles W-2 and 1099 in one place, has a contractor self-service portal, and offers published pricing. QuickBooks Payroll is best if you already use QuickBooks and want labor cost in job costing. OnPay is a strong value option with flat pricing and solid 1099 support.",
    },
    {
      q: "Can I pay 1099 contractors and W-2 employees with the same software?",
      a: "Yes. Gusto, QuickBooks Payroll, and OnPay all support both. You run payroll for employees and contractor payments in the same system, and the platform handles the right tax treatment and forms (W-2 vs 1099-NEC) for each.",
    },
    {
      q: "Which payroll software works best with QuickBooks for job costing?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs and accounts—no sync or export. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way. If job costing in QuickBooks is critical, QuickBooks Payroll is the fit.",
    },
    {
      q: "How much does contractor payroll software cost?",
      a: "Many providers charge a base fee plus per person per month (employees and often contractors). Gusto often starts around $49/month base; OnPay often around $40/month base; QuickBooks Payroll around $30/month. Confirm that 1099 runs and e-file are included so you don't get hit with add-on fees.",
    },
  ] as BestForFaqItem[],
};
