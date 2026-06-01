import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl } from "@/lib/routes";

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
    q: "What is the difference between CRM and ERP?",
    a: "CRM manages customer relationships, leads, and sales pipeline. ERP manages company-wide operations: finance, inventory, procurement, manufacturing, and HR in integrated modules. CRM is revenue-facing; ERP is operations- and finance-facing.",
  },
  {
    q: "Do I need CRM or ERP first?",
    a: "Most growing product and services businesses need CRM first when pipeline and follow-up are the bottleneck. ERP becomes critical when inventory valuation, multi-entity accounting, and supply chain complexity exceed what accounting plus point tools can handle.",
  },
  {
    q: "Can ERP replace CRM?",
    a: "Some ERP suites include sales modules, but depth for pipeline UX, sales automation, and rep adoption often lags dedicated CRM. Many enterprises run Salesforce or HubSpot integrated to ERP for financial customer master data.",
  },
  {
    q: "How do CRM and ERP share data?",
    a: "Typical pattern: CRM owns opportunity and activity data; ERP owns billed revenue, inventory, and AR balances. Integrations sync account IDs, product catalogs, and closed-won orders. Define which system is the golden record for each field.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "CRM + enterprise ERP integrations", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "SMB CRM", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Zoho suite alignment", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "CRM vs Field Service Software", href: "/crm/guides/crm-vs-field-service-software" },
  { label: "Difference Between ERP, CRM, and FSM", href: "/field-service/guides/difference-between-erp-crm-and-fsm" },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function CrmVsErpPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM vs ERP</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CRM vs ERP: What&apos;s the Difference?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM centers customers and revenue; ERP centers operations and finance. Learn how each system fits, when you need one or both, and how integrations keep data consistent.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers comparing CRM and ERP are usually answering different questions. CRM asks: who are we selling to, where are deals, and what should reps do today? ERP asks: how do we run inventory, manufacturing, purchasing, and financial close across the company?
                    </p>
                    <p>
                      The acronyms overlap in vendor marketing—both claim a &quot;single source of truth&quot;—but the workflows differ. This guide sits in our <Link href="/crm/guides" className={linkGreen}>CRM guides</Link> hub. Service businesses with trucks and jobs should also read <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>the difference between ERP, CRM, and FSM</Link> and <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>CRM vs field service software</Link>.
                    </p>
                  </div>
                </section>
                <section id="definitions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Scope of each category.">What CRM and ERP Each Do</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">CRM (customer relationship management)</strong> stores contacts, leads, opportunities, activities, and sales forecasts. Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> optimize rep productivity and pipeline visibility. See <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">ERP (enterprise resource planning)</strong> integrates core back-office functions: general ledger, accounts payable and receivable, inventory, MRP, procurement, and often HR. Examples include NetSuite, SAP, Microsoft Dynamics 365 (which also offers CRM modules), and Odoo at smaller scale. Many SMBs start with <Link href="/accounting" className={linkGreen}>accounting software</Link> before full ERP.
                    </p>
                  </div>
                </section>
                <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Side-by-side focus areas.">CRM vs ERP at a Glance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Primary users</strong> — CRM: sales, marketing, success. ERP: finance, operations, supply chain, leadership.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Core data</strong> — CRM: pipeline, activities, campaigns. ERP: GL, inventory, BOMs, purchase orders, payroll (sometimes).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Typical buying trigger</strong> — CRM: lost deals, messy follow-up. ERP: manual reconciliations, stockouts, audit complexity.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Implementation profile</strong> — CRM: weeks for SMB cloud. ERP: months to years depending on modules and customization.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="when-each" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match software to the bottleneck.">When You Need CRM, ERP, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose <strong className="text-[#1A2D48]">CRM first</strong> if revenue growth is limited by pipeline discipline, not by factory output or inventory accuracy. Choose <strong className="text-[#1A2D48]">ERP</strong> when financial and operational data must be unified across sites, legal entities, or complex SKUs.
                    </p>
                    <p>
                      Mature companies often run <strong className="text-[#1A2D48]">both</strong>: CRM through close-won hands off order and billing data to ERP; finance sees realized revenue while sales keeps forecasting in CRM. Avoid duplicating customer masters—pick ownership rules and integrate.
                    </p>
                    <p>
                      Evaluate CRM on our <Link href="/crm/compare" className={linkGreen}>compare hub</Link> and <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide before bundling everything into an ERP sales module by default.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reliable category advice.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack keeps ERP vs CRM comparisons workflow-based because vendors frequently rebundle modules. Validate ERP scope with your accountant and operations lead; validate CRM with sales users in a trial. Product reviews and comparisons linked from this page are starting points, not substitutes for your requirements doc.
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
              <GuideSidebar title="CRM for revenue teams" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-vs-erp" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM vs ERP: What's the Difference? | BeltStack Guide",
    description:
      "Learn how CRM and ERP differ in scope, when businesses need each, and how sales pipeline software integrates with finance and operations systems.",
  };
}
