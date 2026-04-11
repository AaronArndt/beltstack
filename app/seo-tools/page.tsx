"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getSeoToolsReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  SEO_TOOLS_HUB_GUIDES,
  SEO_TOOLS_HUB_POPULAR_COMPARISONS,
  SEO_TOOLS_USE_CASE_EDITORIAL,
} from "@/lib/data/seoToolsHubData";
import { getSeoToolsComparisonBySlug } from "@/lib/data/seoToolsComparisons";
import { BEST_FOR_BY_TRADE } from "@/lib/data/seoToolsBestSeoTools";

const KEY_TAKEAWAYS = [
  { label: "Best all-in-one depth: Semrush", anchor: "#pick-semrush" },
  { label: "Best backlink intelligence: Ahrefs", anchor: "#pick-ahrefs" },
  { label: "Best local SEO operations: BrightLocal", anchor: "#pick-brightlocal" },
  { label: "Best free essentials: Google Search Console", anchor: "#pick-google-search-console" },
];

const HUB_TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "semrush" },
  { slug: "ahrefs" },
  { slug: "brightlocal" },
  { slug: "google-search-console" },
];

const TABLE_ROWS: ComparisonTableRow[] = listSoftwarePicksBySlugs("seo-tools", [
  "semrush",
  "ahrefs",
  "brightlocal",
  "google-search-console",
  "moz-pro",
  "ubersuggest",
  "whitespark",
  "se-ranking",
]).map(toHubComparisonTableRow);

const BEST_FOR_SCENARIOS = [
  { label: "Best SEO tools (roundup)", href: "/seo-tools/best-seo-tools" },
  { label: "Compare SEO tools", href: "/seo-tools/compare" },
  { label: "SEO tools guides", href: "/seo-tools/guides" },
  { label: "All best-for use cases", href: "/seo-tools/best-for" },
  { label: "Contractors", href: "/seo-tools/best-for/contractors" },
  { label: "Local SEO", href: "/seo-tools/best-for/local-seo" },
  { label: "Small business", href: "/seo-tools/best-for/small-business" },
  { label: "HVAC businesses", href: "/seo-tools/best-for/hvac" },
  { label: "Plumbing companies", href: "/seo-tools/best-for/plumbing" },
];

const BY_TRADE_GROUPS = [
  {
    groupLabel: "Primary trades",
    links: BEST_FOR_BY_TRADE,
  },
];

const METHODOLOGY_BULLETS = [
  "We evaluate SEO products for local service businesses—Maps, GBP, and city pages—not generic enterprise keyword vanity.",
  "We compare pricing limits that matter at one to many locations: tracked keywords, seats, and report bundles.",
  "Reviews assume you verify Google Search Console; paid tools should earn their keep weekly.",
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

function SeoToolsIntroExtended() {
  return (
    <p>
      Compare keyword research suites, local SEO platforms, and free essentials for contractors and home services. Start from our{" "}
      <Link href="/seo-tools/best-seo-tools" className={linkGreen}>
        best SEO tools roundup
      </Link>
      , then explore{" "}
      <Link href="/seo-tools/best-for/contractors" className={linkGreen}>
        SEO tools for contractors
      </Link>
      ,{" "}
      <Link href="/seo-tools/best-for/local-seo" className={linkGreen}>
        local SEO
      </Link>
      , and{" "}
      <Link href="/seo-tools/best-for/small-business" className={linkGreen}>
        small business
      </Link>{" "}
      scenario picks. For education first, read{" "}
      <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={linkGreen}>
        how to do SEO for contractors
      </Link>
      ,{" "}
      <Link href="/seo-tools/guides/google-business-profile-optimization" className={linkGreen}>
        Google Business Profile optimization
      </Link>
      , and{" "}
      <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={linkGreen}>
        how to rank in Google Maps
      </Link>
      . After your site is live, pair this hub with our{" "}
      <Link href="/website-builders/best-for/contractors" className={linkGreen}>
        website builders for contractors
      </Link>
      ,{" "}
      <Link href="/lead-generation" className={linkGreen}>
        lead generation hub
      </Link>
      ,{" "}
      <Link href="/email-marketing" className={linkGreen}>
        email marketing
      </Link>
      , and{" "}
      <Link href="/crm" className={linkGreen}>
        CRM software hub
      </Link>{" "}
      when you tighten follow-up and pipeline tracking.
    </p>
  );
}

function SeoToolsHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when buying SEO software">How to Choose SEO Tools</HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        SEO tools only help when someone uses them weekly and execution keeps pace—GBP photos, reviews, and service pages still win Map Pack. Use the{" "}
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
        <Link href="/seo-tools/best-seo-tools" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/seo-tools/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out vendor research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Search Console baseline</strong> — Verify every property before you buy; free data should anchor decisions.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Local vs national</strong> — Map Pack work often needs BrightLocal or Whitespark—not just a keyword suite.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Limit math</strong> — Tracked keywords, locations, and seats drive renewals; model annual cost honestly.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">One primary suite</strong> — Avoid paying for Semrush and Ahrefs simultaneously until usage justifies it.{" "}
            <Link href="/seo-tools/compare/semrush-vs-ahrefs" className={linkGreen}>
              Semrush vs Ahrefs
            </Link>
            .
          </li>
          <li>
            <strong className="text-[#1A2D48]">Content + links</strong> — When backlinks steer strategy, Ahrefs or Semrush depth matters; pair with on-site execution.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Measure calls</strong> — Rankings that never produce booked jobs are vanity—track pipeline impact in your{" "}
            <Link href="/crm" className={linkGreen}>
              CRM
            </Link>
            .
          </li>
        </ul>
      </div>
    </>
  );
}

function SeoToolsGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="SEO tools guides"
      sectionSub="Local SEO fundamentals—not duplicate product pitches."
      intro={
        <>
          These articles explain how local SEO works before you shortlist vendors. For picks by trade, use{" "}
          <a href="#by-trade" className={linkGreen}>
            SEO tools by business type
          </a>
          .
        </>
      }
      guides={SEO_TOOLS_HUB_GUIDES}
      footer={
        <>
          Read our reviews:{" "}
          <Link href={getSeoToolsReviewUrl("semrush")} className={linkGreen}>
            Semrush
          </Link>
          ,{" "}
          <Link href={getSeoToolsReviewUrl("ahrefs")} className={linkGreen}>
            Ahrefs
          </Link>
          ,{" "}
          <Link href={getSeoToolsReviewUrl("brightlocal")} className={linkGreen}>
            BrightLocal
          </Link>
          ,{" "}
          <Link href={getSeoToolsReviewUrl("google-search-console")} className={linkGreen}>
            Google Search Console
          </Link>
          .{" "}
          <Link href="/seo-tools/guides" className={linkGreen}>
            All SEO tools guides →
          </Link>
        </>
      }
    />
  );
}

function SeoToolsPopularComparisonsSection() {
  const cards = SEO_TOOLS_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getSeoToolsComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as {
    slug: string;
    href: string;
    data: NonNullable<ReturnType<typeof getSeoToolsComparisonBySlug>>;
  }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">Popular SEO Tool Comparisons</HubSectionTitle>
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
        <Link href="/seo-tools/compare" className={linkGreen}>
          View all SEO tool comparisons →
        </Link>
      </p>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What SEO tools do local contractors need?",
    a: "Verify Google Search Console, keep Google Business Profile accurate, then choose one primary research suite (often Semrush, Ahrefs, or SE Ranking) and add BrightLocal or Whitespark when Map Pack and citations are the bottleneck.",
  },
  {
    q: "Semrush or Ahrefs for local service businesses?",
    a: "Ahrefs leads for backlinks and content gaps; Semrush adds broader marketing workflows—see our head-to-head and pick one primary suite first.",
  },
  {
    q: "Do SEO tools replace a website?",
    a: "No—publish strong service pages first. Our website builder hub helps you launch; SEO tools measure and expand visibility after.",
  },
  {
    q: "Should I buy SEO software and lead generation?",
    a: "Often yes over time: SEO compounds while lead products fill near-term pipeline—track both with disciplined CRM source tagging.",
  },
];

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";

