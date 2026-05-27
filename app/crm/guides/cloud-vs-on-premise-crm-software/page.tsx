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
    q: "What is cloud CRM vs on-premise CRM?",
    a: "Cloud CRM runs on the vendor’s servers—you access it in a browser or app with a subscription. On-premise CRM is installed on your own servers or private cloud; you manage updates, uptime, and infrastructure.",
  },
  {
    q: "Is cloud CRM secure?",
    a: "Reputable vendors invest in encryption, access controls, and compliance certifications (SOC 2, GDPR tools). Security also depends on your passwords, SSO, and admin policies. Regulated industries should review vendor docs and run legal review.",
  },
  {
    q: "Who still uses on-premise CRM?",
    a: "Organizations with strict data residency rules, legacy integrations, or IT teams that standardize on self-hosted stacks sometimes choose on-premise or private cloud. Most SMBs and mid-market buyers default to cloud.",
  },
  {
    q: "Can I switch from on-premise to cloud CRM?",
    a: "Yes, with a migration project: export contacts and deals, map fields, retrain users, and rebuild integrations. Plan parallel running during cutover to avoid losing pipeline history.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Cloud SMB", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Cloud enterprise", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Cloud value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "How Much CRM Software Costs", href: "/crm/guides/how-much-crm-software-costs" },
  { label: "How CRM Software Works", href: "/crm/guides/how-crm-software-works" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "CRM vs ERP", href: "/crm/guides/crm-vs-erp" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function CloudVsOnPremiseCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Cloud vs On-Premise CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Cloud vs On-Premise CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare cloud-hosted CRM with on-premise deployments: cost, maintenance, security, and which model fits your IT capacity and compliance needs.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most CRM buyers today choose cloud (SaaS): fast rollout, automatic updates, and mobile access without running servers. On-premise CRM still appears in regulated or IT-heavy environments that want data inside their own boundary. The decision is operational as much as technical.
                    </p>
                    <p>
                      Popular cloud CRMs include <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>. See <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link> for what you get after signup.
                    </p>
                  </div>
                </section>
                <section id="cloud" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Subscription CRM in the browser.">Cloud CRM: Pros and Cons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pros</strong> — Quick start, vendor-managed updates, mobile apps, predictable per-user pricing. See <Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>CRM pricing</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Cons</strong> — Ongoing subscription; dependency on vendor uptime; data stored per vendor policies.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="on-premise" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM on your infrastructure.">On-Premise CRM: Pros and Cons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pros</strong> — More control over servers and networking; can align with strict residency requirements when implemented correctly.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Cons</strong> — Higher upfront and IT labor; you own patches, backups, and disaster recovery; slower feature delivery than SaaS.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="who-chooses" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Matching deployment to your team.">Who Typically Chooses Each Model</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Cloud</strong> fits startups, SMBs, and most mid-market sales orgs without a mandate to self-host. <strong className="text-[#1A2D48]">On-premise or private cloud</strong> may fit when legal or security teams require it—evaluate total cost including IT headcount, not license price alone.</p>
                    <p>Use <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> alongside this guide; validate security on vendor trust centers during trials.</p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent category guidance.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack compares deployment models at the category level because vendor offerings change. Confirm current hosting options, data regions, and compliance artifacts on each vendor’s site before purchase—especially for healthcare, finance, or government-adjacent work.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Cloud CRM options" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/cloud-vs-on-premise-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Cloud vs On-Premise CRM Software | BeltStack Guide",
    description:
      "Compare cloud and on-premise CRM: deployment models, security, cost, maintenance, and which fits your business.",
  };
}
