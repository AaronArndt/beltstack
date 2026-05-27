import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-technology-most-small-businesses-use";

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
    q: "What technology do most small businesses use?",
    a: "Cloud accounting, business banking apps, email/collaboration suites (Google or Microsoft), payment processors, and—once selling actively—CRM or scheduling tools.",
  },
  {
    q: "Do small businesses still use desktop software?",
    a: "Cloud SaaS dominates new adoption. Some industries keep desktop accounting or POS, but mobile and browser access are standard expectations.",
  },
  {
    q: "What tech should a new small business buy first?",
    a: "Business bank account, accounting or invoicing software, and professional email. Add CRM and payroll when leads and headcount justify them.",
  },
  {
    q: "How do I avoid buying too much software?",
    a: "Buy for a current pain point, integrate before adding another category, and review subscriptions quarterly. See what programs small businesses actually need for a starter-versus-later checklist.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Cloud accounting", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Cloud books", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free cloud start", reviewHref: getAccountingReviewUrl("wave") },
];

export default function WhatTechnologyMostSmallBusinessesUsePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">SMB Technology</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Technology Most Small Businesses Use
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Cloud accounting, payments, collaboration, and customer tools—the technology stack patterns BeltStack sees across SMBs.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Owners searching for &quot;what technology small businesses use&quot; are usually benchmarking their own setup—wondering if they are behind peers or buying the wrong things. The honest answer is less about bleeding-edge tech and more about <strong className="text-[#1A2D48]">cloud tools that match how you get paid and stay compliant</strong>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Most small businesses run on cloud software plus a business bank—not servers in a closet.</strong> Owners expect mobile access, bank feeds, and card payments. Industry adds layers: contractors add <Link href="/field-service" className={linkGreen}>field service</Link>; retailers add <Link href="/pos" className={linkGreen}>POS</Link>; agencies add <Link href="/crm" className={linkGreen}>CRM</Link> and <Link href="/project-management" className={linkGreen}>project management</Link>.
                    </p>
                    <p>
                      For how those pieces connect without one bloated app, see <Link href="/crm/guides/how-small-businesses-track-everything-in-one-place" className={linkGreen}>track everything in one place</Link>. For category order, see <Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>widely used categories</Link>.
                    </p>
                  </div>
                </section>
                <section id="stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The modern SMB baseline.">Common Technology Stack</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Google Workspace or Microsoft 365</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>QuickBooks, Xero, Wave, or FreshBooks for money</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Stripe, Square, or PayPal for payments</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>HubSpot, Salesforce, or Pipedrive when sales scales</span></li>
                    </ul>
                    <p>See <Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>widely used software categories</Link> and <Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>types explained</Link>.</p>
                  </div>
                </section>
                <section id="cloud" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why SaaS won the SMB default.">Why Cloud-First Technology Dominates</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cloud accounting and CRM mean your bookkeeper, partner, and field lead see the same numbers without VPNs or nightly backups. Updates to tax tables and security patches land on the vendor&apos;s schedule—not yours. Desktop still appears in some retail POS and legacy shops, but new adoption is overwhelmingly browser and mobile.
                    </p>
                    <p>
                      Pair cloud finance with a modern business bank that feeds transactions into <Link href="/accounting/best-accounting-software" className={linkGreen}>accounting software</Link> and <Link href="/payment-processing" className={linkGreen}>payment processors</Link> you already use.
                    </p>
                  </div>
                </section>
                <section id="industry" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Baseline plus vertical tools.">Industry Layers on the Baseline</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Trades and home services</strong> often add <Link href="/scheduling" className={linkGreen}>scheduling</Link> and field service on top of QuickBooks-class accounting.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Professional services</strong> emphasize <Link href="/invoicing" className={linkGreen}>invoicing</Link>, time tracking, and <Link href="/crm" className={linkGreen}>CRM</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Retail and hospitality</strong> layer POS, inventory, and kitchen or appointment flows—still reconciling to the same ledger.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tech choices that create drag.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Chasing features over integration.</strong> A shiny tool that does not talk to accounting becomes another silo.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Staying on personal tech for business money.</strong> Consumer apps lack payroll compliance and proper multi-user books.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Buying before a pain is daily.</strong> Use <Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>what programs you actually need</Link> as a guardrail.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack reviews SMB technology by vertical workflow—books, pipeline, payroll runs—not generic &quot;tech stack&quot; listicles. We test mobile access, bank feeds, and integration depth, and we state clearly when a tool is common but not ideal for a niche. No paid ranking slots.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Build from the baseline outward.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>Widely used software categories</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>Types of business software explained</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payroll" className={linkGreen}>Payroll hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/most-common-types-of-office-software" className={linkGreen}>Common office software types</Link></span></li>
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
              <GuideSidebar title="Cloud accounting" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Technology Most Small Businesses Use | BeltStack Guide",
    description:
      "Cloud accounting, payments, CRM, and collaboration—what technology most SMBs actually run, and how stacks grow by industry.",
  };
}
