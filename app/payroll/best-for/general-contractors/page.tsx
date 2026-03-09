import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GENERAL_CONTRACTORS_PAGE_PROPS } from "@/lib/data/payrollBestForGeneralContractors";

export default function BestPayrollForGeneralContractorsPage() {
  return <BestForPageWithStructuredData {...GENERAL_CONTRACTORS_PAGE_PROPS} />;
}
