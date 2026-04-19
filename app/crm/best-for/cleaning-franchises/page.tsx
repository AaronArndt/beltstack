import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CLEANING_FRANCHISES_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForCleaningFranchisesPage() {
  return <BestForPageWithStructuredData {...CLEANING_FRANCHISES_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Cleaning Franchises (2026) | BeltStack",
    description:
      "Compare CRM tools for cleaning franchises: territory sales, recurring commercial contracts, franchise reporting rhythms, and marketing that respects brand standards.",
    keywords: [
      "CRM for cleaning franchise",
      "janitorial franchise CRM",
      "best CRM for cleaning business",
      "territory sales CRM cleaning",
      "commercial cleaning pipeline CRM",
    ],
  };
}
