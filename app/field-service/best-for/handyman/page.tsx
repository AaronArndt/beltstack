import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForHandymanPage() {
  return <BestForPageWithStructuredData {...HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Handyman Businesses (2026) | BeltStack",
    description:
      "Compare field service software for handyman businesses: stacked jobs, same-day dispatch, estimates, and mobile invoicing with Jobber, Housecall Pro, and Workiz.",
  };
}
