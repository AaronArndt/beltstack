import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSTRUCTION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForConstructionPage() {
  return <BestForPageWithStructuredData {...CONSTRUCTION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Construction Companies (2026)"),
    description:
      "Compare project management tools for construction: site tasks, subs, inspections. Asana, ClickUp, Monday.",
  };
}
