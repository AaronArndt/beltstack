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
    q: "How do appointment reminders work in scheduling software?",
    a: "After a booking is confirmed, the platform schedules one or more messages—email, SMS, or both—at intervals you define. Messages pull date, time, location, and staff from the event record and include links to reschedule or cancel within policy.",
  },
  {
    q: "What is the best reminder timing?",
    a: "A common pattern is immediate confirmation, a reminder about 24 hours before, and a second reminder 2–4 hours before for high no-show risk. Same-day service may add a morning-of SMS; tune timing against your industry’s forgetfulness rate.",
  },
  {
    q: "Are SMS reminders worth paying for?",
    a: "For high-value or mobile appointments—medical, legal, home service—SMS often beats email because it is read quickly. Model cost per message against revenue lost per no-show; many tools bundle limited SMS credits on paid tiers.",
  },
  {
    q: "Can reminders fix a broken booking flow?",
    a: "No. Wrong service, timezone, or address in the booking record means reminders only confirm confusion. Fix intake, buffers, and timezone display first—then automate reminders on top.",
  },
  {
    q: "How do reminders relate to automated scheduling?",
    a: "Reminders are one output of automation rules that also handle availability, assignment, and calendar sync. The same booking event triggers confirmations and follow-ups without manual copy-paste from a coordinator.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Custom reminder flows", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "SMS reminders", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Workflow emails", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/how-appointment-reminders-work";

export default function HowAppointmentRemindersWorkPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Appointment reminders</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Appointment Reminders Work
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Confirmations, timed email and SMS, reschedule links, and policies that cut no-shows—how scheduling
                    platforms automate customer communication after someone books.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Appointment reminders are automated messages tied to a confirmed booking record. When a customer
                      completes your booking flow, the scheduling system creates an event with date, time, time zone,
                      location or video link, and assigned staff. That record becomes the single source of truth for every
                      confirmation and follow-up message—no separate spreadsheet of who to text tonight.
                    </p>
                    <p>
                      Most platforms send an immediate confirmation with calendar invite attachments, then queue
                      additional reminders at offsets you configure. If the customer reschedules or cancels through a
                      self-serve link, the reminder queue updates automatically so you do not notify them about a slot
                      they already released.
                    </p>
                    <p>
                      Reminders reduce no-shows but rarely fix a broken booking experience on their own. For tactics
                      that combine timing, channel, deposits, and policy, read{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      . For where reminders sit inside broader booking automation, see{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      .
                    </p>
                    <p>
                      Compare reminder features on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and reviews such as{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      when SMS and custom templates matter.
                    </p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="From booking event to sent messages.">
                    The Reminder Workflow After Booking
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The lifecycle is event-driven. Booking confirmed triggers confirmation email and optional staff
                      notification. The scheduler registers future sends relative to appointment start—e.g. 24 hours and
                      2 hours before. Cancellations remove pending sends; reschedules shift them to new timestamps.
                    </p>
                    <p>
                      Team bookings inherit the assigned staff member&apos;s details in the template so customers know
                      who to expect. Multi-location businesses should verify the correct address and instructions merge
                      from intake forms—see{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      for reminder-related checklist items.
                    </p>
                  </div>
                </section>
                <section id="channels" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Email, SMS, and what customers actually read.">
                    Channels, Timing, and Content
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Email is included on most plans and works well for professional services with calendar-heavy
                      clients. SMS costs extra per message but often wins for same-day risk and home visits where customers
                      are not watching inbox threads. Some vendors support branded sender IDs or two-way SMS on higher
                      tiers—confirm before you promise chat-style support.
                    </p>
                    <p>
                      Effective copy is short: what, when, where, how to prepare, and one clear action (confirm,
                      reschedule, or call). Include time zone explicitly for remote clients. Service businesses with
                      travel buffers should align reminder times with realistic arrival windows—not only the nominal
                      slot start.
                    </p>
                  </div>
                </section>
                <section id="self-serve" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Let customers fix the calendar without calling.">
                    Reschedule, Cancel, and Policy Links
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Self-serve links in reminders reduce inbound calls and ghosting. Policies define how late someone
                      may move without penalty, whether waitlists backfill freed slots, and if deposits forfeit on late
                      cancel. The booking system enforces those rules at click time instead of leaving front desk staff
                      to negotiate exceptions in email.
                    </p>
                    <p>
                      Pair links with minimum notice and optional card holds for high no-show services—details in{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      . For same-day chaos, see{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="automation-fit" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Reminders inside rules-based booking.">
                    Reminders as Part of Scheduling Automation
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reminders are not a separate product—they are outputs of the same automation that enforces
                      availability, round-robin, and calendar sync. When a CRM or payment workflow creates a booking via
                      integration, reminders should fire with the same templates as self-serve bookings so customers get
                      a consistent experience.
                    </p>
                    <p>
                      Map your full communication path in demos: confirmation, reminders, staff alerts, and post-visit
                      follow-ups. Read{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>{" "}
                      for triggers beyond the public booking page, and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      to score vendors on the reminder workflows you will actually run.
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
              <GuideSidebar title="Reminder-friendly tools" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Appointment Reminders Work | BeltStack Guide",
    description:
      "Learn how scheduling software sends confirmations and timed email or SMS reminders, plus reschedule links and policies that reduce no-shows.",
    keywords: [
      "appointment reminders",
      "scheduling reminders",
      "SMS appointment reminders",
      "appointment confirmation email",
      "automated appointment reminders",
      "reduce no-shows reminders",
    ],
  };
}
