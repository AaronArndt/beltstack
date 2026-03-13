import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSULTANTS_PAGE_PROPS } from "@/lib/data/schedulingBestFor";

export default function BestSchedulingForConsultantsPage() {
  return <BestForPageWithStructuredData {...CONSULTANTS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Consultants (2026) | BeltStack",
    description:
      "Compare the best scheduling software for consultants: Calendly, Acuity Scheduling, YouCanBook.me. Intake forms, packages, and payment at booking.",
  };
}
