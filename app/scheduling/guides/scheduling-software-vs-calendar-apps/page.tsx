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
    q: "Can I use Google Calendar instead of scheduling software?",
    a: "For internal meetings, often yes. For customer self-booking with buffers, intake forms, team routing, and automated reminders, scheduling software is purpose-built. Calendar apps lack public booking rules and branded flows.",
  },
  {
    q: "Does scheduling software replace my calendar?",
    a: "No—it sits on top. You still use Google Calendar or Outlook; scheduling tools read busy times and write confirmed appointments back. You manage availability in the scheduling product, not by sharing edit access to your calendar.",
  },
  {
    q: "What is the main advantage of scheduling software over calendar apps?",
    a: "Automated availability, customer-facing booking pages, reminders, and team routing. You spend less time negotiating times and reduce double bookings when rules are configured correctly.",
  },
  {
    q: "When is a calendar app enough?",
    a: "Solo operators with few external bookings, no team routing, and customers who do not expect self-serve scheduling can stay on calendar invites alone—until volume or no-shows justify a dedicated tool.",
  },
  {
    q: "How does scheduling software compare to field service software?",
    a: "Scheduling handles time booking; field service adds dispatch, work orders, and job billing. If trucks and invoices are the bottleneck, read scheduling vs field service software—not this calendar comparison alone.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Beyond basic calendar", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team booking", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Client self-booking", reviewHref: getSchedulingReviewUrl("setmore") },
];

const PAGE_HREF = "/scheduling/guides/scheduling-software-vs-calendar-apps";

export default function SchedulingSoftwareVsCalendarAppsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling vs Calendar Apps</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Software vs Calendar Apps
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Google Calendar and Outlook store events; scheduling software adds booking rules, public links, and
                    automation—when each is enough for small businesses.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Calendar apps are excellent for viewing and sharing your time. They are not designed to let
                      customers pick open slots from your real availability, enforce buffers, collect intake answers, or
                      route bookings across a team. That gap is what scheduling software fills.
                    </p>
                    <p>
                      Many buyers already live in Google Workspace or Microsoft 365 and wonder why they need another
                      subscription. The honest answer: you may not—until external booking volume, no-shows, or multi-staff
                      routing make manual coordination expensive.
                    </p>
                    <p>
                      For a category overview, read{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      . For mechanics after you decide to adopt, see{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      .
                    </p>
                    <p>
                      Compare products on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>.
                    </p>
                  </div>
                </section>
                <section id="calendars" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What Google Calendar and Outlook do well.">What Calendar Apps Own</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Calendars are the system of record for when you are busy: internal meetings, personal blocks, and
                      manually created client events. Sharing a calendar or sending an invite works when you already know
                      the time or the volume is low.
                    </p>
                    <p>
                      They lack branded booking pages, minimum-notice rules, per-service durations, round-robin across
                      staff, and automated reminder sequences tuned for client appointments. Appointment slots in Google
                      Calendar are a lightweight step up but still thin compared to{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> or{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Booking logic on top of your calendar.">What Scheduling Software Adds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling tools sync with your calendar, then layer availability rules, public links, intake forms,
                      payments, and team routing. Customers book without emailing you; confirmations and reminders run
                      automatically.
                    </p>
                    <p>
                      Service businesses with multiple offerings often need{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> or{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>—see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . Agencies with round-robin compare{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> on{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="decision" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="A simple decision test.">When to Stay on Calendar Apps vs Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Stay on calendar invites if: you book fewer than a handful of external appointments per week, one
                      person owns the calendar, customers do not expect a self-serve link, and no-shows are rare.
                    </p>
                    <p>
                      Upgrade to scheduling software if: customers ask for online booking, multiple staff share inbound
                      demand, you need buffers or intake before meetings, or reminders would materially cut no-shows.
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      to shortlist. See{" "}
                      <Link href="/scheduling/guides/what-businesses-use-scheduling-software" className={linkGreen}>
                        what businesses use scheduling software
                      </Link>{" "}
                      for industry patterns.
                    </p>
                  </div>
                </section>
                <section id="beyond-calendars" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Do not confuse booking with dispatch.">When You Need More Than Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Neither calendars nor scheduling software replace field service platforms when your core loop is
                      dispatching technicians, work orders, and job invoicing. Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before buying booking software for a multi-truck shop.
                    </p>
                    <p>
                      Explore trade-specific picks on{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> and all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> when your workflow
                      spans emergencies, routes, or hybrid FSM stacks.
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
    title: "Scheduling Software vs Calendar Apps | BeltStack Guide",
    description:
      "Compare scheduling software with Google Calendar and Outlook: what calendar apps do, what scheduling tools add, and when small businesses should upgrade.",
    keywords: [
      "scheduling software vs calendar",
      "Google Calendar vs scheduling software",
      "online booking vs calendar",
      "appointment scheduling tools",
      "Calendly vs Google Calendar",
      "business appointment booking",
    ],
  };
}
