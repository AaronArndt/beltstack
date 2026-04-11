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

export const NINE_CONTRACTORS_PAGE_PROPS = {
  title: "Best Payroll Software for 1099 Contractors (2026)",
  subtitle:
    "Compare payroll software that makes paying 1099 contractors simple. Top picks for contractor payments, 1099-NEC filing, contractor portals, and mixed W-2/1099 teams.",
  useCase: "1099-contractors",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Paying 1099 contractors means running contractor payments, tracking for year-end 1099-NEC, and often handling W-2 employees in the same system. The best tools include 1099 runs and e-file without extra fees, give contractors access to pay stubs and documents, and keep setup straightforward.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for 1099 contractors",
      description:
        "Run 1099 contractor payments and W-2 payroll in one place. Contractor self-service portal, automatic 1099-NEC, and published pricing. No add-on fees for 1099 e-file.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for 1099 payments",
      description:
        "Flat pricing with 1099 contractor payments and tax forms included. One plan, no tier maze. Contractor portal and support included—ideal for teams that pay mostly or only 1099.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for QuickBooks + 1099",
      description:
        "Pay 1099 contractors and employees inside QuickBooks. Labor cost posts to jobs; 1099 runs and year-end filing available. Best if you already run your books in QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "Best overall for 1099 contractors",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Contractor portal; 1099-NEC included",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Best value for 1099",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Flat pricing; 1099 and e-file included",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "QuickBooks users",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 + labor in QuickBooks jobs",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "1099 payments and year-end forms",
      body: "Your software should run contractor payments and generate 1099-NEC (and 1099-MISC where applicable) for year-end. Confirm that 1099 e-file is included—some providers charge extra. Tracking payments throughout the year so year-end is accurate is essential.",
    },
    {
      heading: "Contractor self-service",
      body: "A contractor portal lets subs log in to see pay stubs, payment history, and tax documents without you sending PDFs. It reduces back-and-forth and keeps records in one place. Gusto and OnPay offer this; QuickBooks Payroll has contractor access as well.",
    },
    {
      heading: "Mixed W-2 and 1099",
      body: "If you have both employees and contractors, use one system for both. Payroll treats W-2 and 1099 differently (withholding vs. no withholding, different forms). The best tools handle both in the same account and keep reporting clear.",
    },
    {
      heading: "Pricing and 1099 fees",
      body: "Some providers charge per 1099 run or per form at year-end. Look for included 1099 runs and e-file so you can budget. Gusto and OnPay include 1099; QuickBooks Payroll may have 1099 e-file on certain plans—check before you commit.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is strong payroll software for businesses that primarily pay 1099 contractors yet still need occasional W-2 staff in the same compliant workspace. Contractor portals, documented payment history, and bundled 1099-NEC e-file reduce the January scramble when subs ask for duplicates. During your first payment runs, schedule a contractor payout alongside any W-2 payroll and confirm tax withholding only applies where it should while 1099 amounts stay out of wage tax liabilities. Open the year-end checklist early and run a dummy contractor through W-9 capture so TIN matching and box totals look right before you have dozens of forms. If you reimburse pass-through expenses, verify those lines do not inflate reportable nonemployee compensation incorrectly on Form 1099-NEC. Add benefits modules later without migrating contractor workflows.",
    },
    {
      heading: "OnPay",
      body: "OnPay is straightforward payroll software for 1099-heavy companies that want flat monthly pricing with contractor payments, W-9 tracking, and 1099 filing included in the same plan you use for payroll taxes. Support helps when a sub disputes how a bonus was classified mid-year. Use trial cycles to prove contractor payments post cleanly, federal and state obligations for any W-2 employees still calculate, and 1099 batches export without surprise per-form fees. Pay the same person as both employee and contractor in separate roles only if your policy truly supports it, and watch registers during the test to catch misclassification early. If you sync to accounting software, reconcile one month of contractor detail to confirm expense accounts map predictably. Predictable billing matters when contractor counts swing monthly.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is natural payroll software for 1099 workflows when QuickBooks already carries your jobs, COGS, and vendor spend, and you want contractor checks to land on the right projects for costing. One ledger keeps subcontractor labor visible next to materials without manual journals. On your first contractor payments, post to a sample job and confirm the expense hits the subcontractor or labor account your estimates expect, then verify any 1099 tracking flags QuickBooks uses for year-end. If you also run W-2 payroll, process both in the same test month and confirm liabilities segregate correctly in the payroll center. Double-check whether your subscription tier includes 1099 e-file so January is not a last-minute upgrade. When job reports tie, you have proof the integration will survive audit questions.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for 1099 contractors?",
      a: "Gusto and OnPay are our top picks for paying 1099 contractors: both include contractor payments, 1099-NEC filing, and contractor portals without extra fees. QuickBooks Payroll is best if you already use QuickBooks and want 1099 and labor cost in the same system.",
    },
    {
      q: "Do I need payroll software to pay 1099 contractors?",
      a: "You can pay contractors without dedicated payroll software, but tracking payments for 1099-NEC and managing W-2 employees in another system gets messy. Payroll software keeps contractor payments, year-end forms, and (if you have them) employee payroll in one place.",
    },
    {
      q: "Is 1099 e-file included in payroll software?",
      a: "It varies. Gusto and OnPay include 1099 e-file. Some providers charge per 1099 or per filing. Check whether 1099-NEC (and 1099-MISC if needed) are included and whether there are per-contractor or per-form fees before you sign up.",
    },
    {
      q: "Can contractors see their pay stubs online?",
      a: "Yes, with most modern payroll tools. Gusto and OnPay offer contractor portals where subs can log in to view payment history, pay stubs, and tax documents. QuickBooks Payroll has contractor access as well. That reduces the need to email statements manually.",
    },
  ] as BestForFaqItem[],
};
