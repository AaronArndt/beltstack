import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { CONSULTANTS_PAGE_PROPS } from "@/lib/data/timeTrackingBestForConsultants";

export default function BestTimeTrackingForConsultantsPage() {
  return <BestForPageWithStructuredData {...CONSULTANTS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Time Tracking Software for Consultants (2026)"),
    description:
      "Compare the best time tracking software for consultants: Toggl Track, Harvest, Timely. Billable rates, retainers, and client-facing reporting.",
  };
}

