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

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Payroll Software for Small Business (2026)",
  subtitle:
    "Compare payroll software built for small businesses and startups. Top picks for transparent pricing, easy setup, and all-in-one payroll plus HR—without a long sales cycle.",
  useCase: "small-business",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Small businesses need payroll that's easy to set up, simple to run, and straightforward to budget. Our picks below offer published pricing, automatic tax filing, and optional benefits—so you can get running without talking to sales or decoding tiered plans.",
  freshnessText: "Updated for 2026",

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small business",
      description:
        "All-in-one payroll, benefits, and HR with transparent pricing and a modern interface. Sign up online, run your first payroll quickly, and add benefits when you're ready.",
      rating: "4.8",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for small business",
      description:
        "Flat pricing and one plan—no tier maze. Payroll, tax filing, and support included. Ideal for small teams that want predictability and simplicity.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for QuickBooks users",
      description:
        "Payroll inside QuickBooks so your books and pay runs stay in one place. Competitive entry pricing and familiar workflow if you already use QuickBooks.",
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
      bestFor: "Best overall for small business",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "All-in-one payroll, benefits, HR; transparent pricing",
      reviewHref: getPayrollReviewUrl("gusto"),
    },
    {
      slug: "onpay",
      name: "OnPay",
      logoSrc: "/Logos/onpay.jpeg",
      bestFor: "Best value",
      startingPrice: "$40/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Flat pricing; one plan; no add-on maze",
      reviewHref: getPayrollReviewUrl("onpay"),
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "QuickBooks users",
      startingPrice: "$30/mo",
      payrollTypes: "W-2, 1099",
      standoutFeature: "Native QuickBooks; books and payroll in one place",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Transparent pricing",
      body: "Small businesses often need to budget before they buy. Look for published base and per-person pricing so you can compare total cost. Gusto and OnPay show pricing upfront; QuickBooks Payroll has clear tiers. Avoid providers that require a quote before you see numbers unless you want full-service hand-holding.",
    },
    {
      heading: "Setup and ease of use",
      body: "Your first payroll run shouldn't require a long onboarding call. Choose a platform you can sign up for online and configure yourself. Modern tools like Gusto and OnPay are built for self-serve; they also offer support when you need it. If you already use QuickBooks daily, QuickBooks Payroll keeps everything in one app.",
    },
    {
      heading: "Tax filing and compliance",
      body: "Full-service payroll should calculate, file, and deposit federal and state payroll taxes automatically. Confirm that tax filing and deposits are included and that the provider takes responsibility for accuracy and deadlines. New employers especially benefit from not having to manage tax deposits manually.",
    },
    {
      heading: "Benefits and HR when you're ready",
      body: "Many small businesses add health insurance or 401(k) as they grow. Picks like Gusto and OnPay bundle payroll with benefits administration so you can enable them later without switching systems. Onboarding and compliance tools (e.g. new-hire reporting) are often included or available as add-ons.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is our top pick for most small businesses: no sales cycle, published pricing, and payroll plus benefits and HR in one platform. Setup is fast, tax filing is automatic, and you can add health and 401(k) when you're ready. It scales from a handful of employees to dozens without changing products.",
    },
    {
      heading: "OnPay",
      body: "OnPay delivers similar ease of use with a simpler pricing structure—one plan, flat base plus per person. There's no tier maze or surprise add-ons for core payroll. Support is included. It's a strong choice for small teams that want value and clarity without the full Gusto feature set.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "If you already run your books in QuickBooks, QuickBooks Payroll keeps payroll and accounting in one place. No sync or export; payroll posts to the right accounts. Entry-level pricing is competitive, and the workflow is familiar. Best when QuickBooks is central to how you run the business.",
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
      q: "What is the best payroll software for small businesses?",
      a: "Gusto is our top pick for most small businesses: transparent pricing, payroll plus benefits and HR in one platform, and no sales cycle. OnPay is a close alternative with flat pricing and one plan. QuickBooks Payroll is best if you already use QuickBooks for accounting and want payroll in the same system.",
    },
    {
      q: "How much does payroll software cost for a small business?",
      a: "Many providers charge a base fee plus per employee per month. Gusto and OnPay often start around $40/month base plus a few dollars per person; QuickBooks Payroll can start around $30/month. Get a total at your headcount and confirm tax filing and support are included.",
    },
    {
      q: "Can I set up payroll without talking to sales?",
      a: "Yes. Gusto and OnPay let you sign up online and see pricing upfront. You can run your first payroll after completing setup. QuickBooks Payroll is the same if you're already in QuickBooks. Providers like ADP and Paychex typically use a quote-based process.",
    },
    {
      q: "Do I need payroll software if I only have a few employees?",
      a: "Yes. Even with a small team, payroll software handles tax calculation, filing, and deposits—and keeps you compliant. Doing it manually is error-prone and time-consuming. Modern tools are built for small teams and don't require a long contract.",
    },
  ] as BestForFaqItem[],
};
