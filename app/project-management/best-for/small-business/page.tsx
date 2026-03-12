import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/projectManagementBestForSmallBusiness";

export default function BestProjectManagementForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Small Business (2026) | BeltStack",
    description:
      "Compare the best project management software for small businesses: Asana, ClickUp, Monday. Task tracking, collaboration, and clear pricing.",
  };
}
