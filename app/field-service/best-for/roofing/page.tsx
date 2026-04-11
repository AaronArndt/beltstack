import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForRoofingPage() {
  return <BestForPageWithStructuredData {...ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Roofing Companies (2026) | BeltStack",
    description:
      "Compare FSM software for roofing companies. Inspection-to-proposal workflows, crew scheduling, photos, supplements, and invoicing with Jobber, Housecall Pro, and Workiz.",
  };
}
