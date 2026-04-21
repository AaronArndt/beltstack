import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOVING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForMovingPage() {
  return <BestForPageWithStructuredData {...MOVING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Moving Companies (2026)"),
    description:
      "Compare scheduling tools for movers: surveys, move-day holds, deposits, multi-estimator calendars. Square, Acuity Scheduling, Setmore.",
  };
}
