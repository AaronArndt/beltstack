import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { FLOORING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForFlooringPage() {
  return <BestForPageWithStructuredData {...FLOORING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Flooring Contractors (2026)"),
    description:
      "Compare project management software for flooring contractors: material lead times, room sequencing, and install closeout. Asana, Smartsheet, Monday.",
    keywords: [
      "best project management software",
      "project management software",
      "flooring",
      "2026",
    ],
  };
}
