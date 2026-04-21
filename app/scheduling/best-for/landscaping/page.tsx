import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { LANDSCAPING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForLandscapingPage() {
  return <BestForPageWithStructuredData {...LANDSCAPING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Landscaping Companies (2026)"),
    description:
      "Compare scheduling software for landscapers: recurring maintenance, consults, crew calendars, reminders. Square, Acuity, Setmore and routing context.",
  };
}
