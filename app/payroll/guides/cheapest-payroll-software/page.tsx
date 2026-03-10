import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl, getPayrollBestForUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const FAQ_ITEMS = [
  {
    q: "What is the cheapest payroll software?",
    a: "Patriot Payroll and Wave (payroll add-on) often have the lowest published pricing for very small teams. OnPay offers straightforward flat pricing. Compare base fees and per-person costs in our payroll software pricing guide and best payroll software roundup.",
  },
  {
    q: "Is cheap payroll software reliable?",
    a: "Yes. Budget options like Patriot Payroll and OnPay still handle W-2 and 1099 payroll, tax filing, and direct deposit. You may get fewer HR features and integrations than Gusto or Rippling, but core payroll and compliance are solid.",
  },
  {
    q: "How much does the cheapest payroll software cost?",
    a: "Base fees can start around $17–$40/month plus per-employee or per-contractor fees. Total cost depends on headcount. Wave can be attractive if you use its free accounting and add payroll. Check each provider's current pricing.",
  },
  {
    q: "Should I choose the cheapest payroll option?",
    a: "If you only need basic payroll and tax filing, a lower-cost option can be enough. If you need HR tools, benefits administration, time tracking, or strong integrations, paying more for Gusto or OnPay may save time and reduce errors.",
  },
  {
    q: "Where can I compare payroll software prices?",
    a: "See our payroll software pricing guide for how pricing works, and our best payroll software and payroll comparisons for side-by-side options. Patriot vs OnPay and Gusto vs OnPay comparisons break down cost and features.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Patriot Payroll",
    logoSrc: "/Logos/patriot.jpeg",
    rating: 4.3,
    bestFor: "Lowest cost for basic payroll",
    reviewHref: getPayrollReviewUrl("patriot-payroll"),
  },
  {
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    rating: 4.3,
    bestFor: "Free accounting + payroll add-on",
    reviewHref: getPayrollReviewUrl("wave"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Flat pricing, good value",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "Patriot Payroll Review", href: getPayrollReviewUrl("patriot-payroll") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Wave Review", href: getPayrollReviewUrl("wave") },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "Payroll for Small Business guide", href: "/payroll/guides/payroll-for-small-business" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
];

export default function CheapestPayrollSoftwarePage() {
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
                    <li><Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Cheapest Payroll Software</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Cheapest Payroll Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Find the most affordable payroll software for small businesses. Compare low-cost options, what you get for the price, and when it makes sense to pay more for extra features.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses and solopreneurs often want to minimize payroll cost while still staying compliant. The cheapest payroll software typically offers a low base fee plus per-employee or per-contractor pricing, with core payroll and tax filing included. You may give up some HR features, integrations, or hand-holding in exchange for lower cost.
                    </p>
                    <p>
                      Explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link> to compare options by price and features.
                    </p>
                  </div>
                </section>

                <section id="what-cheap-means" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you get at the lowest price points.">What &quot;Cheapest&quot; Payroll Software Usually Means</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The lowest-cost options tend to share a few traits: <strong className="text-[#1A2D48]">published pricing</strong> with a low base fee (e.g. from around $17–$40/month), <strong className="text-[#1A2D48]">per-person fees</strong> for employees and sometimes contractors, and <strong className="text-[#1A2D48]">core payroll and tax filing</strong> included. What you often don’t get at the bottom end: robust HR tools, benefits administration, time tracking, or a long list of integrations. For many very small teams, that trade-off is acceptable.
                    </p>
                    <p>
                      See our{" "}
                      <Link href="/payroll/guides/payroll-software-pricing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software pricing guide</Link> for how base fees, per-person costs, and add-ons work across providers.
                    </p>
                  </div>
                </section>

                <section id="low-cost-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Budget-friendly payroll options.">Low-Cost Payroll Software Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Patriot Payroll</strong> — <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link> offers some of the lowest published base fees and per-person pricing. You get W-2 and 1099 payroll, tax filing, and direct deposit without extra HR or integration depth. Good for micro businesses that want to minimize cost.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Wave</strong> — <Link href={getPayrollReviewUrl("wave")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Wave</Link> provides free accounting and invoicing; payroll is a paid add-on. If you already use or want Wave’s free books, adding payroll can keep combined accounting-plus-payroll cost low. Availability varies by state.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">OnPay</strong> — <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link> uses flat base-plus-per-person pricing with no tier maze. It’s often more affordable than Gusto for similar headcounts while still offering solid payroll, tax filing, and benefits. Good balance of cost and features.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Square Payroll</strong> — <Link href={getPayrollReviewUrl("square-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Square Payroll</Link> can be cost-effective if you already use Square for payments or POS. Simple pricing and setup; compare to Patriot and OnPay for your headcount.
                    </p>
                  </div>
                </section>

                <section id="when-to-spend-more" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When a higher-priced option pays off.">When to Spend More on Payroll Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The cheapest option isn’t always the best value. Consider paying more for <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link> or similar if you need: benefits administration (health, 401k), time tracking and PTO, contractor self-service, strong accounting or time-tool integrations, or multi-state payroll with more hand-holding. Consolidating payroll and HR in one platform can reduce admin and justify the extra cost.
                    </p>
                    <p>
                      Compare total cost (payroll + any HR or benefits tools you’d otherwise buy separately) in our{" "}
                      <Link href={getPayrollCompareUrl("patriot-payroll-vs-gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot vs Gusto</Link> and{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link> comparisons.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Cheapest Payroll Software"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/cheapest-payroll-software"
        />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Cheapest Payroll Software | BeltStack",
    description:
      "Find the most affordable payroll software for small businesses. Compare low-cost options like Patriot Payroll, Wave, and OnPay and when to pay more for extra features.",
  };
}
