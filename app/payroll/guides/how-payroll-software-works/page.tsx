import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getPayrollReviewUrl } from "@/lib/routes";

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
    q: "What does payroll software do?",
    a: "Payroll software automates wage calculations, tax withholdings, tax filing with the IRS and states, pay stub generation, and direct deposit or check payments. It replaces manual payroll spreadsheets and reduces errors and compliance risk.",
  },
  {
    q: "Do small businesses need payroll software?",
    a: "Once you have employees (or pay contractors through a system), payroll software saves time and reduces the risk of tax mistakes. Manual payroll is error-prone and can lead to penalties. Most small businesses benefit from using a dedicated payroll platform.",
  },
  {
    q: "How much does payroll software cost?",
    a: "Costs vary by provider and headcount. Many platforms charge a base fee (e.g. $25–$50/month) plus a per-employee or per-contractor fee. See our payroll pricing guide and best payroll software roundup for current pricing and comparisons.",
  },
  {
    q: "Can payroll software file taxes automatically?",
    a: "Yes. Full-service payroll software typically files federal and state payroll taxes on your behalf and handles deposits. You still need to provide accurate employee and company information; the software does the calculations and filings.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best for small businesses",
    reviewHref: getPayrollReviewUrl("gusto"),
  },
  {
    name: "QuickBooks Payroll",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.6,
    bestFor: "Best for QuickBooks users",
    reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
  },
  {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: 4.7,
    bestFor: "Best for growing teams",
    reviewHref: getPayrollReviewUrl("rippling"),
  },
];

