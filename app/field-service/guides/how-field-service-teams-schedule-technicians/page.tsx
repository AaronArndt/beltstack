import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "How do field service teams schedule technicians day to day?",
    a: "They combine a forward plan—appointments, zones, and skills—with live dispatch adjustments when jobs run long or emergencies arrive. Scheduling sets the day; dispatch executes it. Strong teams treat both as one continuous workflow inside the same FSM platform.",
  },
  {
    q: "What is the difference between scheduling and dispatching?",
    a: "Scheduling decides when work should happen and which technician is tentatively assigned. Dispatching handles real-time changes: reassignments, priority calls, and travel between stops. Software often merges both on one board, but the mental model stays distinct.",
  },
  {
    q: "Do you need skills-based scheduling?",
    a: "Once certifications, equipment, or trade specialties matter, yes. Assigning any available tech creates rework, callbacks, and compliance risk. Skills filters are a baseline for HVAC, electrical, and regulated trades—not a nice-to-have.",
  },
  {
    q: "How does capacity planning affect scheduling?",
    a: "Capacity planning limits how many jobs you book per zone or day. Without buffers, schedulers overpromise and dispatchers fight fires all afternoon. Align booking rules with realistic drive time, job duration, and technician shift length.",
  },
  {
    q: "What should small teams prioritize first?",
    a: "Clear service windows, a shared calendar or board, and mobile job updates. Add zones and skills matching when volume grows. Compare tools on trials with real appointment density—not a blank week or vendor demo script.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for contractors",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/how-field-service-teams-schedule-technicians";

export default function HowFieldServiceTeamsScheduleTechniciansPage() {
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
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How Field Service Teams Schedule Technicians
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Field Service Teams Schedule Technicians
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how service teams plan technician calendars, match skills and zones, and hand off to live
                    dispatch when the day changes.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technician scheduling is the bridge between what you sold and what your trucks can actually
                      complete. Good scheduling respects drive time, job duration, and technician qualifications—not
                      just open calendar slots. Weak scheduling shows up as late arrivals, overtime labor, and dispatch
                      firefighting by mid-afternoon.
                    </p>
                    <p>
                      Most scheduling happens inside field service platforms—Jobber, Housecall Pro, ServiceTitan, and
                      peers—rather than standalone calendars. Jobs enter from online booking, CSR intake, estimates, or
                      recurring maintenance lists; schedulers assign techs and publish the day to mobile apps.
                    </p>
                    <p>
                      Scheduling software plans the day; dispatching software adjusts it in real time. Read{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>{" "}
                      for the full picture. Capacity alignment is covered in{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning for field service
                      </Link>
                      .
                    </p>
                    <p>
                      Compare platforms on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      when you are ready to replace spreadsheets or a shared Google Calendar—trial on your busiest day,
                      not an empty week.
                    </p>
                  </div>
                </section>

                <section id="scheduling-building-blocks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The inputs every scheduler needs before assigning jobs.">
                    Scheduling Building Blocks
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before anyone drags a job onto a board, these inputs determine whether the plan is feasible:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Service windows</strong> — AM, PM, or timed arrivals promised
                          to customers and reflected in booking rules.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Skills and certifications</strong> — so only qualified techs
                          receive regulated or specialty work.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Zones or territories</strong> — to keep drive time predictable
                          across the metro or service area.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Estimated job duration</strong> — by job type from historical
                          actuals, not optimistic defaults.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Recurring maintenance and membership routes add another layer—many teams batch those stops by
                      geography before filling gaps with reactive calls. Work orders carry scope and history—see{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="daily-scheduling-flow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How jobs move from intake to a published technician day.">
                    The Daily Scheduling Workflow
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>A typical scheduling loop looks like this:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Job enters the queue</strong> — from booking, sales handoff,
                        or recurring maintenance generation.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Scheduler applies constraints</strong> — skills, zone, service
                        window, and drive from the prior stop or depot.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Assignment published</strong> — job appears on the technician
                        mobile schedule; customer may receive confirmation or ETA updates.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Handoff to dispatch</strong> — live board takes over when
                        delays, parts holds, or same-day add-ons change the plan.
                      </li>
                    </ol>
                    <p>
                      For multi-stop days, pairing scheduling with{" "}
                      <Link href="/field-service/guides/how-route-optimization-software-works" className={linkGreen}>
                        route optimization software
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/scheduling/guides/route-optimization-for-service-businesses"
                        className={linkGreen}
                      >
                        route optimization for service businesses
                      </Link>{" "}
                      reduces drive time before dispatchers start reassigning.
                    </p>
                  </div>
                </section>

                <section id="plan-to-dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What happens when the morning plan meets reality.">
                    From Schedule to Dispatch Board
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The schedule is a hypothesis until trucks roll. Dispatchers watch delays, parts holds, and
                      same-day add-ons, then reassign without losing job notes or customer contact details.
                      Drag-and-drop boards and map views make those changes faster than phone tag.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Status sync to mobile</strong> — field updates reflect on the
                          board so the office is not calling techs for every check-in.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Priority overrides</strong> — emergencies and SLA jobs bump
                          lower-priority work without orphaning customer communication.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Preserved job history</strong> — notes, photos, and billing
                          lines stay on the work order through reassignment.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Tie scheduling promises to realistic capacity—when booking tools oversell slots, even excellent
                      dispatch software cannot recover on-time performance. Technicians execute on{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps
                      </Link>
                      ; managers coordinate crews in{" "}
                      <Link href="/field-service/guides/how-businesses-manage-field-technicians" className={linkGreen}>
                        how businesses manage field technicians
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="evaluate-scheduling" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to test before you commit to a scheduling module.">
                    How to Evaluate Scheduling in FSM Tools
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a trial on a busy day: move a job between techs, inject a same-day emergency, and confirm
                      mobile apps update instantly. Ask whether recurring jobs, estimates, and invoices stay linked when
                      appointments shift—and whether changes sync to{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        accounting
                      </Link>{" "}
                      when the job closes.
                    </p>
                    <p>
                      If your team also runs a separate sales stack, clarify boundaries with{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      and{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM software
                      </Link>{" "}
                      so schedulers are not chasing data in two systems. Use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      as a buying checklist alongside{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Technician scheduling and dispatch FAQs.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Field Service Teams Schedule Technicians | BeltStack Guide",
    description:
      "Learn how field service teams schedule technicians using skills, zones, capacity planning, daily workflows, and dispatch handoffs.",
    keywords: [
      "technician scheduling",
      "field service scheduling",
      "schedule technicians",
      "dispatch and scheduling",
      "capacity planning field service",
      "2026",
    ],
  };
}
