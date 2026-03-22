/**
 * Accounting hub: editorial “by use case” blocks + educational guide cards.
 * Used by app/accounting/page.tsx.
 */

import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import type { HubGuideCardItem } from "@/components/hubs/HubGuidesGrid";
import { getAccountingBestForUrl, getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const GUIDES_BASE = "/accounting/guides";

/** Educational guide cards (evaluation, concepts—not duplicate “best for” picks). */
export const ACCOUNTING_HUB_GUIDES: readonly HubGuideCardItem[] = [
  {
    title: "How Accounting Software Works",
    href: `${GUIDES_BASE}/how-accounting-software-works`,
    description:
      "Core concepts: chart of accounts, bank feeds, reconciliation, and what “full accounting” implies before you buy.",
  },
  {
    title: "Accounting for Small Business",
    href: `${GUIDES_BASE}/accounting-for-small-business`,
    description:
      "How growing teams phase in reporting, user permissions, and month-end discipline without overbuying day one.",
  },
  {
    title: "QuickBooks Alternatives",
    href: `${GUIDES_BASE}/quickbooks-alternatives`,
    description:
      "When to leave (or skip) QuickBooks: pricing, ecosystem lock-in, and how to compare real alternatives fairly.",
  },
  {
    title: "Accounting vs Bookkeeping",
    href: `${GUIDES_BASE}/accounting-vs-bookkeeping`,
    description:
      "Clarify what bookkeeping tools cover versus tax-ready reporting—so you don’t pay for the wrong depth.",
  },
  {
    title: "Invoicing Software vs Accounting",
    href: `${GUIDES_BASE}/invoicing-software-vs-accounting`,
    description:
      "Decision framework: when standalone invoicing is enough and when you need inventory, COGS, and balance sheet depth.",
  },
];

/** Scenario-based accounting picks (workflow & complexity—not industry label alone). */
export const ACCOUNTING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Solo freelancers with simple books",
    body: "If you mainly need invoicing, expense capture, and basic P&L visibility, optimize for speed and low admin—not every ERP feature. Watch per-client limits and whether bank feeds are included at your tier.",
    links: [
      { label: "Best accounting for freelancers →", href: getAccountingBestForUrl("freelancers") },
      { label: "FreshBooks review →", href: getAccountingReviewUrl("freshbooks") },
    ],
  },
  {
    title: "Contractors, jobs, and receipt-heavy field work",
    body: "Project- or job-based businesses need clean categorization, mileage/receipt workflows, and often W-2/1099-adjacent discipline. Evaluate whether estimates and progress billing matter before you size up to mid-market tools.",
    links: [
      { label: "Best accounting for contractors →", href: getAccountingBestForUrl("contractors") },
      { label: "QuickBooks Online vs Xero →", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    ],
  },
  {
    title: "Established SMBs needing full books and tax-ready reporting",
    body: "Once you have multiple users, classes/locations, and accountant collaboration, reporting depth and audit trails matter more than a pretty invoice. Compare close, inventory, and payroll integration paths—not just list price.",
    links: [
      { label: "Best accounting for small business →", href: getAccountingBestForUrl("small-business") },
      { label: "Full rankings →", href: "/accounting/best-accounting-software" },
    ],
  },
  {
    title: "Ecommerce and multichannel inventory",
    body: "You’re optimizing for COGS accuracy, channel fees, and sync with carts or marketplaces—not generic expense categories. Integration quality and order-volume limits separate tools that work from tools that create spreadsheet rescue projects.",
    links: [
      { label: "Best accounting for ecommerce →", href: getAccountingBestForUrl("ecommerce") },
      { label: "Zoho Books vs QuickBooks →", href: getAccountingCompareUrl("quickbooks-online-vs-zoho-books") },
    ],
  },
  {
    title: "Agencies billing time and managing client profitability",
    body: "Retainers and hourly blends need project labels, WIP visibility, and sometimes invoicing that ties to time tools. Decide whether accounting, invoicing, or a dedicated ops stack owns project reporting.",
    links: [
      { label: "Best accounting for agencies →", href: getAccountingBestForUrl("agencies") },
      { label: "Xero vs QuickBooks →", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
    ],
  },
];
