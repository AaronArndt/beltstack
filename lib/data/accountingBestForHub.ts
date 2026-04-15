/**
 * Accounting /best-for hub: link labels match each scenario page `title` (same H1 as destination).
 */

import { getAccountingBestForUrl } from "@/lib/routes";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/accountingBestForAgencies";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/accountingBestForContractors";
import { ECOMMERCE_PAGE_PROPS } from "@/lib/data/accountingBestForEcommerce";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/accountingBestForFreelancers";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/accountingBestForSmallBusiness";
import { getAccountingTradeBestForHubCards } from "@/lib/data/accountingBestForTrades";

/** Matches H1 on /accounting/best-accounting-software */
export const ACCOUNTING_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best Accounting Software (2026)",
  href: "/accounting/best-accounting-software",
  description:
    "The best accounting software for small businesses, freelancers, and contractors is the stack you will reconcile and categorize in every month—without fighting the bank feed, invoice workflow, or tax-time exports.",
} as const;

export type AccountingBestForHubCard = { label: string; href: string; description: string };

export function getAccountingBestForHubLinks(): AccountingBestForHubCard[] {
  const core: AccountingBestForHubCard[] = [
    {
      label: FREELANCERS_PAGE_PROPS.title,
      href: getAccountingBestForUrl("freelancers"),
      description: FREELANCERS_PAGE_PROPS.subtitle,
    },
    {
      label: CONTRACTORS_PAGE_PROPS.title,
      href: getAccountingBestForUrl("contractors"),
      description: CONTRACTORS_PAGE_PROPS.subtitle,
    },
    {
      label: SMALL_BUSINESS_PAGE_PROPS.title,
      href: getAccountingBestForUrl("small-business"),
      description: SMALL_BUSINESS_PAGE_PROPS.subtitle,
    },
    {
      label: ECOMMERCE_PAGE_PROPS.title,
      href: getAccountingBestForUrl("ecommerce"),
      description: ECOMMERCE_PAGE_PROPS.subtitle,
    },
    {
      label: AGENCIES_PAGE_PROPS.title,
      href: getAccountingBestForUrl("agencies"),
      description: AGENCIES_PAGE_PROPS.subtitle,
    },
  ];

  return [ACCOUNTING_BEST_FOR_ROUNDUP_HUB_LINK, ...core, ...getAccountingTradeBestForHubCards()];
}
