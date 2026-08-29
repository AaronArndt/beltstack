import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getSeoToolsBestForHubScenarioCards } from "@/lib/data/seoToolsBestForPages";
import { getSeoToolsBestForUrl } from "@/lib/routes";

const SEO_ROUNDUP = {
  label: "Best SEO Tools (2026)",
  href: "/seo-tools/best-seo-tools",
  description:
    "Full roundup of suites, local platforms, and free essentials—with methodology, pricing realism, and Google Search Console as baseline.",
} as const;

export default function SeoToolsBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="SEO Tools"
      categoryHref="/seo-tools"
      breadcrumbCurrent="Best For"
      title="Best SEO Tools by Use Case"
      intro="Editorial scenario guides for trades and local SMBs: we anchor on Google Search Console, honest GBP and listings execution, and when paid suites earn their keep—then link to reviews and comparisons so you can verify pricing and quotas on each vendor’s site. Includes appliance repair, garage door, automotive, event services, home inspectors, and more."
      roundupLink={SEO_ROUNDUP}
      ungroupedCards={getSeoToolsBestForHubScenarioCards()}
      ungroupedTitle="Pick your situation"
      ungroupedSub="Jump to a scenario."
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href={getSeoToolsBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
            Best for contractors
          </Link>{" "}
          ·{" "}
          <Link href="/seo-tools/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best SEO Tools by Use Case | BeltStack",
    description:
      "Editorial best-for guides for contractors, trades, property managers, movers, automotive, appliance repair, event services, home inspectors, local SEO, and more—GSC-first, Map Pack reality, independent picks. Open a scenario for stacks, FAQs, and links to reviews.",
    keywords: [
      "best SEO tools by industry",
      "SEO software for local business",
      "local SEO tools by trade",
      "Google Search Console SEO stack",
    ],
  };
}
