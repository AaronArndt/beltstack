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
    q: "What are the most important CRM features?",
    a: "For most teams: contact and company records, customizable pipeline stages, activity tracking, email/calendar integration, basic reporting, and role permissions. Add automation and marketing modules only when you will use them.",
  },
  {
    q: "What CRM features do small businesses need?",
    a: "Small businesses need ease of use, a clear pipeline, email sync, and affordable or free pricing. Skip enterprise customization until you have dedicated admin time. See CRM for small business and what CRM does for small business.",
  },
  {
    q: "How is this different from how to choose CRM software?",
    a: "This guide is a feature checklist by category. How to choose CRM software covers evaluation process, trials, and team fit. Use both when shortlisting vendors.",
  },
  {
    q: "Do I need marketing features in my CRM?",
    a: "Only if you run email campaigns, forms, and lead nurture in-house. Otherwise a sales-focused CRM plus a separate email tool may be simpler. See CRM vs marketing automation.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Broad feature set", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales essentials", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Depth at lower cost", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "How CRM Automation Works", href: "/crm/guides/how-crm-automation-works" },
  { label: "Free vs Paid CRM Software", href: "/crm/guides/free-vs-paid-crm-software" },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function WhatFeaturesToLookForInCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Features to Look for in CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Features to Look for in CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical feature checklist for CRM buyers: core sales capabilities, integrations, automation, reporting, and what to defer until you need it.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM feature lists can run to hundreds of bullets. Most teams win by prioritizing what reps use daily—contacts, pipeline, activities—and only then layering automation and marketing. This guide groups features by job so you can match <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and others to your workflow.
                    </p>
                    <p>
                      For selection process see <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link>; for pricing tiers see <Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>how much CRM software costs</Link> and <Link href="/crm/guides/free-vs-paid-crm-software" className={linkGreen}>free vs paid CRM</Link>.
                    </p>
                  </div>
                </section>
                <section id="core" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Non-negotiables for most buyers.">Core CRM Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Contact and account management</strong> — People, companies, custom fields, duplicate handling.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Deal pipeline</strong> — Stages, amounts, close dates, owners. See <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>how sales pipeline management works</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activity tracking</strong> — Calls, emails, meetings on the record.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Tasks and reminders</strong> — Next steps so follow-up does not depend on memory.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Permissions</strong> — Who sees which accounts and who can edit pipeline.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Connect CRM to daily tools.">Integrations and Email</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Prioritize Gmail or Outlook sync, calendar booking, and any billing or support tools you already use. Native integrations beat manual CSV exports. Compare depth on our <Link href="/crm/compare" className={linkGreen}>CRM compare hub</Link> and in individual reviews.</p>
                  </div>
                </section>
                <section id="advanced" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Add when the team is ready.">Automation, Marketing, and Reporting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Workflow automation</strong> — Rules, sequences, lead routing. <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>How CRM automation works</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Marketing modules</strong> — Forms, email campaigns. <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Forecasting and dashboards</strong> — Pipeline value, conversion, rep activity.</span></li>
                    </ul>
                    <p>Sales-heavy teams: <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link>. Deployment choice: <Link href="/crm/guides/cloud-vs-on-premise-crm-software" className={linkGreen}>cloud vs on-premise CRM</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM feature leaders" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-features-to-look-for-in-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Features to Look for in CRM Software | BeltStack Guide",
    description:
      "Essential CRM features: pipeline, contacts, integrations, automation, and reporting—and what to prioritize by team size.",
  };
}
