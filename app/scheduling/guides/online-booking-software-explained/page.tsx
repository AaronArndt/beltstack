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
    q: "What is online booking software?",
    a: "Online booking software lets customers self-schedule appointments through a link, embed, or website widget. It syncs with your calendar, enforces availability rules, sends confirmations and reminders, and often collects payment or intake information at booking time.",
  },
  {
    q: "Is online booking the same as scheduling software?",
    a: "Booking is the customer-facing slice of scheduling. Full scheduling suites also cover internal team calendars, round-robin routing, buffers, and integrations. Most SMBs start with booking pages and add team features as they grow.",
  },
  {
    q: "Do I need a separate booking page and calendar app?",
    a: "Modern tools combine both: your Google or Outlook calendar feeds availability, and the booking page writes confirmed appointments back. Avoid maintaining two manual calendars—pick a product with reliable two-way sync.",
  },
  {
    q: "Which industries use online booking most?",
    a: "Consultants, salons, clinics, tutors, and home service businesses use booking pages heavily. Trade contractors with dispatch needs may outgrow pure booking and move toward field service software while keeping a simple intake link.",
  },
  {
    q: "What should I compare when evaluating booking tools?",
    a: "Calendar sync quality, payment and deposit support, staff or location limits, reminder channels (email/SMS), branding control, and price per bookable user. Use structured comparisons and reviews rather than feature checklists alone.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Custom booking pages", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/online-booking-software-explained";

export default function OnlineBookingSoftwareExplainedPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Online booking software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Online Booking Software Explained
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How self-serve booking pages work, what they connect to, and how to evaluate tools for consultants,
                    salons, and service businesses.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Online booking software replaces phone tag and email chains with a link customers can use 24/7. You
                      define services, durations, buffers, and who is bookable; the system shows only open slots synced from
                      your real calendar. When someone books, both sides get confirmation—and reminders reduce no-shows.
                    </p>
                    <p>
                      The category spans simple meeting schedulers (Calendly) through richer service booking (Acuity,
                      Setmore, Square Appointments) with intake forms, packages, and payments. The right depth depends on
                      whether you sell time, sessions, or on-site visits—not on how many features a vendor lists.
                    </p>
                    <p>
                      Use the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare hub</Link> to shortlist vendors. For a
                      structured buyer checklist, read{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>.
                    </p>
                    <p>
                      Service businesses with trucks and jobs may later need field service tools; start with{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling vs field service software
                      </Link>{" "}
                      before assuming a booking page alone runs operations.
                    </p>
                  </div>
                </section>
                <section id="how-it-works" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Availability, sync, confirmation.">How Online Booking Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      You connect Google Calendar, Outlook, or an in-app calendar. The booking engine reads busy times and
                      applies rules: working hours, minimum notice, maximum daily appointments, and buffer time between
                      meetings. Customers see only valid openings; confirmed bookings write back to the calendar automatically.
                    </p>
                    <p>
                      Multi-staff businesses add round-robin or per-person booking pages.{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        Scheduling software for teams
                      </Link>{" "}
                      explains collective availability. Compare{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>
                        Calendly vs YouCanBook.me
                      </Link>{" "}
                      when team routing is central to your workflow.
                    </p>
                  </div>
                </section>
                <section id="features" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Beyond the calendar grid.">Features Buyers Actually Use</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Intake forms capture goals, photos, or policy acknowledgments before the visit. Deposits and prepayment
                      cut no-shows for high-demand slots. SMS reminders outperform email alone for same-day services. Branding
                      control—custom domains, colors, and copy—matters when the booking page is your front door.
                    </p>
                    <p>
                      Reviews help you match depth to need:{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link>{" "}
                      for consultants needing packages;{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>{" "}
                      for recurring service appointments;{" "}
                      <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>Square Appointments</Link>{" "}
                      when you already run payments on Square. See{" "}
                      <Link href="/scheduling/best-for/consultants" className={linkGreen}>best scheduling for consultants</Link>{" "}
                      and{" "}
                      <Link href="/scheduling/best-for/small-business" className={linkGreen}>best for small business</Link>{" "}
                      for scenario picks.
                    </p>
                  </div>
                </section>
                <section id="limits" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="When booking pages stop scaling.">Limits of Booking-Only Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pure booking software rarely owns dispatch boards, parts, estimates, or technician skill matching. HVAC
                      and plumbing shops that promise two-hour windows need live capacity and route logic—often in FSM, not a
                      standalone booking widget.
                    </p>
                    <p>
                      For urgent and same-day models, read{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>.{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        How automated scheduling works
                      </Link>{" "}
                      covers rules engines and reminders when you are ready to reduce manual scheduling work.
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
              <GuideSidebar title="Booking tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Online Booking Software Explained | BeltStack Guide",
    description:
      "What online booking software is, how calendar sync and self-serve scheduling work, key features to compare, and when service businesses outgrow booking-only tools.",
    keywords: [
      "online booking software",
      "appointment booking software",
      "self-serve scheduling",
      "online appointment scheduling",
      "booking page software",
      "Calendly vs Acuity booking",
    ],
  };
}