export default function HowPayrollSoftwareWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Article content ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
          {/* ——— Breadcrumb ——— */}
          <nav aria-label="Breadcrumb" className="pt-8 pb-4">
            <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
              <li>
                <Link href="/" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/payroll" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Payroll
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/payroll/guides" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[#1A2D48] font-medium" aria-current="page">
                How Payroll Software Works
              </li>
            </ol>
          </nav>

          {/* ——— Hero ——— */}
          <section className="pb-6 border-b border-neutral-200/60">
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              How Payroll Software Works
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Learn how payroll software automates payroll calculations, tax filings, and employee payments for small businesses.
            </p>
            <GuideLastUpdated date="March 4, 2026" />
          </section>

          {/* ——— Intro ——— */}
          <section className="pt-8 pb-8">
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Payroll software is a platform that automates pay runs, tax withholdings, and compliance for businesses with employees or contractors. Instead of manually calculating wages, withholding taxes, and filing forms, businesses use payroll software to handle calculations, deposits, and filings—reducing errors and saving time.
              </p>
              <p>
                Modern payroll platforms automate payroll calculations, tax filings, and employee payments so you can run pay runs on schedule with minimal manual work. They simplify payroll tax compliance by calculating federal and state withholdings, filing returns, and making tax deposits on your behalf. To compare options and see which platform fits your business, explore our{" "}
                <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  payroll software reviews
                </Link>
                ,{" "}
                <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  best payroll software
                </Link>
                , and{" "}
                <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  payroll comparisons
                </Link>.
              </p>
            </div>
          </section>

          {/* ——— What Payroll Software Does ——— */}
          <section id="what-payroll-software-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="Core tasks payroll platforms handle.">What Payroll Software Does</SectionTitle>
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Payroll software is responsible for the end-to-end pay process. Its main responsibilities include:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Calculating employee wages</strong> — Gross pay from hours, salary, or both, including overtime and bonuses where applicable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Withholding payroll taxes</strong> — Federal income tax, Social Security, Medicare, and state and local withholdings based on W-4 and state forms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Filing payroll taxes</strong> — Submitting returns and making deposits to the IRS and state agencies on the required schedule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Generating pay stubs</strong> — Providing employees with itemized statements of gross pay, deductions, and net pay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Managing direct deposits</strong> — Sending net pay to employee bank accounts (and often contractor payments) via ACH.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ——— How Payroll Software Processes Payroll ——— */}
          <section id="how-payroll-processes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="The typical pay-run workflow.">How Payroll Software Processes Payroll</SectionTitle>
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                The general workflow looks like this:
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                <li><strong className="text-[#1A2D48]">Add employees and tax information</strong> — Enter employee details, W-4s, bank accounts, and any state or local forms so the system can calculate withholdings correctly.</li>
                <li><strong className="text-[#1A2D48]">Track hours or salaries</strong> — Integrate time tracking or enter salary amounts; the software uses this to compute gross pay.</li>
                <li><strong className="text-[#1A2D48]">Calculate wages and deductions</strong> — The platform calculates gross pay, taxes, benefits, and other deductions to arrive at net pay.</li>
                <li><strong className="text-[#1A2D48]">Submit payroll</strong> — You approve the pay run; the system initiates direct deposits and generates pay stubs.</li>
                <li><strong className="text-[#1A2D48]">File payroll taxes automatically</strong> — Full-service platforms file returns and make tax deposits on your behalf according to federal and state schedules.</li>
              </ol>
              <p>
                Most modern platforms automate these steps: you enter or sync data, review the run, and submit; the software handles calculations, payments, and tax filing. That reduces manual work and helps keep you in compliance.
              </p>
            </div>
          </section>

          {/* ——— Features Most Payroll Software Includes ——— */}
          <section id="features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="What to expect from typical platforms.">Features Most Payroll Software Includes</SectionTitle>
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Automated tax filing</strong> — Federal and state payroll tax returns and deposits handled by the provider.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Employee self-service portals</strong> — Employees can view pay stubs, update W-4s, and manage direct deposit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Direct deposit</strong> — ACH payments to employee (and often contractor) bank accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Contractor payments</strong> — 1099 payments and year-end forms; some platforms offer contractor self-service.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Payroll reporting</strong> — Reports for labor cost, taxes, and compliance (e.g. quarter-end, year-end).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Integrations with accounting software</strong> — Sync to QuickBooks, Xero, and others so payroll flows into your books.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ——— Types of Payroll Software ——— */}
          <section id="types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="Different options for different needs.">Types of Payroll Software</SectionTitle>
            <div className="max-w-[720px] space-y-5 text-[15px] leading-relaxed text-neutral-700">
              <p>
                <strong className="text-[#1A2D48]">Small business payroll software</strong> — Built for SMBs with straightforward pay runs and a need for clear pricing. Examples include Gusto and QuickBooks Payroll; you can read our <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto review</Link> and <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll review</Link> for details.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Contractor payroll software</strong> — Focused on W-2 and 1099 payroll for contractors and trade businesses, often with multi-state and time tracking support. Many of the same platforms (Gusto, OnPay, QuickBooks Payroll) serve this segment.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Full-service payroll platforms</strong> — Handle payroll plus tax filing, deposits, and often support; examples include ADP and Paychex, which scale to larger organizations.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Payroll + HR platforms</strong> — Combine payroll with HR tools: onboarding, PTO, benefits, and sometimes IT (e.g. Rippling). <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>, Gusto, and others fit here; choose based on whether you need payroll-only or a broader HR suite.
              </p>
            </div>
          </section>

          {/* ——— Benefits of Using Payroll Software ——— */}
          <section id="benefits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="Why businesses switch from manual payroll.">Benefits of Using Payroll Software</SectionTitle>
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Saves time</strong> — Automated calculations and tax filing mean less manual data entry and fewer repetitive tasks each pay period.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Reduces payroll errors</strong> — Software applies tax rules and rates consistently, reducing mistakes that can lead to penalties or employee disputes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Simplifies tax compliance</strong> — Federal and state filings and deposits are handled by the platform, so you stay on schedule without building in-house expertise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                  <span><strong className="text-[#1A2D48]">Improves recordkeeping</strong> — Pay stubs, reports, and tax documents are stored in one place, making audits and year-end closing easier.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ——— Best Payroll Software for Small Businesses ——— */}
          <section id="best-payroll-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="Our top picks and in-depth reviews.">Best Payroll Software for Small Businesses</SectionTitle>
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                We regularly compare and review payroll platforms for small businesses and contractors. For a curated list of top picks, pricing, and who each tool is best for, see our{" "}
                <Link href="/payroll/best-payroll-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  best payroll software
                </Link>{" "}
                roundup. For individual product reviews, check out our{" "}
                <Link href={getPayrollReviewUrl("gusto")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Gusto</Link>,{" "}
                <Link href={getPayrollReviewUrl("quickbooks-payroll")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">QuickBooks Payroll</Link>, and{" "}
                <Link href={getPayrollReviewUrl("rippling")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Rippling</Link>{" "}
                reviews.
              </p>
            </div>
          </section>

          {/* ——— Payroll Software Comparisons ——— */}
          <section id="comparisons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
            <SectionTitle sub="Side-by-side feature and pricing comparisons.">Payroll Software Comparisons</SectionTitle>
            <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                BeltStack also publishes head-to-head payroll comparisons so you can see how platforms stack up on features, pricing, and ease of use. Browse our{" "}
                <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  payroll software comparisons
                </Link>{" "}
                to compare Gusto vs QuickBooks Payroll, Rippling vs Gusto, and more.
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

            {/* ——— Sidebar: recommended payroll software (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Recommended Payroll Software"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPayrollResources excludeHref="/payroll/guides/how-payroll-software-works" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Payroll Software Works | BeltStack Guide",
    description:
      "Learn how payroll software works, how it automates payroll calculations and tax filings, and how small businesses use payroll platforms.",
  };
}
