import { BestForTemplate } from "@/components/best/BestForTemplate";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/payrollBestForContractors";

export default function BestPayrollForContractorsPage() {
  return <BestForTemplate {...CONTRACTORS_PAGE_PROPS} />;
}
