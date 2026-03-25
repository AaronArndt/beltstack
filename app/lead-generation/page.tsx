"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  LEAD_GENERATION_HUB_GUIDES,
  LEAD_GENERATION_HUB_POPULAR_COMPARISONS,
  LEAD_GENERATION_USE_CASE_EDITORIAL,
} from "@/lib/data/leadGenerationHubData";
import { getLeadGenerationComparisonBySlug } from "@/lib/data/leadGenerationComparisons";

const KEY_TAKEAWAYS = [
  { label: "Best pay-per-lead marketplace depth: Thumbtack", anchor: "#pick-thumbtack" },
  { label: "Best Google search intent: Local Services Ads", anchor: "#pick-google-local-services-ads" },
  { label: "Best home-services directory mix: Angi", anchor: "#pick-angi" },
  { label: "Best portfolio-led remodel leads: Houzz Pro", anchor: "#pick-houzz-pro" },
];

const HUB_TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "thumbtack" },
  { slug: "google-local-services-ads" },
  { slug: "angi" },
  { slug: "houzz-pro" },
];

const TABLE_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("lead-generation", ["thumbtack", "angi", "google-local-services-ads", "houzz-pro"]).map(
    toHubComparisonTableRow
  ),
  {
    tool: "Bark",
    bestFor: "Multi-category lead credits",
    price: "Credits / packs",
    rating: "4.0",
    slug: "bark",
    logoSrc: "/Logos/bark.jpeg",
  },
  {
    tool: "HomeAdvisor",
    bestFor: "Residential marketplace scale",
    price: "Pay per lead",
    rating: "4.1",
    slug: "homeadvisor",
    logoSrc: "/Logos/homeadvisor.jpeg",
  },
  {
    tool: "Yelp Ads",
    bestFor: "Yelp-heavy metros",
    price: "Campaign budgets",
    rating: "4.0",
    slug: "yelp-ads",
    logoSrc: "/Logos/yelp.png",
  },
  {
    tool: "Facebook Lead Ads",
    bestFor: "Paid social + CRM follow-up",
    price: "Campaign budgets",
    rating: "4.1",
    slug: "facebook-lead-ads",
    logoSrc: "/Logos/facebook.jpeg",
  },
];

const BEST_FOR_SCENARIOS = [
  { label: "Best lead generation tools (roundup)", href: "/lead-generation/best-lead-generation-tools" },
  { label: "Compare lead generation platforms", href: "/lead-generation/compare" },
  { label: "Lead generation guides", href: "/lead-generation/guides" },
  { label: "Contractors", href: "/lead-generation/best-for/contractors" },
  { label: "HVAC", href: "/lead-generation/best-for/hvac" },
  { label: "Plumbing", href: "/lead-generation/best-for/plumbing" },
  { label: "Home services", href: "/lead-generation/best-for/home-services" },
  { label: "Cleaning services", href: "/lead-generation/best-for/cleaning-services" },
];

const BY_TRADE_GROUPS = [
  {
    groupLabel: "Primary trades",
    links: [
      { label: "Contractors", href: "/lead-generation/best-for/contractors" },
      { label: "HVAC", href: "/lead-generation/best-for/hvac" },
      { label: "Plumbing", href: "/lead-generation/best-for/plumbing" },
      { label: "Electricians", href: "/lead-generation/best-for/electricians" },
      { label: "Roofing", href: "/lead-generation/best-for/roofing" },
      { label: "Landscaping", href: "/lead-generation/best-for/landscaping" },
      { label: "Cleaning services", href: "/lead-generation/best-for/cleaning-services" },
      { label: "Home services", href: "/lead-generation/best-for/home-services" },
    ],
  },
];

