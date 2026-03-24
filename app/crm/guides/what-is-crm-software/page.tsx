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
  {
    q: "What does CRM stand for?",
    a: "CRM stands for customer relationship management. CRM software helps businesses manage contacts, track leads and deals, and run sales pipelines in one place.",
  },
  {
    q: "Who uses CRM software?",
    a: "Sales teams, marketing teams, small businesses, startups, and agencies use CRM to keep contact and deal data organized, automate follow-up, and report on pipeline and revenue.",
  },
  {
    q: "Is there free CRM software?",
    a: "Yes. HubSpot and Zoho CRM offer free tiers with contact and deal management. Free plans often have limits on users or records; paid plans add automation and support.",
  },
  {
    q: "What is the difference between CRM and marketing automation?",
    a: "CRM focuses on contacts, leads, and deals—who you're selling to. Marketing automation focuses on campaigns, email sequences, and nurturing. Many tools (e.g. HubSpot) combine both. See our CRM vs marketing automation guide for details.",
  },
  {
    q: "CRM vs spreadsheets—when to switch?",
    a: "Switch to CRM when multiple people touch leads or deals, you need reminders and pipeline reports, or you want email/calendar sync. Free CRM tiers (HubSpot, Zoho CRM) make the move low-risk. See our CRM vs spreadsheets guide.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Best overall for many SMBs", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Best for sales pipelines", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.jpeg", rating: 4.4, bestFor: "Best value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "HubSpot Review", href: getCrmReviewUrl("hubspot") },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  { label: "CRM vs Marketing Automation", href: "/crm/guides/crm-vs-marketing-automation" },
];

export default function WhatIsCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What is CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What is CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM (customer relationship management) software helps businesses store contacts, track leads and deals, and manage the sales pipeline. This guide explains what CRM is, who uses it, and how it differs from spreadsheets or marketing automation.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM software centralizes information about your customers and prospects. Instead of contact details and deal status living in email, spreadsheets, or sticky notes, a CRM keeps everything in one place: who you're talking to, what stage they're in, and what to do next. Sales and marketing teams use CRM to move deals through the pipeline, automate follow-up, and report on revenue and activity.
                    </p>
                    <p>
                      Popular options include <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>. Compare them in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup.
                    </p>
                  </div>
                </section>
                <section id="what-crm-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core capabilities.">What CRM Software Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Contact and company records</strong> — Store names, email, phone, and custom fields so everyone has the same view of the customer.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Lead and deal pipeline</strong> — Track opportunities through stages (e.g. lead → qualified → proposal → closed) and see value at each step.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activity tracking</strong> — Log calls, emails, and meetings so reps and managers know what's been done and what's next.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting and dashboards</strong> — Pipeline value, conversion by stage, and activity reports help teams forecast and improve.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Workflow rules and email sequences can move deals, send reminders, and assign tasks without manual work.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="who-uses-crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical users.">Who Uses CRM Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM is used by:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Sales teams</strong> — To manage pipeline, log activities, and hit quotas. See our <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link> guide.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Small businesses</strong> — To keep contacts and deals organized without spreadsheets. <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> covers fit by size.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Startups</strong> — To scale sales and marketing from day one. <Link href="/crm/guides/crm-for-startups" className={linkGreen}>CRM for startups</Link> explains how.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Agencies</strong> — To manage multiple clients and pipelines. <Link href="/crm/guides/crm-for-agencies" className={linkGreen}>CRM for agencies</Link> has more.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="how-businesses-choose" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Selection factors.">How Businesses Choose a CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Key factors when choosing CRM include ease of use (your team will use it daily), pipeline and stage fit (matches how you sell), pricing (free vs paid, per user or flat), and integrations (email, calendar, marketing tools). Our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide goes deeper. For head-to-head comparisons see <Link href={getCrmCompareUrl("hubspot-vs-salesforce")} className={linkGreen}>HubSpot vs Salesforce</Link> and <Link href={getCrmCompareUrl("zoho-crm-vs-pipedrive")} className={linkGreen}>Zoho CRM vs Pipedrive</Link>.</p>
                    <p>If you're still using spreadsheets, see our <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> guide for when to switch. To understand how CRM fits with marketing tools, read <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM Software to Consider" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-is-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What is CRM Software | BeltStack Guide",
    description: "Learn what CRM software is, who uses it, and how it helps businesses manage contacts, leads, and sales pipelines.",
  };
}
