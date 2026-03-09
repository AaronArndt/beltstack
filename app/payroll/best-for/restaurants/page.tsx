import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { RESTAURANTS_PAGE_PROPS } from "@/lib/data/payrollBestForRestaurants";

export default function BestPayrollForRestaurantsPage() {
  return <BestForPageWithStructuredData {...RESTAURANTS_PAGE_PROPS} />;
}
