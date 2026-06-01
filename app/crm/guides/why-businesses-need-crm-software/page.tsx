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
    q: "Why do businesses need CRM software?",
    a: "Businesses need CRM when customer and deal data is scattered, follow-up is inconsistent, and leadership cannot see pipeline health. CRM centralizes records, automates reminders, and improves forecasting as teams and lead volume grow.",
  },
  {
    q: "At what point should a business get CRM?",
    a: "A common trigger is when two or more people sell or support the same accounts, when deals are lost because follow-up slipped, or when reporting takes hours in spreadsheets. Free CRM tiers let you start earlier without large upfront cost.",
  },
  {
    q: "Is CRM worth it for a business with few leads?",
    a: "If leads are rare and one person owns every relationship, lightweight tools may suffice. CRM pays off when missed follow-ups have real revenue cost or when you are preparing to hire sales help.",
  },
  {
    q: "What problems does CRM not solve?",
    a: "CRM does not fix weak product-market fit, bad pricing, or operational dispatch—that is field service or ERP territory. It also fails if reps refuse to use it; adoption and simple process matter as much as software choice.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Easy adoption", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Low cost", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales focus", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "What CRM Does for Small Business", href: "/crm/guides/what-crm-does-for-small-business" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function WhyBusinessesNeedCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Why Businesses Need CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Why Businesses Need CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    The business case for CRM: problems it solves, signals you have outgrown spreadsheets, and outcomes teams see when customer data lives in one system.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses need CRM software when revenue depends on consistent follow-up and shared visibility—and informal tools start failing. Lost leads, duplicate outreach, and guesswork forecasting are expensive; CRM addresses the coordination layer so people can focus on selling and serving.
                    </p>
                    <p>
                      Need is driven by pain, not company age. A ten-person firm with a busy pipeline benefits as much as a larger org if deals slip through cracks. Start with <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> and <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link>; use <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> when you are ready to compare products.
                    </p>
                  </div>
                </section>
                <section id="pain-points" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Symptoms without a central CRM.">Problems CRM Is Built to Fix</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Missed follow-ups</strong> — Leads sit in inboxes; no shared task queue or reminders.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">No single source of truth</strong> — Spreadsheets, notes, and CRM exports disagree on stage and owner.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Weak forecasting</strong> — Leadership asks for pipeline numbers; reps spend days reconciling instead of selling.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Poor handoffs</strong> — Marketing, sales, and success cannot see the same history when accounts change hands.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Scaling friction</strong> — New hires cannot ramp quickly without a system of record for accounts.</span></li>
                    </ul>
                    <p>Our <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> guide maps when those symptoms justify a switch.</p>
                  </div>
                </section>
                <section id="outcomes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What improves after adoption.">Outcomes Businesses Pursue</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Higher win rates</strong> — Timely, documented follow-up on qualified opportunities.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Shorter sales cycles</strong> — Clear next steps and fewer internal &quot;what&apos;s the status?&quot; threads.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Better customer experience</strong> — Reps and success managers see context before calls.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Operational clarity</strong> — Reports on pipeline, activity, and conversion without manual spreadsheet builds.</span></li>
                    </ul>
                    <p>Small teams see similar gains with lighter tools; see <Link href="/crm/guides/what-crm-does-for-small-business" className={linkGreen}>what CRM does for small business</Link>.</p>
                  </div>
                </section>
                <section id="when-to-act" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical triggers to invest.">When to Prioritize CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Prioritize CRM when you are hiring sales, launching outbound, adding marketing lead gen, or losing deals you cannot explain. Free tiers from <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> lower the risk of starting early.</p>
                    <p>Deprioritize a heavy rollout if you have no repeatable sales motion yet—fix positioning first. Pair software choice with <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> so you buy for workflow fit, not feature checklists.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM to get started" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/why-businesses-need-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Why Businesses Need CRM Software | BeltStack Guide",
    description:
      "Learn why businesses adopt CRM: missed follow-ups, scattered data, weak forecasting, and how CRM software centralizes pipeline and customer relationships.",
  };
}
