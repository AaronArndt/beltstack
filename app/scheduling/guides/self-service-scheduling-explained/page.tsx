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
    q: "What is self-service scheduling?",
    a: "Self-service scheduling lets customers or colleagues book their own appointments through a link, website widget, or portal—choosing from live availability without phone tag or email back-and-forth. Confirmations and reminders usually send automatically once a slot is selected.",
  },
  {
    q: "How is self-service scheduling different from online booking?",
    a: "They overlap heavily. Online booking emphasizes the customer-facing page and payment intake; self-service scheduling is the broader behavior—any workflow where the booker picks the time, including internal team scheduling links. See online booking software explained for the product layer.",
  },
  {
    q: "Do I still need staff to manage self-service scheduling?",
    a: "Yes—for setting availability rules, handling exceptions, reviewing intake answers, and managing cancellations. Self-service removes routine coordination, not oversight. Complex jobs or triage-heavy services often keep a human gate before confirming.",
  },
  {
    q: "What reduces no-shows with self-service booking?",
    a: "Automated reminders, clear cancellation policies, deposits for high-value services, and minimum booking notice. Buffer times between appointments also prevent rushed handoffs that feel unprofessional to the next customer.",
  },
  {
    q: "Can self-service scheduling work for teams?",
    a: "Yes—round-robin, collective availability, and staff-specific services route bookings to the right person automatically. Compare team features on Calendly, Acuity, and YouCanBook.me before assuming every product handles multi-staff routing equally.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Custom booking pages", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/self-service-scheduling-explained";

export default function SelfServiceSchedulingExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Self-service scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Self-Service Scheduling Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How customers and colleagues book their own time through links and widgets—and how self-service fits
                    alongside staff-managed calendars and policies.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Self-service scheduling means the person who needs the appointment picks the slot—not your front desk
                      trading emails to find a mutual time. A shareable link or embedded widget shows live availability;
                      the system confirms the booking, syncs calendars, and often sends reminders without manual follow-up.
                    </p>
                    <p>
                      The model works for external customers booking salon visits, consultations, or tune-ups, and for
                      internal teams scheduling interviews or handoffs. The common thread is delegated choice within rules
                      you define: service duration, buffers, staff routing, minimum notice, and cancellation windows.
                    </p>
                    <p>
                      Product mechanics—booking pages, calendar sync, payments—are covered in{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software explained
                      </Link>
                      , which complements this guide with vendor-focused evaluation criteria. Self-service is the behavior;
                      online booking is often the software layer that enables it.
                    </p>
                    <p>
                      Browse the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      when you are ready to shortlist. For automation behind the scenes, see{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="how-it-works" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="From link click to confirmed calendar event.">
                    How Self-Service Scheduling Works
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A typical flow: the booker opens your page, selects a service or meeting type, sees only open times
                      that respect your rules, optionally completes intake questions or pays a deposit, and receives
                      confirmation. The platform writes the event to your calendar and theirs, blocking double-bookings
                      via two-way sync with Google, Outlook, or iCloud.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Availability rules</strong> — working hours, time zones,
                          lead time, and max bookings per day cap what appears bookable.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Routing</strong> — round-robin or staff-specific links send
                          work to the right person without the customer choosing names manually.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Follow-through</strong> — reminders, reschedule links, and
                          cancellation policies keep the calendar honest after the first click.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Popular starting points include{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>
                      , and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>.
                    </p>
                  </div>
                </section>
                <section id="customer-vs-internal" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="External booking vs team self-scheduling.">
                    Customer Self-Service vs Internal Scheduling Links
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customer self-service optimizes revenue time: fewer phone holds, 24/7 booking, and consistent intake
                      before the visit. Internal self-service—sales round-robin, onboarding calls—optimizes colleague time
                      with the same mechanics but different branding and CRM hooks.
                    </p>
                    <p>
                      Do not confuse either with employee shift scheduling. Hourly staff grids, swap approvals, and labor
                      compliance live in workforce tools; read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      before pointing hourly teams at a public booking link.
                    </p>
                    <p>
                      Service businesses with packages and deposits should read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      for policies that pair well with self-serve intake.
                    </p>
                  </div>
                </section>
                <section id="policies" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Rules that protect your calendar.">
                    Policies That Make Self-Service Sustainable
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Self-service fails when rules are vague. Publish cancellation windows, no-show fees, and what happens
                      if the customer arrives late. Minimum notice prevents same-day chaos unless you intentionally support
                      urgent booking—see{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>{" "}
                      when urgency is part of the offer.
                    </p>
                    <p>
                      Intake forms filter bad-fit bookings before they consume a slot: service area, symptoms, project size,
                      or insurance details for clinics. Acuity-style products excel here; compare form depth on{" "}
                      <Link href={getSchedulingCompareUrl("acuity-scheduling-vs-setmore")} className={linkGreen}>
                        Acuity vs Setmore
                      </Link>{" "}
                      if questionnaires drive your workflow.
                    </p>
                    <p>
                      Reminder strategy matters as much as the booking page. Email is table stakes; SMS costs extra but
                      pays back for high no-show verticals. Read{" "}
                      <Link href="/scheduling/guides/how-appointment-reminders-work" className={linkGreen}>
                        how appointment reminders work
                      </Link>{" "}
                      for timing and channel tradeoffs.
                    </p>
                  </div>
                </section>
                <section id="when-not" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Triage, dispatch, and high-variance jobs.">
                    When Self-Service Is Not Enough
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pure self-service struggles when every job needs scoping—custom quotes, emergency triage, or
                      skill-matched dispatch. You may keep a booking link for standard visits but route everything else
                      through CSRs or a dispatch board. Read{" "}
                      <Link href="/scheduling/guides/dispatching-vs-scheduling-explained" className={linkGreen}>
                        dispatching vs scheduling explained
                      </Link>{" "}
                      when assignment complexity exceeds slot selection.
                    </p>
                    <p>
                      Field-heavy operations often outgrow booking-only tools while keeping a simple self-serve intake for
                      maintenance plans. Evaluate{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before forcing FSM complexity onto a solo consultant—or booking simplicity onto a ten-truck shop.
                    </p>
                    <p>
                      Hybrid models work: self-service for predictable work, staff-assisted scheduling for exceptions.
                      Document which services appear on the public page so sales and support give consistent answers.
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
    title: "Self-Service Scheduling Explained | BeltStack Guide",
    description:
      "Learn how self-service scheduling lets customers and colleagues book their own appointments through links and widgets—and when to pair it with staff-managed dispatch.",
    keywords: [
      "self-service scheduling",
      "self-scheduling appointments",
      "customer self-booking",
      "online appointment self-service",
      "scheduling links",
      "24/7 appointment booking",
      "automated appointment scheduling",
    ],
  };
}
