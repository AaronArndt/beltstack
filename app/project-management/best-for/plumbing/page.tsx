import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PLUMBING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForPlumbingPage() {
  return <BestForPageWithStructuredData {...PLUMBING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Plumbing Companies (2026)"),
    description:
      "Compare PM tools for plumbing companies: multi-day jobs, handoffs, documentation. Asana, ClickUp, and Monday compared.",
  };
}
