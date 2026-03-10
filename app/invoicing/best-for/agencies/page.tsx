import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/invoicingBestForAgencies";

export default function BestInvoicingForAgenciesPage() {
  return <BestForPageWithStructuredData {...AGENCIES_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Agencies (2026) | BeltStack",
    description:
      "Compare the best invoicing software for agencies: FreshBooks, HoneyBook, QuickBooks, Bonsai. Client billing, retainers, proposals, and project workflows.",
  };
}
