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
    q: "Why do small businesses use invoicing software?",
    a: "Small businesses use invoicing software to send professional invoices, track what’s paid and what’s overdue, automate recurring billing, and often accept online payments. It keeps client billing in one place and reduces admin compared to spreadsheets or ad hoc documents.",
  },
  {
    q: "What is the best invoicing software for small business?",
    a: "FreshBooks is our top pick for most small businesses: it’s easy to use and combines invoicing, time tracking, and payment collection. Wave is the best free option; QuickBooks fits if you already use it for accounting. See our best invoicing software roundup for full rankings.",
  },
  {
    q: "Can small businesses get free invoicing software?",
    a: "Yes. Wave offers free core invoicing and receipt scanning. Zoho Invoice has a free tier with limits. Both work for very small teams; you may outgrow free tiers as you add clients or need more features.",
  },
  {
    q: "How do I keep invoicing simple without overpaying?",
    a: "Start with your actual needs: number of clients, recurring vs one-off invoices, and whether you need time tracking or just invoicing. Compare plans by client or invoice limits and choose a tier that fits. Avoid the highest tier until you need the features.",
  },
  {
    q: "Do I need invoicing software if I have accounting software?",
    a: "Many accounting tools (QuickBooks, Xero) include invoicing. If you already use one for your books, you may not need a separate invoicing tool. Standalone invoicing software makes sense when you want a simpler, cheaper option focused only on getting paid.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Small business", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free option", reviewHref: getInvoicingReviewUrl("wave") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Accounting + invoicing", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function InvoicingForSmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Invoicing for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Invoicing for Small Business
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Why small businesses use invoicing software, payment tracking, invoice professionalism, and choosing simple tools without paying for more than you need.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses use invoicing software to look professional, get paid faster, and keep track of what’s owed. A dedicated tool replaces scattered spreadsheets and Word docs with one place to create invoices, send them, track payment status, and run simple reports. Automation—recurring invoices and payment reminders—saves time as you scale.
                    </p>
                    <p>
                      The right fit depends on size and budget. Explore our <Link href="/invoicing" className={linkGreen}>invoicing hub</Link> and <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>. Read our <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>, <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link>, and <Link href={getInvoicingReviewUrl("quickbooks")} className={linkGreen}>QuickBooks</Link> reviews to compare features and pricing for small business use.
                    </p>
                  </div>
                </section>
                <section id="benefits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you gain with dedicated invoicing.">Benefits for Small Business</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment tracking</strong> — See what’s sent, viewed, and paid at a glance.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Professional invoices</strong> — Branded templates and clear payment terms.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Recurring billing and reminders without manual follow-up.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Simple tools</strong> — Choose a plan that fits your client count and avoid overpaying for enterprise features.</span></li>
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
              <GuideSidebar title="Invoicing Software for Small Businesses" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoicing-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoicing for Small Business | BeltStack Guide",
    description:
      "Why small businesses use invoicing software, payment tracking, and how to choose simple tools without overpaying.",
  };
}
