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
    q: "Do real estate agents need CRM?",
    a: "Agents and teams benefit from CRM when lead volume, long nurture cycles, and referral networks exceed what contact apps and memory can handle. CRM tracks buyers, sellers, showings, and deal stages in one pipeline.",
  },
  {
    q: "What CRM features matter for real estate?",
    a: "Lead routing, email and text templates, pipeline by transaction type, drip campaigns, and mobile access. Integrations with IDX or marketing tools vary—verify on vendor sites during trial.",
  },
  {
    q: "Is there CRM built for real estate?",
    a: "Many agents use general CRM (HubSpot, Follow Up Boss-style tools, or real-estate-specific platforms). Compare ease of use, per-seat cost, and broker compliance requirements.",
  },
  {
    q: "How is real estate CRM different from property management software?",
    a: "Sales CRM tracks transactions and client relationships. Property management software handles leases, tenants, and maintenance. Investors may use both; see best CRM for property management for overlap.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Lead nurture", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Keap", logoSrc: "/Logos/keap.jpeg", rating: 4.3, bestFor: "SMB automation", reviewHref: getCrmReviewUrl("keap") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Team value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "Best CRM for Property Management", href: getCrmBestForUrl("property-management") },
  { label: "How Businesses Track Leads Using CRM", href: "/crm/guides/how-businesses-track-leads-using-crm" },
  { label: "CRM vs Marketing Automation", href: "/crm/guides/crm-vs-marketing-automation" },
  { label: "How CRM Software Helps Customer Retention", href: "/crm/guides/how-crm-software-helps-customer-retention" },
];

export default function HowCrmSoftwareHelpsRealEstateBusinessesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Real Estate Businesses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Real Estate Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM for agents, teams, and brokers: lead nurture, transaction pipeline, referrals, and long-cycle relationships in one system.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Real estate is relationship-heavy and time-shifted—a buyer you met last year may close this quarter. CRM keeps every touchpoint, preference, and showing note on the contact so you nurture at scale without feeling robotic.
                    </p>
                    <p>
                      General CRMs like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("keap")} className={linkGreen}>Keap</Link> support automation; teams compare options on <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>. Property managers may also read <Link href={getCrmBestForUrl("property-management")} className={linkGreen}>best CRM for property management</Link>.
                    </p>
                  </div>
                </section>
                <section id="workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Day-to-day agent workflows.">How Agents Use CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Lead capture and routing</strong> — Zillow, site forms, open houses into one queue.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Nurture sequences</strong> — Drips by buyer vs seller stage; <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>CRM automation</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Transaction pipeline</strong> — Under contract, inspection, closing stages.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Referral tracking</strong> — Source and thank-you discipline for sphere growth.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="teams" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Brokerages and teams.">CRM for Teams and Compliance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Brokerages need permissions, lead distribution rules, and reporting across agents. Confirm data ownership and export policies with your broker before committing. <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>How to choose CRM software</Link> covers evaluation; avoid <Link href="/crm/guides/why-crm-implementations-fail" className={linkGreen}>failed rollouts</Link> by training on mobile workflows early.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for real estate" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-real-estate-businesses" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Real Estate Businesses | BeltStack Guide",
    description:
      "Learn how CRM software helps real estate agents and teams with lead nurture, transaction pipeline, referrals, and long-cycle client relationships.",
  };
}
