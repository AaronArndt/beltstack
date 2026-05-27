import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "What problems does field service software solve first?",
    a: "Most teams adopt FSM to fix scheduling chaos, poor dispatch visibility, lost field notes, and slow invoicing. Those four pain clusters show up before advanced needs like marketing automation or deep job costing—start where double-bookings and late payments hurt today.",
  },
  {
    q: "Can field service software fix double-booking?",
    a: "Yes, when everyone schedules through one system. Shared calendars, technician availability, and dispatch boards prevent two coordinators from assigning the same tech at the same time—something spreadsheets and group texts cannot enforce reliably.",
  },
  {
    q: "Does FSM help with late customer payments?",
    a: "Indirectly but meaningfully. Faster, accurate invoicing from completed jobs, online payment links, and automated reminders shorten collection cycles. The root fix is completing jobs with billable data in the field, not retyping in the office days later.",
  },
  {
    q: "When is field service software not the answer?",
    a: "If the real problem is pricing, hiring, or service quality, software will not save the business. FSM optimizes coordination and revenue capture—it does not replace training, trucks, or demand generation.",
  },
  {
    q: "How do I know which problems our team has?",
    a: "Audit one week of operations: count scheduling conflicts, customer status calls, jobs invoiced more than 48 hours after completion, and warranty disputes missing photos. Match those counts to FSM modules—scheduling, dispatch, mobile apps, and billing—before you buy a bloated tier.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for contractors",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/common-problems-field-service-software-solves";

export default function CommonProblemsFieldServiceSoftwareSolvesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="rounded text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="rounded text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="rounded text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">
                      Common Problems Field Service Software Solves
                    </li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Common Problems Field Service Software Solves
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Learn the operational problems field service management software addresses—from double-booking and
                    dispatch blind spots to missing field documentation and slow invoicing.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Service businesses rarely shop for software on a calm Tuesday. They buy when coordination breaks:
                      two techs show up to one job, nobody knows who is free at 2 p.m., or invoices go out a week after the
                      truck rolls.{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        Field service management (FSM)
                      </Link>{" "}
                      platforms exist to replace those failure modes with one operational system.
                    </p>
                    <p>
                      The problems below appear across HVAC, plumbing, electrical, landscaping, and commercial maintenance—
                      see{" "}
                      <Link href="/field-service/guides/what-businesses-use-field-service-software" className={linkGreen}>
                        what businesses use field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/examples-of-field-service-businesses" className={linkGreen}>
                        examples of field service businesses
                      </Link>{" "}
                      for industry-specific nuance.
                    </p>
                    <p>
                      Software does not fix weak pricing or hiring gaps. It does make coordination, documentation, and
                      billing repeatable as you add trucks. For what platforms include module by module, see{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what does field service management include
                      </Link>
                      .
                    </p>
                    <p>
                      Once you map pain to modules, compare tools with{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      and our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup.
                    </p>
                  </div>
                </section>
                <section id="scheduling-chaos" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Double-books, gaps, and calendar drift.">
                    Scheduling Chaos and Double-Booking
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets, whiteboards, and group texts cannot enforce one source of truth. When sales books a job
                      while dispatch moves another, customers get missed windows and techs get conflicting instructions.
                    </p>
                    <p>
                      FSM scheduling ties appointments to technician capacity and skills. Recurring maintenance and route
                      density improve with{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling software
                      </Link>
                      . The payoff is fewer apologies and less overtime from reactive reshuffling.
                    </p>
                  </div>
                </section>
                <section id="dispatch-visibility" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Who is where, and can we promise it?">
                    Dispatch Blind Spots and Broken ETAs
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Without a live board, the office guesses. Customers call because nobody can confirm arrival; dispatch
                      texts techs instead of reading status from the job. That friction scales badly past a handful of
                      trucks.
                    </p>
                    <p>
                      Dispatch software surfaces assignments, travel context, and job progress in one view—see{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch and capacity planning
                      </Link>
                      . Mobile status updates from{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        field technician apps
                      </Link>{" "}
                      keep the board honest.
                    </p>
                  </div>
                </section>
                <section id="field-documentation" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Lost notes, disputed work, warranty risk.">
                    Missing Field Documentation
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Photos in personal camera rolls, notes on paper, and “I told the last guy” handoffs create warranty
                      disputes and repeat visits. Work orders should capture what was done, what parts were used, and
                      customer sign-off on the job record.
                    </p>
                    <p>
                      Learn how records flow through{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        work order management
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      . For technician UX during selection, see{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="slow-invoicing" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Revenue stuck between job complete and invoice sent.">
                    Slow Invoicing and Cash-Flow Gaps
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When billable labor and materials live on sticky notes until Friday, cash collection slips. FSM ties
                      field completion to estimates and invoices—often with card payments on site or links sent automatically.
                    </p>
                    <p>
                      Accounting sync prevents a second manual entry pass—read{" "}
                      <Link href="/field-service/guides/field-service-software-and-accounting-integration" className={linkGreen}>
                        FSM and accounting integration
                      </Link>
                      . Small teams delaying adoption should review{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>{" "}
                      for a phased rollout.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Operational pain FSM addresses.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Common Problems Field Service Software Solves | BeltStack Guide",
    description:
      "Learn the operational problems field service software solves: scheduling chaos, dispatch visibility, missing field docs, and slow invoicing.",
  };
}
