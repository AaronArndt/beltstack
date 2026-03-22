import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl, getPayrollCompareUrl, getPayrollBestForUrl } from "@/lib/routes";

// ——— Design (match review template / compare hub) ———
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
    q: "How much does payroll software cost?",
    a: "Most payroll software charges a monthly base fee (often $25–$50) plus a per-employee or per-contractor fee. Total cost depends on headcount, add-ons like tax filing or benefits, and the plan tier. Very small teams might pay around $50–$100/month; growing teams often see $150–$400+ per month.",
  },
  {
    q: "Is payroll software priced per employee?",
    a: "Many providers use a base fee plus per-employee (and sometimes per-contractor) pricing. Each employee or contractor can add a few dollars to tens of dollars per month depending on the vendor and plan. Some plans bundle a set number of employees before per-person fees apply.",
  },
  {
    q: "What is the cheapest payroll software for small businesses?",
    a: "Options like Patriot Payroll and OnPay often offer lower base fees and straightforward per-person pricing, which can keep costs down for very small teams. Square Payroll is another budget-friendly option if you already use Square. See our best payroll software and pricing guide for current comparisons.",
  },
  {
    q: "Why do some payroll providers use custom pricing?",
    a: "Larger or more complex providers (e.g. ADP, Paychex, Rippling) often quote pricing based on your headcount, locations, and which modules you need (payroll, HR, benefits, compliance). Custom pricing lets them tailor the package but makes it harder to compare without requesting a quote.",
  },
  {
    q: "Is more expensive payroll software worth it?",
    a: "It depends on your needs. If you only need basic payroll and tax filing, a lower-cost option may be enough. If you need stronger HR tools, benefits administration, compliance support, or integrations, a higher-priced platform can justify the cost by replacing multiple tools and reducing manual work.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Best for simple pricing",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
  {
    name: "Patriot Payroll",
    logoSrc: "/Logos/patriot.jpeg",
    rating: 4.3,
    bestFor: "Best for budget-conscious businesses",
    reviewHref: getPayrollReviewUrl("patriot-payroll"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall payroll value",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Patriot Payroll Review", href: getPayrollReviewUrl("patriot-payroll") },
  { label: "Wave Review", href: getPayrollReviewUrl("wave") },
  { label: "SurePayroll Review", href: getPayrollReviewUrl("surepayroll") },
  { label: "Cheapest Payroll Software guide", href: "/payroll/guides/cheapest-payroll-software" },
  { label: "How Payroll Software Works guide", href: "/payroll/guides/how-payroll-software-works" },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
];

export default function PayrollSoftwarePricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Payroll Software Pricing</li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll Software Pricing Guide
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Learn how payroll software is priced, what small businesses typically pay, and which pricing models make the most sense for contractors and growing teams.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll software pricing is usually built around a monthly base fee plus a per-employee (and sometimes per-contractor) charge. Some providers also charge separately for tax filing, benefits administration, HR tools, or contractor payments. Understanding how pricing works helps small businesses avoid paying for features they don&apos;t need and compare options fairly.
                    </p>
                    <p>
                      To see how specific platforms are priced and what you can expect to pay, explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Section 1 ——— */}
                <section id="how-pricing-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How providers structure their fees.">How Payroll Software Pricing Usually Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most payroll platforms use one or more of these building blocks:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Monthly base fee</strong> — A fixed amount each month to use the platform, often covering the first few employees or a base level of service.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Per-employee pricing</strong> — An additional fee per employee (and sometimes per contractor) per month or per pay run.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Bundled plans</strong> — Tiered plans that bundle a base fee with a set number of employees or features (e.g. tax filing, HR tools) so you can pick the tier that fits.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Custom enterprise pricing</strong> — Quoted pricing for larger businesses or those needing many modules, locations, or compliance support.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Section 2 ——— */}
                <section id="pricing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Flat fee, tiers, and custom quotes.">Common Payroll Pricing Models</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Flat monthly fee + per employee</strong> — Providers like <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link> and <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> publish a base monthly rate plus a per-employee (and often per-contractor) fee. You can estimate cost easily. <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link> uses a similar model with straightforward flat-rate tiers.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Premium plans with HR add-ons</strong> — Many platforms offer higher tiers that include or add HR features (onboarding, PTO, benefits administration). Moving up a tier increases the base or per-person cost but can replace separate HR tools.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Custom quote pricing</strong> — <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link>, <Link href={getPayrollReviewUrl("paychex")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Paychex</Link>, and some others typically quote based on your headcount and needs. <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link> offers low published pricing for budget-conscious small businesses.
                    </p>
                  </div>
                </section>

                {/* ——— Section 3 ——— */}
                <section id="cost-drivers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What pushes the total bill up.">What Increases Payroll Software Costs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>These factors commonly increase what you pay:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">More employees</strong> — Per-employee fees add up as headcount grows.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor payments</strong> — Some providers charge per contractor or per 1099 payment.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Benefits administration</strong> — Health, 401(k), and other benefits can add fees or require a higher plan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">HR features</strong> — Onboarding, PTO, documents, and compliance tools often come with premium tiers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax filing support</strong> — Full-service tax filing is usually included in the base or a tier; some entry-level plans charge extra.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Time tracking</strong> — Integrated time tracking may be included or cost extra per user.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Workers&apos; comp / compliance add-ons</strong> — State-specific or industry add-ons can increase the bill.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Section 4 ——— */}
                <section id="what-to-expect" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Realistic ranges by business size and needs.">What Small Businesses Should Expect to Pay</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Very small businesses</strong> — With a handful of employees and basic payroll plus tax filing, many providers land in the range of roughly $50–$100 per month. Base fees plus a few per-person charges add up quickly; the exact number depends on the vendor and plan.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Contractor-heavy businesses</strong> — If you pay mostly contractors, look for transparent per-contractor or flat-fee pricing. Some platforms charge less for contractors than for W-2 employees; others bundle a set number before per-person fees kick in.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Growing teams</strong> — As you add employees, expect the monthly total to rise with per-person fees. Moving to a higher tier for HR or benefits will increase cost further but can replace other tools.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Businesses needing payroll + HR</strong> — All-in-one payroll and HR platforms typically cost more than payroll-only options but can still be cheaper than running payroll and HR in separate systems. Compare total cost (payroll + HR + benefits) when evaluating.
                    </p>
                    <p className="text-[#6E6E6E] text-sm">
                      Pricing changes over time and varies by provider and plan. Check each vendor&apos;s current pricing and our <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup for up-to-date comparisons.
                    </p>
                  </div>
                </section>

                {/* ——— Section 5 ——— */}
                <section id="cheapest-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lower-cost options for small teams.">Cheapest Payroll Software Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Patriot Payroll</strong> — <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link> offers low published base fees and per-employee pricing, aimed at very small or budget-conscious businesses that need compliant payroll without extra HR bells and whistles.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">OnPay</strong> — <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link> uses straightforward flat-rate pricing with a base fee and per-person charge. It fits small businesses that want predictable costs and solid payroll plus tax filing without a complex sales process.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Square Payroll</strong> — <Link href={getPayrollReviewUrl("square-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Square Payroll</Link> is often priced competitively for very small teams and is a natural fit if you already use Square for payments or POS. It keeps payroll simple and in the same ecosystem.
                    </p>
                  </div>
                </section>

                {/* ——— Section 6 ——— */}
                <section id="advanced-features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When higher pricing can be justified.">Payroll Software With More Advanced Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>, <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>, <Link href={getPayrollReviewUrl("adp")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">ADP</Link>, and <Link href={getPayrollReviewUrl("paychex")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Paychex</Link> offer more than basic payroll: HR, benefits, compliance, and (in Rippling&apos;s case) IT and device management. Their pricing is often higher than payroll-only tools but can make sense for businesses that need HR and compliance support, multi-state payroll, or a single platform for payroll and workforce admin.
                    </p>
                    <p>
                      If you need stronger HR, reporting, or support, compare the total cost of a full-service platform against the cost of payroll plus separate HR or benefits tools. In many cases, the higher payroll price is offset by consolidating systems and reducing manual work.
                    </p>
                  </div>
                </section>

                {/* ——— Section 7 ——— */}
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to check before you buy.">How to Compare Payroll Pricing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When comparing providers, look at:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Base fee</strong> — The fixed monthly (or per-pay-run) amount.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Per-employee fee</strong> — Cost per W-2 employee and per contractor if different.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Annual cost</strong> — Multiply by 12 and add any one-time or annual fees.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax filing</strong> — Whether it&apos;s included or extra, and for which jurisdictions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor support</strong> — 1099 payments and forms; extra fees per contractor?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">HR add-ons</strong> — Cost to add onboarding, PTO, benefits, etc.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Hidden costs</strong> — Setup fees, year-end form fees, or extra charges for multi-state or corrections.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Support quality</strong> — Phone, chat, or self-serve; response times and availability.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Section 8 ——— */}
                <section id="best-by-budget" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Find payroll software by scenario.">Best Payroll Software by Budget and Business Type</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For curated picks by budget and business type, see our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> roundup. We also publish scenario-based guides:{" "}
                      <Link href={getPayrollBestForUrl("small-business")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best for small business</Link>,{" "}
                      <Link href={getPayrollBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best for contractors</Link>, and{" "}
                      <Link href={getPayrollBestForUrl("growing-businesses")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best for growing businesses</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— Section 9 ——— */}
                <section id="comparisons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Side-by-side pricing and features.">Payroll Software Comparisons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      We publish head-to-head payroll comparisons so you can see how pricing and features stack up. Start at our{" "}
                      <Link href={getPayrollCompareUrl()} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software comparisons</Link> hub, or jump to specific matchups:{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link>,{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs QuickBooks Payroll</Link>, and{" "}
                      <Link href={getPayrollCompareUrl("patriot-payroll-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll vs OnPay</Link>.
                    </p>
                  </div>
                </section>

                {/* ——— FAQ ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Recommended Payroll Software"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-software-pricing"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll Software Pricing Guide | BeltStack",
    description:
      "Learn how payroll software pricing works, what small businesses typically pay, and how to compare payroll providers by cost and features.",
  };
}
