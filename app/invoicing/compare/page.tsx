import Link from "next/link";
import {
  getInvoicingCompareUrlFromSlug,
  getInvoicingComparisonBySlug,
  getInvoicingComparisonSlugs,
} from "@/lib/data/invoicingComparisons";
import { Footer } from "@/components/Footer";

/** High-priority comparisons shown first; full list in Compare by software below */
const POPULAR_SLUGS = [
  "freshbooks-vs-quickbooks",
  "freshbooks-vs-wave",
  "quickbooks-vs-wave",
  "zoho-invoice-vs-freshbooks",
  "xero-vs-quickbooks",
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

function groupComparisonsByProduct(slugs: string[]) {
  const byProduct: Record<string, { label: string; slugs: { slug: string; label: string }[] }> = {};
  for (const slug of slugs) {
    const data = getInvoicingComparisonBySlug(slug);
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
  const order = ["freshbooks", "quickbooks", "wave", "zoho-invoice", "xero", "invoice-ninja", "honeybook", "bonsai"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function InvoicingCompareHubPage() {
  const allSlugs = getInvoicingComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getInvoicingComparisonBySlug(slug);
    return data ? [{ slug, data }] : [];
  });
  const bySoftware = groupComparisonsByProduct(allSlugs);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
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
                  <Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Invoicing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Compare Invoicing Software
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              Side-by-side comparisons of the most popular invoicing tools.
            </p>
            <p className="mt-2 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              Whether you need simple invoicing for freelancers, free software, or tools that connect to your accounting stack, these head-to-head comparisons help you see which platform fits your workflow and budget.
            </p>
          </div>
        </section>

        <section id="popular-comparisons" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side features, pricing, and recommendations.">
              Popular Comparisons
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => {
                const title = `${data.productA.name} vs ${data.productB.name}`;
                const compareHref = getInvoicingCompareUrlFromSlug(slug);
                const summary = data.summaryParagraph.slice(0, 140).trim() + (data.summaryParagraph.length > 140 ? "…" : "");
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      {data.productA.logoSrc && (
                        <img
                          src={data.productA.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                        />
                      )}
                      <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
                      {data.productB.logoSrc && (
                        <img
                          src={data.productB.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                        />
                      )}
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
                          href={getInvoicingCompareUrlFromSlug(slug)}
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

        <section id="how-we-compare" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Consistent criteria so you can compare with confidence.">
              How We Compare Invoicing Software
            </SectionTitle>
            <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
              Our invoicing comparisons use the same evaluation criteria across every head-to-head. We look at invoicing and recurring billing, estimates and proposals, payment processing, ease of use, pricing, and integrations—so you see how each platform really stacks up.
            </p>
            <ul className="mt-4 space-y-2 text-[#6E6E6E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Invoicing</strong> — Creating and sending professional invoices, recurring billing, and payment tracking.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Estimates and proposals</strong> — Converting quotes to invoices and client-facing workflows.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Pricing</strong> — Published tiers, free vs paid, and payment processing fees.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Integrations</strong> — Accounting software, payment processors, and productivity apps.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Ease of use</strong> — Setup, day-to-day use, and clarity of the interface.
              </li>
            </ul>
            <p className="mt-5 text-[#6E6E6E] text-sm leading-relaxed">
              For our full review process and affiliate disclosure, see our{" "}
              <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                methodology page
              </Link>
              . For in-depth guides on choosing and using invoicing software, see our{" "}
              <Link href="/invoicing/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                invoicing guides
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
  title: "Compare Invoicing Software (2026)",
  description:
    "Compare invoicing software side-by-side including FreshBooks, QuickBooks, Wave, Zoho Invoice, Xero, and more.",
};
