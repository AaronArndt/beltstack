import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { REMOTE_TEAMS_PAGE_PROPS } from "@/lib/data/projectManagementBestForRemoteTeams";

export default function BestProjectManagementForRemoteTeamsPage() {
  return <BestForPageWithStructuredData {...REMOTE_TEAMS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Remote Teams (2026)"),
    description:
      "Compare the best project management software for remote teams: Asana, ClickUp, Monday. Task visibility, async collaboration, and alignment across time zones.",
  };
}
