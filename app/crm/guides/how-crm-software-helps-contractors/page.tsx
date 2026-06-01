import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmBestForUrl } from "@/lib/routes";

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
    q: "Do contractors need CRM software?",
    a: "Contractors need CRM when they pursue commercial bids, manage builder relationships, or run outbound beyond word-of-mouth—and when estimates and follow-up outgrow memory and texts. Job operations may still live in field service software.",
  },
  {
    q: "What is the best CRM for contractors?",
    a: "HubSpot, Pipedrive, and Zoho CRM are common for trades; general contractors may need Salesforce for complex pursuits. See best CRM for general contractors, HVAC, plumbing, and related best-for pages.",
  },
  {
    q: "Should contractors use CRM or Jobber?",
    a: "Jobber and similar tools handle scheduling, quotes, and invoicing. CRM adds formal pipeline for larger sales motions. Many use FSM for ops and CRM when sales complexity grows.",
  },
  {
    q: "How do contractors track leads in CRM?",
    a: "Capture leads from web forms, referrals, and bid boards; assign owners; move opportunities through estimate and proposal stages. See how businesses track leads using CRM.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Growing trades", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Estimate pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "Best CRM for General Contractors", href: getCrmBestForUrl("general-contractors") },
  { label: "Best CRM for HVAC", href: getCrmBestForUrl("hvac") },
  { label: "CRM vs Field Service Software", href: "/crm/guides/crm-vs-field-service-software" },
  { label: "How CRM Software Helps Service Businesses", href: "/crm/guides/how-crm-software-helps-service-businesses" },
  { label: "Field Service Hub", href: "/field-service" },
];

export default function HowCrmSoftwareHelpsContractorsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Contractors</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Contractors
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How HVAC, plumbing, electrical, and general contractors use CRM for bids, builder relationships, and follow-up—alongside field service and project tools.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractors often master operations first—dispatch, work orders, invoices—then hit a ceiling when commercial pursuits, multi-trade bids, or marketing programs need a real pipeline. CRM software organizes those sales motions without replacing your truck-roll system.
                    </p>
                    <p>
                      Compare trade-specific picks: <Link href={getCrmBestForUrl("general-contractors")} className={linkGreen}>best CRM for general contractors</Link>, <Link href={getCrmBestForUrl("hvac")} className={linkGreen}>HVAC</Link>, <Link href={getCrmBestForUrl("plumbing")} className={linkGreen}>plumbing</Link>, and <Link href={getCrmBestForUrl("electricians")} className={linkGreen}>electrical</Link>. Operations: <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>.
                    </p>
                  </div>
                </section>
                <section id="scenarios" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When CRM pays off on the job site business.">Contractor Scenarios CRM Supports</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Residential service upsell</strong> — Membership and replacement opportunities after initial visit.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Commercial and GC pursuits</strong> — Long-cycle bids with multiple contacts per account.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Builder and property manager relationships</strong> — Repeat work from the same partners.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Storm or seasonal campaigns</strong> — Lead source tracking and fast assignment.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM is not your dispatch board.">Pairing CRM With Trade Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>CRM vs field service</Link> to split responsibilities. Integrate won opportunities into FSM clients when both systems are in play. Project-heavy GC work may also use <Link href="/project-management/best-for/general-contractors" className={linkGreen}>project management for general contractors</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for contractors" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-contractors" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Contractors | BeltStack Guide",
    description:
      "Learn how contractors use CRM for bids, builder relationships, and sales follow-up alongside field service and project management tools.",
  };
}
