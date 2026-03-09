import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/accountingBestForAgencies";

export default function BestAccountingForAgenciesPage() {
  return <BestForPageWithStructuredData {...AGENCIES_PAGE_PROPS} />;
}
