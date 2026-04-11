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

export const FREELANCERS_PAGE_PROPS = {
  title: "Best Invoicing Software for Freelancers (2026)",
  subtitle:
    "Compare invoicing software built for freelancers: simple billing, recurring invoices, online payments, and ease of use so you can get paid without the complexity of full accounting suites.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Freelancers need invoicing software that makes sending invoices, tracking payments, and setting up recurring billing straightforward. Our picks below focus on ease of use, clear pricing, and features like time tracking and client portals so you can get paid and stay organized.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top invoicing picks for freelancers.",
  editorialSub: "What to look for when you're choosing invoicing software as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best overall for freelancers",
      description:
        "Invoicing, time tracking, and client billing in one easy-to-use package. Built for solo pros and service businesses who want to get paid and look professional.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getInvoicingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "bonsai",
      name: "Bonsai",
      badge: "Best for freelancer workflows",
      description:
        "Proposals, contracts, and invoicing in one place. Ideal for freelancers who want a simple all-in-one for client-facing work and getting paid.",
      rating: "4.3",
      startingPrice: "Quote",
      reviewHref: getInvoicingReviewUrl("bonsai"),
      visitUrl: "https://www.hellobonsai.com",
      logoSrc: "/Logos/bonsai.jpeg",
    },
    {
      slug: "wave",
      name: "Wave",
      badge: "Best free option",
      description:
        "Free core invoicing and receipt scanning with no monthly fee. Ideal for freelancers who want to keep costs down while sending professional invoices.",
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
        "Affordable invoicing with automation, client portal, and a free tier. Good fit for freelancers who want solid features without a premium price.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getInvoicingReviewUrl("zoho-invoice"),
      visitUrl: "https://www.zoho.com/invoice",
      logoSrc: "/Logos/zoho.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "Best overall for freelancers", startingPrice: "$19/mo", standoutFeature: "Invoicing, time tracking, ease of use", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { slug: "bonsai", name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", bestFor: "Freelancer workflows", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("bonsai") },
    { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", bestFor: "Best free", startingPrice: "Free", standoutFeature: "Free core invoicing", reviewHref: getInvoicingReviewUrl("wave") },
    { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", bestFor: "Best value", startingPrice: "Free tier", standoutFeature: "Automation, client portal", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Invoicing clients and getting paid", body: "Look for software that lets you create and send professional invoices quickly, accept online payments, and track what’s paid vs overdue. FreshBooks and Wave are both strong here; Bonsai and Zoho Invoice add proposals and automation." },
    { heading: "Recurring billing and simple reporting", body: "If you bill retainers or subscriptions, recurring invoices save time. Simple reporting (what’s outstanding, revenue) helps you stay on top of cash flow. All of our picks support recurring billing and basic reports." },
    { heading: "Ease of use", body: "Freelancers don’t want to spend hours in software. Prioritize tools that are easy to set up and use daily. FreshBooks and Bonsai are especially focused on simplicity; Wave and Zoho Invoice are straightforward as well." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "FreshBooks",
      body: "FreshBooks is built for freelancers who invoice from actual work: timers, expenses, and branded invoices stay linked so you are not reconstructing hours at month end. Automated payment reminders and online card or ACH options shorten days sales outstanding without awkward follow-ups. During a trial, send yourself a full invoice with sales tax if you collect it, enable autopay on a recurring client, and export the ledger slice your accountant needs. Test client limits on each tier before you onboard a dozen accounts at once.",
    },
    {
      heading: "Bonsai",
      body: "Bonsai wraps proposals, e-sign contracts, and invoicing into one freelancer workflow so scope, legals, and payment terms do not live in three tools. It suits consultants and creatives who sell packaged engagements or milestone billing. In a trial, run a sample project from proposal acceptance through final invoice, noting how change orders are handled. Validate international clients if you bill abroad—currency and tax fields matter. Bonsai shines when client experience is part of your brand, not an afterthought.",
    },
    {
      heading: "Wave",
      body: "Wave delivers free core invoicing and accounting basics so early freelancers keep software spend at zero while still looking professional. Recurring invoices and payment links cover many solo operators until revenue justifies premium automation. During evaluation, process a test payment, understand per-transaction fees, and confirm whether reporting satisfies your tax preparer. If you need deep time-billing or CRM hooks, note gaps early. Wave is ideal when runway beats feature breadth.",
    },
    {
      heading: "Zoho Invoice",
      body: "Zoho Invoice packs automation, estimates, and a client portal into a value price point for freelancers who outgrow manual PDFs but refuse bloated suites. Integration paths to Zoho Books or CRM appear if you graduate later. In a trial, automate payment reminders, connect the gateway you already use, and test multilingual invoices if you serve global clients. Review mobile apps if you bill from client sites. Zoho rewards a few hours of setup with fewer repetitive clicks each month.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks") },
    { name: "Bonsai", href: getInvoicingReviewUrl("bonsai") },
    { name: "Wave", href: getInvoicingReviewUrl("wave") },
    { name: "Zoho Invoice", href: getInvoicingReviewUrl("zoho-invoice") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "FreshBooks vs Wave", href: getInvoicingCompareUrl("freshbooks-vs-wave") },
    { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { label: "HoneyBook vs Bonsai", href: getInvoicingCompareUrl("honeybook-vs-bonsai") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best invoicing software for freelancers", href: "/invoicing/guides/best-invoicing-software-for-freelancers" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What is the best invoicing software for freelancers?", a: "FreshBooks is our top pick for most freelancers: invoicing, time tracking, and client billing in one place. Bonsai is strong for proposals and contracts; Wave is the best free option; Zoho Invoice offers the best value." },
    { q: "Do freelancers need invoicing software?", a: "Yes. Invoicing software helps you send professional invoices, track what’s paid, set up recurring billing for retainers, and accept online payments. It reduces admin and keeps records in one place." },
    { q: "Is there free invoicing software for freelancers?", a: "Yes. Wave offers free core invoicing and receipt scanning; Zoho Invoice has a free tier with limits. Both work for solo freelancers; paid tools add more features and capacity." },
    { q: "How do I choose between FreshBooks and Bonsai?", a: "FreshBooks is stronger on time tracking and general invoicing; Bonsai is built around proposals and contracts first, then invoicing. Choose FreshBooks for broad freelancer billing; Bonsai for a proposal-to-invoice workflow." },
  ] as BestForFaqItem[],
};
