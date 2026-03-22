import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedProjectManagementResources } from "@/components/guides/RelatedProjectManagementResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getProjectManagementReviewUrl, getProjectManagementCompareUrl } from "@/lib/routes";

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
    q: "How much does project management software cost?",
    a: "Many tools offer a free tier (Asana, Trello, ClickUp, Notion). Paid plans typically range from about $8–20+ per user per month, depending on features like timeline view, automation, and storage. Enterprise pricing is usually custom. See our project management pricing guide and individual reviews for current numbers.",
  },
  {
    q: "Is there free project management software?",
    a: "Yes. Asana, Trello, ClickUp, and Notion have free tiers that support small teams with basic task and project views. Free tiers often limit members, projects, or advanced features like timeline and automation. Our best project management software roundup and pricing guide compare free vs paid.",
  },
  {
    q: "What is per-user pricing in project management software?",
    a: "Most paid plans charge per member (user) per month. So a 10-person team on a $10/user plan pays about $100/month. Watch for minimum seats, guest pricing, and add-ons (storage, automation) that can increase the bill.",
  },
  {
    q: "When should I upgrade from free project management software?",
    a: "Upgrade when you need more members than the free tier allows, when you need timeline or Gantt views, when you need more automation or storage, or when you want advanced reporting. Many small teams stay on free or starter tiers for a year or more.",
  },
  {
    q: "How do I compare project management software pricing?",
    a: "Check each tool's pricing page for current tiers. Compare per-user cost at your team size, and note what's included (views, automation, storage). Our comparison pages (e.g. Asana vs ClickUp, Monday vs Wrike) and individual reviews summarize pricing; run a trial to confirm before committing.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: 4.6, bestFor: "Free tier + structure", reviewHref: getProjectManagementReviewUrl("asana") },
  { name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: 4.5, bestFor: "Free tier + value", reviewHref: getProjectManagementReviewUrl("clickup") },
  { name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: 4.4, bestFor: "Paid tiers", reviewHref: getProjectManagementReviewUrl("monday") },
];

