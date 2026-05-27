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
    q: "What is an invoice reminder?",
    a: "An invoice reminder is a notification sent to a customer about an open invoice, usually including amount due, due date, and payment instructions. Reminders can be email, SMS, or in-app depending on your invoicing software. They reduce the need for awkward manual chasing when invoices are accurate and easy to pay.",
  },
  {
    q: "When should the first reminder be sent?",
    a: "Many businesses send a friendly reminder 3–5 days before due date, then follow up on or shortly after the due date if unpaid. Pre-due reminders help customers schedule AP runs without feeling punitive. Adjust timing for customers with long internal approval cycles.",
  },
  {
    q: "Are automated reminders effective?",
    a: "Yes, when messaging is clear and professional. Automation improves consistency and reduces forgotten follow-ups that happen when teams get busy with delivery work. Pair automation with accurate invoices and online payment links for the best results.",
  },
  {
    q: "Should reminders escalate in tone?",
    a: "Generally yes. Early reminders are informational; later reminders become more direct and may include consequences or escalation contacts. Escalation should match invoice age and amount, not frustration. Document your cadence so every customer gets fair, predictable follow-up.",
  },
  {
    q: "Can reminders damage customer relationships?",
    a: "Poorly written or overly frequent reminders can strain trust, especially when the invoice itself was unclear or late. Clear, respectful language and accurate invoice details protect relationships while still prompting payment. Offer a billing contact for disputes so reminders do not feel like dead ends.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Automated payment reminders", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Collections reminders + reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Simple reminder workflows", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function HowInvoiceRemindersWorkPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Invoice Reminders Work</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Invoice Reminders Work</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how invoice reminders work, when to send them, recommended cadence and messaging, and how automation improves on-time payments without hurting customer trust.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoice reminders are a core collections tool. They reduce the need for awkward manual follow-up by giving customers timely, specific prompts to pay open balances—before and after due date.
                    </p>
                    <p>
                      Effective reminders are not nagging; they are operational. They include invoice number, amount due, due date, payment link, and a contact for billing questions. Vague “please remit” emails get ignored in busy AP inboxes.
                    </p>
                    <p>
                      Reminders work best when invoices are accurate and easy to pay. Review{" "}
                      <Link href="/invoicing/guides/how-to-create-professional-invoices" className={linkGreen}>how to create professional invoices</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>{" "}
                      alongside your reminder setup.
                    </p>
                    <p>
                      Automate the baseline sequence in your invoicing software—see{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>—then layer manual calls on strategic or high-balance accounts tracked in{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>.
                    </p>
                  </div>
                </section>
                <section id="reminder-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Different reminders for different stages.">Types of Invoice Reminders</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Match reminder type to where the invoice sits in its lifecycle. Pre-due messages help customers schedule payment; overdue messages assume the due date passed and balance remains open.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pre-due reminders:</strong> friendly notice before due date; reduces “I forgot” delays.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Due-date reminders:</strong> confirm amount and payment link on the due date itself.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Overdue reminders:</strong> escalating follow-up after due date with clearer urgency.</span></li>
                    </ul>
                    <p>
                      Some teams add a “invoice sent” confirmation separate from reminders so customers have the document in inbox before the pre-due nudge. For recurring accounts, align reminder rules with{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-recurring-billing" className={linkGreen}>recurring billing</Link>{" "}
                      and failed-payment retries.
                    </p>
                  </div>
                </section>
                <section id="cadence" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical baseline you can customize.">Recommended Reminder Cadence</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A common cadence: 5 days before due, on due date, then 3, 7, and 14 days overdue. High-trust accounts may use fewer touches; high-risk or large balances may need earlier escalation to a phone call or account manager.
                    </p>
                    <p>
                      Write your default cadence in a one-page collections policy so every team member follows the same timing. Exceptions (government payers, seasonal businesses) should be documented on the customer record, not handled ad hoc.
                    </p>
                    <p>
                      Automate this sequence where possible. See{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>.{" "}
                      Stop reminders automatically when payment posts or when an invoice moves to disputed status so customers are not asked to pay while you investigate.
                    </p>
                  </div>
                </section>
                <section id="message-quality" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What effective reminder emails include.">Reminder Message Best Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Subject lines should include your business name and invoice number so messages are not mistaken for spam. Keep body copy short: one paragraph of context, bullet facts, one clear call to action (pay now).
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Invoice number, amount due, and due date in the first screen.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Direct payment link and accepted methods.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Billing contact for disputes or PO questions.</span></li>
                    </ul>
                    <p>
                      Escalate tone gradually: pre-due is informational, first overdue is direct, later overdue may reference contract terms or service pause policies—only if those terms exist. Attach or link the original invoice PDF so approvers do not search their inbox.
                    </p>
                  </div>
                </section>
                <section id="when-to-pause" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Avoid reminders that make disputes worse.">When to Pause or Customize Reminders</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pause automated reminders when a customer has an open dispute, promised payment date, or active approval hold on their side. Continuing to send “pay now” emails during a scope conversation damages trust and rarely speeds resolution.
                    </p>
                    <p>
                      Customize cadence for customers with long AP cycles (common in enterprise and government). Fewer, earlier pre-due reminders plus a due-date notice often outperform aggressive overdue sequences that arrive before their check run.
                    </p>
                    <p>
                      After payment, confirm receipt with a thank-you or receipt email—not another reminder. For partial payments, see{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-partial-payments" className={linkGreen}>how businesses handle partial payments</Link>{" "}
                      and update reminder logic for the remaining balance.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reminder timing and tone questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools with Reminder Automation" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-invoice-reminders-work" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Invoice Reminders Work | BeltStack Guide",
    description:
      "How invoice reminders work: pre-due and overdue types, recommended cadence, message best practices, when to pause automation, and links to tracking and payment guides.",
  };
}
