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
    q: "How does invoicing affect cash flow?",
    a: "Invoicing timing, payment terms, and collection speed determine how quickly revenue becomes cash in your bank account. Late issuance, long Net terms, and slow follow-up all widen the gap between profitable work and available cash.",
  },
  {
    q: "Why is cash flow different from profit?",
    a: "Profit reflects revenue when earned (often at invoice issuance under accrual accounting), while cash flow reflects when money actually arrives. You can show profit on paper while running short on cash if customers pay late.",
  },
  {
    q: "What invoicing habit improves cash flow fastest?",
    a: "Sending invoices the same day work is completed—and offering card or ACH payment on the invoice—usually shortens collection cycles more than any other single billing change.",
  },
  {
    q: "Do longer payment terms hurt cash flow?",
    a: "Yes. Net 30, Net 45, or Net 60 terms delay cash even when work is done. Deposits, milestone billing, and shorter terms for new customers can materially improve working capital.",
  },
  {
    q: "Can invoice financing help cash flow?",
    a: "Yes, in some cases. Invoice financing or factoring advances funds against outstanding receivables, but fees, eligibility, and customer-notification rules apply. It is a liquidity tool, not a substitute for strong collections.",
  },
  {
    q: "What is days sales outstanding (DSO)?",
    a: "DSO measures how long it takes to collect payment after a sale, often calculated from A/R and revenue over a period. Rising DSO usually signals slower invoicing, weaker collections, or longer customer terms.",
  },
  {
    q: "Should I offer early-payment discounts?",
    a: "Discounts like 2/10 Net 30 can accelerate cash for businesses with margin room and reliable customers. Weigh the cost of the discount against the benefit of earlier deposits and reduced collection effort.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Fast billing and reminders", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Cash flow reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Simple cash tracking", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function HowInvoicingAffectsCashFlowPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Invoicing Affects Cash Flow</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Invoicing Affects Cash Flow</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how invoicing timing, payment terms, and collections practices directly affect cash flow, working capital, and why profitable months can still feel tight on cash.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cash flow problems often start in billing operations, not in sales. You can be busy and profitable on paper while still running short on cash because invoices go out late, terms are too long, or collections lag. Invoicing is the operational lever that determines how quickly revenue becomes money in the bank.
                    </p>
                    <p>
                      Cash flow and profit measure different things. Under accrual accounting, revenue may be recognized when you invoice—even before cash arrives. That gap is normal, but it widens when billing is slow, customers pay on Net 60, or overdue balances pile up without follow-up.
                    </p>
                    <p>
                      Improving cash flow rarely requires a single dramatic change. Most businesses see results from stacking habits: invoice the day work completes, offer card and ACH on the invoice, use deposits on large jobs, and review aging weekly. Each step shortens the path from delivered value to collected cash.
                    </p>
                    <p>
                      Improve collections with{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-invoice-reminders-work" className={linkGreen}>how invoice reminders work</Link>.
                    </p>
                  </div>
                </section>
                <section id="timing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Speed from completed work to issued invoice.">Invoice Timing and Cash Conversion</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every day between job completion and invoice issuance pushes cash collection further out. If you wait until month-end to batch invoices, you may add weeks to the collection cycle even when customers pay promptly after receiving the bill.
                    </p>
                    <p>
                      Same-day or next-day invoicing is one of the highest-impact cash flow improvements for service businesses, agencies, and contractors. Tie billing triggers to operational events—signed acceptance, ticket closed, milestone approved—rather than calendar habits.
                    </p>
                    <p>
                      Track days sales outstanding (DSO) monthly. Rising DSO often signals slower invoicing, weaker reminders, or longer customer terms—not necessarily weaker sales. Pair DSO review with an open-invoice report to see whether delays start before or after the invoice is sent.
                    </p>
                  </div>
                </section>
                <section id="terms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How payment terms shape liquidity.">Payment Terms and Deposits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payment terms define when cash is due relative to the invoice date. Net 30 means the customer has thirty days; Net 60 doubles that window. Longer terms help win enterprise deals but shift working capital burden to you—payroll and vendors may be due before customer cash arrives.
                    </p>
                    <p>
                      Deposits and milestone billing pull cash forward. A 50% deposit before work starts, progress invoices at defined milestones, and a final balance on completion align cash inflows with project costs. Construction, agencies, and custom manufacturing rely on this structure routinely.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-deposit-and-milestone-invoicing-works" className={linkGreen}>how deposit and milestone invoicing works</Link>.{" "}
                      For new customers or large jobs, shorter terms or deposits reduce exposure until payment history is established.
                    </p>
                  </div>
                </section>
                <section id="collections" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turn issued invoices into bank deposits faster.">Collections Practices That Protect Cash Flow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Collections is where invoicing meets cash. Online payment links on every invoice remove friction—customers pay from email without mailing checks. Automated reminders before and after due dates reduce the need for awkward manual follow-up.
                    </p>
                    <p>
                      Weekly A/R aging reviews keep overdue balances visible. Prioritize accounts by amount and age; escalate disputes quickly when a customer withholds payment over a specific line item. Unresolved disputes often mask as “slow pay” when the real blocker is documentation.
                    </p>
                    <p>
                      Track open balances in{" "}
                      <Link href="/invoicing/guides/accounts-receivable-vs-invoicing" className={linkGreen}>accounts receivable vs invoicing</Link>.{" "}
                      If liquidity gaps persist after tightening billing, evaluate options in{" "}
                      <Link href="/invoicing/guides/invoice-financing-explained" className={linkGreen}>invoice financing explained</Link>—but treat financing as a bridge, not a fix for chronic collection delays.
                    </p>
                  </div>
                </section>
                <section id="profit-vs-cash" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why the P&amp;L and bank balance tell different stories.">Profit vs Cash: What Owners Should Watch</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A strong profit month with growing accounts receivable can still leave the bank account tight. Watch cash flow statements and A/R aging alongside the income statement—especially after a growth spurt when invoicing volume outpaces collections capacity.
                    </p>
                    <p>
                      Under accrual accounting, issued invoices increase revenue before cash arrives. Under cash accounting, revenue follows payment—but you still need disciplined invoicing to get paid. See{" "}
                      <Link href="/invoicing/guides/accrual-vs-cash-accounting-for-invoices" className={linkGreen}>accrual vs cash accounting for invoices</Link>{" "}
                      for how method affects what you see in reports versus the bank.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Invoicing and cash flow questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Cash Flow" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-invoicing-affects-cash-flow" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Invoicing Affects Cash Flow: Timing, Terms & DSO | BeltStack",
    description:
      "Invoicing timing, Net terms, deposits, and collections directly affect cash flow and DSO. Learn why profit and cash diverge and practical habits to get paid faster.",
  };
}
