import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FENCE_DECK_PAGE_PROPS } from "@/lib/data/payrollBestForExtendedServiceTrades2026";

export default function BestPayrollForFenceDeckPage() {
  return <BestForPageWithStructuredData {...FENCE_DECK_PAGE_PROPS} />;
}
