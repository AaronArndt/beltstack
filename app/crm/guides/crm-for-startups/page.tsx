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
  { q: "What CRM do startups use?", a: "Many startups use HubSpot (free CRM and scaling hubs), Zoho CRM (value), or Pipedrive (sales focus). Choose by budget and whether you need marketing automation. See our CRM for startups guide and best CRM software roundup for more." },
  { q: "Is free CRM enough for a startup?", a: "Free tiers from HubSpot or Zoho CRM can be enough for early-stage pipeline and contacts. You may upgrade as you add users or need more automation. Start with free; move to paid when you hit limits or need sequences and workflows." },
  { q: "When should a startup switch from free to paid CRM?", a: "Switch when you need more users than the free tier allows, when you want email sequences or workflow automation, or when you need marketing tools (campaigns, landing pages) in the same platform. Many startups stay on free or starter tiers for 12–24 months." },
  { q: "HubSpot vs Salesforce for startups?", a: "HubSpot is usually a better fit for early-stage startups: free CRM, easier setup, and clear per-seat pricing. Salesforce scales for enterprise but adds complexity and cost. See our HubSpot vs Salesforce comparison for a detailed breakdown." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Scaling from free", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.jpeg", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales focus", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
];

export default function CrmForStartupsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM for Startups</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM for Startups</h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    How startups choose and use CRM software to scale sales and marketing without enterprise complexity or cost.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Startups need CRM that is easy to adopt, scales with growth, and doesn't require a big budget or long implementation. Founder-led sales and early reps need a single place to track leads and deals before there's a dedicated sales ops team; as the team grows, the same tool should support more users, automation, and reporting without a disruptive switch.</p>
                    <p>Free or low-cost tiers from <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> let you run pipeline and contacts from day one; you can add marketing automation and more seats as you grow. Compare options in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup. For selection criteria see our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide.</p>
                  </div>
                </section>
                <section id="why-startups-use-crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical startup needs.">Why Startups Use CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline from day one</strong> — Track leads and deals before you have a dedicated sales ops team. A simple pipeline and activity log keep founder and early reps aligned.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Alignment</strong> — Founders and early reps share one view of contacts and pipeline so nothing falls through the cracks when everyone wears multiple hats.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Scale without switching</strong> — Choose a platform that grows with you (e.g. HubSpot free → Sales Hub → Marketing Hub) so you don't migrate when you add reps or marketing.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Speed and flexibility</strong> — Startups need to move fast. CRM with a short setup and clear pipeline lets you focus on selling, not configuring.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="founder-led-vs-team" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From founder-led to team handoff.">Founder-Led Sales vs Team Handoff</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>In the earliest stage, founders often run pipeline and follow-up themselves. A lightweight CRM (contact and deal tracking, reminders) is enough. As you hire first sales reps, the CRM becomes the handoff point: everyone logs activities and next steps so the next person can pick up a deal without losing context. Choose a tool that's easy for non-technical users and that supports both founder-led and small-team workflows—<Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> are common choices because they're straightforward to adopt.</p>
                  </div>
                </section>
                <section id="when-startups-outgrow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signs you need more than basic CRM.">When Startups Outgrow Basic CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>You may need to upgrade or add capabilities when: you hit user or record limits on the free tier; you need email sequences or workflow automation to scale follow-up; you want marketing tools (email campaigns, landing pages, lead nurturing) in the same platform; or you need better reporting for forecasting and investor updates. Many startups stay on <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> free or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> entry tiers for a year or more before moving to paid hubs or higher plans. Compare <Link href={getCrmCompareUrl("hubspot-vs-salesforce")} className={linkGreen}>HubSpot vs Salesforce</Link> if you're weighing ease and cost vs enterprise scale.</p>
                  </div>
                </section>
                <section id="recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Options that fit early-stage teams.">CRM Recommendations for Startups</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> is a common choice for startups: free CRM plus optional Sales and Marketing Hubs as you grow. <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> offers strong value and a free tier; <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> suits sales-first teams that want a clean pipeline. See <Link href={getCrmCompareUrl("hubspot-vs-salesforce")} className={linkGreen}>HubSpot vs Salesforce</Link> if you're weighing ease vs enterprise scale, <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link> for free-tier alternatives, and our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide for selection criteria.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for Startups" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-for-startups" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "CRM for Startups | BeltStack Guide", description: "How startups choose and use CRM software to scale sales and marketing, from founder-led to team handoff, without enterprise complexity or cost." };
}
