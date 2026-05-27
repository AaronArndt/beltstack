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
    q: "How does scheduling software know when I am free?",
    a: "You connect one or more calendars (Google, Outlook, iCloud). The tool reads busy blocks and applies your availability rules—working hours, buffers, and minimum notice—before showing open slots to bookers.",
  },
  {
    q: "What happens after a customer books?",
    a: "The system creates a calendar event, sends confirmation to both parties, and usually schedules reminder messages. Many tools also trigger webhooks or CRM updates if you configure integrations.",
  },
  {
    q: "Can scheduling software prevent double booking?",
    a: "Yes, when calendar sync is active and only one system writes to a given calendar. Problems appear when two booking tools or a booking page plus manual edits fight the same calendar—document which system wins.",
  },
  {
    q: "How do team and round-robin bookings work?",
    a: "You define staff members, their calendars, and routing rules (specific person vs any available). The engine picks an open slot on the right calendar and assigns the appointment. See scheduling software for teams for evaluation criteria.",
  },
  {
    q: "Do I need scheduling software if I already use Google Calendar?",
    a: "If customers book themselves and you need buffers, intake forms, payments, or team routing, yes. Calendar apps alone lack public booking logic—see scheduling software vs calendar apps.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking flow", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team routing", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Policies & buffers", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-works";

export default function HowSchedulingSoftwareWorksPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Scheduling Software Works</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Works
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    From availability rules to confirmed appointments: how booking engines sync calendars, route teams,
                    and automate reminders for small businesses.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software runs a loop: you define who can be booked and when, a customer or colleague
                      picks a slot on a public page, and the platform writes a confirmed event to the right calendar
                      while sending confirmations and reminders. Under the hood it is availability math plus calendar
                      sync—not magic, but much faster than coordinating by email.
                    </p>
                    <p>
                      Most products separate three layers: your rules (hours, buffers, notice), the booking experience
                      (link, embed, or staff-assisted booking), and post-booking automation (reminders, payments, CRM
                      hooks). Understanding that split helps you configure tools like{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> or{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      without fighting defaults.
                    </p>
                    <p>
                      If you are new to the category, start with{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      . This guide goes deeper on mechanics so you can demo vendors with the right questions.
                    </p>
                    <p>
                      Browse the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>comparisons</Link> once you know which
                      workflows matter most.
                    </p>
                  </div>
                </section>
                <section id="availability" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Rules before anyone sees a slot.">Availability and Calendar Sync</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      You connect calendars so the engine sees existing meetings as busy time. On top of that you set
                      working hours, appointment length, padding between meetings, maximum bookings per day, and minimum
                      notice (e.g. no same-day bookings). The product only offers slots that pass all rules.
                    </p>
                    <p>
                      Time-zone detection matters for distributed teams and virtual clients: the booker sees local time;
                      the host’s calendar stores the correct offset. Test this during trials if you serve clients outside
                      your region.{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> both handle
                      multi-time-zone booking; compare policies on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>.
                    </p>
                  </div>
                </section>
                <section id="booking-flow" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What the customer experiences.">The Booking Flow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A typical flow: open booking link → choose service or meeting type → pick staff (if applicable) →
                      select an open slot → complete intake form → confirm. Embedded widgets on your site follow the
                      same logic without sending visitors elsewhere.
                    </p>
                    <p>
                      Service businesses often add service menus, staff selection, and payment—covered in{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . Consultants may only need a 30-minute discovery call with a short questionnaire;{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> optimizes
                      that path. Salons and clinics with richer menus often evaluate{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> or{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>.
                    </p>
                  </div>
                </section>
                <section id="teams" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Round-robin and multi-staff logic.">Team Routing and Admin Controls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-person shops assign calendars per staff member. Round-robin distributes inbound meetings
                      across available reps; fixed routing sends clients to a chosen provider. Admins set permissions so
                      only certain roles edit availability or view all appointments.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>{" "}
                      for evaluation criteria. If your bottleneck is dispatched trucks rather than inbound booking,
                      read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before buying team scheduling alone.
                    </p>
                  </div>
                </section>
                <section id="after-booking" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Confirmations, reminders, integrations.">After the Appointment Is Booked</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Confirmed bookings trigger calendar invites, email or SMS reminders, and optional video links.
                      Reschedule and cancel links reduce back-and-forth. Integrations may create CRM contacts, charge
                      cards, or post webhooks to your stack—verify these on paid tiers during sales calls.
                    </p>
                    <p>
                      Avoid running two booking systems on one calendar without rules; that is the most common source of
                      double bookings. If you also rely on Outlook or Google for internal meetings only, see{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-calendar-apps" className={linkGreen}>
                        scheduling software vs calendar apps
                      </Link>
                      . Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      to build a shortlist, and explore{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages for
                      trade-specific fit.
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
    title: "How Scheduling Software Works | BeltStack Guide",
    description:
      "How scheduling software syncs calendars, applies availability rules, routes team bookings, and automates confirmations and reminders for small businesses.",
    keywords: [
      "how scheduling software works",
      "appointment booking flow",
      "calendar sync scheduling",
      "round robin scheduling",
      "online appointment scheduling",
      "booking automation",
    ],
  };
}
