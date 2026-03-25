"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getCallTrackingReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  CALL_TRACKING_HUB_GUIDES,
  CALL_TRACKING_HUB_POPULAR_COMPARISONS,
  CALL_TRACKING_USE_CASE_EDITORIAL,
} from "@/lib/data/callTrackingHubData";
import { getCallTrackingComparisonBySlug } from "@/lib/data/callTrackingComparisons";
import { BEST_FOR_BY_TRADE } from "@/lib/data/callTrackingBestCallTrackingSoftware";

const KEY_TAKEAWAYS = [
  { label: "Best SMB marketing attribution: CallRail", anchor: "#pick-callrail" },
  { label: "Best operator-grade analytics: CallTrackingMetrics", anchor: "#pick-calltrackingmetrics" },
  { label: "Best lead rollups: WhatConverts", anchor: "#pick-whatconverts" },
  { label: "Best enterprise conversation depth: Invoca", anchor: "#pick-invoca" },
];

const HUB_TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "callrail" },
  { slug: "calltrackingmetrics" },
  { slug: "whatconverts" },
  { slug: "invoca" },
];

const TABLE_ROWS: ComparisonTableRow[] = listSoftwarePicksBySlugs("call-tracking", [
  "callrail",
  "calltrackingmetrics",
  "whatconverts",
  "invoca",
  "ringba",
  "twilio",
  "phonewagon",
  "nimbata",
]).map(toHubComparisonTableRow);

const BEST_FOR_SCENARIOS = [
  { label: "Best call tracking software (roundup)", href: "/call-tracking/best-call-tracking-software" },
  { label: "Compare call tracking software", href: "/call-tracking/compare" },
  { label: "Call tracking guides", href: "/call-tracking/guides" },
  { label: "Contractors", href: "/call-tracking/best-for/contractors" },
  { label: "Small business", href: "/call-tracking/best-for/small-business" },
  { label: "HVAC", href: "/call-tracking/best-for/hvac" },
  { label: "Plumbing", href: "/call-tracking/best-for/plumbing" },
  { label: "Home services", href: "/call-tracking/best-for/home-services" },
];

const BY_TRADE_GROUPS = [
  {
    groupLabel: "Primary trades",
    links: BEST_FOR_BY_TRADE,
  },
];

const METHODOLOGY_BULLETS = [
  "We evaluate call tracking for local service businesses—LSA, PPC, organic, and CRM outcomes—not generic enterprise telco vanity.",
  "We compare minute pools, number limits, and integration depth that matter when campaigns scale.",
  "Reviews assume you tag sources in CRM; software should earn renewals with weekly usage.",
];

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function CallTrackingIntroExtended() {
  return (
    <p>
      Compare marketing attribution, lead rollups, and operator-grade analytics for contractors and home services. Start from our{" "}
      <Link href="/call-tracking/best-call-tracking-software" className={linkGreen}>
        best call tracking software roundup
      </Link>
      , then explore{" "}
      <Link href="/call-tracking/best-for/contractors" className={linkGreen}>
        call tracking for contractors
      </Link>
      ,{" "}
      <Link href="/call-tracking/best-for/small-business" className={linkGreen}>
        small business
      </Link>
      , and{" "}
      <Link href="/call-tracking/best-for/home-services" className={linkGreen}>
        home services
      </Link>{" "}
      scenario picks. For education first, read{" "}
      <Link href="/call-tracking/guides/what-is-call-tracking" className={linkGreen}>
        what is call tracking
      </Link>
      ,{" "}
      <Link href="/call-tracking/guides/how-call-tracking-works" className={linkGreen}>
        how call tracking works
      </Link>
      , and{" "}
      <Link href="/call-tracking/guides/call-tracking-for-contractors" className={linkGreen}>
        call tracking for contractors
      </Link>
      . Pair this hub with our{" "}
      <Link href="/lead-generation" className={linkGreen}>
        lead generation hub
      </Link>
      ,{" "}
      <Link href="/seo-tools" className={linkGreen}>
        SEO tools hub
      </Link>
      ,{" "}
      <Link href="/website-builders/best-for/contractors" className={linkGreen}>
        website builders for contractors
      </Link>
      , and{" "}
      <Link href="/crm" className={linkGreen}>
        CRM software hub
      </Link>{" "}
      when you tighten pipeline tracking.
    </p>
  );
}

function CallTrackingHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when buying call tracking software">How to Choose Call Tracking Software</HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        Call tracking only helps when swap scripts stay healthy and CRM stages reflect booked jobs—not just rings. Use the{" "}
        <Link href="#compare" className={linkGreen}>
          comparison table
        </Link>
        , then{" "}
        <a href="#by-scenario" className={linkGreen}>
          scenario picks
        </a>{" "}
        when you know your trade—or{" "}
        <a href="#payroll-guides" className={linkGreen}>
          guides
        </a>{" "}
        for fundamentals first. Our{" "}
        <Link href="/call-tracking/best-call-tracking-software" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/call-tracking/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out vendor research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">CRM discipline</strong> — Source tags without outcomes still hide wasted spend.
          </li>
          <li>
            <strong className="text-[#1A2D48]">One DNI stack</strong> — Duplicate layers disagree; pick a single system of record.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Minute math</strong> — Model renewals on peak weeks and active campaigns.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Lead rollups vs call depth</strong> — WhatConverts-style clarity differs from CTM-style analytics.{" "}
            <Link href="/call-tracking/compare/calltrackingmetrics-vs-whatconverts" className={linkGreen}>
              CTM vs WhatConverts
            </Link>
            .
          </li>
          <li>
            <strong className="text-[#1A2D48]">LSA + PPC overlap</strong> — Consistent tagging prevents double-counting when both run.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Websites that convert</strong> — Strong CTAs still matter—see our{" "}
            <Link href="/website-builders" className={linkGreen}>
              website builders hub
            </Link>
            .
          </li>
        </ul>
      </div>
    </>
  );
}

function CallTrackingGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Call tracking guides"
      sectionSub="Attribution fundamentals—not duplicate vendor pitches."
      intro={
        <>
          These articles explain how call tracking works before you shortlist vendors. For picks by trade, use{" "}
          <a href="#by-trade" className={linkGreen}>
            call tracking by business type
          </a>
          .
        </>
      }
      guides={CALL_TRACKING_HUB_GUIDES}
      footer={
        <>
          Read our reviews:{" "}
          <Link href={getCallTrackingReviewUrl("callrail")} className={linkGreen}>
            CallRail
          </Link>
          ,{" "}
          <Link href={getCallTrackingReviewUrl("calltrackingmetrics")} className={linkGreen}>
            CallTrackingMetrics
          </Link>
          ,{" "}
          <Link href={getCallTrackingReviewUrl("whatconverts")} className={linkGreen}>
            WhatConverts
          </Link>
          .{" "}
          <Link href="/call-tracking/guides" className={linkGreen}>
            All call tracking guides →
          </Link>
        </>
      }
    />
  );
}

