import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOVING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForMovingPage() {
  return <BestForPageWithStructuredData {...MOVING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Moving Companies (2026) | BeltStack",
    description:
      "Compare PM software for movers: survey-to-delivery projects, crews, long-distance handoffs. Asana, ClickUp, Monday.",
  };
}
