import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { POOL_SERVICE_PAGE_PROPS } from "@/lib/data/payrollBestForPoolService";

export default function BestPayrollForPoolServicePage() {
  return <BestForPageWithStructuredData {...POOL_SERVICE_PAGE_PROPS} />;
}
