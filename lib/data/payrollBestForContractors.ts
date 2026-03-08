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
      startingPrice: "$40/mo",
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
      startingPrice: "$40/mo",
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
      body: "Gusto is our top pick for most contractor businesses: transparent pricing, strong 1099 support, contractor portal, and no lock-in to one accounting system. It fits mixed W-2/1099 crews and scales from a few people to dozens.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you live in QuickBooks for estimates, invoicing, and job costing, QuickBooks Payroll keeps payroll and labor cost in the same system. No sync or export—payroll posts to the right accounts and jobs. Best for contractors who already rely on QuickBooks.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers similar contractor-friendly features to Gusto with a simpler pricing structure: one plan, flat base plus per person. 1099 runs and support are included. A solid choice if you want value and clarity without the full Gusto feature set.",
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
      a: "Many providers charge a base fee plus per person per month (employees and often contractors). Gusto and OnPay typically start around $40/month base; QuickBooks Payroll around $30/month. Confirm that 1099 runs and e-file are included so you don't get hit with add-on fees.",
    },
  ] as BestForFaqItem[],
};
