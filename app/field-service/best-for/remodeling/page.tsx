import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForRemodelingPage() {
  return <BestForPageWithStructuredData {...REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Remodeling Businesses (2026) | BeltStack",
    description:
      "Compare FSM tools for remodelers: phased jobs, selections, change orders, and progress billing. Jobber, Housecall Pro, and Workiz compared.",
  };
}
