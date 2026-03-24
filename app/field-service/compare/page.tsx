import Link from "next/link";
import {
  getFieldServiceCompareUrlFromSlug,
  getFieldServiceComparisonBySlug,
  getFieldServiceComparisonSlugs,
} from "@/lib/data/fieldServiceComparisons";
import { FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS } from "@/lib/data/fieldServiceHubData";
import { getLogoFromProductMap, productLogoMapFromComparisons } from "@/lib/data/productLogoMapFromComparisons";
import { Footer } from "@/components/Footer";

const PRODUCT_LOGO_BY_SLUG = productLogoMapFromComparisons(getFieldServiceComparisonSlugs, getFieldServiceComparisonBySlug);

const POPULAR_SLUGS = [
  "jobber-vs-housecall-pro",
  "housecall-pro-vs-servicetitan",
  "jobber-vs-workiz",
  "servicetitan-vs-service-fusion",
  "kickserv-vs-jobber",
  "fieldpulse-vs-jobber",
  "servicetrade-vs-servicetitan",
  "simpro-vs-servicetitan",
  "zuper-vs-jobber",
  "connecteam-vs-jobber",
] as const;

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function groupComparisonsByProduct(slugs: string[]) {
  const byProduct: Record<string, { label: string; slugs: { slug: string; label: string }[] }> = {};

  for (const slug of slugs) {
    const data = getFieldServiceComparisonBySlug(slug);
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

  const order = [
    "jobber",
    "housecall-pro",
    "servicetitan",
    "service-fusion",
    "fieldpulse",
    "servicetrade",
    "workwave-service",
    "buildops",
    "connecteam",
    "oracle-field-service",
    "simpro",
    "zuper",
    "workiz",
    "kickserv",
  ];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function FieldServiceCompareHubPage() {
  const allSlugs = getFieldServiceComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getFieldServiceComparisonBySlug(slug);
    return data ? [{ slug, data }] : [];
  });
  const bySoftware = groupComparisonsByProduct(allSlugs);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/field-service"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Field Service
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Compare Field Service Management Software
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Side-by-side comparisons of popular field service tools for contractors, service companies, and field
              teams. See how Jobber, Housecall Pro, ServiceTitan, Service Fusion, FieldPulse, ServiceTrade, WorkWave
              Service, BuildOps, Workiz, Kickserv, and others stack up on scheduling, dispatch, mobile apps, invoicing,
              and reporting.
            </p>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              For rankings across the whole category, see our{" "}
              <Link
                href="/field-service/best-field-service-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best field service management software
              </Link>{" "}
              roundup. For guides on how FSM tools work and how to choose, visit our{" "}
              <Link
                href="/field-service/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                field service guides
              </Link>
              . If you already know which product you might replace, our{" "}
              {FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS.map((item, i) => (
                <span key={item.href}>
                  {i > 0 && (i === FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS.length - 1 ? ", or " : ", ")}
                  <Link
                    href={item.href}
                    className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    {item.label} alternatives
                  </Link>
                </span>
              ))}{" "}
              pages list vetted substitutes with reviews and head-to-head comparisons.
            </p>
          </div>
        </section>

        {/* Popular comparisons */}
        <section
          id="popular-comparisons"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side features, pricing, and recommendations.">
              Popular Comparisons
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => {
                const title = `${data.productA.name} vs ${data.productB.name}`;
                const compareHref = getFieldServiceCompareUrlFromSlug(slug);
                const summary =
                  data.summaryParagraph.length > 140
                    ? data.summaryParagraph.slice(0, 140).trim() + "…"
                    : data.summaryParagraph;
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={data.productA.logoSrc ?? ""}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                      <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                        vs
                      </span>
                      <img
                        src={data.productB.logoSrc ?? ""}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                    </div>
                    <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
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

        {/* Compare by software */}
        <section
          id="compare-by-software"
          className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find every comparison that includes a given platform.">
              Compare by Software
            </SectionTitle>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bySoftware.map(({ key, label, slugs }) => (
                <div
                  key={key}
                  className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={getLogoFromProductMap(PRODUCT_LOGO_BY_SLUG, key)}
                      alt=""
                      className="h-10 w-auto max-w-[80px] object-contain object-left"
                    />
                    <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {slugs.map(({ slug, label: linkLabel }) => (
                      <li key={slug}>
                        <Link
                          href={getFieldServiceCompareUrlFromSlug(slug)}
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

        {/* How we compare section */}
        <section
          id="how-we-compare"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Consistent criteria so you can compare with confidence.">
              How We Compare Field Service Management Software
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Our field service comparisons use the same evaluation criteria across every head-to-head. We look at
              scheduling and dispatch, mobile app experience, estimates and invoicing, payments, customer management,
              reporting, and pricing—so you see how each platform really stacks up for contractors and service teams.
            </p>
            <ul className="mt-4 space-y-2 text-[#57534E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — How each tool handles calendars,
                dispatch boards, and routing for busy crews.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Mobile apps</strong> — Whether technicians can see jobs, capture
                photos and notes, and mark work complete from the field.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Invoicing and payments</strong> — How quickly you can turn jobs into
                estimates and invoices, collect payments, and sync with accounting.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Customer management</strong> — Quality of customer and property
                history, service agreements, and follow-up communication.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Pricing and value</strong> — Published vs custom pricing, per-user
                or per-job costs, and total value at typical crew sizes.
              </li>
            </ul>
            <p className="mt-5 text-[#57534E] text-sm leading-relaxed">
              For our full review process and affiliate disclosure, see our{" "}
              <Link
                href="/methodology"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                methodology page
              </Link>
              . For deeper guides on FSM tools, see our{" "}
              <Link
                href="/field-service/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                field service guides
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Field Service Management Software Comparisons (2026) | BeltStack",
  description:
    "Compare field service management software side by side. See matchups like Jobber vs Housecall Pro, Housecall Pro vs ServiceTitan, Jobber vs Workiz, ServiceTitan vs Service Fusion, and Kickserv vs Jobber.",
};

