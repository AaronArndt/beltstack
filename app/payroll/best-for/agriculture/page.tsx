import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AGRICULTURE_PAGE_PROPS } from "@/lib/data/payrollBestForAgriculture";

export default function BestPayrollForAgriculturePage() {
  return <BestForPageWithStructuredData {...AGRICULTURE_PAGE_PROPS} />;
}
