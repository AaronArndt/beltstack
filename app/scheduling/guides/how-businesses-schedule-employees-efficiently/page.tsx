import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingCompareUrl, getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "What is the most efficient way to schedule employees?",
    a: "Publish clear availability rules, use one system of record for shifts or jobs, and separate customer booking from internal coverage. Managers should see conflicts before they publish, and employees should get mobile access to their schedule without screenshot PDFs.",
  },
  {
    q: "Should employee scheduling and customer booking use the same tool?",
    a: "Sometimes—for small teams one calendar suffices. Larger operations often split customer appointment booking from shift planning and job dispatch. The split prevents double-booking technicians who are both on a shift grid and a public booking page.",
  },
  {
    q: "How does time tracking relate to employee scheduling?",
    a: "Scheduling plans who should work when; time tracking records who actually worked for payroll. Integrating both reduces disputes and overtime surprises. Start at the time tracking hub when labor compliance drives the project.",
  },
  {
    q: "How do field service businesses schedule employees differently?",
    a: "They schedule jobs to technicians with skills, territories, and drive time—not just clock-in shifts. FSM calendars tie to work orders; dispatch adjusts the live board when the day slips. Technician scheduling software is built for that loop.",
  },
  {
    q: "What software features improve scheduling efficiency?",
    a: "Templates for recurring shifts or routes, conflict warnings, time-off workflows, mobile notifications, and reporting on utilization. For inbound appointment teams, add round-robin and buffer rules in scheduling tools like Calendly or YouCanBook.me.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team availability", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Team scheduling", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Multi-staff booking", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-businesses-schedule-employees-efficiently";

export default function HowBusinessesScheduleEmployeesEfficientlyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Schedule employees efficiently</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Schedule Employees Efficiently
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Practices and software patterns that reduce scheduling chaos—shifts, team availability, field jobs, and
                    the handoff to time tracking and payroll.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Efficient employee scheduling is less about finding the perfect app and more about separating concerns:
                      who is allowed to work when, which customers they serve, and how actual hours get recorded. Teams that
                      mix all three in one spreadsheet usually discover conflicts only after a double-booked technician or
                      a short-staffed Saturday.
                    </p>
                    <p>
                      Start with a single source of truth. Shift-based businesses publish schedules employees can see on
                      mobile. Appointment-heavy teams route inbound bookings through rules—buffers, round-robin, skills.
                      Field service companies schedule jobs to trucks and people, then let dispatch handle exceptions.
                    </p>
                    <p>
                      This guide ties operational habits to software categories on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>. Compare vendors via{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link> and{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>.
                      For the customer-vs-employee split, read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>.
                    </p>
                    <p>
                      Labor accuracy and compliance live on the{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link>. Field crews should pair
                      this guide with{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>{" "}
                      when jobs—not shifts—are the schedulable unit.
                    </p>
                  </div>
                </section>
                <section id="principles" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Policies before pixels.">Principles That Scale Past Spreadsheets</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Document availability defaults: earliest start, latest end, break rules, and who approves overtime.
                      Require time-off requests in the system—not DMs—so managers see coverage gaps before publishing.
                      Recurring patterns (every Tuesday route, standing on-call rotation) should be templates, not manual
                      re-entry.
                    </p>
                    <p>
                      Publish schedules far enough ahead that people can plan, but leave a controlled window for dispatch
                      changes same-day. Employees should get push or SMS when their plan changes; customers should get
                      parallel updates when their appointment moves.
                    </p>
                  </div>
                </section>
                <section id="appointment-teams" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Round-robin, buffers, fairness.">Scheduling Teams That Take Appointments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Sales, support, and consulting pods often automate fairness with round-robin booking. Buffer time
                      prevents back-to-back burnout. Per-person booking pages matter when clients request a named
                      representative.
                    </p>
                    <p>
                      Deep dive in{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/best-for/teams" className={linkGreen}>best scheduling for teams</Link>.
                      Compare{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>
                        Calendly vs YouCanBook.me
                      </Link>{" "}
                      and read reviews for{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> before rolling
                      out team links.
                    </p>
                  </div>
                </section>
                <section id="field-crews" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Jobs, skills, dispatch.">Field Crews and Technician Calendars</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling employees in the field means assigning work orders with realistic duration and travel—not
                      stacking 30-minute placeholders. Skills, territories, and recurring maintenance routes belong in the
                      same system dispatch uses daily.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling guide
                      </Link>{" "}
                      covers recurring routes, double-book prevention, and dispatch handoff. If booking pages and trucks
                      diverge, read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs field service software
                      </Link>{" "}
                      before buying another calendar tool.
                    </p>
                  </div>
                </section>
                <section id="time-tracking" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Planned vs actual hours.">Closing the Loop With Time Tracking</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A schedule is a plan; time tracking is evidence. Integrations that compare scheduled hours to clocked
                      hours surface overtime risk, buddy punching, and jobs that consistently run long—feedback for better
                      templates next week.
                    </p>
                    <p>
                      Explore the{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link> when payroll accuracy or
                      labor law recordkeeping is non-negotiable. Pair with{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>{" "}
                      when you want reminders and self-serve rescheduling to reduce coordinator load. Browse{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for scenarios</Link> and{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>all scheduling guides</Link> for tool-specific
                      evaluations.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Team scheduling tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSchedulingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Schedule Employees Efficiently | BeltStack Guide",
    description:
      "Efficient employee scheduling practices—shift planning, team booking rules, field technician calendars, and integrating schedules with time tracking and payroll.",
    keywords: [
      "employee scheduling efficiency",
      "how to schedule employees",
      "workforce scheduling best practices",
      "team scheduling software",
      "employee shift scheduling",
      "technician scheduling efficiency",
    ],
  };
}
