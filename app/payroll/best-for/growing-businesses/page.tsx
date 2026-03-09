import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GROWING_BUSINESSES_PAGE_PROPS } from "@/lib/data/payrollBestForGrowingBusinesses";

export default function BestPayrollForGrowingBusinessesPage() {
  return <BestForPageWithStructuredData {...GROWING_BUSINESSES_PAGE_PROPS} />;
}
