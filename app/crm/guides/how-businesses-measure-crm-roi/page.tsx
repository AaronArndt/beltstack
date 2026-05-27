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
    q: "How do you calculate CRM ROI?",
    a: "A simple frame: (measurable gains − total CRM cost) ÷ total CRM cost. Gains may include revenue from improved conversion, retained deals that would have slipped, and time saved × labor cost. Attribution is imperfect—use ranges and before/after trends.",
  },
  {
    q: "What costs should be included in CRM ROI?",
    a: "Licenses, implementation, training, integration, and admin time—not license line alone. See how much CRM software costs.",
  },
  {
    q: "How long until CRM shows ROI?",
    a: "Teams with adoption often see pipeline visibility in weeks; revenue impact may take one to three quarters as follow-up and forecast discipline improve.",
  },
  {
    q: "Can CRM ROI be negative?",
    a: "Yes—when software is unused, over-scoped, or data stays dirty. Failed rollouts are common; see why CRM implementations fail.",
  },
  {
    q: "What baseline should we capture before CRM go-live?",
    a: "Snapshot win rate, average cycle length, lead response time, and rep hours on manual reporting for the prior 90 days. Without a baseline, post-CRM improvements are anecdotal.",
  },
  {
    q: "Should CRM ROI include marketing automation costs?",
    a: "Include all revenue-stack costs tied to the same customer record—CRM seats, marketing hub, integrations, and admin time. Split attribution in reporting but not in total cost of ownership.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Fast time to value", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Low TCO", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales efficiency", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "CRM KPIs Businesses Should Track", href: "/crm/guides/crm-kpis-businesses-should-track" },
  { label: "How Much CRM Software Costs", href: "/crm/guides/how-much-crm-software-costs" },
  { label: "How CRM Software Improves Sales", href: "/crm/guides/how-crm-software-improves-sales" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
];

export default function HowBusinessesMeasureCrmRoiPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Measure CRM ROI</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Measure CRM ROI
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How to measure CRM return on investment: total cost, adoption, revenue and efficiency gains, and honest limits of attribution.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM ROI debates often mix license fees with hoped-for revenue. A useful measurement separates <strong className="text-[#1A2D48]">total cost of ownership</strong> from <strong className="text-[#1A2D48]">observable outcomes</strong> you can trend over time—not single heroic deals.
                    </p>
                    <p>
                      Track inputs with <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link>; understand costs in <Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>how much CRM costs</Link> and <Link href="/crm/guides/free-vs-paid-crm-software" className={linkGreen}>free vs paid CRM</Link>.
                    </p>
                    <p>
                      Leadership should review ROI using the same <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reports</Link> reps use—not a parallel spreadsheet. Browse <Link href="/crm" className={linkGreen}>CRM reviews</Link> when comparing tools mid-measurement.
                    </p>
                  </div>
                </section>
                <section id="costs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Full picture of spend.">Count All CRM Costs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Per-user subscriptions and add-on hubs</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Implementation, migration, and consultants</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Training and ongoing admin time</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Integration and middleware fees</span></li>
                    </ul>
                  </div>
                </section>
                <section id="gains" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to measure on the benefit side.">Measurable Gains from CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Conversion and win rate</strong> — Before/after CRM adoption periods</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Cycle time reduction</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Rep time saved</strong> — Less manual reporting and data hunting</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Retention and expansion</strong> — <Link href="/crm/guides/how-crm-software-helps-customer-retention" className={linkGreen}>Customer retention</Link></span></li>
                    </ul>
                    <p>ROI fails without adoption—see <Link href="/crm/guides/why-crm-implementations-fail" className={linkGreen}>why implementations fail</Link> and <Link href="/crm/guides/how-crm-software-improves-sales" className={linkGreen}>how CRM improves sales</Link>.</p>
                  </div>
                </section>
                <section id="formula" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A simple leadership frame.">A Practical CRM ROI Formula</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">ROI ≈ (revenue lift + cost savings − total CRM cost) ÷ total CRM cost</strong>. Use ranges: attribute 10–30% of a conversion improvement to CRM only if adoption and process changed at the same time. Pair with <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link> and <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>reporting</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack does not sell CRM implementation. Vendor ROI calculators assume perfect adoption; we document costs and outcomes in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, <Link href="/crm" className={linkGreen}>CRM hub</Link>. Document baseline KPIs before go-live and review at 90 days with leadership using the same CRM screens reps use.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>How much CRM costs</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/why-crm-implementations-fail" className={linkGreen}>Why CRM implementations fail</Link></span></li>
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
              <GuideSidebar title="CRM value" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-businesses-measure-crm-roi" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Measure CRM ROI | BeltStack Guide",
    description:
      "How businesses measure CRM ROI in 2026: total cost of ownership, baselines, revenue and efficiency gains, formulas, and honest limits of attribution.",
    keywords: ["CRM ROI", "CRM return on investment", "CRM value", "CRM cost", "measure CRM"],
  };
}
