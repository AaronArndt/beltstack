import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PAINTING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForPaintingPage() {
  return <BestForPageWithStructuredData {...PAINTING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Painting Contractors (2026)"),
    description:
      "Compare PM tools for painting contractors: production phases, crews, punch lists. Asana, ClickUp, and Monday.",
  };
}
