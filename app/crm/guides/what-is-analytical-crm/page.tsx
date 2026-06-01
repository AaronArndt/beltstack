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
    q: "What is analytical CRM?",
    a: "Analytical CRM analyzes customer and sales data to find patterns: segmentation, forecasting, campaign performance, and churn risk. It turns operational CRM records into insight for decisions.",
  },
  {
    q: "Is reporting the same as analytical CRM?",
    a: "Built-in CRM reports are a form of analytical CRM. Deeper analytical CRM may include BI tools, data warehouses, and predictive models fed by CRM exports or sync.",
  },
  {
    q: "Do small businesses need analytical CRM?",
    a: "SMBs need basic analytics—pipeline, conversion, activity—inside their CRM. Separate analytical CRM stacks matter when data volume and cross-system analysis exceed built-in dashboards.",
  },
  {
    q: "How does AI relate to analytical CRM?",
    a: "AI features often sit on analytical layers: scoring, forecast suggestions, and summaries. See how AI is changing CRM software.",
  },
  {
    q: "What is the best CRM for reporting?",
    a: "Depends on complexity—HubSpot and Zoho suit many SMBs; Salesforce scales for custom analytics. Test the reports you will run weekly, not sample dashboards.",
  },
  {
    q: "Do I need a data warehouse for analytical CRM?",
    a: "Not until CRM-native reports cannot answer cross-system questions at your data volume. Start with in-CRM reporting and exports; add a warehouse when RevOps outgrows built-in tools.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Analytics depth", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "SMB reporting", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Reports + Zoho Analytics", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "CRM KPIs Businesses Should Track", href: "/crm/guides/crm-kpis-businesses-should-track" },
  { label: "What Is Operational CRM", href: "/crm/guides/what-is-operational-crm" },
  { label: "Different Types of CRM Systems", href: "/crm/guides/different-types-of-crm-systems" },
];

export default function WhatIsAnalyticalCrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Is Analytical CRM</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Analytical CRM?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Analytical CRM explained: turning customer and pipeline data into reports, segments, and forecasts—and how it pairs with operational CRM.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Analytical CRM</strong> answers &quot;what happened and what might happen?&quot; while <Link href="/crm/guides/what-is-operational-crm" className={linkGreen}>operational CRM</Link> answers &quot;what do we do next?&quot; Clean operational data is the prerequisite—see <Link href="/crm/guides/how-businesses-clean-crm-data" className={linkGreen}>how businesses clean CRM data</Link>.
                    </p>
                    <p>
                      Deep dive: <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>how CRM reporting and analytics work</Link> and <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link>.
                    </p>
                  </div>
                </section>
                <section id="capabilities" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From raw records to insight.">Analytical CRM Capabilities</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Dashboards and standard reports</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Customer segmentation and cohort views</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Forecasting and trend analysis</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Export to BI tools or data warehouse</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Predictive scoring — <Link href="/crm/guides/how-ai-is-changing-crm-software" className={linkGreen}>AI in CRM</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="who" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Users of analytical CRM.">Who Uses Analytical CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Sales managers, marketing ops, RevOps, and leadership consume analytical CRM output. Reps touch it through leaderboards and pipeline dashboards. Enterprise teams often sync CRM to a warehouse; SMBs rely on in-app reports.</p>
                    <p>Context: <Link href="/crm/guides/different-types-of-crm-systems" className={linkGreen}>different types of CRM systems</Link>.</p>
                  </div>
                </section>
                <section id="stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From CRM records to dashboards.">Analytical CRM in Your Stack</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Operational CRM captures activities; analytical CRM aggregates them. <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>Integrations</Link> feed marketing and support data into the same account record. Compare <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, and <Link href="/crm" className={linkGreen}>CRM hub</Link> reviews.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack evaluates CRM reporting in trials for independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>. Report accuracy depends on your data hygiene.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting and analytics</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-ai-is-changing-crm-software" className={linkGreen}>AI in CRM</Link></span></li>
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
              <GuideSidebar title="Analytics-ready CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-is-analytical-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is Analytical CRM? | BeltStack Guide",
    description:
      "What is analytical CRM? Reporting, segmentation, forecasting, BI exports, and how analytical CRM turns operational customer data into decisions in 2026.",
    keywords: ["analytical CRM", "CRM analytics", "CRM reporting", "CRM dashboards", "sales analytics"],
  };
}
