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
  { q: "Why connect scheduling software to a CRM?", a: "CRM integration links booking events to contact and pipeline records so teams can track conversion, follow-up quality, and customer history in one place." },
  { q: "What information usually syncs?", a: "Typical sync fields include contact details, booking status, meeting outcomes, assigned owner, and notes used for sales or service follow-up." },
  { q: "Can CRM integration improve sales outcomes?", a: "Yes. When scheduled meetings update CRM stages automatically, teams reduce admin work and improve lead response consistency." },
  { q: "Do all scheduling tools support CRM integrations?", a: "Not all. Some offer direct connectors, while others require automation platforms or APIs for deeper workflow logic." },
  { q: "How should buyers evaluate CRM integration quality?", a: "Check field mapping flexibility, sync direction, failure alerts, and whether updates can trigger automations across sales and support workflows." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Sales handoff", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.png", rating: "4.5", bestFor: "CRM workflows", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Service intake", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-integrates-with-crm-systems";

export default function HowSchedulingSoftwareIntegratesWithCrmSystemsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Scheduling Software Integrates With CRM Systems</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Integrates With CRM Systems
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A buyer-focused guide to connecting scheduling and CRM data so every booking supports sales and customer lifecycle workflows.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling and CRM integration helps revenue teams turn booked meetings into measurable pipeline
                      progress. Without integration, bookings remain disconnected from contact records and follow-up
                      workflows, creating data gaps and inconsistent sales execution.
                    </p>
                    <p>
                      For service and account teams, CRM-connected scheduling also improves handoffs. Staff can see
                      context before calls, log outcomes quickly, and trigger next actions without duplicate data entry.
                    </p>
                    <p>
                      If your team is still evaluating core scheduling workflows, begin with{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what scheduling software is
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      .
                    </p>
                    <p>
                      Use this page with the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>guides</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare pages</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>best-for pages</Link>. Related category research often includes{" "}
                      <Link href="/crm" className={linkGreen}>CRM software</Link> and{" "}
                      <Link href="/time-tracking" className={linkGreen}>time tracking</Link>.
                    </p>
                  </div>
                </section>
                <section id="integration-value" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Align booking operations with customer lifecycle goals.">Where CRM Integrations Create Value</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Integration value depends on your process maturity. High-performing teams define ownership across
                      lead capture, qualification, meeting execution, and follow-up before syncing any data.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Auto-create or enrich contacts when meetings are booked</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Update opportunity stages based on meeting completion status</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Trigger reminders and follow-up tasks for account owners</span></li>
                      <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span><span>Report conversion and cycle time by meeting type</span></li>
                    </ul>
                  </div>
                </section>
                <section id="data-mapping-governance" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Clean mapping prevents silent workflow failures.">Data Mapping and Governance Essentials</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define required fields, ownership rules, and conflict behavior before launch. Teams should decide
                      which system is authoritative for contact records, lifecycle stage, and meeting outcomes.
                    </p>
                    <p>
                      Add audit checks to monitor sync failures. Small mapping mismatches can quietly break automation
                      chains and distort funnel reporting.
                    </p>
                  </div>
                </section>
                <section id="implementation-patterns" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Choose direct connectors or automation flows by complexity.">Implementation Patterns for SMB and Mid-Market Teams</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Direct integrations suit straightforward pipelines. Teams with complex routing, multiple business
                      units, or regional workflows often need automation middleware for conditional logic and exception handling.
                    </p>
                    <p>
                      If payroll or labor planning also depends on schedule outcomes, align integration strategy with{" "}
                      <Link href="/payroll" className={linkGreen}>payroll workflows</Link> from the start.
                    </p>
                  </div>
                </section>
                <section id="buyer-checklist" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Evaluate beyond basic app marketplace badges.">CRM Integration Buyer Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Verify bidirectional sync support, custom field mapping, automation triggers, and failure alerting.
                      Ask vendors for real implementation examples relevant to your sales or service model.
                    </p>
                    <p>
                      Then validate performance against booked-to-held meeting rates and follow-up SLAs, not just setup speed.
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
    title: "How Scheduling Software Integrates With CRM Systems | BeltStack Guide",
    description:
      "Learn how businesses connect scheduling software with CRM systems to improve lead follow-up, pipeline visibility, and customer lifecycle workflows.",
    keywords: [
      "scheduling crm integration",
      "appointment scheduling crm",
      "calendar booking crm sync",
      "sales scheduling software",
      "crm workflow automation scheduling",
      "meeting booking crm",
    ],
  };
}