function SeoToolsFinderForm() {
  const [focus, setFocus] = useState("");
  const [footprint, setFootprint] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="seo-focus" className="block text-sm font-semibold text-[#1A2D48]">
          Primary bottleneck
        </label>
        <select id="seo-focus" value={focus} onChange={(e) => setFocus(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="maps">Map Pack / GBP</option>
          <option value="content">Content + keywords</option>
          <option value="links">Backlinks</option>
          <option value="tech">Technical crawl issues</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="seo-footprint" className="block text-sm font-semibold text-[#1A2D48]">
          Locations to track
        </label>
        <select id="seo-footprint" value={footprint} onChange={(e) => setFootprint(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="one">Single city / brand</option>
          <option value="few">2–5 locations</option>
          <option value="many">6+ locations</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="seo-budget" className="block text-sm font-semibold text-[#1A2D48]">
          Monthly software budget
        </label>
        <select id="seo-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="free">Free first (GSC)</option>
          <option value="mid">~$50–120/mo</option>
          <option value="high">$120+/mo</option>
        </select>
      </div>
      <button type="submit" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function SeoToolsEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What service businesses should look for in SEO software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">Focus on execution fit, local measurement, and honest limits—not buzzwords.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">GBP + site work first</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Tools surface issues; they do not replace review responses, photos, categories, and accurate service areas.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Match software to your bottleneck</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Map Pack operators often need local platforms; content-led teams need keyword and link intelligence—avoid buying everything at once.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">CRM and lead context</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              When organic traffic converts, tag sources in your CRM so SEO time ties to booked jobs—not just rankings.
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
                Search Console verified
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                GBP categories + service areas accurate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Core city + service pages live
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Weekly SEO owner assigned
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SeoToolsHubPage() {
  return (
    <HubPageTemplate
      title="SEO Tools for Local Service Businesses (2026)"
      intro="Compare keyword suites, local SEO platforms, and free essentials for contractors optimizing Google Maps, GBP, and organic visibility."
      breadcrumbLabel="SEO Tools"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="seo-tools"
      featuredPicks={HUB_TOP_PICK_REFS}
      featuredPicksTitle="Top SEO tool picks"
      featuredPicksSub="Hand-picked for service businesses. Updated regularly."
      comparisonTable={{
        title: "Compare SEO tools",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: "/seo-tools/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout strengths across popular SEO products."
      introExtended={<SeoToolsIntroExtended />}
      howToChooseSection={<SeoToolsHowToChooseSection />}
      guidesSection={<SeoToolsGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best SEO tools by use case"
          sectionSub="Local execution—not generic marketing labels—drives results."
          intro={
            <>
              Read scenario blurbs for Map Pack, content, and budget realities. For trade entry points use{" "}
              <a href="#by-trade" className={linkGreen}>
                SEO tools by business type
              </a>
              .
            </>
          }
          blocks={SEO_TOOLS_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<SeoToolsPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best SEO Tools Overall",
        description: "Rankings, deep dives, and trade-offs across suites and local platforms.",
        linkText: "See full rankings →",
        href: "/seo-tools/best-seo-tools",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/seo-tools/best-seo-tools" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/seo-tools/best-seo-tools" }}
      scenarioLinks={{
        sectionTitle: "Best SEO tools by scenario",
        sectionSub: "Roundup, comparisons, guides, and quick trade entry points.",
        description: undefined,
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "SEO tools by business type",
        sectionSub: "Pick your trade or operating model—local SEO execution still matters more than dashboards.",
        links: [],
        groups: BY_TRADE_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="SEO tools FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review SEO tools",
        sub: "Transparent criteria focused on local operators.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current pricing signals and workflow fit.",
        bullets: METHODOLOGY_BULLETS,
      }}
      finderSection={{
        title: "Find the right SEO stack",
        sub: "Placeholder finder—narrows by bottleneck, footprint, and budget.",
        content: <SeoToolsFinderForm />,
      }}
      educationSection={<SeoToolsEducationSection />}
    />
  );
}
