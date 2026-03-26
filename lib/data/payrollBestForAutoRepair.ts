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

export const AUTO_REPAIR_PAGE_PROPS = {
  title: "Best Payroll Software for Auto Repair Shops (2026)",
  subtitle:
    "Compare payroll software for auto repair shops and mechanics managing W-2 technicians and service staff plus 1099 subcontractors.",
  useCase: "auto-repair",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Auto repair shops need payroll that handles W-2 technicians and service writers, 1099 subcontractors when you sublet work, and labor cost that ties to jobs or repair orders when you use QuickBooks. Our picks work for small and growing shops—from single-bay operations to multi-location stores—whether you want an all-in-one platform or simple flat-rate payroll that syncs with your books.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small auto repair shops",
      description:
        "All-in-one payroll with 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking. No sales cycle—good for shop owners and office managers running payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for auto repair shops using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job or repair-order costing. Ideal when you run invoicing and books in QuickBooks. Pay techs and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing auto repair shops",
      description:
        "Payroll and HR that scale to more techs and locations. Custom pricing and optional dedicated support. Good when you're expanding and want a full-service partner for compliance and multi-state.",
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
      bestFor: "Best overall for small auto repair",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Auto repair using QuickBooks",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Labor cost in jobs/ROs; job costing",
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
      bestFor: "Growing auto repair shops",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 technicians and service staff vs 1099 subcontractors",
      body: "Auto repair shops often have W-2 techs and service writers plus 1099 subs when you sublet work (e.g. alignments, glass, specialty). Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Labor cost by job or repair order",
      body: "Labor cost by job or repair order is central to shop profitability and accurate RO costing. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job and RO costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Tech hours—flat-rate or clock—can be captured with shop management software, time clocks, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support job costing and overtime compliance.",
    },
    {
      heading: "Flat-rate vs hourly pay",
      body: "Shops that pay techs on flat-rate (flag hours) still need payroll to handle base pay, bonuses, and overtime correctly. All of our picks support multiple pay types and rates. QuickBooks Payroll keeps labor cost in the same system as your jobs and ROs when you use QuickBooks for shop management or books.",
    },
    {
      heading: "Ease of use for small shops",
      body: "Many auto repair shops have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small auto repair shops: W-2 and 1099 in one system, contractor portal, automatic tax forms, and built-in time tracking. No sales cycle—shop owners and office managers can run payroll and add subs without calling a rep. It scales as you add techs and locations.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run invoicing and books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to jobs for job and RO costing—critical for auto repair. Pay techs and 1099 subs in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for auto repair shops that want predictability. Contractor payments and tax forms are included. Works with any accounting software.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing auto repair shops that want scale and optional dedicated support. Multi-state payroll, more techs, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
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
      q: "What is the best payroll software for auto repair shops?",
      a: "Gusto is our top pick for most small auto repair shops: it handles W-2 technicians and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job or repair-order costing. OnPay is a strong value option; ADP fits growing shops that want full-service support.",
    },
    {
      q: "Can payroll software handle sublet contractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for auto repair?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for auto repair job and RO costing. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track tech time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets tech hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs or repair orders.",
    },
    {
      q: "Can payroll software handle flat-rate (flag) pay for mechanics?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP support multiple pay types and rates—including flat-rate or bonus pay—so you can pay techs on flag hours or a mix of base and productivity pay. Labor cost can still flow to jobs when you use QuickBooks Payroll with QuickBooks for job costing.",
    },
  ] as BestForFaqItem[],
};
