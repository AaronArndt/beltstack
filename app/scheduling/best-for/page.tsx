import type { Metadata } from "next";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import {
  getSchedulingBestForHubGeneralLinks,
  getSchedulingBestForHubTradeLinks,
  SCHEDULING_BEST_FOR_ROUNDUP_HUB_LINK,
} from "@/lib/data/schedulingBestForHub";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function SchedulingBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Scheduling"
      categoryHref="/scheduling"
      breadcrumbCurrent="Best for"
      title="Best Scheduling Software by Use Case"
      intro="Find scheduling software that fits your situation—freelancers, consultants, small businesses, teams, and trade-specific picks for HVAC, plumbing, construction, movers, and more."
      roundupLink={SCHEDULING_BEST_FOR_ROUNDUP_HUB_LINK}
      generalCards={getSchedulingBestForHubGeneralLinks()}
      tradeCards={getSchedulingBestForHubTradeLinks()}
      cardCta="See picks →"
    />
  );
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for",
      title: "Best Scheduling Software by Use Case (2026) | BeltStack",
      description:
        "Browse scheduling software by use case and trade: freelancers, consultants, teams, HVAC, appliance repair, garage door, locksmith, flooring, auto repair, mobile mechanics, cleaning franchises, event services, home inspectors, and more.",
    }),
    keywords: [
      "best scheduling software by industry",
      "scheduling software for contractors",
      "appointment booking software 2026",
      "BeltStack scheduling best-for",
    ],
  };
}
