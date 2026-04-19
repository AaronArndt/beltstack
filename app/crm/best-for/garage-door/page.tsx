import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GARAGE_DOOR_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForGarageDoorPage() {
  return <BestForPageWithStructuredData {...GARAGE_DOOR_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Garage Door Companies (2026) | BeltStack",
    description:
      "Compare CRM tools for garage door dealers: new construction and retrofit pipelines, commercial rolling-door pursuits, and follow-up on high-ticket residential quotes.",
    keywords: [
      "CRM for garage door company",
      "garage door dealer CRM",
      "best CRM for garage door installers",
      "garage door sales pipeline",
      "garage door business lead management",
    ],
  };
}
