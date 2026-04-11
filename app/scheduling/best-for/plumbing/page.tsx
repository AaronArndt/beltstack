import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PLUMBING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForPlumbingPage() {
  return <BestForPageWithStructuredData {...PLUMBING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Plumbing Companies (2026) | BeltStack",
    description:
      "Compare scheduling tools for plumbers: emergency and booked jobs, deposits, multi-plumber calendars, reminders. Square Appointments, Acuity Scheduling, Setmore.",
  };
}
