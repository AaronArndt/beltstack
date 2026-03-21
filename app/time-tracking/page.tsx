"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getTimeTrackingComparison } from "@/lib/data/timeTrackingComparisons";
import { getTimeTrackingCompareUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";

// ——— Time tracking placeholder routes ———
const TIME_REVIEW_BASE = "/time-tracking/review";
const TIME_COMPARE_BASE = "/time-tracking/compare";
const TIME_GUIDES_BASE = "/time-tracking/guides";
const TIME_BEST_FOR_BASE = "/time-tracking/best-for";

// ——— Hero & key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall time tracker: Toggl Track", anchor: "#pick-toggl" },
  { label: "Best for billing & invoicing: Harvest", anchor: "#pick-harvest" },
  { label: "Best free time tracker: Clockify", anchor: "#pick-clockify" },
  { label: "Best for remote teams: Hubstaff", anchor: "#pick-hubstaff" },
];

const HUB_TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "toggl", badge: "Best overall" },
  { slug: "harvest", badge: "Best for time + invoicing" },
  { slug: "clockify", badge: "Best free" },
  { slug: "hubstaff", badge: "Best for remote teams" },
];

const TABLE_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("time-tracking", ["toggl", "harvest", "clockify", "hubstaff"]).map(toHubComparisonTableRow),
  { tool: "Time Doctor", bestFor: "Strict monitoring", price: "From ~$7/user/mo", rating: "4.2", slug: "time-doctor", logoSrc: "/Logos/timedoctor.jpeg" },
  { tool: "RescueTime", bestFor: "Personal productivity", price: "Free tier", rating: "4.1", slug: "rescuetime", logoSrc: "/Logos/rescuetime.jpeg" },
  { tool: "Everhour", bestFor: "Project teams", price: "From ~$8.50/user/mo", rating: "4.3", slug: "everhour", logoSrc: "/Logos/everhour.png" },
  { tool: "Timely", bestFor: "Automatic tracking", price: "From ~$11/user/mo", rating: "4.2", slug: "timely", logoSrc: "/Logos/timely.png" },
];

const TIME_GUIDES = [
  {
    title: "How Time Tracking Software Works",
    href: `${TIME_GUIDES_BASE}/how-time-tracking-software-works`,
    description: "What time tracking software does, from timers to reports and approvals.",
  },
  {
    title: "Time Tracking for Freelancers",
    href: `${TIME_GUIDES_BASE}/time-tracking-for-freelancers`,
    description: "How freelancers log billable hours, track projects, and bill clients accurately.",
  },
  {
    title: "Time Tracking for Agencies",
    href: `${TIME_GUIDES_BASE}/time-tracking-for-agencies`,
    description: "How agencies track time across clients and projects and manage utilization.",
  },
  {
    title: "Tracking Billable Hours",
    href: `${TIME_GUIDES_BASE}/tracking-billable-hours`,
    description: "Best practices for separating billable and non-billable time and avoiding leakage.",
  },
  {
    title: "Time Tracking vs Timesheets",
    href: `${TIME_GUIDES_BASE}/time-tracking-vs-timesheets`,
    description: "Modern time tracking tools compared to traditional timesheets.",
  },
];

const BEST_FOR_SCENARIOS = [
  { label: "Best time tracking software (roundup)", href: "/time-tracking/best-time-tracking-software" },
  { label: "Compare time tracking software", href: "/time-tracking/compare" },
  { label: "Time tracking guides", href: "/time-tracking/guides" },
  { label: "Freelancers", href: `${TIME_BEST_FOR_BASE}/freelancers` },
  { label: "Agencies", href: `${TIME_BEST_FOR_BASE}/agencies` },
  { label: "Consultants", href: `${TIME_BEST_FOR_BASE}/consultants` },
  { label: "Small business", href: `${TIME_BEST_FOR_BASE}/small-business` },
  { label: "Remote teams", href: `${TIME_BEST_FOR_BASE}/remote-teams` },
];

const BY_INDUSTRY = [
  { label: "Freelancers", href: `${TIME_BEST_FOR_BASE}/freelancers` },
  { label: "Agencies", href: `${TIME_BEST_FOR_BASE}/agencies` },
  { label: "Consultants", href: `${TIME_BEST_FOR_BASE}/consultants` },
  { label: "Remote teams", href: `${TIME_BEST_FOR_BASE}/remote-teams` },
];

