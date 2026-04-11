import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for HVAC Businesses (2026) | BeltStack",
    description:
      "Compare project management software for HVAC: installs, service programs, crew handoffs. Asana, ClickUp, and Monday for trade operations.",
  };
}
