import { getAccountingReviewUrl, getAccountingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/accounting", label: "Accounting" };
const SEE_ALSO = {
  roundupLabel: "accounting software hub",
  roundupHref: "/accounting",
  compareLabel: "accounting software comparisons",
  compareHref: "/accounting/compare",
};

export const FREELANCERS_PAGE_PROPS = {
  title: "Best Accounting Software for Freelancers (2026)",
  subtitle:
    "Compare accounting software built for freelancers: invoicing, expense tracking, simple bookkeeping, and tax prep without the complexity of full-scale accounting suites.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Freelancers need software that makes invoicing, tracking expenses, and staying tax-ready straightforward. Our picks below focus on ease of use, clear pricing, and features like time tracking and client billing so you can run your business without becoming a full-time bookkeeper.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top accounting picks for freelancers.",
  editorialSub: "What to look for when you're choosing accounting software as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best for freelancers",
      description:
        "Invoicing-first accounting with time tracking, client billing, and a simple interface. Built for solo pros and service businesses who want to get paid and stay organized.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getAccountingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "wave",
      name: "Wave",
      badge: "Best free option",
      description:
        "Free accounting and invoicing with no monthly fee. Ideal for freelancers who want to keep costs down while still sending professional invoices and tracking income and expenses.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getAccountingReviewUrl("wave"),
      visitUrl: "https://waveapps.com",
      logoSrc: "/Logos/wave.jpeg",
    },
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      badge: "Best for growing freelancers",
      description:
        "Full accounting with invoicing, expense tracking, and reporting. Scales as you add clients or subcontractors and need deeper bookkeeping and tax prep support.",
      rating: "4.7",
      startingPrice: "$20/mo",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      badge: "Best value for solo businesses",
      description:
        "Affordable accounting with strong automation and client portal. Good fit if you want solid features without the premium price tag.",
      rating: "4.4",
      startingPrice: "$15/mo",
      reviewHref: getAccountingReviewUrl("zoho-books"),
      visitUrl: "https://www.zoho.com/books/",
      logoSrc: "/Logos/zoho.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      logoSrc: "/Logos/freshbooks.jpeg",
      bestFor: "Best for freelancers",
      startingPrice: "$19/mo",
      standoutFeature: "Invoicing, time tracking, client billing",
      reviewHref: getAccountingReviewUrl("freshbooks"),
    },
    {
      slug: "wave",
      name: "Wave",
      logoSrc: "/Logos/wave.jpeg",
      bestFor: "Best free option",
      startingPrice: "Free",
      standoutFeature: "Free core accounting and invoicing",
      reviewHref: getAccountingReviewUrl("wave"),
    },
    {
      slug: "quickbooks-online",
      name: "QuickBooks Online",
      logoSrc: "/Logos/quickbooks.png",
      bestFor: "Best for growing freelancers",
      startingPrice: "$20/mo",
      standoutFeature: "Full accounting and reporting",
      reviewHref: getAccountingReviewUrl("quickbooks-online"),
    },
    {
      slug: "zoho-books",
      name: "Zoho Books",
      logoSrc: "/Logos/zoho.png",
      bestFor: "Best value for solo",
      startingPrice: "$15/mo",
      standoutFeature: "Automation and client portal",
      reviewHref: getAccountingReviewUrl("zoho-books"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Invoicing and getting paid",
      body: "Look for software that lets you send professional invoices quickly, accept online payments, and track what’s paid vs overdue. FreshBooks and Wave are both strong here; QuickBooks and Zoho Books add more accounting depth if you need it.",
    },
    {
      heading: "Expense tracking and tax prep",
      body: "Even as a freelancer you need to categorize income and expenses and keep records for tax time. Bank feeds, receipt capture, and simple reports (P&L, expense by category) make a big difference. All of our picks support these basics.",
    },
    {
      heading: "Time tracking and client billing",
      body: "If you bill by the hour or by project, time tracking that ties to invoices saves hassle. FreshBooks is especially focused on this; QuickBooks and Zoho Books offer it as well. Wave is lighter on time tracking but fine for fixed-price invoicing.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "FreshBooks",
      body: "FreshBooks is tailored to freelancers who sell time or milestones: timers, expenses, and polished invoices live together so month-end billing is not a scavenger hunt. Client portals and automated reminders nudge payment without awkward emails. During a trial, recreate last month’s invoices, enable online payments, and confirm fee transparency for your customers. Test recurring billing if you run retainers. If you hire a bookkeeper midyear, export or connect to their preferred ledger early.",
    },
    {
      heading: "Wave",
      body: "Wave keeps accounting overhead at zero for early-stage freelancers who need credible invoicing, expense tracking, and bank connections before revenue supports premium software. Receipt scanning and basic reports cover many solo operators through their first tax season. In a trial, link one bank, categorize a month of spending, and see whether sales tax or multicurrency gaps appear for your niche. Paid payroll is optional if you transition from contractor to employer. Wave is ideal when runway matters more than advanced automation.",
    },
    {
      heading: "QuickBooks Online",
      body: "QuickBooks Online is the reliable upgrade when freelancers outgrow simple invoicing apps and need GAAP-friendly books, deeper reporting, or an accountant who insists on QuickBooks files. Mileage, 1099 tracking, and integrations scale as you add subcontractors or inventory-light product lines. During evaluation, import opening balances with help if needed, reconcile two statement cycles, and run the reports your CPA requests quarterly. Confirm Simple Start versus Essentials based on user count and bill pay needs.",
    },
    {
      heading: "Zoho Books",
      body: "Zoho Books delivers automation, client portals, and workflow rules at a price that flatters budget-minded freelancers who still want more than a spreadsheet. It pairs cleanly with Zoho Invoice replacements, CRM, or Mail if you already live in Zoho. In a trial, automate one recurring client invoice, test payment gateways you actually use, and validate sales tax rules for your state. Mobile capture matters if you expense on the road—exercise those apps. Zoho rewards users who will configure a few rules up front.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getAccountingReviewUrl("freshbooks") },
    { name: "Wave", href: getAccountingReviewUrl("wave") },
    { name: "QuickBooks Online", href: getAccountingReviewUrl("quickbooks-online") },
    { name: "Zoho Books", href: getAccountingReviewUrl("zoho-books") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
    { label: "QuickBooks Online vs Wave", href: getAccountingCompareUrl("quickbooks-online-vs-wave") },
    { label: "Wave vs FreshBooks", href: getAccountingCompareUrl("wave-vs-freshbooks") },
  ] as BestForComparisonLink[],

  faqItems: [
    {
      q: "What is the best accounting software for freelancers?",
      a: "FreshBooks is our top pick for most freelancers: invoicing, time tracking, and client billing in one place. Wave is best if you want a free option. QuickBooks Online and Zoho Books suit freelancers who need more reporting or better value.",
    },
    {
      q: "Do freelancers need full accounting software?",
      a: "It depends on complexity. If you send invoices, track expenses, and need tax-ready records, dedicated accounting software (or an invoicing-focused tool like FreshBooks that includes accounting) is usually better than spreadsheets.",
    },
    {
      q: "Is there free accounting software for freelancers?",
      a: "Yes. Wave offers free accounting and invoicing; you pay for payment processing or payroll if you use those. It’s a good way to start without a monthly subscription.",
    },
  ] as BestForFaqItem[],
};
