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
    q: "What causes most scheduling conflicts in small businesses?",
    a: "Two calendars claiming the same slot—often a personal Google Calendar plus a booking link that does not sync both ways. Staff also book clients manually while customers self-serve online. Until one system owns availability with real-time busy-time checks, conflicts keep appearing.",
  },
  {
    q: "Do buffers between appointments reduce conflicts?",
    a: "Yes. Buffers block back-to-back bookings that run long and spill into the next client. They also give staff travel time between locations. Set buffers per service type: a 15-minute haircut needs less padding than a 90-minute onsite consult with drive time.",
  },
  {
    q: "How do teams avoid double-booking the same employee?",
    a: "Assign each person one scheduling profile tied to their calendars. Disable overlapping event types, use staff-specific booking links, and turn on team routing rules so round-robin does not place two clients on one person at once. See scheduling software for teams for multi-seat setups.",
  },
  {
    q: "Can scheduling software fix shift conflicts too?",
    a: "Customer appointment tools and employee shift tools solve different problems. Shift scheduling handles labor law, coverage, and swap requests; appointment booking handles client-facing slots. Many businesses need both—compare how shift scheduling software works before forcing one product to do both jobs.",
  },
  {
    q: "When should we escalate from scheduling to dispatch software?",
    a: "When conflicts involve trucks, parts, and job duration—not just calendar overlap. If two technicians cannot reach two jobs because routing and work orders live outside your booking tool, evaluate field service platforms. Scheduling-first tools excel at inbound time, not fleet dispatch.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Calendar sync", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team routing", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybookme.jpeg", rating: "4.4", bestFor: "Multi-staff", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/how-businesses-reduce-scheduling-conflicts";

export default function HowBusinessesReduceSchedulingConflictsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Reduce Scheduling Conflicts</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Reduce Scheduling Conflicts
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Practical steps to stop double bookings, overlapping staff, and calendar sprawl—buffers, sync rules,
                    and team routing that keep one source of truth for availability.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling conflicts cost more than an awkward apology. They burn trust when a client arrives and
                      the room is full, waste payroll when a technician drives to a job that was never on the official
                      board, and bury the front desk in damage-control calls. Most conflicts are predictable: two systems
                      think they own the same hour.
                    </p>
                    <p>
                      Fixing conflicts starts with naming your source of truth. If customers book through a link, that
                      link must read every calendar where staff block time—personal Outlook, shared clinic rooms, and
                      PTO. Manual bookings should happen in the same tool, not in a side spreadsheet that never syncs.
                    </p>
                    <p>
                      Symptom lists help before you buy new software. Read{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>{" "}
                      to separate double booking from no-shows and time-zone mistakes. For client-facing shops, pair
                      this guide with{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .
                    </p>
                    <p>
                      Compare tools on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Industry
                      picks live under{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages when you
                      need templates built for your trade.
                    </p>
                  </div>
                </section>
                <section id="single-source-of-truth" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One place where availability lives.">Establish a Single Source of Truth</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pick one system that wins when calendars disagree. For most small businesses that is the scheduling
                      platform with two-way sync to Google, Outlook, or iCloud. Turn off “anyone can invite” chaos on
                      shared mailboxes and train staff to block PTO only through paths the booking engine reads.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Two-way calendar sync</strong> — busy times on personal
                          calendars block public slots automatically.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Central admin view</strong> — managers see all staff
                          bookings without logging into five accounts.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">No shadow bookings</strong> — phone and walk-in appointments
                          get entered in the same tool customers use online.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Products with strong sync include{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>
                      , and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>. Read how{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software
                      </Link>{" "}
                      enforces availability rules on the public page.
                    </p>
                  </div>
                </section>
                <section id="buffers-and-rules" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Padding and limits that prevent overlap.">Use Buffers, Limits, and Booking Rules</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Back-to-back appointments look efficient until the first runs ten minutes long. Buffers after each
                      service absorb overrun and travel between sites. Minimum notice stops same-day surprises when prep
                      work is required. Maximum daily bookings per staff member prevents burnout-driven mistakes.
                    </p>
                    <p>
                      Resource conflicts need resource rules—not just people. If you share one treatment room or bay lift,
                      tie that asset to availability so two stylists cannot book the same chair. Multi-chair salons and
                      clinics should test a week of real bookings after changing buffer settings; small tweaks often
                      eliminate most collisions.
                    </p>
                  </div>
                </section>
                <section id="team-routing" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fair distribution without collisions.">Configure Team Routing Correctly</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Round-robin and collective availability spread demand, but misconfiguration creates conflicts.
                      Assign each service to qualified staff only, cap concurrent jobs per person, and use staff-specific
                      links when clients request a favorite provider. Collective pools work when any licensed person can
                      deliver the service; named links work when reputation and continuity matter.
                    </p>
                    <p>
                      Deeper setup lives in{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      . When conflicts are about who works Saturday—not which client books Tuesday—shift tools matter;
                      see{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>
                      .{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> are
                      common picks when routing and multi-staff rules are non-negotiable.
                    </p>
                  </div>
                </section>
                <section id="monitor-and-fix" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Catch drift before customers do.">Monitor, Audit, and Fix Process Gaps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a weekly fifteen-minute audit: export next week’s appointments, spot overlapping events, and
                      trace each conflict to its cause—manual entry, stale sync, or wrong time zone. Track repeat offenders
                      (always double-booked Tuesdays) and fix rules instead of blaming individuals.
                    </p>
                    <p>
                      When conflicts involve dispatched crews and job sites—not meeting rooms—scheduling alone will not
                      suffice. Compare categories on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> and shortlist from{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      only after you confirm the bottleneck is inbound booking, not fleet dispatch.
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
    title: "How Businesses Reduce Scheduling Conflicts | BeltStack Guide",
    description:
      "Learn how businesses reduce scheduling conflicts with calendar sync, buffers, team routing, and audits—practical steps to stop double bookings and overlapping staff.",
    keywords: [
      "scheduling conflicts",
      "reduce double booking",
      "scheduling software calendar sync",
      "appointment buffers",
      "team scheduling routing",
      "prevent scheduling overlap",
      "small business scheduling",
    ],
  };
}
