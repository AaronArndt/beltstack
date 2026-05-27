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
    q: "Is field service part of CRM or a separate system?",
    a: "It depends on the product and your workflow. Some CRMs include field service modules; some FSM platforms include light CRM features. Many growing service businesses run both and integrate customer and job records so each team works in the right tool.",
  },
  {
    q: "What does CRM usually handle compared with FSM?",
    a: "CRM focuses on leads, pipeline stages, account relationships, and sales forecasting before and between jobs. FSM focuses on scheduling, dispatch, work orders, technician mobile execution, and service billing tied to specific visits. The handoff between won deals and scheduled work is where overlap causes confusion.",
  },
  {
    q: "Do small service businesses need both CRM and FSM?",
    a: "Not always at first. Owner-operators often start with one platform that covers booking and billing. Add a dedicated CRM when sales follow-up, marketing automation, or multi-rep pipeline management becomes a daily bottleneck separate from dispatch.",
  },
  {
    q: "Can one platform replace both CRM and FSM?",
    a: "All-in-one tools can work for lighter operations if dispatch, mobile apps, and job lifecycle tracking are genuinely strong—not just CRM calendars with a map pin. Evaluate against real same-day volume; see our guide on whether CRM can replace FSM for a deeper comparison.",
  },
  {
    q: "How do we avoid duplicate data between CRM and FSM?",
    a: "Define system ownership by workflow: CRM owns opportunities and account strategy; FSM owns active jobs and technician status. Integrate shared entities—customers, sites, job outcomes—so teams are not retyping addresses, notes, or invoice lines in two places.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "Contractors and home services", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service pros", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
  { name: "ServiceTitan", logoSrc: "/Logos/servicetitan.png", rating: "4.5", bestFor: "Growing service companies", reviewHref: getFieldServiceReviewUrl("servicetitan") },
];

const PAGE_HREF = "/field-service/guides/is-field-service-part-of-crm";

export default function IsFieldServicePartOfCrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Is Field Service Part of CRM?</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Is Field Service Part of CRM?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Clarify where field service ends and CRM begins, how vendor modules blur the line, and how service businesses combine both without duplicate data or dispatch confusion.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service and CRM are related but not the same discipline. CRM software is built to win and nurture customer relationships across the revenue cycle—leads, opportunities, follow-ups, and account history. Field service management (FSM) is built to run the work after the sale: scheduling trucks, dispatching technicians, capturing job details, and billing for completed visits.
                    </p>
                    <p>
                      Vendors increasingly bundle both, which makes the question feel binary when the real answer is usually &quot;connected.&quot; Salesforce, HubSpot, Zoho, and others offer field service or service modules; Jobber, Housecall Pro, and ServiceTitan include customer records and light pipeline features. The overlap is real, but each category still optimizes for different daily users—sales and marketing versus dispatch and technicians.
                    </p>
                    <p>
                      Confusion shows up at the handoff: a deal marked won in CRM does not automatically become a dispatch-ready job with skills, parts, and a service window. Conversely, a completed job in FSM does not replace pipeline reporting for commercial teams. Treating one system as the other leads to spreadsheets, phone calls, and billing delays.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>field service software vs CRM</Link>{" "}
                      for a side-by-side comparison, then read{" "}
                      <Link href="/field-service/guides/can-crm-software-replace-fsm-software" className={linkGreen}>can CRM software replace FSM software</Link>{" "}
                      if you are evaluating a single platform. Browse{" "}
                      <Link href="/crm" className={linkGreen}>CRM software</Link>{" "}
                      and{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>{" "}
                      once you know which workflow is breaking first.
                    </p>
                  </div>
                </section>

                <section id="where-crm-ends" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM strengths in pipeline, account data, and commercial workflows.">What CRM Typically Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM systems usually own everything that happens before and between jobs from a sales perspective: who the account is, what was promised commercially, and where revenue opportunities stand.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Lead capture and qualification</strong> — web forms, campaigns, and inbound routing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pipeline stages and forecasting</strong> — deal probability, owners, and next steps.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Account and contact relationships</strong> — parent companies, sites, and communication history.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Marketing automation</strong> — email sequences, lists, and attribution where included.</span>
                      </li>
                    </ul>
                    <p>
                      If your bottleneck is follow-up and conversion—not daily truck routing—prioritize CRM depth on{" "}
                      <Link href="/crm" className={linkGreen}>CRM software</Link>{" "}
                      and validate integrations with whatever runs dispatch. For operational context, see{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>how field service software works</Link>.
                    </p>
                  </div>
                </section>

                <section id="where-fsm-owns" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="FSM strengths in scheduling, dispatch, and field execution.">What Field Service Typically Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FSM platforms own the operational thread from scheduled visit through payment: who goes where, what was done on site, and what should be invoiced. They are optimized for throughput, service quality, and technician usability—not quarterly pipeline reviews.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — boards, skills, zones, and live reassignment.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Work orders and mobile execution</strong> — checklists, photos, signatures, and status sync.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Estimates and service billing</strong> — quote approval through invoice from job lines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Technician and route visibility</strong> — capacity, backlog, and job history per site.</span>
                      </li>
                    </ul>
                    <p>
                      Those workflows sit inside{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>what field service management includes</Link>.{" "}
                      For dispatch mechanics, read{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>how dispatching software works</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>how mobile field service apps work</Link>.
                    </p>
                  </div>
                </section>

                <section id="overlap-zone" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Shared customer data and where teams collide without clear ownership.">Where CRM and Field Service Overlap</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Both systems store customers, contacts, addresses, and communication notes. Both may send emails or texts. The overlap is useful when integrated; painful when two teams maintain parallel records with different field names and statuses.
                    </p>
                    <p>Typical overlap zones include:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Appointments and calendars</strong> — CRM calendars rarely replace dispatch boards under same-day pressure.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Quotes and proposals</strong> — may originate in CRM or FSM depending on who sells the job.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Service history</strong> — technicians need job-level detail; account managers need relationship context.</span>
                      </li>
                    </ul>
                    <p>
                      Before buying &quot;one system for everything,&quot; pressure-test overlap with{" "}
                      <Link href="/field-service/guides/can-crm-software-replace-fsm-software" className={linkGreen}>can CRM replace FSM</Link>{" "}
                      and list daily workflows in{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>how to choose field service software</Link>.{" "}
                      Compare vendors on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service compare pages</Link>.
                    </p>
                  </div>
                </section>

                <section id="integration-model" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How businesses combine CRM and FSM without confusion.">How to Combine CRM and FSM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The best setup gives each system clear ownership and syncs shared entities. A practical model: CRM owns opportunities and commercial strategy; FSM owns jobs, technician status, and service billing. When a deal closes, create or update the job in FSM with scope, site, and scheduling constraints—do not expect dispatchers to hunt pipeline screens for truck-ready detail.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Map entities</strong> — account, contact, site, opportunity, work order, invoice.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Pick a source of truth</strong> — one master for addresses and customer legal name.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Define status handoffs</strong> — e.g., &quot;Closed won&quot; triggers job creation or scheduling queue.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Close the loop</strong> — job outcomes and revenue sync back for account expansion reporting.
                      </li>
                    </ol>
                    <p>
                      If operations—not sales—is the pain point, implement FSM first; add CRM when pipeline discipline pays off. Shortlist tools on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>{" "}
                      and review{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>common problems field service software solves</Link>{" "}
                      to align priorities before integration spend.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM and field service overlap FAQs.">FAQs</SectionTitle>
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
    title: "Is Field Service Part of CRM? | BeltStack Guide",
    description:
      "Learn whether field service is part of CRM, where FSM and CRM overlap, how Salesforce and service platforms differ, and how to combine CRM pipeline data with dispatch and billing workflows.",
    keywords: [
      "field service CRM",
      "FSM vs CRM",
      "field service management",
      "CRM integration",
      "service business software",
      "dispatch software",
      "2026",
    ],
  };
}
