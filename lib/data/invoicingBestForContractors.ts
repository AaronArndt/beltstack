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

export const CONTRACTORS_PAGE_PROPS = {
  title: "Best Invoicing Software for Contractors (2026)",
  subtitle:
    "Compare invoicing software built for contractors: estimates, job and project billing, progress billing, deposits, payment collection, and ties to accounting and payroll workflows.",
  useCase: "contractors",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Contractors need invoicing software that supports estimates, invoices by job or project, progress billing, and deposits. Our picks below combine invoicing with client-facing workflows and optional connections to accounting and payroll so you can bill clearly and get paid on time.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top invoicing picks for contractors.",
  editorialSub: "What to look for when you're choosing invoicing software as a contractor.",
  whyThesePicksSub: "Why we chose these tools for contractors.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best overall for contractors",
      description:
        "Invoicing, estimates, time tracking, and client billing in one package. Easy to use for job-based and progress billing.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getInvoicingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "honeybook",
      name: "HoneyBook",
      badge: "Best for client and project workflows",
      description:
        "Proposals, contracts, and invoicing in one workflow. Ideal for contractors who run on client projects and need a full client journey.",
      rating: "4.4",
      startingPrice: "Quote",
      reviewHref: getInvoicingReviewUrl("honeybook"),
      visitUrl: "https://www.honeybook.com",
      logoSrc: "/Logos/honeybook.jpeg",
    },
    {
      slug: "quickbooks",
      name: "QuickBooks",
      badge: "Best for invoicing + accounting",
      description:
        "Invoicing inside QuickBooks so books and billing stay in one place. Strong for contractors who need job costing and reporting.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getInvoicingReviewUrl("quickbooks"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "zoho-invoice",
      name: "Zoho Invoice",
      badge: "Best value",
      description:
        "Affordable invoicing with project tracking, client portal, and automation. Good value for contractors.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getInvoicingReviewUrl("zoho-invoice"),
      visitUrl: "https://www.zoho.com/invoice",
      logoSrc: "/Logos/zoho.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "Best overall for contractors", startingPrice: "$19/mo", standoutFeature: "Estimates, invoicing, time tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { slug: "honeybook", name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", bestFor: "Client/project workflows", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("honeybook") },
    { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", bestFor: "Invoicing + accounting", startingPrice: "$30/mo", standoutFeature: "Job costing, reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
    { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.jpeg", bestFor: "Best value", startingPrice: "Free tier", standoutFeature: "Projects, client portal", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Estimates and invoices by job or project", body: "Look for software that lets you send estimates, convert them to invoices, and track by job or project. FreshBooks and HoneyBook both support this; QuickBooks adds job costing for deeper project tracking." },
    { heading: "Progress billing and deposits", body: "Contractors often bill deposits upfront and then by milestone or progress. Choose a tool that supports custom invoices, multiple invoices per job, and clear payment tracking. All of our picks can handle deposits and progress billing." },
    { heading: "Ties to accounting and payroll", body: "If you have employees, payroll and accounting matter alongside invoicing. QuickBooks keeps invoicing and books in one place; FreshBooks and others can sync to accounting software. For payroll, see our payroll for contractors guide." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    { heading: "FreshBooks", body: "FreshBooks is a strong default for contractors: estimates, invoicing, time tracking, and client billing in one place. It’s easy to use for job-based and progress billing." },
    { heading: "HoneyBook", body: "HoneyBook is built for client and project workflows: proposals, contracts, and invoicing in one pipeline. Ideal for contractors who run on client projects and need a polished client journey." },
    { heading: "QuickBooks", body: "QuickBooks fits contractors who need invoicing and full accounting in one platform. Job costing and reporting are strong; best when you already use or plan to use QuickBooks for books." },
    { heading: "Zoho Invoice", body: "Zoho Invoice delivers good project tracking and client portal at a lower price. Solid value for contractors who want more than basic invoicing without premium cost." },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks") },
    { name: "HoneyBook", href: getInvoicingReviewUrl("honeybook") },
    { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { label: "HoneyBook vs Bonsai", href: getInvoicingCompareUrl("honeybook-vs-bonsai") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Invoicing for contractors", href: "/invoicing/guides/invoicing-for-contractors" },
    { label: "Payroll for contractors", href: "/payroll/guides/payroll-for-contractors" },
    { label: "Accounting for contractors", href: "/accounting/guides/accounting-for-contractors" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What is the best invoicing software for contractors?", a: "FreshBooks is our top pick for most contractors: estimates, invoicing, and time tracking in one place. HoneyBook is best for client and project workflows; QuickBooks fits when you need invoicing and accounting together; Zoho Invoice offers the best value." },
    { q: "Can I bill deposits and progress payments?", a: "Yes. All of our picks let you create invoices for deposits and progress or milestone payments. You send an invoice for each stage; the software tracks what’s paid." },
    { q: "How does contractor invoicing tie to payroll and accounting?", a: "Invoicing tracks what you bill clients; accounting records income and expenses for tax and reporting. QuickBooks does both in one platform. For payroll (if you have employees), see our payroll for contractors guide; for books, see our accounting for contractors guide." },
    { q: "Do I need estimates and proposals in my invoicing tool?", a: "Many contractors send estimates or proposals before invoicing. FreshBooks offers estimates that convert to invoices; HoneyBook and Bonsai are built around proposals and contracts first. Choose based on how formal your sales process is." },
  ] as BestForFaqItem[],
};
