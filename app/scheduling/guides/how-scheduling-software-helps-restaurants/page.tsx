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
    q: "What is the difference between reservation and employee scheduling for restaurants?",
    a: "Reservation scheduling books guest tables or dining times—customer-facing availability. Employee scheduling assigns server, host, and kitchen shifts—internal workforce coverage. They solve different problems; a reservation tool does not replace shift planning for hourly staff.",
  },
  {
    q: "Can restaurants use Calendly for table reservations?",
    a: "Calendly-style tools work for private dining, chef's tables, or catering consults where one party books a time slot. Full-service dining with party sizes, table turns, and waitlists usually needs reservation-specific features or a POS-integrated booking module.",
  },
  {
    q: "Does scheduling software reduce no-shows for restaurant reservations?",
    a: "Automated SMS and email reminders, easy reschedule links, and optional deposits or card holds cut no-shows significantly. Pair reminders with clear cancellation policies—see how scheduling software reduces no-shows for tactics that apply to dining.",
  },
  {
    q: "Should restaurants use Square Appointments for bookings?",
    a: "If you already run Square POS and take appointment-style bookings—tasting menus, classes, or counter service—Square Appointments keeps payments and scheduling together. Full table-service restaurants may need dedicated reservation platforms or POS add-ons instead.",
  },
  {
    q: "When do restaurants need employee shift software instead of booking tools?",
    a: "When the bottleneck is coverage—who works Friday dinner—not guest table inventory. Shift tools handle availability requests, labor law breaks, and swap approvals. Read appointment scheduling vs employee scheduling before buying one product for both jobs.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Square Appointments", logoSrc: "/Logos/square.jpeg", rating: "4.3", bestFor: "POS-integrated booking", reviewHref: getSchedulingReviewUrl("square-appointments") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Multi-staff service booking", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Private dining & events", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-helps-restaurants";

export default function HowSchedulingSoftwareHelpsRestaurantsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling for Restaurants</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Helps Restaurants
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How restaurants use booking tools for reservations, table turns, and service appointments—and how
                    that differs from employee shift scheduling for front- and back-of-house staff.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Restaurants juggle two scheduling problems that look similar on a calendar but serve different
                      audiences. Guest reservation scheduling books tables, party sizes, and dining windows so hosts
                      know who is arriving when. Employee scheduling assigns servers, bartenders, and kitchen staff to
                      shifts so managers know who is working—not who is dining.
                    </p>
                    <p>
                      Scheduling software in the appointment-booking sense helps with the guest side: online reservations,
                      waitlist handoffs, reminders, and sometimes deposits for large parties or tasting menus. It reduces
                      phone tag at the host stand and gives guests self-serve control to book, change, or cancel within
                      your rules.
                    </p>
                    <p>
                      Do not confuse that with shift planning. Tools like{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      explain the split: customer-facing slots versus internal workforce coverage. Many restaurants run
                      both—a reservation platform for guests and a workforce tool for hourly staff—with no overlap in
                      data.
                    </p>
                    <p>
                      Compare booking vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. For
                      service-style booking patterns—multiple staff, payments, recurring visits—see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="guest-reservations" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Table inventory and dining windows.">Guest Reservations and Table Booking</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reservation scheduling tracks party size, seating preferences, and turn times so you do not
                      overbook the dining room. Public booking links on your website or Google listing let guests claim
                      slots without calling during the dinner rush. Buffers between seatings and minimum party rules keep
                      the floor manageable before service starts.
                    </p>
                    <p>
                      Full-service restaurants with complex table maps often use reservation-native platforms or POS
                      modules. Counter-service, cafés, and pop-ups with simpler flows can use general scheduling tools—
                      {" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>, or{" "}
                      <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>
                        Square Appointments
                      </Link>{" "}
                      when booking is appointment-style rather than table-map-driven.
                    </p>
                  </div>
                </section>
                <section id="staff-shifts" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Internal coverage, not guest tables.">Employee Shift Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shift scheduling answers who works Tuesday brunch—not which table is free at 7 p.m. Managers publish
                      weekly schedules, handle time-off requests, and track labor against forecasted covers. That workflow
                      lives in workforce or shift tools, not in Calendly-style booking links meant for customers.
                    </p>
                    <p>
                      Mixing the two causes confusion: a server&apos;s shift is not a bookable appointment, and a guest
                      reservation should not appear on an employee availability grid. Read{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-businesses-schedule-employees-efficiently" className={linkGreen}>
                        how businesses schedule employees efficiently
                      </Link>{" "}
                      when labor planning is the bottleneck—not guest self-booking.
                    </p>
                  </div>
                </section>
                <section id="reminders-and-no-shows" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Protect covers and reduce empty tables.">Reminders, Deposits, and Fewer No-Shows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMS and email reminders before reservation time cut no-shows and last-minute walk-away tables.
                      Easy reschedule links keep guests engaged without tying up the host phone. For high-demand nights,
                      card holds or prepayment for large parties shift risk from the restaurant to the guest who
                      commits.
                    </p>
                    <p>
                      These tactics apply across service businesses—see{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>
                      . Products with strong reminder flows include{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> for
                      event-style or private-dining bookings where deposits matter.
                    </p>
                  </div>
                </section>
                <section id="evaluating-tools" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Match the tool to the workflow.">How to Evaluate Restaurant Scheduling Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with one question: are we optimizing guest reservations, staff shifts, or both? Guest
                      booking needs table or slot rules, reminders, and POS integration. Shift planning needs labor
                      compliance, swap workflows, and forecast tie-ins. Rarely does one SMB scheduler excel at both.
                    </p>
                    <p>
                      Shortlist reservation-friendly tools on{" "}
                      <Link href="/scheduling/best-for/service-business" className={linkGreen}>
                        scheduling best for service businesses
                      </Link>{" "}
                      and compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>. Read reviews
                      such as{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>, and{" "}
                      <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>
                        Square Appointments
                      </Link>{" "}
                      when payments and booking should stay in one stack.
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
    title: "How Scheduling Software Helps Restaurants | BeltStack Guide",
    description:
      "How restaurants use scheduling software for guest reservations, table booking, and reminders—and how that differs from employee shift scheduling for staff.",
    keywords: [
      "restaurant reservation software",
      "restaurant scheduling software",
      "table booking software",
      "restaurant employee scheduling",
      "online restaurant reservations",
      "appointment vs shift scheduling restaurants",
    ],
  };
}
