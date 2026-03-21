"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import {
  PROJECT_MANAGEMENT_FEATURED_PICKS,
  PROJECT_MANAGEMENT_COMPARISON_ROWS,
  PROJECT_MANAGEMENT_SCENARIO_LINKS,
  PROJECT_MANAGEMENT_BY_BUSINESS_TYPE,
  PROJECT_MANAGEMENT_BY_BUSINESS_TYPE_GROUPS,
  PROJECT_MANAGEMENT_POPULAR_COMPARISONS,
  PROJECT_MANAGEMENT_FAQ_ITEMS,
  PROJECT_MANAGEMENT_METHODOLOGY,
} from "@/lib/data/projectManagementHubData";
import { PROJECT_MANAGEMENT_GUIDES } from "@/lib/data/projectManagementGuides";
// ——— Key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall for most teams: Asana", anchor: "#pick-asana" },
  { label: "Best for customization: ClickUp", anchor: "#pick-clickup" },
  { label: "Best visual workflows: Monday", anchor: "#pick-monday" },
  { label: "Best lightweight boards: Trello & Notion", anchor: "#pick-trello" },
];

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

function ProjectManagementFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="pm-team-type" className="block text-sm font-semibold text-[#1A2D48]">
          Team type
        </label>
        <select id="pm-team-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="freelancers">Freelancers</option>
          <option value="small-business">Small business</option>
          <option value="agencies">Agencies</option>
          <option value="startups">Startups</option>
          <option value="remote-teams">Remote teams</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="pm-work-type" className="block text-sm font-semibold text-[#1A2D48]">
          Primary work type
        </label>
        <select id="pm-work-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="client-projects">Client projects</option>
          <option value="internal-projects">Internal projects</option>
          <option value="product">Product & engineering</option>
          <option value="content">Content & marketing</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

function ProjectManagementEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in project management software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          What matters when businesses choose tools to keep projects, tasks, and collaboration on track.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#6E6E6E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Ease of use</h3>
            <p className="mt-1.5">
              Your team will live in this tool every day. Look for a clean interface, simple task entry, and views that
              make it obvious what is due this week. If adoption feels hard in a trial, it will be harder after rollout.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Collaboration</h3>
            <p className="mt-1.5">
              Comments, file attachments, and notifications keep work out of scattered email threads. Make sure people
              can see context quickly—who owns a task, what was decided, and what is blocked.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Task and project views</h3>
            <p className="mt-1.5">
              Most teams need more than one view: a Kanban board for flow, a list for bulk edits, and a timeline or
              calendar for deadlines. Choose a tool that supports the views your team actually uses instead of forcing
              everyone into one layout.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Automation</h3>
            <p className="mt-1.5">
              Rules that move tasks, assign owners, or update fields can remove a lot of manual admin. Check how many
              automations are included on each plan and whether common workflows—like moving tasks when statuses change
              or nudging overdue work—are easy to set up.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Reporting and integrations</h3>
            <p className="mt-1.5">
              Small businesses usually need simple reporting on workload, due dates, and project status. Integrations
              with tools like{" "}
              <Link href="/time-tracking" className={linkGreen}>
                time tracking
              </Link>{" "}
              or{" "}
              <Link href="/crm" className={linkGreen}>
                CRM
              </Link>{" "}
              help you avoid re-entering data and keep clients, hours, and projects in sync.
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
                Tasks, projects, and due dates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Multiple views (board, list, timeline)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Comments, files, and notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Basic automations and templates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Reporting on workload and project status
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Integrations with your existing stack
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectManagementPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side features, pricing, and recommendations.">
        Popular Project Management Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT_MANAGEMENT_POPULAR_COMPARISONS.map((item) => {
          const title = `${item.productA.name} vs ${item.productB.name}`;
          const summary =
            item.summaryParagraph.length > 140
              ? item.summaryParagraph.slice(0, 140).trim() + "…"
              : item.summaryParagraph;
          return (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {item.productA.logoSrc && (
                  <img
                    src={item.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                  />
                )}
                <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>
                  vs
                </span>
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
          href="/project-management/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all project management comparisons →
        </Link>
      </p>
    </>
  );
}

function ProjectManagementHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating project management tools">
        How to Choose Project Management Software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Project management software helps you keep projects, tasks, and deadlines organized so work actually ships on
        time. This page is for{" "}
        <Link href="/project-management/best-for/freelancers" className={linkGreen}>
          freelancers
        </Link>
        ,{" "}
        <Link href="/project-management/best-for/small-business" className={linkGreen}>
          small businesses
        </Link>
        ,{" "}
        <Link href="/project-management/best-for/agencies" className={linkGreen}>
          agencies
        </Link>
        ,{" "}
        <Link href="/project-management/best-for/startups" className={linkGreen}>
          startups
        </Link>{" "}
        and{" "}
        <Link href="/project-management/best-for/remote-teams" className={linkGreen}>
          remote teams
        </Link>
        . Use the{" "}
        <Link href="/project-management/best-project-management-software" className={linkGreen}>
          best project management software roundup
        </Link>{" "}
        for a curated shortlist, the{" "}
        <Link href="/project-management/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        for head-to-head matchups, and the scenario links below to jump into specific use cases.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Team type and work style</strong> — Freelancers and tiny teams can often
            work from a simple board; agencies and product teams usually need multiple projects, assignees, and
            timelines. Match the tool to how many people touch a project and how structured you want work to be.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Views</strong> — Make sure you get the views your team actually uses:
            Kanban boards, lists, calendars, or timelines. Some tools lock certain views to higher tiers.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Collaboration</strong> — Comments, mentions, file attachments, and
            notifications should feel easy—otherwise work will drift back into email and chat.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Automation and templates</strong> — Look for simple rules that move
            tasks, assign owners, or create checklists for repeatable projects. This is often where tools start to feel
            very different in practice.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Integrations</strong> — Check how well the tool connects to{" "}
            <Link href="/time-tracking" className={linkGreen}>
              time tracking
            </Link>
            ,{" "}
            <Link href="/invoicing" className={linkGreen}>
              invoicing
            </Link>
            ,{" "}
            <Link href="/accounting" className={linkGreen}>
              accounting
            </Link>{" "}
            and{" "}
            <Link href="/crm" className={linkGreen}>
              CRM
            </Link>{" "}
            if you use them. The more work that flows automatically, the less you retype.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Pricing and limits</strong> — Free tiers may cap projects, automations,
            or collaborators. Compare total cost at your expected team size and project load, not just the headline
            price.
          </li>
        </ul>
      </div>
    </>
  );
}

