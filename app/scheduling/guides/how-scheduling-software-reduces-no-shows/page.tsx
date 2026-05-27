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
    q: "How much can scheduling software reduce no-shows?",
    a: "Results vary by industry, but automated reminders, easy reschedule links, and deposits commonly cut no-show rates by double-digit percentages. The biggest gains come from combining timing, channel, and policy—not from a single reminder email.",
  },
  {
    q: "Are SMS reminders worth the cost?",
    a: "For high-value appointments—medical, legal, home service—SMS often outperforms email because it is read quickly. Model cost per booked appointment against the revenue you lose per no-show. Many tools include limited SMS credits on paid tiers.",
  },
  {
    q: "Should I require a deposit to reduce no-shows?",
    a: "Deposits and card holds signal commitment and filter casual bookings. They can reduce volume for low-ticket services, so test on your highest-no-show appointment types first. Pair deposits with clear cancellation windows in the booking flow.",
  },
  {
    q: "What reminder timing works best?",
    a: "A common pattern is confirmation immediately, reminder 24 hours before, and a second reminder 2–4 hours before for same-day risk. Service businesses with travel time may add an “on the way” message from dispatch or FSM tools.",
  },
  {
    q: "Can reminders fix a broken booking experience?",
    a: "No. If customers book the wrong service, wrong timezone, or unclear location, reminders only confirm confusion. Fix intake forms, buffers, and timezone display first—see common scheduling problems businesses face for diagnosis.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Policies & deposits", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "SMS reminders", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Workflow reminders", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-reduces-no-shows";

export default function HowSchedulingSoftwareReducesNoShowsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Reduce no-shows</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Reduces No-Shows
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Reminders, confirmations, deposits, and reschedule flows that protect revenue—without adding
                    manual follow-up for every appointment on the calendar.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A no-show is lost capacity you cannot sell twice: the slot sat empty, prep work was wasted, and
                      the next customer may have been turned away. Scheduling software attacks the problem with
                      automation—confirmations when someone books, timed reminders before the visit, and one-click
                      reschedule instead of ghosting.
                    </p>
                    <p>
                      The best results combine communication with policy. A friendly SMS helps, but a clear
                      cancellation window plus an optional deposit changes behavior before the reminder fires.
                      Salons, clinics, consultants, and home service shops all benefit, though the right mix of
                      channels differs.
                    </p>
                    <p>
                      This guide focuses on customer appointments. Internal shift no-shows are a workforce problem—see{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>
                      . For service businesses with trucks and jobs, pair these tactics with{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      and, when dispatch owns the day,{" "}
                      <Link href="/field-service/guides/how-businesses-reduce-missed-appointments" className={linkGreen}>
                        how businesses reduce missed appointments
                      </Link>{" "}
                      on the field service side.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling hub
                      </Link>
                      ,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        scheduling features checklist
                      </Link>{" "}
                      to shortlist tools with strong notification and payment options.
                    </p>
                  </div>
                </section>
                <section id="reminders" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Email, SMS, and timing.">Automated Reminders and Confirmations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every booking should trigger an immediate confirmation with date, time, timezone, location or
                      video link, and what to bring. Scheduled reminders should mirror how your customers actually
                      plan—professionals often need 24-hour notice; same-day services may need a morning-of nudge.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      for policy-heavy flows,{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>
                        Setmore
                      </Link>{" "}
                      for service-business SMS, and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>
                        Calendly
                      </Link>{" "}
                      for workflow-style reminder chains. Head-to-head:{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity Scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="policy" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Deposits, buffers, waitlists.">Policies That Change Behavior</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Deposits and card-on-file policies reduce casual bookings. Cancellation fees work when they are
                      visible at checkout—not buried in a PDF. Buffer time between appointments lowers overrun that
                      causes the next customer to abandon.
                    </p>
                    <p>
                      Waitlists recover revenue when someone cancels: the next client gets an auto-offer instead of an
                      empty chair. For unpredictable days, combine policy with{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day scheduling
                      </Link>{" "}
                      practices so CSRs do not over-promise windows.
                    </p>
                  </div>
                </section>
                <section id="measure" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Track, test, iterate.">Measure No-Shows and Improve the Flow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export no-show rates by appointment type, staff member, and booking source. If online bookings
                      no-show more than phone bookings, tighten intake questions or require deposits for that channel
                      only. If one stylist’s column is always high, training may beat software.
                    </p>
                    <p>
                      When no-shows stem from calendar chaos—double bookings, wrong timezone, or team routing gaps—fix
                      operations first with{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>
                      . For vendor selection, read{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      and browse{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>
                        scheduling comparisons
                      </Link>
                      .
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
    title: "How Scheduling Software Reduces No-Shows | BeltStack Guide",
    description:
      "Learn how automated reminders, SMS, deposits, cancellation policies, and waitlists in scheduling software reduce appointment no-shows.",
    keywords: [
      "reduce appointment no-shows",
      "scheduling software reminders",
      "SMS appointment reminders",
      "booking deposit no-show",
      "appointment confirmation email",
      "scheduling cancellation policy",
    ],
  };
}
