import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/invoicingBestForFreelancers";

export default function BestInvoicingForFreelancersPage() {
  return <BestForPageWithStructuredData {...FREELANCERS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Freelancers (2026) | BeltStack",
    description:
      "Compare the best invoicing software for freelancers: FreshBooks, Bonsai, Wave, Zoho Invoice. Recurring invoices, online payments, and simple reporting.",
  };
}
