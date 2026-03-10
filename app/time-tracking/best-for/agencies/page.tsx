import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/timeTrackingBestForAgencies";

export default function BestTimeTrackingForAgenciesPage() {
  return <BestForPageWithStructuredData {...AGENCIES_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Time Tracking Software for Agencies (2026) | BeltStack",
    description:
      "Compare the best time tracking software for agencies: Harvest, Everhour, Toggl Track, Timely. Project budgets, utilization, and client billing.",
  };
}

