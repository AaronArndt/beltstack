import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl, getAccountingReviewUrl } from "@/lib/routes";

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
    q: "What is the difference between invoicing and accounting software?",
    a: "Invoicing software focuses on creating and sending invoices, tracking payments, and sometimes estimates and time tracking. Accounting software includes that plus full bookkeeping: chart of accounts, P&L, balance sheet, bank feeds, and tax-ready reports. Many accounting tools (e.g. QuickBooks, Xero) have strong invoicing built in.",
  },
  {
    q: "Do I need both invoicing and accounting software?",
    a: "Not necessarily. If you use QuickBooks or Xero for your books, their invoicing is usually enough. Standalone invoicing tools make sense when you want a simpler, cheaper tool and sync paid invoices into your accounting software or handle books separately.",
  },
  {
    q: "Can FreshBooks do full accounting?",
    a: "FreshBooks has evolved to include more accounting features, but it is still best known for invoicing and time tracking. For full double-entry accounting and deeper reporting, QuickBooks or Xero are typically stronger. See our FreshBooks review for details.",
  },
  {
    q: "When should I use invoicing-only software?",
    a: "Use invoicing-only software when you primarily need to send invoices and get paid, and you either do not need full books yet or you keep books in a separate system. Freelancers and very small service businesses often fit this profile.",
  },
  {
    q: "How does invoicing connect to accounting?",
    a: "Paid invoices become income in your books. Many invoicing tools export to QuickBooks or Xero, or you can record income manually. If you use one platform for both invoicing and accounting, the connection is automatic.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoicing-focused", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Full accounting", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.5, bestFor: "Accounting + invoicing", reviewHref: getAccountingReviewUrl("xero") },
];

export default function InvoicingSoftwareVsAccountingSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Invoicing Software vs Accounting Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Invoicing Software vs Accounting Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Understand the differences between invoicing tools and accounting software, when you need one vs both, and how they overlap in tools like FreshBooks, QuickBooks, Wave, and Xero.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoicing software and accounting software overlap: both help you send invoices and track payments. The main difference is scope. Invoicing tools focus on getting you paid—creating invoices, reminders, and payment collection—often with estimates and time tracking. Accounting software does that plus full bookkeeping: a chart of accounts, bank feeds, P&L and balance sheet, and tax-ready reports.
                    </p>
                    <p>
                      Tools like <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> and <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link> started as invoicing-first; <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks</Link> and <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> are full accounting platforms with strong invoicing. Explore our <Link href="/invoicing" className={linkGreen}>invoicing hub</Link> and <Link href="/accounting" className={linkGreen}>accounting hub</Link>, and read our <Link href="/accounting/guides/how-accounting-software-works" className={linkGreen}>how accounting software works</Link> guide for the accounting side.
                    </p>
                  </div>
                </section>
                <section id="when-to-use-which" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choosing the right tool for your workflow.">When to Use Which</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Use invoicing-only software</strong> when you mainly need to send invoices and collect payments, and you either do not need full books or you keep them elsewhere. Common for freelancers and micro businesses.</p>
                    <p><strong className="text-[#1A2D48]">Use accounting software</strong> when you need full bookkeeping, bank feeds, and financial reports. QuickBooks and Xero include invoicing, so one platform can do both. Many businesses start with invoicing and add accounting when they need deeper reporting or tax prep.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing vs Accounting Tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoicing-software-vs-accounting-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoicing Software vs Accounting Software | BeltStack Guide",
    description:
      "Compare invoicing software and accounting software: when you need one vs both, and how FreshBooks, QuickBooks, Wave, and Xero overlap.",
  };
}
