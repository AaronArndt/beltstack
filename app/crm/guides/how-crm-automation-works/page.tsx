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
    q: "How does CRM automation work?",
    a: "CRM automation runs rules when triggers occur—new lead, stage change, date elapsed—and performs actions: assign owner, create task, send email, update field, or notify a team. Sequences send timed emails until reply or exit criteria.",
  },
  {
    q: "What should I automate first in CRM?",
    a: "Start with lead assignment, task reminders when deals idle, and welcome emails for new leads. Add complex branching after basic flows work and data quality is stable.",
  },
  {
    q: "Is CRM automation the same as marketing automation?",
    a: "Overlap exists. CRM automation often focuses on sales tasks and deal triggers; marketing automation emphasizes campaigns and nurture at scale. HubSpot and similar tools blend both. See CRM vs marketing automation.",
  },
  {
    q: "Can automation hurt sales if done wrong?",
    a: "Yes. Over-automated generic emails annoy buyers; bad rules assign leads to the wrong rep or create duplicate tasks. Test with a small segment and monitor unsubscribe and reply rates.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Workflows + sequences", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Blueprint automation", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise flows", reviewHref: getCrmReviewUrl("salesforce") },
];

const RELATED_ITEMS = [
  { label: "How CRM Software Works", href: "/crm/guides/how-crm-software-works" },
  { label: "CRM vs Marketing Automation", href: "/crm/guides/crm-vs-marketing-automation" },
  { label: "What Features to Look for in CRM", href: "/crm/guides/what-features-to-look-for-in-crm-software" },
  { label: "Free vs Paid CRM Software", href: "/crm/guides/free-vs-paid-crm-software" },
  { label: "How CRM Software Improves Sales", href: "/crm/guides/how-crm-software-improves-sales" },
];

export default function HowCrmAutomationWorksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Automation Works</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Automation Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM automation explained: triggers, workflows, email sequences, and lead routing—and how to deploy automation without hurting data quality or buyer trust.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM automation replaces repetitive manual steps—assigning leads, creating follow-up tasks, sending standard emails—with rules the system runs consistently. Done well, reps spend more time on conversations; done poorly, buyers get spam and the CRM fills with noise.
                    </p>
                    <p>
                      Automation depth varies by plan: many free tiers limit workflows; paid tiers on <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> expand capability. See <Link href="/crm/guides/free-vs-paid-crm-software" className={linkGreen}>free vs paid CRM</Link>.
                    </p>
                  </div>
                </section>
                <section id="building-blocks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Triggers, conditions, actions.">Building Blocks of CRM Automation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Trigger</strong> — Record created, field updated, stage changed, date reached.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Condition</strong> — Optional filters (source, territory, deal size).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Action</strong> — Assign, task, email, Slack alert, field update.</span></li>
                    </ul>
                    <p>Foundation: <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link>.</p>
                  </div>
                </section>
                <section id="types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common automation patterns.">Workflows, Sequences, and Routing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Workflows</strong> react to CRM events—e.g. create a task when a deal sits in proposal stage seven days.</p>
                    <p><strong className="text-[#1A2D48]">Email sequences</strong> send a timed series until reply or manual stop; often used for outbound and nurture. Distinguish from broad marketing campaigns in <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Lead routing</strong> assigns new leads round-robin or by territory—pairs with <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>lead tracking</Link>.</p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Deploy safely.">Best Practices and Pitfalls</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Automate one process at a time; document who owns maintenance.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Keep emails personalizable; avoid obvious bulk tone.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Exclude existing customers from prospect sequences.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Review automation reports monthly for errors and volume.</span></li>
                    </ul>
                    <p>Sales impact ties to <Link href="/crm/guides/how-crm-software-improves-sales" className={linkGreen}>how CRM improves sales</Link> and <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>pipeline management</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM with automation" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-automation-works" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Automation Works | BeltStack Guide",
    description:
      "Learn how CRM automation works: workflows, triggers, email sequences, lead routing, and best practices for sales teams.",
  };
}
