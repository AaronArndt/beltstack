"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  FIELD_SERVICE_FEATURED_PICKS,
  FIELD_SERVICE_COMPARISON_ROWS,
  FIELD_SERVICE_SCENARIO_LINKS,
  FIELD_SERVICE_BY_BUSINESS_TYPE_GROUPS,
  FIELD_SERVICE_POPULAR_COMPARISONS,
  FIELD_SERVICE_FAQ_ITEMS,
  FIELD_SERVICE_METHODOLOGY,
  FIELD_SERVICE_USE_CASE_EDITORIAL,
  FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS,
} from "@/lib/data/fieldServiceHubData";
import { FIELD_SERVICE_GUIDES } from "@/lib/data/fieldServiceGuides";
// ——— Key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall: Jobber", anchor: "#pick-jobber" },
  { label: "Best for home service pros: Housecall Pro", anchor: "#pick-housecall-pro" },
  { label: "Best for growing companies: ServiceTitan", anchor: "#pick-servicetitan" },
  { label: "Best for field teams: Workiz", anchor: "#pick-workiz" },
];

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";
const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

function FieldServiceFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="fsm-team-type" className="block text-sm font-semibold text-[#1A2D48]">
          Team type
        </label>
        <select id="fsm-team-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="contractor">Contractor</option>
          <option value="small-service-team">Small service team</option>
          <option value="growing-service-company">Growing service company</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="fsm-primary-need" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="fsm-primary-need" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="scheduling">Scheduling</option>
          <option value="dispatch">Dispatch</option>
          <option value="invoicing">Invoicing</option>
          <option value="customer-management">Customer management</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

function FieldServiceEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in field service software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">
          What matters when contractors and service companies choose tools to schedule jobs, dispatch technicians, and get paid.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#57534E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Scheduling and dispatch</h3>
            <p className="mt-1.5">
              Look for a clear calendar and dispatch board so you can assign jobs to technicians, see who is available, and avoid double-booking. Drag-and-drop scheduling and route optimization save time as your team grows.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Mobile apps for technicians</h3>
            <p className="mt-1.5">
              Technicians need to view their schedule, update job status, capture signatures, and add notes or photos from the field. A solid mobile app keeps office and field in sync and reduces call-backs for status updates.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Invoicing and payments</h3>
            <p className="mt-1.5">
              Generate estimates and invoices from jobs, send them by email or customer portal, and accept online payments. Recurring billing for maintenance contracts and integration with accounting software help you get paid faster and keep books straight.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Customer management</h3>
            <p className="mt-1.5">
              Keep customer details, job history, and property information in one place. Customer portals let clients book, view estimates, and pay online. Good FSM tools replace scattered spreadsheets and sticky notes with a single source of truth.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Reporting and automation</h3>
            <p className="mt-1.5">
              Reports on revenue, job completion, technician productivity, and pipeline help you run the business. Automations—like sending reminders when a job is scheduled or triggering an invoice when work is marked complete—reduce manual follow-up.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Scheduling and dispatch board
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Mobile app for technicians
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Estimates and invoicing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Customer and property records
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Online payments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Basic reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function FieldServiceHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating field service tools">
        How to Choose Field Service Management Software
      </HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        Field service software helps you schedule jobs, dispatch technicians, and keep invoicing and customer details
        in one place. This hub is for contractors and service businesses that send teams into the field. Start with
        the{" "}
        <Link href="#compare" className={linkGreen}>
          comparison table
        </Link>
        , then use{" "}
        <a href="#by-scenario" className={linkGreen}>
          scenario-based picks
        </a>{" "}
        when you know your situation—or{" "}
        <a href="#payroll-guides" className={linkGreen}>
          guides
        </a>{" "}
        if you are still learning how to evaluate pricing and features. Our{" "}
        <Link href="/field-service/best-field-service-software" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/field-service/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out product research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Trade and team size</strong> — Solo contractors and small crews can
            often start with a lighter tool; growing HVAC, plumbing, and electrical companies may need advanced
            dispatch, multi-truck routing, and reporting.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — Make sure the schedule and dispatch
            board are easy to read and update. Drag-and-drop scheduling, recurring jobs, and route planning matter as
            your calendar fills up.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Mobile app experience</strong> — Techs should be able to see their day,
            get job details, add photos and notes, and mark work complete from their phone without calling the office.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Estimates, invoicing, and payments</strong> — Look for built-in
            estimates, invoices, and the ability to take card payments on-site or online. Integration with{" "}
            <Link href="/accounting" className={linkGreen}>
              accounting software
            </Link>{" "}
            keeps books up to date.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Customer and property history</strong> — A good FSM system stores
            equipment, service history, and notes by customer and property so any tech can show up prepared.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Pricing and add-ons</strong> — Plans often scale by users, jobs, or
            features like marketing and advanced reporting. Compare total cost at your current and expected crew size.
          </li>
        </ul>
      </div>
      <p className="mt-6 text-sm text-[#57534E] max-w-3xl leading-relaxed">
        <span className="font-semibold text-[#1A2D48]">Alternatives guides: </span>
        If you are evaluating a specific vendor, see substitutes and comparison links for{" "}
        {FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS.map((item, i) => (
          <span key={item.href}>
            {i > 0 && ", "}
            <Link href={item.href} className={linkGreen}>
              {item.label}
            </Link>
          </span>
        ))}
        .
      </p>
    </>
  );
}

function FieldServiceGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Field service guides"
      sectionSub="Learn how FSM pricing, features, and workflows work—before you shortlist vendors."
      intro={
        <>
          Educational articles: evaluation criteria, pricing, and concepts—not duplicate product roundups. For scenario picks, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best field service software by use case
          </a>
          ; for trade entry points, see{" "}
          <a href="#by-trade" className={linkGreen}>
            field service by business type
          </a>
          .
        </>
      }
      guides={FIELD_SERVICE_GUIDES}
      footer={
        <>
          <Link href="/field-service/guides" className={linkGreen}>
            Guides index
          </Link>
          {" · "}
          <Link href="/field-service/compare" className={linkGreen}>
            Comparisons
          </Link>
          {" · "}
          <span className="text-[#57534E]">Alternatives: </span>
          {FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS.map((item, i) => (
            <span key={item.href}>
              {i > 0 && " · "}
              <Link href={item.href} className={linkGreen}>
                {item.label}
              </Link>
            </span>
          ))}
        </>
      }
    />
  );
}

function FieldServicePopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">
        Popular Field Service Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FIELD_SERVICE_POPULAR_COMPARISONS.map((item) => {
          const title = `${item.productA.name} vs ${item.productB.name}`;
          const summary =
            item.summaryParagraph.length > 140
              ? item.summaryParagraph.slice(0, 140).trim() + "…"
              : item.summaryParagraph;
          return (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {item.productA.logoSrc && (
                  <img
                    src={item.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                  />
                )}
                <span className="text-[#57534E] text-lg font-medium" aria-hidden>vs</span>
                {item.productB.logoSrc && (
                  <img
                    src={item.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                  />
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                {title}
              </h3>
              <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link
          href="/field-service/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all field service comparisons →
        </Link>
      </p>
    </>
  );
}

export default function FieldServicePage() {
  return (
    <HubPageTemplate
      title="Field Service Management Software for Contractors (2026)"
      intro="Field service management (FSM) software helps contractors and service businesses schedule jobs, dispatch technicians, manage customers, and handle invoicing and payments. HVAC, plumbing, electrical, repair services, and other field teams use FSM tools to replace spreadsheets and paper with one system—so you can see who is going where, what jobs are due, and get paid faster."
      breadcrumbLabel="Field Service"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="field-service"
      featuredPicks={FIELD_SERVICE_FEATURED_PICKS}
      featuredPicksTitle="Top field service picks"
      featuredPicksSub="Hand-picked for contractors, service teams, and field businesses. Updated regularly."
      comparisonTable={{
        title: "Compare field service software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: FIELD_SERVICE_COMPARISON_ROWS,
        detailsLinkBase: "/field-service/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular field service management platforms."
      howToChooseSection={<FieldServiceHowToChooseSection />}
      guidesSection={<FieldServiceGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best field service software by use case"
          sectionSub="Scenario-based recommendations—team size, complexity, and budget—not your trade label."
          intro={
            <>
              Decision-oriented blurbs: who each situation fits and what to prioritize. For trade-specific picks (HVAC, plumbing, electrical), use{" "}
              <a href="#by-trade" className={linkGreen}>
                field service by business type
              </a>{" "}
              below. For how-to content, see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                field service guides
              </a>
              .
            </>
          }
          blocks={FIELD_SERVICE_USE_CASE_EDITORIAL}
        />
      }
      bestRoundupBlock={{
        title: "Best Field Service Software Overall",
        description:
          "See our curated rankings of the best field service management tools for contractors, plumbing, HVAC, electrical, and service companies.",
        linkText: "See full rankings →",
        href: "/field-service/best-field-service-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/field-service/best-field-service-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/field-service/best-field-service-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best field service software by use case",
        sectionSub: "Scenario-based recommendations.",
        description: undefined,
        links: [
          { label: "Best field service software (roundup)", href: "/field-service/best-field-service-software" },
          ...FIELD_SERVICE_SCENARIO_LINKS,
        ],
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Field service software by business type",
        sectionSub:
          "Identity-based navigation: your trade or company type—not team size or budget. Different trades have different workflows; these links point to picks aligned with how HVAC, plumbing, electrical, and similar businesses actually run.",
        links: [],
        groups: FIELD_SERVICE_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={FIELD_SERVICE_FAQ_ITEMS as FaqItem[]}
      faqTitle="Field service software FAQs"
      faqSub="Quick answers to common questions."
      methodology={FIELD_SERVICE_METHODOLOGY}
      finderSection={{
        title: "Find the right field service fit",
        sub: "Narrow down by team type and primary need.",
        content: <FieldServiceFinderForm />,
      }}
      educationSection={<FieldServiceEducationSection />}
      popularComparisonsSection={<FieldServicePopularComparisonsSection />}
    />
  );
}
