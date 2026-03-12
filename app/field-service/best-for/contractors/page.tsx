import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForContractors";

export default function BestFieldServiceForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Contractors (2026) | BeltStack",
    description:
      "Compare the best field service management software for contractors and mixed trade crews. See top tools for multi-trade scheduling, dispatch, and job management.",
  };
}

