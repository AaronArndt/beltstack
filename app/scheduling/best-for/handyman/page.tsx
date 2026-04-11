import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HANDYMAN_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForHandymanPage() {
  return <BestForPageWithStructuredData {...HANDYMAN_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Handyman Businesses (2026) | BeltStack",
    description:
      "Compare scheduling apps for handyman services: small-job windows, reminders, simple payments. Setmore, Square Appointments, Acuity Scheduling.",
  };
}
