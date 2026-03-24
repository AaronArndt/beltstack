"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import { getHrReviewUrl } from "@/lib/routes";
import {
  HR_FEATURED_PICKS,
  HR_COMPARISON_ROWS,
  HR_SCENARIO_LINKS,
  HR_BY_BUSINESS_TYPE_GROUPS,
  HR_POPULAR_COMPARISONS,
  HR_FAQ_ITEMS,
  HR_METHODOLOGY,
  HR_HUB_GUIDES,
  HR_USE_CASE_EDITORIAL,
} from "@/lib/data/hrHubData";

const KEY_TAKEAWAYS = [
  { label: "Best overall for SMBs: Gusto", anchor: "#pick-gusto" },
  { label: "Best HR management: BambooHR", anchor: "#pick-bamboohr" },
  { label: "Best HR + IT: Rippling", anchor: "#pick-rippling" },
  { label: "Best for global: Deel", anchor: "#pick-deel" },
  { label: "Best PEO: Justworks", anchor: "#pick-justworks" },
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

function HrHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating HR tools">
        How to Choose HR Software
      </HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        HR software centralizes employee data, hiring, onboarding, payroll, benefits, and compliance so you can manage people operations in one place. Use our{" "}
        <Link href="/hr/best-hr-software" className={linkGreen}>
          best HR software
        </Link>{" "}
        roundup for a curated shortlist, the{" "}
        <Link href="/hr/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        for head-to-head matchups, and the scenario links below to narrow by company size and need.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Company size</strong> — Freelancers and solos need lightweight tools; small and growing businesses need payroll and benefits; larger teams may consider PEOs or enterprise HRIS.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Payroll and benefits</strong> — Many HR platforms bundle payroll and benefits administration. Decide if you want all-in-one (e.g. Gusto, Rippling) or HRIS plus separate payroll.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Hiring and onboarding</strong> — Look for applicant tracking, offer management, and onboarding workflows if you hire frequently.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Global teams</strong> — If you hire or pay people in multiple countries, consider global payroll and EOR solutions like Deel or Rippling.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Compliance and PEO</strong> — Compliance support and PEO options (e.g. Justworks, TriNet) can reduce risk and give access to better benefits for small teams.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Integrations</strong> — HR tools often integrate with{" "}
            <Link href="/accounting" className={linkGreen}>accounting</Link>,{" "}
            <Link href="/payroll" className={linkGreen}>payroll</Link>, and time tracking; check that your stack connects.
          </li>
        </ul>
      </div>
    </>
  );
}

function HrGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="HR guides"
      sectionSub="Learn how payroll, HRIS, PEO, and global hiring models work—before you shortlist vendors."
      intro={
        <>
          Educational articles on evaluation and tradeoffs—not duplicate “best for” picks. For scenario blurbs, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best HR software by use case
          </a>
          ; for company-type entry points, see{" "}
          <a href="#by-trade" className={linkGreen}>
            HR by business type
          </a>
          .
        </>
      }
      guides={HR_HUB_GUIDES.map((g) => ({ title: g.title, href: g.href, description: g.description, slug: g.slug }))}
      footer={
        <>
          Read our full reviews:{" "}
          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
            Gusto
          </Link>
          ,{" "}
          <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
            BambooHR
          </Link>
          ,{" "}
          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
            Rippling
          </Link>
          ,{" "}
          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
            Deel
          </Link>
          .{" "}
          <Link href="/hr/compare" className={linkGreen}>
            HR comparisons →
          </Link>
        </>
      }
    />
  );
}

function HrFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="hr-company-size" className="block text-sm font-semibold text-[#1A2D48]">
          Company size
        </label>
        <select id="hr-company-size" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="freelancers">Freelancers</option>
          <option value="small-business">Small business</option>
          <option value="growing">Growing companies</option>
          <option value="agencies">Agencies</option>
          <option value="global">Global teams</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="hr-primary-need" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="hr-primary-need" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="hr-management">HR management</option>
          <option value="payroll-hr">Payroll + HR</option>
          <option value="hiring-onboarding">Hiring and onboarding</option>
          <option value="global-employment">Global employment</option>
          <option value="peo">PEO services</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

function HrEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in HR software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">
          What matters when small businesses, startups, and growing teams choose tools to manage people operations, payroll, and compliance.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#57534E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Ease of use</h3>
            <p className="mt-1.5">
              HR software should be straightforward for admins and employees: easy setup, clear workflows for onboarding and time off, and self-service where appropriate. Look for a clean interface and good support or help resources.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Employee onboarding</h3>
            <p className="mt-1.5">
              New-hire onboarding should guide employees through paperwork, documents, and role setup. Strong tools offer checklists, e-signatures, and automatic provisioning so new hires are ready on day one.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Payroll and benefits integration</h3>
            <p className="mt-1.5">
              When HR and payroll live in one system, employee data stays in sync and you avoid double entry. Benefits administration (health, 401k, etc.) should integrate so enrollment and deductions flow correctly.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Compliance support</h3>
            <p className="mt-1.5">
              HR software should help with compliance: tax withholdings, new-hire reporting, and staying current with labor laws. PEOs and full-service platforms often bundle compliance support and updates.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Automation and integrations</h3>
            <p className="mt-1.5">
              Look for automation of repetitive tasks (approvals, reminders, reporting) and integrations with accounting, time tracking, and other tools so your HR data stays connected across the business.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Employee database & org chart
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Hiring & onboarding workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Payroll & tax (or integration)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Benefits administration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Time off & PTO tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Compliance & reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function HrPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">
        Popular HR Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HR_POPULAR_COMPARISONS.map((item) => {
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
          href="/hr/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all HR comparisons →
        </Link>
      </p>
    </>
  );
}

export default function HrPage() {
  return (
    <HubPageTemplate
      title="HR Software for Small Businesses (2026)"
      intro="HR software helps businesses manage people operations in one place: employee data, hiring and onboarding, payroll, benefits, time off, and compliance. Small businesses, startups, and growing teams use it to streamline admin, stay compliant, and scale hiring without outgrowing their tools."
      breadcrumbLabel="HR"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="hr"
      featuredPicks={HR_FEATURED_PICKS}
      featuredPicksTitle="Top HR picks"
      featuredPicksSub="Hand-picked for small businesses, startups, and growing teams. Updated regularly."
      comparisonTable={{
        title: "Compare HR software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: HR_COMPARISON_ROWS,
        detailsLinkBase: "/hr/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular HR platforms."
      howToChooseSection={<HrHowToChooseSection />}
      guidesSection={<HrGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best HR software by use case"
          sectionSub="Scenario-based picks—payroll, hiring, global footprint—not your company label alone."
          intro={
            <>
              Each blurb explains the workforce problem first. For identity-style entry points (agency vs startup), use{" "}
              <a href="#by-trade" className={linkGreen}>
                HR by business type
              </a>
              ; for concepts, see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                HR guides
              </a>
              .
            </>
          }
          blocks={HR_USE_CASE_EDITORIAL}
        />
      }
      bestRoundupBlock={{
        title: "Best HR Software Overall",
        description:
          "See our curated rankings of the best HR tools for small businesses, startups, and growing companies.",
        linkText: "See full rankings →",
        href: "/hr/best-hr-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/hr/best-hr-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/hr/best-hr-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best HR software by use case",
        sectionSub: "Scenario links and deep dives.",
        description: undefined,
        links: [...HR_SCENARIO_LINKS],
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "HR by business type",
        sectionSub:
          "Identity-based navigation: how you describe your company (SMB, startup, global)—not workforce mechanics alone.",
        links: [],
        groups: HR_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={HR_FAQ_ITEMS as FaqItem[]}
      faqTitle="HR software FAQs"
      faqSub="Quick answers to common questions."
      methodology={HR_METHODOLOGY}
      finderSection={{
        title: "Find the right HR fit",
        sub: "Narrow down by company size and primary need.",
        content: <HrFinderForm />,
      }}
      educationSection={<HrEducationSection />}
      popularComparisonsSection={<HrPopularComparisonsSection />}
    />
  );
}
