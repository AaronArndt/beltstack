"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  CRM_FEATURED_PICKS,
  CRM_COMPARISON_TABLE_ROWS,
  CRM_POPULAR_COMPARISONS,
  CRM_SCENARIO_LINKS,
  CRM_BY_BUSINESS_TYPE_GROUPS,
  CRM_FAQ_ITEMS,
  CRM_METHODOLOGY,
  CRM_HUB_GUIDES,
  CRM_USE_CASE_EDITORIAL,
} from "@/lib/data/crmHubData";
import { getCrmReviewUrl } from "@/lib/routes";

// ——— Key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall for most teams: HubSpot", anchor: "#pick-hubspot" },
  { label: "Best for scale and customization: Salesforce", anchor: "#pick-salesforce" },
  { label: "Best value and free tier: Zoho CRM", anchor: "#pick-zoho-crm" },
  { label: "Best for sales pipeline: Pipedrive", anchor: "#pick-pipedrive" },
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

function CrmHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating CRM tools">
        How to Choose CRM Software
      </HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        CRM software helps you manage contacts, deals, and pipelines. Use the{" "}
        <Link href="#compare" className={linkGreen}>
          comparison table
        </Link>
        , then{" "}
        <a href="#by-scenario" className={linkGreen}>
          scenario-based picks
        </a>{" "}
        when you know your sales motion—or{" "}
        <a href="#payroll-guides" className={linkGreen}>
          guides
        </a>{" "}
        to learn evaluation criteria first. Our{" "}
        <Link href="/crm/best-crm-software" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/crm/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out product research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li><strong className="text-[#1A2D48]">Ease of use</strong> — Your team will use the CRM daily. Look for a clear pipeline and simple contact and deal entry. Free trials help you judge fit.</li>
          <li><strong className="text-[#1A2D48]">Pipeline and stages</strong> — Deal stages and activity tracking should match how you sell. See our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide.</li>
          <li><strong className="text-[#1A2D48]">Integrations</strong> — CRM often sits alongside email, calendar, and marketing tools. Check that your CRM integrates with the apps you already use.</li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li><strong className="text-[#1A2D48]">Automation</strong> — Workflow automation can move deals, send reminders, and assign tasks. Compare how much is included at each price tier. <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>What is CRM software</Link>.</li>
          <li><strong className="text-[#1A2D48]">Pricing</strong> — Many CRMs offer a free tier; paid plans scale by user or feature. Compare total cost at your team size.</li>
          <li><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline value, conversion by stage, and activity reports matter; <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> covers fit by size.</li>
        </ul>
      </div>
    </>
  );
}

function CrmGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="CRM guides"
      sectionSub="Learn how to evaluate CRM pricing, features, and stack fit—not another product list."
      intro={
        <>
          Educational articles for top-of-funnel research. For picks by sales situation, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best CRM software by use case
          </a>
          ; for how you describe your team, see{" "}
          <a href="#by-trade" className={linkGreen}>
            CRM by team type
          </a>
          .
        </>
      }
      guides={CRM_HUB_GUIDES}
      footer={
        <>
          Reviews:{" "}
          <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>
            HubSpot
          </Link>
          ,{" "}
          <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>
            Salesforce
          </Link>
          ,{" "}
          <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>
            Zoho CRM
          </Link>
          ,{" "}
          <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>
            Pipedrive
          </Link>
          ,{" "}
          <Link href={getCrmReviewUrl("monday-crm")} className={linkGreen}>
            Monday CRM
          </Link>
          .{" "}
          <Link href="/crm/guides" className={linkGreen}>
            All CRM guides →
          </Link>
        </>
      }
    />
  );
}

function CrmPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">
        Popular CRM Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CRM_POPULAR_COMPARISONS.map((item) => (
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
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}
              <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                vs
              </span>
              {item.productB.logoSrc && (
                <img
                  src={item.productB.logoSrc}
                  alt=""
                  className="h-10 w-auto max-w-[80px] object-contain object-left"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              )}
            </div>
            <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
              {item.productA.name} vs {item.productB.name}
            </h3>
            <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
              {item.summaryParagraph}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
              Compare →
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link
          href="/crm/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all CRM comparisons →
        </Link>
      </p>
    </>
  );
}

function CrmFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="crm-business-type" className="block text-sm font-semibold text-[#1A2D48]">
          Business type
        </label>
        <select id="crm-business-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="freelancers">Freelancers</option>
          <option value="small-business">Small business</option>
          <option value="sales-teams">Sales teams</option>
          <option value="startups">Startups</option>
          <option value="agencies">Agencies</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function CrmEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in CRM software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">
          What matters when businesses choose CRM tools for sales, marketing, and customer management.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#57534E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Ease of use</h3>
            <p className="mt-1.5">
              Your team will use the CRM daily. Look for a clear pipeline, simple contact and deal entry, and minimal training time. Free trials help you judge whether your sales process fits the tool.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Sales pipeline features</h3>
            <p className="mt-1.5">
              Stages, deal values, and activity tracking should match how you sell. Some CRMs are built for strict pipeline stages; others are more flexible. Choose one that supports your stages and reporting needs.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Automation</h3>
            <p className="mt-1.5">
              Workflow automation can move deals, send reminders, and assign tasks. Compare how much automation is included at each price tier and whether it fits your volume.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations</h3>
            <p className="mt-1.5">
              CRM often sits alongside email, calendar, accounting, and marketing tools. Check that your CRM integrates with the apps you already use so data stays in sync.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Reporting</h3>
            <p className="mt-1.5">
              Pipeline value, conversion by stage, and activity reports help you manage sales. Ensure the CRM offers the reports and dashboards you need without expensive add-ons.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Contact and lead management
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Deal pipeline and stages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Email and activity tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Basic reporting and dashboards
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Integrations with your stack
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CrmPage() {
  return (
    <HubPageTemplate
      title="CRM Software for Small Businesses (2026)"
      intro="Compare CRM tools for small businesses, sales teams, startups, and agencies. Find the right platform for leads, pipelines, and customer relationships."
      breadcrumbLabel="CRM"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="crm"
      featuredPicks={CRM_FEATURED_PICKS}
      featuredPicksTitle="Top CRM picks"
      featuredPicksSub="Hand-picked for small businesses and sales teams. Updated regularly."
      comparisonTable={{
        title: "Compare CRM software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: CRM_COMPARISON_TABLE_ROWS,
        detailsLinkBase: "/crm/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular CRM platforms."
      howToChooseSection={<CrmHowToChooseSection />}
      guidesSection={<CrmGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best CRM software by use case"
          sectionSub="Scenario-based picks—pipeline style, growth stage, and stack—not only org label."
          intro={
            <>
              Who each scenario fits and what to prioritize. For team-identity entry points (freelancer vs agency vs sales org), use{" "}
              <a href="#by-trade" className={linkGreen}>
                CRM by team type
              </a>{" "}
              below. For concepts and definitions, see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                CRM guides
              </a>
              .
            </>
          }
          blocks={CRM_USE_CASE_EDITORIAL}
        />
      }
      bestRoundupBlock={{
        title: "Best CRM Software Overall",
        description:
          "View our full rankings of the best CRM software for small businesses, sales teams, and startups.",
        linkText: "See full rankings →",
        href: "/crm/best-crm-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/crm/best-crm-software" }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/crm/best-crm-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best CRM software by use case",
        sectionSub: "Scenario-based recommendations.",
        description: undefined,
        links: CRM_SCENARIO_LINKS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "CRM software by team type",
        sectionSub:
          "Identity-based navigation: how you describe your org (freelancer, startup, agency, sales team)—not the same lens as pipeline scenarios above.",
        links: [],
        groups: CRM_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={CRM_FAQ_ITEMS as FaqItem[]}
      faqTitle="CRM software FAQs"
      faqSub="Quick answers to common questions."
      methodology={CRM_METHODOLOGY}
      finderSection={{
        title: "Find the right CRM fit",
        sub: "Narrow down by business type.",
        content: <CrmFinderForm />,
      }}
      educationSection={<CrmEducationSection />}
      popularComparisonsSection={<CrmPopularComparisonsSection />}
    />
  );
}
