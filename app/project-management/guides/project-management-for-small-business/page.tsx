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
    q: "Do small businesses need project management software?",
    a: "Small businesses that run more than a handful of projects or recurring work benefit from project management software. It keeps tasks, deadlines, and assignees in one place and scales as you grow. Free tiers from Asana, Trello, or Notion make it easy to start without a big commitment.",
  },
  {
    q: "What is the best project management software for small business?",
    a: "Asana, ClickUp, Monday, and Trello are strong options: each offers clear task and project views and reasonable pricing or a free tier. Asana fits teams that want structure and simplicity; ClickUp offers all-in-one value; Monday is highly customizable; Trello is the simplest. See our best project management software roundup and Asana vs ClickUp comparison for details.",
  },
  {
    q: "How much does project management software cost for a small business?",
    a: "Many tools offer a free tier (Asana, Trello, ClickUp, Notion). Paid plans often start around $8–15 per user per month. Total cost depends on users, views (e.g. timeline), and add-ons like automation. Compare tiers on our comparison pages and read individual reviews for current pricing; see our project management pricing guide.",
  },
  {
    q: "When should a small business upgrade from free project management software?",
    a: "Upgrade when you need more members than the free tier allows, when you want timeline or Gantt views, when you need automation or advanced reporting, or when you want more storage. Many small businesses run on free or starter tiers for a year or more.",
  },
  {
    q: "Can a small business use project management software without a dedicated project manager?",
    a: "Yes. Owner-led and small teams use project management software to track tasks, assign work, and see what's due. Tools like Asana and Trello are designed for small teams; you don't need a dedicated PM to benefit from a single place for projects and tasks.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: 4.6, bestFor: "Best overall for SMBs", reviewHref: getProjectManagementReviewUrl("asana") },
  { name: "Trello", logoSrc: "/Logos/trello.png", rating: 4.3, bestFor: "Simplicity", reviewHref: getProjectManagementReviewUrl("trello") },
  { name: "Notion", logoSrc: "/Logos/notion.png", rating: 4.4, bestFor: "Docs + tasks", reviewHref: getProjectManagementReviewUrl("notion") },
];

