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
    q: "What is the best payroll software for 1099 contractors?",
    a: "Gusto, OnPay, and QuickBooks Payroll all support 1099 payments and year-end 1099-NEC forms. Deel is best if you pay contractors in multiple countries. See our best payroll for 1099 contractors and best payroll software guides for picks.",
  },
  {
    q: "Can I pay 1099 contractors and W-2 employees in the same payroll software?",
    a: "Yes. Most modern payroll platforms let you run employee payroll and contractor payments in one system. You get correct tax treatment for each (withholdings for W-2, 1099 forms for contractors) and one place to manage both.",
  },
  {
    q: "Does payroll software file 1099 forms?",
    a: "Yes. Full-service payroll products typically calculate contractor payments, track them through the year, and generate 1099-NEC forms (and e-file where supported) at year-end. You still need to verify contractor info and classification.",
  },
  {
    q: "What if I only have 1099 contractors (no employees)?",
    a: "Some providers support contractor-only accounts. You use the system to pay contractors and generate 1099s. Gusto, OnPay, Deel, and others can handle contractor-only workflows; check each provider for pricing and limits.",
  },
  {
    q: "How do I avoid misclassifying workers as 1099 vs W-2?",
    a: "Classification is based on legal criteria (control, relationship, financial arrangement). Payroll software doesn’t decide for you—it applies the type you assign. When in doubt, use IRS guidelines or consult a tax professional. Misclassification can lead to penalties and back taxes.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for 1099 + W-2",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Simple contractor payments",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
  {
    name: "Deel",
    logoSrc: "/Logos/deel.jpeg",
    rating: 4.6,
    bestFor: "Global contractors",
    reviewHref: getPayrollReviewUrl("deel"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best for 1099 Contractors", href: getPayrollBestForUrl("1099-contractors") },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Deel Review", href: getPayrollReviewUrl("deel") },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "Payroll Tax Filing Explained", href: "/payroll/guides/payroll-taxes-explained" },
];

export default function PayrollSoftwareFor1099ContractorsPage() {
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
                    <li><Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Payroll Software for 1099 Contractors</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll Software for 1099 Contractors
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how payroll software handles 1099 contractor payments, tax forms, and compliance—and how to choose a platform that does both contractor and employee payroll well.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses that pay 1099 contractors need to track payments, withhold nothing (contractors pay their own taxes), and file 1099-NEC forms at year-end. Payroll software can handle all of that in one place—and many platforms also run W-2 payroll, so you can pay employees and contractors from the same system.
                    </p>
                    <p>
                      Explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll reviews</Link>,{" "}
                      <Link href={getPayrollBestForUrl("1099-contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for 1099 contractors</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link> to compare options.
                    </p>
                  </div>
                </section>

                <section id="why-1099-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Staying compliant with contractor payments.">Why 1099 Contractor Support Matters</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When you pay 1099 contractors, you don’t withhold taxes—they’re responsible for their own income and self-employment tax. You do have to <strong className="text-[#1A2D48]">track payments</strong>, issue <strong className="text-[#1A2D48]">1099-NEC forms</strong> (typically by January 31 for the prior year), and avoid <strong className="text-[#1A2D48]">misclassification</strong> (treating employees as contractors or vice versa). Payroll software that supports 1099s keeps payment history in one place and automates 1099 generation and e-filing, reducing errors and missed deadlines.
                    </p>
                    <p>
                      For more on contractor payroll and classification, see our{" "}
                      <Link href="/payroll/guides/payroll-for-contractors" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for contractors</Link> guide.
                    </p>
                  </div>
                </section>

                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that make contractor payroll easier.">What to Look For in Payroll Software for 1099 Contractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">1099 payment runs</strong> — Ability to pay contractors on a schedule (e.g. per project or monthly) and track amounts paid.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">1099-NEC generation and e-file</strong> — Year-end forms and e-filing to IRS and state where required.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Contractor self-service</strong> — Portal where contractors can see payment history and download documents (optional but helpful).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">W-2 and 1099 in one system</strong> — If you have both employees and contractors, one platform for both simplifies admin.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Global contractors (if needed)</strong> — If you pay contractors in other countries, look for a provider like Deel that handles multi-country payments and compliance.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="best-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Strong options for 1099 contractor payroll.">Best Payroll Software for 1099 Contractors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link> and <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link> both handle W-2 and 1099 payroll with contractor self-service and 1099-NEC. <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> is a fit if you already use QuickBooks for accounting. For <strong className="text-[#1A2D48]">global contractors</strong>, <Link href={getPayrollReviewUrl("deel")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Deel</Link> specializes in paying contractors in 150+ countries with compliant contracts and currency handling.
                    </p>
                    <p>
                      See our{" "}
                      <Link href={getPayrollBestForUrl("1099-contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll for 1099 contractors</Link> and{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> for full roundups.
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
                title="Payroll Software for 1099 Contractors"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-software-for-1099-contractors"
        />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll Software for 1099 Contractors | BeltStack",
    description:
      "Learn how payroll software handles 1099 contractor payments, 1099-NEC forms, and compliance—and how to choose a platform for both contractors and employees.",
  };
}
