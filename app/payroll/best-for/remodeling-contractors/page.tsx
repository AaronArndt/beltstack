import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { REMODELING_CONTRACTORS_PAGE_PROPS } from "@/lib/data/payrollBestForRemodelingContractors";

export default function BestPayrollForRemodelingContractorsPage() {
  return <BestForPageWithStructuredData {...REMODELING_CONTRACTORS_PAGE_PROPS} />;
}