const METHODOLOGY_BULLETS = [
  "We evaluate lead products using booked-job economics—not vanity lead counts.",
  "We compare dispute rules, duplicate policies, and speed-to-lead for real crews.",
  "Reviews are written for local service businesses balancing paid and owned demand.",
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

function LeadGenIntroExtended() {
  return (
    <p>
      Find pay-per-lead marketplaces, Google Local Services Ads, directory brands, and complementary paid social options.
      Start from our{" "}
      <Link href="/lead-generation/best-lead-generation-tools" className={linkGreen}>
        best lead generation tools roundup
      </Link>
      , then explore{" "}
      <Link href="/lead-generation/best-for/contractors" className={linkGreen}>
        lead generation for contractors
      </Link>
      ,{" "}
      <Link href="/lead-generation/best-for/hvac" className={linkGreen}>
        HVAC
      </Link>
      , and{" "}
      <Link href="/lead-generation/best-for/home-services" className={linkGreen}>
        home services
      </Link>{" "}
      scenario picks. For education first, read{" "}
      <Link href="/lead-generation/guides/how-to-get-leads-for-contractors" className={linkGreen}>
        how to get leads for contractors
      </Link>
      ,{" "}
      <Link href="/lead-generation/guides/how-to-choose-a-lead-generation-platform" className={linkGreen}>
        how to choose a lead generation platform
      </Link>
      , and{" "}
      <Link href="/lead-generation/guides/paid-vs-organic-leads" className={linkGreen}>
        paid vs organic leads
      </Link>
      . Pair this hub with our{" "}
      <Link href="/seo-tools/best-seo-tools" className={linkGreen}>
        best SEO tools
      </Link>{" "}
      when you are building organic demand alongside paid leads, plus{" "}
      <Link href="/website-builders/best-for/contractors" className={linkGreen}>
        website builders for contractors
      </Link>{" "}
      and the{" "}
      <Link href="/crm" className={linkGreen}>
        CRM software hub
      </Link>{" "}
      when you tighten follow-up and conversion.
    </p>
  );
}

function LeadGenHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when buying leads">How to Choose Lead Generation Tools</HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        Lead products only work with fast phone/SMS response and honest CPA math. Use the{" "}
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
        for economics first. Our{" "}
        <Link href="/lead-generation/best-lead-generation-tools" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/lead-generation/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out vendor research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Speed to lead</strong> — Shared leads reward the first quality response. Fix routing before scaling spend.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Disputes &amp; refunds</strong> — Learn credit windows per vendor. Bad matches are a ops problem until you normalize policies.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Intent fit</strong> — Google LSA captures search intent; directories capture browsers; social captures offers. Match channel to customer research behavior.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">CPA reality</strong> — Model cost per booked job, not cost per name.{" "}
            <Link href="/lead-generation/guides/paid-vs-organic-leads" className={linkGreen}>
              Paid vs organic leads
            </Link>
            .
          </li>
          <li>
            <strong className="text-[#1A2D48]">Owned marketing</strong> — Leads are rented; keep reviews, site, and CRM hygiene so vendors aren’t your only pipeline.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Verification</strong> — LSA and some directories require background checks and licensing proof—budget onboarding time.
          </li>
        </ul>
      </div>
    </>
  );
}

function LeadGenGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Lead generation guides"
      sectionSub="Economics, channels, and evaluation—not duplicate product pitches."
      intro={
        <>
          These articles explain how lead buying works before you shortlist vendors. For picks by trade, use{" "}
          <a href="#by-trade" className={linkGreen}>
            lead generation by business type
          </a>
          .
        </>
      }
      guides={LEAD_GENERATION_HUB_GUIDES}
      footer={
        <>
          Read our reviews:{" "}
          <Link href={getLeadGenerationReviewUrl("thumbtack")} className={linkGreen}>
            Thumbtack
          </Link>
          ,{" "}
          <Link href={getLeadGenerationReviewUrl("angi")} className={linkGreen}>
            Angi
          </Link>
          ,{" "}
          <Link href={getLeadGenerationReviewUrl("google-local-services-ads")} className={linkGreen}>
            Google Local Services Ads
          </Link>
          ,{" "}
          <Link href={getLeadGenerationReviewUrl("homeadvisor")} className={linkGreen}>
            HomeAdvisor
          </Link>
          .{" "}
          <Link href="/lead-generation/guides" className={linkGreen}>
            All lead generation guides →
          </Link>
        </>
      }
    />
  );
}

function LeadGenPopularComparisonsSection() {
  const cards = LEAD_GENERATION_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getLeadGenerationComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as {
    slug: string;
    href: string;
    data: NonNullable<ReturnType<typeof getLeadGenerationComparisonBySlug>>;
  }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">Popular Lead Generation Comparisons</HubSectionTitle>
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
        <Link href="/lead-generation/compare" className={linkGreen}>
          View all lead generation comparisons →
        </Link>
      </p>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What’s the best lead generation tool for contractors?",
    a: "Start with Thumbtack or Google Local Services Ads if eligible—then add Angi or HomeAdvisor as a split test. Best channel depends on how homeowners find you and how fast you answer.",
  },
  {
    q: "Are paid leads worth it?",
    a: "Yes when you track booked revenue, dispute bad matches, and staff inbound. If not, fix ops before spending more.",
  },
  {
    q: "How is Google Local Services Ads different from Yelp Ads?",
    a: "LSA targets Google searchers with screened listings; Yelp Ads reach Yelp browsers. See our head-to-head comparison.",
  },
  {
    q: "Should I run multiple marketplaces?",
    a: "Often yes as a test—use CRM tagging to catch duplicates and compare cost per booked job after 30–60 days.",
  },
];

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";

