import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsBestForHubScenarioCards } from "@/lib/data/seoToolsBestForPages";
import { getSeoToolsBestForUrl } from "@/lib/routes";

const LINKS = [
  {
    label: "Best SEO Tools (2026)",
    href: "/seo-tools/best-seo-tools",
    description:
      "Full roundup of suites, local platforms, and free essentials—with methodology, pricing realism, and Google Search Console as baseline.",
  },
  ...getSeoToolsBestForHubScenarioCards(),
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function SeoToolsBestForHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    SEO Tools
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best For
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best SEO Tools by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Editorial scenario guides for trades and local SMBs: we anchor on Google Search Console, honest GBP and listings execution, and when paid suites earn their keep—then link to reviews and comparisons so you can verify pricing and quotas on each vendor’s site. Includes appliance repair, garage door, automotive, event services, home inspectors, and more.
            </p>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Jump to a scenario.">Pick your situation</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h2 className="text-[#1A2D48] text-base font-bold group-hover:text-[#10B981]">{item.label}</h2>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed flex-1">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">Open →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#57534E]">
              <Link href={getSeoToolsBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
                Best for contractors
              </Link>{" "}
              ·{" "}
              <Link href="/seo-tools/compare" className="font-semibold text-[#10B981] hover:underline">
                All comparisons
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best SEO Tools by Use Case | BeltStack",
    description:
      "Editorial best-for guides for contractors, trades, property managers, movers, automotive, appliance repair, event services, home inspectors, local SEO, and more—GSC-first, Map Pack reality, independent picks. Open a scenario for stacks, FAQs, and links to reviews.",
    keywords: [
      "best SEO tools by industry",
      "SEO software for local business",
      "local SEO tools by trade",
      "Google Search Console SEO stack",
    ],
  };
}
