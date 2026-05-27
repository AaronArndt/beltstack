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
    q: "Can Excel be used as a CRM?",
    a: "Yes, for a very small list and one primary owner, Excel can track contacts and deal stages with columns and filters. It is not a full CRM: no native email sync, automation, or multi-user pipeline without version conflicts. Most growing teams outgrow it quickly.",
  },
  {
    q: "What Excel setup works best for a simple pipeline?",
    a: "Use one row per deal with columns for company, contact, stage, value, owner, and next action date. Avoid multiple files; lock editing ranges if several people update. Still plan a CRM when collaboration and reminders matter.",
  },
  {
    q: "When should I stop using Excel for sales?",
    a: "Switch when two or more people update deals, you miss follow-ups, or reporting takes manual pivot tables every week. Free CRM tiers lower the migration cost. See CRM vs spreadsheets and free vs paid CRM guides.",
  },
  {
    q: "Is Excel worse than Google Sheets for CRM?",
    a: "Google Sheets improves real-time co-editing; Excel is stronger for offline and heavy formulas. Both lack CRM-native pipeline, activity logging, and integrations. The limitation is the spreadsheet model, not the brand.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Free CRM tier", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Free + value", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline focus", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  { label: "Free vs Paid CRM Software", href: "/crm/guides/free-vs-paid-crm-software" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function CanExcelBeUsedAsACrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Can Excel Be Used as a CRM</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can Excel Be Used as a CRM?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Many teams start in Excel for contacts and deals. This guide explains what works, where Excel breaks down as a CRM substitute, and when dedicated CRM software is the better choice.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Excel can act as a lightweight customer tracker: columns for name, company, stage, deal value, and next step. For a solo seller with a short list, that is often enough for a while. It is not CRM in the product sense—there is no shared activity history, automated reminders, or pipeline reporting built for sales teams.
                    </p>
                    <p>
                      If you are evaluating a move, read <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> and compare free options like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> on our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> list.
                    </p>
                  </div>
                </section>
                <section id="what-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When Excel is a reasonable stand-in.">What Excel Can Do for Sales Tracking</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Store contacts and deals</strong> — Rows and columns for basic fields; filters and sorts for priority lists.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Simple pipeline view</strong> — Stage column plus conditional formatting or a pivot table by stage.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Low cost</strong> — No per-user CRM fee if you already have Microsoft 365.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Familiarity</strong> — No new login; easy export for ad hoc analysis.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="limitations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where Excel stops scaling.">Where Excel Falls Short as CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Collaboration</strong> — Multiple editors cause version conflicts; no single activity timeline per account.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Follow-up discipline</strong> — No task queues or automated reminders when deals go stale.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Email and calendar</strong> — Manual logging; CRM tools sync conversations to the record.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline and conversion reports require maintained formulas; CRM dashboards update live.</span></li>
                    </ul>
                    <p>See <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>how businesses track leads using CRM</Link> for the structured alternative.</p>
                  </div>
                </section>
                <section id="when-to-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals it is time for real CRM.">When to Move from Excel to CRM Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Move when collaboration, automation, or forecasting becomes a bottleneck. <Link href="/crm/guides/free-vs-paid-crm-software" className={linkGreen}>Free vs paid CRM</Link> explains starting on a free tier; <Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>how much CRM software costs</Link> covers paid plans. <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>How to choose CRM software</Link> helps you pick a product.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM instead of Excel" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/can-excel-be-used-as-a-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Can Excel Be Used as a CRM? | BeltStack Guide",
    description:
      "Learn whether Excel works as a CRM for contacts and deals, its limits for teams, and when to switch to dedicated CRM software.",
  };
}
