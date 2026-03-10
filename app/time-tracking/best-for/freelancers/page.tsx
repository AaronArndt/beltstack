import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/timeTrackingBestForFreelancers";

export default function BestTimeTrackingForFreelancersPage() {
  return <BestForPageWithStructuredData {...FREELANCERS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Time Tracking Software for Freelancers (2026) | BeltStack",
    description:
      "Compare the best time tracking software for freelancers: Toggl Track, Harvest, Clockify, Everhour. Billable hours, reports, and exports for invoicing.",
  };
}

