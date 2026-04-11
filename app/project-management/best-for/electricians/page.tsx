import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ELECTRICIANS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForElectriciansPage() {
  return <BestForPageWithStructuredData {...ELECTRICIANS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Electricians (2026) | BeltStack",
    description:
      "Compare project management software for electrical contractors: phased jobs, inspections, crew coordination. Asana, ClickUp, Monday.",
  };
}
