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
    q: "Do general contractors need project management software?",
    a: "If you run multiple jobs, subcontractors, or phases at once, dedicated project management software reduces rework from missed handoffs and unclear ownership. Spreadsheets and group texts work until volume grows; PM tools give owners, supers, and office staff one place for tasks, files, and schedules.",
  },
  {
    q: "Should construction firms use industry-specific PM or general tools?",
    a: "Industry platforms emphasize RFIs, submittals, drawings, and cost codes; general PM tools emphasize tasks, timelines, and integrations. Choose based on whether drawing-centric workflows and job-cost structure are central today. Many mid-size trades start with strong general PM plus field service or time tracking, then evaluate vertical suites as complexity increases.",
  },
  {
    q: "How does project management relate to field service and time tracking?",
    a: "Field service software focuses on dispatch, work orders, and technician mobility; time tracking records labor hours. Project management ties the job-level plan (milestones, punch lists, closeout) to that execution. Teams often run PM for the plan and customer-visible schedule, with time tracking and field tools feeding labor and visit data—see our field service and time tracking hubs for how those layers fit.",
  },
  {
    q: "What features matter most for trade and contractor PM?",
    a: "Clear tasks and accountability per job, mobile-friendly updates from the site, file and photo storage per project, and predictable notifications. Integrations with scheduling, invoicing, or accounting reduce double entry. Reporting on overdue items and blocked work helps principals see risk early.",
  },
  {
    q: "When is a free or simple PM tool enough for a contractor?",
    a: "Solo operators or single-crew shops with linear jobs may get by on boards and calendars from tools like Trello or Asana free tiers. Add structure when you have parallel jobs, multiple subs, or handoffs between estimating, production, and billing that keep breaking down.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: 4.6, bestFor: "Structured jobs + tasks", reviewHref: getProjectManagementReviewUrl("asana") },
  { name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: 4.5, bestFor: "Custom job boards", reviewHref: getProjectManagementReviewUrl("monday") },
  { name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: 4.4, bestFor: "All-in-one depth", reviewHref: getProjectManagementReviewUrl("clickup") },
];

const RELATED_ITEMS = [
  { label: "Project Management Software Hub", href: "/project-management" },
  { label: "Best Project Management Software", href: "/project-management/best-project-management-software" },
  { label: "Compare Project Management Software", href: "/project-management/compare" },
  { label: "Project Management Guides", href: "/project-management/guides" },
  { label: "Field Service Software Hub", href: "/field-service" },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "Scheduling Software Hub", href: "/scheduling" },
  { label: "Asana Review", href: getProjectManagementReviewUrl("asana") },
  { label: "Monday Review", href: getProjectManagementReviewUrl("monday") },
  { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
  { label: "How to Choose Project Management Software", href: "/project-management/guides/how-to-choose-project-management-software" },
];

export default function ProjectManagementForConstructionAndContractorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/project-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Project Management
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/project-management/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Project Management for Construction and Contractors
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Project Management for Construction and Contractors
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How construction and trade businesses use PM software for jobs, crews, and handoffs—without drowning in
                    tools—and what to evaluate first when your work leaves the whiteboard.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Construction and contracting revolve around jobs: permits, subs, materials, site conditions, and
                      punch lists all have to land in the right order. Project management software will not pour concrete or
                      pull wire, but it gives ownership and dates to each piece of work so supers, PMs, and owners see the
                      same plan. When that plan lives only in heads, texts, or one giant spreadsheet, small misses compound
                      into callbacks, overtime, and customer friction.
                    </p>
                    <p>
                      This guide is written for evaluation: what to prioritize before you shortlist vendors, how PM relates
                      to <Link href="/field-service" className={linkGreen}>field service</Link>,{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>, and{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling</Link>, and how to avoid buying a second
                      system six months later. For product-level picks, see our{" "}
                      <Link href="/project-management/best-project-management-software" className={linkGreen}>
                        best project management software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/project-management/guides/how-to-choose-project-management-software" className={linkGreen}>
                        how to choose project management software
                      </Link>{" "}
                      framework.
                    </p>
                  </div>
                </section>
                <section id="why-pm-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Problems PM software is meant to solve on job-based work.">
                    Why Project Management Software Matters for Trades
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyer intent here is rarely “features for features’ sake.” Teams adopt PM when coordination cost
                      exceeds the pain of a shared system: missed dependent tasks, unclear responsibility after handoffs, or
                      rework because finish work started before inspection sign-off. Good PM practice makes{" "}
                      <em>who does what by when</em> explicit per job, with history and files attached so context does not
                      disappear when a key person is on another site.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Job-centric visibility</strong> — Tasks and milestones grouped by
                          project or phase, not only personal to-do lists, so the office and field align on priorities.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Accountability</strong> — Named owners and due dates reduce “I
                          thought someone else had it” when subs and internal crews overlap.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Documentation in context</strong> — Photos, specs, and change
                          notes stored on the job reduce disputes and speed closeout.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="pm-vs-field-service" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Clear boundaries help you buy the right stack.">
                    Project Management vs Field Service and Time Tracking
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Project management</strong> centers the plan: phases, tasks,
                      dependencies, and communication around delivering the job.{" "}
                      <strong className="text-[#1A2D48]">Field service software</strong> centers execution in the field:
                      dispatch, work orders, technician routes, and often customer notifications—see our{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch and capacity planning
                      </Link>{" "}
                      guide for that lens.
                    </p>
                    <p>
                      <Link href="/time-tracking" className={linkGreen}>Time tracking</Link> answers how many hours went to
                      which cost code or client; it complements PM but does not replace a structured task list. Many
                      contractors run PM for job coordination, field tools for crews, and time tracking for payroll and job
                      costing—integrations matter more than any single brand name.
                    </p>
                  </div>
                </section>
                <section id="what-to-evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical checklist before demos.">What to Evaluate on Demos</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Mobile experience</strong> — Can supers update tasks and upload
                          site photos without fighting the UI? Offline tolerance varies by product; test on real devices.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Permissions</strong> — Separate client-facing views from internal
                          punch lists if you collaborate with owners or architects.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Templates per job type</strong> — Residential remodel vs
                          commercial TI vs service contracts should not be rebuilt from scratch every time.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Integrations</strong> — Accounting, estimating, CRM, or inventory
                          hooks reduce duplicate entry; confirm your stack is supported or API-accessible.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Tools like <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>,{" "}
                      <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, and{" "}
                      <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> are common
                      starting points for structured work; compare fit in{" "}
                      <Link href={getProjectManagementCompareUrl("asana-vs-monday")} className={linkGreen}>Asana vs Monday</Link>{" "}
                      and related comparison pages.
                    </p>
                  </div>
                </section>
                <section id="trust-and-implementation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Experience, transparency, and durable process.">Experience, Accuracy, and Trust</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Useful buyer content maps decisions to real job workflows, states trade-offs plainly, and treats vendor
                      pricing as something to verify in trials and on current pricing pages—not from stale screenshots. Our{" "}
                      <Link href="/project-management/guides/project-management-pricing-guide" className={linkGreen}>
                        project management pricing guide
                      </Link>{" "}
                      and individual reviews are separate from this explainer so you can cross-check facts before you commit
                      budget.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="PM for construction" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedProjectManagementResources
          items={RELATED_ITEMS}
          excludeHref="/project-management/guides/project-management-for-construction-and-contractors"
        />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Project Management for Construction & Contractors | BeltStack Guide",
    description:
      "Learn how construction and trade businesses use project management software for jobs, crews, and handoffs—and how PM fits with field service and time tracking.",
  };
}
