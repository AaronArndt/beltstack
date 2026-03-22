/**
 * Invoicing hub: editorial “by use case” blocks (scenario-based recommendations).
 * Used by app/invoicing/page.tsx.
 */

import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getInvoicingBestForUrl, getInvoicingCompareUrl, getInvoicingReviewUrl } from "@/lib/routes";

export const INVOICING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Freelancers and solos prioritizing fast payment",
    body: "You need polished invoices, reminders, and low-friction online pay—without building a full accounting stack. Prioritize payment fees, client limits, and whether time tracking is bundled or best left to another tool.",
    links: [
      { label: "Best invoicing for freelancers →", href: getInvoicingBestForUrl("freelancers") },
      { label: "FreshBooks review →", href: getInvoicingReviewUrl("freshbooks") },
    ],
  },
  {
    title: "Retainers, milestones, and complex billing rules",
    body: "When invoices tie to phases, deposits, or recurring contracts, template flexibility and partial payments matter. Check automation limits and whether your CRM or project tool should own the workflow instead.",
    links: [
      { label: "Best invoicing for agencies →", href: getInvoicingBestForUrl("agencies") },
      { label: "FreshBooks vs QuickBooks →", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    ],
  },
  {
    title: "Field service and job-based contractors",
    body: "Estimates, deposits, and job names on invoices reduce disputes. If you’re still deciding between lightweight invoicing and full job accounting, map which system owns costs and change orders.",
    links: [
      { label: "Best invoicing for contractors →", href: getInvoicingBestForUrl("contractors") },
      { label: "QuickBooks review →", href: getInvoicingReviewUrl("quickbooks") },
    ],
  },
  {
    title: "Growing SMBs outgrowing spreadsheets",
    body: "At scale you care about client history, roles, sales tax, and accounting sync. Evaluate whether an all-in-one accounting product replaces invoicing-only tools before you double-pay for overlapping features.",
    links: [
      { label: "Best invoicing for small business →", href: getInvoicingBestForUrl("small-business") },
      { label: "Full rankings →", href: "/invoicing/best-invoicing-software" },
    ],
  },
  {
    title: "Consultants selling expertise and calendar time",
    body: "Proposals, hourly vs package pricing, and expense pass-throughs are the common friction points. Look for estimate-to-invoice conversion and whether international clients need multi-currency support.",
    links: [
      { label: "Best invoicing for consultants →", href: getInvoicingBestForUrl("consultants") },
      { label: "Xero vs QuickBooks →", href: getInvoicingCompareUrl("xero-vs-quickbooks") },
    ],
  },
];
