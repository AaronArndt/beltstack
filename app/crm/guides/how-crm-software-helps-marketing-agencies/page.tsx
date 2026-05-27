import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmBestForUrl, getCrmCompareUrl } from "@/lib/routes";

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
    q: "Why do marketing agencies need CRM?",
    a: "Agencies need CRM for new business pipeline, proposal tracking, and client account history separate from campaign delivery tools. CRM answers who you are pitching, stage, and next step—not how a Facebook ad performed.",
  },
  {
    q: "Should agencies use CRM or project management software?",
    a: "Both. CRM for sales and client relationships; project management for deliverables and tasks. See CRM vs project management software.",
  },
  {
    q: "What CRM do agencies use?",
    a: "HubSpot is common (agencies often know the product). Pipedrive, Copper, and Monday CRM appear for pipeline-focused shops. See CRM for agencies and best CRM for agencies.",
  },
  {
    q: "Can one CRM manage multiple client accounts?",
    a: "Yes—use companies/deals for agency new business and separate structures or custom objects for client work depending on CRM. Define whether client delivery lives in PM tools vs CRM to avoid duplication.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Agency new business", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Copper", logoSrc: "/Logos/copper.png", rating: 4.3, bestFor: "Google Workspace", reviewHref: getCrmReviewUrl("copper") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline clarity", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM for Agencies", href: "/crm/guides/crm-for-agencies" },
  { label: "Best CRM for Agencies", href: getCrmBestForUrl("agencies") },
  { label: "CRM vs Project Management Software", href: "/crm/guides/crm-vs-project-management-software" },
  { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
  { label: "Project Management for Agencies", href: "/project-management/guides/project-management-for-agencies" },
];

export default function HowCrmSoftwareHelpsMarketingAgenciesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Marketing Agencies</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Marketing Agencies
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How agencies use CRM for new business pipeline, client relationships, and handoffs to delivery—separate from campaign and project tools.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Marketing agencies sell expertise and outcomes; CRM sells the agency—tracking prospects, proposals, and expansion on existing retainers. Without CRM, new business lives in partner inboxes while account teams lack visibility into what was promised in sales.
                    </p>
                    <p>
                      Read <Link href="/crm/guides/crm-for-agencies" className={linkGreen}>CRM for agencies</Link> and <Link href={getCrmBestForUrl("agencies")} className={linkGreen}>best CRM for agencies</Link>. Delivery work often sits in <Link href="/project-management/guides/project-management-for-agencies" className={linkGreen}>project management for agencies</Link>—see <Link href="/crm/guides/crm-vs-project-management-software" className={linkGreen}>CRM vs project management</Link>.
                    </p>
                  </div>
                </section>
                <section id="new-business" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Winning the next client.">New Business Pipeline in CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Inbound and referral leads</strong> — Source tracking and fast assignment.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Proposal stages</strong> — Discovery, scope sent, negotiation, won/lost.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Forecasting capacity</strong> — Pipeline informs hiring and bench planning.</span></li>
                    </ul>
                    <p><Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>Pipeline management</Link> applies the same discipline agencies teach clients.</p>
                  </div>
                </section>
                <section id="client-growth" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="After the contract is signed.">Client Accounts and Expansion</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM supports renewal conversations, upsell opportunities, and executive relationship mapping. Pair with <Link href="/crm/guides/how-crm-software-helps-customer-retention" className={linkGreen}>customer retention</Link> practices. Marketing execution stays in <Link href="/email-marketing" className={linkGreen}>email marketing</Link> and ad platforms—not duplicated in CRM unless you run client campaigns from the same hub.</p>
                    <p>Compare <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmCompareUrl("keap-vs-hubspot")} className={linkGreen}>Keap vs HubSpot</Link> for agency-friendly automation.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for agencies" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-marketing-agencies" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Marketing Agencies | BeltStack Guide",
    description:
      "Learn how marketing agencies use CRM for new business pipeline, client relationships, and handoffs to project delivery teams.",
  };
}
