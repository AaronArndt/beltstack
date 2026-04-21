import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { POOL_SERVICE_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForPoolServicePage() {
  return <BestForPageWithStructuredData {...POOL_SERVICE_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Pool Service Companies (2026)"),
    description:
      "Compare project management software for pool companies: equipment jobs, openings, internal ops. Asana, ClickUp, Monday.",
  };
}
