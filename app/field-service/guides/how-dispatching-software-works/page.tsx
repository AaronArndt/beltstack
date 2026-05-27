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
    q: "How does dispatching software work?",
    a: "Dispatching software ingests scheduled or incoming jobs, shows technician availability and skills on a board or map, and lets dispatchers assign or reassign work in real time. Technicians receive updates on mobile; customers may get ETA notifications. Status changes on the job feed back to billing and reporting.",
  },
  {
    q: "What is the difference between scheduling and dispatching software?",
    a: "Scheduling software plans when work should occur—appointments, recurring routes, and capacity blocks. Dispatching software focuses on live assignment: who goes where now, especially when jobs slip, emergencies arrive, or technicians call in sick. Most field service platforms combine both because the handoff is continuous.",
  },
  {
    q: "Do small contractors need a dispatch board?",
    a: "A single dispatcher with a few trucks may manage with a calendar plus clear rules. Once same-day volume, skills constraints, or travel time create daily firefighting, a visual dispatch board pays off. The threshold is operational pain, not headcount alone.",
  },
  {
    q: "Can dispatching software optimize routes automatically?",
    a: "Many tools offer basic route sequencing or map views; advanced optimization is more common in larger FSM suites. Even without AI routing, a good board surfaces zones, skills, and job duration so humans make faster, fewer-error assignments.",
  },
  {
    q: "How does dispatch relate to capacity planning?",
    a: "Dispatch executes today's plan; capacity planning decides how much work you can promise tomorrow. If booking tools oversell same-day slots, dispatch fails regardless of software quality. Strong operations align sales promises, capacity buffers, and the live board.",
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

const PAGE_HREF = "/field-service/guides/how-dispatching-software-works";

export default function HowDispatchingSoftwareWorksPage() {
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
                      How Dispatching Software Works
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Dispatching Software Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how dispatching software assigns jobs, balances technician capacity, and keeps same-day service
                    on track from the morning board through field updates.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatching software is the control center for field operations. While scheduling plans future
                      work, dispatching handles the live question: which technician should do this job next, given
                      skills, location, traffic, and what is already on the board? Good dispatch tools make constraints
                      visible; weak ones hide them until a customer is waiting.
                    </p>
                    <p>
                      Most dispatch modules sit inside broader field service platforms—Jobber, Housecall Pro, ServiceTitan,
                      and others—rather than as standalone products. They pull jobs from bookings, phone intake, or
                      recurring schedules, then push assignments to technician mobile apps.
                    </p>
                    <p>
                      Dispatch is one piece of{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what field service management includes
                      </Link>
                      . For strategic planning beyond today&apos;s board, read{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning for field service
                      </Link>
                      .
                    </p>
                    <p>
                      Evaluating tools? Use our{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      during a trial with real same-day volume—not an empty demo calendar.
                    </p>
                  </div>
                </section>
                <section id="dispatch-flow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From job intake to technician assignment.">
                    The Dispatch Workflow
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>A typical dispatch loop looks like this:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Job enters the queue</strong> — from online booking, CSR intake,
                        or a scheduled maintenance list.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Dispatcher reviews constraints</strong> — skills (e.g., gas
                        certification), priority, service window, and travel from the prior stop.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Assignment and notification</strong> — job appears on the
                        tech&apos;s mobile schedule; customer may receive ETA updates.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Live adjustments</strong> — delays, parts holds, or emergencies
                        trigger reassignment without losing job history.
                      </li>
                    </ol>
                    <p>
                      Work orders carry status through completion—see{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="board-features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for on the dispatch board.">
                    Dispatch Board Features That Matter
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Skills and zones</strong> — filter technicians who can legally
                          or practically perform the work.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Map and timeline views</strong> — see geographic spread and
                          overlapping appointments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Drag-and-drop reassignment</strong> — move jobs when reality
                          changes without retyping details.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Status sync to mobile</strong> — field updates reflect on the
                          board so the office is not calling techs for every check-in.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Scheduling sets the plan—see{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      . Technicians execute on{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="evaluate-dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Testing dispatch under real volume.">
                    How to Evaluate Dispatching in FSM Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run trials on a busy day: inject a same-day emergency, a no-show, and a job that runs two hours
                      over. Watch whether reassignment preserves notes, customer contact info, and billing line items.
                      Ask whether dispatch changes sync to{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        accounting
                      </Link>{" "}
                      when the job closes.
                    </p>
                    <p>
                      If your team also runs marketing automation and lead pipelines, clarify boundaries with{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      so dispatchers are not chasing data in two systems.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dispatch software mechanics and fit.">FAQs</SectionTitle>
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
    title: "How Dispatching Software Works | BeltStack Guide",
    description:
      "Learn how dispatching software works: job queues, dispatch boards, technician assignment, mobile sync, and capacity planning connections.",
  };
}
