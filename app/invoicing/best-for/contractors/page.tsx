import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/invoicingBestForContractors";

export default function BestInvoicingForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Contractors (2026) | BeltStack",
    description:
      "Compare the best invoicing software for contractors: FreshBooks, HoneyBook, QuickBooks, Zoho Invoice. Estimates, progress billing, deposits, and payment collection.",
  };
}
