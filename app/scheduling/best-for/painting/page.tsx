import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PAINTING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForPaintingPage() {
  return <BestForPageWithStructuredData {...PAINTING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Painting Contractors (2026) | BeltStack",
    description:
      "Compare scheduling tools for painters: estimates, production blocks, deposits, crew booking. Square Appointments, Acuity Scheduling, and Setmore compared.",
  };
}
