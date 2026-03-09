import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { LAWN_CARE_PAGE_PROPS } from "@/lib/data/payrollBestForLawnCare";

export default function BestPayrollForLawnCarePage() {
  return <BestForPageWithStructuredData {...LAWN_CARE_PAGE_PROPS} />;
}
