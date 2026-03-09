import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { NINE_CONTRACTORS_PAGE_PROPS } from "@/lib/data/payrollBestFor1099Contractors";

export default function BestPayrollFor1099ContractorsPage() {
  return <BestForPageWithStructuredData {...NINE_CONTRACTORS_PAGE_PROPS} />;
}
