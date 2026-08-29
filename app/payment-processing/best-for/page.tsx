import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getPaymentProcessingBestForUrl } from "@/lib/routes";
import {
  getPaymentProcessingBestForHubScenarioLinks,
  PAYMENT_PROCESSING_BEST_FOR_ROUNDUP_HUB_LINK,
} from "@/lib/data/paymentProcessingBestForPages";

export default function PaymentProcessingBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Payment Processing"
      categoryHref="/payment-processing"
      breadcrumbCurrent="Best For"
      title="Best Payment Processing Software by Use Case"
      intro="Scenario-based picks for contractors, trades, and multi-crew home services—from HVAC and plumbing to construction and property management—aligned to mobile payments, invoicing, and job-site collections."
      roundupLink={PAYMENT_PROCESSING_BEST_FOR_ROUNDUP_HUB_LINK}
      ungroupedCards={getPaymentProcessingBestForHubScenarioLinks()}
      ungroupedTitle="Pick your situation"
      ungroupedSub="Jump to a scenario."
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href={getPaymentProcessingBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
            Best payment processing for contractors
          </Link>{" "}
          ·{" "}
          <Link href="/payment-processing/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}
