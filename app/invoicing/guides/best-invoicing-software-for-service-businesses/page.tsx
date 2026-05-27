import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl } from "@/lib/routes";

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
    q: "What is the best invoicing software for service businesses?",
    a: "FreshBooks is a strong default for many service businesses because it combines invoicing, reminders, and payment links in an easy workflow. QuickBooks fits teams that want invoicing and full accounting together. Wave works for early-stage teams with simpler needs and tight budgets.",
  },
  {
    q: "Do service businesses need field service software instead of invoicing software?",
    a: "If dispatch, routing, and technician workflows are core, field service software may be better. Many businesses still need invoicing features for final billing and collections—even when jobs are scheduled elsewhere. Evaluate whether billing happens in the field or back office.",
  },
  {
    q: "Should service businesses accept online payments on invoices?",
    a: "Yes. Online payment links usually reduce days-to-pay and lower manual follow-up workload. Card and ACH options matter for residential customers who expect tap-to-pay convenience after a completed job.",
  },
  {
    q: "Can service businesses use free invoicing tools?",
    a: "Yes at low volume. Growing service teams often upgrade for automation, recurring maintenance plans, multi-user access, and A/R reporting that owners review weekly.",
  },
  {
    q: "How do contractors differ from general service businesses?",
    a: "Contractors often need estimates, deposits, and milestone billing tied to job progress. General service businesses may invoice fixed visit fees or simple recurring plans. See our contractor-focused invoicing guide for construction-style workflows.",
  },
  {
    q: "What invoicing features matter most for cash flow?",
    a: "Same-day invoicing after job completion, automated reminders, and visible overdue lists matter most. Service businesses feel cash flow pain quickly when billing waits until weekends or batch runs at month-end.",
  },
  {
    q: "Should service businesses sync invoicing to accounting?",
    a: "Yes, once you have an accountant or use QuickBooks/Xero actively. Sync reduces double entry and makes tax time cleaner. Even solo operators benefit when bank reconciliation ties back to issued invoices automatically.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service billing workflows", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoicing + accounting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Low-cost starting point", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function BestInvoicingSoftwareForServiceBusinessesPage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Best Invoicing Software for Service Businesses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Invoicing Software for Service Businesses</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare invoicing tools for service businesses: fast field-to-invoice billing, online payments, reminders, estimates, and accounting sync for plumbers, cleaners, landscapers, and similar trades.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Service businesses live and die on cash flow speed. The best invoicing software helps you bill right after work is complete, collect online, and follow up automatically on overdue balances—without an office manager chasing every open invoice by hand.
                    </p>
                    <p>
                      Unlike product companies, most service revenue is earned on-site. If invoicing waits until Friday batch runs, you effectively give every customer several extra days of float. Mobile-friendly creation and payment links fix that pattern quickly.
                    </p>
                    <p>
                      Tool choice also depends on job complexity. A lawn care route with flat fees has different needs than a remodel with deposits, change orders, and progress invoices. Match software to your billing model, not just your industry label.
                    </p>
                    <p>
                      Start with our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup, then narrow by scenario on{" "}
                      <Link href="/invoicing/best-for/small-business" className={linkGreen}>invoicing for small business</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/best-for/contractors" className={linkGreen}>invoicing for contractors</Link>.
                    </p>
                  </div>
                </section>
                <section id="what-service-businesses-need" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities that matter for recurring field and office work.">What Service Businesses Need</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prioritize features that shorten the gap between job completion and payment. Everything else—advanced reporting, deep integrations—is secondary until baseline billing speed is reliable.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Mobile-friendly invoice creation from the field or office.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Estimates and progress invoices for larger jobs.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Automated reminders and online payment links (card and ACH).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Recurring invoices for maintenance plans and service agreements.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Accounting sync for clean month-end close and tax reporting.</span></li>
                    </ul>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/what-features-to-look-for-in-invoicing-software" className={linkGreen}>what features to look for in invoicing software</Link>{" "}
                      for a full evaluation checklist.
                    </p>
                  </div>
                </section>
                <section id="top-picks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools we see service teams evaluate most often.">Top Picks to Evaluate</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> is strong for straightforward service billing: fast invoices, reminders, and client-friendly payment pages. Many owner-operators adopt it before they need full accounting depth.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("quickbooks")} className={linkGreen}>QuickBooks</Link> fits teams that want invoicing and bookkeeping together—especially when an accountant already standardizes on QuickBooks for tax and reconciliation.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link> works for early-stage teams with simpler needs and limited budget. Plan an upgrade path when recurring routes, staff users, or overdue tracking outgrow free limits.
                    </p>
                  </div>
                </section>
                <section id="evaluation-tips" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to test tools with real jobs.">How to Evaluate Invoicing Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a two-week trial on live jobs. Measure time from job complete to invoice sent, percentage paid online within seven days, and how many reminders you still send manually.
                    </p>
                    <p>
                      If dispatch and technician scheduling are central, also review{" "}
                      <Link href="/field-service" className={linkGreen}>field service software</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoicing-for-contractors" className={linkGreen}>invoicing for contractors</Link>.{" "}
                      Billing should not fight how jobs are scheduled in the field.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Service business invoicing questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Best Invoicing Tools for Service Businesses" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/best-invoicing-software-for-service-businesses" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Service Businesses (2026) | BeltStack Guide",
    description:
      "Compare the best invoicing software for service businesses: FreshBooks, QuickBooks, and Wave for mobile billing, online payments, reminders, recurring plans, and accounting sync.",
    keywords: [
      "invoicing software service business",
      "FreshBooks service business",
      "field service invoicing",
      "online invoice payments",
      "service business billing",
      "2026",
    ],
  };
}
