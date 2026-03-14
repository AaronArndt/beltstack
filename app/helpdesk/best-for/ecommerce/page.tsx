import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ECOMMERCE_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForEcommercePage() {
  return <BestForPageWithStructuredData {...ECOMMERCE_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Helpdesk Software for Ecommerce (2026) | BeltStack",
    description:
      "Helpdesk for ecommerce: Gorgias, Zendesk, Freshdesk. Order context, store integrations, and high message volume support.",
  };
}
