import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HANDYMAN_BUSINESS_PAGE_PROPS } from "@/lib/data/payrollBestForHandymanBusiness";

export default function BestPayrollForHandymanBusinessPage() {
  return <BestForPageWithStructuredData {...HANDYMAN_BUSINESS_PAGE_PROPS} />;
}
