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
    q: "What is scheduling in plain terms?",
    a: "Scheduling is deciding when something happens and putting it on a calendar with agreed rules—availability, duration, buffers, and confirmations. In software, it often means letting a customer or colleague pick a slot without manual back-and-forth email.",
  },
  {
    q: "What is dispatching in plain terms?",
    a: "Dispatching is assigning work to the right person or crew and coordinating execution—who goes where, in what order, with what skills and parts. It assumes the job exists; the hard problem is operational assignment, not finding an open meeting time.",
  },
  {
    q: "Can one person do both scheduling and dispatch?",
    a: "In very small shops, yes—the owner books the call and drives the van. Software categories still differ: booking tools optimize slot selection; dispatch boards optimize crew load. As volume grows, those workflows split across roles and systems.",
  },
  {
    q: "Is dispatch the same as field service management?",
    a: "Dispatch is a core FSM workflow, but FSM also includes estimates, work orders, parts, and invoicing. You can talk about dispatch without buying full FSM only when assignment is your sole pain—which is rare once jobs generate revenue records.",
  },
  {
    q: "Which guide compares scheduling and dispatch products?",
    a: "Read scheduling software vs dispatch software for vendor-level boundaries, and scheduling software vs field service software when job-to-cash workflows enter the evaluation.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Service booking", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "Dispatch + FSM", reviewHref: getFieldServiceReviewUrl("jobber") },
];

const PAGE_HREF = "/scheduling/guides/dispatching-vs-scheduling-explained";

export default function DispatchingVsSchedulingExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Dispatching vs scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Dispatching vs Scheduling Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Practical definitions of scheduling and dispatching for small business buyers—what each term means
                    in operations, not just on a vendor feature list.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Vendors use &ldquo;scheduling&rdquo; and &ldquo;dispatch&rdquo; interchangeably in demos, which
                      makes shortlists noisy. In operations language, scheduling answers when something happens;
                      dispatching answers who executes it and how work flows across people, vehicles, and time. Both
                      show up as blocks on a calendar—but the decisions behind those blocks differ.
                    </p>
                    <p>
                      A salon schedules client color appointments; a HVAC company schedules inbound service calls and
                      dispatches technicians by zone. The salon&apos;s bottleneck is slot selection and no-shows. The HVAC
                      shop&apos;s bottleneck is assigning the right tech with parts on the truck between six other
                      stops. Same word on the invoice, different software category.
                    </p>
                    <p>
                      For product-level comparisons after these definitions, read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-dispatch-software" className={linkGreen}>
                        scheduling software vs dispatch software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      . For automated booking rules, see{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      .
                    </p>
                    <p>
                      Explore tools on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>, and{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup. When jobs—not meetings—drive revenue, pair this page with{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      and reviews such as{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="scheduling-defined" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="When, how long, and under what rules.">What Scheduling Means in Practice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling commits a time: Tuesday at 2 p.m., 90 minutes, with a 15-minute buffer before the next
                      client. Software enforces who may book, how far in advance, time zones, and reminders. The output
                      is a confirmed appointment on a calendar—often created by the customer through a public link.
                    </p>
                    <p>
                      Common scheduling workflows include sales discovery calls, clinic visits, tutoring sessions, and
                      salon bookings. Read{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      to separate customer appointments from internal shift grids. Compare{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity
                      </Link>{" "}
                      when evaluating dedicated booking tools.
                    </p>
                  </div>
                </section>
                <section id="dispatch-defined" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Who, where, and in what sequence.">What Dispatching Means in Practice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatching assigns executable work: Job #4821 goes to Alex because she has the certification, the
                      part on the truck, and the shortest drive from her current stop. CSRs may schedule the customer
                      window first; dispatchers then fit the job into crew capacity and rebalance when emergencies
                      arrive.
                    </p>
                    <p>
                      Dispatch boards, technician mobile apps, and status updates live in field service software—not in
                      meeting-booking tools. Our{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatching software guide
                      </Link>{" "}
                      covers boards, same-day capacity, and handoff to the field. For technician calendars specifically,
                      see{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="how-they-connect" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="From booked slot to assigned job.">How Scheduling and Dispatch Connect</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In many service businesses, scheduling creates the promise—&ldquo;We will be there between 1 and
                      3&rdquo;—and dispatch fulfills it—&ldquo;Maria is en route with the water heater.&rdquo; A booking
                      page may stop at the promise; dispatch software carries the job through completion, parts, and
                      invoice.
                    </p>
                    <p>
                      Small teams collapse both roles into one person; software categories do not collapse as cleanly.
                      Document where the handoff happens: does online booking create a dispatch-ready job, or only a
                      calendar hold? Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-dispatch-software" className={linkGreen}>
                        scheduling software vs dispatch software
                      </Link>{" "}
                      for vendor boundaries and{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-helps-field-service-businesses" className={linkGreen}>
                        how scheduling software helps field service businesses
                      </Link>{" "}
                      when you are scheduling-first today but dispatch-heavy tomorrow.
                    </p>
                  </div>
                </section>
                <section id="when-you-need-each" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Match language to your bottleneck.">When You Need Scheduling, Dispatch, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose scheduling-first when the pain is finding mutually open time, reducing no-shows, and
                      letting customers self-serve. Choose dispatch-first when the pain is crew utilization, emergency
                      insertions, skill matching, and route sequencing across a map.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for booking shortlists and browse{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>all scheduling guides</Link>. When terminology
                      in sales calls still blurs, return to this page, then escalate to{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs FSM
                      </Link>{" "}
                      if job billing and work orders enter the conversation.
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
    title: "Dispatching vs Scheduling Explained | BeltStack Guide",
    description:
      "Practical definitions of scheduling and dispatching for small businesses—what each term means in daily operations and when you need booking tools, dispatch boards, or both.",
    keywords: [
      "dispatching vs scheduling",
      "what is dispatching",
      "scheduling vs dispatch explained",
      "field service dispatch definition",
      "appointment scheduling definition",
      "scheduling and dispatch difference",
    ],
  };
}