function ProjectManagementGuidesSection() {
  return (
    <>
      <HubSectionTitle sub="Guides to choosing and using project management tools.">
        Project Management Guides
      </HubSectionTitle>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT_MANAGEMENT_GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <h3 className="text-[#1A2D48] text-lg font-bold group-hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed line-clamp-2">
              {guide.description}
            </p>
            <span className="mt-3 text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
          </Link>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link
          href="/project-management/guides"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all project management guides →
        </Link>
      </p>
    </>
  );
}

export default function ProjectManagementPage() {
  return (
    <HubPageTemplate
      title="Project Management Software for Small Businesses (2026)"
      intro="Compare project management tools that help small businesses, agencies, and remote teams plan work, track tasks, and collaborate."
      breadcrumbLabel="Project Management"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="project-management"
      featuredPicks={PROJECT_MANAGEMENT_FEATURED_PICKS}
      featuredPicksTitle="Top project management picks"
      featuredPicksSub="Hand-picked for small teams, agencies, and remote work. Updated regularly."
      comparisonTable={{
        title: "Compare project management software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: PROJECT_MANAGEMENT_COMPARISON_ROWS,
        detailsLinkBase: "/project-management/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular project management platforms."
      howToChooseSection={<ProjectManagementHowToChooseSection />}
      guidesSection={<ProjectManagementGuidesSection />}
      bestRoundupBlock={{
        title: "Best Project Management Software Overall",
        description:
          "See our curated rankings of the best project management tools for small businesses, agencies, and remote teams.",
        linkText: "See full rankings →",
        href: "/project-management/best-project-management-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/project-management/best-project-management-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/project-management/best-project-management-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best project management software by use case",
        sectionSub: "Find project management tools that fit your situation.",
        description: "Choose a use case to see our top picks and guidance.",
        links: [
          { label: "Best project management software (roundup)", href: "/project-management/best-project-management-software" },
          { label: "Compare project management software", href: "/project-management/compare" },
          ...PROJECT_MANAGEMENT_SCENARIO_LINKS,
        ],
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Project management by business type",
        sectionSub: "Best project management software by business type.",
        links: PROJECT_MANAGEMENT_BY_BUSINESS_TYPE,
        groups: PROJECT_MANAGEMENT_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={PROJECT_MANAGEMENT_FAQ_ITEMS as FaqItem[]}
      faqTitle="Project management software FAQs"
      faqSub="Quick answers to common questions."
      methodology={PROJECT_MANAGEMENT_METHODOLOGY}
      finderSection={{
        title: "Find the right project management fit",
        sub: "Narrow down by team type and primary work.",
        content: <ProjectManagementFinderForm />,
      }}
      educationSection={<ProjectManagementEducationSection />}
      popularComparisonsSection={<ProjectManagementPopularComparisonsSection />}
    />
  );
}
