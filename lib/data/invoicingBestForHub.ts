import { getInvoicingBestForUrl } from "@/lib/routes";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/invoicingBestForAgencies";
import { CONSULTANTS_PAGE_PROPS } from "@/lib/data/invoicingBestForConsultants";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/invoicingBestForContractors";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/invoicingBestForFreelancers";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/invoicingBestForSmallBusiness";
import { getInvoicingTradeBestForHubCards } from "@/lib/data/invoicingBestForTrades";

export type InvoicingBestForHubCard = { label: string; href: string; description: string };

/** Matches H1 on /invoicing/best-invoicing-software */
export const INVOICING_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best Invoicing Software (2026)",
  href: "/invoicing/best-invoicing-software",
  description:
    "The best invoicing software is the one your team will use every day to send clear invoices, collect online payments, and keep receivables from turning into month-end surprises.",
} as const;

export function getInvoicingBestForHubLinks(): InvoicingBestForHubCard[] {
  const core: InvoicingBestForHubCard[] = [
    {
      label: FREELANCERS_PAGE_PROPS.title,
      href: getInvoicingBestForUrl("freelancers"),
      description: FREELANCERS_PAGE_PROPS.subtitle,
    },
    {
      label: SMALL_BUSINESS_PAGE_PROPS.title,
      href: getInvoicingBestForUrl("small-business"),
      description: SMALL_BUSINESS_PAGE_PROPS.subtitle,
    },
    {
      label: AGENCIES_PAGE_PROPS.title,
      href: getInvoicingBestForUrl("agencies"),
      description: AGENCIES_PAGE_PROPS.subtitle,
    },
    {
      label: CONTRACTORS_PAGE_PROPS.title,
      href: getInvoicingBestForUrl("contractors"),
      description: CONTRACTORS_PAGE_PROPS.subtitle,
    },
    {
      label: CONSULTANTS_PAGE_PROPS.title,
      href: getInvoicingBestForUrl("consultants"),
      description: CONSULTANTS_PAGE_PROPS.subtitle,
    },
  ];

  return [INVOICING_BEST_FOR_ROUNDUP_HUB_LINK, ...core, ...getInvoicingTradeBestForHubCards()];
}
