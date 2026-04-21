import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { CONSULTANTS_PAGE_PROPS } from "@/lib/data/schedulingBestFor";

export default function BestSchedulingForConsultantsPage() {
  return <BestForPageWithStructuredData {...CONSULTANTS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Consultants (2026)"),
    description:
      "Compare the best scheduling software for consultants: Calendly, Acuity Scheduling, YouCanBook.me. Intake forms, packages, and payment at booking.",
  };
}
