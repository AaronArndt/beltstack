import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PAINTERS_PAGE_PROPS } from "@/lib/data/payrollBestForPainters";

export default function BestPayrollForPaintersPage() {
  return <BestForPageWithStructuredData {...PAINTERS_PAGE_PROPS} />;
}
