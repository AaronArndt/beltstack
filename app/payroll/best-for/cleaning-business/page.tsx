import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CLEANING_PAGE_PROPS } from "@/lib/data/payrollBestForCleaning";

export default function BestPayrollForCleaningBusinessPage() {
  return <BestForPageWithStructuredData {...CLEANING_PAGE_PROPS} />;
}
