import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/projectManagementBestForSmallBusiness";

export default function BestProjectManagementForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Project Management Software for Small Business (2026)"),
    description:
      "Compare the best project management software for small businesses: Asana, ClickUp, Monday. Task tracking, collaboration, and clear pricing.",
  };
}
