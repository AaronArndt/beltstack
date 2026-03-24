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
    q: "What project management software do agencies use?",
    a: "Agencies often use tools that support multiple clients, projects, and team members in one place. Teamwork, Monday, Asana, ClickUp, and Wrike are popular. Teamwork is built for client work with time tracking and billing; Monday and Asana offer strong customization. See our best project management software and Teamwork review for details.",
  },
  {
    q: "How do agencies manage multiple client projects?",
    a: "Use a project management tool that lets you separate work by client (workspaces, folders, or tags), assign tasks across projects, and see capacity and deadlines. Timeline views help with dependencies; time tracking helps with billing. Tools like Teamwork and Monday support this workflow well.",
  },
  {
    q: "What features do agencies need in project management software?",
    a: "Key features: multiple projects and clients, task assignment and due dates, timeline or Gantt for dependencies, time tracking (for billing or capacity), file sharing and comments, and reporting on progress and utilization. Optional: client portals, templates, and integrations with invoicing or CRM.",
  },
  {
    q: "Is there project management software built for agencies?",
    a: "Teamwork is built for agencies and client work, with time tracking, billing, and client-facing features. Monday, Asana, and ClickUp are general-purpose but widely used by agencies because they support multiple projects and customizable workflows. Compare in our project management comparisons and Teamwork review.",
  },
  {
    q: "How much does project management software cost for an agency?",
    a: "Cost depends on team size and features. Many tools charge per user per month ($8–20+). Teamwork starts around $5.99/user; Monday and Asana have similar ranges. Time tracking and advanced reporting may be on higher tiers. See our project management pricing guide and individual reviews for current pricing.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Teamwork", logoSrc: "/Logos/teamwork.png", rating: 4.2, bestFor: "Client projects & agencies", reviewHref: getProjectManagementReviewUrl("teamwork") },
  { name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: 4.4, bestFor: "Customizable workflows", reviewHref: getProjectManagementReviewUrl("monday") },
  { name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: 4.6, bestFor: "Structure + collaboration", reviewHref: getProjectManagementReviewUrl("asana") },
];

const RELATED_ITEMS = [
  { label: "Project Management Software Hub", href: "/project-management" },
  { label: "Best Project Management Software", href: "/project-management/best-project-management-software" },
  { label: "Compare Project Management Software", href: "/project-management/compare" },
  { label: "Project Management Guides", href: "/project-management/guides" },
  { label: "Teamwork Review", href: getProjectManagementReviewUrl("teamwork") },
  { label: "Monday Review", href: getProjectManagementReviewUrl("monday") },
  { label: "Asana Review", href: getProjectManagementReviewUrl("asana") },
  { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
  { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
  { label: "Project Management for Remote Teams", href: "/project-management/guides/project-management-for-remote-teams" },
  { label: "Project Management Pricing Guide", href: "/project-management/guides/project-management-pricing-guide" },
];

export default function ProjectManagementForAgenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/project-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Project Management</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/project-management/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Project Management for Agencies</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Project Management for Agencies</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How agencies use project management software to manage multiple clients, deliverables, and team collaboration in one place.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Agencies run multiple client projects at once: campaigns, deliverables, and deadlines that need to stay visible to the team and, often, to clients. Project management software built for agencies—or flexible enough to support them—lets you organize work by client, assign tasks, track time, and see capacity and progress without switching between spreadsheets and email.
                    </p>
                    <p>
                      The right tool depends on how many clients and projects you run, whether you need time tracking for billing, and how much structure you want. <Link href={getProjectManagementReviewUrl("teamwork")} className={linkGreen}>Teamwork</Link> is built for agencies with client workspaces, time tracking, and billing; <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link> and <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> are widely used for their customizable workflows and multiple views. Explore our <Link href="/project-management" className={linkGreen}>project management hub</Link>, <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link>, and <Link href="/project-management/compare" className={linkGreen}>comparisons</Link> such as <Link href={getProjectManagementCompareUrl("asana-vs-monday")} className={linkGreen}>Asana vs Monday</Link> and <Link href={getProjectManagementCompareUrl("monday-vs-wrike")} className={linkGreen}>Monday vs Wrike</Link> to compare fit.
                    </p>
                  </div>
                </section>
                <section id="why-agencies-use-pm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Centralizing client work and capacity.">Why Agencies Use Project Management Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Agencies use project management software to keep client work, deadlines, and team capacity in one place. Benefits include:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Multiple clients and projects</strong> — Separate workspaces, folders, or tags so each client's work is clear. Avoid mixing deliverables and missing deadlines.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Task assignment and visibility</strong> — Assign work to team members, set due dates, and see who is doing what across projects. Managers can balance workload and spot bottlenecks.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Time tracking</strong> — Log time per project or task for billing or capacity planning. <Link href={getProjectManagementReviewUrl("teamwork")} className={linkGreen}>Teamwork</Link> includes this; others integrate with time-tracking tools.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Timeline and dependencies</strong> — See how projects and phases line up, especially when deliverables depend on each other or on client feedback.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Progress, utilization, and project health so you can report to clients and manage capacity.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="key-features-for-agencies" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for.">Key Features for Agencies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When evaluating project management software for agency use, prioritize:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Client separation</strong> — Ability to organize work by client (projects, folders, or tags) so teams and clients see only what's relevant. <Link href={getProjectManagementReviewUrl("teamwork")} className={linkGreen}>Teamwork</Link> is built for this; <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link> and <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> support it via workspaces or custom fields.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Task and project views</strong> — List, board, and timeline so you can plan and track deliverables. Timeline or Gantt is especially useful for multi-phase projects.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Time tracking</strong> — Native time tracking (e.g. Teamwork) or integrations so you can log time per project for billing or capacity.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Collaboration</strong> — Comments, file attachments, and @mentions so work and feedback stay in context. Optional: client portals for review and approval.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Templates</strong> — Reusable project or task templates so you can spin up new client work quickly.</span></li>
                    </ul>
                    <p>Our <Link href="/project-management/guides/how-to-choose-project-management-software" className={linkGreen}>how to choose project management software</Link> guide covers general selection criteria; our <Link href="/project-management/guides/project-management-pricing-guide" className={linkGreen}>pricing guide</Link> helps you model cost at agency scale.</p>
                  </div>
                </section>
                <section id="tool-recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools that fit agency workflows.">Project Management Software Recommendations for Agencies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getProjectManagementReviewUrl("teamwork")} className={linkGreen}>Teamwork</Link> is built for agencies: client workspaces, time tracking, billing, and project templates. It's a strong fit if you want agency-specific features out of the box. <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link> and <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> are general-purpose but highly customizable—many agencies use them to manage multiple clients with custom fields and views. <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> offers all-in-one workspaces that can be organized by client. <Link href={getProjectManagementReviewUrl("wrike")} className={linkGreen}>Wrike</Link> suits larger agencies that need portfolio and resource views. Compare in our <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link> roundup and <Link href={getProjectManagementCompareUrl("monday-vs-wrike")} className={linkGreen}>Monday vs Wrike</Link> and <Link href={getProjectManagementCompareUrl("asana-vs-monday")} className={linkGreen}>Asana vs Monday</Link> pages.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Project management for agencies" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedProjectManagementResources items={RELATED_ITEMS} excludeHref="/project-management/guides/project-management-for-agencies" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Project Management for Agencies | BeltStack Guide",
    description: "How agencies use project management software to manage multiple clients, deliverables, and team collaboration. Features, tools, and comparison tips.",
  };
}
