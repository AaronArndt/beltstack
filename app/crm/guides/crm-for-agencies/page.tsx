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

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  { q: "What CRM is best for agencies?", a: "Agencies often need multi-client or multi-pipeline support. HubSpot, Zoho CRM, and Monday are strong options; choose by whether you need strict client separation, project-style boards, or all-in-one marketing and sales. See our CRM for agencies guide and best CRM software roundup." },
  { q: "Can agencies use one CRM for all clients?", a: "Yes. Many agencies use a single CRM with pipelines or segments per client, or use custom objects/tags to keep client data separate. Some tools offer dedicated agency or multi-tenant features. Monday and HubSpot both support flexible structures." },
  { q: "HubSpot vs Monday for agencies?", a: "HubSpot offers all-in-one marketing and sales with pipelines and segments; Monday emphasizes boards and project-style views. Choose HubSpot for strong marketing automation and sales in one place; Monday for visual boards and client workspaces. See our Monday vs HubSpot comparison." },
  { q: "Do agencies need separate tools for client work and sales?", a: "Not always. One CRM can handle both: use pipelines or boards per client for delivery/projects, and a separate pipeline or segment for your own sales (new business). Tools like HubSpot and Monday support this with pipelines, filters, and reporting." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "All-in-one", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: 4.4, bestFor: "Boards & clients", reviewHref: getCrmReviewUrl("monday-crm") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
];

export default function CrmForAgenciesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM for Agencies</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM for Agencies</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How agencies use CRM to manage multiple clients, pipelines, and team collaboration in one place.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Agencies need CRM that supports multiple clients or pipelines, keeps deal and contact data organized, and allows team collaboration without duplicate spreadsheets or siloed inboxes. Whether you run a marketing agency, design studio, or consulting shop, you're managing both your own sales pipeline (new business) and client work—follow-ups, deliverables, and renewals.</p>
                    <p>Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("monday-crm")} className={linkGreen}>Monday</Link> offer flexible structures—pipelines per client, boards, or segments—so you can see pipeline and activity by client or team. <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> works for sales-focused agencies that want a simple pipeline. Compare in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> and <Link href={getCrmCompareUrl("monday-crm-vs-hubspot")} className={linkGreen}>Monday vs HubSpot</Link>.</p>
                  </div>
                </section>
                <section id="agency-needs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What agencies look for.">Why Agencies Use CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Multi-client or multi-pipeline</strong> — Separate or tag deals and contacts by client so you can see pipeline and activity per account.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Team visibility</strong> — Everyone sees pipeline and activities without duplicate spreadsheets; handoffs and follow-ups stay in one place.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline and revenue by client or team for forecasting and client reviews.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Client management vs sales pipeline</strong> — Use the same tool for client work (deliverables, renewals) and your own new-business pipeline.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="agency-workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How agency workflows fit into CRM.">Agency Workflows: Client Work and Sales</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Agency CRM use often splits into two streams: <strong className="text-[#1A2D48]">client management</strong>—tracking projects, follow-ups, renewals, and contacts per client—and <strong className="text-[#1A2D48]">your own sales pipeline</strong> for new business. A single CRM can handle both with pipelines or boards per client and a dedicated pipeline for inbound/outbound leads. Reporting then lets you see revenue and pipeline by client, by team member, or for new business. Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> (pipelines and segments) and <Link href={getCrmReviewUrl("monday-crm")} className={linkGreen}>Monday</Link> (boards and workspaces) fit this pattern; <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> is a good fit if your agency is sales-led and you mainly need deal and activity tracking.</p>
                  </div>
                </section>
                <section id="reporting-and-collab" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reporting, follow-ups, and team collaboration.">Reporting, Follow-Ups, and Collaboration</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Strong reporting matters for agencies: pipeline and revenue by client, win/loss by source, and activity per team member. Look for dashboards and reports that filter by client or pipeline so you can run client reviews and internal forecasting without exporting to spreadsheets. Follow-up reminders and task assignment keep nothing falling through the cracks when multiple people touch a client or deal. Many agencies also rely on email and calendar integration so meetings and emails log automatically. Our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide covers evaluation criteria; the <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup includes options with strong reporting and collaboration.</p>
                  </div>
                </section>
                <section id="recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where HubSpot, Monday, and Pipedrive fit.">CRM Recommendations for Agencies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> suits agencies that want all-in-one marketing and sales: pipelines, segments, email campaigns, and reporting in one platform. <Link href={getCrmReviewUrl("monday-crm")} className={linkGreen}>Monday</Link> fits teams that prefer boards and project-style views and need clear client workspaces. <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> offers value and multi-currency support for agencies with international clients. Compare <Link href={getCrmCompareUrl("monday-crm-vs-hubspot")} className={linkGreen}>Monday vs HubSpot</Link> for a detailed breakdown, and see our <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> guide if your agency is still small and evaluating simplicity vs features.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for Agencies" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-for-agencies" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "CRM for Agencies | BeltStack Guide", description: "How agencies use CRM to manage multiple clients, pipelines, reporting, and team collaboration—with recommendations for HubSpot, Monday, and more." };
}
