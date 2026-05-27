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
    q: "How does route optimization software work?",
    a: "It ingests stops—addresses, time windows, job duration, and vehicle constraints—then calculates an efficient visit order and drive path. Algorithms weigh travel time, priorities, and technician skills. Output feeds dispatch boards or mobile turn-by-turn directions.",
  },
  {
    q: "Is route optimization the same as GPS navigation?",
    a: "No. Navigation tells one driver how to reach the next stop. Optimization decides which stops belong on which route and in what sequence across multiple technicians. Many FSM tools combine both after optimization runs.",
  },
  {
    q: "Do small service businesses need route optimization?",
    a: "Not always on day one. Teams with a handful of daily stops in one neighborhood may sequence manually. Once drive time erodes margin or on-time rates slip, optimization pays for itself quickly—even before you add more trucks.",
  },
  {
    q: "What data do you need for good routes?",
    a: "Accurate addresses, realistic job durations, service windows, and technician start locations. Bad duration estimates or missing skills produce routes that look efficient on paper but fail in the field within the first hour.",
  },
  {
    q: "How does route optimization connect to dispatch?",
    a: "Optimization proposes a plan; dispatch executes and adjusts when reality changes. Same-day emergencies and overtime jobs still require a live board. Strong operations treat the optimized route as a starting point, not a contract.",
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

const PAGE_HREF = "/field-service/guides/how-route-optimization-software-works";

export default function HowRouteOptimizationSoftwareWorksPage() {
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
                      How Route Optimization Software Works
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Route Optimization Software Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how route optimization reduces drive time, balances technician workloads, and supports on-time
                    arrivals across a day of service stops.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Route optimization software answers a math-heavy operations question: given today&apos;s jobs, who
                      should visit which customers—and in what order—to minimize drive time while honoring time windows
                      and skills? It is not the same as turn-by-turn navigation; it decides the plan before any single
                      driver hits the road.
                    </p>
                    <p>
                      Most routing lives inside broader field service platforms—Jobber, Housecall Pro, ServiceTitan,
                      and others—rather than as a standalone product. Optimizers pull stops from scheduled work orders,
                      then publish ordered routes to dispatch boards and technician mobile apps.
                    </p>
                    <p>
                      For strategic context beyond daily sequencing, read{" "}
                      <Link
                        href="/scheduling/guides/route-optimization-for-service-businesses"
                        className={linkGreen}
                      >
                        route optimization for service businesses
                      </Link>
                      . Pair that with{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning for field service
                      </Link>
                      .
                    </p>
                    <p>
                      Compare FSM suites with routing features on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      —test with a real day of 15–30 stops, not a vendor demo map.
                    </p>
                  </div>
                </section>

                <section id="optimization-inputs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The data models and constraints optimizers use.">
                    Inputs Route Optimizers Need
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Garbage in produces routes technicians ignore. Clean work order data and realistic durations
                      matter more than algorithm branding:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Stop list</strong> — geocoded addresses, job IDs, and
                          priority flags for SLA or emergency work.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Time windows</strong> — customer promises or site access
                          constraints (e.g., property manager hours).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Job duration estimates</strong> — by type, ideally from
                          historical actuals rather than flat defaults.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Technician constraints</strong> — skills, shift length,
                          vehicle capacity, and start/end depots.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Scheduling supplies many of these inputs—see{" "}
                      <Link href="/field-service/guides/how-field-service-teams-schedule-technicians" className={linkGreen}>
                        how field service teams schedule technicians
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="optimization-process" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What happens between import and published routes.">
                    How an Optimization Run Works
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most tools follow a similar sequence:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Import today&apos;s jobs</strong> — from the schedule, work
                        order queue, or recurring route batch.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Apply constraints</strong> — time windows, skills, max stops
                        per tech, and drive-time matrices.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Calculate sequences</strong> — assign stops to technicians
                        and order visits to reduce total miles or time.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Review and publish</strong> — dispatcher locks critical
                        appointments, then pushes routes to mobile.
                      </li>
                    </ol>
                    <p>
                      Advanced suites re-optimize when a major change hits—new same-day job, tech call-out, or a job
                      running two hours over. Dispatch still owns those overrides on the live board.
                    </p>
                  </div>
                </section>

                <section id="optimization-output" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What teams see after an optimization run.">
                    Outputs and Field Execution
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Optimizers return ordered stop lists per technician, often with ETAs and map polylines. Dispatchers
                      review the plan, lock critical appointments, and publish routes to mobile apps. Technicians navigate
                      stop to stop while updating job status.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Per-tech stop order</strong> — the sequence mobile apps and
                          customers should expect.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">ETA projections</strong> — for customer notifications and
                          dispatch monitoring.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Map visualization</strong> — geographic spread and overlap
                          risks before trucks roll.
                        </span>
                      </li>
                    </ul>
                    <p>
                      When a job runs long or a same-day call arrives, dispatch overrides the plan—optimization is a
                      starting point, not a contract. Field execution details are in{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="evaluate-routing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to test routing inside FSM software.">
                    How to Evaluate Route Optimization
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Import a real day of jobs—15 to 30 stops across multiple techs—and compare drive miles and on-time
                      feasibility against your manual sequence. Re-run after changing one time window to see how flexibly
                      the tool adapts. Confirm mobile apps receive updated sequences without duplicate data entry.
                    </p>
                    <p>
                      Ask whether routing respects skills and capacity promises from booking—not just distance. Use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      with{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . Broader scheduling context:{" "}
                      <Link
                        href="/scheduling/guides/route-optimization-for-service-businesses"
                        className={linkGreen}
                      >
                        route optimization for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Route optimization mechanics and fit.">FAQs</SectionTitle>
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
    title: "How Route Optimization Software Works | BeltStack Guide",
    description:
      "Learn how route optimization software works: inputs, optimization runs, dispatch handoffs, mobile execution, and how to evaluate routing in FSM tools.",
    keywords: [
      "route optimization software",
      "field service routing",
      "technician route planning",
      "dispatch route optimization",
      "service business routes",
      "2026",
    ],
  };
}
