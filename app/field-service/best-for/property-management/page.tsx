import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForPropertyManagementPage() {
  return <BestForPageWithStructuredData {...PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Property Management Companies (2026) | BeltStack",
    description:
      "Compare field service software for property managers: work orders, vendor jobs, documentation, and billing across portfolios. Jobber, Housecall Pro, Workiz.",
  };
}