const BY_INDUSTRY_GROUPS = [
  { groupLabel: "Primary business types", links: BY_INDUSTRY.slice(0, 3) },
  { groupLabel: "Other business types", links: BY_INDUSTRY.slice(3) },
];

/** Slugs for Popular Time Tracking Comparisons cards; data from getTimeTrackingComparison. */
const POPULAR_TIME_TRACKING_COMPARISON_SLUGS = [
  "toggl-vs-harvest",
  "clockify-vs-toggl",
  "hubstaff-vs-time-doctor",
  "everhour-vs-harvest",
  "timely-vs-toggl",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is time tracking software?",
    a: "Time tracking software helps you record how long work takes—by client, project, and task—so you can bill accurately, understand costs, and improve productivity.",
  },
  {
    q: "Who needs time tracking software?",
    a: "Freelancers, agencies, consultants, and small businesses that bill for time or care about job costing benefit most. Remote and field teams also use time tracking to support payroll and accountability.",
  },
  {
    q: "How does time tracking connect to invoicing and accounting?",
    a: "Most tools export time entries or integrate directly with invoicing and accounting software so billable hours flow into invoices and your books without retyping.",
  },
];

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

function TimeTrackingIntroExtended() {
  return (
    <p>
      Time tracking software replaces guesswork and manual timesheets with accurate, structured data. You can use it to bill
      clients, understand job costs, or simply see how your team spends time each week. Many tools integrate with{" "}
      <Link href="/invoicing" className={linkGreen}>
        invoicing software
      </Link>
      ,{" "}
      <Link href="/accounting" className={linkGreen}>
        accounting platforms
      </Link>
      , and{" "}
      <Link href="/payroll" className={linkGreen}>
        payroll systems
      </Link>{" "}
      so hours flow into bills and pay runs automatically.
    </p>
  );
}

function TimeTrackingHowToChooseSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">How to choose time tracking software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          What matters when freelancers, agencies, and small businesses pick time tracking tools.
        </p>
      </div>
      <div className="mt-4 grid gap-6 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#6E6E6E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Billable vs non-billable time</h3>
            <p className="mt-1.5">
              Choose a tool that lets you tag time as billable or internal work, set billable rates, and report on how much of
              your week is truly billable. That’s essential for freelancers, agencies, and consultants.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations and exports</h3>
            <p className="mt-1.5">
              Time tracking rarely lives alone. Look for exports or integrations with your{" "}
              <Link href="/invoicing" className={linkGreen}>
                invoicing tools
              </Link>
              ,{" "}
              <Link href="/accounting" className={linkGreen}>
                accounting software
              </Link>
              , or{" "}
              <Link href="/payroll" className={linkGreen}>
                payroll provider
              </Link>{" "}
              so you do not have to retype hours.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Monitoring vs culture</h3>
            <p className="mt-1.5">
              Decide how much monitoring you really need. Basic tracking (like Toggl or Clockify) is enough for many teams.
              Monitoring-heavy tools (like Hubstaff or Time Doctor) add screenshots and GPS but require clear communication and
              buy-in.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Quick checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Billable rates and basic reporting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Exports or integrations with invoicing/accounting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Clear policy on monitoring (if used)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function TimeTrackingEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What businesses should look for in time tracking software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          What matters when businesses choose time tracking tools for billing, payroll, and productivity.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#6E6E6E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Billable vs non-billable time</h3>
            <p className="mt-1.5">
              Pick software that makes it easy to separate billable and internal time, set billable rates, and report on how much of
              your week is truly billable. That&apos;s essential for freelancers, agencies, and consultants that invoice by the hour.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations with invoicing, accounting, and payroll</h3>
            <p className="mt-1.5">
              Time tracking rarely stands alone. Look for exports or integrations with your{" "}
              <Link href="/invoicing" className={linkGreen}>
                invoicing tools
              </Link>
              ,{" "}
              <Link href="/accounting" className={linkGreen}>
                accounting software
              </Link>
              , and{" "}
              <Link href="/payroll" className={linkGreen}>
                payroll provider
              </Link>{" "}
              so hours flow into bills and pay runs without manual entry.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Monitoring vs lightweight tracking</h3>
            <p className="mt-1.5">
              Decide how much monitoring you really need. Lightweight tools like Toggl Track or Clockify focus on timers and
              reporting; monitoring-heavy tools like Hubstaff or Time Doctor add screenshots and GPS. Match the tool to your culture
              and team type.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Billable rates and basic reporting
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Exports or integrations with invoicing, accounting, and payroll
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Clear policy on monitoring for remote and field teams
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function TimeTrackingGuidesSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">Time Tracking Guides</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          Guides that explain how time tracking works and how to use it for billing, budgeting, and productivity.
        </p>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TIME_GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <h3 className="text-[#1A2D48] text-lg font-bold hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed line-clamp-2">{guide.description}</p>
            <span className="mt-3 text-sm font-semibold text-[#10B981]">Read guide →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function TimeTrackingPopularComparisonsSection() {
  const cards = POPULAR_TIME_TRACKING_COMPARISON_SLUGS.map((slug) => {
    const data = getTimeTrackingComparison(slug);
    return data ? { slug, data } : null;
  }).filter(Boolean) as { slug: string; data: NonNullable<ReturnType<typeof getTimeTrackingComparison>> }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side time tracking features, pricing, and recommendations.">
        Popular Time Tracking Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, data }) => {
          const title = `${data.productA.name} vs ${data.productB.name}`;
          const summary =
            data.summaryParagraph.length > 140
              ? data.summaryParagraph.slice(0, 140).trim() + "…"
              : data.summaryParagraph;
          const compareHref = getTimeTrackingCompareUrl(slug);
          return (
            <Link
              key={slug}
              href={compareHref}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
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
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#6E6E6E]">{data.productA.name}</span>
                )}
                <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
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
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#6E6E6E]">{data.productB.name}</span>
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                {title}
              </h3>
              <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link
          href="/time-tracking/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all time tracking comparisons →
        </Link>
      </p>
    </>
  );
}

function TimeTrackingFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="time-business-type" className="block text-sm font-semibold text-[#1A2D48]">
          Team type
        </label>
        <select id="time-business-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="freelancer">Freelancer</option>
          <option value="agency">Agency</option>
          <option value="consulting">Consulting</option>
          <option value="small-business">Small business</option>
          <option value="remote-team">Remote team</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="time-use-case" className="block text-sm font-semibold text-[#1A2D48]">
          Primary use case
        </label>
        <select id="time-use-case" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="billing">Billable client work</option>
          <option value="payroll">Payroll and timesheets</option>
          <option value="productivity">Productivity and focus</option>
          <option value="utilization">Project utilization and planning</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

export default function TimeTrackingPage() {
  return (
    <HubPageTemplate
      title="Best Time Tracking Software for Small Businesses (2026)"
      intro="Compare time tracking tools for freelancers, agencies, remote teams, and small businesses."
      breadcrumbLabel="Time Tracking"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="time-tracking"
      featuredPicks={HUB_TOP_PICK_REFS}
      featuredPicksTitle="Top time tracking picks"
      featuredPicksSub="Hand-picked for freelancers, agencies, and small teams. Updated regularly."
      comparisonTable={{
        title: "Compare time tracking software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: TABLE_ROWS,
        detailsLinkBase: `${TIME_REVIEW_BASE}/`,
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular time tracking tools."
      introExtended={<TimeTrackingIntroExtended />}
      howToChooseSection={<TimeTrackingHowToChooseSection />}
      guidesSection={<TimeTrackingGuidesSection />}
      popularComparisonsSection={<TimeTrackingPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Time Tracking Software Overall",
        description:
          "View our full rankings of the best time tracking software for freelancers, agencies, remote teams, and small businesses.",
        linkText: "See full rankings →",
        href: "/time-tracking/best-time-tracking-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/time-tracking/best-time-tracking-software" }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/time-tracking/best-time-tracking-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best time tracking software by use case",
        sectionSub: "Find time tracking software that fits your situation.",
        description: "Choose a use case to see our top picks.",
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Time tracking by business type",
        sectionSub: "Best time tracking software for different business types and team setups.",
        links: BY_INDUSTRY,
        groups: BY_INDUSTRY_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Time tracking software FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review time tracking software",
        sub: "Transparent process, small-business–focused criteria.",
        introParagraph:
          "Our reviews are independent and updated regularly so you get current pricing and feature information.",
        bullets: [
          "We test time tracking workflows: starting timers, editing entries, and reporting.",
          "We compare pricing tiers, user limits, and add-ons so you can budget accurately.",
          "We focus on freelancers, agencies, consultants, and small businesses—not enterprise-only needs.",
        ],
      }}
      finderSection={{
        title: "Find the right time tracking fit",
        sub: "Narrow down by team type and use case.",
        content: <TimeTrackingFinderForm />,
      }}
      educationSection={<TimeTrackingEducationSection />}
    />
  );
}

