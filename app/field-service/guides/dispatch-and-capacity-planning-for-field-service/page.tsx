import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { getFieldServiceCompareUrl, getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "What is capacity planning in field service?",
    a: "It is the practice of matching available technician hours and skills to expected demand—so you promise service windows you can hit. Software helps visualize the board, but discipline (buffers, on-call rules, SLA honesty) still comes from leadership.",
  },
  {
    q: "Do small contractors need advanced dispatch?",
    a: "Not always. A clear calendar and simple assignment may suffice for a few trucks. When missed windows, overtime, or callbacks spike, invest in boards that show skills, zones, and travel context—often around the same time you evaluate heavier tools like ServiceTitan.",
  },
  {
    q: "How does this relate to customer booking tools?",
    a: "Self-serve scheduling sets expectations before dispatch sees the board. If booking promises same-day slots the board cannot fulfill, dispatch fails no matter which FSM you buy. Read our scheduling guides on emergency and same-day booking in parallel.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "FieldPulse",
    logoSrc: "/Logos/fieldpulse.png",
    rating: "4.4",
    bestFor: "Ops-forward dispatch",
    reviewHref: getFieldServiceReviewUrl("fieldpulse"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Scale and call-center depth",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Balanced SMB dispatch",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
];

const PAGE_HREF = "/field-service/guides/dispatch-and-capacity-planning-for-field-service";

export default function DispatchAndCapacityPlanningForFieldServicePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">
                      Dispatch &amp; Capacity Planning
                    </li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Dispatch Boards &amp; Capacity Planning for Field Service
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Zones, skills, travel time, and realistic promises—how to evaluate dispatch workflows in FSM software
                    before volume overwhelms the calendar.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatch is where sales commitments meet technician reality. A pretty map means little if the board
                      cannot express who is licensed for gas work, who is still in training, or how far apart jobs are in
                      rush hour. Strong FSM dispatch surfaces constraints early; weak dispatch hides them until the customer
                      is angry.
                    </p>
                    <p>
                      We write these guides for operators comparing platforms like{" "}
                      <Link href={getFieldServiceCompareUrl("jobber-vs-servicetitan")} className={linkGreen}>
                        Jobber vs ServiceTitan
                      </Link>{" "}
                      or{" "}
                      <Link href={getFieldServiceCompareUrl("fieldpulse-vs-jobber")} className={linkGreen}>
                        FieldPulse vs Jobber
                      </Link>
                      —where dispatch depth often separates winners. Pair this article with{" "}
                      <Link href="/scheduling/guides/route-optimization-for-service-businesses" className={linkGreen}>
                        route optimization for service businesses
                      </Link>{" "}
                      when customer booking and routing interact.
                    </p>
                  </div>
                </section>
                <section id="board-basics" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What a usable board shows.">Dispatch Board Essentials</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Technician context</strong> — Skills, shift end times, and
                          current job status—not only names on a grid.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Travel and sequencing</strong> — Even lightweight map or drive-time
                          hints reduce double-backs; enterprise tools add richer capacity math.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Unassigned and hold queues</strong> — Work waiting for parts,
                          permits, or callbacks should be visible so it does not fall off the radar.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="capacity" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Promises you can keep.">Capacity, SLAs, and Same-Day Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Capacity planning ties marketing and CSRs to dispatch. If inbound booking promises four-hour windows
                      the crew cannot staff, software will not fix the brand damage. Model peak weeks and seasonality before
                      you tune automation rules.
                    </p>
                    <p>
                      For emergency-heavy trades, also read{" "}
                      <Link href="/scheduling/guides/emergency-and-same-day-appointment-scheduling" className={linkGreen}>
                        emergency and same-day appointment scheduling
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="mobile" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Closing the loop.">Field Updates and Mobile Trust</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatch is only as good as technician updates. If mobile status changes lag, the board lies. Evaluate
                      mobile and dispatch together—see{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      .
                    </p>
                    <p>
                      Explore{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and the{" "}
                      <Link href="/field-service/guides" className={linkGreen}>
                        full FSM guide library
                      </Link>{" "}
                      for related evaluation topics.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
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
    title: "Dispatch & Capacity Planning for Field Service | BeltStack Guide",
    description:
      "Evaluate FSM dispatch boards: skills, zones, travel time, capacity, and same-day work. How dispatch ties to technician mobile updates and customer promises.",
  };
}
