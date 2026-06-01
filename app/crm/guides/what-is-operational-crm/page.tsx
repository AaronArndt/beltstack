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
    q: "What is operational CRM?",
    a: "Operational CRM supports front-office processes: sales pipeline, marketing campaigns, and service interactions. It is the day-to-day system reps and marketers use to run customer-facing workflows.",
  },
  {
    q: "What is an example of operational CRM?",
    a: "A rep moving a deal through stages, logging a call, and setting a follow-up task in HubSpot or Pipedrive is operational CRM. A support agent creating a ticket linked to an account is also operational when done in CRM or integrated helpdesk.",
  },
  {
    q: "How is operational CRM different from analytical CRM?",
    a: "Operational CRM executes processes; analytical CRM analyzes data from those processes. Modern platforms blend both—see what is analytical CRM and different types of CRM systems.",
  },
  {
    q: "Is operational CRM the same as CRM software?",
    a: "Most CRM products buyers evaluate are primarily operational CRM with reporting added. The label helps when comparing specialized analytics warehouses vs daily sales tools.",
  },
  {
    q: "What industries use operational CRM most?",
    a: "B2B sales, agencies, real estate, contractors with BD teams, and any business with a repeatable pipeline. Operational CRM is less relevant when you only need a contact list without deals.",
  },
  {
    q: "How does operational CRM connect to accounting?",
    a: "Won deals often trigger invoices in accounting software via integrations—not inside CRM alone. See how CRM integrations work and the accounting software hub for billing handoffs.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Ops + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales operations", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Process automation", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "Different Types of CRM Systems", href: "/crm/guides/different-types-of-crm-systems" },
  { label: "What Is Analytical CRM", href: "/crm/guides/what-is-analytical-crm" },
  { label: "What Is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "How CRM Automation Works", href: "/crm/guides/how-crm-automation-works" },
];

export default function WhatIsOperationalCrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Is Operational CRM</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Operational CRM?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Operational CRM explained: the customer-facing processes sales, marketing, and service run daily—and how most CRM software you buy fits this category.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In CRM taxonomy, <strong className="text-[#1A2D48]">operational CRM</strong> is about execution: capturing leads, running pipelines, sending campaigns, and resolving service issues. When someone says they &quot;use CRM,&quot; they usually mean operational CRM.
                    </p>
                    <p>
                      Compare <Link href="/crm/guides/what-is-analytical-crm" className={linkGreen}>analytical CRM</Link> and <Link href="/crm/guides/what-is-collaborative-crm" className={linkGreen}>collaborative CRM</Link> in <Link href="/crm/guides/different-types-of-crm-systems" className={linkGreen}>different types of CRM systems</Link>. Foundation: <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link>.
                    </p>
                  </div>
                </section>
                <section id="functions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Front-office workflows.">Operational CRM Functions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Sales force automation</strong> — Pipeline, quotes, activities. <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>Pipeline management</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Marketing automation</strong> — Forms, email, nurture. <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Service automation</strong> — Cases and tickets; <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Workflow rules</strong> — <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>How CRM automation works</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="products" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What buyers actually evaluate.">Operational CRM in the Market</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> are operational CRM platforms with varying depth in marketing and service modules. See <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> and the <Link href="/crm" className={linkGreen}>CRM hub</Link>.</p>
                  </div>
                </section>
                <section id="vs-other-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Execution vs insight vs sharing.">Operational vs Analytical vs Collaborative</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Operational CRM runs the workday. <Link href="/crm/guides/what-is-analytical-crm" className={linkGreen}>Analytical CRM</Link> measures it. <Link href="/crm/guides/what-is-collaborative-crm" className={linkGreen}>Collaborative CRM</Link> shares context across teams. Modern clouds blend all three—see <Link href="/crm/guides/different-types-of-crm-systems" className={linkGreen}>different types of CRM systems</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack explains CRM taxonomy in guides and tests operational workflows in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-software-works" className={linkGreen}>How CRM software works</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>CRM integrations</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>Sales pipeline management</Link></span></li>
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
              <GuideSidebar title="Operational CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-is-operational-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is Operational CRM? | BeltStack Guide",
    description:
      "What is operational CRM? Sales, marketing, and service workflows explained—how it differs from analytical and collaborative CRM, and tools buyers evaluate in 2026.",
    keywords: ["operational CRM", "types of CRM", "sales CRM", "CRM workflows", "CRM software"],
  };
}
