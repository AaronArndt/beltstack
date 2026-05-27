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
    q: "What is the best free invoicing software?",
    a: "Wave is the most popular free option for core invoicing and receipt capture in North America. Zoho Invoice offers a free tier with more automation, subject to plan limits. Invoice Ninja provides open-source flexibility including self-hosted deployment for technical teams.",
  },
  {
    q: "Is free invoicing software really free?",
    a: "Software can be free while payment processing still carries standard transaction fees. Some advanced features—payroll, deeper reporting, additional users—are paid add-ons. Evaluate total cost, not the subscription line alone.",
  },
  {
    q: "What are the limits of free invoicing plans?",
    a: "Limits often include client caps, fewer automation rules, basic reporting, branding restrictions, and paid-only multi-user or approval features. Limits change by vendor; confirm current plan pages before migrating customer data.",
  },
  {
    q: "When should I upgrade from free invoicing?",
    a: "Upgrade when recurring billing volume, reminder automation, team permissions, or A/R reporting needs exceed free-tier capabilities. Persistent overdue balances despite good delivery are another practical upgrade signal.",
  },
  {
    q: "Can free invoicing software sync with accounting?",
    a: "Some free tools include basic accounting features or paid sync options to QuickBooks and Xero. Verify integration depth—customer sync, paid invoice sync, tax mapping—before relying on it for month-end close.",
  },
  {
    q: "Is free invoicing secure enough for client data?",
    a: "Reputable free products from established vendors can meet baseline security needs for small businesses. Use strong passwords, enable two-factor authentication, and limit user roles instead of sharing one login across staff.",
  },
  {
    q: "Can I accept credit cards on free invoicing plans?",
    a: "Usually yes through integrated payment processors, with per-transaction fees. Compare card and ACH rates, payout timing, and whether you can use an existing merchant account versus the vendor’s default processor.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free core invoicing", reviewHref: getInvoicingReviewUrl("wave") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Free tier with automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: 4.3, bestFor: "Open-source option", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
];

export default function BestFreeInvoicingSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Best Free Invoicing Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Free Invoicing Software</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare the best free invoicing software—Wave, Zoho Invoice, and Invoice Ninja—with plan limits, payment fees, and clear upgrade triggers.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free invoicing software is a practical way to start billing professionally without upfront software cost. The best free tools still support branded invoices, online payments, and basic payment tracking—enough for many solo businesses and early-stage freelancers.
                    </p>
                    <p>
                      “Free” does not mean zero cost forever. Payment processors still charge transaction fees, and vendors monetize through paid tiers, payroll add-ons, or advanced features. Budget for that reality when comparing against paid tools like FreshBooks.
                    </p>
                    <p>
                      The right free product depends on whether you need simple one-off invoices, light recurring billing, or open-source control. This guide covers three common paths so you do not default to the most popular name without checking fit.
                    </p>
                    <p>
                      For paid-vs-free decision framing, see{" "}
                      <Link href="/invoicing/guides/free-vs-paid-invoicing-software" className={linkGreen}>free vs paid invoicing software</Link>{" "}
                      and our full{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup.
                    </p>
                  </div>
                </section>
                <section id="top-free-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Free tools worth evaluating first.">Top Free Invoicing Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link> is the most common free starting point for small businesses in the U.S. and Canada. It covers core invoicing, basic accounting features, and receipt capture—good when you want one free hub and simple workflows.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("zoho-invoice")} className={linkGreen}>Zoho Invoice</Link> offers a free tier with more automation for teams that may stay in the Zoho ecosystem or need stronger recurring invoice rules before paying for a plan.
                    </p>
                    <p>
                      <Link href={getInvoicingReviewUrl("invoice-ninja")} className={linkGreen}>Invoice Ninja</Link> provides open-source flexibility, including self-hosted deployment. It fits technical owners who want data control and are willing to manage hosting—or who use the vendor’s cloud free tier with documented limits.
                    </p>
                  </div>
                </section>
                <section id="limits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Know these constraints before you commit.">Free Plan Limits to Watch</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free plans are designed for adoption, not infinite scale. Hitting a limit mid-year is disruptive—especially if customer history and recurring schedules live inside the product. Read caps before you migrate active clients.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Customer or invoice volume caps.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Limited automation and reminder rules.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Basic reporting and permissions.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Paid-only integrations or branding controls.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Support tiers that slow resolution when billing is blocked.</span></li>
                    </ul>
                    <p>
                      Compare limits side by side in{" "}
                      <Link href="/invoicing/guides/free-vs-paid-invoicing-software" className={linkGreen}>free vs paid invoicing software</Link>.
                    </p>
                  </div>
                </section>
                <section id="upgrade-path" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When free tools stop being enough.">When to Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Upgrade when collections speed, recurring billing complexity, or team permissions become bottlenecks. Another trigger is client-facing polish—custom portals, richer branding, and proposal flows matter more as average deal size grows.
                    </p>
                    <p>
                      Paid upgrades often pay off when overdue balances rise despite good service. Automation and A/R visibility fix operational problems that free tiers only patch with manual work.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/when-businesses-outgrow-simple-invoicing-tools" className={linkGreen}>when businesses outgrow simple invoicing tools</Link>{" "}
                      and scenario guides for{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-service-businesses" className={linkGreen}>service businesses</Link>,{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-consultants" className={linkGreen}>consultants</Link>, and{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-agencies" className={linkGreen}>agencies</Link>.
                    </p>
                  </div>
                </section>
                <section id="choosing-free-tool" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Pick the free product that matches your path.">How to Choose Between Free Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Choose Wave</strong> if you want the simplest free hub for invoicing plus light accounting in the U.S./Canada.</p>
                    <p><strong className="text-[#1A2D48]">Choose Zoho Invoice</strong> if you want stronger automation on a free tier or may adopt other Zoho apps later.</p>
                    <p><strong className="text-[#1A2D48]">Choose Invoice Ninja</strong> if you want open-source flexibility or self-hosted control—see{" "}
                      <Link href="/invoicing/guides/self-hosted-vs-cloud-invoicing-software" className={linkGreen}>self-hosted vs cloud invoicing software</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Free invoicing software questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Best Free Invoicing Tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/best-free-invoicing-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Free Invoicing Software (2026) | BeltStack Guide",
    description:
      "Compare the best free invoicing software in 2026: Wave, Zoho Invoice, and Invoice Ninja. Plan limits, payment fees, security basics, and when to upgrade to paid tools.",
    keywords: [
      "free invoicing software",
      "Wave invoicing free",
      "Zoho Invoice free",
      "Invoice Ninja free",
      "free invoice generator business",
      "2026",
    ],
  };
}
