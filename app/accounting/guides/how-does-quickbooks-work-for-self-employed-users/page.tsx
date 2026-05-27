import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingBestForUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/how-does-quickbooks-work-for-self-employed-users";

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
    q: "Which QuickBooks product is best for self-employed?",
    a: "Intuit offers QuickBooks Self-Employed for solos tracking expenses, mileage, and basic Schedule C prep. Growing freelancers often move to QuickBooks Online for invoicing, reconciliation, and accountant access. Compare both in our QuickBooks Online review and against FreshBooks and Wave.",
  },
  {
    q: "Can self-employed users use regular QuickBooks Online?",
    a: "Yes. Many sole proprietors skip the Self-Employed SKU and use QuickBooks Online Simple Start or higher when they need full invoicing, bank reconciliation, and standard business reports. See can I use QuickBooks without an LLC for setup context.",
  },
  {
    q: "Does QuickBooks track mileage for self-employed?",
    a: "QuickBooks Self-Employed emphasizes mileage logging. QuickBooks Online can track mileage with integrations or manual entries depending on plan and setup—confirm current Intuit features at signup and with your CPA for deductibility.",
  },
  {
    q: "Is QuickBooks overkill for side income?",
    a: "Very low-volume side gigs may start with Wave or spreadsheet tracking. QuickBooks becomes worth it when you invoice clients, mix multiple income streams, or need clean books for a CPA—see is QuickBooks worth it and what does QuickBooks cost per month.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Full self-employed books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancer invoicing", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free simple tracking", reviewHref: getAccountingReviewUrl("wave") },
];

export default function HowDoesQuickBooksWorkForSelfEmployedUsersPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Self-Employed</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Does QuickBooks Work for Self-Employed Users?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Expense tracking, mileage, invoicing, and tax prep for sole props—plus when to upgrade from Self-Employed to QuickBooks Online.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Self-employed owners—consultants, creatives, drivers, and side hustles—usually need three things from software: separate business money from personal spending, capture deductible expenses, and hand something readable to a CPA at tax time.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">QuickBooks for self-employed users centers on separating business money, capturing deductions, and preparing for Schedule C filing.</strong> Intuit&apos;s Self-Employed tier targets lighter workflows; <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> is the step up when you need full invoicing, bank reconciliation, and standard business reports.
                    </p>
                    <p>
                      BeltStack reviews business accounting tools for owners—not tax software alone. Pair this guide with{" "}
                      <Link href={getAccountingBestForUrl("freelancers")} className={linkGreen}>best accounting for freelancers</Link>,{" "}
                      <Link href="/accounting/guides/can-i-use-quickbooks-without-an-llc" className={linkGreen}>QuickBooks without an LLC</Link>, and{" "}
                      <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link> if you are comparing personal vs business tools.
                    </p>
                  </div>
                </section>
                <section id="workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What self-employed users run monthly.">Typical Self-Employed Workflows</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Connect business bank and card feeds; tag transactions as business vs personal.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Log mileage and home office expenses where applicable.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Send invoices and track who paid you (stronger on QuickBooks Online).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Export summaries for your CPA or TurboTax—confirm integration at purchase.</span></li>
                    </ul>
                    <p>Cost: <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>. Worth it? <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.</p>
                  </div>
                </section>
                <section id="upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When Self-Employed is not enough.">When to Upgrade to QuickBooks Online</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Upgrade when you hire help, need balance sheet reporting, reconcile complex accounts, or your accountant requests standard QuickBooks Online access. See <Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>what businesses use QuickBooks for</Link> and <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>switching accounting software</Link>.</p>
                  </div>
                </section>
                <section id="self-employed-vs-qbo" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Pick the SKU that matches your volume.">Self-Employed vs QuickBooks Online</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">QuickBooks Self-Employed</strong> fits lighter tracking—expenses, mileage, basic tax estimates—when you do not send many formal invoices or need full reconciliation. <strong className="text-[#1A2D48]">QuickBooks Online</strong> fits when you invoice clients, have multiple accounts, or want accountant-ready P&amp;L and balance sheet reports.
                    </p>
                    <p>
                      If you are unsure which side you are on, run a trial on the tier your CPA recommends. Pricing:{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what QuickBooks costs per month</Link>. Free options:{" "}
                      <Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>can I get QuickBooks for free</Link>.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates accounting software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent accounting reviews—not paid placement lists. Editors test owner workflows like invoicing, bank reconciliation, and month-end reporting; compare headline pricing and add-ons honestly; and note where tools fit solos versus teams with accountants. Rankings reflect fit for small businesses, not vendor sponsorship.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Continue with these guides and reviews.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-i-use-quickbooks-without-an-llc" className={linkGreen}>QuickBooks without an LLC</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>Is QuickBooks worth it?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingBestForUrl("freelancers")} className={linkGreen}>Best accounting for freelancers</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>Cheapest way to use QuickBooks</Link></span></li>
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
              <GuideSidebar title="Self-employed picks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Does QuickBooks Work for Self-Employed Users? | BeltStack Guide",
    description:
      "How QuickBooks works for self-employed users: Self-Employed vs QBO, mileage and expenses, Schedule C prep, and when to upgrade your plan.",
  };
}
