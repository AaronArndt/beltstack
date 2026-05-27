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
    q: "What does Net 30 mean on an invoice?",
    a: "Net 30 means payment is due 30 calendar days after the invoice date, unless your contract defines business days or a different anchor (ship date, acceptance date). Always state the due date explicitly on the invoice—not only the Net label—so AP systems schedule correctly.",
  },
  {
    q: "What does Due on Receipt mean?",
    a: "Due on Receipt means payment is expected immediately when the invoice is received, often used for smaller jobs, new customers, or higher-risk engagements. Pair with card or ACH links so “immediate” is actually feasible for the buyer.",
  },
  {
    q: "Are shorter terms always better for cash flow?",
    a: "Often yes, but terms must match customer expectations and procurement cycles. Terms that are too aggressive for your market can increase disputes and slow approvals. Segment terms by customer trust and deal size instead of using one global policy.",
  },
  {
    q: "Should I charge late fees?",
    a: "Late fees can improve payment discipline when clearly disclosed in contracts and invoices and applied consistently. Confirm they are permissible in your jurisdiction and industry; inconsistent enforcement undermines credibility.",
  },
  {
    q: "Can I use different terms for different customers?",
    a: "Yes. Many businesses segment terms by customer type, payment history, and deal size, then enforce those terms through invoicing software templates. Document exceptions in the CRM so preparers do not revert to a default Net 30 on every send.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Automated terms and reminders", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Terms + collections visibility", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Simple term setup for small teams", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function InvoiceTermsExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Invoice Terms Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Invoice Terms Explained (Net 30, Due on Receipt, etc.)</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what common invoice terms mean and how to choose payment terms that balance conversion, customer experience, and cash flow.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoice terms are not small print. They directly shape when money arrives, how collections are managed, and whether invoices get approved without escalation. Terms should match your contract, appear clearly on every invoice, and drive reminder timing in your invoicing system.
                    </p>
                    <p>
                      Ambiguous terms—“pay promptly” or missing due dates—force AP to guess and often default to their longest internal cycle. That silently extends your days sales outstanding even when the relationship is healthy.
                    </p>
                    <p>
                      If your team also needs cleaner invoice structure, see{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>.{" "}
                      Mistakes in terms show up often in our guide to{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes</Link>.
                    </p>
                    <p>
                      Automate term templates and reminders through{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      or compare platforms on our{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link> page.
                    </p>
                  </div>
                </section>
                <section id="common-terms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Terms most small businesses use.">Common Invoice Terms</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customers recognize these labels—but many interpret them differently. Always pair the label with a concrete due date and currency so there is no ambiguity in AP systems or portal uploads.
                    </p>
                    <p><strong className="text-[#1A2D48]">Due on Receipt:</strong> Payment expected immediately when the invoice is received. Common for deposits, rush work, or first engagements before trust is established.</p>
                    <p><strong className="text-[#1A2D48]">Net 7 / Net 15 / Net 30:</strong> Payment due 7, 15, or 30 days after the invoice date (confirm calendar vs business days in your contract). Net 30 remains the B2B default in many industries.</p>
                    <p><strong className="text-[#1A2D48]">End of Month (EOM):</strong> Payment due at month end regardless of issue date—useful when customers batch AP runs monthly but can extend DSO for early-month invoices.</p>
                    <p><strong className="text-[#1A2D48]">Milestone terms:</strong> Payments tied to delivery phases on larger jobs—often paired with progress invoices; see{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">2/10 Net 30 (early payment discount):</strong> 2% discount if paid within 10 days, otherwise full amount due in 30. Useful when you can trade margin for speed—disclose math clearly on the invoice.
                    </p>
                  </div>
                </section>
                <section id="choosing-terms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choosing terms based on risk and buyer behavior.">How to Choose Invoice Terms</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Terms are a pricing and risk decision, not only accounting convention. Shorter terms improve cash flow but can reduce win rate if competitors offer longer Net periods—know your market norm before you change policy.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">New or higher-risk customers:</strong> Due on Receipt, Net 7, or deposits before large spend—see deposit patterns in milestone billing guides.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Enterprise B2B:</strong> align with their procurement cycle; fighting Net 60 with Net 15 on the invoice alone rarely works—negotiate in contract.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Complex projects:</strong> milestone terms that match delivery and approval workload reduce disputes on progress bills.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Trusted repeat customers:</strong> longer Net may be acceptable if send quality and reminders are strong—track actual pay behavior, not assumptions.</span></li>
                    </ul>
                    <p>
                      Document agreed terms in the quote and contract, then enforce the same language on the invoice. Mismatches between contract Net 45 and invoice Net 30 are a common AP rejection reason.
                    </p>
                  </div>
                </section>
                <section id="late-fees-discounts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How incentives and penalties influence payment behavior.">Late Fees and Early-Pay Discounts</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Late fees can deter overdue balances when disclosed clearly in the contract and on the invoice and enforced consistently. Sporadic enforcement trains customers to ignore the policy.
                    </p>
                    <p>
                      Early-pay discounts trade margin for speed—model whether 2/10 Net 30 actually improves cash after discount cost. Some businesses offer a small discount only for ACH or card pay within a short window to offset processing fees.
                    </p>
                    <p>
                      Terms should appear in contracts and on invoices. Use invoicing software to apply term templates and reminder timing consistently—pre-due nudges often prevent late fees from ever being needed.
                    </p>
                    <p>
                      Combine terms with easy payment:{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>{" "}
                      explains how due dates and payment links work together in practice.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational habits that make terms enforceable.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Print the due date in bold near the total—not only in footer terms. AP clerks scan totals first; burying the date costs you days.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Sync reminder schedules to term type (Net 30 vs Due on Receipt need different cadences).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Review actual days-to-pay by customer quarterly and adjust terms or credit limits.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Keep terms consistent across quote, contract, invoice, and customer portal profiles.</span></li>
                    </ul>
                    <p>
                      For full lifecycle controls, see{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers on invoice payment terms.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Term and Reminder Control" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoice-terms-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoice Terms Explained (Net 30, Due on Receipt, etc.) | BeltStack Guide",
    description:
      "Invoice terms explained: Net 30, Due on Receipt, EOM, late fees, and early-pay discounts—how to choose payment terms that improve cash flow and collections.",
  };
}
