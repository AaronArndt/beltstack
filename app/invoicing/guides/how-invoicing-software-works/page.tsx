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
    q: "What does invoicing software do?",
    a: "Invoicing software lets you create and send professional invoices, track when they are sent and paid, set up recurring invoices for retainers or subscriptions, and often accept online payments. Many tools also support estimates, client portals, and basic reporting.",
  },
  {
    q: "Do I need invoicing software if I use QuickBooks?",
    a: "QuickBooks and other accounting platforms include built-in invoicing. If you already use them for your books, you may not need a separate invoicing tool. Standalone invoicing software is useful when you want a simpler, cheaper tool focused only on getting paid.",
  },
  {
    q: "Can invoicing software send recurring invoices?",
    a: "Yes. Most invoicing tools support recurring invoices so you can bill clients on a schedule—monthly retainers, subscription services, or regular project fees—without creating each invoice manually.",
  },
  {
    q: "How do I get paid through invoicing software?",
    a: "Many tools let you add payment links to invoices so clients can pay by card or ACH online. Some have built-in payment processing; others integrate with Stripe, PayPal, or similar. Fees and supported methods vary by platform.",
  },
  {
    q: "What is the best free invoicing software?",
    a: "Wave offers free core invoicing and receipt scanning. Zoho Invoice has a free tier with limits. Both suit freelancers and very small businesses; compare limits and paid features when you outgrow free tiers.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancers & service businesses", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Accounting + invoicing", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free invoicing", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function HowInvoicingSoftwareWorksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Invoicing Software Works</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Invoicing Software Works
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn what invoicing software does, from creating and sending invoices to tracking payments, recurring billing, and online payments.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoicing software helps you get paid. Instead of sending PDFs from a template or spreadsheet, a dedicated tool lets you create professional invoices, send them to clients, track when they are viewed and paid, and often collect payments online. Many platforms also support recurring billing, estimates, and basic reporting so you can see what’s outstanding at a glance.
                    </p>
                    <p>
                      Whether you are a freelancer, contractor, or small business, the right invoicing tool reduces back-and-forth and keeps client billing in one place. To compare options, see our{" "}
                      <Link href="/invoicing" className={linkGreen}>invoicing hub</Link>,{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>, and{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>. For in-depth reviews, read our{" "}
                      <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>,{" "}
                      <Link href={getInvoicingReviewUrl("quickbooks")} className={linkGreen}>QuickBooks</Link>, and{" "}
                      <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link> reviews.
                    </p>
                  </div>
                </section>
                <section id="what-invoicing-software-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core tasks invoicing platforms handle.">What Invoicing Software Does</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most invoicing tools focus on a few core jobs:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Creating invoices</strong> — Line items, branding, payment terms, and optional tax.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Sending and tracking</strong> — Email delivery, view status, and reminders for unpaid invoices.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Recurring invoices</strong> — Automate retainer or subscription billing on a schedule.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Online payments</strong> — Payment links or buttons so clients can pay by card or ACH.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting and client records</strong> — Aged receivables, revenue summaries, and client history.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From invoice to payment.">Typical Invoicing Workflow</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-3 list-decimal list-inside">
                      <li><strong className="text-[#1A2D48]">Create the invoice</strong> — Add client, line items, amounts, and payment terms. Many tools offer estimates or proposals that convert to invoices.</li>
                      <li><strong className="text-[#1A2D48]">Send the invoice</strong> — Email from the platform or share a link. Clients often get a portal where they can view and pay.</li>
                      <li><strong className="text-[#1A2D48]">Track status</strong> — See when the invoice was viewed and when it was paid. Set up automatic reminders for overdue invoices.</li>
                      <li><strong className="text-[#1A2D48]">Collect payment</strong> — Via link, bank transfer, or check. Paid amounts sync into your records for reporting. Many invoicing platforms integrate with <Link href="/accounting" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">accounting software</Link> for your books; businesses that pay employees may also use <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software</Link>.</li>
                    </ol>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Recommended Invoicing Software" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-invoicing-software-works" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Invoicing Software Works | BeltStack Guide",
    description:
      "Learn what invoicing software does, from creating and sending invoices to tracking payments, recurring billing, and online payment collection.",
  };
}
