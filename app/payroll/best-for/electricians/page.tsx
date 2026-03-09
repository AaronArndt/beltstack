import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ELECTRICIANS_PAGE_PROPS } from "@/lib/data/payrollBestForElectricians";

export default function BestPayrollForElectriciansPage() {
  return <BestForPageWithStructuredData {...ELECTRICIANS_PAGE_PROPS} />;
}
