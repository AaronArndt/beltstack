import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getAccountingBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best accounting software overall",
    href: "/accounting/best-accounting-software",
    description: "Our full rankings of the best accounting software for small businesses, freelancers, and growing companies.",
  },
  {
    label: "Best accounting software for freelancers",
    href: getAccountingBestForUrl("freelancers"),
    description: "Simple bookkeeping and reporting for solo freelancers who need clean books and tax-ready records.",
  },
  {
    label: "Best accounting software for contractors",
    href: getAccountingBestForUrl("contractors"),
    description: "Accounting for contractors and trade businesses with job costing and reporting.",
  },
  {
    label: "Best accounting software for small business",
    href: getAccountingBestForUrl("small-business"),
    description: "Full bookkeeping, invoicing, and reporting for small teams without enterprise complexity.",
  },
  {
    label: "Best accounting software for ecommerce",
    href: getAccountingBestForUrl("ecommerce"),
    description: "Accounting that connects to sales channels, inventory, and multi-currency for online sellers.",
  },
  {
    label: "Best accounting software for agencies",
    href: getAccountingBestForUrl("agencies"),
    description: "Accounting across clients and projects with time tracking and client reporting.",
  },
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

export default function AccountingBestForPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
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
                    href="/accounting"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Accounting
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Accounting Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Find accounting software that fits your situation—freelancers, contractors, small business, ecommerce, and agencies.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a use case to see our top picks and guidance.">
              Accounting by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#57534E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More accounting resources.">
              Related links
            </SectionTitle>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/accounting" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Accounting hub
                </Link>
              </li>
              <li>
                <Link href="/accounting/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Compare accounting software
                </Link>
              </li>
              <li>
                <Link href="/accounting/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Accounting guides
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Accounting Software by Use Case | BeltStack",
    description:
      "Browse our best accounting software picks by use case: freelancers, contractors, small business, ecommerce, and agencies. Find the right accounting for your situation.",
  };
}
