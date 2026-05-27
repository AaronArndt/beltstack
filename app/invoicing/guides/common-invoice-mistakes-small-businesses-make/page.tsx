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
    q: "What invoice mistake causes the most delays?",
    a: "Missing required details—PO number, due date, payment instructions, or clear line items—is one of the most common causes of delayed payment. Enterprise AP often cannot schedule payment until every field matches their system. Fixing templates is usually faster than chasing individual customers.",
  },
  {
    q: "Should small businesses send invoices immediately?",
    a: "Yes. Delayed invoice issuance directly extends collection cycles because the due-date clock does not start until the customer receives a complete invoice. A same-day or next-business-day habit usually improves cash flow without changing pricing.",
  },
  {
    q: "Are manual invoice numbers risky?",
    a: "They can be. Duplicate or missing sequences complicate reconciliation, break reminder workflows, and weaken audit trails. Automated numbering in invoicing software reduces this risk and makes A/R aging reports trustworthy.",
  },
  {
    q: "How can I reduce invoice disputes?",
    a: "Use detailed line items, reference approved scope and PO data, and keep terms consistent across quote, contract, and invoice. Disputes often trace to ambiguity, not bad faith—document what was delivered in language the buyer already approved.",
  },
  {
    q: "Can reminders reduce overdue invoices?",
    a: "Yes. Automated reminder cadences before and after due dates usually outperform ad hoc manual follow-up. Pair reminders with easy online payment links so the customer can resolve balance in one click.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Automated reminders and follow-up", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Simple low-cost invoicing", reviewHref: getInvoicingReviewUrl("wave") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoice-to-accounting continuity", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function CommonInvoiceMistakesGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Common Invoice Mistakes</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Common Invoice Mistakes Small Businesses Make</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn the invoice mistakes that slow payment and create disputes, plus practical controls that small businesses can implement quickly.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small invoicing errors can create large cash flow consequences. Most payment delays come from process defects, not unwilling customers: incomplete fields, late invoice issuance, unclear terms, and weak follow-up.
                    </p>
                    <p>
                      The good news is that invoice mistakes are highly patterned. The same missing PO, vague line item, or delayed send shows up across customers until someone fixes the template or handoff—not the relationship.
                    </p>
                    <p>
                      If your team is tightening invoicing quality, start with{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>required invoice fields</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.{" "}
                      For document basics, see{" "}
                      <Link href="/invoicing/guides/what-is-an-invoice" className={linkGreen}>what is an invoice</Link>.
                    </p>
                    <p>
                      Software helps enforce standards but does not replace process. Compare tools in our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>{" "}
                      if you are ready to automate reminders and online payments.
                    </p>
                  </div>
                </section>
                <section id="top-mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The errors that appear most in overdue A/R.">Top Invoice Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Review your A/R aging notes and support inbox—disputes and “still processing” replies usually cluster around a short list of defects. Fixing these first delivers faster ROI than renegotiating terms with every customer.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Late send:</strong> invoicing days or weeks after delivery—customers deprioritize old bills and your DSO stretches unnecessarily.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Missing PO or job codes:</strong> B2B payers cannot release funds without procurement match.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Vague line items:</strong> single-line totals that do not mirror approved quote scope trigger AP questions.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Weak terms and payment guidance:</strong> no explicit due date, wrong Net terms vs contract, or no online pay link.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Wrong invoice type:</strong> progress or recurring documents used inconsistently—see{" "}
                        <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>.
                      </span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Inconsistent follow-up:</strong> no reminder cadence after due date, or only chasing favorite customers.</span></li>
                    </ul>
                    <p>
                      Many of these overlap with billing confusion—charges never invoiced or double-billed on recurring plans. See{" "}
                      <Link href="/invoicing/guides/billing-vs-invoicing-whats-the-difference" className={linkGreen}>billing vs invoicing</Link>{" "}
                      if ownership between ops and finance is unclear.
                    </p>
                  </div>
                </section>
                <section id="controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Simple systems that prevent repeat mistakes.">Controls That Prevent Rework</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Controls do not have to mean bureaucracy. The goal is to catch predictable errors before the customer sees them—especially as more people touch invoicing.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Template-driven invoices:</strong> lock required fields (PO, terms, payment link) in your invoicing tool.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Send SLAs:</strong> same-day or next-business-day invoice after completion—owned by operations, not “when finance has time.”</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reminder automation:</strong> pre-due and post-due cadence tied to invoice terms.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Dispute logging:</strong> tag reason codes monthly and fix the top one in templates or training.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Online payments:</strong> reduce “check is in the mail” friction—see{" "}
                        <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.
                      </span></li>
                    </ul>
                    <p>
                      For teams with multi-person invoicing, add formal{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>invoice approval workflows</Link>{" "}
                      for high-risk sends only. For end-to-end discipline, see{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.
                    </p>
                  </div>
                </section>
                <section id="best-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Low-effort habits with outsized cash-flow impact.">Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a monthly 30-minute invoice quality review: sample five recent invoices, five overdue balances, and five disputes. If the same field is missing twice, update the template—not the training deck alone.
                    </p>
                    <p>
                      Align sales, delivery, and finance on what “done” means for billing: signed acceptance, timesheet approval, or shipment confirmation should trigger invoice creation automatically where possible.
                    </p>
                    <p>
                      Measure days from delivery to invoice send—not only DSO. Shrinking that gap often improves cash faster than shortening Net terms with customers who already pay on schedule when invoices are clean.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Frequently asked questions on avoiding invoice delays.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Software to Reduce Invoice Errors" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/common-invoice-mistakes-small-businesses-make" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Common Invoice Mistakes Small Businesses Make | BeltStack Guide",
    description:
      "Common invoice mistakes small businesses make—late sends, missing POs, weak terms—and practical controls to fix them, cut disputes, and get paid faster.",
  };
}
