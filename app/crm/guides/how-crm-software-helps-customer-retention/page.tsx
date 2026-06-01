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
    q: "How does CRM help customer retention?",
    a: "CRM helps retention by centralizing account history, renewal dates, support context, and expansion opportunities so teams follow up before churn. Success and sales see the same record instead of siloed notes.",
  },
  {
    q: "Is CRM only for acquiring new customers?",
    a: "No. While CRM is known for pipeline and leads, the same system supports renewals, upsells, and health checks on existing accounts—especially in subscription and B2B businesses.",
  },
  {
    q: "What CRM features matter most for retention?",
    a: "Activity history, renewal or contract fields, tasks for check-ins, health or risk flags, and integrations with billing or support. Reporting on renewal pipeline and churn reasons helps leadership act.",
  },
  {
    q: "Should customer success use CRM or a separate tool?",
    a: "Often CRM plus helpdesk or a CS platform. Many teams keep the account record in CRM and sync tickets from support. See CRM vs helpdesk software for how categories fit together.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Lifecycle + CRM", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise accounts", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "SMB retention workflows", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "How Businesses Manage Customer Relationships", href: "/crm/guides/how-businesses-manage-customer-relationships" },
  { label: "CRM vs Helpdesk Software", href: "/crm/guides/crm-vs-helpdesk-software" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
];

export default function HowCrmSoftwareHelpsCustomerRetentionPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Customer Retention</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Customer Retention
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Retention is not only a support metric—CRM gives sales and success teams shared context, timely follow-up, and visibility into renewal and expansion risk.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customer retention improves when you know who is at risk, who is ready to expand, and what was promised last quarter. CRM software holds that history in one account record: deals won, emails logged, support escalations, and renewal dates—so relationship work is proactive, not reactive.
                    </p>
                    <p>
                      Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> span acquisition through renewal; SMB teams often start with <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>. Pair this guide with <Link href="/crm/guides/how-businesses-manage-customer-relationships" className={linkGreen}>how businesses manage customer relationships</Link>.
                    </p>
                  </div>
                </section>
                <section id="retention-levers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where CRM supports loyalty.">Retention Levers CRM Enables</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Unified account view</strong> — Sales, success, and leadership see the same timeline.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Renewal and expansion pipeline</strong> — Track upcoming contracts like deals in <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>pipeline management</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Proactive tasks</strong> — Check-ins before renewal; <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>automation</Link> for reminders.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Support context</strong> — Integrate helpdesk data; see <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="metrics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Measure what you manage.">Retention Metrics in CRM Reports</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Track renewal rate, expansion revenue, time-to-response on at-risk accounts, and churn reasons logged on lost renewals. <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting and analytics</Link> explains how dashboards stay accurate when reps update stages and dates.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for retention" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-customer-retention" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Customer Retention | BeltStack Guide",
    description:
      "Learn how CRM software supports customer retention: account history, renewals, expansion, proactive follow-up, and integration with support tools.",
  };
}
