import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Helpdesk Software for Small Businesses (2026)"),
    description:
      "Compare the best helpdesk software for small businesses: Freshdesk, Help Scout, Zoho Desk. Ticketing, collaboration, and affordable pricing.",
  };
}
