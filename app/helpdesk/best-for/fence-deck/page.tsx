import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HELPDESK_TRADE_BEST_FOR_BY_SLUG, HELPDESK_TRADE_METADATA_BY_SLUG } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForFenceDeckPage() {
  return <BestForPageWithStructuredData {...HELPDESK_TRADE_BEST_FOR_BY_SLUG["fence-deck"]} />;
}

export function generateMetadata() {
  return HELPDESK_TRADE_METADATA_BY_SLUG["fence-deck"];
}
