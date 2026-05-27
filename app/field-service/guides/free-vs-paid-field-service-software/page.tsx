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
    q: "Is free field service software good enough for small teams?",
    a: "Free plans can work for owner-operators testing digital scheduling and simple invoicing, but they often cap users, jobs, automation, or integrations. Most teams outgrow free tiers once a second dispatcher or technician needs reliable mobile updates daily.",
  },
  {
    q: "What are common limits on free field service plans?",
    a: "Typical limits include user or job caps, basic reporting, fewer automations, limited integrations with accounting or CRM, and restricted payment or marketing features. Vendors change free-tier boundaries—verify current plan pages before migrating customer data.",
  },
  {
    q: "What does paid field service software usually add?",
    a: "Paid plans typically add advanced scheduling and dispatch boards, stronger mobile workflows, team permissions, reporting, payment tools, and integrations with QuickBooks, Xero, or CRM systems. Those features reduce office rework as job volume and same-day changes increase.",
  },
  {
    q: "When should a team upgrade from free to paid?",
    a: "Upgrade when manual workarounds cost more than the subscription—usually when dispatch conflicts rise, invoicing lags behind completed jobs, or managers cannot see technician status without phone calls. Another signal is hitting user or job caps mid-season.",
  },
  {
    q: "How should we compare free and paid options?",
    a: "Compare total operating impact: admin hours saved, billing speed, callback rates, and missed upsell opportunities—not only monthly price. Trial paid plans during your busiest week and measure scheduling errors and days-to-invoice against your free baseline.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "Contractors and home services", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service pros", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
  { name: "ServiceTitan", logoSrc: "/Logos/servicetitan.png", rating: "4.5", bestFor: "Growing service companies", reviewHref: getFieldServiceReviewUrl("servicetitan") },
];

const PAGE_HREF = "/field-service/guides/free-vs-paid-field-service-software";

export default function FreeVsPaidFieldServiceSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Field Service</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Free vs Paid Field Service Software</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Free vs Paid Field Service Software</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare free and paid field service software: plan limits, true total cost, upgrade triggers, and when paid dispatch and mobile workflows beat spreadsheet workarounds.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free field service software lowers the barrier to digitizing schedules and invoices, but &quot;free&quot; rarely means zero operational cost. Payment processing fees, user caps, and missing dispatch automation still show up as late invoices, duplicate data entry, and phone calls asking technicians for status.
                    </p>
                    <p>
                      Paid plans usually unlock dispatch boards, team permissions, stronger mobile apps, reporting, and integrations with accounting or CRM. Those features matter when same-day changes, skills matching, or multi-tech routes become normal—not occasional exceptions.
                    </p>
                    <p>
                      The right decision compares total cost: subscription, processing fees, and hours spent on manual follow-up. A modest monthly fee can be cheaper than one missed maintenance upsell or one week of delayed billing across a busy crew.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>how to choose field service software</Link>{" "}
                      for evaluation criteria, and{" "}
                      <Link href="/field-service/guides/when-businesses-outgrow-spreadsheets-for-field-service" className={linkGreen}>when businesses outgrow spreadsheets</Link>{" "}
                      if you are still on manual tools. Shortlist products on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>{" "}
                      and validate limits on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service compare pages</Link>.
                    </p>
                  </div>
                </section>

                <section id="where-free-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Scenarios where free tiers are often enough initially.">When Free Can Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free options are usually workable when one person owns scheduling and billing, dispatch patterns are predictable, and reporting needs are light. They help prove adoption before standardizing processes across a larger team.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Owner-operator or solo tech with low same-day change volume.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Simple appointment calendar without a live dispatch board.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Testing digital quotes and invoices before rolling out to a crew.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Seasonal or side-business volume below typical free-tier job caps.</span>
                      </li>
                    </ul>
                    <p>
                      For early-stage context, see{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>field service software for small business</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>what field service software is</Link>.{" "}
                      If you are choosing between hosting models, read{" "}
                      <Link href="/field-service/guides/cloud-vs-on-premise-field-service-software" className={linkGreen}>cloud vs on-premise field service software</Link>.
                    </p>
                  </div>
                </section>

                <section id="free-limits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Plan caps and hidden costs that push teams toward paid tiers.">Common Free Plan Limits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free tiers are marketing funnels as much as products. Understand what stops working before you migrate mid-season customer data.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">User and technician caps</strong> — second truck or office admin may require upgrade.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Job or client limits</strong> — busy weeks hit ceilings quickly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Basic reporting</strong> — no backlog, utilization, or revenue-by-tech views.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Limited integrations</strong> — accounting, CRM, or payment sync behind paywalls.</span>
                      </li>
                    </ul>
                    <p>
                      Processing fees often apply even on free software. Pair pricing research with{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>field service software pricing</Link>{" "}
                      and operational pain points in{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>common problems field service software solves</Link>.
                    </p>
                  </div>
                </section>

                <section id="where-paid-wins" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why teams move to paid plans as operations scale.">When Paid Becomes Necessary</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Paid plans become the better option when dispatch complexity, technician count, or billing delays hurt cash flow more than subscription cost. The upgrade is usually operational—not vanity features.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Same-day emergencies and reassignments are daily, not rare.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Technicians need offline mobile, photos, and signatures on every job.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Recurring maintenance contracts need automated scheduling and reminders.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Finance needs job-level revenue sync without CSV exports.</span>
                      </li>
                    </ul>
                    <p>
                      Review{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>how dispatching software works</Link>,{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>how mobile field service apps work</Link>, and{" "}
                      <Link href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software" className={linkGreen}>estimates and invoicing in FSM</Link>{" "}
                      to see what paid tiers typically unlock in practice.
                    </p>
                  </div>
                </section>

                <section id="cost-vs-value" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical way to evaluate subscription cost against business impact.">How to Compare Cost and Value</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Build a simple comparison: monthly subscription plus payment fees plus estimated admin hours on scheduling, follow-up calls, and invoice rework. If paid automation saves even a few hours per week—or pulls in one faster payment cycle—it often clears the cost bar.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Baseline your free workflow</strong> — count scheduling conflicts and average days-to-invoice.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Trial paid during peak week</strong> — inject a no-show and a same-day emergency.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Include integration value</strong> — accounting and CRM handoffs reduce double entry.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Plan the upgrade path</strong> — export customers and open jobs before hitting caps.
                      </li>
                    </ol>
                    <p>
                      Compare vendors on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service comparisons</Link>.{" "}
                      If sales and operations share customer data, clarify boundaries in{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>field service software vs CRM</Link>.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Free and paid FSM decision FAQs.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field Service Tools to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Free vs Paid Field Service Software | BeltStack Guide",
    description:
      "Compare free vs paid field service software: plan limits, dispatch and mobile upgrade triggers, total cost including processing fees, and when paid FSM beats spreadsheet workarounds for growing crews.",
    keywords: [
      "free field service software",
      "paid FSM software",
      "field service pricing",
      "Jobber pricing",
      "upgrade field service software",
      "dispatch software cost",
      "2026",
    ],
  };
}
