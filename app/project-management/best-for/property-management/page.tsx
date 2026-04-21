import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PROPERTY_MANAGEMENT_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForPropertyManagementPage() {
  return <BestForPageWithStructuredData {...PROPERTY_MANAGEMENT_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Property Management Companies (2026)"),
    description:
      "Compare PM software for property managers: turnovers, capex, vendors. Asana, ClickUp, Monday.",
  };
}
