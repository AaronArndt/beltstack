import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/invoicingBestForSmallBusiness";

export default function BestInvoicingForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Small Businesses (2026) | BeltStack",
    description:
      "Compare the best invoicing software for small businesses: FreshBooks, QuickBooks, Wave, Zoho Invoice. Invoice creation, payment tracking, and integrations.",
  };
}
