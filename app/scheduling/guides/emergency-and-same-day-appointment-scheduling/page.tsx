import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "Should customers book emergency visits online?",
    a: "Often you want a triage step first—severity, safety, and membership status—before a slot is promised. Pure self-serve booking can work for urgent but non-emergency requests if capacity rules are tight.",
  },
  {
    q: "What software features help same-day scheduling?",
    a: "Real-time capacity views, on-call technician tags, automatic hold times for travel, and CSRs seeing the same board as dispatch. Booking pages alone rarely encode those rules.",
  },
  {
    q: "Where does FSM fit?",
    a: "When emergencies create jobs, parts orders, and invoices—not only calendar blocks—FSM usually owns the record system. See dispatch and capacity planning for field service for the operations side.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service reminders", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Square Appointments", logoSrc: "/Logos/square.jpeg", rating: "4.3", bestFor: "Square ecosystem booking", reviewHref: getSchedulingReviewUrl("square-appointments") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Policies & buffers", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/emergency-and-same-day-appointment-scheduling";

export default function EmergencyAndSameDayAppointmentSchedulingPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Emergency &amp; same-day</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Emergency &amp; Same-Day Service Scheduling
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Triage, on-call coverage, and realistic windows when the day rarely goes to plan—evaluation criteria
                    for HVAC, plumbing, and other urgent service models.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Same-day and emergency scheduling is a trust problem. Customers need honest windows; technicians need
                      routes that respect drive time; CSRs need authority rules so nobody promises a two-hour arrival when
                      the board is already redlined.
                    </p>
                    <p>
                      This guide complements{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        FSM dispatch and capacity planning
                      </Link>
                      . If you are unsure whether scheduling or FSM should lead, read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="triage" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Safety, severity, membership.">Triage Before the Calendar</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Emergencies are not all equal. Gas leaks, live wires, and flooding need different scripts than “AC
                      warm upstairs.” Document triage questions CSRs must ask before offering a slot. Software can enforce
                      forms, but leadership must define the policy.
                    </p>
                  </div>
                </section>
                <section id="capacity" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Buffers and on-call logic.">Capacity Rules That Survive Peak Days</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Same-day scheduling fails when the booking page ignores trucks already committed. Tie public booking
                      to live capacity or require human confirmation for urgent requests. On-call rotations should be
                      visible on the dispatch board, not only in a spreadsheet.
                    </p>
                  </div>
                </section>
                <section id="comms" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Texts, ETAs, and callbacks.">Customer Communication</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated ETA and “on the way” messages reduce no-answers and complaints. Whatever scheduling or FSM
                      stack you use, test the customer’s timeline: confirmation, reminder, delay, and completion. Our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      reviews cover tools strong in customer messaging.
                    </p>
                    <p>
                      Browse all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>
                        scheduling guides
                      </Link>{" "}
                      and the{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup for tool ideas.
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
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Emergency & Same-Day Service Scheduling | BeltStack Guide",
    description:
      "How to schedule emergency and same-day service appointments: triage, on-call capacity, realistic windows, and how FSM and booking tools work together.",
  };
}
