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
    q: "What is the difference between shift scheduling and appointment scheduling?",
    a: "Appointment scheduling books external customers into service slots. Shift scheduling assigns internal staff to work blocks—often repeating weekly patterns, roles, and locations. The data model and approvals differ even when both appear on a calendar.",
  },
  {
    q: "Can Calendly or Acuity handle employee shift scheduling?",
    a: "They are built for customer-facing booking, not labor planning. You can block team calendars for meetings, but you will lack shift templates, coverage rules, swap workflows, and labor compliance views. Use workforce or dedicated shift tools when staff scheduling is the core job.",
  },
  {
    q: "Do small businesses need shift scheduling software?",
    a: "Teams of two to five can sometimes use a shared spreadsheet until swap requests and availability exceptions pile up. Once you publish weekly schedules to dozens of staff or multiple locations, dedicated software pays back in fewer coverage gaps and less manager time.",
  },
  {
    q: "How does shift scheduling connect to time tracking?",
    a: "Published shifts become the planned hours; time clocks or mobile punches record actual hours. Integrations or a single platform reduce disputes about who was supposed to work versus who clocked in. See our time tracking hub if payroll accuracy is the downstream goal.",
  },
  {
    q: "When should field service software own scheduling instead?",
    a: "When jobs, trucks, parts, and invoicing—not only who is on shift—drive operations. Customer appointments and technician dispatch usually belong in FSM. Read scheduling vs field service software if you are unsure which category should lead.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team availability", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Staff calendars", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Meeting blocks", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/how-shift-scheduling-software-works";

export default function HowShiftSchedulingSoftwareWorksPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Shift scheduling</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Shift Scheduling Software Works
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How businesses plan employee shifts, publish schedules, handle swaps, and keep coverage aligned—
                    and how that differs from customer appointment booking.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shift scheduling software answers a different question than Calendly-style booking: who is
                      working, where, and in which role—not which customer gets the 2 p.m. slot. Retail, hospitality,
                      healthcare clinics, and multi-location service shops use it to turn labor plans into published
                      schedules staff can see on their phones.
                    </p>
                    <p>
                      The workflow usually starts with templates—opening hours, minimum headcount per shift, and
                      recurring patterns. Managers assign or auto-fill shifts, staff confirm availability or request
                      swaps, and the published week becomes the source of truth until the next publish cycle.
                    </p>
                    <p>
                      Customer-facing scheduling tools can block team calendars for meetings, but they rarely encode
                      coverage rules, labor cost views, or shift trade approvals. If your pain is missed shifts and
                      understaffed Saturdays, evaluate workforce-oriented products; if the pain is inbound booking,
                      start with our{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        scheduling software features checklist
                      </Link>{" "}
                      instead.
                    </p>
                    <p>
                      This guide pairs with{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      ,{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems
                      </Link>
                      , and{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>{" "}
                      when customer appointments—not only internal shifts—are part of the same operation.
                    </p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Templates, assignments, publish.">The Core Shift Scheduling Workflow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most platforms follow the same loop: build a schedule draft, resolve conflicts, notify staff, then
                      lock the week. Drafts often copy from the prior week so managers are not rebuilding Monday opens
                      from scratch. Role tags—cashier, stylist, lead tech—help filters when you have dozens of rows.
                    </p>
                    <p>
                      Self-service availability lets employees mark preferred days off before managers assign. Swap
                      requests route to a lead for approval so coverage does not silently drop. Compare team booking
                      tools on our{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>
                        scheduling comparisons
                      </Link>{" "}
                      hub and read reviews for{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>
                        YouCanBook.me
                      </Link>{" "}
                      and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>
                        Setmore
                      </Link>{" "}
                      when staff calendars must stay in sync with customer slots.
                    </p>
                  </div>
                </section>
                <section id="rules" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Coverage, overtime, conflicts.">Rules, Conflicts, and Approvals</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shift software shines when rules are explicit: minimum staff per location, maximum hours before
                      overtime, required certifications for certain shifts, and blackout dates. The system flags
                      violations before publish instead of after payroll.
                    </p>
                    <p>
                      Conflict detection should distinguish hard blocks (double-booked person) from soft warnings
                      (preferred day off ignored). Managers need an audit trail when swaps happen last minute—common
                      in restaurants and clinics. For operational patterns that break standard weeks, see{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="stack" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Booking, time clocks, FSM.">How Shift Scheduling Fits Your Stack</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many businesses run three layers: customer booking (scheduling), internal shifts (workforce), and
                      job execution (field service). Keep boundaries clear—one system should own customer promises,
                      another should own who is on the clock. Hybrid stacks work when integrations or APIs sync
                      availability both ways.
                    </p>
                    <p>
                      If technicians need dispatch boards and invoices, shift blocks alone are not enough—read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      . For payroll-ready hours, explore the{" "}
                      <Link href="/time-tracking" className={linkGreen}>
                        time tracking hub
                      </Link>{" "}
                      and use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      when customer booking is still the primary bottleneck.
                    </p>
                    <p>
                      Browse the{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-youcanbookme")} className={linkGreen}>
                        Calendly vs YouCanBook.me
                      </Link>{" "}
                      when team routing overlaps with shift visibility needs.
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
    title: "How Shift Scheduling Software Works | BeltStack Guide",
    description:
      "Learn how shift scheduling software plans employee work blocks, handles swaps and coverage rules, and differs from customer appointment booking tools.",
    keywords: [
      "shift scheduling software",
      "employee shift scheduling",
      "workforce scheduling",
      "staff schedule templates",
      "shift swap requests",
      "scheduling vs appointment booking",
    ],
  };
}
