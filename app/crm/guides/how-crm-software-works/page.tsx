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

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "How does CRM software work in simple terms?",
    a: "CRM stores people and companies you sell to, tracks deals through pipeline stages, logs activities (calls, emails, meetings), and can automate reminders and workflows. Integrations sync email and calendar so reps spend less time on data entry.",
  },
  {
    q: "What data does a CRM store?",
    a: "Typical objects include contacts, companies (accounts), leads, deals (opportunities), activities, and sometimes quotes or tickets. Custom fields let you match your industry or sales process.",
  },
  {
    q: "Do I need IT to set up CRM?",
    a: "Most cloud CRMs are designed for business users to configure pipelines and invite users without developers. Complex integrations (ERP, data warehouse) may need IT or a partner. Start with core pipeline and email sync before advanced automation.",
  },
  {
    q: "How is CRM different from a contact list?",
    a: "A contact list is static. CRM adds deal stages, ownership, activity history, automation, and reporting so multiple people can sell from the same live system. See CRM vs spreadsheets for when to switch.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "All-in-one SMB", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise depth", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Visual pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "What Does CRM Stand For", href: "/crm/guides/what-does-crm-stand-for" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
];

export default function HowCrmSoftwareWorksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Works</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical walkthrough of how CRM systems store customer data, run sales pipelines, automate follow-up, and connect to the tools your team already uses.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM software works by turning customer and deal information into structured records everyone on the revenue team can access. Instead of hunting through inboxes or shared spreadsheets, reps open one system to see who owns a lead, what was said last week, and which deals are at risk.
                    </p>
                    <p>
                      Products like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> share the same core ideas with different UX and pricing. If you are new to the category, start with <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> and <Link href="/crm/guides/what-does-crm-stand-for" className={linkGreen}>what CRM stands for</Link>; this guide focuses on how the machinery runs day to day.
                    </p>
                  </div>
                </section>
                <section id="core-objects" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The building blocks inside most CRMs.">Core Objects and Records</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Contacts and companies</strong> — People and the organizations they belong to. Email, phone, role, and custom fields (plan tier, territory, etc.).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Leads and deals</strong> — A lead is often an unqualified inquiry; a deal (opportunity) is a potential sale with amount and close date. Many teams convert leads into deals when qualified.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activities</strong> — Calls, emails, meetings, and notes tied to a record so history survives rep turnover.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Owners and teams</strong> — Each record has an owner; permissions control who can view or edit sensitive accounts.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="pipeline" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How revenue moves through the system.">Pipeline Stages and Workflow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The pipeline is the visual and logical spine of CRM. You define stages—such as qualified, demo scheduled, proposal sent, negotiation—and move deals forward as selling progresses. Stage changes can trigger tasks, notifications, or required fields (e.g. close date before moving to &quot;won&quot;).
                    </p>
                    <p>
                      Managers use pipeline views to forecast: total value by stage, aging deals, and win rates. Reps use the same view to prioritize daily work. Pipeline-first tools like Pipedrive emphasize drag-and-drop boards; suites like HubSpot and Salesforce add marketing and service modules around the same deal object.
                    </p>
                  </div>
                </section>
                <section id="automation-integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reducing manual work and silos.">Automation, Integrations, and Reporting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Automation</strong> includes task reminders, email sequences, lead assignment rules, and workflow triggers when fields change. Start small—over-automation before adoption hurts trust in the data.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Integrations</strong> connect Gmail, Outlook, calendars, billing, support desks, and sometimes ERP. Email sync logs conversations on the contact record without copy-paste. Compare integration depth when you evaluate vendors on our <Link href="/crm/compare" className={linkGreen}>CRM compare hub</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Reporting</strong> turns pipeline and activity data into dashboards: conversion by stage, rep activity, and revenue forecasts. That is a major reason teams leave spreadsheets; see <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link>.
                    </p>
                  </div>
                </section>
                <section id="getting-started" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A sensible rollout sequence.">How Teams Typically Implement CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-3 list-decimal list-inside text-neutral-700">
                      <li>Define pipeline stages that match how you actually sell.</li>
                      <li>Import existing contacts and open deals from CSV or email tools.</li>
                      <li>Turn on email/calendar sync for daily users.</li>
                      <li>Add one or two automations (e.g. task when deal sits idle 7 days).</li>
                      <li>Review reports weekly until data quality habits stick.</li>
                    </ol>
                    <p>
                      Our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide covers evaluation criteria; <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> lists strong starting points by team type.
                    </p>
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
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-works" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Works | BeltStack Guide",
    description:
      "Learn how CRM software stores contacts and deals, runs pipelines, automates follow-up, and integrates with email and other business tools.",
  };
}
