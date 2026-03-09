import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/payrollBestForContractors";

export default function BestPayrollForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}
