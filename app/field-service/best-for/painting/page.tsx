import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";

export default function BestFieldServiceForPaintingPage() {
  return <BestForPageWithStructuredData {...PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Painting Contractors (2026) | BeltStack",
    description:
      "Compare field service management software for painting contractors. Jobber, Housecall Pro, and Workiz for crew scheduling, estimates, production phases, and invoicing.",
  };
}
