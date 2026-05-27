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
    q: "What is an online invoice payment?",
    a: "An online invoice payment lets customers pay invoices digitally through links or portals, usually by card, ACH, or digital wallet. It replaces manual check runs or one-off wire instructions with a guided checkout tied to a specific invoice amount.",
  },
  {
    q: "How do payment links on invoices work?",
    a: "Invoicing software embeds a secure payment link tied to a specific invoice. Customers click, choose method, pay, and the invoice status updates automatically when the processor confirms settlement. Good tools also send receipt emails without manual follow-up.",
  },
  {
    q: "What fees apply to online invoice payments?",
    a: "Card and ACH fees vary by processor and method. Card fees are generally higher than bank transfer fees, while same-day options may carry premium costs. Many businesses pass fees selectively or encourage ACH for large balances.",
  },
  {
    q: "Are online invoice payments secure?",
    a: "They can be, when providers use secure hosted payment pages, encryption, tokenization, and compliance controls. Businesses should avoid collecting raw card data directly in email or custom forms—that shifts PCI burden and risk onto you.",
  },
  {
    q: "How do online payments affect reconciliation?",
    a: "When integrated correctly, payment status and settlement records sync into invoicing and accounting systems, reducing manual matching work. Exceptions—chargebacks, partial pays, failed ACH—still need a defined ops workflow.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Simple invoice payment links", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Payment + accounting sync", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Low-friction small business payments", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function HowOnlineInvoicePaymentsWorkPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Online Invoice Payments Work</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Online Invoice Payments Work</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how online invoice payments work from payment links to settlement and reconciliation, and what to evaluate before turning payments on.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Online invoice payments shorten payment cycles by removing friction between invoice receipt and payment completion. Instead of requesting checks or manual transfers, businesses send invoices with embedded payment options—card, ACH, or wallet—on a secure hosted page.
                    </p>
                    <p>
                      The customer does not need your bank details memorized or a separate portal login in many setups: one link, correct amount, instant confirmation. That convenience often matters more than shaving a few days off Net terms for small and mid-sized buyers.
                    </p>
                    <p>
                      For invoice structure basics, see{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.{" "}
                      Payment links work best when due dates and totals are unambiguous on the document itself.
                    </p>
                    <p>
                      Evaluate built-in payment features in our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      guide and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>—processor integration depth varies widely.
                    </p>
                  </div>
                </section>
                <section id="payment-flow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What happens after an invoice is sent.">Online Invoice Payment Flow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Understanding the flow helps you set customer expectations on timing—authorization is not always instant settlement, especially for ACH. Finance should know when cash hits the bank vs when the invoice flips to paid in software.
                    </p>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li><strong className="text-[#1A2D48]">Invoice issued</strong> with secure payment link or portal access; amount and currency are locked to that document.</li>
                      <li><strong className="text-[#1A2D48]">Customer pays</strong> via card, ACH, or wallet on the hosted page—your systems never touch raw card numbers.</li>
                      <li><strong className="text-[#1A2D48]">Processor authorizes</strong> and settles; ACH may take multiple business days; cards often settle faster.</li>
                      <li><strong className="text-[#1A2D48]">Status updates</strong> to paid or partial paid in invoicing; receipt may auto-send to the payer.</li>
                      <li><strong className="text-[#1A2D48]">Accounting sync</strong> posts payment, fees, and any processor clearing accounts for reconciliation.</li>
                    </ol>
                    <p>
                      Partial payments and deposits need explicit rules—see how your tool handles open balances. For lifecycle context,{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>{" "}
                      covers tracking from send through close.
                    </p>
                  </div>
                </section>
                <section id="methods-fees" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational trade-offs by payment method.">Payment Methods and Fee Considerations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Card payments are typically fastest for customer convenience, but interchange and platform fees are often higher as a percent of invoice total. ACH may cost less per dollar but can fail or return days later—monitor NSF and return codes.
                    </p>
                    <p>
                      Many businesses enable both: card for speed on smaller invoices, ACH encouraged for large balances via note on the invoice or small discount. Disclose surcharge policies only where legal and consistent with processor rules.
                    </p>
                    <p>
                      Fee visibility matters at month-end: processor fees should map to expense accounts, not silently reduce revenue. If processor selection is a priority, review the{" "}
                      <Link href="/payment-processing" className={linkGreen}>payment processing hub</Link>.
                    </p>
                    <p>
                      Weak invoices still delay pay even with a link—fix{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>{" "}
                      before you optimize payment methods.
                    </p>
                  </div>
                </section>
                <section id="security-controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trust and controls for finance and ops teams.">Security and Compliance Basics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Good setups keep sensitive payment data on provider-hosted pages rather than inside business email or spreadsheets. Tokenization stores a secure reference instead of card numbers in your invoicing database.
                    </p>
                    <p>
                      Enforce role controls: who can issue refunds, who can mark invoices paid manually, and who can change amounts after send. Manual “mark paid” without bank verification is a common fraud and reconciliation gap.
                    </p>
                    <p>
                      Monitor settlement daily during rollout; define workflows for chargebacks, ACH returns, and duplicate payments. Customers appreciate clear receipts—distinct from the original invoice—see{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>{" "}
                      for how receipts differ.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Rollout habits that improve adoption and cash speed.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Put the payment link above the fold in the email body and on the PDF—do not hide it in footer terms. Test the link yourself before every template goes live.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Enable automatic payment reminders that repeat the link, not only the PDF attachment.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile processor deposits weekly against open A/R, not only when customers complain.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Train AP contacts at key accounts on how your pay link works to reduce “we never got bank details” delays.</span></li>
                    </ul>
                    <p>
                      For approval before high-value sends, pair payments with{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>invoice approval workflows</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions on digital invoice collection.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Software for Online Payments" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-online-invoice-payments-work" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Online Invoice Payments Work | BeltStack Guide",
    description:
      "How online invoice payments work: payment links, card vs ACH flow, processor fees, security basics, and reconciliation tips for small business finance teams.",
  };
}
