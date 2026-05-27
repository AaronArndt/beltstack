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
    q: "What is collaborative CRM?",
    a: "Collaborative CRM focuses on sharing customer information across departments and with external partners—sales, marketing, support, and sometimes channels—so everyone works from consistent context.",
  },
  {
    q: "How is collaborative CRM different from operational CRM?",
    a: "Operational CRM runs workflows; collaborative CRM emphasizes communication channels and shared visibility. Modern CRM products include both: activity timelines, @mentions, and integrations that surface support tickets to sales.",
  },
  {
    q: "What tools enable collaborative CRM?",
    a: "CRM activity feeds, shared inboxes, partner portals, and integrations with Slack, email, and helpdesk. See CRM vs helpdesk software and how CRM integrations work.",
  },
  {
    q: "Do small teams need collaborative CRM?",
    a: "Even small teams benefit when more than one person touches an account. Collaborative features prevent sales and support from contradicting each other on the same customer.",
  },
  {
    q: "Is Slack collaborative CRM?",
    a: "Slack is a communication channel—it becomes collaborative CRM when integrated so conversations link to CRM records. The system of record stays in CRM; chat is the surface.",
  },
  {
    q: "How does collaborative CRM help customer retention?",
    a: "Support sees sales commitments; success sees open tickets; renewals do not start cold. See how CRM software helps customer retention.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Team collaboration", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise teams", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Copper", logoSrc: "/Logos/copper.png", rating: 4.3, bestFor: "Google Workspace", reviewHref: getCrmReviewUrl("copper") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "How Businesses Manage Customer Relationships", href: "/crm/guides/how-businesses-manage-customer-relationships" },
  { label: "CRM vs Helpdesk Software", href: "/crm/guides/crm-vs-helpdesk-software" },
  { label: "What Is Operational CRM", href: "/crm/guides/what-is-operational-crm" },
  { label: "Different Types of CRM Systems", href: "/crm/guides/different-types-of-crm-systems" },
];

export default function WhatIsCollaborativeCrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Is Collaborative CRM</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Collaborative CRM?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Collaborative CRM explained: sharing customer context across sales, marketing, support, and partners so handoffs stay coherent.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customers experience one brand, not org charts. <strong className="text-[#1A2D48]">Collaborative CRM</strong> reduces the &quot;left hand doesn&apos;t know what the right hand did&quot; problem when marketing promises, sales commits, and support resolves issues on the same account.
                    </p>
                    <p>
                      Read <Link href="/crm/guides/how-businesses-manage-customer-relationships" className={linkGreen}>how businesses manage customer relationships</Link> and <Link href="/crm/guides/different-types-of-crm-systems" className={linkGreen}>different types of CRM systems</Link>.
                    </p>
                  </div>
                </section>
                <section id="mechanisms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How teams share context.">Collaborative CRM Mechanisms</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Shared account timelines and notes</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Internal @mentions and notifications</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Helpdesk and chat integrations — <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Partner or channel portals (enterprise)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Unified customer ID across systems — <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>integrations</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="benefits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why it matters for retention.">Benefits of Collaborative CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Faster handoffs, fewer repeated questions to customers, and better renewal conversations when success sees sales history. Ties to <Link href="/crm/guides/how-crm-software-helps-customer-retention" className={linkGreen}>customer retention</Link> and day-to-day <Link href="/crm/guides/what-is-operational-crm" className={linkGreen}>operational CRM</Link> workflows.</p>
                  </div>
                </section>
                <section id="implementation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Make sharing the default.">Implementing Collaborative CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Require notes on stage changes, sync support tickets to accounts, and use shared inboxes where appropriate. <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> differ on service hub depth—compare on the <Link href="/crm" className={linkGreen}>CRM hub</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack reviews CRM collaboration features independently—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>. Tooling alone does not fix silos; process and permissions matter.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>CRM integrations</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/different-types-of-crm-systems" className={linkGreen}>Types of CRM systems</Link></span></li>
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
              <GuideSidebar title="Collaborative CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-is-collaborative-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is Collaborative CRM? | BeltStack Guide",
    description:
      "What is collaborative CRM? Sharing customer context across sales, marketing, support, and partners—mechanisms, benefits, and tools for coherent handoffs in 2026.",
    keywords: ["collaborative CRM", "CRM collaboration", "shared customer view", "CRM handoffs", "types of CRM"],
  };
}
