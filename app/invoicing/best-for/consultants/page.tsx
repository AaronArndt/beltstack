import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { CONSULTANTS_PAGE_PROPS } from "@/lib/data/invoicingBestForConsultants";

export default function BestInvoicingForConsultantsPage() {
  return <BestForPageWithStructuredData {...CONSULTANTS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Invoicing Software for Consultants (2026)"),
    description:
      "Compare the best invoicing software for consultants: FreshBooks, Bonsai, HoneyBook, Wave. Service billing, proposals, retainers, and online payments.",
  };
}
