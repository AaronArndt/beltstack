import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { LOCKSMITH_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForLocksmithPage() {
  return <BestForPageWithStructuredData {...LOCKSMITH_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Locksmith Businesses (2026)"),
    description:
      "Compare project management tools for locksmith businesses: rekey projects, access-control installs, and service follow-up accountability. ClickUp, Trello, Wrike.",
    keywords: [
      "best project management software",
      "project management software",
      "locksmith",
      "2026",
    ],
  };
}
