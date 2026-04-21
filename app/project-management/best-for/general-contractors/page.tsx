import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GENERAL_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForGeneralContractorsPage() {
  return <BestForPageWithStructuredData {...GENERAL_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for General Contractors (2026)"),
    description:
      "Compare PM tools for general contractors: multi-trade jobs, subs, closeout. Asana, ClickUp, and Monday compared.",
  };
}
