import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { GARAGE_DOOR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForGarageDoorPage() {
  return <BestForPageWithStructuredData {...GARAGE_DOOR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Garage Door Companies (2026)"),
    description:
      "Compare project management software for garage door companies: install pipelines, parts coordination, and handoffs from sales to field. Monday, Asana, Teamwork.",
    keywords: [
      "best project management software",
      "project management software",
      "garage door",
      "2026",
    ],
  };
}
