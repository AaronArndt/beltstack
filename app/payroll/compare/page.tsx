import Link from "next/link";
import { getPayrollCompareUrl, getPayrollComparisonBySlug, getPayrollComparisonSlugs } from "@/lib/data/payrollComparisons";
import { Footer } from "@/components/Footer";

// ——— Design (match HubPageTemplate / payroll hub) ———
const POPULAR_SLUGS = [
  "gusto-vs-quickbooks-payroll",
  "gusto-vs-onpay",
  "gusto-vs-adp",
  "gusto-vs-paychex",
  "quickbooks-payroll-vs-onpay",
  "adp-vs-paychex",
  "paychex-vs-onpay",
  "rippling-vs-gusto",
  "rippling-vs-quickbooks-payroll",
  "square-payroll-vs-gusto",
  "square-payroll-vs-quickbooks-payroll",
  "patriot-payroll-vs-gusto",
  "patriot-payroll-vs-onpay",
  "justworks-vs-gusto",
  "deel-vs-gusto",
  "wave-vs-gusto",
  "wave-vs-quickbooks-payroll",
] as const;

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

/** Group comparison slugs by product name (slug) for "Compare by Software" */
function groupComparisonsByProduct(slugs: string[]) {
  const byProduct: Record<string, { label: string; slugs: { slug: string; label: string }[] }> = {};
  for (const slug of slugs) {
    const data = getPayrollComparisonBySlug(slug);
    if (!data) continue;
    const a = data.productA.slug;
    const b = data.productB.slug;
    const labelA = `${data.productA.name} vs ${data.productB.name}`;
    const labelB = `${data.productB.name} vs ${data.productA.name}`;
    if (!byProduct[a]) byProduct[a] = { label: data.productA.name, slugs: [] };
    if (!byProduct[b]) byProduct[b] = { label: data.productB.name, slugs: [] };
    if (!byProduct[a].slugs.some((s) => s.slug === slug)) byProduct[a].slugs.push({ slug, label: labelA });
    if (!byProduct[b].slugs.some((s) => s.slug === slug)) byProduct[b].slugs.push({ slug, label: labelB });
  }
  const order = ["gusto", "quickbooks-payroll", "rippling", "square-payroll", "patriot-payroll", "onpay", "adp", "paychex", "justworks", "deel", "surepayroll", "wave"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function PayrollCompareHubPage() {
  const allSlugs = getPayrollComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getPayrollComparisonBySlug(slug);
    return data ? [{ slug, data }] : [];
  });
  const bySoftware = groupComparisonsByProduct(allSlugs);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* ——— Hero ——— */}
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Payroll
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Payroll Software Comparisons
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Compare the top payroll software platforms side-by-side—including Gusto, QuickBooks Payroll, ADP, Paychex, and OnPay. Our head-to-head comparisons break down features, pricing, pros and cons, and automation so you can choose the best payroll tool for your business.
            </p>
            <p className="mt-2 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Whether you need payroll for contractors and W-2 employees, tax filing, or HR and benefits, these side-by-side reviews help you see which platform fits your size, budget, and workflow.
            </p>
          </div>
        </section>

        {/* ——— Section 1: Popular Comparisons ——— */}
        <section id="popular-comparisons" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side features, pricing, and recommendations.">
              Popular Comparisons
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => {
                const title = `${data.productA.name} vs ${data.productB.name}`;
                const compareHref = getPayrollCompareUrl(slug);
                const summary = data.summaryParagraph.slice(0, 140).trim() + (data.summaryParagraph.length > 140 ? "…" : "");
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={data.productA.logoSrc}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                      <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
                      <img
                        src={data.productB.logoSrc}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                    </div>
                    <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                      Compare →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ——— Section 2: Compare by Software ——— */}
        <section id="compare-by-software" className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find every comparison that includes a given platform.">
              Compare by Software
            </SectionTitle>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bySoftware.map(({ key, label, slugs }) => (
                <div
                  key={key}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  <ul className="mt-3 space-y-2">
                    {slugs.map(({ slug, label: linkLabel }) => (
                      <li key={slug}>
                        <Link
                          href={getPayrollCompareUrl(slug)}
                          className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
                          {linkLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Section 3: How We Compare Payroll Software ——— */}
        <section id="how-we-compare" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Consistent criteria so you can compare with confidence.">
              How We Compare Payroll Software
            </SectionTitle>
            <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
              Our payroll comparisons use the same evaluation criteria across every head-to-head. We look at ease of use, pricing transparency, automation and tax handling, integrations with accounting and time tools, and HR and benefits depth—so you see how each platform really stacks up.
            </p>
            <ul className="mt-4 space-y-2 text-[#6E6E6E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Ease of use</strong> — Setup, day-to-day payroll runs, and clarity of the interface.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Pricing</strong> — Published vs custom pricing, base and per-person costs, and add-ons.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Automation</strong> — Tax filing, direct deposit, and recurring payroll automation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Integrations</strong> — Accounting (QuickBooks, Xero), time tracking, and other tools.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">HR tools</strong> — Onboarding, compliance, benefits administration, and support.
              </li>
            </ul>
            <p className="mt-5 text-[#6E6E6E] text-sm leading-relaxed">
              For our full review process and affiliate disclosure, see our{" "}
              <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                methodology page
              </Link>
              . For in-depth guides on pricing, 1099 contractors, and industry-specific payroll, see our{" "}
              <Link href="/payroll/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                payroll guides
              </Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Payroll Software Comparisons (2026)",
  description:
    "Compare payroll software platforms side-by-side including Gusto, QuickBooks Payroll, ADP, Paychex, and OnPay.",
};
