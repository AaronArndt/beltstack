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

export const GROWING_BUSINESSES_PAGE_PROPS = {
  title: "Best Payroll Software for Growing Businesses (2026)",
  subtitle:
    "Compare payroll software that scales with you. Top picks for adding employees, multi-state payroll, benefits at scale, and optional dedicated support as you grow.",
  useCase: "growing-businesses",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Growing businesses need payroll that can handle more employees, new states, and expanding benefits without a disruptive switch later. Our picks range from modern platforms that scale smoothly (Gusto, OnPay) to full-service providers that offer dedicated support when you need it (ADP, Paychex).",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best for scaling with a modern platform",
      description:
        "Scales from a handful of employees to hundreds. Multi-state payroll, benefits, and HR in one platform. Add people and states without changing systems—transparent pricing as you grow.",
      rating: "4.8",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for larger teams and dedicated support",
      description:
        "Enterprise-grade payroll and HR that scale to large headcounts and multi-country. Custom pricing and optional dedicated account management. Ideal when you want a full-service partner.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
    {
      slug: "paychex",
      name: "Paychex",
      badge: "Best for payroll + HR support as you grow",
      description:
        "Full-service payroll with strong support and advisory. Custom pricing, optional dedicated reps, and hands-on help with compliance and benefits. Good when you want a partner, not just software.",
      rating: "4.3",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("paychex"),
      visitUrl: "https://www.paychex.com/small-business",
      logoSrc: "/Logos/paychex.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: "/Logos/gusto.jpeg",
      bestFor: "Scaling with a modern platform",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099, multi-state",
      standoutFeature: "Scales to hundreds; transparent pricing",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "adp",
      name: "ADP",
      logoSrc: "/Logos/adp.jpeg",
      bestFor: "Larger teams; dedicated support",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099, multi-state, global",
      standoutFeature: "Enterprise scale; optional dedicated rep",
      reviewHref: getPayrollReviewUrl("adp"),
    },
    {
      slug: "paychex",
      name: "Paychex",
      logoSrc: "/Logos/paychex.jpeg",
      bestFor: "Payroll + HR support as you grow",
      startingPrice: "Custom pricing",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Advisory support; compliance and benefits",
      reviewHref: getPayrollReviewUrl("paychex"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Scaling headcount and complexity",
      body: "As you add employees, payroll complexity grows: more pay schedules, benefits, and compliance. Choose a platform that can handle your growth without a disruptive migration. Modern tools like Gusto scale in the same product; full-service providers like ADP and Paychex offer dedicated support when you need it.",
    },
    {
      heading: "Multi-state payroll",
      body: "Expanding into new states means new tax IDs, withholding rules, and reporting. The best payroll providers handle multi-state automatically—you add the state and employees, and they manage registration, withholding, and filings. Confirm multi-state is included or available without a big jump in cost.",
    },
    {
      heading: "Benefits and HR at scale",
      body: "Growing businesses often add health insurance, 401(k), and more HR processes. Look for payroll that either bundles benefits and HR (Gusto) or integrates with your benefits administrator. Dedicated support (ADP, Paychex) can help with compliance and plan design as you grow.",
    },
    {
      heading: "When to consider full-service",
      body: "If you prefer a dedicated account manager, hands-on compliance help, or white-glove onboarding as you scale, full-service providers like ADP and Paychex are worth a quote. They use custom pricing—compare total cost and what's included to Gusto or OnPay at your headcount.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto scales from a few employees to hundreds without changing products. Multi-state payroll, benefits, and HR stay in one platform with published pricing that grows with you. No sales cycle to add states or people. Best when you want a modern, self-serve platform that grows with your business.",
    },
    {
      heading: "ADP",
      body: "ADP is built for scale: large headcounts, multi-state and multi-country payroll, and optional dedicated account management. You get a quote and can add support as you grow. Best when you want enterprise-grade capability and are okay with custom pricing and a more traditional relationship.",
    },
    {
      heading: "Paychex",
      body: "Paychex offers full-service payroll with strong small-to-midsize support and a reputation for hands-on advisory. Custom pricing and optional dedicated reps help with compliance, benefits, and setup as you add people and complexity. Best when you want a partner, not just software.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "ADP", href: getPayrollReviewUrl("adp") },
    { name: "Paychex", href: getPayrollReviewUrl("paychex") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "Gusto vs Paychex", href: getPayrollCompareUrl("gusto-vs-paychex") },
    { label: "ADP vs Paychex", href: getPayrollCompareUrl("adp-vs-paychex") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best payroll software for growing businesses?",
      a: "Gusto is our top pick for most growing businesses: it scales from a few to hundreds of employees, handles multi-state, and keeps pricing transparent. ADP and Paychex are strong when you want dedicated support and full-service—get quotes and compare to Gusto at your headcount.",
    },
    {
      q: "When should I switch from Gusto to ADP or Paychex?",
      a: "There's no required switch. Gusto scales to large headcounts and multi-state. Consider ADP or Paychex when you want a dedicated account manager, hands-on compliance help, or multi-country payroll. Get quotes and compare total cost and support level before switching.",
    },
    {
      q: "Can my payroll software handle multi-state employees?",
      a: "Yes. Gusto, ADP, and Paychex all support multi-state payroll—you add the state and employees, and they handle registration, withholding, and state filings. Confirm that multi-state is included in your plan and that any per-state or per-employee fees fit your budget.",
    },
    {
      q: "How much does payroll cost as my business grows?",
      a: "With Gusto and similar platforms, cost is typically base plus per person per month—so it grows predictably. ADP and Paychex use custom pricing; you get a quote based on headcount and services. Compare total cost at your current and projected size before committing.",
    },
  ] as BestForFaqItem[],
};
