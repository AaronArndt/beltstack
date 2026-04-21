import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/invoicingBestForContractors";

export default function BestInvoicingForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Invoicing Software for Contractors (2026)"),
    description:
      "Compare the best invoicing software for contractors: FreshBooks, HoneyBook, QuickBooks, Zoho Invoice. Estimates, progress billing, deposits, and payment collection.",
  };
}
