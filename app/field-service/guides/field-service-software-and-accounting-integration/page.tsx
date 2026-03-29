import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "Should invoices sync from FSM to QuickBooks or Xero automatically?",
    a: "Often yes for revenue recognition and receivables—if line items, taxes, and payment status map correctly. Some teams prefer summary journal entries for simpler books. Decide with your accountant based on audit needs and how granular job costing must be.",
  },
  {
    q: "What breaks most often in FSM–accounting sync?",
    a: "Tax codes, undeposited funds, partial payments, and timing differences between accrual and cash views. Run a parallel month during implementation: compare FSM revenue to accounting before you cut over fully.",
  },
  {
    q: "Do I still need invoicing software if I use FSM?",
    a: "Many contractors run estimates, invoices, and payments inside FSM and sync to accounting. If you use a separate invoicing product, map handoffs carefully to avoid double posting—see our invoicing hub for how those categories differ.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "QuickBooks & Xero sync common",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service billing flows",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Enterprise revenue analytics",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/field-service-software-and-accounting-integration";

export default function FieldServiceSoftwareAndAccountingIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">
                      FSM & Accounting Integration
                    </li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Software and Accounting: QuickBooks, Xero &amp; Clean Books
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How job revenue, payments, and taxes should flow from FSM into QuickBooks or Xero—what to validate in
                    implementation so operations and finance agree on one source of truth.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service platforms are where work becomes money: estimates turn into jobs, jobs into invoices,
                      invoices into deposits. Accounting systems are where money becomes reports: cash vs accrual,
                      sales tax liability, and lender-ready financials. The integration between them is not a checkbox—it
                      is a contract between how ops describes work and how finance describes revenue.
                    </p>
                    <p>
                      This guide is written for owners, operations managers, and bookkeepers who need a shared vocabulary
                      before go-live. Pair it with{" "}
                      <Link href="/accounting/guides/how-accounting-software-works" className={linkGreen}>
                        how accounting software works
                      </Link>
                      , our{" "}
                      <Link href="/accounting" className={linkGreen}>
                        accounting software hub
                      </Link>
                      , and{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing software
                      </Link>{" "}
                      if you split customer billing across tools.
                    </p>
                  </div>
                </section>
                <section id="sync-models" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Invoices, payments, and journals.">Common Sync Models</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most integrations push customer invoices, payments, or both. Some push time and materials detail;
                      others push daily summaries. Ask your vendor which objects sync, in which direction, and on what
                      schedule (real-time vs batch). Ambiguity here causes “the books don’t match Jobber” escalations that
                      waste April.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Invoice-level sync</strong> — Best when you need receivables
                          detail in accounting; requires clean product/service mapping and tax codes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Payment and deposit timing</strong> — Card batches, fees, and
                          tips must land in the right clearing accounts or reconciliation drifts.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="implementation" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="A practical checklist.">Implementation Questions for Your Accountant</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Bring your CPA or bookkeeper into the FSM trial. Review default income accounts, expense categories
                      for job materials, and whether sales tax is calculated in FSM, accounting, or both (double tax
                      calculation is a frequent footgun).
                    </p>
                    <p>
                      If you track labor for job costing, see{" "}
                      <Link href="/time-tracking/guides/job-costing-time-tracking-for-contractors" className={linkGreen}>
                        job costing with time tracking
                      </Link>{" "}
                      for how hours relate to margin—not only payroll.
                    </p>
                  </div>
                </section>
                <section id="trust" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Keeping ops and finance aligned.">Trust, Audits, and Ongoing Reconciliation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Schedule a monthly reconciliation between FSM closed jobs and accounting revenue. Small variances are
                      normal early on; persistent gaps mean mapping rules need adjustment. Document who is allowed to
                      edit closed periods in each system.
                    </p>
                    <p>
                      For broader FSM evaluation context, use{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>
                        FSM pricing explained
                      </Link>{" "}
                      and our{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Software & Accounting Integration (QuickBooks, Xero) | BeltStack",
    description:
      "How FSM syncs to QuickBooks or Xero: invoices, payments, taxes, and job revenue. Implementation questions to ask your accountant before go-live.",
  };
}