function CallTrackingPopularComparisonsSection() {
  const cards = CALL_TRACKING_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getCallTrackingComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as {
    slug: string;
    href: string;
    data: NonNullable<ReturnType<typeof getCallTrackingComparisonBySlug>>;
  }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">Popular Call Tracking Comparisons</HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, href, data }) => {
          const title = `${data.productA.name} vs ${data.productB.name}`;
          const summary =
            data.summaryParagraph.length > 140 ? data.summaryParagraph.slice(0, 140).trim() + "…" : data.summaryParagraph;
          return (
            <Link
              key={slug}
              href={href}
              className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {data.productA.logoSrc ? (
                  <img
                    src={data.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productA.name}</span>
                )}
                <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                  vs
                </span>
                {data.productB.logoSrc ? (
                  <img
                    src={data.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productB.name}</span>
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
              <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link href="/call-tracking/compare" className={linkGreen}>
          View all call tracking comparisons →
        </Link>
      </p>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is call tracking for contractors?",
    a: "Dynamic numbers and session data tie inbound calls to marketing sources—Google Ads, LSA, SEO landing pages, or directories—so you can measure cost per booked job when paired with CRM stages.",
  },
  {
    q: "CallRail or CallTrackingMetrics?",
    a: "CallRail fits many SMB marketing stacks; CallTrackingMetrics fits teams that defend complex paid programs weekly—see our head-to-head and pick based on who logs in.",
  },
  {
    q: "Does call tracking replace a CRM?",
    a: "No—call tracking proves source; CRM proves revenue. Integrate both so marketing and ops share one story.",
  },
  {
    q: "Will call tracking hurt SEO?",
    a: "Reputable DNI avoids harming local SEO when implemented correctly; follow vendor guidance and keep NAP consistent on static assets like GBP.",
  },
];

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";

function CallTrackingFinderForm() {
  const [focus, setFocus] = useState("");
  const [footprint, setFootprint] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="ct-focus" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="ct-focus" value={focus} onChange={(e) => setFocus(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="dni">Website DNI + keyword context</option>
          <option value="lead">Calls + forms + chats rollup</option>
          <option value="paid">Paid search attribution depth</option>
          <option value="telco">Routing / buyer programs</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="ct-footprint" className="block text-sm font-semibold text-[#1A2D48]">
          Footprint
        </label>
        <select id="ct-footprint" value={footprint} onChange={(e) => setFootprint(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="one">Single brand / city</option>
          <option value="few">2–5 locations</option>
          <option value="many">6+ locations</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="ct-budget" className="block text-sm font-semibold text-[#1A2D48]">
          Monthly software budget
        </label>
        <select id="ct-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="low">Under ~$75/mo</option>
          <option value="mid">~$75–150/mo</option>
          <option value="high">$150+/mo or enterprise</option>
        </select>
      </div>
      <button type="submit" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function CallTrackingEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What service businesses should look for in call tracking</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Focus on CRM-ready outcomes, honest minute math, and one clean DNI layer.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Outcomes over rings</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Raw call volume can hide bad leads—score sources with booked-job stages in your CRM.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Match depth to the team</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Operator-grade analytics only help when someone owns dashboards weekly; otherwise start simpler.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Pair with SEO and lead gen</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Call tracking proves which pages and campaigns earn phones—compare stacks in our SEO and lead generation hubs.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                CRM source fields defined
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Single swap script on site
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                GBP + site numbers reconciled
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Weekly attribution review owner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CallTrackingHubPage() {
  return (
    <HubPageTemplate
      title="Call Tracking Software for Local Service Businesses (2026)"
      intro="Compare marketing attribution, lead rollups, and analytics for contractors tying phone calls to Google Ads, LSA, SEO pages, and CRM outcomes."
      breadcrumbLabel="Call Tracking"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="call-tracking"
      featuredPicks={HUB_TOP_PICK_REFS}
      featuredPicksTitle="Top call tracking picks"
      featuredPicksSub="Hand-picked for service businesses. Updated regularly."
      comparisonTable={{
        title: "Compare call tracking software",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: "/call-tracking/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout strengths across popular call tracking products."
      introExtended={<CallTrackingIntroExtended />}
      howToChooseSection={<CallTrackingHowToChooseSection />}
      guidesSection={<CallTrackingGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best call tracking by use case"
          sectionSub="Attribution clarity—not buzzwords—drives better spend decisions."
          intro={
            <>
              Read scenario blurbs for SMB, trade, and multi-brand realities. For trade entry points use{" "}
              <a href="#by-trade" className={linkGreen}>
                call tracking by business type
              </a>
              .
            </>
          }
          blocks={CALL_TRACKING_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<CallTrackingPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Call Tracking Software Overall",
        description: "Rankings, deep dives, and trade-offs across SMB stacks and enterprise options.",
        linkText: "See full rankings →",
        href: "/call-tracking/best-call-tracking-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/call-tracking/best-call-tracking-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/call-tracking/best-call-tracking-software" }}
      scenarioLinks={{
        sectionTitle: "Best call tracking by scenario",
        sectionSub: "Roundup, comparisons, guides, and quick trade entry points.",
        description: undefined,
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Call tracking by business type",
        sectionSub: "Pick your trade or operating model—CRM hygiene still matters more than dashboards alone.",
        links: [],
        groups: BY_TRADE_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Call tracking FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review call tracking software",
        sub: "Transparent criteria focused on local operators.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current pricing signals and workflow fit.",
        bullets: METHODOLOGY_BULLETS,
      }}
      finderSection={{
        title: "Find the right call tracking stack",
        sub: "Placeholder finder—narrows by need, footprint, and budget.",
        content: <CallTrackingFinderForm />,
      }}
      educationSection={<CallTrackingEducationSection />}
    />
  );
}
