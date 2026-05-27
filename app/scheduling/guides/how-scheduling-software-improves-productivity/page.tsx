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
    q: "How does scheduling software improve productivity?",
    a: "It removes coordination loops—email ping-pong, manual calendar entry, and rework from double booking. Staff spend less time scheduling and more time on billable work; customers book faster with fewer errors.",
  },
  {
    q: "What productivity gains are realistic for small businesses?",
    a: "Many teams reclaim several hours per week of coordinator time and cut no-shows with automated reminders. Exact gains depend on booking volume; track hours spent scheduling before and after for a honest baseline.",
  },
  {
    q: "Does scheduling software help revenue or only save time?",
    a: "Both. Faster booking captures leads while intent is high; fewer no-shows and double bookings protect revenue. Deposit and payment-at-booking features reduce last-minute cancellations for service businesses.",
  },
  {
    q: "Can spreadsheets ever match scheduling software productivity?",
    a: "Only at very low volume with one editor. Once multiple people book or swap shifts, spreadsheet friction and errors consume more time than a modest subscription—see spreadsheet vs scheduling software.",
  },
  {
    q: "Which scheduling tools deliver the fastest productivity wins?",
    a: "Teams needing simple links often win quickly with Calendly; multi-staff service shops with forms lean Acuity or Setmore; fair team distribution needs YouCanBook.me routing. Compare on scheduling compare for your workflow.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Fast booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & payments", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team productivity", reviewHref: getSchedulingReviewUrl("youcanbookme") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-improves-productivity";

export default function HowSchedulingSoftwareImprovesProductivityPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling productivity</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Improves Productivity
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Where time actually goes in manual scheduling, how software recovers billable hours, and how to
                    measure ROI without vague “efficiency” claims.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling productivity is not about fancier calendars—it is about removing repetitive coordination.
                      Every “does Tuesday at 2 work?” thread, manual copy into Outlook, and apology for a double-booked
                      technician is labor that never shows up on a P&amp;L but caps how much work your team can accept.
                    </p>
                    <p>
                      Scheduling software attacks that hidden work: customers self-serve into real availability, calendars
                      update automatically, and reminders run without a front desk chasing confirmations. The gain is
                      fewer errors and more capacity for revenue work—not just a cleaner UI.
                    </p>
                    <p>
                      Problems that drain productivity—double booking, timezone mistakes, tool sprawl—are mapped in{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>
                      . For what platforms do under the hood, see{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      .
                    </p>
                    <p>
                      Evaluate tools on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>scheduling comparisons</Link>. If you
                      are migrating from Excel, read{" "}
                      <Link href="/scheduling/guides/spreadsheet-vs-scheduling-software" className={linkGreen}>
                        spreadsheet vs scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-businesses-automate-scheduling" className={linkGreen}>
                        how businesses automate scheduling
                      </Link>{" "}
                      for rollout order.
                    </p>
                  </div>
                </section>
                <section id="time-sinks" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Where manual scheduling hides labor.">Time Sinks Manual Scheduling Creates</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Email and chat coordination scale poorly—each appointment can take five to ten messages when
                      time zones, staff choice, and reschedules enter the thread. Managers re-key the same slot into a
                      personal calendar, a group spreadsheet, and sometimes a separate booking link with no sync.
                    </p>
                    <p>
                      Rework is the expensive part: calling a customer to apologize, moving a technician, or eating a
                      no-show slot. Teams that outgrow spreadsheets hit these failures first; the symptoms are listed
                      under outgrow-spreadsheet scheduling in{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems
                      </Link>
                      . Employee-specific grid pain is in{" "}
                      <Link href="/scheduling/guides/can-excel-be-used-for-employee-scheduling" className={linkGreen}>
                        can Excel be used for employee scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="software-levers" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Mechanisms that recover hours.">Productivity Levers Scheduling Software Pulls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Self-serve booking</strong> — customers complete scheduling
                          without staff in the loop; see{" "}
                          <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                            online booking software explained
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Calendar sync</strong> — one write updates every connected
                          calendar, reducing double booking versus{" "}
                          <Link href="/scheduling/guides/scheduling-software-vs-calendar-apps" className={linkGreen}>
                            calendar apps alone
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Automated reminders</strong> — fewer empty slots; detail in{" "}
                          <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                            how scheduling software reduces no-shows
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Team routing</strong> — fair distribution without managers
                          hand-picking every lead; compare{" "}
                          <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>{" "}
                          and{" "}
                          <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> on{" "}
                          <Link href={getSchedulingCompareUrl()} className={linkGreen}>scheduling compare</Link>.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="revenue-impact" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Productivity is not only internal hours.">Revenue and Capacity Effects</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Faster booking captures demand while intent is high—especially for consultants and agencies where
                      delay loses the lead to a competitor. Shorter time-to-appointment also improves utilization: the
                      same headcount serves more booked hours when gaps from no-shows shrink.
                    </p>
                    <p>
                      Service businesses often pair scheduling with deposits or intake forms so technicians arrive
                      prepared—less idle time on site. Read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      when utilization—not just meeting volume—is the metric you care about.
                    </p>
                    <p>
                      Dispatch-heavy teams may need field service software for job productivity; booking tools alone will
                      not optimize trucks and parts. See{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before expecting FSM-level gains from a Calendly-style product.
                    </p>
                  </div>
                </section>
                <section id="measure-roi" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Prove value with a simple baseline.">How to Measure Scheduling ROI</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before switching tools, log one week: coordinator hours on scheduling, count of reschedule threads,
                      no-show rate, and revenue lost to double-booked or missed slots. After rollout, track the same
                      metrics—productivity claims should move those numbers, not just sentiment.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      to align features with the metric you need most (time saved vs no-shows vs team fairness). Read{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> when forms and
                      payments drive both productivity and cash collection.
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
    title: "How Scheduling Software Improves Productivity | BeltStack Guide",
    description:
      "How scheduling software saves coordinator time, reduces no-shows and double booking, and improves revenue capacity—with practical ways to measure ROI for small businesses.",
    keywords: [
      "scheduling software productivity",
      "appointment scheduling efficiency",
      "reduce scheduling admin time",
      "scheduling software ROI",
      "automated booking productivity",
      "scheduling time savings",
    ],
  };
}
