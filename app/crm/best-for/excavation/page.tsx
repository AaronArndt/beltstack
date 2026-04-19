import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { EXCAVATION_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForExcavationPage() {
  return <BestForPageWithStructuredData {...EXCAVATION_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Excavation Companies (2026) | BeltStack",
    description:
      "Compare CRM tools for excavation and earthwork: pursuit tracking with GCs and developers, long-cycle bids, and follow-up when schedules slip or scopes change.",
    keywords: [
      "CRM for excavation company",
      "earthwork business CRM",
      "best CRM for excavation sales",
      "civil contractor pursuit tracking",
      "site work bid follow-up CRM",
    ],
  };
}
