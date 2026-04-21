import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { REMODELING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForRemodelingPage() {
  return <BestForPageWithStructuredData {...REMODELING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Remodeling Businesses (2026)"),
    description:
      "Compare PM tools for remodelers: phases, selections, change orders, punch. Asana, ClickUp, Monday.",
  };
}
