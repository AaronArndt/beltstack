import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PROPERTY_MANAGEMENT_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForPropertyManagementPage() {
  return <BestForPageWithStructuredData {...PROPERTY_MANAGEMENT_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Property Management Companies (2026) | BeltStack",
    description:
      "Compare scheduling tools for property managers: showings, inspections, multi-agent calendars, intake. Setmore, Acuity, Square Appointments.",
  };
}
