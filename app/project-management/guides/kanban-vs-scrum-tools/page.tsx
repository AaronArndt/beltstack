import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedProjectManagementResources } from "@/components/guides/RelatedProjectManagementResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getProjectManagementReviewUrl, getProjectManagementCompareUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "What is the difference between Kanban and Scrum in project management tools?",
    a: "Kanban is a continuous-flow approach: work moves through columns (e.g. To Do, In Progress, Done) without fixed timeboxes. Scrum uses time-boxed sprints (e.g. 2 weeks) with planning, daily standups, and a sprint review. Many tools support both: boards for Kanban and sprint/backlog views for Scrum.",
  },
  {
    q: "Which project management tools support Kanban?",
    a: "Most modern project management tools support Kanban-style boards: Trello, Asana, Monday, ClickUp, Notion, and Jira all offer board views where you move cards through columns. Trello is the most board-centric; others add list, timeline, and other views.",
  },
  {
    q: "Which project management tools support Scrum?",
    a: "Tools with sprint planning, backlogs, and sprint views support Scrum. Jira is the classic choice; ClickUp, Monday, and Asana offer sprint or milestone features. Trello can be used for Scrum with lists as backlog/sprint and a board, but it's not built-in. See our Kanban vs Scrum tools guide and ClickUp vs Trello comparison.",
  },
  {
    q: "Should I use Kanban or Scrum for my team?",
    a: "Use Kanban if work is continuous and you prefer flow over fixed iterations. Use Scrum if you want fixed sprints, regular planning, and clear sprint goals. Many teams use a hybrid (e.g. board with optional sprints). Choose a tool that supports your chosen style—compare in our project management comparisons.",
  },
  {
    q: "Is Trello Kanban or Scrum?",
    a: "Trello is built around Kanban-style boards: columns and cards. You can run Scrum in Trello by using lists as backlog and sprints, but there's no native sprint planning or burndown. For Scrum-first workflows, ClickUp or Jira may fit better. See our Trello review and ClickUp vs Trello comparison.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Trello", logoSrc: "/Logos/trello.png", rating: 4.3, bestFor: "Kanban boards", reviewHref: getProjectManagementReviewUrl("trello") },
  { name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: 4.5, bestFor: "Kanban + sprints", reviewHref: getProjectManagementReviewUrl("clickup") },
  { name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: 4.6, bestFor: "List + board + timeline", reviewHref: getProjectManagementReviewUrl("asana") },
];