function LeadGenFinderForm() {
  const [channel, setChannel] = useState("");
  const [buyer, setBuyer] = useState("");
  const [speed, setSpeed] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="lg-channel" className="block text-sm font-semibold text-[#1A2D48]">
          Primary channel interest
        </label>
        <select id="lg-channel" value={channel} onChange={(e) => setChannel(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="marketplace">Marketplace leads</option>
          <option value="lsa">Google Local Services Ads</option>
          <option value="social">Paid social</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="lg-buyer" className="block text-sm font-semibold text-[#1A2D48]">
          How customers find you today
        </label>
        <select id="lg-buyer" value={buyer} onChange={(e) => setBuyer(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="google">Google search</option>
          <option value="referral">Referrals / repeat</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="lg-speed" className="block text-sm font-semibold text-[#1A2D48]">
          Lead response speed
        </label>
        <select id="lg-speed" value={speed} onChange={(e) => setSpeed(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="fast">&lt; 5 minutes</option>
          <option value="hour">Same business day</option>
          <option value="slow">Inconsistent</option>
        </select>
      </div>
      <button type="submit" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function LeadGenEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What service businesses should look for in lead products</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Focus on economics, intent, and operations—not hype.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Booked-job CPA first</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Divide spend by booked jobs with healthy margin—not by lead volume. Refunds and disputes belong in the model.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Intent match</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Emergency trades behave differently from design-heavy remodels. Pick the channel that matches how buyers choose vendors.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Speed and CRM discipline</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Tag duplicates, log outcomes, and enforce follow-up SLAs—marketplaces penalize slow responders.
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
                Dispute / credit windows documented
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Call/SMS routing tested
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                CRM source tagging per vendor
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Weekly cap while testing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LeadGenerationHubPage() {
  return (
    <HubPageTemplate
      title="Lead Generation Tools for Local Service Businesses (2026)"
      intro="Compare pay-per-lead marketplaces, Google Local Services Ads, directory brands, and paid social for contractors and home services."
      breadcrumbLabel="Lead Generation"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="lead-generation"
      featuredPicks={HUB_TOP_PICK_REFS}
      featuredPicksTitle="Top lead generation picks"
      featuredPicksSub="Hand-picked for service businesses. Updated regularly."
      comparisonTable={{
        title: "Compare lead generation platforms",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: "/lead-generation/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout strengths across popular lead products."
      introExtended={<LeadGenIntroExtended />}
      howToChooseSection={<LeadGenHowToChooseSection />}
      guidesSection={<LeadGenGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best lead generation tools by use case"
          sectionSub="Channel fit—not generic marketing labels—drives results."
          intro={
            <>
              Read scenario blurbs for speed, intent, and marketplace overlap. For trade entry points use{" "}
              <a href="#by-trade" className={linkGreen}>
                lead generation by business type
              </a>
              .
            </>
          }
          blocks={LEAD_GENERATION_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<LeadGenPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Lead Generation Tools Overall",
        description: "Rankings, deep dives, and trade-offs across marketplaces and ad platforms.",
        linkText: "See full rankings →",
        href: "/lead-generation/best-lead-generation-tools",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/lead-generation/best-lead-generation-tools" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/lead-generation/best-lead-generation-tools" }}
      scenarioLinks={{
        sectionTitle: "Best lead generation tools by scenario",
        sectionSub: "Roundup, comparisons, guides, and quick trade entry points.",
        description: undefined,
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Lead generation by business type",
        sectionSub: "Pick your trade or operating model—not every channel fits every crew.",
        links: [],
        groups: BY_TRADE_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Lead generation FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review lead generation tools",
        sub: "Transparent criteria focused on contractor economics.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current policies and pricing signals.",
        bullets: METHODOLOGY_BULLETS,
      }}
      finderSection={{
        title: "Find the right lead mix",
        sub: "Placeholder finder—narrows by channel and response speed.",
        content: <LeadGenFinderForm />,
      }}
      educationSection={<LeadGenEducationSection />}
    />
  );
}
