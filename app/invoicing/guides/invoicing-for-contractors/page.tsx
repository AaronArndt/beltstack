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
    q: "What invoicing features do contractors need?",
    a: "Contractors typically need simple client billing, estimates or quotes that convert to invoices, payment tracking, and optionally deposits or milestone billing. Project-based invoicing and clear payment terms help with job-based work.",
  },
  {
    q: "Can I invoice for deposits and milestones?",
    a: "Yes. Many invoicing tools let you create invoices for upfront deposits, progress payments, or milestone-based billing. You can also use a single invoice per job or break a project into multiple invoices.",
  },
  {
    q: "How does invoicing for contractors tie to payroll and accounting?",
    a: "Contractors who have employees need payroll; invoicing tracks what you bill clients. Accounting software (or invoicing that syncs to it) records income and expenses for tax and reporting. See our accounting for contractors and payroll for contractors guides for those workflows.",
  },
  {
    q: "Is FreshBooks good for contractors?",
    a: "Yes. FreshBooks is popular with contractors and service businesses: it has invoicing, estimates, time tracking, and client portals. Read our FreshBooks review for details. HoneyBook is another option if you do a lot of proposals and contracts.",
  },
  {
    q: "What about invoicing for service calls or one-off jobs?",
    a: "Most invoicing software supports one-off invoices. You create an invoice per job or service call, send it when the work is done, and track payment. No need for recurring billing if your work is project-by-project.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Contractors", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", rating: 4.4, bestFor: "Proposals & contracts", reviewHref: getInvoicingReviewUrl("honeybook") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Accounting + invoicing", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function InvoicingForContractorsPage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Invoicing for Contractors</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Invoicing for Contractors
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How contractors use invoicing for project-based work: simple client billing, estimates, deposits, milestone invoices, and ties to payroll and accounting.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractors need straightforward client billing: send an estimate, do the work, then send an invoice—or bill by milestone or deposit. Invoicing software keeps estimates, invoices, and payment status in one place and often supports project-based line items and payment terms that fit job work.
                    </p>
                    <p>
                      Tools like <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> and <Link href={getInvoicingReviewUrl("honeybook")} className={linkGreen}>HoneyBook</Link> are built for this workflow. For the accounting and payroll side of running a contracting business, see our <Link href="/accounting/guides/accounting-for-contractors" className={linkGreen}>accounting for contractors</Link> and <Link href="/payroll/guides/payroll-for-contractors" className={linkGreen}>payroll for contractors</Link> guides. Our <Link href="/invoicing" className={linkGreen}>invoicing hub</Link> has more comparisons and reviews.
                    </p>
                  </div>
                </section>
                <section id="contractor-workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From estimate to payment.">Contractor Invoicing Workflow</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Estimates and proposals</strong> — Quote the job; convert to an invoice when the client approves.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Deposits and milestones</strong> — Invoice for upfront deposit or progress payments; final invoice when the job is complete.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Service calls or one-off jobs</strong> — One invoice per call or job; track payment by client.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ties to payroll and accounting</strong> — Income from invoices feeds into your books; payroll handles employee pay if you have a team.</span></li>
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
              <GuideSidebar title="Invoicing Software for Contractors" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoicing-for-contractors" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoicing for Contractors | BeltStack Guide",
    description:
      "How contractors use invoicing software for project-based work, estimates, deposits, milestone billing, and ties to payroll and accounting.",
  };
}
