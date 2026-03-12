import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForSmallBusiness";

export default function BestFieldServiceForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Field Service Software for Small Businesses (2026) | BeltStack",
    description:
      "Compare the best field service management software for small service businesses. See top tools for scheduling, dispatch, and invoicing without enterprise complexity.",
  };
}

