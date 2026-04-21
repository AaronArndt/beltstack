import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { EVENT_SERVICES_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForEventServicesPage() {
  return <BestForPageWithStructuredData {...EVENT_SERVICES_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Event Services (2026)"),
    description:
      "Compare project management software for event services: timeline planning, vendor coordination, setup logistics, and post-event follow-through. Teamwork, Asana, Notion.",
    keywords: [
      "best project management software",
      "project management software",
      "event services",
      "2026",
    ],
  };
}