const RELATED_ITEMS = [
  { label: "Project Management Software Hub", href: "/project-management" },
  { label: "Best Project Management Software", href: "/project-management/best-project-management-software" },
  { label: "Compare Project Management Software", href: "/project-management/compare" },
  { label: "Project Management Guides", href: "/project-management/guides" },
  { label: "Asana Review", href: getProjectManagementReviewUrl("asana") },
  { label: "ClickUp Review", href: getProjectManagementReviewUrl("clickup") },
  { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
  { label: "How to Choose Project Management Software", href: "/project-management/guides/how-to-choose-project-management-software" },
  { label: "Project Management Pricing Guide", href: "/project-management/guides/project-management-pricing-guide" },
];

export default function ProjectManagementForSmallBusinessPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Project Management for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Project Management for Small Business</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Choosing and using project management when you're a small team: features that matter, pricing, and how to get started without enterprise complexity.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses often need project management software that is simple, affordable, and reliable. When tasks and deadlines live in email, spreadsheets, or sticky notes, it's easy to lose track of who is doing what and when things are due. Project management software gives small teams a single place to create projects, assign tasks, set due dates, and see progress—without the cost or complexity of enterprise tools.
                    </p>
                    <p>
                      The right tool depends on team size, whether you need list, board, or timeline views, and budget. Many small teams start with a free tier—<Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link>, and <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> offer solid free options—then upgrade as they add users or need more views and automation. Explore our <Link href="/project-management" className={linkGreen}>project management hub</Link>, <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link>, and <Link href="/project-management/compare" className={linkGreen}>comparisons</Link> such as <Link href={getProjectManagementCompareUrl("asana-vs-clickup")} className={linkGreen}>Asana vs ClickUp</Link> and <Link href={getProjectManagementCompareUrl("notion-vs-trello")} className={linkGreen}>Notion vs Trello</Link> to compare fit and pricing.
                    </p>
                  </div>
                </section>
                <section id="why-small-businesses-use-pm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common reasons to adopt project management software.">Why Small Businesses Use Project Management Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small businesses adopt project management software to replace scattered to-dos and email threads with one system the whole team can use. Benefits include:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Single source of truth</strong> — Tasks, assignees, and due dates in one place instead of spreadsheets or personal lists. Everyone sees the same projects and next steps.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Visibility</strong> — See what's in progress, what's due soon, and who is responsible. Owners and team members can prioritize without asking around.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Reminders, status updates, and workflow rules reduce manual follow-up so nothing slips when everyone is busy.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Progress and workload views without building spreadsheets. Useful for planning and spotting bottlenecks.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="pain-points-without-pm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What goes wrong without a central system.">Common Pain Points Without Project Management Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Without a dedicated project management tool, small businesses often run into:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Missed deadlines</strong> — Tasks sit in inboxes or personal lists; no shared view of what's due when or who owns it.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Duplicate or conflicting data</strong> — Multiple people update different spreadsheets or notes; project status is unclear.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">No clear project view</strong> — Hard to see how many tasks are in progress, what's blocked, or who is overloaded.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Time spent on manual updates</strong> — Chasing status in email or meetings instead of doing the work.</span></li>
                    </ul>
                    <p>Project management software addresses these by centralizing projects, tasks, and due dates so the team has one place to log and view progress. Our <Link href="/project-management/guides/how-to-choose-project-management-software" className={linkGreen}>how to choose project management software</Link> guide goes deeper on selection criteria.</p>
                  </div>
                </section>
                <section id="key-features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for.">Key Features for Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small teams should prioritize features that match how they actually work and that they'll use every day. Avoid overbuying: start with core task and project management; add timeline views or advanced reporting only when you need them.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ease of use</strong> — Clear task list or board, simple assignment and due dates, short learning curve. If it's cumbersome, the team won't keep it updated.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">List and/or board view</strong> — At least one view that matches your workflow. Many small teams are fine with list + board; timeline is optional at first.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Published pricing or free tier</strong> — Transparent costs so you can budget. Free tiers from Asana, Trello, or Notion let you start without a credit card.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Comments and file attachments</strong> — Keep discussion and files in context so you don't lose them in email.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Basic reporting</strong> — Progress and workload views. You don't need enterprise dashboards to get value.</span></li>
                    </ul>
                    <p>Our <Link href="/project-management/guides/how-to-choose-project-management-software" className={linkGreen}>how to choose project management software</Link> guide covers selection criteria in more detail.</p>
                  </div>
                </section>
                <section id="simple-vs-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When basic PM is enough vs when to upgrade.">When Simple Project Management Is Enough vs When to Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Simple is often enough</strong> when you have a small team (e.g. one to five people), straightforward work, and mainly need task and project tracking with due dates and maybe a board. Free or low-cost tiers from <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link>, or <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> can cover this for a long time.</p>
                    <p><strong className="text-[#1A2D48]">Consider upgrading</strong> when you need more members than the free tier allows, when you want timeline or Gantt views for dependencies, when you need automation or advanced reporting, or when you want more storage. At that point, paid tiers of <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link>, or <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link> add the capacity and views you need. Compare options in our <Link href={getProjectManagementCompareUrl("asana-vs-clickup")} className={linkGreen}>Asana vs ClickUp</Link> and <Link href={getProjectManagementCompareUrl("notion-vs-trello")} className={linkGreen}>Notion vs Trello</Link> guides.</p>
                  </div>
                </section>
                <section id="recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks and in-depth reviews.">Project Management Software Recommendations for Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>For a curated list of top picks and who each tool is best for, see our <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link> roundup. <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link> is a top choice for many SMBs: free tier, clear structure, and a good upgrade path. <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link> fits teams that want the simplest boards; <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> fits teams that want docs and tasks in one place; <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> fits teams that want one tool for tasks, docs, and more. Compare head-to-head in <Link href={getProjectManagementCompareUrl("asana-vs-clickup")} className={linkGreen}>Asana vs ClickUp</Link> and <Link href={getProjectManagementCompareUrl("notion-vs-trello")} className={linkGreen}>Notion vs Trello</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Project management for small business" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedProjectManagementResources items={RELATED_ITEMS} excludeHref="/project-management/guides/project-management-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Project Management for Small Business | BeltStack Guide",
    description: "Learn how small businesses use project management software, which features matter most, when to upgrade, and how to choose a platform that fits your size and budget.",
  };
}
