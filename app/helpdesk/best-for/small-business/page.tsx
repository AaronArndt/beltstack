import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Helpdesk Software for Small Businesses (2026) | BeltStack",
    description:
      "Compare the best helpdesk software for small businesses: Freshdesk, Help Scout, Zoho Desk. Ticketing, collaboration, and affordable pricing.",
  };
}
