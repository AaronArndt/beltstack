import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForPestControlPage() {
  return <BestForPageWithStructuredData {...PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Pest Control Businesses (2026) | BeltStack",
    description:
      "Compare FSM tools for pest control: recurring routes, treatment notes, service plans, and invoicing. Jobber, Housecall Pro, and Workiz compared.",
  };
}
