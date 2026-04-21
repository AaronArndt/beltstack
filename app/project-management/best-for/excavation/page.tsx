import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { EXCAVATION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForExcavationPage() {
  return <BestForPageWithStructuredData {...EXCAVATION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Excavation Companies (2026)"),
    description:
      "Compare project management tools for excavation companies: utility coordination, site readiness, dependency planning, and multi-site visibility. Smartsheet, Wrike, Monday.",
    keywords: [
      "best project management software",
      "project management software",
      "excavation",
      "2026",
    ],
  };
}
