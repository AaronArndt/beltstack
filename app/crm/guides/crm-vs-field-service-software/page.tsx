import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl, getFieldServiceReviewUrl, getFieldServiceCompareUrl } from "@/lib/routes";

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
    q: "What is the difference between CRM and field service software?",
    a: "CRM tracks leads, opportunities, and customer relationships for sales and account growth. Field service software (FSM) schedules technicians, dispatches jobs, manages work orders, and often handles job-based invoicing. CRM is revenue pipeline; FSM is operational execution in the field.",
  },
  {
    q: "Can CRM replace field service software?",
    a: "Rarely. CRMs lack technician-first mobile workflows, dispatch boards, and job costing built for trades. Some FSM tools include light CRM features; many service businesses run both or use FSM with basic lead tracking until sales complexity grows.",
  },
  {
    q: "Which should a home services business buy first?",
    a: "If jobs must get scheduled, dispatched, and invoiced reliably, implement field service software first. Add CRM when lead volume, outbound sales, or account management need a formal pipeline beyond estimates in FSM.",
  },
  {
    q: "Where can I read more from the field service side?",
    a: "See field service software vs CRM and difference between ERP, CRM, and FSM on our field service guides hub for the same comparison from an operations perspective.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Sales CRM", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: 4.6, bestFor: "FSM for contractors", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: 4.5, bestFor: "Home services ops", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Field Service Software Hub", href: "/field-service" },
  { label: "Field Service Software vs CRM", href: "/field-service/guides/field-service-software-vs-crm" },
  { label: "Difference Between ERP, CRM, and FSM", href: "/field-service/guides/difference-between-erp-crm-and-fsm" },
  { label: "CRM vs ERP", href: "/crm/guides/crm-vs-erp" },
  { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function CrmVsFieldServiceSoftwarePage() {
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
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">CRM vs Field Service Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CRM vs Field Service Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Sales pipeline and customer relationships in CRM vs scheduling, dispatch, and jobs in field service management—when you need each and how they work together.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractors, HVAC companies, and other trade businesses often hear both &quot;CRM&quot; and &quot;field service software&quot; in the same sales demo. They solve different bottlenecks: CRM when leads and deals need discipline; field service management (FSM) when trucks, technicians, and job completion need discipline.
                    </p>
                    <p>
                      This guide is written for buyers starting from <Link href="/crm" className={linkGreen}>CRM research</Link>. For the operations-first view, read <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>field service software vs CRM</Link> on our <Link href="/field-service/guides" className={linkGreen}>field service guides</Link> hub.
                    </p>
                  </div>
                </section>
                <section id="definitions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Jobs each category owns.">What CRM and Field Service Software Each Do</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">CRM</strong> — Contacts, leads, deal stages, sales activities, and forecasting. Examples: <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>. See <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Field service software (FSM)</strong> — Scheduling, dispatch, mobile work orders, parts, and job invoicing. Examples: <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>Jobber</Link>, <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>Housecall Pro</Link>, <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>ServiceTitan</Link>. Compare on <Link href={getFieldServiceCompareUrl("jobber-vs-housecall-pro")} className={linkGreen}>Jobber vs Housecall Pro</Link> and our <Link href="/field-service/compare" className={linkGreen}>field service comparisons</Link>.
                    </p>
                  </div>
                </section>
                <section id="when-each" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match spend to the pain.">When You Need CRM, FSM, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">FSM-first</strong> — Missed appointments, chaotic dispatch, paper work orders, slow invoicing after visits.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">CRM-first</strong> — Strong ops but weak outbound, no pipeline view, or account managers losing renewal context.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Both</strong> — Growing sales team plus growing crew; integrate so won deals become scheduled jobs without re-keying addresses.</span></li>
                    </ul>
                    <p>Three-way stack questions (finance + CRM + FSM) are covered in <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>difference between ERP, CRM, and FSM</Link> and <Link href="/crm/guides/crm-vs-erp" className={linkGreen}>CRM vs ERP</Link>.</p>
                  </div>
                </section>
                <section id="integration" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One customer, two systems done right.">Connecting CRM and Field Service Data</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define which system owns the customer record, service addresses, and job history. Minimum viable alignment: same customer ID or email, sync of contact details, and a handoff when a deal is won (CRM) to create a job or client (FSM). Some platforms blur lines—evaluate mobile UX for techs and pipeline UX for reps separately.
                    </p>
                    <p>
                      For CRM selection see <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> and <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link>. For FSM see <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM + field service" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-vs-field-service-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM vs Field Service Software | BeltStack Guide",
    description:
      "Learn how CRM and field service management software differ, when trades and service businesses need each, and how to connect sales pipeline with job operations.",
  };
}
