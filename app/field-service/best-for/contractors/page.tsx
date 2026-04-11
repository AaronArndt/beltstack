import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForContractors";

export default function BestFieldServiceForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for General Contractors (2026) | BeltStack",
    description:
      "Compare field service management software for general contractors and mixed-trade crews. Jobber, Housecall Pro, ServiceTitan for scheduling, dispatch, and job management.",
  };
}

