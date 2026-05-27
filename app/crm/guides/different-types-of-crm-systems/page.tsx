import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl } from "@/lib/routes";

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
    q: "What are the main types of CRM systems?",
    a: "The classic taxonomy is operational CRM (daily sales/marketing/service workflows), analytical CRM (reporting and insight), and collaborative CRM (sharing context across teams and partners). Most modern cloud CRM products combine all three to varying degrees.",
  },
  {
    q: "Which type of CRM do small businesses need?",
    a: "Small businesses primarily need operational CRM with basic analytics. Add collaborative features through integrations; deep analytical CRM is optional until data volume grows.",
  },
  {
    q: "Is Salesforce operational or analytical CRM?",
    a: "Salesforce is primarily operational with strong analytical and collaborative capabilities on higher tiers. The label matters less than matching modules to your workflow.",
  },
  {
    q: "How do CRM types relate to industry-specific software?",
    a: "Industry tools (field service, helpdesk, ERP) overlap functions. CRM types describe capabilities; compare categories in CRM vs field service and CRM vs ERP guides.",
  },
  {
    q: "Can one CRM be operational and analytical?",
    a: "Yes—most cloud CRM products include pipeline tools plus dashboards. The taxonomy describes emphasis, not separate products you must buy twice.",
  },
  {
    q: "What CRM type matters most for startups?",
    a: "Operational CRM first—pipeline and contacts. Add analytical dashboards as volume grows; collaborative features matter once multiple roles touch accounts.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "All-in-one SMB", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise suite", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Broad modules", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "What Is Operational CRM", href: "/crm/guides/what-is-operational-crm" },
  { label: "What Is Analytical CRM", href: "/crm/guides/what-is-analytical-crm" },
  { label: "What Is Collaborative CRM", href: "/crm/guides/what-is-collaborative-crm" },
  { label: "What Is CRM Software", href: "/crm/guides/what-is-crm-software" },
];

export default function DifferentTypesOfCrmSystemsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Different Types of CRM Systems</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Different Types of CRM Systems
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Overview of operational, analytical, and collaborative CRM—and how modern platforms combine these types for sales, marketing, and service teams.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM textbooks and enterprise RFPs still use three types: <strong className="text-[#1A2D48]">operational</strong>, <strong className="text-[#1A2D48]">analytical</strong>, and <strong className="text-[#1A2D48]">collaborative</strong>. In practice, buyers evaluate one product that spans all three—depth varies by vendor and price tier.
                    </p>
                    <p>
                      Start with <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> and <Link href="/crm/guides/what-does-crm-stand-for" className={linkGreen}>what CRM stands for</Link> if you are new to the category.
                    </p>
                  </div>
                </section>
                <section id="operational" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Execute customer-facing work.">Operational CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Pipeline, leads, campaigns, tickets—the daily system of record for revenue teams. <Link href="/crm/guides/what-is-operational-crm" className={linkGreen}>What is operational CRM</Link> goes deeper.</p>
                  </div>
                </section>
                <section id="analytical" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Measure and predict.">Analytical CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Reports, dashboards, segmentation, and forecasting built on CRM data. <Link href="/crm/guides/what-is-analytical-crm" className={linkGreen}>What is analytical CRM</Link> and <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>how reporting works</Link>.</p>
                  </div>
                </section>
                <section id="collaborative" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Share context across teams.">Collaborative CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Cross-department visibility and partner channels. <Link href="/crm/guides/what-is-collaborative-crm" className={linkGreen}>What is collaborative CRM</Link> and <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link> for support alignment.</p>
                  </div>
                </section>
                <section id="choosing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buy for workflow, not taxonomy.">Choosing a CRM Across Types</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Prioritize operational fit first—will reps use the pipeline daily? Then validate reporting and integrations. Use <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack maps CRM categories in guides and scores products in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm" className={linkGreen}>CRM hub</Link>. Taxonomy helps RFPs; trials decide fit.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/what-is-operational-crm" className={linkGreen}>Operational CRM</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>CRM integrations</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm" className={linkGreen}>CRM software hub</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Full-spectrum CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/different-types-of-crm-systems" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Different Types of CRM Systems | BeltStack Guide",
    description:
      "Different types of CRM systems explained: operational, analytical, and collaborative CRM—and how modern platforms combine them for SMB and enterprise buyers in 2026.",
    keywords: ["types of CRM", "operational CRM", "analytical CRM", "collaborative CRM", "CRM systems"],
  };
}
