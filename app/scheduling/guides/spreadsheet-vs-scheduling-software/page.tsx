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
    q: "When is a spreadsheet enough for scheduling?",
    a: "When one manager owns the file, staff count stays small, customer booking volume is low, and weekly publish plus swap coordination takes minutes—not hours. Spreadsheets fail with concurrent edits, multi-location coverage, or public self-serve booking.",
  },
  {
    q: "What breaks first when scheduling outgrows spreadsheets?",
    a: "Version conflicts, double booking across email and calendars, missing reminders, and unfair shift distribution. Those failures often appear as no-shows and angry clients before anyone labels the root cause as tooling.",
  },
  {
    q: "Is free scheduling software better than Excel?",
    a: "Often yes once you need calendar sync, booking links, or automated reminders—free tiers add structure and permissions spreadsheets lack. Paid plans unlock team routing, branding, and integrations that justify cost when missed appointments have a dollar value.",
  },
  {
    q: "How long does migration from spreadsheet to scheduling software take?",
    a: "Many SMBs connect calendars and run one parallel week of new bookings before cutover. Complexity rises with multi-staff round-robin, payments at booking, and CRM triggers—but still beats months of spreadsheet firefighting.",
  },
  {
    q: "Which scheduling software is best for spreadsheet graduates?",
    a: "Solo consultants often start with Calendly; service businesses with staff lean Setmore or Acuity; teams needing routing rules compare YouCanBook.me. Match your workflow on scheduling compare and read reviews before buying.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Booking links", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service businesses", reviewHref: getSchedulingReviewUrl("setmore") },
];

const PAGE_HREF = "/scheduling/guides/spreadsheet-vs-scheduling-software";

export default function SpreadsheetVsSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Spreadsheet vs scheduling software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Spreadsheet vs Scheduling Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical comparison for small businesses: what spreadsheets still do well, what scheduling
                    platforms add, and when the switch pays for itself.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets are a legitimate scheduling tool at small scale—free, flexible, and familiar. Scheduling
                      software is not magic; it is a system of record with rules: real availability, calendar sync,
                      confirmations, and team routing that spreadsheets simulate poorly once more than one person edits
                      the plan.
                    </p>
                    <p>
                      The tradeoff is control versus enforcement. Excel lets you model anything; scheduling apps enforce
                      buffers, time zones, and booking limits so customers cannot claim slots you did not intend to offer.
                      That enforcement is what stops double booking when volume rises.
                    </p>
                    <p>
                      Symptoms of outgrowing spreadsheets—version conflicts, silent errors, unfair routing—are covered in{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>
                      . For Excel-specific shift grids, see{" "}
                      <Link href="/scheduling/guides/can-excel-be-used-for-employee-scheduling" className={linkGreen}>
                        can Excel be used for employee scheduling
                      </Link>
                      . Platform behavior is in{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      .
                    </p>
                    <p>
                      Evaluate vendors on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>scheduling comparisons</Link>. Read
                      reviews such as{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      when intake forms and packages matter.
                    </p>
                  </div>
                </section>
                <section id="spreadsheet-strengths" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What spreadsheets still win on.">What Spreadsheets Do Well</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets excel at one-off planning, what-if staffing models, and teams with a single editor.
                      You can color-code roles, export to payroll, and share a PDF without subscribing to anything. For
                      five staff and predictable hours, that may be the right total cost.
                    </p>
                    <p>
                      They also work as a reporting layer on top of real tools—pulling booked hours from scheduling
                      software for finance. The mistake is using the sheet as the live booking surface once customers or
                      multiple managers touch availability concurrently.
                    </p>
                  </div>
                </section>
                <section id="software-advantages" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Capabilities spreadsheets cannot enforce.">What Scheduling Software Adds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Live availability</strong> — reads busy times from Google,
                          Outlook, or iCloud so public booking cannot collide with existing events.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer self-serve</strong> — branded links, intake forms,
                          and optional payments without email ping-pong.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Automated reminders</strong> — confirmations and SMS or
                          email nudges that cut no-shows; see{" "}
                          <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                            how scheduling software reduces no-shows
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Team routing</strong> — round-robin and per-staff rules;
                          see{" "}
                          <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                            scheduling software for teams
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Rule-based placement is explained technically in{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      . Operationally, many teams adopt automation in stages—covered in{" "}
                      <Link href="/scheduling/guides/how-businesses-automate-scheduling" className={linkGreen}>
                        how businesses automate scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="cost-and-roi" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Subscription vs hidden labor.">Cost Comparison and ROI</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheet cost is mostly manager time: publishing shifts, reconciling swaps, and answering “what
                      time works?” email. Scheduling software adds a subscription but often returns hours weekly and
                      reduces revenue lost to no-shows and double booking.
                    </p>
                    <p>
                      Free tiers from vendors like Calendly or Setmore can replace spreadsheets for solo booking before you
                      pay for team features. Model ROI with one week of data: count missed slots, reschedule calls, and
                      overtime from coverage gaps—then compare to plan pricing on{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>scheduling compare</Link>.
                    </p>
                    <p>
                      Productivity gains beyond time saved—fewer errors, faster onboarding—are in{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-improves-productivity" className={linkGreen}>
                        how scheduling software improves productivity
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="when-to-switch" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Signals it is time to migrate.">When to Switch From Spreadsheet to Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Switch when concurrent edits, customer self-booking, or multi-location coverage make the sheet
                      unreliable. If you already run a Calendly link alongside an Excel shift grid with no sync, you have
                      outgrown spreadsheets in practice—even if the file still exists.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      to shortlist, and{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>{" "}
                      to buy the right category. Field-heavy operations should read{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>{" "}
                      before forcing a booking app to dispatch jobs.
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
    title: "Spreadsheet vs Scheduling Software | BeltStack Guide",
    description:
      "Compare spreadsheets and scheduling software for small businesses: strengths, gaps, ROI, and when to migrate before double booking and no-shows pile up.",
    keywords: [
      "spreadsheet vs scheduling software",
      "excel scheduling alternative",
      "scheduling software for small business",
      "replace spreadsheet scheduling",
      "online booking vs excel",
      "appointment scheduling tools",
    ],
  };
}
