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
    q: "How do businesses set up recurring appointments?",
    a: "They define frequency (weekly, biweekly, monthly), duration, assigned staff or resource, and end date or visit count. Good scheduling software generates future occurrences automatically, syncs each to calendars, and sends per-visit reminders—not just the first booking confirmation.",
  },
  {
    q: "What is the difference between recurring appointments and packages?",
    a: "Recurring appointments repeat on a calendar cadence—every Tuesday at 10 a.m. Packages sell a bundle of visits the client books over time. Many salons and clinics combine both: a monthly membership with auto-generated slots plus a prepaid package balance tracked in the same account.",
  },
  {
    q: "Can clients book their own recurring series?",
    a: "Some tools let customers pick “repeat weekly” on the public page; others require staff to set the series after intake. Self-serve recurrence works for predictable services (standing coaching calls); staff-led setup fits medical, legal, or complex service menus with approval steps.",
  },
  {
    q: "How do recurring appointments differ from field service maintenance routes?",
    a: "Appointment scheduling handles client-facing time slots, reminders, and staff calendars. Field service platforms add work orders, parts, truck routing, and contract billing for dispatched crews. For maintenance vans and job sites, read how businesses handle recurring service appointments in field service.",
  },
  {
    q: "What happens when one visit in a series needs to move?",
    a: "Edit a single occurrence without breaking the whole series—reschedule one Tuesday, keep the rest. Systems should detach exceptions from the master rule so reminders and payments follow the moved slot. Avoid deleting the series and rebuilding manually; that loses history and upsell context.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Packages & series", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Recurring clients", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybookme.jpeg", rating: "4.4", bestFor: "Memberships", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/how-businesses-handle-recurring-appointments";

export default function HowBusinessesHandleRecurringAppointmentsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Recurring Appointments</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Handle Recurring Appointments
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Standing client visits, memberships, and repeat series—how scheduling software generates occurrences,
                    handles exceptions, and stays separate from field service maintenance routes.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring appointments are the backbone of predictable revenue for coaches, therapists, tutors,
                      fitness studios, and standing salon clients. Instead of rebooking every cycle manually, businesses
                      define a repeat rule—weekly, biweekly, monthly—and let software spawn future slots with the same
                      duration, provider, and intake data attached.
                    </p>
                    <p>
                      Done well, recurrence removes admin drag and cuts no-shows because each visit inherits reminders.
                      Done poorly, one moved Tuesday breaks the whole series, billing drifts from attendance, and staff
                      rebuild appointments from email every month. The difference is configuration plus exception
                      handling, not a fancier calendar.
                    </p>
                    <p>
                      Dispatched maintenance and truck routes belong in field service, not basic booking. Compare{" "}
                      <Link href="/field-service/guides/how-businesses-handle-recurring-service-appointments" className={linkGreen}>
                        how businesses handle recurring service appointments
                      </Link>{" "}
                      when work orders, parts, and fleet routing drive the repeat schedule. For inbound client time, stay
                      in scheduling-first tools covered here.
                    </p>
                    <p>
                      Shortlist vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Service-heavy
                      workflows are detailed in{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="define-series" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Rules before automation.">Define the Recurrence Rule</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with four decisions: frequency, duration, assigned staff or room, and end condition (date,
                      visit count, or ongoing until cancelled). Attach the right service type so buffers and forms follow
                      every occurrence—not only the first booking.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Frequency</strong> — weekly standing calls vs monthly
                          maintenance-style check-ins.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Provider lock-in</strong> — same stylist or any qualified
                          staff when continuity matters.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">End condition</strong> — school term, 12-pack, or cancel
                          notice in the agreement.
                        </span>
                      </li>
                    </ul>
                    <p>
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      is strong for packages and recurring series with intake forms.{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> fit
                      membership-style shops that combine repeat visits with client accounts.
                    </p>
                  </div>
                </section>
                <section id="reminders-and-payments" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Each visit deserves the same rigor as the first.">Reminders, Payments, and Policies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Repeat clients still no-show. Configure SMS or email reminders per upcoming occurrence, not only on
                      series creation. Tie cancellation windows to your policy—late cancels on standing appointments
                      should charge or forfeit credits the same way as one-offs.
                    </p>
                    <p>
                      Prepaid packages and memberships need ledger discipline: decrement a visit balance when the
                      appointment completes, not when it is booked. Pair recurrence with deposits or card on file for
                      high-demand providers. Public booking mechanics are covered in{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software explained
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="exceptions" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One-off changes without breaking the series.">Handle Exceptions and Holidays</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Real life interrupts series: vacations, clinic closures, provider illness. Reschedule single
                      occurrences, skip blackouts on the business calendar, and keep audit history on the client profile.
                      Avoid deleting and recreating the series—that loses notes and upsell context for the next visit.
                    </p>
                    <p>
                      Multi-staff recurrence needs team rules from{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      . When conflicts spike, see{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-businesses-reduce-scheduling-conflicts" className={linkGreen}>
                        how businesses reduce scheduling conflicts
                      </Link>
                      .{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> works for
                      simple repeat meetings; service menus with packages often need Acuity or SimplyBook.me depth.
                    </p>
                  </div>
                </section>
                <section id="when-to-upgrade" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Appointment repeat vs dispatched routes.">When to Move Beyond Appointment Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Upgrade when recurrence includes truck rolls, variable job scope per visit, parts consumption, and
                      contract billing tied to SLAs—not just “same time every month.” Those workflows need work orders and
                      dispatch, documented in field service guides, not a longer Calendly recurrence chain.
                    </p>
                    <p>
                      Until then, compare on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>, browse{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> picks, and read{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> when
                      team-based recurrence and custom booking flows matter.
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
    title: "How Businesses Handle Recurring Appointments | BeltStack Guide",
    description:
      "Learn how businesses handle recurring appointments with repeat rules, per-visit reminders, packages, exceptions, and when field service tools replace scheduling software.",
    keywords: [
      "recurring appointments",
      "repeat booking software",
      "appointment series scheduling",
      "membership scheduling",
      "recurring client visits",
      "scheduling packages",
      "standing appointments",
    ],
  };
}