const RELATED_ITEMS = [
  { label: "Project Management Software Hub", href: "/project-management" },
  { label: "Best Project Management Software", href: "/project-management/best-project-management-software" },
  { label: "Compare Project Management Software", href: "/project-management/compare" },
  { label: "Project Management Guides", href: "/project-management/guides" },
  { label: "Trello Review", href: getProjectManagementReviewUrl("trello") },
  { label: "ClickUp Review", href: getProjectManagementReviewUrl("clickup") },
  { label: "Notion Review", href: getProjectManagementReviewUrl("notion") },
  { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
  { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
  { label: "How to Choose Project Management Software", href: "/project-management/guides/how-to-choose-project-management-software" },
  { label: "Project Management for Remote Teams", href: "/project-management/guides/project-management-for-remote-teams" },
];

export default function KanbanVsScrumToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/project-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Project Management</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/project-management/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Kanban vs Scrum Tools</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Kanban vs Scrum Tools</h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    When to use Kanban-style boards vs Scrum-style sprints, and which project management tools support each approach.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Teams often choose between Kanban (continuous flow on a board) and Scrum (time-boxed sprints with planning and reviews). The right approach depends on how you work; the right tool depends on whether you need strong board support, sprint support, or both. This guide explains the difference and which project management tools fit each style.
                    </p>
                    <p>
                      <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> is the classic Kanban-style tool; <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, and <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> offer boards and often list or timeline views too. Some add sprint or milestone features for Scrum-like workflows. Explore our <Link href="/project-management" className={linkGreen}>project management hub</Link>, <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link>, and <Link href="/project-management/compare" className={linkGreen}>comparisons</Link> such as <Link href={getProjectManagementCompareUrl("clickup-vs-trello")} className={linkGreen}>ClickUp vs Trello</Link> and <Link href={getProjectManagementCompareUrl("notion-vs-trello")} className={linkGreen}>Notion vs Trello</Link> to compare.
                    </p>
                  </div>
                </section>
                <section id="kanban-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Continuous flow and boards.">What Is Kanban?</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Kanban is a visual workflow method: work items move through columns (e.g. To Do, In Progress, Done). There are no fixed timeboxes—work flows continuously. Limits on how many items can be in a column (work-in-progress limits) help prevent overload. Kanban suits teams whose work arrives continuously or who prefer flexibility over fixed sprint cycles.</p>
                    <p><strong className="text-[#1A2D48]">In software:</strong> A Kanban board has columns and cards. You create cards for tasks, move them through columns as work progresses, and optionally set WIP limits. <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> is the most board-focused; <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, and <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> offer board views alongside list and other views.</p>
                  </div>
                </section>
                <section id="scrum-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Sprints and iterations.">What Is Scrum?</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Scrum is an iterative framework: work is done in fixed-length sprints (e.g. 2 weeks). Each sprint has planning (what goes in), daily standups, and a sprint review/retrospective. A backlog holds work that isn't in the current sprint. Scrum suits teams that want regular planning cycles and clear sprint goals.</p>
                    <p><strong className="text-[#1A2D48]">In software:</strong> Tools that support Scrum typically offer a backlog, sprint planning (assign tasks to a sprint), and sprint views or burndown. Jira is the classic Scrum tool; <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> has sprint features; <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link> and <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> offer milestones or similar. <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> can be used for Scrum by treating lists as backlog/sprint, but it doesn't have native sprint planning.</p>
                  </div>
                </section>
                <section id="kanban-vs-scrum" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choosing an approach.">Kanban vs Scrum: When to Use Which</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Choose Kanban</strong> when work is continuous, priorities change often, or you prefer not to commit to fixed sprint scope. Good for support queues, marketing workflows, and teams that like a simple board. Tools like <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> and board views in <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> or <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> fit well.</p>
                    <p><strong className="text-[#1A2D48]">Choose Scrum</strong> when you want fixed iterations, sprint planning, and clear end-of-sprint deliverables. Good for product and dev teams that plan in cycles. Choose a tool with backlog and sprint support—<Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, or Jira.</p>
                    <p><strong className="text-[#1A2D48]">Hybrid</strong> — Many teams use a board (Kanban-style) but also group work into milestones or sprints. Tools like Asana and ClickUp support both: board view for flow, plus milestones or sprints for planning. Compare in our <Link href={getProjectManagementCompareUrl("clickup-vs-trello")} className={linkGreen}>ClickUp vs Trello</Link> and <Link href={getProjectManagementCompareUrl("notion-vs-trello")} className={linkGreen}>Notion vs Trello</Link> pages.</p>
                  </div>
                </section>
                <section id="tools-for-kanban" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Best tools for board-based work.">Tools That Excel at Kanban</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> is built around boards and cards—simple and visual. It's the lightest option if you only want Kanban. <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, and <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> offer strong board views plus list, timeline, and other views—better if you want one tool for multiple ways of viewing work. <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> offers board databases that work like Kanban. See our <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link> roundup and <Link href={getProjectManagementCompareUrl("notion-vs-trello")} className={linkGreen}>Notion vs Trello</Link> for comparison.</p>
                  </div>
                </section>
                <section id="tools-for-scrum" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Best tools for sprint-based work.">Tools That Support Scrum</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Jira is the standard for Scrum (backlog, sprints, burndown). For all-in-one tools that also support Scrum-like workflows, <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> has sprint views and backlog; <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link> has milestones and timeline that can approximate sprints; <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> has milestones and timeline. <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> can be used for Scrum with lists as backlog and sprint, but you don't get native sprint planning or burndown. If Scrum is central to your process, compare <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> and Trello in our <Link href={getProjectManagementCompareUrl("clickup-vs-trello")} className={linkGreen}>ClickUp vs Trello</Link> guide.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Kanban & Scrum tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedProjectManagementResources items={RELATED_ITEMS} excludeHref="/project-management/guides/kanban-vs-scrum-tools" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Kanban vs Scrum Tools | BeltStack Guide",
    description: "When to use Kanban-style boards vs Scrum-style sprints, and which project management tools support each approach.",
  };
}
