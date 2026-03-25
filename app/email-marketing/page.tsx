"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getEmailMarketingReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  EMAIL_MARKETING_HUB_GUIDES,
  EMAIL_MARKETING_HUB_POPULAR_COMPARISONS,
  EMAIL_MARKETING_USE_CASE_EDITORIAL,
} from "@/lib/data/emailMarketingHubData";
import { getEmailMarketingComparisonBySlug } from "@/lib/data/emailMarketingComparisons";
import { BEST_FOR_BY_TRADE } from "@/lib/data/emailMarketingBestEmailMarketingSoftware";

const KEY_TAKEAWAYS = [
  { label: "Best balanced default: Mailchimp", anchor: "#pick-mailchimp" },
  { label: "Best automation depth: ActiveCampaign", anchor: "#pick-activecampaign" },
  { label: "Best analytics-first segmentation: Klaviyo", anchor: "#pick-klaviyo" },
  { label: "Best CRM bundle: HubSpot", anchor: "#pick-hubspot-email-marketing" },
];

const TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "mailchimp" },
  { slug: "activecampaign" },
  { slug: "klaviyo" },
  { slug: "hubspot-email-marketing" },
];

const TABLE_ROWS: ComparisonTableRow[] = listSoftwarePicksBySlugs("email-marketing", [
  "mailchimp",
  "activecampaign",
  "klaviyo",
  "hubspot-email-marketing",
  "constant-contact",
  "convertkit",
  "brevo",
  "mailerlite",
]).map(toHubComparisonTableRow);

const BEST_FOR_SCENARIOS = [
  { label: "Best email marketing software (roundup)", href: "/email-marketing/best-email-marketing-software" },
  { label: "Compare email marketing software", href: "/email-marketing/compare" },
  { label: "Email marketing guides", href: "/email-marketing/guides" },
  ...BEST_FOR_BY_TRADE,
];

const METHODOLOGY_BULLETS = [
  "We evaluate automation realism: can your office maintain journeys monthly without breaking customer trust?",
  "We compare pricing using 12-month list growth, SMS add-ons, and CRM integration requirements.",
  "We prioritize local-service workflows—reminders, estimates, referrals—not generic SaaS checklists.",
];

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function IntroExtended() {
  return (
    <>
      <p>
        Email marketing software helps service businesses turn leads, customers, and memberships into predictable revenue through newsletters, automations, and targeted follow-up. Start with our{" "}
        <Link href="/email-marketing/best-email-marketing-software" className={linkGreen}>best email marketing software roundup</Link>, explore{" "}
        <Link href="/email-marketing/best-for/contractors" className={linkGreen}>best email marketing for contractors</Link>, and read{" "}
        <Link href="/email-marketing/guides/how-to-build-an-email-list" className={linkGreen}>how to build an email list</Link>. Pair with{" "}
        <Link href="/crm" className={linkGreen}>CRM</Link>,{" "}
        <Link href="/lead-generation" className={linkGreen}>lead generation</Link>,{" "}
        <Link href="/website-builders" className={linkGreen}>website builders</Link>,{" "}
        <Link href="/seo-tools" className={linkGreen}>SEO tools</Link>, and{" "}
        <Link href="/reputation-management" className={linkGreen}>reputation management</Link> for full-funnel growth.
      </p>
      <p>
        Narrow further with{" "}
        <Link href="/email-marketing/best-for/small-business" className={linkGreen}>best email marketing for small business</Link>{" "}
        and{" "}
        <Link href="/email-marketing/best-for/hvac" className={linkGreen}>HVAC email marketing picks</Link>
        , then study cadences in{" "}
        <Link href="/email-marketing/guides/email-marketing-for-local-business" className={linkGreen}>email marketing for local business</Link>{" "}
        and{" "}
        <Link href="/email-marketing/guides/how-to-use-email-marketing-for-contractors" className={linkGreen}>email marketing for contractors</Link>
        .
      </p>
    </>
  );
}

function GuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Email marketing guides"
      sectionSub="Operational guidance for local service teams."
      intro={<>These guides help teams design campaigns and list growth before choosing platform depth.</>}
      guides={EMAIL_MARKETING_HUB_GUIDES}
      footer={
        <>
          Read our reviews:{" "}
          <Link href={getEmailMarketingReviewUrl("mailchimp")} className={linkGreen}>Mailchimp</Link>,{" "}
          <Link href={getEmailMarketingReviewUrl("activecampaign")} className={linkGreen}>ActiveCampaign</Link>,{" "}
          <Link href={getEmailMarketingReviewUrl("klaviyo")} className={linkGreen}>Klaviyo</Link>.{" "}
          <Link href="/email-marketing/guides" className={linkGreen}>All email marketing guides →</Link>
        </>
      }
    />
  );
}

function PopularComparisonsSection() {
  const cards = EMAIL_MARKETING_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getEmailMarketingComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as { slug: string; href: string; data: NonNullable<ReturnType<typeof getEmailMarketingComparisonBySlug>> }[];
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">Popular Email Marketing Comparisons</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Side-by-side fit, pricing signals, and workflow trade-offs.</p>
      </div>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, href, data }) => (
          <Link
            key={slug}
            href={href}
            className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <div className="flex items-center gap-3">
              <img src={data.productA.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
              <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                vs
              </span>
              <img src={data.productB.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
            </div>
            <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
              {data.productA.name} vs {data.productB.name}
            </h3>
            <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
              {data.summaryParagraph.slice(0, 140)}
              {data.summaryParagraph.length > 140 ? "…" : ""}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  { q: "What is email marketing software?", a: "It is the platform teams use to send newsletters, automations, and transactional messages while managing subscriber lists, segments, and performance reporting." },
  { q: "Why does email matter for service businesses?", a: "It connects dispatch, sales, and marketing between jobs—reminders, estimate follow-ups, and seasonal offers keep revenue steady without paying per lead forever." },
  { q: "When should a contractor invest in email marketing?", a: "When you have repeatable customer touchpoints and someone who can own sends weekly; email compounds once post-job and post-lead sequences exist." },
  { q: "Does email replace SMS?", a: "No—email carries richer education; SMS fits urgent logistics. Many teams use both with clear consent boundaries." },
  { q: "How do we choose between tools?", a: "Match automation depth to team capacity, confirm CRM and website integrations, and annualize cost at realistic list growth." },
  { q: "How much do email marketing tools cost?", a: "Many offer free tiers for small lists; paid plans often land between roughly $10 and $75 monthly before SMS, dedicated IPs, or advanced automation tiers, then scale with contacts and seats." },
];

export default function EmailMarketingHubPage() {
  return (
    <HubPageTemplate
      title="Email Marketing Software for Local Service Businesses (2026)"
      intro="Compare email platforms, automation depth, and follow-up workflows for contractors, trades, and home-service operators."
      breadcrumbLabel="Email Marketing"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="email-marketing"
      featuredPicks={TOP_PICK_REFS}
      featuredPicksTitle="Top email marketing picks"
      featuredPicksSub="Hand-picked for local service businesses. Updated regularly."
      comparisonTable={{
        title: "Compare email marketing software",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: "/email-marketing/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout strengths across leading email marketing platforms."
      introExtended={<IntroExtended />}
      guidesSection={<GuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best email marketing software by use case"
          sectionSub="Operational fit matters more than feature checklists."
          intro={<>Pick by automation maturity, list strategy, and CRM alignment.</>}
          blocks={EMAIL_MARKETING_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<PopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Email Marketing Software Overall",
        description: "Rankings, deep dives, and practical trade-offs for local operators.",
        linkText: "See full rankings →",
        href: "/email-marketing/best-email-marketing-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/email-marketing/best-email-marketing-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/email-marketing/best-email-marketing-software" }}
      scenarioLinks={{
        sectionTitle: "Best email marketing software by scenario",
        sectionSub: "Roundup, comparisons, guides, and trade entry points.",
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Email marketing software by business type",
        sectionSub: "Choose your use case and operating footprint.",
        links: BEST_FOR_BY_TRADE,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Email marketing FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review email marketing software",
        sub: "Transparent criteria focused on local operators.",
        introParagraph: "Our reviews are independent and updated regularly so teams can compare current workflow fit and pricing signals.",
        bullets: METHODOLOGY_BULLETS,
      }}
    />
  );
}
