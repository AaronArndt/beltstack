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
  { q: "What should I look for when choosing a CRM?", a: "Focus on ease of use, pipeline fit (stages that match how you sell), pricing (free vs paid, per user), and integrations with email, calendar, and any marketing tools you use. Team size and whether you need marketing automation also matter—see our how to choose CRM software guide and CRM for small business guide for more." },
  { q: "How do I compare CRM software?", a: "Use our CRM comparisons hub and head-to-head pages like HubSpot vs Salesforce and Zoho CRM vs Pipedrive. Read full reviews for each tool, run free trials with real data, and match features to your team size and workflow. Our how to choose CRM software guide lists evaluation criteria in detail." },
  { q: "Is free CRM enough to start?", a: "HubSpot and Zoho CRM offer free tiers that are enough for many small teams to run pipeline and contacts. Upgrade when you need more users, automation (email sequences, workflow rules), or marketing features. See our CRM for small business guide for when simple CRM is enough vs when to upgrade." },
  { q: "What is the best CRM for a small team?", a: "HubSpot, Zoho CRM, and Pipedrive are often recommended: each has a clear pipeline and free or affordable entry. HubSpot adds strong marketing; Zoho offers best value; Pipedrive is sales-focused. Compare in our best CRM software roundup and head-to-head comparison pages." },
  { q: "How long does it take to implement a CRM?", a: "Simple CRM (contact and pipeline only) can be set up in a day or two. Adding custom fields, automation, and integrations may take a week or more. Run a trial with a small set of real deals to gauge fit and adoption before committing." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Ease of use + free tier", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline focus", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.jpeg", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
];

export default function HowToChooseCrmSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How to Choose CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Choose CRM Software</h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Key factors when comparing CRM platforms: ease of use, pipeline fit, pricing, integrations, and how to avoid common mistakes.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Choosing a CRM starts with your workflow: how you sell, how many people need access, and whether you need marketing automation or just pipeline. A tool that's right for a five-person sales team may be overkill for a founder-led business; a platform that's great for pipeline-only may fall short if you need email campaigns and lead nurturing in the same place. This guide walks through the main factors to evaluate so you can shortlist and compare with confidence.</p>
                    <p>Use our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup to shortlist tools; read <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> reviews for depth. For use-case-specific guidance see our <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> and <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link> guides.</p>
                  </div>
                </section>
                <section id="key-factors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate first.">Key Factors When Choosing CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>These factors apply to most teams. Weight them by your size, process, and goals.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ease of use</strong> — Your team will use the CRM daily. Look for a clear pipeline view, simple data entry, and a short learning curve. If adoption is low, pipeline data will be wrong. Free trials and demos help you judge; involve at least one person who will use it every day.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline and stages</strong> — Deal stages should match how you sell. Customizable pipelines and activity tracking (calls, emails, meetings) matter so reps know what to do next and managers can see progress.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pricing</strong> — Free tiers (HubSpot, Zoho CRM) vs per-user paid. Watch for base fees, per-seat cost, and add-ons (marketing automation, extra storage). Model total cost at your current and likely future team size.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Integrations</strong> — Email (Gmail, Outlook), calendar, and any marketing or support tools you use. Check that your stack is supported so data flows without manual re-entry.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline value, conversion by stage, and activity reports. Ensure you can get the views you need for forecasting and coaching without building custom reports from day one.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="team-size-complexity" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Matching the tool to your team.">Team Size and Complexity</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Solo or very small teams</strong> (e.g. founder-led sales) often need simple contact and deal tracking with reminders. Free or low-cost CRM from <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> is usually enough. Avoid enterprise platforms that require dedicated admin or long implementation.</p>
                    <p><strong className="text-[#1A2D48]">Growing sales teams</strong> (e.g. 5–20 reps) need pipeline visibility, activity tracking, and reporting so managers can forecast and coach. Tools like <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, HubSpot Sales Hub, or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> scale to this size with clear pricing. Consider automation (sequences, workflow rules) to keep data clean and follow-up consistent.</p>
                    <p><strong className="text-[#1A2D48]">Larger or complex organizations</strong> may need role-based visibility, multiple pipelines, advanced reporting, and integrations with marketing and service. <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> and HubSpot Enterprise serve this segment but add cost and complexity—only move here when you have dedicated admin or implementation support.</p>
                  </div>
                </section>
                <section id="automation-integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Automation and integrations.">Automation and Integrations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Automation</strong> — Workflow rules can move deals between stages, assign owners, send reminders, or trigger email sequences. Start with a few high-impact automations (e.g. "when deal moves to Proposal, send reminder in 3 days") rather than complex flows. Check what's included at each pricing tier; some platforms charge extra for advanced automation.</p>
                    <p><strong className="text-[#1A2D48]">Integrations</strong> — At minimum, the CRM should connect to your email and calendar so activities log automatically. If you use marketing tools (email campaigns, forms, ads), support or native integrations reduce duplicate data and keep lead source visible. Our <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> reviews cover integration breadth; comparison pages like <Link href={getCrmCompareUrl("hubspot-vs-salesforce")} className={linkGreen}>HubSpot vs Salesforce</Link> and <Link href={getCrmCompareUrl("zoho-crm-vs-pipedrive")} className={linkGreen}>Zoho CRM vs Pipedrive</Link> compare side by side.</p>
                  </div>
                </section>
                <section id="common-mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to avoid.">Common Mistakes When Choosing CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Overbuying</strong> — Choosing enterprise CRM (e.g. full Salesforce) when a simpler tool (Pipedrive, HubSpot free or Starter) would suffice. You pay for complexity and features you won't use; adoption often suffers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ignoring adoption</strong> — If reps won't use the CRM, pipeline data will be wrong and the investment is wasted. Prioritize ease of use and involve reps in the selection; run a trial with real data before committing.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Skipping trials</strong> — A demo or free trial with a small set of real deals and contacts reveals fit better than feature lists. Test data entry, pipeline view, and reporting in your actual workflow.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Underestimating total cost</strong> — Base price plus per-user fees and add-ons (marketing hub, extra storage, support) can double or more. Model cost at your expected team size for the next 12–18 months.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical comparison steps.">How to Compare CRM Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Shortlist two to four tools based on team size, budget, and whether you need marketing automation. Read our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup and full <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> reviews. Use our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> hub and head-to-head pages—<Link href={getCrmCompareUrl("hubspot-vs-salesforce")} className={linkGreen}>HubSpot vs Salesforce</Link>, <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link>, <Link href={getCrmCompareUrl("zoho-crm-vs-pipedrive")} className={linkGreen}>Zoho CRM vs Pipedrive</Link>, <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link>—to compare features, pricing, and ease of use. Run a free trial with real deals and at least one other user; then decide.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-to-choose-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "How to Choose CRM Software | BeltStack Guide", description: "Key factors when comparing CRM platforms: ease of use, pipeline fit, team size, pricing, integrations, and how to avoid common mistakes." };
}
