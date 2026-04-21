import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HANDYMAN_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForHandymanPage() {
  return <BestForPageWithStructuredData {...HANDYMAN_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Handyman Businesses (2026)"),
    description:
      "Compare lightweight PM tools for handyman businesses: job templates, crews, checklists. Asana, ClickUp, Monday.",
  };
}
