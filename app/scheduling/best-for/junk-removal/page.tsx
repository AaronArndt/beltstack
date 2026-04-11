import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { JUNK_REMOVAL_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForJunkRemovalPage() {
  return <BestForPageWithStructuredData {...JUNK_REMOVAL_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Junk Removal Businesses (2026) | BeltStack",
    description:
      "Compare scheduling software for junk removal: truck windows, load intake, deposits, multi-truck booking. Acuity, Setmore, Square Appointments.",
  };
}
