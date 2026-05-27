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
    q: "What is the fastest way to reduce late invoice payments?",
    a: "Issue invoices immediately after delivery, use clear payment terms, enable online payment options, and run a consistent reminder cadence before and after due dates. Most gains come from removing friction earlier in the cycle, not from sending harsher overdue emails alone. Pair speed with accurate line items so approvers do not stall payment while they clarify scope.",
  },
  {
    q: "Do shorter payment terms always improve collections?",
    a: "Often yes, but terms must match customer expectations, industry norms, and what your contract already states. Overly aggressive terms can increase disputes or slow approvals in B2B accounts with formal AP processes. Net 15 or Due on Receipt works well when communicated upfront and reinforced on every invoice.",
  },
  {
    q: "Should I offer early payment discounts?",
    a: "Early-pay discounts can accelerate cash collection when margin allows and when customers have incentive to optimize their own AP timing. They work best when clearly stated on invoices and contracts, with a defined discount window (for example 2/10 Net 30). Track whether discounted invoices actually pay faster so you know the tradeoff is worth it.",
  },
  {
    q: "How many payment reminders should I send?",
    a: "A common pattern is one pre-due reminder, one on due date, and follow-ups at 3, 7, and 14 days overdue, adjusted by customer relationship and invoice size. High-trust accounts may need fewer touches; large or repeatedly late balances may need earlier escalation. Automate the baseline cadence so follow-up does not depend on someone remembering.",
  },
  {
    q: "Can better invoice design reduce late payments?",
    a: "Yes. Clear line items, due dates, payment instructions, and easy payment links reduce friction that causes delays unrelated to willingness to pay. Professional layout also speeds internal customer approvals when multiple stakeholders must sign off. See our guide on creating professional invoices for a practical quality checklist.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Reminders and payment links", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Terms + collections reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Simple collections for small teams", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function HowToReduceLateInvoicePaymentsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Reduce Late Invoice Payments</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Reduce Late Invoice Payments</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Practical tactics to reduce late invoice payments through faster issuance, clearer terms, better payment experience, structured reminders, and disciplined A/R tracking.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Late payments are rarely random. They usually come from process gaps: invoices sent late, missing approval references, unclear totals, weak payment instructions, or inconsistent follow-up after due date. Fixing those gaps often beats sending more aggressive overdue emails.
                    </p>
                    <p>
                      Reducing late payments is less about chasing harder and more about removing friction earlier. Customers who want to pay should be able to approve, understand, and complete payment without hunting for PO numbers, wire details, or a contact who can answer billing questions.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>{" "}
                      before scaling reminder volume. Many “late” payers are actually waiting on internal approval because the invoice was incomplete or sent to the wrong AP inbox.
                    </p>
                    <p>
                      This guide covers speed, payment experience, reminders, and terms. Pair it with{" "}
                      <Link href="/invoicing/guides/how-to-create-professional-invoices" className={linkGreen}>how to create professional invoices</Link>,{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>, and{" "}
                      <Link href="/invoicing/guides/how-invoicing-affects-cash-flow" className={linkGreen}>how invoicing affects cash flow</Link>{" "}
                      for a full collections improvement plan.
                    </p>
                  </div>
                </section>
                <section id="speed-to-invoice" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Collections start when work is done, not weeks later.">Send Invoices Faster</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every day between job completion and invoice issuance extends your collection cycle. Same-day or next-business-day invoicing is one of the highest-ROI habits for service businesses, contractors, and agencies billing on delivery.
                    </p>
                    <p>
                      Batch invoicing once a week feels efficient internally but pushes every customer’s due date later. Tie invoice creation to job close-out, timesheet approval, or milestone sign-off so billing does not wait on month-end admin blocks.
                    </p>
                    <p>
                      Use templates and automation so routine invoices do not depend on one person remembering manual steps. See{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/manual-invoicing-vs-automated-invoicing" className={linkGreen}>manual invoicing vs automated invoicing</Link>{" "}
                      when volume justifies the switch.
                    </p>
                  </div>
                </section>
                <section id="payment-experience" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Make paying easy, not ambiguous.">Improve Payment Experience</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Offer online payment links, list accepted methods clearly, and include contact details for billing questions. Customers pay faster when they do not need to hunt for instructions or ask whether you still prefer checks only.
                    </p>
                    <p>
                      Put the total due and payment link above the fold on emailed invoices. Enterprise payers may still use ACH or wire; make reference fields obvious (invoice number, customer ID) so their AP team can match payments without email back-and-forth.
                    </p>
                    <p>
                      For payment mechanics, see{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.{" "}
                      Faster payment application also speeds{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>invoice and payment reconciliation</Link>.
                    </p>
                  </div>
                </section>
                <section id="reminder-cadence" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Structured follow-up beats ad hoc chasing.">Use a Consistent Reminder Cadence</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated reminders before and after due dates improve outcomes without damaging relationships, when messaging is professional and specific. Escalate tone and channel only as invoices age—not because someone forgot to follow up last week.
                    </p>
                    <p>
                      Document a default cadence (pre-due, due date, 3/7/14 days overdue) and allow exceptions for strategic accounts. Reminders work best when paired with accurate open-balance tracking; see{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>.
                    </p>
                    <p>
                      Learn timing and messaging patterns in{" "}
                      <Link href="/invoicing/guides/how-invoice-reminders-work" className={linkGreen}>how invoice reminders work</Link>.
                    </p>
                  </div>
                </section>
                <section id="terms-and-credit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Set expectations before work starts.">Payment Terms and Credit Policy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payment terms belong in the contract and on every invoice. Net 30 is common, but Net 15 or Due on Receipt may fit better when cash runway is tight or when customers have a history of slow AP cycles. Align terms with what you quoted during sales so billing does not surprise anyone.
                    </p>
                    <p>
                      A simple credit policy defines when new work pauses for chronically late accounts, how partial payments apply, and whether you offer early-pay discounts. Enforcing policy consistently matters more than having the strictest terms on paper.
                    </p>
                    <p>
                      For B2B buyers with formal AP, include PO numbers and bill-to details on every invoice—see{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>—so terms and references do not become the bottleneck.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Collections improvement questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Faster Collections" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-to-reduce-late-invoice-payments" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Reduce Late Invoice Payments | BeltStack Guide",
    description:
      "Reduce late invoice payments with faster issuance, clearer terms, online payment links, structured reminders, and A/R tracking—practical tactics for service businesses and agencies.",
  };
}
