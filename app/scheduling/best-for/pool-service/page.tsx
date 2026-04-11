import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { POOL_SERVICE_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForPoolServicePage() {
  return <BestForPageWithStructuredData {...POOL_SERVICE_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Pool Service Companies (2026) | BeltStack",
    description:
      "Compare scheduling tools for pool maintenance: weekly routes, open/close packages, reminders. Setmore, Acuity Scheduling, Square Appointments.",
  };
}
