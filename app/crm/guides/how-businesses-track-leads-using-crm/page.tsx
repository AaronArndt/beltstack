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
    q: "How do businesses track leads in CRM?",
    a: "Leads enter CRM via forms, imports, integrations, or manual entry. Each lead gets an owner, source, status, and activities. Qualified leads convert to contacts and deals on the pipeline. Automation can assign and remind reps based on rules.",
  },
  {
    q: "What is the difference between a lead and a deal in CRM?",
    a: "A lead is often an early-stage inquiry not yet qualified. A deal (opportunity) is a potential sale with amount and stage in the pipeline. Workflows vary: some teams skip leads and create deals directly.",
  },
  {
    q: "Can CRM track leads from website forms?",
    a: "Yes. Most CRMs connect to web forms, landing pages, or tools like HubSpot forms, with leads created automatically and optionally assigned to reps.",
  },
  {
    q: "How does lead tracking relate to marketing automation?",
    a: "Marketing automation scores and nurtures leads; CRM owns handoff to sales and pipeline. Combined platforms share one record. See CRM vs marketing automation.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Inbound + CRM", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Lead rules", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Deal-focused", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "How Sales Pipeline Management Works", href: "/crm/guides/how-sales-pipeline-management-works" },
  { label: "How CRM Automation Works", href: "/crm/guides/how-crm-automation-works" },
  { label: "CRM vs Marketing Automation", href: "/crm/guides/crm-vs-marketing-automation" },
  { label: "How CRM Software Improves Sales", href: "/crm/guides/how-crm-software-improves-sales" },
  { label: "Lead Generation Hub", href: "/lead-generation" },
];

export default function HowBusinessesTrackLeadsUsingCrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Track Leads Using CRM</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Track Leads Using CRM
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    From capture to qualification and conversion: how CRM gives teams one system to track leads, assign owners, and move opportunities into the pipeline.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Lead tracking is the front door of sales operations. Without a system, inquiries sit in inboxes, spreadsheets, or ad-hoc notes—and response time suffers. CRM centralizes leads with source, owner, and next action so nothing depends on who checked email last.
                    </p>
                    <p>
                      Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> excel at inbound capture; <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> emphasizes fast conversion to deals. See <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link> for the underlying data model.
                    </p>
                  </div>
                </section>
                <section id="capture" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Getting leads into the system.">Lead Capture and Sources</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Website forms and chat</strong> — Auto-create CRM records on submit.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Paid ads and landing pages</strong> — UTM or integration passes campaign source.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Imports and spreadsheets</strong> — CSV migration from events or lists.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Manual entry</strong> — Referrals and outbound prospects reps add directly.</span></li>
                    </ul>
                    <p>For outbound and paid lead workflows see our <Link href="/lead-generation" className={linkGreen}>lead generation hub</Link>.</p>
                  </div>
                </section>
                <section id="qualification" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Separating signal from noise.">Qualification, Assignment, and Status</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Teams define lead status (new, contacted, qualified, disqualified) and criteria for qualification—budget, authority, need, timeline, or simpler rules for SMB. Owners receive leads via round-robin or territory rules; <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>CRM automation</Link> can assign and create tasks on creation.
                    </p>
                    <p>Qualified leads become contacts and deals in <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>pipeline management</Link>.</p>
                  </div>
                </section>
                <section id="measurement" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What leadership reviews.">Reporting on Lead Performance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM reports show volume by source, conversion to opportunity, response time, and rep activity. That supports marketing ROI conversations and sales coaching. Pair with <Link href="/crm/guides/how-crm-software-improves-sales" className={linkGreen}>how CRM improves sales</Link> for outcome framing.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Lead tracking CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-businesses-track-leads-using-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Track Leads Using CRM | BeltStack Guide",
    description:
      "Learn how businesses capture, qualify, assign, and convert leads in CRM—from forms and imports to pipeline and reporting.",
  };
}
