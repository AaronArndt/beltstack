import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import {
  getFieldServiceCompareUrl,
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
    q: "Can scheduling software replace dispatch software?",
    a: "For simple inbound booking—one tech, predictable slots—sometimes. Once you assign jobs by skill, territory, parts, and drive time across a crew, dispatch boards in field service software usually replace booking-only tools. Scheduling places the appointment; dispatch decides who goes and in what order.",
  },
  {
    q: "Does dispatch software include customer booking?",
    a: "Many FSM products include online booking or CSR scheduling. The depth varies: some match Calendly-style UX; others are CSR-first with lighter self-serve pages. Test your actual intake channel, not a demo checkbox.",
  },
  {
    q: "What is the fastest way to choose between them?",
    a: "Ask whether your bottleneck is customers picking a time slot, or operations assigning the right technician to the right job. Slot booking points to scheduling-first tools; crew assignment and route sequencing point to dispatch and FSM.",
  },
  {
    q: "Can I run Calendly and dispatch software together?",
    a: "Yes, with clear rules. Example: Calendly for sales discovery, FSM dispatch for service jobs—different calendars or explicit ownership. Never let two systems write the same technician slot without conflict resolution.",
  },
  {
    q: "Where do I learn how dispatch boards work?",
    a: "Start with how dispatching software works in our field service guides, then read dispatching vs scheduling explained for practical definitions of each term.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Inbound booking", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "FSM + dispatch", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service dispatch", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
];

const PAGE_HREF = "/scheduling/guides/scheduling-software-vs-dispatch-software";

export default function SchedulingSoftwareVsDispatchSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling vs dispatch software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Software vs Dispatch Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Booking a time slot versus assigning jobs to crews—where appointment schedulers stop and dispatch
                    boards in field service software begin.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Both scheduling and dispatch software live on calendars, which confuses buyers evaluating Calendly
                      demos alongside Jobber or Housecall Pro. Scheduling software optimizes how external people book
                      time—public links, buffers, reminders, intake forms. Dispatch software optimizes how your
                      organization assigns work to mobile crews—skills, territories, capacity, and often parts and
                      invoicing tied to each job.
                    </p>
                    <p>
                      Overlap exists: many field service platforms include customer booking. The primary buyer problem
                      still differs. If your pain is no-shows on discovery calls, start on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>. If your pain is CSRs
                      juggling eight techs across a map, start with{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      .
                    </p>
                    <p>
                      For practical definitions of the terms—not just product categories—read{" "}
                      <Link href="/scheduling/guides/dispatching-vs-scheduling-explained" className={linkGreen}>
                        dispatching vs scheduling explained
                      </Link>
                      . For automated booking rules, see{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      ; for customer appointments versus employee shifts, see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>
                      .
                    </p>
                    <p>
                      Compare appointment tools on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link> and{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>
                      . When dispatch depth matters, read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      and reviews such as{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>Jobber</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>.
                    </p>
                  </div>
                </section>
                <section id="scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Slots, rules, and self-serve booking.">What Scheduling Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling tools excel at placing confirmed appointments when someone—customer or colleague—picks
                      a time. Availability windows, minimum notice, round-robin across reps, payment at booking, and
                      SMS reminders are core strengths. They assume the hard problem is finding a mutually open slot, not
                      sequencing six jobs across three vans.
                    </p>
                    <p>
                      Explore{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity Scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>{" "}
                      when inbound booking is the evaluation. Service businesses with lighter dispatch needs may pair
                      booking with{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      workflows before graduating to FSM.
                    </p>
                  </div>
                </section>
                <section id="dispatch" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Crew assignment, boards, and job context.">What Dispatch Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatch software—usually embedded in field service management—assigns jobs to technicians with
                      the right skills, territories, and capacity. CSRs and dispatchers drag jobs on a board, rebalance
                      when emergencies arrive, and tie each stop to estimates, parts, and invoices. Route sequencing and
                      same-day capacity are dispatch problems, not Calendly problems.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>{" "}
                      guide walks through boards, real-time updates, and handoff to mobile apps. Compare FSM vendors on
                      the{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link>, including{" "}
                      <Link href={getFieldServiceCompareUrl("jobber-vs-housecall-pro")} className={linkGreen}>
                        Jobber vs Housecall Pro
                      </Link>{" "}
                      when home service dispatch is the shortlist.
                    </p>
                  </div>
                </section>
                <section id="boundary" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Where booking ends and operations begin.">The Boundary Between Booking and Dispatch</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A customer booking page can create a job record—or only a calendar hold. Dispatch begins when
                      someone decides which technician owns the visit, whether parts are on the truck, and how the stop
                      fits between others on the route. Scheduling software rarely owns that operational layer; FSM does.
                    </p>
                    <p>
                      Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      for the full category boundary. Route-heavy teams should also see{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="choose" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One sentence routes the shortlist.">How to Choose for Your Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Write one sentence: is our bottleneck customers cannot book a slot, or dispatch cannot assign
                      profitable work across a crew? Slot booking points to schedulers on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>; crew assignment
                      points to dispatch and FSM.
                    </p>
                    <p>
                      Hybrid stacks work when boundaries are explicit. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for booking checklists, then browse all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> and{" "}
                      <Link href="/scheduling/guides/dispatching-vs-scheduling-explained" className={linkGreen}>
                        dispatching vs scheduling explained
                      </Link>{" "}
                      when terminology still feels fuzzy in vendor demos.
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
    title: "Scheduling Software vs Dispatch Software | BeltStack Guide",
    description:
      "Learn the difference between customer booking/scheduling tools and dispatch software for assigning field crews, jobs, and routes—and when to use each or both.",
    keywords: [
      "scheduling software vs dispatch software",
      "dispatch vs appointment scheduling",
      "field service dispatch software",
      "Calendly vs Jobber",
      "booking software vs dispatch board",
      "FSM scheduling vs booking",
    ],
  };
}
