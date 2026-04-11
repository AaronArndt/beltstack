import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PEST_CONTROL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForPestControlPage() {
  return <BestForPageWithStructuredData {...PEST_CONTROL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Pest Control Businesses (2026) | BeltStack",
    description:
      "Compare PM tools for pest control: multi-visit programs, commercial accounts, internal projects. Asana, ClickUp, Monday.",
  };
}
