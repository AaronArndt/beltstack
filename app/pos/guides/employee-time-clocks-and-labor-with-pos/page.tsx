import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedPosResources } from "@/components/guides/RelatedPosResources";
import { POS_GUIDE_SIDEBAR_ITEMS, POS_GUIDE_RELATED_ITEMS } from "@/lib/data/posGuides";
import { getPosReviewUrl } from "@/lib/routes";

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
    q: "Do POS systems include employee time clocks?",
    a: "Many retail and restaurant POS platforms offer team time tracking, punch in/out, or integrations with scheduling apps. Depth varies: some are enough for hourly wage and breaks; others expect a dedicated workforce product for compliance-heavy rules or multi-location overtime.",
  },
  {
    q: "Should tips flow through POS before payroll?",
    a: "Often yes for service businesses: POS captures pooled or individual tips and paid-outs; payroll needs those allocations to stay compliant with reporting and withholding rules in your jurisdiction. Map the flow with your payroll provider before go-live.",
  },
  {
    q: "Is POS time tracking enough or do I need separate time tracking software?",
    a: "If staff only work on site and hours tie cleanly to locations, POS may suffice. If you have mixed roles, travel, or job costing, a dedicated time tracking system feeding approved hours into payroll can reduce disputes—see our time tracking vs timesheets guide.",
  },
  {
    q: "How does this relate to scheduling software?",
    a: "Scheduling predicts who should work; time clocks record who actually worked. Best practice is integrating schedule, actual punches, and payroll so managers see variance early. Our scheduling hub covers appointment-focused businesses; POS labor modules cover shift retail and food service.",
  },
];

export default function EmployeeTimeClocksAndLaborWithPosPage() {
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
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/pos" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        POS Software
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/pos/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Employee Time Clocks &amp; Labor with POS
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Employee Time Clocks &amp; Labor with POS
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How retail and restaurant teams track hours at the POS, handle tips and breaks, and pass clean data to
                    payroll—without re-keying shifts in a second system.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Labor is often the largest variable cost in stores and dining rooms. Buyers land here when registers
                      already run on{" "}
                      <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square</Link>,{" "}
                      <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>Toast</Link>,{" "}
                      <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link>, or{" "}
                      <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed</Link> but payroll still
                      depends on spreadsheets or mismatched punch exports. POS-native time tools reduce friction at shift
                      change, but they are not a substitute for payroll compliance—think of POS as capture, payroll as pay
                      calculation and filing.
                    </p>
                    <p>
                      This guide is hosted with our <Link href="/pos/guides" className={linkGreen}>POS guides</Link> and linked
                      from <Link href="/time-tracking/guides" className={linkGreen}>time tracking guides</Link>. Next steps:{" "}
                      <Link href="/payroll/guides/payroll-for-hourly-workers" className={linkGreen}>payroll for hourly workers</Link>,{" "}
                      <Link href="/time-tracking/guides/how-time-tracking-software-works" className={linkGreen}>
                        how time tracking software works
                      </Link>, and{" "}
                      <Link href="/pos/guides/restaurant-pos-systems-guide" className={linkGreen}>restaurant POS systems</Link>{" "}
                      or <Link href="/pos/guides/retail-pos-software-guide" className={linkGreen}>retail POS software</Link> by
                      vertical.
                    </p>
                  </div>
                </section>
                <section id="what-pos-captures" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Clock-ins, roles, and locations.">What POS Labor Modules Typically Capture</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Punch events</strong> tied to employee IDs and store locations.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Role or job codes</strong> for wage differentials (e.g. server vs
                          prep).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Break and tip workflows</strong> where the vendor supports them,
                          especially in restaurant suites.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="payroll-handoff" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Approved hours and audit trails.">Handoff to Payroll</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Strong operations add a manager approval step between raw punches and pay runs: corrections for missed
                      clocks, training time, or call-ins. Your{" "}
                      <Link href="/payroll" className={linkGreen}>payroll software</Link> should ingest totals per employee per
                      pay period with an audit trail that matches what supervisors approved. If your POS integration only sends
                      daily totals, confirm how overtime and split shifts are calculated—garbage in still means payroll fixes on
                      Friday night.
                    </p>
                  </div>
                </section>
                <section id="stack-patterns" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When to stay in POS vs add workforce apps.">Common Stack Patterns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">POS + native labor</strong> fits single-site retailers with straightforward
                      rules. <strong className="text-[#1A2D48]">POS + scheduling + payroll</strong> fits restaurants with
                      complex floors and pooled tips. <strong className="text-[#1A2D48]">POS + dedicated time tracking</strong>{" "}
                      fits mixed hourly and salaried organizations where not everyone punches at a register.
                    </p>
                    <p>
                      For inventory-heavy retail, labor and COGS together drive margin—see{" "}
                      <Link href="/pos/guides/pos-inventory-integration" className={linkGreen}>POS inventory integration</Link>{" "}
                      and <Link href="/accounting" className={linkGreen}>accounting software</Link> for downstream reporting.
                    </p>
                  </div>
                </section>
                <section id="trust" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Labor law varies; verify in your region.">Experience and Accuracy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack focuses on software fit and workflows; wage-and-hour rules differ by jurisdiction. Treat POS and
                      payroll vendor claims as starting points, validate break and overtime handling with qualified advisors, and
                      run parallel pay periods during implementation when you change time sources.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="POS & labor" items={[...POS_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/employee-time-clocks-and-labor-with-pos" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Employee Time Clocks & Labor with POS | BeltStack Guide",
    description:
      "Learn how retail and restaurant POS systems handle time clocks, tips, and labor data—and how to connect POS hours to payroll and scheduling without duplicate entry.",
  };
}
