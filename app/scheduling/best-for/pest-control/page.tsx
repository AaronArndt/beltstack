import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PEST_CONTROL_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForPestControlPage() {
  return <BestForPageWithStructuredData {...PEST_CONTROL_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Pest Control Businesses (2026)"),
    description:
      "Compare scheduling software for pest control: recurring plans, route-friendly windows, reminders, payments. Square, Acuity, Setmore.",
  };
}
