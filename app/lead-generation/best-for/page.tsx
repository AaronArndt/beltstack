import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationBestForUrl } from "@/lib/routes";
import { BEST_FOR_BY_TRADE } from "@/lib/data/leadGenerationBestLeadGenerationTools";

const LINKS = [
  {
    label: "Best lead generation tools overall",
    href: "/lead-generation/best-lead-generation-tools",
    description: "Full rankings of marketplaces, Google LSA, and complementary channels.",
  },
  ...BEST_FOR_BY_TRADE.map((item) => ({
    label: item.label,
    href: item.href,
    description: `Lead channels and evaluation tips for ${item.label.toLowerCase()}.`,
  })),
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

export default function LeadGenerationBestForHubPage() {
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
                  <Link href="/lead-generation" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Lead Generation
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best For
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Lead Generation Tools by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Scenario-based picks for contractors and home services: economics, speed-to-lead, and channel fit.
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
                  <h2 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{item.label}</h2>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed flex-1">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">Open →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#57534E]">
              <Link href={getLeadGenerationBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
                Best for contractors
              </Link>{" "}
               ·{" "}
              <Link href="/lead-generation/compare" className="font-semibold text-[#10B981] hover:underline">
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
    title: "Best Lead Generation Tools by Use Case | BeltStack",
    description: "Find lead generation tools for contractors, HVAC, plumbing, home services, and more.",
  };
}
