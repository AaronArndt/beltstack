"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getReputationManagementReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  REPUTATION_MANAGEMENT_HUB_GUIDES,
  REPUTATION_MANAGEMENT_HUB_POPULAR_COMPARISONS,
  REPUTATION_MANAGEMENT_USE_CASE_EDITORIAL,
} from "@/lib/data/reputationManagementHubData";
import { getReputationManagementComparisonBySlug } from "@/lib/data/reputationManagementComparisons";
import { BEST_FOR_BY_TRADE } from "@/lib/data/reputationManagementBestReputationManagementSoftware";

const KEY_TAKEAWAYS = [
  { label: "Best SMS-first execution: Podium", anchor: "#pick-podium" },
  { label: "Best all-in-one scale: Birdeye", anchor: "#pick-birdeye" },
  { label: "Best simple automation: NiceJob", anchor: "#pick-nicejob" },
  { label: "Best enterprise governance: Reputation.com", anchor: "#pick-reputation-com" },
];

const TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "podium" },
  { slug: "birdeye" },
  { slug: "nicejob" },
  { slug: "reputation-com" },
];

const TABLE_ROWS: ComparisonTableRow[] = listSoftwarePicksBySlugs("reputation-management", [
  "podium",
  "birdeye",
  "nicejob",
  "reputation-com",
  "broadly",
  "grade-us",
  "trustpilot-business",
  "yelp-for-business",
]).map(toHubComparisonTableRow);

const BEST_FOR_SCENARIOS = [
  { label: "Best reputation management software (roundup)", href: "/reputation-management/best-reputation-management-software" },
  { label: "Compare reputation software", href: "/reputation-management/compare" },
  { label: "Reputation management guides", href: "/reputation-management/guides" },
  ...BEST_FOR_BY_TRADE,
];

const METHODOLOGY_BULLETS = [
  "We evaluate local-service operational fit: request timing, response ownership, and workflow adoption.",
  "We compare pricing through annual operating cost and location footprint reality.",
  "We prioritize conversion and trust outcomes for contractors and home-service teams.",
];

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function IntroExtended() {
  return (
    <p>
      Compare review growth, response workflows, and local trust operations for contractors and service businesses. Start with our{" "}
      <Link href="/reputation-management/best-reputation-management-software" className={linkGreen}>best reputation management software roundup</Link>, then explore{" "}
      <Link href="/reputation-management/best-for/contractors" className={linkGreen}>best for contractors</Link> and{" "}
      <Link href="/reputation-management/guides/how-to-get-more-google-reviews" className={linkGreen}>how to get more Google reviews</Link>. Pair this cluster with{" "}
      <Link href="/seo-tools" className={linkGreen}>SEO tools</Link>,{" "}
      <Link href="/lead-generation" className={linkGreen}>lead generation</Link>,{" "}
      <Link href="/website-builders" className={linkGreen}>website builders</Link>,{" "}
      <Link href="/crm" className={linkGreen}>CRM</Link>,{" "}
      <Link href="/email-marketing" className={linkGreen}>email marketing</Link>, and{" "}
      <Link href="/call-tracking" className={linkGreen}>call tracking</Link> for full-funnel performance.
    </p>
  );
}

function GuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Reputation management guides"
      sectionSub="Operational guidance for local service teams."
      intro={<>These guides help teams improve reviews and response quality before selecting platform depth.</>}
      guides={REPUTATION_MANAGEMENT_HUB_GUIDES}
      footer={
        <>
          Read our reviews:{" "}
          <Link href={getReputationManagementReviewUrl("podium")} className={linkGreen}>Podium</Link>,{" "}
          <Link href={getReputationManagementReviewUrl("birdeye")} className={linkGreen}>Birdeye</Link>,{" "}
          <Link href={getReputationManagementReviewUrl("nicejob")} className={linkGreen}>NiceJob</Link>.{" "}
          <Link href="/reputation-management/guides" className={linkGreen}>All reputation guides →</Link>
        </>
      }
    />
  );
}

function PopularComparisonsSection() {
  const cards = REPUTATION_MANAGEMENT_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getReputationManagementComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as { slug: string; href: string; data: NonNullable<ReturnType<typeof getReputationManagementComparisonBySlug>> }[];
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">Popular Reputation Management Comparisons</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Side-by-side fit, pricing signals, and workflow trade-offs.</p>
      </div>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, href, data }) => (
          <Link key={slug} href={href} className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2">
            <div className="flex items-center gap-3">
              <img src={data.productA.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
              <span className="text-[#57534E] text-lg font-medium" aria-hidden>vs</span>
              <img src={data.productB.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
            </div>
            <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{data.productA.name} vs {data.productB.name}</h3>
            <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{data.summaryParagraph.slice(0, 140)}{data.summaryParagraph.length > 140 ? "…" : ""}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  { q: "What is reputation management software?", a: "It helps businesses request reviews, monitor feedback, and respond consistently across key channels like Google and Yelp." },
  { q: "Is it worth it for contractors?", a: "Yes when tied to completed-job workflows and response ownership. It improves trust signals that influence local conversion." },
  { q: "Does reputation software replace SEO tools?", a: "No. Reputation software strengthens review trust while SEO tools improve visibility; most teams need both." },
  { q: "How should small businesses choose?", a: "Choose the platform your team can run weekly with consistent request cadence and response SLAs." },
];

export default function ReputationManagementHubPage() {
  return (
    <HubPageTemplate
      title="Reputation Management Software for Local Service Businesses (2026)"
      intro="Compare review-growth platforms, response workflows, and local trust operations for contractors and home-service businesses."
      breadcrumbLabel="Reputation Management"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="reputation-management"
      featuredPicks={TOP_PICK_REFS}
      featuredPicksTitle="Top reputation management picks"
      featuredPicksSub="Hand-picked for local service businesses. Updated regularly."
      comparisonTable={{ title: "Compare reputation management software", subtitle: "Side-by-side pricing and fit.", rows: TABLE_ROWS, detailsLinkBase: "/reputation-management/review/" }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout strengths across leading reputation platforms."
      introExtended={<IntroExtended />}
      guidesSection={<GuidesSection />}
      scenarioCustomContent={<HubEditorialUseCaseSection sectionTitle="Best reputation software by use case" sectionSub="Operational fit matters more than feature count." intro={<>Pick by team workflow, location complexity, and response ownership.</>} blocks={REPUTATION_MANAGEMENT_USE_CASE_EDITORIAL} />}
      popularComparisonsSection={<PopularComparisonsSection />}
      bestRoundupBlock={{ title: "Best Reputation Management Software Overall", description: "Rankings, deep dives, and practical trade-offs for local operators.", linkText: "See full rankings →", href: "/reputation-management/best-reputation-management-software" }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/reputation-management/best-reputation-management-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/reputation-management/best-reputation-management-software" }}
      scenarioLinks={{ sectionTitle: "Best reputation software by scenario", sectionSub: "Roundup, comparisons, guides, and trade entry points.", links: BEST_FOR_SCENARIOS, highlightFirstLink: true }}
      tradeLinks={{ sectionTitle: "Reputation software by business type", sectionSub: "Choose your use case and operating footprint.", links: BEST_FOR_BY_TRADE }}
      faqItems={FAQ_ITEMS}
      faqTitle="Reputation management FAQs"
      faqSub="Quick answers to common questions."
      methodology={{ title: "How we review reputation management software", sub: "Transparent criteria focused on local operators.", introParagraph: "Our reviews are independent and updated regularly so teams can compare current workflow fit and pricing signals.", bullets: METHODOLOGY_BULLETS }}
    />
  );
}
