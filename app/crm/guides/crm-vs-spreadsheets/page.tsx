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
  { q: "When should I switch from spreadsheets to CRM?", a: "Switch when you have multiple people touching leads or deals, need reminders and follow-up, or want pipeline and activity reports without manual spreadsheet updates. Free CRM tiers make the move low-risk. See our CRM vs spreadsheets guide and CRM for small business for more." },
  { q: "Can I replace spreadsheets with free CRM?", a: "Yes. HubSpot and Zoho CRM offer free tiers with contact and deal management. You get a shared pipeline, activity log, and basic reporting without paying. Compare in our best CRM software roundup and HubSpot vs Zoho CRM." },
  { q: "Where do spreadsheets break down for sales?", a: "Spreadsheets break down when multiple people need to update the same data (version conflicts), when you need reminders and automation, when you want email/calendar sync, and when you need pipeline and conversion reports without building formulas. CRM addresses all of these." },
  { q: "Is it hard to move from spreadsheets to CRM?", a: "Most CRMs let you import contacts and deals from CSV. Free tiers from HubSpot or Zoho CRM mean you can try without commitment. Start with one pipeline and a few users; expand as the team adopts it. See our how to choose CRM software guide for evaluation steps." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Free tier", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
];

export default function CrmVsSpreadsheetsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM vs Spreadsheets</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM vs Spreadsheets</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When to move from spreadsheets to CRM and what you gain: automation, reporting, and team alignment without manual updates.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Many teams start with spreadsheets for contacts and deals: they're familiar, free, and flexible. That works when one person owns the list and updates are rare. Once you have a real pipeline, multiple people touching leads, or a need for reminders and reports, spreadsheets become a bottleneck—duplicate copies, manual updates, and no single source of truth.</p>
                    <p>CRM gives you a shared pipeline, activity log, automation, and reporting in one place. Many CRMs offer a free tier—<Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>—so you can try without giving up spreadsheets immediately. Compare options in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, and <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> guide.</p>
                  </div>
                </section>
                <section id="why-teams-start-with-sheets" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why spreadsheets feel enough at first.">Why Teams Start with Spreadsheets</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Spreadsheets are easy to start with: no signup beyond Google or Excel, no learning curve, and full control over columns and formulas. For a solo founder or a very small list, that's often enough. Problems appear when the list grows, when more than one person needs to update it, or when you need to remember to follow up and report on pipeline—visibility, automation, and collaboration are where spreadsheets fall short. Our <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> guide covers when a simple CRM is enough.</p>
                  </div>
                </section>
                <section id="what-you-gain" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Benefits of CRM over spreadsheets.">What You Gain with CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Single source of truth</strong> — Everyone sees the same pipeline and contact data; no duplicate or outdated sheets or version conflicts.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Visibility</strong> — Pipeline by stage, by owner, and over time—without rebuilding views in a spreadsheet.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Reminders, email sequences, and workflow rules reduce manual follow-up and stage updates.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Collaboration</strong> — Multiple users update the same records; activity history and handoffs stay in one place.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline value and conversion reports without building and maintaining formulas.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Integrations</strong> — Email and calendar sync so activities log automatically.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="when-to-move" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When to move to CRM.">When to Move to CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Move when: you have two or more people updating leads or deals; you're missing follow-ups because there's no reminder system; you need pipeline or conversion reports and don't want to maintain spreadsheet formulas; or you want email and calendar tied to contacts. Free tiers from <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> make the switch low-risk. For a full evaluation framework see our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide; for small teams see <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM to Consider" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-vs-spreadsheets" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "CRM vs Spreadsheets | BeltStack Guide", description: "When to move from spreadsheets to CRM and what you gain: visibility, automation, collaboration, and reporting without manual updates." };
}
