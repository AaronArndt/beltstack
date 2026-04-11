import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForLandscapingPage() {
  return <BestForPageWithStructuredData {...LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Landscaping Companies (2026) | BeltStack",
    description:
      "Compare FSM software for landscapers: recurring routes, crew scheduling, installs, and invoicing. Jobber, Housecall Pro, and Workiz compared.",
  };
}
