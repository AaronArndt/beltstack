import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { STARTUPS_PAGE_PROPS } from "@/lib/data/projectManagementBestForStartups";

export default function BestProjectManagementForStartupsPage() {
  return <BestForPageWithStructuredData {...STARTUPS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Startups (2026)"),
    description:
      "Compare the best project management software for startups: ClickUp, Notion, Asana. Fast setup, flexible workflows, and free or affordable plans.",
  };
}
