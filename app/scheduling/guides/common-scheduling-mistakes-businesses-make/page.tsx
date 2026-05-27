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
    q: "What is the biggest scheduling mistake small businesses make?",
    a: "Running parallel systems—a booking link, a shared spreadsheet, and personal calendars—without declaring which one wins. Customers and staff book the same slots in different places. Consolidate on one platform with two-way calendar sync before adding features.",
  },
  {
    q: "Is a free scheduling tool always a mistake?",
    a: "Not for solo operators with low volume. Mistakes appear when you add staff, locations, or payments and outgrow caps on seats, branding, or routing. Re-evaluate when conflicts and manual work rise; free tiers from Calendly or Setmore are fine until complexity does.",
  },
  {
    q: "Why do reminders get skipped?",
    a: "Teams assume one confirmation email is enough. No-shows drop when you send timed SMS or email reminders, include reschedule links, and require deposits for high-value slots. Skipping reminders to “reduce noise” usually increases empty chairs and revenue loss.",
  },
  {
    q: "When is buying scheduling software premature?",
    a: "When you have not documented services, durations, and who can perform each task. Software amplifies a clear process; it cannot invent one. Fix service catalog and handoff rules first, then automate—see appointment scheduling for service businesses for a checklist.",
  },
  {
    q: "How do I know we picked the wrong category?",
    a: "If your pain is trucks, parts inventory, and job billing—not finding a meeting time—you may need field service software, not appointment booking. Scheduling mistakes include buying FSM too early or booking tools too late; diagnose on common scheduling problems first.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service businesses", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
];

const PAGE_HREF = "/scheduling/guides/common-scheduling-mistakes-businesses-make";

export default function CommonSchedulingMistakesBusinessesMakePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Common Scheduling Mistakes</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Common Scheduling Mistakes Businesses Make
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Tool sprawl, skipped buffers, weak reminders, and buying the wrong category—mistakes operators repeat
                    and practical fixes that do not require a full rip-and-replace.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling mistakes rarely look like negligence. They look like a well-meaning manager adding another
                      Calendly link while the front desk still texts availability, or a growing salon keeping a Google
                      Sheet for chair assignments next to a customer booking page. Each shortcut works until volume
                      doubles—and then conflicts, no-shows, and staff frustration spike together.
                    </p>
                    <p>
                      The expensive mistakes are categorical: buying appointment software when you need shift scheduling,
                      or buying field service management when you only need inbound booking. Less dramatic errors—no
                      buffers, no time-zone labels, no deposit on high-demand slots—erode margin every week without
                      triggering a software search.
                    </p>
                    <p>
                      Start by mapping symptoms to causes in{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>
                      . To prevent overlap once you fix process, read{" "}
                      <Link href="/scheduling/guides/how-businesses-reduce-scheduling-conflicts" className={linkGreen}>
                        how businesses reduce scheduling conflicts
                      </Link>
                      .
                    </p>
                    <p>
                      When you are ready to shortlist tools, use our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Trade-specific
                      guidance sits on{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages.
                    </p>
                  </div>
                </section>
                <section id="tool-sprawl" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Too many systems, no owner.">Running Parallel Tools Without Rules</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The most common mistake is plural calendars with singular accountability. Email threads, DMs, and
                      walk-ins bypass the booking link; PTO lives only on a personal phone calendar. Fix it by declaring
                      one system of record and training staff that off-system bookings are not official until entered
                      there.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Retire duplicate links</strong> — one public URL per service
                          line, not per employee’s experiment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Sync every busy calendar</strong> — personal and shared
                          resources must block availability.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Document handoffs</strong> — who confirms phone bookings and
                          within what SLA.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Strong booking hygiene is covered in{" "}
                      <Link href="/scheduling/guides/online-booking-software-explained" className={linkGreen}>
                        online booking software explained
                      </Link>
                      . Vendors such as{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      reduce sprawl when intake forms and payments live on the same page as the slot.
                    </p>
                  </div>
                </section>
                <section id="configuration-gaps" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Defaults that fail at scale.">Misconfigured Services and Availability</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Generic 30-minute slots for every service create chaos. A color treatment takes ninety minutes; a
                      consult needs fifteen plus buffer. Wrong durations cascade into double bookings and rushed staff.
                      Likewise, ignoring time zones for remote clients produces “I thought it was 3 p.m. my time” disputes.
                    </p>
                    <p>
                      Service businesses should align catalog, staff skills, and room resources before marketing the
                      booking link—see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      .{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> help
                      when multiple services and staff tiers need distinct rules on one account.
                    </p>
                  </div>
                </section>
                <section id="people-and-shifts" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Customer booking vs labor planning.">Confusing Appointment and Shift Scheduling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customer self-booking optimizes when clients can see you. Shift scheduling optimizes who is on the
                      floor Saturday and whether labor rules are met. Using Calendly-style links for hourly retail coverage
                      is a mistake; using workforce tools for public salon booking is another.
                    </p>
                    <p>
                      Multi-person shops need both layers coordinated: shifts define who is working; appointment rules
                      define who is bookable. Read{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-shift-scheduling-software-works" className={linkGreen}>
                        how shift scheduling software works
                      </Link>{" "}
                      before forcing one product to cover labor and client booking.{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> fits
                      when team routing for client appointments is the gap—not hourly shift law compliance.
                    </p>
                  </div>
                </section>
                <section id="buying-wrong-tool" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Match software to the real bottleneck.">Buying Too Little or Too Much Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buying too little means staying on spreadsheets after customers expect self-serve booking and
                      automated reminders. Buying too much means implementing dispatch and inventory before you have
                      reliable inbound scheduling—months of setup for the wrong pain.
                    </p>
                    <p>
                      Evaluate honestly on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>, read reviews such
                      as{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> when
                      templates matter, and shortlist from{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      only after you name whether the bottleneck is booking, shifts, or dispatched jobs.
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
    title: "Common Scheduling Mistakes Businesses Make | BeltStack Guide",
    description:
      "Avoid common scheduling mistakes: tool sprawl, wrong durations, weak reminders, and buying appointment vs shift vs field service tools for the wrong workflow.",
    keywords: [
      "scheduling mistakes",
      "appointment scheduling errors",
      "double booking prevention",
      "scheduling software mistakes",
      "small business scheduling tips",
      "online booking mistakes",
      "scheduling best practices",
    ],
  };
}
