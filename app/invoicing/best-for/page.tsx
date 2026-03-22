import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getInvoicingBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best invoicing software overall",
    href: "/invoicing/best-invoicing-software",
    description: "Our full rankings of the best invoicing software for freelancers, small businesses, and teams.",
  },
  {
    label: "Best invoicing software for freelancers",
    href: getInvoicingBestForUrl("freelancers"),
    description: "Simple invoicing and time tracking for solo freelancers who bill by project or hour.",
  },
  {
    label: "Best invoicing software for small business",
    href: getInvoicingBestForUrl("small-business"),
    description: "Invoicing that scales with your team—recurring billing, payments, and reporting.",
  },
  {
    label: "Best invoicing software for agencies",
    href: getInvoicingBestForUrl("agencies"),
    description: "Invoicing across clients and projects, with retainer and time-based billing.",
  },
  {
    label: "Best invoicing software for contractors",
    href: getInvoicingBestForUrl("contractors"),
    description: "Invoicing for contractors and trade businesses with estimates and progress billing.",
  },
  {
    label: "Best invoicing software for consultants",
    href: getInvoicingBestForUrl("consultants"),
    description: "Invoicing for consultants with retainers, expenses, and client reporting.",
  },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function InvoicingBestForPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
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
                    href="/invoicing"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Invoicing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Invoicing Software by Use Case
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              Find invoicing software that fits your situation—freelancers, small business, agencies, contractors, and consultants.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a use case to see our top picks and guidance.">
              Invoicing by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More invoicing resources.">
              Related links
            </SectionTitle>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/invoicing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Invoicing hub
                </Link>
              </li>
              <li>
                <Link href="/invoicing/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Compare invoicing software
                </Link>
              </li>
              <li>
                <Link href="/invoicing/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Invoicing guides
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
    title: "Best Invoicing Software by Use Case | BeltStack",
    description:
      "Browse our best invoicing software picks by use case: freelancers, small business, agencies, contractors, and consultants. Find the right invoicing for your situation.",
  };
}
