import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for HVAC Businesses (2026) | BeltStack",
    description:
      "Compare scheduling software for HVAC: multi-tech booking, maintenance plans, reminders, Square Appointments, Acuity, Setmore. Plus when to use field service software.",
  };
}
