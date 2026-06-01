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
    q: "How is AI changing CRM software?",
    a: "Vendors add AI for lead scoring, email and note drafting, conversation summaries, next-best-action suggestions, and forecast assistance. Impact depends on data quality and human review—not fully autonomous selling.",
  },
  {
    q: "Is AI CRM worth paying extra for?",
    a: "Worth it when your team will use specific features daily and your data is clean enough for models to be useful. Skip AI add-ons if basic pipeline discipline is still the gap.",
  },
  {
    q: "Does AI replace sales reps in CRM?",
    a: "No. AI reduces admin and surfaces patterns; relationship judgment, negotiation, and trust stay human. Reps should verify AI-generated emails and scores.",
  },
  {
    q: "What should I ask vendors about AI in CRM?",
    a: "Ask what data trains features, privacy controls, accuracy on your industry, and whether AI costs extra per seat. Test on real records in trial.",
  },
  {
    q: "Does AI in CRM require Salesforce or HubSpot?",
    a: "Enterprise and mid-market vendors lead on AI depth, but Zoho, Pipedrive, and others add scoring and drafting on higher tiers. SMBs should prioritize adoption and data quality before paying for AI add-ons.",
  },
  {
    q: "Can AI fix bad CRM data automatically?",
    a: "AI can suggest merges or field values but should not replace governance. Clean duplicates and stage rules first—see how businesses clean CRM data.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "AI assistants", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Einstein AI", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Zia AI", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "How CRM Automation Works", href: "/crm/guides/how-crm-automation-works" },
  { label: "What Is Analytical CRM", href: "/crm/guides/what-is-analytical-crm" },
  { label: "How Businesses Clean CRM Data", href: "/crm/guides/how-businesses-clean-crm-data" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
];

export default function HowAiIsChangingCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How AI Is Changing CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How AI Is Changing CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    AI in CRM today: scoring, drafting, summarization, and forecasting assist—and what teams should verify before relying on vendor claims.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      AI in CRM is less about replacing sellers and more about reducing friction: logging notes, prioritizing leads, and drafting follow-ups. Models need clean, complete data—garbage in produces confident-sounding garbage out.
                    </p>
                    <p>
                      Major platforms—including <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>—ship AI features on higher tiers. Pair with <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>CRM automation</Link> and <Link href="/crm/guides/what-is-analytical-crm" className={linkGreen}>analytical CRM</Link>.
                    </p>
                  </div>
                </section>
                <section id="use-cases" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where AI shows up in products.">Common AI CRM Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Lead and deal scoring</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Email and message drafting</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Call and meeting summaries</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Forecast and pipeline insights</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Chatbots for routing</strong> — Often overlaps marketing automation</span></li>
                    </ul>
                  </div>
                </section>
                <section id="guardrails" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Use AI with judgment.">Guardrails for AI in Sales</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Human review on outbound AI copy, privacy policies for customer data sent to models, and <Link href="/crm/guides/how-businesses-clean-crm-data" className={linkGreen}>clean CRM data</Link> first. Measure impact with <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link>, not feature checklists.</p>
                  </div>
                </section>
                <section id="buying" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Evaluate AI on your records.">Buying AI CRM Features in 2026</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Run trials with real opportunities: test call summaries, email drafts, and scores on your industry vocabulary. Confirm whether AI tiers bill per seat and whether data opts out of model training. Compare <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> on the <Link href="/crm" className={linkGreen}>CRM hub</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack reviews CRM AI features in product trials without accepting vendor ROI claims—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>. AI capabilities change quarterly; verify current SKUs at purchase.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>How CRM automation works</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/what-is-analytical-crm" className={linkGreen}>What is analytical CRM</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting</Link></span></li>
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
              <GuideSidebar title="AI-enabled CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-ai-is-changing-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How AI Is Changing CRM Software | BeltStack Guide",
    description:
      "How AI is changing CRM software in 2026: scoring, drafting, summaries, forecasting, buying guardrails, and what small businesses should verify before paying for AI tiers.",
    keywords: ["AI CRM", "CRM artificial intelligence", "Salesforce Einstein", "HubSpot AI", "CRM automation"],
  };
}
