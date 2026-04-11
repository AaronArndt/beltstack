import { getAccountingReviewUrl, getAccountingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/accounting", label: "Accounting" };
const SEE_ALSO = {
  roundupLabel: "accounting software hub",
  roundupHref: "/accounting",
  compareLabel: "accounting software comparisons",
  compareHref: "/accounting/compare",
};

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Accounting Software for Small Businesses (2026)",
  subtitle:
    "Compare accounting software built for small businesses: bookkeeping, invoicing, expense tracking, tax prep, and ease of use without enterprise complexity.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses need accounting software that’s easy to run, supports invoicing and expense tracking, and keeps you ready for taxes and reporting. Our picks below offer a balance of features and usability so you can manage your books without a full-time accountant.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top accounting picks for small businesses.",
  editorialSub: "What to look for when you're choosing accounting software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      badge: "Best overall",
      description:
        "The default choice for many small businesses: full bookkeeping, invoicing, reporting, and a huge ecosystem. Familiar to accountants and scales as you grow.",
      rating: "4.7",
      startingPrice: "$20/mo",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "xero",
      name: "Xero",
      badge: "Best alternative",
      description:
        "Strong QuickBooks alternative with a clean interface, solid reporting, and accountant-friendly workflows. Good integrations and support.",
      rating: "4.6",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("xero"),
      visitUrl: "https://www.xero.com",
      logoSrc: "/Logos/xero.png",
    },
    {
      slug: "wave",
      name: "Wave",
      badge: "Best free software",
      description:
        "Free accounting and invoicing for small businesses that want to minimize cost. Good for simple needs; add-ons available for payments and payroll.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getAccountingReviewUrl("wave"),
      visitUrl: "https://waveapps.com",
      logoSrc: "/Logos/wave.jpeg",
    },
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best for service businesses",
      description:
        "Invoicing and time tracking focused on service companies. Easy to use and a good fit when your business is project- or client-based.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Best overall",
      startingPrice: "$20/mo",
      standoutFeature: "Full bookkeeping, reporting, ecosystem",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
    },
    {
      slug: "xero",
      name: "Xero",
      logoSrc: "/Logos/xero.png",
      bestFor: "Best alternative",
      startingPrice: "$19/mo",
      standoutFeature: "Clean UI, reporting, accountant-friendly",
      reviewHref: getAccountingReviewUrl("xero"),
    },
    {
      slug: "wave",
      name: "Wave",
      logoSrc: "/Logos/wave.jpeg",
      bestFor: "Best free",
      startingPrice: "Free",
      standoutFeature: "Free core accounting and invoicing",
      reviewHref: getAccountingReviewUrl("wave"),
    },
    {
      slug: "freshbooks",
      name: "FreshBooks",
      logoSrc: "/Logos/freshbooks.jpeg",
      bestFor: "Best for service businesses",
      startingPrice: "$19/mo",
      standoutFeature: "Invoicing, time tracking, ease of use",
      reviewHref: getAccountingReviewUrl("freshbooks"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Bookkeeping and reporting",
      body: "Look for software that handles bank feeds, categorization, and reconciliation so your books stay accurate. Profit and loss, balance sheet, and cash flow reports should be easy to run. QuickBooks and Xero are strongest here; Wave and FreshBooks cover the basics well.",
    },
    {
      heading: "Invoicing and payments",
      body: "Small businesses need to send invoices and get paid. Check that your chosen platform supports your billing style (one-off, recurring, progress) and optional online payment links. All of our picks offer solid invoicing.",
    },
    {
      heading: "Tax prep and ease of use",
      body: "Your accountant will thank you for clean, categorized books. Choose a platform that’s either familiar to your advisor or easy to export from. Ease of use matters so you actually keep the books up to date instead of dreading the task.",
    },
    {
      heading: "Integrations",
      body: "If you use payroll, ecommerce, or other business tools, confirm that your accounting software integrates so data flows in automatically. QuickBooks and Xero have the largest app ecosystems; Wave and FreshBooks cover common cases.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "QuickBooks Online",
      body: "QuickBooks Online remains the default small-business accounting platform because banks, payroll providers, and bookkeepers already speak its language, and the app ecosystem covers niche integrations. You get double-entry books, reconciliations, and tax-ready reports without building spreadsheets. During a trial, connect at least one real bank feed, categorize 30 days of transactions, and run a P&L your accountant would recognize. Test user permissions if multiple people touch payables. Confirm which payroll, inventory, or multicurrency features require the specific tier you expect to need next year.",
    },
    {
      heading: "Xero",
      body: "Xero appeals to owners who want a modern accounting interface, strong bank reconciliation, and reporting that still satisfies external advisors. Its marketplace stays deep for point solutions you may add later. In a trial, invite your bookkeeper view-only, replay a month of reconciliations, and export the same reports you send today. Validate fixed-asset or project tracking apps if those drive your margins. Xero shines when you value clean UX and collaborative accounting over legacy habits.",
    },
    {
      heading: "Wave",
      body: "Wave is the best free-first accounting option for very small businesses that need real double-entry basics, invoicing, and receipt capture before they can justify another subscription. Paid payroll or payments add-ons let you grow without migrating immediately. During evaluation, send a few test invoices, record expenses, and reconcile a linked account to see if reporting depth meets lender or tax prep needs. If you anticipate inventory or multicurrency complexity soon, stress those scenarios early. Wave wins on cost control, not infinite enterprise features.",
    },
    {
      heading: "FreshBooks",
      body: "FreshBooks fits service-heavy small businesses that prioritize fast invoicing, time tracking, and client-friendly billing while still covering core bookkeeping. Owners who dread accounting jargon often adopt it faster than general ledgers built for accountants first. In a trial, model your common billing pattern—fixed fee, hourly, or recurring—and run an AR aging report your office manager trusts. Test accountant export or integration if year-end still flows to another system. Validate whether job costing depth matches construction or agency needs before you commit.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online") },
    { name: "Xero", href: getAccountingReviewUrl("xero") },
    { name: "Wave", href: getAccountingReviewUrl("wave") },
    { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { label: "QuickBooks Online vs Wave", href: getAccountingCompareUrl("quickbooks-online-vs-wave") },
    { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Accounting for small business", href: "/accounting/guides/accounting-for-small-business" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best accounting software for small business?",
      a: "QuickBooks Online is our top pick for most small businesses: full bookkeeping, reporting, and a familiar ecosystem. Xero is a strong alternative. Wave is best if you want free software; FreshBooks is best for service-focused businesses.",
    },
    {
      q: "How much does small business accounting software cost?",
      a: "Plans often start around $15–$30/month. Wave offers free core accounting. Total cost depends on users, add-ons (e.g. payroll), and payment processing. See our accounting software pricing guide for more.",
    },
    {
      q: "Do I need an accountant if I use accounting software?",
      a: "Software keeps your books organized; many small businesses still work with a bookkeeper or accountant for cleanup, reporting, and tax filing. Choosing software your advisor knows can make that partnership smoother.",
    },
  ] as BestForFaqItem[],
};
