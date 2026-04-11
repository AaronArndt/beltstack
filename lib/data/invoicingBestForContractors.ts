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
      logoSrc: "/Logos/zoho.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "Best overall for contractors", startingPrice: "$19/mo", standoutFeature: "Estimates, invoicing, time tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { slug: "honeybook", name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", bestFor: "Client/project workflows", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("honeybook") },
    { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", bestFor: "Invoicing + accounting", startingPrice: "$30/mo", standoutFeature: "Job costing, reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
    { slug: "zoho-invoice", name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", bestFor: "Best value", startingPrice: "Free tier", standoutFeature: "Projects, client portal", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Estimates and invoices by job or project", body: "Look for software that lets you send estimates, convert them to invoices, and track by job or project. FreshBooks and HoneyBook both support this; QuickBooks adds job costing for deeper project tracking." },
    { heading: "Progress billing and deposits", body: "Contractors often bill deposits upfront and then by milestone or progress. Choose a tool that supports custom invoices, multiple invoices per job, and clear payment tracking. All of our picks can handle deposits and progress billing." },
    { heading: "Ties to accounting and payroll", body: "If you have employees, payroll and accounting matter alongside invoicing. QuickBooks keeps invoicing and books in one place; FreshBooks and others can sync to accounting software. For payroll, see our payroll for contractors guide." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "FreshBooks",
      body: "FreshBooks is a strong default for contractors who live on estimates, deposit invoices, and final draws—clients see professional PDFs while your office tracks what is outstanding per job. Time and materials entries support change orders without rebuilding the whole invoice. During a trial, duplicate a typical job template, collect a deposit online, and apply a credit to a change order scenario. Test photo attachments or notes if homeowners expect documentation. FreshBooks keeps residential workflows moving without ERP training.",
    },
    {
      heading: "HoneyBook",
      body: "HoneyBook suits design-build or client-facing contractors who sell experience: proposals, contracts, and invoicing share one branded pipeline so homeowners never wonder what happens next. Automations remind clients to sign before you hold calendar slots. In a trial, run a kitchen remodel inquiry through proposal, contract, and first invoice with your real line items. Validate how retainers and payment schedules display on mobile. HoneyBook shines when marketing and billing feel like one company.",
    },
    {
      heading: "QuickBooks",
      body: "QuickBooks is the pick when contractor invoicing must sit beside job costing, vendor bills, and payroll in a single accounting system your CPA already trusts. Progress billing against estimates maps well to commercial-style workflows. During evaluation, tag expenses to jobs, generate a partial invoice tied to percent complete, and reconcile lien waiver tracking if you use it. Confirm which subscription tier unlocks project profitability reports you need. QuickBooks anchors finance-heavy trades.",
    },
    {
      heading: "Zoho Invoice",
      body: "Zoho Invoice offers project-aware invoicing, portals, and automation at a value price for contractors watching software spend across trucks and crews. It integrates forward into Zoho Books when you need a fuller ledger. In a trial, set up recurring billing for maintenance agreements, test sales tax on materials versus labor per local rules, and invite a homeowner to the portal for payment. Mobile approvals help owners between job sites. Zoho fits ops-led shops that still want polish.",
    },
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
