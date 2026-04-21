import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { REMODELING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForRemodelingPage() {
  return <BestForPageWithStructuredData {...REMODELING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Remodeling Businesses (2026)"),
    description:
      "Compare scheduling software for remodelers: design meetings, selections, deposits, phased check-ins. Square Appointments, Acuity Scheduling, Setmore.",
  };
}
