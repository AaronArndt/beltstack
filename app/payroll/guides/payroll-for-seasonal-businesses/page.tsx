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
    q: "What is the best payroll software for seasonal businesses?",
    a: "Look for platforms that make it easy to add and remove employees as your season changes, with no long-term contracts. Gusto, OnPay, QuickBooks Payroll, and Patriot Payroll are often good fits. See our best payroll software and payroll for small business guide for more.",
  },
  {
    q: "Can I pause payroll when my seasonal business is slow?",
    a: "You typically don’t 'pause' payroll—you just stop running pay runs when you have no one to pay. You may be able to cancel or suspend the subscription with some providers when you have zero employees; others require you to stay active. Check each provider’s policy for seasonal or off-season use.",
  },
  {
    q: "Do seasonal employees need the same payroll treatment as year-round employees?",
    a: "Yes. Seasonal W-2 employees get the same tax withholding, pay stubs, and compliance treatment. The difference is you may add them at the start of the season and remove or mark them inactive when the season ends. Payroll software should make onboarding and offboarding straightforward.",
  },
  {
    q: "How do I handle taxes for seasonal workers?",
    a: "Payroll software with full-service tax filing will calculate withholdings, file, and deposit taxes for seasonal workers the same as for year-round employees. You still need to run payroll on schedule and keep records. No special “seasonal” tax treatment—just normal W-2 payroll.",
  },
  {
    q: "Should seasonal businesses use a different payroll provider than year-round businesses?",
    a: "No. The same payroll software can handle both seasonal and year-round employees. Choose a provider that lets you add and remove employees easily, doesn’t lock you into long-term contracts, and has transparent pricing so you can scale up and down without surprise fees.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Easy add/remove seasonal workers",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "OnPay",
    logoSrc: "/Logos/onpay.jpeg",
    rating: 4.5,
    bestFor: "Simple seasonal payroll",
    reviewHref: getPayrollReviewUrl("onpay"),
  },
  {
    name: "Patriot Payroll",
    logoSrc: "/Logos/patriot.jpeg",
    rating: 4.3,
    bestFor: "Budget-friendly seasonal payroll",
    reviewHref: getPayrollReviewUrl("patriot-payroll"),
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Payroll for Small Business guide", href: "/payroll/guides/payroll-for-small-business" },
  { label: "Payroll for Landscaping Businesses guide", href: "/payroll/guides/payroll-for-landscaping-businesses" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "OnPay Review", href: getPayrollReviewUrl("onpay") },
  { label: "Patriot Payroll Review", href: getPayrollReviewUrl("patriot-payroll") },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
  { label: "Payroll Tax Filing Explained", href: "/payroll/guides/payroll-taxes-explained" },
];

export default function PayrollForSeasonalBusinessesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/payroll/guides" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-[#1A2D48] font-medium" aria-current="page">Payroll for Seasonal Businesses</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payroll for Seasonal Businesses
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how seasonal businesses run payroll when headcount goes up and down—and how to choose payroll software that makes adding and removing workers simple and compliant.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Seasonal businesses—landscaping, retail, hospitality, agriculture, and others—often hire more workers during busy periods and scale back when demand drops. Payroll has to handle that swing: onboarding new employees quickly, running pay runs on schedule, and then offboarding or inactivating workers when the season ends. The right payroll software makes that flow straightforward without long-term contracts or punitive fees for scaling down.
                    </p>
                    <p>
                      Explore our{" "}
                      <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll reviews</Link>,{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link>, and{" "}
                      <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll comparisons</Link>. For industry-specific tips, see our{" "}
                      <Link href="/payroll/guides/payroll-for-landscaping-businesses" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for landscaping</Link> and{" "}
                      <Link href="/payroll/guides/payroll-for-small-business" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll for small business</Link> guides.
                    </p>
                  </div>
                </section>

                <section id="seasonal-challenges" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What makes seasonal payroll different.">Why Payroll Is Different for Seasonal Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Seasonal businesses face a few payroll-specific challenges: <strong className="text-[#1A2D48]">headcount changes</strong>—you add workers at the start of the season and may remove or stop paying them when it ends; <strong className="text-[#1A2D48]">timing</strong>—you need to onboard and run first payroll quickly when the season starts; and <strong className="text-[#1A2D48]">cost</strong>—you don’t want to pay for a large fixed subscription when you have few or no employees in the off-season. Payroll software that supports easy add/remove, no long-term lock-in, and transparent per-person pricing fits that pattern.
                    </p>
                    <p>
                      Tax and compliance don’t change: seasonal W-2 employees get the same withholding, pay stubs, and filing treatment as year-round employees. You still need to run payroll on schedule and keep records. See our{" "}
                      <Link href="/payroll/guides/payroll-taxes-explained" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll tax filing explained</Link> guide for basics.
                    </p>
                  </div>
                </section>

                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that support seasonal staffing.">What to Look For in Payroll Software for Seasonal Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Easy onboarding</strong> — Add new employees quickly when the season starts; minimal setup per person.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Offboarding or inactive status</strong> — Cleanly remove or mark workers inactive when the season ends without losing history.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">No long-term contracts</strong> — Month-to-month or flexible terms so you’re not locked in when headcount drops.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Per-person pricing</strong> — Pay for the people you actually pay each period; avoid high fixed fees when you have few workers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Tax filing and compliance</strong> — Full-service tax filing so you stay compliant for every worker, whether they’re seasonal or year-round.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="best-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Strong options for seasonal payroll.">Best Payroll Software for Seasonal Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link> and <Link href={getPayrollReviewUrl("onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">OnPay</Link> are often cited for easy add/remove of employees and no long-term contracts. <Link href={getPayrollReviewUrl("patriot-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Patriot Payroll</Link> offers low cost for seasonal teams that want to minimize spend in the off-season. <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link> fits if you already use QuickBooks for accounting and want payroll in the same system. See our{" "}
                      <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">best payroll software</Link> and{" "}
                      <Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto vs OnPay</Link> for more comparison.
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
                title="Payroll for Seasonal Businesses"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources
          items={RELATED_RESOURCES_ITEMS}
          excludeHref="/payroll/guides/payroll-for-seasonal-businesses"
        />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll for Seasonal Businesses | BeltStack",
    description:
      "Learn how seasonal businesses run payroll when headcount goes up and down—and how to choose payroll software that makes adding and removing workers simple and compliant.",
  };
}
