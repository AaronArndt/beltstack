import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { MOBILE_MECHANICS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForMobileMechanicsPage() {
  return <BestForPageWithStructuredData {...MOBILE_MECHANICS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Mobile Mechanics (2026)"),
    description:
      "Compare project management tools for mobile mechanics: phone-first updates, return visits, parts delays, and follow-up accountability. Trello, Asana, Basecamp.",
    keywords: [
      "best project management software",
      "project management software",
      "mobile mechanics",
      "2026",
    ],
  };
}
