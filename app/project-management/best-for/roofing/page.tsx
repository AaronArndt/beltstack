import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ROOFING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForRoofingPage() {
  return <BestForPageWithStructuredData {...ROOFING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Roofing Companies (2026)"),
    description:
      "Compare project management software for roofers: production timelines, supplements, crew days. Asana, ClickUp, Monday.",
  };
}
