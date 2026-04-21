import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { FLOORING_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForFlooringPage() {
  return <BestForPageWithStructuredData {...FLOORING_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Flooring Contractors (2026)"),
    description:
      "Compare CRM tools for flooring companies: showroom and designer-led sales, long material lead times, and follow-up when homeowners pause on selections or deposits.",
    keywords: [
      "CRM for flooring contractors",
      "flooring company CRM",
      "best CRM for flooring sales",
      "showroom flooring pipeline",
      "flooring estimate follow-up software",
    ],
  };
}
