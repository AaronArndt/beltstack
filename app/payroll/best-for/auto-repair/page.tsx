import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AUTO_REPAIR_PAGE_PROPS } from "@/lib/data/payrollBestForAutoRepair";

export default function BestPayrollForAutoRepairPage() {
  return <BestForPageWithStructuredData {...AUTO_REPAIR_PAGE_PROPS} />;
}
