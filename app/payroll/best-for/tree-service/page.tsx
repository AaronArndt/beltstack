import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { TREE_SERVICE_PAGE_PROPS } from "@/lib/data/payrollBestForTreeService";

export default function BestPayrollForTreeServicePage() {
  return <BestForPageWithStructuredData {...TREE_SERVICE_PAGE_PROPS} />;
}
