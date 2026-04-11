import { getInvoicingReviewUrl, getInvoicingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/invoicing", label: "Invoicing" };
const SEE_ALSO = {
  roundupLabel: "best invoicing software roundup",
  roundupHref: "/invoicing/best-invoicing-software",
  compareLabel: "invoicing software comparisons",
  compareHref: "/invoicing/compare",
};

export const AGENCIES_PAGE_PROPS = {
  title: "Best Invoicing Software for Agencies (2026)",
  subtitle:
    "Compare invoicing software built for agencies: client billing, retainers, proposals and contracts, recurring invoices, and project workflows.",
  useCase: "agencies",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Agencies need invoicing software that supports client billing, retainer agreements, and project-based work. Our picks below combine invoicing with proposals, contracts, and recurring billing so you can manage client work and get paid on time.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top invoicing picks for agencies.",
  editorialSub: "What to look for when you're choosing invoicing software as an agency.",
  whyThesePicksSub: "Why we chose these tools for agencies.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best for service agencies",
      description:
        "Invoicing, time tracking, and client billing in one package. Strong for agencies that bill by project or retainer and need a clear client portal.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getInvoicingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "honeybook",
      name: "HoneyBook",
      badge: "Best for client workflows",
      description:
        "Proposals, contracts, and invoicing in one workflow. Ideal for creative and service agencies that run on client projects and need a full client journey.",
      rating: "4.4",
      startingPrice: "Quote",
      reviewHref: getInvoicingReviewUrl("honeybook"),
      visitUrl: "https://www.honeybook.com",
      logoSrc: "/Logos/honeybook.jpeg",
    },
    {
      slug: "quickbooks",
      name: "QuickBooks",
      badge: "Best for broader admin and reporting",
      description:
        "Invoicing plus full accounting and reporting. Fits agencies that need deeper books, multi-user access, and accountant-friendly reporting.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getInvoicingReviewUrl("quickbooks"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "bonsai",
      name: "Bonsai",
      badge: "Best for smaller creative teams",
      description:
        "Proposals, contracts, and invoicing in one place. Good for smaller agencies and creative teams that want a simple all-in-one client workflow.",
      rating: "4.3",
      startingPrice: "Quote",
      reviewHref: getInvoicingReviewUrl("bonsai"),
      visitUrl: "https://www.hellobonsai.com",
      logoSrc: "/Logos/bonsai.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "Service agencies", startingPrice: "$19/mo", standoutFeature: "Invoicing, time tracking, client portal", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { slug: "honeybook", name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", bestFor: "Client workflows", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("honeybook") },
    { slug: "quickbooks", name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", bestFor: "Admin and reporting", startingPrice: "$30/mo", standoutFeature: "Accounting + invoicing", reviewHref: getInvoicingReviewUrl("quickbooks") },
    { slug: "bonsai", name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", bestFor: "Smaller creative teams", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("bonsai") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Client billing and retainers", body: "Look for software that supports recurring invoices for retainers, clear client portals, and payment tracking. FreshBooks and HoneyBook both excel here; QuickBooks adds full accounting for agencies that need it." },
    { heading: "Proposals and contracts", body: "Agencies often need to send proposals and contracts before invoicing. HoneyBook and Bonsai are built for this workflow; FreshBooks offers estimates that convert to invoices. Choose based on how much you rely on formal proposals and e-signatures." },
    { heading: "Project workflows", body: "If you bill by project or need to track time and expenses by client, look for project-level invoicing and time tracking. FreshBooks and QuickBooks support this; HoneyBook and Bonsai focus on the client-facing pipeline." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "FreshBooks",
      body: "FreshBooks is a strong default for agencies billing time and materials across retainers and projects—project managers approve hours, finance issues invoices, and leadership sees who is over budget. Client-specific rates and markups on expenses reduce spreadsheet gymnastics. During a trial, import a month of historical time, run utilization-friendly reports, and test multi-currency invoices if you serve global brands. Validate seat pricing as creatives and strategists need logins. FreshBooks keeps service AR disciplined at agency pace.",
    },
    {
      heading: "HoneyBook",
      body: "HoneyBook fits creative agencies that sell visually and want proposals, contracts, and invoicing to feel like one branded studio experience. Pipelines show which prospects stall before signature so producers can follow up. In a trial, mirror a real pitch-to-kickoff flow with file deliverables attached at each step. Test automation when clients pay deposits before scheduling kickoff calls. HoneyBook excels for boutique shops where client experience is the product.",
    },
    {
      heading: "QuickBooks",
      body: "QuickBooks belongs in agencies that need invoicing inside a full accounting stack—classes for departments, deep COGS reporting, and payroll integrations without exporting AR nightly. Your external accountant likely already prefers it. During evaluation, connect time data via integration or manual import, run an income by customer report, and confirm 1099 workflows for contractor editors or freelancers you pay. Check Advanced tiers if you need revenue recognition nuances. QuickBooks anchors finance-led agencies.",
    },
    {
      heading: "Bonsai",
      body: "Bonsai bundles contracts, scope templates, and invoicing for lean creative teams that do not want HoneyBook’s pipeline visuals but still need legal-ready paperwork fast. It keeps solo leads and micro agencies from duct-taping DocuSign, spreadsheets, and Stripe. In a trial, templatize your standard SOW, assign roles for reviewer versus signer, and invoice the first milestone automatically on contract acceptance. Validate VAT or sales tax lines if you bill internationally. Bonsai rewards teams that repeat similar engagements.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks") },
    { name: "HoneyBook", href: getInvoicingReviewUrl("honeybook") },
    { name: "QuickBooks", href: getInvoicingReviewUrl("quickbooks") },
    { name: "Bonsai", href: getInvoicingReviewUrl("bonsai") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { label: "HoneyBook vs Bonsai", href: getInvoicingCompareUrl("honeybook-vs-bonsai") },
  ] as BestForComparisonLink[],

  faqItems: [
    { q: "What is the best invoicing software for agencies?", a: "FreshBooks is our top pick for most service agencies: invoicing, time tracking, and client billing in one place. HoneyBook is best for client workflow (proposals, contracts, invoicing); QuickBooks fits when you need full accounting; Bonsai suits smaller creative teams." },
    { q: "Do agencies need proposals and contracts in their invoicing tool?", a: "Many agencies benefit from having proposals and contracts in the same tool as invoicing so the client journey is seamless. HoneyBook and Bonsai are built for this; FreshBooks offers estimates that convert to invoices." },
    { q: "How do I handle retainer billing for agency clients?", a: "Use recurring invoices set to your retainer frequency (e.g. monthly). FreshBooks, QuickBooks, HoneyBook, and Bonsai all support recurring billing. Set up the schedule once and the software sends and tracks invoices automatically." },
    { q: "Should agencies use invoicing software or accounting software?", a: "It depends. If you need full bookkeeping, P&L, and accountant-ready reports, use accounting software (e.g. QuickBooks) that includes invoicing. If you mainly need to bill clients and get paid, standalone invoicing like FreshBooks or HoneyBook can be simpler and sufficient, with sync to accounting if needed." },
  ] as BestForFaqItem[],
};
