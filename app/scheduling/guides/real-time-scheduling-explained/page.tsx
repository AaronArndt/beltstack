import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import {
  getFieldServiceReviewUrl,
  getSchedulingCompareUrl,
  getSchedulingReviewUrl,
} from "@/lib/routes";

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
    q: "What is real-time scheduling?",
    a: "Real-time scheduling means availability and assignments update live as calendars change—new bookings, cancellations, technician delays, and dispatch moves reflect immediately for CSRs, customers, and field staff. Stale slots that were open five minutes ago do not get sold twice.",
  },
  {
    q: "How is real-time scheduling different from standard online booking?",
    a: "Standard booking syncs on a delay or polls calendars periodically. Real-time systems push updates instantly across booking pages, dispatch boards, and mobile apps—critical when same-day capacity shifts hour by hour.",
  },
  {
    q: "Why does dispatch overlap with real-time scheduling?",
    a: "Dispatch assigns and reassigns work as the day unfolds; scheduling sets bookable capacity. When both run live on one board, CSRs see the same truth as dispatchers—reducing promised windows that operations cannot honor.",
  },
  {
    q: "Do small businesses need real-time scheduling?",
    a: "Low-volume shops with few daily moves may tolerate near-real-time sync. Same-day service, multi-tech field teams, and high appointment churn benefit most from live updates and shared visibility.",
  },
  {
    q: "Which software supports real-time scheduling?",
    a: "Booking tools with strong two-way calendar sync handle light real-time needs. Field service and dispatch platforms add live boards, GPS-aware ETAs, and reassignment. Compare scheduling vs dispatch software when overlap is your main pain.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Live calendar sync", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service booking", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "Dispatch + live board", reviewHref: getFieldServiceReviewUrl("jobber") },
];

const PAGE_HREF = "/scheduling/guides/real-time-scheduling-explained";

export default function RealTimeSchedulingExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Real-time scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Real-Time Scheduling Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Live availability, instant calendar updates, and how scheduling overlaps with dispatch when the day
                    rarely stays on plan.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Real-time scheduling keeps bookable capacity aligned with what is actually happening now—not what the
                      morning spreadsheet assumed. When a technician runs long, a walk-in fills a gap, or a customer
                      cancels, open slots and assigned jobs update across booking pages, dispatch boards, and mobile apps
                      without a manual refresh cycle.
                    </p>
                    <p>
                      The pain real-time scheduling solves is trust: CSRs promise windows customers believe, dispatchers
                      reassign work without orphaning calendar blocks, and self-serve booking pages stop selling times that
                      closed minutes ago. Businesses with same-day demand, floating crews, or multiple booking channels feel
                      this first; static weekly grids hide the problem until double-bookings surface.
                    </p>
                    <p>
                      Scheduling and dispatch overlap here. Scheduling decides what capacity exists; dispatch assigns who
                      executes work as conditions change. Read{" "}
                      <Link href="/scheduling/guides/dispatching-vs-scheduling-explained" className={linkGreen}>
                        dispatching vs scheduling explained
                      </Link>{" "}
                      for the conceptual split, and{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>{" "}
                      for triage and on-call patterns when urgency drives the board.
                    </p>
                    <p>
                      Evaluate tools on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Field teams
                      should also review{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-dispatch-software" className={linkGreen}>
                        scheduling software vs dispatch software
                      </Link>{" "}
                      when live reassignment matters more than public booking links.
                    </p>
                  </div>
                </section>
                <section id="live-availability" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Instant sync across channels.">Live Availability and Calendar Sync</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Real-time availability starts with authoritative calendars. Two-way sync with Google, Outlook, or
                      native staff calendars means a block created anywhere—CSR desk, technician phone, walk-in—removes the
                      slot from public booking immediately. Weak sync is the most common cause of &ldquo;ghost&rdquo; openings.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Push vs poll</strong> — push notifications update faster
                          than periodic polling; ask vendors about sync latency under load.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Buffers and travel</strong> — real-time must account for
                          drive time and job overrun, not only clock slots on a grid.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Multi-channel holds</strong> — phone, web, and walk-in
                          bookings should reserve capacity in one system of record.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Appointment-first teams can start with strong booking sync—{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>—before adding
                      dispatch boards. Read{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software explained
                      </Link>{" "}
                      for the customer-facing layer.
                    </p>
                  </div>
                </section>
                <section id="dispatch-overlap" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One board for CSRs and dispatchers.">
                    Where Scheduling Meets Dispatch
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatch overlap appears when the same people and trucks appear on both a booking calendar and a live
                      assignment board. Without integration, CSRs sell slots dispatch cannot fill; dispatchers move jobs
                      customers were never told about. Real-time scheduling collapses those views—or syncs them fast enough
                      that operational drift stays minutes, not hours.
                    </p>
                    <p>
                      Field service platforms treat the dispatch board as the live source of truth: job status, en-route
                      ETAs, and reassignment when a unit breaks down. Scheduling rules feed capacity into that board; booking
                      pages read back what dispatch still has room to accept. See{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-helps-field-service-businesses" className={linkGreen}>
                        how scheduling software helps field service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-technician-scheduling-works" className={linkGreen}>
                        how technician scheduling works
                      </Link>{" "}
                      for the field loop.
                    </p>
                    <p>
                      Products like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>Jobber</Link> blend booking
                      intake with dispatch-friendly calendars; pure link tools may need a separate FSM layer as volume
                      grows. Compare boundaries on{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="same-day" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Urgency, triage, and sliding windows.">
                    Real-Time Scheduling for Same-Day and Emergency Work
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Same-day scheduling is a stress test for real-time systems. Customers want honest arrival windows;
                      technicians need routes that flex when Job A runs long. Real-time tools surface on-call tags,
                      remaining drive-time capacity, and whether a new emergency should bump a routine maintenance visit.
                    </p>
                    <p>
                      Not every urgent request belongs on a public booking page. Triage—severity, safety, membership
                      status—often precedes the calendar. Pair operational guides:{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>{" "}
                      for policy, and{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        FSM dispatch and capacity planning
                      </Link>{" "}
                      when job records and parts—not only slots—move with the day.
                    </p>
                    <p>
                      Route-aware real-time scheduling also ties to{" "}
                      <Link href="/scheduling/guides/how-route-scheduling-works" className={linkGreen}>
                        how route scheduling works
                      </Link>{" "}
                      when geography determines whether a same-day promise is realistic.
                    </p>
                  </div>
                </section>
                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Latency, visibility, and failure modes.">
                    Evaluating Real-Time Scheduling Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Test with concurrent users: book on the web while a CSR moves the same technician on the desk
                      calendar. Measure how long until each view matches. Ask what happens offline on mobile—queued
                      punches and job notes should reconcile without silent overbooking.
                    </p>
                    <p>
                      Role-based views matter. CSRs need promise-safe capacity; dispatchers need drag-and-drop
                      reassignment; technicians need the next job without seeing the whole company calendar. Real-time
                      fails when everyone stares at different snapshots.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      for baseline requirements, then compare dispatch-capable options on{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity
                      </Link>{" "}
                      for booking-led shops or FSM reviews when dispatch owns the day.
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
    title: "Real-Time Scheduling Explained | BeltStack Guide",
    description:
      "Learn how real-time scheduling keeps live availability accurate across booking pages and dispatch boards—and how it supports same-day and emergency service workflows.",
    keywords: [
      "real-time scheduling",
      "live appointment scheduling",
      "real-time calendar sync",
      "dispatch scheduling software",
      "same-day scheduling",
      "live availability booking",
      "dynamic scheduling software",
    ],
  };
}
