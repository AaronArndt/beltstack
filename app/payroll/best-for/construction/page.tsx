import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSTRUCTION_PAGE_PROPS } from "@/lib/data/payrollBestForConstruction";

export default function BestPayrollForConstructionPage() {
  return <BestForPageWithStructuredData {...CONSTRUCTION_PAGE_PROPS} />;
}
