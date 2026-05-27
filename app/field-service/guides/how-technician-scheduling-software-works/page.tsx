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
    q: "How does technician scheduling software work?",
    a: "Technician scheduling software maintains calendars per tech or crew, books appointments within availability rules, supports recurring jobs (maintenance agreements, route days), and often enforces skills or territory constraints. Scheduled jobs feed dispatch for same-day adjustments and appear on mobile apps as the daily plan.",
  },
  {
    q: "Is technician scheduling different from employee shift scheduling?",
    a: "Yes. Shift scheduling covers when someone is on the clock. Technician scheduling covers which customer jobs they perform during those hours. Field service tools focus on job appointments tied to locations, not just clock-in times.",
  },
  {
    q: "Can scheduling software prevent double-booking?",
    a: "Good FSM scheduling blocks overlapping appointments for the same technician and warns when travel time makes back-to-back jobs unrealistic. Rules vary by product—test with realistic job durations, not 30-minute placeholders.",
  },
  {
    q: "How do recurring routes work in scheduling tools?",
    a: "Recurring routes generate repeating appointments—weekly lawn service, quarterly HVAC maintenance, monthly pest visits. Changes to the series can apply to one occurrence or all future dates. This reduces manual re-entry and keeps capacity predictable.",
  },
  {
    q: "When should scheduling hand off to dispatch?",
    a: "Scheduling owns the plan; dispatch owns exceptions. When jobs slip, emergencies arrive, or technicians call out, dispatch reassigns without erasing the original schedule history. Mature teams treat the calendar and dispatch board as one continuous workflow.",
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

const PAGE_HREF = "/field-service/guides/how-technician-scheduling-software-works";

export default function HowTechnicianSchedulingSoftwareWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How Technician Scheduling Software Works
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Technician Scheduling Software Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how technician scheduling software plans recurring routes, matches skills, and builds efficient
                    daily calendars before dispatch handles live changes.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technician scheduling software answers a planning question: when should each job happen, and which
                      technician is the right fit? It is distinct from generic calendar apps because it understands
                      service context—travel between stops, recurring maintenance, skills, and customer time windows.
                    </p>
                    <p>
                      In field service platforms, scheduling usually feeds dispatch. The calendar holds the intended plan;
                      the dispatch board handles the messy middle of the day when jobs run long or emergencies appear.
                      Both views should share the same job record so nothing gets retyped.
                    </p>
                    <p>
                      Scheduling is a core part of{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        field service management
                      </Link>
                      . For live assignment mechanics, see{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning
                      </Link>
                      .
                    </p>
                    <p>
                      Small teams adopting their first tool should read{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>{" "}
                      before over-buying advanced scheduling tiers they will not use in year one.
                    </p>
                  </div>
                </section>
                <section id="scheduling-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Calendars, availability, and appointment rules.">
                    How Scheduling Builds the Daily Plan
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most technician scheduling modules share these building blocks:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Per-technician calendars</strong> — see each tech&apos;s day
                          or week at a glance.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Availability and buffers</strong> — block lunch, travel, or
                          admin time so bookings stay realistic.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer windows</strong> — morning/afternoon slots or
                          tighter arrival commitments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Conflict detection</strong> — warn on overlaps and impossible
                          travel gaps.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Online booking and CSR intake both land on the same calendar—misaligned promises are a common
                      failure mode covered in{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        capacity planning
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="recurring-skills" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Routes, agreements, and qualified assignment.">
                    Recurring Routes and Skills Matching
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring scheduling powers maintenance agreements, property portfolios, and route-based trades
                      like landscaping or pest control. Skills matching ensures only qualified technicians receive
                      regulated work—gas, electrical, refrigeration, or commercial certifications.
                    </p>
                    <p>
                      Trade-specific guides such as{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        field service software for HVAC
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/field-service-software-for-plumbing" className={linkGreen}>
                        plumbing
                      </Link>{" "}
                      explain how seasonal demand shapes scheduling rules in practice.
                    </p>
                  </div>
                </section>
                <section id="scheduling-to-field" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From calendar to technician mobile app.">
                    From Schedule to Field Execution
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Once scheduled, jobs become work orders technicians see on mobile—scope, history, forms, and
                      photos. See{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      .
                    </p>
                    <p>
                      Completed jobs should flow to invoicing and{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        accounting integration
                      </Link>{" "}
                      without re-keying line items. If marketing tools also book appointments, align them with{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      so scheduling stays authoritative.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Technician scheduling mechanics.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
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
    title: "How Technician Scheduling Software Works | BeltStack Guide",
    description:
      "Learn how technician scheduling software works: calendars, recurring routes, skills matching, conflict detection, and handoff to dispatch and mobile.",
  };
}
