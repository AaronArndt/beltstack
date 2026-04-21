import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { GLASS_WINDOW_INSTALLERS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForGlassWindowInstallersPage() {
  return <BestForPageWithStructuredData {...GLASS_WINDOW_INSTALLERS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Glass & Window Installers (2026)"),
    description:
      "Compare project management software for glass and window installers: measure-to-install workflows, supplier ETAs, and project milestones. Smartsheet, Asana, Teamwork.",
    keywords: [
      "best project management software",
      "project management software",
      "glass window installers",
      "2026",
    ],
  };
}
