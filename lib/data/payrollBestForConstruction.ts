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

export const CONSTRUCTION_PAGE_PROPS = {
  title: "Best Payroll Software for Construction Companies (2026)",
  subtitle:
    "Compare payroll software for construction businesses, subcontractor-heavy teams, and companies managing both W-2 employees and 1099 workers.",
  useCase: "construction",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Construction companies need payroll that handles W-2 field and office staff plus 1099 subcontractors, ties labor cost to jobs and job sites, and keeps tax forms and compliance straightforward. Our picks below work for small and growing construction operations—from those running books in QuickBooks to teams that want an all-in-one platform or full-service support. For more options by crew type, see our best payroll for contractors and our main payroll roundup.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small construction businesses",
      description:
        "All-in-one payroll with strong 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system—no sales cycle. Good for construction offices running payroll in-house.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for construction companies using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows straight into job costing and jobs. Ideal when you already run estimates, invoicing, and books in QuickBooks. Pay crews and subs in the same system.",
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
        "Flat pricing and one plan. Pay W-2 employees and 1099 subcontractors with tax forms included. Simple for office managers and small operations teams—works with any accounting software.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for growing construction teams",
      description:
        "Enterprise payroll and HR that scale to more employees and job sites. Custom pricing and optional dedicated support. Good when you're growing and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small construction",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; contractor portal; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Construction using QuickBooks",
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
      bestFor: "Growing construction teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 employees vs 1099 subcontractors",
      body: "Construction companies often have both W-2 field and office employees and 1099 subcontractors. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service portals let subs view pay stubs and documents without extra admin work.",
    },
    {
      heading: "Certified payroll and prevailing wage",
      body: "If you do public or prevailing-wage work, you may need certified payroll reporting (e.g. WH-347). Many general-purpose payroll tools don't build this in; you may use a dedicated certified payroll add-on or service. For typical commercial or residential work without prevailing-wage requirements, the picks on this page cover payroll and job costing well.",
    },
    {
      heading: "Multi-job-site payroll and labor allocation",
      body: "When labor works across multiple jobs or job sites, you need to allocate hours and cost by job for accurate job costing and reporting. QuickBooks Payroll does this natively—hours and labor cost post to the jobs you assign. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where if you use time tracking or manual allocation.",
    },
    {
      heading: "Labor cost tracking and job costing",
      body: "Construction accounting relies on labor cost by job. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job costing accurate without re-entry. If you use another accounting system, choose payroll that exports or syncs in a way you can map to jobs or cost codes.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Field time can be captured with time clocks, mobile apps, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours also support job costing and overtime compliance.",
    },
    {
      heading: "Tax forms and contractor payments",
      body: "1099 subcontractors need 1099-NEC at year-end. Confirm your payroll provider includes 1099 runs and e-file without per-form fees. Running contractor payments through the same system as W-2 payroll keeps one record of all payments and simplifies reporting.",
    },
    {
      heading: "Ease of use for office managers and small operations",
      body: "Construction offices often have one person or a small team running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already live in QuickBooks; ADP offers dedicated support when you're ready for it.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small construction businesses: W-2 and 1099 in one system, contractor portal, automatic tax forms, and no sales cycle. Office managers can run payroll and add subs without calling a rep. It scales as you add employees and job sites.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run estimates, invoicing, and books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to jobs for job costing—critical for construction. Pay crews and subcontractors in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for construction offices that want predictability. Contractor payments and tax forms are included. Works with any accounting software, including QuickBooks.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing construction teams that want scale and optional dedicated support. Multi-state payroll, more employees, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
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
      q: "What is the best payroll software for construction companies?",
      a: "Gusto is our top pick for most small construction companies: it handles W-2 employees and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and has no sales cycle. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for construction?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for construction job costing. If you run estimates, invoicing, and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "Do construction companies need certified payroll support?",
      a: "Only if you do public or prevailing-wage work that requires certified payroll (e.g. WH-347). Many general-purpose payroll tools don't include certified payroll; you may need a dedicated add-on or service. For typical commercial or residential construction without those requirements, the picks on this page cover payroll and job costing well.",
    },
    {
      q: "What payroll software is best for job costing?",
      a: "QuickBooks Payroll is best for job costing when you use QuickBooks: payroll and labor cost post to the jobs you assign, so job reports stay accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs natively. If job costing in QuickBooks is central to your construction accounting, QuickBooks Payroll is the fit.",
    },
  ] as BestForFaqItem[],
};
