import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { HOME_INSPECTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForHomeInspectorsPage() {
  return <BestForPageWithStructuredData {...HOME_INSPECTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Home Inspectors (2026)"),
    description:
      "Compare project management software for home inspectors: report QA workflows, follow-ups, and operational standardization. Asana, Notion, Trello.",
    keywords: [
      "best project management software",
      "project management software",
      "home inspectors",
      "2026",
    ],
  };
}
