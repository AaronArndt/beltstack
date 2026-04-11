import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForMovingPage() {
  return <BestForPageWithStructuredData {...MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Moving Companies (2026) | BeltStack",
    description:
      "Compare field service software for movers: surveys, crew and truck scheduling, deposits, and job-day billing. Jobber, Housecall Pro, Workiz.",
  };
}
