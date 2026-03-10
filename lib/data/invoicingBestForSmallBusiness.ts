import { getInvoicingReviewUrl, getInvoicingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/invoicing", label: "Invoicing" };
const SEE_ALSO = {
  roundupLabel: "best invoicing software roundup",
  roundupHref: "/invoicing/best-invoicing-software",
  compareLabel: "invoicing software comparisons",
  compareHref: "/invoicing/compare",
};

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Invoicing Software for Small Businesses (2026)",
  subtitle:
    "Compare invoicing software built for small businesses: invoice creation, payment tracking, recurring billing, simple reporting, and integrations that fit your workflow.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses need invoicing software that balances simplicity with enough features to look professional and get paid on time. Our picks below cover invoice creation, payment tracking, recurring billing, and reporting—without overpaying for enterprise tools.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top invoicing picks for small businesses.",
  editorialSub: "What to look for when you're choosing invoicing software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best overall",
      description:
        "Professional invoicing, time tracking, and client billing in one package. Easy to use and scales with your client count and team size.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getInvoicingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "quickbooks",
      name: "QuickBooks",
      badge: "Best for integrated invoicing + accounting",
      description:
        "Invoicing inside QuickBooks so books and billing stay in one place. Strong reporting and familiar to many accountants.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getInvoicingReviewUrl("quickbooks"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "wave",
      name: "Wave",
      badge: "Best free invoicing software",
      description:
        "Free core invoicing and receipt scanning. Ideal for small businesses that want to minimize software cost while sending professional invoices.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getInvoicingReviewUrl("wave"),
      visitUrl: "https://www.waveapps.com",
      logoSrc: "/Logos/wave.jpeg",
    },
    {
      slug: "zoho-invoice",
      name: "Zoho Invoice",
      badge: "Best value",
      description:
        "Affordable invoicing with automation, client portal, and good reporting. Strong value for small teams.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getInvoicingReviewUrl("zoho-invoice"),
      visitUrl: "https://www.zoho.com/invoice",
      logoSrc: "/Logos/zoho.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "Best overall", startingPrice: "$19/mo", standoutFeature: "Invoicing, time tracking, ease of use", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", bestFor: "Invoicing + accounting", startingPrice: "$30/mo", standoutFeature: "Integrated books and invoicing", reviewHref: getInvoicingReviewUrl("quickbooks") },
    { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", bestFor: "Best free", startingPrice: "Free", standoutFeature: "Free core invoicing", reviewHref: getInvoicingReviewUrl("wave") },
    { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.jpeg", bestFor: "Best value", startingPrice: "Free tier", standoutFeature: "Automation, client portal", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Invoice creation and payment tracking", body: "Look for software that lets you create professional invoices quickly, track when they’re sent and paid, and follow up on overdue items. All of our picks support this; FreshBooks and QuickBooks add the most polish and reporting." },
    { heading: "Recurring billing and simple reporting", body: "Recurring invoices automate retainers and subscriptions. Basic reporting (aged receivables, revenue) helps you understand cash flow. Compare plan limits and report depth when choosing." },
    { heading: "Pricing and integrations", body: "Match the plan to your client count and team size. Check integrations with your accounting software, payment processor, or other tools so invoicing fits into your existing stack." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    { heading: "FreshBooks", body: "FreshBooks is our top pick for most small businesses: straightforward invoicing, time tracking, and client billing in a clean interface. It’s easy to adopt and scales with your needs." },
    { heading: "QuickBooks", body: "QuickBooks is the best fit when you already use it for accounting or want invoicing and books in one place. Reporting and accountant familiarity are strong." },
    { heading: "Wave", body: "Wave gives you free core invoicing so you can minimize software cost. It’s a solid choice for very small teams or businesses watching every dollar." },
    { heading: "Zoho Invoice", body: "Zoho Invoice delivers good automation and a client portal at a lower price. Ideal for small businesses that want more than basic invoicing without premium pricing." },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks") },
    { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks") },
    { name: "Wave", href: getInvoicingReviewUrl("wave") },
    { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
    { label: "QuickBooks vs Wave", href: getInvoicingCompareUrl("quickbooks-vs-wave") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Invoicing for small business", href: "/invoicing/guides/invoicing-for-small-business" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What is the best invoicing software for small businesses?", a: "FreshBooks is our top pick for most small businesses: easy to use, strong invoicing and time tracking, and good value. QuickBooks fits if you want invoicing and accounting together; Wave is the best free option; Zoho Invoice offers the best value." },
    { q: "Do small businesses need invoicing software?", a: "Yes. Invoicing software helps you send professional invoices, track payments, automate recurring billing, and keep records in one place. It’s more efficient than spreadsheets and reduces follow-up work." },
    { q: "Can small businesses get free invoicing software?", a: "Yes. Wave offers free core invoicing and receipt scanning. Zoho Invoice has a free tier with limits. Both work for very small teams; paid plans add more features and capacity." },
    { q: "How does invoicing software integrate with accounting?", a: "Many tools sync with QuickBooks, Xero, or other accounting software so paid invoices flow into your books. QuickBooks keeps everything in one platform; standalone tools like FreshBooks and Wave offer integrations." },
  ] as BestForFaqItem[],
};
