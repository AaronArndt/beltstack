import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSULTANTS_PAGE_PROPS } from "@/lib/data/invoicingBestForConsultants";

export default function BestInvoicingForConsultantsPage() {
  return <BestForPageWithStructuredData {...CONSULTANTS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Consultants (2026) | BeltStack",
    description:
      "Compare the best invoicing software for consultants: FreshBooks, Bonsai, HoneyBook, Wave. Service billing, proposals, retainers, and online payments.",
  };
}
