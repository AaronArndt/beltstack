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
    q: "Can one tool handle both appointment and employee scheduling?",
    a: "Some platforms blur the line—FSM books customer jobs and shows technician calendars; workforce tools publish shifts. Rarely does a pure Calendly-style booking app replace shift planning for hourly staff. Evaluate whether you need customer-facing slots, internal coverage, or both before consolidating.",
  },
  {
    q: "Is employee scheduling the same as time tracking?",
    a: "Not exactly. Shift scheduling defines when people are expected to work; time tracking records actual hours worked for payroll and compliance. Many businesses use paired tools or one suite that does both. See the time tracking hub when payroll accuracy is the driver.",
  },
  {
    q: "What should service businesses prioritize?",
    a: "If revenue depends on booked customer visits, appointment or job scheduling usually comes first. Employee shift tools matter for call centers and multi-crew shops, but field service teams often live in job-based calendars tied to locations—not generic shift grids.",
  },
  {
    q: "When does field service software replace appointment schedulers?",
    a: "When dispatch, work orders, parts, and invoicing matter as much as the calendar. Booking-only tools stop at the appointment; FSM carries the job through completion. Read scheduling vs FSM before forcing one category to do both jobs.",
  },
  {
    q: "How do I avoid double-booking across systems?",
    a: "Declare a system of record per calendar type: customer appointments in booking software, shifts in workforce tools, and job assignments in FSM. Sync rules should be explicit—never let two tools write the same technician slot without conflict resolution.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Customer appointments", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team booking", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service appointments", reviewHref: getSchedulingReviewUrl("setmore") },
];

const PAGE_HREF = "/scheduling/guides/appointment-scheduling-vs-employee-scheduling";

export default function AppointmentSchedulingVsEmployeeSchedulingPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Appointment vs employee scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Appointment Scheduling vs Employee Scheduling
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Two scheduling problems that share a calendar icon but serve different buyers—customer appointments
                    versus internal shift and workforce coverage.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Appointment scheduling answers: when can a customer book time with us? Employee scheduling answers:
                      when are our people on the clock and who is available to work? Both show up as blocks on a grid, which
                      leads teams to buy the wrong category—or run three overlapping tools without clear ownership.
                    </p>
                    <p>
                      Customer-facing booking tools—Calendly, Acuity, Setmore, Square Appointments—optimize public links,
                      reminders, intake forms, and payments at booking. Workforce and shift tools optimize coverage, labor
                      law constraints, and payroll handoff. Field service adds a third layer: job appointments tied to
                      addresses, skills, and trucks.
                    </p>
                    <p>
                      This guide separates the categories so you shortlist the right software. Start on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>, browse{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>, and read{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      when customer booking is the bottleneck.
                    </p>
                    <p>
                      When internal coverage and hours matter, pair this with the{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link> and{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>{" "}
                      for job-based field calendars—not generic shift grids alone.
                    </p>
                  </div>
                </section>
                <section id="appointments" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Customer-facing time slots.">What Appointment Scheduling Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Appointment scheduling puts customers in control: pick a service, choose a time, pay or confirm, and
                      receive reminders. Round-robin and collective availability distribute inbound meetings across a team.
                      For service businesses, see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/best-for/service-business" className={linkGreen}>
                        best scheduling for service businesses
                      </Link>.
                    </p>
                    <p>
                      Compare tools like{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link>{" "}
                      in our{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity
                      </Link>{" "}
                      matchup, or explore{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      for the full roundup.
                    </p>
                  </div>
                </section>
                <section id="employees" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Shifts, coverage, and labor rules.">What Employee Scheduling Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Employee scheduling defines who works which shifts, handles time-off requests, and ensures departments
                      stay staffed. It pairs naturally with time clocks and payroll—topics covered on the{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking hub</Link>—rather than with public
                      booking pages.
                    </p>
                    <p>
                      Retail, hospitality, and call centers often lead here. Field crews may still use shift tools for
                      on-call rotations, but day-to-day work is usually scheduled as jobs. Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>{" "}
                      when multiple staff share inbound appointments, not when you only need warehouse shift coverage.
                    </p>
                  </div>
                </section>
                <section id="field-jobs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Jobs on trucks, not meetings.">Where Field Service Scheduling Fits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technician scheduling is neither pure appointment booking nor generic shift planning. It assigns
                      customer jobs to people with the right skills, territories, and drive time between stops. That workflow
                      lives in field service management; our{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling guide
                      </Link>{" "}
                      walks through calendars, recurring routes, and dispatch handoff.
                    </p>
                    <p>
                      If you are comparing categories, read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before buying a booking tool for a dispatch-heavy shop. Route-heavy teams should also see{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="choose" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One sentence routes the shortlist.">How to Choose for Your Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ask which calendar failure hurts most: customers cannot book you, you cannot staff shifts, or
                      technicians miss jobs in the field. The answer points to appointment schedulers, workforce tools, or
                      FSM—not all three by default.
                    </p>
                    <p>
                      Hybrid stacks work when boundaries are clear. Example: Calendly for sales discovery, FSM for service
                      jobs, and time tracking for payroll. Document which system wins when calendars conflict. Browse{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for scenarios</Link> and all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> for deeper evaluations.
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
              <GuideSidebar title="Tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Appointment Scheduling vs Employee Scheduling | BeltStack Guide",
    description:
      "Learn the difference between customer appointment scheduling and employee shift scheduling—when to use booking tools, workforce software, or field service calendars.",
    keywords: [
      "appointment scheduling vs employee scheduling",
      "customer booking vs shift scheduling",
      "appointment scheduling software",
      "employee shift scheduling",
      "workforce scheduling vs Calendly",
      "field service technician scheduling",
    ],
  };
}
