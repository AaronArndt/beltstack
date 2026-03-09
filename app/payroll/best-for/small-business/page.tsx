import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/payrollBestForSmallBusiness";

export default function BestPayrollForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}
