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
    q: "What does CRM stand for?",
    a: "CRM stands for customer relationship management. It describes both a business practice (managing relationships with customers and prospects) and the software category built to support that practice.",
  },
  {
    q: "Is CRM only for sales teams?",
    a: "No. Sales teams are the heaviest users, but marketing, customer success, and small-business owners also use CRM to track contacts, communication history, and revenue opportunities. The acronym refers to managing relationships, not only closing deals.",
  },
  {
    q: "What is the difference between CRM and CRM software?",
    a: "CRM as a concept is how you organize customer interactions and follow-up. CRM software is the system that stores contacts, deals, activities, and reports in one place. See our what is CRM software and how CRM software works guides for product-level detail.",
  },
  {
    q: "Are CRM and ERP the same thing?",
    a: "No. CRM focuses on customers, leads, and sales pipeline. ERP (enterprise resource planning) spans finance, inventory, manufacturing, and operations. Many mid-size companies run both. See our CRM vs ERP guide.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Best overall for many SMBs", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline-first sales", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Best value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "How CRM Software Works", href: "/crm/guides/how-crm-software-works" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
];

export default function WhatDoesCrmStandForPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Does CRM Stand For</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Does CRM Stand For
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM stands for customer relationship management. This guide explains the meaning of the acronym, how businesses use the term in practice, and how it connects to CRM software products you evaluate and buy.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you are researching CRM for the first time, the acronym is usually the starting point: <strong className="text-[#1A2D48]">customer relationship management</strong>. The phrase describes a discipline—knowing who your customers and prospects are, what you have discussed, what you promised, and what should happen next—not a single app feature.
                    </p>
                    <p>
                      In everyday business language, people say &quot;CRM&quot; to mean either that discipline or the software that supports it. Vendors such as <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> sell CRM software; your team still owns the relationships. For a full product overview, read <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link>; for mechanics, see <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link>.
                    </p>
                  </div>
                </section>
                <section id="meaning" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Breaking down the acronym.">What Customer Relationship Management Means</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Customer</strong> — Anyone you sell or serve: buyers, accounts, leads, and sometimes partners. CRM systems hold a record for each person or company.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Relationship</strong> — The history of touchpoints: calls, emails, meetings, support issues, and deal progress. Good CRM makes that history visible to the whole team.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Management</strong> — Organizing, prioritizing, and improving those interactions: pipeline stages, tasks, automation, and reporting so revenue work is repeatable.</span></li>
                    </ul>
                    <p>
                      The goal is not to log data for its own sake. It is to sell and serve more consistently—fewer dropped follow-ups, clearer handoffs, and forecasts leadership can trust. That is why <Link href="/crm/guides/why-businesses-need-crm-software" className={linkGreen}>businesses adopt CRM software</Link> as volume and team size grow.
                    </p>
                  </div>
                </section>
                <section id="crm-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From concept to product category.">How CRM Became CRM Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Early CRM efforts lived in Rolodexes, notebooks, and spreadsheets. As teams scaled, shared databases and then cloud apps replaced ad hoc lists. Modern CRM software centralizes contacts, opportunities (deals), activities, and often marketing or service add-ons in one login.
                    </p>
                    <p>
                      When buyers compare tools, they are usually choosing how to implement customer relationship management—not debating the acronym. Use our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup and <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> (for example <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link>) once you know your team size and whether you need marketing automation alongside sales pipeline.
                    </p>
                  </div>
                </section>
                <section id="related-terms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Terms you will see next to CRM.">Related Acronyms and Categories</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM is often confused with adjacent systems. Quick distinctions:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">ERP</strong> — Enterprise resource planning; finance, inventory, and operations. See <Link href="/crm/guides/crm-vs-erp" className={linkGreen}>CRM vs ERP</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Marketing automation</strong> — Campaigns and nurturing; often paired with CRM. See <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Helpdesk / support software</strong> — Post-sale tickets and SLAs. See <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk software</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How we approach educational CRM content.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes category-level guides separate from vendor reviews so you can cross-check definitions on official product sites and in trials. Acronym explainers stay stable even as feature bundles change; when you shortlist products, rely on hands-on tests and our comparison pages rather than marketing glossaries alone.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM Software to Consider" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-does-crm-stand-for" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Does CRM Stand For? | BeltStack Guide",
    description:
      "CRM stands for customer relationship management. Learn what the acronym means, how businesses use CRM in practice, and how it relates to CRM software.",
  };
}
