import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/timeTrackingBestForAgencies";

export default function BestTimeTrackingForAgenciesPage() {
  return <BestForPageWithStructuredData {...AGENCIES_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Time Tracking Software for Agencies (2026)"),
    description:
      "Compare the best time tracking software for agencies: Harvest, Everhour, Toggl Track, Timely. Project budgets, utilization, and client billing.",
  };
}

