import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOVING_PAGE_PROPS } from "@/lib/data/payrollBestForMoving";

export default function BestPayrollForMovingPage() {
  return <BestForPageWithStructuredData {...MOVING_PAGE_PROPS} />;
}
