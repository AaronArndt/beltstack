import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { JUNK_REMOVAL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForJunkRemovalPage() {
  return <BestForPageWithStructuredData {...JUNK_REMOVAL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Junk Removal Businesses (2026) | BeltStack",
    description:
      "Compare PM tools for junk removal: large cleanouts, commercial jobs, fleet projects. Asana, ClickUp, Monday.",
  };
}
