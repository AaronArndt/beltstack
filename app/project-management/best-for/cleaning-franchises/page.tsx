import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { CLEANING_FRANCHISES_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForCleaningFranchisesPage() {
  return <BestForPageWithStructuredData {...CLEANING_FRANCHISES_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Cleaning Franchises (2026)"),
    description:
      "Compare project management software for cleaning franchises: multi-location initiatives, onboarding, audits, and franchisee accountability. Monday, Smartsheet, ClickUp.",
    keywords: [
      "best project management software",
      "project management software",
      "cleaning franchises",
      "2026",
    ],
  };
}
