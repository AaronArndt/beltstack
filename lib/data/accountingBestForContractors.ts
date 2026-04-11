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

export const CONTRACTORS_PAGE_PROPS = {
  title: "Best Accounting Software for Contractors (2026)",
  subtitle:
    "Compare accounting software built for contractors: job costing, expense tracking, project-based invoicing, and bookkeeping that fits how trade businesses run.",
  useCase: "contractors",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Contractors need software that supports job-based work: tracking costs by project, sending progress or milestone invoices, and understanding which jobs are profitable. Our picks below combine core accounting with job or project tracking so you can run your books without spreadsheets.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top accounting picks for contractors.",
  editorialSub: "What to look for when you're choosing accounting software as a contractor.",
  whyThesePicksSub: "Why we chose these tools for contractors.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      badge: "Best overall for contractors",
      description:
        "Full accounting with job costing, project tracking, and contractor-friendly reporting. Integrates with estimating and field tools and scales as you add crews or subs.",
      rating: "4.7",
      startingPrice: "$20/mo",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "xero",
      name: "Xero",
      badge: "Best QuickBooks alternative",
      description:
        "Strong accounting and reporting with a clean interface. Good job and project tracking and a large app marketplace for contractor-specific add-ons.",
      rating: "4.6",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("xero"),
      visitUrl: "https://www.xero.com",
      logoSrc: "/Logos/xero.png",
    },
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best for simple invoicing and service businesses",
      description:
        "Invoicing and time tracking focused on service work. Easy to use for contractors who bill by project or hour and don’t need heavy job costing.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      badge: "Best value",
      description:
        "Affordable accounting with project and client tracking. Good automation and reporting for contractors who want value without sacrificing features.",
      rating: "4.4",
      startingPrice: "$15/mo",
      reviewHref: getAccountingReviewUrl("zoho-books"),
      visitUrl: "https://www.zoho.com/books/",
      logoSrc: "/Logos/zoho.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Best overall for contractors",
      startingPrice: "$20/mo",
      standoutFeature: "Job costing, project tracking, reporting",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
    },
    {
      slug: "xero",
      name: "Xero",
      logoSrc: "/Logos/xero.png",
      bestFor: "Best QuickBooks alternative",
      startingPrice: "$19/mo",
      standoutFeature: "Clean UI, job/project tracking, integrations",
      reviewHref: getAccountingReviewUrl("xero"),
    },
    {
      slug: "freshbooks",
      name: "FreshBooks",
      logoSrc: "/Logos/freshbooks.jpeg",
      bestFor: "Simple invoicing and service",
      startingPrice: "$19/mo",
      standoutFeature: "Invoicing, time tracking, ease of use",
      reviewHref: getAccountingReviewUrl("freshbooks"),
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      logoSrc: "/Logos/zoho.png",
      bestFor: "Best value",
      startingPrice: "$15/mo",
      standoutFeature: "Automation, project tracking, value",
      reviewHref: getAccountingReviewUrl("zoho-books"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Job costing and project tracking",
      body: "Look for the ability to assign income and expenses to jobs or projects so you can see profitability per job. QuickBooks Online and Xero both support this; FreshBooks and Zoho Books offer project-level tracking that works for many contractors.",
    },
    {
      heading: "Invoicing and progress billing",
      body: "Contractors often bill by milestone or progress. Software should support custom invoices, recurring or progress billing, and clear tracking of what’s been paid. All of our picks handle standard invoicing; check that your workflow (e.g. retainers, progress draws) is supported.",
    },
    {
      heading: "Expense tracking and subs",
      body: "Tracking materials, subcontractor costs, and other job-related expenses keeps your books accurate and makes tax time easier. Bank feeds and categorization by job are essential for contractors.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "QuickBooks Online",
      body: "QuickBooks Online is the contractor default when you need job costing tied to estimates, change orders, and vendor bills while staying on an accountant-friendly general ledger. Integrations with estimating, payroll, and field service tools reduce double entry between site and office. During a trial, tag a few live jobs, allocate labor and materials, and run a work-in-progress style report your PM trusts. Test progress invoicing against AIA-style billing if you serve commercial GCs. Confirm which advanced job costing features require Plus or higher before you budget.",
    },
    {
      heading: "Xero",
      body: "Xero gives trades a modern ledger with project tracking, purchase approvals, and a deep app stack for specialized construction add-ons when native features stop short. Collaboration with offsite bookkeepers stays smooth in the cloud. In a trial, connect your bank feed, categorize job-related expenses with tracking categories, and reconcile subs’ 1099-ready vendor profiles. Validate mileage and equipment apps if crews carry tablets. Xero fits contractors who want flexibility and clean UX over Intuit muscle memory.",
    },
    {
      heading: "FreshBooks",
      body: "FreshBooks suits residential or light commercial contractors who need fast estimates, deposits, and final invoices more than granular WIP accounting—especially when owners still touch billing weekly. Time and materials entries convert to client-facing documents with minimal friction. During evaluation, test deposit invoices, change-order emails, and online payment fees on typical ticket sizes. If you later need heavy job costing, plan whether FreshBooks plus exports satisfies your CPA. It excels when simplicity speeds cash collection.",
    },
    {
      heading: "Zoho Books",
      body: "Zoho Books offers project-centric accounting, automation, and client portals at a price that flatters growing trades watching software spend. Recurring maintenance contracts and multi-location tags map well to HVAC, plumbing, or landscaping hybrids. In a trial, automate monthly billing for a service plan, test sales tax on materials versus labor where rules differ, and confirm Zoho FSM or CRM handoffs if you use them. Review mobile approvals for owner-managers between job sites.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online") },
    { name: "Xero", href: getAccountingReviewUrl("xero") },
    { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks") },
    { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { label: "Xero vs FreshBooks", href: getAccountingCompareUrl("xero-vs-freshbooks") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Accounting for contractors", href: "/accounting/guides/accounting-for-contractors" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best accounting software for contractors?",
      a: "QuickBooks Online is our top pick for most contractors: job costing, project tracking, and strong reporting. Xero is a close alternative with a cleaner UI. FreshBooks and Zoho Books work well for contractors who want simpler invoicing or better value.",
    },
    {
      q: "Do contractors need job costing?",
      a: "Job costing (assigning income and expenses to specific jobs) helps you see which projects are profitable. It’s especially useful if you run multiple jobs at once or work with subcontractors and materials. QuickBooks and Xero both support it well.",
    },
    {
      q: "Where can I learn more about accounting for contractors?",
      a: "Our guide on accounting for contractors covers job-based accounting, expense tracking, and how to choose software. Read the Accounting for contractors guide for more detail.",
    },
  ] as BestForFaqItem[],
};
