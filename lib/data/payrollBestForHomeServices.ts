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

export const HOME_SERVICES_PAGE_PROPS = {
  title: "Best Payroll Software for Home Services Businesses (2026)",
  subtitle:
    "Compare payroll software for home services companies—HVAC, plumbing, electrical, cleaning, handyman, pool service, and more—managing W-2 technicians plus 1099 subcontractors.",
  useCase: "home-services",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Home services businesses—from HVAC and plumbing to electrical, cleaning, handyman, and pool service—need payroll that handles W-2 technicians and office staff, 1099 subcontractors when you use them, and labor cost that ties to jobs or routes when you use QuickBooks. Our picks work for small and growing operations across the industry, whether you want an all-in-one platform or simple flat-rate payroll.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small home services businesses",
      description:
        "All-in-one payroll with 1099 support for subs, contractor self-service, and automatic tax forms. Handles W-2 and 1099 in one system. Built-in time tracking. No sales cycle—good for owners and office managers running payroll across any home service trade.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for home services businesses using QuickBooks",
      description:
        "Payroll inside QuickBooks so labor cost flows into job or route costing. Ideal when you run invoicing and books in QuickBooks. Pay techs and 1099 subs in the same system; time tracking can tie hours to jobs.",
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
      badge: "Best for growing home services teams",
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
      bestFor: "Best overall for small home services",
      startingPrice: "$49/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "1099 subs; time tracking; all-in-one",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Home services using QuickBooks",
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
      bestFor: "Growing home services teams",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scale; optional dedicated support",
      reviewHref: getPayrollReviewUrl("adp"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "W-2 technicians and office vs 1099 subcontractors",
      body: "Home services companies often have W-2 techs and office staff plus 1099 subs for overflow or specialty work. Your payroll system should handle both in one place—correct withholding for W-2, no withholding for 1099, and the right tax forms (W-2 vs 1099-NEC) at year-end. Contractor self-service lets subs view pay stubs without extra admin.",
    },
    {
      heading: "Job and route costing",
      body: "Labor cost by job or route is central to home services profitability. If you run your books in QuickBooks, payroll that posts labor to jobs (QuickBooks Payroll) keeps job and route costing accurate. Gusto and OnPay sync to QuickBooks but don't push cost to jobs the same way; they're still strong for running payroll and tracking who worked where.",
    },
    {
      heading: "Time tracking and payroll sync",
      body: "Tech hours can be captured with mobile apps, time clocks, or manual entry. The best setup syncs hours into payroll so you're not re-entering data. Gusto has built-in time tracking; QuickBooks Payroll integrates with QuickBooks Time for time-by-job. Accurate hours support job costing and overtime compliance.",
    },
    {
      heading: "Multi-trade and seasonal staffing",
      body: "Home services can span HVAC, plumbing, electrical, cleaning, handyman, pool service, and more—often with seasonal peaks. Payroll software should make it easy to add and remove workers, run more frequent pay runs when needed, and keep tax and compliance correct. Gusto and OnPay scale up and down without long-term contracts.",
    },
    {
      heading: "Ease of use for small operations",
      body: "Many home services businesses have an owner or office manager running payroll. Choose software that's straightforward to set up and run—published pricing, no long sales cycle, and support when you need it. Gusto and OnPay are built for self-serve; QuickBooks Payroll fits if you already use QuickBooks; ADP offers dedicated support when you're ready to scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small home services businesses: W-2 and 1099 in one system, contractor portal, automatic tax forms, and built-in time tracking. No sales cycle—owners and office managers can run payroll and add subs without calling a rep. It scales across trades as you add techs and jobs.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "When you run invoicing and books in QuickBooks, QuickBooks Payroll keeps payroll and labor cost in the same system. Labor posts to jobs for job costing—critical for home service work. Pay techs and 1099 subs in one place. Best if QuickBooks is already your central tool.",
    },
    {
      heading: "OnPay",
      body: "OnPay offers straightforward payroll for W-2 and 1099 at a flat price. One plan, no tier maze—good for home services teams that want predictability. Contractor payments and tax forms are included. Works with any accounting software.",
    },
    {
      heading: "ADP",
      body: "ADP fits growing home services businesses that want scale and optional dedicated support. Multi-state payroll, more techs, and a full-service relationship when you need it. Custom pricing—get a quote and compare to Gusto or OnPay at your headcount.",
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
      q: "What is the best payroll software for home services businesses?",
      a: "Gusto is our top pick for most small home services businesses: it handles W-2 technicians and 1099 subcontractors in one system, offers a contractor portal and automatic tax forms, and includes time tracking. QuickBooks Payroll is best if you already use QuickBooks and need labor cost in job costing. OnPay is a strong value option; ADP fits growing teams that want full-service support.",
    },
    {
      q: "Can payroll software handle subcontractors and employees in one system?",
      a: "Yes. Gusto, QuickBooks Payroll, OnPay, and ADP all support both W-2 employees and 1099 subcontractors in the same account. You run payroll for employees and contractor payments in one place; the system applies the right tax treatment and generates W-2s and 1099-NEC at year-end.",
    },
    {
      q: "What payroll software works best with QuickBooks for home services?",
      a: "QuickBooks Payroll runs inside QuickBooks, so labor cost from payroll posts directly to jobs—ideal for home services job and route costing. If you run invoicing and books in QuickBooks, payroll in the same system keeps everything in one place. Gusto and OnPay integrate with QuickBooks but don't push labor cost to jobs the same way.",
    },
    {
      q: "How do I track tech time for payroll and job costing?",
      a: "Gusto has built-in time tracking that syncs to payroll. QuickBooks Payroll integrates with QuickBooks Time for time-by-job. OnPay integrates with various time clocks and apps. Choose a setup that gets tech hours into payroll without re-entry and, if you use job costing, allocates hours to the right jobs.",
    },
    {
      q: "Does the same payroll software work for different home service trades?",
      a: "Yes. The same payroll tools—Gusto, QuickBooks Payroll, OnPay, ADP—work across HVAC, plumbing, electrical, cleaning, handyman, pool service, and other home service trades. All handle W-2 and 1099, time tracking, and integration with accounting. Pick based on whether you want all-in-one (Gusto), QuickBooks-native job costing (QuickBooks Payroll), value (OnPay), or scale (ADP).",
    },
  ] as BestForFaqItem[],
};
