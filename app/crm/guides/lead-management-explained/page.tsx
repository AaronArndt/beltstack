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
    q: "What is lead management?",
    a: "Lead management is the process of capturing inquiries, qualifying them, assigning owners, nurturing until ready, and converting qualified leads into sales opportunities. CRM software is the usual system of record for lead management.",
  },
  {
    q: "What is the difference between a lead and a contact in CRM?",
    a: "A lead is often an unqualified or early-stage person or company. A contact is typically a known person tied to an account; after qualification, leads convert to contacts and deals.",
  },
  {
    q: "What is lead scoring?",
    a: "Lead scoring ranks leads by fit and engagement (demographics, behavior, source) so sales focuses on the best prospects. Rules-based or AI scoring lives in CRM or marketing tools.",
  },
  {
    q: "Is lead management the same as lead generation?",
    a: "No. Lead generation creates demand and inquiries; lead management processes those inquiries inside CRM. See the lead generation hub for top-of-funnel tools.",
  },
  {
    q: "What is speed-to-lead?",
    a: "Elapsed time from inquiry to first sales response. Faster speed-to-lead correlates with higher conversion—track it as a CRM KPI and automate assignment rules.",
  },
  {
    q: "Should we delete unqualified leads?",
    a: "Archive or mark lost with a reason instead of deleting—deletion breaks attribution reporting. Clean duplicates; keep history for marketing ROI.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Inbound leads", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Lead rules", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Fast conversion", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "How Businesses Track Leads Using CRM", href: "/crm/guides/how-businesses-track-leads-using-crm" },
  { label: "How CRM Automation Works", href: "/crm/guides/how-crm-automation-works" },
  { label: "Lead Generation Hub", href: "/lead-generation" },
  { label: "CRM vs Marketing Automation", href: "/crm/guides/crm-vs-marketing-automation" },
];

export default function LeadManagementExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Lead Management Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Lead Management Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Lead management from capture to conversion: qualification, scoring, routing, nurture, and how CRM supports each step.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Lead management sits between marketing that generates interest and sales that closes revenue. Without a system, speed-to-lead suffers and marketing cannot prove which channels work.
                    </p>
                    <p>
                      CRM operationalizes lead management—see <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>how businesses track leads using CRM</Link> and <Link href="/lead-generation" className={linkGreen}>lead generation</Link> for top-of-funnel tools.
                    </p>
                  </div>
                </section>
                <section id="stages" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="End-to-end flow.">Lead Management Stages</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-3 list-decimal list-inside text-neutral-700">
                      <li><strong className="text-[#1A2D48]">Capture</strong> — Forms, ads, events, imports</li>
                      <li><strong className="text-[#1A2D48]">Qualify</strong> — Fit criteria and BANT-style checks</li>
                      <li><strong className="text-[#1A2D48]">Assign</strong> — Round-robin or territory rules via <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>automation</Link></li>
                      <li><strong className="text-[#1A2D48]">Nurture</strong> — Email sequences; <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link></li>
                      <li><strong className="text-[#1A2D48]">Convert</strong> — Create contact and deal in <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>pipeline</Link></li>
                    </ol>
                  </div>
                </section>
                <section id="crm-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why CRM is central.">How CRM Supports Lead Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Source tracking, SLA on first response, activity history, and conversion metrics feed <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link>. Compare <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> for inbound-heavy teams and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> for fast handoff to deals.</p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where lead programs break.">Common Lead Management Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>No owner on new leads, duplicate form submissions, and marketing-sourced leads never accepted by sales. Fix with <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>automation</Link>, <Link href="/crm/guides/how-businesses-clean-crm-data" className={linkGreen}>data hygiene</Link>, and <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>form integrations</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack reviews CRM lead features independently—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, <Link href="/crm" className={linkGreen}>CRM hub</Link>.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>Track leads in CRM</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link></span></li>
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
              <GuideSidebar title="Lead management CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/lead-management-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Lead Management Explained | BeltStack Guide",
    description:
      "Lead management explained for 2026: capture, qualification, scoring, routing, nurture, conversion, and how CRM software supports each stage of the funnel.",
    keywords: ["lead management", "CRM leads", "lead scoring", "sales leads", "lead conversion"],
  };
}
