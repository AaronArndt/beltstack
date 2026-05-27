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
    q: "What is the most common scheduling problem for small businesses?",
    a: "Double booking across email, personal calendars, and a booking link. Until one system owns availability with two-way calendar sync, customers and staff will keep colliding on the same slots.",
  },
  {
    q: "Why do teams outgrow spreadsheets for scheduling?",
    a: "Spreadsheets break when multiple people edit availability, swap shifts, or book customers at once. Version conflicts, missing time zones, and no automated reminders create silent errors that show up as no-shows and angry clients.",
  },
  {
    q: "How do time zones cause scheduling mistakes?",
    a: "Remote and hybrid businesses often display the organizer’s zone by default. Customers book the wrong hour; reminders fire at the wrong time. Fix display labels, use the guest’s local time in confirmations, and test bookings from another region.",
  },
  {
    q: "When is scheduling software not enough?",
    a: "When your bottleneck is dispatching trucks, parts, and invoices—not finding a meeting time. Field service platforms own job records; scheduling tools own inbound time. Buying the wrong category wastes months—see scheduling vs FSM.",
  },
  {
    q: "How do I prioritize which problem to fix first?",
    a: "Rank by revenue impact: double booking and no-shows usually beat cosmetic branding issues. Run one week of data on missed slots, then match the fix to features—reminders, team routing, or FSM—instead of switching tools blindly.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team routing", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybookme.jpeg", rating: "4.4", bestFor: "Multi-staff", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/common-scheduling-problems-businesses-face";

export default function CommonSchedulingProblemsBusinessesFacePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Common problems</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Common Scheduling Problems Businesses Face
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Double booking, timezone mistakes, no-shows, unfair team routing, and tool sprawl—symptoms,
                    root causes, and which scheduling capabilities actually fix them.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling pain rarely arrives as a single bug. It shows up as a client who swears they booked
                      Tuesday, a technician double-booked across two calendars, or a front desk spending an hour a day
                      on “what time works?” email. The underlying problems repeat across industries even when the
                      tools differ.
                    </p>
                    <p>
                      Most teams already own pieces—a Google Calendar, a Calendly link, a group text for shift swaps.
                      Without rules for which system wins, problems compound as you add staff or locations. The fixes
                      are usually process plus software, not software alone.
                    </p>
                    <p>
                      Use this guide to diagnose before you rip and replace. Pair it with{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      ,{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>
                      , and{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      once you know which failure mode hurts most.
                    </p>
                    <p>
                      Small businesses evaluating their first tool should also read{" "}
                      <Link href="/scheduling/guides/scheduling-tools-for-small-business" className={linkGreen}>
                        scheduling tools for small business
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      on our{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>
                        scheduling guides
                      </Link>{" "}
                      hub.
                    </p>
                  </div>
                </section>
                <section id="calendar-chaos" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One source of truth.">Calendar Chaos and Double Booking</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Double booking happens when availability lives in more than one place—personal Outlook, a shared
                      front-desk calendar, and a public booking page that never saw the block. Two-way sync is table
                      stakes; you also need discipline about where manual holds get created.
                    </p>
                    <p>
                      Hybrid stacks—Calendly for sales, another tool for service—need documented conflict rules. Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before adding a second customer-facing calendar. Compare{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity
                      </Link>{" "}
                      if intake complexity contributed to the mess.
                    </p>
                  </div>
                </section>
                <section id="teams" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fairness, skills, load.">Team Routing and Uneven Utilization</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Round-robin that ignores skills sends the wrong provider; static links overload your best
                      performer. Collective availability, skill tags, and per-person caps fix most fairness complaints.
                      Multi-location shops also need location-aware booking so clients do not cross town for the wrong
                      room.
                    </p>
                    <p>
                      Deep dive:{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      ,{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>
                        Calendly vs YouCanBook.me
                      </Link>
                      , and reviews for{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>
                        SimplyBook.me
                      </Link>
                      . Route-heavy service models should also see{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="experience" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="No-shows, time zones, expectations.">Customer Experience Gaps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      No-shows, vague locations, and missing prep instructions are scheduling problems dressed as
                      customer service issues. Automated reminders, deposits, and clear cancellation links address
                      behavior; timezone labeling and intake forms address confusion.
                    </p>
                    <p>
                      Service businesses with tight windows should read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>
                      . Browse{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/calendly-alternatives" className={linkGreen}>
                        Calendly alternatives
                      </Link>{" "}
                      when your current tool cannot enforce policies.
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
    title: "Common Scheduling Problems Businesses Face | BeltStack Guide",
    description:
      "Double booking, time zones, no-shows, team routing, and outgrowing spreadsheets—common scheduling problems and how the right software and process fix them.",
    keywords: [
      "scheduling problems",
      "double booking calendar",
      "appointment no-shows",
      "team scheduling conflicts",
      "scheduling timezone mistakes",
      "outgrow spreadsheet scheduling",
    ],
  };
}
