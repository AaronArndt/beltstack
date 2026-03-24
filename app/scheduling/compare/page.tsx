import Link from "next/link";
import {
  getSchedulingCompareUrlFromSlug,
  getSchedulingComparisonBySlug,
  getSchedulingComparisonSlugs,
} from "@/lib/data/schedulingComparisons";
import { Footer } from "@/components/Footer";

const POPULAR_SLUGS = [
  "calendly-vs-acuity-scheduling",
  "calendly-vs-youcanbookme",
  "acuity-scheduling-vs-setmore",
  "simplybookme-vs-setmore",
  "square-appointments-vs-acuity-scheduling",
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
    const data = getSchedulingComparisonBySlug(slug);
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

  const order = ["calendly", "acuity-scheduling", "youcanbookme", "setmore", "simplybookme", "square-appointments"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function SchedulingCompareHubPage() {
  const allSlugs = getSchedulingComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getSchedulingComparisonBySlug(slug);
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
                    href="/scheduling"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Scheduling
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Compare Scheduling Software
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Side-by-side comparisons of popular scheduling tools for freelancers, consultants, service businesses,
              and teams.
            </p>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              For rankings across the whole category, see our{" "}
              <Link
                href="/scheduling/best-scheduling-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best scheduling software
              </Link>{" "}
              roundup. For guides on how scheduling tools work and how to choose, visit our{" "}
              <Link
                href="/scheduling/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                scheduling guides
              </Link>
              .
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
                const compareHref = getSchedulingCompareUrlFromSlug(slug);
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
                  <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  <ul className="mt-3 space-y-2">
                    {slugs.map(({ slug, label: linkLabel }) => (
                      <li key={slug}>
                        <Link
                          href={getSchedulingCompareUrlFromSlug(slug)}
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
              How We Compare Scheduling Software
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Our scheduling comparisons use the same evaluation criteria across every head-to-head. We look at calendar
              integrations, booking automation, customer notifications, team scheduling, reporting and integrations,
              and pricing—so you see how each platform really stacks up for freelancers, consultants, service
              businesses, and teams.
            </p>
            <ul className="mt-4 space-y-2 text-[#57534E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Calendar integrations</strong> — How each tool syncs with Google,
                Outlook, and other calendars so availability stays accurate.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Booking automation</strong> — Ease of setting up meeting types,
                buffer time, and booking links or embeds.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Customer notifications</strong> — Reminders, confirmations, and
                optional intake forms or follow-up flows.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Team scheduling</strong> — Round-robin, multi-staff, and
                multi-location support.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  •
                </span>
                <strong className="text-[#1A2D48]">Pricing and value</strong> — Free tiers, paid plans, and total
                cost at your expected volume and team size.
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
              . For deeper guides on scheduling tools, see our{" "}
              <Link
                href="/scheduling/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                scheduling guides
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
  title: "Scheduling Software Comparisons (2026) | BeltStack",
  description:
    "Compare scheduling software side by side. See matchups like Calendly vs Acuity Scheduling, Calendly vs YouCanBook.me, Acuity vs Setmore, SimplyBook.me vs Setmore, and Square Appointments vs Acuity.",
};
