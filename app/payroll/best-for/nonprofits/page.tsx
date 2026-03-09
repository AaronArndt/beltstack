import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { NONPROFITS_PAGE_PROPS } from "@/lib/data/payrollBestForNonprofits";

export default function BestPayrollForNonprofitsPage() {
  return <BestForPageWithStructuredData {...NONPROFITS_PAGE_PROPS} />;
}
