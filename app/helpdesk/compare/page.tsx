import Link from "next/link";
import {
  getHelpdeskCompareUrlFromSlug,
  getHelpdeskComparison,
  getHelpdeskComparisonSlugs,
} from "@/lib/data/helpdeskComparisons";
import { Footer } from "@/components/Footer";

const POPULAR_SLUGS = [
  "zendesk-vs-freshdesk",
  "help-scout-vs-zendesk",
  "intercom-vs-zendesk",
  "freshdesk-vs-zoho-desk",
  "gorgias-vs-zendesk",
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
    const data = getHelpdeskComparison(slug);
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
  const order = ["zendesk", "freshdesk", "help-scout", "intercom", "zoho-desk", "gorgias"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function HelpdeskCompareHubPage() {
  const allSlugs = getHelpdeskComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getHelpdeskComparison(slug);
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
                  <Link href="/helpdesk" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Helpdesk
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Compare Helpdesk Software
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Compare the most popular helpdesk software platforms side-by-side.
            </p>
            <p className="mt-2 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Explore differences in pricing, ticketing features, automation, integrations, and support capabilities. For our full rankings see the{" "}
              <Link href="/helpdesk/best-helpdesk-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best helpdesk software
              </Link>{" "}
              roundup; for picks by use case see{" "}
              <Link href="/helpdesk/best-for" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best helpdesk software by use case
              </Link>.
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
                const compareHref = getHelpdeskCompareUrlFromSlug(slug);
                const summary = data.summaryParagraph.slice(0, 140).trim() + (data.summaryParagraph.length > 140 ? "…" : "");
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={data.productA.logoSrc ?? ""}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                      <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
                      <img
                        src={data.productB.logoSrc ?? ""}
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
                          href={getHelpdeskCompareUrlFromSlug(slug)}
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
              How We Compare Helpdesk Software
            </SectionTitle>
            <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
              Our helpdesk comparisons use the same evaluation criteria across every head-to-head. We look at ticket management and workflows, automation and routing, multi-channel support, integrations and ecosystem, and pricing and scalability—so you see how each platform really stacks up.
            </p>
            <ul className="mt-4 space-y-2 text-[#6E6E6E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Ticket management and workflows</strong> — Creating, assigning, and tracking tickets; statuses, priorities, and routing.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Automation and routing</strong> — Rules, macros, canned responses, and SLA policies.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Multi-channel support</strong> — Email, chat, social, and phone in a unified inbox.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Integrations and ecosystem</strong> — CRM, ecommerce, and third-party app support.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Pricing and scalability</strong> — Per-agent or per-user pricing, free tiers, and how cost scales.
              </li>
            </ul>
            <p className="mt-5 text-[#6E6E6E] text-sm leading-relaxed">
              For our full review process and affiliate disclosure, see our{" "}
              <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                methodology page
              </Link>
              . For guides on helpdesk software and how to choose, see our{" "}
              <Link href="/helpdesk/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                helpdesk guides
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
  title: "Compare Helpdesk Software (2026) | BeltStack",
  description:
    "Side-by-side comparisons of the most popular helpdesk tools: Zendesk, Freshdesk, Help Scout, Intercom, Zoho Desk, Gorgias, and more for support teams.",
};
