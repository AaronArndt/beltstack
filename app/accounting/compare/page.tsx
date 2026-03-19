import Link from "next/link";
import {
  getAccountingCompareUrlFromSlug,
  getAccountingComparisonBySlug,
  getAccountingComparisonSlugs,
} from "@/lib/data/accountingComparisons";
import { Footer } from "@/components/Footer";

/** High-priority comparisons shown first; full list in Compare by software below */
const POPULAR_SLUGS = [
  "quickbooks-online-vs-xero",
  "quickbooks-online-vs-freshbooks",
  "quickbooks-online-vs-zoho-books",
  "quickbooks-online-vs-wave",
  "xero-vs-freshbooks",
  "xero-vs-zoho-books",
  "odoo-vs-quickbooks-online",
  "odoo-vs-xero",
  "odoo-vs-netsuite",
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

/** Map alias slugs to a canonical key so we show one box per product (e.g. odoo + odoo-accounting → one "Odoo Accounting" box). */
function canonicalProductKey(slug: string): string {
  if (slug === "odoo") return "odoo-accounting";
  if (slug === "sage") return "sage-accounting";
  return slug;
}

function groupComparisonsByProduct(slugs: string[]) {
  const byProduct: Record<string, { label: string; slugs: { slug: string; label: string }[] }> = {};
  for (const slug of slugs) {
    const data = getAccountingComparisonBySlug(slug);
    if (!data) continue;
    const a = data.productA.slug;
    const b = data.productB.slug;
    const canonA = canonicalProductKey(a);
    const canonB = canonicalProductKey(b);
    const labelA = `${data.productA.name} vs ${data.productB.name}`;
    const labelB = `${data.productB.name} vs ${data.productA.name}`;
    if (!byProduct[canonA]) byProduct[canonA] = { label: data.productA.name, slugs: [] };
    if (!byProduct[canonB]) byProduct[canonB] = { label: data.productB.name, slugs: [] };
    if (!byProduct[canonA].slugs.some((s) => s.slug === slug)) byProduct[canonA].slugs.push({ slug, label: labelA });
    if (!byProduct[canonB].slugs.some((s) => s.slug === slug)) byProduct[canonB].slugs.push({ slug, label: labelB });
  }
  const order = [
    "quickbooks-online", "xero", "freshbooks", "zoho-books", "wave",
    "sage-accounting", "odoo-accounting", "kashoo",
    "netsuite", "sage-intacct", "acumatica", "microsoft-dynamics", "zipbooks", "akaunting",
  ];
  const ordered = order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
  const remaining = Object.keys(byProduct).filter((key) => !order.includes(key));
  return [...ordered, ...remaining.map((key) => ({ key, ...byProduct[key] }))];
}

export default function AccountingCompareHubPage() {
  const allSlugs = getAccountingComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getAccountingComparisonBySlug(slug);
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
                  <Link href="/accounting" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Accounting
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Accounting Software Comparisons
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Compare accounting software side by side to evaluate pricing, features, and fit for your business.
            </p>
            <p className="mt-2 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Whether you need full accounting for a small business, simple invoicing for freelancers, or free bookkeeping, these side-by-side reviews help you see which platform fits your size, budget, and workflow.
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
                const compareHref = getAccountingCompareUrlFromSlug(slug);
                const summary = data.summaryParagraph.slice(0, 140).trim() + (data.summaryParagraph.length > 140 ? "…" : "");
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      {data.productA.logoSrc ? (
                        <img
                          src={data.productA.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                        />
                      ) : (
                        <span className="flex h-10 min-w-[80px] items-center text-sm font-medium text-[#6E6E6E]">{data.productA.name}</span>
                      )}
                      <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
                      {data.productB.logoSrc ? (
                        <img
                          src={data.productB.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                        />
                      ) : (
                        <span className="flex h-10 min-w-[80px] items-center text-sm font-medium text-[#6E6E6E]">{data.productB.name}</span>
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
                          href={getAccountingCompareUrlFromSlug(slug)}
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
              How We Compare Accounting Software
            </SectionTitle>
            <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
              Our accounting comparisons use the same evaluation criteria across every head-to-head. We look at invoicing and expense tracking, bank feeds and reporting, ease of use, pricing transparency, and integrations—so you see how each platform really stacks up.
            </p>
            <ul className="mt-4 space-y-2 text-[#6E6E6E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Invoicing and expenses</strong> — Ease of creating invoices, tracking expenses, and capturing receipts.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Reporting</strong> — P&L, balance sheet, and tax-ready reports.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Pricing</strong> — Published tiers, free vs paid, and add-ons.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Integrations</strong> — Bank feeds, payroll, ecommerce, and third-party apps.
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
              . For in-depth guides on accounting for small business and QuickBooks alternatives, see our{" "}
              <Link href="/accounting/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                accounting guides
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
  title: "Accounting Software Comparisons (2026)",
  description:
    "Compare accounting software side-by-side including QuickBooks Online, Xero, FreshBooks, Zoho Books, and Wave.",
};
