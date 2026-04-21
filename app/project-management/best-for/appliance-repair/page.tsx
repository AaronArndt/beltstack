import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { APPLIANCE_REPAIR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForApplianceRepairPage() {
  return <BestForPageWithStructuredData {...APPLIANCE_REPAIR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Appliance Repair Businesses (2026)"),
    description:
      "Compare project management tools for appliance repair businesses: callback follow-up, parts delays, return visits, and office-to-tech handoffs. Trello, Asana, ClickUp.",
    keywords: [
      "best project management software",
      "project management software",
      "appliance repair",
      "2026",
    ],
  };
}
