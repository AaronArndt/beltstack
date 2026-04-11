import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForConstructionPage() {
  return <BestForPageWithStructuredData {...CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Construction Companies (2026) | BeltStack",
    description:
      "Compare field service software for construction companies: site visits, subcontractor coordination, change documentation, and billing with Jobber, Housecall Pro, and Workiz.",
  };
}
