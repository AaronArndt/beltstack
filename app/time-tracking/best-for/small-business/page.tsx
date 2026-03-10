import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/timeTrackingBestForSmallBusiness";

export default function BestTimeTrackingForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Time Tracking Software for Small Businesses (2026) | BeltStack",
    description:
      "Compare the best time tracking software for small businesses: Clockify, Toggl Track, Harvest. Simple setup, clear pricing, and useful reporting.",
  };
}