const RELATED_ITEMS = [
  { label: "Project Management Software Hub", href: "/project-management" },
  { label: "Best Project Management Software", href: "/project-management/best-project-management-software" },
  { label: "Compare Project Management Software", href: "/project-management/compare" },
  { label: "Project Management Guides", href: "/project-management/guides" },
  { label: "Asana Review", href: getProjectManagementReviewUrl("asana") },
  { label: "Monday Review", href: getProjectManagementReviewUrl("monday") },
  { label: "Wrike Review", href: getProjectManagementReviewUrl("wrike") },
  { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
  { label: "How to Choose Project Management Software", href: "/project-management/guides/how-to-choose-project-management-software" },
  { label: "Project Management for Small Business", href: "/project-management/guides/project-management-for-small-business" },
];

export default function ProjectManagementPricingGuidePage() {
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
                    <li><Link href="/project-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Project Management</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/project-management/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Project Management Software Pricing Guide</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Project Management Software Pricing Guide</h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Understand how project management tools are priced: free tiers, per-user plans, and what to expect at your team size.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Project management software is typically offered as a subscription: free tiers for small or limited use, and paid plans that charge per user per month. Understanding how pricing works helps you budget and compare tools so you don't overpay or hit limits soon after signing up.
                    </p>
                    <p>
                      This guide covers common pricing models, what usually changes between tiers, and how to estimate cost for your team. Use our <Link href="/project-management" className={linkGreen}>project management hub</Link>, <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link>, and <Link href="/project-management/compare" className={linkGreen}>comparisons</Link> (e.g. <Link href={getProjectManagementCompareUrl("asana-vs-clickup")} className={linkGreen}>Asana vs ClickUp</Link>, <Link href={getProjectManagementCompareUrl("monday-vs-wrike")} className={linkGreen}>Monday vs Wrike</Link>) alongside individual <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, and <Link href={getProjectManagementReviewUrl("wrike")} className={linkGreen}>Wrike</Link> reviews for current pricing.
                    </p>
                  </div>
                </section>
                <section id="pricing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How project management tools charge.">Common Pricing Models</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Free tier</strong> — Many tools offer a free plan with limited members, projects, or features. <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link>, <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link>, and <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> have free tiers that are enough for very small teams to run basic task and project views. Limits vary: e.g. number of users, number of projects, or lack of timeline/automation.</p>
                    <p><strong className="text-[#1A2D48]">Per user per month</strong> — The most common paid model. You pay a set price per member per month (e.g. $10/user). Cost scales with team size. Minimum seats may apply (e.g. 5 users). Guest or read-only users are sometimes free or discounted.</p>
                    <p><strong className="text-[#1A2D48]">Flat monthly</strong> — Some tools (e.g. <Link href={getProjectManagementReviewUrl("basecamp")} className={linkGreen}>Basecamp</Link>) charge a flat fee regardless of user count. This can be cheaper for larger teams and simpler to budget.</p>
                    <p><strong className="text-[#1A2D48]">Enterprise / custom</strong> — Large organizations often get custom pricing, extra security, and dedicated support. Contact sales for quotes.</p>
                  </div>
                </section>
                <section id="what-changes-by-tier" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you get at each level.">What Usually Changes by Tier</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>As you move from free to paid tiers, you typically get:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">More members</strong> — Higher or unlimited user limits.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">More views</strong> — Timeline, Gantt, or calendar often on paid tiers. List and board are common on free.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Rules or workflows (e.g. when status changes, assign someone) are often limited or paid.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Storage</strong> — File attachment limits may increase with tier.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Dashboards and advanced reports are often on higher tiers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Support</strong> — Email or chat support; enterprise may get dedicated success manager.</span></li>
                    </ul>
                    <p>Check each vendor's pricing page for exact limits. Our <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, <Link href={getProjectManagementReviewUrl("wrike")} className={linkGreen}>Wrike</Link>, and <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link> reviews summarize current tiers and pricing.</p>
                  </div>
                </section>
                <section id="estimating-cost" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Planning your budget.">How to Estimate Cost for Your Team</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Count how many people need to be members (not guests). Multiply by the per-user price of the tier you need. Add any one-off or add-on fees (e.g. extra storage). Model for your current team size and for 12–18 months ahead so you don't outgrow a tier too quickly.</p>
                    <p>If you're on a free tier, note the member or project limits; when you hit them, you'll need to upgrade or switch. Compare two to three tools at your expected size—see our <Link href="/project-management/compare" className={linkGreen}>project management comparisons</Link> and <Link href="/project-management/best-project-management-software" className={linkGreen}>best project management software</Link> roundup—and run a trial before committing.</p>
                  </div>
                </section>
                <section id="free-vs-paid" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When free is enough vs when to pay.">When Free Is Enough vs When to Pay</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Free is often enough</strong> when you have a small team (e.g. 2–5 people), a small number of projects, and only need list and/or board views. Many teams run on <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("trello")} className={linkGreen}>Trello</Link>, or <Link href={getProjectManagementReviewUrl("notion")} className={linkGreen}>Notion</Link> free for a long time.</p>
                    <p><strong className="text-[#1A2D48]">Consider paid</strong> when you need more members, timeline or Gantt views, more automation, advanced reporting, or more storage. Paid tiers of <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>, <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link>, or <Link href={getProjectManagementReviewUrl("wrike")} className={linkGreen}>Wrike</Link> typically start in the $8–15/user/month range; compare in <Link href={getProjectManagementCompareUrl("asana-vs-monday")} className={linkGreen}>Asana vs Monday</Link> and <Link href={getProjectManagementCompareUrl("monday-vs-wrike")} className={linkGreen}>Monday vs Wrike</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Project management pricing" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedProjectManagementResources items={RELATED_ITEMS} excludeHref="/project-management/guides/project-management-pricing-guide" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Project Management Software Pricing Guide | BeltStack Guide",
    description: "Understand how project management tools are priced: free tiers, per-user plans, and what to expect at your team size.",
  };
}
