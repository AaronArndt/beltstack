import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { CONCRETE_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS } from "@/lib/data/projectManagementBestForTrades";

export default function BestProjectManagementForConcreteContractorsPage() {
  return <BestForPageWithStructuredData {...CONCRETE_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Concrete Contractors (2026)"),
    description:
      "Compare project management software for concrete contractors: pour sequencing, inspections, QA documentation, and crew handoffs. Wrike, Smartsheet, Asana.",
    keywords: [
      "best project management software",
      "project management software",
      "concrete contractors",
      "2026",
    ],
  };
}
