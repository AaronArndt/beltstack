import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForJunkRemovalPage() {
  return <BestForPageWithStructuredData {...JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Junk Removal Businesses (2026) | BeltStack",
    description:
      "Compare FSM software for junk removal: truck windows, load-size quoting, deposits, multi-truck dispatch. Jobber, Housecall Pro, Workiz.",
  };
}
