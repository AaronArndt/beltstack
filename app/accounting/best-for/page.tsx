import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import {
  ACCOUNTING_BEST_FOR_ROUNDUP_HUB_LINK,
  getAccountingBestForHubGeneralLinks,
  getAccountingBestForHubTradeLinks,
} from "@/lib/data/accountingBestForHub";

export default function AccountingBestForPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Accounting"
      categoryHref="/accounting"
      breadcrumbCurrent="Best For"
      title="Best Accounting Software by Use Case"
      intro="Find accounting software that fits your situation—freelancers, contractors, small business, ecommerce, agencies, and trade-specific picks for HVAC, plumbing, construction, property management, automotive, event services, home inspectors, and more."
      roundupLink={ACCOUNTING_BEST_FOR_ROUNDUP_HUB_LINK}
      generalCards={getAccountingBestForHubGeneralLinks()}
      tradeCards={getAccountingBestForHubTradeLinks()}
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href="/accounting" className="font-semibold text-[#10B981] hover:underline">
            Accounting hub
          </Link>{" "}
          ·{" "}
          <Link href="/accounting/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Accounting Software by Use Case | BeltStack",
    description:
      "Browse accounting software by use case and trade: freelancers, contractors, small business, ecommerce, agencies, HVAC, plumbing, construction, property management, appliance repair, auto shops, cleaning franchises, home inspectors, and more.",
    keywords: [
      "best accounting software by industry",
      "accounting software for contractors",
      "accounting software for trades",
      "small business accounting by use case",
    ],
  };
}
