import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { RETAIL_PAGE_PROPS } from "@/lib/data/payrollBestForRetail";

export default function BestPayrollForRetailPage() {
  return <BestForPageWithStructuredData {...RETAIL_PAGE_PROPS} />;
}
