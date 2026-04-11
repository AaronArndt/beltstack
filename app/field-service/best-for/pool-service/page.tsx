import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForPoolServicePage() {
  return <BestForPageWithStructuredData {...POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Pool Service Companies (2026) | BeltStack",
    description:
      "Compare field service software for pool companies: weekly routes, service notes, open/close packages, repairs. Jobber, Housecall Pro, Workiz.",
  };
}
