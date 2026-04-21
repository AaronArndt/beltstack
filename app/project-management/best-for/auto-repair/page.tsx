import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { AUTO_REPAIR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForAutoRepairPage() {
  return <BestForPageWithStructuredData {...AUTO_REPAIR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Auto Repair Shops (2026)"),
    description:
      "Compare project management software for auto repair shops: parts follow-up, approvals, warranty jobs, and advisor-to-tech handoffs. ClickUp, Trello, Asana.",
    keywords: [
      "best project management software",
      "project management software",
      "auto repair",
      "2026",
    ],
  };
}
