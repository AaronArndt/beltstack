import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl, getPayrollReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks";

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
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ_ITEMS = [
  {
    q: "How do LLC owners pay themselves in QuickBooks?",
    a: "Single-member LLCs often use owner draws or contributions. Multi-member LLCs may use guaranteed payments or distributions. S corp LLCs typically run W-2 payroll for reasonable salary plus distributions. The tax classification determines the correct method—not QuickBooks alone.",
  },
  {
    q: "What is an owner draw in QuickBooks?",
    a: "A draw moves money from the business to the owner without payroll withholding. It is common for sole props and many LLCs taxed as disregarded entities. Categorize to an equity or draw account your CPA sets up.",
  },
  {
    q: "Should an LLC owner be on payroll in QuickBooks?",
    a: "If the LLC is taxed as an S corporation, owners usually need W-2 wages through QuickBooks Payroll or an integrated provider. Partnerships and disregarded entities use different patterns—confirm with your CPA before enabling payroll.",
  },
  {
    q: "Can QuickBooks tell me how much to pay myself?",
    a: "QuickBooks shows cash available and profit, but safe draw amounts depend on taxes, reserves, and entity rules. Use reports for insight; use your accountant for the actual number.",
  },
  {
    q: "How do I record an owner draw in QuickBooks Online?",
    a: "Transfer from the business bank to personal, then categorize to the owner equity or draw account your CPA created—never to payroll expense unless wages apply.",
  },
  {
    q: "What is the difference between a draw and a distribution?",
    a: "Language varies by entity type and CPA preference. QuickBooks records the cash movement; your CPA defines the correct equity account and tax treatment.",
  },
  {
    q: "Can I pay myself from QuickBooks without payroll?",
    a: "Many disregarded single-member LLCs use draws without payroll. S corp LLCs generally need payroll for W-2 wages—confirm before skipping withholding.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Owner pay tracking", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: 4.6, bestFor: "Payroll integration", reviewHref: getPayrollReviewUrl("gusto") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Solo LLC billing", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function HowShouldAnLLCPayThemselvesInQuickBooksPage() {
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
                    <li><Link href="/accounting" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/accounting/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">LLC Owner Pay</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Should an LLC Pay Themselves in QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Owner draws, payroll, and distributions in QuickBooks depend on how your LLC is taxed—set up accounts with your CPA first.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">How an LLC pays the owner in QuickBooks follows tax classification, not the software.</strong> QuickBooks records the transaction—draw, payroll check, or distribution—but your CPA decides which method is correct for your LLC.
                    </p>
                    <p>
                      Owners often conflate &quot;money in my pocket&quot; with the right accounting entry. QuickBooks will happily categorize owner transfers wrong if equity accounts are not set up first. Fix classification at setup, not at tax time.
                    </p>
                    <p className="text-sm text-neutral-600 border-l-4 border-[#10B981] pl-4">
                      BeltStack provides software guidance, not tax or legal advice. Confirm owner compensation, reasonable salary, and entity elections with a qualified CPA before changing payroll or equity accounts.
                    </p>
                    <p>
                      LLC setup in QuickBooks: <Link href="/accounting/guides/can-i-use-quickbooks-for-my-llc" className={linkGreen}>can I use QuickBooks for my LLC</Link>. Payroll hub: <Link href="/payroll" className={linkGreen}>payroll software</Link>. Review:{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link>.
                    </p>
                  </div>
                </section>
                <section id="by-tax-type" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common patterns—not tax advice.">By LLC Tax Treatment (Overview)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Disregarded / single-member LLC</strong> — Owner draws from business bank to personal; record against owner equity or draw accounts.</p>
                    <p><strong className="text-[#1A2D48]">Partnership-taxed LLC</strong> — Distributions and guaranteed payments to members; partnership reporting is CPA-driven.</p>
                    <p><strong className="text-[#1A2D48]">S corp election</strong> — W-2 salary via payroll plus distributions; reasonable compensation rules apply.</p>
                  </div>
                </section>
                <section id="quickbooks-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Recording pay correctly in the file.">QuickBooks Setup Basics</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Use separate business and personal banks—never commingle without documenting transfers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Map owner pay to equity/draw or payroll expense accounts your CPA defines.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Enable <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Payroll</Link> or a connected provider like <Link href={getPayrollReviewUrl("gusto")} className={linkGreen}>Gusto</Link> when W-2 wages are required.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="monthly-rhythm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational habits owners use.">Monthly Owner Pay Rhythm</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      After reconciliation, review cash available and tax reserves with your CPA before increasing draws. Many owners set a modest recurring draw or salary and take true-ups quarterly. QuickBooks cash flow reports inform the conversation—they do not replace tax planning.
                    </p>
                    <p>
                      Pair with <Link href="/accounting/guides/do-you-still-need-an-accountant-if-you-use-quickbooks" className={linkGreen}>accountant review of QuickBooks</Link> and{" "}
                      <Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>what businesses use QuickBooks for</Link> each month.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack explains how owners record transactions in QuickBooks; we do not provide tax or legal opinions on LLC elections. Our independent reviews test payroll integrations, bank transfers, and equity reporting workflows. See <Link href="/methodology" className={linkGreen}>methodology</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Ask your CPA which accounts to create before your first owner transfer.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Set up <Link href="/accounting/guides/can-i-use-quickbooks-for-my-llc" className={linkGreen}>QuickBooks for your LLC</Link> with a dedicated business bank only.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>If you are new to the tool, read <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link>.</span></li>
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
              <GuideSidebar title="LLC + payroll" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedAccountingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Should an LLC Pay Themselves in QuickBooks? (2026) | BeltStack",
    description:
      "Owner draws, payroll, and distributions for LLCs in QuickBooks—how tax classification affects setup, monthly pay rhythm, and what to confirm with your CPA.",
    keywords: [
      "LLC owner draw QuickBooks",
      "pay yourself LLC QuickBooks",
      "QuickBooks owner equity",
      "S corp payroll QuickBooks",
      "LLC distribution accounting",
    ],
  };
}
